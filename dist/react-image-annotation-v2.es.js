import ue, { useRef as H, useState as be, useCallback as R, useEffect as J, useMemo as Ve } from "react";
import O, { keyframes as We } from "styled-components";
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
function Je() {
  if (Se) return te;
  Se = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(o, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var c in s)
        c !== "key" && (i[c] = s[c]);
    } else i = s;
    return s = i.ref, {
      $$typeof: t,
      type: o,
      key: a,
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
function Ze() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === z ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case g:
          return "Fragment";
        case w:
          return "Profiler";
        case m:
          return "StrictMode";
        case b:
          return "Suspense";
        case C:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case y:
            return "Portal";
          case P:
            return (r.displayName || "Context") + ".Provider";
          case k:
            return (r._context.displayName || "Context") + ".Consumer";
          case M:
            var h = r.render;
            return r = r.displayName, r || (r = h.displayName || h.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case S:
            return h = r.displayName || null, h !== null ? h : t(r.type) || "Memo";
          case U:
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
        var T = h.error, _ = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return T.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), e(r);
      }
    }
    function o(r) {
      if (r === g) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === U)
        return "<...>";
      try {
        var h = t(r);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var r = $.A;
      return r === null ? null : r.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(r) {
      if (L.call(r, "key")) {
        var h = Object.getOwnPropertyDescriptor(r, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function c(r, h) {
      function T() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: T,
        configurable: !0
      });
    }
    function l() {
      var r = t(this.type);
      return oe[r] || (oe[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function d(r, h, T, _, j, Y, Q, K) {
      return T = Y.ref, r = {
        $$typeof: x,
        type: r,
        key: h,
        props: Y,
        _owner: j
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: l
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
        value: Q
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function p(r, h, T, _, j, Y, Q, K) {
      var A = h.children;
      if (A !== void 0)
        if (_)
          if (X(A)) {
            for (_ = 0; _ < A.length; _++)
              f(A[_]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(A);
      if (L.call(h, "key")) {
        A = t(r);
        var F = Object.keys(h).filter(function(de) {
          return de !== "key";
        });
        _ = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", N[A + _] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          A,
          F,
          A
        ), N[A + _] = !0);
      }
      if (A = null, T !== void 0 && (n(T), A = "" + T), a(h) && (n(h.key), A = "" + h.key), "key" in h) {
        T = {};
        for (var ee in h)
          ee !== "key" && (T[ee] = h[ee]);
      } else T = h;
      return A && c(
        T,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), d(
        r,
        A,
        Y,
        j,
        s(),
        T,
        Q,
        K
      );
    }
    function f(r) {
      typeof r == "object" && r !== null && r.$$typeof === x && r._store && (r._store.validated = 1);
    }
    var v = ue, x = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), P = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), $ = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, X = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var W, oe = {}, I = v["react-stack-bottom-frame"].bind(
      v,
      i
    )(), Z = V(o(i)), N = {};
    ne.Fragment = g, ne.jsx = function(r, h, T, _, j) {
      var Y = 1e4 > $.recentlyCreatedOwnerStacks++;
      return p(
        r,
        h,
        T,
        !1,
        _,
        j,
        Y ? Error("react-stack-top-frame") : I,
        Y ? V(o(r)) : Z
      );
    }, ne.jsxs = function(r, h, T, _, j) {
      var Y = 1e4 > $.recentlyCreatedOwnerStacks++;
      return p(
        r,
        h,
        T,
        !0,
        _,
        j,
        Y ? Error("react-stack-top-frame") : I,
        Y ? V(o(r)) : Z
      );
    };
  }()), ne;
}
var Ce;
function Qe() {
  return Ce || (Ce = 1, process.env.NODE_ENV === "production" ? re.exports = Je() : re.exports = Ze()), re.exports;
}
var E = Qe(), se = { exports: {} }, me = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Ke() {
  if (Ne) return me;
  Ne = 1;
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
function et() {
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
function tt() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? se.exports = Ke() : se.exports = et()), se.exports;
}
var G = tt();
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
}, $e = (t, e, n) => Math.max(t, Math.min(e, n)), nt = (t) => {
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
}, q = (t, e) => ot(t) ? rt(t) ? (st(t) && t.preventDefault(), nt(t)) : {
  x: null
} : Ge(t, e), ot = (t) => t.targetTouches !== void 0, rt = (t) => t.targetTouches.length === 1, st = (t) => t.type === "touchmove";
function it(t, e = {}) {
  const {
    onPositionChange: n,
    throttleMs: o = 16
  } = e, s = H({
    x: null,
    y: null
  }), [i, a] = be({
    x: null,
    y: null
  }), c = H(0), l = H(null), d = R((g) => {
    if (s.current = g, n) {
      const m = Date.now();
      o <= 0 || m - c.current >= o ? (a(g), n(g), c.current = m) : (l.current && clearTimeout(l.current), l.current = setTimeout(() => {
        a(g), n(g), c.current = Date.now();
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
    const w = g.targetTouches[0], k = m.offsetParent;
    if (k)
      try {
        const P = w.pageX - k.offsetLeft, M = w.pageY - k.offsetTop, b = m, C = b.width, S = b.height;
        C > 0 && S > 0 ? d({
          x: P / C * 100,
          y: M / S * 100
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
  return J(() => () => {
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
function ct(t) {
  const e = G.c(12), {
    annotations: n,
    selectors: o,
    imageRef: s,
    enableEditing: i
  } = t;
  let a, c;
  e[0] !== o ? (c = new Map(o.map(lt)), e[0] = o, e[1] = c) : c = e[1], a = c;
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
    }, k = n.map((M) => {
      const {
        geometry: b
      } = M;
      if (!b)
        return null;
      const C = p(b.type);
      if (!C)
        return null;
      let S = b;
      return i && b.type === "RECTANGLE" && typeof b.x == "number" && typeof b.y == "number" && typeof b.width == "number" && typeof b.height == "number" && (S = {
        ...b,
        x: Math.max(0, b.x - 2),
        y: Math.max(0, b.y - 2),
        width: Math.min(100 - b.x + 2, b.width + 4),
        height: Math.min(100 - b.y + 2, b.height + 4)
      }), C.intersects(w, S, m) ? M : null;
    }).filter(at);
    return k.length === 0 ? void 0 : k.sort((M, b) => {
      const C = p(M.geometry.type), S = p(b.geometry.type);
      return !C || !S ? 0 : C.area(M.geometry, m) - S.area(b.geometry, m);
    })[0];
  }, e[4] = n, e[5] = i, e[6] = p, e[7] = s, e[8] = f) : f = e[8];
  const v = f;
  let x;
  return e[9] !== p || e[10] !== v ? (x = {
    getTopAnnotationAt: v,
    getSelectorByType: p
  }, e[9] = p, e[10] = v, e[11] = x) : x = e[11], x;
}
function at(t) {
  return t !== null;
}
function lt(t) {
  return [t.TYPE, t];
}
function ut(t) {
  const e = G.c(17), {
    targetRef: n,
    imageRef: o,
    annotations: s,
    selectors: i,
    enableEditing: a,
    throttleMs: c
  } = t, l = c === void 0 ? 50 : c, [d, p] = be(void 0), f = H(void 0), v = H(void 0);
  let x;
  e[0] !== s || e[1] !== a || e[2] !== o || e[3] !== i ? (x = {
    annotations: s,
    selectors: i,
    imageRef: o,
    enableEditing: a
  }, e[0] = s, e[1] = a, e[2] = o, e[3] = i, e[4] = x) : x = e[4];
  const {
    getTopAnnotationAt: y
  } = ct(x);
  let g;
  e[5] !== y ? (g = (U) => {
    var X;
    const {
      x: B,
      y: z
    } = U, $ = y(B, z), L = (X = $ == null ? void 0 : $.data) == null ? void 0 : X.id;
    L !== v.current && (v.current = L, f.current = $, p($));
  }, e[5] = y, e[6] = g) : g = e[6];
  const m = g;
  let w;
  e[7] !== m || e[8] !== l ? (w = {
    onPositionChange: m,
    throttleMs: l
  }, e[7] = m, e[8] = l, e[9] = w) : w = e[9];
  const {
    handlers: k
  } = it(n, w);
  let P;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (P = () => {
    p(void 0), f.current = void 0, v.current = void 0;
  }, e[10] = P) : P = e[10];
  let M;
  e[11] !== s || e[12] !== i ? (M = [s, i], e[11] = s, e[12] = i, e[13] = M) : M = e[13], J(P, M);
  let b;
  b = k;
  const C = b;
  let S;
  return e[14] !== d || e[15] !== C ? (S = {
    hoveredAnnotation: d,
    mouseHandlers: C
  }, e[14] = d, e[15] = C, e[16] = S) : S = e[16], S;
}
function dt({
  selectors: t,
  effectiveType: e,
  value: n,
  onChange: o,
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
        o == null || o(f);
      } catch (f) {
        process.env.NODE_ENV !== "production" && console.error(`Error calling selector method ${String(c)}:`, f);
      }
    }, [s, i, e, n, o]),
    getSelectorByType: i
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
`, ft = O.div`
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
  const o = `${n.y}%`, s = `${n.x}%`;
  let i;
  return e[0] !== o || e[1] !== s ? (i = /* @__PURE__ */ E.jsx(ft, { style: {
    top: o,
    left: s
  } }), e[0] = o, e[1] = s, e[2] = i) : i = e[2], i;
}
const ht = O.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, mt = O.div`
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
`, pt = (t) => {
  const e = G.c(11), {
    onChange: n,
    onSubmit: o,
    onFocus: s,
    onBlur: i,
    value: a
  } = t;
  let c;
  e[0] !== i || e[1] !== n || e[2] !== s || e[3] !== a ? (c = /* @__PURE__ */ E.jsx(ht, { children: /* @__PURE__ */ E.jsx("textarea", { placeholder: "Write description", onFocus: s, onBlur: i, onChange: n, value: a }) }), e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = c) : c = e[4];
  let l;
  e[5] !== o || e[6] !== a ? (l = a && /* @__PURE__ */ E.jsx(mt, { onClick: o, children: "Submit" }), e[5] = o, e[6] = a, e[7] = l) : l = e[7];
  let d;
  return e[8] !== c || e[9] !== l ? (d = /* @__PURE__ */ E.jsxs(ue.Fragment, { children: [
    c,
    l
  ] }), e[8] = c, e[9] = l, e[10] = d) : d = e[10], d;
}, gt = We`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, xt = O.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${gt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, vt = (t) => {
  var k;
  const e = G.c(17), {
    annotation: n,
    onChange: o,
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
  e[6] !== n || e[7] !== o ? (y = (P) => o({
    ...n,
    data: {
      ...n.data,
      text: P.target.value
    }
  }), e[6] = n, e[7] = o, e[8] = y) : y = e[8];
  const g = (k = n.data) == null ? void 0 : k.text;
  let m;
  e[9] !== s || e[10] !== y || e[11] !== g ? (m = /* @__PURE__ */ E.jsx(pt, { onChange: y, onSubmit: s, value: g }), e[9] = s, e[10] = y, e[11] = g, e[12] = m) : m = e[12];
  let w;
  return e[13] !== c || e[14] !== x || e[15] !== m ? (w = /* @__PURE__ */ E.jsx(xt, { className: c, style: x, children: m }), e[13] = c, e[14] = x, e[15] = m, e[16] = w) : w = e[16], w;
}, ie = O.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, bt = O.div`
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
  const o = `${n.y}%`;
  let s;
  e[0] !== o ? (s = /* @__PURE__ */ E.jsx(ie, { style: {
    height: o,
    width: "100%"
  } }), e[0] = o, e[1] = s) : s = e[1];
  const i = `${n.y}%`, a = `${n.height}%`, c = `${n.x}%`;
  let l;
  e[2] !== i || e[3] !== a || e[4] !== c ? (l = /* @__PURE__ */ E.jsx(ie, { style: {
    top: i,
    height: a,
    width: c
  } }), e[2] = i, e[3] = a, e[4] = c, e[5] = l) : l = e[5];
  const d = `${n.y}%`, p = `${n.x + n.width}%`, f = `${n.height}%`, v = `${100 - (n.x + n.width)}%`;
  let x;
  e[6] !== d || e[7] !== p || e[8] !== f || e[9] !== v ? (x = /* @__PURE__ */ E.jsx(ie, { style: {
    top: d,
    left: p,
    height: f,
    width: v
  } }), e[6] = d, e[7] = p, e[8] = f, e[9] = v, e[10] = x) : x = e[10];
  const y = `${n.y + n.height}%`, g = `${100 - (n.y + n.height)}%`;
  let m;
  e[11] !== y || e[12] !== g ? (m = /* @__PURE__ */ E.jsx(ie, { style: {
    top: y,
    height: g,
    width: "100%"
  } }), e[11] = y, e[12] = g, e[13] = m) : m = e[13];
  let w;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== s || e[17] !== x || e[18] !== m || e[19] !== l ? (w = /* @__PURE__ */ E.jsxs(bt, { className: t.className, style: t.style, children: [
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
const Et = O.div`
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
  const o = `${n.x}%`, s = `${n.y}%`, i = `${n.height}%`, a = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let l;
  e[0] !== t.style || e[1] !== o || e[2] !== s || e[3] !== i || e[4] !== a || e[5] !== c ? (l = {
    position: "absolute",
    left: o,
    top: s,
    height: i,
    width: a,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = s, e[3] = i, e[4] = a, e[5] = c, e[6] = l) : l = e[6];
  let d;
  return e[7] !== t.className || e[8] !== l ? (d = /* @__PURE__ */ E.jsx(Et, { className: t.className, style: l }), e[7] = t.className, e[8] = l, e[9] = d) : d = e[9], d;
}
He.defaultProps = {
  className: "",
  style: {}
};
const yt = O.div`
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
  const o = `${n.x}%`, s = `${n.y}%`, i = `${n.height}%`, a = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let l;
  e[0] !== t.style || e[1] !== o || e[2] !== s || e[3] !== i || e[4] !== a || e[5] !== c ? (l = {
    position: "absolute",
    left: o,
    top: s,
    height: i,
    width: a,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = s, e[3] = i, e[4] = a, e[5] = c, e[6] = l) : l = e[6];
  let d;
  return e[7] !== t.className || e[8] !== l ? (d = /* @__PURE__ */ E.jsx(yt, { className: t.className, style: l }), e[7] = t.className, e[8] = l, e[9] = d) : d = e[9], d;
}
ve.defaultProps = {
  className: "",
  style: {}
};
const Tt = O.div`
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
  const o = `${n.x}%`, s = `${n.y + n.height}%`;
  let i;
  e[0] !== t.style || e[1] !== o || e[2] !== s ? (i = {
    position: "absolute",
    left: o,
    top: s,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = s, e[3] = i) : i = e[3];
  const a = t.annotation.data && t.annotation.data.text;
  let c;
  return e[4] !== t.className || e[5] !== i || e[6] !== a ? (c = /* @__PURE__ */ E.jsx(Tt, { style: i, className: t.className, children: a }), e[4] = t.className, e[5] = i, e[6] = a, e[7] = c) : c = e[7], c;
}
Ue.defaultProps = {
  style: {},
  className: ""
};
const ze = "RECTANGLE";
function wt({
  x: t,
  y: e
}, n, o) {
  if (!n) return !1;
  const s = Math.min(n.x, n.x + n.width), i = Math.max(n.x, n.x + n.width), a = Math.min(n.y, n.y + n.height), c = Math.max(n.y, n.y + n.height);
  return !(t < s || e < a || t > i || e > c);
}
function Rt(t, e) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const n = Math.abs(t.width), o = Math.abs(t.height);
  return n * o;
}
const Mt = {
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
    } = q(e);
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
    } = q(e), a = s - n, c = i - o;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: ze,
        x: a > 0 ? n : s,
        y: c > 0 ? o : i,
        width: Math.abs(a),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const ce = {
  TYPE: ze,
  intersects: wt,
  area: Rt,
  methods: Mt
}, Le = 6, _t = (t = {
  width: 100,
  height: 100
}) => ({
  marginX: Le / t.width * 100,
  marginY: Le / t.height * 100
}), Fe = "POINT";
function St({
  x: t,
  y: e
}, n, o) {
  if (!n) return !1;
  const {
    marginX: s,
    marginY: i
  } = _t(o), a = Math.min(s, i) / 2, c = Math.abs(t - n.x), l = Math.abs(e - n.y);
  return c <= a && l <= a;
}
function At(t, e) {
  return 0;
}
const Ct = {
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
        ...q(e),
        width: 0,
        height: 0,
        type: Fe
      }
    };
  }
}, ae = {
  TYPE: Fe,
  intersects: St,
  area: At,
  methods: Ct
}, le = (t) => Math.pow(t, 2), Ee = "OVAL";
function Nt({
  x: t,
  y: e
}, n, o) {
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
  const n = Math.abs(t.width), o = Math.abs(t.height);
  return n <= 0 || o <= 0 ? 0 : Math.PI * (n / 2) * (o / 2);
}
const Pt = {
  onTouchStart(t, e) {
    return $t(t, e);
  },
  onTouchEnd(t, e) {
    return Ot(t);
  },
  onTouchMove(t, e) {
    return jt(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: o
      } = q(e);
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
      } = q(e);
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
function $t(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: o
    } = q(e);
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
function Ot(t, e) {
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
function jt(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: o
    } = t.selection, {
      x: s,
      y: i
    } = q(e), a = s - n, c = i - o;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Ee,
        x: a > 0 ? n : s,
        y: c > 0 ? o : i,
        width: Math.abs(a),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const ge = {
  TYPE: Ee,
  intersects: Nt,
  area: kt,
  methods: Pt
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
        return /* @__PURE__ */ E.jsx(Xe, { annotation: t });
      case ae.TYPE:
        return /* @__PURE__ */ E.jsx(Oe, { annotation: t });
      case ge.TYPE:
        return /* @__PURE__ */ E.jsx(ve, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ E.jsx(vt, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case ce.TYPE:
        return /* @__PURE__ */ E.jsx(He, { annotation: e, active: n }, t);
      case ae.TYPE:
        return /* @__PURE__ */ E.jsx(Oe, { annotation: e }, t);
      case ge.TYPE:
        return /* @__PURE__ */ E.jsx(ve, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ E.jsx(Ue, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case ae.TYPE:
        return /* @__PURE__ */ E.jsx(xe, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ E.jsx(xe, { children: "Click and Drag to Annotate" });
    }
  }
}, Yt = O.div`
  clear: both;
  position: relative;
  width: 100%;
  
  &:hover ${xe} {
    opacity: 1;
  }
  
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, It = O.img`
  display: block;
  width: 100%;
  user-select: none;
`, Lt = O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, Dt = O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`, zt = (t) => {
  var we, Re, Me;
  const e = Ve(() => ({
    ...De,
    ...t,
    // Handle selectors explicitly to avoid override issues
    selectors: t.selectors ?? De.selectors
  }), [t]), {
    // Basic props
    src: n,
    alt: o = "Annotation Image",
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
    disableEditor: k,
    disableOverlay: P,
    allowTouch: M,
    // Render props
    renderSelector: b,
    renderEditor: C,
    renderHighlight: S,
    renderContent: U,
    renderOverlay: B,
    // Event handlers
    onImageMouseUp: z,
    onImageMouseDown: $,
    onImageMouseMove: L,
    onImageClick: X
  } = e, V = H(null), W = H(null), {
    hoveredAnnotation: oe,
    mouseHandlers: I
  } = ut({
    targetRef: W,
    imageRef: V,
    annotations: l,
    selectors: p,
    enableEditing: !k,
    throttleMs: 50
    // Reduced frequency to minimize rerenders
  }), Z = d || ((we = p[0]) == null ? void 0 : we.TYPE), {
    callSelectorMethod: N
  } = dt({
    selectors: p,
    effectiveType: Z,
    value: f,
    onChange: v,
    disableAnnotation: m
  }), r = H(null), h = R((u) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && M && u.preventDefault(), N("onTouchStart", u);
  }, [M, N]), T = R((u) => {
    N("onTouchEnd", u);
  }, [N]), _ = R((u) => {
    I.onTouchMove(u), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && M && u.preventDefault(), N("onTouchMove", u);
  }, [I, M, N]), j = R((u) => {
    I.onTouchLeave(u);
  }, [I]);
  J(() => {
    const u = W.current;
    if (!(!M || !u))
      return u.ontouchstart = h, u.ontouchend = T, u.ontouchmove = _, u.ontouchcancel = j, () => {
        u && (u.ontouchstart = null, u.ontouchend = null, u.ontouchmove = null, u.ontouchcancel = null);
      };
  }, [M, h, T, _, j]);
  const Y = R((u) => {
    V.current = u;
  }, []), Q = R((u) => {
    W.current = u;
  }, []), K = R((u) => {
    a && (typeof a == "function" ? a(u) : a.current = u);
  }, [a]), A = R((u) => {
    I.onMouseMove(u.nativeEvent), L == null || L(u), N("onMouseMove", u);
  }, [I, L, N]), F = R((u) => {
    I.onMouseLeave(u.nativeEvent);
  }, [I]), ee = R((u) => {
    z == null || z(u), N("onMouseUp", u);
  }, [z, N]), de = R((u) => {
    $ == null || $(u), N("onMouseDown", u);
  }, [$, N]), qe = R((u) => {
    X == null || X(u), N("onClick", u);
  }, [X, N]), Be = R(() => {
    x && f && x(f);
  }, [x, f]), fe = R((u) => {
    var D;
    u.key === "Escape" && v && ((D = f == null ? void 0 : f.selection) != null && D.showEditor || f != null && f.geometry) && v({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [f, v]);
  J(() => {
    var u;
    if ((u = f == null ? void 0 : f.selection) != null && u.showEditor)
      return window.addEventListener("keydown", fe), () => window.removeEventListener("keydown", fe);
  }, [(Re = f == null ? void 0 : f.selection) == null ? void 0 : Re.showEditor, fe]), J(() => () => {
    r.current && clearTimeout(r.current);
  }, []);
  const ye = oe, Te = R((u, D) => g && g.some((_e) => y ? y(u, _e) : u.data.id === _e) || D === u, [g, y]);
  return /* @__PURE__ */ E.jsxs(Yt, { ref: K, style: s, className: i, onMouseLeave: F, onTouchCancel: j, onMouseMove: A, $allowTouch: M, children: [
    /* @__PURE__ */ E.jsx(It, { ref: Y, src: n, alt: o }),
    /* @__PURE__ */ E.jsxs(Lt, { children: [
      l.map((u) => {
        var he;
        if (!((he = u.data) != null && he.id))
          return null;
        const D = Te(u, ye);
        return S ? S({
          key: u.data.id,
          annotation: u,
          active: D
        }) : null;
      }),
      !w && (f == null ? void 0 : f.geometry) && b && b({
        annotation: f
      })
    ] }),
    /* @__PURE__ */ E.jsx(Dt, { ref: Q, "data-testid": "annotation-target", onClick: qe, onMouseUp: ee, onMouseDown: de }),
    !P && B && B({
      type: Z,
      annotation: f
    }),
    l.map((u) => {
      var D;
      return (D = u.data) != null && D.id && Te(u, ye) && U != null ? U({
        key: u.data.id,
        annotation: u
      }) : null;
    }),
    !k && ((Me = f == null ? void 0 : f.selection) == null ? void 0 : Me.showEditor) && C && v && C({
      annotation: f,
      onChange: v,
      onSubmit: Be
    }),
    c
  ] });
};
function Gt(t, e) {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const {
    pageX: n,
    pageY: o
  } = e, {
    left: s,
    right: i,
    bottom: a,
    top: c
  } = t.getBoundingClientRect();
  return n > s && n < i && o > c && o < a;
}
function Ft() {
  const t = G.c(5), [e, n] = be(!1), o = H(null);
  let s, i;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
    const d = (p) => {
      const f = o.current, v = {
        pageX: p.pageX,
        pageY: p.pageY
      }, x = Gt(f, v);
      n(x);
    };
    return document.addEventListener("mousemove", d, {
      passive: !0
    }), () => {
      document.removeEventListener("mousemove", d);
    };
  }, i = [], t[0] = s, t[1] = i) : (s = t[0], i = t[1]), J(s, i);
  let a;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (d) => {
    o.current = d;
  }, t[2] = a) : a = t[2];
  const c = a;
  let l;
  return t[3] !== e ? (l = {
    isHoveringOver: e,
    setRef: c
  }, t[3] = e, t[4] = l) : l = t[4], l;
}
export {
  zt as Annotation,
  ge as OvalSelector,
  ae as PointSelector,
  ce as RectangleSelector,
  zt as default,
  ct as useAnnotationHitDetection,
  Ft as useMouseHover,
  it as useRelativeMousePosition,
  dt as useSelectorMethods
};
