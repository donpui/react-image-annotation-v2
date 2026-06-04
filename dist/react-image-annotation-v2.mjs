import e, { useCallback as t, useEffect as n, useLayoutEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import s, { keyframes as c } from "styled-components";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/utils/offsetCoordinates.ts
var f = (e, t) => {
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
}, p = (e, t, n) => Math.max(e, Math.min(t, n)), m = (e) => {
	if (!e.currentTarget || typeof e.currentTarget.getBoundingClientRect != "function") return {
		x: 0,
		y: 0
	};
	let t = e.targetTouches[0], n = e.currentTarget.getBoundingClientRect(), r = t.pageX - n.left, i = t.pageY - (n.top + window.scrollY);
	return {
		x: p(0, 100, r / n.width * 100),
		y: p(0, 100, i / n.height * 100)
	};
}, h = (e, t) => g(e) ? _(e) ? (v(e) && e.preventDefault(), m(e)) : { x: null } : f(e, t), g = (e) => e.targetTouches !== void 0, _ = (e) => e.targetTouches.length === 1, v = (e) => e.type === "touchmove";
//#endregion
//#region src/hooks/useRelativeMousePosition.ts
function y(e, r = {}) {
	let { onPositionChange: i, throttleMs: s = 16 } = r, c = a({
		x: null,
		y: null
	}), [l, u] = o({
		x: null,
		y: null
	}), d = a(0), p = a(null), m = t((e) => {
		if (c.current = e, i) {
			let t = Date.now();
			s <= 0 || t - d.current >= s ? (u(e), i(e), d.current = t) : (p.current && clearTimeout(p.current), p.current = setTimeout(() => {
				u(e), i(e), d.current = Date.now();
			}, s - (t - d.current)));
		}
	}, [i, s]), h = t((t) => {
		try {
			let n = e.current;
			if (!n) {
				m({
					x: null,
					y: null
				});
				return;
			}
			m(f(t, n));
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
		mousePosition: i ? l : c.current,
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
function b({ annotations: e, selectors: n, imageRef: r, enableEditing: a }) {
	let o = i(() => new Map(n.map((e) => [e.TYPE, e])), [n]), s = t((e) => {
		if (e) return o.get(e);
	}, [o]);
	return {
		getTopAnnotationAt: t((t, n) => {
			let i = r.current;
			if (!i || t === null || n === null) return;
			let o = {
				x: t,
				y: n
			}, c = e.map((e) => {
				let { geometry: t } = e;
				if (!t) return null;
				let n = s(t.type);
				if (!n) return null;
				let r = t;
				return a && t.type === "RECTANGLE" && typeof t.x == "number" && typeof t.y == "number" && typeof t.width == "number" && typeof t.height == "number" && (r = {
					...t,
					x: Math.max(0, t.x - 2),
					y: Math.max(0, t.y - 2),
					width: Math.min(100 - t.x + 2, t.width + 4),
					height: Math.min(100 - t.y + 2, t.height + 4)
				}), n.intersects(o, r, i) ? e : null;
			}).filter((e) => e !== null);
			if (c.length !== 0) return c.sort((e, t) => {
				let n = s(e.geometry.type), r = s(t.geometry.type);
				return !n || !r ? 0 : n.area(e.geometry, i) - r.area(t.geometry, i);
			})[0];
		}, [
			e,
			s,
			r,
			a
		]),
		getSelectorByType: s
	};
}
//#endregion
//#region src/hooks/useHoveredAnnotation.ts
function x({ targetRef: e, imageRef: r, annotations: s, selectors: c, enableEditing: l, suppressHover: u = !1, throttleMs: d = 50 }) {
	let [f, p] = o(void 0), m = a(void 0), h = a(void 0), { getTopAnnotationAt: g } = b({
		annotations: s,
		selectors: c,
		imageRef: r,
		enableEditing: l
	}), { handlers: _ } = y(e, {
		onPositionChange: t((e) => {
			if (u) {
				h.current != null && (h.current = void 0, m.current = void 0, p(void 0));
				return;
			}
			let { x: t, y: n } = e, r = g(t, n), i = r?.data?.id;
			i !== h.current && (h.current = i, m.current = r, p(r));
		}, [g, u]),
		throttleMs: d
	});
	return n(() => {
		p(void 0), m.current = void 0, h.current = void 0;
	}, [s, c]), {
		hoveredAnnotation: f,
		mouseHandlers: i(() => _, [_])
	};
}
//#endregion
//#region src/hooks/useInteractionFocus.ts
function S({ enableEditing: e, isDrawing: r, isCreationEditorOpen: s, isDragging: c, draggingAnnotationId: l, hasPendingChanges: u, annotations: d, hoveredAnnotation: f, lockEditSessionOnHover: p = !0 }) {
	let [m, h] = o(null), g = a(null), _ = r || s, v = t(() => {
		g.current = null, h(null);
	}, []), y = t((e) => {
		g.current = e, h(e);
	}, []), b = t(() => {
		p && v();
	}, [p, v]);
	n(() => {
		_ && v();
	}, [_, v]), n(() => {
		if (!e || _ || !p) return;
		let t = f?.data?.id;
		t != null && (g.current ?? (g.current = t, h(t)));
	}, [
		e,
		_,
		p,
		f?.data?.id
	]);
	let x = i(() => {
		for (let e of d) {
			let t = e.data?.id;
			if (t != null && u(t)) return t;
		}
	}, [d, u]), S = i(() => _ ? null : c && l != null ? l : x ?? (e && m != null ? m : null), [
		_,
		c,
		l,
		x,
		e,
		m
	]);
	return {
		effectiveTopAnnotation: i(() => {
			if (!_) return S == null ? f : d.find((e) => e.data?.id === S);
		}, [
			_,
			S,
			d,
			f
		]),
		focusAnnotationId: S,
		clearEditingSession: v,
		engageEdit: y,
		onContainerMouseLeave: b
	};
}
//#endregion
//#region src/hooks/useSelectorMethods.ts
function C({ selectors: e, effectiveType: n, value: r, onChange: i, disableAnnotation: a }) {
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
var w = 100;
function T(e) {
	let { x: t = 0, y: n = 0, width: r = 0, height: i = 0 } = e;
	return r = Math.max(r, 0), i = Math.max(i, 0), t = Math.min(t, w - r), n = Math.min(n, w - i), {
		...e,
		x: t,
		y: n,
		width: r,
		height: i
	};
}
function ee({ annotations: e, onAnnotationsChange: n, imageRef: r, previewMode: i = !1 }) {
	let [s, c] = o(!1), [l, u] = o(void 0), [d, f] = o(() => /* @__PURE__ */ new Map()), p = a(null), m = a(/* @__PURE__ */ new Map()), h = t(() => {
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
		let a = T(r);
		if (i) {
			f((e) => {
				let n = new Map(e);
				return n.set(t, a), n;
			});
			return;
		}
		n?.(e.map((e) => e.data?.id === t ? {
			...e,
			geometry: a
		} : e));
	}, [
		i,
		n,
		e
	]), _ = t((e, t, n, r) => {
		let { width: i, height: a } = h(), o = e.clientX - r.x, s = e.clientY - r.y, c = { ...n };
		switch (t) {
			case "top":
				c.height = Math.min((n.height ?? 0) - s / a * w, (n.y ?? 0) + (n.height ?? 0)), c.y = Math.max((n.y ?? 0) + s / a * w, 0);
				break;
			case "right":
				c.width = Math.min((n.width ?? 0) + o / i * w, w - (n.x ?? 0));
				break;
			case "bottom":
				c.height = Math.min((n.height ?? 0) + s / a * w, w - (n.y ?? 0));
				break;
			case "left":
				c.width = Math.min((n.width ?? 0) - o / i * w, (n.x ?? 0) + (n.width ?? 0)), c.x = Math.max((n.x ?? 0) + o / i * w, 0);
				break;
			default: break;
		}
		return T(c);
	}, [h]), v = t((e, t) => {
		let { width: n, height: r } = h(), i = e.clientX - t.initialCursorPosition.x, a = e.clientY - t.initialCursorPosition.y, o = t.initialGeometry;
		return T({
			...o,
			x: Math.max(Math.min((o.x ?? 0) + i / n * w, w - (o.width ?? 0)), 0),
			y: Math.max(Math.min((o.y ?? 0) + a / r * w, w - (o.height ?? 0)), 0)
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
	}, [_, g]), S = t((e, t) => {
		y(e, t);
	}, [y]), C = t((e, t) => {
		let n = p.current;
		if (!n) return;
		let r = v(e, n);
		g(n.annotationId, r);
	}, [v, g]), ee = t(() => {
		c(!1), p.current = null;
	}, []);
	return {
		isDragging: s,
		draggingAnnotationId: l,
		hasPendingChanges: t((e) => d.has(e), [d]),
		onDotDragStart: b,
		onDotDrag: x,
		onMoveStart: S,
		onMove: C,
		onDragEnd: ee,
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
	let [r, i] = o(null), s = a(null), c = a(null), l = t(() => {
		c.current != null && (clearTimeout(c.current), c.current = null);
	}, []), u = t(() => {
		l(), c.current = setTimeout(() => {
			s.current ?? i(null), c.current = null;
		}, 300);
	}, [l]);
	return n(() => {
		let t = e?.data?.id;
		if (t != null) {
			l(), i(t);
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
			l(), s.current = e, i(e);
		}, [l]),
		onDeleteControlMouseLeave: t(() => {
			s.current = null, u();
		}, [u])
	};
}
//#endregion
//#region src/hooks/useAnnotationViewModel.ts
function ne(e, t) {
	e && (typeof e == "function" ? e(t) : e.current = t);
}
function re(e, r) {
	let { src: o, alt: s = "Annotation Image", style: c, className: l, containerRef: u, imageRef: d, annotations: f, type: p, selectors: m, value: h, onChange: g, onSubmit: _, activeAnnotationComparator: v, activeAnnotations: y, editModeAnnotationIds: b, disableAnnotation: w, drawingCursor: T, disableSelector: re, disableEditor: ie, disableOverlay: E, disableContent: ae, disableHitTesting: oe, allowTouch: D, enableEditing: O = !1, onAnnotationsChange: se, renderSelector: ce, renderEditor: le, renderHighlight: ue, renderDraggableHighlight: k, renderContent: de, renderOverlay: fe, enableRemoval: A, onRemoveAnnotation: pe, canRemoveAnnotation: me, renderDelete: j, onConfirm: M, onReset: he, onImageMouseUp: N, onImageMouseDown: P, onImageMouseMove: F, onImageClick: I, onImageLoad: L, onImageError: ge } = e, _e = a(null), R = a(null), z = !!(M && he), B = h?.selection?.mode === "SELECTING", V = !!h?.selection?.showEditor, H = !ae && !!de, { isDragging: U, draggingAnnotationId: W, hasPendingChanges: ve, onDotDragStart: G, onDotDrag: ye, onMoveStart: be, onMove: xe, onDragEnd: Se, handleConfirm: Ce, handleReset: we, getEffectiveAnnotation: Te } = ee({
		annotations: f,
		onAnnotationsChange: se,
		imageRef: _e,
		previewMode: z
	}), { hoveredAnnotation: Ee, mouseHandlers: K } = x({
		targetRef: R,
		imageRef: _e,
		annotations: f,
		selectors: m,
		enableEditing: O,
		suppressHover: B || V,
		throttleMs: 50
	}), { effectiveTopAnnotation: De, focusAnnotationId: Oe, clearEditingSession: q, engageEdit: J, onContainerMouseLeave: ke } = S({
		enableEditing: O,
		isDrawing: B,
		isCreationEditorOpen: V,
		isDragging: U,
		draggingAnnotationId: W,
		hasPendingChanges: ve,
		annotations: f,
		hoveredAnnotation: Ee,
		lockEditSessionOnHover: !H
	});
	n(() => {
		U && W != null && J(W);
	}, [
		U,
		W,
		J
	]);
	let Ae = i(() => ({
		onDotDragStart: G,
		onDotDrag: ye,
		onMoveStart: be,
		onMove: xe,
		onDragEnd: Se
	}), [
		G,
		ye,
		be,
		xe,
		Se
	]), je = t((e) => {
		Ce(e), M?.(e), q();
	}, [
		Ce,
		M,
		q
	]), Me = t((e) => {
		we(e), he?.(e), q();
	}, [
		we,
		he,
		q
	]), Y = p || m[0]?.TYPE, Ne = t((e) => {
		R.current && (R.current.style.cursor = e);
	}, []), Pe = t(() => {
		R.current && R.current.style.removeProperty("cursor");
	}, []);
	n(() => {
		if (!T || !B) {
			document.body.style.removeProperty("cursor");
			return;
		}
		let e = document.body.style.cursor;
		return document.body.style.cursor = T, () => {
			document.body.style.cursor = e;
		};
	}, [T, B]);
	let { callSelectorMethod: X } = C({
		selectors: m,
		effectiveType: Y,
		value: h,
		onChange: g,
		disableAnnotation: w
	}), Fe = t((e) => {
		navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && e.preventDefault(), X("onTouchStart", e);
	}, [D, X]), Ie = t((e) => {
		X("onTouchEnd", e);
	}, [X]), Le = t((e) => {
		K.onTouchMove(e), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && e.preventDefault(), X("onTouchMove", e);
	}, [
		K,
		D,
		X
	]), Re = t((e) => {
		K.onTouchLeave(e);
	}, [K]);
	n(() => {
		let e = R.current;
		if (!(!D || !e)) return e.ontouchstart = Fe, e.ontouchend = Ie, e.ontouchmove = Le, e.ontouchcancel = Re, () => {
			e.ontouchstart = null, e.ontouchend = null, e.ontouchmove = null, e.ontouchcancel = null;
		};
	}, [
		D,
		Fe,
		Ie,
		Le,
		Re
	]);
	let ze = t((e) => {
		_e.current = e, ne(r, e), ne(d, e);
	}, [r, d]), Z = t((e) => {
		R.current = e;
	}, []), Q = t((e) => {
		ne(u, e);
	}, [u]), $ = t((e) => {
		K.onMouseMove(e.nativeEvent), F?.(e), X("onMouseMove", e);
	}, [
		K,
		F,
		X
	]), Be = t((e) => {
		K.onMouseLeave(e.nativeEvent), ke();
	}, [K, ke]), Ve = t((e) => {
		N?.(e), X("onMouseUp", e), T && !w && (Pe(), B || document.body.style.removeProperty("cursor"));
	}, [
		N,
		X,
		T,
		w,
		Pe,
		B
	]), He = t((e) => {
		T && !w && (Ne(T), document.body.style.cursor = T);
		let t = h?.selection?.mode === "SELECTING" || !!h?.selection?.showEditor, n = De?.data?.id;
		if (O && !t && !V && n != null) {
			H && J(n), P?.(e);
			return;
		}
		P?.(e), X("onMouseDown", e);
	}, [
		T,
		w,
		Ne,
		O,
		H,
		De?.data?.id,
		V,
		h?.selection?.mode,
		h?.selection?.showEditor,
		J,
		P,
		X
	]), Ue = t((e) => {
		I?.(e), X("onClick", e);
	}, [I, X]), We = t(() => {
		_ && h && _(h);
	}, [_, h]), Ge = t((e) => {
		e.key === "Escape" && g && (h?.selection?.showEditor || h?.geometry) && g({
			selection: void 0,
			geometry: void 0,
			data: void 0
		});
	}, [h, g]);
	n(() => {
		if (h?.selection?.showEditor) return window.addEventListener("keydown", Ge), () => window.removeEventListener("keydown", Ge);
	}, [h?.selection?.showEditor, Ge]);
	let Ke = De, { pinnedControlsId: qe, onDeleteControlMouseEnter: Je, onDeleteControlMouseLeave: Ye } = te(De), Xe = t((e, t) => {
		let n = e.data?.id;
		return n != null && qe != null && n === qe ? !0 : y && y.some((t) => v ? v(e, t) : e.data.id === t) || t === e;
	}, [
		y,
		v,
		qe
	]);
	return {
		setContainerRef: Q,
		style: c,
		className: l,
		onContainerMouseLeave: Be,
		onContainerTouchCancel: Re,
		onContainerMouseMove: $,
		setImageRef: ze,
		src: o,
		alt: s,
		annotations: f,
		layoutOptions: {
			touchEnabled: D,
			selectorDisabled: !!re || O && U,
			overlayDisabled: !!E,
			editorDisabled: !!ie || O && U,
			contentDisabled: !!ae,
			hitTestingDisabled: !!oe || O && U || V,
			enableEditing: O,
			drawingCursor: T,
			disableAnnotation: w
		},
		onImageLoad: L,
		onImageError: ge,
		annotationState: {
			getIsActive: Xe,
			topAnnotation: Ke,
			editModeIds: b,
			isDragging: U,
			draggingAnnotationId: W,
			hasPendingChanges: ve,
			getEffectiveAnnotation: O ? Te : void 0,
			draggingHandlers: O ? Ae : void 0,
			focusAnnotationId: Oe,
			showContentOnHover: H,
			engageEdit: O && H ? J : void 0,
			onConfirm: O ? je : void 0,
			onReset: O ? Me : void 0,
			enableRemoval: A,
			onRemoveAnnotation: pe,
			canRemoveAnnotation: me,
			onDeleteControlMouseEnter: Je,
			onDeleteControlMouseLeave: Ye
		},
		value: h,
		isDrawing: B,
		setTargetRef: Z,
		onInteractionTargetClick: Ue,
		onInteractionTargetMouseUp: Ve,
		onInteractionTargetMouseDown: He,
		effectiveType: Y,
		onChange: g,
		onEditorSubmit: We,
		renderSlots: {
			renderHighlight: ue,
			renderDraggableHighlight: k,
			renderSelector: ce,
			renderOverlay: fe,
			renderContent: de,
			renderEditor: le,
			renderDelete: j
		}
	};
}
//#endregion
//#region src/components/Point/index.tsx
var ie = s.div`
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
	return t ? /* @__PURE__ */ u(ie, { style: {
		top: `${t.y}%`,
		left: `${t.x}%`
	} }) : null;
}
//#endregion
//#region src/components/TextEditor/index.tsx
var ae = s.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, oe = s.div`
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
	}, []), /* @__PURE__ */ d(e.Fragment, { children: [/* @__PURE__ */ u(ae, { children: /* @__PURE__ */ u("textarea", {
		ref: o,
		placeholder: "Write description",
		onFocus: r,
		onBlur: i,
		onChange: t,
		value: a
	}) }), a && /* @__PURE__ */ u(oe, {
		onClick: n,
		children: "Save description"
	})] });
}, O = {}, se = {}, ce = c`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, le = s.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  pointer-events: auto;
  transform-origin: top left;
  animation: ${ce} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, ue = ({ annotation: e, onChange: t, onSubmit: n, className: r = "", style: i = O }) => e.geometry ? /* @__PURE__ */ u(le, {
	className: r,
	style: i,
	children: /* @__PURE__ */ u(D, {
		onChange: (n) => t({
			...e,
			data: {
				...e.data,
				text: n.target.value
			}
		}),
		onSubmit: n,
		value: e.data?.text
	})
}) : null, k = s.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, de = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function fe({ annotation: e, className: t = "", style: n = O }) {
	let { geometry: r } = e;
	return r ? /* @__PURE__ */ d(de, {
		className: t,
		style: n,
		children: [
			/* @__PURE__ */ u(k, { style: {
				height: `${r.y}%`,
				width: "100%"
			} }),
			/* @__PURE__ */ u(k, { style: {
				top: `${r.y}%`,
				height: `${r.height}%`,
				width: `${r.x}%`
			} }),
			/* @__PURE__ */ u(k, { style: {
				top: `${r.y}%`,
				left: `${r.x + r.width}%`,
				height: `${r.height}%`,
				width: `${100 - (r.x + r.width)}%`
			} }),
			/* @__PURE__ */ u(k, { style: {
				top: `${r.y + r.height}%`,
				height: `${100 - (r.y + r.height)}%`,
				width: "100%"
			} })
		]
	}) : null;
}
//#endregion
//#region src/components/Rectangle/index.tsx
var A = s.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function pe({ annotation: e, className: t = "", style: n = O, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ u(A, {
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
var me = s.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function j({ annotation: e, className: t = "", style: n = O, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ u(me, {
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
var M = s.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
  pointer-events: auto;
`;
function he({ annotation: e, style: t = O, className: n = "" }) {
	let { geometry: r } = e;
	return !r || r.x === void 0 || r.y === void 0 || r.width === void 0 || r.height === void 0 ? null : /* @__PURE__ */ u(M, {
		style: {
			marginTop: 8,
			marginLeft: 8,
			...t
		},
		className: n,
		children: e.data && e.data.text
	});
}
//#endregion
//#region src/components/Overlay/index.tsx
var N = s.div`
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
`, P = () => /* @__PURE__ */ u("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": !0,
	children: /* @__PURE__ */ u("path", {
		d: "M12 3V9M12 3L9 6M12 3L15 6M12 15V21M12 21L15 18M12 21L9 18M3 12H9M3 12L6 15M3 12L6 9M15 12H21M21 12L18 9M21 12L18 15",
		stroke: "#ffffff",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), F = 20, I = 44;
function L(e) {
	return /* @__PURE__ */ u("svg", {
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": !0,
		...e,
		children: /* @__PURE__ */ u("path", {
			d: "M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z",
			fill: "currentColor"
		})
	});
}
//#endregion
//#region src/components/DraggableComponents/DeleteButton.tsx
var ge = s.button`
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
`, _e = s(L)`
  width: 12px;
  height: 12px;
  color: #0f0f0f;
  flex-shrink: 0;
`, R = ({ annotationId: e, onRemove: t, disabled: n, className: r, style: i }) => /* @__PURE__ */ u(ge, {
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
	children: /* @__PURE__ */ u(_e, {})
});
//#endregion
//#region src/components/DraggableComponents/deleteButtonPosition.ts
function z(e) {
	return !e || typeof e.x != "number" || typeof e.y != "number" || typeof e.width != "number" ? null : {
		left: `calc(${e.x}% + ${e.width}%)`,
		top: `calc(${e.y}%)`,
		transform: "translate(-50%, -50%)"
	};
}
var B = {
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
}, V = s.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
  z-index: 20;
`, H = s.button`
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
`, U = ({ onConfirm: e, onReset: t }) => /* @__PURE__ */ d(V, {
	onMouseDown: (e) => e.stopPropagation(),
	children: [/* @__PURE__ */ u(H, {
		type: "button",
		onClick: (t) => {
			t.stopPropagation(), e();
		},
		children: "✓"
	}), /* @__PURE__ */ u(H, {
		type: "button",
		onClick: (e) => {
			e.stopPropagation(), t();
		},
		children: "✕"
	})]
}), W = s.div`
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
`, ve = s.div`
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
`, G = ({ position: e, onDragStart: t, onDrag: n, onDragEnd: r, annotationId: i }) => /* @__PURE__ */ u(W, {
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
}), ye = ({ onMoveStart: e, onMove: t, onMoveEnd: n, annotationId: r }) => /* @__PURE__ */ u(ve, {
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
	children: /* @__PURE__ */ u(P, {})
}), be = 36, xe = s.div`
  position: absolute;
  border: none;
  background: rgba(151, 151, 151, 0.3);
  border-radius: 3px;
  pointer-events: auto;
  z-index: 10;
  box-sizing: border-box;
`, Se = ({ annotation: e, isDragging: t, hasPendingChanges: r, onDotDragStart: i, onDotDrag: o, onMoveStart: s, onMove: c, onDragEnd: l, enableRemoval: f, onRemoveAnnotation: p, onConfirm: m, onReset: h, onDeleteControlMouseEnter: g, onDeleteControlMouseLeave: _, allowResetOnMouseLeave: v = !0 }) => {
	let { geometry: y } = e, b = e.data?.id, x = a(null), S = (t || r) && m && h;
	if (n(() => {
		if (!v || t || r || !h || b == null) return;
		let e = (e) => {
			let t = x.current;
			if (!t) return;
			let n = t.getBoundingClientRect(), { clientX: r, clientY: i } = e, a = be;
			(r < n.left - a || r > n.right + a || i < n.top - a || i > n.bottom + a) && h(b);
		};
		return document.addEventListener("mousemove", e), () => {
			document.removeEventListener("mousemove", e);
		};
	}, [
		v,
		t,
		r,
		h,
		b
	]), !y || typeof y.x != "number" || typeof y.y != "number" || typeof y.width != "number" || typeof y.height != "number") return null;
	let C = String(b ?? "");
	return /* @__PURE__ */ d(xe, {
		ref: x,
		className: "rectangle-editor-box",
		style: {
			left: `${y.x}%`,
			top: `${y.y}%`,
			width: `${y.width}%`,
			height: `${y.height}%`
		},
		"data-annotation-draggable-box": !0,
		children: [
			/* @__PURE__ */ u(G, {
				position: "top",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ u(G, {
				position: "right",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ u(G, {
				position: "bottom",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ u(G, {
				position: "left",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ u(ye, {
				onMoveStart: s,
				onMove: c,
				onMoveEnd: l,
				annotationId: C
			}),
			f && p && b != null && /* @__PURE__ */ u("div", {
				style: B,
				onMouseEnter: () => g?.(b),
				onMouseLeave: () => _?.(),
				onPointerEnter: () => g?.(b),
				onPointerLeave: () => _?.(),
				children: /* @__PURE__ */ u(R, {
					annotationId: b,
					onRemove: p
				})
			}),
			S && /* @__PURE__ */ u(U, {
				onConfirm: () => m(b),
				onReset: () => h(b)
			})
		]
	});
}, Ce = "RECTANGLE";
function we({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let i = Math.min(n.x, n.x + n.width), a = Math.max(n.x, n.x + n.width), o = Math.min(n.y, n.y + n.height), s = Math.max(n.y, n.y + n.height);
	return !(e < i || t < o || e > a || t > s);
}
function Te(e, t) {
	return !e || e.width <= 0 || e.height <= 0 ? 0 : Math.abs(e.width) * Math.abs(e.height);
}
var Ee = {
	onTouchStart(e, t) {
		return K(e, t);
	},
	onTouchEnd(e, t) {
		return De(e, t);
	},
	onTouchMove(e, t) {
		return Oe(e, t);
	},
	onMouseDown(e, t) {
		return K(e, t);
	},
	onMouseUp(e, t) {
		return De(e, t);
	},
	onMouseMove(e, t) {
		return Oe(e, t);
	}
};
function K(e, t) {
	if (e.selection) return {};
	{
		let { x: n, y: r } = h(t);
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
function De(e, t) {
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
function Oe(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = h(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: Ce,
				x: o > 0 ? n : i,
				y: s > 0 ? r : a,
				width: Math.abs(o),
				height: Math.abs(s)
			}
		};
	}
	return e;
}
var q = {
	TYPE: Ce,
	intersects: we,
	area: Te,
	methods: Ee
}, J = 6, ke = (e = {
	width: 100,
	height: 100
}) => ({
	marginX: J / e.width * 100,
	marginY: J / e.height * 100
}), Ae = "POINT";
function je({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let { marginX: i, marginY: a } = ke(r), o = Math.min(i, a) / 2, s = Math.abs(e - n.x), c = Math.abs(t - n.y);
	return s <= o && c <= o;
}
function Me(e, t) {
	return 0;
}
var Y = {
	TYPE: Ae,
	intersects: je,
	area: Me,
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
				...h(t),
				width: 0,
				height: 0,
				type: Ae
			}
		};
	} }
}, Ne = (e) => e ** 2, Pe = "OVAL";
function X({ x: e, y: t }, n, r) {
	if (!n || !n.width || !n.height) return !1;
	let i = Math.abs(n.width), a = Math.abs(n.height), o = {
		x: n.x + i / 2,
		y: n.y + a / 2
	}, s = i / 2, c = a / 2;
	if (s === 0 || c === 0) return !1;
	let l = e - o.x, u = t - o.y;
	return Ne(l) / Ne(s) + Ne(u) / Ne(c) <= 1;
}
function Fe(e, t) {
	if (!e || e.width <= 0 || e.height <= 0) return 0;
	let n = Math.abs(e.width), r = Math.abs(e.height);
	return n / 2 * Math.PI * (r / 2);
}
var Ie = {
	onTouchStart(e, t) {
		return Le(e, t);
	},
	onTouchEnd(e, t) {
		return Re(e, t);
	},
	onTouchMove(e, t) {
		return ze(e, t);
	},
	onMouseDown(e, t) {
		if (!e.geometry) {
			let { x: n, y: r } = h(t);
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
			let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = h(t);
			return {
				...e,
				geometry: {
					...e.geometry,
					type: Pe,
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
function Le(e, t) {
	if (e.selection) return {};
	{
		let { x: n, y: r } = h(t);
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
function Re(e, t) {
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
function ze(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = h(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: Pe,
				x: o > 0 ? n : i,
				y: s > 0 ? r : a,
				width: Math.abs(o),
				height: Math.abs(s)
			}
		};
	}
	return e;
}
var Z = {
	TYPE: Pe,
	intersects: X,
	area: Fe,
	methods: Ie
}, Q = {
	disableAnnotation: !1,
	disableSelector: !1,
	disableEditor: !1,
	disableOverlay: !1,
	disableContent: !1,
	disableHitTesting: !1,
	allowTouch: !1,
	type: q.TYPE,
	selectors: [
		q,
		Y,
		Z
	],
	activeAnnotationComparator: (e, t) => e === t,
	enableEditing: !1,
	onAnnotationsChange: () => {
		process.env.NODE_ENV !== "production" && console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.");
	},
	renderSelector: ({ annotation: e }) => {
		switch (e.geometry?.type) {
			case q.TYPE: return /* @__PURE__ */ u(fe, { annotation: e });
			case Y.TYPE: return /* @__PURE__ */ u(E, { annotation: e });
			case Z.TYPE: return /* @__PURE__ */ u(j, { annotation: e });
			default: return null;
		}
	},
	renderEditor: ({ annotation: e, onChange: t, onSubmit: n }) => /* @__PURE__ */ u(ue, {
		annotation: e,
		onChange: t,
		onSubmit: n
	}),
	renderHighlight: ({ key: e, annotation: t, active: n }) => {
		switch (t.geometry.type) {
			case q.TYPE: return /* @__PURE__ */ u(pe, {
				annotation: t,
				active: n
			}, e);
			case Y.TYPE: return /* @__PURE__ */ u(E, { annotation: t }, e);
			case Z.TYPE: return /* @__PURE__ */ u(j, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	},
	renderContent: ({ key: e, annotation: t }) => /* @__PURE__ */ u(he, { annotation: t }, e),
	renderOverlay: ({ type: e, annotation: t } = se) => {
		switch (e) {
			case Y.TYPE: return /* @__PURE__ */ u(N, { children: "Click to Annotate" });
			default: return /* @__PURE__ */ u(N, { children: "Click and Drag to Annotate" });
		}
	},
	renderDraggableHighlight: ({ key: e, annotation: t, active: n, isHovered: r, isDragging: i, hasPendingChanges: a, onDotDragStart: o, onDotDrag: s, onMoveStart: c, onMove: l, onDragEnd: d, enableRemoval: f, onRemoveAnnotation: p, onConfirm: m, onReset: h, onDeleteControlMouseEnter: g, onDeleteControlMouseLeave: _ }) => {
		if (!r && !i && !a) switch (t.geometry.type) {
			case q.TYPE: return /* @__PURE__ */ u(pe, {
				annotation: t,
				active: n
			}, e);
			case Y.TYPE: return /* @__PURE__ */ u(E, { annotation: t }, e);
			case Z.TYPE: return /* @__PURE__ */ u(j, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
		if (t.geometry.type === q.TYPE) return /* @__PURE__ */ u(Se, {
			annotation: t,
			active: n,
			isHovered: r,
			isDragging: i,
			hasPendingChanges: a,
			onDotDragStart: o,
			onDotDrag: s,
			onMoveStart: c,
			onMove: l,
			onDragEnd: d,
			enableRemoval: f,
			onRemoveAnnotation: p,
			onConfirm: m,
			onReset: h,
			onDeleteControlMouseEnter: g,
			onDeleteControlMouseLeave: _
		}, `${e}-editor`);
		switch (t.geometry.type) {
			case Y.TYPE: return /* @__PURE__ */ u(E, { annotation: t }, e);
			case Z.TYPE: return /* @__PURE__ */ u(j, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	}
}, $ = 8, Be = 6;
function Ve(e) {
	return !!e && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number";
}
function He({ placement: e, geometry: t, containerHeight: n, overlayHeight: r, offsetPx: i }) {
	if (e === "above") return "above";
	if (e === "below") return "below";
	let a = t.y / 100 * n, o = (t.y + t.height) / 100 * n, s = r + i + $, c = n - o, l = a;
	return c >= s ? "below" : l >= s || l >= c ? "above" : "below";
}
function Ue({ annotation: e, containerRef: t, placement: n = "auto", offsetPx: i = Be, className: s, style: c, children: l }) {
	let d = a(null), [f, p] = o({
		x: 0,
		y: 0
	}), [m, h] = o(n === "above" ? "above" : "below"), { geometry: g } = e;
	return r(() => {
		let e = d.current, r = t.current;
		if (!e || !r || !Ve(g)) return;
		let a = r.getBoundingClientRect(), o = e.offsetHeight, s = He({
			placement: n,
			geometry: g,
			containerHeight: a.height,
			overlayHeight: o,
			offsetPx: i
		});
		if (s !== m) {
			h(s);
			return;
		}
		let c = e.getBoundingClientRect(), l = 0;
		c.right > a.right - $ && (l = a.right - $ - c.right), c.left + l < a.left + $ && (l = a.left + $ - c.left);
		let u = 0;
		c.bottom > a.bottom - $ && (u = a.bottom - $ - c.bottom), c.top + u < a.top + $ && (u = a.top + $ - c.top), p((e) => e.x === l && e.y === u ? e : {
			x: l,
			y: u
		});
	}, [
		g,
		t,
		n,
		i,
		m
	]), Ve(g) ? /* @__PURE__ */ u("div", {
		ref: d,
		className: s,
		style: {
			...m === "above" ? {
				position: "absolute",
				left: `${g.x}%`,
				bottom: `calc(${100 - g.y}% + ${i}px)`,
				transform: `translate(${f.x}px, ${f.y}px)`,
				pointerEvents: "none",
				zIndex: 25
			} : {
				position: "absolute",
				left: `${g.x}%`,
				top: `calc(${g.y + g.height}% + ${i}px)`,
				transform: `translate(${f.x}px, ${f.y}px)`,
				pointerEvents: "none",
				zIndex: 25
			},
			...c
		},
		"data-annotation-content-anchor": !0,
		"data-placement": m,
		children: l
	}) : null;
}
//#endregion
//#region src/components/AnnotationDeleteControl.tsx
var We = s.div`
  position: absolute;
  pointer-events: auto;
  z-index: 10;
  width: ${44}px;
  height: ${44}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Ge({ annotation: e, onRemove: n, renderDelete: r, disabled: i, onDeleteControlMouseEnter: a, onDeleteControlMouseLeave: s }) {
	let [c, l] = o(!1), d = e.data?.id, f = z(e.geometry), p = i || c, m = t(async () => {
		if (!(p || d == null)) {
			l(!0);
			try {
				await n(d);
			} finally {
				l(!1);
			}
		}
	}, [
		d,
		p,
		n
	]), h = t(() => {
		d != null && a?.(d);
	}, [d, a]), g = t(() => {
		s?.();
	}, [s]);
	if (!f || d == null) return null;
	let _ = {
		onMouseEnter: h,
		onMouseLeave: g,
		onPointerEnter: h,
		onPointerLeave: g
	};
	return r ? /* @__PURE__ */ u(We, {
		style: f,
		..._,
		children: r({
			key: d,
			annotation: e,
			active: !0,
			onRemove: m,
			disabled: p
		})
	}) : /* @__PURE__ */ u(We, {
		style: f,
		className: "annotation-delete",
		..._,
		children: /* @__PURE__ */ u(R, {
			annotationId: d,
			onRemove: m,
			disabled: p
		})
	});
}
//#endregion
//#region src/components/AnnotationLayout.tsx
var Ke = s.div`
  clear: both;
  position: relative;
  width: 100%;
  overflow: visible;

  &:hover ${N} {
    opacity: 1;
  }

  touch-action: ${(e) => e.$allowTouch ? "pinch-zoom" : "auto"};
  ${(e) => e.$cursor ? `cursor: ${e.$cursor};` : ""}
`, qe = s.img`
  display: block;
  width: 100%;
  user-select: none;
`, Je = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, Ye = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: ${(e) => e.$hitTestingDisabled ? "none" : "auto"};
  ${(e) => e.$cursor ? `cursor: ${e.$cursor};` : ""}
`, Xe = s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  pointer-events: none;
  overflow: visible;
`, Ze = s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  pointer-events: none;
  overflow: visible;
`;
function Qe({ annotationId: e, annotation: t, active: n, slot: r }) {
	return /* @__PURE__ */ u(l, { children: r({
		key: e,
		annotation: t,
		active: n
	}) });
}
function $e({ annotationId: e, annotation: t, slot: n, containerRef: r, onEngageEdit: i }) {
	return /* @__PURE__ */ u(Ue, {
		annotation: t,
		containerRef: r,
		placement: "auto",
		children: /* @__PURE__ */ u("div", {
			style: {
				pointerEvents: "auto",
				display: "inline-block"
			},
			onMouseDown: (t) => {
				t.stopPropagation(), i?.(e);
			},
			children: n({
				key: e,
				annotation: t
			})
		})
	});
}
function et({ enableRemoval: e, onRemoveAnnotation: t, isActive: n, annotation: r, canRemoveAnnotation: i, enableEditing: a, draggableHighlightSlot: o, isHovered: s }) {
	return !e || !t || !n || i && !i(r) ? !1 : !(a && o && s && r.geometry?.type === q.TYPE);
}
function tt({ setContainerRef: t, style: n, className: r, onContainerMouseLeave: i, onContainerTouchCancel: o, onContainerMouseMove: s, setImageRef: c, src: l, alt: f, annotations: p, renderSlots: m, layoutOptions: h, annotationState: g, value: _, isDrawing: v, setTargetRef: y, onInteractionTargetClick: b, onInteractionTargetMouseUp: x, onInteractionTargetMouseDown: S, effectiveType: C, onChange: w, onEditorSubmit: T, onImageLoad: ee, onImageError: te, children: ne }) {
	let { renderHighlight: re, renderDraggableHighlight: ie, renderSelector: E, renderOverlay: ae, renderContent: oe, renderEditor: D, renderDelete: O } = m, { touchEnabled: se, selectorDisabled: ce, overlayDisabled: le, editorDisabled: ue, contentDisabled: k, hitTestingDisabled: de, enableEditing: fe, drawingCursor: A, disableAnnotation: pe } = h, me = A && !pe ? A : void 0, { getIsActive: j, topAnnotation: M, editModeIds: he, isDragging: N, draggingAnnotationId: P, hasPendingChanges: F, getEffectiveAnnotation: I, draggingHandlers: L, onConfirm: ge, onReset: _e, enableRemoval: R, onRemoveAnnotation: z, canRemoveAnnotation: B, onDeleteControlMouseEnter: V, onDeleteControlMouseLeave: H, focusAnnotationId: U, showContentOnHover: W = !1, engageEdit: ve } = g, G = a(null);
	return /* @__PURE__ */ d(Ke, {
		ref: t,
		style: n,
		className: r,
		onMouseLeave: i,
		onTouchCancel: o,
		onMouseMove: s,
		$allowTouch: se,
		$cursor: v ? A : void 0,
		children: [
			/* @__PURE__ */ u(qe, {
				ref: c,
				src: l,
				alt: f,
				onLoad: ee,
				onError: te
			}),
			/* @__PURE__ */ d(Je, { children: [p.map((e) => {
				let t = e.data?.id;
				if (!t) return null;
				let n = j(e, M);
				M?.data?.id, F?.(t);
				let r = I ? I(e) : e;
				return re ? /* @__PURE__ */ u(Qe, {
					annotationId: t,
					annotation: r,
					active: n,
					slot: re
				}, t) : null;
			}), !ce && _?.geometry && E && E({ annotation: _ })] }),
			/* @__PURE__ */ u(Ye, {
				ref: y,
				"data-testid": "annotation-target",
				"data-is-drawing": v && A ? !0 : void 0,
				$hitTestingDisabled: de,
				$cursor: me,
				onClick: b,
				onMouseUp: x,
				onMouseDown: S
			}),
			fe && ie && L && /* @__PURE__ */ u(Xe, { children: p.map((t) => {
				let n = t.data?.id;
				if (!n) return null;
				let r = j(t, M), i = M?.data?.id === n, a = N && P === n, o = !!F?.(n), s = U != null && U === n;
				if (!(a || o || s || i && !W)) return null;
				let c = I ? I(t) : t;
				return /* @__PURE__ */ u(e.Fragment, { children: ie({
					key: n,
					annotation: c,
					active: r,
					isHovered: i,
					isDragging: !!a,
					hasPendingChanges: o,
					allowResetOnMouseLeave: !s && !(ge && _e),
					...L,
					enableRemoval: R,
					onRemoveAnnotation: z,
					onConfirm: ge,
					onReset: _e,
					onDeleteControlMouseEnter: V,
					onDeleteControlMouseLeave: H
				}) }, `edit-chrome-${n}`);
			}) }),
			!le && ae && ae({
				type: C,
				annotation: _
			}),
			/* @__PURE__ */ d(Ze, {
				ref: G,
				children: [p.map((t) => {
					let n = t.data?.id;
					if (!n) return null;
					let r = he?.includes(n) || !1, i = j(t, M), a = M?.data?.id === n, o = N && P === n, s = !!F?.(n), c = !k && oe != null && (r || i && !(fe && ie && L && (U != null && U === n || o || s))), l = et({
						enableRemoval: R,
						onRemoveAnnotation: z,
						isActive: i,
						annotation: t,
						canRemoveAnnotation: B,
						enableEditing: fe,
						draggableHighlightSlot: ie,
						isHovered: a
					});
					return !c && !l ? null : /* @__PURE__ */ d(e.Fragment, { children: [c ? /* @__PURE__ */ u($e, {
						annotationId: n,
						annotation: t,
						containerRef: G,
						onEngageEdit: ve,
						slot: oe
					}) : null, l && z ? /* @__PURE__ */ u(Ge, {
						annotation: t,
						onRemove: z,
						renderDelete: O,
						onDeleteControlMouseEnter: V,
						onDeleteControlMouseLeave: H
					}) : null] }, n);
				}), !ue && _?.selection?.showEditor && D && w && /* @__PURE__ */ u(Ue, {
					annotation: _,
					containerRef: G,
					placement: "auto",
					offsetPx: 16,
					children: D({
						annotation: _,
						onChange: w,
						onSubmit: T
					})
				})]
			}),
			ne
		]
	});
}
//#endregion
//#region src/components/Annotation.tsx
function nt({ ref: e, ...t }) {
	let { children: n, ...r } = i(() => {
		let { renderSlots: e, ...n } = t;
		return {
			...Q,
			...n,
			selectors: n.selectors ?? Q.selectors,
			renderSelector: n.renderSelector ?? e?.renderSelector ?? Q.renderSelector,
			renderEditor: n.renderEditor ?? e?.renderEditor ?? Q.renderEditor,
			renderHighlight: n.renderHighlight ?? e?.renderHighlight ?? Q.renderHighlight,
			renderContent: n.renderContent ?? e?.renderContent ?? Q.renderContent,
			renderOverlay: n.renderOverlay ?? e?.renderOverlay ?? Q.renderOverlay,
			renderDraggableHighlight: n.renderDraggableHighlight ?? e?.renderDraggableHighlight ?? Q.renderDraggableHighlight
		};
	}, [t]);
	return /* @__PURE__ */ u(tt, {
		...re(r, e),
		children: n
	});
}
nt.displayName = "Annotation";
//#endregion
//#region src/hooks/useMouseHover.ts
function rt(e, t) {
	if (!e || typeof e.getBoundingClientRect != "function") return !1;
	let { pageX: n, pageY: r } = t, { left: i, right: a, bottom: o, top: s } = e.getBoundingClientRect();
	return n > i && n < a && r > s && r < o;
}
function it() {
	let [e, r] = o(!1), i = a(null);
	return n(() => {
		let e = (e) => {
			let t = i.current;
			r(rt(t, {
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
			i.current = e;
		}, [])
	};
}
//#endregion
//#region src/utils/buildDrawingCursor.ts
function at(e, t, n, r = "crosshair") {
	let i = e.trim();
	return `${i.startsWith("url(") ? i : `url("${i}")`} ${t} ${n}, ${r}`;
}
function ot(e, t, n, r = "crosshair") {
	return at(`data:image/svg+xml,${encodeURIComponent(e.trim())}`, t, n, r);
}
//#endregion
//#region src/index.ts
var st = nt;
//#endregion
export { nt as Annotation, Ue as AnnotationContentAnchor, Ge as AnnotationDeleteControl, U as ConfirmResetButtons, I as DELETE_BUTTON_HIT_AREA_PX, F as DELETE_BUTTON_SIZE_PX, R as DeleteButton, L as DeleteCrossIcon, Se as DraggableBox, G as DraggableDot, ye as MoveButton, Z as OvalSelector, Y as PointSelector, q as RectangleSelector, at as buildDrawingCursor, ot as buildDrawingCursorFromSvg, st as default, B as deleteCornerBoxStyle, z as getDeleteCornerPosition, b as useAnnotationHitDetection, ee as useDragging, it as useMouseHover, y as useRelativeMousePosition, C as useSelectorMethods };
