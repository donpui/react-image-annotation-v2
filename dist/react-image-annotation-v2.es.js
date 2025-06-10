import fe, { useState as Ge, useCallback as T, useRef as J, useMemo as ot, useEffect as de, Profiler as rt } from "react";
import C, { keyframes as st } from "styled-components";
var se = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function it() {
  if (Ce) return ee;
  Ce = 1;
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
var Se;
function ct() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    function t(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === Y ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case w:
          return "Fragment";
        case M:
          return "Profiler";
        case y:
          return "StrictMode";
        case D:
          return "Suspense";
        case b:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case v:
            return "Portal";
          case F:
            return (o.displayName || "Context") + ".Provider";
          case k:
            return (o._context.displayName || "Context") + ".Consumer";
          case _:
            var h = o.render;
            return o = o.displayName, o || (o = h.displayName || h.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case P:
            return h = o.displayName || null, h !== null ? h : t(o.type) || "Memo";
          case j:
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
        var E = h.error, N = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return E.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), e(o);
      }
    }
    function r(o) {
      if (o === w) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === j)
        return "<...>";
      try {
        var h = t(o);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var o = X.A;
      return o === null ? null : o.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (U.call(o, "key")) {
        var h = Object.getOwnPropertyDescriptor(o, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function c(o, h) {
      function E() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: E,
        configurable: !0
      });
    }
    function l() {
      var o = t(this.type);
      return ne[o] || (ne[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function f(o, h, E, N, O, S, B, W) {
      return E = S.ref, o = {
        $$typeof: p,
        type: o,
        key: h,
        props: S,
        _owner: O
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(o, "ref", {
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
        value: B
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function m(o, h, E, N, O, S, B, W) {
      var R = h.children;
      if (R !== void 0)
        if (N)
          if (H(R)) {
            for (N = 0; N < R.length; N++)
              d(R[N]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(R);
      if (U.call(h, "key")) {
        R = t(o);
        var G = Object.keys(h).filter(function(he) {
          return he !== "key";
        });
        N = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", Z[R + N] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          R,
          G,
          R
        ), Z[R + N] = !0);
      }
      if (R = null, E !== void 0 && (n(E), R = "" + E), a(h) && (n(h.key), R = "" + h.key), "key" in h) {
        E = {};
        for (var Q in h)
          Q !== "key" && (E[Q] = h[Q]);
      } else E = h;
      return R && c(
        E,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), f(
        o,
        R,
        S,
        O,
        s(),
        E,
        B,
        W
      );
    }
    function d(o) {
      typeof o == "object" && o !== null && o.$$typeof === p && o._store && (o._store.validated = 1);
    }
    var x = fe, p = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), F = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), Y = Symbol.for("react.client.reference"), X = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, H = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(o) {
        return o();
      }
    };
    var q, ne = {}, $ = x["react-stack-bottom-frame"].bind(
      x,
      i
    )(), oe = z(r(i)), Z = {};
    te.Fragment = w, te.jsx = function(o, h, E, N, O) {
      var S = 1e4 > X.recentlyCreatedOwnerStacks++;
      return m(
        o,
        h,
        E,
        !1,
        N,
        O,
        S ? Error("react-stack-top-frame") : $,
        S ? z(r(o)) : oe
      );
    }, te.jsxs = function(o, h, E, N, O) {
      var S = 1e4 > X.recentlyCreatedOwnerStacks++;
      return m(
        o,
        h,
        E,
        !0,
        N,
        O,
        S ? Error("react-stack-top-frame") : $,
        S ? z(r(o)) : oe
      );
    };
  }()), te;
}
var Ae;
function at() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? se.exports = it() : se.exports = ct()), se.exports;
}
var g = at();
const Ue = (t, e) => {
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
}, $e = (t, e, n) => Math.max(t, Math.min(e, n)), lt = (t) => {
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
}, V = (t, e) => ut(t) ? dt(t) ? (ft(t) && t.preventDefault(), lt(t)) : {
  x: null
} : Ue(t, e), ut = (t) => t.targetTouches !== void 0, dt = (t) => t.targetTouches.length === 1, ft = (t) => t.type === "touchmove";
function ht(t) {
  const [e, n] = Ge({
    x: null,
    y: null
  }), r = T((c) => {
    try {
      const l = t.current;
      if (!l) {
        n({
          x: null,
          y: null
        });
        return;
      }
      const f = Ue(c, l);
      n(f);
    } catch {
      n({
        x: null,
        y: null
      });
    }
  }, [t]), s = T((c) => {
    const l = t.current;
    if (!l || c.targetTouches.length !== 1)
      return;
    const f = c.targetTouches[0], m = l.offsetParent;
    if (m)
      try {
        const d = f.pageX - m.offsetLeft, x = f.pageY - m.offsetTop, p = l, v = p.width, w = p.height;
        v > 0 && w > 0 ? n({
          x: d / v * 100,
          y: x / w * 100
        }) : n({
          x: null,
          y: null
        });
      } catch {
        n({
          x: null,
          y: null
        });
      }
  }, [t]), i = T((c) => {
    n({
      x: null,
      y: null
    });
  }, []), a = T((c) => {
    n({
      x: null,
      y: null
    });
  }, []);
  return {
    mousePosition: e,
    handlers: {
      onMouseMove: r,
      onMouseLeave: i,
      onTouchMove: s,
      onTouchLeave: a
    }
  };
}
function mt({
  selectors: t,
  effectiveType: e,
  value: n,
  onChange: r,
  disableAnnotation: s
}) {
  const i = T((c) => {
    if (c)
      return t.find((l) => l.TYPE === c);
  }, [t]);
  return {
    callSelectorMethod: T((c, l) => {
      if (s)
        return;
      const f = i(e);
      if (!(f != null && f.methods[c]))
        return;
      const m = f.methods[c];
      try {
        const d = m(n || {}, l);
        if (typeof d > "u") {
          process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(c)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);
          return;
        }
        r == null || r(d);
      } catch (d) {
        process.env.NODE_ENV !== "production" && console.error(`Error calling selector method ${String(c)}:`, d);
      }
    }, [s, i, e, n, r]),
    getSelectorByType: i
  };
}
var ie = { exports: {} }, pe = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function pt() {
  if (Pe) return pe;
  Pe = 1;
  var t = fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return pe.c = function(e) {
    return t.H.useMemoCache(e);
  }, pe;
}
var ge = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function gt() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    ge.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  }()), ge;
}
var ke;
function xt() {
  return ke || (ke = 1, process.env.NODE_ENV === "production" ? ie.exports = pt() : ie.exports = gt()), ie.exports;
}
var I = xt();
function Et(t) {
  const e = I.c(12), {
    annotations: n,
    selectors: r,
    imageRef: s,
    enableEditing: i
  } = t;
  let a, c;
  e[0] !== r ? (c = new Map(r.map(bt)), e[0] = r, e[1] = c) : c = e[1], a = c;
  const l = a;
  let f;
  e[2] !== l ? (f = (v) => {
    if (v)
      return l.get(v);
  }, e[2] = l, e[3] = f) : f = e[3];
  const m = f;
  let d;
  e[4] !== n || e[5] !== i || e[6] !== m || e[7] !== s ? (d = (v, w) => {
    const y = s.current;
    if (!y || v === null || w === null)
      return;
    const M = {
      x: v,
      y: w
    }, k = n.map((_, D) => {
      var Y;
      const {
        geometry: b
      } = _;
      if (!b)
        return null;
      const P = m(b.type);
      if (!P)
        return console.warn(`🔍 No selector found for type: ${b.type}`), null;
      let j = b;
      i && b.type === "RECTANGLE" && typeof b.x == "number" && typeof b.y == "number" && typeof b.width == "number" && typeof b.height == "number" && (j = {
        ...b,
        x: Math.max(0, b.x - 2),
        y: Math.max(0, b.y - 2),
        width: Math.min(100 - b.x + 2, b.width + 4),
        height: Math.min(100 - b.y + 2, b.height + 4)
      });
      const L = P.intersects(M, j, y);
      return L && console.log(`🎯 Hit detected on annotation ${(Y = _.data) == null ? void 0 : Y.id}:`, {
        point: M,
        testGeometry: j,
        intersects: L
      }), L ? _ : null;
    }).filter(vt);
    return k.length === 0 ? void 0 : k.sort((_, D) => {
      const b = m(_.geometry.type), P = m(D.geometry.type);
      return !b || !P ? 0 : b.area(_.geometry, y) - P.area(D.geometry, y);
    })[0];
  }, e[4] = n, e[5] = i, e[6] = m, e[7] = s, e[8] = d) : d = e[8];
  const x = d;
  let p;
  return e[9] !== m || e[10] !== x ? (p = {
    getTopAnnotationAt: x,
    getSelectorByType: m
  }, e[9] = m, e[10] = x, e[11] = p) : p = e[11], p;
}
function vt(t) {
  return t !== null;
}
function bt(t) {
  return [t.TYPE, t];
}
function yt(t = {}) {
  const {
    logToConsole: e = !1,
    componentName: n = "Component"
  } = t, r = J(0), s = J();
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
const Ee = C.div`
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
`, Tt = C.div`
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
function je(t) {
  const e = I.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`, s = `${n.x}%`;
  let i;
  return e[0] !== r || e[1] !== s ? (i = /* @__PURE__ */ g.jsx(Tt, { style: {
    top: r,
    left: s
  } }), e[0] = r, e[1] = s, e[2] = i) : i = e[2], i;
}
const wt = C.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, Rt = C.div`
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
`, Nt = (t) => {
  const e = I.c(11), {
    onChange: n,
    onSubmit: r,
    onFocus: s,
    onBlur: i,
    value: a
  } = t;
  let c;
  e[0] !== i || e[1] !== n || e[2] !== s || e[3] !== a ? (c = /* @__PURE__ */ g.jsx(wt, { children: /* @__PURE__ */ g.jsx("textarea", { placeholder: "Write description", onFocus: s, onBlur: i, onChange: n, value: a }) }), e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = c) : c = e[4];
  let l;
  e[5] !== r || e[6] !== a ? (l = a && /* @__PURE__ */ g.jsx(Rt, { onClick: r, children: "Submit" }), e[5] = r, e[6] = a, e[7] = l) : l = e[7];
  let f;
  return e[8] !== c || e[9] !== l ? (f = /* @__PURE__ */ g.jsxs(fe.Fragment, { children: [
    c,
    l
  ] }), e[8] = c, e[9] = l, e[10] = f) : f = e[10], f;
}, Mt = st`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, _t = C.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Mt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, Ct = (t) => {
  var k;
  const e = I.c(17), {
    annotation: n,
    onChange: r,
    onSubmit: s,
    className: i,
    style: a
  } = t, c = i === void 0 ? "" : i;
  let l;
  e[0] !== a ? (l = a === void 0 ? {} : a, e[0] = a, e[1] = l) : l = e[1];
  const f = l, {
    geometry: m
  } = n;
  if (!m)
    return null;
  const d = `${m.x}%`, x = `${m.y + m.height}%`;
  let p;
  e[2] !== f || e[3] !== d || e[4] !== x ? (p = {
    position: "absolute",
    left: d,
    top: x,
    ...f
  }, e[2] = f, e[3] = d, e[4] = x, e[5] = p) : p = e[5];
  let v;
  e[6] !== n || e[7] !== r ? (v = (F) => r({
    ...n,
    data: {
      ...n.data,
      text: F.target.value
    }
  }), e[6] = n, e[7] = r, e[8] = v) : v = e[8];
  const w = (k = n.data) == null ? void 0 : k.text;
  let y;
  e[9] !== s || e[10] !== v || e[11] !== w ? (y = /* @__PURE__ */ g.jsx(Nt, { onChange: v, onSubmit: s, value: w }), e[9] = s, e[10] = v, e[11] = w, e[12] = y) : y = e[12];
  let M;
  return e[13] !== c || e[14] !== p || e[15] !== y ? (M = /* @__PURE__ */ g.jsx(_t, { className: c, style: p, children: y }), e[13] = c, e[14] = p, e[15] = y, e[16] = M) : M = e[16], M;
}, ce = C.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, St = C.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Ve(t) {
  const e = I.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`;
  let s;
  e[0] !== r ? (s = /* @__PURE__ */ g.jsx(ce, { style: {
    height: r,
    width: "100%"
  } }), e[0] = r, e[1] = s) : s = e[1];
  const i = `${n.y}%`, a = `${n.height}%`, c = `${n.x}%`;
  let l;
  e[2] !== i || e[3] !== a || e[4] !== c ? (l = /* @__PURE__ */ g.jsx(ce, { style: {
    top: i,
    height: a,
    width: c
  } }), e[2] = i, e[3] = a, e[4] = c, e[5] = l) : l = e[5];
  const f = `${n.y}%`, m = `${n.x + n.width}%`, d = `${n.height}%`, x = `${100 - (n.x + n.width)}%`;
  let p;
  e[6] !== f || e[7] !== m || e[8] !== d || e[9] !== x ? (p = /* @__PURE__ */ g.jsx(ce, { style: {
    top: f,
    left: m,
    height: d,
    width: x
  } }), e[6] = f, e[7] = m, e[8] = d, e[9] = x, e[10] = p) : p = e[10];
  const v = `${n.y + n.height}%`, w = `${100 - (n.y + n.height)}%`;
  let y;
  e[11] !== v || e[12] !== w ? (y = /* @__PURE__ */ g.jsx(ce, { style: {
    top: v,
    height: w,
    width: "100%"
  } }), e[11] = v, e[12] = w, e[13] = y) : y = e[13];
  let M;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== s || e[17] !== p || e[18] !== y || e[19] !== l ? (M = /* @__PURE__ */ g.jsxs(St, { className: t.className, style: t.style, children: [
    s,
    l,
    p,
    y
  ] }), e[14] = t.className, e[15] = t.style, e[16] = s, e[17] = p, e[18] = y, e[19] = l, e[20] = M) : M = e[20], M;
}
Ve.defaultProps = {
  className: "",
  style: {}
};
const At = C.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Fe(t) {
  const e = I.c(10), {
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
  let f;
  return e[7] !== t.className || e[8] !== l ? (f = /* @__PURE__ */ g.jsx(At, { className: t.className, style: l }), e[7] = t.className, e[8] = l, e[9] = f) : f = e[9], f;
}
Fe.defaultProps = {
  className: "",
  style: {}
};
const $t = C.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function ve(t) {
  const e = I.c(10), {
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
  let f;
  return e[7] !== t.className || e[8] !== l ? (f = /* @__PURE__ */ g.jsx($t, { className: t.className, style: l }), e[7] = t.className, e[8] = l, e[9] = f) : f = e[9], f;
}
ve.defaultProps = {
  className: "",
  style: {}
};
const Pt = C.div`
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
  const e = I.c(8), {
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
  return e[4] !== t.className || e[5] !== i || e[6] !== a ? (c = /* @__PURE__ */ g.jsx(Pt, { style: i, className: t.className, children: a }), e[4] = t.className, e[5] = i, e[6] = a, e[7] = c) : c = e[7], c;
}
He.defaultProps = {
  style: {},
  className: ""
};
const ze = "RECTANGLE";
function Ot({
  x: t,
  y: e
}, n, r) {
  if (!n) return !1;
  const s = Math.min(n.x, n.x + n.width), i = Math.max(n.x, n.x + n.width), a = Math.min(n.y, n.y + n.height), c = Math.max(n.y, n.y + n.height);
  return !(t < s || e < a || t > i || e > c);
}
function kt(t, e) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const n = Math.abs(t.width), r = Math.abs(t.height);
  return n * r;
}
const jt = {
  onTouchStart(t, e) {
    return Ye(t, e);
  },
  onTouchEnd(t, e) {
    return Ie(t);
  },
  onTouchMove(t, e) {
    return De(t, e);
  },
  onMouseDown(t, e) {
    return Ye(t, e);
  },
  onMouseUp(t, e) {
    return Ie(t);
  },
  onMouseMove(t, e) {
    return De(t, e);
  }
};
function Ye(t, e) {
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
function Ie(t, e) {
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
function De(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: s,
      y: i
    } = V(e), a = s - n, c = i - r;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: ze,
        x: a > 0 ? n : s,
        y: c > 0 ? r : i,
        width: Math.abs(a),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const ae = {
  TYPE: ze,
  intersects: Ot,
  area: kt,
  methods: jt
}, Le = 6, Yt = (t = {
  width: 100,
  height: 100
}) => ({
  marginX: Le / t.width * 100,
  marginY: Le / t.height * 100
}), qe = "POINT";
function It({
  x: t,
  y: e
}, n, r) {
  if (!n) return !1;
  const {
    marginX: s,
    marginY: i
  } = Yt(r), a = Math.min(s, i) / 2, c = Math.abs(t - n.x), l = Math.abs(e - n.y);
  return c <= a && l <= a;
}
function Dt(t, e) {
  return 0;
}
const Lt = {
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
        type: qe
      }
    };
  }
}, le = {
  TYPE: qe,
  intersects: It,
  area: Dt,
  methods: Lt
}, ue = (t) => Math.pow(t, 2), be = "OVAL";
function Xt({
  x: t,
  y: e
}, n, r) {
  if (!n || !n.width || !n.height) return !1;
  const s = Math.abs(n.width), i = Math.abs(n.height), a = {
    x: n.x + s / 2,
    y: n.y + i / 2
  }, c = s / 2, l = i / 2;
  if (c === 0 || l === 0) return !1;
  const f = t - a.x, m = e - a.y;
  return ue(f) / ue(c) + ue(m) / ue(l) <= 1;
}
function Gt(t, e) {
  if (!t || !t.width || !t.height) return 0;
  const n = Math.abs(t.width), r = Math.abs(t.height);
  return n <= 0 || r <= 0 ? 0 : Math.PI * (n / 2) * (r / 2);
}
const Ut = {
  onTouchStart(t, e) {
    return Vt(t, e);
  },
  onTouchEnd(t, e) {
    return Ft(t);
  },
  onTouchMove(t, e) {
    return Ht(t, e);
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
function Vt(t, e) {
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
function Ft(t, e) {
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
function Ht(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: s,
      y: i
    } = V(e), a = s - n, c = i - r;
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
const xe = {
  TYPE: be,
  intersects: Xt,
  area: Gt,
  methods: Ut
}, Xe = {
  // Basic settings
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  allowTouch: !1,
  // Selectors configuration
  type: ae.TYPE,
  selectors: [ae, le, xe],
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
      case ae.TYPE:
        return /* @__PURE__ */ g.jsx(Ve, { annotation: t });
      case le.TYPE:
        return /* @__PURE__ */ g.jsx(je, { annotation: t });
      case xe.TYPE:
        return /* @__PURE__ */ g.jsx(ve, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ g.jsx(Ct, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case ae.TYPE:
        return /* @__PURE__ */ g.jsx(Fe, { annotation: e, active: n }, t);
      case le.TYPE:
        return /* @__PURE__ */ g.jsx(je, { annotation: e }, t);
      case xe.TYPE:
        return /* @__PURE__ */ g.jsx(ve, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ g.jsx(He, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case le.TYPE:
        return /* @__PURE__ */ g.jsx(Ee, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ g.jsx(Ee, { children: "Click and Drag to Annotate" });
    }
  }
}, zt = C.div`
  clear: both;
  position: relative;
  width: 100%;
  
  &:hover ${Ee} {
    opacity: 1;
  }
  
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, qt = C.img`
  display: block;
  width: 100%;
  user-select: none;
`, Bt = C.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, Wt = C.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`, Kt = (t) => {
  var Re, Ne, Me;
  const e = ot(() => ({
    ...Xe,
    ...t,
    // Handle selectors explicitly to avoid override issues
    selectors: t.selectors ?? Xe.selectors
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
    type: f,
    selectors: m,
    value: d,
    onChange: x,
    onSubmit: p,
    // Active annotation handling
    activeAnnotationComparator: v,
    activeAnnotations: w,
    // Feature toggles
    disableAnnotation: y,
    disableSelector: M,
    disableEditor: k,
    disableOverlay: F,
    allowTouch: _,
    // Render props
    renderSelector: D,
    renderEditor: b,
    renderHighlight: P,
    renderContent: j,
    renderOverlay: L,
    // Event handlers
    onImageMouseUp: Y,
    onImageMouseDown: X,
    onImageMouseMove: U,
    onImageClick: H
  } = e, z = J(null), q = J(null), {
    mousePosition: ne,
    handlers: $
  } = ht(q), {
    logPropsChange: oe
  } = yt({
    logToConsole: !0,
    componentName: "Annotation"
  });
  process.env.NODE_ENV !== "production" && oe(e);
  const Z = f || ((Re = m[0]) == null ? void 0 : Re.TYPE), {
    callSelectorMethod: o
  } = mt({
    selectors: m,
    effectiveType: Z,
    value: d,
    onChange: x,
    disableAnnotation: y
  }), {
    getTopAnnotationAt: h
  } = Et({
    annotations: l,
    selectors: m,
    imageRef: z
  }), E = J(null), {
    x: N,
    y: O
  } = ne, S = T((u) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && _ && u.preventDefault(), o("onTouchStart", u);
  }, [_, o]), B = T((u) => {
    o("onTouchEnd", u);
  }, [o]), W = T((u) => {
    $.onTouchMove(u), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && _ && u.preventDefault(), o("onTouchMove", u);
  }, [$, _, o]), R = T((u) => {
    $.onTouchLeave(u);
  }, [$]);
  de(() => {
    const u = q.current;
    if (!(!_ || !u))
      return u.ontouchstart = S, u.ontouchend = B, u.ontouchmove = W, u.ontouchcancel = R, () => {
        u && (u.ontouchstart = null, u.ontouchend = null, u.ontouchmove = null, u.ontouchcancel = null);
      };
  }, [_, S, B, W, R]);
  const G = T((u) => {
    z.current = u;
  }, []), Q = T((u) => {
    q.current = u;
  }, []), he = T((u) => {
    a && (typeof a == "function" ? a(u) : a.current = u);
  }, [a]), Be = T((u) => {
    $.onMouseMove(u.nativeEvent), U == null || U(u), o("onMouseMove", u);
  }, [$, U, o]), We = T((u) => {
    $.onMouseLeave(u.nativeEvent);
  }, [$]), Je = T((u) => {
    Y == null || Y(u), o("onMouseUp", u);
  }, [Y, o]), Ze = T((u) => {
    X == null || X(u), o("onMouseDown", u);
  }, [X, o]), Qe = T((u) => {
    H == null || H(u), o("onClick", u);
  }, [H, o]), Ke = T(() => {
    p && d && p(d);
  }, [p, d]), me = T((u) => {
    var A;
    u.key === "Escape" && x && ((A = d == null ? void 0 : d.selection) != null && A.showEditor || d != null && d.geometry) && x({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [d, x]);
  de(() => {
    var u;
    if ((u = d == null ? void 0 : d.selection) != null && u.showEditor)
      return window.addEventListener("keydown", me), () => window.removeEventListener("keydown", me);
  }, [(Ne = d == null ? void 0 : d.selection) == null ? void 0 : Ne.showEditor, me]), de(() => () => {
    E.current && clearTimeout(E.current);
  }, []);
  const ye = T((u, A) => w && w.some((re) => v ? v(u, re) : u.data.id === re) || A === u, [w, v]), Te = h(N, O), et = T((u, A, K, re, tt, nt) => {
    var _e;
    process.env.NODE_ENV !== "production" && console.log("🔄 Annotation Render Profile:", {
      id: u,
      phase: A,
      actualDuration: `${K.toFixed(2)}ms`,
      baseDuration: `${re.toFixed(2)}ms`,
      startTime: tt,
      commitTime: nt,
      annotationsCount: l.length,
      hasValue: !!d,
      showEditor: !!((_e = d == null ? void 0 : d.selection) != null && _e.showEditor)
    });
  }, [l.length, d]), we = /* @__PURE__ */ g.jsxs(zt, { ref: he, style: s, className: i, onMouseLeave: We, onTouchCancel: R, onMouseMove: Be, $allowTouch: _, children: [
    /* @__PURE__ */ g.jsx(qt, { ref: G, src: n, alt: r }),
    /* @__PURE__ */ g.jsxs(Bt, { children: [
      l.map((u) => {
        var K;
        if (!((K = u.data) != null && K.id))
          return console.warn("Annotation missing data.id:", u), null;
        const A = ye(u, Te);
        return P ? P({
          key: u.data.id,
          annotation: u,
          active: A
        }) : null;
      }),
      !M && (d == null ? void 0 : d.geometry) && D && D({
        annotation: d
      })
    ] }),
    /* @__PURE__ */ g.jsx(Wt, { ref: Q, "data-testid": "annotation-target", onClick: Qe, onMouseUp: Je, onMouseDown: Ze }),
    !F && L && L({
      type: Z,
      annotation: d
    }),
    l.map((u) => {
      var A;
      return (A = u.data) != null && A.id && ye(u, Te) && j != null ? j({
        key: u.data.id,
        annotation: u
      }) : null;
    }),
    !k && ((Me = d == null ? void 0 : d.selection) == null ? void 0 : Me.showEditor) && b && x && b({
      annotation: d,
      onChange: x,
      onSubmit: Ke
    }),
    c
  ] });
  return process.env.NODE_ENV !== "production" ? /* @__PURE__ */ g.jsx(rt, { id: "Annotation", onRender: et, children: we }) : we;
};
function Jt(t, e) {
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
function en() {
  const t = I.c(5), [e, n] = Ge(!1), r = J(null);
  let s, i;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
    const f = (m) => {
      const d = r.current, x = {
        pageX: m.pageX,
        pageY: m.pageY
      }, p = Jt(d, x);
      n(p);
    };
    return document.addEventListener("mousemove", f, {
      passive: !0
    }), () => {
      document.removeEventListener("mousemove", f);
    };
  }, i = [], t[0] = s, t[1] = i) : (s = t[0], i = t[1]), de(s, i);
  let a;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (f) => {
    r.current = f;
  }, t[2] = a) : a = t[2];
  const c = a;
  let l;
  return t[3] !== e ? (l = {
    isHoveringOver: e,
    setRef: c
  }, t[3] = e, t[4] = l) : l = t[4], l;
}
export {
  Kt as Annotation,
  xe as OvalSelector,
  le as PointSelector,
  ae as RectangleSelector,
  Kt as default,
  Et as useAnnotationHitDetection,
  en as useMouseHover,
  ht as useRelativeMousePosition,
  mt as useSelectorMethods
};
