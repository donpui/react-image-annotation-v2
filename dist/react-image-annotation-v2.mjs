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
		getTopAnnotationAt: y,
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
var re = 5;
function D(e, r) {
	let { src: s, alt: c = "Annotation Image", style: l, className: u, containerRef: d, imageRef: f, annotations: m, type: h, selectors: g, value: _, onChange: v, onSubmit: y, activeAnnotationComparator: b, activeAnnotations: x, editModeAnnotationIds: T, disableAnnotation: E, drawingCursor: D, disableSelector: ie, disableEditor: ae, disableOverlay: oe, showOverlayOnce: se, disableContent: ce, disableHitTesting: le, allowTouch: O, enableEditing: k = !1, onAnnotationsChange: ue, renderSelector: de, renderEditor: fe, renderHighlight: pe, renderDraggableHighlight: me, renderContent: A, renderOverlay: he, enableRemoval: ge, onRemoveAnnotation: j, canRemoveAnnotation: M, renderDelete: _e, onConfirm: ve, onReset: N, onImageMouseUp: ye, onImageMouseDown: be, onImageMouseMove: P, onImageClick: xe, onImageLoad: Se, onImageError: Ce } = e, F = a(null), I = a(null), L = a(null), R = a(null), z = !!(ve && N), B = _?.selection?.mode === "SELECTING" || _?.selection?.mode === "COLLECTING_POINTS", V = !!_?.selection?.showEditor, H = B || V, we = se && H, [Te, Ee] = o(!1), [De, Oe] = o(we), U = !ce && !!A;
	we !== De && (Oe(we), we && Ee(!0));
	let ke = !H && !(se && Te), { isDragging: W, draggingAnnotationId: Ae, hasPendingChanges: je, onDotDragStart: Me, onDotDrag: Ne, onMoveStart: Pe, onMove: Fe, onDragEnd: Ie, handleConfirm: G, handleReset: Le, getEffectiveAnnotation: Re } = ee({
		annotations: m,
		onAnnotationsChange: ue,
		imageRef: F,
		previewMode: z
	}), { hoveredAnnotation: ze, getTopAnnotationAt: Be, mouseHandlers: K } = S({
		targetRef: I,
		imageRef: F,
		annotations: m,
		selectors: g,
		enableEditing: k,
		suppressHover: B || V,
		throttleMs: 50
	}), { effectiveTopAnnotation: q, focusAnnotationId: Ve, clearEditingSession: J, engageEdit: He, onContainerMouseLeave: Ue } = C({
		enableEditing: k,
		isDrawing: B,
		isCreationEditorOpen: V,
		isDragging: W,
		draggingAnnotationId: Ae,
		hasPendingChanges: je,
		annotations: m,
		hoveredAnnotation: ze,
		lockEditSessionOnHover: !U
	});
	n(() => {
		W && Ae != null && He(Ae);
	}, [
		W,
		Ae,
		He
	]);
	let We = i(() => ({
		onDotDragStart: Me,
		onDotDrag: Ne,
		onMoveStart: Pe,
		onMove: Fe,
		onDragEnd: Ie
	}), [
		Me,
		Ne,
		Pe,
		Fe,
		Ie
	]), Ge = t((e) => {
		G(e), ve?.(e), J();
	}, [
		G,
		ve,
		J
	]), Ke = t((e) => {
		Le(e), N?.(e), J();
	}, [
		Le,
		N,
		J
	]), qe = h || g[0]?.TYPE, Y = t((e) => {
		I.current && (I.current.style.cursor = e);
	}, []), Je = t(() => {
		I.current && I.current.style.removeProperty("cursor");
	}, []);
	n(() => {
		if (!D || !B) {
			document.body.style.removeProperty("cursor");
			return;
		}
		let e = document.body.style.cursor;
		return document.body.style.cursor = D, () => {
			document.body.style.cursor = e;
		};
	}, [D, B]);
	let { callSelectorMethod: X } = w({
		selectors: g,
		effectiveType: qe,
		value: _,
		onChange: v,
		disableAnnotation: E
	}), Ye = t((e) => {
		navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && O && e.preventDefault(), X("onTouchStart", e);
	}, [O, X]), Xe = t((e) => {
		X("onTouchEnd", e);
	}, [X]), Ze = t((e) => {
		K.onTouchMove(e), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && O && e.preventDefault(), X("onTouchMove", e);
	}, [
		K,
		O,
		X
	]), Qe = t((e) => {
		K.onTouchLeave(e);
	}, [K]);
	n(() => {
		let e = I.current;
		if (!(!O || !e)) return e.ontouchstart = Ye, e.ontouchend = Xe, e.ontouchmove = Ze, e.ontouchcancel = Qe, () => {
			e.ontouchstart = null, e.ontouchend = null, e.ontouchmove = null, e.ontouchcancel = null;
		};
	}, [
		O,
		Ye,
		Xe,
		Ze,
		Qe
	]);
	let $e = t((e) => {
		F.current = e, ne(r, e), ne(f, e);
	}, [r, f]), et = t((e) => {
		I.current = e;
	}, []), tt = t((e) => {
		ne(d, e);
	}, [d]), Z = t((e) => {
		K.onMouseMove(e.nativeEvent), P?.(e), X("onMouseMove", e);
	}, [
		K,
		P,
		X
	]), Q = t((e) => {
		K.onMouseLeave(e.nativeEvent), Ue();
	}, [K, Ue]), $ = t((e) => {
		ye?.(e), X("onMouseUp", e);
		let t = L.current, n = R.current;
		if (L.current = null, R.current = null, t != null && n && k && U) {
			let r = Math.abs(e.clientX - n.x), i = Math.abs(e.clientY - n.y);
			r <= re && i <= re && (He(t), v?.({}));
		}
		D && !E && (Je(), B || document.body.style.removeProperty("cursor"));
	}, [
		ye,
		X,
		k,
		U,
		He,
		v,
		D,
		E,
		Je,
		B
	]), nt = t((e) => {
		D && !E && (Y(D), document.body.style.cursor = D);
		let t = _?.selection?.mode === "SELECTING" || _?.selection?.mode === "COLLECTING_POINTS" || !!_?.selection?.showEditor;
		if (L.current = null, R.current = {
			x: e.clientX,
			y: e.clientY
		}, k && U && !t && !V) {
			let t = I.current;
			if (t) {
				let { x: n, y: r } = p(e.nativeEvent, t);
				L.current = Be(n, r)?.data?.id ?? null;
			}
		}
		be?.(e), X("onMouseDown", e);
	}, [
		D,
		E,
		Y,
		k,
		U,
		Be,
		V,
		_?.selection?.mode,
		_?.selection?.showEditor,
		be,
		X
	]), rt = t((e) => {
		xe?.(e), X("onClick", e);
	}, [xe, X]), it = t(() => {
		y && _ && y(_);
	}, [y, _]), at = t((e) => {
		e.key === "Escape" && v && (_?.selection?.showEditor || _?.geometry) && v({
			selection: void 0,
			geometry: void 0,
			data: void 0
		});
	}, [_, v]);
	n(() => {
		if (_?.selection?.showEditor || _?.selection?.mode === "COLLECTING_POINTS") return window.addEventListener("keydown", at), () => window.removeEventListener("keydown", at);
	}, [
		_?.selection?.showEditor,
		_?.selection?.mode,
		at
	]);
	let ot = q, { pinnedControlsId: st, onDeleteControlMouseEnter: ct, onDeleteControlMouseLeave: lt } = te(q), ut = t((e, t) => {
		let n = e.data?.id;
		return n != null && st != null && n === st || x && x.some((t) => b ? b(e, t) : e.data.id === t) || t === e;
	}, [
		x,
		b,
		st
	]);
	return {
		setContainerRef: tt,
		style: l,
		className: u,
		onContainerMouseLeave: Q,
		onContainerTouchCancel: Qe,
		onContainerMouseMove: Z,
		setImageRef: $e,
		src: s,
		alt: c,
		annotations: m,
		layoutOptions: {
			touchEnabled: O,
			selectorDisabled: !!ie || k && W,
			overlayDisabled: !!oe,
			overlayHoverEnabled: ke,
			editorDisabled: !!ae || k && W,
			contentDisabled: !!ce,
			hitTestingDisabled: !!le || k && W || V,
			enableEditing: k,
			drawingCursor: D,
			disableAnnotation: E
		},
		onImageLoad: Se,
		onImageError: Ce,
		annotationState: {
			getIsActive: ut,
			topAnnotation: ot,
			editModeIds: T,
			isDragging: W,
			draggingAnnotationId: Ae,
			hasPendingChanges: je,
			getEffectiveAnnotation: k ? Re : void 0,
			draggingHandlers: k ? We : void 0,
			focusAnnotationId: Ve,
			showContentOnHover: U,
			engageEdit: k && U ? He : void 0,
			onConfirm: k ? Ge : void 0,
			onReset: k ? Ke : void 0,
			enableRemoval: ge,
			onRemoveAnnotation: j,
			canRemoveAnnotation: M,
			onDeleteControlMouseEnter: ct,
			onDeleteControlMouseLeave: lt
		},
		value: _,
		isDrawing: B,
		isCreatingAnnotation: H,
		setTargetRef: et,
		onInteractionTargetClick: rt,
		onInteractionTargetMouseUp: $,
		onInteractionTargetMouseDown: nt,
		effectiveType: qe,
		onChange: v,
		onEditorSubmit: it,
		renderSlots: {
			renderHighlight: pe,
			renderDraggableHighlight: me,
			renderSelector: de,
			renderOverlay: he,
			renderContent: A,
			renderEditor: fe,
			renderDelete: _e
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
function ae(e) {
	let { geometry: t } = e.annotation;
	return t ? /* @__PURE__ */ d(ie, { style: {
		top: `${t.y}%`,
		left: `${t.x}%`
	} }) : null;
}
//#endregion
//#region src/components/TextEditor/index.tsx
var oe = s.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, se = s.div`
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
`, ce = ({ onChange: t, onSubmit: n, onFocus: r, onBlur: i, value: a }) => {
	let o = e.useRef(null);
	return e.useEffect(() => {
		o.current?.focus({ preventScroll: !0 });
	}, []), /* @__PURE__ */ f(e.Fragment, { children: [/* @__PURE__ */ d(oe, { children: /* @__PURE__ */ d("textarea", {
		ref: o,
		placeholder: "Write description",
		onFocus: r,
		onBlur: i,
		onChange: t,
		value: a
	}) }), a && /* @__PURE__ */ d(se, {
		onClick: n,
		children: "Save description"
	})] });
}, le = {}, O = {}, k = l`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, ue = s.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  pointer-events: auto;
  transform-origin: top left;
  animation: ${k} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, de = ({ annotation: e, onChange: t, onSubmit: n, className: r = "", style: i = le }) => e.geometry ? /* @__PURE__ */ d(ue, {
	className: r,
	style: i,
	children: /* @__PURE__ */ d(ce, {
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
}) : null, fe = s.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, pe = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function me({ annotation: e, className: t = "", style: n = le }) {
	let { geometry: r } = e;
	return !r || typeof r.x != "number" || typeof r.y != "number" || typeof r.width != "number" || typeof r.height != "number" ? null : /* @__PURE__ */ f(pe, {
		className: t,
		style: n,
		children: [
			/* @__PURE__ */ d(fe, { style: {
				height: `${r.y}%`,
				width: "100%"
			} }),
			/* @__PURE__ */ d(fe, { style: {
				top: `${r.y}%`,
				height: `${r.height}%`,
				width: `${r.x}%`
			} }),
			/* @__PURE__ */ d(fe, { style: {
				top: `${r.y}%`,
				left: `${r.x + r.width}%`,
				height: `${r.height}%`,
				width: `${100 - (r.x + r.width)}%`
			} }),
			/* @__PURE__ */ d(fe, { style: {
				top: `${r.y + r.height}%`,
				height: `${100 - (r.y + r.height)}%`,
				width: "100%"
			} })
		]
	});
}
//#endregion
//#region src/components/Rectangle/index.tsx
var A = s.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function he({ annotation: e, className: t = "", style: n = le, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ d(A, {
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
var ge = s.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function j({ annotation: e, className: t = "", style: n = le, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ d(ge, {
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
var M = 3, _e = 10;
function ve(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function N({ annotation: e, className: t, style: n, active: r }) {
	let { geometry: i, selection: a } = e;
	if (!i || !i.points || i.points.length === 0) return null;
	let o = i.points, s = a?.cursorX, c = a?.cursorY, l = a?.mode === "COLLECTING_POINTS", u = o.length >= 3, p = o[0], m = l && u && s !== void 0 && c !== void 0 && ve({
		x: s,
		y: c
	}, p) < M, h = o.map((e) => `${e.x},${e.y}`).join(" ");
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
				width: _e,
				height: _e,
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
var ye = s.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
  pointer-events: none;
`;
function be({ annotation: e, style: t = le, className: n = "" }) {
	let { geometry: r } = e;
	return !r || r.x === void 0 || r.y === void 0 || r.width === void 0 || r.height === void 0 ? null : /* @__PURE__ */ d(ye, {
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
var P = s.div`
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
`, xe = () => /* @__PURE__ */ d("svg", {
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
}), Se = 20, Ce = 24;
function F(e) {
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
var I = s.button`
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
`, L = s(F)`
  width: 12px;
  height: 12px;
  color: #0f0f0f;
  flex-shrink: 0;
`, R = ({ annotationId: e, onRemove: t, disabled: n, className: r, style: i }) => /* @__PURE__ */ d(I, {
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
	children: /* @__PURE__ */ d(L, {})
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
	width: 24,
	height: 24,
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
`, we = ({ onConfirm: e, onReset: t }) => /* @__PURE__ */ f(V, {
	onMouseDown: (e) => e.stopPropagation(),
	children: [/* @__PURE__ */ d(H, {
		type: "button",
		onClick: (t) => {
			t.stopPropagation(), e();
		},
		children: "✓"
	}), /* @__PURE__ */ d(H, {
		type: "button",
		onClick: (e) => {
			e.stopPropagation(), t();
		},
		children: "✕"
	})]
}), Te = s.div`
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
`, Ee = s.div`
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
`, De = ({ position: e, onDragStart: t, onDrag: n, onDragEnd: r, annotationId: i }) => /* @__PURE__ */ d(Te, {
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
}), Oe = ({ onMoveStart: e, onMove: t, onMoveEnd: n, annotationId: r }) => /* @__PURE__ */ d(Ee, {
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
	children: /* @__PURE__ */ d(xe, {})
}), U = 36, ke = s.div`
  position: absolute;
  border: none;
  background: rgba(151, 151, 151, 0.3);
  border-radius: 3px;
  pointer-events: none;
  z-index: 10;
  box-sizing: border-box;
`, W = ({ annotation: e, isDragging: t, hasPendingChanges: r, onDotDragStart: i, onDotDrag: o, onMoveStart: s, onMove: c, onDragEnd: l, enableRemoval: u, onRemoveAnnotation: p, onConfirm: m, onReset: h, onDeleteControlMouseEnter: g, onDeleteControlMouseLeave: _, allowResetOnMouseLeave: v = !0 }) => {
	let { geometry: y } = e, b = e.data?.id, x = a(null), S = (t || r) && m && h;
	if (n(() => {
		if (!v || t || r || !h || b == null) return;
		let e = (e) => {
			let t = x.current;
			if (!t) return;
			let n = t.getBoundingClientRect(), { clientX: r, clientY: i } = e, a = U;
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
	return /* @__PURE__ */ f(ke, {
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
			/* @__PURE__ */ d(De, {
				position: "top",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ d(De, {
				position: "right",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ d(De, {
				position: "bottom",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ d(De, {
				position: "left",
				onDragStart: i,
				onDrag: o,
				onDragEnd: l,
				annotationId: C
			}),
			/* @__PURE__ */ d(Oe, {
				onMoveStart: s,
				onMove: c,
				onMoveEnd: l,
				annotationId: C
			}),
			u && p && b != null && /* @__PURE__ */ d("div", {
				style: B,
				onMouseEnter: () => g?.(b),
				onMouseLeave: () => _?.(),
				onPointerEnter: () => g?.(b),
				onPointerLeave: () => _?.(),
				children: /* @__PURE__ */ d(R, {
					annotationId: b,
					onRemove: p
				})
			}),
			S && /* @__PURE__ */ d(we, {
				onConfirm: () => m(b),
				onReset: () => h(b)
			})
		]
	});
}, Ae = "RECTANGLE";
function je({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let i = Math.min(n.x, n.x + n.width), a = Math.max(n.x, n.x + n.width), o = Math.min(n.y, n.y + n.height), s = Math.max(n.y, n.y + n.height);
	return !(e < i || t < o || e > a || t > s);
}
function Me(e, t) {
	return !e || e.width <= 0 || e.height <= 0 ? 0 : Math.abs(e.width) * Math.abs(e.height);
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
		return Pe(e, t);
	},
	onMouseUp(e, t) {
		return Fe(e, t);
	},
	onMouseMove(e, t) {
		return Ie(e, t);
	}
};
function Pe(e, t) {
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
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = g(t), o = i - n, s = a - r;
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
var G = {
	TYPE: Ae,
	intersects: je,
	area: Me,
	methods: Ne
}, Le = 6, Re = (e = {
	width: 100,
	height: 100
}) => ({
	marginX: Le / e.width * 100,
	marginY: Le / e.height * 100
}), ze = "POINT";
function Be({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let { marginX: i, marginY: a } = Re(r), o = Math.min(i, a) / 2, s = Math.abs(e - n.x), c = Math.abs(t - n.y);
	return s <= o && c <= o;
}
function K(e, t) {
	return 0;
}
var q = {
	TYPE: ze,
	intersects: Be,
	area: K,
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
				type: ze
			}
		};
	} }
}, Ve = (e) => e ** 2, J = "OVAL";
function He({ x: e, y: t }, n, r) {
	if (!n || !n.width || !n.height) return !1;
	let i = Math.abs(n.width), a = Math.abs(n.height), o = {
		x: n.x + i / 2,
		y: n.y + a / 2
	}, s = i / 2, c = a / 2;
	if (s === 0 || c === 0) return !1;
	let l = e - o.x, u = t - o.y;
	return Ve(l) / Ve(s) + Ve(u) / Ve(c) <= 1;
}
function Ue(e, t) {
	if (!e || e.width <= 0 || e.height <= 0) return 0;
	let n = Math.abs(e.width), r = Math.abs(e.height);
	return n / 2 * Math.PI * (r / 2);
}
var We = {
	onTouchStart(e, t) {
		return Ge(e, t);
	},
	onTouchEnd(e, t) {
		return Ke(e, t);
	},
	onTouchMove(e, t) {
		return qe(e, t);
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
					type: J,
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
function Ge(e, t) {
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
function Ke(e, t) {
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
function qe(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = g(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: J,
				x: o > 0 ? n : i,
				y: s > 0 ? r : a,
				width: Math.abs(o),
				height: Math.abs(s)
			}
		};
	}
	return e;
}
var Y = {
	TYPE: J,
	intersects: He,
	area: Ue,
	methods: We
}, Je = "POLYGON", X = 3, Ye = 350, Xe = 2;
function Ze(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function Qe(e) {
	let t = e.map((e) => e.x), n = e.map((e) => e.y), r = Math.min(...t), i = Math.min(...n);
	return {
		x: r,
		y: i,
		width: Math.max(...t) - r,
		height: Math.max(...n) - i
	};
}
function $e({ x: e, y: t }, n) {
	if (!n || !n.points || n.points.length < 3) return !1;
	let r = n.points, i = !1;
	for (let n = 0, a = r.length - 1; n < r.length; a = n++) {
		let o = r[n].x, s = r[n].y, c = r[a].x, l = r[a].y;
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (i = !i);
	}
	return i;
}
function et(e) {
	if (!e || !e.points || e.points.length < 3) return 0;
	let t = e.points, n = 0;
	for (let e = 0, r = t.length - 1; e < t.length; r = e++) n += (t[r].x + t[e].x) * (t[r].y - t[e].y);
	return Math.abs(n / 2);
}
function tt(e) {
	let t = Qe(e.geometry?.points || []);
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
	TYPE: Je,
	intersects: $e,
	area: et,
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
					type: Je,
					points: [{
						x: n,
						y: r
					}]
				}
			};
			let o = Date.now() - (e.selection?.lastClickTime || 0), s = e.selection?.lastClickX ?? n, c = e.selection?.lastClickY ?? r;
			return o < Ye && Ze({
				x: n,
				y: r
			}, {
				x: s,
				y: c
			}) < Xe && a.length >= 3 || a.length >= 3 && Ze({
				x: n,
				y: r
			}, a[0]) < X ? tt(e) : a.length >= 50 ? a.length >= 3 ? tt(e) : e : {
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
					type: Je,
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
			case G.TYPE: return /* @__PURE__ */ d(me, { annotation: e });
			case q.TYPE: return /* @__PURE__ */ d(ae, { annotation: e });
			case Y.TYPE: return /* @__PURE__ */ d(j, { annotation: e });
			case Z.TYPE: return /* @__PURE__ */ d(N, { annotation: e });
			default: return null;
		}
	},
	renderEditor: ({ annotation: e, onChange: t, onSubmit: n }) => /* @__PURE__ */ d(de, {
		annotation: e,
		onChange: t,
		onSubmit: n
	}),
	renderHighlight: ({ key: e, annotation: t, active: n }) => {
		switch (t.geometry.type) {
			case G.TYPE: return /* @__PURE__ */ d(he, {
				annotation: t,
				active: n
			}, e);
			case q.TYPE: return /* @__PURE__ */ d(ae, { annotation: t }, e);
			case Y.TYPE: return /* @__PURE__ */ d(j, {
				annotation: t,
				active: n
			}, e);
			case Z.TYPE: return /* @__PURE__ */ d(N, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	},
	renderContent: ({ key: e, annotation: t }) => /* @__PURE__ */ d(be, { annotation: t }, e),
	renderOverlay: ({ type: e, annotation: t } = O) => {
		switch (e) {
			case q.TYPE: return /* @__PURE__ */ d(P, { children: "Click to Annotate" });
			case Z.TYPE: return /* @__PURE__ */ d(P, { children: "Click to add points · Double-click or click first point to finish · Esc to cancel" });
			default: return /* @__PURE__ */ d(P, { children: "Click and Drag to Annotate" });
		}
	},
	renderDraggableHighlight: ({ key: e, annotation: t, active: n, isHovered: r, isDragging: i, hasPendingChanges: a, onDotDragStart: o, onDotDrag: s, onMoveStart: c, onMove: l, onDragEnd: u, enableRemoval: f, onRemoveAnnotation: p, onConfirm: m, onReset: h, onDeleteControlMouseEnter: g, onDeleteControlMouseLeave: _ }) => {
		if (!r && !i && !a) switch (t.geometry.type) {
			case G.TYPE: return /* @__PURE__ */ d(he, {
				annotation: t,
				active: n
			}, e);
			case q.TYPE: return /* @__PURE__ */ d(ae, { annotation: t }, e);
			case Y.TYPE: return /* @__PURE__ */ d(j, {
				annotation: t,
				active: n
			}, e);
			case Z.TYPE: return /* @__PURE__ */ d(N, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
		if (t.geometry.type === G.TYPE) return /* @__PURE__ */ d(W, {
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
			case q.TYPE: return /* @__PURE__ */ d(ae, { annotation: t }, e);
			case Y.TYPE: return /* @__PURE__ */ d(j, {
				annotation: t,
				active: n
			}, e);
			case Z.TYPE: return /* @__PURE__ */ d(N, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	}
}, $ = 8, nt = 6;
function rt(e) {
	return !!e && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number";
}
function it({ placement: e, geometry: t, containerHeight: n, overlayHeight: r, offsetPx: i }) {
	if (e === "above") return "above";
	if (e === "below") return "below";
	let a = t.y / 100 * n, o = (t.y + t.height) / 100 * n, s = r + i + $, c = n - o, l = a;
	return c >= s ? "below" : l >= s || l >= c ? "above" : "below";
}
function at({ annotation: e, containerRef: t, placement: n = "auto", offsetPx: i = nt, className: s, style: c, children: l }) {
	let u = a(null), [f, p] = o({
		x: 0,
		y: 0
	}), [m, h] = o(n === "above" ? "above" : "below"), { geometry: g } = e;
	return r(() => {
		let e = u.current, r = t.current;
		if (!e || !r || !rt(g)) return;
		let a = r.getBoundingClientRect(), o = e.offsetHeight, s = it({
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
	]), rt(g) ? /* @__PURE__ */ d("div", {
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
var ot = s.div`
  position: absolute;
  pointer-events: auto;
  z-index: 10;
  width: ${24}px;
  height: ${24}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function st({ annotation: e, onRemove: n, renderDelete: r, disabled: i, onDeleteControlMouseEnter: a, onDeleteControlMouseLeave: s }) {
	let [c, l] = o(!1), u = e.data?.id, f = z(e.geometry), p = i || c, m = t(async () => {
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
	return r ? /* @__PURE__ */ d(ot, {
		style: f,
		..._,
		children: r({
			key: u,
			annotation: e,
			active: !0,
			onRemove: m,
			disabled: p
		})
	}) : /* @__PURE__ */ d(ot, {
		style: f,
		className: "annotation-delete",
		..._,
		children: /* @__PURE__ */ d(R, {
			annotationId: u,
			onRemove: m,
			disabled: p
		})
	});
}
//#endregion
//#region src/components/AnnotationLayout.tsx
var ct = s.div`
  clear: both;
  position: relative;
  width: 100%;
  overflow: visible;

  ${(e) => e.$overlayHoverEnabled && c`
      &:hover ${P} {
        opacity: 1;
      }
    `}

  touch-action: ${(e) => e.$allowTouch ? "pinch-zoom" : "auto"};
  ${(e) => e.$cursor ? `cursor: ${e.$cursor};` : ""}
`, lt = s.img`
  display: block;
  width: 100%;
  user-select: none;
`, ut = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, dt = s.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: ${(e) => e.$hitTestingDisabled ? "none" : "auto"};
  ${(e) => e.$cursor ? `cursor: ${e.$cursor};` : ""}
`, ft = s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  pointer-events: none;
  overflow: visible;
`, pt = s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  pointer-events: none;
  overflow: visible;
`;
function mt({ annotationId: e, annotation: t, active: n, slot: r }) {
	return /* @__PURE__ */ d(u, { children: r({
		key: e,
		annotation: t,
		active: n
	}) });
}
var ht = s.div`
  display: inline-block;
  pointer-events: none;

  & * {
    pointer-events: none !important;
  }
`;
function gt({ annotationId: e, annotation: t, slot: n, containerRef: r }) {
	return /* @__PURE__ */ d(at, {
		annotation: t,
		containerRef: r,
		placement: "auto",
		children: /* @__PURE__ */ d(ht, { children: n({
			key: e,
			annotation: t
		}) })
	});
}
function _t({ enableRemoval: e, onRemoveAnnotation: t, isActive: n, annotation: r, canRemoveAnnotation: i, enableEditing: a, draggableHighlightSlot: o, isHovered: s }) {
	return !e || !t || !n || i && !i(r) ? !1 : !(a && o && s && r.geometry?.type === G.TYPE);
}
function vt({ setContainerRef: t, style: n, className: r, onContainerMouseLeave: i, onContainerTouchCancel: o, onContainerMouseMove: s, setImageRef: c, src: l, alt: u, annotations: p, renderSlots: m, layoutOptions: h, annotationState: g, value: _, isDrawing: v, isCreatingAnnotation: y, setTargetRef: b, onInteractionTargetClick: x, onInteractionTargetMouseUp: S, onInteractionTargetMouseDown: C, effectiveType: w, onChange: T, onEditorSubmit: E, onImageLoad: ee, onImageError: te, children: ne }) {
	let { renderHighlight: re, renderDraggableHighlight: D, renderSelector: ie, renderOverlay: ae, renderContent: oe, renderEditor: se, renderDelete: ce } = m, { touchEnabled: le, selectorDisabled: O, overlayDisabled: k, overlayHoverEnabled: ue = !0, editorDisabled: de, contentDisabled: fe, hitTestingDisabled: pe, enableEditing: me, drawingCursor: A, disableAnnotation: he } = h, ge = A && !he ? A : void 0, { getIsActive: j, topAnnotation: M, editModeIds: _e, isDragging: ve, draggingAnnotationId: N, hasPendingChanges: ye, getEffectiveAnnotation: be, draggingHandlers: P, onConfirm: xe, onReset: Se, enableRemoval: Ce, onRemoveAnnotation: F, canRemoveAnnotation: I, onDeleteControlMouseEnter: L, onDeleteControlMouseLeave: R, focusAnnotationId: z, showContentOnHover: B = !1 } = g, V = _e ? new Set(_e) : void 0, H = a(null);
	return /* @__PURE__ */ f(ct, {
		ref: t,
		style: n,
		className: r,
		onMouseLeave: i,
		onTouchCancel: o,
		onMouseMove: s,
		$allowTouch: le,
		$cursor: v ? A : void 0,
		$overlayHoverEnabled: ue,
		children: [
			/* @__PURE__ */ d(lt, {
				ref: c,
				src: l,
				alt: u,
				onLoad: ee,
				onError: te
			}),
			/* @__PURE__ */ f(ut, { children: [p.map((e) => {
				let t = e.data?.id;
				if (!t) return null;
				let n = j(e, M);
				M?.data?.id, ye?.(t);
				let r = be ? be(e) : e;
				return re ? /* @__PURE__ */ d(mt, {
					annotationId: t,
					annotation: r,
					active: n,
					slot: re
				}, t) : null;
			}), !O && _?.geometry && ie && ie({ annotation: _ })] }),
			/* @__PURE__ */ d(dt, {
				ref: b,
				"data-testid": "annotation-target",
				"data-is-drawing": v && A ? !0 : void 0,
				$hitTestingDisabled: pe,
				$cursor: ge,
				onClick: x,
				onMouseUp: S,
				onMouseDown: C
			}),
			me && D && P && /* @__PURE__ */ d(ft, { children: p.map((t) => {
				let n = t.data?.id;
				if (!n) return null;
				let r = j(t, M), i = M?.data?.id === n, a = ve && N === n, o = !!ye?.(n), s = z != null && z === n;
				if (!(a || o || s || i && !B)) return null;
				let c = be ? be(t) : t;
				return /* @__PURE__ */ d(e.Fragment, { children: D({
					key: n,
					annotation: c,
					active: r,
					isHovered: i,
					isDragging: !!a,
					hasPendingChanges: o,
					allowResetOnMouseLeave: !s && !(xe && Se),
					...P,
					enableRemoval: Ce,
					onRemoveAnnotation: F,
					onConfirm: xe,
					onReset: Se,
					onDeleteControlMouseEnter: L,
					onDeleteControlMouseLeave: R
				}) }, `edit-chrome-${n}`);
			}) }),
			!k && ae && ae({
				type: w,
				annotation: _,
				isCreating: y
			}),
			/* @__PURE__ */ f(pt, {
				ref: H,
				children: [p.map((t) => {
					let n = t.data?.id;
					if (!n) return null;
					let r = V?.has(n) ?? !1, i = j(t, M), a = M?.data?.id === n, o = ve && N === n, s = !!ye?.(n), c = !fe && oe != null && (r || i && !(me && D && P && (z != null && z === n || o || s))), l = _t({
						enableRemoval: Ce,
						onRemoveAnnotation: F,
						isActive: i,
						annotation: t,
						canRemoveAnnotation: I,
						enableEditing: me,
						draggableHighlightSlot: D,
						isHovered: a
					});
					return !c && !l ? null : /* @__PURE__ */ f(e.Fragment, { children: [c ? /* @__PURE__ */ d(gt, {
						annotationId: n,
						annotation: t,
						containerRef: H,
						slot: oe
					}) : null, l && F ? /* @__PURE__ */ d(st, {
						annotation: t,
						onRemove: F,
						renderDelete: ce,
						onDeleteControlMouseEnter: L,
						onDeleteControlMouseLeave: R
					}) : null] }, n);
				}), !de && _?.selection?.showEditor && se && T && /* @__PURE__ */ d(at, {
					annotation: _,
					containerRef: H,
					placement: "auto",
					offsetPx: 16,
					children: se({
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
function yt({ ref: e, ...t }) {
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
	return /* @__PURE__ */ d(vt, {
		...D(r, e),
		children: n
	});
}
yt.displayName = "Annotation";
//#endregion
//#region src/hooks/useMouseHover.ts
function bt(e, t) {
	if (!e || typeof e.getBoundingClientRect != "function") return !1;
	let { pageX: n, pageY: r } = t, { left: i, right: a, bottom: o, top: s } = e.getBoundingClientRect();
	return n > i && n < a && r > s && r < o;
}
function xt() {
	let [e, r] = o(!1), i = a(null);
	return n(() => {
		let e = (e) => {
			let t = i.current, n = bt(t, {
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
function St(e, t, n, r = "crosshair") {
	let i = e.trim();
	return `${i.startsWith("url(") ? i : `url("${i}")`} ${t} ${n}, ${r}`;
}
function Ct(e, t, n, r = "crosshair") {
	return St(`data:image/svg+xml,${encodeURIComponent(e.trim())}`, t, n, r);
}
//#endregion
//#region src/index.ts
var wt = yt;
//#endregion
export { yt as Annotation, at as AnnotationContentAnchor, st as AnnotationDeleteControl, we as ConfirmResetButtons, Ce as DELETE_BUTTON_HIT_AREA_PX, Se as DELETE_BUTTON_SIZE_PX, R as DeleteButton, F as DeleteCrossIcon, W as DraggableBox, De as DraggableDot, Oe as MoveButton, Y as OvalSelector, q as PointSelector, N as Polygon, Z as PolygonSelector, G as RectangleSelector, St as buildDrawingCursor, Ct as buildDrawingCursorFromSvg, wt as default, B as deleteCornerBoxStyle, z as getDeleteCornerPosition, x as useAnnotationHitDetection, ee as useDragging, xt as useMouseHover, b as useRelativeMousePosition, w as useSelectorMethods };
