import se, { useState as ve, useRef as ue, useEffect as Ce, PureComponent as it, useCallback as P } from "react";
import I, { keyframes as at } from "styled-components";
var he = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function ct() {
  if (Ye) return ae;
  Ye = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(s, o, i) {
    var u = null;
    if (i !== void 0 && (u = "" + i), o.key !== void 0 && (u = "" + o.key), "key" in o) {
      i = {};
      for (var l in o)
        l !== "key" && (i[l] = o[l]);
    } else i = o;
    return o = i.ref, {
      $$typeof: t,
      type: s,
      key: u,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return ae.Fragment = e, ae.jsx = n, ae.jsxs = n, ae;
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
var Ie;
function lt() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === E ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case T:
          return "Fragment";
        case v:
          return "Profiler";
        case m:
          return "StrictMode";
        case _:
          return "Suspense";
        case U:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case x:
            return "Portal";
          case R:
            return (r.displayName || "Context") + ".Provider";
          case C:
            return (r._context.displayName || "Context") + ".Consumer";
          case L:
            var f = r.render;
            return r = r.displayName, r || (r = f.displayName || f.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case O:
            return f = r.displayName || null, f !== null ? f : t(r.type) || "Memo";
          case j:
            f = r._payload, r = r._init;
            try {
              return t(r(f));
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
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var w = f.error, A = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return w.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), e(r);
      }
    }
    function s(r) {
      if (r === T) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === j)
        return "<...>";
      try {
        var f = t(r);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var r = D.A;
      return r === null ? null : r.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function u(r) {
      if (H.call(r, "key")) {
        var f = Object.getOwnPropertyDescriptor(r, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function l(r, f) {
      function w() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: w,
        configurable: !0
      });
    }
    function c() {
      var r = t(this.type);
      return z[r] || (z[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function d(r, f, w, A, G, X, k, F) {
      return w = X.ref, r = {
        $$typeof: h,
        type: r,
        key: f,
        props: X,
        _owner: G
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: c
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
        value: k
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function p(r, f, w, A, G, X, k, F) {
      var N = f.children;
      if (N !== void 0)
        if (A)
          if (K(N)) {
            for (A = 0; A < N.length; A++)
              y(N[A]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(N);
      if (H.call(f, "key")) {
        N = t(r);
        var W = Object.keys(f).filter(function(de) {
          return de !== "key";
        });
        A = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", M[N + A] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          N,
          W,
          N
        ), M[N + A] = !0);
      }
      if (N = null, w !== void 0 && (n(w), N = "" + w), u(f) && (n(f.key), N = "" + f.key), "key" in f) {
        w = {};
        for (var Y in f)
          Y !== "key" && (w[Y] = f[Y]);
      } else w = f;
      return N && l(
        w,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), d(
        r,
        N,
        X,
        G,
        o(),
        w,
        k,
        F
      );
    }
    function y(r) {
      typeof r == "object" && r !== null && r.$$typeof === h && r._store && (r._store.validated = 1);
    }
    var b = se, h = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), R = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), D = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, K = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var Z, z = {}, Q = b["react-stack-bottom-frame"].bind(
      b,
      i
    )(), ee = q(s(i)), M = {};
    ce.Fragment = T, ce.jsx = function(r, f, w, A, G) {
      var X = 1e4 > D.recentlyCreatedOwnerStacks++;
      return p(
        r,
        f,
        w,
        !1,
        A,
        G,
        X ? Error("react-stack-top-frame") : Q,
        X ? q(s(r)) : ee
      );
    }, ce.jsxs = function(r, f, w, A, G) {
      var X = 1e4 > D.recentlyCreatedOwnerStacks++;
      return p(
        r,
        f,
        w,
        !0,
        A,
        G,
        X ? Error("react-stack-top-frame") : Q,
        X ? q(s(r)) : ee
      );
    };
  }()), ce;
}
var _e;
function ut() {
  return _e || (_e = 1, process.env.NODE_ENV === "production" ? he.exports = ct() : he.exports = lt()), he.exports;
}
var g = ut();
function dt(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, n) => (...s) => e(n(...s)));
}
const ht = ({
  elem: t,
  e
}) => {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const {
    pageY: n,
    pageX: s
  } = e, {
    left: o,
    right: i,
    bottom: u,
    top: l
  } = t.getBoundingClientRect();
  return s > o && s < i && n > l && n < u;
}, ft = (t = "isMouseHovering") => (e) => {
  const n = (o) => {
    const [i, u] = ve(!1), l = ue(null);
    Ce(() => {
      const d = (p) => {
        const y = l.current, b = {
          pageX: p.pageX,
          pageY: p.pageY
        };
        u(ht({
          elem: y,
          e: b
        }));
      };
      return document.addEventListener("mousemove", d), () => {
        document.removeEventListener("mousemove", d);
      };
    }, []);
    const c = {
      [t]: {
        innerRef: (d) => l.current = d,
        isHoveringOver: i
      }
    };
    return se.createElement(e, {
      ...o,
      ...c
    });
  }, s = e.displayName || e.name || "Component";
  return n.displayName = `IsMouseHovering(${s})`, n;
}, ze = (t) => {
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
}, Oe = (t, e, n) => Math.max(t, Math.min(e, n)), gt = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), s = e.pageX - n.left, o = e.pageY - (n.top + window.scrollY);
  return {
    x: Oe(0, 100, s / n.width * 100),
    y: Oe(0, 100, o / n.height * 100)
  };
}, ne = (t) => pt(t) ? mt(t) ? (xt(t) && t.preventDefault(), gt(t)) : {
  x: null
} : ze(t), pt = (t) => t.targetTouches !== void 0, mt = (t) => t.targetTouches.length === 1, xt = (t) => t.type === "touchmove", vt = (t = "relativeMousePos") => (e) => {
  class n extends it {
    constructor(i) {
      super(i), this.container = null, this._innerRef = (u) => {
        this.container = u;
      }, this._onMouseMove = (u) => {
        const l = ze(u);
        this.setState(l);
      }, this._onTouchMove = (u) => {
        if (!this.container || u.targetTouches.length !== 1) return;
        const l = u.targetTouches[0], c = this.container.offsetParent;
        if (!c) return;
        const d = l.pageX - c.offsetLeft, p = l.pageY - c.offsetTop, y = this.container.width, b = this.container.height;
        typeof y == "number" && typeof b == "number" && y > 0 && b > 0 ? this.setState({
          x: d / y * 100,
          y: p / b * 100
        }) : this.setState({
          x: null,
          y: null
        });
      }, this._onMouseLeave = (u) => {
        this.setState({
          x: null,
          y: null
        });
      }, this._onTouchLeave = (u) => {
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
      }, u = {
        [t]: i
      };
      return se.createElement(e, {
        ...this.props,
        ...u
      });
    }
  }
  const s = e.displayName || e.name || "Component";
  return n.displayName = `withRelativeMousePos(${s})`, n;
}, bt = (t, e) => {
  const [n, s] = ve(!1), [o, i] = ve(null), [u, l] = ve(null), c = ue(null), d = ue(t);
  d.current = t;
  const p = P((m, v) => {
    const C = d.current.map((R) => R.data.id === m ? {
      ...R,
      isDragging: v
    } : R);
    d.current = C, e(C), s(v), i(v ? m : null);
  }, [e]), y = P((m, v) => {
    p(m, !0);
    const C = d.current.find((R) => R.data.id === m);
    C && (c.current = {
      ...C.geometry,
      initialCursorPosition: v
    });
  }, [p]), b = P((m, v, C) => {
    if (!o || !c.current) return;
    const R = m.clientX - C.x, L = m.clientY - C.y, _ = document.querySelector(".annotation-container");
    if (!_) return;
    const U = _.getBoundingClientRect(), O = U.width, j = U.height, S = 100, E = {
      ...c.current
    };
    switch (v) {
      case "top":
        E.height = Math.min(c.current.height - L / j * S, c.current.y + c.current.height), E.y = Math.max(c.current.y + L / j * S, 0);
        break;
      case "right":
        E.width = Math.min(c.current.width + R / O * S, S - c.current.x);
        break;
      case "bottom":
        E.height = Math.min(c.current.height + L / j * S, S - c.current.y);
        break;
      case "left":
        E.width = Math.min(c.current.width - R / O * S, c.current.x + c.current.width), E.x = Math.max(c.current.x + R / O * S, 0);
        break;
    }
    E.width = Math.max(E.width, 0), E.height = Math.max(E.height, 0), E.x = Math.min(E.x, S - E.width), E.y = Math.min(E.y, S - E.height);
    const D = d.current.map((H) => H.data.id === o ? {
      ...H,
      geometry: E
    } : H);
    d.current = D, e(D);
  }, [o, e]), h = P((m, v) => {
    p(m, !0);
    const C = d.current.find((R) => R.data.id === m);
    C && (c.current = {
      ...C.geometry,
      initialCursorPosition: v
    });
  }, [p]), x = P((m, v) => {
    if (!o || !c.current) return;
    const C = m.clientX - v.x, R = m.clientY - v.y, L = document.querySelector(".annotation-container");
    if (!L) return;
    const _ = L.getBoundingClientRect(), U = _.width, O = _.height, j = 100, S = {
      ...c.current
    };
    S.x = Math.max(Math.min(c.current.x + C / U * j, j - c.current.width), 0), S.y = Math.max(Math.min(c.current.y + R / O * j, j - c.current.height), 0);
    const E = d.current.map((D) => D.data.id === o ? {
      ...D,
      geometry: S
    } : D);
    d.current = E, e(E);
  }, [o, e]), T = P(() => {
    o && (s(!1), i(null)), c.current = null;
  }, [o]);
  return {
    isDragging: n,
    draggingId: o,
    activeAnnotationId: u,
    setActiveAnnotationId: l,
    setDraggingId: i,
    handleDotDragStart: y,
    handleDotDrag: b,
    handleMoveStart: h,
    handleMove: x,
    handleMouseUp: T
  };
};
var fe = { exports: {} }, Te = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function yt() {
  if (Le) return Te;
  Le = 1;
  var t = se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return Te.c = function(e) {
    return t.H.useMemoCache(e);
  }, Te;
}
var Me = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Et() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var t = se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Me.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  }()), Me;
}
var Xe;
function wt() {
  return Xe || (Xe = 1, process.env.NODE_ENV === "production" ? fe.exports = yt() : fe.exports = Et()), fe.exports;
}
var J = wt();
const Tt = I.div`
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
function Re(t) {
  const e = J.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.y}%`, o = `${n.x}%`;
  let i;
  return e[0] !== s || e[1] !== o ? (i = /* @__PURE__ */ g.jsx(Tt, { style: {
    top: s,
    left: o
  } }), e[0] = s, e[1] = o, e[2] = i) : i = e[2], i;
}
const Mt = I.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, Rt = I.div`
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
`, Ct = (t) => {
  const e = J.c(11), {
    onChange: n,
    onSubmit: s,
    onFocus: o,
    onBlur: i,
    value: u
  } = t;
  let l;
  e[0] !== i || e[1] !== n || e[2] !== o || e[3] !== u ? (l = /* @__PURE__ */ g.jsx(Mt, { children: /* @__PURE__ */ g.jsx("textarea", { placeholder: "Write description", onFocus: o, onBlur: i, onChange: n, value: u }) }), e[0] = i, e[1] = n, e[2] = o, e[3] = u, e[4] = l) : l = e[4];
  let c;
  e[5] !== s || e[6] !== u ? (c = u && /* @__PURE__ */ g.jsx(Rt, { onClick: s, children: "Submit" }), e[5] = s, e[6] = u, e[7] = c) : c = e[7];
  let d;
  return e[8] !== l || e[9] !== c ? (d = /* @__PURE__ */ g.jsxs(se.Fragment, { children: [
    l,
    c
  ] }), e[8] = l, e[9] = c, e[10] = d) : d = e[10], d;
}, St = at`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Dt = I.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${St} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, Pt = (t) => {
  var C;
  const e = J.c(17), {
    annotation: n,
    onChange: s,
    onSubmit: o,
    className: i,
    style: u
  } = t, l = i === void 0 ? "" : i;
  let c;
  e[0] !== u ? (c = u === void 0 ? {} : u, e[0] = u, e[1] = c) : c = e[1];
  const d = c, {
    geometry: p
  } = n;
  if (!p)
    return null;
  const y = `${p.x}%`, b = `${p.y + p.height}%`;
  let h;
  e[2] !== d || e[3] !== y || e[4] !== b ? (h = {
    position: "absolute",
    left: y,
    top: b,
    ...d
  }, e[2] = d, e[3] = y, e[4] = b, e[5] = h) : h = e[5];
  let x;
  e[6] !== n || e[7] !== s ? (x = (R) => s({
    ...n,
    data: {
      ...n.data,
      text: R.target.value
    }
  }), e[6] = n, e[7] = s, e[8] = x) : x = e[8];
  const T = (C = n.data) == null ? void 0 : C.text;
  let m;
  e[9] !== o || e[10] !== x || e[11] !== T ? (m = /* @__PURE__ */ g.jsx(Ct, { onChange: x, onSubmit: o, value: T }), e[9] = o, e[10] = x, e[11] = T, e[12] = m) : m = e[12];
  let v;
  return e[13] !== l || e[14] !== h || e[15] !== m ? (v = /* @__PURE__ */ g.jsx(Dt, { className: l, style: h, children: m }), e[13] = l, e[14] = h, e[15] = m, e[16] = v) : v = e[16], v;
}, ge = I.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, Nt = I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function We(t) {
  const e = J.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.y}%`;
  let o;
  e[0] !== s ? (o = /* @__PURE__ */ g.jsx(ge, { style: {
    height: s,
    width: "100%"
  } }), e[0] = s, e[1] = o) : o = e[1];
  const i = `${n.y}%`, u = `${n.height}%`, l = `${n.x}%`;
  let c;
  e[2] !== i || e[3] !== u || e[4] !== l ? (c = /* @__PURE__ */ g.jsx(ge, { style: {
    top: i,
    height: u,
    width: l
  } }), e[2] = i, e[3] = u, e[4] = l, e[5] = c) : c = e[5];
  const d = `${n.y}%`, p = `${n.x + n.width}%`, y = `${n.height}%`, b = `${100 - (n.x + n.width)}%`;
  let h;
  e[6] !== d || e[7] !== p || e[8] !== y || e[9] !== b ? (h = /* @__PURE__ */ g.jsx(ge, { style: {
    top: d,
    left: p,
    height: y,
    width: b
  } }), e[6] = d, e[7] = p, e[8] = y, e[9] = b, e[10] = h) : h = e[10];
  const x = `${n.y + n.height}%`, T = `${100 - (n.y + n.height)}%`;
  let m;
  e[11] !== x || e[12] !== T ? (m = /* @__PURE__ */ g.jsx(ge, { style: {
    top: x,
    height: T,
    width: "100%"
  } }), e[11] = x, e[12] = T, e[13] = m) : m = e[13];
  let v;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== o || e[17] !== h || e[18] !== m || e[19] !== c ? (v = /* @__PURE__ */ g.jsxs(Nt, { className: t.className, style: t.style, children: [
    o,
    c,
    h,
    m
  ] }), e[14] = t.className, e[15] = t.style, e[16] = o, e[17] = h, e[18] = m, e[19] = c, e[20] = v) : v = e[20], v;
}
We.defaultProps = {
  className: "",
  style: {}
};
const kt = I.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function be(t) {
  const e = J.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.x}%`, o = `${n.y}%`, i = `${n.height}%`, u = `${n.width}%`, l = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let c;
  e[0] !== t.style || e[1] !== s || e[2] !== o || e[3] !== i || e[4] !== u || e[5] !== l ? (c = {
    position: "absolute",
    left: s,
    top: o,
    height: i,
    width: u,
    boxShadow: l,
    ...t.style
  }, e[0] = t.style, e[1] = s, e[2] = o, e[3] = i, e[4] = u, e[5] = l, e[6] = c) : c = e[6];
  let d;
  return e[7] !== t.className || e[8] !== c ? (d = /* @__PURE__ */ g.jsx(kt, { className: t.className, style: c }), e[7] = t.className, e[8] = c, e[9] = d) : d = e[9], d;
}
be.defaultProps = {
  className: "",
  style: {}
};
const At = I.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function ye(t) {
  const e = J.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const s = `${n.x}%`, o = `${n.y}%`, i = `${n.height}%`, u = `${n.width}%`, l = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let c;
  e[0] !== t.style || e[1] !== s || e[2] !== o || e[3] !== i || e[4] !== u || e[5] !== l ? (c = {
    position: "absolute",
    left: s,
    top: o,
    height: i,
    width: u,
    boxShadow: l,
    ...t.style
  }, e[0] = t.style, e[1] = s, e[2] = o, e[3] = i, e[4] = u, e[5] = l, e[6] = c) : c = e[6];
  let d;
  return e[7] !== t.className || e[8] !== c ? (d = /* @__PURE__ */ g.jsx(At, { className: t.className, style: c }), e[7] = t.className, e[8] = c, e[9] = d) : d = e[9], d;
}
ye.defaultProps = {
  className: "",
  style: {}
};
const $t = I.div`
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
function qe(t) {
  const e = J.c(8), {
    geometry: n
  } = t.annotation;
  if (!n || typeof n.x > "u" || typeof n.y > "u" || typeof n.width > "u" || typeof n.height > "u")
    return null;
  const s = `${n.x}%`, o = `${n.y + n.height}%`;
  let i;
  e[0] !== t.style || e[1] !== s || e[2] !== o ? (i = {
    position: "absolute",
    left: s,
    top: o,
    ...t.style
  }, e[0] = t.style, e[1] = s, e[2] = o, e[3] = i) : i = e[3];
  const u = t.annotation.data && t.annotation.data.text;
  let l;
  return e[4] !== t.className || e[5] !== i || e[6] !== u ? (l = /* @__PURE__ */ g.jsx($t, { style: i, className: t.className, children: u }), e[4] = t.className, e[5] = i, e[6] = u, e[7] = l) : l = e[7], l;
}
qe.defaultProps = {
  style: {},
  className: ""
};
const Se = I.div`
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
`, jt = I.div`
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
`, Yt = I.div`
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
`, pe = (t) => {
  const e = J.c(9), {
    position: n,
    onDragStart: s,
    onDrag: o,
    onDragEnd: i,
    annotationId: u
  } = t;
  let l;
  e[0] !== u || e[1] !== o || e[2] !== i || e[3] !== s || e[4] !== n ? (l = (y) => {
    y.preventDefault(), y.stopPropagation();
    const b = {
      x: y.clientX,
      y: y.clientY
    };
    s(u, b);
    const h = (T) => {
      T.preventDefault(), T.stopPropagation(), o(T, n, b);
    }, x = (T) => {
      T.preventDefault(), T.stopPropagation(), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", x), i == null || i();
    };
    document.addEventListener("mousemove", h), document.addEventListener("mouseup", x);
  }, e[0] = u, e[1] = o, e[2] = i, e[3] = s, e[4] = n, e[5] = l) : l = e[5];
  const c = l, d = _t;
  let p;
  return e[6] !== c || e[7] !== n ? (p = /* @__PURE__ */ g.jsx(jt, { position: n, onMouseDown: c, onClick: d, "data-type": "dot" }), e[6] = c, e[7] = n, e[8] = p) : p = e[8], p;
}, It = (t) => {
  const e = J.c(7), {
    onMoveStart: n,
    onMove: s,
    onMoveEnd: o,
    annotationId: i
  } = t;
  let u;
  e[0] !== i || e[1] !== s || e[2] !== o || e[3] !== n ? (u = (p) => {
    p.preventDefault(), p.stopPropagation();
    const y = {
      x: p.clientX,
      y: p.clientY
    };
    n(i, y);
    const b = (x) => {
      x.preventDefault(), x.stopPropagation(), s(x, y);
    }, h = (x) => {
      x.preventDefault(), x.stopPropagation(), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", h), o == null || o();
    };
    document.addEventListener("mousemove", b), document.addEventListener("mouseup", h);
  }, e[0] = i, e[1] = s, e[2] = o, e[3] = n, e[4] = u) : u = e[4];
  const l = u, c = Ot;
  let d;
  return e[5] !== l ? (d = /* @__PURE__ */ g.jsx(Yt, { onMouseDown: l, onClick: c, "data-type": "move-button", children: "↕" }), e[5] = l, e[6] = d) : d = e[6], d;
};
function _t(t) {
  t.preventDefault(), t.stopPropagation();
}
function Ot(t) {
  t.preventDefault(), t.stopPropagation();
}
const Lt = I.div`
  position: absolute;
  border: ${(t) => t.$isDragging ? "1px dashed #FFFFFF" : "1px solid #24B3C8"};
  background: rgba(36, 179, 200, 0.1);
  pointer-events: auto;
  z-index: 10;
  cursor: move;
  
  &:hover {
    border: ${(t) => t.$isDragging ? "1px dashed #FFFFFF" : "2px solid #1e90ff"};
    background: rgba(36, 179, 200, 0.2);
    box-shadow: 0 0 8px rgba(30, 144, 255, 0.4);
  }
`, Ht = (t) => {
  var K, q, Z, z, Q, ee, M;
  const e = J.c(43), {
    annotation: n,
    onDotDragStart: s,
    onDotDrag: o,
    onMoveStart: i,
    onMove: u,
    onDragEnd: l,
    isDragging: c
  } = t, {
    geometry: d
  } = n;
  if (!d || !d.type || typeof d.x != "number" || typeof d.y != "number")
    return null;
  let p;
  e[0] !== ((K = n.data) == null ? void 0 : K.id) || e[1] !== u || e[2] !== i ? (p = (r) => {
    var k;
    const f = r.target;
    if (f.closest('[data-type="dot"]') || f.closest('[data-type="move-button"]'))
      return;
    r.preventDefault(), r.stopPropagation();
    const w = {
      x: r.clientX,
      y: r.clientY
    }, A = (k = n.data) == null ? void 0 : k.id;
    A && i(A, w);
    const G = (F) => {
      F.preventDefault(), F.stopPropagation(), u(F, w);
    }, X = (F) => {
      F.preventDefault(), F.stopPropagation(), document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", X);
    };
    document.addEventListener("mousemove", G), document.addEventListener("mouseup", X);
  }, e[0] = (q = n.data) == null ? void 0 : q.id, e[1] = u, e[2] = i, e[3] = p) : p = e[3];
  const y = p, b = Xt, h = `${d.x}%`, x = `${d.y}%`, T = `${d.width}%`, m = `${d.height}%`;
  let v;
  e[4] !== h || e[5] !== x || e[6] !== T || e[7] !== m ? (v = {
    left: h,
    top: x,
    width: T,
    height: m
  }, e[4] = h, e[5] = x, e[6] = T, e[7] = m, e[8] = v) : v = e[8];
  const C = (Z = n.data) == null ? void 0 : Z.id;
  let R;
  e[9] !== o || e[10] !== s || e[11] !== l || e[12] !== C ? (R = /* @__PURE__ */ g.jsx(pe, { position: "top", onDragStart: s, onDrag: o, onDragEnd: l, annotationId: C }), e[9] = o, e[10] = s, e[11] = l, e[12] = C, e[13] = R) : R = e[13];
  const L = (z = n.data) == null ? void 0 : z.id;
  let _;
  e[14] !== o || e[15] !== s || e[16] !== l || e[17] !== L ? (_ = /* @__PURE__ */ g.jsx(pe, { position: "right", onDragStart: s, onDrag: o, onDragEnd: l, annotationId: L }), e[14] = o, e[15] = s, e[16] = l, e[17] = L, e[18] = _) : _ = e[18];
  const U = (Q = n.data) == null ? void 0 : Q.id;
  let O;
  e[19] !== o || e[20] !== s || e[21] !== l || e[22] !== U ? (O = /* @__PURE__ */ g.jsx(pe, { position: "bottom", onDragStart: s, onDrag: o, onDragEnd: l, annotationId: U }), e[19] = o, e[20] = s, e[21] = l, e[22] = U, e[23] = O) : O = e[23];
  const j = (ee = n.data) == null ? void 0 : ee.id;
  let S;
  e[24] !== o || e[25] !== s || e[26] !== l || e[27] !== j ? (S = /* @__PURE__ */ g.jsx(pe, { position: "left", onDragStart: s, onDrag: o, onDragEnd: l, annotationId: j }), e[24] = o, e[25] = s, e[26] = l, e[27] = j, e[28] = S) : S = e[28];
  const E = (M = n.data) == null ? void 0 : M.id;
  let D;
  e[29] !== l || e[30] !== u || e[31] !== i || e[32] !== E ? (D = /* @__PURE__ */ g.jsx(It, { onMoveStart: i, onMove: u, onMoveEnd: l, annotationId: E }), e[29] = l, e[30] = u, e[31] = i, e[32] = E, e[33] = D) : D = e[33];
  let H;
  return e[34] !== y || e[35] !== c || e[36] !== _ || e[37] !== O || e[38] !== S || e[39] !== D || e[40] !== v || e[41] !== R ? (H = /* @__PURE__ */ g.jsxs(Lt, { style: v, $isDragging: c, onMouseDown: y, onClick: b, children: [
    R,
    _,
    O,
    S,
    D
  ] }), e[34] = y, e[35] = c, e[36] = _, e[37] = O, e[38] = S, e[39] = D, e[40] = v, e[41] = R, e[42] = H) : H = e[42], H;
};
function Xt(t) {
  t.preventDefault(), t.stopPropagation();
}
const Ve = "RECTANGLE";
function Ft({
  x: t,
  y: e
}, n) {
  if (!n) return !1;
  const s = Math.min(n.x, n.x + n.width), o = Math.max(n.x, n.x + n.width), i = Math.min(n.y, n.y + n.height), u = Math.max(n.y, n.y + n.height);
  return !(t < s || e < i || t > o || e > u);
}
function Ut(t) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const e = Math.abs(t.width), n = Math.abs(t.height);
  return e * n;
}
const Gt = {
  onTouchStart(t, e) {
    return Fe(t, e);
  },
  onTouchEnd(t, e) {
    return Ue(t);
  },
  onTouchMove(t, e) {
    return Ge(t, e);
  },
  onMouseDown(t, e) {
    return Fe(t, e);
  },
  onMouseUp(t, e) {
    return Ue(t);
  },
  onMouseMove(t, e) {
    return Ge(t, e);
  }
};
function Fe(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: s
    } = ne(e);
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
function Ue(t, e) {
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
function Ge(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: s
    } = t.selection, {
      x: o,
      y: i
    } = ne(e), u = o - n, l = i - s;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Ve,
        x: u > 0 ? n : o,
        y: l > 0 ? s : i,
        width: Math.abs(u),
        height: Math.abs(l)
      }
    };
  }
  return t;
}
const re = {
  TYPE: Ve,
  intersects: Ft,
  area: Ut,
  methods: Gt
}, Je = "POINT";
function Bt({
  x: t,
  y: e
}, n, s) {
  if (!n) return !1;
  const o = Math.abs(t - n.x), i = Math.abs(e - n.y);
  return o === 0 && i === 0;
}
function zt(t, e) {
  return 0;
}
const Wt = {
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
        ...ne(e),
        width: 0,
        height: 0,
        type: Je
      }
    };
  }
}, le = {
  TYPE: Je,
  intersects: Bt,
  area: zt,
  methods: Wt
}, me = (t) => Math.pow(t, 2), De = "OVAL";
function qt({
  x: t,
  y: e
}, n) {
  if (!n || !n.width || !n.height) return !1;
  const s = Math.abs(n.width), o = Math.abs(n.height), i = {
    x: n.x + s / 2,
    y: n.y + o / 2
  }, u = s / 2, l = o / 2;
  if (u === 0 || l === 0) return !1;
  const c = t - i.x, d = e - i.y;
  return me(c) / me(u) + me(d) / me(l) <= 1;
}
function Vt(t) {
  return !t || !t.width || !t.height || t.width <= 0 || t.height <= 0 ? 0 : Math.PI * Math.abs(t.width) * Math.abs(t.height) / 4;
}
const Jt = {
  onTouchStart(t, e) {
    return Zt(t, e);
  },
  onTouchEnd(t, e) {
    return Qt(t);
  },
  onTouchMove(t, e) {
    return Kt(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: s
      } = ne(e);
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
        x: o,
        y: i
      } = ne(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: De,
          x: Math.min(n, o),
          y: Math.min(s, i),
          width: Math.abs(o - n),
          height: Math.abs(i - s)
        }
      };
    }
    return t;
  }
};
function Zt(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: s
    } = ne(e);
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
function Qt(t, e) {
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
function Kt(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: s
    } = t.selection, {
      x: o,
      y: i
    } = ne(e), u = o - n, l = i - s;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: De,
        x: u > 0 ? n : o,
        y: l > 0 ? s : i,
        width: Math.abs(u),
        height: Math.abs(l)
      }
    };
  }
  return t;
}
const xe = {
  TYPE: De,
  intersects: qt,
  area: Vt,
  methods: Jt
}, Be = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: re.TYPE,
  selectors: [re, le, xe],
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  activeAnnotationComparator: (t, e) => t === e,
  renderSelector: ({
    annotation: t
  }) => {
    switch (t.geometry.type) {
      case re.TYPE:
        return /* @__PURE__ */ g.jsx(We, { annotation: t });
      case le.TYPE:
        return /* @__PURE__ */ g.jsx(Re, { annotation: t });
      case xe.TYPE:
        return /* @__PURE__ */ g.jsx(ye, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ g.jsx(Pt, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case re.TYPE:
        return /* @__PURE__ */ g.jsx(be, { annotation: e, active: n }, t);
      case le.TYPE:
        return /* @__PURE__ */ g.jsx(Re, { annotation: e }, t);
      case xe.TYPE:
        return /* @__PURE__ */ g.jsx(ye, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ g.jsx(qe, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case le.TYPE:
        return /* @__PURE__ */ g.jsx(Se, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ g.jsx(Se, { children: "Click and Drag to Annotate" });
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
    isDragging: s,
    isHovered: o,
    onDotDragStart: i,
    onDotDrag: u,
    onMoveStart: l,
    onMove: c,
    onDragEnd: d
  }) => {
    var p;
    if (!((p = e.data) != null && p.id) || !o)
      switch (e.geometry.type) {
        case re.TYPE:
          return /* @__PURE__ */ g.jsx(be, { annotation: e, active: n }, t);
        case le.TYPE:
          return /* @__PURE__ */ g.jsx(Re, { annotation: e }, t);
        case xe.TYPE:
          return /* @__PURE__ */ g.jsx(ye, { annotation: e, active: n }, t);
        default:
          return null;
      }
    return e.geometry.type === re.TYPE ? /* @__PURE__ */ g.jsx(Ht, { annotation: e, onDotDragStart: i, onDotDrag: u, onMoveStart: l, onMove: c, onDragEnd: d, isDragging: s }) : /* @__PURE__ */ g.jsx(be, { annotation: e, active: n }, t);
  }
}, en = I.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Se} {
    opacity: 1;
  }
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, tn = I.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`, nn = I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`, on = I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`, rn = (t) => {
  var $e;
  const {
    selectors: e,
    ...n
  } = t, s = {
    ...Be,
    ...n,
    // Spread the rest of incomingProps
    // Explicitly handle selectors: use incoming if provided, else use default
    selectors: e !== void 0 ? e : Be.selectors
  }, {
    // OwnProps (destructured with defaults applied via spread above)
    src: o,
    alt: i,
    style: u,
    className: l,
    containerRef: c,
    // Renamed
    children: d,
    annotations: p,
    type: y,
    selectors: b,
    value: h,
    onChange: x,
    onSubmit: T,
    // Renamed
    activeAnnotationComparator: m,
    activeAnnotations: v,
    disableAnnotation: C,
    disableSelector: R,
    renderSelector: L,
    disableEditor: _,
    renderEditor: U,
    renderHighlight: O,
    renderContent: j,
    disableOverlay: S,
    renderOverlay: E,
    allowTouch: D,
    onImageMouseUp: H,
    onImageMouseDown: K,
    onImageMouseMove: q,
    onImageClick: Z,
    // Editing functionality props
    enableEditing: z,
    onAnnotationsChange: Q,
    renderDraggableHighlight: ee,
    // HOC-injected props
    relativeMousePos: M,
    isMouseHovering: r
  } = s, f = ue(null), w = ue(null), {
    x: A,
    y: G
  } = M, X = P((a) => {
    z && Q && Q(a);
  }, [z, Q]), k = z ? bt(p, X) : null, F = p, N = P((a) => {
    if (a)
      return b.find(($) => $.TYPE === a);
  }, [b]), W = y || b && b[0] && b[0].TYPE, Y = P((a, $) => {
    if (C)
      return;
    const B = N(W);
    if (B && B.methods[a]) {
      const te = B.methods[a], V = te(h || {}, $);
      typeof V > "u" ? process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(a)} of type ${W} returned undefined.
             Make sure to explicitly return the previous state or new state.`) : x && x(V);
    }
  }, [C, N, W, h, x]), de = P((a) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && a.preventDefault(), Y("onTouchStart", a);
  }, [D, Y]), Pe = P((a) => {
    Y("onTouchEnd", a);
  }, [Y]), Ne = P((a) => {
    M && typeof M.onTouchMove == "function" && M.onTouchMove(a), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && a.preventDefault(), Y("onTouchMove", a);
  }, [M, D, Y]), Ee = P((a) => {
    M && typeof M.onTouchLeave == "function" && M.onTouchLeave(a);
  }, [M]);
  Ce(() => {
    const a = w.current;
    if (D && a)
      return a.ontouchstart = de, a.ontouchend = Pe, a.ontouchmove = Ne, a.ontouchcancel = Ee, () => {
        a && (a.ontouchstart = null, a.ontouchend = null, a.ontouchmove = null, a.ontouchcancel = null);
      };
    a && (a.ontouchstart = null, a.ontouchend = null, a.ontouchmove = null, a.ontouchcancel = null);
  }, [D, de, Pe, Ne, Ee]);
  const Ze = P((a) => {
    f.current = a, M && typeof M.innerRef == "function" && M.innerRef(a);
  }, [M]), Qe = P((a) => {
    r && typeof r.innerRef == "function" && r.innerRef(a), c && (typeof c == "function" ? c(a) : c.current = a);
  }, [r, c]), Ke = P((a, $) => {
    const B = f.current;
    return !B || a === null || $ === null ? void 0 : F.map((V) => {
      const {
        geometry: oe
      } = V;
      if (!oe) return !1;
      const ie = N(oe.type);
      return ie && ie.intersects({
        x: a,
        y: $
      }, oe, B) ? V : !1;
    }).filter((V) => !!V).sort((V, oe) => {
      const ie = N(V.geometry.type), je = N(oe.geometry.type);
      return !ie || !je || !B ? 0 : ie.area(V.geometry, B) - je.area(oe.geometry, B);
    })[0];
  }, [F, N, f]), et = P((a) => {
    M && typeof M.onMouseMove == "function" && M.onMouseMove(a);
    const $ = a;
    q && q($), Y("onMouseMove", $);
  }, [M, q, Y]), tt = P((a) => {
    M && typeof M.onMouseLeave == "function" && M.onMouseLeave(a);
  }, [M]), nt = P((a) => {
    H && H(a), Y("onMouseUp", a);
  }, [H, Y]), ot = P((a) => {
    K && K(a), Y("onMouseDown", a);
  }, [K, Y]), rt = P((a) => {
    Z && Z(a), Y("onClick", a);
  }, [Z, Y]), st = P(() => {
    T && h && T(h);
  }, [T, h]), we = P((a) => {
    var $;
    a.key === "Escape" && x && (($ = h == null ? void 0 : h.selection) != null && $.showEditor || h != null && h.geometry) && x({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [h, x]);
  Ce(() => {
    var a;
    if ((a = h == null ? void 0 : h.selection) != null && a.showEditor)
      return window.addEventListener("keydown", we), () => window.removeEventListener("keydown", we);
  }, [($e = h == null ? void 0 : h.selection) == null ? void 0 : $e.showEditor, we]);
  const ke = P((a, $) => v && !!v.find((te) => m ? m(a, te) : a.data.id === te) || $ === a, [v, m]), Ae = Ke(A, G);
  return /* @__PURE__ */ g.jsxs(en, { style: u, ref: Qe, onMouseLeave: tt, onTouchCancel: Ee, onMouseMove: et, $allowTouch: D, className: l, children: [
    /* @__PURE__ */ g.jsx(tn, { alt: i || "Annotation Image", src: o, draggable: !1, ref: Ze }),
    /* @__PURE__ */ g.jsxs(nn, { children: [
      F.map((a) => {
        if (!a.data || typeof a.data.id > "u")
          return console.warn("Annotation is missing data.id, cannot render highlight:", a), null;
        const $ = ke(a, Ae);
        if (z && k && !k.isDragging && ($ && k.draggingId !== a.data.id ? k.setDraggingId(a.data.id) : !$ && k.draggingId === a.data.id && k.setDraggingId(null)), z && ee && k) {
          const B = k.draggingId === a.data.id, te = k.isDragging && k.draggingId === a.data.id;
          return ee({
            key: a.data.id,
            annotation: a,
            active: $,
            isDragging: te,
            isHovered: B,
            onDotDragStart: k.handleDotDragStart,
            onDotDrag: k.handleDotDrag,
            onMoveStart: k.handleMoveStart,
            onMove: k.handleMove,
            onDragEnd: k.handleMouseUp
          });
        }
        return O({
          key: a.data.id,
          annotation: a,
          active: $
        });
      }),
      !R && h && h.geometry && L && L({
        annotation: h
      })
    ] }),
    /* @__PURE__ */ g.jsx(on, { "data-testid": "annotation-target", ref: w, onClick: rt, onMouseUp: nt, onMouseDown: ot }),
    !S && E && E({
      type: W,
      annotation: h
    }),
    F.map((a) => !a.data || typeof a.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render content:", a), null) : ke(a, Ae) && j && j({
      key: a.data.id,
      annotation: a
    })),
    !_ && h && h.selection && h.selection.showEditor && U && x && U({
      annotation: h,
      onChange: x,
      onSubmit: st
    }),
    /* @__PURE__ */ g.jsx("div", { children: d })
  ] });
}, sn = dt(ft("isMouseHovering"), vt("relativeMousePos"))(rn);
process.env.NODE_ENV !== "production" && (sn.displayName = "ComposedAnnotation");
export {
  sn as Annotation,
  Ht as DraggableBox,
  pe as DraggableDot,
  It as MoveButton,
  xe as OvalSelector,
  le as PointSelector,
  re as RectangleSelector,
  sn as default
};
