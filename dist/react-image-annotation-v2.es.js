import W, { useState as Qe, useRef as be, useEffect as ye, PureComponent as Ke, useCallback as M } from "react";
import _, { keyframes as et } from "styled-components";
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
function tt() {
  if (Ce) return ee;
  Ce = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(s, i, c) {
    var a = null;
    if (c !== void 0 && (a = "" + c), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      c = {};
      for (var l in i)
        l !== "key" && (c[l] = i[l]);
    } else c = i;
    return i = c.ref, {
      $$typeof: t,
      type: s,
      key: a,
      ref: i !== void 0 ? i : null,
      props: c
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
function nt() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && function() {
    function t(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === re ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case N:
          return "Fragment";
        case S:
          return "Profiler";
        case w:
          return "StrictMode";
        case fe:
          return "Suspense";
        case oe:
          return "SuspenseList";
        case he:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case y:
            return "Portal";
          case q:
            return (o.displayName || "Context") + ".Provider";
          case O:
            return (o._context.displayName || "Context") + ".Consumer";
          case ne:
            var d = o.render;
            return o = o.displayName, o || (o = d.displayName || d.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case de:
            return d = o.displayName || null, d !== null ? d : t(o.type) || "Memo";
          case V:
            d = o._payload, o = o._init;
            try {
              return t(o(d));
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
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var m = d.error, E = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return m.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), e(o);
      }
    }
    function s(o) {
      if (o === N) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === V)
        return "<...>";
      try {
        var d = t(o);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var o = P.A;
      return o === null ? null : o.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (U.call(o, "key")) {
        var d = Object.getOwnPropertyDescriptor(o, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function l(o, d) {
      function m() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: m,
        configurable: !0
      });
    }
    function u() {
      var o = t(this.type);
      return x[o] || (x[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function h(o, d, m, E, v, k, G, F) {
      return m = k.ref, o = {
        $$typeof: f,
        type: o,
        key: d,
        props: k,
        _owner: v
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(o, "ref", {
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
        value: G
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function b(o, d, m, E, v, k, G, F) {
      var T = d.children;
      if (T !== void 0)
        if (E)
          if (B(T)) {
            for (E = 0; E < T.length; E++)
              R(T[E]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(T);
      if (U.call(d, "key")) {
        T = t(o);
        var j = Object.keys(d).filter(function(me) {
          return me !== "key";
        });
        E = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", J[T + E] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          T,
          j,
          T
        ), J[T + E] = !0);
      }
      if (T = null, m !== void 0 && (n(m), T = "" + m), a(d) && (n(d.key), T = "" + d.key), "key" in d) {
        m = {};
        for (var Z in d)
          Z !== "key" && (m[Z] = d[Z]);
      } else m = d;
      return T && l(
        m,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), h(
        o,
        T,
        k,
        v,
        i(),
        m,
        G,
        F
      );
    }
    function R(o) {
      typeof o == "object" && o !== null && o.$$typeof === f && o._store && (o._store.validated = 1);
    }
    var g = W, f = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), q = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), he = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), P = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, B = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(o) {
        return o();
      }
    };
    var I, x = {}, L = g["react-stack-bottom-frame"].bind(
      g,
      c
    )(), X = Y(s(c)), J = {};
    te.Fragment = N, te.jsx = function(o, d, m, E, v) {
      var k = 1e4 > P.recentlyCreatedOwnerStacks++;
      return b(
        o,
        d,
        m,
        !1,
        E,
        v,
        k ? Error("react-stack-top-frame") : L,
        k ? Y(s(o)) : X
      );
    }, te.jsxs = function(o, d, m, E, v) {
      var k = 1e4 > P.recentlyCreatedOwnerStacks++;
      return b(
        o,
        d,
        m,
        !0,
        E,
        v,
        k ? Error("react-stack-top-frame") : L,
        k ? Y(s(o)) : X
      );
    };
  }()), te;
}
var ke;
function ot() {
  return ke || (ke = 1, process.env.NODE_ENV === "production" ? se.exports = tt() : se.exports = nt()), se.exports;
}
var p = ot();
function rt(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, n) => (...s) => e(n(...s)));
}
const st = ({
  elem: t,
  e
}) => {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const {
    pageY: n,
    pageX: s
  } = e, {
    left: i,
    right: c,
    bottom: a,
    top: l
  } = t.getBoundingClientRect();
  return s > i && s < c && n > l && n < a;
}, it = (t = "isMouseHovering") => (e) => {
  const n = (i) => {
    const [c, a] = Qe(!1), l = be(null);
    ye(() => {
      const h = (b) => {
        const R = l.current, g = {
          pageX: b.pageX,
          pageY: b.pageY
        };
        a(st({
          elem: R,
          e: g
        }));
      };
      return document.addEventListener("mousemove", h), () => {
        document.removeEventListener("mousemove", h);
      };
    }, []);
    const u = {
      [t]: {
        innerRef: (h) => l.current = h,
        isHoveringOver: c
      }
    };
    return W.createElement(e, {
      ...i,
      ...u
    });
  }, s = e.displayName || e.name || "Component";
  return n.displayName = `IsMouseHovering(${s})`, n;
}, He = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.currentTarget.getBoundingClientRect(), n = t.clientX - e.x, s = t.clientY - e.y;
  return {
    x: n / e.width * 100,
    y: s / e.height * 100
  };
}, Pe = (t, e, n) => Math.max(t, Math.min(e, n)), ct = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), s = e.pageX - n.left, i = e.pageY - (n.top + window.scrollY);
  return {
    x: Pe(0, 100, s / n.width * 100),
    y: Pe(0, 100, i / n.height * 100)
  };
}, D = (t) => at(t) ? lt(t) ? (ut(t) && t.preventDefault(), ct(t)) : {
  x: null
} : He(t), at = (t) => t.targetTouches !== void 0, lt = (t) => t.targetTouches.length === 1, ut = (t) => t.type === "touchmove", ft = (t = "relativeMousePos") => (e) => {
  class n extends Ke {
    constructor(c) {
      super(c), this.container = null, this._innerRef = (a) => {
        this.container = a;
      }, this._onMouseMove = (a) => {
        const l = He(a);
        this.setState(l);
      }, this._onTouchMove = (a) => {
        if (!this.container || a.targetTouches.length !== 1) return;
        const l = a.targetTouches[0], u = this.container.offsetParent;
        if (!u) return;
        const h = l.pageX - u.offsetLeft, b = l.pageY - u.offsetTop, R = this.container.width, g = this.container.height;
        typeof R == "number" && typeof g == "number" && R > 0 && g > 0 ? this.setState({
          x: h / R * 100,
          y: b / g * 100
        }) : this.setState({
          x: null,
          y: null
        });
      }, this._onMouseLeave = (a) => {
        this.setState({
          x: null,
          y: null
        });
      }, this._onTouchLeave = (a) => {
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
      const c = {
        innerRef: this._innerRef,
        // Pass HOC's ref setter
        onMouseMove: this._onMouseMove,
        // Pass HOC's event handler
        onMouseLeave: this._onMouseLeave,
        onTouchMove: this._onTouchMove,
        onTouchLeave: this._onTouchLeave,
        x: this.state.x,
        y: this.state.y
      }, a = {
        [t]: c
      };
      return W.createElement(e, {
        ...this.props,
        ...a
      });
    }
  }
  const s = e.displayName || e.name || "Component";
  return n.displayName = `withRelativeMousePos(${s})`, n;
};
var ie = { exports: {} }, ge = {};
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
function dt() {
  if (Ae) return ge;
  Ae = 1;
  var t = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return ge.c = function(e) {
    return t.H.useMemoCache(e);
  }, ge;
}
var xe = {};
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
function ht() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var t = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    xe.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  }()), xe;
}
var je;
function mt() {
  return je || (je = 1, process.env.NODE_ENV === "production" ? ie.exports = dt() : ie.exports = ht()), ie.exports;
}
var H = mt();
const pt = _.div`
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
  const e = H.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.y}%`, i = `${n.x}%`;
  let c;
  return e[0] !== s || e[1] !== i ? (c = /* @__PURE__ */ p.jsx(pt, { style: {
    top: s,
    left: i
  } }), e[0] = s, e[1] = i, e[2] = c) : c = e[2], c;
}
const gt = _.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, xt = _.div`
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
  const e = H.c(11), {
    onChange: n,
    onSubmit: s,
    onFocus: i,
    onBlur: c,
    value: a
  } = t;
  let l;
  e[0] !== c || e[1] !== n || e[2] !== i || e[3] !== a ? (l = /* @__PURE__ */ p.jsx(gt, { children: /* @__PURE__ */ p.jsx("textarea", { placeholder: "Write description", onFocus: i, onBlur: c, onChange: n, value: a }) }), e[0] = c, e[1] = n, e[2] = i, e[3] = a, e[4] = l) : l = e[4];
  let u;
  e[5] !== s || e[6] !== a ? (u = a && /* @__PURE__ */ p.jsx(xt, { onClick: s, children: "Submit" }), e[5] = s, e[6] = a, e[7] = u) : u = e[7];
  let h;
  return e[8] !== l || e[9] !== u ? (h = /* @__PURE__ */ p.jsxs(W.Fragment, { children: [
    l,
    u
  ] }), e[8] = l, e[9] = u, e[10] = h) : h = e[10], h;
}, bt = et`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, yt = _.div`
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
`, Et = (t) => {
  var O;
  const e = H.c(17), {
    annotation: n,
    onChange: s,
    onSubmit: i,
    className: c,
    style: a
  } = t, l = c === void 0 ? "" : c;
  let u;
  e[0] !== a ? (u = a === void 0 ? {} : a, e[0] = a, e[1] = u) : u = e[1];
  const h = u, {
    geometry: b
  } = n;
  if (!b)
    return null;
  const R = `${b.x}%`, g = `${b.y + b.height}%`;
  let f;
  e[2] !== h || e[3] !== R || e[4] !== g ? (f = {
    position: "absolute",
    left: R,
    top: g,
    ...h
  }, e[2] = h, e[3] = R, e[4] = g, e[5] = f) : f = e[5];
  let y;
  e[6] !== n || e[7] !== s ? (y = (q) => s({
    ...n,
    data: {
      ...n.data,
      text: q.target.value
    }
  }), e[6] = n, e[7] = s, e[8] = y) : y = e[8];
  const N = (O = n.data) == null ? void 0 : O.text;
  let w;
  e[9] !== i || e[10] !== y || e[11] !== N ? (w = /* @__PURE__ */ p.jsx(vt, { onChange: y, onSubmit: i, value: N }), e[9] = i, e[10] = y, e[11] = N, e[12] = w) : w = e[12];
  let S;
  return e[13] !== l || e[14] !== f || e[15] !== w ? (S = /* @__PURE__ */ p.jsx(yt, { className: l, style: f, children: w }), e[13] = l, e[14] = f, e[15] = w, e[16] = S) : S = e[16], S;
}, ce = _.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, Tt = _.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Ue(t) {
  const e = H.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.y}%`;
  let i;
  e[0] !== s ? (i = /* @__PURE__ */ p.jsx(ce, { style: {
    height: s,
    width: "100%"
  } }), e[0] = s, e[1] = i) : i = e[1];
  const c = `${n.y}%`, a = `${n.height}%`, l = `${n.x}%`;
  let u;
  e[2] !== c || e[3] !== a || e[4] !== l ? (u = /* @__PURE__ */ p.jsx(ce, { style: {
    top: c,
    height: a,
    width: l
  } }), e[2] = c, e[3] = a, e[4] = l, e[5] = u) : u = e[5];
  const h = `${n.y}%`, b = `${n.x + n.width}%`, R = `${n.height}%`, g = `${100 - (n.x + n.width)}%`;
  let f;
  e[6] !== h || e[7] !== b || e[8] !== R || e[9] !== g ? (f = /* @__PURE__ */ p.jsx(ce, { style: {
    top: h,
    left: b,
    height: R,
    width: g
  } }), e[6] = h, e[7] = b, e[8] = R, e[9] = g, e[10] = f) : f = e[10];
  const y = `${n.y + n.height}%`, N = `${100 - (n.y + n.height)}%`;
  let w;
  e[11] !== y || e[12] !== N ? (w = /* @__PURE__ */ p.jsx(ce, { style: {
    top: y,
    height: N,
    width: "100%"
  } }), e[11] = y, e[12] = N, e[13] = w) : w = e[13];
  let S;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== i || e[17] !== f || e[18] !== w || e[19] !== u ? (S = /* @__PURE__ */ p.jsxs(Tt, { className: t.className, style: t.style, children: [
    i,
    u,
    f,
    w
  ] }), e[14] = t.className, e[15] = t.style, e[16] = i, e[17] = f, e[18] = w, e[19] = u, e[20] = S) : S = e[20], S;
}
Ue.defaultProps = {
  className: "",
  style: {}
};
const wt = _.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Xe(t) {
  const e = H.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.x}%`, i = `${n.y}%`, c = `${n.height}%`, a = `${n.width}%`, l = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  e[0] !== t.style || e[1] !== s || e[2] !== i || e[3] !== c || e[4] !== a || e[5] !== l ? (u = {
    position: "absolute",
    left: s,
    top: i,
    height: c,
    width: a,
    boxShadow: l,
    ...t.style
  }, e[0] = t.style, e[1] = s, e[2] = i, e[3] = c, e[4] = a, e[5] = l, e[6] = u) : u = e[6];
  let h;
  return e[7] !== t.className || e[8] !== u ? (h = /* @__PURE__ */ p.jsx(wt, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = h) : h = e[9], h;
}
Xe.defaultProps = {
  className: "",
  style: {}
};
const Rt = _.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Ee(t) {
  const e = H.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.x}%`, i = `${n.y}%`, c = `${n.height}%`, a = `${n.width}%`, l = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  e[0] !== t.style || e[1] !== s || e[2] !== i || e[3] !== c || e[4] !== a || e[5] !== l ? (u = {
    position: "absolute",
    left: s,
    top: i,
    height: c,
    width: a,
    boxShadow: l,
    ...t.style
  }, e[0] = t.style, e[1] = s, e[2] = i, e[3] = c, e[4] = a, e[5] = l, e[6] = u) : u = e[6];
  let h;
  return e[7] !== t.className || e[8] !== u ? (h = /* @__PURE__ */ p.jsx(Rt, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = h) : h = e[9], h;
}
Ee.defaultProps = {
  className: "",
  style: {}
};
const Mt = _.div`
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
function Ge(t) {
  const e = H.c(8), {
    geometry: n
  } = t.annotation;
  if (!n || typeof n.x > "u" || typeof n.y > "u" || typeof n.width > "u" || typeof n.height > "u")
    return null;
  const s = `${n.x}%`, i = `${n.y + n.height}%`;
  let c;
  e[0] !== t.style || e[1] !== s || e[2] !== i ? (c = {
    position: "absolute",
    left: s,
    top: i,
    ...t.style
  }, e[0] = t.style, e[1] = s, e[2] = i, e[3] = c) : c = e[3];
  const a = t.annotation.data && t.annotation.data.text;
  let l;
  return e[4] !== t.className || e[5] !== c || e[6] !== a ? (l = /* @__PURE__ */ p.jsx(Mt, { style: c, className: t.className, children: a }), e[4] = t.className, e[5] = c, e[6] = a, e[7] = l) : l = e[7], l;
}
Ge.defaultProps = {
  style: {},
  className: ""
};
const Te = _.div`
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
`, Fe = "RECTANGLE";
function Nt({
  x: t,
  y: e
}, n) {
  if (!n) return !1;
  const s = Math.min(n.x, n.x + n.width), i = Math.max(n.x, n.x + n.width), c = Math.min(n.y, n.y + n.height), a = Math.max(n.y, n.y + n.height);
  return !(t < s || e < c || t > i || e > a);
}
function St(t) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const e = Math.abs(t.width), n = Math.abs(t.height);
  return e * n;
}
const Ct = {
  onTouchStart(t, e) {
    return Ye(t, e);
  },
  onTouchEnd(t, e) {
    return Ie(t);
  },
  onTouchMove(t, e) {
    return Le(t, e);
  },
  onMouseDown(t, e) {
    return Ye(t, e);
  },
  onMouseUp(t, e) {
    return Ie(t);
  },
  onMouseMove(t, e) {
    return Le(t, e);
  }
};
function Ye(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: s
    } = D(e);
    return {
      ...t,
      selection: {
        ...t.selection,
        mode: "SELECTING",
        anchorX: n,
        anchorY: s
      }
    };
  }
}
function Ie(t, e) {
  if (t.selection) {
    const {
      selection: n,
      geometry: s
    } = t;
    if (!s)
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
function Le(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: s
    } = t.selection, {
      x: i,
      y: c
    } = D(e), a = i - n, l = c - s;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Fe,
        x: a > 0 ? n : i,
        y: l > 0 ? s : c,
        width: Math.abs(a),
        height: Math.abs(l)
      }
    };
  }
  return t;
}
const ae = {
  TYPE: Fe,
  intersects: Nt,
  area: St,
  methods: Ct
}, ze = "POINT";
function _t({
  x: t,
  y: e
}, n, s) {
  if (!n) return !1;
  const i = Math.abs(t - n.x), c = Math.abs(e - n.y);
  return i === 0 && c === 0;
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
        ...D(e),
        width: 0,
        height: 0,
        type: ze
      }
    };
  }
}, le = {
  TYPE: ze,
  intersects: _t,
  area: kt,
  methods: Pt
}, ue = (t) => Math.pow(t, 2), we = "OVAL";
function At({
  x: t,
  y: e
}, n) {
  if (!n || !n.width || !n.height) return !1;
  const s = Math.abs(n.width), i = Math.abs(n.height), c = {
    x: n.x + s / 2,
    y: n.y + i / 2
  }, a = s / 2, l = i / 2;
  if (a === 0 || l === 0) return !1;
  const u = t - c.x, h = e - c.y;
  return ue(u) / ue(a) + ue(h) / ue(l) <= 1;
}
function $t(t) {
  return !t || !t.width || !t.height || t.width <= 0 || t.height <= 0 ? 0 : Math.PI * Math.abs(t.width) * Math.abs(t.height) / 4;
}
const jt = {
  onTouchStart(t, e) {
    return Ot(t, e);
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
        y: s
      } = D(e);
      return {
        ...t,
        selection: {
          ...t.selection,
          mode: "SELECTING",
          anchorX: n,
          anchorY: s
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
        anchorY: s
      } = t.selection, {
        x: i,
        y: c
      } = D(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: we,
          x: Math.min(n, i),
          y: Math.min(s, c),
          width: Math.abs(i - n),
          height: Math.abs(c - s)
        }
      };
    }
    return t;
  }
};
function Ot(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: s
    } = D(e);
    return {
      ...t,
      selection: {
        ...t.selection,
        mode: "SELECTING",
        anchorX: n,
        anchorY: s
      }
    };
  }
}
function Yt(t, e) {
  if (t.selection) {
    const {
      selection: n,
      geometry: s
    } = t;
    if (!s)
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
      anchorY: s
    } = t.selection, {
      x: i,
      y: c
    } = D(e), a = i - n, l = c - s;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: we,
        x: a > 0 ? n : i,
        y: l > 0 ? s : c,
        width: Math.abs(a),
        height: Math.abs(l)
      }
    };
  }
  return t;
}
const ve = {
  TYPE: we,
  intersects: At,
  area: $t,
  methods: jt
}, De = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: ae.TYPE,
  selectors: [ae, le, ve],
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  activeAnnotationComparator: (t, e) => t === e,
  renderSelector: ({
    annotation: t
  }) => {
    switch (t.geometry.type) {
      case ae.TYPE:
        return /* @__PURE__ */ p.jsx(Ue, { annotation: t });
      case le.TYPE:
        return /* @__PURE__ */ p.jsx(Oe, { annotation: t });
      case ve.TYPE:
        return /* @__PURE__ */ p.jsx(Ee, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ p.jsx(Et, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case ae.TYPE:
        return /* @__PURE__ */ p.jsx(Xe, { annotation: e, active: n }, t);
      case le.TYPE:
        return /* @__PURE__ */ p.jsx(Oe, { annotation: e, active: n }, t);
      case ve.TYPE:
        return /* @__PURE__ */ p.jsx(Ee, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ p.jsx(Ge, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case le.TYPE:
        return /* @__PURE__ */ p.jsx(Te, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ p.jsx(Te, { children: "Click and Drag to Annotate" });
    }
  }
}, Lt = _.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Te} {
    opacity: 1;
  }
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, Dt = _.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`, Ht = _.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`, Ut = _.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`, Xt = (t) => {
  var Ne;
  const {
    selectors: e,
    ...n
  } = t, s = {
    ...De,
    ...n,
    // Spread the rest of incomingProps
    // Explicitly handle selectors: use incoming if provided, else use default
    selectors: e !== void 0 ? e : De.selectors
  }, {
    // OwnProps (destructured with defaults applied via spread above)
    src: i,
    alt: c,
    style: a,
    className: l,
    containerRef: u,
    // Renamed
    children: h,
    annotations: b,
    type: R,
    selectors: g,
    value: f,
    onChange: y,
    onSubmit: N,
    // Renamed
    activeAnnotationComparator: w,
    activeAnnotations: S,
    disableAnnotation: O,
    disableSelector: q,
    renderSelector: ne,
    disableEditor: fe,
    renderEditor: oe,
    renderHighlight: de,
    renderContent: V,
    disableOverlay: he,
    renderOverlay: re,
    allowTouch: P,
    onImageMouseUp: U,
    onImageMouseDown: B,
    onImageMouseMove: Y,
    onImageClick: I,
    // HOC-injected props
    relativeMousePos: x,
    isMouseHovering: L
  } = s, X = be(null), J = be(null), {
    x: o,
    y: d
  } = x, m = M((r) => {
    if (r)
      return g.find((C) => C.TYPE === r);
  }, [g]), E = R || g && g[0] && g[0].TYPE, v = M((r, C) => {
    if (O)
      return;
    const A = m(E);
    if (A && A.methods[r]) {
      const Q = A.methods[r], $ = Q(f || {}, C);
      typeof $ > "u" ? process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(r)} of type ${E} returned undefined.
             Make sure to explicitly return the previous state or new state.`) : y && y($);
    }
  }, [O, m, E, f, y]), k = M((r) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && P && r.preventDefault(), v("onTouchStart", r);
  }, [P, v]), G = M((r) => {
    v("onTouchEnd", r);
  }, [v]), F = M((r) => {
    x && typeof x.onTouchMove == "function" && x.onTouchMove(r), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && P && r.preventDefault(), v("onTouchMove", r);
  }, [x, P, v]), T = M((r) => {
    x && typeof x.onTouchLeave == "function" && x.onTouchLeave(r);
  }, [x]);
  ye(() => {
    const r = J.current;
    if (P && r)
      return r.ontouchstart = k, r.ontouchend = G, r.ontouchmove = F, r.ontouchcancel = T, () => {
        r && (r.ontouchstart = null, r.ontouchend = null, r.ontouchmove = null, r.ontouchcancel = null);
      };
    r && (r.ontouchstart = null, r.ontouchend = null, r.ontouchmove = null, r.ontouchcancel = null);
  }, [P, k, G, F, T]);
  const j = M((r) => {
    X.current = r, x && typeof x.innerRef == "function" && x.innerRef(r);
  }, [x]), Z = M((r) => {
    L && typeof L.innerRef == "function" && L.innerRef(r), u && (typeof u == "function" ? u(r) : u.current = r);
  }, [L, u]), me = M((r, C) => {
    const A = X.current;
    return !A || r === null || C === null ? void 0 : b.map(($) => {
      const {
        geometry: z
      } = $;
      if (!z) return !1;
      const K = m(z.type);
      return K && K.intersects({
        x: r,
        y: C
      }, z, A) ? $ : !1;
    }).filter(($) => !!$).sort(($, z) => {
      const K = m($.geometry.type), Se = m(z.geometry.type);
      return !K || !Se || !A ? 0 : K.area($.geometry, A) - Se.area(z.geometry, A);
    })[0];
  }, [b, m, X]), We = M((r) => {
    x && typeof x.onMouseMove == "function" && x.onMouseMove(r);
    const C = r;
    Y && Y(C), v("onMouseMove", C);
  }, [x, Y, v]), qe = M((r) => {
    x && typeof x.onMouseLeave == "function" && x.onMouseLeave(r);
  }, [x]), Ve = M((r) => {
    U && U(r), v("onMouseUp", r);
  }, [U, v]), Be = M((r) => {
    B && B(r), v("onMouseDown", r);
  }, [B, v]), Je = M((r) => {
    console.log("onClickHandler", r, "onImageClick", I), I && I(r), v("onClick", r);
  }, [I, v]), Ze = M(() => {
    N && f && N(f);
  }, [N, f]), pe = M((r) => {
    var C;
    r.key === "Escape" && y && ((C = f == null ? void 0 : f.selection) != null && C.showEditor || f != null && f.geometry) && y({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [f, y]);
  ye(() => {
    var r;
    if ((r = f == null ? void 0 : f.selection) != null && r.showEditor)
      return window.addEventListener("keydown", pe), () => window.removeEventListener("keydown", pe);
  }, [(Ne = f == null ? void 0 : f.selection) == null ? void 0 : Ne.showEditor, pe]);
  const Re = M((r, C) => S && !!S.find((Q) => w ? w(r, Q) : r.data.id === Q) || C === r, [S, w]), Me = me(o, d);
  return /* @__PURE__ */ p.jsxs(Lt, { style: a, ref: Z, onMouseLeave: qe, onTouchCancel: T, onMouseMove: We, $allowTouch: P, className: l, children: [
    /* @__PURE__ */ p.jsx(Dt, { alt: c || "Annotation Image", src: i, draggable: !1, ref: j }),
    /* @__PURE__ */ p.jsxs(Ht, { children: [
      b.map((r) => !r.data || typeof r.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render highlight:", r), null) : de({
        key: r.data.id,
        annotation: r,
        active: Re(r, Me)
      })),
      !q && f && f.geometry && ne && ne({
        annotation: f
      })
    ] }),
    /* @__PURE__ */ p.jsx(Ut, { "data-testid": "annotation-target", ref: J, onClick: Je, onMouseUp: Ve, onMouseDown: Be }),
    !he && re && re({
      type: E,
      annotation: f
    }),
    b.map((r) => !r.data || typeof r.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render content:", r), null) : Re(r, Me) && V && V({
      key: r.data.id,
      annotation: r
    })),
    !fe && f && f.selection && f.selection.showEditor && oe && y && oe({
      annotation: f,
      onChange: y,
      onSubmit: Ze
    }),
    /* @__PURE__ */ p.jsx("div", { children: h })
  ] });
}, Gt = rt(it("isMouseHovering"), ft("relativeMousePos"))(Xt);
process.env.NODE_ENV !== "production" && (Gt.displayName = "ComposedAnnotation");
export {
  Gt as Annotation,
  ve as OvalSelector,
  le as PointSelector,
  ae as RectangleSelector,
  Gt as default
};
