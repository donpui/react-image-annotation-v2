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
function b({ targetRef: e, imageRef: o, annotations: s, selectors: c, enableEditing: l, throttleMs: u = 50 }) {
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
function x({ selectors: e, effectiveType: n, value: r, onChange: i, disableAnnotation: a }) {
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
//#region src/hooks/useDragging.ts
var S = 100;
function C(e) {
	let { x: t = 0, y: n = 0, width: r = 0, height: i = 0 } = e;
	return r = Math.max(r, 0), i = Math.max(i, 0), t = Math.min(t, S - r), n = Math.min(n, S - i), {
		...e,
		x: t,
		y: n,
		width: r,
		height: i
	};
}
function ee({ annotations: e, onAnnotationsChange: n, imageRef: r, previewMode: o = !1 }) {
	let [s, c] = a(!1), [l, u] = a(void 0), [d, f] = a(() => /* @__PURE__ */ new Map()), p = i(null), m = i(/* @__PURE__ */ new Map()), h = t(() => {
		let e = r.current;
		if (!e) return {
			width: 1,
			height: 1
		};
		let t = e.getBoundingClientRect();
		return {
			width: t.width,
			height: t.height
		};
	}, [r]), g = t((t, r) => {
		let i = C(r);
		if (o) {
			f((e) => {
				let n = new Map(e);
				return n.set(t, i), n;
			});
			return;
		}
		n?.(e.map((e) => e.data?.id === t ? {
			...e,
			geometry: i
		} : e));
	}, [
		o,
		n,
		e
	]), _ = t((e, t, n, r) => {
		let { width: i, height: a } = h(), o = e.clientX - r.x, s = e.clientY - r.y, c = { ...n };
		switch (t) {
			case "top":
				c.height = Math.min((n.height ?? 0) - s / a * S, (n.y ?? 0) + (n.height ?? 0)), c.y = Math.max((n.y ?? 0) + s / a * S, 0);
				break;
			case "right":
				c.width = Math.min((n.width ?? 0) + o / i * S, S - (n.x ?? 0));
				break;
			case "bottom":
				c.height = Math.min((n.height ?? 0) + s / a * S, S - (n.y ?? 0));
				break;
			case "left":
				c.width = Math.min((n.width ?? 0) - o / i * S, (n.x ?? 0) + (n.width ?? 0)), c.x = Math.max((n.x ?? 0) + o / i * S, 0);
				break;
			default: break;
		}
		return C(c);
	}, [h]), v = t((e, t) => {
		let { width: n, height: r } = h(), i = e.clientX - t.initialCursorPosition.x, a = e.clientY - t.initialCursorPosition.y, o = t.initialGeometry;
		return C({
			...o,
			x: Math.max(Math.min((o.x ?? 0) + i / n * S, S - (o.width ?? 0)), 0),
			y: Math.max(Math.min((o.y ?? 0) + a / r * S, S - (o.height ?? 0)), 0)
		});
	}, [h]), y = t((t, n) => {
		let r = e.find((e) => e.data?.id === t), i = d.get(t) ?? r?.geometry;
		i && (p.current = {
			annotationId: t,
			initialGeometry: { ...i },
			initialCursorPosition: n
		}, m.current.set(t, { ...i }), u(t), c(!0));
	}, [e, d]), b = t((e, t) => {
		y(e, t);
	}, [y]), x = t((e, t, n) => {
		let r = p.current;
		if (!r) return;
		let i = _(e, t, r.initialGeometry, r.initialCursorPosition);
		g(r.annotationId, i);
	}, [_, g]), ee = t((e, t) => {
		y(e, t);
	}, [y]), te = t((e, t) => {
		let n = p.current;
		if (!n) return;
		let r = v(e, n);
		g(n.annotationId, r);
	}, [v, g]), w = t(() => {
		c(!1), p.current = null;
	}, []);
	return {
		isDragging: s,
		draggingAnnotationId: l,
		hasPendingChanges: t((e) => d.has(e), [d]),
		onDotDragStart: b,
		onDotDrag: x,
		onMoveStart: ee,
		onMove: te,
		onDragEnd: w,
		handleConfirm: t((t) => {
			let r = d.get(t);
			r && n && n(e.map((e) => e.data?.id === t ? {
				...e,
				geometry: r
			} : e)), f((e) => {
				let n = new Map(e);
				return n.delete(t), n;
			}), m.current.delete(t), c(!1), u(void 0), p.current = null;
		}, [
			d,
			n,
			e
		]),
		handleReset: t((t) => {
			let r = p.current, i = m.current.get(t) ?? (r?.annotationId === t ? r.initialGeometry : e.find((e) => e.data?.id === t)?.geometry);
			i && n && n(e.map((e) => e.data?.id === t ? {
				...e,
				geometry: i
			} : e)), f((e) => {
				let n = new Map(e);
				return n.delete(t), n;
			}), m.current.delete(t), c(!1), u(void 0), p.current = null;
		}, [e, n]),
		getEffectiveAnnotation: t((e) => {
			let t = e.data?.id;
			if (t == null) return e;
			let n = d.get(t);
			return n ? {
				...e,
				geometry: n
			} : e;
		}, [d])
	};
}
function te(e) {
	let [r, o] = a(null), s = i(null), c = i(null), l = t(() => {
		c.current != null && (clearTimeout(c.current), c.current = null);
	}, []), u = t(() => {
		l(), c.current = setTimeout(() => {
			s.current ?? o(null), c.current = null;
		}, 300);
	}, [l]);
	return n(() => {
		let t = e?.data?.id;
		if (t != null) {
			l(), o(t);
			return;
		}
		s.current ?? u();
	}, [
		e,
		l,
		u
	]), n(() => () => l(), [l]), {
		pinnedControlsId: r,
		onDeleteControlMouseEnter: t((e) => {
			l(), s.current = e, o(e);
		}, [l]),
		onDeleteControlMouseLeave: t(() => {
			s.current = null, u();
		}, [u])
	};
}
//#endregion
//#region src/hooks/useAnnotationViewModel.ts
function w(e, t) {
	e && (typeof e == "function" ? e(t) : e.current = t);
}
function ne(e, a) {
	let { src: o, alt: s = "Annotation Image", style: c, className: l, containerRef: u, imageRef: d, annotations: f, type: p, selectors: m, value: h, onChange: g, onSubmit: _, activeAnnotationComparator: v, activeAnnotations: y, editModeAnnotationIds: S, disableAnnotation: C, disableSelector: ne, disableEditor: T, disableOverlay: E, disableHitTesting: re, allowTouch: D, enableEditing: O = !1, onAnnotationsChange: k, renderSelector: ie, renderEditor: ae, renderHighlight: A, renderDraggableHighlight: oe, renderContent: se, renderOverlay: j, enableRemoval: M, onRemoveAnnotation: N, canRemoveAnnotation: ce, renderDelete: P, onConfirm: F, onReset: I, onImageMouseUp: L, onImageMouseDown: R, onImageMouseMove: z, onImageClick: le, onImageLoad: ue, onImageError: B } = e, V = i(null), H = i(null), { hoveredAnnotation: U, mouseHandlers: W } = b({
		targetRef: H,
		imageRef: V,
		annotations: f,
		selectors: m,
		enableEditing: O,
		throttleMs: 50
	}), { isDragging: G, draggingAnnotationId: de, hasPendingChanges: fe, onDotDragStart: pe, onDotDrag: me, onMoveStart: he, onMove: ge, onDragEnd: K, handleConfirm: _e, handleReset: ve, getEffectiveAnnotation: ye } = ee({
		annotations: f,
		onAnnotationsChange: k,
		imageRef: V,
		previewMode: !!(F && I)
	}), be = r(() => ({
		onDotDragStart: pe,
		onDotDrag: me,
		onMoveStart: he,
		onMove: ge,
		onDragEnd: K
	}), [
		pe,
		me,
		he,
		ge,
		K
	]), xe = t((e) => {
		_e(e), F?.(e);
	}, [_e, F]), Se = t((e) => {
		ve(e), I?.(e);
	}, [ve, I]), Ce = p || m[0]?.TYPE, { callSelectorMethod: q } = x({
		selectors: m,
		effectiveType: Ce,
		value: h,
		onChange: g,
		disableAnnotation: C
	}), we = t((e) => {
		navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && e.preventDefault(), q("onTouchStart", e);
	}, [D, q]), Te = t((e) => {
		q("onTouchEnd", e);
	}, [q]), J = t((e) => {
		W.onTouchMove(e), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && e.preventDefault(), q("onTouchMove", e);
	}, [
		W,
		D,
		q
	]), Y = t((e) => {
		W.onTouchLeave(e);
	}, [W]);
	n(() => {
		let e = H.current;
		if (!(!D || !e)) return e.ontouchstart = we, e.ontouchend = Te, e.ontouchmove = J, e.ontouchcancel = Y, () => {
			e.ontouchstart = null, e.ontouchend = null, e.ontouchmove = null, e.ontouchcancel = null;
		};
	}, [
		D,
		we,
		Te,
		J,
		Y
	]);
	let Ee = t((e) => {
		V.current = e, w(a, e), w(d, e);
	}, [a, d]), De = t((e) => {
		H.current = e;
	}, []), Oe = t((e) => {
		w(u, e);
	}, [u]), ke = t((e) => {
		W.onMouseMove(e.nativeEvent), z?.(e), q("onMouseMove", e);
	}, [
		W,
		z,
		q
	]), X = t((e) => {
		W.onMouseLeave(e.nativeEvent);
	}, [W]), Z = t((e) => {
		L?.(e), q("onMouseUp", e);
	}, [L, q]), Ae = t((e) => {
		R?.(e), q("onMouseDown", e);
	}, [R, q]), je = t((e) => {
		le?.(e), q("onClick", e);
	}, [le, q]), Me = t(() => {
		_ && h && _(h);
	}, [_, h]), Ne = t((e) => {
		e.key === "Escape" && g && (h?.selection?.showEditor || h?.geometry) && g({
			selection: void 0,
			geometry: void 0,
			data: void 0
		});
	}, [h, g]);
	n(() => {
		if (h?.selection?.showEditor) return window.addEventListener("keydown", Ne), () => window.removeEventListener("keydown", Ne);
	}, [h?.selection?.showEditor, Ne]);
	let Pe = U, { pinnedControlsId: Fe, onDeleteControlMouseEnter: Ie, onDeleteControlMouseLeave: Q } = te(U), $ = t((e, t) => {
		let n = e.data?.id;
		return n != null && Fe != null && n === Fe ? !0 : y && y.some((t) => v ? v(e, t) : e.data.id === t) || t === e;
	}, [
		y,
		v,
		Fe
	]);
	return {
		setContainerRef: Oe,
		style: c,
		className: l,
		onContainerMouseLeave: X,
		onContainerTouchCancel: Y,
		onContainerMouseMove: ke,
		setImageRef: Ee,
		src: o,
		alt: s,
		annotations: f,
		layoutOptions: {
			touchEnabled: D,
			selectorDisabled: !!ne || O && G,
			overlayDisabled: !!E,
			editorDisabled: !!T || O && G,
			hitTestingDisabled: !!re || O && G,
			enableEditing: O
		},
		onImageLoad: ue,
		onImageError: B,
		annotationState: {
			getIsActive: $,
			topAnnotation: Pe,
			editModeIds: S,
			isDragging: G,
			draggingAnnotationId: de,
			hasPendingChanges: fe,
			getEffectiveAnnotation: O ? ye : void 0,
			draggingHandlers: O ? be : void 0,
			onConfirm: O ? xe : void 0,
			onReset: O ? Se : void 0,
			enableRemoval: M,
			onRemoveAnnotation: N,
			canRemoveAnnotation: ce,
			onDeleteControlMouseEnter: Ie,
			onDeleteControlMouseLeave: Q
		},
		value: h,
		setTargetRef: De,
		onInteractionTargetClick: je,
		onInteractionTargetMouseUp: Z,
		onInteractionTargetMouseDown: Ae,
		effectiveType: Ce,
		onChange: g,
		onEditorSubmit: Me,
		renderSlots: {
			renderHighlight: A,
			renderDraggableHighlight: oe,
			renderSelector: ie,
			renderOverlay: j,
			renderContent: se,
			renderEditor: ae,
			renderDelete: P
		}
	};
}
//#endregion
//#region src/components/Point/index.tsx
var T = o.div`
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
function E(e) {
	let { geometry: t } = e.annotation;
	return t ? /* @__PURE__ */ l(T, { style: {
		top: `${t.y}%`,
		left: `${t.x}%`
	} }) : null;
}
//#endregion
//#region src/components/TextEditor/index.tsx
var re = o.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, D = o.div`
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
`, O = ({ onChange: t, onSubmit: n, onFocus: r, onBlur: i, value: a }) => {
	let o = e.useRef(null);
	return e.useEffect(() => {
		o.current?.focus({ preventScroll: !0 });
	}, []), /* @__PURE__ */ u(e.Fragment, { children: [/* @__PURE__ */ l(re, { children: /* @__PURE__ */ l("textarea", {
		ref: o,
		placeholder: "Write description",
		onFocus: r,
		onBlur: i,
		onChange: t,
		value: a
	}) }), a && /* @__PURE__ */ l(D, {
		onClick: n,
		children: "Save description"
	})] });
}, k = {}, ie = {}, ae = s`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, A = 16, oe = o.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transform-origin: ${({ $placement: e }) => e === "above" ? "bottom left" : "top left"};

  animation: ${ae} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, se = ({ annotation: t, onChange: n, onSubmit: r, className: i = "", style: a = k }) => {
	let { geometry: o } = t, s = e.useRef(null), [c, u] = e.useState("below");
	if (e.useLayoutEffect(() => {
		let e = s.current, t = e?.parentElement;
		if (!e || !t || !o) return;
		let n = t.getBoundingClientRect(), r = e.offsetHeight;
		u(((o.y ?? 0) + (o.height ?? 0)) / 100 * n.height + A + r > n.height ? "above" : "below");
	}, [o, t.data?.text]), !o) return null;
	let d = c === "above" ? { bottom: `calc(${100 - (o.y ?? 0)}% + ${A}px)` } : { top: `calc(${(o.y ?? 0) + (o.height ?? 0)}% + ${A}px)` };
	return /* @__PURE__ */ l(oe, {
		ref: s,
		className: i,
		$placement: c,
		style: {
			position: "absolute",
			left: `${o.x ?? 0}%`,
			...d,
			...a
		},
		children: /* @__PURE__ */ l(O, {
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
}, j = o.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, M = o.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function N({ annotation: e, className: t = "", style: n = k }) {
	let { geometry: r } = e;
	return r ? /* @__PURE__ */ u(M, {
		className: t,
		style: n,
		children: [
			/* @__PURE__ */ l(j, { style: {
				height: `${r.y}%`,
				width: "100%"
			} }),
			/* @__PURE__ */ l(j, { style: {
				top: `${r.y}%`,
				height: `${r.height}%`,
				width: `${r.x}%`
			} }),
			/* @__PURE__ */ l(j, { style: {
				top: `${r.y}%`,
				left: `${r.x + r.width}%`,
				height: `${r.height}%`,
				width: `${100 - (r.x + r.width)}%`
			} }),
			/* @__PURE__ */ l(j, { style: {
				top: `${r.y + r.height}%`,
				height: `${100 - (r.y + r.height)}%`,
				width: "100%"
			} })
		]
	}) : null;
}
//#endregion
//#region src/components/Rectangle/index.tsx
var ce = o.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function P({ annotation: e, className: t = "", style: n = k, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ l(ce, {
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
var F = o.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function I({ annotation: e, className: t = "", style: n = k, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ l(F, {
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
var L = o.div`
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
function R({ annotation: e, style: t = k, className: n = "" }) {
	let { geometry: r } = e;
	return !r || r.x === void 0 || r.y === void 0 || r.width === void 0 || r.height === void 0 ? null : /* @__PURE__ */ l(L, {
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
var z = o.div`
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
`, le = () => /* @__PURE__ */ l("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": !0,
	children: /* @__PURE__ */ l("path", {
		d: "M12 3V9M12 3L9 6M12 3L15 6M12 15V21M12 21L15 18M12 21L9 18M3 12H9M3 12L6 15M3 12L6 9M15 12H21M21 12L18 9M21 12L18 15",
		stroke: "#ffffff",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), ue = 20, B = 44;
function V(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": !0,
		...e,
		children: /* @__PURE__ */ l("path", {
			d: "M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z",
			fill: "currentColor"
		})
	});
}
//#endregion
//#region src/components/DraggableComponents/DeleteButton.tsx
var H = o.button`
  border-radius: 10px;
  position: relative;
  border: none !important;
  box-shadow: 0 0 10px rgba(119, 127, 152, 0.2);
  z-index: 1;
  background-color: white;
  height: ${20}px;
  width: ${20}px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: auto;
  }

  opacity: ${(e) => e.$disabled ? .5 : 1};
  cursor: ${(e) => e.$disabled ? "not-allowed" : "pointer"};

  &:hover:not(:disabled) {
    background-color: lightgray;
    transform: scale(1.1);
  }
`, U = o(V)`
  width: 12px;
  height: 12px;
  color: #0f0f0f;
  flex-shrink: 0;
`, W = ({ annotationId: e, onRemove: t, disabled: n, className: r, style: i }) => /* @__PURE__ */ l(H, {
	type: "button",
	className: r,
	style: i,
	onClick: (r) => {
		r.stopPropagation(), !n && t(e);
	},
	disabled: n,
	"aria-label": "Remove annotation",
	$disabled: n,
	"data-testid": "annotation-delete-button",
	children: /* @__PURE__ */ l(U, {})
});
//#endregion
//#region src/components/DraggableComponents/deleteButtonPosition.ts
function G(e) {
	return !e || typeof e.x != "number" || typeof e.y != "number" || typeof e.width != "number" ? null : {
		left: `calc(${e.x}% + ${e.width}%)`,
		top: `calc(${e.y}%)`,
		transform: "translate(-50%, -50%)"
	};
}
var de = {
	position: "absolute",
	top: 0,
	right: 0,
	transform: "translate(50%, -50%)",
	width: 44,
	height: 44,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	pointerEvents: "auto",
	zIndex: 20
}, fe = o.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
  z-index: 20;
`, pe = o.button`
  width: 20px;
  height: 20px;
  background-color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(119, 127, 152, 0.2);
  font-size: 13px;
  font-weight: 600;
  pointer-events: auto;

  &:hover {
    background-color: lightgray;
  }
`, me = ({ onConfirm: e, onReset: t }) => /* @__PURE__ */ u(fe, {
	onMouseDown: (e) => e.stopPropagation(),
	children: [/* @__PURE__ */ l(pe, {
		type: "button",
		onClick: (t) => {
			t.stopPropagation(), e();
		},
		children: "✓"
	}), /* @__PURE__ */ l(pe, {
		type: "button",
		onClick: (e) => {
			e.stopPropagation(), t();
		},
		children: "✕"
	})]
}), he = o.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  z-index: 15;
  pointer-events: auto;

  ${(e) => {
	switch (e.$position) {
		case "top": return "\n          top: -5px;\n          left: 50%;\n          transform: translateX(-50%);\n        ";
		case "right": return "\n          right: -5px;\n          top: 50%;\n          transform: translateY(-50%);\n        ";
		case "bottom": return "\n          bottom: -5px;\n          left: 50%;\n          transform: translateX(-50%);\n        ";
		case "left": return "\n          left: -5px;\n          top: 50%;\n          transform: translateY(-50%);\n        ";
		default: return "";
	}
}}
`, ge = o.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  width: 20px;
  height: 20px;
  cursor: move;
  z-index: 15;
  pointer-events: auto;
`, K = ({ position: e, onDragStart: t, onDrag: n, onDragEnd: r, annotationId: i }) => /* @__PURE__ */ l(he, {
	$position: e,
	onMouseDown: (a) => {
		a.preventDefault(), a.stopPropagation();
		let o = {
			x: a.clientX,
			y: a.clientY
		};
		t(i, o);
		let s = (t) => {
			n(t, e, o);
		}, c = () => {
			document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", c), r?.();
		};
		document.addEventListener("mousemove", s), document.addEventListener("mouseup", c);
	},
	onClick: (e) => e.stopPropagation(),
	"data-type": "dot"
}), _e = ({ onMoveStart: e, onMove: t, onMoveEnd: n, annotationId: r }) => /* @__PURE__ */ l(ge, {
	onMouseDown: (i) => {
		i.preventDefault(), i.stopPropagation();
		let a = {
			x: i.clientX,
			y: i.clientY
		};
		e(r, a);
		let o = (e) => {
			t(e, a);
		}, s = () => {
			document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", s), n?.();
		};
		document.addEventListener("mousemove", o), document.addEventListener("mouseup", s);
	},
	onClick: (e) => e.stopPropagation(),
	"data-type": "move-button",
	children: /* @__PURE__ */ l(le, {})
}), ve = o.div`
  position: absolute;
  border: 1px dashed #ffffff;
  background: rgba(151, 151, 151, 0.3);
  border-radius: 3px;
  pointer-events: auto;
  z-index: 10;
  box-sizing: border-box;
`, ye = ({ annotation: e, isDragging: t, hasPendingChanges: r, onDotDragStart: a, onDotDrag: o, onMoveStart: s, onMove: c, onDragEnd: d, enableRemoval: f, onRemoveAnnotation: p, onConfirm: m, onReset: h, onDeleteControlMouseEnter: g, onDeleteControlMouseLeave: _ }) => {
	let { geometry: v } = e, y = e.data?.id, b = i(null), x = (t || r) && m && h;
	if (n(() => {
		if (t || r || !h || y == null) return;
		let e = (e) => {
			let t = b.current;
			if (!t) return;
			let n = t.getBoundingClientRect(), { clientX: r, clientY: i } = e;
			(r < n.left || r > n.right || i < n.top || i > n.bottom) && h(y);
		};
		return document.addEventListener("mousemove", e), () => {
			document.removeEventListener("mousemove", e);
		};
	}, [
		t,
		r,
		h,
		y
	]), !v || typeof v.x != "number" || typeof v.y != "number" || typeof v.width != "number" || typeof v.height != "number") return null;
	let S = String(y ?? "");
	return /* @__PURE__ */ u(ve, {
		ref: b,
		className: "rectangle-editor-box",
		style: {
			left: `${v.x}%`,
			top: `${v.y}%`,
			width: `${v.width}%`,
			height: `${v.height}%`
		},
		$isDragging: t,
		"data-annotation-draggable-box": !0,
		children: [
			/* @__PURE__ */ l(K, {
				position: "top",
				onDragStart: a,
				onDrag: o,
				onDragEnd: d,
				annotationId: S
			}),
			/* @__PURE__ */ l(K, {
				position: "right",
				onDragStart: a,
				onDrag: o,
				onDragEnd: d,
				annotationId: S
			}),
			/* @__PURE__ */ l(K, {
				position: "bottom",
				onDragStart: a,
				onDrag: o,
				onDragEnd: d,
				annotationId: S
			}),
			/* @__PURE__ */ l(K, {
				position: "left",
				onDragStart: a,
				onDrag: o,
				onDragEnd: d,
				annotationId: S
			}),
			/* @__PURE__ */ l(_e, {
				onMoveStart: s,
				onMove: c,
				onMoveEnd: d,
				annotationId: S
			}),
			f && p && y != null && /* @__PURE__ */ l("div", {
				style: de,
				onMouseEnter: () => g?.(y),
				onMouseLeave: () => _?.(),
				onPointerEnter: () => g?.(y),
				onPointerLeave: () => _?.(),
				children: /* @__PURE__ */ l(W, {
					annotationId: y,
					onRemove: p
				})
			}),
			x && /* @__PURE__ */ l(me, {
				onConfirm: () => m(y),
				onReset: () => h(y)
			})
		]
	});
}, be = "RECTANGLE";
function xe({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let i = Math.min(n.x, n.x + n.width), a = Math.max(n.x, n.x + n.width), o = Math.min(n.y, n.y + n.height), s = Math.max(n.y, n.y + n.height);
	return !(e < i || t < o || e > a || t > s);
}
function Se(e, t) {
	return !e || e.width <= 0 || e.height <= 0 ? 0 : Math.abs(e.width) * Math.abs(e.height);
}
var Ce = {
	onTouchStart(e, t) {
		return q(e, t);
	},
	onTouchEnd(e, t) {
		return we(e, t);
	},
	onTouchMove(e, t) {
		return Te(e, t);
	},
	onMouseDown(e, t) {
		return q(e, t);
	},
	onMouseUp(e, t) {
		return we(e, t);
	},
	onMouseMove(e, t) {
		return Te(e, t);
	}
};
function q(e, t) {
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
function we(e, t) {
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
function Te(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = m(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: be,
				x: o > 0 ? n : i,
				y: s > 0 ? r : a,
				width: Math.abs(o),
				height: Math.abs(s)
			}
		};
	}
	return e;
}
var J = {
	TYPE: be,
	intersects: xe,
	area: Se,
	methods: Ce
}, Y = 6, Ee = (e = {
	width: 100,
	height: 100
}) => ({
	marginX: Y / e.width * 100,
	marginY: Y / e.height * 100
}), De = "POINT";
function Oe({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let { marginX: i, marginY: a } = Ee(r), o = Math.min(i, a) / 2, s = Math.abs(e - n.x), c = Math.abs(t - n.y);
	return s <= o && c <= o;
}
function ke(e, t) {
	return 0;
}
var X = {
	TYPE: De,
	intersects: Oe,
	area: ke,
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
				type: De
			}
		};
	} }
}, Z = (e) => e ** 2, Ae = "OVAL";
function je({ x: e, y: t }, n, r) {
	if (!n || !n.width || !n.height) return !1;
	let i = Math.abs(n.width), a = Math.abs(n.height), o = {
		x: n.x + i / 2,
		y: n.y + a / 2
	}, s = i / 2, c = a / 2;
	if (s === 0 || c === 0) return !1;
	let l = e - o.x, u = t - o.y;
	return Z(l) / Z(s) + Z(u) / Z(c) <= 1;
}
function Me(e, t) {
	if (!e || e.width <= 0 || e.height <= 0) return 0;
	let n = Math.abs(e.width), r = Math.abs(e.height);
	return n / 2 * Math.PI * (r / 2);
}
var Ne = {
	onTouchStart(e, t) {
		return Pe(e, t);
	},
	onTouchEnd(e, t) {
		return Fe(e, t);
	},
	onTouchMove(e, t) {
		return Ie(e, t);
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
					type: Ae,
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
function Pe(e, t) {
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
function Fe(e, t) {
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
function Ie(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = m(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: Ae,
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
	TYPE: Ae,
	intersects: je,
	area: Me,
	methods: Ne
}, $ = {
	disableAnnotation: !1,
	disableSelector: !1,
	disableEditor: !1,
	disableOverlay: !1,
	disableHitTesting: !1,
	allowTouch: !1,
	type: J.TYPE,
	selectors: [
		J,
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
			case J.TYPE: return /* @__PURE__ */ l(N, { annotation: e });
			case X.TYPE: return /* @__PURE__ */ l(E, { annotation: e });
			case Q.TYPE: return /* @__PURE__ */ l(I, { annotation: e });
			default: return null;
		}
	},
	renderEditor: ({ annotation: e, onChange: t, onSubmit: n }) => /* @__PURE__ */ l(se, {
		annotation: e,
		onChange: t,
		onSubmit: n
	}),
	renderHighlight: ({ key: e, annotation: t, active: n }) => {
		switch (t.geometry.type) {
			case J.TYPE: return /* @__PURE__ */ l(P, {
				annotation: t,
				active: n
			}, e);
			case X.TYPE: return /* @__PURE__ */ l(E, { annotation: t }, e);
			case Q.TYPE: return /* @__PURE__ */ l(I, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	},
	renderContent: ({ key: e, annotation: t }) => /* @__PURE__ */ l(R, { annotation: t }, e),
	renderOverlay: ({ type: e, annotation: t } = ie) => {
		switch (e) {
			case X.TYPE: return /* @__PURE__ */ l(z, { children: "Click to Annotate" });
			default: return /* @__PURE__ */ l(z, { children: "Click and Drag to Annotate" });
		}
	},
	renderDraggableHighlight: ({ key: e, annotation: t, active: n, isHovered: r, isDragging: i, hasPendingChanges: a, onDotDragStart: o, onDotDrag: s, onMoveStart: c, onMove: u, onDragEnd: d, enableRemoval: f, onRemoveAnnotation: p, onConfirm: m, onReset: h, onDeleteControlMouseEnter: g, onDeleteControlMouseLeave: _ }) => {
		if (!r && !i && !a) switch (t.geometry.type) {
			case J.TYPE: return /* @__PURE__ */ l(P, {
				annotation: t,
				active: n
			}, e);
			case X.TYPE: return /* @__PURE__ */ l(E, { annotation: t }, e);
			case Q.TYPE: return /* @__PURE__ */ l(I, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
		if (t.geometry.type === J.TYPE) return /* @__PURE__ */ l(ye, {
			annotation: t,
			active: n,
			isHovered: r,
			isDragging: i,
			hasPendingChanges: a,
			onDotDragStart: o,
			onDotDrag: s,
			onMoveStart: c,
			onMove: u,
			onDragEnd: d,
			enableRemoval: f,
			onRemoveAnnotation: p,
			onConfirm: m,
			onReset: h,
			onDeleteControlMouseEnter: g,
			onDeleteControlMouseLeave: _
		}, e);
		switch (t.geometry.type) {
			case X.TYPE: return /* @__PURE__ */ l(E, { annotation: t }, e);
			case Q.TYPE: return /* @__PURE__ */ l(I, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	}
}, Le = o.div`
  position: absolute;
  pointer-events: auto;
  z-index: 10;
  width: ${44}px;
  height: ${44}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Re({ annotation: e, onRemove: n, renderDelete: r, disabled: i, onDeleteControlMouseEnter: o, onDeleteControlMouseLeave: s }) {
	let [c, u] = a(!1), d = e.data?.id, f = G(e.geometry), p = i || c, m = t(async () => {
		if (!(p || d == null)) {
			u(!0);
			try {
				await n(d);
			} finally {
				u(!1);
			}
		}
	}, [
		d,
		p,
		n
	]), h = t(() => {
		d != null && o?.(d);
	}, [d, o]), g = t(() => {
		s?.();
	}, [s]);
	if (!f || d == null) return null;
	let _ = {
		onMouseEnter: h,
		onMouseLeave: g,
		onPointerEnter: h,
		onPointerLeave: g
	};
	return r ? /* @__PURE__ */ l(Le, {
		style: f,
		..._,
		children: r({
			key: d,
			annotation: e,
			active: !0,
			onRemove: m,
			disabled: p
		})
	}) : /* @__PURE__ */ l(Le, {
		style: f,
		className: "annotation-delete",
		..._,
		children: /* @__PURE__ */ l(W, {
			annotationId: d,
			onRemove: m,
			disabled: p
		})
	});
}
//#endregion
//#region src/components/AnnotationLayout.tsx
var ze = o.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${z} {
    opacity: 1;
  }

  touch-action: ${(e) => e.$allowTouch ? "pinch-zoom" : "auto"};
`, Be = o.img`
  display: block;
  width: 100%;
  user-select: none;
`, Ve = o.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, He = o.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: ${(e) => e.$hitTestingDisabled ? "none" : "auto"};
`;
function Ue({ annotationId: e, annotation: t, active: n, slot: r }) {
	return /* @__PURE__ */ l(c, { children: r({
		key: e,
		annotation: t,
		active: n
	}) });
}
function We({ annotationId: e, annotation: t, slot: n }) {
	return /* @__PURE__ */ l(c, { children: n({
		key: e,
		annotation: t
	}) });
}
function Ge({ enableRemoval: e, onRemoveAnnotation: t, isActive: n, annotation: r, canRemoveAnnotation: i, enableEditing: a, draggableHighlightSlot: o, isHovered: s }) {
	return !e || !t || !n || i && !i(r) ? !1 : !(a && o && s && r.geometry?.type === J.TYPE);
}
function Ke({ setContainerRef: t, style: n, className: r, onContainerMouseLeave: i, onContainerTouchCancel: a, onContainerMouseMove: o, setImageRef: s, src: c, alt: d, annotations: f, renderSlots: p, layoutOptions: m, annotationState: h, value: g, setTargetRef: _, onInteractionTargetClick: v, onInteractionTargetMouseUp: y, onInteractionTargetMouseDown: b, effectiveType: x, onChange: S, onEditorSubmit: C, onImageLoad: ee, onImageError: te, children: w }) {
	let { renderHighlight: ne, renderDraggableHighlight: T, renderSelector: E, renderOverlay: re, renderContent: D, renderEditor: O, renderDelete: k } = p, { touchEnabled: ie, selectorDisabled: ae, overlayDisabled: A, editorDisabled: oe, hitTestingDisabled: se, enableEditing: j } = m, { getIsActive: M, topAnnotation: N, editModeIds: ce, isDragging: P, draggingAnnotationId: F, hasPendingChanges: I, getEffectiveAnnotation: L, draggingHandlers: R, onConfirm: z, onReset: le, enableRemoval: ue, onRemoveAnnotation: B, canRemoveAnnotation: V, onDeleteControlMouseEnter: H, onDeleteControlMouseLeave: U } = h;
	return /* @__PURE__ */ u(ze, {
		ref: t,
		style: n,
		className: r,
		onMouseLeave: i,
		onTouchCancel: a,
		onMouseMove: o,
		$allowTouch: ie,
		children: [
			/* @__PURE__ */ l(Be, {
				ref: s,
				src: c,
				alt: d,
				onLoad: ee,
				onError: te
			}),
			/* @__PURE__ */ u(Ve, { children: [f.map((e) => {
				let t = e.data?.id;
				if (!t) return null;
				let n = M(e, N), r = N?.data?.id === t, i = P && F === t, a = !!I?.(t), o = L ? L(e) : e, s = j && T && R && (r || i || a) ? (e) => T({
					...e,
					annotation: o,
					isHovered: r,
					isDragging: !!i,
					hasPendingChanges: a,
					...R,
					enableRemoval: ue,
					onRemoveAnnotation: B,
					onConfirm: z,
					onReset: le,
					onDeleteControlMouseEnter: H,
					onDeleteControlMouseLeave: U
				}) : ne;
				return s ? /* @__PURE__ */ l(Ue, {
					annotationId: t,
					annotation: o,
					active: n,
					slot: s
				}, t) : null;
			}), !ae && g?.geometry && E && E({ annotation: g })] }),
			/* @__PURE__ */ l(He, {
				ref: _,
				"data-testid": "annotation-target",
				$hitTestingDisabled: se,
				onClick: v,
				onMouseUp: y,
				onMouseDown: b
			}),
			!A && re && re({
				type: x,
				annotation: g
			}),
			f.map((t) => {
				let n = t.data?.id;
				if (!n) return null;
				let r = ce?.includes(n) || !1, i = M(t, N), a = N?.data?.id === n, o = (i || r) && D != null, s = Ge({
					enableRemoval: ue,
					onRemoveAnnotation: B,
					isActive: i,
					annotation: t,
					canRemoveAnnotation: V,
					enableEditing: j,
					draggableHighlightSlot: T,
					isHovered: a
				});
				return !o && !s ? null : /* @__PURE__ */ u(e.Fragment, { children: [o ? /* @__PURE__ */ l(We, {
					annotationId: n,
					annotation: t,
					slot: D
				}) : null, s && B ? /* @__PURE__ */ l(Re, {
					annotation: t,
					onRemove: B,
					renderDelete: k,
					onDeleteControlMouseEnter: H,
					onDeleteControlMouseLeave: U
				}) : null] }, n);
			}),
			!oe && g?.selection?.showEditor && O && S && O({
				annotation: g,
				onChange: S,
				onSubmit: C
			}),
			w
		]
	});
}
//#endregion
//#region src/components/Annotation.tsx
function qe({ ref: e, ...t }) {
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
	return /* @__PURE__ */ l(Ke, {
		...ne(i, e),
		children: n
	});
}
qe.displayName = "Annotation";
//#endregion
//#region src/hooks/useMouseHover.ts
function Je(e, t) {
	if (!e || typeof e.getBoundingClientRect != "function") return !1;
	let { pageX: n, pageY: r } = t, { left: i, right: a, bottom: o, top: s } = e.getBoundingClientRect();
	return n > i && n < a && r > s && r < o;
}
function Ye() {
	let [e, r] = a(!1), o = i(null);
	return n(() => {
		let e = (e) => {
			let t = o.current;
			r(Je(t, {
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
var Xe = qe;
//#endregion
export { qe as Annotation, Re as AnnotationDeleteControl, me as ConfirmResetButtons, B as DELETE_BUTTON_HIT_AREA_PX, ue as DELETE_BUTTON_SIZE_PX, W as DeleteButton, V as DeleteCrossIcon, ye as DraggableBox, K as DraggableDot, _e as MoveButton, Q as OvalSelector, X as PointSelector, J as RectangleSelector, Xe as default, de as deleteCornerBoxStyle, G as getDeleteCornerPosition, y as useAnnotationHitDetection, ee as useDragging, Ye as useMouseHover, v as useRelativeMousePosition, x as useSelectorMethods };
