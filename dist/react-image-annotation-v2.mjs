import e, { useCallback as t, useEffect as n, useMemo as r, useRef as i, useState as a } from "react";
import o, { keyframes as s } from "styled-components";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/utils/offsetCoordinates.ts
var d = (e, t) => {
	let n = t || e.currentTarget;
	if (!n || typeof n.getBoundingClientRect != "function") return {
		x: 0,
		y: 0
	};
	let r = n.getBoundingClientRect(), i = e.clientX - r.x, a = e.clientY - r.y;
	return {
		x: i / r.width * 100,
		y: a / r.height * 100
	};
}, f = (e, t, n) => Math.max(e, Math.min(t, n)), p = (e) => {
	if (!e.currentTarget || typeof e.currentTarget.getBoundingClientRect != "function") return {
		x: 0,
		y: 0
	};
	let t = e.targetTouches[0], n = e.currentTarget.getBoundingClientRect(), r = t.pageX - n.left, i = t.pageY - (n.top + window.scrollY);
	return {
		x: f(0, 100, r / n.width * 100),
		y: f(0, 100, i / n.height * 100)
	};
}, m = (e, t) => h(e) ? g(e) ? (_(e) && e.preventDefault(), p(e)) : { x: null } : d(e, t), h = (e) => e.targetTouches !== void 0, g = (e) => e.targetTouches.length === 1, _ = (e) => e.type === "touchmove";
//#endregion
//#region src/hooks/useRelativeMousePosition.ts
function v(e, r = {}) {
	let { onPositionChange: o, throttleMs: s = 16 } = r, c = i({
		x: null,
		y: null
	}), [l, u] = a({
		x: null,
		y: null
	}), f = i(0), p = i(null), m = t((e) => {
		if (c.current = e, o) {
			let t = Date.now();
			s <= 0 || t - f.current >= s ? (u(e), o(e), f.current = t) : (p.current && clearTimeout(p.current), p.current = setTimeout(() => {
				u(e), o(e), f.current = Date.now();
			}, s - (t - f.current)));
		}
	}, [o, s]), h = t((t) => {
		try {
			let n = e.current;
			if (!n) {
				m({
					x: null,
					y: null
				});
				return;
			}
			m(d(t, n));
		} catch {
			m({
				x: null,
				y: null
			});
		}
	}, [e, m]), g = t((t) => {
		let n = e.current;
		if (!n || t.targetTouches.length !== 1) return;
		let r = t.targetTouches[0], i = n.offsetParent;
		if (i) try {
			let e = r.pageX - i.offsetLeft, t = r.pageY - i.offsetTop, a = n, o = a.width, s = a.height;
			m(o > 0 && s > 0 ? {
				x: e / o * 100,
				y: t / s * 100
			} : {
				x: null,
				y: null
			});
		} catch {
			m({
				x: null,
				y: null
			});
		}
	}, [e, m]), _ = t((e) => {
		m({
			x: null,
			y: null
		});
	}, [m]), v = t((e) => {
		m({
			x: null,
			y: null
		});
	}, [m]), y = t(() => c.current, []);
	return n(() => () => {
		p.current && clearTimeout(p.current);
	}, []), {
		mousePosition: o ? l : c.current,
		handlers: {
			onMouseMove: h,
			onMouseLeave: _,
			onTouchMove: g,
			onTouchLeave: v
		},
		getCurrentMousePosition: y
	};
}
//#endregion
//#region src/hooks/useAnnotationHitDetection.ts
function y({ annotations: e, selectors: n, imageRef: i, enableEditing: a }) {
	let o = r(() => new Map(n.map((e) => [e.TYPE, e])), [n]), s = t((e) => {
		if (e) return o.get(e);
	}, [o]);
	return {
		getTopAnnotationAt: t((t, n) => {
			let r = i.current;
			if (!r || t === null || n === null) return;
			let o = {
				x: t,
				y: n
			}, c = e.map((e) => {
				let { geometry: t } = e;
				if (!t) return null;
				let n = s(t.type);
				if (!n) return null;
				let i = t;
				return a && t.type === "RECTANGLE" && typeof t.x == "number" && typeof t.y == "number" && typeof t.width == "number" && typeof t.height == "number" && (i = {
					...t,
					x: Math.max(0, t.x - 2),
					y: Math.max(0, t.y - 2),
					width: Math.min(100 - t.x + 2, t.width + 4),
					height: Math.min(100 - t.y + 2, t.height + 4)
				}), n.intersects(o, i, r) ? e : null;
			}).filter((e) => e !== null);
			if (c.length !== 0) return c.sort((e, t) => {
				let n = s(e.geometry.type), i = s(t.geometry.type);
				return !n || !i ? 0 : n.area(e.geometry, r) - i.area(t.geometry, r);
			})[0];
		}, [
			e,
			s,
			i,
			a
		]),
		getSelectorByType: s
	};
}
//#endregion
//#region src/hooks/useHoveredAnnotation.ts
function ee({ targetRef: e, imageRef: o, annotations: s, selectors: c, enableEditing: l, throttleMs: u = 50 }) {
	let [d, f] = a(void 0), p = i(void 0), m = i(void 0), { getTopAnnotationAt: h } = y({
		annotations: s,
		selectors: c,
		imageRef: o,
		enableEditing: l
	}), { handlers: g } = v(e, {
		onPositionChange: t((e) => {
			let { x: t, y: n } = e, r = h(t, n), i = r?.data?.id;
			i !== m.current && (m.current = i, p.current = r, f(r));
		}, [h]),
		throttleMs: u
	});
	return n(() => {
		f(void 0), p.current = void 0, m.current = void 0;
	}, [s, c]), {
		hoveredAnnotation: d,
		mouseHandlers: r(() => g, [g])
	};
}
//#endregion
//#region src/hooks/useSelectorMethods.ts
function b({ selectors: e, effectiveType: n, value: r, onChange: i, disableAnnotation: a }) {
	let o = t((t) => {
		if (t) return e.find((e) => e.TYPE === t);
	}, [e]);
	return {
		callSelectorMethod: t((e, t) => {
			if (a) return;
			let s = o(n);
			if (!s?.methods[e]) return;
			let c = s.methods[e];
			try {
				let a = c(r || {}, t);
				if (a === void 0) {
					process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(e)} of type ${n} returned undefined. Make sure to explicitly return the previous state or new state.`);
					return;
				}
				i?.(a);
			} catch (t) {
				process.env.NODE_ENV !== "production" && console.error(`Error calling selector method ${String(e)}:`, t);
			}
		}, [
			a,
			o,
			n,
			r,
			i
		]),
		getSelectorByType: o
	};
}
//#endregion
//#region src/hooks/useAnnotationViewModel.ts
function x(e, t) {
	e && (typeof e == "function" ? e(t) : e.current = t);
}
function S(e, r) {
	let { src: a, alt: o = "Annotation Image", style: s, className: c, containerRef: l, imageRef: u, annotations: d, type: f, selectors: p, value: m, onChange: h, onSubmit: g, activeAnnotationComparator: _, activeAnnotations: v, editModeAnnotationIds: y, disableAnnotation: S, disableSelector: C, disableEditor: w, disableOverlay: T, allowTouch: E, renderSelector: D, renderEditor: O, renderHighlight: k, renderContent: A, renderOverlay: j, onImageMouseUp: M, onImageMouseDown: N, onImageMouseMove: P, onImageClick: te } = e, F = i(null), I = i(null), { hoveredAnnotation: ne, mouseHandlers: L } = ee({
		targetRef: I,
		imageRef: F,
		annotations: d,
		selectors: p,
		enableEditing: !w,
		throttleMs: 50
	}), R = f || p[0]?.TYPE, { callSelectorMethod: z } = b({
		selectors: p,
		effectiveType: R,
		value: m,
		onChange: h,
		disableAnnotation: S
	}), re = t((e) => {
		navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && E && e.preventDefault(), z("onTouchStart", e);
	}, [E, z]), B = t((e) => {
		z("onTouchEnd", e);
	}, [z]), V = t((e) => {
		L.onTouchMove(e), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && E && e.preventDefault(), z("onTouchMove", e);
	}, [
		L,
		E,
		z
	]), H = t((e) => {
		L.onTouchLeave(e);
	}, [L]);
	n(() => {
		let e = I.current;
		if (!(!E || !e)) return e.ontouchstart = re, e.ontouchend = B, e.ontouchmove = V, e.ontouchcancel = H, () => {
			e.ontouchstart = null, e.ontouchend = null, e.ontouchmove = null, e.ontouchcancel = null;
		};
	}, [
		E,
		re,
		B,
		V,
		H
	]);
	let ie = t((e) => {
		F.current = e, x(r, e), x(u, e);
	}, [r, u]), ae = t((e) => {
		I.current = e;
	}, []), U = t((e) => {
		x(l, e);
	}, [l]), W = t((e) => {
		L.onMouseMove(e.nativeEvent), P?.(e), z("onMouseMove", e);
	}, [
		L,
		P,
		z
	]), G = t((e) => {
		L.onMouseLeave(e.nativeEvent);
	}, [L]), K = t((e) => {
		M?.(e), z("onMouseUp", e);
	}, [M, z]), q = t((e) => {
		N?.(e), z("onMouseDown", e);
	}, [N, z]), oe = t((e) => {
		te?.(e), z("onClick", e);
	}, [te, z]), J = t(() => {
		g && m && g(m);
	}, [g, m]), Y = t((e) => {
		e.key === "Escape" && h && (m?.selection?.showEditor || m?.geometry) && h({
			selection: void 0,
			geometry: void 0,
			data: void 0
		});
	}, [m, h]);
	n(() => {
		if (m?.selection?.showEditor) return window.addEventListener("keydown", Y), () => window.removeEventListener("keydown", Y);
	}, [m?.selection?.showEditor, Y]);
	let se = ne;
	return {
		setContainerRef: U,
		style: s,
		className: c,
		onContainerMouseLeave: G,
		onContainerTouchCancel: H,
		onContainerMouseMove: W,
		allowTouch: E,
		setImageRef: ie,
		src: a,
		alt: o,
		annotations: d,
		shouldAnnotationBeActive: t((e, t) => v && v.some((t) => _ ? _(e, t) : e.data.id === t) || t === e, [v, _]),
		topAnnotationAtMouse: se,
		disableSelector: !!C,
		value: m,
		setTargetRef: ae,
		onInteractionTargetClick: oe,
		onInteractionTargetMouseUp: K,
		onInteractionTargetMouseDown: q,
		disableOverlay: !!T,
		effectiveType: R,
		editModeAnnotationIds: y,
		disableEditor: !!w,
		onChange: h,
		onEditorSubmit: J,
		renderSlots: {
			renderHighlight: k,
			renderSelector: D,
			renderOverlay: j,
			renderContent: A,
			renderEditor: O
		}
	};
}
//#endregion
//#region src/components/Point/index.tsx
var C = o.div`
  border: solid 3px white;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow:
    0 0 0 1px rgba(0,0,0,0.3),
    0 0 0 2px rgba(0,0,0,0.2),
    0 5px 4px rgba(0,0,0,0.4);
  height: 16px;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  width: 16px;
`;
function w(e) {
	let { geometry: t } = e.annotation;
	return t ? /* @__PURE__ */ l(C, { style: {
		top: `${t.y}%`,
		left: `${t.x}%`
	} }) : null;
}
//#endregion
//#region src/components/TextEditor/index.tsx
var T = o.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, E = o.div`
  background: whitesmoke;
  border: 0;
  box-sizing: border-box;
  color: #363636;
  cursor: pointer;
  font-size: 1rem;
  margin: 0;
  outline: 0;
  padding: 8px 16px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(0,0,0,0.1);
  width: 100%;

  transition: background 0.21s ease-in-out;

  &:focus, &:hover {
    background: #eeeeee;
  }
`, D = ({ onChange: t, onSubmit: n, onFocus: r, onBlur: i, value: a }) => {
	let o = e.useRef(null);
	return e.useEffect(() => {
		o.current?.focus({ preventScroll: !0 });
	}, []), /* @__PURE__ */ u(e.Fragment, { children: [/* @__PURE__ */ l(T, { children: /* @__PURE__ */ l("textarea", {
		ref: o,
		placeholder: "Write description",
		onFocus: r,
		onBlur: i,
		onChange: t,
		value: a
	}) }), a && /* @__PURE__ */ l(E, {
		onClick: n,
		children: "Save description"
	})] });
}, O = {}, k = {}, A = s`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, j = 16, M = o.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transform-origin: ${({ $placement: e }) => e === "above" ? "bottom left" : "top left"};

  animation: ${A} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, N = ({ annotation: t, onChange: n, onSubmit: r, className: i = "", style: a = O }) => {
	let { geometry: o } = t, s = e.useRef(null), [c, u] = e.useState("below");
	if (e.useLayoutEffect(() => {
		let e = s.current, t = e?.parentElement;
		if (!e || !t || !o) return;
		let n = t.getBoundingClientRect(), r = e.offsetHeight;
		u(((o.y ?? 0) + (o.height ?? 0)) / 100 * n.height + j + r > n.height ? "above" : "below");
	}, [o, t.data?.text]), !o) return null;
	let d = c === "above" ? { bottom: `calc(${100 - (o.y ?? 0)}% + ${j}px)` } : { top: `calc(${(o.y ?? 0) + (o.height ?? 0)}% + ${j}px)` };
	return /* @__PURE__ */ l(M, {
		ref: s,
		className: i,
		$placement: c,
		style: {
			position: "absolute",
			left: `${o.x ?? 0}%`,
			...d,
			...a
		},
		children: /* @__PURE__ */ l(D, {
			onChange: (e) => n({
				...t,
				data: {
					...t.data,
					text: e.target.value
				}
			}),
			onSubmit: r,
			value: t.data?.text
		})
	});
}, P = o.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, te = o.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function F({ annotation: e, className: t = "", style: n = O }) {
	let { geometry: r } = e;
	return r ? /* @__PURE__ */ u(te, {
		className: t,
		style: n,
		children: [
			/* @__PURE__ */ l(P, { style: {
				height: `${r.y}%`,
				width: "100%"
			} }),
			/* @__PURE__ */ l(P, { style: {
				top: `${r.y}%`,
				height: `${r.height}%`,
				width: `${r.x}%`
			} }),
			/* @__PURE__ */ l(P, { style: {
				top: `${r.y}%`,
				left: `${r.x + r.width}%`,
				height: `${r.height}%`,
				width: `${100 - (r.x + r.width)}%`
			} }),
			/* @__PURE__ */ l(P, { style: {
				top: `${r.y + r.height}%`,
				height: `${100 - (r.y + r.height)}%`,
				width: "100%"
			} })
		]
	}) : null;
}
//#endregion
//#region src/components/Rectangle/index.tsx
var I = o.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function ne({ annotation: e, className: t = "", style: n = O, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ l(I, {
		className: t,
		style: {
			position: "absolute",
			left: `${i.x}%`,
			top: `${i.y}%`,
			height: `${i.height}%`,
			width: `${i.width}%`,
			boxShadow: r ? "0 0 1px 1px yellow inset" : void 0,
			...n
		}
	}) : null;
}
//#endregion
//#region src/components/Oval/index.tsx
var L = o.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function R({ annotation: e, className: t = "", style: n = O, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ l(L, {
		className: t,
		style: {
			position: "absolute",
			left: `${i.x}%`,
			top: `${i.y}%`,
			height: `${i.height}%`,
			width: `${i.width}%`,
			boxShadow: r ? "0 0 1px 1px yellow inset" : void 0,
			...n
		}
	}) : null;
}
//#endregion
//#region src/components/Content/index.tsx
var z = o.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;
function re({ annotation: e, style: t = O, className: n = "" }) {
	let { geometry: r } = e;
	return !r || r.x === void 0 || r.y === void 0 || r.width === void 0 || r.height === void 0 ? null : /* @__PURE__ */ l(z, {
		style: {
			position: "absolute",
			left: `${r.x}%`,
			top: `${r.y + r.height}%`,
			...t
		},
		className: n,
		children: e.data && e.data.text
	});
}
//#endregion
//#region src/components/Overlay/index.tsx
var B = o.div`
  background: rgba(0, 0, 0, .4);
  border-radius: 5px;
  bottom: 4px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  opacity: 0;
  padding: 10px;
  pointer-events: none;
  position: absolute;
  right: 4px;
  transition: opacity 0.21s ease-in-out;
  user-select: none;
`, V = "RECTANGLE";
function H({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let i = Math.min(n.x, n.x + n.width), a = Math.max(n.x, n.x + n.width), o = Math.min(n.y, n.y + n.height), s = Math.max(n.y, n.y + n.height);
	return !(e < i || t < o || e > a || t > s);
}
function ie(e, t) {
	return !e || e.width <= 0 || e.height <= 0 ? 0 : Math.abs(e.width) * Math.abs(e.height);
}
var ae = {
	onTouchStart(e, t) {
		return U(e, t);
	},
	onTouchEnd(e, t) {
		return W(e, t);
	},
	onTouchMove(e, t) {
		return G(e, t);
	},
	onMouseDown(e, t) {
		return U(e, t);
	},
	onMouseUp(e, t) {
		return W(e, t);
	},
	onMouseMove(e, t) {
		return G(e, t);
	}
};
function U(e, t) {
	if (e.selection) return {};
	{
		let { x: n, y: r } = m(t);
		return {
			...e,
			selection: {
				...e.selection,
				mode: "SELECTING",
				anchorX: n,
				anchorY: r
			}
		};
	}
}
function W(e, t) {
	if (e.selection) {
		let { selection: t, geometry: n } = e;
		if (!n) return {};
		switch (e.selection.mode) {
			case "SELECTING": return {
				...e,
				selection: {
					...e.selection,
					showEditor: !0,
					mode: "EDITING"
				}
			};
			default: break;
		}
	}
	return e;
}
function G(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = m(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: V,
				x: o > 0 ? n : i,
				y: s > 0 ? r : a,
				width: Math.abs(o),
				height: Math.abs(s)
			}
		};
	}
	return e;
}
var K = {
	TYPE: V,
	intersects: H,
	area: ie,
	methods: ae
}, q = 6, oe = (e = {
	width: 100,
	height: 100
}) => ({
	marginX: q / e.width * 100,
	marginY: q / e.height * 100
}), J = "POINT";
function Y({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let { marginX: i, marginY: a } = oe(r), o = Math.min(i, a) / 2, s = Math.abs(e - n.x), c = Math.abs(t - n.y);
	return s <= o && c <= o;
}
function se(e, t) {
	return 0;
}
var X = {
	TYPE: J,
	intersects: Y,
	area: se,
	methods: { onClick(e, t) {
		return e.geometry ? {} : {
			...e,
			selection: {
				...e.selection,
				showEditor: !0,
				mode: "EDITING"
			},
			geometry: {
				...e.geometry,
				...m(t),
				width: 0,
				height: 0,
				type: J
			}
		};
	} }
}, Z = (e) => e ** 2, ce = "OVAL";
function le({ x: e, y: t }, n, r) {
	if (!n || !n.width || !n.height) return !1;
	let i = Math.abs(n.width), a = Math.abs(n.height), o = {
		x: n.x + i / 2,
		y: n.y + a / 2
	}, s = i / 2, c = a / 2;
	if (s === 0 || c === 0) return !1;
	let l = e - o.x, u = t - o.y;
	return Z(l) / Z(s) + Z(u) / Z(c) <= 1;
}
function ue(e, t) {
	if (!e || e.width <= 0 || e.height <= 0) return 0;
	let n = Math.abs(e.width), r = Math.abs(e.height);
	return n / 2 * Math.PI * (r / 2);
}
var de = {
	onTouchStart(e, t) {
		return fe(e, t);
	},
	onTouchEnd(e, t) {
		return pe(e, t);
	},
	onTouchMove(e, t) {
		return me(e, t);
	},
	onMouseDown(e, t) {
		if (!e.geometry) {
			let { x: n, y: r } = m(t);
			return {
				...e,
				selection: {
					...e.selection,
					mode: "SELECTING",
					anchorX: n,
					anchorY: r
				}
			};
		}
		return e;
	},
	onMouseUp(e, t) {
		if (e.selection && e.selection.mode === "SELECTING") return {
			...e,
			selection: {
				...e.selection,
				showEditor: !0,
				mode: "EDITING"
			}
		};
	},
	onMouseMove(e, t) {
		if (e.selection && e.selection.mode === "SELECTING") {
			let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = m(t);
			return {
				...e,
				geometry: {
					...e.geometry,
					type: ce,
					x: Math.min(n, i),
					y: Math.min(r, a),
					width: Math.abs(i - n),
					height: Math.abs(a - r)
				}
			};
		}
		return e;
	}
};
function fe(e, t) {
	if (e.selection) return {};
	{
		let { x: n, y: r } = m(t);
		return {
			...e,
			selection: {
				...e.selection,
				mode: "SELECTING",
				anchorX: n,
				anchorY: r
			}
		};
	}
	return e;
}
function pe(e, t) {
	if (e.selection) {
		let { selection: t, geometry: n } = e;
		if (!n) return {};
		switch (e.selection.mode) {
			case "SELECTING": return {
				...e,
				selection: {
					...e.selection,
					showEditor: !0,
					mode: "EDITING"
				}
			};
			default: break;
		}
	}
	return e;
}
function me(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = m(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: ce,
				x: o > 0 ? n : i,
				y: s > 0 ? r : a,
				width: Math.abs(o),
				height: Math.abs(s)
			}
		};
	}
	return e;
}
var Q = {
	TYPE: ce,
	intersects: le,
	area: ue,
	methods: de
}, $ = {
	disableAnnotation: !1,
	disableSelector: !1,
	disableEditor: !1,
	disableOverlay: !1,
	allowTouch: !1,
	type: K.TYPE,
	selectors: [
		K,
		X,
		Q
	],
	activeAnnotationComparator: (e, t) => e === t,
	enableEditing: !1,
	onAnnotationsChange: () => {
		process.env.NODE_ENV !== "production" && console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.");
	},
	renderSelector: ({ annotation: e }) => {
		switch (e.geometry?.type) {
			case K.TYPE: return /* @__PURE__ */ l(F, { annotation: e });
			case X.TYPE: return /* @__PURE__ */ l(w, { annotation: e });
			case Q.TYPE: return /* @__PURE__ */ l(R, { annotation: e });
			default: return null;
		}
	},
	renderEditor: ({ annotation: e, onChange: t, onSubmit: n }) => /* @__PURE__ */ l(N, {
		annotation: e,
		onChange: t,
		onSubmit: n
	}),
	renderHighlight: ({ key: e, annotation: t, active: n }) => {
		switch (t.geometry.type) {
			case K.TYPE: return /* @__PURE__ */ l(ne, {
				annotation: t,
				active: n
			}, e);
			case X.TYPE: return /* @__PURE__ */ l(w, { annotation: t }, e);
			case Q.TYPE: return /* @__PURE__ */ l(R, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	},
	renderContent: ({ key: e, annotation: t }) => /* @__PURE__ */ l(re, { annotation: t }, e),
	renderOverlay: ({ type: e, annotation: t } = k) => {
		switch (e) {
			case X.TYPE: return /* @__PURE__ */ l(B, { children: "Click to Annotate" });
			default: return /* @__PURE__ */ l(B, { children: "Click and Drag to Annotate" });
		}
	}
}, he = o.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${B} {
    opacity: 1;
  }

  touch-action: ${(e) => e.$allowTouch ? "pinch-zoom" : "auto"};
`, ge = o.img`
  display: block;
  width: 100%;
  user-select: none;
`, _e = o.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, ve = o.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function ye({ annotationId: e, annotation: t, active: n, renderHighlight: r }) {
	return /* @__PURE__ */ l(c, { children: r({
		key: e,
		annotation: t,
		active: n
	}) });
}
function be({ annotationId: e, annotation: t, renderContent: n }) {
	return /* @__PURE__ */ l(c, { children: n({
		key: e,
		annotation: t
	}) });
}
function xe({ setContainerRef: e, style: t, className: n, onContainerMouseLeave: r, onContainerTouchCancel: i, onContainerMouseMove: a, allowTouch: o, setImageRef: s, src: c, alt: d, annotations: f, renderSlots: p, shouldAnnotationBeActive: m, topAnnotationAtMouse: h, disableSelector: g, value: _, setTargetRef: v, onInteractionTargetClick: y, onInteractionTargetMouseUp: ee, onInteractionTargetMouseDown: b, disableOverlay: x, effectiveType: S, editModeAnnotationIds: C, disableEditor: w, onChange: T, onEditorSubmit: E, children: D }) {
	let { renderHighlight: O, renderSelector: k, renderOverlay: A, renderContent: j, renderEditor: M } = p;
	return /* @__PURE__ */ u(he, {
		ref: e,
		style: t,
		className: n,
		onMouseLeave: r,
		onTouchCancel: i,
		onMouseMove: a,
		$allowTouch: o,
		children: [
			/* @__PURE__ */ l(ge, {
				ref: s,
				src: c,
				alt: d
			}),
			/* @__PURE__ */ u(_e, { children: [f.map((e) => {
				let t = e.data?.id;
				if (!t) return null;
				let n = m(e, h);
				return O ? /* @__PURE__ */ l(ye, {
					annotationId: t,
					annotation: e,
					active: n,
					renderHighlight: O
				}, t) : null;
			}), !g && _?.geometry && k && k({ annotation: _ })] }),
			/* @__PURE__ */ l(ve, {
				ref: v,
				"data-testid": "annotation-target",
				onClick: y,
				onMouseUp: ee,
				onMouseDown: b
			}),
			!x && A && A({
				type: S,
				annotation: _
			}),
			f.map((e) => {
				let t = e.data?.id;
				if (!t) return null;
				let n = C?.includes(t) || !1;
				return (m(e, h) || n) && j != null ? /* @__PURE__ */ l(be, {
					annotationId: t,
					annotation: e,
					renderContent: j
				}, t) : null;
			}),
			!w && _?.selection?.showEditor && M && T && M({
				annotation: _,
				onChange: T,
				onSubmit: E
			}),
			D
		]
	});
}
//#endregion
//#region src/components/Annotation.tsx
function Se({ ref: e, ...t }) {
	let { children: n, ...i } = r(() => {
		let { renderSlots: e, ...n } = t;
		return {
			...$,
			...n,
			selectors: n.selectors ?? $.selectors,
			renderSelector: n.renderSelector ?? e?.renderSelector ?? $.renderSelector,
			renderEditor: n.renderEditor ?? e?.renderEditor ?? $.renderEditor,
			renderHighlight: n.renderHighlight ?? e?.renderHighlight ?? $.renderHighlight,
			renderContent: n.renderContent ?? e?.renderContent ?? $.renderContent,
			renderOverlay: n.renderOverlay ?? e?.renderOverlay ?? $.renderOverlay,
			renderDraggableHighlight: n.renderDraggableHighlight ?? e?.renderDraggableHighlight ?? $.renderDraggableHighlight
		};
	}, [t]);
	return /* @__PURE__ */ l(xe, {
		...S(i, e),
		children: n
	});
}
Se.displayName = "Annotation";
//#endregion
//#region src/hooks/useMouseHover.ts
function Ce(e, t) {
	if (!e || typeof e.getBoundingClientRect != "function") return !1;
	let { pageX: n, pageY: r } = t, { left: i, right: a, bottom: o, top: s } = e.getBoundingClientRect();
	return n > i && n < a && r > s && r < o;
}
function we() {
	let [e, r] = a(!1), o = i(null);
	return n(() => {
		let e = (e) => {
			let t = o.current;
			r(Ce(t, {
				pageX: e.pageX,
				pageY: e.pageY
			}));
		};
		return document.addEventListener("mousemove", e, { passive: !0 }), () => {
			document.removeEventListener("mousemove", e);
		};
	}, []), {
		isHoveringOver: e,
		setRef: t((e) => {
			o.current = e;
		}, [])
	};
}
//#endregion
//#region src/index.ts
var Te = Se;
//#endregion
export { Se as Annotation, Q as OvalSelector, X as PointSelector, K as RectangleSelector, Te as default, y as useAnnotationHitDetection, we as useMouseHover, v as useRelativeMousePosition, b as useSelectorMethods };
