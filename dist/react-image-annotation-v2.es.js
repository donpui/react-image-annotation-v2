import de, { useState as ge, useRef as ue, useEffect as Me, PureComponent as dt, useCallback as k } from "react";
import $, { keyframes as ht } from "styled-components";
var ve = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function ft() {
  if (He) return he;
  He = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(r, o, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), o.key !== void 0 && (l = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: t,
      type: r,
      key: l,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return he.Fragment = e, he.jsx = n, he.jsxs = n, he;
}
var fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function pt() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === T ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case M:
          return "Fragment";
        case w:
          return "Profiler";
        case v:
          return "StrictMode";
        case Y:
          return "Suspense";
        case G:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case b:
            return "Portal";
          case R:
            return (s.displayName || "Context") + ".Provider";
          case C:
            return (s._context.displayName || "Context") + ".Consumer";
          case O:
            var d = s.render;
            return s = s.displayName, s || (s = d.displayName || d.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case _:
            return d = s.displayName || null, d !== null ? d : t(s.type) || "Memo";
          case j:
            d = s._payload, s = s._init;
            try {
              return t(s(d));
            } catch {
            }
        }
      return null;
    }
    function e(s) {
      return "" + s;
    }
    function n(s) {
      try {
        e(s);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var E = d.error, N = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return E.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), e(s);
      }
    }
    function r(s) {
      if (s === M) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === j)
        return "<...>";
      try {
        var d = t(s);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var s = D.A;
      return s === null ? null : s.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(s) {
      if (H.call(s, "key")) {
        var d = Object.getOwnPropertyDescriptor(s, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function c(s, d) {
      function E() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: E,
        configurable: !0
      });
    }
    function u() {
      var s = t(this.type);
      return U[s] || (U[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function h(s, d, E, N, F, L, J, ne) {
      return E = L.ref, s = {
        $$typeof: f,
        type: s,
        key: d,
        props: L,
        _owner: F
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function g(s, d, E, N, F, L, J, ne) {
      var y = d.children;
      if (y !== void 0)
        if (N)
          if (q(y)) {
            for (N = 0; N < y.length; N++)
              x(y[N]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(y);
      if (H.call(d, "key")) {
        y = t(s);
        var A = Object.keys(d).filter(function(re) {
          return re !== "key";
        });
        N = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", oe[y + N] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          y,
          A,
          y
        ), oe[y + N] = !0);
      }
      if (y = null, E !== void 0 && (n(E), y = "" + E), l(d) && (n(d.key), y = "" + d.key), "key" in d) {
        E = {};
        for (var ee in d)
          ee !== "key" && (E[ee] = d[ee]);
      } else E = d;
      return y && c(
        E,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), h(
        s,
        y,
        L,
        F,
        o(),
        E,
        J,
        ne
      );
    }
    function x(s) {
      typeof s == "object" && s !== null && s.$$typeof === f && s._store && (s._store.validated = 1);
    }
    var m = de, f = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), R = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), D = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, q = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var V, U = {}, K = m["react-stack-bottom-frame"].bind(
      m,
      i
    )(), te = X(r(i)), oe = {};
    fe.Fragment = M, fe.jsx = function(s, d, E, N, F) {
      var L = 1e4 > D.recentlyCreatedOwnerStacks++;
      return g(
        s,
        d,
        E,
        !1,
        N,
        F,
        L ? Error("react-stack-top-frame") : K,
        L ? X(r(s)) : te
      );
    }, fe.jsxs = function(s, d, E, N, F) {
      var L = 1e4 > D.recentlyCreatedOwnerStacks++;
      return g(
        s,
        d,
        E,
        !0,
        N,
        F,
        L ? Error("react-stack-top-frame") : K,
        L ? X(r(s)) : te
      );
    };
  }()), fe;
}
var Fe;
function gt() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? ve.exports = ft() : ve.exports = pt()), ve.exports;
}
var p = gt();
function mt(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, n) => (...r) => e(n(...r)));
}
const xt = ({
  elem: t,
  e
}) => {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const {
    pageY: n,
    pageX: r
  } = e, {
    left: o,
    right: i,
    bottom: l,
    top: c
  } = t.getBoundingClientRect();
  return r > o && r < i && n > c && n < l;
}, vt = (t = "isMouseHovering") => (e) => {
  const n = (o) => {
    const [i, l] = ge(!1), c = ue(null);
    Me(() => {
      const h = (g) => {
        const x = c.current, m = {
          pageX: g.pageX,
          pageY: g.pageY
        };
        l(xt({
          elem: x,
          e: m
        }));
      };
      return document.addEventListener("mousemove", h), () => {
        document.removeEventListener("mousemove", h);
      };
    }, []);
    const u = {
      [t]: {
        innerRef: (h) => c.current = h,
        isHoveringOver: i
      }
    };
    return de.createElement(e, {
      ...o,
      ...u
    });
  }, r = e.displayName || e.name || "Component";
  return n.displayName = `IsMouseHovering(${r})`, n;
}, Ze = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.currentTarget.getBoundingClientRect(), n = t.clientX - e.x, r = t.clientY - e.y;
  return {
    x: n / e.width * 100,
    y: r / e.height * 100
  };
}, ze = (t, e, n) => Math.max(t, Math.min(e, n)), bt = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), r = e.pageX - n.left, o = e.pageY - (n.top + window.scrollY);
  return {
    x: ze(0, 100, r / n.width * 100),
    y: ze(0, 100, o / n.height * 100)
  };
}, ae = (t) => yt(t) ? wt(t) ? (Et(t) && t.preventDefault(), bt(t)) : {
  x: null
} : Ze(t), yt = (t) => t.targetTouches !== void 0, wt = (t) => t.targetTouches.length === 1, Et = (t) => t.type === "touchmove", Tt = (t = "relativeMousePos") => (e) => {
  class n extends dt {
    constructor(i) {
      super(i), this.container = null, this._innerRef = (l) => {
        this.container = l;
      }, this._onMouseMove = (l) => {
        const c = Ze(l);
        this.setState(c);
      }, this._onTouchMove = (l) => {
        if (!this.container || l.targetTouches.length !== 1) return;
        const c = l.targetTouches[0], u = this.container.offsetParent;
        if (!u) return;
        const h = c.pageX - u.offsetLeft, g = c.pageY - u.offsetTop, x = this.container.width, m = this.container.height;
        typeof x == "number" && typeof m == "number" && x > 0 && m > 0 ? this.setState({
          x: h / x * 100,
          y: g / m * 100
        }) : this.setState({
          x: null,
          y: null
        });
      }, this._onMouseLeave = (l) => {
        this.setState({
          x: null,
          y: null
        });
      }, this._onTouchLeave = (l) => {
        this.setState({
          x: null,
          y: null
        });
      }, this.state = {
        x: null,
        y: null
      };
    }
    render() {
      const i = {
        innerRef: this._innerRef,
        // Pass HOC's ref setter
        onMouseMove: this._onMouseMove,
        // Pass HOC's event handler
        onMouseLeave: this._onMouseLeave,
        onTouchMove: this._onTouchMove,
        onTouchLeave: this._onTouchLeave,
        x: this.state.x,
        y: this.state.y
      }, l = {
        [t]: i
      };
      return de.createElement(e, {
        ...this.props,
        ...l
      });
    }
  }
  const r = e.displayName || e.name || "Component";
  return n.displayName = `withRelativeMousePos(${r})`, n;
}, Mt = (t, e) => {
  const [n, r] = ge(!1), [o, i] = ge(null), [l, c] = ge(null), u = ue(null), h = ue(t);
  h.current = t;
  const g = k((v, w) => {
    const C = h.current.map((R) => R.data.id === v ? {
      ...R,
      isDragging: w
    } : R);
    h.current = C, e(C), r(w), i(w ? v : null);
  }, [e]), x = k((v, w) => {
    g(v, !0);
    const C = h.current.find((R) => R.data.id === v);
    C && (u.current = {
      ...C.geometry,
      initialCursorPosition: w
    });
  }, [g]), m = k((v, w, C) => {
    if (!o || !u.current) return;
    const R = v.clientX - C.x, O = v.clientY - C.y, Y = document.querySelector(".annotation-container");
    if (!Y) return;
    const G = Y.getBoundingClientRect(), _ = G.width, j = G.height, S = 100, T = {
      ...u.current
    };
    switch (w) {
      case "top":
        T.height = Math.min(u.current.height - O / j * S, u.current.y + u.current.height), T.y = Math.max(u.current.y + O / j * S, 0);
        break;
      case "right":
        T.width = Math.min(u.current.width + R / _ * S, S - u.current.x);
        break;
      case "bottom":
        T.height = Math.min(u.current.height + O / j * S, S - u.current.y);
        break;
      case "left":
        T.width = Math.min(u.current.width - R / _ * S, u.current.x + u.current.width), T.x = Math.max(u.current.x + R / _ * S, 0);
        break;
    }
    T.width = Math.max(T.width, 0), T.height = Math.max(T.height, 0), T.x = Math.min(T.x, S - T.width), T.y = Math.min(T.y, S - T.height);
    const D = h.current.map((H) => H.data.id === o ? {
      ...H,
      geometry: T
    } : H);
    h.current = D, e(D);
  }, [o, e]), f = k((v, w) => {
    g(v, !0);
    const C = h.current.find((R) => R.data.id === v);
    C && (u.current = {
      ...C.geometry,
      initialCursorPosition: w
    });
  }, [g]), b = k((v, w) => {
    if (!o || !u.current) return;
    const C = v.clientX - w.x, R = v.clientY - w.y, O = document.querySelector(".annotation-container");
    if (!O) return;
    const Y = O.getBoundingClientRect(), G = Y.width, _ = Y.height, j = 100, S = {
      ...u.current
    };
    S.x = Math.max(Math.min(u.current.x + C / G * j, j - u.current.width), 0), S.y = Math.max(Math.min(u.current.y + R / _ * j, j - u.current.height), 0);
    const T = h.current.map((D) => D.data.id === o ? {
      ...D,
      geometry: S
    } : D);
    h.current = T, e(T);
  }, [o, e]), M = k(() => {
    o && (r(!1), i(null)), u.current = null;
  }, [o]);
  return {
    isDragging: n,
    draggingId: o,
    activeAnnotationId: l,
    setActiveAnnotationId: c,
    setDraggingId: i,
    handleDotDragStart: x,
    handleDotDrag: m,
    handleMoveStart: f,
    handleMove: b,
    handleMouseUp: M
  };
};
var be = { exports: {} }, ke = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Rt() {
  if (Ge) return ke;
  Ge = 1;
  var t = de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return ke.c = function(e) {
    return t.H.useMemoCache(e);
  }, ke;
}
var Ne = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function Ct() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var t = de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Ne.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  }()), Ne;
}
var Be;
function St() {
  return Be || (Be = 1, process.env.NODE_ENV === "production" ? be.exports = Rt() : be.exports = Ct()), be.exports;
}
var Q = St();
const Dt = $.div`
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
  const e = Q.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`, o = `${n.x}%`;
  let i;
  return e[0] !== r || e[1] !== o ? (i = /* @__PURE__ */ p.jsx(Dt, { style: {
    top: r,
    left: o
  } }), e[0] = r, e[1] = o, e[2] = i) : i = e[2], i;
}
const kt = $.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, Nt = $.div`
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
`, Pt = (t) => {
  const e = Q.c(11), {
    onChange: n,
    onSubmit: r,
    onFocus: o,
    onBlur: i,
    value: l
  } = t;
  let c;
  e[0] !== i || e[1] !== n || e[2] !== o || e[3] !== l ? (c = /* @__PURE__ */ p.jsx(kt, { children: /* @__PURE__ */ p.jsx("textarea", { placeholder: "Write description", onFocus: o, onBlur: i, onChange: n, value: l }) }), e[0] = i, e[1] = n, e[2] = o, e[3] = l, e[4] = c) : c = e[4];
  let u;
  e[5] !== r || e[6] !== l ? (u = l && /* @__PURE__ */ p.jsx(Nt, { onClick: r, children: "Submit" }), e[5] = r, e[6] = l, e[7] = u) : u = e[7];
  let h;
  return e[8] !== c || e[9] !== u ? (h = /* @__PURE__ */ p.jsxs(de.Fragment, { children: [
    c,
    u
  ] }), e[8] = c, e[9] = u, e[10] = h) : h = e[10], h;
}, At = ht`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, $t = $.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${At} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, jt = (t) => {
  var C;
  const e = Q.c(17), {
    annotation: n,
    onChange: r,
    onSubmit: o,
    className: i,
    style: l
  } = t, c = i === void 0 ? "" : i;
  let u;
  e[0] !== l ? (u = l === void 0 ? {} : l, e[0] = l, e[1] = u) : u = e[1];
  const h = u, {
    geometry: g
  } = n;
  if (!g)
    return null;
  const x = `${g.x}%`, m = `${g.y + g.height}%`;
  let f;
  e[2] !== h || e[3] !== x || e[4] !== m ? (f = {
    position: "absolute",
    left: x,
    top: m,
    ...h
  }, e[2] = h, e[3] = x, e[4] = m, e[5] = f) : f = e[5];
  let b;
  e[6] !== n || e[7] !== r ? (b = (R) => r({
    ...n,
    data: {
      ...n.data,
      text: R.target.value
    }
  }), e[6] = n, e[7] = r, e[8] = b) : b = e[8];
  const M = (C = n.data) == null ? void 0 : C.text;
  let v;
  e[9] !== o || e[10] !== b || e[11] !== M ? (v = /* @__PURE__ */ p.jsx(Pt, { onChange: b, onSubmit: o, value: M }), e[9] = o, e[10] = b, e[11] = M, e[12] = v) : v = e[12];
  let w;
  return e[13] !== c || e[14] !== f || e[15] !== v ? (w = /* @__PURE__ */ p.jsx($t, { className: c, style: f, children: v }), e[13] = c, e[14] = f, e[15] = v, e[16] = w) : w = e[16], w;
}, ye = $.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, It = $.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Qe(t) {
  const e = Q.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`;
  let o;
  e[0] !== r ? (o = /* @__PURE__ */ p.jsx(ye, { style: {
    height: r,
    width: "100%"
  } }), e[0] = r, e[1] = o) : o = e[1];
  const i = `${n.y}%`, l = `${n.height}%`, c = `${n.x}%`;
  let u;
  e[2] !== i || e[3] !== l || e[4] !== c ? (u = /* @__PURE__ */ p.jsx(ye, { style: {
    top: i,
    height: l,
    width: c
  } }), e[2] = i, e[3] = l, e[4] = c, e[5] = u) : u = e[5];
  const h = `${n.y}%`, g = `${n.x + n.width}%`, x = `${n.height}%`, m = `${100 - (n.x + n.width)}%`;
  let f;
  e[6] !== h || e[7] !== g || e[8] !== x || e[9] !== m ? (f = /* @__PURE__ */ p.jsx(ye, { style: {
    top: h,
    left: g,
    height: x,
    width: m
  } }), e[6] = h, e[7] = g, e[8] = x, e[9] = m, e[10] = f) : f = e[10];
  const b = `${n.y + n.height}%`, M = `${100 - (n.y + n.height)}%`;
  let v;
  e[11] !== b || e[12] !== M ? (v = /* @__PURE__ */ p.jsx(ye, { style: {
    top: b,
    height: M,
    width: "100%"
  } }), e[11] = b, e[12] = M, e[13] = v) : v = e[13];
  let w;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== o || e[17] !== f || e[18] !== v || e[19] !== u ? (w = /* @__PURE__ */ p.jsxs(It, { className: t.className, style: t.style, children: [
    o,
    u,
    f,
    v
  ] }), e[14] = t.className, e[15] = t.style, e[16] = o, e[17] = f, e[18] = v, e[19] = u, e[20] = w) : w = e[20], w;
}
Qe.defaultProps = {
  className: "",
  style: {}
};
const Yt = $.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Re(t) {
  const e = Q.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.x}%`, o = `${n.y}%`, i = `${n.height}%`, l = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  e[0] !== t.style || e[1] !== r || e[2] !== o || e[3] !== i || e[4] !== l || e[5] !== c ? (u = {
    position: "absolute",
    left: r,
    top: o,
    height: i,
    width: l,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = r, e[2] = o, e[3] = i, e[4] = l, e[5] = c, e[6] = u) : u = e[6];
  let h;
  return e[7] !== t.className || e[8] !== u ? (h = /* @__PURE__ */ p.jsx(Yt, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = h) : h = e[9], h;
}
Re.defaultProps = {
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
function Ce(t) {
  const e = Q.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.x}%`, o = `${n.y}%`, i = `${n.height}%`, l = `${n.width}%`, c = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  e[0] !== t.style || e[1] !== r || e[2] !== o || e[3] !== i || e[4] !== l || e[5] !== c ? (u = {
    position: "absolute",
    left: r,
    top: o,
    height: i,
    width: l,
    boxShadow: c,
    ...t.style
  }, e[0] = t.style, e[1] = r, e[2] = o, e[3] = i, e[4] = l, e[5] = c, e[6] = u) : u = e[6];
  let h;
  return e[7] !== t.className || e[8] !== u ? (h = /* @__PURE__ */ p.jsx(_t, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = h) : h = e[9], h;
}
Ce.defaultProps = {
  className: "",
  style: {}
};
const Ot = $.div`
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
function Ke(t) {
  const e = Q.c(8), {
    geometry: n
  } = t.annotation;
  if (!n || typeof n.x > "u" || typeof n.y > "u" || typeof n.width > "u" || typeof n.height > "u")
    return null;
  const r = `${n.x}%`, o = `${n.y + n.height}%`;
  let i;
  e[0] !== t.style || e[1] !== r || e[2] !== o ? (i = {
    position: "absolute",
    left: r,
    top: o,
    ...t.style
  }, e[0] = t.style, e[1] = r, e[2] = o, e[3] = i) : i = e[3];
  const l = t.annotation.data && t.annotation.data.text;
  let c;
  return e[4] !== t.className || e[5] !== i || e[6] !== l ? (c = /* @__PURE__ */ p.jsx(Ot, { style: i, className: t.className, children: l }), e[4] = t.className, e[5] = i, e[6] = l, e[7] = c) : c = e[7], c;
}
Ke.defaultProps = {
  style: {},
  className: ""
};
const Ae = $.div`
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
`, Lt = $.div`
  border-radius: 10px;
  position: absolute;
  border: none !important;
  box-shadow: 0 0 10px rgba(119, 127, 152, 0.2);
  font-size: 16px;
  z-index: 20;
  background-color: white;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: -10px;
  right: -10px;
  pointer-events: auto;
  transition: all 0.2s ease;

  /* Add larger hover area using pseudo-element */
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: -5px;
    left: -5px;
    z-index: -1;
    pointer-events: auto;
  }

  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.1);
  }
`, Ht = $.div`
  &::before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
    color: #666;
    line-height: 1;
  }
`, Xt = (t) => {
  const e = Q.c(6), {
    annotationId: n,
    onRemove: r
  } = t;
  let o;
  e[0] !== n || e[1] !== r ? (o = (u) => {
    u.stopPropagation(), r(n);
  }, e[0] = n, e[1] = r, e[2] = o) : o = e[2];
  const i = o;
  let l;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (l = /* @__PURE__ */ p.jsx(Ht, {}), e[3] = l) : l = e[3];
  let c;
  return e[4] !== i ? (c = /* @__PURE__ */ p.jsx(Lt, { onClick: i, children: l }), e[4] = i, e[5] = c) : c = e[5], c;
}, Ft = $.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border: 1px solid #24B3C8;
  border-radius: 50%;
  cursor: move;
  z-index: 15;
  pointer-events: auto;
  transition: all 0.2s ease;

  /* Add larger hover area using pseudo-element */
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: -5px;
    left: -5px;
    z-index: -1;
    pointer-events: auto;
  }

  &:hover {
    width: 12px;
    height: 12px;
    background: #1e90ff;
    border: 2px solid #ffffff;
    box-shadow: 0 0 4px rgba(30, 144, 255, 0.6);
  }

  ${(t) => {
  switch (t.position) {
    case "top":
      return `
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          
          &:hover {
            top: -6px;
            transform: translateX(-50%);
          }
        `;
    case "right":
      return `
          top: 50%;
          right: -5px;
          transform: translateY(-50%);
          
          &:hover {
            right: -6px;
            transform: translateY(-50%);
          }
        `;
    case "bottom":
      return `
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          
          &:hover {
            bottom: -6px;
            transform: translateX(-50%);
          }
        `;
    case "left":
      return `
          top: 50%;
          left: -5px;
          transform: translateY(-50%);
          
          &:hover {
            left: -6px;
            transform: translateY(-50%);
          }
        `;
    default:
      return "";
  }
}}
`, zt = $.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: white;
  border: 1px solid #24B3C8;
  border-radius: 50%;
  cursor: move;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #24B3C8;
  pointer-events: auto;
  transition: all 0.2s ease;
  
  &:hover {
    width: 24px;
    height: 24px;
    background: #1e90ff;
    border: 2px solid #ffffff;
    color: white;
    font-size: 14px;
    box-shadow: 0 0 6px rgba(30, 144, 255, 0.6);
  }
`, we = (t) => {
  const e = Q.c(9), {
    position: n,
    onDragStart: r,
    onDrag: o,
    onDragEnd: i,
    annotationId: l
  } = t;
  let c;
  e[0] !== l || e[1] !== o || e[2] !== i || e[3] !== r || e[4] !== n ? (c = (x) => {
    x.preventDefault(), x.stopPropagation();
    const m = {
      x: x.clientX,
      y: x.clientY
    };
    r(l, m);
    const f = (M) => {
      M.preventDefault(), M.stopPropagation(), o(M, n, m);
    }, b = (M) => {
      M.preventDefault(), M.stopPropagation(), document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", b), i == null || i();
    };
    document.addEventListener("mousemove", f), document.addEventListener("mouseup", b);
  }, e[0] = l, e[1] = o, e[2] = i, e[3] = r, e[4] = n, e[5] = c) : c = e[5];
  const u = c, h = Ut;
  let g;
  return e[6] !== u || e[7] !== n ? (g = /* @__PURE__ */ p.jsx(Ft, { position: n, onMouseDown: u, onClick: h, "data-type": "dot" }), e[6] = u, e[7] = n, e[8] = g) : g = e[8], g;
}, Gt = (t) => {
  const e = Q.c(7), {
    onMoveStart: n,
    onMove: r,
    onMoveEnd: o,
    annotationId: i
  } = t;
  let l;
  e[0] !== i || e[1] !== r || e[2] !== o || e[3] !== n ? (l = (g) => {
    g.preventDefault(), g.stopPropagation();
    const x = {
      x: g.clientX,
      y: g.clientY
    };
    n(i, x);
    const m = (b) => {
      b.preventDefault(), b.stopPropagation(), r(b, x);
    }, f = (b) => {
      b.preventDefault(), b.stopPropagation(), document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", f), o == null || o();
    };
    document.addEventListener("mousemove", m), document.addEventListener("mouseup", f);
  }, e[0] = i, e[1] = r, e[2] = o, e[3] = n, e[4] = l) : l = e[4];
  const c = l, u = Bt;
  let h;
  return e[5] !== c ? (h = /* @__PURE__ */ p.jsx(zt, { onMouseDown: c, onClick: u, "data-type": "move-button", children: "↕" }), e[5] = c, e[6] = h) : h = e[6], h;
};
function Ut(t) {
  t.preventDefault(), t.stopPropagation();
}
function Bt(t) {
  t.preventDefault(), t.stopPropagation();
}
const Wt = $.div`
  position: absolute;
  border: ${(t) => t.$isDragging ? "1px dashed #FFFFFF" : "1px solid #24B3C8"};
  background: rgba(36, 179, 200, 0.1);
  pointer-events: auto;
  z-index: 10;
  cursor: move;
  
  /* Add padding to create a larger hover area */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    z-index: -1;
    pointer-events: none;
  }
  
  &:hover {
    border: ${(t) => t.$isDragging ? "1px dashed #FFFFFF" : "2px solid #1e90ff"};
    background: rgba(36, 179, 200, 0.2);
    box-shadow: 0 0 8px rgba(30, 144, 255, 0.4);
  }
`, qt = (t) => {
  var U, K, te, oe, s, d, E, N, F, L;
  const e = Q.c(48), {
    annotation: n,
    onDotDragStart: r,
    onDotDrag: o,
    onMoveStart: i,
    onMove: l,
    onDragEnd: c,
    isDragging: u,
    allowDelete: h,
    onRemoveAnnotation: g
  } = t, {
    geometry: x
  } = n;
  if (!x || !x.type || typeof x.x != "number" || typeof x.y != "number")
    return null;
  let m;
  e[0] !== ((U = n.data) == null ? void 0 : U.id) || e[1] !== l || e[2] !== i ? (m = (J) => {
    var se;
    const ne = J.target;
    if (ne.closest('[data-type="dot"]') || ne.closest('[data-type="move-button"]'))
      return;
    J.preventDefault(), J.stopPropagation();
    const y = {
      x: J.clientX,
      y: J.clientY
    }, A = (se = n.data) == null ? void 0 : se.id;
    A && i(A, y);
    const ee = (B) => {
      B.preventDefault(), B.stopPropagation(), l(B, y);
    }, re = (B) => {
      B.preventDefault(), B.stopPropagation(), document.removeEventListener("mousemove", ee), document.removeEventListener("mouseup", re);
    };
    document.addEventListener("mousemove", ee), document.addEventListener("mouseup", re);
  }, e[0] = (K = n.data) == null ? void 0 : K.id, e[1] = l, e[2] = i, e[3] = m) : m = e[3];
  const f = m, b = Vt, M = `${x.x}%`, v = `${x.y}%`, w = `${x.width}%`, C = `${x.height}%`;
  let R;
  e[4] !== M || e[5] !== v || e[6] !== w || e[7] !== C ? (R = {
    left: M,
    top: v,
    width: w,
    height: C
  }, e[4] = M, e[5] = v, e[6] = w, e[7] = C, e[8] = R) : R = e[8];
  const O = (te = n.data) == null ? void 0 : te.id;
  let Y;
  e[9] !== o || e[10] !== r || e[11] !== c || e[12] !== O ? (Y = /* @__PURE__ */ p.jsx(we, { position: "top", onDragStart: r, onDrag: o, onDragEnd: c, annotationId: O }), e[9] = o, e[10] = r, e[11] = c, e[12] = O, e[13] = Y) : Y = e[13];
  const G = (oe = n.data) == null ? void 0 : oe.id;
  let _;
  e[14] !== o || e[15] !== r || e[16] !== c || e[17] !== G ? (_ = /* @__PURE__ */ p.jsx(we, { position: "right", onDragStart: r, onDrag: o, onDragEnd: c, annotationId: G }), e[14] = o, e[15] = r, e[16] = c, e[17] = G, e[18] = _) : _ = e[18];
  const j = (s = n.data) == null ? void 0 : s.id;
  let S;
  e[19] !== o || e[20] !== r || e[21] !== c || e[22] !== j ? (S = /* @__PURE__ */ p.jsx(we, { position: "bottom", onDragStart: r, onDrag: o, onDragEnd: c, annotationId: j }), e[19] = o, e[20] = r, e[21] = c, e[22] = j, e[23] = S) : S = e[23];
  const T = (d = n.data) == null ? void 0 : d.id;
  let D;
  e[24] !== o || e[25] !== r || e[26] !== c || e[27] !== T ? (D = /* @__PURE__ */ p.jsx(we, { position: "left", onDragStart: r, onDrag: o, onDragEnd: c, annotationId: T }), e[24] = o, e[25] = r, e[26] = c, e[27] = T, e[28] = D) : D = e[28];
  const H = (E = n.data) == null ? void 0 : E.id;
  let q;
  e[29] !== c || e[30] !== l || e[31] !== i || e[32] !== H ? (q = /* @__PURE__ */ p.jsx(Gt, { onMoveStart: i, onMove: l, onMoveEnd: c, annotationId: H }), e[29] = c, e[30] = l, e[31] = i, e[32] = H, e[33] = q) : q = e[33];
  let X;
  e[34] !== h || e[35] !== ((N = n.data) == null ? void 0 : N.id) || e[36] !== g ? (X = h && g && /* @__PURE__ */ p.jsx(Xt, { annotationId: (F = n.data) == null ? void 0 : F.id, onRemove: g }), e[34] = h, e[35] = (L = n.data) == null ? void 0 : L.id, e[36] = g, e[37] = X) : X = e[37];
  let V;
  return e[38] !== f || e[39] !== u || e[40] !== _ || e[41] !== S || e[42] !== D || e[43] !== q || e[44] !== X || e[45] !== R || e[46] !== Y ? (V = /* @__PURE__ */ p.jsxs(Wt, { style: R, $isDragging: u, onMouseDown: f, onClick: b, children: [
    Y,
    _,
    S,
    D,
    q,
    X
  ] }), e[38] = f, e[39] = u, e[40] = _, e[41] = S, e[42] = D, e[43] = q, e[44] = X, e[45] = R, e[46] = Y, e[47] = V) : V = e[47], V;
};
function Vt(t) {
  t.preventDefault(), t.stopPropagation();
}
const et = "RECTANGLE";
function Jt({
  x: t,
  y: e
}, n) {
  if (!n) return !1;
  const r = Math.min(n.x, n.x + n.width), o = Math.max(n.x, n.x + n.width), i = Math.min(n.y, n.y + n.height), l = Math.max(n.y, n.y + n.height);
  return !(t < r || e < i || t > o || e > l);
}
function Zt(t) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const e = Math.abs(t.width), n = Math.abs(t.height);
  return e * n;
}
const Qt = {
  onTouchStart(t, e) {
    return We(t, e);
  },
  onTouchEnd(t, e) {
    return qe(t);
  },
  onTouchMove(t, e) {
    return Ve(t, e);
  },
  onMouseDown(t, e) {
    return We(t, e);
  },
  onMouseUp(t, e) {
    return qe(t);
  },
  onMouseMove(t, e) {
    return Ve(t, e);
  }
};
function We(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: r
    } = ae(e);
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
function qe(t, e) {
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
function Ve(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: o,
      y: i
    } = ae(e), l = o - n, c = i - r;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: et,
        x: l > 0 ? n : o,
        y: c > 0 ? r : i,
        width: Math.abs(l),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const le = {
  TYPE: et,
  intersects: Jt,
  area: Zt,
  methods: Qt
}, tt = "POINT";
function Kt({
  x: t,
  y: e
}, n, r) {
  if (!n) return !1;
  const o = Math.abs(t - n.x), i = Math.abs(e - n.y);
  return o === 0 && i === 0;
}
function en(t, e) {
  return 0;
}
const tn = {
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
        ...ae(e),
        width: 0,
        height: 0,
        type: tt
      }
    };
  }
}, pe = {
  TYPE: tt,
  intersects: Kt,
  area: en,
  methods: tn
}, Ee = (t) => Math.pow(t, 2), $e = "OVAL";
function nn({
  x: t,
  y: e
}, n) {
  if (!n || !n.width || !n.height) return !1;
  const r = Math.abs(n.width), o = Math.abs(n.height), i = {
    x: n.x + r / 2,
    y: n.y + o / 2
  }, l = r / 2, c = o / 2;
  if (l === 0 || c === 0) return !1;
  const u = t - i.x, h = e - i.y;
  return Ee(u) / Ee(l) + Ee(h) / Ee(c) <= 1;
}
function on(t) {
  return !t || !t.width || !t.height || t.width <= 0 || t.height <= 0 ? 0 : Math.PI * Math.abs(t.width) * Math.abs(t.height) / 4;
}
const rn = {
  onTouchStart(t, e) {
    return sn(t, e);
  },
  onTouchEnd(t, e) {
    return an(t);
  },
  onTouchMove(t, e) {
    return cn(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: r
      } = ae(e);
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
        x: o,
        y: i
      } = ae(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: $e,
          x: Math.min(n, o),
          y: Math.min(r, i),
          width: Math.abs(o - n),
          height: Math.abs(i - r)
        }
      };
    }
    return t;
  }
};
function sn(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: r
    } = ae(e);
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
function an(t, e) {
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
function cn(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: o,
      y: i
    } = ae(e), l = o - n, c = i - r;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: $e,
        x: l > 0 ? n : o,
        y: c > 0 ? r : i,
        width: Math.abs(l),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const Te = {
  TYPE: $e,
  intersects: nn,
  area: on,
  methods: rn
}, Je = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: le.TYPE,
  selectors: [le, pe, Te],
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  activeAnnotationComparator: (t, e) => t === e,
  renderSelector: ({
    annotation: t
  }) => {
    switch (t.geometry.type) {
      case le.TYPE:
        return /* @__PURE__ */ p.jsx(Qe, { annotation: t });
      case pe.TYPE:
        return /* @__PURE__ */ p.jsx(Pe, { annotation: t });
      case Te.TYPE:
        return /* @__PURE__ */ p.jsx(Ce, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ p.jsx(jt, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case le.TYPE:
        return /* @__PURE__ */ p.jsx(Re, { annotation: e, active: n }, t);
      case pe.TYPE:
        return /* @__PURE__ */ p.jsx(Pe, { annotation: e }, t);
      case Te.TYPE:
        return /* @__PURE__ */ p.jsx(Ce, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ p.jsx(Ke, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case pe.TYPE:
        return /* @__PURE__ */ p.jsx(Ae, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ p.jsx(Ae, { children: "Click and Drag to Annotate" });
    }
  },
  // Editing functionality defaults
  enableEditing: !1,
  onAnnotationsChange: () => {
    console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.");
  },
  renderDraggableHighlight: ({
    key: t,
    annotation: e,
    active: n,
    isDragging: r,
    isHovered: o,
    onDotDragStart: i,
    onDotDrag: l,
    onMoveStart: c,
    onMove: u,
    onDragEnd: h,
    allowDelete: g,
    onRemoveAnnotation: x
  }) => {
    var m;
    if (!((m = e.data) != null && m.id) || !o)
      switch (e.geometry.type) {
        case le.TYPE:
          return /* @__PURE__ */ p.jsx(Re, { annotation: e, active: n }, t);
        case pe.TYPE:
          return /* @__PURE__ */ p.jsx(Pe, { annotation: e }, t);
        case Te.TYPE:
          return /* @__PURE__ */ p.jsx(Ce, { annotation: e, active: n }, t);
        default:
          return null;
      }
    return e.geometry.type === le.TYPE ? /* @__PURE__ */ p.jsx(qt, { annotation: e, onDotDragStart: i, onDotDrag: l, onMoveStart: c, onMove: u, onDragEnd: h, isDragging: r, allowDelete: g, onRemoveAnnotation: x }) : /* @__PURE__ */ p.jsx(Re, { annotation: e, active: n }, t);
  }
}, ln = $.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Ae} {
    opacity: 1;
  }
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, un = $.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`, dn = $.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`, hn = $.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`, fn = (t) => {
  var Le;
  const {
    selectors: e,
    ...n
  } = t, r = {
    ...Je,
    ...n,
    // Spread the rest of incomingProps
    // Explicitly handle selectors: use incoming if provided, else use default
    selectors: e !== void 0 ? e : Je.selectors
  }, {
    // OwnProps (destructured with defaults applied via spread above)
    src: o,
    alt: i,
    style: l,
    className: c,
    containerRef: u,
    // Renamed
    children: h,
    annotations: g,
    type: x,
    selectors: m,
    value: f,
    onChange: b,
    onSubmit: M,
    // Renamed
    activeAnnotationComparator: v,
    activeAnnotations: w,
    disableAnnotation: C,
    disableSelector: R,
    renderSelector: O,
    disableEditor: Y,
    renderEditor: G,
    renderHighlight: _,
    renderContent: j,
    disableOverlay: S,
    renderOverlay: T,
    allowTouch: D,
    onImageMouseUp: H,
    onImageMouseDown: q,
    onImageMouseMove: X,
    onImageClick: V,
    // Editing functionality props
    enableEditing: U,
    onAnnotationsChange: K,
    renderDraggableHighlight: te,
    // Delete functionality props
    allowDelete: oe,
    onRemoveAnnotation: s,
    // HOC-injected props
    relativeMousePos: d,
    isMouseHovering: E
  } = r, N = ue(null), F = ue(null), {
    x: L,
    y: J
  } = d, ne = k((a) => {
    U && K && K(a);
  }, [U, K]), y = U ? Mt(g, ne) : null, A = ue(null), [ee, re] = ge(null), se = g, B = k((a) => {
    if (a)
      return m.find((P) => P.TYPE === a);
  }, [m]), me = x || m && m[0] && m[0].TYPE, z = k((a, P) => {
    if (C)
      return;
    const W = B(me);
    if (W && W.methods[a]) {
      const ie = W.methods[a], Z = ie(f || {}, P);
      typeof Z > "u" ? process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(a)} of type ${me} returned undefined.
             Make sure to explicitly return the previous state or new state.`) : b && b(Z);
    }
  }, [C, B, me, f, b]), je = k((a) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && a.preventDefault(), z("onTouchStart", a);
  }, [D, z]), Ie = k((a) => {
    z("onTouchEnd", a);
  }, [z]), Ye = k((a) => {
    d && typeof d.onTouchMove == "function" && d.onTouchMove(a), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && a.preventDefault(), z("onTouchMove", a);
  }, [d, D, z]), Se = k((a) => {
    d && typeof d.onTouchLeave == "function" && d.onTouchLeave(a);
  }, [d]);
  Me(() => {
    const a = F.current;
    if (D && a)
      return a.ontouchstart = je, a.ontouchend = Ie, a.ontouchmove = Ye, a.ontouchcancel = Se, () => {
        a && (a.ontouchstart = null, a.ontouchend = null, a.ontouchmove = null, a.ontouchcancel = null);
      };
    a && (a.ontouchstart = null, a.ontouchend = null, a.ontouchmove = null, a.ontouchcancel = null);
  }, [D, je, Ie, Ye, Se]);
  const nt = k((a) => {
    N.current = a, d && typeof d.innerRef == "function" && d.innerRef(a);
  }, [d]), ot = k((a) => {
    E && typeof E.innerRef == "function" && E.innerRef(a), u && (typeof u == "function" ? u(a) : u.current = a);
  }, [E, u]), rt = k((a, P) => {
    const W = N.current;
    return !W || a === null || P === null ? void 0 : se.map((Z) => {
      const {
        geometry: I
      } = Z;
      if (!I) return !1;
      const ce = B(I.type);
      if (!ce) return !1;
      if (U && I.type === "RECTANGLE" && typeof I.x == "number" && typeof I.y == "number" && typeof I.width == "number" && typeof I.height == "number") {
        const xe = {
          ...I,
          x: Math.max(0, I.x - 2),
          // Add 2% buffer on each side
          y: Math.max(0, I.y - 2),
          width: Math.min(100 - I.x + 2, I.width + 4),
          height: Math.min(100 - I.y + 2, I.height + 4)
        };
        return ce.intersects({
          x: a,
          y: P
        }, xe, W) ? Z : !1;
      }
      return ce.intersects({
        x: a,
        y: P
      }, I, W) ? Z : !1;
    }).filter((Z) => !!Z).sort((Z, I) => {
      const ce = B(Z.geometry.type), xe = B(I.geometry.type);
      return !ce || !xe || !W ? 0 : ce.area(Z.geometry, W) - xe.area(I.geometry, W);
    })[0];
  }, [se, B, N, U]), st = k((a) => {
    d && typeof d.onMouseMove == "function" && d.onMouseMove(a);
    const P = a;
    X && X(P), z("onMouseMove", P);
  }, [d, X, z]), it = k((a) => {
    d && typeof d.onMouseLeave == "function" && d.onMouseLeave(a);
  }, [d]), at = k((a) => {
    H && H(a), z("onMouseUp", a);
  }, [H, z]), ct = k((a) => {
    q && q(a), z("onMouseDown", a);
  }, [q, z]), lt = k((a) => {
    V && V(a), z("onClick", a);
  }, [V, z]), ut = k(() => {
    M && f && M(f);
  }, [M, f]), De = k((a) => {
    var P;
    a.key === "Escape" && b && ((P = f == null ? void 0 : f.selection) != null && P.showEditor || f != null && f.geometry) && b({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [f, b]);
  Me(() => {
    var a;
    if ((a = f == null ? void 0 : f.selection) != null && a.showEditor)
      return window.addEventListener("keydown", De), () => window.removeEventListener("keydown", De);
  }, [(Le = f == null ? void 0 : f.selection) == null ? void 0 : Le.showEditor, De]), Me(() => () => {
    A.current && clearTimeout(A.current);
  }, []);
  const _e = k((a, P) => w && !!w.find((ie) => v ? v(a, ie) : a.data.id === ie) || P === a, [w, v]), Oe = rt(L, J);
  return /* @__PURE__ */ p.jsxs(ln, { style: l, ref: ot, onMouseLeave: it, onTouchCancel: Se, onMouseMove: st, $allowTouch: D, className: c, children: [
    /* @__PURE__ */ p.jsx(un, { alt: i || "Annotation Image", src: o, draggable: !1, ref: nt }),
    /* @__PURE__ */ p.jsxs(dn, { children: [
      se.map((a) => {
        if (!a.data || typeof a.data.id > "u")
          return console.warn("Annotation is missing data.id, cannot render highlight:", a), null;
        const P = _e(a, Oe);
        if (U && y && !y.isDragging && (P && ee !== a.data.id ? (A.current && (clearTimeout(A.current), A.current = null), re(a.data.id), y.setDraggingId(a.data.id)) : !P && ee === a.data.id && (A.current && clearTimeout(A.current), A.current = setTimeout(() => {
          re(null), y.setDraggingId(null), A.current = null;
        }, 100))), U && te && y) {
          const W = y.draggingId === a.data.id, ie = y.isDragging && y.draggingId === a.data.id;
          return te({
            key: a.data.id,
            annotation: a,
            active: P,
            isDragging: ie,
            isHovered: W,
            onDotDragStart: y.handleDotDragStart,
            onDotDrag: y.handleDotDrag,
            onMoveStart: y.handleMoveStart,
            onMove: y.handleMove,
            onDragEnd: y.handleMouseUp,
            allowDelete: oe,
            onRemoveAnnotation: s
          });
        }
        return _({
          key: a.data.id,
          annotation: a,
          active: P
        });
      }),
      !R && f && f.geometry && O && O({
        annotation: f
      })
    ] }),
    /* @__PURE__ */ p.jsx(hn, { "data-testid": "annotation-target", ref: F, onClick: lt, onMouseUp: at, onMouseDown: ct }),
    !S && T && T({
      type: me,
      annotation: f
    }),
    se.map((a) => !a.data || typeof a.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render content:", a), null) : _e(a, Oe) && j && j({
      key: a.data.id,
      annotation: a
    })),
    !Y && f && f.selection && f.selection.showEditor && G && b && G({
      annotation: f,
      onChange: b,
      onSubmit: ut
    }),
    /* @__PURE__ */ p.jsx("div", { children: h })
  ] });
}, pn = mt(vt("isMouseHovering"), Tt("relativeMousePos"))(fn);
process.env.NODE_ENV !== "production" && (pn.displayName = "ComposedAnnotation");
export {
  pn as Annotation,
  Xt as DeleteButton,
  qt as DraggableBox,
  we as DraggableDot,
  Gt as MoveButton,
  Te as OvalSelector,
  pe as PointSelector,
  le as RectangleSelector,
  pn as default
};
