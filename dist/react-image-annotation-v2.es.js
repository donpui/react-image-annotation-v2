import me, { useState as ue, useRef as ae, useEffect as we, PureComponent as vt, useCallback as D } from "react";
import I, { keyframes as bt } from "styled-components";
var Me = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function yt() {
  if (Ue) return ve;
  Ue = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(o, r, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), r.key !== void 0 && (c = "" + r.key), "key" in r) {
      s = {};
      for (var l in r)
        l !== "key" && (s[l] = r[l]);
    } else s = r;
    return r = s.ref, {
      $$typeof: t,
      type: o,
      key: c,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return ve.Fragment = e, ve.jsx = n, ve.jsxs = n, ve;
}
var be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function wt() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    function t(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === k ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case w:
          return "Fragment";
        case N:
          return "Profiler";
        case C:
          return "StrictMode";
        case q:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case v:
            return "Portal";
          case K:
            return (i.displayName || "Context") + ".Provider";
          case U:
            return (i._context.displayName || "Context") + ".Consumer";
          case te:
            var m = i.render;
            return i = i.displayName, i || (i = m.displayName || m.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case V:
            return m = i.displayName || null, m !== null ? m : t(i.type) || "Memo";
          case M:
            m = i._payload, i = i._init;
            try {
              return t(i(m));
            } catch {
            }
        }
      return null;
    }
    function e(i) {
      return "" + i;
    }
    function n(i) {
      try {
        e(i);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var R = m.error, b = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return R.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), e(i);
      }
    }
    function o(i) {
      if (i === w) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === M)
        return "<...>";
      try {
        var m = t(i);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var i = E.A;
      return i === null ? null : i.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(i) {
      if (L.call(i, "key")) {
        var m = Object.getOwnPropertyDescriptor(i, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function l(i, m) {
      function R() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: R,
        configurable: !0
      });
    }
    function u() {
      var i = t(this.type);
      return A[i] || (A[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function h(i, m, R, b, F, H, oe, se) {
      return R = H.ref, i = {
        $$typeof: d,
        type: i,
        key: m,
        props: H,
        _owner: F
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(i, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(i, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function x(i, m, R, b, F, H, oe, se) {
      var $ = m.children;
      if ($ !== void 0)
        if (b)
          if (O($)) {
            for (b = 0; b < $.length; b++)
              f($[b]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f($);
      if (L.call(m, "key")) {
        $ = t(i);
        var ee = Object.keys(m).filter(function(y) {
          return y !== "key";
        });
        b = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", B[$ + b] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          $,
          ee,
          $
        ), B[$ + b] = !0);
      }
      if ($ = null, R !== void 0 && (n(R), $ = "" + R), c(m) && (n(m.key), $ = "" + m.key), "key" in m) {
        R = {};
        for (var J in m)
          J !== "key" && (R[J] = m[J]);
      } else R = m;
      return $ && l(
        R,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), h(
        i,
        $,
        H,
        F,
        r(),
        R,
        oe,
        se
      );
    }
    function f(i) {
      typeof i == "object" && i !== null && i.$$typeof === d && i._store && (i._store.validated = 1);
    }
    var g = me, d = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), K = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), E = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, O = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var Y, A = {}, S = g["react-stack-bottom-frame"].bind(
      g,
      s
    )(), T = X(o(s)), B = {};
    be.Fragment = w, be.jsx = function(i, m, R, b, F) {
      var H = 1e4 > E.recentlyCreatedOwnerStacks++;
      return x(
        i,
        m,
        R,
        !1,
        b,
        F,
        H ? Error("react-stack-top-frame") : S,
        H ? X(o(i)) : T
      );
    }, be.jsxs = function(i, m, R, b, F) {
      var H = 1e4 > E.recentlyCreatedOwnerStacks++;
      return x(
        i,
        m,
        R,
        !0,
        b,
        F,
        H ? Error("react-stack-top-frame") : S,
        H ? X(o(i)) : T
      );
    };
  }()), be;
}
var qe;
function Et() {
  return qe || (qe = 1, process.env.NODE_ENV === "production" ? Me.exports = yt() : Me.exports = wt()), Me.exports;
}
var p = Et();
function Tt(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, n) => (...o) => e(n(...o)));
}
const Rt = ({
  elem: t,
  e
}) => {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const {
    pageY: n,
    pageX: o
  } = e, {
    left: r,
    right: s,
    bottom: c,
    top: l
  } = t.getBoundingClientRect();
  return o > r && o < s && n > l && n < c;
}, Mt = (t = "isMouseHovering") => (e) => {
  const n = (r) => {
    const [s, c] = ue(!1), l = ae(null);
    we(() => {
      const h = (x) => {
        const f = l.current, g = {
          pageX: x.pageX,
          pageY: x.pageY
        };
        c(Rt({
          elem: f,
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
        isHoveringOver: s
      }
    };
    return me.createElement(e, {
      ...r,
      ...u
    });
  }, o = e.displayName || e.name || "Component";
  return n.displayName = `IsMouseHovering(${o})`, n;
}, rt = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.currentTarget.getBoundingClientRect(), n = t.clientX - e.x, o = t.clientY - e.y;
  return {
    x: n / e.width * 100,
    y: o / e.height * 100
  };
}, Ve = (t, e, n) => Math.max(t, Math.min(e, n)), St = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), o = e.pageX - n.left, r = e.pageY - (n.top + window.scrollY);
  return {
    x: Ve(0, 100, o / n.width * 100),
    y: Ve(0, 100, r / n.height * 100)
  };
}, de = (t) => Dt(t) ? Ct(t) ? (At(t) && t.preventDefault(), St(t)) : {
  x: null
} : rt(t), Dt = (t) => t.targetTouches !== void 0, Ct = (t) => t.targetTouches.length === 1, At = (t) => t.type === "touchmove", Pt = (t = "relativeMousePos") => (e) => {
  class n extends vt {
    constructor(s) {
      super(s), this.container = null, this._innerRef = (c) => {
        this.container = c;
      }, this._onMouseMove = (c) => {
        const l = rt(c);
        this.setState(l);
      }, this._onTouchMove = (c) => {
        if (!this.container || c.targetTouches.length !== 1) return;
        const l = c.targetTouches[0], u = this.container.offsetParent;
        if (!u) return;
        const h = l.pageX - u.offsetLeft, x = l.pageY - u.offsetTop, f = this.container.width, g = this.container.height;
        typeof f == "number" && typeof g == "number" && f > 0 && g > 0 ? this.setState({
          x: h / f * 100,
          y: x / g * 100
        }) : this.setState({
          x: null,
          y: null
        });
      }, this._onMouseLeave = (c) => {
        this.setState({
          x: null,
          y: null
        });
      }, this._onTouchLeave = (c) => {
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
      const s = {
        innerRef: this._innerRef,
        // Pass HOC's ref setter
        onMouseMove: this._onMouseMove,
        // Pass HOC's event handler
        onMouseLeave: this._onMouseLeave,
        onTouchMove: this._onTouchMove,
        onTouchLeave: this._onTouchLeave,
        x: this.state.x,
        y: this.state.y
      }, c = {
        [t]: s
      };
      return me.createElement(e, {
        ...this.props,
        ...c
      });
    }
  }
  const o = e.displayName || e.name || "Component";
  return n.displayName = `withRelativeMousePos(${o})`, n;
}, kt = (t, e, n) => {
  const [o, r] = ue(!1), [s, c] = ue(null), [l, u] = ue(null), [h, x] = ue(null), f = ae(null), g = ae(t), d = ae(t), [v, w] = ue(t);
  g.current = n ? v : t, we(() => {
    (!n || !o) && (d.current = t, n && w(t));
  }, [t, n, o]);
  const C = D((M, P) => {
    const k = g.current.map((E) => E.data.id === M ? {
      ...E,
      isDragging: P
    } : E);
    g.current = k, n ? w(k) : e(k), r(P), c(P ? M : null);
  }, [e, n]), N = D((M, P) => {
    n && x(M), C(M, !0);
    const k = g.current.find((E) => E.data.id === M);
    k && (f.current = {
      ...k.geometry,
      initialCursorPosition: P
    });
  }, [C, n]), U = D((M, P, k) => {
    if (!s || !f.current) return;
    const E = M.clientX - k.x, L = M.clientY - k.y, O = document.querySelector(".annotation-container");
    if (!O) return;
    const X = O.getBoundingClientRect(), Y = X.width, A = X.height, S = 100, T = {
      ...f.current
    };
    switch (P) {
      case "top":
        T.height = Math.min(f.current.height - L / A * S, f.current.y + f.current.height), T.y = Math.max(f.current.y + L / A * S, 0);
        break;
      case "right":
        T.width = Math.min(f.current.width + E / Y * S, S - f.current.x);
        break;
      case "bottom":
        T.height = Math.min(f.current.height + L / A * S, S - f.current.y);
        break;
      case "left":
        T.width = Math.min(f.current.width - E / Y * S, f.current.x + f.current.width), T.x = Math.max(f.current.x + E / Y * S, 0);
        break;
    }
    T.width = Math.max(T.width, 0), T.height = Math.max(T.height, 0), T.x = Math.min(T.x, S - T.width), T.y = Math.min(T.y, S - T.height);
    const B = g.current.map((i) => i.data.id === s ? {
      ...i,
      geometry: T
    } : i);
    g.current = B, n ? w(B) : e(B);
  }, [s, e, n]), K = D((M, P) => {
    n && x(M), C(M, !0);
    const k = g.current.find((E) => E.data.id === M);
    k && (f.current = {
      ...k.geometry,
      initialCursorPosition: P
    });
  }, [C, n]), te = D((M, P) => {
    if (!s || !f.current) return;
    const k = M.clientX - P.x, E = M.clientY - P.y, L = document.querySelector(".annotation-container");
    if (!L) return;
    const O = L.getBoundingClientRect(), X = O.width, Y = O.height, A = 100, S = {
      ...f.current
    };
    S.x = Math.max(Math.min(f.current.x + k / X * A, A - f.current.width), 0), S.y = Math.max(Math.min(f.current.y + E / Y * A, A - f.current.height), 0);
    const T = g.current.map((B) => B.data.id === s ? {
      ...B,
      geometry: S
    } : B);
    g.current = T, n ? w(T) : e(T);
  }, [s, e, n]), q = D(() => {
    s && (r(!1), c(null)), f.current = null;
  }, [s]), ne = D((M) => {
    n && (e(v), d.current = v, x(null), c(null));
  }, [n, e, v]), V = D((M) => {
    n && (w(d.current), g.current = d.current, x(null), c(null));
  }, [n]);
  return {
    isDragging: o,
    draggingId: s,
    activeAnnotationId: l,
    editingAnnotationId: h,
    setActiveAnnotationId: u,
    setDraggingId: c,
    handleDotDragStart: N,
    handleDotDrag: U,
    handleMoveStart: K,
    handleMove: te,
    handleMouseUp: q,
    handleConfirm: ne,
    handleReset: V,
    // Return the appropriate annotations for display
    displayAnnotations: n ? v : t
  };
};
var Se = { exports: {} }, Ie = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Nt() {
  if (Je) return Ie;
  Je = 1;
  var t = me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return Ie.c = function(e) {
    return t.H.useMemoCache(e);
  }, Ie;
}
var Ye = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function $t() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var t = me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Ye.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  }()), Ye;
}
var Qe;
function jt() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? Se.exports = Nt() : Se.exports = $t()), Se.exports;
}
var Q = jt();
const It = I.div`
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
function _e(t) {
  const e = Q.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.y}%`, r = `${n.x}%`;
  let s;
  return e[0] !== o || e[1] !== r ? (s = /* @__PURE__ */ p.jsx(It, { style: {
    top: o,
    left: r
  } }), e[0] = o, e[1] = r, e[2] = s) : s = e[2], s;
}
const Yt = I.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, _t = I.div`
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
`, Ot = (t) => {
  const e = Q.c(11), {
    onChange: n,
    onSubmit: o,
    onFocus: r,
    onBlur: s,
    value: c
  } = t;
  let l;
  e[0] !== s || e[1] !== n || e[2] !== r || e[3] !== c ? (l = /* @__PURE__ */ p.jsx(Yt, { children: /* @__PURE__ */ p.jsx("textarea", { placeholder: "Write description", onFocus: r, onBlur: s, onChange: n, value: c }) }), e[0] = s, e[1] = n, e[2] = r, e[3] = c, e[4] = l) : l = e[4];
  let u;
  e[5] !== o || e[6] !== c ? (u = c && /* @__PURE__ */ p.jsx(_t, { onClick: o, children: "Submit" }), e[5] = o, e[6] = c, e[7] = u) : u = e[7];
  let h;
  return e[8] !== l || e[9] !== u ? (h = /* @__PURE__ */ p.jsxs(me.Fragment, { children: [
    l,
    u
  ] }), e[8] = l, e[9] = u, e[10] = h) : h = e[10], h;
}, Lt = bt`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Ht = I.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Lt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, Xt = (t) => {
  var U;
  const e = Q.c(17), {
    annotation: n,
    onChange: o,
    onSubmit: r,
    className: s,
    style: c
  } = t, l = s === void 0 ? "" : s;
  let u;
  e[0] !== c ? (u = c === void 0 ? {} : c, e[0] = c, e[1] = u) : u = e[1];
  const h = u, {
    geometry: x
  } = n;
  if (!x)
    return null;
  const f = `${x.x}%`, g = `${x.y + x.height}%`;
  let d;
  e[2] !== h || e[3] !== f || e[4] !== g ? (d = {
    position: "absolute",
    left: f,
    top: g,
    ...h
  }, e[2] = h, e[3] = f, e[4] = g, e[5] = d) : d = e[5];
  let v;
  e[6] !== n || e[7] !== o ? (v = (K) => o({
    ...n,
    data: {
      ...n.data,
      text: K.target.value
    }
  }), e[6] = n, e[7] = o, e[8] = v) : v = e[8];
  const w = (U = n.data) == null ? void 0 : U.text;
  let C;
  e[9] !== r || e[10] !== v || e[11] !== w ? (C = /* @__PURE__ */ p.jsx(Ot, { onChange: v, onSubmit: r, value: w }), e[9] = r, e[10] = v, e[11] = w, e[12] = C) : C = e[12];
  let N;
  return e[13] !== l || e[14] !== d || e[15] !== C ? (N = /* @__PURE__ */ p.jsx(Ht, { className: l, style: d, children: C }), e[13] = l, e[14] = d, e[15] = C, e[16] = N) : N = e[16], N;
}, De = I.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, Ft = I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function st(t) {
  const e = Q.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.y}%`;
  let r;
  e[0] !== o ? (r = /* @__PURE__ */ p.jsx(De, { style: {
    height: o,
    width: "100%"
  } }), e[0] = o, e[1] = r) : r = e[1];
  const s = `${n.y}%`, c = `${n.height}%`, l = `${n.x}%`;
  let u;
  e[2] !== s || e[3] !== c || e[4] !== l ? (u = /* @__PURE__ */ p.jsx(De, { style: {
    top: s,
    height: c,
    width: l
  } }), e[2] = s, e[3] = c, e[4] = l, e[5] = u) : u = e[5];
  const h = `${n.y}%`, x = `${n.x + n.width}%`, f = `${n.height}%`, g = `${100 - (n.x + n.width)}%`;
  let d;
  e[6] !== h || e[7] !== x || e[8] !== f || e[9] !== g ? (d = /* @__PURE__ */ p.jsx(De, { style: {
    top: h,
    left: x,
    height: f,
    width: g
  } }), e[6] = h, e[7] = x, e[8] = f, e[9] = g, e[10] = d) : d = e[10];
  const v = `${n.y + n.height}%`, w = `${100 - (n.y + n.height)}%`;
  let C;
  e[11] !== v || e[12] !== w ? (C = /* @__PURE__ */ p.jsx(De, { style: {
    top: v,
    height: w,
    width: "100%"
  } }), e[11] = v, e[12] = w, e[13] = C) : C = e[13];
  let N;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== r || e[17] !== d || e[18] !== C || e[19] !== u ? (N = /* @__PURE__ */ p.jsxs(Ft, { className: t.className, style: t.style, children: [
    r,
    u,
    d,
    C
  ] }), e[14] = t.className, e[15] = t.style, e[16] = r, e[17] = d, e[18] = C, e[19] = u, e[20] = N) : N = e[20], N;
}
st.defaultProps = {
  className: "",
  style: {}
};
const zt = I.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function ke(t) {
  const e = Q.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.x}%`, r = `${n.y}%`, s = `${n.height}%`, c = `${n.width}%`, l = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  e[0] !== t.style || e[1] !== o || e[2] !== r || e[3] !== s || e[4] !== c || e[5] !== l ? (u = {
    position: "absolute",
    left: o,
    top: r,
    height: s,
    width: c,
    boxShadow: l,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = r, e[3] = s, e[4] = c, e[5] = l, e[6] = u) : u = e[6];
  let h;
  return e[7] !== t.className || e[8] !== u ? (h = /* @__PURE__ */ p.jsx(zt, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = h) : h = e[9], h;
}
ke.defaultProps = {
  className: "",
  style: {}
};
const Bt = I.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Ne(t) {
  const e = Q.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.x}%`, r = `${n.y}%`, s = `${n.height}%`, c = `${n.width}%`, l = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  e[0] !== t.style || e[1] !== o || e[2] !== r || e[3] !== s || e[4] !== c || e[5] !== l ? (u = {
    position: "absolute",
    left: o,
    top: r,
    height: s,
    width: c,
    boxShadow: l,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = r, e[3] = s, e[4] = c, e[5] = l, e[6] = u) : u = e[6];
  let h;
  return e[7] !== t.className || e[8] !== u ? (h = /* @__PURE__ */ p.jsx(Bt, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = h) : h = e[9], h;
}
Ne.defaultProps = {
  className: "",
  style: {}
};
const Gt = I.div`
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
function it(t) {
  const e = Q.c(8), {
    geometry: n
  } = t.annotation;
  if (!n || typeof n.x > "u" || typeof n.y > "u" || typeof n.width > "u" || typeof n.height > "u")
    return null;
  const o = `${n.x}%`, r = `${n.y + n.height}%`;
  let s;
  e[0] !== t.style || e[1] !== o || e[2] !== r ? (s = {
    position: "absolute",
    left: o,
    top: r,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = r, e[3] = s) : s = e[3];
  const c = t.annotation.data && t.annotation.data.text;
  let l;
  return e[4] !== t.className || e[5] !== s || e[6] !== c ? (l = /* @__PURE__ */ p.jsx(Gt, { style: s, className: t.className, children: c }), e[4] = t.className, e[5] = s, e[6] = c, e[7] = l) : l = e[7], l;
}
it.defaultProps = {
  style: {},
  className: ""
};
const Oe = I.div`
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
`, Ut = I.div`
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
`, Wt = I.div`
  &::before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
    color: #666;
    line-height: 1;
  }
`, qt = (t) => {
  const e = Q.c(6), {
    annotationId: n,
    onRemove: o
  } = t;
  let r;
  e[0] !== n || e[1] !== o ? (r = (u) => {
    u.stopPropagation(), o(n);
  }, e[0] = n, e[1] = o, e[2] = r) : r = e[2];
  const s = r;
  let c;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (c = /* @__PURE__ */ p.jsx(Wt, {}), e[3] = c) : c = e[3];
  let l;
  return e[4] !== s ? (l = /* @__PURE__ */ p.jsx(Ut, { onClick: s, children: c }), e[4] = s, e[5] = l) : l = e[5], l;
}, Vt = I.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
`, Ke = I.button`
  width: 20px;
  height: 20px;
  background-color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(119, 127, 152, 0.2);
  font-size: 13px;
  font-weight: 600;
  pointer-events: auto;
  transition: all 0.2s ease;

  &:hover {
    background-color: lightgray;
    transform: scale(1.1);
  }
`, Jt = (t) => {
  const e = Q.c(11), {
    onConfirm: n,
    onReset: o
  } = t;
  let r;
  e[0] !== n ? (r = (f) => {
    f.stopPropagation(), n();
  }, e[0] = n, e[1] = r) : r = e[1];
  const s = r;
  let c;
  e[2] !== o ? (c = (f) => {
    f.stopPropagation(), o();
  }, e[2] = o, e[3] = c) : c = e[3];
  const l = c;
  let u;
  e[4] !== s ? (u = /* @__PURE__ */ p.jsx(Ke, { $variant: "confirm", onClick: s, children: "✓" }), e[4] = s, e[5] = u) : u = e[5];
  let h;
  e[6] !== l ? (h = /* @__PURE__ */ p.jsx(Ke, { $variant: "reset", onClick: l, children: "✕" }), e[6] = l, e[7] = h) : h = e[7];
  let x;
  return e[8] !== u || e[9] !== h ? (x = /* @__PURE__ */ p.jsxs(Vt, { children: [
    u,
    h
  ] }), e[8] = u, e[9] = h, e[10] = x) : x = e[10], x;
}, Zt = I.div`
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
`, Qt = I.div`
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
`, Ce = (t) => {
  const e = Q.c(9), {
    position: n,
    onDragStart: o,
    onDrag: r,
    onDragEnd: s,
    annotationId: c
  } = t;
  let l;
  e[0] !== c || e[1] !== r || e[2] !== s || e[3] !== o || e[4] !== n ? (l = (f) => {
    f.preventDefault(), f.stopPropagation();
    const g = {
      x: f.clientX,
      y: f.clientY
    };
    o(c, g);
    const d = (w) => {
      w.preventDefault(), w.stopPropagation(), r(w, n, g);
    }, v = (w) => {
      w.preventDefault(), w.stopPropagation(), document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", v), s == null || s();
    };
    document.addEventListener("mousemove", d), document.addEventListener("mouseup", v);
  }, e[0] = c, e[1] = r, e[2] = s, e[3] = o, e[4] = n, e[5] = l) : l = e[5];
  const u = l, h = en;
  let x;
  return e[6] !== u || e[7] !== n ? (x = /* @__PURE__ */ p.jsx(Zt, { position: n, onMouseDown: u, onClick: h, "data-type": "dot" }), e[6] = u, e[7] = n, e[8] = x) : x = e[8], x;
}, Kt = (t) => {
  const e = Q.c(7), {
    onMoveStart: n,
    onMove: o,
    onMoveEnd: r,
    annotationId: s
  } = t;
  let c;
  e[0] !== s || e[1] !== o || e[2] !== r || e[3] !== n ? (c = (x) => {
    x.preventDefault(), x.stopPropagation();
    const f = {
      x: x.clientX,
      y: x.clientY
    };
    n(s, f);
    const g = (v) => {
      v.preventDefault(), v.stopPropagation(), o(v, f);
    }, d = (v) => {
      v.preventDefault(), v.stopPropagation(), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", d), r == null || r();
    };
    document.addEventListener("mousemove", g), document.addEventListener("mouseup", d);
  }, e[0] = s, e[1] = o, e[2] = r, e[3] = n, e[4] = c) : c = e[4];
  const l = c, u = tn;
  let h;
  return e[5] !== l ? (h = /* @__PURE__ */ p.jsx(Qt, { onMouseDown: l, onClick: u, "data-type": "move-button", children: "↕" }), e[5] = l, e[6] = h) : h = e[6], h;
};
function en(t) {
  t.preventDefault(), t.stopPropagation();
}
function tn(t) {
  t.preventDefault(), t.stopPropagation();
}
const nn = I.div`
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
`, on = (t) => {
  var B, i, m, R, b, F, H, oe, se, $, ee, J;
  const e = Q.c(53), {
    annotation: n,
    onDotDragStart: o,
    onDotDrag: r,
    onMoveStart: s,
    onMove: c,
    onDragEnd: l,
    isDragging: u,
    allowDelete: h,
    onRemoveAnnotation: x,
    onConfirm: f,
    onReset: g
  } = t, {
    geometry: d
  } = n;
  if (!d || !d.type || typeof d.x != "number" || typeof d.y != "number")
    return null;
  let v;
  e[0] !== ((B = n.data) == null ? void 0 : B.id) || e[1] !== c || e[2] !== s ? (v = (y) => {
    var Ee;
    const Z = y.target;
    if (Z.closest('[data-type="dot"]') || Z.closest('[data-type="move-button"]'))
      return;
    y.preventDefault(), y.stopPropagation();
    const xe = {
      x: y.clientX,
      y: y.clientY
    }, ce = (Ee = n.data) == null ? void 0 : Ee.id;
    ce && s(ce, xe);
    const fe = (ie) => {
      ie.preventDefault(), ie.stopPropagation(), c(ie, xe);
    }, le = (ie) => {
      ie.preventDefault(), ie.stopPropagation(), document.removeEventListener("mousemove", fe), document.removeEventListener("mouseup", le);
    };
    document.addEventListener("mousemove", fe), document.addEventListener("mouseup", le);
  }, e[0] = (i = n.data) == null ? void 0 : i.id, e[1] = c, e[2] = s, e[3] = v) : v = e[3];
  const w = v, C = rn, N = `${d.x}%`, U = `${d.y}%`, K = `${d.width}%`, te = `${d.height}%`;
  let q;
  e[4] !== N || e[5] !== U || e[6] !== K || e[7] !== te ? (q = {
    left: N,
    top: U,
    width: K,
    height: te
  }, e[4] = N, e[5] = U, e[6] = K, e[7] = te, e[8] = q) : q = e[8];
  const ne = (m = n.data) == null ? void 0 : m.id;
  let V;
  e[9] !== r || e[10] !== o || e[11] !== l || e[12] !== ne ? (V = /* @__PURE__ */ p.jsx(Ce, { position: "top", onDragStart: o, onDrag: r, onDragEnd: l, annotationId: ne }), e[9] = r, e[10] = o, e[11] = l, e[12] = ne, e[13] = V) : V = e[13];
  const M = (R = n.data) == null ? void 0 : R.id;
  let P;
  e[14] !== r || e[15] !== o || e[16] !== l || e[17] !== M ? (P = /* @__PURE__ */ p.jsx(Ce, { position: "right", onDragStart: o, onDrag: r, onDragEnd: l, annotationId: M }), e[14] = r, e[15] = o, e[16] = l, e[17] = M, e[18] = P) : P = e[18];
  const k = (b = n.data) == null ? void 0 : b.id;
  let E;
  e[19] !== r || e[20] !== o || e[21] !== l || e[22] !== k ? (E = /* @__PURE__ */ p.jsx(Ce, { position: "bottom", onDragStart: o, onDrag: r, onDragEnd: l, annotationId: k }), e[19] = r, e[20] = o, e[21] = l, e[22] = k, e[23] = E) : E = e[23];
  const L = (F = n.data) == null ? void 0 : F.id;
  let O;
  e[24] !== r || e[25] !== o || e[26] !== l || e[27] !== L ? (O = /* @__PURE__ */ p.jsx(Ce, { position: "left", onDragStart: o, onDrag: r, onDragEnd: l, annotationId: L }), e[24] = r, e[25] = o, e[26] = l, e[27] = L, e[28] = O) : O = e[28];
  const X = (H = n.data) == null ? void 0 : H.id;
  let Y;
  e[29] !== l || e[30] !== c || e[31] !== s || e[32] !== X ? (Y = /* @__PURE__ */ p.jsx(Kt, { onMoveStart: s, onMove: c, onMoveEnd: l, annotationId: X }), e[29] = l, e[30] = c, e[31] = s, e[32] = X, e[33] = Y) : Y = e[33];
  let A;
  e[34] !== h || e[35] !== ((oe = n.data) == null ? void 0 : oe.id) || e[36] !== x ? (A = h && x && /* @__PURE__ */ p.jsx(qt, { annotationId: (se = n.data) == null ? void 0 : se.id, onRemove: x }), e[34] = h, e[35] = ($ = n.data) == null ? void 0 : $.id, e[36] = x, e[37] = A) : A = e[37];
  let S;
  e[38] !== ((ee = n.data) == null ? void 0 : ee.id) || e[39] !== f || e[40] !== g ? (S = f && g && /* @__PURE__ */ p.jsx(Jt, { onConfirm: () => {
    var y;
    return f((y = n.data) == null ? void 0 : y.id);
  }, onReset: () => {
    var y;
    return g((y = n.data) == null ? void 0 : y.id);
  } }), e[38] = (J = n.data) == null ? void 0 : J.id, e[39] = f, e[40] = g, e[41] = S) : S = e[41];
  let T;
  return e[42] !== w || e[43] !== u || e[44] !== P || e[45] !== E || e[46] !== O || e[47] !== Y || e[48] !== A || e[49] !== S || e[50] !== q || e[51] !== V ? (T = /* @__PURE__ */ p.jsxs(nn, { style: q, $isDragging: u, onMouseDown: w, onClick: C, children: [
    V,
    P,
    E,
    O,
    Y,
    A,
    S
  ] }), e[42] = w, e[43] = u, e[44] = P, e[45] = E, e[46] = O, e[47] = Y, e[48] = A, e[49] = S, e[50] = q, e[51] = V, e[52] = T) : T = e[52], T;
};
function rn(t) {
  t.preventDefault(), t.stopPropagation();
}
const at = "RECTANGLE";
function sn({
  x: t,
  y: e
}, n) {
  if (!n) return !1;
  const o = Math.min(n.x, n.x + n.width), r = Math.max(n.x, n.x + n.width), s = Math.min(n.y, n.y + n.height), c = Math.max(n.y, n.y + n.height);
  return !(t < o || e < s || t > r || e > c);
}
function an(t) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const e = Math.abs(t.width), n = Math.abs(t.height);
  return e * n;
}
const cn = {
  onTouchStart(t, e) {
    return et(t, e);
  },
  onTouchEnd(t, e) {
    return tt(t);
  },
  onTouchMove(t, e) {
    return nt(t, e);
  },
  onMouseDown(t, e) {
    return et(t, e);
  },
  onMouseUp(t, e) {
    return tt(t);
  },
  onMouseMove(t, e) {
    return nt(t, e);
  }
};
function et(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: o
    } = de(e);
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
function tt(t, e) {
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
function nt(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: o
    } = t.selection, {
      x: r,
      y: s
    } = de(e), c = r - n, l = s - o;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: at,
        x: c > 0 ? n : r,
        y: l > 0 ? o : s,
        width: Math.abs(c),
        height: Math.abs(l)
      }
    };
  }
  return t;
}
const ge = {
  TYPE: at,
  intersects: sn,
  area: an,
  methods: cn
}, ct = "POINT";
function ln({
  x: t,
  y: e
}, n, o) {
  if (!n) return !1;
  const r = Math.abs(t - n.x), s = Math.abs(e - n.y);
  return r === 0 && s === 0;
}
function un(t, e) {
  return 0;
}
const dn = {
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
        ...de(e),
        width: 0,
        height: 0,
        type: ct
      }
    };
  }
}, ye = {
  TYPE: ct,
  intersects: ln,
  area: un,
  methods: dn
}, Ae = (t) => Math.pow(t, 2), Le = "OVAL";
function fn({
  x: t,
  y: e
}, n) {
  if (!n || !n.width || !n.height) return !1;
  const o = Math.abs(n.width), r = Math.abs(n.height), s = {
    x: n.x + o / 2,
    y: n.y + r / 2
  }, c = o / 2, l = r / 2;
  if (c === 0 || l === 0) return !1;
  const u = t - s.x, h = e - s.y;
  return Ae(u) / Ae(c) + Ae(h) / Ae(l) <= 1;
}
function hn(t) {
  return !t || !t.width || !t.height || t.width <= 0 || t.height <= 0 ? 0 : Math.PI * Math.abs(t.width) * Math.abs(t.height) / 4;
}
const pn = {
  onTouchStart(t, e) {
    return gn(t, e);
  },
  onTouchEnd(t, e) {
    return mn(t);
  },
  onTouchMove(t, e) {
    return xn(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: o
      } = de(e);
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
        x: r,
        y: s
      } = de(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: Le,
          x: Math.min(n, r),
          y: Math.min(o, s),
          width: Math.abs(r - n),
          height: Math.abs(s - o)
        }
      };
    }
    return t;
  }
};
function gn(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: o
    } = de(e);
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
function mn(t, e) {
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
function xn(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: o
    } = t.selection, {
      x: r,
      y: s
    } = de(e), c = r - n, l = s - o;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Le,
        x: c > 0 ? n : r,
        y: l > 0 ? o : s,
        width: Math.abs(c),
        height: Math.abs(l)
      }
    };
  }
  return t;
}
const Pe = {
  TYPE: Le,
  intersects: fn,
  area: hn,
  methods: pn
}, ot = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: ge.TYPE,
  selectors: [ge, ye, Pe],
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  activeAnnotationComparator: (t, e) => t === e,
  renderSelector: ({
    annotation: t
  }) => {
    switch (t.geometry.type) {
      case ge.TYPE:
        return /* @__PURE__ */ p.jsx(st, { annotation: t });
      case ye.TYPE:
        return /* @__PURE__ */ p.jsx(_e, { annotation: t });
      case Pe.TYPE:
        return /* @__PURE__ */ p.jsx(Ne, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ p.jsx(Xt, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case ge.TYPE:
        return /* @__PURE__ */ p.jsx(ke, { annotation: e, active: n }, t);
      case ye.TYPE:
        return /* @__PURE__ */ p.jsx(_e, { annotation: e }, t);
      case Pe.TYPE:
        return /* @__PURE__ */ p.jsx(Ne, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ p.jsx(it, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case ye.TYPE:
        return /* @__PURE__ */ p.jsx(Oe, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ p.jsx(Oe, { children: "Click and Drag to Annotate" });
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
    isDragging: o,
    isHovered: r,
    onDotDragStart: s,
    onDotDrag: c,
    onMoveStart: l,
    onMove: u,
    onDragEnd: h,
    allowDelete: x,
    onRemoveAnnotation: f,
    onConfirm: g,
    onReset: d
  }) => {
    var v;
    if (!((v = e.data) != null && v.id) || !r)
      switch (e.geometry.type) {
        case ge.TYPE:
          return /* @__PURE__ */ p.jsx(ke, { annotation: e, active: n }, t);
        case ye.TYPE:
          return /* @__PURE__ */ p.jsx(_e, { annotation: e }, t);
        case Pe.TYPE:
          return /* @__PURE__ */ p.jsx(Ne, { annotation: e, active: n }, t);
        default:
          return null;
      }
    return e.geometry.type === ge.TYPE ? /* @__PURE__ */ p.jsx(on, { annotation: e, onDotDragStart: s, onDotDrag: c, onMoveStart: l, onMove: u, onDragEnd: h, isDragging: o, allowDelete: x, onRemoveAnnotation: f, onConfirm: g, onReset: d }, t) : /* @__PURE__ */ p.jsx(ke, { annotation: e, active: n }, t);
  }
}, vn = I.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Oe} {
    opacity: 1;
  }
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, bn = I.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`, yn = I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`, wn = I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`, En = (t) => {
  var Ge;
  const {
    selectors: e,
    ...n
  } = t, o = {
    ...ot,
    ...n,
    // Spread the rest of incomingProps
    // Explicitly handle selectors: use incoming if provided, else use default
    selectors: e !== void 0 ? e : ot.selectors
  }, {
    // OwnProps (destructured with defaults applied via spread above)
    src: r,
    alt: s,
    style: c,
    className: l,
    containerRef: u,
    // Renamed
    children: h,
    annotations: x,
    type: f,
    selectors: g,
    value: d,
    onChange: v,
    onSubmit: w,
    // Renamed
    activeAnnotationComparator: C,
    activeAnnotations: N,
    disableAnnotation: U,
    disableSelector: K,
    renderSelector: te,
    disableEditor: q,
    renderEditor: ne,
    renderHighlight: V,
    renderContent: M,
    disableOverlay: P,
    renderOverlay: k,
    allowTouch: E,
    onImageMouseUp: L,
    onImageMouseDown: O,
    onImageMouseMove: X,
    onImageClick: Y,
    // Editing functionality props
    enableEditing: A,
    onAnnotationsChange: S,
    renderDraggableHighlight: T,
    // Delete functionality props
    allowDelete: B,
    onRemoveAnnotation: i,
    // Confirm/Reset functionality props
    onConfirm: m,
    onReset: R,
    // HOC-injected props
    relativeMousePos: b,
    isMouseHovering: F
  } = o, H = ae(null), oe = ae(null), {
    x: se,
    y: $
  } = b, ee = D((a) => {
    A && S && S(a);
  }, [A, S]), J = !!(m && R), y = A ? kt(x, ee, J) : null, Z = ae(null), [xe, ce] = ue(null), fe = ae(0), le = (y == null ? void 0 : y.displayAnnotations) || x, Ee = D((a) => {
    fe.current = Date.now() + 200, ce(null), y ? y.handleConfirm(a) : m && m(a);
  }, [y, m]), ie = D((a) => {
    fe.current = Date.now() + 200, ce(null), y ? y.handleReset(a) : R && R(a);
  }, [y, R]), he = D((a) => {
    if (a)
      return g.find((j) => j.TYPE === a);
  }, [g]), Te = f || g && g[0] && g[0].TYPE, G = D((a, j) => {
    if (U)
      return;
    const z = he(Te);
    if (z && z.methods[a]) {
      const re = z.methods[a], W = re(d || {}, j);
      typeof W > "u" ? process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(a)} of type ${Te} returned undefined.
             Make sure to explicitly return the previous state or new state.`) : v && v(W);
    }
  }, [U, he, Te, d, v]), He = D((a) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && E && a.preventDefault(), G("onTouchStart", a);
  }, [E, G]), Xe = D((a) => {
    G("onTouchEnd", a);
  }, [G]), Fe = D((a) => {
    b && typeof b.onTouchMove == "function" && b.onTouchMove(a), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && E && a.preventDefault(), G("onTouchMove", a);
  }, [b, E, G]), $e = D((a) => {
    b && typeof b.onTouchLeave == "function" && b.onTouchLeave(a);
  }, [b]);
  we(() => {
    const a = oe.current;
    if (E && a)
      return a.ontouchstart = He, a.ontouchend = Xe, a.ontouchmove = Fe, a.ontouchcancel = $e, () => {
        a && (a.ontouchstart = null, a.ontouchend = null, a.ontouchmove = null, a.ontouchcancel = null);
      };
    a && (a.ontouchstart = null, a.ontouchend = null, a.ontouchmove = null, a.ontouchcancel = null);
  }, [E, He, Xe, Fe, $e]);
  const lt = D((a) => {
    H.current = a, b && typeof b.innerRef == "function" && b.innerRef(a);
  }, [b]), ut = D((a) => {
    F && typeof F.innerRef == "function" && F.innerRef(a), u && (typeof u == "function" ? u(a) : u.current = a);
  }, [F, u]), dt = D((a, j) => {
    const z = H.current;
    return !z || a === null || j === null ? void 0 : le.map((W) => {
      const {
        geometry: _
      } = W;
      if (!_) return !1;
      const pe = he(_.type);
      if (!pe) return !1;
      if (A && _.type === "RECTANGLE" && typeof _.x == "number" && typeof _.y == "number" && typeof _.width == "number" && typeof _.height == "number") {
        const Re = {
          ..._,
          x: Math.max(0, _.x - 2),
          // Add 2% buffer on each side
          y: Math.max(0, _.y - 2),
          width: Math.min(100 - _.x + 2, _.width + 4),
          height: Math.min(100 - _.y + 2, _.height + 4)
        };
        return pe.intersects({
          x: a,
          y: j
        }, Re, z) ? W : !1;
      }
      return pe.intersects({
        x: a,
        y: j
      }, _, z) ? W : !1;
    }).filter((W) => !!W).sort((W, _) => {
      const pe = he(W.geometry.type), Re = he(_.geometry.type);
      return !pe || !Re || !z ? 0 : pe.area(W.geometry, z) - Re.area(_.geometry, z);
    })[0];
  }, [le, he, H, A]), ft = D((a) => {
    b && typeof b.onMouseMove == "function" && b.onMouseMove(a);
    const j = a;
    X && X(j), G("onMouseMove", j);
  }, [b, X, G]), ht = D((a) => {
    b && typeof b.onMouseLeave == "function" && b.onMouseLeave(a);
  }, [b]), pt = D((a) => {
    L && L(a), G("onMouseUp", a);
  }, [L, G]), gt = D((a) => {
    O && O(a), G("onMouseDown", a);
  }, [O, G]), mt = D((a) => {
    Y && Y(a), G("onClick", a);
  }, [Y, G]), xt = D(() => {
    w && d && w(d);
  }, [w, d]), je = D((a) => {
    var j;
    a.key === "Escape" && v && ((j = d == null ? void 0 : d.selection) != null && j.showEditor || d != null && d.geometry) && v({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [d, v]);
  we(() => {
    var a;
    if ((a = d == null ? void 0 : d.selection) != null && a.showEditor)
      return window.addEventListener("keydown", je), () => window.removeEventListener("keydown", je);
  }, [(Ge = d == null ? void 0 : d.selection) == null ? void 0 : Ge.showEditor, je]), we(() => () => {
    Z.current && clearTimeout(Z.current);
  }, []);
  const ze = D((a, j) => N && !!N.find((re) => C ? C(a, re) : a.data.id === re) || j === a, [N, C]), Be = dt(se, $);
  return /* @__PURE__ */ p.jsxs(vn, { style: c, ref: ut, onMouseLeave: ht, onTouchCancel: $e, onMouseMove: ft, $allowTouch: E, className: l, children: [
    /* @__PURE__ */ p.jsx(bn, { alt: s || "Annotation Image", src: r, draggable: !1, ref: lt }),
    /* @__PURE__ */ p.jsxs(yn, { children: [
      le.map((a) => {
        if (!a.data || typeof a.data.id > "u")
          return console.warn("Annotation is missing data.id, cannot render highlight:", a), null;
        const j = ze(a, Be);
        if (A && y && !y.isDragging) {
          const re = Date.now() < fe.current;
          j && xe !== a.data.id && !re ? (Z.current && (clearTimeout(Z.current), Z.current = null), ce(a.data.id), y.setDraggingId(a.data.id)) : !j && xe === a.data.id && (Z.current && clearTimeout(Z.current), Z.current = setTimeout(() => {
            ce(null), y.setDraggingId(null), Z.current = null;
          }, 100));
        }
        if (A && T && y) {
          const z = y.draggingId === a.data.id, re = y.isDragging && y.draggingId === a.data.id, W = J && y.editingAnnotationId === a.data.id;
          if (J && W || z)
            return T({
              key: a.data.id,
              annotation: a,
              active: j,
              isDragging: re,
              isHovered: z,
              onDotDragStart: y.handleDotDragStart,
              onDotDrag: y.handleDotDrag,
              onMoveStart: y.handleMoveStart,
              onMove: y.handleMove,
              onDragEnd: y.handleMouseUp,
              allowDelete: B,
              onRemoveAnnotation: i,
              onConfirm: J ? Ee : m,
              onReset: J ? ie : R
            });
        }
        return V({
          key: a.data.id,
          annotation: a,
          active: j
        });
      }),
      !K && d && d.geometry && te && te({
        annotation: d
      })
    ] }),
    /* @__PURE__ */ p.jsx(wn, { "data-testid": "annotation-target", ref: oe, onClick: mt, onMouseUp: pt, onMouseDown: gt }),
    !P && k && k({
      type: Te,
      annotation: d
    }),
    le.map((a) => !a.data || typeof a.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render content:", a), null) : ze(a, Be) && M && M({
      key: a.data.id,
      annotation: a
    })),
    !q && d && d.selection && d.selection.showEditor && ne && v && ne({
      annotation: d,
      onChange: v,
      onSubmit: xt
    }),
    /* @__PURE__ */ p.jsx("div", { children: h })
  ] });
}, Tn = Tt(Mt("isMouseHovering"), Pt("relativeMousePos"))(En);
process.env.NODE_ENV !== "production" && (Tn.displayName = "ComposedAnnotation");
export {
  Tn as Annotation,
  Jt as ConfirmResetButtons,
  qt as DeleteButton,
  on as DraggableBox,
  Ce as DraggableDot,
  Kt as MoveButton,
  Pe as OvalSelector,
  ye as PointSelector,
  ge as RectangleSelector,
  Tn as default
};
