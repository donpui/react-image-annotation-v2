import ue, { useRef as X, useState as be, useCallback as R, useEffect as Z, forwardRef as Je, useMemo as Ze } from "react";
import P, { keyframes as Qe } from "styled-components";
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
var Se;
function Ke() {
  if (Se) return te;
  Se = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(o, s, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      i = {};
      for (var c in s)
        c !== "key" && (i[c] = s[c]);
    } else i = s;
    return s = i.ref, {
      $$typeof: t,
      type: o,
      key: l,
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
var Ae;
function et() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === W ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case g:
          return "Fragment";
        case T:
          return "Profiler";
        case m:
          return "StrictMode";
        case y:
          return "Suspense";
        case M:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case x:
            return "Portal";
          case k:
            return (r.displayName || "Context") + ".Provider";
          case C:
            return (r._context.displayName || "Context") + ".Consumer";
          case N:
            var h = r.render;
            return r = r.displayName, r || (r = h.displayName || h.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case S:
            return h = r.displayName || null, h !== null ? h : t(r.type) || "Memo";
          case H:
            h = r._payload, r = r._init;
            try {
              return t(r(h));
            } catch {
            }
        }
      return null;
    }
    function e(r) {
      return "" + r;
    }
    function n(r) {
      try {
        e(r);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var w = h.error, _ = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return w.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), e(r);
      }
    }
    function o(r) {
      if (r === g) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === H)
        return "<...>";
      try {
        var h = t(r);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var r = O.A;
      return r === null ? null : r.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(r) {
      if (I.call(r, "key")) {
        var h = Object.getOwnPropertyDescriptor(r, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function c(r, h) {
      function w() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: w,
        configurable: !0
      });
    }
    function a() {
      var r = t(this.type);
      return Q[r] || (Q[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function d(r, h, w, _, Y, $, q, K) {
      return w = $.ref, r = {
        $$typeof: f,
        type: r,
        key: h,
        props: $,
        _owner: Y
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function p(r, h, w, _, Y, $, q, K) {
      var A = h.children;
      if (A !== void 0)
        if (_)
          if (G(A)) {
            for (_ = 0; _ < A.length; _++)
              v(A[_]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(A);
      if (I.call(h, "key")) {
        A = t(r);
        var z = Object.keys(h).filter(function(de) {
          return de !== "key";
        });
        _ = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", j[A + _] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          A,
          z,
          A
        ), j[A + _] = !0);
      }
      if (A = null, w !== void 0 && (n(w), A = "" + w), l(h) && (n(h.key), A = "" + h.key), "key" in h) {
        w = {};
        for (var ee in h)
          ee !== "key" && (w[ee] = h[ee]);
      } else w = h;
      return A && c(
        w,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), d(
        r,
        A,
        $,
        Y,
        s(),
        w,
        q,
        K
      );
    }
    function v(r) {
      typeof r == "object" && r !== null && r.$$typeof === f && r._store && (r._store.validated = 1);
    }
    var E = ue, f = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), k = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), W = Symbol.for("react.client.reference"), O = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, G = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var F, Q = {}, J = E["react-stack-bottom-frame"].bind(
      E,
      i
    )(), oe = U(o(i)), j = {};
    ne.Fragment = g, ne.jsx = function(r, h, w, _, Y) {
      var $ = 1e4 > O.recentlyCreatedOwnerStacks++;
      return p(
        r,
        h,
        w,
        !1,
        _,
        Y,
        $ ? Error("react-stack-top-frame") : J,
        $ ? U(o(r)) : oe
      );
    }, ne.jsxs = function(r, h, w, _, Y) {
      var $ = 1e4 > O.recentlyCreatedOwnerStacks++;
      return p(
        r,
        h,
        w,
        !0,
        _,
        Y,
        $ ? Error("react-stack-top-frame") : J,
        $ ? U(o(r)) : oe
      );
    };
  }()), ne;
}
var Ne;
function tt() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? re.exports = Ke() : re.exports = et()), re.exports;
}
var b = tt(), se = { exports: {} }, me = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function nt() {
  if (Ce) return me;
  Ce = 1;
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
var ke;
function ot() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
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
function rt() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? se.exports = nt() : se.exports = ot()), se.exports;
}
var D = rt();
const Ge = (t, e) => {
  const n = e || t.currentTarget;
  if (!n || typeof n.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const o = n.getBoundingClientRect(), s = t.clientX - o.x, i = t.clientY - o.y;
  return {
    x: s / o.width * 100,
    y: i / o.height * 100
  };
}, $e = (t, e, n) => Math.max(t, Math.min(e, n)), st = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), o = e.pageX - n.left, s = e.pageY - (n.top + window.scrollY);
  return {
    x: $e(0, 100, o / n.width * 100),
    y: $e(0, 100, s / n.height * 100)
  };
}, B = (t, e) => it(t) ? ct(t) ? (at(t) && t.preventDefault(), st(t)) : {
  x: null
} : Ge(t, e), it = (t) => t.targetTouches !== void 0, ct = (t) => t.targetTouches.length === 1, at = (t) => t.type === "touchmove";
function lt(t, e = {}) {
  const {
    onPositionChange: n,
    throttleMs: o = 16
  } = e, s = X({
    x: null,
    y: null
  }), [i, l] = be({
    x: null,
    y: null
  }), c = X(0), a = X(null), d = R((g) => {
    if (s.current = g, n) {
      const m = Date.now();
      o <= 0 || m - c.current >= o ? (l(g), n(g), c.current = m) : (a.current && clearTimeout(a.current), a.current = setTimeout(() => {
        l(g), n(g), c.current = Date.now();
      }, o - (m - c.current)));
    }
  }, [n, o]), p = R((g) => {
    try {
      const m = t.current;
      if (!m) {
        d({
          x: null,
          y: null
        });
        return;
      }
      const T = Ge(g, m);
      d(T);
    } catch {
      d({
        x: null,
        y: null
      });
    }
  }, [t, d]), v = R((g) => {
    const m = t.current;
    if (!m || g.targetTouches.length !== 1)
      return;
    const T = g.targetTouches[0], C = m.offsetParent;
    if (C)
      try {
        const k = T.pageX - C.offsetLeft, N = T.pageY - C.offsetTop, y = m, M = y.width, S = y.height;
        M > 0 && S > 0 ? d({
          x: k / M * 100,
          y: N / S * 100
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
  }, [t, d]), E = R((g) => {
    d({
      x: null,
      y: null
    });
  }, [d]), f = R((g) => {
    d({
      x: null,
      y: null
    });
  }, [d]), x = R(() => s.current, []);
  return Z(() => () => {
    a.current && clearTimeout(a.current);
  }, []), {
    mousePosition: n ? i : s.current,
    handlers: {
      onMouseMove: p,
      onMouseLeave: E,
      onTouchMove: v,
      onTouchLeave: f
    },
    getCurrentMousePosition: x
  };
}
function ut(t) {
  const e = D.c(12), {
    annotations: n,
    selectors: o,
    imageRef: s,
    enableEditing: i
  } = t;
  let l, c;
  e[0] !== o ? (c = new Map(o.map(ft)), e[0] = o, e[1] = c) : c = e[1], l = c;
  const a = l;
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
    const T = {
      x,
      y: g
    }, C = n.map((N) => {
      const {
        geometry: y
      } = N;
      if (!y)
        return null;
      const M = p(y.type);
      if (!M)
        return null;
      let S = y;
      return i && y.type === "RECTANGLE" && typeof y.x == "number" && typeof y.y == "number" && typeof y.width == "number" && typeof y.height == "number" && (S = {
        ...y,
        x: Math.max(0, y.x - 2),
        y: Math.max(0, y.y - 2),
        width: Math.min(100 - y.x + 2, y.width + 4),
        height: Math.min(100 - y.y + 2, y.height + 4)
      }), M.intersects(T, S, m) ? N : null;
    }).filter(dt);
    return C.length === 0 ? void 0 : C.sort((N, y) => {
      const M = p(N.geometry.type), S = p(y.geometry.type);
      return !M || !S ? 0 : M.area(N.geometry, m) - S.area(y.geometry, m);
    })[0];
  }, e[4] = n, e[5] = i, e[6] = p, e[7] = s, e[8] = v) : v = e[8];
  const E = v;
  let f;
  return e[9] !== p || e[10] !== E ? (f = {
    getTopAnnotationAt: E,
    getSelectorByType: p
  }, e[9] = p, e[10] = E, e[11] = f) : f = e[11], f;
}
function dt(t) {
  return t !== null;
}
function ft(t) {
  return [t.TYPE, t];
}
function ht(t) {
  const e = D.c(17), {
    targetRef: n,
    imageRef: o,
    annotations: s,
    selectors: i,
    enableEditing: l,
    throttleMs: c
  } = t, a = c === void 0 ? 50 : c, [d, p] = be(void 0), v = X(void 0), E = X(void 0);
  let f;
  e[0] !== s || e[1] !== l || e[2] !== o || e[3] !== i ? (f = {
    annotations: s,
    selectors: i,
    imageRef: o,
    enableEditing: l
  }, e[0] = s, e[1] = l, e[2] = o, e[3] = i, e[4] = f) : f = e[4];
  const {
    getTopAnnotationAt: x
  } = ut(f);
  let g;
  e[5] !== x ? (g = (H) => {
    var G;
    const {
      x: V,
      y: W
    } = H, O = x(V, W), I = (G = O == null ? void 0 : O.data) == null ? void 0 : G.id;
    I !== E.current && (E.current = I, v.current = O, p(O));
  }, e[5] = x, e[6] = g) : g = e[6];
  const m = g;
  let T;
  e[7] !== m || e[8] !== a ? (T = {
    onPositionChange: m,
    throttleMs: a
  }, e[7] = m, e[8] = a, e[9] = T) : T = e[9];
  const {
    handlers: C
  } = lt(n, T);
  let k;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (k = () => {
    p(void 0), v.current = void 0, E.current = void 0;
  }, e[10] = k) : k = e[10];
  let N;
  e[11] !== s || e[12] !== i ? (N = [s, i], e[11] = s, e[12] = i, e[13] = N) : N = e[13], Z(k, N);
  let y;
  y = C;
  const M = y;
  let S;
  return e[14] !== d || e[15] !== M ? (S = {
    hoveredAnnotation: d,
    mouseHandlers: M
  }, e[14] = d, e[15] = M, e[16] = S) : S = e[16], S;
}
function mt({
  selectors: t,
  effectiveType: e,
  value: n,
  onChange: o,
  disableAnnotation: s
}) {
  const i = R((c) => {
    if (c)
      return t.find((a) => a.TYPE === c);
  }, [t]);
  return {
    callSelectorMethod: R((c, a) => {
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
        o == null || o(v);
      } catch (v) {
        process.env.NODE_ENV !== "production" && console.error(`Error calling selector method ${String(c)}:`, v);
      }
    }, [s, i, e, n, o]),
    getSelectorByType: i
  };
}
const xe = P.div`
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
`, pt = P.div`
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
  const e = D.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.y}%`, s = `${n.x}%`;
  let i;
  return e[0] !== o || e[1] !== s ? (i = /* @__PURE__ */ b.jsx(pt, { style: {
    top: o,
    left: s
  } }), e[0] = o, e[1] = s, e[2] = i) : i = e[2], i;
}
const gt = P.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, xt = P.div`
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
`, vt = (t) => {
  const e = D.c(11), {
    onChange: n,
    onSubmit: o,
    onFocus: s,
    onBlur: i,
    value: l
  } = t;
  let c;
  e[0] !== i || e[1] !== n || e[2] !== s || e[3] !== l ? (c = /* @__PURE__ */ b.jsx(gt, { children: /* @__PURE__ */ b.jsx("textarea", { placeholder: "Write description", onFocus: s, onBlur: i, onChange: n, value: l }) }), e[0] = i, e[1] = n, e[2] = s, e[3] = l, e[4] = c) : c = e[4];
  let a;
  e[5] !== o || e[6] !== l ? (a = l && /* @__PURE__ */ b.jsx(xt, { onClick: o, children: "Submit" }), e[5] = o, e[6] = l, e[7] = a) : a = e[7];
  let d;
  return e[8] !== c || e[9] !== a ? (d = /* @__PURE__ */ b.jsxs(ue.Fragment, { children: [
    c,
    a
  ] }), e[8] = c, e[9] = a, e[10] = d) : d = e[10], d;
}, bt = Qe`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Et = P.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${bt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, yt = (t) => {
  var C;
  const e = D.c(17), {
    annotation: n,
    onChange: o,
    onSubmit: s,
    className: i,
    style: l
  } = t, c = i === void 0 ? "" : i;
  let a;
  e[0] !== l ? (a = l === void 0 ? {} : l, e[0] = l, e[1] = a) : a = e[1];
  const d = a, {
    geometry: p
  } = n;
  if (!p)
    return null;
  const v = `${p.x}%`, E = `${p.y + p.height}%`;
  let f;
  e[2] !== d || e[3] !== v || e[4] !== E ? (f = {
    position: "absolute",
    left: v,
    top: E,
    ...d
  }, e[2] = d, e[3] = v, e[4] = E, e[5] = f) : f = e[5];
  let x;
  e[6] !== n || e[7] !== o ? (x = (k) => o({
    ...n,
    data: {
      ...n.data,
      text: k.target.value
    }
  }), e[6] = n, e[7] = o, e[8] = x) : x = e[8];
  const g = (C = n.data) == null ? void 0 : C.text;
  let m;
  e[9] !== s || e[10] !== x || e[11] !== g ? (m = /* @__PURE__ */ b.jsx(vt, { onChange: x, onSubmit: s, value: g }), e[9] = s, e[10] = x, e[11] = g, e[12] = m) : m = e[12];
  let T;
  return e[13] !== c || e[14] !== f || e[15] !== m ? (T = /* @__PURE__ */ b.jsx(Et, { className: c, style: f, children: m }), e[13] = c, e[14] = f, e[15] = m, e[16] = T) : T = e[16], T;
}, ie = P.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, Tt = P.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Xe(t) {
  const e = D.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.y}%`;
  let s;
  e[0] !== o ? (s = /* @__PURE__ */ b.jsx(ie, { style: {
    height: o,
    width: "100%"
  } }), e[0] = o, e[1] = s) : s = e[1];
  const i = `${n.y}%`, l = `${n.height}%`, c = `${n.x}%`;
  let a;
  e[2] !== i || e[3] !== l || e[4] !== c ? (a = /* @__PURE__ */ b.jsx(ie, { style: {
    top: i,
    height: l,
    width: c
  } }), e[2] = i, e[3] = l, e[4] = c, e[5] = a) : a = e[5];
  const d = `${n.y}%`, p = `${n.x + n.width}%`, v = `${n.height}%`, E = `${100 - (n.x + n.width)}%`;
  let f;
  e[6] !== d || e[7] !== p || e[8] !== v || e[9] !== E ? (f = /* @__PURE__ */ b.jsx(ie, { style: {
    top: d,
    left: p,
    height: v,
    width: E
  } }), e[6] = d, e[7] = p, e[8] = v, e[9] = E, e[10] = f) : f = e[10];
  const x = `${n.y + n.height}%`, g = `${100 - (n.y + n.height)}%`;
  let m;
  e[11] !== x || e[12] !== g ? (m = /* @__PURE__ */ b.jsx(ie, { style: {
    top: x,
    height: g,
    width: "100%"
  } }), e[11] = x, e[12] = g, e[13] = m) : m = e[13];
  let T;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== s || e[17] !== f || e[18] !== m || e[19] !== a ? (T = /* @__PURE__ */ b.jsxs(Tt, { className: t.className, style: t.style, children: [
    s,
    a,
    f,
    m
  ] }), e[14] = t.className, e[15] = t.style, e[16] = s, e[17] = f, e[18] = m, e[19] = a, e[20] = T) : T = e[20], T;
}
Xe.defaultProps = {
  className: "",
  style: {}
};
const wt = P.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function He(t) {
  var p;
  const e = D.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  console.log("Rectangle", (p = t.annotation.data) == null ? void 0 : p.id, "geometry", n);
  const o = `${n.x}%`, s = `${n.y}%`, i = `${n.height}%`, l = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let a;
  e[0] !== t.style || e[1] !== o || e[2] !== s || e[3] !== i || e[4] !== l || e[5] !== c ? (a = {
    position: "absolute",
    left: o,
    top: s,
    height: i,
    width: l,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = s, e[3] = i, e[4] = l, e[5] = c, e[6] = a) : a = e[6];
  let d;
  return e[7] !== t.className || e[8] !== a ? (d = /* @__PURE__ */ b.jsx(wt, { className: t.className, style: a }), e[7] = t.className, e[8] = a, e[9] = d) : d = e[9], d;
}
He.defaultProps = {
  className: "",
  style: {}
};
const Rt = P.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function ve(t) {
  const e = D.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.x}%`, s = `${n.y}%`, i = `${n.height}%`, l = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let a;
  e[0] !== t.style || e[1] !== o || e[2] !== s || e[3] !== i || e[4] !== l || e[5] !== c ? (a = {
    position: "absolute",
    left: o,
    top: s,
    height: i,
    width: l,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = s, e[3] = i, e[4] = l, e[5] = c, e[6] = a) : a = e[6];
  let d;
  return e[7] !== t.className || e[8] !== a ? (d = /* @__PURE__ */ b.jsx(Rt, { className: t.className, style: a }), e[7] = t.className, e[8] = a, e[9] = d) : d = e[9], d;
}
ve.defaultProps = {
  className: "",
  style: {}
};
const Mt = P.div`
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
  const e = D.c(8), {
    geometry: n
  } = t.annotation;
  if (!n || typeof n.x > "u" || typeof n.y > "u" || typeof n.width > "u" || typeof n.height > "u")
    return null;
  const o = `${n.x}%`, s = `${n.y + n.height}%`;
  let i;
  e[0] !== t.style || e[1] !== o || e[2] !== s ? (i = {
    position: "absolute",
    left: o,
    top: s,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = s, e[3] = i) : i = e[3];
  const l = t.annotation.data && t.annotation.data.text;
  let c;
  return e[4] !== t.className || e[5] !== i || e[6] !== l ? (c = /* @__PURE__ */ b.jsx(Mt, { style: i, className: t.className, children: l }), e[4] = t.className, e[5] = i, e[6] = l, e[7] = c) : c = e[7], c;
}
Ue.defaultProps = {
  style: {},
  className: ""
};
const ze = "RECTANGLE";
function _t({
  x: t,
  y: e
}, n, o) {
  if (!n) return !1;
  const s = Math.min(n.x, n.x + n.width), i = Math.max(n.x, n.x + n.width), l = Math.min(n.y, n.y + n.height), c = Math.max(n.y, n.y + n.height);
  return !(t < s || e < l || t > i || e > c);
}
function St(t, e) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const n = Math.abs(t.width), o = Math.abs(t.height);
  return n * o;
}
const At = {
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
      y: o
    } = B(e);
    return {
      ...t,
      selection: {
        ...t.selection,
        mode: "SELECTING",
        anchorX: n,
        anchorY: o
      }
    };
  }
}
function Ye(t, e) {
  if (t.selection) {
    const {
      selection: n,
      geometry: o
    } = t;
    if (!o)
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
      anchorY: o
    } = t.selection, {
      x: s,
      y: i
    } = B(e), l = s - n, c = i - o;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: ze,
        x: l > 0 ? n : s,
        y: c > 0 ? o : i,
        width: Math.abs(l),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const ce = {
  TYPE: ze,
  intersects: _t,
  area: St,
  methods: At
}, Le = 6, Nt = (t = {
  width: 100,
  height: 100
}) => ({
  marginX: Le / t.width * 100,
  marginY: Le / t.height * 100
}), Fe = "POINT";
function Ct({
  x: t,
  y: e
}, n, o) {
  if (!n) return !1;
  const {
    marginX: s,
    marginY: i
  } = Nt(o), l = Math.min(s, i) / 2, c = Math.abs(t - n.x), a = Math.abs(e - n.y);
  return c <= l && a <= l;
}
function kt(t, e) {
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
        ...B(e),
        width: 0,
        height: 0,
        type: Fe
      }
    };
  }
}, ae = {
  TYPE: Fe,
  intersects: Ct,
  area: kt,
  methods: Pt
}, le = (t) => Math.pow(t, 2), Ee = "OVAL";
function $t({
  x: t,
  y: e
}, n, o) {
  if (!n || !n.width || !n.height) return !1;
  const s = Math.abs(n.width), i = Math.abs(n.height), l = {
    x: n.x + s / 2,
    y: n.y + i / 2
  }, c = s / 2, a = i / 2;
  if (c === 0 || a === 0) return !1;
  const d = t - l.x, p = e - l.y;
  return le(d) / le(c) + le(p) / le(a) <= 1;
}
function Ot(t, e) {
  if (!t || !t.width || !t.height) return 0;
  const n = Math.abs(t.width), o = Math.abs(t.height);
  return n <= 0 || o <= 0 ? 0 : Math.PI * (n / 2) * (o / 2);
}
const jt = {
  onTouchStart(t, e) {
    return Yt(t, e);
  },
  onTouchEnd(t, e) {
    return It(t);
  },
  onTouchMove(t, e) {
    return Lt(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: o
      } = B(e);
      return {
        ...t,
        selection: {
          ...t.selection,
          mode: "SELECTING",
          anchorX: n,
          anchorY: o
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
        anchorY: o
      } = t.selection, {
        x: s,
        y: i
      } = B(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: Ee,
          x: Math.min(n, s),
          y: Math.min(o, i),
          width: Math.abs(s - n),
          height: Math.abs(i - o)
        }
      };
    }
    return t;
  }
};
function Yt(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: o
    } = B(e);
    return {
      ...t,
      selection: {
        ...t.selection,
        mode: "SELECTING",
        anchorX: n,
        anchorY: o
      }
    };
  }
}
function It(t, e) {
  if (t.selection) {
    const {
      selection: n,
      geometry: o
    } = t;
    if (!o)
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
function Lt(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: o
    } = t.selection, {
      x: s,
      y: i
    } = B(e), l = s - n, c = i - o;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Ee,
        x: l > 0 ? n : s,
        y: c > 0 ? o : i,
        width: Math.abs(l),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const ge = {
  TYPE: Ee,
  intersects: $t,
  area: Ot,
  methods: jt
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
  }) => /* @__PURE__ */ b.jsx(yt, { annotation: t, onChange: e, onSubmit: n }),
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
}, Dt = P.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${xe} {
    opacity: 1;
  }

  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, Gt = P.img`
  display: block;
  width: 100%;
  user-select: none;
`, Xt = P.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, Ht = P.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`, Ut = Je((t, e) => {
  var we, Re, Me;
  const n = Ze(() => ({
    ...De,
    ...t,
    // Handle selectors explicitly to avoid override issues
    selectors: t.selectors ?? De.selectors
  }), [t]), {
    // Basic props
    src: o,
    alt: s = "Annotation Image",
    style: i,
    className: l,
    containerRef: c,
    imageRef: a,
    children: d,
    // Core functionality
    annotations: p,
    type: v,
    selectors: E,
    value: f,
    onChange: x,
    onSubmit: g,
    // Active annotation handling
    activeAnnotationComparator: m,
    activeAnnotations: T,
    // Feature toggles
    disableAnnotation: C,
    disableSelector: k,
    disableEditor: N,
    disableOverlay: y,
    allowTouch: M,
    // Render props
    renderSelector: S,
    renderEditor: H,
    renderHighlight: V,
    renderContent: W,
    renderOverlay: O,
    // Event handlers
    onImageMouseUp: I,
    onImageMouseDown: G,
    onImageMouseMove: U,
    onImageClick: F
  } = n, Q = X(null), J = X(null), {
    hoveredAnnotation: oe,
    mouseHandlers: j
  } = ht({
    targetRef: J,
    imageRef: Q,
    annotations: p,
    selectors: E,
    enableEditing: !N,
    throttleMs: 50
    // Reduced frequency to minimize rerenders
  }), r = v || ((we = E[0]) == null ? void 0 : we.TYPE), {
    callSelectorMethod: h
  } = mt({
    selectors: E,
    effectiveType: r,
    value: f,
    onChange: x,
    disableAnnotation: C
  }), w = X(null), _ = R((u) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && M && u.preventDefault(), h("onTouchStart", u);
  }, [M, h]), Y = R((u) => {
    h("onTouchEnd", u);
  }, [h]), $ = R((u) => {
    j.onTouchMove(u), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && M && u.preventDefault(), h("onTouchMove", u);
  }, [j, M, h]), q = R((u) => {
    j.onTouchLeave(u);
  }, [j]);
  Z(() => {
    const u = J.current;
    if (!(!M || !u))
      return u.ontouchstart = _, u.ontouchend = Y, u.ontouchmove = $, u.ontouchcancel = q, () => {
        u && (u.ontouchstart = null, u.ontouchend = null, u.ontouchmove = null, u.ontouchcancel = null);
      };
  }, [M, _, Y, $, q]);
  const K = R((u) => {
    Q.current = u, e && (typeof e == "function" ? e(u) : e.current = u), a && (typeof a == "function" ? a(u) : a.current = u);
  }, [e, a]), A = R((u) => {
    J.current = u;
  }, []), z = R((u) => {
    c && (typeof c == "function" ? c(u) : c.current = u);
  }, [c]), ee = R((u) => {
    j.onMouseMove(u.nativeEvent), U == null || U(u), h("onMouseMove", u);
  }, [j, U, h]), de = R((u) => {
    j.onMouseLeave(u.nativeEvent);
  }, [j]), qe = R((u) => {
    I == null || I(u), h("onMouseUp", u);
  }, [I, h]), Be = R((u) => {
    G == null || G(u), h("onMouseDown", u);
  }, [G, h]), Ve = R((u) => {
    F == null || F(u), h("onClick", u);
  }, [F, h]), We = R(() => {
    g && f && g(f);
  }, [g, f]), fe = R((u) => {
    var L;
    u.key === "Escape" && x && ((L = f == null ? void 0 : f.selection) != null && L.showEditor || f != null && f.geometry) && x({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [f, x]);
  Z(() => {
    var u;
    if ((u = f == null ? void 0 : f.selection) != null && u.showEditor)
      return window.addEventListener("keydown", fe), () => window.removeEventListener("keydown", fe);
  }, [(Re = f == null ? void 0 : f.selection) == null ? void 0 : Re.showEditor, fe]), Z(() => () => {
    w.current && clearTimeout(w.current);
  }, []);
  const ye = oe, Te = R((u, L) => T && T.some((_e) => m ? m(u, _e) : u.data.id === _e) || L === u, [T, m]);
  return /* @__PURE__ */ b.jsxs(Dt, { ref: z, style: i, className: l, onMouseLeave: de, onTouchCancel: q, onMouseMove: ee, $allowTouch: M, children: [
    /* @__PURE__ */ b.jsx(Gt, { ref: K, src: o, alt: s }),
    /* @__PURE__ */ b.jsxs(Xt, { children: [
      p.map((u) => {
        var he;
        if (!((he = u.data) != null && he.id))
          return null;
        const L = Te(u, ye);
        return V ? V({
          key: u.data.id,
          annotation: u,
          active: L
        }) : null;
      }),
      !k && (f == null ? void 0 : f.geometry) && S && S({
        annotation: f
      })
    ] }),
    /* @__PURE__ */ b.jsx(Ht, { ref: A, "data-testid": "annotation-target", onClick: Ve, onMouseUp: qe, onMouseDown: Be }),
    !y && O && O({
      type: r,
      annotation: f
    }),
    p.map((u) => {
      var L;
      return (L = u.data) != null && L.id && Te(u, ye) && W != null ? W({
        key: u.data.id,
        annotation: u
      }) : null;
    }),
    !N && ((Me = f == null ? void 0 : f.selection) == null ? void 0 : Me.showEditor) && H && x && H({
      annotation: f,
      onChange: x,
      onSubmit: We
    }),
    d
  ] });
});
Ut.displayName = "Annotation";
function zt(t, e) {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const {
    pageX: n,
    pageY: o
  } = e, {
    left: s,
    right: i,
    bottom: l,
    top: c
  } = t.getBoundingClientRect();
  return n > s && n < i && o > c && o < l;
}
function Vt() {
  const t = D.c(5), [e, n] = be(!1), o = X(null);
  let s, i;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
    const d = (p) => {
      const v = o.current, E = {
        pageX: p.pageX,
        pageY: p.pageY
      }, f = zt(v, E);
      n(f);
    };
    return document.addEventListener("mousemove", d, {
      passive: !0
    }), () => {
      document.removeEventListener("mousemove", d);
    };
  }, i = [], t[0] = s, t[1] = i) : (s = t[0], i = t[1]), Z(s, i);
  let l;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = (d) => {
    o.current = d;
  }, t[2] = l) : l = t[2];
  const c = l;
  let a;
  return t[3] !== e ? (a = {
    isHoveringOver: e,
    setRef: c
  }, t[3] = e, t[4] = a) : a = t[4], a;
}
export {
  Ut as Annotation,
  ge as OvalSelector,
  ae as PointSelector,
  ce as RectangleSelector,
  Ut as default,
  ut as useAnnotationHitDetection,
  Vt as useMouseHover,
  lt as useRelativeMousePosition,
  mt as useSelectorMethods
};
