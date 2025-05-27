import * as ae from "react";
import Q, { PureComponent as me } from "react";
import m, { keyframes as Ce } from "styled-components";
var k = { exports: {} }, P = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function Ae() {
  if (ce) return P;
  ce = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function o(n, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var u in i)
        u !== "key" && (s[u] = i[u]);
    } else s = i;
    return i = s.ref, {
      $$typeof: t,
      type: n,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return P.Fragment = e, P.jsx = o, P.jsxs = o, P;
}
var C = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function _e() {
  return ue || (ue = 1, process.env.NODE_ENV !== "production" && function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === Re ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case R:
          return "Fragment";
        case L:
          return "Profiler";
        case T:
          return "StrictMode";
        case G:
          return "Suspense";
        case _:
          return "SuspenseList";
        case we:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case I:
            return "Portal";
          case X:
            return (r.displayName || "Context") + ".Provider";
          case D:
            return (r._context.displayName || "Context") + ".Consumer";
          case U:
            var c = r.render;
            return r = r.displayName, r || (r = c.displayName || c.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case g:
            return c = r.displayName || null, c !== null ? c : t(r.type) || "Memo";
          case ee:
            c = r._payload, r = r._init;
            try {
              return t(r(c));
            } catch {
            }
        }
      return null;
    }
    function e(r) {
      return "" + r;
    }
    function o(r) {
      try {
        e(r);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var h = c.error, f = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return h.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), e(r);
      }
    }
    function n(r) {
      if (r === R) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === ee)
        return "<...>";
      try {
        var c = t(r);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = H.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(r) {
      if (te.call(r, "key")) {
        var c = Object.getOwnPropertyDescriptor(r, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function u(r, c) {
      function h() {
        oe || (oe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: h,
        configurable: !0
      });
    }
    function d() {
      var r = t(this.type);
      return re[r] || (re[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function v(r, c, h, f, E, b, B, F) {
      return h = b.ref, r = {
        $$typeof: A,
        type: r,
        key: c,
        props: b,
        _owner: E
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: d
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
        value: B
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function y(r, c, h, f, E, b, B, F) {
      var p = c.children;
      if (p !== void 0)
        if (f)
          if (Se(p)) {
            for (f = 0; f < p.length; f++)
              M(p[f]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else M(p);
      if (te.call(c, "key")) {
        p = t(r);
        var S = Object.keys(c).filter(function(Pe) {
          return Pe !== "key";
        });
        f = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", ie[p + f] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          p,
          S,
          p
        ), ie[p + f] = !0);
      }
      if (p = null, h !== void 0 && (o(h), p = "" + h), a(c) && (o(c.key), p = "" + c.key), "key" in c) {
        h = {};
        for (var W in c)
          W !== "key" && (h[W] = c[W]);
      } else h = c;
      return p && u(
        h,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), v(
        r,
        p,
        b,
        E,
        i(),
        h,
        B,
        F
      );
    }
    function M(r) {
      typeof r == "object" && r !== null && r.$$typeof === A && r._store && (r._store.validated = 1);
    }
    var x = Q, A = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), X = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), we = Symbol.for("react.activity"), Re = Symbol.for("react.client.reference"), H = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = Object.prototype.hasOwnProperty, Se = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var oe, re = {}, ne = x["react-stack-bottom-frame"].bind(
      x,
      s
    )(), se = z(n(s)), ie = {};
    C.Fragment = R, C.jsx = function(r, c, h, f, E) {
      var b = 1e4 > H.recentlyCreatedOwnerStacks++;
      return y(
        r,
        c,
        h,
        !1,
        f,
        E,
        b ? Error("react-stack-top-frame") : ne,
        b ? z(n(r)) : se
      );
    }, C.jsxs = function(r, c, h, f, E) {
      var b = 1e4 > H.recentlyCreatedOwnerStacks++;
      return y(
        r,
        c,
        h,
        !0,
        f,
        E,
        b ? Error("react-stack-top-frame") : ne,
        b ? z(n(r)) : se
      );
    };
  }()), C;
}
var le;
function ke() {
  return le || (le = 1, process.env.NODE_ENV === "production" ? k.exports = Ae() : k.exports = _e()), k.exports;
}
var l = ke();
function je(...t) {
  return t.length === 0 ? (e) => e : t.length === 1 ? t[0] : t.reduce((e, o) => (...n) => e(o(...n)));
}
const Ne = ({ elem: t, e }) => {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const { pageY: o, pageX: n } = e, { left: i, right: s, bottom: a, top: u } = t.getBoundingClientRect();
  return n > i && n < s && o > u && o < a;
}, $e = (t = "isMouseHovering") => (e) => {
  class o extends me {
    constructor(s) {
      super(s), this.el = null, this.onMouseMove = (a) => {
        const u = this.el, d = { pageX: a.pageX, pageY: a.pageY };
        this.setState({
          isHoveringOver: Ne({ elem: u, e: d })
        });
      }, this.state = {
        isHoveringOver: !1
      };
    }
    componentDidMount() {
      document.addEventListener("mousemove", this.onMouseMove);
    }
    componentWillUnmount() {
      document.removeEventListener("mousemove", this.onMouseMove);
    }
    render() {
      const s = {
        [t]: {
          innerRef: (a) => this.el = a,
          isHoveringOver: this.state.isHoveringOver
        }
      };
      return Q.createElement(e, {
        ...this.props,
        ...s
      });
    }
  }
  const n = e.displayName || e.name || "Component";
  return o.displayName = `IsMouseHovering(${n})`, o;
}, xe = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return { x: 0, y: 0 };
  const e = t.currentTarget.getBoundingClientRect(), o = t.clientX - e.x, n = t.clientY - e.y;
  return {
    x: o / e.width * 100,
    y: n / e.height * 100
  };
}, he = (t, e, o) => Math.max(t, Math.min(e, o)), Oe = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return { x: 0, y: 0 };
  const e = t.targetTouches[0], o = t.currentTarget.getBoundingClientRect(), n = e.pageX - o.left, i = e.pageY - (o.top + window.scrollY);
  return {
    x: he(0, 100, n / o.width * 100),
    y: he(0, 100, i / o.height * 100)
  };
}, w = (t) => Ye(t) ? Ie(t) ? (Le(t) && t.preventDefault(), Oe(t)) : {
  x: null
} : xe(t), Ye = (t) => t.targetTouches !== void 0, Ie = (t) => t.targetTouches.length === 1, Le = (t) => t.type === "touchmove", De = (t = "relativeMousePos") => (e) => {
  class o extends me {
    constructor(s) {
      super(s), this.container = null, this._innerRef = (a) => {
        this.container = a;
      }, this._onMouseMove = (a) => {
        const u = xe(a);
        this.setState(u);
      }, this._onTouchMove = (a) => {
        if (!this.container || a.targetTouches.length !== 1) return;
        const u = a.targetTouches[0], d = this.container.offsetParent;
        if (!d) return;
        const v = u.pageX - d.offsetLeft, y = u.pageY - d.offsetTop, M = this.container.width, x = this.container.height;
        typeof M == "number" && typeof x == "number" && M > 0 && x > 0 ? this.setState({
          x: v / M * 100,
          y: y / x * 100
        }) : this.setState({ x: null, y: null });
      }, this._onMouseLeave = (a) => {
        this.setState({ x: null, y: null });
      }, this._onTouchLeave = (a) => {
        this.setState({ x: null, y: null });
      }, this.state = { x: null, y: null };
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
      }, a = { [t]: s };
      return /* @__PURE__ */ l.jsx(e, { ...this.props, ...a });
    }
  }
  const n = e.displayName || e.name || "Component";
  return o.displayName = `withRelativeMousePos(${n})`, o;
}, Xe = m.div`
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
function de(t) {
  const { geometry: e } = t.annotation;
  return e ? /* @__PURE__ */ l.jsx(
    Xe,
    {
      style: {
        top: `${e.y}%`,
        left: `${e.x}%`
      }
    }
  ) : null;
}
const Ue = m.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, Ge = m.div`
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
`, He = ({
  onChange: t,
  onSubmit: e,
  onFocus: o,
  onBlur: n,
  value: i
}) => /* @__PURE__ */ l.jsxs(Q.Fragment, { children: [
  /* @__PURE__ */ l.jsx(Ue, { children: /* @__PURE__ */ l.jsx(
    "textarea",
    {
      placeholder: "Write description",
      onFocus: o,
      onBlur: n,
      onChange: t,
      value: i
    }
  ) }),
  i && /* @__PURE__ */ l.jsx(Ge, { onClick: e, children: "Submit" })
] }), ze = Ce`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Be = m.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${ze} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, Fe = ({
  annotation: t,
  onChange: e,
  onSubmit: o,
  className: n = "",
  style: i = {}
}) => {
  var a;
  const { geometry: s } = t;
  return s ? /* @__PURE__ */ l.jsx(
    Be,
    {
      className: n,
      style: {
        position: "absolute",
        left: `${s.x}%`,
        top: `${s.y + s.height}%`,
        ...i
      },
      children: /* @__PURE__ */ l.jsx(
        He,
        {
          onChange: (u) => e({
            ...t,
            data: {
              ...t.data,
              text: u.target.value
            }
          }),
          onSubmit: o,
          value: (a = t.data) == null ? void 0 : a.text
        }
      )
    }
  ) : null;
}, j = m.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, We = m.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Te(t) {
  const { geometry: e } = t.annotation;
  return e ? /* @__PURE__ */ l.jsxs(
    We,
    {
      className: t.className,
      style: t.style,
      children: [
        /* @__PURE__ */ l.jsx(
          j,
          {
            style: {
              height: `${e.y}%`,
              width: "100%"
            }
          }
        ),
        /* @__PURE__ */ l.jsx(
          j,
          {
            style: {
              top: `${e.y}%`,
              height: `${e.height}%`,
              width: `${e.x}%`
            }
          }
        ),
        /* @__PURE__ */ l.jsx(
          j,
          {
            style: {
              top: `${e.y}%`,
              left: `${e.x + e.width}%`,
              height: `${e.height}%`,
              width: `${100 - (e.x + e.width)}%`
            }
          }
        ),
        /* @__PURE__ */ l.jsx(
          j,
          {
            style: {
              top: `${e.y + e.height}%`,
              height: `${100 - (e.y + e.height)}%`,
              width: "100%"
            }
          }
        )
      ]
    }
  ) : null;
}
Te.defaultProps = {
  className: "",
  style: {}
};
const Ve = m.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function be(t) {
  const { geometry: e } = t.annotation;
  return e ? /* @__PURE__ */ l.jsx(
    Ve,
    {
      className: t.className,
      style: {
        position: "absolute",
        left: `${e.x}%`,
        top: `${e.y}%`,
        height: `${e.height}%`,
        width: `${e.width}%`,
        boxShadow: t.active ? "0 0 1px 1px yellow inset" : void 0,
        ...t.style
      }
    }
  ) : null;
}
be.defaultProps = {
  className: "",
  style: {}
};
const qe = m.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function q(t) {
  const { geometry: e } = t.annotation;
  return e ? /* @__PURE__ */ l.jsx(
    qe,
    {
      className: t.className,
      style: {
        position: "absolute",
        left: `${e.x}%`,
        top: `${e.y}%`,
        height: `${e.height}%`,
        width: `${e.width}%`,
        boxShadow: t.active ? "0 0 1px 1px yellow inset" : void 0,
        ...t.style
      }
    }
  ) : null;
}
q.defaultProps = {
  className: "",
  style: {}
};
const Je = m.div`
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
function ye(t) {
  const { geometry: e } = t.annotation;
  return !e || typeof e.x > "u" || typeof e.y > "u" || typeof e.width > "u" || typeof e.height > "u" ? null : /* @__PURE__ */ l.jsx(
    Je,
    {
      style: {
        position: "absolute",
        left: `${e.x}%`,
        top: `${e.y + e.height}%`,
        ...t.style
      },
      className: t.className,
      children: t.annotation.data && t.annotation.data.text
    }
  );
}
ye.defaultProps = {
  style: {},
  className: ""
};
const J = m.div`
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
`, Me = "RECTANGLE";
function Ze({ x: t, y: e }, o) {
  if (!o) return !1;
  const n = Math.min(o.x, o.x + o.width), i = Math.max(o.x, o.x + o.width), s = Math.min(o.y, o.y + o.height), a = Math.max(o.y, o.y + o.height);
  return !(t < n || e < s || t > i || e > a);
}
function Qe(t) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const e = Math.abs(t.width), o = Math.abs(t.height);
  return e * o;
}
const Ke = {
  onTouchStart(t, e) {
    return fe(t, e);
  },
  onTouchEnd(t, e) {
    return pe(t);
  },
  onTouchMove(t, e) {
    return ge(t, e);
  },
  onMouseDown(t, e) {
    return fe(t, e);
  },
  onMouseUp(t, e) {
    return pe(t);
  },
  onMouseMove(t, e) {
    return ge(t, e);
  }
};
function fe(t, e) {
  if (t.selection)
    return {};
  {
    const { x: o, y: n } = w(e);
    return {
      ...t,
      selection: {
        ...t.selection,
        mode: "SELECTING",
        anchorX: o,
        anchorY: n
      }
    };
  }
}
function pe(t, e) {
  if (t.selection) {
    const { selection: o, geometry: n } = t;
    if (!n)
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
function ge(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const { anchorX: o, anchorY: n } = t.selection, { x: i, y: s } = w(e), a = i - o, u = s - n;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: Me,
        x: a > 0 ? o : i,
        y: u > 0 ? n : s,
        width: Math.abs(a),
        height: Math.abs(u)
      }
    };
  }
  return t;
}
const N = {
  TYPE: Me,
  intersects: Ze,
  area: Qe,
  methods: Ke
}, Ee = "POINT";
function et({ x: t, y: e }, o, n) {
  if (!o) return !1;
  const i = Math.abs(t - o.x), s = Math.abs(e - o.y);
  return i === 0 && s === 0;
}
function tt(t, e) {
  return 0;
}
const ot = {
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
        ...w(e),
        width: 0,
        height: 0,
        type: Ee
      }
    };
  }
}, $ = {
  TYPE: Ee,
  intersects: et,
  area: tt,
  methods: ot
}, O = (t) => Math.pow(t, 2), K = "OVAL";
function rt({ x: t, y: e }, o) {
  if (!o || !o.width || !o.height) return !1;
  const n = Math.abs(o.width), i = Math.abs(o.height), s = {
    x: o.x + n / 2,
    y: o.y + i / 2
  }, a = n / 2, u = i / 2;
  if (a === 0 || u === 0) return !1;
  const d = t - s.x, v = e - s.y;
  return O(d) / O(a) + O(v) / O(u) <= 1;
}
function nt(t) {
  return !t || !t.width || !t.height || t.width <= 0 || t.height <= 0 ? 0 : Math.PI * Math.abs(t.width) * Math.abs(t.height) / 4;
}
const st = {
  onTouchStart(t, e) {
    return it(t, e);
  },
  onTouchEnd(t, e) {
    return at(t);
  },
  onTouchMove(t, e) {
    return ct(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const { x: o, y: n } = w(e);
      return {
        ...t,
        selection: {
          ...t.selection,
          mode: "SELECTING",
          anchorX: o,
          anchorY: n
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
      const { anchorX: o, anchorY: n } = t.selection, { x: i, y: s } = w(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: K,
          x: Math.min(o, i),
          y: Math.min(n, s),
          width: Math.abs(i - o),
          height: Math.abs(s - n)
        }
      };
    }
    return t;
  }
};
function it(t, e) {
  if (t.selection)
    return {};
  {
    const { x: o, y: n } = w(e);
    return {
      ...t,
      selection: {
        ...t.selection,
        mode: "SELECTING",
        anchorX: o,
        anchorY: n
      }
    };
  }
}
function at(t, e) {
  if (t.selection) {
    const { selection: o, geometry: n } = t;
    if (!n)
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
function ct(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const { anchorX: o, anchorY: n } = t.selection, { x: i, y: s } = w(e), a = i - o, u = s - n;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: K,
        x: a > 0 ? o : i,
        y: u > 0 ? n : s,
        width: Math.abs(a),
        height: Math.abs(u)
      }
    };
  }
  return t;
}
const V = {
  TYPE: K,
  intersects: rt,
  area: nt,
  methods: st
}, ve = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: N.TYPE,
  selectors: [
    N,
    $,
    V
  ],
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  activeAnnotationComparator: (t, e) => t === e,
  renderSelector: ({ annotation: t }) => {
    switch (t.geometry.type) {
      case N.TYPE:
        return /* @__PURE__ */ l.jsx(
          Te,
          {
            annotation: t
          }
        );
      case $.TYPE:
        return /* @__PURE__ */ l.jsx(
          de,
          {
            annotation: t
          }
        );
      case V.TYPE:
        return /* @__PURE__ */ l.jsx(
          q,
          {
            annotation: t
          }
        );
      default:
        return null;
    }
  },
  renderEditor: ({ annotation: t, onChange: e, onSubmit: o }) => /* @__PURE__ */ l.jsx(
    Fe,
    {
      annotation: t,
      onChange: e,
      onSubmit: o
    }
  ),
  renderHighlight: ({ key: t, annotation: e, active: o }) => {
    switch (e.geometry.type) {
      case N.TYPE:
        return /* @__PURE__ */ l.jsx(
          be,
          {
            annotation: e,
            active: o
          },
          t
        );
      case $.TYPE:
        return /* @__PURE__ */ l.jsx(
          de,
          {
            annotation: e,
            active: o
          },
          t
        );
      case V.TYPE:
        return /* @__PURE__ */ l.jsx(
          q,
          {
            annotation: e,
            active: o
          },
          t
        );
      default:
        return null;
    }
  },
  renderContent: ({ key: t, annotation: e }) => /* @__PURE__ */ l.jsx(
    ye,
    {
      annotation: e
    },
    t
  ),
  renderOverlay: ({ type: t, annotation: e } = {}) => {
    switch (t) {
      case $.TYPE:
        return /* @__PURE__ */ l.jsx(J, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ l.jsx(J, { children: "Click and Drag to Annotate" });
    }
  }
}, ut = m.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${J} {
    opacity: 1;
  }
  touch-action: ${(t) => t.allowTouch ? "pinch-zoom" : "auto"};
`, lt = m.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`, ht = m.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`, dt = m.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`, Y = class Y extends ae.Component {
  constructor() {
    super(...arguments), this.container = null, this.targetRef = ae.createRef(), this.addTargetTouchEventListeners = () => {
      const e = this.targetRef.current;
      e && (e.ontouchstart = this.onTouchStart, e.ontouchend = this.onTouchEnd, e.ontouchmove = this.onTargetTouchMove, e.ontouchcancel = this.onTargetTouchLeave);
    }, this.removeTargetTouchEventListeners = () => {
      const e = this.targetRef.current;
      e && (e.ontouchstart = null, e.ontouchend = null, e.ontouchmove = null, e.ontouchcancel = null);
    }, this.setImageRef = (e) => {
      this.container = e, this.props.relativeMousePos && typeof this.props.relativeMousePos.innerRef == "function" && this.props.relativeMousePos.innerRef(e);
    }, this.setContainerRef = (e) => {
      this.props.isMouseHovering && typeof this.props.isMouseHovering.innerRef == "function" && this.props.isMouseHovering.innerRef(e), this.props.containerRef && (typeof this.props.containerRef == "function" ? this.props.containerRef(e) : this.props.containerRef.current = e);
    }, this.getSelectorByType = (e) => {
      if (e)
        return this.props.selectors.find((o) => o.TYPE === e);
    }, this.getTopAnnotationAt = (e, o) => {
      const { annotations: n } = this.props, { container: i, getSelectorByType: s } = this;
      return !i || e === null || o === null ? void 0 : n.map((u) => {
        const { geometry: d } = u;
        if (!d) return !1;
        const v = s(d.type);
        return v && v.intersects({ x: e, y: o }, d, i) ? u : !1;
      }).filter((u) => !!u).sort((u, d) => {
        const v = s(u.geometry.type), y = s(d.geometry.type);
        return !v || !y || !this.container ? 0 : v.area(u.geometry, this.container) - y.area(d.geometry, this.container);
      })[0];
    }, this.onTargetMouseMove = (e) => {
      this.props.relativeMousePos && typeof this.props.relativeMousePos.onMouseMove == "function" && this.props.relativeMousePos.onMouseMove(e);
      const o = e;
      this.props.onImageMouseMove && this.props.onImageMouseMove(o), this.callSelectorMethod("onMouseMove", o);
    }, this.onTargetTouchMove = (e) => {
      this.props.relativeMousePos && typeof this.props.relativeMousePos.onTouchMove == "function" && this.props.relativeMousePos.onTouchMove(e), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && this.props.allowTouch && e.preventDefault(), this.callSelectorMethod("onTouchMove", e);
    }, this.onTargetMouseLeave = (e) => {
      this.props.relativeMousePos && typeof this.props.relativeMousePos.onMouseLeave == "function" && this.props.relativeMousePos.onMouseLeave(e);
    }, this.onTargetTouchLeave = (e) => {
      this.props.relativeMousePos && typeof this.props.relativeMousePos.onTouchLeave == "function" && this.props.relativeMousePos.onTouchLeave(e);
    }, this.onMouseUp = (e) => {
      this.props.onImageMouseUp && this.props.onImageMouseUp(e), this.callSelectorMethod("onMouseUp", e);
    }, this.onMouseDown = (e) => {
      this.props.onImageMouseDown && this.props.onImageMouseDown(e), this.callSelectorMethod("onMouseDown", e);
    }, this.onClick = (e) => {
      this.props.onImageClick && this.props.onImageClick(e), this.callSelectorMethod("onClick", e);
    }, this.onTouchStart = (e) => {
      navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && this.props.allowTouch && e.preventDefault(), this.callSelectorMethod("onTouchStart", e);
    }, this.onTouchEnd = (e) => this.callSelectorMethod("onTouchEnd", e), this.onSubmit = () => {
      this.props.onSubmit && this.props.value && this.props.onSubmit(this.props.value);
    }, this.callSelectorMethod = (e, o) => {
      if (this.props.disableAnnotation)
        return;
      const n = this.getSelectorByType(this.props.type);
      if (n && n.methods[e]) {
        const i = n.methods[e], s = i(this.props.value || {}, o);
        typeof s > "u" ? process.env.NODE_ENV !== "production" && console.error(
          `Selector method ${String(e)} of type ${this.props.type} returned undefined.
             Make sure to explicitly return the previous state or new state.`
        ) : this.props.onChange && this.props.onChange(s);
      }
    }, this.shouldAnnotationBeActive = (e, o) => this.props.activeAnnotations && !!this.props.activeAnnotations.find(
      (i) => this.props.activeAnnotationComparator ? this.props.activeAnnotationComparator(e, i) : e.data.id === i
    ) || o === e;
  }
  componentDidMount() {
    this.props.allowTouch && this.addTargetTouchEventListeners(), this.props.containerRef && this.props.containerRef;
  }
  componentDidUpdate(e) {
    this.props.allowTouch !== e.allowTouch && (this.props.allowTouch ? this.addTargetTouchEventListeners() : this.removeTargetTouchEventListeners());
  }
  componentWillUnmount() {
    this.props.allowTouch && this.targetRef.current && this.removeTargetTouchEventListeners();
  }
  render() {
    const { props: e } = this, { isHoveringOver: o } = e.isMouseHovering, { x: n, y: i } = e.relativeMousePos, {
      renderHighlight: s,
      renderContent: a,
      renderSelector: u,
      renderEditor: d,
      renderOverlay: v,
      allowTouch: y,
      src: M,
      alt: x,
      style: A,
      className: I,
      annotations: R,
      value: T,
      disableSelector: L,
      disableEditor: D,
      disableOverlay: X,
      type: U,
      children: G
    } = e, _ = this.getTopAnnotationAt(
      n,
      // Use destructured mouseX from HOC
      i
      // Use destructured mouseY from HOC
    );
    return /* @__PURE__ */ l.jsxs(
      ut,
      {
        style: A,
        ref: this.setContainerRef,
        onMouseLeave: this.onTargetMouseLeave,
        onTouchCancel: this.onTargetTouchLeave,
        onMouseMove: this.onTargetMouseMove,
        allowTouch: y,
        className: I,
        children: [
          /* @__PURE__ */ l.jsx(
            lt,
            {
              alt: x || "Annotation Image",
              src: M,
              draggable: !1,
              ref: this.setImageRef
            }
          ),
          /* @__PURE__ */ l.jsxs(ht, { children: [
            R.map((g) => !g.data || typeof g.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render highlight:", g), null) : s({
              key: g.data.id,
              annotation: g,
              active: this.shouldAnnotationBeActive(g, _)
            })),
            !L && T && T.geometry && u && u({
              annotation: T
            })
          ] }),
          /* @__PURE__ */ l.jsx(
            dt,
            {
              "data-testid": "annotation-target",
              ref: this.targetRef,
              onClick: this.onClick,
              onMouseUp: this.onMouseUp,
              onMouseDown: this.onMouseDown
            }
          ),
          !X && v && v({
            type: U,
            annotation: T
          }),
          R.map((g) => !g.data || typeof g.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render content:", g), null) : this.shouldAnnotationBeActive(g, _) && a && a({
            key: g.data.id,
            annotation: g
          })),
          !D && T && T.selection && T.selection.showEditor && d && e.onChange && e.onSubmit && d({
            annotation: T,
            onChange: e.onChange,
            onSubmit: this.onSubmit
          }),
          /* @__PURE__ */ l.jsx("div", { children: G })
        ]
      }
    );
  }
};
Y.displayName = "AnnotationClass", Y.defaultProps = {
  ...ve,
  // Ensure all render functions and complex objects from defaultProps are correctly referenced
  // For example, if defaultProps.js exports functions, they are used directly.
  // If it exports instantiated selectors, ensure types match.
  // Type for selectors in defaultProps might need to be `any[]` or cast if they are plain JS objects.
  selectors: ve.selectors
  // Cast if imported JS selectors
};
let Z = Y;
const ft = je(
  $e("isMouseHovering"),
  De("relativeMousePos")
)(Z);
process.env.NODE_ENV !== "production" && (ft.displayName = "ComposedAnnotation");
export {
  ft as Annotation,
  N as RectangleSelector,
  ft as default
};
