import ce, { useState as Ue, useRef as pe, useEffect as ke, PureComponent as Fe, useCallback as v } from "react";
import y, { keyframes as ze } from "styled-components";
var ne = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function We() {
  if (Ee) return J;
  Ee = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(s, i, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      c = {};
      for (var f in i)
        f !== "key" && (c[f] = i[f]);
    } else c = i;
    return i = c.ref, {
      $$typeof: e,
      type: s,
      key: u,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return J.Fragment = t, J.jsx = r, J.jsxs = r, J;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Be() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    function e(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === te ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case k:
          return "Fragment";
        case U:
          return "Profiler";
        case G:
          return "StrictMode";
        case ue:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case fe:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case N:
            return "Portal";
          case ae:
            return (n.displayName || "Context") + ".Provider";
          case Q:
            return (n._context.displayName || "Context") + ".Consumer";
          case K:
            var a = n.render;
            return n = n.displayName, n || (n = a.displayName || a.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case le:
            return a = n.displayName || null, a !== null ? a : e(n.type) || "Memo";
          case F:
            a = n._payload, n = n._init;
            try {
              return e(n(a));
            } catch {
            }
        }
      return null;
    }
    function t(n) {
      return "" + n;
    }
    function r(n) {
      try {
        t(n);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var d = a.error, p = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return d.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), t(n);
      }
    }
    function s(n) {
      if (n === k) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === F)
        return "<...>";
      try {
        var a = e(n);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var n = P.A;
      return n === null ? null : n.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function u(n) {
      if (Y.call(n, "key")) {
        var a = Object.getOwnPropertyDescriptor(n, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function f(n, a) {
      function d() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: d,
        configurable: !0
      });
    }
    function b() {
      var n = e(this.type);
      return h[n] || (h[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function M(n, a, d, p, g, w, D, X) {
      return d = w.ref, n = {
        $$typeof: m,
        type: n,
        key: a,
        props: w,
        _owner: g
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: b
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function R(n, a, d, p, g, w, D, X) {
      var x = a.children;
      if (x !== void 0)
        if (p)
          if (z(x)) {
            for (p = 0; p < x.length; p++)
              E(x[p]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(x);
      if (Y.call(a, "key")) {
        x = e(n);
        var j = Object.keys(a).filter(function(de) {
          return de !== "key";
        });
        p = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", W[x + p] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          x,
          j,
          x
        ), W[x + p] = !0);
      }
      if (x = null, d !== void 0 && (r(d), x = "" + d), u(a) && (r(a.key), x = "" + a.key), "key" in a) {
        d = {};
        for (var B in a)
          B !== "key" && (d[B] = a[B]);
      } else d = a;
      return x && f(
        d,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), M(
        n,
        x,
        w,
        g,
        i(),
        d,
        D,
        X
      );
    }
    function E(n) {
      typeof n == "object" && n !== null && n.$$typeof === m && n._store && (n._store.validated = 1);
    }
    var T = ce, m = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), Q = Symbol.for("react.consumer"), ae = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), P = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, z = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(n) {
        return n();
      }
    };
    var I, h = {}, A = T["react-stack-bottom-frame"].bind(
      T,
      c
    )(), L = $(s(c)), W = {};
    Z.Fragment = k, Z.jsx = function(n, a, d, p, g) {
      var w = 1e4 > P.recentlyCreatedOwnerStacks++;
      return R(
        n,
        a,
        d,
        !1,
        p,
        g,
        w ? Error("react-stack-top-frame") : A,
        w ? $(s(n)) : L
      );
    }, Z.jsxs = function(n, a, d, p, g) {
      var w = 1e4 > P.recentlyCreatedOwnerStacks++;
      return R(
        n,
        a,
        d,
        !0,
        p,
        g,
        w ? Error("react-stack-top-frame") : A,
        w ? $(s(n)) : L
      );
    };
  }()), Z;
}
var we;
function Ve() {
  return we || (we = 1, process.env.NODE_ENV === "production" ? ne.exports = We() : ne.exports = Be()), ne.exports;
}
var l = Ve();
function qe(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...s) => t(r(...s)));
}
const Je = ({ elem: e, e: t }) => {
  if (!e || typeof e.getBoundingClientRect != "function")
    return !1;
  const { pageY: r, pageX: s } = t, { left: i, right: c, bottom: u, top: f } = e.getBoundingClientRect();
  return s > i && s < c && r > f && r < u;
}, Ze = (e = "isMouseHovering") => (t) => {
  const r = (i) => {
    const [c, u] = Ue(!1), f = pe(null);
    ke(() => {
      const M = (R) => {
        const E = f.current, T = { pageX: R.pageX, pageY: R.pageY };
        u(Je({ elem: E, e: T }));
      };
      return document.addEventListener("mousemove", M), () => {
        document.removeEventListener("mousemove", M);
      };
    }, []);
    const b = {
      [e]: {
        innerRef: (M) => f.current = M,
        isHoveringOver: c
      }
    };
    return ce.createElement(t, {
      ...i,
      ...b
    });
  }, s = t.displayName || t.name || "Component";
  return r.displayName = `IsMouseHovering(${s})`, r;
}, Ae = (e) => {
  if (!e.currentTarget || typeof e.currentTarget.getBoundingClientRect != "function")
    return { x: 0, y: 0 };
  const t = e.currentTarget.getBoundingClientRect(), r = e.clientX - t.x, s = e.clientY - t.y;
  return {
    x: r / t.width * 100,
    y: s / t.height * 100
  };
}, Me = (e, t, r) => Math.max(e, Math.min(t, r)), Qe = (e) => {
  if (!e.currentTarget || typeof e.currentTarget.getBoundingClientRect != "function")
    return { x: 0, y: 0 };
  const t = e.targetTouches[0], r = e.currentTarget.getBoundingClientRect(), s = t.pageX - r.left, i = t.pageY - (r.top + window.scrollY);
  return {
    x: Me(0, 100, s / r.width * 100),
    y: Me(0, 100, i / r.height * 100)
  };
}, O = (e) => Ke(e) ? et(e) ? (tt(e) && e.preventDefault(), Qe(e)) : {
  x: null
} : Ae(e), Ke = (e) => e.targetTouches !== void 0, et = (e) => e.targetTouches.length === 1, tt = (e) => e.type === "touchmove", nt = (e = "relativeMousePos") => (t) => {
  class r extends Fe {
    constructor(c) {
      super(c), this.container = null, this._innerRef = (u) => {
        this.container = u;
      }, this._onMouseMove = (u) => {
        const f = Ae(u);
        this.setState(f);
      }, this._onTouchMove = (u) => {
        if (!this.container || u.targetTouches.length !== 1) return;
        const f = u.targetTouches[0], b = this.container.offsetParent;
        if (!b) return;
        const M = f.pageX - b.offsetLeft, R = f.pageY - b.offsetTop, E = this.container.width, T = this.container.height;
        typeof E == "number" && typeof T == "number" && E > 0 && T > 0 ? this.setState({
          x: M / E * 100,
          y: R / T * 100
        }) : this.setState({ x: null, y: null });
      }, this._onMouseLeave = (u) => {
        this.setState({ x: null, y: null });
      }, this._onTouchLeave = (u) => {
        this.setState({ x: null, y: null });
      }, this.state = { x: null, y: null };
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
      }, u = { [e]: c };
      return ce.createElement(t, {
        ...this.props,
        ...u
      });
    }
  }
  const s = t.displayName || t.name || "Component";
  return r.displayName = `withRelativeMousePos(${s})`, r;
}, rt = y.div`
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
function Re(e) {
  const { geometry: t } = e.annotation;
  return t ? /* @__PURE__ */ l.jsx(
    rt,
    {
      style: {
        top: `${t.y}%`,
        left: `${t.x}%`
      }
    }
  ) : null;
}
const ot = y.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, st = y.div`
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
`, it = ({
  onChange: e,
  onSubmit: t,
  onFocus: r,
  onBlur: s,
  value: i
}) => /* @__PURE__ */ l.jsxs(ce.Fragment, { children: [
  /* @__PURE__ */ l.jsx(ot, { children: /* @__PURE__ */ l.jsx(
    "textarea",
    {
      placeholder: "Write description",
      onFocus: r,
      onBlur: s,
      onChange: e,
      value: i
    }
  ) }),
  i && /* @__PURE__ */ l.jsx(st, { onClick: t, children: "Submit" })
] }), ct = ze`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, at = y.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${ct} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, ut = ({
  annotation: e,
  onChange: t,
  onSubmit: r,
  className: s = "",
  style: i = {}
}) => {
  var u;
  const { geometry: c } = e;
  return c ? /* @__PURE__ */ l.jsx(
    at,
    {
      className: s,
      style: {
        position: "absolute",
        left: `${c.x}%`,
        top: `${c.y + c.height}%`,
        ...i
      },
      children: /* @__PURE__ */ l.jsx(
        it,
        {
          onChange: (f) => t({
            ...e,
            data: {
              ...e.data,
              text: f.target.value
            }
          }),
          onSubmit: r,
          value: (u = e.data) == null ? void 0 : u.text
        }
      )
    }
  ) : null;
}, re = y.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, lt = y.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function je(e) {
  const { geometry: t } = e.annotation;
  return t ? /* @__PURE__ */ l.jsxs(
    lt,
    {
      className: e.className,
      style: e.style,
      children: [
        /* @__PURE__ */ l.jsx(
          re,
          {
            style: {
              height: `${t.y}%`,
              width: "100%"
            }
          }
        ),
        /* @__PURE__ */ l.jsx(
          re,
          {
            style: {
              top: `${t.y}%`,
              height: `${t.height}%`,
              width: `${t.x}%`
            }
          }
        ),
        /* @__PURE__ */ l.jsx(
          re,
          {
            style: {
              top: `${t.y}%`,
              left: `${t.x + t.width}%`,
              height: `${t.height}%`,
              width: `${100 - (t.x + t.width)}%`
            }
          }
        ),
        /* @__PURE__ */ l.jsx(
          re,
          {
            style: {
              top: `${t.y + t.height}%`,
              height: `${100 - (t.y + t.height)}%`,
              width: "100%"
            }
          }
        )
      ]
    }
  ) : null;
}
je.defaultProps = {
  className: "",
  style: {}
};
const ft = y.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Ne(e) {
  const { geometry: t } = e.annotation;
  return t ? /* @__PURE__ */ l.jsx(
    ft,
    {
      className: e.className,
      style: {
        position: "absolute",
        left: `${t.x}%`,
        top: `${t.y}%`,
        height: `${t.height}%`,
        width: `${t.width}%`,
        boxShadow: e.active ? "0 0 1px 1px yellow inset" : void 0,
        ...e.style
      }
    }
  ) : null;
}
Ne.defaultProps = {
  className: "",
  style: {}
};
const dt = y.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function ge(e) {
  const { geometry: t } = e.annotation;
  return t ? /* @__PURE__ */ l.jsx(
    dt,
    {
      className: e.className,
      style: {
        position: "absolute",
        left: `${t.x}%`,
        top: `${t.y}%`,
        height: `${t.height}%`,
        width: `${t.width}%`,
        boxShadow: e.active ? "0 0 1px 1px yellow inset" : void 0,
        ...e.style
      }
    }
  ) : null;
}
ge.defaultProps = {
  className: "",
  style: {}
};
const ht = y.div`
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
function $e(e) {
  const { geometry: t } = e.annotation;
  return !t || typeof t.x > "u" || typeof t.y > "u" || typeof t.width > "u" || typeof t.height > "u" ? null : /* @__PURE__ */ l.jsx(
    ht,
    {
      style: {
        position: "absolute",
        left: `${t.x}%`,
        top: `${t.y + t.height}%`,
        ...e.style
      },
      className: e.className,
      children: e.annotation.data && e.annotation.data.text
    }
  );
}
$e.defaultProps = {
  style: {},
  className: ""
};
const xe = y.div`
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
`, Oe = "RECTANGLE";
function pt({ x: e, y: t }, r) {
  if (!r) return !1;
  const s = Math.min(r.x, r.x + r.width), i = Math.max(r.x, r.x + r.width), c = Math.min(r.y, r.y + r.height), u = Math.max(r.y, r.y + r.height);
  return !(e < s || t < c || e > i || t > u);
}
function gt(e) {
  if (!e || e.width <= 0 || e.height <= 0) return 0;
  const t = Math.abs(e.width), r = Math.abs(e.height);
  return t * r;
}
const xt = {
  onTouchStart(e, t) {
    return Se(e, t);
  },
  onTouchEnd(e, t) {
    return Pe(e);
  },
  onTouchMove(e, t) {
    return Ce(e, t);
  },
  onMouseDown(e, t) {
    return Se(e, t);
  },
  onMouseUp(e, t) {
    return Pe(e);
  },
  onMouseMove(e, t) {
    return Ce(e, t);
  }
};
function Se(e, t) {
  if (e.selection)
    return {};
  {
    const { x: r, y: s } = O(t);
    return {
      ...e,
      selection: {
        ...e.selection,
        mode: "SELECTING",
        anchorX: r,
        anchorY: s
      }
    };
  }
}
function Pe(e, t) {
  if (e.selection) {
    const { selection: r, geometry: s } = e;
    if (!s)
      return {};
    switch (e.selection.mode) {
      case "SELECTING":
        return {
          ...e,
          selection: {
            ...e.selection,
            showEditor: !0,
            mode: "EDITING"
          }
        };
    }
  }
  return e;
}
function Ce(e, t) {
  if (e.selection && e.selection.mode === "SELECTING") {
    const { anchorX: r, anchorY: s } = e.selection, { x: i, y: c } = O(t), u = i - r, f = c - s;
    return {
      ...e,
      geometry: {
        ...e.geometry,
        type: Oe,
        x: u > 0 ? r : i,
        y: f > 0 ? s : c,
        width: Math.abs(u),
        height: Math.abs(f)
      }
    };
  }
  return e;
}
const oe = {
  TYPE: Oe,
  intersects: pt,
  area: gt,
  methods: xt
}, Ye = "POINT";
function mt({ x: e, y: t }, r, s) {
  if (!r) return !1;
  const i = Math.abs(e - r.x), c = Math.abs(t - r.y);
  return i === 0 && c === 0;
}
function vt(e, t) {
  return 0;
}
const bt = {
  onClick(e, t) {
    return e.geometry ? {} : {
      ...e,
      selection: {
        ...e.selection,
        showEditor: !0,
        mode: "EDITING"
      },
      geometry: {
        ...e.geometry,
        ...O(t),
        width: 0,
        height: 0,
        type: Ye
      }
    };
  }
}, se = {
  TYPE: Ye,
  intersects: mt,
  area: vt,
  methods: bt
}, ie = (e) => Math.pow(e, 2), me = "OVAL";
function yt({ x: e, y: t }, r) {
  if (!r || !r.width || !r.height) return !1;
  const s = Math.abs(r.width), i = Math.abs(r.height), c = {
    x: r.x + s / 2,
    y: r.y + i / 2
  }, u = s / 2, f = i / 2;
  if (u === 0 || f === 0) return !1;
  const b = e - c.x, M = t - c.y;
  return ie(b) / ie(u) + ie(M) / ie(f) <= 1;
}
function Et(e) {
  return !e || !e.width || !e.height || e.width <= 0 || e.height <= 0 ? 0 : Math.PI * Math.abs(e.width) * Math.abs(e.height) / 4;
}
const Tt = {
  onTouchStart(e, t) {
    return wt(e, t);
  },
  onTouchEnd(e, t) {
    return Mt(e);
  },
  onTouchMove(e, t) {
    return Rt(e, t);
  },
  onMouseDown(e, t) {
    if (!e.geometry) {
      const { x: r, y: s } = O(t);
      return {
        ...e,
        selection: {
          ...e.selection,
          mode: "SELECTING",
          anchorX: r,
          anchorY: s
        }
      };
    }
    return e;
  },
  onMouseUp(e, t) {
    if (e.selection && e.selection.mode === "SELECTING")
      return {
        ...e,
        selection: {
          ...e.selection,
          showEditor: !0,
          mode: "EDITING"
        }
      };
  },
  onMouseMove(e, t) {
    if (e.selection && e.selection.mode === "SELECTING") {
      const { anchorX: r, anchorY: s } = e.selection, { x: i, y: c } = O(t);
      return {
        ...e,
        geometry: {
          ...e.geometry,
          type: me,
          x: Math.min(r, i),
          y: Math.min(s, c),
          width: Math.abs(i - r),
          height: Math.abs(c - s)
        }
      };
    }
    return e;
  }
};
function wt(e, t) {
  if (e.selection)
    return {};
  {
    const { x: r, y: s } = O(t);
    return {
      ...e,
      selection: {
        ...e.selection,
        mode: "SELECTING",
        anchorX: r,
        anchorY: s
      }
    };
  }
}
function Mt(e, t) {
  if (e.selection) {
    const { selection: r, geometry: s } = e;
    if (!s)
      return {};
    switch (e.selection.mode) {
      case "SELECTING":
        return {
          ...e,
          selection: {
            ...e.selection,
            showEditor: !0,
            mode: "EDITING"
          }
        };
    }
  }
  return e;
}
function Rt(e, t) {
  if (e.selection && e.selection.mode === "SELECTING") {
    const { anchorX: r, anchorY: s } = e.selection, { x: i, y: c } = O(t), u = i - r, f = c - s;
    return {
      ...e,
      geometry: {
        ...e.geometry,
        type: me,
        x: u > 0 ? r : i,
        y: f > 0 ? s : c,
        width: Math.abs(u),
        height: Math.abs(f)
      }
    };
  }
  return e;
}
const he = {
  TYPE: me,
  intersects: yt,
  area: Et,
  methods: Tt
}, _e = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: oe.TYPE,
  selectors: [
    oe,
    se,
    he
  ],
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  activeAnnotationComparator: (e, t) => e === t,
  renderSelector: ({ annotation: e }) => {
    switch (e.geometry.type) {
      case oe.TYPE:
        return /* @__PURE__ */ l.jsx(
          je,
          {
            annotation: e
          }
        );
      case se.TYPE:
        return /* @__PURE__ */ l.jsx(
          Re,
          {
            annotation: e
          }
        );
      case he.TYPE:
        return /* @__PURE__ */ l.jsx(
          ge,
          {
            annotation: e
          }
        );
      default:
        return null;
    }
  },
  renderEditor: ({ annotation: e, onChange: t, onSubmit: r }) => /* @__PURE__ */ l.jsx(
    ut,
    {
      annotation: e,
      onChange: t,
      onSubmit: r
    }
  ),
  renderHighlight: ({ key: e, annotation: t, active: r }) => {
    switch (t.geometry.type) {
      case oe.TYPE:
        return /* @__PURE__ */ l.jsx(
          Ne,
          {
            annotation: t,
            active: r
          },
          e
        );
      case se.TYPE:
        return /* @__PURE__ */ l.jsx(
          Re,
          {
            annotation: t,
            active: r
          },
          e
        );
      case he.TYPE:
        return /* @__PURE__ */ l.jsx(
          ge,
          {
            annotation: t,
            active: r
          },
          e
        );
      default:
        return null;
    }
  },
  renderContent: ({ key: e, annotation: t }) => /* @__PURE__ */ l.jsx(
    $e,
    {
      annotation: t
    },
    e
  ),
  renderOverlay: ({ type: e, annotation: t } = {}) => {
    switch (e) {
      case se.TYPE:
        return /* @__PURE__ */ l.jsx(xe, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ l.jsx(xe, { children: "Click and Drag to Annotate" });
    }
  }
}, St = y.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${xe} {
    opacity: 1;
  }
  touch-action: ${(e) => e.$allowTouch ? "pinch-zoom" : "auto"};
`, Pt = y.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`, Ct = y.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`, _t = y.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`, kt = (e) => {
  const { selectors: t, ...r } = e, s = {
    ..._e,
    ...r,
    // Spread the rest of incomingProps
    // Explicitly handle selectors: use incoming if provided, else use default
    selectors: t !== void 0 ? t : _e.selectors
  }, {
    // OwnProps (destructured with defaults applied via spread above)
    src: i,
    alt: c,
    style: u,
    className: f,
    containerRef: b,
    // Renamed
    children: M,
    annotations: R,
    type: E,
    selectors: T,
    value: m,
    onChange: N,
    onSubmit: k,
    // Renamed
    activeAnnotationComparator: G,
    activeAnnotations: U,
    disableAnnotation: Q,
    disableSelector: ae,
    renderSelector: K,
    disableEditor: ue,
    renderEditor: ee,
    renderHighlight: le,
    renderContent: F,
    disableOverlay: fe,
    renderOverlay: te,
    allowTouch: P,
    onImageMouseUp: Y,
    onImageMouseDown: z,
    onImageMouseMove: $,
    onImageClick: I,
    // HOC-injected props
    relativeMousePos: h,
    isMouseHovering: A
  } = s, L = pe(null), W = pe(null), { isHoveringOver: n } = A, { x: a, y: d } = h, p = v((o) => {
    if (o)
      return T.find((S) => S.TYPE === o);
  }, [T]), g = v((o, S) => {
    if (Q)
      return;
    const C = p(E);
    if (C && C.methods[o]) {
      const V = C.methods[o], _ = V(m || {}, S);
      typeof _ > "u" ? process.env.NODE_ENV !== "production" && console.error(
        `Selector method ${String(o)} of type ${E} returned undefined.
             Make sure to explicitly return the previous state or new state.`
      ) : N && N(_);
    }
  }, [Q, p, E, m, N]), w = v((o) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && P && o.preventDefault(), g("onTouchStart", o);
  }, [P, g]), D = v((o) => {
    g("onTouchEnd", o);
  }, [g]), X = v((o) => {
    h && typeof h.onTouchMove == "function" && h.onTouchMove(o), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && P && o.preventDefault(), g("onTouchMove", o);
  }, [h, P, g]), x = v((o) => {
    h && typeof h.onTouchLeave == "function" && h.onTouchLeave(o);
  }, [h]);
  ke(() => {
    const o = W.current;
    if (P && o)
      return o.ontouchstart = w, o.ontouchend = D, o.ontouchmove = X, o.ontouchcancel = x, () => {
        o && (o.ontouchstart = null, o.ontouchend = null, o.ontouchmove = null, o.ontouchcancel = null);
      };
    o && (o.ontouchstart = null, o.ontouchend = null, o.ontouchmove = null, o.ontouchcancel = null);
  }, [P, w, D, X, x]);
  const j = v((o) => {
    L.current = o, h && typeof h.innerRef == "function" && h.innerRef(o);
  }, [h]), B = v((o) => {
    A && typeof A.innerRef == "function" && A.innerRef(o), b && (typeof b == "function" ? b(o) : b.current = o);
  }, [A, b]), de = v((o, S) => {
    const C = L.current;
    return !C || o === null || S === null ? void 0 : R.map((_) => {
      const { geometry: H } = _;
      if (!H) return !1;
      const q = p(H.type);
      return q && q.intersects({ x: o, y: S }, H, C) ? _ : !1;
    }).filter((_) => !!_).sort((_, H) => {
      const q = p(_.geometry.type), ye = p(H.geometry.type);
      return !q || !ye || !C ? 0 : q.area(_.geometry, C) - ye.area(H.geometry, C);
    })[0];
  }, [R, p, L]), Ie = v((o) => {
    h && typeof h.onMouseMove == "function" && h.onMouseMove(o);
    const S = o;
    $ && $(S), g("onMouseMove", S);
  }, [h, $, g]), Le = v((o) => {
    h && typeof h.onMouseLeave == "function" && h.onMouseLeave(o);
  }, [h]), De = v((o) => {
    Y && Y(o), g("onMouseUp", o);
  }, [Y, g]), Xe = v((o) => {
    z && z(o), g("onMouseDown", o);
  }, [z, g]), He = v((o) => {
    I && I(o), g("onClick", o);
  }, [I, g]), Ge = v(() => {
    k && m && k(m);
  }, [k, m]), ve = v((o, S) => U && !!U.find(
    (V) => G ? G(o, V) : o.data.id === V
  ) || S === o, [U, G]), be = de(a, d);
  return /* @__PURE__ */ l.jsxs(
    St,
    {
      style: u,
      ref: B,
      onMouseLeave: Le,
      onTouchCancel: x,
      onMouseMove: Ie,
      $allowTouch: P,
      className: f,
      children: [
        /* @__PURE__ */ l.jsx(
          Pt,
          {
            alt: c || "Annotation Image",
            src: i,
            draggable: !1,
            ref: j
          }
        ),
        /* @__PURE__ */ l.jsxs(Ct, { children: [
          R.map((o) => !o.data || typeof o.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render highlight:", o), null) : le({
            key: o.data.id,
            annotation: o,
            active: ve(o, be)
          })),
          !ae && m && m.geometry && K && K({
            annotation: m
          })
        ] }),
        /* @__PURE__ */ l.jsx(
          _t,
          {
            "data-testid": "annotation-target",
            ref: W,
            onClick: He,
            onMouseUp: De,
            onMouseDown: Xe
          }
        ),
        !fe && te && te({
          type: E,
          annotation: m
        }),
        R.map((o) => !o.data || typeof o.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render content:", o), null) : ve(o, be) && F && F({
          key: o.data.id,
          annotation: o
        })),
        !ue && m && m.selection && m.selection.showEditor && ee && N && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        k && // This check is to ensure the onSubmitProp function is provided
        ee({
          annotation: m,
          onChange: N,
          onSubmit: Ge
        }),
        /* @__PURE__ */ l.jsx("div", { children: M })
      ]
    }
  );
}, At = qe(
  Ze("isMouseHovering"),
  nt("relativeMousePos")
)(kt);
process.env.NODE_ENV !== "production" && (At.displayName = "ComposedAnnotation");
export {
  At as Annotation,
  oe as RectangleSelector,
  At as default
};
