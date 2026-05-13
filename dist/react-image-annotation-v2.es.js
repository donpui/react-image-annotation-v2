import ue, { useRef as D, useState as ve, useCallback as M, useEffect as Q, forwardRef as Ze, useMemo as Qe } from "react";
import $, { keyframes as Ke } from "styled-components";
var re = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function et() {
  if (Me) return te;
  Me = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(r, s, i) {
    var u = null;
    if (i !== void 0 && (u = "" + i), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      i = {};
      for (var c in s)
        c !== "key" && (i[c] = s[c]);
    } else i = s;
    return s = i.ref, {
      $$typeof: t,
      type: r,
      key: u,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return te.Fragment = e, te.jsx = n, te.jsxs = n, te;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function tt() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    function t(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === O ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case m:
          return "Fragment";
        case N:
          return "Profiler";
        case E:
          return "StrictMode";
        case C:
          return "Suspense";
        case R:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case g:
            return "Portal";
          case A:
            return o.displayName || "Context";
          case k:
            return (o._context.displayName || "Context") + ".Consumer";
          case b:
            var h = o.render;
            return o = o.displayName, o || (o = h.displayName || h.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case U:
            return h = o.displayName || null, h !== null ? h : t(o.type) || "Memo";
          case G:
            h = o._payload, o = o._init;
            try {
              return t(o(h));
            } catch {
            }
        }
      return null;
    }
    function e(o) {
      return "" + o;
    }
    function n(o) {
      try {
        e(o);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var w = h.error, S = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return w.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), e(o);
      }
    }
    function r(o) {
      if (o === m) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === G)
        return "<...>";
      try {
        var h = t(o);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var o = I.A;
      return o === null ? null : o.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function u(o) {
      if (j.call(o, "key")) {
        var h = Object.getOwnPropertyDescriptor(o, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function c(o, h) {
      function w() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: w,
        configurable: !0
      });
    }
    function a() {
      var o = t(this.type);
      return K[o] || (K[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function d(o, h, w, S, F, J) {
      var _ = w.ref;
      return o = {
        $$typeof: x,
        type: o,
        key: h,
        props: w,
        _owner: S
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: a
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
        value: F
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function p(o, h, w, S, F, J) {
      var _ = h.children;
      if (_ !== void 0)
        if (S)
          if (B(_)) {
            for (S = 0; S < _.length; S++)
              v(_[S]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(_);
      if (j.call(h, "key")) {
        _ = t(o);
        var H = Object.keys(h).filter(function(de) {
          return de !== "key";
        });
        S = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", P[_ + S] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          _,
          H,
          _
        ), P[_ + S] = !0);
      }
      if (_ = null, w !== void 0 && (n(w), _ = "" + w), u(h) && (n(h.key), _ = "" + h.key), "key" in h) {
        w = {};
        for (var ee in h)
          ee !== "key" && (w[ee] = h[ee]);
      } else w = h;
      return _ && c(
        w,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), d(
        o,
        _,
        w,
        s(),
        F,
        J
      );
    }
    function v(o) {
      T(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === G && (o._payload.status === "fulfilled" ? T(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function T(o) {
      return typeof o == "object" && o !== null && o.$$typeof === x;
    }
    var f = ue, x = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), A = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), I = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, B = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var z, K = {}, W = f.react_stack_bottom_frame.bind(
      f,
      i
    )(), oe = X(r(i)), P = {};
    ne.Fragment = m, ne.jsx = function(o, h, w) {
      var S = 1e4 > I.recentlyCreatedOwnerStacks++;
      return p(
        o,
        h,
        w,
        !1,
        S ? Error("react-stack-top-frame") : W,
        S ? X(r(o)) : oe
      );
    }, ne.jsxs = function(o, h, w) {
      var S = 1e4 > I.recentlyCreatedOwnerStacks++;
      return p(
        o,
        h,
        w,
        !0,
        S ? Error("react-stack-top-frame") : W,
        S ? X(r(o)) : oe
      );
    };
  }()), ne;
}
var Ne;
function nt() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? re.exports = et() : re.exports = tt()), re.exports;
}
var y = nt(), se = { exports: {} }, he = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function ot() {
  if (Ae) return he;
  Ae = 1;
  var t = ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return he.c = function(e) {
    return t.H.useMemoCache(e);
  }, he;
}
var me = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function rt() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    me.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  }()), me;
}
var ke;
function st() {
  return ke || (ke = 1, process.env.NODE_ENV === "production" ? se.exports = ot() : se.exports = rt()), se.exports;
}
var Y = st();
const De = (t, e) => {
  const n = e || t.currentTarget;
  if (!n || typeof n.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const r = n.getBoundingClientRect(), s = t.clientX - r.x, i = t.clientY - r.y;
  return {
    x: s / r.width * 100,
    y: i / r.height * 100
  };
}, $e = (t, e, n) => Math.max(t, Math.min(e, n)), it = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), r = e.pageX - n.left, s = e.pageY - (n.top + window.scrollY);
  return {
    x: $e(0, 100, r / n.width * 100),
    y: $e(0, 100, s / n.height * 100)
  };
}, V = (t, e) => ct(t) ? at(t) ? (lt(t) && t.preventDefault(), it(t)) : {
  x: null
} : De(t, e), ct = (t) => t.targetTouches !== void 0, at = (t) => t.targetTouches.length === 1, lt = (t) => t.type === "touchmove";
function ut(t, e = {}) {
  const {
    onPositionChange: n,
    throttleMs: r = 16
  } = e, s = D({
    x: null,
    y: null
  }), [i, u] = ve({
    x: null,
    y: null
  }), c = D(0), a = D(null), d = M((g) => {
    if (s.current = g, n) {
      const m = Date.now();
      r <= 0 || m - c.current >= r ? (u(g), n(g), c.current = m) : (a.current && clearTimeout(a.current), a.current = setTimeout(() => {
        u(g), n(g), c.current = Date.now();
      }, r - (m - c.current)));
    }
  }, [n, r]), p = M((g) => {
    try {
      const m = t.current;
      if (!m) {
        d({
          x: null,
          y: null
        });
        return;
      }
      const E = De(g, m);
      d(E);
    } catch {
      d({
        x: null,
        y: null
      });
    }
  }, [t, d]), v = M((g) => {
    const m = t.current;
    if (!m || g.targetTouches.length !== 1)
      return;
    const E = g.targetTouches[0], N = m.offsetParent;
    if (N)
      try {
        const k = E.pageX - N.offsetLeft, A = E.pageY - N.offsetTop, b = m, C = b.width, R = b.height;
        C > 0 && R > 0 ? d({
          x: k / C * 100,
          y: A / R * 100
        }) : d({
          x: null,
          y: null
        });
      } catch {
        d({
          x: null,
          y: null
        });
      }
  }, [t, d]), T = M((g) => {
    d({
      x: null,
      y: null
    });
  }, [d]), f = M((g) => {
    d({
      x: null,
      y: null
    });
  }, [d]), x = M(() => s.current, []);
  return Q(() => () => {
    a.current && clearTimeout(a.current);
  }, []), {
    mousePosition: n ? i : s.current,
    handlers: {
      onMouseMove: p,
      onMouseLeave: T,
      onTouchMove: v,
      onTouchLeave: f
    },
    getCurrentMousePosition: x
  };
}
function dt(t) {
  const e = Y.c(12), {
    annotations: n,
    selectors: r,
    imageRef: s,
    enableEditing: i
  } = t;
  let u, c;
  e[0] !== r ? (c = new Map(r.map(ht)), e[0] = r, e[1] = c) : c = e[1], u = c;
  const a = u;
  let d;
  e[2] !== a ? (d = (x) => {
    if (x)
      return a.get(x);
  }, e[2] = a, e[3] = d) : d = e[3];
  const p = d;
  let v;
  e[4] !== n || e[5] !== i || e[6] !== p || e[7] !== s ? (v = (x, g) => {
    const m = s.current;
    if (!m || x === null || g === null)
      return;
    const E = {
      x,
      y: g
    }, N = n.map((A) => {
      const {
        geometry: b
      } = A;
      if (!b)
        return null;
      const C = p(b.type);
      if (!C)
        return null;
      let R = b;
      return i && b.type === "RECTANGLE" && typeof b.x == "number" && typeof b.y == "number" && typeof b.width == "number" && typeof b.height == "number" && (R = {
        ...b,
        x: Math.max(0, b.x - 2),
        y: Math.max(0, b.y - 2),
        width: Math.min(100 - b.x + 2, b.width + 4),
        height: Math.min(100 - b.y + 2, b.height + 4)
      }), C.intersects(E, R, m) ? A : null;
    }).filter(ft);
    return N.length === 0 ? void 0 : N.sort((A, b) => {
      const C = p(A.geometry.type), R = p(b.geometry.type);
      return !C || !R ? 0 : C.area(A.geometry, m) - R.area(b.geometry, m);
    })[0];
  }, e[4] = n, e[5] = i, e[6] = p, e[7] = s, e[8] = v) : v = e[8];
  const T = v;
  let f;
  return e[9] !== p || e[10] !== T ? (f = {
    getTopAnnotationAt: T,
    getSelectorByType: p
  }, e[9] = p, e[10] = T, e[11] = f) : f = e[11], f;
}
function ft(t) {
  return t !== null;
}
function ht(t) {
  return [t.TYPE, t];
}
function mt(t) {
  const e = Y.c(17), {
    targetRef: n,
    imageRef: r,
    annotations: s,
    selectors: i,
    enableEditing: u,
    throttleMs: c
  } = t, a = c === void 0 ? 50 : c, [d, p] = ve(void 0), v = D(void 0), T = D(void 0);
  let f;
  e[0] !== s || e[1] !== u || e[2] !== r || e[3] !== i ? (f = {
    annotations: s,
    selectors: i,
    imageRef: r,
    enableEditing: u
  }, e[0] = s, e[1] = u, e[2] = r, e[3] = i, e[4] = f) : f = e[4];
  const {
    getTopAnnotationAt: x
  } = dt(f);
  let g;
  e[5] !== x ? (g = (U) => {
    var j;
    const {
      x: G,
      y: q
    } = U, O = x(G, q), I = (j = O == null ? void 0 : O.data) == null ? void 0 : j.id;
    I !== T.current && (T.current = I, v.current = O, p(O));
  }, e[5] = x, e[6] = g) : g = e[6];
  const m = g;
  let E;
  e[7] !== m || e[8] !== a ? (E = {
    onPositionChange: m,
    throttleMs: a
  }, e[7] = m, e[8] = a, e[9] = E) : E = e[9];
  const {
    handlers: N
  } = ut(n, E);
  let k;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (k = () => {
    p(void 0), v.current = void 0, T.current = void 0;
  }, e[10] = k) : k = e[10];
  let A;
  e[11] !== s || e[12] !== i ? (A = [s, i], e[11] = s, e[12] = i, e[13] = A) : A = e[13], Q(k, A);
  let b;
  b = N;
  const C = b;
  let R;
  return e[14] !== d || e[15] !== C ? (R = {
    hoveredAnnotation: d,
    mouseHandlers: C
  }, e[14] = d, e[15] = C, e[16] = R) : R = e[16], R;
}
function pt({
  selectors: t,
  effectiveType: e,
  value: n,
  onChange: r,
  disableAnnotation: s
}) {
  const i = M((c) => {
    if (c)
      return t.find((a) => a.TYPE === c);
  }, [t]);
  return {
    callSelectorMethod: M((c, a) => {
      if (s)
        return;
      const d = i(e);
      if (!(d != null && d.methods[c]))
        return;
      const p = d.methods[c];
      try {
        const v = p(n || {}, a);
        if (typeof v > "u") {
          process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(c)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);
          return;
        }
        r == null || r(v);
      } catch (v) {
        process.env.NODE_ENV !== "production" && console.error(`Error calling selector method ${String(c)}:`, v);
      }
    }, [s, i, e, n, r]),
    getSelectorByType: i
  };
}
const ge = $.div`
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
`, gt = $.div`
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
function Pe(t) {
  const e = Y.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`, s = `${n.x}%`;
  let i;
  return e[0] !== r || e[1] !== s ? (i = /* @__PURE__ */ y.jsx(gt, { style: {
    top: r,
    left: s
  } }), e[0] = r, e[1] = s, e[2] = i) : i = e[2], i;
}
const xt = $.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, vt = $.div`
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
`, bt = (t) => {
  const e = Y.c(11), {
    onChange: n,
    onSubmit: r,
    onFocus: s,
    onBlur: i,
    value: u
  } = t;
  let c;
  e[0] !== i || e[1] !== n || e[2] !== s || e[3] !== u ? (c = /* @__PURE__ */ y.jsx(xt, { children: /* @__PURE__ */ y.jsx("textarea", { placeholder: "Write description", onFocus: s, onBlur: i, onChange: n, value: u }) }), e[0] = i, e[1] = n, e[2] = s, e[3] = u, e[4] = c) : c = e[4];
  let a;
  e[5] !== r || e[6] !== u ? (a = u && /* @__PURE__ */ y.jsx(vt, { onClick: r, children: "Submit" }), e[5] = r, e[6] = u, e[7] = a) : a = e[7];
  let d;
  return e[8] !== c || e[9] !== a ? (d = /* @__PURE__ */ y.jsxs(ue.Fragment, { children: [
    c,
    a
  ] }), e[8] = c, e[9] = a, e[10] = d) : d = e[10], d;
}, yt = Ke`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Et = $.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${yt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, Tt = (t) => {
  var N;
  const e = Y.c(17), {
    annotation: n,
    onChange: r,
    onSubmit: s,
    className: i,
    style: u
  } = t, c = i === void 0 ? "" : i;
  let a;
  e[0] !== u ? (a = u === void 0 ? {} : u, e[0] = u, e[1] = a) : a = e[1];
  const d = a, {
    geometry: p
  } = n;
  if (!p)
    return null;
  const v = `${p.x}%`, T = `${p.y + p.height}%`;
  let f;
  e[2] !== d || e[3] !== v || e[4] !== T ? (f = {
    position: "absolute",
    left: v,
    top: T,
    ...d
  }, e[2] = d, e[3] = v, e[4] = T, e[5] = f) : f = e[5];
  let x;
  e[6] !== n || e[7] !== r ? (x = (k) => r({
    ...n,
    data: {
      ...n.data,
      text: k.target.value
    }
  }), e[6] = n, e[7] = r, e[8] = x) : x = e[8];
  const g = (N = n.data) == null ? void 0 : N.text;
  let m;
  e[9] !== s || e[10] !== x || e[11] !== g ? (m = /* @__PURE__ */ y.jsx(bt, { onChange: x, onSubmit: s, value: g }), e[9] = s, e[10] = x, e[11] = g, e[12] = m) : m = e[12];
  let E;
  return e[13] !== c || e[14] !== f || e[15] !== m ? (E = /* @__PURE__ */ y.jsx(Et, { className: c, style: f, children: m }), e[13] = c, e[14] = f, e[15] = m, e[16] = E) : E = e[16], E;
}, ie = $.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, wt = $.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Ge(t) {
  const e = Y.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`;
  let s;
  e[0] !== r ? (s = /* @__PURE__ */ y.jsx(ie, { style: {
    height: r,
    width: "100%"
  } }), e[0] = r, e[1] = s) : s = e[1];
  const i = `${n.y}%`, u = `${n.height}%`, c = `${n.x}%`;
  let a;
  e[2] !== i || e[3] !== u || e[4] !== c ? (a = /* @__PURE__ */ y.jsx(ie, { style: {
    top: i,
    height: u,
    width: c
  } }), e[2] = i, e[3] = u, e[4] = c, e[5] = a) : a = e[5];
  const d = `${n.y}%`, p = `${n.x + n.width}%`, v = `${n.height}%`, T = `${100 - (n.x + n.width)}%`;
  let f;
  e[6] !== d || e[7] !== p || e[8] !== v || e[9] !== T ? (f = /* @__PURE__ */ y.jsx(ie, { style: {
    top: d,
    left: p,
    height: v,
    width: T
  } }), e[6] = d, e[7] = p, e[8] = v, e[9] = T, e[10] = f) : f = e[10];
  const x = `${n.y + n.height}%`, g = `${100 - (n.y + n.height)}%`;
  let m;
  e[11] !== x || e[12] !== g ? (m = /* @__PURE__ */ y.jsx(ie, { style: {
    top: x,
    height: g,
    width: "100%"
  } }), e[11] = x, e[12] = g, e[13] = m) : m = e[13];
  let E;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== s || e[17] !== f || e[18] !== m || e[19] !== a ? (E = /* @__PURE__ */ y.jsxs(wt, { className: t.className, style: t.style, children: [
    s,
    a,
    f,
    m
  ] }), e[14] = t.className, e[15] = t.style, e[16] = s, e[17] = f, e[18] = m, e[19] = a, e[20] = E) : E = e[20], E;
}
Ge.defaultProps = {
  className: "",
  style: {}
};
const Rt = $.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Xe(t) {
  const e = Y.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.x}%`, s = `${n.y}%`, i = `${n.height}%`, u = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let a;
  e[0] !== t.style || e[1] !== r || e[2] !== s || e[3] !== i || e[4] !== u || e[5] !== c ? (a = {
    position: "absolute",
    left: r,
    top: s,
    height: i,
    width: u,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = r, e[2] = s, e[3] = i, e[4] = u, e[5] = c, e[6] = a) : a = e[6];
  let d;
  return e[7] !== t.className || e[8] !== a ? (d = /* @__PURE__ */ y.jsx(Rt, { className: t.className, style: a }), e[7] = t.className, e[8] = a, e[9] = d) : d = e[9], d;
}
Xe.defaultProps = {
  className: "",
  style: {}
};
const _t = $.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function xe(t) {
  const e = Y.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.x}%`, s = `${n.y}%`, i = `${n.height}%`, u = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let a;
  e[0] !== t.style || e[1] !== r || e[2] !== s || e[3] !== i || e[4] !== u || e[5] !== c ? (a = {
    position: "absolute",
    left: r,
    top: s,
    height: i,
    width: u,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = r, e[2] = s, e[3] = i, e[4] = u, e[5] = c, e[6] = a) : a = e[6];
  let d;
  return e[7] !== t.className || e[8] !== a ? (d = /* @__PURE__ */ y.jsx(_t, { className: t.className, style: a }), e[7] = t.className, e[8] = a, e[9] = d) : d = e[9], d;
}
xe.defaultProps = {
  className: "",
  style: {}
};
const Mt = $.div`
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
function He(t) {
  const e = Y.c(8), {
    geometry: n
  } = t.annotation;
  if (!n || typeof n.x > "u" || typeof n.y > "u" || typeof n.width > "u" || typeof n.height > "u")
    return null;
  const r = `${n.x}%`, s = `${n.y + n.height}%`;
  let i;
  e[0] !== t.style || e[1] !== r || e[2] !== s ? (i = {
    position: "absolute",
    left: r,
    top: s,
    ...t.style
  }, e[0] = t.style, e[1] = r, e[2] = s, e[3] = i) : i = e[3];
  const u = t.annotation.data && t.annotation.data.text;
  let c;
  return e[4] !== t.className || e[5] !== i || e[6] !== u ? (c = /* @__PURE__ */ y.jsx(Mt, { style: i, className: t.className, children: u }), e[4] = t.className, e[5] = i, e[6] = u, e[7] = c) : c = e[7], c;
}
He.defaultProps = {
  style: {},
  className: ""
};
const Ue = "RECTANGLE";
function St({
  x: t,
  y: e
}, n, r) {
  if (!n) return !1;
  const s = Math.min(n.x, n.x + n.width), i = Math.max(n.x, n.x + n.width), u = Math.min(n.y, n.y + n.height), c = Math.max(n.y, n.y + n.height);
  return !(t < s || e < u || t > i || e > c);
}
function Nt(t, e) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const n = Math.abs(t.width), r = Math.abs(t.height);
  return n * r;
}
const At = {
  onTouchStart(t, e) {
    return Oe(t, e);
  },
  onTouchEnd(t, e) {
    return je(t);
  },
  onTouchMove(t, e) {
    return Ye(t, e);
  },
  onMouseDown(t, e) {
    return Oe(t, e);
  },
  onMouseUp(t, e) {
    return je(t);
  },
  onMouseMove(t, e) {
    return Ye(t, e);
  }
};
function Oe(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: r
    } = V(e);
    return {
      ...t,
      selection: {
        ...t.selection,
        mode: "SELECTING",
        anchorX: n,
        anchorY: r
      }
    };
  }
}
function je(t, e) {
  if (t.selection) {
    const {
      selection: n,
      geometry: r
    } = t;
    if (!r)
      return {};
    switch (t.selection.mode) {
      case "SELECTING":
        return {
          ...t,
          selection: {
            ...t.selection,
            showEditor: !0,
            mode: "EDITING"
          }
        };
    }
  }
  return t;
}
function Ye(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: s,
      y: i
    } = V(e), u = s - n, c = i - r;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Ue,
        x: u > 0 ? n : s,
        y: c > 0 ? r : i,
        width: Math.abs(u),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const ce = {
  TYPE: Ue,
  intersects: St,
  area: Nt,
  methods: At
}, Ie = 6, Ct = (t = {
  width: 100,
  height: 100
}) => ({
  marginX: Ie / t.width * 100,
  marginY: Ie / t.height * 100
}), ze = "POINT";
function kt({
  x: t,
  y: e
}, n, r) {
  if (!n) return !1;
  const {
    marginX: s,
    marginY: i
  } = Ct(r), u = Math.min(s, i) / 2, c = Math.abs(t - n.x), a = Math.abs(e - n.y);
  return c <= u && a <= u;
}
function $t(t, e) {
  return 0;
}
const Pt = {
  onClick(t, e) {
    return t.geometry ? {} : {
      ...t,
      selection: {
        ...t.selection,
        showEditor: !0,
        mode: "EDITING"
      },
      geometry: {
        ...t.geometry,
        ...V(e),
        width: 0,
        height: 0,
        type: ze
      }
    };
  }
}, ae = {
  TYPE: ze,
  intersects: kt,
  area: $t,
  methods: Pt
}, le = (t) => Math.pow(t, 2), be = "OVAL";
function Ot({
  x: t,
  y: e
}, n, r) {
  if (!n || !n.width || !n.height) return !1;
  const s = Math.abs(n.width), i = Math.abs(n.height), u = {
    x: n.x + s / 2,
    y: n.y + i / 2
  }, c = s / 2, a = i / 2;
  if (c === 0 || a === 0) return !1;
  const d = t - u.x, p = e - u.y;
  return le(d) / le(c) + le(p) / le(a) <= 1;
}
function jt(t, e) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const n = Math.abs(t.width), r = Math.abs(t.height);
  return Math.PI * (n / 2) * (r / 2);
}
const Yt = {
  onTouchStart(t, e) {
    return It(t, e);
  },
  onTouchEnd(t, e) {
    return Lt(t);
  },
  onTouchMove(t, e) {
    return Dt(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: r
      } = V(e);
      return {
        ...t,
        selection: {
          ...t.selection,
          mode: "SELECTING",
          anchorX: n,
          anchorY: r
        }
      };
    }
    return t;
  },
  onMouseUp(t, e) {
    if (t.selection && t.selection.mode === "SELECTING")
      return {
        ...t,
        selection: {
          ...t.selection,
          showEditor: !0,
          mode: "EDITING"
        }
      };
  },
  onMouseMove(t, e) {
    if (t.selection && t.selection.mode === "SELECTING") {
      const {
        anchorX: n,
        anchorY: r
      } = t.selection, {
        x: s,
        y: i
      } = V(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: be,
          x: Math.min(n, s),
          y: Math.min(r, i),
          width: Math.abs(s - n),
          height: Math.abs(i - r)
        }
      };
    }
    return t;
  }
};
function It(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: r
    } = V(e);
    return {
      ...t,
      selection: {
        ...t.selection,
        mode: "SELECTING",
        anchorX: n,
        anchorY: r
      }
    };
  }
}
function Lt(t, e) {
  if (t.selection) {
    const {
      selection: n,
      geometry: r
    } = t;
    if (!r)
      return {};
    switch (t.selection.mode) {
      case "SELECTING":
        return {
          ...t,
          selection: {
            ...t.selection,
            showEditor: !0,
            mode: "EDITING"
          }
        };
    }
  }
  return t;
}
function Dt(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: s,
      y: i
    } = V(e), u = s - n, c = i - r;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: be,
        x: u > 0 ? n : s,
        y: c > 0 ? r : i,
        width: Math.abs(u),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const pe = {
  TYPE: be,
  intersects: Ot,
  area: jt,
  methods: Yt
}, Le = {
  // Basic settings
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  allowTouch: !1,
  // Selectors configuration
  type: ce.TYPE,
  selectors: [ce, ae, pe],
  // Comparator for active annotations
  activeAnnotationComparator: (t, e) => t === e,
  // Editing functionality defaults
  enableEditing: !1,
  onAnnotationsChange: () => {
    process.env.NODE_ENV !== "production" && console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.");
  },
  // Render functions with improved typing
  renderSelector: ({
    annotation: t
  }) => {
    var e;
    switch ((e = t.geometry) == null ? void 0 : e.type) {
      case ce.TYPE:
        return /* @__PURE__ */ y.jsx(Ge, { annotation: t });
      case ae.TYPE:
        return /* @__PURE__ */ y.jsx(Pe, { annotation: t });
      case pe.TYPE:
        return /* @__PURE__ */ y.jsx(xe, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ y.jsx(Tt, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case ce.TYPE:
        return /* @__PURE__ */ y.jsx(Xe, { annotation: e, active: n }, t);
      case ae.TYPE:
        return /* @__PURE__ */ y.jsx(Pe, { annotation: e }, t);
      case pe.TYPE:
        return /* @__PURE__ */ y.jsx(xe, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ y.jsx(He, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case ae.TYPE:
        return /* @__PURE__ */ y.jsx(ge, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ y.jsx(ge, { children: "Click and Drag to Annotate" });
    }
  }
}, Gt = $.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${ge} {
    opacity: 1;
  }

  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, Xt = $.img`
  display: block;
  width: 100%;
  user-select: none;
`, Ht = $.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, Ut = $.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`, zt = Ze((t, e) => {
  var Te, we, Re;
  const n = Qe(() => ({
    ...Le,
    ...t,
    // Handle selectors explicitly to avoid override issues
    selectors: t.selectors ?? Le.selectors
  }), [t]), {
    // Basic props
    src: r,
    alt: s = "Annotation Image",
    style: i,
    className: u,
    containerRef: c,
    imageRef: a,
    children: d,
    // Core functionality
    annotations: p,
    type: v,
    selectors: T,
    value: f,
    onChange: x,
    onSubmit: g,
    // Active annotation handling
    activeAnnotationComparator: m,
    activeAnnotations: E,
    // Edit mode handling
    editModeAnnotationIds: N,
    // Feature toggles
    disableAnnotation: k,
    disableSelector: A,
    disableEditor: b,
    disableOverlay: C,
    allowTouch: R,
    // Render props
    renderSelector: U,
    renderEditor: G,
    renderHighlight: q,
    renderContent: O,
    renderOverlay: I,
    // Event handlers
    onImageMouseUp: j,
    onImageMouseDown: B,
    onImageMouseMove: X,
    onImageClick: z
  } = n, K = D(null), W = D(null), {
    hoveredAnnotation: oe,
    mouseHandlers: P
  } = mt({
    targetRef: W,
    imageRef: K,
    annotations: p,
    selectors: T,
    enableEditing: !b,
    throttleMs: 50
    // Reduced frequency to minimize rerenders
  }), o = v || ((Te = T[0]) == null ? void 0 : Te.TYPE), {
    callSelectorMethod: h
  } = pt({
    selectors: T,
    effectiveType: o,
    value: f,
    onChange: x,
    disableAnnotation: k
  }), w = D(null), S = M((l) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && R && l.preventDefault(), h("onTouchStart", l);
  }, [R, h]), F = M((l) => {
    h("onTouchEnd", l);
  }, [h]), J = M((l) => {
    P.onTouchMove(l), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && R && l.preventDefault(), h("onTouchMove", l);
  }, [P, R, h]), _ = M((l) => {
    P.onTouchLeave(l);
  }, [P]);
  Q(() => {
    const l = W.current;
    if (!(!R || !l))
      return l.ontouchstart = S, l.ontouchend = F, l.ontouchmove = J, l.ontouchcancel = _, () => {
        l && (l.ontouchstart = null, l.ontouchend = null, l.ontouchmove = null, l.ontouchcancel = null);
      };
  }, [R, S, F, J, _]);
  const H = M((l) => {
    K.current = l, e && (typeof e == "function" ? e(l) : e.current = l), a && (typeof a == "function" ? a(l) : a.current = l);
  }, [e, a]), ee = M((l) => {
    W.current = l;
  }, []), de = M((l) => {
    c && (typeof c == "function" ? c(l) : c.current = l);
  }, [c]), Fe = M((l) => {
    P.onMouseMove(l.nativeEvent), X == null || X(l), h("onMouseMove", l);
  }, [P, X, h]), Ve = M((l) => {
    P.onMouseLeave(l.nativeEvent);
  }, [P]), qe = M((l) => {
    j == null || j(l), h("onMouseUp", l);
  }, [j, h]), Be = M((l) => {
    B == null || B(l), h("onMouseDown", l);
  }, [B, h]), We = M((l) => {
    z == null || z(l), h("onClick", l);
  }, [z, h]), Je = M(() => {
    g && f && g(f);
  }, [g, f]), fe = M((l) => {
    var L;
    l.key === "Escape" && x && ((L = f == null ? void 0 : f.selection) != null && L.showEditor || f != null && f.geometry) && x({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [f, x]);
  Q(() => {
    var l;
    if ((l = f == null ? void 0 : f.selection) != null && l.showEditor)
      return window.addEventListener("keydown", fe), () => window.removeEventListener("keydown", fe);
  }, [(we = f == null ? void 0 : f.selection) == null ? void 0 : we.showEditor, fe]), Q(() => () => {
    w.current && clearTimeout(w.current);
  }, []);
  const ye = oe, Ee = M((l, L) => E && E.some((_e) => m ? m(l, _e) : l.data.id === _e) || L === l, [E, m]);
  return /* @__PURE__ */ y.jsxs(Gt, { ref: de, style: i, className: u, onMouseLeave: Ve, onTouchCancel: _, onMouseMove: Fe, $allowTouch: R, children: [
    /* @__PURE__ */ y.jsx(Xt, { ref: H, src: r, alt: s }),
    /* @__PURE__ */ y.jsxs(Ht, { children: [
      p.map((l) => {
        var Z;
        if (!((Z = l.data) != null && Z.id))
          return null;
        const L = Ee(l, ye);
        return q ? q({
          key: l.data.id,
          annotation: l,
          active: L
        }) : null;
      }),
      !A && (f == null ? void 0 : f.geometry) && U && U({
        annotation: f
      })
    ] }),
    /* @__PURE__ */ y.jsx(Ut, { ref: ee, "data-testid": "annotation-target", onClick: We, onMouseUp: qe, onMouseDown: Be }),
    !C && I && I({
      type: o,
      annotation: f
    }),
    p.map((l) => {
      var Z;
      if (!((Z = l.data) != null && Z.id)) return null;
      const L = (N == null ? void 0 : N.includes(l.data.id)) || !1;
      return (Ee(l, ye) || L) && O != null ? O({
        key: l.data.id,
        annotation: l
      }) : null;
    }),
    !b && ((Re = f == null ? void 0 : f.selection) == null ? void 0 : Re.showEditor) && G && x && G({
      annotation: f,
      onChange: x,
      onSubmit: Je
    }),
    d
  ] });
});
zt.displayName = "Annotation";
function Ft(t, e) {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const {
    pageX: n,
    pageY: r
  } = e, {
    left: s,
    right: i,
    bottom: u,
    top: c
  } = t.getBoundingClientRect();
  return n > s && n < i && r > c && r < u;
}
function Wt() {
  const t = Y.c(5), [e, n] = ve(!1), r = D(null);
  let s, i;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
    const d = (p) => {
      const v = r.current, T = {
        pageX: p.pageX,
        pageY: p.pageY
      }, f = Ft(v, T);
      n(f);
    };
    return document.addEventListener("mousemove", d, {
      passive: !0
    }), () => {
      document.removeEventListener("mousemove", d);
    };
  }, i = [], t[0] = s, t[1] = i) : (s = t[0], i = t[1]), Q(s, i);
  let u;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = (d) => {
    r.current = d;
  }, t[2] = u) : u = t[2];
  const c = u;
  let a;
  return t[3] !== e ? (a = {
    isHoveringOver: e,
    setRef: c
  }, t[3] = e, t[4] = a) : a = t[4], a;
}
export {
  zt as Annotation,
  pe as OvalSelector,
  ae as PointSelector,
  ce as RectangleSelector,
  zt as default,
  dt as useAnnotationHitDetection,
  Wt as useMouseHover,
  ut as useRelativeMousePosition,
  pt as useSelectorMethods
};
