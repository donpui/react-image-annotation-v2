import e, { useCallback as t, useEffect as n, useMemo as r, useRef as i, useState as a } from "react";
import o, { keyframes as s } from "styled-components";
//#region \0rolldown/runtime.js
var c = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), l = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), u = (e, t) => {
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
}, d = (e, t, n) => Math.max(e, Math.min(t, n)), f = (e) => {
	if (!e.currentTarget || typeof e.currentTarget.getBoundingClientRect != "function") return {
		x: 0,
		y: 0
	};
	let t = e.targetTouches[0], n = e.currentTarget.getBoundingClientRect(), r = t.pageX - n.left, i = t.pageY - (n.top + window.scrollY);
	return {
		x: d(0, 100, r / n.width * 100),
		y: d(0, 100, i / n.height * 100)
	};
}, p = (e, t) => m(e) ? h(e) ? (g(e) && e.preventDefault(), f(e)) : { x: null } : u(e, t), m = (e) => e.targetTouches !== void 0, h = (e) => e.targetTouches.length === 1, g = (e) => e.type === "touchmove";
//#endregion
//#region src/hooks/useRelativeMousePosition.ts
function _(e, r = {}) {
	let { onPositionChange: o, throttleMs: s = 16 } = r, c = i({
		x: null,
		y: null
	}), [l, d] = a({
		x: null,
		y: null
	}), f = i(0), p = i(null), m = t((e) => {
		if (c.current = e, o) {
			let t = Date.now();
			s <= 0 || t - f.current >= s ? (d(e), o(e), f.current = t) : (p.current && clearTimeout(p.current), p.current = setTimeout(() => {
				d(e), o(e), f.current = Date.now();
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
			m(u(t, n));
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
function v({ annotations: e, selectors: n, imageRef: i, enableEditing: a }) {
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
function y({ targetRef: e, imageRef: o, annotations: s, selectors: c, enableEditing: l, throttleMs: u = 50 }) {
	let [d, f] = a(void 0), p = i(void 0), m = i(void 0), { getTopAnnotationAt: h } = v({
		annotations: s,
		selectors: c,
		imageRef: o,
		enableEditing: l
	}), { handlers: g } = _(e, {
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
	let { src: a, alt: o = "Annotation Image", style: s, className: c, containerRef: l, imageRef: u, annotations: d, type: f, selectors: p, value: m, onChange: h, onSubmit: g, activeAnnotationComparator: _, activeAnnotations: v, editModeAnnotationIds: S, disableAnnotation: C, disableSelector: w, disableEditor: T, disableOverlay: E, allowTouch: D, renderSelector: O, renderEditor: k, renderHighlight: A, renderContent: j, renderOverlay: M, onImageMouseUp: N, onImageMouseDown: P, onImageMouseMove: F, onImageClick: I } = e, L = i(null), R = i(null), { hoveredAnnotation: ee, mouseHandlers: z } = y({
		targetRef: R,
		imageRef: L,
		annotations: d,
		selectors: p,
		enableEditing: !T,
		throttleMs: 50
	}), te = f || p[0]?.TYPE, { callSelectorMethod: B } = b({
		selectors: p,
		effectiveType: te,
		value: m,
		onChange: h,
		disableAnnotation: C
	}), V = t((e) => {
		navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && e.preventDefault(), B("onTouchStart", e);
	}, [D, B]), H = t((e) => {
		B("onTouchEnd", e);
	}, [B]), U = t((e) => {
		z.onTouchMove(e), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && e.preventDefault(), B("onTouchMove", e);
	}, [
		z,
		D,
		B
	]), W = t((e) => {
		z.onTouchLeave(e);
	}, [z]);
	n(() => {
		let e = R.current;
		if (!(!D || !e)) return e.ontouchstart = V, e.ontouchend = H, e.ontouchmove = U, e.ontouchcancel = W, () => {
			e.ontouchstart = null, e.ontouchend = null, e.ontouchmove = null, e.ontouchcancel = null;
		};
	}, [
		D,
		V,
		H,
		U,
		W
	]);
	let ne = t((e) => {
		L.current = e, x(r, e), x(u, e);
	}, [r, u]), re = t((e) => {
		R.current = e;
	}, []), ie = t((e) => {
		x(l, e);
	}, [l]), G = t((e) => {
		z.onMouseMove(e.nativeEvent), F?.(e), B("onMouseMove", e);
	}, [
		z,
		F,
		B
	]), K = t((e) => {
		z.onMouseLeave(e.nativeEvent);
	}, [z]), q = t((e) => {
		N?.(e), B("onMouseUp", e);
	}, [N, B]), J = t((e) => {
		P?.(e), B("onMouseDown", e);
	}, [P, B]), ae = t((e) => {
		I?.(e), B("onClick", e);
	}, [I, B]), oe = t(() => {
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
	let se = ee;
	return {
		setContainerRef: ie,
		style: s,
		className: c,
		onContainerMouseLeave: K,
		onContainerTouchCancel: W,
		onContainerMouseMove: G,
		allowTouch: D,
		setImageRef: ne,
		src: a,
		alt: o,
		annotations: d,
		shouldAnnotationBeActive: t((e, t) => v && v.some((t) => _ ? _(e, t) : e.data.id === t) || t === e, [v, _]),
		topAnnotationAtMouse: se,
		disableSelector: !!w,
		value: m,
		setTargetRef: re,
		onInteractionTargetClick: ae,
		onInteractionTargetMouseUp: q,
		onInteractionTargetMouseDown: J,
		disableOverlay: !!E,
		effectiveType: te,
		editModeAnnotationIds: S,
		disableEditor: !!T,
		onChange: h,
		onEditorSubmit: oe,
		renderSlots: {
			renderHighlight: A,
			renderSelector: O,
			renderOverlay: M,
			renderContent: j,
			renderEditor: k
		}
	};
}
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
var C = /* @__PURE__ */ c(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), w = /* @__PURE__ */ c(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, o, l, u) {
			var f = n.children;
			if (f !== void 0) if (o) if (M(f)) {
				for (o = 0; o < f.length; o++) p(f[o]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, f, m, f), R[f + o] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), s(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, a(), l, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = l("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, o)(), L = N(i(o)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), T = (/* @__PURE__ */ c(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = C() : t.exports = w();
})))(), E = o.div`
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
function D(e) {
	let { geometry: t } = e.annotation;
	return t ? /* @__PURE__ */ (0, T.jsx)(E, { style: {
		top: `${t.y}%`,
		left: `${t.x}%`
	} }) : null;
}
//#endregion
//#region src/components/TextEditor/index.tsx
var O = o.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, k = o.div`
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
`, A = ({ onChange: t, onSubmit: n, onFocus: r, onBlur: i, value: a }) => /* @__PURE__ */ (0, T.jsxs)(e.Fragment, { children: [/* @__PURE__ */ (0, T.jsx)(O, { children: /* @__PURE__ */ (0, T.jsx)("textarea", {
	placeholder: "Write description",
	onFocus: r,
	onBlur: i,
	onChange: t,
	value: a
}) }), a && /* @__PURE__ */ (0, T.jsx)(k, {
	onClick: n,
	children: "Submit"
})] }), j = {}, M = {}, N = s`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, P = o.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${N} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, F = ({ annotation: e, onChange: t, onSubmit: n, className: r = "", style: i = j }) => {
	let { geometry: a } = e;
	return a ? /* @__PURE__ */ (0, T.jsx)(P, {
		className: r,
		style: {
			position: "absolute",
			left: `${a.x}%`,
			top: `${a.y + a.height}%`,
			...i
		},
		children: /* @__PURE__ */ (0, T.jsx)(A, {
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
	}) : null;
}, I = o.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, L = o.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function R({ annotation: e, className: t = "", style: n = j }) {
	let { geometry: r } = e;
	return r ? /* @__PURE__ */ (0, T.jsxs)(L, {
		className: t,
		style: n,
		children: [
			/* @__PURE__ */ (0, T.jsx)(I, { style: {
				height: `${r.y}%`,
				width: "100%"
			} }),
			/* @__PURE__ */ (0, T.jsx)(I, { style: {
				top: `${r.y}%`,
				height: `${r.height}%`,
				width: `${r.x}%`
			} }),
			/* @__PURE__ */ (0, T.jsx)(I, { style: {
				top: `${r.y}%`,
				left: `${r.x + r.width}%`,
				height: `${r.height}%`,
				width: `${100 - (r.x + r.width)}%`
			} }),
			/* @__PURE__ */ (0, T.jsx)(I, { style: {
				top: `${r.y + r.height}%`,
				height: `${100 - (r.y + r.height)}%`,
				width: "100%"
			} })
		]
	}) : null;
}
//#endregion
//#region src/components/Rectangle/index.tsx
var ee = o.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function z({ annotation: e, className: t = "", style: n = j, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ (0, T.jsx)(ee, {
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
var te = o.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function B({ annotation: e, className: t = "", style: n = j, active: r }) {
	let { geometry: i } = e;
	return i ? /* @__PURE__ */ (0, T.jsx)(te, {
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
var V = o.div`
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
function H({ annotation: e, style: t = j, className: n = "" }) {
	let { geometry: r } = e;
	return !r || r.x === void 0 || r.y === void 0 || r.width === void 0 || r.height === void 0 ? null : /* @__PURE__ */ (0, T.jsx)(V, {
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
var U = o.div`
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
`, W = "RECTANGLE";
function ne({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let i = Math.min(n.x, n.x + n.width), a = Math.max(n.x, n.x + n.width), o = Math.min(n.y, n.y + n.height), s = Math.max(n.y, n.y + n.height);
	return !(e < i || t < o || e > a || t > s);
}
function re(e, t) {
	return !e || e.width <= 0 || e.height <= 0 ? 0 : Math.abs(e.width) * Math.abs(e.height);
}
var ie = {
	onTouchStart(e, t) {
		return G(e, t);
	},
	onTouchEnd(e, t) {
		return K(e, t);
	},
	onTouchMove(e, t) {
		return q(e, t);
	},
	onMouseDown(e, t) {
		return G(e, t);
	},
	onMouseUp(e, t) {
		return K(e, t);
	},
	onMouseMove(e, t) {
		return q(e, t);
	}
};
function G(e, t) {
	if (e.selection) return {};
	{
		let { x: n, y: r } = p(t);
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
function K(e, t) {
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
function q(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = p(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: W,
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
	TYPE: W,
	intersects: ne,
	area: re,
	methods: ie
}, ae = 6, oe = (e = {
	width: 100,
	height: 100
}) => ({
	marginX: ae / e.width * 100,
	marginY: ae / e.height * 100
}), Y = "POINT";
function se({ x: e, y: t }, n, r) {
	if (!n) return !1;
	let { marginX: i, marginY: a } = oe(r), o = Math.min(i, a) / 2, s = Math.abs(e - n.x), c = Math.abs(t - n.y);
	return s <= o && c <= o;
}
function ce(e, t) {
	return 0;
}
var X = {
	TYPE: Y,
	intersects: se,
	area: ce,
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
				...p(t),
				width: 0,
				height: 0,
				type: Y
			}
		};
	} }
}, Z = (e) => e ** 2, le = "OVAL";
function ue({ x: e, y: t }, n, r) {
	if (!n || !n.width || !n.height) return !1;
	let i = Math.abs(n.width), a = Math.abs(n.height), o = {
		x: n.x + i / 2,
		y: n.y + a / 2
	}, s = i / 2, c = a / 2;
	if (s === 0 || c === 0) return !1;
	let l = e - o.x, u = t - o.y;
	return Z(l) / Z(s) + Z(u) / Z(c) <= 1;
}
function de(e, t) {
	if (!e || e.width <= 0 || e.height <= 0) return 0;
	let n = Math.abs(e.width), r = Math.abs(e.height);
	return n / 2 * Math.PI * (r / 2);
}
var fe = {
	onTouchStart(e, t) {
		return pe(e, t);
	},
	onTouchEnd(e, t) {
		return me(e, t);
	},
	onTouchMove(e, t) {
		return he(e, t);
	},
	onMouseDown(e, t) {
		if (!e.geometry) {
			let { x: n, y: r } = p(t);
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
			let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = p(t);
			return {
				...e,
				geometry: {
					...e.geometry,
					type: le,
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
function pe(e, t) {
	if (e.selection) return {};
	{
		let { x: n, y: r } = p(t);
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
function me(e, t) {
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
function he(e, t) {
	if (e.selection && e.selection.mode === "SELECTING") {
		let { anchorX: n, anchorY: r } = e.selection, { x: i, y: a } = p(t), o = i - n, s = a - r;
		return {
			...e,
			geometry: {
				...e.geometry,
				type: le,
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
	TYPE: le,
	intersects: ue,
	area: de,
	methods: fe
}, $ = {
	disableAnnotation: !1,
	disableSelector: !1,
	disableEditor: !1,
	disableOverlay: !1,
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
			case J.TYPE: return /* @__PURE__ */ (0, T.jsx)(R, { annotation: e });
			case X.TYPE: return /* @__PURE__ */ (0, T.jsx)(D, { annotation: e });
			case Q.TYPE: return /* @__PURE__ */ (0, T.jsx)(B, { annotation: e });
			default: return null;
		}
	},
	renderEditor: ({ annotation: e, onChange: t, onSubmit: n }) => /* @__PURE__ */ (0, T.jsx)(F, {
		annotation: e,
		onChange: t,
		onSubmit: n
	}),
	renderHighlight: ({ key: e, annotation: t, active: n }) => {
		switch (t.geometry.type) {
			case J.TYPE: return /* @__PURE__ */ (0, T.jsx)(z, {
				annotation: t,
				active: n
			}, e);
			case X.TYPE: return /* @__PURE__ */ (0, T.jsx)(D, { annotation: t }, e);
			case Q.TYPE: return /* @__PURE__ */ (0, T.jsx)(B, {
				annotation: t,
				active: n
			}, e);
			default: return null;
		}
	},
	renderContent: ({ key: e, annotation: t }) => /* @__PURE__ */ (0, T.jsx)(H, { annotation: t }, e),
	renderOverlay: ({ type: e, annotation: t } = M) => {
		switch (e) {
			case X.TYPE: return /* @__PURE__ */ (0, T.jsx)(U, { children: "Click to Annotate" });
			default: return /* @__PURE__ */ (0, T.jsx)(U, { children: "Click and Drag to Annotate" });
		}
	}
}, ge = o.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${U} {
    opacity: 1;
  }

  touch-action: ${(e) => e.$allowTouch ? "pinch-zoom" : "auto"};
`, _e = o.img`
  display: block;
  width: 100%;
  user-select: none;
`, ve = o.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, ye = o.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function be({ setContainerRef: t, style: n, className: r, onContainerMouseLeave: i, onContainerTouchCancel: a, onContainerMouseMove: o, allowTouch: s, setImageRef: c, src: l, alt: u, annotations: d, renderSlots: f, shouldAnnotationBeActive: p, topAnnotationAtMouse: m, disableSelector: h, value: g, setTargetRef: _, onInteractionTargetClick: v, onInteractionTargetMouseUp: y, onInteractionTargetMouseDown: b, disableOverlay: x, effectiveType: S, editModeAnnotationIds: C, disableEditor: w, onChange: E, onEditorSubmit: D, children: O }) {
	let { renderHighlight: k, renderSelector: A, renderOverlay: j, renderContent: M, renderEditor: N } = f;
	return /* @__PURE__ */ (0, T.jsxs)(ge, {
		ref: t,
		style: n,
		className: r,
		onMouseLeave: i,
		onTouchCancel: a,
		onMouseMove: o,
		$allowTouch: s,
		children: [
			/* @__PURE__ */ (0, T.jsx)(_e, {
				ref: c,
				src: l,
				alt: u
			}),
			/* @__PURE__ */ (0, T.jsxs)(ve, { children: [d.map((t) => {
				if (!t.data?.id) return null;
				let n = p(t, m);
				return k ? /* @__PURE__ */ (0, T.jsx)(e.Fragment, { children: k({
					key: t.data.id,
					annotation: t,
					active: n
				}) }, t.data.id) : null;
			}), !h && g?.geometry && A && A({ annotation: g })] }),
			/* @__PURE__ */ (0, T.jsx)(ye, {
				ref: _,
				"data-testid": "annotation-target",
				onClick: v,
				onMouseUp: y,
				onMouseDown: b
			}),
			!x && j && j({
				type: S,
				annotation: g
			}),
			d.map((t) => {
				if (!t.data?.id) return null;
				let n = C?.includes(t.data.id) || !1;
				return (p(t, m) || n) && M != null ? /* @__PURE__ */ (0, T.jsx)(e.Fragment, { children: M({
					key: t.data.id,
					annotation: t
				}) }, t.data.id) : null;
			}),
			!w && g?.selection?.showEditor && N && E && N({
				annotation: g,
				onChange: E,
				onSubmit: D
			}),
			O
		]
	});
}
//#endregion
//#region src/components/Annotation.tsx
function xe({ ref: e, ...t }) {
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
	return /* @__PURE__ */ (0, T.jsx)(be, {
		...S(i, e),
		children: n
	});
}
xe.displayName = "Annotation";
//#endregion
//#region src/hooks/useMouseHover.ts
function Se(e, t) {
	if (!e || typeof e.getBoundingClientRect != "function") return !1;
	let { pageX: n, pageY: r } = t, { left: i, right: a, bottom: o, top: s } = e.getBoundingClientRect();
	return n > i && n < a && r > s && r < o;
}
function Ce() {
	let [e, r] = a(!1), o = i(null);
	return n(() => {
		let e = (e) => {
			let t = o.current;
			r(Se(t, {
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
var we = xe;
//#endregion
export { xe as Annotation, Q as OvalSelector, X as PointSelector, J as RectangleSelector, we as default, v as useAnnotationHitDetection, Ce as useMouseHover, _ as useRelativeMousePosition, b as useSelectorMethods };
