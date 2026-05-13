import We, { useRef as z, useState as dt, useCallback as K, useEffect as de, forwardRef as Ht } from "react";
import O, { keyframes as Ut } from "styled-components";
var Ue = { exports: {} }, pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function zt() {
  if (Tt) return pe;
  Tt = 1;
  var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(r, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: n,
      type: r,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return pe.Fragment = t, pe.jsx = e, pe.jsxs = e, pe;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function Ft() {
  return wt || (wt = 1, process.env.NODE_ENV !== "production" && function() {
    function n(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === A ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case h:
          return "Fragment";
        case _:
          return "Profiler";
        case c:
          return "StrictMode";
        case N:
          return "Suspense";
        case $:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case v:
            return "Portal";
          case C:
            return o.displayName || "Context";
          case k:
            return (o._context.displayName || "Context") + ".Consumer";
          case y:
            var m = o.render;
            return o = o.displayName, o || (o = m.displayName || m.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case F:
            return m = o.displayName || null, m !== null ? m : n(o.type) || "Memo";
          case L:
            m = o._payload, o = o._init;
            try {
              return n(o(m));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function e(o) {
      try {
        t(o);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var R = m.error, M = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return R.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(o);
      }
    }
    function r(o) {
      if (o === h) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === L)
        return "<...>";
      try {
        var m = n(o);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var o = Y.A;
      return o === null ? null : o.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (D.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function l(o, m) {
      function R() {
        te || (te = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: R,
        configurable: !0
      });
    }
    function u() {
      var o = n(this.type);
      return q[o] || (q[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function d(o, m, R, M, U, he) {
      var b = R.ref;
      return o = {
        $$typeof: x,
        type: o,
        key: m,
        props: R,
        _owner: M
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: u
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
        value: U
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function p(o, m, R, M, U, he) {
      var b = m.children;
      if (b !== void 0)
        if (M)
          if (V(b)) {
            for (M = 0; M < b.length; M++)
              E(b[M]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(b);
      if (D.call(m, "key")) {
        b = n(o);
        var j = Object.keys(m).filter(function(S) {
          return S !== "key";
        });
        M = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", J[b + M] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          b,
          j,
          b
        ), J[b + M] = !0);
      }
      if (b = null, R !== void 0 && (e(R), b = "" + R), a(m) && (e(m.key), b = "" + m.key), "key" in m) {
        R = {};
        for (var Z in m)
          Z !== "key" && (R[Z] = m[Z]);
      } else R = m;
      return b && l(
        R,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), d(
        o,
        b,
        R,
        s(),
        U,
        he
      );
    }
    function E(o) {
      w(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === L && (o._payload.status === "fulfilled" ? w(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function w(o) {
      return typeof o == "object" && o !== null && o.$$typeof === x;
    }
    var g = We, x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), C = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), Y = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, V = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var te, q = {}, B = g.react_stack_bottom_frame.bind(
      g,
      i
    )(), W = G(r(i)), J = {};
    ge.Fragment = h, ge.jsx = function(o, m, R) {
      var M = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return p(
        o,
        m,
        R,
        !1,
        M ? Error("react-stack-top-frame") : B,
        M ? G(r(o)) : W
      );
    }, ge.jsxs = function(o, m, R) {
      var M = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return p(
        o,
        m,
        R,
        !0,
        M ? Error("react-stack-top-frame") : B,
        M ? G(r(o)) : W
      );
    };
  }()), ge;
}
var Rt;
function Vt() {
  return Rt || (Rt = 1, process.env.NODE_ENV === "production" ? Ue.exports = zt() : Ue.exports = Ft()), Ue.exports;
}
var T = Vt(), ze = { exports: {} }, it = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function qt() {
  if (_t) return it;
  _t = 1;
  var n = We.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return it.c = function(t) {
    return n.H.useMemoCache(t);
  }, it;
}
var ct = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function Bt() {
  return Mt || (Mt = 1, process.env.NODE_ENV !== "production" && function() {
    var n = We.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    ct.c = function(t) {
      var e = n.H;
      return e === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), e.useMemoCache(t);
    };
  }()), ct;
}
var St;
function Wt() {
  return St || (St = 1, process.env.NODE_ENV === "production" ? ze.exports = qt() : ze.exports = Bt()), ze.exports;
}
var I = Wt();
const jt = (n, t) => {
  const e = t || n.currentTarget;
  if (!e || typeof e.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const r = e.getBoundingClientRect(), s = n.clientX - r.x, i = n.clientY - r.y;
  return {
    x: s / r.width * 100,
    y: i / r.height * 100
  };
}, Nt = (n, t, e) => Math.max(n, Math.min(t, e)), Jt = (n) => {
  if (!n.currentTarget || typeof n.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const t = n.targetTouches[0], e = n.currentTarget.getBoundingClientRect(), r = t.pageX - e.left, s = t.pageY - (e.top + window.scrollY);
  return {
    x: Nt(0, 100, r / e.width * 100),
    y: Nt(0, 100, s / e.height * 100)
  };
}, oe = (n, t) => Zt(n) ? Qt(n) ? (Kt(n) && n.preventDefault(), Jt(n)) : {
  x: null
} : jt(n, t), Zt = (n) => n.targetTouches !== void 0, Qt = (n) => n.targetTouches.length === 1, Kt = (n) => n.type === "touchmove";
function en(n, t = {}) {
  const {
    onPositionChange: e,
    throttleMs: r = 16
  } = t, s = z({
    x: null,
    y: null
  }), [i, a] = dt({
    x: null,
    y: null
  }), l = z(0), u = z(null), d = K((v) => {
    if (s.current = v, e) {
      const h = Date.now();
      r <= 0 || h - l.current >= r ? (a(v), e(v), l.current = h) : (u.current && clearTimeout(u.current), u.current = setTimeout(() => {
        a(v), e(v), l.current = Date.now();
      }, r - (h - l.current)));
    }
  }, [e, r]), p = K((v) => {
    try {
      const h = n.current;
      if (!h) {
        d({
          x: null,
          y: null
        });
        return;
      }
      const c = jt(v, h);
      d(c);
    } catch {
      d({
        x: null,
        y: null
      });
    }
  }, [n, d]), E = K((v) => {
    const h = n.current;
    if (!h || v.targetTouches.length !== 1)
      return;
    const c = v.targetTouches[0], _ = h.offsetParent;
    if (_)
      try {
        const k = c.pageX - _.offsetLeft, C = c.pageY - _.offsetTop, y = h, N = y.width, $ = y.height;
        N > 0 && $ > 0 ? d({
          x: k / N * 100,
          y: C / $ * 100
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
  }, [n, d]), w = K((v) => {
    d({
      x: null,
      y: null
    });
  }, [d]), g = K((v) => {
    d({
      x: null,
      y: null
    });
  }, [d]), x = K(() => s.current, []);
  return de(() => () => {
    u.current && clearTimeout(u.current);
  }, []), {
    mousePosition: e ? i : s.current,
    handlers: {
      onMouseMove: p,
      onMouseLeave: w,
      onTouchMove: E,
      onTouchLeave: g
    },
    getCurrentMousePosition: x
  };
}
function tn(n) {
  const t = I.c(12), {
    annotations: e,
    selectors: r,
    imageRef: s,
    enableEditing: i
  } = n;
  let a, l;
  t[0] !== r ? (l = new Map(r.map(on)), t[0] = r, t[1] = l) : l = t[1], a = l;
  const u = a;
  let d;
  t[2] !== u ? (d = (x) => {
    if (x)
      return u.get(x);
  }, t[2] = u, t[3] = d) : d = t[3];
  const p = d;
  let E;
  t[4] !== e || t[5] !== i || t[6] !== p || t[7] !== s ? (E = (x, v) => {
    const h = s.current;
    if (!h || x === null || v === null)
      return;
    const c = {
      x,
      y: v
    }, _ = e.map((C) => {
      const {
        geometry: y
      } = C;
      if (!y)
        return null;
      const N = p(y.type);
      if (!N)
        return null;
      let $ = y;
      return i && y.type === "RECTANGLE" && typeof y.x == "number" && typeof y.y == "number" && typeof y.width == "number" && typeof y.height == "number" && ($ = {
        ...y,
        x: Math.max(0, y.x - 2),
        y: Math.max(0, y.y - 2),
        width: Math.min(100 - y.x + 2, y.width + 4),
        height: Math.min(100 - y.y + 2, y.height + 4)
      }), N.intersects(c, $, h) ? C : null;
    }).filter(nn);
    return _.length === 0 ? void 0 : _.sort((C, y) => {
      const N = p(C.geometry.type), $ = p(y.geometry.type);
      return !N || !$ ? 0 : N.area(C.geometry, h) - $.area(y.geometry, h);
    })[0];
  }, t[4] = e, t[5] = i, t[6] = p, t[7] = s, t[8] = E) : E = t[8];
  const w = E;
  let g;
  return t[9] !== p || t[10] !== w ? (g = {
    getTopAnnotationAt: w,
    getSelectorByType: p
  }, t[9] = p, t[10] = w, t[11] = g) : g = t[11], g;
}
function nn(n) {
  return n !== null;
}
function on(n) {
  return [n.TYPE, n];
}
function rn(n) {
  const t = I.c(17), {
    targetRef: e,
    imageRef: r,
    annotations: s,
    selectors: i,
    enableEditing: a,
    throttleMs: l
  } = n, u = l === void 0 ? 50 : l, [d, p] = dt(void 0), E = z(void 0), w = z(void 0);
  let g;
  t[0] !== s || t[1] !== a || t[2] !== r || t[3] !== i ? (g = {
    annotations: s,
    selectors: i,
    imageRef: r,
    enableEditing: a
  }, t[0] = s, t[1] = a, t[2] = r, t[3] = i, t[4] = g) : g = t[4];
  const {
    getTopAnnotationAt: x
  } = tn(g);
  let v;
  t[5] !== x ? (v = (F) => {
    var D;
    const {
      x: L,
      y: ee
    } = F, A = x(L, ee), Y = (D = A == null ? void 0 : A.data) == null ? void 0 : D.id;
    Y !== w.current && (w.current = Y, E.current = A, p(A));
  }, t[5] = x, t[6] = v) : v = t[6];
  const h = v;
  let c;
  t[7] !== h || t[8] !== u ? (c = {
    onPositionChange: h,
    throttleMs: u
  }, t[7] = h, t[8] = u, t[9] = c) : c = t[9];
  const {
    handlers: _
  } = en(e, c);
  let k;
  t[10] === Symbol.for("react.memo_cache_sentinel") ? (k = () => {
    p(void 0), E.current = void 0, w.current = void 0;
  }, t[10] = k) : k = t[10];
  let C;
  t[11] !== s || t[12] !== i ? (C = [s, i], t[11] = s, t[12] = i, t[13] = C) : C = t[13], de(k, C);
  let y;
  y = _;
  const N = y;
  let $;
  return t[14] !== d || t[15] !== N ? ($ = {
    hoveredAnnotation: d,
    mouseHandlers: N
  }, t[14] = d, t[15] = N, t[16] = $) : $ = t[16], $;
}
function sn({
  selectors: n,
  effectiveType: t,
  value: e,
  onChange: r,
  disableAnnotation: s
}) {
  const i = K((l) => {
    if (l)
      return n.find((u) => u.TYPE === l);
  }, [n]);
  return {
    callSelectorMethod: K((l, u) => {
      if (s)
        return;
      const d = i(t);
      if (!(d != null && d.methods[l]))
        return;
      const p = d.methods[l];
      try {
        const E = p(e || {}, u);
        if (typeof E > "u") {
          process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(l)} of type ${t} returned undefined. Make sure to explicitly return the previous state or new state.`);
          return;
        }
        r == null || r(E);
      } catch (E) {
        process.env.NODE_ENV !== "production" && console.error(`Error calling selector method ${String(l)}:`, E);
      }
    }, [s, i, t, e, r]),
    getSelectorByType: i
  };
}
const ut = O.div`
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
`, cn = O.div`
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
function At(n) {
  const t = I.c(3), {
    geometry: e
  } = n.annotation;
  if (!e)
    return null;
  const r = `${e.y}%`, s = `${e.x}%`;
  let i;
  return t[0] !== r || t[1] !== s ? (i = /* @__PURE__ */ T.jsx(cn, { style: {
    top: r,
    left: s
  } }), t[0] = r, t[1] = s, t[2] = i) : i = t[2], i;
}
const ln = O.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, an = O.div`
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
`, un = (n) => {
  const t = I.c(11), {
    onChange: e,
    onSubmit: r,
    onFocus: s,
    onBlur: i,
    value: a
  } = n;
  let l;
  t[0] !== i || t[1] !== e || t[2] !== s || t[3] !== a ? (l = /* @__PURE__ */ T.jsx(ln, { children: /* @__PURE__ */ T.jsx("textarea", { placeholder: "Write description", onFocus: s, onBlur: i, onChange: e, value: a }) }), t[0] = i, t[1] = e, t[2] = s, t[3] = a, t[4] = l) : l = t[4];
  let u;
  t[5] !== r || t[6] !== a ? (u = a && /* @__PURE__ */ T.jsx(an, { onClick: r, children: "Submit" }), t[5] = r, t[6] = a, t[7] = u) : u = t[7];
  let d;
  return t[8] !== l || t[9] !== u ? (d = /* @__PURE__ */ T.jsxs(We.Fragment, { children: [
    l,
    u
  ] }), t[8] = l, t[9] = u, t[10] = d) : d = t[10], d;
}, fn = Ut`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, dn = O.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${fn} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, hn = (n) => {
  var _;
  const t = I.c(17), {
    annotation: e,
    onChange: r,
    onSubmit: s,
    className: i,
    style: a
  } = n, l = i === void 0 ? "" : i;
  let u;
  t[0] !== a ? (u = a === void 0 ? {} : a, t[0] = a, t[1] = u) : u = t[1];
  const d = u, {
    geometry: p
  } = e;
  if (!p)
    return null;
  const E = `${p.x}%`, w = `${p.y + p.height}%`;
  let g;
  t[2] !== d || t[3] !== E || t[4] !== w ? (g = {
    position: "absolute",
    left: E,
    top: w,
    ...d
  }, t[2] = d, t[3] = E, t[4] = w, t[5] = g) : g = t[5];
  let x;
  t[6] !== e || t[7] !== r ? (x = (k) => r({
    ...e,
    data: {
      ...e.data,
      text: k.target.value
    }
  }), t[6] = e, t[7] = r, t[8] = x) : x = t[8];
  const v = (_ = e.data) == null ? void 0 : _.text;
  let h;
  t[9] !== s || t[10] !== x || t[11] !== v ? (h = /* @__PURE__ */ T.jsx(un, { onChange: x, onSubmit: s, value: v }), t[9] = s, t[10] = x, t[11] = v, t[12] = h) : h = t[12];
  let c;
  return t[13] !== l || t[14] !== g || t[15] !== h ? (c = /* @__PURE__ */ T.jsx(dn, { className: l, style: g, children: h }), t[13] = l, t[14] = g, t[15] = h, t[16] = c) : c = t[16], c;
}, Fe = O.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, mn = O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Yt(n) {
  const t = I.c(21), {
    geometry: e
  } = n.annotation;
  if (!e)
    return null;
  const r = `${e.y}%`;
  let s;
  t[0] !== r ? (s = /* @__PURE__ */ T.jsx(Fe, { style: {
    height: r,
    width: "100%"
  } }), t[0] = r, t[1] = s) : s = t[1];
  const i = `${e.y}%`, a = `${e.height}%`, l = `${e.x}%`;
  let u;
  t[2] !== i || t[3] !== a || t[4] !== l ? (u = /* @__PURE__ */ T.jsx(Fe, { style: {
    top: i,
    height: a,
    width: l
  } }), t[2] = i, t[3] = a, t[4] = l, t[5] = u) : u = t[5];
  const d = `${e.y}%`, p = `${e.x + e.width}%`, E = `${e.height}%`, w = `${100 - (e.x + e.width)}%`;
  let g;
  t[6] !== d || t[7] !== p || t[8] !== E || t[9] !== w ? (g = /* @__PURE__ */ T.jsx(Fe, { style: {
    top: d,
    left: p,
    height: E,
    width: w
  } }), t[6] = d, t[7] = p, t[8] = E, t[9] = w, t[10] = g) : g = t[10];
  const x = `${e.y + e.height}%`, v = `${100 - (e.y + e.height)}%`;
  let h;
  t[11] !== x || t[12] !== v ? (h = /* @__PURE__ */ T.jsx(Fe, { style: {
    top: x,
    height: v,
    width: "100%"
  } }), t[11] = x, t[12] = v, t[13] = h) : h = t[13];
  let c;
  return t[14] !== n.className || t[15] !== n.style || t[16] !== s || t[17] !== g || t[18] !== h || t[19] !== u ? (c = /* @__PURE__ */ T.jsxs(mn, { className: n.className, style: n.style, children: [
    s,
    u,
    g,
    h
  ] }), t[14] = n.className, t[15] = n.style, t[16] = s, t[17] = g, t[18] = h, t[19] = u, t[20] = c) : c = t[20], c;
}
Yt.defaultProps = {
  className: "",
  style: {}
};
const pn = O.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function It(n) {
  const t = I.c(10), {
    geometry: e
  } = n.annotation;
  if (!e)
    return null;
  const r = `${e.x}%`, s = `${e.y}%`, i = `${e.height}%`, a = `${e.width}%`, l = n.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  t[0] !== n.style || t[1] !== r || t[2] !== s || t[3] !== i || t[4] !== a || t[5] !== l ? (u = {
    position: "absolute",
    left: r,
    top: s,
    height: i,
    width: a,
    boxShadow: l,
    ...n.style
  }, t[0] = n.style, t[1] = r, t[2] = s, t[3] = i, t[4] = a, t[5] = l, t[6] = u) : u = t[6];
  let d;
  return t[7] !== n.className || t[8] !== u ? (d = /* @__PURE__ */ T.jsx(pn, { className: n.className, style: u }), t[7] = n.className, t[8] = u, t[9] = d) : d = t[9], d;
}
It.defaultProps = {
  className: "",
  style: {}
};
const gn = O.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function ft(n) {
  const t = I.c(10), {
    geometry: e
  } = n.annotation;
  if (!e)
    return null;
  const r = `${e.x}%`, s = `${e.y}%`, i = `${e.height}%`, a = `${e.width}%`, l = n.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  t[0] !== n.style || t[1] !== r || t[2] !== s || t[3] !== i || t[4] !== a || t[5] !== l ? (u = {
    position: "absolute",
    left: r,
    top: s,
    height: i,
    width: a,
    boxShadow: l,
    ...n.style
  }, t[0] = n.style, t[1] = r, t[2] = s, t[3] = i, t[4] = a, t[5] = l, t[6] = u) : u = t[6];
  let d;
  return t[7] !== n.className || t[8] !== u ? (d = /* @__PURE__ */ T.jsx(gn, { className: n.className, style: u }), t[7] = n.className, t[8] = u, t[9] = d) : d = t[9], d;
}
ft.defaultProps = {
  className: "",
  style: {}
};
const xn = O.div`
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
function Lt(n) {
  const t = I.c(8), {
    geometry: e
  } = n.annotation;
  if (!e || typeof e.x > "u" || typeof e.y > "u" || typeof e.width > "u" || typeof e.height > "u")
    return null;
  const r = `${e.x}%`, s = `${e.y + e.height}%`;
  let i;
  t[0] !== n.style || t[1] !== r || t[2] !== s ? (i = {
    position: "absolute",
    left: r,
    top: s,
    ...n.style
  }, t[0] = n.style, t[1] = r, t[2] = s, t[3] = i) : i = t[3];
  const a = n.annotation.data && n.annotation.data.text;
  let l;
  return t[4] !== n.className || t[5] !== i || t[6] !== a ? (l = /* @__PURE__ */ T.jsx(xn, { style: i, className: n.className, children: a }), t[4] = n.className, t[5] = i, t[6] = a, t[7] = l) : l = t[7], l;
}
Lt.defaultProps = {
  style: {},
  className: ""
};
const Dt = "RECTANGLE";
function vn({
  x: n,
  y: t
}, e, r) {
  if (!e) return !1;
  const s = Math.min(e.x, e.x + e.width), i = Math.max(e.x, e.x + e.width), a = Math.min(e.y, e.y + e.height), l = Math.max(e.y, e.y + e.height);
  return !(n < s || t < a || n > i || t > l);
}
function bn(n, t) {
  if (!n || n.width <= 0 || n.height <= 0) return 0;
  const e = Math.abs(n.width), r = Math.abs(n.height);
  return e * r;
}
const En = {
  onTouchStart(n, t) {
    return Ct(n, t);
  },
  onTouchEnd(n, t) {
    return $t(n);
  },
  onTouchMove(n, t) {
    return kt(n, t);
  },
  onMouseDown(n, t) {
    return Ct(n, t);
  },
  onMouseUp(n, t) {
    return $t(n);
  },
  onMouseMove(n, t) {
    return kt(n, t);
  }
};
function Ct(n, t) {
  if (n.selection)
    return {};
  {
    const {
      x: e,
      y: r
    } = oe(t);
    return {
      ...n,
      selection: {
        ...n.selection,
        mode: "SELECTING",
        anchorX: e,
        anchorY: r
      }
    };
  }
}
function $t(n, t) {
  if (n.selection) {
    const {
      selection: e,
      geometry: r
    } = n;
    if (!r)
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
function kt(n, t) {
  if (n.selection && n.selection.mode === "SELECTING") {
    const {
      anchorX: e,
      anchorY: r
    } = n.selection, {
      x: s,
      y: i
    } = oe(t), a = s - e, l = i - r;
    return {
      ...n,
      geometry: {
        ...n.geometry,
        type: Dt,
        x: a > 0 ? e : s,
        y: l > 0 ? r : i,
        width: Math.abs(a),
        height: Math.abs(l)
      }
    };
  }
  return n;
}
const Ve = {
  TYPE: Dt,
  intersects: vn,
  area: bn,
  methods: En
}, Pt = 6, yn = (n = {
  width: 100,
  height: 100
}) => ({
  marginX: Pt / n.width * 100,
  marginY: Pt / n.height * 100
}), Gt = "POINT";
function Tn({
  x: n,
  y: t
}, e, r) {
  if (!e) return !1;
  const {
    marginX: s,
    marginY: i
  } = yn(r), a = Math.min(s, i) / 2, l = Math.abs(n - e.x), u = Math.abs(t - e.y);
  return l <= a && u <= a;
}
function wn(n, t) {
  return 0;
}
const Rn = {
  onClick(n, t) {
    return n.geometry ? {} : {
      ...n,
      selection: {
        ...n.selection,
        showEditor: !0,
        mode: "EDITING"
      },
      geometry: {
        ...n.geometry,
        ...oe(t),
        width: 0,
        height: 0,
        type: Gt
      }
    };
  }
}, qe = {
  TYPE: Gt,
  intersects: Tn,
  area: wn,
  methods: Rn
}, Be = (n) => Math.pow(n, 2), ht = "OVAL";
function _n({
  x: n,
  y: t
}, e, r) {
  if (!e || !e.width || !e.height) return !1;
  const s = Math.abs(e.width), i = Math.abs(e.height), a = {
    x: e.x + s / 2,
    y: e.y + i / 2
  }, l = s / 2, u = i / 2;
  if (l === 0 || u === 0) return !1;
  const d = n - a.x, p = t - a.y;
  return Be(d) / Be(l) + Be(p) / Be(u) <= 1;
}
function Mn(n, t) {
  if (!n || n.width <= 0 || n.height <= 0) return 0;
  const e = Math.abs(n.width), r = Math.abs(n.height);
  return Math.PI * (e / 2) * (r / 2);
}
const Sn = {
  onTouchStart(n, t) {
    return Nn(n, t);
  },
  onTouchEnd(n, t) {
    return An(n);
  },
  onTouchMove(n, t) {
    return Cn(n, t);
  },
  onMouseDown(n, t) {
    if (!n.geometry) {
      const {
        x: e,
        y: r
      } = oe(t);
      return {
        ...n,
        selection: {
          ...n.selection,
          mode: "SELECTING",
          anchorX: e,
          anchorY: r
        }
      };
    }
    return n;
  },
  onMouseUp(n, t) {
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
  onMouseMove(n, t) {
    if (n.selection && n.selection.mode === "SELECTING") {
      const {
        anchorX: e,
        anchorY: r
      } = n.selection, {
        x: s,
        y: i
      } = oe(t);
      return {
        ...n,
        geometry: {
          ...n.geometry,
          type: ht,
          x: Math.min(e, s),
          y: Math.min(r, i),
          width: Math.abs(s - e),
          height: Math.abs(i - r)
        }
      };
    }
    return n;
  }
};
function Nn(n, t) {
  if (n.selection)
    return {};
  {
    const {
      x: e,
      y: r
    } = oe(t);
    return {
      ...n,
      selection: {
        ...n.selection,
        mode: "SELECTING",
        anchorX: e,
        anchorY: r
      }
    };
  }
}
function An(n, t) {
  if (n.selection) {
    const {
      selection: e,
      geometry: r
    } = n;
    if (!r)
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
function Cn(n, t) {
  if (n.selection && n.selection.mode === "SELECTING") {
    const {
      anchorX: e,
      anchorY: r
    } = n.selection, {
      x: s,
      y: i
    } = oe(t), a = s - e, l = i - r;
    return {
      ...n,
      geometry: {
        ...n.geometry,
        type: ht,
        x: a > 0 ? e : s,
        y: l > 0 ? r : i,
        width: Math.abs(a),
        height: Math.abs(l)
      }
    };
  }
  return n;
}
const lt = {
  TYPE: ht,
  intersects: _n,
  area: Mn,
  methods: Sn
}, Ot = {
  // Basic settings
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  allowTouch: !1,
  // Selectors configuration
  type: Ve.TYPE,
  selectors: [Ve, qe, lt],
  // Comparator for active annotations
  activeAnnotationComparator: (n, t) => n === t,
  // Editing functionality defaults
  enableEditing: !1,
  onAnnotationsChange: () => {
    process.env.NODE_ENV !== "production" && console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.");
  },
  // Render functions with improved typing
  renderSelector: ({
    annotation: n
  }) => {
    var t;
    switch ((t = n.geometry) == null ? void 0 : t.type) {
      case Ve.TYPE:
        return /* @__PURE__ */ T.jsx(Yt, { annotation: n });
      case qe.TYPE:
        return /* @__PURE__ */ T.jsx(At, { annotation: n });
      case lt.TYPE:
        return /* @__PURE__ */ T.jsx(ft, { annotation: n });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: n,
    onChange: t,
    onSubmit: e
  }) => /* @__PURE__ */ T.jsx(hn, { annotation: n, onChange: t, onSubmit: e }),
  renderHighlight: ({
    key: n,
    annotation: t,
    active: e
  }) => {
    switch (t.geometry.type) {
      case Ve.TYPE:
        return /* @__PURE__ */ T.jsx(It, { annotation: t, active: e }, n);
      case qe.TYPE:
        return /* @__PURE__ */ T.jsx(At, { annotation: t }, n);
      case lt.TYPE:
        return /* @__PURE__ */ T.jsx(ft, { annotation: t, active: e }, n);
      default:
        return null;
    }
  },
  renderContent: ({
    key: n,
    annotation: t
  }) => /* @__PURE__ */ T.jsx(Lt, { annotation: t }, n),
  renderOverlay: ({
    type: n,
    annotation: t
  } = {}) => {
    switch (n) {
      case qe.TYPE:
        return /* @__PURE__ */ T.jsx(ut, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ T.jsx(ut, { children: "Click and Drag to Annotate" });
    }
  }
}, $n = O.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${ut} {
    opacity: 1;
  }

  touch-action: ${(n) => n.$allowTouch ? "pinch-zoom" : "auto"};
`, kn = O.img`
  display: block;
  width: 100%;
  user-select: none;
`, Pn = O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, On = O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function at(n, t) {
  n && (typeof n == "function" ? n(t) : n.current = t);
}
const jn = Ht((n, t) => {
  var pt, gt, xt, vt, bt, Et, yt;
  const e = I.c(131);
  let r;
  const s = n.selectors ?? Ot.selectors;
  let i;
  e[0] !== n || e[1] !== s ? (i = {
    ...Ot,
    ...n,
    selectors: s
  }, e[0] = n, e[1] = s, e[2] = i) : i = e[2], r = i;
  const a = r, {
    src: l,
    alt: u,
    style: d,
    className: p,
    containerRef: E,
    imageRef: w,
    children: g,
    annotations: x,
    type: v,
    selectors: h,
    value: c,
    onChange: _,
    onSubmit: k,
    activeAnnotationComparator: C,
    activeAnnotations: y,
    editModeAnnotationIds: N,
    disableAnnotation: $,
    disableSelector: F,
    disableEditor: L,
    disableOverlay: ee,
    allowTouch: A,
    renderSelector: Y,
    renderEditor: D,
    renderHighlight: V,
    renderContent: G,
    renderOverlay: te,
    onImageMouseUp: q,
    onImageMouseDown: B,
    onImageMouseMove: W,
    onImageClick: J
  } = a, o = u === void 0 ? "Annotation Image" : u, m = z(null), R = z(null), M = !L;
  let U;
  e[3] !== x || e[4] !== h || e[5] !== M ? (U = {
    targetRef: R,
    imageRef: m,
    annotations: x,
    selectors: h,
    enableEditing: M,
    throttleMs: 50
  }, e[3] = x, e[4] = h, e[5] = M, e[6] = U) : U = e[6];
  const {
    hoveredAnnotation: he,
    mouseHandlers: b
  } = rn(U), j = v || ((pt = h[0]) == null ? void 0 : pt.TYPE);
  let Z;
  e[7] !== $ || e[8] !== j || e[9] !== _ || e[10] !== h || e[11] !== c ? (Z = {
    selectors: h,
    effectiveType: j,
    value: c,
    onChange: _,
    disableAnnotation: $
  }, e[7] = $, e[8] = j, e[9] = _, e[10] = h, e[11] = c, e[12] = Z) : Z = e[12];
  const {
    callSelectorMethod: S
  } = sn(Z), mt = z(null);
  let xe;
  e[13] !== A || e[14] !== S ? (xe = (f) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && A && f.preventDefault(), S("onTouchStart", f);
  }, e[13] = A, e[14] = S, e[15] = xe) : xe = e[15];
  const ve = xe;
  let be;
  e[16] !== S ? (be = (f) => {
    S("onTouchEnd", f);
  }, e[16] = S, e[17] = be) : be = e[17];
  const Ee = be;
  let ye;
  e[18] !== A || e[19] !== S || e[20] !== b ? (ye = (f) => {
    b.onTouchMove(f), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && A && f.preventDefault(), S("onTouchMove", f);
  }, e[18] = A, e[19] = S, e[20] = b, e[21] = ye) : ye = e[21];
  const Te = ye;
  let we;
  e[22] !== b ? (we = (f) => {
    b.onTouchLeave(f);
  }, e[22] = b, e[23] = we) : we = e[23];
  const me = we;
  let Re, _e;
  e[24] !== A || e[25] !== Ee || e[26] !== me || e[27] !== Te || e[28] !== ve ? (Re = () => {
    const f = R.current;
    if (!(!A || !f))
      return f.ontouchstart = ve, f.ontouchend = Ee, f.ontouchmove = Te, f.ontouchcancel = me, () => {
        f && (f.ontouchstart = null, f.ontouchend = null, f.ontouchmove = null, f.ontouchcancel = null);
      };
  }, _e = [A, ve, Ee, Te, me], e[24] = A, e[25] = Ee, e[26] = me, e[27] = Te, e[28] = ve, e[29] = Re, e[30] = _e) : (Re = e[29], _e = e[30]), de(Re, _e);
  let Me;
  e[31] !== t || e[32] !== w ? (Me = (f) => {
    m.current = f, at(t, f), at(w, f);
  }, e[31] = t, e[32] = w, e[33] = Me) : Me = e[33];
  const Je = Me;
  let Se;
  e[34] === Symbol.for("react.memo_cache_sentinel") ? (Se = (f) => {
    R.current = f;
  }, e[34] = Se) : Se = e[34];
  const Xt = Se;
  let Ne;
  e[35] !== E ? (Ne = (f) => {
    at(E, f);
  }, e[35] = E, e[36] = Ne) : Ne = e[36];
  const Ze = Ne;
  let Ae;
  e[37] !== S || e[38] !== b || e[39] !== W ? (Ae = (f) => {
    b.onMouseMove(f.nativeEvent), W == null || W(f), S("onMouseMove", f);
  }, e[37] = S, e[38] = b, e[39] = W, e[40] = Ae) : Ae = e[40];
  const Qe = Ae;
  let Ce;
  e[41] !== b ? (Ce = (f) => {
    b.onMouseLeave(f.nativeEvent);
  }, e[41] = b, e[42] = Ce) : Ce = e[42];
  const Ke = Ce;
  let $e;
  e[43] !== S || e[44] !== q ? ($e = (f) => {
    q == null || q(f), S("onMouseUp", f);
  }, e[43] = S, e[44] = q, e[45] = $e) : $e = e[45];
  const et = $e;
  let ke;
  e[46] !== S || e[47] !== B ? (ke = (f) => {
    B == null || B(f), S("onMouseDown", f);
  }, e[46] = S, e[47] = B, e[48] = ke) : ke = e[48];
  const tt = ke;
  let Pe;
  e[49] !== S || e[50] !== J ? (Pe = (f) => {
    J == null || J(f), S("onClick", f);
  }, e[49] = S, e[50] = J, e[51] = Pe) : Pe = e[51];
  const nt = Pe;
  let Oe;
  e[52] !== k || e[53] !== c ? (Oe = () => {
    k && c && k(c);
  }, e[52] = k, e[53] = c, e[54] = Oe) : Oe = e[54];
  const ot = Oe;
  let je;
  e[55] !== _ || e[56] !== (c == null ? void 0 : c.geometry) || e[57] !== ((gt = c == null ? void 0 : c.selection) == null ? void 0 : gt.showEditor) ? (je = (f) => {
    var P;
    f.key === "Escape" && _ && ((P = c == null ? void 0 : c.selection) != null && P.showEditor || c != null && c.geometry) && _({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, e[55] = _, e[56] = c == null ? void 0 : c.geometry, e[57] = (xt = c == null ? void 0 : c.selection) == null ? void 0 : xt.showEditor, e[58] = je) : je = e[58];
  const ne = je;
  let Ye;
  e[59] !== ne || e[60] !== ((vt = c == null ? void 0 : c.selection) == null ? void 0 : vt.showEditor) ? (Ye = () => {
    var f;
    if ((f = c == null ? void 0 : c.selection) != null && f.showEditor)
      return window.addEventListener("keydown", ne), () => window.removeEventListener("keydown", ne);
  }, e[59] = ne, e[60] = (bt = c == null ? void 0 : c.selection) == null ? void 0 : bt.showEditor, e[61] = Ye) : Ye = e[61];
  const rt = (Et = c == null ? void 0 : c.selection) == null ? void 0 : Et.showEditor;
  let Ie;
  e[62] !== ne || e[63] !== rt ? (Ie = [rt, ne], e[62] = ne, e[63] = rt, e[64] = Ie) : Ie = e[64], de(Ye, Ie);
  let Le, De;
  e[65] === Symbol.for("react.memo_cache_sentinel") ? (Le = () => () => {
    mt.current && clearTimeout(mt.current);
  }, De = [], e[65] = Le, e[66] = De) : (Le = e[65], De = e[66]), de(Le, De);
  const X = he;
  let Ge;
  e[67] !== C || e[68] !== y ? (Ge = (f, P) => y && y.some((Q) => C ? C(f, Q) : f.data.id === Q) || P === f, e[67] = C, e[68] = y, e[69] = Ge) : Ge = e[69];
  const H = Ge, st = me;
  let re;
  e[70] !== o || e[71] !== Je || e[72] !== l ? (re = /* @__PURE__ */ T.jsx(kn, { ref: Je, src: l, alt: o }), e[70] = o, e[71] = Je, e[72] = l, e[73] = re) : re = e[73];
  let se;
  if (e[74] !== x || e[75] !== V || e[76] !== H || e[77] !== X) {
    let f;
    e[79] !== V || e[80] !== H || e[81] !== X ? (f = (P) => {
      var Q;
      if (!((Q = P.data) != null && Q.id))
        return null;
      const He = H(P, X);
      return V ? V({
        key: P.data.id,
        annotation: P,
        active: He
      }) : null;
    }, e[79] = V, e[80] = H, e[81] = X, e[82] = f) : f = e[82], se = x.map(f), e[74] = x, e[75] = V, e[76] = H, e[77] = X, e[78] = se;
  } else
    se = e[78];
  let ie;
  e[83] !== F || e[84] !== Y || e[85] !== c ? (ie = !F && (c == null ? void 0 : c.geometry) && Y && Y({
    annotation: c
  }), e[83] = F, e[84] = Y, e[85] = c, e[86] = ie) : ie = e[86];
  let ce;
  e[87] !== se || e[88] !== ie ? (ce = /* @__PURE__ */ T.jsxs(Pn, { children: [
    se,
    ie
  ] }), e[87] = se, e[88] = ie, e[89] = ce) : ce = e[89];
  let le;
  e[90] !== nt || e[91] !== tt || e[92] !== et ? (le = /* @__PURE__ */ T.jsx(On, { ref: Xt, "data-testid": "annotation-target", onClick: nt, onMouseUp: et, onMouseDown: tt }), e[90] = nt, e[91] = tt, e[92] = et, e[93] = le) : le = e[93];
  let ae;
  e[94] !== ee || e[95] !== j || e[96] !== te || e[97] !== c ? (ae = !ee && te && te({
    type: j,
    annotation: c
  }), e[94] = ee, e[95] = j, e[96] = te, e[97] = c, e[98] = ae) : ae = e[98];
  let ue;
  if (e[99] !== x || e[100] !== N || e[101] !== G || e[102] !== H || e[103] !== X) {
    let f;
    e[105] !== N || e[106] !== G || e[107] !== H || e[108] !== X ? (f = (P) => {
      var Q;
      if (!((Q = P.data) != null && Q.id))
        return null;
      const He = (N == null ? void 0 : N.includes(P.data.id)) || !1;
      return (H(P, X) || He) && G != null ? G({
        key: P.data.id,
        annotation: P
      }) : null;
    }, e[105] = N, e[106] = G, e[107] = H, e[108] = X, e[109] = f) : f = e[109], ue = x.map(f), e[99] = x, e[100] = N, e[101] = G, e[102] = H, e[103] = X, e[104] = ue;
  } else
    ue = e[104];
  let fe;
  e[110] !== L || e[111] !== ot || e[112] !== _ || e[113] !== D || e[114] !== c ? (fe = !L && ((yt = c == null ? void 0 : c.selection) == null ? void 0 : yt.showEditor) && D && _ && D({
    annotation: c,
    onChange: _,
    onSubmit: ot
  }), e[110] = L, e[111] = ot, e[112] = _, e[113] = D, e[114] = c, e[115] = fe) : fe = e[115];
  let Xe;
  return e[116] !== A || e[117] !== g || e[118] !== p || e[119] !== Ke || e[120] !== Qe || e[121] !== Ze || e[122] !== d || e[123] !== st || e[124] !== re || e[125] !== ce || e[126] !== le || e[127] !== ae || e[128] !== ue || e[129] !== fe ? (Xe = /* @__PURE__ */ T.jsxs($n, { ref: Ze, style: d, className: p, onMouseLeave: Ke, onTouchCancel: st, onMouseMove: Qe, $allowTouch: A, children: [
    re,
    ce,
    le,
    ae,
    ue,
    fe,
    g
  ] }), e[116] = A, e[117] = g, e[118] = p, e[119] = Ke, e[120] = Qe, e[121] = Ze, e[122] = d, e[123] = st, e[124] = re, e[125] = ce, e[126] = le, e[127] = ae, e[128] = ue, e[129] = fe, e[130] = Xe) : Xe = e[130], Xe;
});
jn.displayName = "Annotation";
function Yn(n, t) {
  if (!n || typeof n.getBoundingClientRect != "function")
    return !1;
  const {
    pageX: e,
    pageY: r
  } = t, {
    left: s,
    right: i,
    bottom: a,
    top: l
  } = n.getBoundingClientRect();
  return e > s && e < i && r > l && r < a;
}
function Gn() {
  const n = I.c(5), [t, e] = dt(!1), r = z(null);
  let s, i;
  n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
    const d = (p) => {
      const E = r.current, w = {
        pageX: p.pageX,
        pageY: p.pageY
      }, g = Yn(E, w);
      e(g);
    };
    return document.addEventListener("mousemove", d, {
      passive: !0
    }), () => {
      document.removeEventListener("mousemove", d);
    };
  }, i = [], n[0] = s, n[1] = i) : (s = n[0], i = n[1]), de(s, i);
  let a;
  n[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (d) => {
    r.current = d;
  }, n[2] = a) : a = n[2];
  const l = a;
  let u;
  return n[3] !== t ? (u = {
    isHoveringOver: t,
    setRef: l
  }, n[3] = t, n[4] = u) : u = n[4], u;
}
export {
  jn as Annotation,
  lt as OvalSelector,
  qe as PointSelector,
  Ve as RectangleSelector,
  jn as default,
  tn as useAnnotationHitDetection,
  Gn as useMouseHover,
  en as useRelativeMousePosition,
  sn as useSelectorMethods
};
