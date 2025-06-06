import ce, { useState as ye, useRef as fe, useEffect as De, PureComponent as ct, useCallback as P } from "react";
import A, { keyframes as lt } from "styled-components";
var ge = { exports: {} }, ue = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function ut() {
  if (_e) return ue;
  _e = 1;
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
  return ue.Fragment = e, ue.jsx = n, ue.jsxs = n, ue;
}
var de = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function dt() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    function t(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === T ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case M:
          return "Fragment";
        case E:
          return "Profiler";
        case v:
          return "StrictMode";
        case I:
          return "Suspense";
        case U:
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
          case _:
            var d = s.render;
            return s = s.displayName, s || (s = d.displayName || d.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case Y:
            return d = s.displayName || null, d !== null ? d : t(s.type) || "Memo";
          case $:
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
        var w = d.error, k = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), e(s);
      }
    }
    function r(s) {
      if (s === M) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === $)
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
      if (L.call(s, "key")) {
        var d = Object.getOwnPropertyDescriptor(s, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function c(s, d) {
      function w() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: w,
        configurable: !0
      });
    }
    function u() {
      var s = t(this.type);
      return q[s] || (q[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function h(s, d, w, k, X, O, V, ne) {
      return w = O.ref, s = {
        $$typeof: f,
        type: s,
        key: d,
        props: O,
        _owner: X
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(s, "ref", {
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
        value: V
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function p(s, d, w, k, X, O, V, ne) {
      var y = d.children;
      if (y !== void 0)
        if (k)
          if (G(y)) {
            for (k = 0; k < y.length; k++)
              x(y[k]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(y);
      if (L.call(d, "key")) {
        y = t(s);
        var F = Object.keys(d).filter(function(K) {
          return K !== "key";
        });
        k = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", oe[y + k] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          y,
          F,
          y
        ), oe[y + k] = !0);
      }
      if (y = null, w !== void 0 && (n(w), y = "" + w), l(d) && (n(d.key), y = "" + d.key), "key" in d) {
        w = {};
        for (var B in d)
          B !== "key" && (w[B] = d[B]);
      } else w = d;
      return y && c(
        w,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), h(
        s,
        y,
        O,
        X,
        o(),
        w,
        V,
        ne
      );
    }
    function x(s) {
      typeof s == "object" && s !== null && s.$$typeof === f && s._store && (s._store.validated = 1);
    }
    var m = ce, f = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), R = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), D = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, G = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(s) {
        return s();
      }
    };
    var W, q = {}, Q = m["react-stack-bottom-frame"].bind(
      m,
      i
    )(), te = H(r(i)), oe = {};
    de.Fragment = M, de.jsx = function(s, d, w, k, X) {
      var O = 1e4 > D.recentlyCreatedOwnerStacks++;
      return p(
        s,
        d,
        w,
        !1,
        k,
        X,
        O ? Error("react-stack-top-frame") : Q,
        O ? H(r(s)) : te
      );
    }, de.jsxs = function(s, d, w, k, X) {
      var O = 1e4 > D.recentlyCreatedOwnerStacks++;
      return p(
        s,
        d,
        w,
        !0,
        k,
        X,
        O ? Error("react-stack-top-frame") : Q,
        O ? H(r(s)) : te
      );
    };
  }()), de;
}
var Le;
function ht() {
  return Le || (Le = 1, process.env.NODE_ENV === "production" ? ge.exports = ut() : ge.exports = dt()), ge.exports;
}
var g = ht();
function ft(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, n) => (...r) => e(n(...r)));
}
const gt = ({
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
}, pt = (t = "isMouseHovering") => (e) => {
  const n = (o) => {
    const [i, l] = ye(!1), c = fe(null);
    De(() => {
      const h = (p) => {
        const x = c.current, m = {
          pageX: p.pageX,
          pageY: p.pageY
        };
        l(gt({
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
    return ce.createElement(e, {
      ...o,
      ...u
    });
  }, r = e.displayName || e.name || "Component";
  return n.displayName = `IsMouseHovering(${r})`, n;
}, qe = (t) => {
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
}, He = (t, e, n) => Math.max(t, Math.min(e, n)), mt = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), r = e.pageX - n.left, o = e.pageY - (n.top + window.scrollY);
  return {
    x: He(0, 100, r / n.width * 100),
    y: He(0, 100, o / n.height * 100)
  };
}, se = (t) => xt(t) ? vt(t) ? (bt(t) && t.preventDefault(), mt(t)) : {
  x: null
} : qe(t), xt = (t) => t.targetTouches !== void 0, vt = (t) => t.targetTouches.length === 1, bt = (t) => t.type === "touchmove", yt = (t = "relativeMousePos") => (e) => {
  class n extends ct {
    constructor(i) {
      super(i), this.container = null, this._innerRef = (l) => {
        this.container = l;
      }, this._onMouseMove = (l) => {
        const c = qe(l);
        this.setState(c);
      }, this._onTouchMove = (l) => {
        if (!this.container || l.targetTouches.length !== 1) return;
        const c = l.targetTouches[0], u = this.container.offsetParent;
        if (!u) return;
        const h = c.pageX - u.offsetLeft, p = c.pageY - u.offsetTop, x = this.container.width, m = this.container.height;
        typeof x == "number" && typeof m == "number" && x > 0 && m > 0 ? this.setState({
          x: h / x * 100,
          y: p / m * 100
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
      return ce.createElement(e, {
        ...this.props,
        ...l
      });
    }
  }
  const r = e.displayName || e.name || "Component";
  return n.displayName = `withRelativeMousePos(${r})`, n;
}, Et = (t, e) => {
  const [n, r] = ye(!1), [o, i] = ye(null), [l, c] = ye(null), u = fe(null), h = fe(t);
  h.current = t;
  const p = P((v, E) => {
    const C = h.current.map((R) => R.data.id === v ? {
      ...R,
      isDragging: E
    } : R);
    h.current = C, e(C), r(E), i(E ? v : null);
  }, [e]), x = P((v, E) => {
    p(v, !0);
    const C = h.current.find((R) => R.data.id === v);
    C && (u.current = {
      ...C.geometry,
      initialCursorPosition: E
    });
  }, [p]), m = P((v, E, C) => {
    if (!o || !u.current) return;
    const R = v.clientX - C.x, _ = v.clientY - C.y, I = document.querySelector(".annotation-container");
    if (!I) return;
    const U = I.getBoundingClientRect(), Y = U.width, $ = U.height, S = 100, T = {
      ...u.current
    };
    switch (E) {
      case "top":
        T.height = Math.min(u.current.height - _ / $ * S, u.current.y + u.current.height), T.y = Math.max(u.current.y + _ / $ * S, 0);
        break;
      case "right":
        T.width = Math.min(u.current.width + R / Y * S, S - u.current.x);
        break;
      case "bottom":
        T.height = Math.min(u.current.height + _ / $ * S, S - u.current.y);
        break;
      case "left":
        T.width = Math.min(u.current.width - R / Y * S, u.current.x + u.current.width), T.x = Math.max(u.current.x + R / Y * S, 0);
        break;
    }
    T.width = Math.max(T.width, 0), T.height = Math.max(T.height, 0), T.x = Math.min(T.x, S - T.width), T.y = Math.min(T.y, S - T.height);
    const D = h.current.map((L) => L.data.id === o ? {
      ...L,
      geometry: T
    } : L);
    h.current = D, e(D);
  }, [o, e]), f = P((v, E) => {
    p(v, !0);
    const C = h.current.find((R) => R.data.id === v);
    C && (u.current = {
      ...C.geometry,
      initialCursorPosition: E
    });
  }, [p]), b = P((v, E) => {
    if (!o || !u.current) return;
    const C = v.clientX - E.x, R = v.clientY - E.y, _ = document.querySelector(".annotation-container");
    if (!_) return;
    const I = _.getBoundingClientRect(), U = I.width, Y = I.height, $ = 100, S = {
      ...u.current
    };
    S.x = Math.max(Math.min(u.current.x + C / U * $, $ - u.current.width), 0), S.y = Math.max(Math.min(u.current.y + R / Y * $, $ - u.current.height), 0);
    const T = h.current.map((D) => D.data.id === o ? {
      ...D,
      geometry: S
    } : D);
    h.current = T, e(T);
  }, [o, e]), M = P(() => {
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
var pe = { exports: {} }, Re = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function wt() {
  if (Xe) return Re;
  Xe = 1;
  var t = ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return Re.c = function(e) {
    return t.H.useMemoCache(e);
  }, Re;
}
var Ce = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Tt() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Ce.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  }()), Ce;
}
var Ue;
function Mt() {
  return Ue || (Ue = 1, process.env.NODE_ENV === "production" ? pe.exports = wt() : pe.exports = Tt()), pe.exports;
}
var J = Mt();
const Rt = A.div`
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
function Se(t) {
  const e = J.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`, o = `${n.x}%`;
  let i;
  return e[0] !== r || e[1] !== o ? (i = /* @__PURE__ */ g.jsx(Rt, { style: {
    top: r,
    left: o
  } }), e[0] = r, e[1] = o, e[2] = i) : i = e[2], i;
}
const Ct = A.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, St = A.div`
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
`, Dt = (t) => {
  const e = J.c(11), {
    onChange: n,
    onSubmit: r,
    onFocus: o,
    onBlur: i,
    value: l
  } = t;
  let c;
  e[0] !== i || e[1] !== n || e[2] !== o || e[3] !== l ? (c = /* @__PURE__ */ g.jsx(Ct, { children: /* @__PURE__ */ g.jsx("textarea", { placeholder: "Write description", onFocus: o, onBlur: i, onChange: n, value: l }) }), e[0] = i, e[1] = n, e[2] = o, e[3] = l, e[4] = c) : c = e[4];
  let u;
  e[5] !== r || e[6] !== l ? (u = l && /* @__PURE__ */ g.jsx(St, { onClick: r, children: "Submit" }), e[5] = r, e[6] = l, e[7] = u) : u = e[7];
  let h;
  return e[8] !== c || e[9] !== u ? (h = /* @__PURE__ */ g.jsxs(ce.Fragment, { children: [
    c,
    u
  ] }), e[8] = c, e[9] = u, e[10] = h) : h = e[10], h;
}, Pt = lt`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, kt = A.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Pt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, Nt = (t) => {
  var C;
  const e = J.c(17), {
    annotation: n,
    onChange: r,
    onSubmit: o,
    className: i,
    style: l
  } = t, c = i === void 0 ? "" : i;
  let u;
  e[0] !== l ? (u = l === void 0 ? {} : l, e[0] = l, e[1] = u) : u = e[1];
  const h = u, {
    geometry: p
  } = n;
  if (!p)
    return null;
  const x = `${p.x}%`, m = `${p.y + p.height}%`;
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
  e[9] !== o || e[10] !== b || e[11] !== M ? (v = /* @__PURE__ */ g.jsx(Dt, { onChange: b, onSubmit: o, value: M }), e[9] = o, e[10] = b, e[11] = M, e[12] = v) : v = e[12];
  let E;
  return e[13] !== c || e[14] !== f || e[15] !== v ? (E = /* @__PURE__ */ g.jsx(kt, { className: c, style: f, children: v }), e[13] = c, e[14] = f, e[15] = v, e[16] = E) : E = e[16], E;
}, me = A.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, At = A.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Ve(t) {
  const e = J.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const r = `${n.y}%`;
  let o;
  e[0] !== r ? (o = /* @__PURE__ */ g.jsx(me, { style: {
    height: r,
    width: "100%"
  } }), e[0] = r, e[1] = o) : o = e[1];
  const i = `${n.y}%`, l = `${n.height}%`, c = `${n.x}%`;
  let u;
  e[2] !== i || e[3] !== l || e[4] !== c ? (u = /* @__PURE__ */ g.jsx(me, { style: {
    top: i,
    height: l,
    width: c
  } }), e[2] = i, e[3] = l, e[4] = c, e[5] = u) : u = e[5];
  const h = `${n.y}%`, p = `${n.x + n.width}%`, x = `${n.height}%`, m = `${100 - (n.x + n.width)}%`;
  let f;
  e[6] !== h || e[7] !== p || e[8] !== x || e[9] !== m ? (f = /* @__PURE__ */ g.jsx(me, { style: {
    top: h,
    left: p,
    height: x,
    width: m
  } }), e[6] = h, e[7] = p, e[8] = x, e[9] = m, e[10] = f) : f = e[10];
  const b = `${n.y + n.height}%`, M = `${100 - (n.y + n.height)}%`;
  let v;
  e[11] !== b || e[12] !== M ? (v = /* @__PURE__ */ g.jsx(me, { style: {
    top: b,
    height: M,
    width: "100%"
  } }), e[11] = b, e[12] = M, e[13] = v) : v = e[13];
  let E;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== o || e[17] !== f || e[18] !== v || e[19] !== u ? (E = /* @__PURE__ */ g.jsxs(At, { className: t.className, style: t.style, children: [
    o,
    u,
    f,
    v
  ] }), e[14] = t.className, e[15] = t.style, e[16] = o, e[17] = f, e[18] = v, e[19] = u, e[20] = E) : E = e[20], E;
}
Ve.defaultProps = {
  className: "",
  style: {}
};
const $t = A.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Ee(t) {
  const e = J.c(10), {
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
  return e[7] !== t.className || e[8] !== u ? (h = /* @__PURE__ */ g.jsx($t, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = h) : h = e[9], h;
}
Ee.defaultProps = {
  className: "",
  style: {}
};
const jt = A.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function we(t) {
  const e = J.c(10), {
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
  return e[7] !== t.className || e[8] !== u ? (h = /* @__PURE__ */ g.jsx(jt, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = h) : h = e[9], h;
}
we.defaultProps = {
  className: "",
  style: {}
};
const It = A.div`
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
function Je(t) {
  const e = J.c(8), {
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
  return e[4] !== t.className || e[5] !== i || e[6] !== l ? (c = /* @__PURE__ */ g.jsx(It, { style: i, className: t.className, children: l }), e[4] = t.className, e[5] = i, e[6] = l, e[7] = c) : c = e[7], c;
}
Je.defaultProps = {
  style: {},
  className: ""
};
const Pe = A.div`
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
`, Yt = A.div`
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

  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.1);
  }
`, _t = A.div`
  &::before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
    color: #666;
    line-height: 1;
  }
`, Ot = (t) => {
  const e = J.c(6), {
    annotationId: n,
    onRemove: r
  } = t;
  let o;
  e[0] !== n || e[1] !== r ? (o = (u) => {
    u.stopPropagation(), r(n);
  }, e[0] = n, e[1] = r, e[2] = o) : o = e[2];
  const i = o;
  let l;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (l = /* @__PURE__ */ g.jsx(_t, {}), e[3] = l) : l = e[3];
  let c;
  return e[4] !== i ? (c = /* @__PURE__ */ g.jsx(Yt, { onClick: i, children: l }), e[4] = i, e[5] = c) : c = e[5], c;
}, Lt = A.div`
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
`, Ht = A.div`
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
`, xe = (t) => {
  const e = J.c(9), {
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
  const u = c, h = Ft;
  let p;
  return e[6] !== u || e[7] !== n ? (p = /* @__PURE__ */ g.jsx(Lt, { position: n, onMouseDown: u, onClick: h, "data-type": "dot" }), e[6] = u, e[7] = n, e[8] = p) : p = e[8], p;
}, Xt = (t) => {
  const e = J.c(7), {
    onMoveStart: n,
    onMove: r,
    onMoveEnd: o,
    annotationId: i
  } = t;
  let l;
  e[0] !== i || e[1] !== r || e[2] !== o || e[3] !== n ? (l = (p) => {
    p.preventDefault(), p.stopPropagation();
    const x = {
      x: p.clientX,
      y: p.clientY
    };
    n(i, x);
    const m = (b) => {
      b.preventDefault(), b.stopPropagation(), r(b, x);
    }, f = (b) => {
      b.preventDefault(), b.stopPropagation(), document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", f), o == null || o();
    };
    document.addEventListener("mousemove", m), document.addEventListener("mouseup", f);
  }, e[0] = i, e[1] = r, e[2] = o, e[3] = n, e[4] = l) : l = e[4];
  const c = l, u = Ut;
  let h;
  return e[5] !== c ? (h = /* @__PURE__ */ g.jsx(Ht, { onMouseDown: c, onClick: u, "data-type": "move-button", children: "↕" }), e[5] = c, e[6] = h) : h = e[6], h;
};
function Ft(t) {
  t.preventDefault(), t.stopPropagation();
}
function Ut(t) {
  t.preventDefault(), t.stopPropagation();
}
const Bt = A.div`
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
`, Gt = (t) => {
  var q, Q, te, oe, s, d, w, k, X, O;
  const e = J.c(48), {
    annotation: n,
    onDotDragStart: r,
    onDotDrag: o,
    onMoveStart: i,
    onMove: l,
    onDragEnd: c,
    isDragging: u,
    allowDelete: h,
    onRemoveAnnotation: p
  } = t, {
    geometry: x
  } = n;
  if (!x || !x.type || typeof x.x != "number" || typeof x.y != "number")
    return null;
  let m;
  e[0] !== ((q = n.data) == null ? void 0 : q.id) || e[1] !== l || e[2] !== i ? (m = (V) => {
    var j;
    const ne = V.target;
    if (ne.closest('[data-type="dot"]') || ne.closest('[data-type="move-button"]'))
      return;
    V.preventDefault(), V.stopPropagation();
    const y = {
      x: V.clientX,
      y: V.clientY
    }, F = (j = n.data) == null ? void 0 : j.id;
    F && i(F, y);
    const B = (ee) => {
      ee.preventDefault(), ee.stopPropagation(), l(ee, y);
    }, K = (ee) => {
      ee.preventDefault(), ee.stopPropagation(), document.removeEventListener("mousemove", B), document.removeEventListener("mouseup", K);
    };
    document.addEventListener("mousemove", B), document.addEventListener("mouseup", K);
  }, e[0] = (Q = n.data) == null ? void 0 : Q.id, e[1] = l, e[2] = i, e[3] = m) : m = e[3];
  const f = m, b = zt, M = `${x.x}%`, v = `${x.y}%`, E = `${x.width}%`, C = `${x.height}%`;
  let R;
  e[4] !== M || e[5] !== v || e[6] !== E || e[7] !== C ? (R = {
    left: M,
    top: v,
    width: E,
    height: C
  }, e[4] = M, e[5] = v, e[6] = E, e[7] = C, e[8] = R) : R = e[8];
  const _ = (te = n.data) == null ? void 0 : te.id;
  let I;
  e[9] !== o || e[10] !== r || e[11] !== c || e[12] !== _ ? (I = /* @__PURE__ */ g.jsx(xe, { position: "top", onDragStart: r, onDrag: o, onDragEnd: c, annotationId: _ }), e[9] = o, e[10] = r, e[11] = c, e[12] = _, e[13] = I) : I = e[13];
  const U = (oe = n.data) == null ? void 0 : oe.id;
  let Y;
  e[14] !== o || e[15] !== r || e[16] !== c || e[17] !== U ? (Y = /* @__PURE__ */ g.jsx(xe, { position: "right", onDragStart: r, onDrag: o, onDragEnd: c, annotationId: U }), e[14] = o, e[15] = r, e[16] = c, e[17] = U, e[18] = Y) : Y = e[18];
  const $ = (s = n.data) == null ? void 0 : s.id;
  let S;
  e[19] !== o || e[20] !== r || e[21] !== c || e[22] !== $ ? (S = /* @__PURE__ */ g.jsx(xe, { position: "bottom", onDragStart: r, onDrag: o, onDragEnd: c, annotationId: $ }), e[19] = o, e[20] = r, e[21] = c, e[22] = $, e[23] = S) : S = e[23];
  const T = (d = n.data) == null ? void 0 : d.id;
  let D;
  e[24] !== o || e[25] !== r || e[26] !== c || e[27] !== T ? (D = /* @__PURE__ */ g.jsx(xe, { position: "left", onDragStart: r, onDrag: o, onDragEnd: c, annotationId: T }), e[24] = o, e[25] = r, e[26] = c, e[27] = T, e[28] = D) : D = e[28];
  const L = (w = n.data) == null ? void 0 : w.id;
  let G;
  e[29] !== c || e[30] !== l || e[31] !== i || e[32] !== L ? (G = /* @__PURE__ */ g.jsx(Xt, { onMoveStart: i, onMove: l, onMoveEnd: c, annotationId: L }), e[29] = c, e[30] = l, e[31] = i, e[32] = L, e[33] = G) : G = e[33];
  let H;
  e[34] !== h || e[35] !== ((k = n.data) == null ? void 0 : k.id) || e[36] !== p ? (H = h && p && /* @__PURE__ */ g.jsx(Ot, { annotationId: (X = n.data) == null ? void 0 : X.id, onRemove: p }), e[34] = h, e[35] = (O = n.data) == null ? void 0 : O.id, e[36] = p, e[37] = H) : H = e[37];
  let W;
  return e[38] !== f || e[39] !== u || e[40] !== Y || e[41] !== S || e[42] !== D || e[43] !== G || e[44] !== H || e[45] !== R || e[46] !== I ? (W = /* @__PURE__ */ g.jsxs(Bt, { style: R, $isDragging: u, onMouseDown: f, onClick: b, children: [
    I,
    Y,
    S,
    D,
    G,
    H
  ] }), e[38] = f, e[39] = u, e[40] = Y, e[41] = S, e[42] = D, e[43] = G, e[44] = H, e[45] = R, e[46] = I, e[47] = W) : W = e[47], W;
};
function zt(t) {
  t.preventDefault(), t.stopPropagation();
}
const Ze = "RECTANGLE";
function Wt({
  x: t,
  y: e
}, n) {
  if (!n) return !1;
  const r = Math.min(n.x, n.x + n.width), o = Math.max(n.x, n.x + n.width), i = Math.min(n.y, n.y + n.height), l = Math.max(n.y, n.y + n.height);
  return !(t < r || e < i || t > o || e > l);
}
function qt(t) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const e = Math.abs(t.width), n = Math.abs(t.height);
  return e * n;
}
const Vt = {
  onTouchStart(t, e) {
    return Be(t, e);
  },
  onTouchEnd(t, e) {
    return Ge(t);
  },
  onTouchMove(t, e) {
    return ze(t, e);
  },
  onMouseDown(t, e) {
    return Be(t, e);
  },
  onMouseUp(t, e) {
    return Ge(t);
  },
  onMouseMove(t, e) {
    return ze(t, e);
  }
};
function Be(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: r
    } = se(e);
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
function Ge(t, e) {
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
function ze(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: o,
      y: i
    } = se(e), l = o - n, c = i - r;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Ze,
        x: l > 0 ? n : o,
        y: c > 0 ? r : i,
        width: Math.abs(l),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const ae = {
  TYPE: Ze,
  intersects: Wt,
  area: qt,
  methods: Vt
}, Qe = "POINT";
function Jt({
  x: t,
  y: e
}, n, r) {
  if (!n) return !1;
  const o = Math.abs(t - n.x), i = Math.abs(e - n.y);
  return o === 0 && i === 0;
}
function Zt(t, e) {
  return 0;
}
const Qt = {
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
        ...se(e),
        width: 0,
        height: 0,
        type: Qe
      }
    };
  }
}, he = {
  TYPE: Qe,
  intersects: Jt,
  area: Zt,
  methods: Qt
}, ve = (t) => Math.pow(t, 2), ke = "OVAL";
function Kt({
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
  return ve(u) / ve(l) + ve(h) / ve(c) <= 1;
}
function en(t) {
  return !t || !t.width || !t.height || t.width <= 0 || t.height <= 0 ? 0 : Math.PI * Math.abs(t.width) * Math.abs(t.height) / 4;
}
const tn = {
  onTouchStart(t, e) {
    return nn(t, e);
  },
  onTouchEnd(t, e) {
    return on(t);
  },
  onTouchMove(t, e) {
    return rn(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: r
      } = se(e);
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
      } = se(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: ke,
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
function nn(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: r
    } = se(e);
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
function on(t, e) {
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
function rn(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: r
    } = t.selection, {
      x: o,
      y: i
    } = se(e), l = o - n, c = i - r;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: ke,
        x: l > 0 ? n : o,
        y: c > 0 ? r : i,
        width: Math.abs(l),
        height: Math.abs(c)
      }
    };
  }
  return t;
}
const be = {
  TYPE: ke,
  intersects: Kt,
  area: en,
  methods: tn
}, We = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: ae.TYPE,
  selectors: [ae, he, be],
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
        return /* @__PURE__ */ g.jsx(Ve, { annotation: t });
      case he.TYPE:
        return /* @__PURE__ */ g.jsx(Se, { annotation: t });
      case be.TYPE:
        return /* @__PURE__ */ g.jsx(we, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ g.jsx(Nt, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case ae.TYPE:
        return /* @__PURE__ */ g.jsx(Ee, { annotation: e, active: n }, t);
      case he.TYPE:
        return /* @__PURE__ */ g.jsx(Se, { annotation: e }, t);
      case be.TYPE:
        return /* @__PURE__ */ g.jsx(we, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ g.jsx(Je, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case he.TYPE:
        return /* @__PURE__ */ g.jsx(Pe, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ g.jsx(Pe, { children: "Click and Drag to Annotate" });
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
    allowDelete: p,
    onRemoveAnnotation: x
  }) => {
    var m;
    if (!((m = e.data) != null && m.id) || !o)
      switch (e.geometry.type) {
        case ae.TYPE:
          return /* @__PURE__ */ g.jsx(Ee, { annotation: e, active: n }, t);
        case he.TYPE:
          return /* @__PURE__ */ g.jsx(Se, { annotation: e }, t);
        case be.TYPE:
          return /* @__PURE__ */ g.jsx(we, { annotation: e, active: n }, t);
        default:
          return null;
      }
    return e.geometry.type === ae.TYPE ? /* @__PURE__ */ g.jsx(Gt, { annotation: e, onDotDragStart: i, onDotDrag: l, onMoveStart: c, onMove: u, onDragEnd: h, isDragging: r, allowDelete: p, onRemoveAnnotation: x }) : /* @__PURE__ */ g.jsx(Ee, { annotation: e, active: n }, t);
  }
}, sn = A.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Pe} {
    opacity: 1;
  }
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, an = A.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`, cn = A.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`, ln = A.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`, un = (t) => {
  var Ie;
  const {
    selectors: e,
    ...n
  } = t, r = {
    ...We,
    ...n,
    // Spread the rest of incomingProps
    // Explicitly handle selectors: use incoming if provided, else use default
    selectors: e !== void 0 ? e : We.selectors
  }, {
    // OwnProps (destructured with defaults applied via spread above)
    src: o,
    alt: i,
    style: l,
    className: c,
    containerRef: u,
    // Renamed
    children: h,
    annotations: p,
    type: x,
    selectors: m,
    value: f,
    onChange: b,
    onSubmit: M,
    // Renamed
    activeAnnotationComparator: v,
    activeAnnotations: E,
    disableAnnotation: C,
    disableSelector: R,
    renderSelector: _,
    disableEditor: I,
    renderEditor: U,
    renderHighlight: Y,
    renderContent: $,
    disableOverlay: S,
    renderOverlay: T,
    allowTouch: D,
    onImageMouseUp: L,
    onImageMouseDown: G,
    onImageMouseMove: H,
    onImageClick: W,
    // Editing functionality props
    enableEditing: q,
    onAnnotationsChange: Q,
    renderDraggableHighlight: te,
    // Delete functionality props
    allowDelete: oe,
    onRemoveAnnotation: s,
    // HOC-injected props
    relativeMousePos: d,
    isMouseHovering: w
  } = r, k = fe(null), X = fe(null), {
    x: O,
    y: V
  } = d, ne = P((a) => {
    q && Q && Q(a);
  }, [q, Q]), y = q ? Et(p, ne) : null, F = p, B = P((a) => {
    if (a)
      return m.find((N) => N.TYPE === a);
  }, [m]), K = x || m && m[0] && m[0].TYPE, j = P((a, N) => {
    if (C)
      return;
    const z = B(K);
    if (z && z.methods[a]) {
      const re = z.methods[a], Z = re(f || {}, N);
      typeof Z > "u" ? process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(a)} of type ${K} returned undefined.
             Make sure to explicitly return the previous state or new state.`) : b && b(Z);
    }
  }, [C, B, K, f, b]), ee = P((a) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && a.preventDefault(), j("onTouchStart", a);
  }, [D, j]), Ne = P((a) => {
    j("onTouchEnd", a);
  }, [j]), Ae = P((a) => {
    d && typeof d.onTouchMove == "function" && d.onTouchMove(a), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && D && a.preventDefault(), j("onTouchMove", a);
  }, [d, D, j]), Te = P((a) => {
    d && typeof d.onTouchLeave == "function" && d.onTouchLeave(a);
  }, [d]);
  De(() => {
    const a = X.current;
    if (D && a)
      return a.ontouchstart = ee, a.ontouchend = Ne, a.ontouchmove = Ae, a.ontouchcancel = Te, () => {
        a && (a.ontouchstart = null, a.ontouchend = null, a.ontouchmove = null, a.ontouchcancel = null);
      };
    a && (a.ontouchstart = null, a.ontouchend = null, a.ontouchmove = null, a.ontouchcancel = null);
  }, [D, ee, Ne, Ae, Te]);
  const Ke = P((a) => {
    k.current = a, d && typeof d.innerRef == "function" && d.innerRef(a);
  }, [d]), et = P((a) => {
    w && typeof w.innerRef == "function" && w.innerRef(a), u && (typeof u == "function" ? u(a) : u.current = a);
  }, [w, u]), tt = P((a, N) => {
    const z = k.current;
    return !z || a === null || N === null ? void 0 : F.map((Z) => {
      const {
        geometry: ie
      } = Z;
      if (!ie) return !1;
      const le = B(ie.type);
      return le && le.intersects({
        x: a,
        y: N
      }, ie, z) ? Z : !1;
    }).filter((Z) => !!Z).sort((Z, ie) => {
      const le = B(Z.geometry.type), Ye = B(ie.geometry.type);
      return !le || !Ye || !z ? 0 : le.area(Z.geometry, z) - Ye.area(ie.geometry, z);
    })[0];
  }, [F, B, k]), nt = P((a) => {
    d && typeof d.onMouseMove == "function" && d.onMouseMove(a);
    const N = a;
    H && H(N), j("onMouseMove", N);
  }, [d, H, j]), ot = P((a) => {
    d && typeof d.onMouseLeave == "function" && d.onMouseLeave(a);
  }, [d]), rt = P((a) => {
    L && L(a), j("onMouseUp", a);
  }, [L, j]), st = P((a) => {
    G && G(a), j("onMouseDown", a);
  }, [G, j]), it = P((a) => {
    W && W(a), j("onClick", a);
  }, [W, j]), at = P(() => {
    M && f && M(f);
  }, [M, f]), Me = P((a) => {
    var N;
    a.key === "Escape" && b && ((N = f == null ? void 0 : f.selection) != null && N.showEditor || f != null && f.geometry) && b({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [f, b]);
  De(() => {
    var a;
    if ((a = f == null ? void 0 : f.selection) != null && a.showEditor)
      return window.addEventListener("keydown", Me), () => window.removeEventListener("keydown", Me);
  }, [(Ie = f == null ? void 0 : f.selection) == null ? void 0 : Ie.showEditor, Me]);
  const $e = P((a, N) => E && !!E.find((re) => v ? v(a, re) : a.data.id === re) || N === a, [E, v]), je = tt(O, V);
  return /* @__PURE__ */ g.jsxs(sn, { style: l, ref: et, onMouseLeave: ot, onTouchCancel: Te, onMouseMove: nt, $allowTouch: D, className: c, children: [
    /* @__PURE__ */ g.jsx(an, { alt: i || "Annotation Image", src: o, draggable: !1, ref: Ke }),
    /* @__PURE__ */ g.jsxs(cn, { children: [
      F.map((a) => {
        if (!a.data || typeof a.data.id > "u")
          return console.warn("Annotation is missing data.id, cannot render highlight:", a), null;
        const N = $e(a, je);
        if (q && y && !y.isDragging && (N && y.draggingId !== a.data.id ? y.setDraggingId(a.data.id) : !N && y.draggingId === a.data.id && y.setDraggingId(null)), q && te && y) {
          const z = y.draggingId === a.data.id, re = y.isDragging && y.draggingId === a.data.id;
          return te({
            key: a.data.id,
            annotation: a,
            active: N,
            isDragging: re,
            isHovered: z,
            onDotDragStart: y.handleDotDragStart,
            onDotDrag: y.handleDotDrag,
            onMoveStart: y.handleMoveStart,
            onMove: y.handleMove,
            onDragEnd: y.handleMouseUp,
            allowDelete: oe,
            onRemoveAnnotation: s
          });
        }
        return Y({
          key: a.data.id,
          annotation: a,
          active: N
        });
      }),
      !R && f && f.geometry && _ && _({
        annotation: f
      })
    ] }),
    /* @__PURE__ */ g.jsx(ln, { "data-testid": "annotation-target", ref: X, onClick: it, onMouseUp: rt, onMouseDown: st }),
    !S && T && T({
      type: K,
      annotation: f
    }),
    F.map((a) => !a.data || typeof a.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render content:", a), null) : $e(a, je) && $ && $({
      key: a.data.id,
      annotation: a
    })),
    !I && f && f.selection && f.selection.showEditor && U && b && U({
      annotation: f,
      onChange: b,
      onSubmit: at
    }),
    /* @__PURE__ */ g.jsx("div", { children: h })
  ] });
}, dn = ft(pt("isMouseHovering"), yt("relativeMousePos"))(un);
process.env.NODE_ENV !== "production" && (dn.displayName = "ComposedAnnotation");
export {
  dn as Annotation,
  Ot as DeleteButton,
  Gt as DraggableBox,
  xe as DraggableDot,
  Xt as MoveButton,
  be as OvalSelector,
  he as PointSelector,
  ae as RectangleSelector,
  dn as default
};
