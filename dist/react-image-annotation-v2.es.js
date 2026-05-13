import $e, { useRef as ee, useState as et, useCallback as K, useEffect as le, useMemo as _t } from "react";
import H, { keyframes as Ct } from "styled-components";
var Ce = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function At() {
  if (at) return ie;
  at = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(s, c, l) {
    var i = null;
    if (l !== void 0 && (i = "" + l), c.key !== void 0 && (i = "" + c.key), "key" in c) {
      l = {};
      for (var r in c)
        r !== "key" && (l[r] = c[r]);
    } else l = c;
    return c = l.ref, {
      $$typeof: n,
      type: s,
      key: i,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return ie.Fragment = e, ie.jsx = t, ie.jsxs = t, ie;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function St() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    function n(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === I ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case E:
          return "Fragment";
        case C:
          return "Profiler";
        case b:
          return "StrictMode";
        case T:
          return "Suspense";
        case N:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case f:
            return "Portal";
          case S:
            return o.displayName || "Context";
          case k:
            return (o._context.displayName || "Context") + ".Consumer";
          case y:
            var h = o.render;
            return o = o.displayName, o || (o = h.displayName || h.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case Y:
            return h = o.displayName || null, h !== null ? h : n(o.type) || "Memo";
          case G:
            h = o._payload, o = o._init;
            try {
              return n(o(h));
            } catch {
            }
        }
      return null;
    }
    function e(o) {
      return "" + o;
    }
    function t(o) {
      try {
        e(o);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var w = h.error, M = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return w.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), e(o);
      }
    }
    function s(o) {
      if (o === E) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === G)
        return "<...>";
      try {
        var h = n(o);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var o = j.A;
      return o === null ? null : o.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function i(o) {
      if (P.call(o, "key")) {
        var h = Object.getOwnPropertyDescriptor(o, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function r(o, h) {
      function w() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: w,
        configurable: !0
      });
    }
    function d() {
      var o = n(this.type);
      return q[o] || (q[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function u(o, h, w, M, R, z) {
      var A = w.ref;
      return o = {
        $$typeof: x,
        type: o,
        key: h,
        props: w,
        _owner: M
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function m(o, h, w, M, R, z) {
      var A = h.children;
      if (A !== void 0)
        if (M)
          if (F(A)) {
            for (M = 0; M < A.length; M++)
              v(A[M]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(A);
      if (P.call(h, "key")) {
        A = n(o);
        var O = Object.keys(h).filter(function(J) {
          return J !== "key";
        });
        M = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", D[A + M] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          A,
          O,
          A
        ), D[A + M] = !0);
      }
      if (A = null, w !== void 0 && (t(w), A = "" + w), i(h) && (t(h.key), A = "" + h.key), "key" in h) {
        w = {};
        for (var $ in h)
          $ !== "key" && (w[$] = h[$]);
      } else w = h;
      return A && r(
        w,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), u(
        o,
        A,
        w,
        c(),
        R,
        z
      );
    }
    function v(o) {
      a(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === G && (o._payload.status === "fulfilled" ? a(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function a(o) {
      return typeof o == "object" && o !== null && o.$$typeof === x;
    }
    var p = $e, x = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), S = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), j = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, F = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var U, q = {}, X = p.react_stack_bottom_frame.bind(
      p,
      l
    )(), V = L(s(l)), D = {};
    ce.Fragment = E, ce.jsx = function(o, h, w) {
      var M = 1e4 > j.recentlyCreatedOwnerStacks++;
      return m(
        o,
        h,
        w,
        !1,
        M ? Error("react-stack-top-frame") : X,
        M ? L(s(o)) : V
      );
    }, ce.jsxs = function(o, h, w) {
      var M = 1e4 > j.recentlyCreatedOwnerStacks++;
      return m(
        o,
        h,
        w,
        !0,
        M ? Error("react-stack-top-frame") : X,
        M ? L(s(o)) : V
      );
    };
  }()), ce;
}
var dt;
function Nt() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? Ce.exports = At() : Ce.exports = St()), Ce.exports;
}
var _ = Nt(), Ae = { exports: {} }, qe = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function Ot() {
  if (ft) return qe;
  ft = 1;
  var n = $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return qe.c = function(e) {
    return n.H.useMemoCache(e);
  }, qe;
}
var Je = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function kt() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && function() {
    var n = $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Je.c = function(e) {
      var t = n.H;
      return t === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), t.useMemoCache(e);
    };
  }()), Je;
}
var pt;
function $t() {
  return pt || (pt = 1, process.env.NODE_ENV === "production" ? Ae.exports = Ot() : Ae.exports = kt()), Ae.exports;
}
var W = $t();
const Tt = (n, e) => {
  const t = e || n.currentTarget;
  if (!t || typeof t.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const s = t.getBoundingClientRect(), c = n.clientX - s.x, l = n.clientY - s.y;
  return {
    x: c / s.width * 100,
    y: l / s.height * 100
  };
}, gt = (n, e, t) => Math.max(n, Math.min(e, t)), Pt = (n) => {
  if (!n.currentTarget || typeof n.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = n.targetTouches[0], t = n.currentTarget.getBoundingClientRect(), s = e.pageX - t.left, c = e.pageY - (t.top + window.scrollY);
  return {
    x: gt(0, 100, s / t.width * 100),
    y: gt(0, 100, c / t.height * 100)
  };
}, ne = (n, e) => Yt(n) ? jt(n) ? (It(n) && n.preventDefault(), Pt(n)) : {
  x: null
} : Tt(n, e), Yt = (n) => n.targetTouches !== void 0, jt = (n) => n.targetTouches.length === 1, It = (n) => n.type === "touchmove";
function Lt(n, e = {}) {
  const {
    onPositionChange: t,
    throttleMs: s = 16
  } = e, c = ee({
    x: null,
    y: null
  }), [l, i] = et({
    x: null,
    y: null
  }), r = ee(0), d = ee(null), u = K((f) => {
    if (c.current = f, t) {
      const E = Date.now();
      s <= 0 || E - r.current >= s ? (i(f), t(f), r.current = E) : (d.current && clearTimeout(d.current), d.current = setTimeout(() => {
        i(f), t(f), r.current = Date.now();
      }, s - (E - r.current)));
    }
  }, [t, s]), m = K((f) => {
    try {
      const E = n.current;
      if (!E) {
        u({
          x: null,
          y: null
        });
        return;
      }
      const b = Tt(f, E);
      u(b);
    } catch {
      u({
        x: null,
        y: null
      });
    }
  }, [n, u]), v = K((f) => {
    const E = n.current;
    if (!E || f.targetTouches.length !== 1)
      return;
    const b = f.targetTouches[0], C = E.offsetParent;
    if (C)
      try {
        const k = b.pageX - C.offsetLeft, S = b.pageY - C.offsetTop, y = E, T = y.width, N = y.height;
        T > 0 && N > 0 ? u({
          x: k / T * 100,
          y: S / N * 100
        }) : u({
          x: null,
          y: null
        });
      } catch {
        u({
          x: null,
          y: null
        });
      }
  }, [n, u]), a = K((f) => {
    u({
      x: null,
      y: null
    });
  }, [u]), p = K((f) => {
    u({
      x: null,
      y: null
    });
  }, [u]), x = K(() => c.current, []);
  return le(() => () => {
    d.current && clearTimeout(d.current);
  }, []), {
    mousePosition: t ? l : c.current,
    handlers: {
      onMouseMove: m,
      onMouseLeave: a,
      onTouchMove: v,
      onTouchLeave: p
    },
    getCurrentMousePosition: x
  };
}
function Dt(n) {
  const e = W.c(12), {
    annotations: t,
    selectors: s,
    imageRef: c,
    enableEditing: l
  } = n;
  let i, r;
  e[0] !== s ? (r = new Map(s.map(Gt)), e[0] = s, e[1] = r) : r = e[1], i = r;
  const d = i;
  let u;
  e[2] !== d ? (u = (x) => {
    if (x)
      return d.get(x);
  }, e[2] = d, e[3] = u) : u = e[3];
  const m = u;
  let v;
  e[4] !== t || e[5] !== l || e[6] !== m || e[7] !== c ? (v = (x, f) => {
    const E = c.current;
    if (!E || x === null || f === null)
      return;
    const b = {
      x,
      y: f
    }, C = t.map((S) => {
      const {
        geometry: y
      } = S;
      if (!y)
        return null;
      const T = m(y.type);
      if (!T)
        return null;
      let N = y;
      return l && y.type === "RECTANGLE" && typeof y.x == "number" && typeof y.y == "number" && typeof y.width == "number" && typeof y.height == "number" && (N = {
        ...y,
        x: Math.max(0, y.x - 2),
        y: Math.max(0, y.y - 2),
        width: Math.min(100 - y.x + 2, y.width + 4),
        height: Math.min(100 - y.y + 2, y.height + 4)
      }), T.intersects(b, N, E) ? S : null;
    }).filter(Ht);
    return C.length === 0 ? void 0 : C.sort((S, y) => {
      const T = m(S.geometry.type), N = m(y.geometry.type);
      return !T || !N ? 0 : T.area(S.geometry, E) - N.area(y.geometry, E);
    })[0];
  }, e[4] = t, e[5] = l, e[6] = m, e[7] = c, e[8] = v) : v = e[8];
  const a = v;
  let p;
  return e[9] !== m || e[10] !== a ? (p = {
    getTopAnnotationAt: a,
    getSelectorByType: m
  }, e[9] = m, e[10] = a, e[11] = p) : p = e[11], p;
}
function Ht(n) {
  return n !== null;
}
function Gt(n) {
  return [n.TYPE, n];
}
function Ut(n) {
  const e = W.c(17), {
    targetRef: t,
    imageRef: s,
    annotations: c,
    selectors: l,
    enableEditing: i,
    throttleMs: r
  } = n, d = r === void 0 ? 50 : r, [u, m] = et(void 0), v = ee(void 0), a = ee(void 0);
  let p;
  e[0] !== c || e[1] !== i || e[2] !== s || e[3] !== l ? (p = {
    annotations: c,
    selectors: l,
    imageRef: s,
    enableEditing: i
  }, e[0] = c, e[1] = i, e[2] = s, e[3] = l, e[4] = p) : p = e[4];
  const {
    getTopAnnotationAt: x
  } = Dt(p);
  let f;
  e[5] !== x ? (f = (Y) => {
    var P;
    const {
      x: G,
      y: B
    } = Y, I = x(G, B), j = (P = I == null ? void 0 : I.data) == null ? void 0 : P.id;
    j !== a.current && (a.current = j, v.current = I, m(I));
  }, e[5] = x, e[6] = f) : f = e[6];
  const E = f;
  let b;
  e[7] !== E || e[8] !== d ? (b = {
    onPositionChange: E,
    throttleMs: d
  }, e[7] = E, e[8] = d, e[9] = b) : b = e[9];
  const {
    handlers: C
  } = Lt(t, b);
  let k;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (k = () => {
    m(void 0), v.current = void 0, a.current = void 0;
  }, e[10] = k) : k = e[10];
  let S;
  e[11] !== c || e[12] !== l ? (S = [c, l], e[11] = c, e[12] = l, e[13] = S) : S = e[13], le(k, S);
  let y;
  y = C;
  const T = y;
  let N;
  return e[14] !== u || e[15] !== T ? (N = {
    hoveredAnnotation: u,
    mouseHandlers: T
  }, e[14] = u, e[15] = T, e[16] = N) : N = e[16], N;
}
function Xt({
  selectors: n,
  effectiveType: e,
  value: t,
  onChange: s,
  disableAnnotation: c
}) {
  const l = K((r) => {
    if (r)
      return n.find((d) => d.TYPE === r);
  }, [n]);
  return {
    callSelectorMethod: K((r, d) => {
      if (c)
        return;
      const u = l(e);
      if (!(u != null && u.methods[r]))
        return;
      const m = u.methods[r];
      try {
        const v = m(t || {}, d);
        if (typeof v > "u") {
          process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(r)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);
          return;
        }
        s == null || s(v);
      } catch (v) {
        process.env.NODE_ENV !== "production" && console.error(`Error calling selector method ${String(r)}:`, v);
      }
    }, [c, l, e, t, s]),
    getSelectorByType: l
  };
}
function Ze(n, e) {
  n && (typeof n == "function" ? n(e) : n.current = e);
}
function Vt(n, e) {
  var nt, ot, rt, st, it, ct;
  const t = W.c(97), {
    src: s,
    alt: c,
    style: l,
    className: i,
    containerRef: r,
    imageRef: d,
    annotations: u,
    type: m,
    selectors: v,
    value: a,
    onChange: p,
    onSubmit: x,
    activeAnnotationComparator: f,
    activeAnnotations: E,
    editModeAnnotationIds: b,
    disableAnnotation: C,
    disableSelector: k,
    disableEditor: S,
    disableOverlay: y,
    allowTouch: T,
    renderSelector: N,
    renderEditor: Y,
    renderHighlight: G,
    renderContent: B,
    renderOverlay: I,
    onImageMouseUp: j,
    onImageMouseDown: P,
    onImageMouseMove: F,
    onImageClick: L
  } = n, U = c === void 0 ? "Annotation Image" : c, q = ee(null), X = ee(null), V = !S;
  let D;
  t[0] !== u || t[1] !== v || t[2] !== V ? (D = {
    targetRef: X,
    imageRef: q,
    annotations: u,
    selectors: v,
    enableEditing: V,
    throttleMs: 50
  }, t[0] = u, t[1] = v, t[2] = V, t[3] = D) : D = t[3];
  const {
    hoveredAnnotation: o,
    mouseHandlers: h
  } = Ut(D), w = m || ((nt = v[0]) == null ? void 0 : nt.TYPE);
  let M;
  t[4] !== C || t[5] !== w || t[6] !== p || t[7] !== v || t[8] !== a ? (M = {
    selectors: v,
    effectiveType: w,
    value: a,
    onChange: p,
    disableAnnotation: C
  }, t[4] = C, t[5] = w, t[6] = p, t[7] = v, t[8] = a, t[9] = M) : M = t[9];
  const {
    callSelectorMethod: R
  } = Xt(M);
  let z;
  t[10] !== T || t[11] !== R ? (z = (g) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && T && g.preventDefault(), R("onTouchStart", g);
  }, t[10] = T, t[11] = R, t[12] = z) : z = t[12];
  const A = z;
  let O;
  t[13] !== R ? (O = (g) => {
    R("onTouchEnd", g);
  }, t[13] = R, t[14] = O) : O = t[14];
  const $ = O;
  let J;
  t[15] !== T || t[16] !== R || t[17] !== h ? (J = (g) => {
    h.onTouchMove(g), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && T && g.preventDefault(), R("onTouchMove", g);
  }, t[15] = T, t[16] = R, t[17] = h, t[18] = J) : J = t[18];
  const Z = J;
  let ue;
  t[19] !== h ? (ue = (g) => {
    h.onTouchLeave(g);
  }, t[19] = h, t[20] = ue) : ue = t[20];
  const re = ue;
  let de, fe;
  t[21] !== T || t[22] !== $ || t[23] !== re || t[24] !== Z || t[25] !== A ? (de = () => {
    const g = X.current;
    if (!(!T || !g))
      return g.ontouchstart = A, g.ontouchend = $, g.ontouchmove = Z, g.ontouchcancel = re, () => {
        g.ontouchstart = null, g.ontouchend = null, g.ontouchmove = null, g.ontouchcancel = null;
      };
  }, fe = [T, A, $, Z, re], t[21] = T, t[22] = $, t[23] = re, t[24] = Z, t[25] = A, t[26] = de, t[27] = fe) : (de = t[26], fe = t[27]), le(de, fe);
  let he;
  t[28] !== e || t[29] !== d ? (he = (g) => {
    q.current = g, Ze(e, g), Ze(d, g);
  }, t[28] = e, t[29] = d, t[30] = he) : he = t[30];
  const Pe = he;
  let pe;
  t[31] === Symbol.for("react.memo_cache_sentinel") ? (pe = (g) => {
    X.current = g;
  }, t[31] = pe) : pe = t[31];
  const Mt = pe;
  let ge;
  t[32] !== r ? (ge = (g) => {
    Ze(r, g);
  }, t[32] = r, t[33] = ge) : ge = t[33];
  const Ye = ge;
  let me;
  t[34] !== R || t[35] !== h || t[36] !== F ? (me = (g) => {
    h.onMouseMove(g.nativeEvent), F == null || F(g), R("onMouseMove", g);
  }, t[34] = R, t[35] = h, t[36] = F, t[37] = me) : me = t[37];
  const je = me;
  let xe;
  t[38] !== h ? (xe = (g) => {
    h.onMouseLeave(g.nativeEvent);
  }, t[38] = h, t[39] = xe) : xe = t[39];
  const Ie = xe;
  let ve;
  t[40] !== R || t[41] !== j ? (ve = (g) => {
    j == null || j(g), R("onMouseUp", g);
  }, t[40] = R, t[41] = j, t[42] = ve) : ve = t[42];
  const Le = ve;
  let Ee;
  t[43] !== R || t[44] !== P ? (Ee = (g) => {
    P == null || P(g), R("onMouseDown", g);
  }, t[43] = R, t[44] = P, t[45] = Ee) : Ee = t[45];
  const De = Ee;
  let be;
  t[46] !== R || t[47] !== L ? (be = (g) => {
    L == null || L(g), R("onClick", g);
  }, t[46] = R, t[47] = L, t[48] = be) : be = t[48];
  const He = be;
  let ye;
  t[49] !== x || t[50] !== a ? (ye = () => {
    x && a && x(a);
  }, t[49] = x, t[50] = a, t[51] = ye) : ye = t[51];
  const Ge = ye;
  let Te;
  t[52] !== p || t[53] !== (a == null ? void 0 : a.geometry) || t[54] !== ((ot = a == null ? void 0 : a.selection) == null ? void 0 : ot.showEditor) ? (Te = (g) => {
    var se;
    g.key === "Escape" && p && ((se = a == null ? void 0 : a.selection) != null && se.showEditor || a != null && a.geometry) && p({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, t[52] = p, t[53] = a == null ? void 0 : a.geometry, t[54] = (rt = a == null ? void 0 : a.selection) == null ? void 0 : rt.showEditor, t[55] = Te) : Te = t[55];
  const te = Te;
  let we;
  t[56] !== te || t[57] !== ((st = a == null ? void 0 : a.selection) == null ? void 0 : st.showEditor) ? (we = () => {
    var g;
    if ((g = a == null ? void 0 : a.selection) != null && g.showEditor)
      return window.addEventListener("keydown", te), () => window.removeEventListener("keydown", te);
  }, t[56] = te, t[57] = (it = a == null ? void 0 : a.selection) == null ? void 0 : it.showEditor, t[58] = we) : we = t[58];
  const Ue = (ct = a == null ? void 0 : a.selection) == null ? void 0 : ct.showEditor;
  let Re;
  t[59] !== te || t[60] !== Ue ? (Re = [Ue, te], t[59] = te, t[60] = Ue, t[61] = Re) : Re = t[61], le(we, Re);
  const Xe = o;
  let Me;
  t[62] !== f || t[63] !== E ? (Me = (g, se) => E && E.some((lt) => f ? f(g, lt) : g.data.id === lt) || se === g, t[62] = f, t[63] = E, t[64] = Me) : Me = t[64];
  const Ve = Me, ze = re, Be = !!k, Fe = !!y, We = !!S;
  let oe;
  t[65] !== B || t[66] !== Y || t[67] !== G || t[68] !== I || t[69] !== N ? (oe = {
    renderHighlight: G,
    renderSelector: N,
    renderOverlay: I,
    renderContent: B,
    renderEditor: Y
  }, t[65] = B, t[66] = Y, t[67] = G, t[68] = I, t[69] = N, t[70] = oe) : oe = t[70];
  let _e;
  return t[71] !== T || t[72] !== U || t[73] !== u || t[74] !== i || t[75] !== b || t[76] !== w || t[77] !== Ge || t[78] !== He || t[79] !== De || t[80] !== Le || t[81] !== Ie || t[82] !== je || t[83] !== p || t[84] !== Ye || t[85] !== Pe || t[86] !== Ve || t[87] !== s || t[88] !== l || t[89] !== ze || t[90] !== Be || t[91] !== Fe || t[92] !== We || t[93] !== oe || t[94] !== Xe || t[95] !== a ? (_e = {
    setContainerRef: Ye,
    style: l,
    className: i,
    onContainerMouseLeave: Ie,
    onContainerTouchCancel: ze,
    onContainerMouseMove: je,
    allowTouch: T,
    setImageRef: Pe,
    src: s,
    alt: U,
    annotations: u,
    shouldAnnotationBeActive: Ve,
    topAnnotationAtMouse: Xe,
    disableSelector: Be,
    value: a,
    setTargetRef: Mt,
    onInteractionTargetClick: He,
    onInteractionTargetMouseUp: Le,
    onInteractionTargetMouseDown: De,
    disableOverlay: Fe,
    effectiveType: w,
    editModeAnnotationIds: b,
    disableEditor: We,
    onChange: p,
    onEditorSubmit: Ge,
    renderSlots: oe
  }, t[71] = T, t[72] = U, t[73] = u, t[74] = i, t[75] = b, t[76] = w, t[77] = Ge, t[78] = He, t[79] = De, t[80] = Le, t[81] = Ie, t[82] = je, t[83] = p, t[84] = Ye, t[85] = Pe, t[86] = Ve, t[87] = s, t[88] = l, t[89] = ze, t[90] = Be, t[91] = Fe, t[92] = We, t[93] = oe, t[94] = Xe, t[95] = a, t[96] = _e) : _e = t[96], _e;
}
const zt = H.div`
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
function mt(n) {
  const e = W.c(3), {
    geometry: t
  } = n.annotation;
  if (!t)
    return null;
  const s = `${t.y}%`, c = `${t.x}%`;
  let l;
  return e[0] !== s || e[1] !== c ? (l = /* @__PURE__ */ _.jsx(zt, { style: {
    top: s,
    left: c
  } }), e[0] = s, e[1] = c, e[2] = l) : l = e[2], l;
}
const Bt = H.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, Ft = H.div`
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
`, Wt = (n) => {
  const e = W.c(11), {
    onChange: t,
    onSubmit: s,
    onFocus: c,
    onBlur: l,
    value: i
  } = n;
  let r;
  e[0] !== l || e[1] !== t || e[2] !== c || e[3] !== i ? (r = /* @__PURE__ */ _.jsx(Bt, { children: /* @__PURE__ */ _.jsx("textarea", { placeholder: "Write description", onFocus: c, onBlur: l, onChange: t, value: i }) }), e[0] = l, e[1] = t, e[2] = c, e[3] = i, e[4] = r) : r = e[4];
  let d;
  e[5] !== s || e[6] !== i ? (d = i && /* @__PURE__ */ _.jsx(Ft, { onClick: s, children: "Submit" }), e[5] = s, e[6] = i, e[7] = d) : d = e[7];
  let u;
  return e[8] !== r || e[9] !== d ? (u = /* @__PURE__ */ _.jsxs($e.Fragment, { children: [
    r,
    d
  ] }), e[8] = r, e[9] = d, e[10] = u) : u = e[10], u;
}, ae = {}, qt = {}, Jt = Ct`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Zt = H.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Jt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, Qt = (n) => {
  var b;
  const e = W.c(15), {
    annotation: t,
    onChange: s,
    onSubmit: c,
    className: l,
    style: i
  } = n, r = l === void 0 ? "" : l, d = i === void 0 ? ae : i, {
    geometry: u
  } = t;
  if (!u)
    return null;
  const m = `${u.x}%`, v = `${u.y + u.height}%`;
  let a;
  e[0] !== d || e[1] !== m || e[2] !== v ? (a = {
    position: "absolute",
    left: m,
    top: v,
    ...d
  }, e[0] = d, e[1] = m, e[2] = v, e[3] = a) : a = e[3];
  let p;
  e[4] !== t || e[5] !== s ? (p = (C) => s({
    ...t,
    data: {
      ...t.data,
      text: C.target.value
    }
  }), e[4] = t, e[5] = s, e[6] = p) : p = e[6];
  const x = (b = t.data) == null ? void 0 : b.text;
  let f;
  e[7] !== c || e[8] !== p || e[9] !== x ? (f = /* @__PURE__ */ _.jsx(Wt, { onChange: p, onSubmit: c, value: x }), e[7] = c, e[8] = p, e[9] = x, e[10] = f) : f = e[10];
  let E;
  return e[11] !== r || e[12] !== a || e[13] !== f ? (E = /* @__PURE__ */ _.jsx(Zt, { className: r, style: a, children: f }), e[11] = r, e[12] = a, e[13] = f, e[14] = E) : E = e[14], E;
}, Se = H.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, Kt = H.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function en(n) {
  const e = W.c(21), {
    annotation: t,
    className: s,
    style: c
  } = n, l = s === void 0 ? "" : s, i = c === void 0 ? ae : c, {
    geometry: r
  } = t;
  if (!r)
    return null;
  const d = `${r.y}%`;
  let u;
  e[0] !== d ? (u = /* @__PURE__ */ _.jsx(Se, { style: {
    height: d,
    width: "100%"
  } }), e[0] = d, e[1] = u) : u = e[1];
  const m = `${r.y}%`, v = `${r.height}%`, a = `${r.x}%`;
  let p;
  e[2] !== m || e[3] !== v || e[4] !== a ? (p = /* @__PURE__ */ _.jsx(Se, { style: {
    top: m,
    height: v,
    width: a
  } }), e[2] = m, e[3] = v, e[4] = a, e[5] = p) : p = e[5];
  const x = `${r.y}%`, f = `${r.x + r.width}%`, E = `${r.height}%`, b = `${100 - (r.x + r.width)}%`;
  let C;
  e[6] !== f || e[7] !== E || e[8] !== b || e[9] !== x ? (C = /* @__PURE__ */ _.jsx(Se, { style: {
    top: x,
    left: f,
    height: E,
    width: b
  } }), e[6] = f, e[7] = E, e[8] = b, e[9] = x, e[10] = C) : C = e[10];
  const k = `${r.y + r.height}%`, S = `${100 - (r.y + r.height)}%`;
  let y;
  e[11] !== k || e[12] !== S ? (y = /* @__PURE__ */ _.jsx(Se, { style: {
    top: k,
    height: S,
    width: "100%"
  } }), e[11] = k, e[12] = S, e[13] = y) : y = e[13];
  let T;
  return e[14] !== l || e[15] !== i || e[16] !== C || e[17] !== y || e[18] !== u || e[19] !== p ? (T = /* @__PURE__ */ _.jsxs(Kt, { className: l, style: i, children: [
    u,
    p,
    C,
    y
  ] }), e[14] = l, e[15] = i, e[16] = C, e[17] = y, e[18] = u, e[19] = p, e[20] = T) : T = e[20], T;
}
const tn = H.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function nn(n) {
  const e = W.c(10), {
    annotation: t,
    className: s,
    style: c,
    active: l
  } = n, i = s === void 0 ? "" : s, r = c === void 0 ? ae : c, {
    geometry: d
  } = t;
  if (!d)
    return null;
  const u = `${d.x}%`, m = `${d.y}%`, v = `${d.height}%`, a = `${d.width}%`, p = l ? "0 0 1px 1px yellow inset" : void 0;
  let x;
  e[0] !== r || e[1] !== u || e[2] !== m || e[3] !== v || e[4] !== a || e[5] !== p ? (x = {
    position: "absolute",
    left: u,
    top: m,
    height: v,
    width: a,
    boxShadow: p,
    ...r
  }, e[0] = r, e[1] = u, e[2] = m, e[3] = v, e[4] = a, e[5] = p, e[6] = x) : x = e[6];
  let f;
  return e[7] !== i || e[8] !== x ? (f = /* @__PURE__ */ _.jsx(tn, { className: i, style: x }), e[7] = i, e[8] = x, e[9] = f) : f = e[9], f;
}
const on = H.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function xt(n) {
  const e = W.c(10), {
    annotation: t,
    className: s,
    style: c,
    active: l
  } = n, i = s === void 0 ? "" : s, r = c === void 0 ? ae : c, {
    geometry: d
  } = t;
  if (!d)
    return null;
  const u = `${d.x}%`, m = `${d.y}%`, v = `${d.height}%`, a = `${d.width}%`, p = l ? "0 0 1px 1px yellow inset" : void 0;
  let x;
  e[0] !== r || e[1] !== u || e[2] !== m || e[3] !== v || e[4] !== a || e[5] !== p ? (x = {
    position: "absolute",
    left: u,
    top: m,
    height: v,
    width: a,
    boxShadow: p,
    ...r
  }, e[0] = r, e[1] = u, e[2] = m, e[3] = v, e[4] = a, e[5] = p, e[6] = x) : x = e[6];
  let f;
  return e[7] !== i || e[8] !== x ? (f = /* @__PURE__ */ _.jsx(on, { className: i, style: x }), e[7] = i, e[8] = x, e[9] = f) : f = e[9], f;
}
const rn = H.div`
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
function sn(n) {
  const e = W.c(8), {
    annotation: t,
    style: s,
    className: c
  } = n, l = s === void 0 ? ae : s, i = c === void 0 ? "" : c, {
    geometry: r
  } = t;
  if (!r || typeof r.x > "u" || typeof r.y > "u" || typeof r.width > "u" || typeof r.height > "u")
    return null;
  const d = `${r.x}%`, u = `${r.y + r.height}%`;
  let m;
  e[0] !== l || e[1] !== d || e[2] !== u ? (m = {
    position: "absolute",
    left: d,
    top: u,
    ...l
  }, e[0] = l, e[1] = d, e[2] = u, e[3] = m) : m = e[3];
  const v = t.data && t.data.text;
  let a;
  return e[4] !== i || e[5] !== m || e[6] !== v ? (a = /* @__PURE__ */ _.jsx(rn, { style: m, className: i, children: v }), e[4] = i, e[5] = m, e[6] = v, e[7] = a) : a = e[7], a;
}
const Ke = H.div`
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
`, wt = "RECTANGLE";
function cn({
  x: n,
  y: e
}, t, s) {
  if (!t) return !1;
  const c = Math.min(t.x, t.x + t.width), l = Math.max(t.x, t.x + t.width), i = Math.min(t.y, t.y + t.height), r = Math.max(t.y, t.y + t.height);
  return !(n < c || e < i || n > l || e > r);
}
function ln(n, e) {
  if (!n || n.width <= 0 || n.height <= 0) return 0;
  const t = Math.abs(n.width), s = Math.abs(n.height);
  return t * s;
}
const an = {
  onTouchStart(n, e) {
    return vt(n, e);
  },
  onTouchEnd(n, e) {
    return Et(n);
  },
  onTouchMove(n, e) {
    return bt(n, e);
  },
  onMouseDown(n, e) {
    return vt(n, e);
  },
  onMouseUp(n, e) {
    return Et(n);
  },
  onMouseMove(n, e) {
    return bt(n, e);
  }
};
function vt(n, e) {
  if (n.selection)
    return {};
  {
    const {
      x: t,
      y: s
    } = ne(e);
    return {
      ...n,
      selection: {
        ...n.selection,
        mode: "SELECTING",
        anchorX: t,
        anchorY: s
      }
    };
  }
}
function Et(n, e) {
  if (n.selection) {
    const {
      selection: t,
      geometry: s
    } = n;
    if (!s)
      return {};
    switch (n.selection.mode) {
      case "SELECTING":
        return {
          ...n,
          selection: {
            ...n.selection,
            showEditor: !0,
            mode: "EDITING"
          }
        };
    }
  }
  return n;
}
function bt(n, e) {
  if (n.selection && n.selection.mode === "SELECTING") {
    const {
      anchorX: t,
      anchorY: s
    } = n.selection, {
      x: c,
      y: l
    } = ne(e), i = c - t, r = l - s;
    return {
      ...n,
      geometry: {
        ...n.geometry,
        type: wt,
        x: i > 0 ? t : c,
        y: r > 0 ? s : l,
        width: Math.abs(i),
        height: Math.abs(r)
      }
    };
  }
  return n;
}
const Ne = {
  TYPE: wt,
  intersects: cn,
  area: ln,
  methods: an
}, yt = 6, un = (n = {
  width: 100,
  height: 100
}) => ({
  marginX: yt / n.width * 100,
  marginY: yt / n.height * 100
}), Rt = "POINT";
function dn({
  x: n,
  y: e
}, t, s) {
  if (!t) return !1;
  const {
    marginX: c,
    marginY: l
  } = un(s), i = Math.min(c, l) / 2, r = Math.abs(n - t.x), d = Math.abs(e - t.y);
  return r <= i && d <= i;
}
function fn(n, e) {
  return 0;
}
const hn = {
  onClick(n, e) {
    return n.geometry ? {} : {
      ...n,
      selection: {
        ...n.selection,
        showEditor: !0,
        mode: "EDITING"
      },
      geometry: {
        ...n.geometry,
        ...ne(e),
        width: 0,
        height: 0,
        type: Rt
      }
    };
  }
}, Oe = {
  TYPE: Rt,
  intersects: dn,
  area: fn,
  methods: hn
}, ke = (n) => Math.pow(n, 2), tt = "OVAL";
function pn({
  x: n,
  y: e
}, t, s) {
  if (!t || !t.width || !t.height) return !1;
  const c = Math.abs(t.width), l = Math.abs(t.height), i = {
    x: t.x + c / 2,
    y: t.y + l / 2
  }, r = c / 2, d = l / 2;
  if (r === 0 || d === 0) return !1;
  const u = n - i.x, m = e - i.y;
  return ke(u) / ke(r) + ke(m) / ke(d) <= 1;
}
function gn(n, e) {
  if (!n || n.width <= 0 || n.height <= 0) return 0;
  const t = Math.abs(n.width), s = Math.abs(n.height);
  return Math.PI * (t / 2) * (s / 2);
}
const mn = {
  onTouchStart(n, e) {
    return xn(n, e);
  },
  onTouchEnd(n, e) {
    return vn(n);
  },
  onTouchMove(n, e) {
    return En(n, e);
  },
  onMouseDown(n, e) {
    if (!n.geometry) {
      const {
        x: t,
        y: s
      } = ne(e);
      return {
        ...n,
        selection: {
          ...n.selection,
          mode: "SELECTING",
          anchorX: t,
          anchorY: s
        }
      };
    }
    return n;
  },
  onMouseUp(n, e) {
    if (n.selection && n.selection.mode === "SELECTING")
      return {
        ...n,
        selection: {
          ...n.selection,
          showEditor: !0,
          mode: "EDITING"
        }
      };
  },
  onMouseMove(n, e) {
    if (n.selection && n.selection.mode === "SELECTING") {
      const {
        anchorX: t,
        anchorY: s
      } = n.selection, {
        x: c,
        y: l
      } = ne(e);
      return {
        ...n,
        geometry: {
          ...n.geometry,
          type: tt,
          x: Math.min(t, c),
          y: Math.min(s, l),
          width: Math.abs(c - t),
          height: Math.abs(l - s)
        }
      };
    }
    return n;
  }
};
function xn(n, e) {
  if (n.selection)
    return {};
  {
    const {
      x: t,
      y: s
    } = ne(e);
    return {
      ...n,
      selection: {
        ...n.selection,
        mode: "SELECTING",
        anchorX: t,
        anchorY: s
      }
    };
  }
}
function vn(n, e) {
  if (n.selection) {
    const {
      selection: t,
      geometry: s
    } = n;
    if (!s)
      return {};
    switch (n.selection.mode) {
      case "SELECTING":
        return {
          ...n,
          selection: {
            ...n.selection,
            showEditor: !0,
            mode: "EDITING"
          }
        };
    }
  }
  return n;
}
function En(n, e) {
  if (n.selection && n.selection.mode === "SELECTING") {
    const {
      anchorX: t,
      anchorY: s
    } = n.selection, {
      x: c,
      y: l
    } = ne(e), i = c - t, r = l - s;
    return {
      ...n,
      geometry: {
        ...n.geometry,
        type: tt,
        x: i > 0 ? t : c,
        y: r > 0 ? s : l,
        width: Math.abs(i),
        height: Math.abs(r)
      }
    };
  }
  return n;
}
const Qe = {
  TYPE: tt,
  intersects: pn,
  area: gn,
  methods: mn
}, Q = {
  // Basic settings
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  allowTouch: !1,
  // Selectors configuration
  type: Ne.TYPE,
  selectors: [Ne, Oe, Qe],
  // Comparator for active annotations
  activeAnnotationComparator: (n, e) => n === e,
  // Editing functionality defaults
  enableEditing: !1,
  onAnnotationsChange: () => {
    process.env.NODE_ENV !== "production" && console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.");
  },
  // Render functions with improved typing
  renderSelector: ({
    annotation: n
  }) => {
    var e;
    switch ((e = n.geometry) == null ? void 0 : e.type) {
      case Ne.TYPE:
        return /* @__PURE__ */ _.jsx(en, { annotation: n });
      case Oe.TYPE:
        return /* @__PURE__ */ _.jsx(mt, { annotation: n });
      case Qe.TYPE:
        return /* @__PURE__ */ _.jsx(xt, { annotation: n });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: n,
    onChange: e,
    onSubmit: t
  }) => /* @__PURE__ */ _.jsx(Qt, { annotation: n, onChange: e, onSubmit: t }),
  renderHighlight: ({
    key: n,
    annotation: e,
    active: t
  }) => {
    switch (e.geometry.type) {
      case Ne.TYPE:
        return /* @__PURE__ */ _.jsx(nn, { annotation: e, active: t }, n);
      case Oe.TYPE:
        return /* @__PURE__ */ _.jsx(mt, { annotation: e }, n);
      case Qe.TYPE:
        return /* @__PURE__ */ _.jsx(xt, { annotation: e, active: t }, n);
      default:
        return null;
    }
  },
  renderContent: ({
    key: n,
    annotation: e
  }) => /* @__PURE__ */ _.jsx(sn, { annotation: e }, n),
  renderOverlay: ({
    type: n,
    annotation: e
  } = qt) => {
    switch (n) {
      case Oe.TYPE:
        return /* @__PURE__ */ _.jsx(Ke, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ _.jsx(Ke, { children: "Click and Drag to Annotate" });
    }
  }
}, bn = H.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${Ke} {
    opacity: 1;
  }

  touch-action: ${(n) => n.$allowTouch ? "pinch-zoom" : "auto"};
`, yn = H.img`
  display: block;
  width: 100%;
  user-select: none;
`, Tn = H.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, wn = H.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Rn(n) {
  var A;
  const e = W.c(62), {
    setContainerRef: t,
    style: s,
    className: c,
    onContainerMouseLeave: l,
    onContainerTouchCancel: i,
    onContainerMouseMove: r,
    allowTouch: d,
    setImageRef: u,
    src: m,
    alt: v,
    annotations: a,
    renderSlots: p,
    shouldAnnotationBeActive: x,
    topAnnotationAtMouse: f,
    disableSelector: E,
    value: b,
    setTargetRef: C,
    onInteractionTargetClick: k,
    onInteractionTargetMouseUp: S,
    onInteractionTargetMouseDown: y,
    disableOverlay: T,
    effectiveType: N,
    editModeAnnotationIds: Y,
    disableEditor: G,
    onChange: B,
    onEditorSubmit: I,
    children: j
  } = n, {
    renderHighlight: P,
    renderSelector: F,
    renderOverlay: L,
    renderContent: U,
    renderEditor: q
  } = p;
  let X;
  e[0] !== v || e[1] !== u || e[2] !== m ? (X = /* @__PURE__ */ _.jsx(yn, { ref: u, src: m, alt: v }), e[0] = v, e[1] = u, e[2] = m, e[3] = X) : X = e[3];
  let V;
  if (e[4] !== a || e[5] !== P || e[6] !== x || e[7] !== f) {
    let O;
    e[9] !== P || e[10] !== x || e[11] !== f ? (O = ($) => {
      var Z;
      if (!((Z = $.data) != null && Z.id))
        return null;
      const J = x($, f);
      return P ? P({
        key: $.data.id,
        annotation: $,
        active: J
      }) : null;
    }, e[9] = P, e[10] = x, e[11] = f, e[12] = O) : O = e[12], V = a.map(O), e[4] = a, e[5] = P, e[6] = x, e[7] = f, e[8] = V;
  } else
    V = e[8];
  let D;
  e[13] !== E || e[14] !== F || e[15] !== b ? (D = !E && (b == null ? void 0 : b.geometry) && F && F({
    annotation: b
  }), e[13] = E, e[14] = F, e[15] = b, e[16] = D) : D = e[16];
  let o;
  e[17] !== V || e[18] !== D ? (o = /* @__PURE__ */ _.jsxs(Tn, { children: [
    V,
    D
  ] }), e[17] = V, e[18] = D, e[19] = o) : o = e[19];
  let h;
  e[20] !== k || e[21] !== y || e[22] !== S || e[23] !== C ? (h = /* @__PURE__ */ _.jsx(wn, { ref: C, "data-testid": "annotation-target", onClick: k, onMouseUp: S, onMouseDown: y }), e[20] = k, e[21] = y, e[22] = S, e[23] = C, e[24] = h) : h = e[24];
  let w;
  e[25] !== T || e[26] !== N || e[27] !== L || e[28] !== b ? (w = !T && L && L({
    type: N,
    annotation: b
  }), e[25] = T, e[26] = N, e[27] = L, e[28] = b, e[29] = w) : w = e[29];
  let M;
  if (e[30] !== a || e[31] !== Y || e[32] !== U || e[33] !== x || e[34] !== f) {
    let O;
    e[36] !== Y || e[37] !== U || e[38] !== x || e[39] !== f ? (O = ($) => {
      var Z;
      if (!((Z = $.data) != null && Z.id))
        return null;
      const J = (Y == null ? void 0 : Y.includes($.data.id)) || !1;
      return (x($, f) || J) && U != null ? U({
        key: $.data.id,
        annotation: $
      }) : null;
    }, e[36] = Y, e[37] = U, e[38] = x, e[39] = f, e[40] = O) : O = e[40], M = a.map(O), e[30] = a, e[31] = Y, e[32] = U, e[33] = x, e[34] = f, e[35] = M;
  } else
    M = e[35];
  let R;
  e[41] !== G || e[42] !== B || e[43] !== I || e[44] !== q || e[45] !== b ? (R = !G && ((A = b == null ? void 0 : b.selection) == null ? void 0 : A.showEditor) && q && B && q({
    annotation: b,
    onChange: B,
    onSubmit: I
  }), e[41] = G, e[42] = B, e[43] = I, e[44] = q, e[45] = b, e[46] = R) : R = e[46];
  let z;
  return e[47] !== d || e[48] !== j || e[49] !== c || e[50] !== l || e[51] !== r || e[52] !== i || e[53] !== t || e[54] !== s || e[55] !== X || e[56] !== o || e[57] !== h || e[58] !== w || e[59] !== M || e[60] !== R ? (z = /* @__PURE__ */ _.jsxs(bn, { ref: t, style: s, className: c, onMouseLeave: l, onTouchCancel: i, onMouseMove: r, $allowTouch: d, children: [
    X,
    o,
    h,
    w,
    M,
    R,
    j
  ] }), e[47] = d, e[48] = j, e[49] = c, e[50] = l, e[51] = r, e[52] = i, e[53] = t, e[54] = s, e[55] = X, e[56] = o, e[57] = h, e[58] = w, e[59] = M, e[60] = R, e[61] = z) : z = e[61], z;
}
function Mn({
  ref: n,
  ...e
}) {
  const t = _t(() => {
    const {
      renderSlots: i,
      ...r
    } = e;
    return {
      ...Q,
      ...r,
      selectors: r.selectors ?? Q.selectors,
      renderSelector: r.renderSelector ?? (i == null ? void 0 : i.renderSelector) ?? Q.renderSelector,
      renderEditor: r.renderEditor ?? (i == null ? void 0 : i.renderEditor) ?? Q.renderEditor,
      renderHighlight: r.renderHighlight ?? (i == null ? void 0 : i.renderHighlight) ?? Q.renderHighlight,
      renderContent: r.renderContent ?? (i == null ? void 0 : i.renderContent) ?? Q.renderContent,
      renderOverlay: r.renderOverlay ?? (i == null ? void 0 : i.renderOverlay) ?? Q.renderOverlay,
      renderDraggableHighlight: r.renderDraggableHighlight ?? (i == null ? void 0 : i.renderDraggableHighlight) ?? Q.renderDraggableHighlight
    };
  }, [e]), {
    children: s,
    ...c
  } = t, l = Vt(c, n);
  return /* @__PURE__ */ _.jsx(Rn, { ...l, children: s });
}
Mn.displayName = "Annotation";
function _n(n, e) {
  if (!n || typeof n.getBoundingClientRect != "function")
    return !1;
  const {
    pageX: t,
    pageY: s
  } = e, {
    left: c,
    right: l,
    bottom: i,
    top: r
  } = n.getBoundingClientRect();
  return t > c && t < l && s > r && s < i;
}
function Nn() {
  const n = W.c(5), [e, t] = et(!1), s = ee(null);
  let c, l;
  n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
    const u = (m) => {
      const v = s.current, a = {
        pageX: m.pageX,
        pageY: m.pageY
      }, p = _n(v, a);
      t(p);
    };
    return document.addEventListener("mousemove", u, {
      passive: !0
    }), () => {
      document.removeEventListener("mousemove", u);
    };
  }, l = [], n[0] = c, n[1] = l) : (c = n[0], l = n[1]), le(c, l);
  let i;
  n[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (u) => {
    s.current = u;
  }, n[2] = i) : i = n[2];
  const r = i;
  let d;
  return n[3] !== e ? (d = {
    isHoveringOver: e,
    setRef: r
  }, n[3] = e, n[4] = d) : d = n[4], d;
}
export {
  Mn as Annotation,
  Qe as OvalSelector,
  Oe as PointSelector,
  Ne as RectangleSelector,
  Mn as default,
  Dt as useAnnotationHitDetection,
  Nn as useMouseHover,
  Lt as useRelativeMousePosition,
  Xt as useSelectorMethods
};
