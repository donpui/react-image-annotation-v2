import e, { useCallback as t, useEffect as n, useLayoutEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import s, { css as c, keyframes as l } from "styled-components";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/utils/offsetCoordinates.ts
var p = (e, t) => {
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
}, m = (e, t, n) => Math.max(e, Math.min(t, n)), h = (e) => {
	if (!e.currentTarget || typeof e.currentTarget.getBoundingClientRect != "function") return {
		x: 0,
		y: 0
	};
	let t = e.targetTouches[0], n = e.currentTarget.getBoundingClientRect(), r = t.pageX - n.left, i = t.pageY - (n.top + window.scrollY);
	return {
		x: m(0, 100, r / n.width * 100),
		y: m(0, 100, i / n.height * 100)
	};
}, g = (e, t) => _(e) ? v(e) ? (y(e) && e.preventDefault(), h(e)) : { x: null } : p(e, t), _ = (e) => e.targetTouches !== void 0, v = (e) => e.targetTouches.length === 1, y = (e) => e.type === "touchmove";
//#endregion
//#region src/hooks/useRelativeMousePosition.ts
function b(e, r = {}) {
	let { onPositionChange: i, throttleMs: s = 16 } = r, c = a({
		x: null,
		y: null
	}), [l, u] = o({
		x: null,
		y: null
	}), d = a(0), f = a(null), m = t((e) => {
		if (c.current = e, i) {
			let t = Date.now();
			s <= 0 || t - d.current >= s ? (u(e), i(e), d.current = t) : (f.current && clearTimeout(f.current), f.current = setTimeout(() => {
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
			let r = p(t, n);
			m(r);
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
		f.current && clearTimeout(f.current);
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
function x({ annotations: e, selectors: n, imageRef: r, enableEditing: a }) {
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
function S({ targetRef: e, imageRef: n, annotations: r, selectors: s, enableEditing: c, suppressHover: l = !1, throttleMs: u = 50 }) {
	let [d, f] = o(void 0), p = a(void 0), m = a(void 0), [h, g] = o(r), [_, v] = o(s);
	(r !== h || s !== _) && (g(r), v(s), f(void 0), p.current = void 0, m.current = void 0);
	let { getTopAnnotationAt: y } = x({
		annotations: r,
		selectors: s,
		imageRef: n,
		enableEditing: c
	}), { handlers: S } = b(e, {
		onPositionChange: t((e) => {
			if (l) {
				m.current != null && (m.current = void 0, p.current = void 0, f(void 0));
				return;
			}
			let { x: t, y: n } = e, r = y(t, n), i = r?.data?.id;
			i !== m.current && (m.current = i, p.current = r, f(r));
		}, [y, l]),
		throttleMs: u
	});
	return {
		hoveredAnnotation: d,
		mouseHandlers: i(() => S, [S])
	};
}
//#endregion
//#region src/hooks/useInteractionFocus.ts
function C({ enableEditing: e, isDrawing: r, isCreationEditorOpen: s, isDragging: c, draggingAnnotationId: l, hasPendingChanges: u, annotations: d, hoveredAnnotation: f, lockEditSessionOnHover: p = !0 }) {
	let [m, h] = o(null), g = a(null), _ = r || s, [v, y] = o(_);
	_ !== v && (y(_), _ && (g.current = null, h(null)));
	let b = t(() => {
		g.current = null, h(null);
	}, []), x = t((e) => {
		g.current = e, h(e);
	}, []), S = t(() => {
		p && b();
	}, [p, b]);
	n(() => {
		if (!e || _ || !p) return;
		let t = f?.data?.id;
		t != null && (g.current ?? (g.current = t, h(t)));
	}, [
		e,
		_,
		p,
		f?.data?.id
	]);
	let C = i(() => {
		for (let e of d) {
			let t = e.data?.id;
			if (t != null && u(t)) return t;
		}
	}, [d, u]), w = i(() => _ ? null : c && l != null ? l : C ?? (e && m != null ? m : null), [
		_,
		c,
		l,
		C,
		e,
		m
	]);
	return {
		effectiveTopAnnotation: i(() => {
			if (!_) return w == null ? f : d.find((e) => e.data?.id === w);
		}, [
			_,
			w,
			d,
			f
		]),
		focusAnnotationId: w,
		clearEditingSession: b,
		engageEdit: x,
		onContainerMouseLeave: S
	};
}
//#endregion
//#region src/hooks/useSelectorMethods.ts
function w({ selectors: e, effectiveType: n, value: r, onChange: i, disableAnnotation: a }) {
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
var T = 100;
function E(e) {
	let { x: t = 0, y: n = 0, width: r = 0, height: i = 0 } = e;
	return r = Math.max(r, 0), i = Math.max(i, 0), t = Math.min(t, T - r), n = Math.min(n, T - i), {
		...e,
		x: t,
		y: n,
		width: r,
		height: i
	};
}
function ee({ annotations: e, onAnnotationsChange: n, imageRef: r, previewMode: i = !1 }) {
	let [s, c] = o(!1), [l, u] = o(void 0), [d, f] = o(() => /* @__PURE__ */ new Map()), p = a(null), m = a(null);
	m.current ||= /* @__PURE__ */ new Map();
	let h = t(() => {
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
		let a = E(r);
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
				c.height = Math.min((n.height ?? 0) - s / a * T, (n.y ?? 0) + (n.height ?? 0)), c.y = Math.max((n.y ?? 0) + s / a * T, 0);
				break;
			case "right":
				c.width = Math.min((n.width ?? 0) + o / i * T, T - (n.x ?? 0));
				break;
			case "bottom":
				c.height = Math.min((n.height ?? 0) + s / a * T, T - (n.y ?? 0));
				break;
			case "left":
				c.width = Math.min((n.width ?? 0) - o / i * T, (n.x ?? 0) + (n.width ?? 0)), c.x = Math.max((n.x ?? 0) + o / i * T, 0);
				break;
			default: break;
		}
		return E(c);
	}, [h]), v = t((e, t) => {
		let { width: n, height: r } = h(), i = e.clientX - t.initialCursorPosition.x, a = e.clientY - t.initialCursorPosition.y, o = t.initialGeometry;
		return E({
			...o,
			x: Math.max(Math.min((o.x ?? 0) + i / n * T, T - (o.width ?? 0)), 0),
			y: Math.max(Math.min((o.y ?? 0) + a / r * T, T - (o.height ?? 0)), 0)
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
	}, [v, g]), w = t(() => {
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
	let { src: s, alt: c = "Annotation Image", style: l, className: u, containerRef: d, imageRef: f, annotations: p, type: m, selectors: h, value: g, onChange: _, onSubmit: v, activeAnnotationComparator: y, activeAnnotations: b, editModeAnnotationIds: x, disableAnnotation: T, drawingCursor: E, disableSelector: re, disableEditor: D, disableOverlay: O, showOverlayOnce: ie, disableContent: ae, disableHitTesting: oe, allowTouch: k, enableEditing: A = !1, onAnnotationsChange: se, renderSelector: ce, renderEditor: le, renderHighlight: j, renderDraggableHighlight: ue, renderContent: de, renderOverlay: fe, enableRemoval: M, onRemoveAnnotation: pe, canRemoveAnnotation: me, renderDelete: he, onConfirm: N, onReset: P, onImageMouseUp: F, onImageMouseDown: ge, onImageMouseMove: _e, onImageClick: I, onImageLoad: ve, onImageError: ye } = e, L = a(null), R = a(null), z = !!(N && P), B = g?.selection?.mode === "SELECTING" || g?.selection?.mode === "COLLECTING_POINTS", V = !!g?.selection?.showEditor, H = B || V, U = ie && H, [be, xe] = o(!1), [Se, Ce] = o(U), we = !ae && !!de;
	U !== Se && (Ce(U), U && xe(!0));
	let Te = !H && !(ie && be), { isDragging: W, draggingAnnotationId: Ee, hasPendingChanges: De, onDotDragStart: Oe, onDotDrag: ke, onMoveStart: Ae, onMove: je, onDragEnd: Me, handleConfirm: Ne, handleReset: Pe, getEffectiveAnnotation: Fe } = ee({
		annotations: p,
		onAnnotationsChange: se,
		imageRef: L,
		previewMode: z
	}), { hoveredAnnotation: G, mouseHandlers: K } = S({
		targetRef: R,
		imageRef: L,
		annotations: p,
		selectors: h,
		enableEditing: A,
		suppressHover: B || V,
		throttleMs: 50
	}), { effectiveTopAnnotation: Ie, focusAnnotationId: Le, clearEditingSession: Re, engageEdit: q, onContainerMouseLeave: J } = C({
		enableEditing: A,
		isDrawing: B,
		isCreationEditorOpen: V,
		isDragging: W,
		draggingAnnotationId: Ee,
		hasPendingChanges: De,
		annotations: p,
		hoveredAnnotation: G,
		lockEditSessionOnHover: !we
	});
	n(() => {
		W && Ee != null && q(Ee);
	}, [
		W,
		Ee,
		q
	]);
	let ze = i(() => ({
		onDotDragStart: Oe,
		onDotDrag: ke,
		onMoveStart: Ae,
		onMove: je,
		onDragEnd: Me
	}), [
		Oe,
		ke,
		Ae,
		je,
		Me
	]), Be = t((e) => {
		Ne(e), N?.(e), Re();
	}, [
		Ne,
		N,
		Re
	]), Ve = t((e) => {
		Pe(e), P?.(e), Re();
	}, [
		Pe,
		P,
		Re
	]), He = m || h[0]?.TYPE, Ue = t((e) => {
		R.current && (R.current.style.cursor = e);
	}, []), We = t(() => {
		R.current && R.current.style.removeProperty("cursor");
	}, []);
	n(() => {
		if (!E || !B) {
			document.body.style.removeProperty("cursor");
			return;
		}
		let e = document.body.style.cursor;
		return document.body.style.cursor = E, () => {
			document.body.style.cursor = e;
		};
	}, [E, B]);
	let { callSelectorMethod: Y } = w({
		selectors: h,
		effectiveType: He,
		value: g,
		onChange: _,
		disableAnnotation: T
	}), Ge = t((e) => {
		navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && k && e.preventDefault(), Y("onTouchStart", e);
	}, [k, Y]), X = t((e) => {
		Y("onTouchEnd", e);
	}, [Y]), Ke = t((e) => {
		K.onTouchMove(e), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && k && e.preventDefault(), Y("onTouchMove", e);
	}, [
		K,
		k,
		Y
	]), qe = t((e) => {
		K.onTouchLeave(e);
	}, [K]);
	n(() => {
		let e = R.current;
		if (!(!k || !e)) return e.ontouchstart = Ge, e.ontouchend = X, e.ontouchmove = Ke, e.ontouchcancel = qe, () => {
			e.ontouchstart = null, e.ontouchend = null, e.ontouchmove = null, e.ontouchcancel = null;
		};
	}, [
		k,
		Ge,
		X,
		Ke,
		qe
	]);
	let Je = t((e) => {
		L.current = e, ne(r, e), ne(f, e);
	}, [r, f]), Ye = t((e) => {
		R.current = e;
	}, []), Xe = t((e) => {
		ne(d, e);
	}, [d]), Ze = t((e) => {
		K.onMouseMove(e.nativeEvent), _e?.(e), Y("onMouseMove", e);
	}, [
		K,
		_e,
		Y
	]), Qe = t((e) => {
		K.onMouseLeave(e.nativeEvent), J();
	}, [K, J]), $e = t((e) => {
		F?.(e), Y("onMouseUp", e), E && !T && (We(), B || document.body.style.removeProperty("cursor"));
	}, [
		F,
		Y,
		E,
		T,
		We,
		B
	]), et = t((e) => {
		E && !T && (Ue(E), document.body.style.cursor = E);
		let t = g?.selection?.mode === "SELECTING" || g?.selection?.mode === "COLLECTING_POINTS" || !!g?.selection?.showEditor, n = Ie?.data?.id;
		if (A && !t && !V && n != null) {
			we && q(n), ge?.(e);
			return;
		}
		ge?.(e), Y("onMouseDown", e);
	}, [
		E,
		T,
		Ue,
		A,
		we,
		Ie?.data?.id,
		V,
		g?.selection?.mode,
		g?.selection?.showEditor,
		q,
		ge,
		Y
	]), Z = t((e) => {
		I?.(e), Y("onClick", e);
	}, [I, Y]), Q = t(() => {
		v && g && v(g);
	}, [v, g]), $ = t((e) => {
		e.key === "Escape" && _ && (g?.selection?.showEditor || g?.geometry) && _({
			selection: void 0,
			geometry: void 0,
			data: void 0
		});
	}, [g, _]);
	n(() => {
		if (g?.selection?.showEditor || g?.selection?.mode === "COLLECTING_POINTS") return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
	}, [
		g?.selection?.showEditor,
		g?.selection?.mode,
		$
	]);
	let tt = Ie, { pinnedControlsId: nt, onDeleteControlMouseEnter: rt, onDeleteControlMouseLeave: it } = te(Ie), at = t((e, t) => {
		let n = e.data?.id;
		return n != null && nt != null && n === nt ? !0 : b && b.some((t) => y ? y(e, t) : e.data.id === t) || t === e;
	}, [
		b,
		y,
		nt
	]);
	return {
		setContainerRef: Xe,
		style: l,
		className: u,
		onContainerMouseLeave: Qe,
		onContainerTouchCancel: qe,
		onContainerMouseMove: Ze,
		setImageRef: Je,
		src: s,
		alt: c,
		annotations: p,
		layoutOptions: {
			touchEnabled: k,
			selectorDisabled: !!re || A && W,
			overlayDisabled: !!O,
			overlayHoverEnabled: Te,
			editorDisabled: !!D || A && W,
			contentDisabled: !!ae,
			hitTestingDisabled: !!oe || A && W || V,
			enableEditing: A,
			drawingCursor: E,
			disableAnnotation: T
		},
		onImageLoad: ve,
		onImageError: ye,
		annotationState: {
			getIsActive: at,
			topAnnotation: tt,
			editModeIds: x,
			isDragging: W,
			draggingAnnotationId: Ee,
			hasPendingChanges: De,
			getEffectiveAnnotation: A ? Fe : void 0,
			draggingHandlers: A ? ze : void 0,
			focusAnnotationId: Le,
			showContentOnHover: we,
			engageEdit: A && we ? q : void 0,
			onConfirm: A ? Be : void 0,
			onReset: A ? Ve : void 0,
			enableRemoval: M,
			onRemoveAnnotation: pe,
			canRemoveAnnotation: me,
			onDeleteControlMouseEnter: rt,
			onDeleteControlMouseLeave: it
		},
		value: g,
		isDrawing: B,
		isCreatingAnnotation: H,
		setTargetRef: Ye,
		onInteractionTargetClick: Z,
		onInteractionTargetMouseUp: $e,
		onInteractionTargetMouseDown: et,
		effectiveType: He,
		onChange: _,
		onEditorSubmit: Q,
		renderSlots: {
			renderHighlight: j,
			renderDraggableHighlight: ue,
			renderSelector: ce,
			renderOverlay: fe,
			renderContent: de,
			renderEditor: le,
			renderDelete: he
		}
	};
}
//#endregion
//#region src/components/Point/index.tsx
var D = s.div`
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
function O(e) {
	let { geometry: t } = e.annotation;
	return t ? /* @__PURE__ */ d(D, { style: {
		top: `${t.y}%`,
		left: `${t.x}%`
	} }) : null;
}
//#endregion
//#region src/components/TextEditor/index.tsx
var ie = s.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, ae = s.div`
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
`, oe = ({ onChange: t, onSubmit: n, onFocus: r, onBlur: i, value: a }) => {
	let o = e.useRef(null);
	return e.useEffect(() => {
		o.current?.focus({ preventScroll: !0 });
	}, []), /* @__PURE__ */ f(e.Fragment, { children: [/* @__PURE__ */ d(ie, { children: /* @__PURE__ */ d("textarea", {
		ref: o,
		placeholder: "Write description",
		onFocus: r,
		onBlur: i,
		onChange: t,
		value: a
	}) }), a && /* @__PURE__ */ d(ae, {
		onClick: n,
		children: "Save description"
	})] });
}, k = {}, A = {}, se = l`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, ce = s.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  pointer-events: auto;
  transform-origin: top left;
  animation: ${se} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, le = ({ annotation: e, onChange: t, onSubmit: n, className: r = "", style: i = k }) => e.geometry ? /* @__PURE__ */ d(ce, {
	className: r,
	style: i,
	children: /* @__PURE__ */ d(oe, {
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
}) : null, j = s.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, ue = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function de({ annotation: e, className: t = "", style: n = k }) {
	let { geometry: r } = e;
	return r ? /* @__PURE__ */ f(ue, {
		className: t,
		style: n,
		children: [
			/* @__PURE__ */ d(j, { style: {
				height: `${r.y}%`,
				width: "100%"
			} }),
			/* @__PURE__ */ d(j, { style: {
				top: `${r.y}%`,
				height: `${r.height}%`,
				width: `${r.x}%`
			} }),
			/* @__PURE__ */ d(j, { style: {
				top: `${r.y}%`,
				left: `${r.x + r.width}%`,
				height: `${r.height}%`,
				width: `${100 - (r.x + r.width)}%`
			} }),
			/* @__PURE__ */ d(j, { style: {
				top: `${r.y + r.height}%`,
				height: `${100 - (r.y + r.height)}%`,
				width: "100%"
			} })
		]
	}) : null;
}
//#endregion
//#region src/components/Rectangle/index.tsx
var fe = s.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function M({ annotation: e, className: t = "", style: n = k, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ d(fe, {
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
var pe = s.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function me({ annotation: e, className: t = "", style: n = k, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ d(pe, {
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
//#region src/components/Polygon/index.tsx
var he = 3, N = 10;
function P(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function F({ annotation: e, className: t, style: n, active: r }) {
	let { geometry: i, selection: a } = e;
	if (!i || !i.points || i.points.length === 0) return null;
	let o = i.points, s = a?.cursorX, c = a?.cursorY, l = a?.mode === "COLLECTING_POINTS", u = o.length >= 3, p = o[0], m = l && u && s !== void 0 && c !== void 0 && P({
		x: s,
		y: c
	}, p) < he, h = o.map((e) => `${e.x},${e.y}`).join(" ");
	return /* @__PURE__ */ f("div", {
		className: t,
		style: {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			pointerEvents: "none",
			...n
		},
		children: [/* @__PURE__ */ f("svg", {
			viewBox: "0 0 100 100",
			preserveAspectRatio: "none",
			style: {
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				overflow: "visible",
				pointerEvents: "none"
			},
			children: [
				!l && o.length >= 3 && /* @__PURE__ */ d("polygon", {
					points: h,
					fill: "rgba(0,0,0,0.1)",
					stroke: r ? "yellow" : "black",
					strokeWidth: "2",
					strokeDasharray: r ? void 0 : "5,3",
					strokeLinejoin: "round",
					vectorEffect: "non-scaling-stroke"
				}),
				l && o.length > 1 && /* @__PURE__ */ d("polyline", {
					points: h,
					fill: "none",
					stroke: "rgba(0,0,0,0.85)",
					strokeWidth: "2",
					strokeDasharray: "6,3",
					strokeLinejoin: "round",
					vectorEffect: "non-scaling-stroke"
				}),
				l && m && /* @__PURE__ */ d("line", {
					x1: o[o.length - 1].x,
					y1: o[o.length - 1].y,
					x2: p.x,
					y2: p.y,
					stroke: "rgba(0,128,0,0.7)",
					strokeWidth: "2",
					strokeDasharray: "6,3",
					vectorEffect: "non-scaling-stroke"
				}),
				l && !m && s !== void 0 && c !== void 0 && /* @__PURE__ */ d("line", {
					x1: o[o.length - 1].x,
					y1: o[o.length - 1].y,
					x2: s,
					y2: c,
					stroke: "rgba(0,0,0,0.4)",
					strokeWidth: "2",
					strokeDasharray: "6,3",
					vectorEffect: "non-scaling-stroke"
				})
			]
		}), l && o.map((e, t) => {
			let n = t === 0, r = n && m;
			return /* @__PURE__ */ d("div", { style: {
				position: "absolute",
				left: `${e.x}%`,
				top: `${e.y}%`,
				width: N,
				height: N,
				transform: "translate(-50%, -50%)",
				borderRadius: "50%",
				boxSizing: "border-box",
				backgroundColor: r ? "rgba(0,180,0,0.9)" : n ? "white" : "rgba(0,0,0,0.85)",
				border: `1.5px solid ${r ? "white" : n ? "rgba(0,0,0,0.85)" : "white"}`
			} }, t);
		})]
	});
}
//#endregion
//#region src/components/Content/index.tsx
var ge = s.div`
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
function _e({ annotation: e, style: t = k, className: n = "" }) {
	let { geometry: r } = e;
	return !r || r.x === void 0 || r.y === void 0 || r.width === void 0 || r.height === void 0 ? null : /* @__PURE__ */ d(ge, {
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
var I = s.div`
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
`, ve = () => /* @__PURE__ */ d("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": !0,
	children: /* @__PURE__ */ d("path", {
		d: "M12 3V9M12 3L9 6M12 3L15 6M12 15V21M12 21L15 18M12 21L9 18M3 12H9M3 12L6 15M3 12L6 9M15 12H21M21 12L18 9M21 12L18 15",
		stroke: "#ffffff",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), ye = 20, L = 24;
function R(e) {
	return /* @__PURE__ */ d("svg", {
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": !0,
		...e,
		children: /* @__PURE__ */ d("path", {
			d: "M6.99 7.01C6.6 7.4 6.6 8.03 6.99 8.42L10.58 12.01L6.99 15.59C6.6 15.98 6.6 16.61 6.99 17.01C7.39 17.4 8.02 17.4 8.41 17.01L11.99 13.42L15.58 17.01C15.97 17.4 16.6 17.4 16.99 17.01C17.38 16.61 17.38 15.98 16.99 15.59L13.41 12.01L16.99 8.42C17.38 8.03 17.38 7.4 16.99 7.01C16.6 6.62 15.97 6.62 15.58 7.01L11.99 10.59L8.41 7.01C8.02 6.62 7.39 6.62 6.99 7.01Z",
			fill: "currentColor"
		})
	});
}
//#endregion
//#region src/components/DraggableComponents/DeleteButton.tsx
var z = s.button`
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
`, B = s(R)`
  width: 12px;
  height: 12px;
  color: #0f0f0f;
  flex-shrink: 0;
`, V = ({ annotationId: e, onRemove: t, disabled: n, className: r, style: i }) => /* @__PURE__ */ d(z, {
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
	children: /* @__PURE__ */ d(B, {})
});
//#endregion
//#region src/components/DraggableComponents/deleteButtonPosition.ts
function H(e) {
	return !e || typeof e.x != "number" || typeof e.y != "number" || typeof e.width != "number" ? null : {
		left: `calc(${e.x}% + ${e.width}%)`,
		top: `calc(${e.y}%)`,
		transform: "translate(-50%, -50%)"
	};
}
var U = {
	position: "absolute",
	top: 0,
	right: 0,
	transform: "translate(50%, -50%)",
	width: 24,
	height: 24,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	pointerEvents: "auto",
	zIndex: 20
}, be = s.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
  z-index: 20;
`, xe = s.button`
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
`, Se = ({ onConfirm: e, onReset: t }) => /* @__PURE__ */ f(be, {
	onMouseDown: (e) => e.stopPropagation(),
	children: [/* @__PURE__ */ d(xe, {
		type: "button",
		onClick: (t) => {
			t.stopPropagation(), e();
		},
		children: "✓"
	}), /* @__PURE__ */ d(xe, {
		type: "button",
		onClick: (e) => {
			e.stopPropagation(), t();
		},
		children: "✕"
	})]
}), Ce = s.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.3);
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
`, we = s.div`
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
`, Te = ({ position: e, onDragStart: t, onDrag: n, onDragEnd: r, annotationId: i }) => /* @__PURE__ */ d(Ce, {
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
}), W = ({ onMoveStart: e, onMove: t, onMoveEnd: n, annotationId: r }) => /* @__PURE__ */ d(we, {
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
	children: /* @__PURE__ */ d(ve, {})
}), Ee = 36, De = s.div`
  position: absolute;
  border: none;
  background: rgba(151, 151, 151, 0.3);
  border-radius: 3px;
  pointer-events: auto;
  z-index: 10;
  box-sizing: border-box;
`, Oe = ({ annotation: e, isDragging: t, hasPendingChanges: r, onDotDragStart: i, onDotDrag: o, onMoveStart: s, onMove: c, onDragEnd: l, enableRemoval: u, onRemoveAnnotation: p, onConfirm: m, onReset: h, onDeleteControlMouseEnter: g, onDeleteControlMouseLeave: _, allowResetOnMouseLeave: v = !0 }) => {
	let { geometry: y } = e, b = e.data?.id, x = a(null), S = (t || r) && m && h;
	if (n(() => {
		if (!v || t || r || !h || b == null) return;
		let e = (e) => {
			let t = x.current;
			if (!t) return;
			let n = t.getBoundingClientRect(), { clientX: r, clientY: i } = e, a = Ee;
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
	return /* @__PURE__ */ f(De, {
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
			/* @__PURE__ */ d(Te, {
				position: "top",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ d(Te, {
				position: "right",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ d(Te, {
				position: "bottom",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ d(Te, {
				position: "left",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ d(W, {
				onMoveStart: s,
				onMove: c,
				onMoveEnd: l,
				annotationId: C
			}),
			u && p && b != null && /* @__PURE__ */ d("div", {
				style: U,
				onMouseEnter: () => g?.(b),
				onMouseLeave: () => _?.(),
				onPointerEnter: () => g?.(b),
				onPointerLeave: () => _?.(),
				children: /* @__PURE__ */ d(V, {
					annotationId: b,
					onRemove: p
				})
			}),
			S && /* @__PURE__ */ d(Se, {
				onConfirm: () => m(b),
				onReset: () => h(b)
			})
		]
	});
}, ke = "RECTANGLE";
function Ae({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let i = Math.min(n.x, n.x + n.width), a = Math.max(n.x, n.x + n.width), o = Math.min(n.y, n.y + n.height), s = Math.max(n.y, n.y + n.height);
	return !(e < i || t < o || e > a || t > s);
}
function je(e, t) {
	return !e || e.width <= 0 || e.height <= 0 ? 0 : Math.abs(e.width) * Math.abs(e.height);
}
var Me = {
	onTouchStart(e, t) {
		return Ne(e, t);
	},
	onTouchEnd(e, t) {
		return Pe(e, t);
	},
	onTouchMove(e, t) {
		return Fe(e, t);
	},
	onMouseDown(e, t) {
		return Ne(e, t);
	},
	onMouseUp(e, t) {
		return Pe(e, t);
	},
	onMouseMove(e, t) {
		return Fe(e, t);
	}
};
function Ne(e, t) {
	if (e.selection) return {};
	{
		let { x: n, y: r } = g(t);
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
function Pe(e, t) {
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
function Fe(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = g(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: ke,
				x: o > 0 ? n : i,
				y: s > 0 ? r : a,
				width: Math.abs(o),
				height: Math.abs(s)
			}
		};
	}
	return e;
}
var G = {
	TYPE: ke,
	intersects: Ae,
	area: je,
	methods: Me
}, K = 6, Ie = (e = {
	width: 100,
	height: 100
}) => ({
	marginX: K / e.width * 100,
	marginY: K / e.height * 100
}), Le = "POINT";
function Re({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let { marginX: i, marginY: a } = Ie(r), o = Math.min(i, a) / 2, s = Math.abs(e - n.x), c = Math.abs(t - n.y);
	return s <= o && c <= o;
}
function q(e, t) {
	return 0;
}
var J = {
	TYPE: Le,
	intersects: Re,
	area: q,
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
				...g(t),
				width: 0,
				height: 0,
				type: Le
			}
		};
	} }
}, ze = (e) => e ** 2, Be = "OVAL";
function Ve({ x: e, y: t }, n, r) {
	if (!n || !n.width || !n.height) return !1;
	let i = Math.abs(n.width), a = Math.abs(n.height), o = {
		x: n.x + i / 2,
		y: n.y + a / 2
	}, s = i / 2, c = a / 2;
	if (s === 0 || c === 0) return !1;
	let l = e - o.x, u = t - o.y;
	return ze(l) / ze(s) + ze(u) / ze(c) <= 1;
}
function He(e, t) {
	if (!e || e.width <= 0 || e.height <= 0) return 0;
	let n = Math.abs(e.width), r = Math.abs(e.height);
	return n / 2 * Math.PI * (r / 2);
}
var Ue = {
	onTouchStart(e, t) {
		return We(e, t);
	},
	onTouchEnd(e, t) {
		return Y(e, t);
	},
	onTouchMove(e, t) {
		return Ge(e, t);
	},
	onMouseDown(e, t) {
		if (!e.geometry) {
			let { x: n, y: r } = g(t);
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
			let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = g(t);
			return {
				...e,
				geometry: {
					...e.geometry,
					type: Be,
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
function We(e, t) {
	if (e.selection) return {};
	{
		let { x: n, y: r } = g(t);
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
function Y(e, t) {
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
function Ge(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = g(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: Be,
				x: o > 0 ? n : i,
				y: s > 0 ? r : a,
				width: Math.abs(o),
				height: Math.abs(s)
			}
		};
	}
	return e;
}
var X = {
	TYPE: Be,
	intersects: Ve,
	area: He,
	methods: Ue
}, Ke = "POLYGON", qe = 3, Je = 350, Ye = 2;
function Xe(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function Ze(e) {
	let t = e.map((e) => e.x), n = e.map((e) => e.y), r = Math.min(...t), i = Math.min(...n);
	return {
		x: r,
		y: i,
		width: Math.max(...t) - r,
		height: Math.max(...n) - i
	};
}
function Qe({ x: e, y: t }, n) {
	if (!n || !n.points || n.points.length < 3) return !1;
	let r = n.points, i = !1;
	for (let n = 0, a = r.length - 1; n < r.length; a = n++) {
		let o = r[n].x, s = r[n].y, c = r[a].x, l = r[a].y;
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (i = !i);
	}
	return i;
}
function $e(e) {
	if (!e || !e.points || e.points.length < 3) return 0;
	let t = e.points, n = 0;
	for (let e = 0, r = t.length - 1; e < t.length; r = e++) n += (t[r].x + t[e].x) * (t[r].y - t[e].y);
	return Math.abs(n / 2);
}
function et(e) {
	let t = Ze(e.geometry?.points || []);
	return {
		...e,
		geometry: {
			...e.geometry,
			...t
		},
		selection: {
			...e.selection,
			mode: "EDITING",
			showEditor: !0,
			lastClickX: void 0,
			lastClickY: void 0,
			lastClickTime: void 0,
			cursorX: void 0,
			cursorY: void 0
		}
	};
}
var Z = {
	TYPE: Ke,
	intersects: Qe,
	area: $e,
	methods: {
		onClick(e, t) {
			let { x: n, y: r } = g(t);
			if (n == null) return e;
			let i = e.selection?.mode, a = e.geometry?.points || [];
			if (i !== "COLLECTING_POINTS") return {
				...e,
				selection: {
					...e.selection,
					mode: "COLLECTING_POINTS",
					lastClickX: n,
					lastClickY: r,
					lastClickTime: Date.now()
				},
				geometry: {
					type: Ke,
					points: [{
						x: n,
						y: r
					}]
				}
			};
			let o = Date.now() - (e.selection?.lastClickTime || 0), s = e.selection?.lastClickX ?? n, c = e.selection?.lastClickY ?? r;
			return o < Je && Xe({
				x: n,
				y: r
			}, {
				x: s,
				y: c
			}) < Ye && a.length >= 3 || a.length >= 3 && Xe({
				x: n,
				y: r
			}, a[0]) < qe ? et(e) : a.length >= 50 ? a.length >= 3 ? et(e) : e : {
				...e,
				selection: {
					...e.selection,
					mode: "COLLECTING_POINTS",
					lastClickX: n,
					lastClickY: r,
					lastClickTime: Date.now()
				},
				geometry: {
					...e.geometry,
					type: Ke,
					points: [...a, {
						x: n,
						y: r
					}]
				}
			};
		},
		onMouseMove(e, t) {
			if (e.selection?.mode !== "COLLECTING_POINTS") return e;
			let { x: n, y: r } = g(t);
			return n == null ? e : {
				...e,
				selection: {
					...e.selection,
					cursorX: n,
					cursorY: r
				}
			};
		}
	},
	MAX_POINTS: 50
}, Q = {
	disableAnnotation: !1,
	disableSelector: !1,
	disableEditor: !1,
	disableOverlay: !1,
	showOverlayOnce: !1,
	disableContent: !1,
	disableHitTesting: !1,
	allowTouch: !1,
	type: G.TYPE,
	selectors: [
		G,
		J,
		X,
		Z
	],
	activeAnnotationComparator: (e, t) => e === t,
	enableEditing: !1,
	onAnnotationsChange: () => {
		process.env.NODE_ENV !== "production" && console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.");
	},
	renderSelector: ({ annotation: e }) => {
		switch (e.geometry?.type) {
			case G.TYPE: return /* @__PURE__ */ d(de, { annotation: e });
			case J.TYPE: return /* @__PURE__ */ d(O, { annotation: e });
			case X.TYPE: return /* @__PURE__ */ d(me, { annotation: e });
			case Z.TYPE: return /* @__PURE__ */ d(F, { annotation: e });
			default: return null;
		}
	},
	renderEditor: ({ annotation: e, onChange: t, onSubmit: n }) => /* @__PURE__ */ d(le, {
		annotation: e,
		onChange: t,
		onSubmit: n
	}),
	renderHighlight: ({ key: e, annotation: t, active: n }) => {
		switch (t.geometry.type) {
			case G.TYPE: return /* @__PURE__ */ d(M, {
				annotation: t,
				active: n
			}, e);
			case J.TYPE: return /* @__PURE__ */ d(O, { annotation: t }, e);
			case X.TYPE: return /* @__PURE__ */ d(me, {
				annotation: t,
				active: n
			}, e);
			case Z.TYPE: return /* @__PURE__ */ d(F, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	},
	renderContent: ({ key: e, annotation: t }) => /* @__PURE__ */ d(_e, { annotation: t }, e),
	renderOverlay: ({ type: e, annotation: t } = A) => {
		switch (e) {
			case J.TYPE: return /* @__PURE__ */ d(I, { children: "Click to Annotate" });
			case Z.TYPE: return /* @__PURE__ */ d(I, { children: "Click to add points · Double-click or click first point to finish · Esc to cancel" });
			default: return /* @__PURE__ */ d(I, { children: "Click and Drag to Annotate" });
		}
	},
	renderDraggableHighlight: ({ key: e, annotation: t, active: n, isHovered: r, isDragging: i, hasPendingChanges: a, onDotDragStart: o, onDotDrag: s, onMoveStart: c, onMove: l, onDragEnd: u, enableRemoval: f, onRemoveAnnotation: p, onConfirm: m, onReset: h, onDeleteControlMouseEnter: g, onDeleteControlMouseLeave: _ }) => {
		if (!r && !i && !a) switch (t.geometry.type) {
			case G.TYPE: return /* @__PURE__ */ d(M, {
				annotation: t,
				active: n
			}, e);
			case J.TYPE: return /* @__PURE__ */ d(O, { annotation: t }, e);
			case X.TYPE: return /* @__PURE__ */ d(me, {
				annotation: t,
				active: n
			}, e);
			case Z.TYPE: return /* @__PURE__ */ d(F, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
		if (t.geometry.type === G.TYPE) return /* @__PURE__ */ d(Oe, {
			annotation: t,
			active: n,
			isHovered: r,
			isDragging: i,
			hasPendingChanges: a,
			onDotDragStart: o,
			onDotDrag: s,
			onMoveStart: c,
			onMove: l,
			onDragEnd: u,
			enableRemoval: f,
			onRemoveAnnotation: p,
			onConfirm: m,
			onReset: h,
			onDeleteControlMouseEnter: g,
			onDeleteControlMouseLeave: _
		}, `${e}-editor`);
		switch (t.geometry.type) {
			case J.TYPE: return /* @__PURE__ */ d(O, { annotation: t }, e);
			case X.TYPE: return /* @__PURE__ */ d(me, {
				annotation: t,
				active: n
			}, e);
			case Z.TYPE: return /* @__PURE__ */ d(F, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	}
}, $ = 8, tt = 6;
function nt(e) {
	return !!e && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number";
}
function rt({ placement: e, geometry: t, containerHeight: n, overlayHeight: r, offsetPx: i }) {
	if (e === "above") return "above";
	if (e === "below") return "below";
	let a = t.y / 100 * n, o = (t.y + t.height) / 100 * n, s = r + i + $, c = n - o, l = a;
	return c >= s ? "below" : l >= s || l >= c ? "above" : "below";
}
function it({ annotation: e, containerRef: t, placement: n = "auto", offsetPx: i = tt, className: s, style: c, children: l }) {
	let u = a(null), [f, p] = o({
		x: 0,
		y: 0
	}), [m, h] = o(n === "above" ? "above" : "below"), { geometry: g } = e;
	return r(() => {
		let e = u.current, r = t.current;
		if (!e || !r || !nt(g)) return;
		let a = r.getBoundingClientRect(), o = e.offsetHeight, s = rt({
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
		let d = 0;
		c.bottom > a.bottom - $ && (d = a.bottom - $ - c.bottom), c.top + d < a.top + $ && (d = a.top + $ - c.top), p((e) => e.x === l && e.y === d ? e : {
			x: l,
			y: d
		});
	}, [
		g,
		t,
		n,
		i,
		m
	]), nt(g) ? /* @__PURE__ */ d("div", {
		ref: u,
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
var at = s.div`
  position: absolute;
  pointer-events: auto;
  z-index: 10;
  width: ${24}px;
  height: ${24}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ot({ annotation: e, onRemove: n, renderDelete: r, disabled: i, onDeleteControlMouseEnter: a, onDeleteControlMouseLeave: s }) {
	let [c, l] = o(!1), u = e.data?.id, f = H(e.geometry), p = i || c, m = t(async () => {
		if (!(p || u == null)) {
			l(!0);
			try {
				await n(u);
			} finally {
				l(!1);
			}
		}
	}, [
		u,
		p,
		n
	]), h = t(() => {
		u != null && a?.(u);
	}, [u, a]), g = t(() => {
		s?.();
	}, [s]);
	if (!f || u == null) return null;
	let _ = {
		onMouseEnter: h,
		onMouseLeave: g,
		onPointerEnter: h,
		onPointerLeave: g
	};
	return r ? /* @__PURE__ */ d(at, {
		style: f,
		..._,
		children: r({
			key: u,
			annotation: e,
			active: !0,
			onRemove: m,
			disabled: p
		})
	}) : /* @__PURE__ */ d(at, {
		style: f,
		className: "annotation-delete",
		..._,
		children: /* @__PURE__ */ d(V, {
			annotationId: u,
			onRemove: m,
			disabled: p
		})
	});
}
//#endregion
//#region src/components/AnnotationLayout.tsx
var st = s.div`
  clear: both;
  position: relative;
  width: 100%;
  overflow: visible;

  ${(e) => e.$overlayHoverEnabled && c`
      &:hover ${I} {
        opacity: 1;
      }
    `}

  touch-action: ${(e) => e.$allowTouch ? "pinch-zoom" : "auto"};
  ${(e) => e.$cursor ? `cursor: ${e.$cursor};` : ""}
`, ct = s.img`
  display: block;
  width: 100%;
  user-select: none;
`, lt = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, ut = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: ${(e) => e.$hitTestingDisabled ? "none" : "auto"};
  ${(e) => e.$cursor ? `cursor: ${e.$cursor};` : ""}
`, dt = s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  pointer-events: none;
  overflow: visible;
`, ft = s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  pointer-events: none;
  overflow: visible;
`;
function pt({ annotationId: e, annotation: t, active: n, slot: r }) {
	return /* @__PURE__ */ d(u, { children: r({
		key: e,
		annotation: t,
		active: n
	}) });
}
function mt({ annotationId: e, annotation: t, slot: n, containerRef: r, onEngageEdit: i }) {
	return /* @__PURE__ */ d(it, {
		annotation: t,
		containerRef: r,
		placement: "auto",
		children: /* @__PURE__ */ d("div", {
			style: {
				pointerEvents: "auto",
				display: "inline-block"
			},
			onMouseDown: (t) => {
				t.stopPropagation(), i?.(e);
			},
			role: "button",
			children: n({
				key: e,
				annotation: t
			})
		})
	});
}
function ht({ enableRemoval: e, onRemoveAnnotation: t, isActive: n, annotation: r, canRemoveAnnotation: i, enableEditing: a, draggableHighlightSlot: o, isHovered: s }) {
	return !e || !t || !n || i && !i(r) ? !1 : !(a && o && s && r.geometry?.type === G.TYPE);
}
function gt({ setContainerRef: t, style: n, className: r, onContainerMouseLeave: i, onContainerTouchCancel: o, onContainerMouseMove: s, setImageRef: c, src: l, alt: u, annotations: p, renderSlots: m, layoutOptions: h, annotationState: g, value: _, isDrawing: v, isCreatingAnnotation: y, setTargetRef: b, onInteractionTargetClick: x, onInteractionTargetMouseUp: S, onInteractionTargetMouseDown: C, effectiveType: w, onChange: T, onEditorSubmit: E, onImageLoad: ee, onImageError: te, children: ne }) {
	let { renderHighlight: re, renderDraggableHighlight: D, renderSelector: O, renderOverlay: ie, renderContent: ae, renderEditor: oe, renderDelete: k } = m, { touchEnabled: A, selectorDisabled: se, overlayDisabled: ce, overlayHoverEnabled: le = !0, editorDisabled: j, contentDisabled: ue, hitTestingDisabled: de, enableEditing: fe, drawingCursor: M, disableAnnotation: pe } = h, me = M && !pe ? M : void 0, { getIsActive: he, topAnnotation: N, editModeIds: P, isDragging: F, draggingAnnotationId: ge, hasPendingChanges: _e, getEffectiveAnnotation: I, draggingHandlers: ve, onConfirm: ye, onReset: L, enableRemoval: R, onRemoveAnnotation: z, canRemoveAnnotation: B, onDeleteControlMouseEnter: V, onDeleteControlMouseLeave: H, focusAnnotationId: U, showContentOnHover: be = !1, engageEdit: xe } = g, Se = P ? new Set(P) : void 0, Ce = a(null);
	return /* @__PURE__ */ f(st, {
		ref: t,
		style: n,
		className: r,
		onMouseLeave: i,
		onTouchCancel: o,
		onMouseMove: s,
		$allowTouch: A,
		$cursor: v ? M : void 0,
		$overlayHoverEnabled: le,
		children: [
			/* @__PURE__ */ d(ct, {
				ref: c,
				src: l,
				alt: u,
				onLoad: ee,
				onError: te
			}),
			/* @__PURE__ */ f(lt, { children: [p.map((e) => {
				let t = e.data?.id;
				if (!t) return null;
				let n = he(e, N);
				N?.data?.id, _e?.(t);
				let r = I ? I(e) : e;
				return re ? /* @__PURE__ */ d(pt, {
					annotationId: t,
					annotation: r,
					active: n,
					slot: re
				}, t) : null;
			}), !se && _?.geometry && O && O({ annotation: _ })] }),
			/* @__PURE__ */ d(ut, {
				ref: b,
				"data-testid": "annotation-target",
				"data-is-drawing": v && M ? !0 : void 0,
				$hitTestingDisabled: de,
				$cursor: me,
				onClick: x,
				onMouseUp: S,
				onMouseDown: C
			}),
			fe && D && ve && /* @__PURE__ */ d(dt, { children: p.map((t) => {
				let n = t.data?.id;
				if (!n) return null;
				let r = he(t, N), i = N?.data?.id === n, a = F && ge === n, o = !!_e?.(n), s = U != null && U === n;
				if (!(a || o || s || i && !be)) return null;
				let c = I ? I(t) : t;
				return /* @__PURE__ */ d(e.Fragment, { children: D({
					key: n,
					annotation: c,
					active: r,
					isHovered: i,
					isDragging: !!a,
					hasPendingChanges: o,
					allowResetOnMouseLeave: !s && !(ye && L),
					...ve,
					enableRemoval: R,
					onRemoveAnnotation: z,
					onConfirm: ye,
					onReset: L,
					onDeleteControlMouseEnter: V,
					onDeleteControlMouseLeave: H
				}) }, `edit-chrome-${n}`);
			}) }),
			!ce && ie && ie({
				type: w,
				annotation: _,
				isCreating: y
			}),
			/* @__PURE__ */ f(ft, {
				ref: Ce,
				children: [p.map((t) => {
					let n = t.data?.id;
					if (!n) return null;
					let r = Se?.has(n) ?? !1, i = he(t, N), a = N?.data?.id === n, o = F && ge === n, s = !!_e?.(n), c = !ue && ae != null && (r || i && !(fe && D && ve && (U != null && U === n || o || s))), l = ht({
						enableRemoval: R,
						onRemoveAnnotation: z,
						isActive: i,
						annotation: t,
						canRemoveAnnotation: B,
						enableEditing: fe,
						draggableHighlightSlot: D,
						isHovered: a
					});
					return !c && !l ? null : /* @__PURE__ */ f(e.Fragment, { children: [c ? /* @__PURE__ */ d(mt, {
						annotationId: n,
						annotation: t,
						containerRef: Ce,
						onEngageEdit: xe,
						slot: ae
					}) : null, l && z ? /* @__PURE__ */ d(ot, {
						annotation: t,
						onRemove: z,
						renderDelete: k,
						onDeleteControlMouseEnter: V,
						onDeleteControlMouseLeave: H
					}) : null] }, n);
				}), !j && _?.selection?.showEditor && oe && T && /* @__PURE__ */ d(it, {
					annotation: _,
					containerRef: Ce,
					placement: "auto",
					offsetPx: 16,
					children: oe({
						annotation: _,
						onChange: T,
						onSubmit: E
					})
				})]
			}),
			ne
		]
	});
}
//#endregion
//#region src/components/Annotation.tsx
function _t({ ref: e, ...t }) {
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
	return /* @__PURE__ */ d(gt, {
		...re(r, e),
		children: n
	});
}
_t.displayName = "Annotation";
//#endregion
//#region src/hooks/useMouseHover.ts
function vt(e, t) {
	if (!e || typeof e.getBoundingClientRect != "function") return !1;
	let { pageX: n, pageY: r } = t, { left: i, right: a, bottom: o, top: s } = e.getBoundingClientRect();
	return n > i && n < a && r > s && r < o;
}
function yt() {
	let [e, r] = o(!1), i = a(null);
	return n(() => {
		let e = (e) => {
			let t = i.current, n = vt(t, {
				pageX: e.pageX,
				pageY: e.pageY
			});
			r(n);
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
function bt(e, t, n, r = "crosshair") {
	let i = e.trim();
	return `${i.startsWith("url(") ? i : `url("${i}")`} ${t} ${n}, ${r}`;
}
function xt(e, t, n, r = "crosshair") {
	return bt(`data:image/svg+xml,${encodeURIComponent(e.trim())}`, t, n, r);
}
//#endregion
//#region src/index.ts
var St = _t;
//#endregion
export { _t as Annotation, it as AnnotationContentAnchor, ot as AnnotationDeleteControl, Se as ConfirmResetButtons, L as DELETE_BUTTON_HIT_AREA_PX, ye as DELETE_BUTTON_SIZE_PX, V as DeleteButton, R as DeleteCrossIcon, Oe as DraggableBox, Te as DraggableDot, W as MoveButton, X as OvalSelector, J as PointSelector, F as Polygon, Z as PolygonSelector, G as RectangleSelector, bt as buildDrawingCursor, xt as buildDrawingCursorFromSvg, St as default, U as deleteCornerBoxStyle, H as getDeleteCornerPosition, x as useAnnotationHitDetection, ee as useDragging, yt as useMouseHover, b as useRelativeMousePosition, w as useSelectorMethods };
