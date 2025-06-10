import ue, { useRef as I, useState as Ee, useCallback as R, useEffect as W, useMemo as We } from "react";
import O, { keyframes as Je } from "styled-components";
var re = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Ze() {
  if (Ne) return ee;
  Ne = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(r, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var c in s)
        c !== "key" && (i[c] = s[c]);
    } else i = s;
    return s = i.ref, {
      $$typeof: t,
      type: r,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return ee.Fragment = e, ee.jsx = n, ee.jsxs = n, ee;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function Qe() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && function() {
    function t(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === U ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case g:
          return "Fragment";
        case w:
          return "Profiler";
        case m:
          return "StrictMode";
        case E:
          return "Suspense";
        case S:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case y:
            return "Portal";
          case $:
            return (o.displayName || "Context") + ".Provider";
          case A:
            return (o._context.displayName || "Context") + ".Consumer";
          case M:
            var h = o.render;
            return o = o.displayName, o || (o = h.displayName || h.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case N:
            return h = o.displayName || null, h !== null ? h : t(o.type) || "Memo";
          case H:
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
        var T = h.error, C = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return T.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), e(o);
      }
    }
    function r(o) {
      if (o === g) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === H)
        return "<...>";
      try {
        var h = t(o);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var o = P.A;
      return o === null ? null : o.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (L.call(o, "key")) {
        var h = Object.getOwnPropertyDescriptor(o, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function c(o, h) {
      function T() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: T,
        configurable: !0
      });
    }
    function l() {
      var o = t(this.type);
      return ne[o] || (ne[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function d(o, h, T, C, Y, k, Z, Q) {
      return T = k.ref, o = {
        $$typeof: x,
        type: o,
        key: h,
        props: k,
        _owner: Y
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: l
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
        value: Z
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function p(o, h, T, C, Y, k, Z, Q) {
      var _ = h.children;
      if (_ !== void 0)
        if (C)
          if (X(_)) {
            for (C = 0; C < _.length; C++)
              f(_[C]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(_);
      if (L.call(h, "key")) {
        _ = t(o);
        var V = Object.keys(h).filter(function(de) {
          return de !== "key";
        });
        C = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", J[_ + C] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          _,
          V,
          _
        ), J[_ + C] = !0);
      }
      if (_ = null, T !== void 0 && (n(T), _ = "" + T), a(h) && (n(h.key), _ = "" + h.key), "key" in h) {
        T = {};
        for (var K in h)
          K !== "key" && (T[K] = h[K]);
      } else T = h;
      return _ && c(
        T,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), d(
        o,
        _,
        k,
        Y,
        s(),
        T,
        Z,
        Q
      );
    }
    function f(o) {
      typeof o == "object" && o !== null && o.$$typeof === x && o._store && (o._store.validated = 1);
    }
    var v = ue, x = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), P = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, X = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(o) {
        return o();
      }
    };
    var B, ne = {}, j = v["react-stack-bottom-frame"].bind(
      v,
      i
    )(), oe = q(r(i)), J = {};
    te.Fragment = g, te.jsx = function(o, h, T, C, Y) {
      var k = 1e4 > P.recentlyCreatedOwnerStacks++;
      return p(
        o,
        h,
        T,
        !1,
        C,
        Y,
        k ? Error("react-stack-top-frame") : j,
        k ? q(r(o)) : oe
      );
    }, te.jsxs = function(o, h, T, C, Y) {
      var k = 1e4 > P.recentlyCreatedOwnerStacks++;
      return p(
        o,
        h,
        T,
        !0,
        C,
        Y,
        k ? Error("react-stack-top-frame") : j,
        k ? q(r(o)) : oe
      );
    };
  }()), te;
}
var Se;
function Ke() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? re.exports = Ze() : re.exports = Qe()), re.exports;
}
var b = Ke(), se = { exports: {} }, me = {};
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
function et() {
  if (Ae) return me;
  Ae = 1;
  var t = ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return me.c = function(e) {
    return t.H.useMemoCache(e);
  }, me;
}
var pe = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function tt() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    pe.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  }()), pe;
}
var Pe;
function nt() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? se.exports = et() : se.exports = tt()), se.exports;
}
var G = nt();
const Ge = (t, e) => {
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
}, ke = (t, e, n) => Math.max(t, Math.min(e, n)), ot = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), r = e.pageX - n.left, s = e.pageY - (n.top + window.scrollY);
  return {
    x: ke(0, 100, r / n.width * 100),
    y: ke(0, 100, s / n.height * 100)
  };
}, z = (t, e) => rt(t) ? st(t) ? (it(t) && t.preventDefault(), ot(t)) : {
  x: null
} : Ge(t, e), rt = (t) => t.targetTouches !== void 0, st = (t) => t.targetTouches.length === 1, it = (t) => t.type === "touchmove";
function ct(t, e = {}) {
  const {
    onPositionChange: n,
    throttleMs: r = 16
  } = e, s = I({
    x: null,
    y: null
  }), [i, a] = Ee({
    x: null,
    y: null
  }), c = I(0), l = I(null), d = R((g) => {
    if (s.current = g, n) {
      const m = Date.now();
      r <= 0 || m - c.current >= r ? (a(g), n(g), c.current = m) : (l.current && clearTimeout(l.current), l.current = setTimeout(() => {
        a(g), n(g), c.current = Date.now();
      }, r - (m - c.current)));
    }
  }, [n, r]), p = R((g) => {
    try {
      const m = t.current;
      if (!m) {
        d({
          x: null,
          y: null
        });
        return;
      }
      const w = Ge(g, m);
      d(w);
    } catch {
      d({
        x: null,
        y: null
      });
    }
  }, [t, d]), f = R((g) => {
    const m = t.current;
    if (!m || g.targetTouches.length !== 1)
      return;
    const w = g.targetTouches[0], A = m.offsetParent;
    if (A)
      try {
        const $ = w.pageX - A.offsetLeft, M = w.pageY - A.offsetTop, E = m, S = E.width, N = E.height;
        S > 0 && N > 0 ? d({
          x: $ / S * 100,
          y: M / N * 100
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
  }, [t, d]), v = R((g) => {
    d({
      x: null,
      y: null
    });
  }, [d]), x = R((g) => {
    d({
      x: null,
      y: null
    });
  }, [d]), y = R(() => s.current, []);
  return W(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    mousePosition: n ? i : s.current,
    handlers: {
      onMouseMove: p,
      onMouseLeave: v,
      onTouchMove: f,
      onTouchLeave: x
    },
    getCurrentMousePosition: y
  };
}
function at(t) {
  const e = G.c(12), {
    annotations: n,
    selectors: r,
    imageRef: s,
    enableEditing: i
  } = t;
  let a, c;
  e[0] !== r ? (c = new Map(r.map(ut)), e[0] = r, e[1] = c) : c = e[1], a = c;
  const l = a;
  let d;
  e[2] !== l ? (d = (y) => {
    if (y)
      return l.get(y);
  }, e[2] = l, e[3] = d) : d = e[3];
  const p = d;
  let f;
  e[4] !== n || e[5] !== i || e[6] !== p || e[7] !== s ? (f = (y, g) => {
    const m = s.current;
    if (!m || y === null || g === null)
      return;
    const w = {
      x: y,
      y: g
    }, A = n.map((M) => {
      const {
        geometry: E
      } = M;
      if (!E)
        return null;
      const S = p(E.type);
      if (!S)
        return null;
      let N = E;
      return i && E.type === "RECTANGLE" && typeof E.x == "number" && typeof E.y == "number" && typeof E.width == "number" && typeof E.height == "number" && (N = {
        ...E,
        x: Math.max(0, E.x - 2),
        y: Math.max(0, E.y - 2),
        width: Math.min(100 - E.x + 2, E.width + 4),
        height: Math.min(100 - E.y + 2, E.height + 4)
      }), S.intersects(w, N, m) ? M : null;
    }).filter(lt);
    return A.length === 0 ? void 0 : A.sort((M, E) => {
      const S = p(M.geometry.type), N = p(E.geometry.type);
      return !S || !N ? 0 : S.area(M.geometry, m) - N.area(E.geometry, m);
    })[0];
  }, e[4] = n, e[5] = i, e[6] = p, e[7] = s, e[8] = f) : f = e[8];
  const v = f;
  let x;
  return e[9] !== p || e[10] !== v ? (x = {
    getTopAnnotationAt: v,
    getSelectorByType: p
  }, e[9] = p, e[10] = v, e[11] = x) : x = e[11], x;
}
function lt(t) {
  return t !== null;
}
function ut(t) {
  return [t.TYPE, t];
}
function dt(t) {
  const e = G.c(17), {
    targetRef: n,
    imageRef: r,
    annotations: s,
    selectors: i,
    enableEditing: a,
    throttleMs: c
  } = t, l = c === void 0 ? 50 : c, [d, p] = Ee(void 0), f = I(void 0), v = I(void 0);
  let x;
  e[0] !== s || e[1] !== a || e[2] !== r || e[3] !== i ? (x = {
    annotations: s,
    selectors: i,
    imageRef: r,
    enableEditing: a
  }, e[0] = s, e[1] = a, e[2] = r, e[3] = i, e[4] = x) : x = e[4];
  const {
    getTopAnnotationAt: y
  } = at(x);
  let g;
  e[5] !== y ? (g = (H) => {
    var X;
    const {
      x: F,
      y: U
    } = H, P = y(F, U), L = (X = P == null ? void 0 : P.data) == null ? void 0 : X.id;
    L !== v.current && (v.current = L, f.current = P, p(P));
  }, e[5] = y, e[6] = g) : g = e[6];
  const m = g;
  let w;
  e[7] !== m || e[8] !== l ? (w = {
    onPositionChange: m,
    throttleMs: l
  }, e[7] = m, e[8] = l, e[9] = w) : w = e[9];
  const {
    handlers: A
  } = ct(n, w);
  let $;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? ($ = () => {
    p(void 0), f.current = void 0, v.current = void 0;
  }, e[10] = $) : $ = e[10];
  let M;
  e[11] !== s || e[12] !== i ? (M = [s, i], e[11] = s, e[12] = i, e[13] = M) : M = e[13], W($, M);
  let E;
  E = A;
  const S = E;
  let N;
  return e[14] !== d || e[15] !== S ? (N = {
    hoveredAnnotation: d,
    mouseHandlers: S
  }, e[14] = d, e[15] = S, e[16] = N) : N = e[16], N;
}
function ft({
  selectors: t,
  effectiveType: e,
  value: n,
  onChange: r,
  disableAnnotation: s
}) {
  const i = R((c) => {
    if (c)
      return t.find((l) => l.TYPE === c);
  }, [t]);
  return {
    callSelectorMethod: R((c, l) => {
      if (s)
        return;
      const d = i(e);
      if (!(d != null && d.methods[c]))
        return;
      const p = d.methods[c];
      try {
        const f = p(n || {}, l);
        if (typeof f > "u") {
          process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(c)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);
          return;
        }
        r == null || r(f);
      } catch (f) {
        process.env.NODE_ENV !== "production" && console.error(`Error calling selector method ${String(c)}:`, f);
      }
    }, [s, i, e, n, r]),
    getSelectorByType: i
  };
}
function ht(t = {}) {
  const {
    logToConsole: e = !1,
    componentName: n = "Component"
  } = t, r = I(0), s = I();
  r.current += 1, e && process.env.NODE_ENV !== "production" && console.log(`🔄 ${n} rendered ${r.current} times`);
  const i = (a) => {
    if (process.env.NODE_ENV !== "production" && e) {
      if (s.current) {
        const c = [];
        Object.keys(a).forEach((l) => {
          a[l] !== s.current[l] && c.push(l);
        }), c.length > 0 && console.log(`📝 ${n} props changed:`, c);
      }
      s.current = a;
    }
  };
  return {
    renderCount: r.current,
    logPropsChange: i
  };
}
const xe = O.div`
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
`, mt = O.div`
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
function Oe(t) {
  const e = G.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`, s = `${n.x}%`;
  let i;
  return e[0] !== r || e[1] !== s ? (i = /* @__PURE__ */ b.jsx(mt, { style: {
    top: r,
    left: s
  } }), e[0] = r, e[1] = s, e[2] = i) : i = e[2], i;
}
const pt = O.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, gt = O.div`
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
`, xt = (t) => {
  const e = G.c(11), {
    onChange: n,
    onSubmit: r,
    onFocus: s,
    onBlur: i,
    value: a
  } = t;
  let c;
  e[0] !== i || e[1] !== n || e[2] !== s || e[3] !== a ? (c = /* @__PURE__ */ b.jsx(pt, { children: /* @__PURE__ */ b.jsx("textarea", { placeholder: "Write description", onFocus: s, onBlur: i, onChange: n, value: a }) }), e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = c) : c = e[4];
  let l;
  e[5] !== r || e[6] !== a ? (l = a && /* @__PURE__ */ b.jsx(gt, { onClick: r, children: "Submit" }), e[5] = r, e[6] = a, e[7] = l) : l = e[7];
  let d;
  return e[8] !== c || e[9] !== l ? (d = /* @__PURE__ */ b.jsxs(ue.Fragment, { children: [
    c,
    l
  ] }), e[8] = c, e[9] = l, e[10] = d) : d = e[10], d;
}, vt = Je`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Et = O.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${vt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, bt = (t) => {
  var A;
  const e = G.c(17), {
    annotation: n,
    onChange: r,
    onSubmit: s,
    className: i,
    style: a
  } = t, c = i === void 0 ? "" : i;
  let l;
  e[0] !== a ? (l = a === void 0 ? {} : a, e[0] = a, e[1] = l) : l = e[1];
  const d = l, {
    geometry: p
  } = n;
  if (!p)
    return null;
  const f = `${p.x}%`, v = `${p.y + p.height}%`;
  let x;
  e[2] !== d || e[3] !== f || e[4] !== v ? (x = {
    position: "absolute",
    left: f,
    top: v,
    ...d
  }, e[2] = d, e[3] = f, e[4] = v, e[5] = x) : x = e[5];
  let y;
  e[6] !== n || e[7] !== r ? (y = ($) => r({
    ...n,
    data: {
      ...n.data,
      text: $.target.value
    }
  }), e[6] = n, e[7] = r, e[8] = y) : y = e[8];
  const g = (A = n.data) == null ? void 0 : A.text;
  let m;
  e[9] !== s || e[10] !== y || e[11] !== g ? (m = /* @__PURE__ */ b.jsx(xt, { onChange: y, onSubmit: s, value: g }), e[9] = s, e[10] = y, e[11] = g, e[12] = m) : m = e[12];
  let w;
  return e[13] !== c || e[14] !== x || e[15] !== m ? (w = /* @__PURE__ */ b.jsx(Et, { className: c, style: x, children: m }), e[13] = c, e[14] = x, e[15] = m, e[16] = w) : w = e[16], w;
}, ie = O.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, yt = O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Xe(t) {
  const e = G.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`;
  let s;
  e[0] !== r ? (s = /* @__PURE__ */ b.jsx(ie, { style: {
    height: r,
    width: "100%"
  } }), e[0] = r, e[1] = s) : s = e[1];
  const i = `${n.y}%`, a = `${n.height}%`, c = `${n.x}%`;
  let l;
  e[2] !== i || e[3] !== a || e[4] !== c ? (l = /* @__PURE__ */ b.jsx(ie, { style: {
    top: i,
    height: a,
    width: c
  } }), e[2] = i, e[3] = a, e[4] = c, e[5] = l) : l = e[5];
  const d = `${n.y}%`, p = `${n.x + n.width}%`, f = `${n.height}%`, v = `${100 - (n.x + n.width)}%`;
  let x;
  e[6] !== d || e[7] !== p || e[8] !== f || e[9] !== v ? (x = /* @__PURE__ */ b.jsx(ie, { style: {
    top: d,
    left: p,
    height: f,
    width: v
  } }), e[6] = d, e[7] = p, e[8] = f, e[9] = v, e[10] = x) : x = e[10];
  const y = `${n.y + n.height}%`, g = `${100 - (n.y + n.height)}%`;
  let m;
  e[11] !== y || e[12] !== g ? (m = /* @__PURE__ */ b.jsx(ie, { style: {
    top: y,
    height: g,
    width: "100%"
  } }), e[11] = y, e[12] = g, e[13] = m) : m = e[13];
  let w;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== s || e[17] !== x || e[18] !== m || e[19] !== l ? (w = /* @__PURE__ */ b.jsxs(yt, { className: t.className, style: t.style, children: [
    s,
    l,
    x,
    m
  ] }), e[14] = t.className, e[15] = t.style, e[16] = s, e[17] = x, e[18] = m, e[19] = l, e[20] = w) : w = e[20], w;
}
Xe.defaultProps = {
  className: "",
  style: {}
};
const Tt = O.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function He(t) {
  const e = G.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.x}%`, s = `${n.y}%`, i = `${n.height}%`, a = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let l;
  e[0] !== t.style || e[1] !== r || e[2] !== s || e[3] !== i || e[4] !== a || e[5] !== c ? (l = {
    position: "absolute",
    left: r,
    top: s,
    height: i,
    width: a,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = r, e[2] = s, e[3] = i, e[4] = a, e[5] = c, e[6] = l) : l = e[6];
  let d;
  return e[7] !== t.className || e[8] !== l ? (d = /* @__PURE__ */ b.jsx(Tt, { className: t.className, style: l }), e[7] = t.className, e[8] = l, e[9] = d) : d = e[9], d;
}
He.defaultProps = {
  className: "",
  style: {}
};
const wt = O.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function ve(t) {
  const e = G.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.x}%`, s = `${n.y}%`, i = `${n.height}%`, a = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let l;
  e[0] !== t.style || e[1] !== r || e[2] !== s || e[3] !== i || e[4] !== a || e[5] !== c ? (l = {
    position: "absolute",
    left: r,
    top: s,
    height: i,
    width: a,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = r, e[2] = s, e[3] = i, e[4] = a, e[5] = c, e[6] = l) : l = e[6];
  let d;
  return e[7] !== t.className || e[8] !== l ? (d = /* @__PURE__ */ b.jsx(wt, { className: t.className, style: l }), e[7] = t.className, e[8] = l, e[9] = d) : d = e[9], d;
}
ve.defaultProps = {
  className: "",
  style: {}
};
const Rt = O.div`
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
function Ue(t) {
  const e = G.c(8), {
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
  const a = t.annotation.data && t.annotation.data.text;
  let c;
  return e[4] !== t.className || e[5] !== i || e[6] !== a ? (c = /* @__PURE__ */ b.jsx(Rt, { style: i, className: t.className, children: a }), e[4] = t.className, e[5] = i, e[6] = a, e[7] = c) : c = e[7], c;
}
Ue.defaultProps = {
  style: {},
  className: ""
};
const Ve = "RECTANGLE";
function Mt({
  x: t,
  y: e
}, n, r) {
  if (!n) return !1;
  const s = Math.min(n.x, n.x + n.width), i = Math.max(n.x, n.x + n.width), a = Math.min(n.y, n.y + n.height), c = Math.max(n.y, n.y + n.height);
  return !(t < s || e < a || t > i || e > c);
}
function Ct(t, e) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const n = Math.abs(t.width), r = Math.abs(t.height);
  return n * r;
}
const Nt = {
  onTouchStart(t, e) {
    return je(t, e);
  },
  onTouchEnd(t, e) {
    return Ye(t);
  },
  onTouchMove(t, e) {
    return Ie(t, e);
  },
  onMouseDown(t, e) {
    return je(t, e);
  },
  onMouseUp(t, e) {
    return Ye(t);
  },
  onMouseMove(t, e) {
    return Ie(t, e);
  }
};
function je(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: r
    } = z(e);
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
function Ye(t, e) {
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
function Ie(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: s,
      y: i
    } = z(e), a = s - n, c = i - r;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Ve,
        x: a > 0 ? n : s,
        y: c > 0 ? r : i,
        width: Math.abs(a),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const ce = {
  TYPE: Ve,
  intersects: Mt,
  area: Ct,
  methods: Nt
}, Le = 6, _t = (t = {
  width: 100,
  height: 100
}) => ({
  marginX: Le / t.width * 100,
  marginY: Le / t.height * 100
}), ze = "POINT";
function St({
  x: t,
  y: e
}, n, r) {
  if (!n) return !1;
  const {
    marginX: s,
    marginY: i
  } = _t(r), a = Math.min(s, i) / 2, c = Math.abs(t - n.x), l = Math.abs(e - n.y);
  return c <= a && l <= a;
}
function At(t, e) {
  return 0;
}
const $t = {
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
        ...z(e),
        width: 0,
        height: 0,
        type: ze
      }
    };
  }
}, ae = {
  TYPE: ze,
  intersects: St,
  area: At,
  methods: $t
}, le = (t) => Math.pow(t, 2), be = "OVAL";
function Pt({
  x: t,
  y: e
}, n, r) {
  if (!n || !n.width || !n.height) return !1;
  const s = Math.abs(n.width), i = Math.abs(n.height), a = {
    x: n.x + s / 2,
    y: n.y + i / 2
  }, c = s / 2, l = i / 2;
  if (c === 0 || l === 0) return !1;
  const d = t - a.x, p = e - a.y;
  return le(d) / le(c) + le(p) / le(l) <= 1;
}
function kt(t, e) {
  if (!t || !t.width || !t.height) return 0;
  const n = Math.abs(t.width), r = Math.abs(t.height);
  return n <= 0 || r <= 0 ? 0 : Math.PI * (n / 2) * (r / 2);
}
const Ot = {
  onTouchStart(t, e) {
    return jt(t, e);
  },
  onTouchEnd(t, e) {
    return Yt(t);
  },
  onTouchMove(t, e) {
    return It(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: r
      } = z(e);
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
      } = z(e);
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
function jt(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: r
    } = z(e);
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
function Yt(t, e) {
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
function It(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: s,
      y: i
    } = z(e), a = s - n, c = i - r;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: be,
        x: a > 0 ? n : s,
        y: c > 0 ? r : i,
        width: Math.abs(a),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const ge = {
  TYPE: be,
  intersects: Pt,
  area: kt,
  methods: Ot
}, De = {
  // Basic settings
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  allowTouch: !1,
  // Selectors configuration
  type: ce.TYPE,
  selectors: [ce, ae, ge],
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
        return /* @__PURE__ */ b.jsx(Xe, { annotation: t });
      case ae.TYPE:
        return /* @__PURE__ */ b.jsx(Oe, { annotation: t });
      case ge.TYPE:
        return /* @__PURE__ */ b.jsx(ve, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ b.jsx(bt, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case ce.TYPE:
        return /* @__PURE__ */ b.jsx(He, { annotation: e, active: n }, t);
      case ae.TYPE:
        return /* @__PURE__ */ b.jsx(Oe, { annotation: e }, t);
      case ge.TYPE:
        return /* @__PURE__ */ b.jsx(ve, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ b.jsx(Ue, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case ae.TYPE:
        return /* @__PURE__ */ b.jsx(xe, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ b.jsx(xe, { children: "Click and Drag to Annotate" });
    }
  }
}, Lt = O.div`
  clear: both;
  position: relative;
  width: 100%;
  
  &:hover ${xe} {
    opacity: 1;
  }
  
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, Dt = O.img`
  display: block;
  width: 100%;
  user-select: none;
`, Gt = O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, Xt = O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`, Ft = (t) => {
  var we, Re, Me;
  const e = We(() => ({
    ...De,
    ...t,
    // Handle selectors explicitly to avoid override issues
    selectors: t.selectors ?? De.selectors
  }), [t]), {
    // Basic props
    src: n,
    alt: r = "Annotation Image",
    style: s,
    className: i,
    containerRef: a,
    children: c,
    // Core functionality
    annotations: l,
    type: d,
    selectors: p,
    value: f,
    onChange: v,
    onSubmit: x,
    // Active annotation handling
    activeAnnotationComparator: y,
    activeAnnotations: g,
    // Feature toggles
    disableAnnotation: m,
    disableSelector: w,
    disableEditor: A,
    disableOverlay: $,
    allowTouch: M,
    // Render props
    renderSelector: E,
    renderEditor: S,
    renderHighlight: N,
    renderContent: H,
    renderOverlay: F,
    // Event handlers
    onImageMouseUp: U,
    onImageMouseDown: P,
    onImageMouseMove: L,
    onImageClick: X
  } = e, q = I(null), B = I(null), {
    hoveredAnnotation: ne,
    mouseHandlers: j
  } = dt({
    targetRef: B,
    imageRef: q,
    annotations: l,
    selectors: p,
    enableEditing: !A,
    throttleMs: 50
    // Reduced frequency to minimize rerenders
  }), {
    logPropsChange: oe
  } = ht({
    logToConsole: !0,
    componentName: "Annotation"
  });
  process.env.NODE_ENV !== "production" && oe(e);
  const J = d || ((we = p[0]) == null ? void 0 : we.TYPE), {
    callSelectorMethod: o
  } = ft({
    selectors: p,
    effectiveType: J,
    value: f,
    onChange: v,
    disableAnnotation: m
  }), h = I(null), T = R((u) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && M && u.preventDefault(), o("onTouchStart", u);
  }, [M, o]), C = R((u) => {
    o("onTouchEnd", u);
  }, [o]), Y = R((u) => {
    j.onTouchMove(u), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && M && u.preventDefault(), o("onTouchMove", u);
  }, [j, M, o]), k = R((u) => {
    j.onTouchLeave(u);
  }, [j]);
  W(() => {
    const u = B.current;
    if (!(!M || !u))
      return u.ontouchstart = T, u.ontouchend = C, u.ontouchmove = Y, u.ontouchcancel = k, () => {
        u && (u.ontouchstart = null, u.ontouchend = null, u.ontouchmove = null, u.ontouchcancel = null);
      };
  }, [M, T, C, Y, k]);
  const Z = R((u) => {
    q.current = u;
  }, []), Q = R((u) => {
    B.current = u;
  }, []), _ = R((u) => {
    a && (typeof a == "function" ? a(u) : a.current = u);
  }, [a]), V = R((u) => {
    j.onMouseMove(u.nativeEvent), L == null || L(u), o("onMouseMove", u);
  }, [j, L, o]), K = R((u) => {
    j.onMouseLeave(u.nativeEvent);
  }, [j]), de = R((u) => {
    U == null || U(u), o("onMouseUp", u);
  }, [U, o]), Fe = R((u) => {
    P == null || P(u), o("onMouseDown", u);
  }, [P, o]), qe = R((u) => {
    X == null || X(u), o("onClick", u);
  }, [X, o]), Be = R(() => {
    x && f && x(f);
  }, [x, f]), fe = R((u) => {
    var D;
    u.key === "Escape" && v && ((D = f == null ? void 0 : f.selection) != null && D.showEditor || f != null && f.geometry) && v({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [f, v]);
  W(() => {
    var u;
    if ((u = f == null ? void 0 : f.selection) != null && u.showEditor)
      return window.addEventListener("keydown", fe), () => window.removeEventListener("keydown", fe);
  }, [(Re = f == null ? void 0 : f.selection) == null ? void 0 : Re.showEditor, fe]), W(() => () => {
    h.current && clearTimeout(h.current);
  }, []);
  const ye = ne, Te = R((u, D) => g && g.some((Ce) => y ? y(u, Ce) : u.data.id === Ce) || D === u, [g, y]);
  return /* @__PURE__ */ b.jsxs(Lt, { ref: _, style: s, className: i, onMouseLeave: K, onTouchCancel: k, onMouseMove: V, $allowTouch: M, children: [
    /* @__PURE__ */ b.jsx(Dt, { ref: Z, src: n, alt: r }),
    /* @__PURE__ */ b.jsxs(Gt, { children: [
      l.map((u) => {
        var he;
        if (!((he = u.data) != null && he.id))
          return null;
        const D = Te(u, ye);
        return N ? N({
          key: u.data.id,
          annotation: u,
          active: D
        }) : null;
      }),
      !w && (f == null ? void 0 : f.geometry) && E && E({
        annotation: f
      })
    ] }),
    /* @__PURE__ */ b.jsx(Xt, { ref: Q, "data-testid": "annotation-target", onClick: qe, onMouseUp: de, onMouseDown: Fe }),
    !$ && F && F({
      type: J,
      annotation: f
    }),
    l.map((u) => {
      var D;
      return (D = u.data) != null && D.id && Te(u, ye) && H != null ? H({
        key: u.data.id,
        annotation: u
      }) : null;
    }),
    !A && ((Me = f == null ? void 0 : f.selection) == null ? void 0 : Me.showEditor) && S && v && S({
      annotation: f,
      onChange: v,
      onSubmit: Be
    }),
    c
  ] });
};
function Ht(t, e) {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const {
    pageX: n,
    pageY: r
  } = e, {
    left: s,
    right: i,
    bottom: a,
    top: c
  } = t.getBoundingClientRect();
  return n > s && n < i && r > c && r < a;
}
function qt() {
  const t = G.c(5), [e, n] = Ee(!1), r = I(null);
  let s, i;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
    const d = (p) => {
      const f = r.current, v = {
        pageX: p.pageX,
        pageY: p.pageY
      }, x = Ht(f, v);
      n(x);
    };
    return document.addEventListener("mousemove", d, {
      passive: !0
    }), () => {
      document.removeEventListener("mousemove", d);
    };
  }, i = [], t[0] = s, t[1] = i) : (s = t[0], i = t[1]), W(s, i);
  let a;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (d) => {
    r.current = d;
  }, t[2] = a) : a = t[2];
  const c = a;
  let l;
  return t[3] !== e ? (l = {
    isHoveringOver: e,
    setRef: c
  }, t[3] = e, t[4] = l) : l = t[4], l;
}
export {
  Ft as Annotation,
  ge as OvalSelector,
  ae as PointSelector,
  ce as RectangleSelector,
  Ft as default,
  at as useAnnotationHitDetection,
  qt as useMouseHover,
  ct as useRelativeMousePosition,
  ft as useSelectorMethods
};
