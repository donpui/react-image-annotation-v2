import W, { useState as Ze, useRef as ve, useEffect as Ie, PureComponent as Qe, useCallback as N } from "react";
import _, { keyframes as Ke } from "styled-components";
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
var Me;
function et() {
  if (Me) return ee;
  Me = 1;
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
var Ne;
function tt() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    function t(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === re ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case M:
          return "Fragment";
        case S:
          return "Profiler";
        case E:
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
          case R:
            return "Portal";
          case q:
            return (o.displayName || "Context") + ".Provider";
          case Y:
            return (o._context.displayName || "Context") + ".Consumer";
          case ne:
            var f = o.render;
            return o = o.displayName, o || (o = f.displayName || f.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case de:
            return f = o.displayName || null, f !== null ? f : t(o.type) || "Memo";
          case V:
            f = o._payload, o = o._init;
            try {
              return t(o(f));
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
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var p = f.error, b = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return p.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), e(o);
      }
    }
    function s(o) {
      if (o === M) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === V)
        return "<...>";
      try {
        var f = t(o);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var o = A.A;
      return o === null ? null : o.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (H.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function l(o, f) {
      function p() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      p.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: p,
        configurable: !0
      });
    }
    function u() {
      var o = t(this.type);
      return v[o] || (v[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function d(o, f, p, b, C, g, G, F) {
      return p = g.ref, o = {
        $$typeof: h,
        type: o,
        key: f,
        props: g,
        _owner: C
      }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(o, "ref", {
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
    function y(o, f, p, b, C, g, G, F) {
      var T = f.children;
      if (T !== void 0)
        if (b)
          if (B(T)) {
            for (b = 0; b < T.length; b++)
              w(T[b]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(T);
      if (H.call(f, "key")) {
        T = t(o);
        var k = Object.keys(f).filter(function(me) {
          return me !== "key";
        });
        b = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", J[T + b] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          T,
          k,
          T
        ), J[T + b] = !0);
      }
      if (T = null, p !== void 0 && (n(p), T = "" + p), a(f) && (n(f.key), T = "" + f.key), "key" in f) {
        p = {};
        for (var Z in f)
          Z !== "key" && (p[Z] = f[Z]);
      } else p = f;
      return T && l(
        p,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), d(
        o,
        T,
        g,
        C,
        i(),
        p,
        G,
        F
      );
    }
    function w(o) {
      typeof o == "object" && o !== null && o.$$typeof === h && o._store && (o._store.validated = 1);
    }
    var x = W, h = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), q = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), he = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), A = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, B = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(o) {
        return o();
      }
    };
    var U, v = {}, j = x["react-stack-bottom-frame"].bind(
      x,
      c
    )(), X = I(s(c)), J = {};
    te.Fragment = M, te.jsx = function(o, f, p, b, C) {
      var g = 1e4 > A.recentlyCreatedOwnerStacks++;
      return y(
        o,
        f,
        p,
        !1,
        b,
        C,
        g ? Error("react-stack-top-frame") : j,
        g ? I(s(o)) : X
      );
    }, te.jsxs = function(o, f, p, b, C) {
      var g = 1e4 > A.recentlyCreatedOwnerStacks++;
      return y(
        o,
        f,
        p,
        !0,
        b,
        C,
        g ? Error("react-stack-top-frame") : j,
        g ? I(s(o)) : X
      );
    };
  }()), te;
}
var Se;
function nt() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? se.exports = et() : se.exports = tt()), se.exports;
}
var m = nt();
function ot(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, n) => (...s) => e(n(...s)));
}
const rt = ({
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
}, st = (t = "isMouseHovering") => (e) => {
  const n = (i) => {
    const [c, a] = Ze(!1), l = ve(null);
    Ie(() => {
      const d = (y) => {
        const w = l.current, x = {
          pageX: y.pageX,
          pageY: y.pageY
        };
        a(rt({
          elem: w,
          e: x
        }));
      };
      return document.addEventListener("mousemove", d), () => {
        document.removeEventListener("mousemove", d);
      };
    }, []);
    const u = {
      [t]: {
        innerRef: (d) => l.current = d,
        isHoveringOver: c
      }
    };
    return W.createElement(e, {
      ...i,
      ...u
    });
  }, s = e.displayName || e.name || "Component";
  return n.displayName = `IsMouseHovering(${s})`, n;
}, Le = (t) => {
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
}, Ce = (t, e, n) => Math.max(t, Math.min(e, n)), it = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), s = e.pageX - n.left, i = e.pageY - (n.top + window.scrollY);
  return {
    x: Ce(0, 100, s / n.width * 100),
    y: Ce(0, 100, i / n.height * 100)
  };
}, L = (t) => ct(t) ? at(t) ? (lt(t) && t.preventDefault(), it(t)) : {
  x: null
} : Le(t), ct = (t) => t.targetTouches !== void 0, at = (t) => t.targetTouches.length === 1, lt = (t) => t.type === "touchmove", ut = (t = "relativeMousePos") => (e) => {
  class n extends Qe {
    constructor(c) {
      super(c), this.container = null, this._innerRef = (a) => {
        this.container = a;
      }, this._onMouseMove = (a) => {
        const l = Le(a);
        this.setState(l);
      }, this._onTouchMove = (a) => {
        if (!this.container || a.targetTouches.length !== 1) return;
        const l = a.targetTouches[0], u = this.container.offsetParent;
        if (!u) return;
        const d = l.pageX - u.offsetLeft, y = l.pageY - u.offsetTop, w = this.container.width, x = this.container.height;
        typeof w == "number" && typeof x == "number" && w > 0 && x > 0 ? this.setState({
          x: d / w * 100,
          y: y / x * 100
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
var _e;
function ft() {
  if (_e) return pe;
  _e = 1;
  var t = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
var Pe;
function dt() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
var Ae;
function ht() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? ie.exports = ft() : ie.exports = dt()), ie.exports;
}
var D = ht();
const mt = _.div`
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
function ke(t) {
  const e = D.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.y}%`, i = `${n.x}%`;
  let c;
  return e[0] !== s || e[1] !== i ? (c = /* @__PURE__ */ m.jsx(mt, { style: {
    top: s,
    left: i
  } }), e[0] = s, e[1] = i, e[2] = c) : c = e[2], c;
}
const pt = _.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, gt = _.div`
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
  const e = D.c(11), {
    onChange: n,
    onSubmit: s,
    onFocus: i,
    onBlur: c,
    value: a
  } = t;
  let l;
  e[0] !== c || e[1] !== n || e[2] !== i || e[3] !== a ? (l = /* @__PURE__ */ m.jsx(pt, { children: /* @__PURE__ */ m.jsx("textarea", { placeholder: "Write description", onFocus: i, onBlur: c, onChange: n, value: a }) }), e[0] = c, e[1] = n, e[2] = i, e[3] = a, e[4] = l) : l = e[4];
  let u;
  e[5] !== s || e[6] !== a ? (u = a && /* @__PURE__ */ m.jsx(gt, { onClick: s, children: "Submit" }), e[5] = s, e[6] = a, e[7] = u) : u = e[7];
  let d;
  return e[8] !== l || e[9] !== u ? (d = /* @__PURE__ */ m.jsxs(W.Fragment, { children: [
    l,
    u
  ] }), e[8] = l, e[9] = u, e[10] = d) : d = e[10], d;
}, vt = Ke`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, bt = _.div`
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
`, yt = (t) => {
  var Y;
  const e = D.c(17), {
    annotation: n,
    onChange: s,
    onSubmit: i,
    className: c,
    style: a
  } = t, l = c === void 0 ? "" : c;
  let u;
  e[0] !== a ? (u = a === void 0 ? {} : a, e[0] = a, e[1] = u) : u = e[1];
  const d = u, {
    geometry: y
  } = n;
  if (!y)
    return null;
  const w = `${y.x}%`, x = `${y.y + y.height}%`;
  let h;
  e[2] !== d || e[3] !== w || e[4] !== x ? (h = {
    position: "absolute",
    left: w,
    top: x,
    ...d
  }, e[2] = d, e[3] = w, e[4] = x, e[5] = h) : h = e[5];
  let R;
  e[6] !== n || e[7] !== s ? (R = (q) => s({
    ...n,
    data: {
      ...n.data,
      text: q.target.value
    }
  }), e[6] = n, e[7] = s, e[8] = R) : R = e[8];
  const M = (Y = n.data) == null ? void 0 : Y.text;
  let E;
  e[9] !== i || e[10] !== R || e[11] !== M ? (E = /* @__PURE__ */ m.jsx(xt, { onChange: R, onSubmit: i, value: M }), e[9] = i, e[10] = R, e[11] = M, e[12] = E) : E = e[12];
  let S;
  return e[13] !== l || e[14] !== h || e[15] !== E ? (S = /* @__PURE__ */ m.jsx(bt, { className: l, style: h, children: E }), e[13] = l, e[14] = h, e[15] = E, e[16] = S) : S = e[16], S;
}, ce = _.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, Et = _.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function De(t) {
  const e = D.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.y}%`;
  let i;
  e[0] !== s ? (i = /* @__PURE__ */ m.jsx(ce, { style: {
    height: s,
    width: "100%"
  } }), e[0] = s, e[1] = i) : i = e[1];
  const c = `${n.y}%`, a = `${n.height}%`, l = `${n.x}%`;
  let u;
  e[2] !== c || e[3] !== a || e[4] !== l ? (u = /* @__PURE__ */ m.jsx(ce, { style: {
    top: c,
    height: a,
    width: l
  } }), e[2] = c, e[3] = a, e[4] = l, e[5] = u) : u = e[5];
  const d = `${n.y}%`, y = `${n.x + n.width}%`, w = `${n.height}%`, x = `${100 - (n.x + n.width)}%`;
  let h;
  e[6] !== d || e[7] !== y || e[8] !== w || e[9] !== x ? (h = /* @__PURE__ */ m.jsx(ce, { style: {
    top: d,
    left: y,
    height: w,
    width: x
  } }), e[6] = d, e[7] = y, e[8] = w, e[9] = x, e[10] = h) : h = e[10];
  const R = `${n.y + n.height}%`, M = `${100 - (n.y + n.height)}%`;
  let E;
  e[11] !== R || e[12] !== M ? (E = /* @__PURE__ */ m.jsx(ce, { style: {
    top: R,
    height: M,
    width: "100%"
  } }), e[11] = R, e[12] = M, e[13] = E) : E = e[13];
  let S;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== i || e[17] !== h || e[18] !== E || e[19] !== u ? (S = /* @__PURE__ */ m.jsxs(Et, { className: t.className, style: t.style, children: [
    i,
    u,
    h,
    E
  ] }), e[14] = t.className, e[15] = t.style, e[16] = i, e[17] = h, e[18] = E, e[19] = u, e[20] = S) : S = e[20], S;
}
De.defaultProps = {
  className: "",
  style: {}
};
const Tt = _.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function He(t) {
  const e = D.c(10), {
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
  let d;
  return e[7] !== t.className || e[8] !== u ? (d = /* @__PURE__ */ m.jsx(Tt, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = d) : d = e[9], d;
}
He.defaultProps = {
  className: "",
  style: {}
};
const wt = _.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function be(t) {
  const e = D.c(10), {
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
  let d;
  return e[7] !== t.className || e[8] !== u ? (d = /* @__PURE__ */ m.jsx(wt, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = d) : d = e[9], d;
}
be.defaultProps = {
  className: "",
  style: {}
};
const Rt = _.div`
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
  return e[4] !== t.className || e[5] !== c || e[6] !== a ? (l = /* @__PURE__ */ m.jsx(Rt, { style: c, className: t.className, children: a }), e[4] = t.className, e[5] = c, e[6] = a, e[7] = l) : l = e[7], l;
}
Ue.defaultProps = {
  style: {},
  className: ""
};
const ye = _.div`
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
`, Xe = "RECTANGLE";
function Mt({
  x: t,
  y: e
}, n) {
  if (!n) return !1;
  const s = Math.min(n.x, n.x + n.width), i = Math.max(n.x, n.x + n.width), c = Math.min(n.y, n.y + n.height), a = Math.max(n.y, n.y + n.height);
  return !(t < s || e < c || t > i || e > a);
}
function Nt(t) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const e = Math.abs(t.width), n = Math.abs(t.height);
  return e * n;
}
const St = {
  onTouchStart(t, e) {
    return $e(t, e);
  },
  onTouchEnd(t, e) {
    return Oe(t);
  },
  onTouchMove(t, e) {
    return je(t, e);
  },
  onMouseDown(t, e) {
    return $e(t, e);
  },
  onMouseUp(t, e) {
    return Oe(t);
  },
  onMouseMove(t, e) {
    return je(t, e);
  }
};
function $e(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: s
    } = L(e);
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
function Oe(t, e) {
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
function je(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: s
    } = t.selection, {
      x: i,
      y: c
    } = L(e), a = i - n, l = c - s;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Xe,
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
  TYPE: Xe,
  intersects: Mt,
  area: Nt,
  methods: St
}, Ge = "POINT";
function Ct({
  x: t,
  y: e
}, n, s) {
  if (!n) return !1;
  const i = Math.abs(t - n.x), c = Math.abs(e - n.y);
  return i === 0 && c === 0;
}
function _t(t, e) {
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
        ...L(e),
        width: 0,
        height: 0,
        type: Ge
      }
    };
  }
}, le = {
  TYPE: Ge,
  intersects: Ct,
  area: _t,
  methods: Pt
}, ue = (t) => Math.pow(t, 2), Ee = "OVAL";
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
  const u = t - c.x, d = e - c.y;
  return ue(u) / ue(a) + ue(d) / ue(l) <= 1;
}
function kt(t) {
  return !t || !t.width || !t.height || t.width <= 0 || t.height <= 0 ? 0 : Math.PI * Math.abs(t.width) * Math.abs(t.height) / 4;
}
const $t = {
  onTouchStart(t, e) {
    return Ot(t, e);
  },
  onTouchEnd(t, e) {
    return jt(t);
  },
  onTouchMove(t, e) {
    return Yt(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: s
      } = L(e);
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
      } = L(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: Ee,
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
    } = L(e);
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
function jt(t, e) {
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
function Yt(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: s
    } = t.selection, {
      x: i,
      y: c
    } = L(e), a = i - n, l = c - s;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Ee,
        x: a > 0 ? n : i,
        y: l > 0 ? s : c,
        width: Math.abs(a),
        height: Math.abs(l)
      }
    };
  }
  return t;
}
const xe = {
  TYPE: Ee,
  intersects: At,
  area: kt,
  methods: $t
}, Ye = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: ae.TYPE,
  selectors: [ae, le, xe],
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
        return /* @__PURE__ */ m.jsx(De, { annotation: t });
      case le.TYPE:
        return /* @__PURE__ */ m.jsx(ke, { annotation: t });
      case xe.TYPE:
        return /* @__PURE__ */ m.jsx(be, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ m.jsx(yt, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case ae.TYPE:
        return /* @__PURE__ */ m.jsx(He, { annotation: e, active: n }, t);
      case le.TYPE:
        return /* @__PURE__ */ m.jsx(ke, { annotation: e, active: n }, t);
      case xe.TYPE:
        return /* @__PURE__ */ m.jsx(be, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ m.jsx(Ue, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case le.TYPE:
        return /* @__PURE__ */ m.jsx(ye, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ m.jsx(ye, { children: "Click and Drag to Annotate" });
    }
  }
}, It = _.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${ye} {
    opacity: 1;
  }
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, Lt = _.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`, Dt = _.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`, Ht = _.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`, Ut = (t) => {
  const {
    selectors: e,
    ...n
  } = t, s = {
    ...Ye,
    ...n,
    // Spread the rest of incomingProps
    // Explicitly handle selectors: use incoming if provided, else use default
    selectors: e !== void 0 ? e : Ye.selectors
  }, {
    // OwnProps (destructured with defaults applied via spread above)
    src: i,
    alt: c,
    style: a,
    className: l,
    containerRef: u,
    // Renamed
    children: d,
    annotations: y,
    type: w,
    selectors: x,
    value: h,
    onChange: R,
    onSubmit: M,
    // Renamed
    activeAnnotationComparator: E,
    activeAnnotations: S,
    disableAnnotation: Y,
    disableSelector: q,
    renderSelector: ne,
    disableEditor: fe,
    renderEditor: oe,
    renderHighlight: de,
    renderContent: V,
    disableOverlay: he,
    renderOverlay: re,
    allowTouch: A,
    onImageMouseUp: H,
    onImageMouseDown: B,
    onImageMouseMove: I,
    onImageClick: U,
    // HOC-injected props
    relativeMousePos: v,
    isMouseHovering: j
  } = s, X = ve(null), J = ve(null), {
    isHoveringOver: o
  } = j, {
    x: f,
    y: p
  } = v, b = N((r) => {
    if (r)
      return x.find((P) => P.TYPE === r);
  }, [x]), C = w || x && x[0] && x[0].TYPE;
  b(C);
  const g = N((r, P) => {
    if (Y)
      return;
    const $ = b(C);
    if ($ && $.methods[r]) {
      const Q = $.methods[r], O = Q(h || {}, P);
      typeof O > "u" ? process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(r)} of type ${C} returned undefined.
             Make sure to explicitly return the previous state or new state.`) : R && R(O);
    }
  }, [Y, b, C, h, R]), G = N((r) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && A && r.preventDefault(), g("onTouchStart", r);
  }, [A, g]), F = N((r) => {
    g("onTouchEnd", r);
  }, [g]), T = N((r) => {
    v && typeof v.onTouchMove == "function" && v.onTouchMove(r), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && A && r.preventDefault(), g("onTouchMove", r);
  }, [v, A, g]), k = N((r) => {
    v && typeof v.onTouchLeave == "function" && v.onTouchLeave(r);
  }, [v]);
  Ie(() => {
    const r = J.current;
    if (A && r)
      return r.ontouchstart = G, r.ontouchend = F, r.ontouchmove = T, r.ontouchcancel = k, () => {
        r && (r.ontouchstart = null, r.ontouchend = null, r.ontouchmove = null, r.ontouchcancel = null);
      };
    r && (r.ontouchstart = null, r.ontouchend = null, r.ontouchmove = null, r.ontouchcancel = null);
  }, [A, G, F, T, k]);
  const Z = N((r) => {
    X.current = r, v && typeof v.innerRef == "function" && v.innerRef(r);
  }, [v]), me = N((r) => {
    j && typeof j.innerRef == "function" && j.innerRef(r), u && (typeof u == "function" ? u(r) : u.current = r);
  }, [j, u]), Fe = N((r, P) => {
    const $ = X.current;
    return !$ || r === null || P === null ? void 0 : y.map((O) => {
      const {
        geometry: z
      } = O;
      if (!z) return !1;
      const K = b(z.type);
      return K && K.intersects({
        x: r,
        y: P
      }, z, $) ? O : !1;
    }).filter((O) => !!O).sort((O, z) => {
      const K = b(O.geometry.type), Re = b(z.geometry.type);
      return !K || !Re || !$ ? 0 : K.area(O.geometry, $) - Re.area(z.geometry, $);
    })[0];
  }, [y, b, X]), ze = N((r) => {
    v && typeof v.onMouseMove == "function" && v.onMouseMove(r);
    const P = r;
    I && I(P), g("onMouseMove", P);
  }, [v, I, g]), We = N((r) => {
    v && typeof v.onMouseLeave == "function" && v.onMouseLeave(r);
  }, [v]), qe = N((r) => {
    H && H(r), g("onMouseUp", r);
  }, [H, g]), Ve = N((r) => {
    B && B(r), g("onMouseDown", r);
  }, [B, g]), Be = N((r) => {
    U && U(r), g("onClick", r);
  }, [U, g]), Je = N(() => {
    M && h && M(h);
  }, [M, h]), Te = N((r, P) => S && !!S.find((Q) => E ? E(r, Q) : r.data.id === Q) || P === r, [S, E]), we = Fe(f, p);
  return /* @__PURE__ */ m.jsxs(It, { style: a, ref: me, onMouseLeave: We, onTouchCancel: k, onMouseMove: ze, $allowTouch: A, className: l, children: [
    /* @__PURE__ */ m.jsx(Lt, { alt: c || "Annotation Image", src: i, draggable: !1, ref: Z }),
    /* @__PURE__ */ m.jsxs(Dt, { children: [
      y.map((r) => !r.data || typeof r.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render highlight:", r), null) : de({
        key: r.data.id,
        annotation: r,
        active: Te(r, we)
      })),
      !q && h && h.geometry && ne && ne({
        annotation: h
      })
    ] }),
    /* @__PURE__ */ m.jsx(Ht, { "data-testid": "annotation-target", ref: J, onClick: Be, onMouseUp: qe, onMouseDown: Ve }),
    !he && re && re({
      type: C,
      annotation: h
    }),
    y.map((r) => !r.data || typeof r.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render content:", r), null) : Te(r, we) && V && V({
      key: r.data.id,
      annotation: r
    })),
    !fe && h && h.selection && h.selection.showEditor && oe && R && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    M && // This check is to ensure the onSubmitProp function is provided
    oe({
      annotation: h,
      onChange: R,
      onSubmit: Je
    }),
    /* @__PURE__ */ m.jsx("div", { children: d })
  ] });
}, Xt = ot(st("isMouseHovering"), ut("relativeMousePos"))(Ut);
process.env.NODE_ENV !== "production" && (Xt.displayName = "ComposedAnnotation");
export {
  Xt as Annotation,
  xe as OvalSelector,
  le as PointSelector,
  ae as RectangleSelector,
  Xt as default
};
