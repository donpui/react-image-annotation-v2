import * as Be from "react";
import te, { PureComponent as Qe } from "react";
import C, { keyframes as Dt } from "styled-components";
var pe = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Lt() {
  if (Ve) return U;
  Ve = 1;
  var r = te, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, p, T) {
    var x, w = {}, S = null, D = null;
    T !== void 0 && (S = "" + T), p.key !== void 0 && (S = "" + p.key), p.ref !== void 0 && (D = p.ref);
    for (x in p) i.call(p, x) && !u.hasOwnProperty(x) && (w[x] = p[x]);
    if (f && f.defaultProps) for (x in p = f.defaultProps, p) w[x] === void 0 && (w[x] = p[x]);
    return { $$typeof: t, type: f, key: S, ref: D, props: w, _owner: c.current };
  }
  return U.Fragment = n, U.jsx = l, U.jsxs = l, U;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Yt() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    var r = te, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), X = Symbol.iterator, B = "@@iterator";
    function j(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = X && e[X] || e[B];
      return typeof o == "function" ? o : null;
    }
    var O = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
          s[a - 1] = arguments[a];
        re("error", e, s);
      }
    }
    function re(e, o, s) {
      {
        var a = O.ReactDebugCurrentFrame, g = a.getStackAddendum();
        g !== "" && (o += "%s", s = s.concat([g]));
        var m = s.map(function(d) {
          return String(d);
        });
        m.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var oe = !1, ne = !1, V = !1, M = !1, it = !1, xe;
    xe = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || it || e === c || e === T || e === x || M || e === D || oe || ne || V || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === w || e.$$typeof === l || e.$$typeof === f || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === xe || e.getModuleId !== void 0));
    }
    function ut(e, o, s) {
      var a = e.displayName;
      if (a)
        return a;
      var g = o.displayName || o.name || "";
      return g !== "" ? s + "(" + g + ")" : s;
    }
    function be(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case T:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var o = e;
            return be(o) + ".Consumer";
          case l:
            var s = e;
            return be(s._context) + ".Provider";
          case p:
            return ut(e, e.render, "ForwardRef");
          case w:
            var a = e.displayName || null;
            return a !== null ? a : $(e.type) || "Memo";
          case S: {
            var g = e, m = g._payload, d = g._init;
            try {
              return $(d(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, N = 0, Te, Ee, we, Me, Re, _e, Ce;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function ct() {
      {
        if (N === 0) {
          Te = console.log, Ee = console.info, we = console.warn, Me = console.error, Re = console.group, _e = console.groupCollapsed, Ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function lt() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: Te
            }),
            info: k({}, e, {
              value: Ee
            }),
            warn: k({}, e, {
              value: we
            }),
            error: k({}, e, {
              value: Me
            }),
            group: k({}, e, {
              value: Re
            }),
            groupCollapsed: k({}, e, {
              value: _e
            }),
            groupEnd: k({}, e, {
              value: Ce
            })
          });
        }
        N < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = O.ReactCurrentDispatcher, ie;
    function G(e, o, s) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (g) {
            var a = g.stack.trim().match(/\n( *(at )?)/);
            ie = a && a[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var ae = !1, H;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      H = new ft();
    }
    function Pe(e, o) {
      if (!e || ae)
        return "";
      {
        var s = H.get(e);
        if (s !== void 0)
          return s;
      }
      var a;
      ae = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = se.current, se.current = null, ct();
      try {
        if (o) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (_) {
              a = _;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (_) {
              a = _;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            a = _;
          }
          e();
        }
      } catch (_) {
        if (_ && a && typeof _.stack == "string") {
          for (var h = _.stack.split(`
`), R = a.stack.split(`
`), y = h.length - 1, b = R.length - 1; y >= 1 && b >= 0 && h[y] !== R[b]; )
            b--;
          for (; y >= 1 && b >= 0; y--, b--)
            if (h[y] !== R[b]) {
              if (y !== 1 || b !== 1)
                do
                  if (y--, b--, b < 0 || h[y] !== R[b]) {
                    var P = `
` + h[y].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, P), P;
                  }
                while (y >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ae = !1, se.current = m, lt(), Error.prepareStackTrace = g;
      }
      var Y = e ? e.displayName || e.name : "", A = Y ? G(Y) : "";
      return typeof e == "function" && H.set(e, A), A;
    }
    function ht(e, o, s) {
      return Pe(e, !1);
    }
    function dt(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function z(e, o, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, dt(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case T:
          return G("Suspense");
        case x:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return ht(e.render);
          case w:
            return z(e.type, o, s);
          case S: {
            var a = e, g = a._payload, m = a._init;
            try {
              return z(m(g), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, je = {}, Oe = O.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var o = e._owner, s = z(e.type, e._source, o ? o.type : null);
        Oe.setExtraStackFrame(s);
      } else
        Oe.setExtraStackFrame(null);
    }
    function pt(e, o, s, a, g) {
      {
        var m = Function.call.bind(F);
        for (var d in e)
          if (m(e, d)) {
            var h = void 0;
            try {
              if (typeof e[d] != "function") {
                var R = Error((a || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              h = e[d](o, d, a, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              h = y;
            }
            h && !(h instanceof Error) && (J(g), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", s, d, typeof h), J(null)), h instanceof Error && !(h.message in je) && (je[h.message] = !0, J(g), E("Failed %s type: %s", s, h.message), J(null));
          }
      }
    }
    var vt = Array.isArray;
    function ue(e) {
      return vt(e);
    }
    function gt(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, s = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function mt(e) {
      try {
        return $e(e), !1;
      } catch {
        return !0;
      }
    }
    function $e(e) {
      return "" + e;
    }
    function ke(e) {
      if (mt(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), $e(e);
    }
    var Ae = O.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De;
    function xt(e) {
      if (F.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function bt(e) {
      if (F.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Tt(e, o) {
      typeof e.ref == "string" && Ae.current;
    }
    function Et(e, o) {
      {
        var s = function() {
          Ie || (Ie = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function wt(e, o) {
      {
        var s = function() {
          De || (De = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Mt = function(e, o, s, a, g, m, d) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: s,
        props: d,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Rt(e, o, s, a, g) {
      {
        var m, d = {}, h = null, R = null;
        s !== void 0 && (ke(s), h = "" + s), bt(o) && (ke(o.key), h = "" + o.key), xt(o) && (R = o.ref, Tt(o, g));
        for (m in o)
          F.call(o, m) && !yt.hasOwnProperty(m) && (d[m] = o[m]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (m in y)
            d[m] === void 0 && (d[m] = y[m]);
        }
        if (h || R) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && Et(d, b), R && wt(d, b);
        }
        return Mt(e, h, R, g, a, Ae.current, d);
      }
    }
    var ce = O.ReactCurrentOwner, Le = O.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var o = e._owner, s = z(e.type, e._source, o ? o.type : null);
        Le.setExtraStackFrame(s);
      } else
        Le.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ye() {
      {
        if (ce.current) {
          var e = $(ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _t(e) {
      return "";
    }
    var Ne = {};
    function Ct(e) {
      {
        var o = Ye();
        if (!o) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (o = `

Check the top-level render call using <` + s + ">.");
        }
        return o;
      }
    }
    function Fe(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = Ct(o);
        if (Ne[s])
          return;
        Ne[s] = !0;
        var a = "";
        e && e._owner && e._owner !== ce.current && (a = " It was passed a child from " + $(e._owner.type) + "."), L(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, a), L(null);
      }
    }
    function Ue(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var s = 0; s < e.length; s++) {
            var a = e[s];
            fe(a) && Fe(a, o);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = j(e);
          if (typeof g == "function" && g !== e.entries)
            for (var m = g.call(e), d; !(d = m.next()).done; )
              fe(d.value) && Fe(d.value, o);
        }
      }
    }
    function St(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var s;
        if (typeof o == "function")
          s = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === w))
          s = o.propTypes;
        else
          return;
        if (s) {
          var a = $(o);
          pt(s, e.props, "prop", a, e);
        } else if (o.PropTypes !== void 0 && !le) {
          le = !0;
          var g = $(o);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pt(e) {
      {
        for (var o = Object.keys(e.props), s = 0; s < o.length; s++) {
          var a = o[s];
          if (a !== "children" && a !== "key") {
            L(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var We = {};
    function Xe(e, o, s, a, g, m) {
      {
        var d = at(e);
        if (!d) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = _t();
          R ? h += R : h += Ye();
          var y;
          e === null ? y = "null" : ue(e) ? y = "array" : e !== void 0 && e.$$typeof === t ? (y = "<" + ($(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, h);
        }
        var b = Rt(e, o, s, g, m);
        if (b == null)
          return b;
        if (d) {
          var P = o.children;
          if (P !== void 0)
            if (a)
              if (ue(P)) {
                for (var Y = 0; Y < P.length; Y++)
                  Ue(P[Y], e);
                Object.freeze && Object.freeze(P);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(P, e);
        }
        if (F.call(o, "key")) {
          var A = $(e), _ = Object.keys(o).filter(function(It) {
            return It !== "key";
          }), he = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[A + he]) {
            var At = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, A, At, A), We[A + he] = !0;
          }
        }
        return e === i ? Pt(b) : St(b), b;
      }
    }
    function jt(e, o, s) {
      return Xe(e, o, s, !0);
    }
    function Ot(e, o, s) {
      return Xe(e, o, s, !1);
    }
    var $t = Ot, kt = jt;
    W.Fragment = i, W.jsx = $t, W.jsxs = kt;
  }()), W;
}
process.env.NODE_ENV === "production" ? pe.exports = Lt() : pe.exports = Yt();
var v = pe.exports;
function Nt(...r) {
  return r.length === 0 ? (t) => t : r.length === 1 ? r[0] : r.reduce((t, n) => (...i) => t(n(...i)));
}
const Ft = ({ elem: r, e: t }) => {
  if (!r || typeof r.getBoundingClientRect != "function")
    return !1;
  const { pageY: n, pageX: i } = t, { left: c, right: u, bottom: l, top: f } = r.getBoundingClientRect();
  return i > c && i < u && n > f && n < l;
}, Ut = (r = "isMouseHovering") => (t) => {
  class n extends Qe {
    constructor(u) {
      super(u), this.el = null, this.onMouseMove = (l) => {
        const f = this.el, p = { pageX: l.pageX, pageY: l.pageY };
        this.setState({
          isHoveringOver: Ft({ elem: f, e: p })
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
      const u = {
        [r]: {
          innerRef: (l) => this.el = l,
          isHoveringOver: this.state.isHoveringOver
        }
      };
      return te.createElement(t, {
        ...this.props,
        ...u
      });
    }
  }
  const i = t.displayName || t.name || "Component";
  return n.displayName = `IsMouseHovering(${i})`, n;
}, et = (r) => {
  if (!r.currentTarget || typeof r.currentTarget.getBoundingClientRect != "function")
    return { x: 0, y: 0 };
  const t = r.currentTarget.getBoundingClientRect(), n = r.clientX - t.x, i = r.clientY - t.y;
  return {
    x: n / t.width * 100,
    y: i / t.height * 100
  };
}, He = (r, t, n) => Math.max(r, Math.min(t, n)), Wt = (r) => {
  if (!r.currentTarget || typeof r.currentTarget.getBoundingClientRect != "function")
    return { x: 0, y: 0 };
  const t = r.targetTouches[0], n = r.currentTarget.getBoundingClientRect(), i = t.pageX - n.left, c = t.pageY - (n.top + window.scrollY);
  return {
    x: He(0, 100, i / n.width * 100),
    y: He(0, 100, c / n.height * 100)
  };
}, I = (r) => Xt(r) ? Bt(r) ? (Vt(r) && r.preventDefault(), Wt(r)) : {
  x: null
} : et(r), Xt = (r) => r.targetTouches !== void 0, Bt = (r) => r.targetTouches.length === 1, Vt = (r) => r.type === "touchmove", Gt = (r = "relativeMousePos") => (t) => {
  class n extends Qe {
    constructor(u) {
      super(u), this.container = null, this._innerRef = (l) => {
        this.container = l;
      }, this._onMouseMove = (l) => {
        const f = et(l);
        this.setState(f);
      }, this._onTouchMove = (l) => {
        if (!this.container || l.targetTouches.length !== 1) return;
        const f = l.targetTouches[0], p = this.container.offsetParent;
        if (!p) return;
        const T = f.pageX - p.offsetLeft, x = f.pageY - p.offsetTop, w = this.container.width, S = this.container.height;
        typeof w == "number" && typeof S == "number" && w > 0 && S > 0 ? this.setState({
          x: T / w * 100,
          y: x / S * 100
        }) : this.setState({ x: null, y: null });
      }, this._onMouseLeave = (l) => {
        this.setState({ x: null, y: null });
      }, this._onTouchLeave = (l) => {
        this.setState({ x: null, y: null });
      }, this.state = { x: null, y: null };
    }
    render() {
      const u = {
        innerRef: this._innerRef,
        // Pass HOC's ref setter
        onMouseMove: this._onMouseMove,
        // Pass HOC's event handler
        onMouseLeave: this._onMouseLeave,
        onTouchMove: this._onTouchMove,
        onTouchLeave: this._onTouchLeave,
        x: this.state.x,
        y: this.state.y
      }, l = { [r]: u };
      return /* @__PURE__ */ v.jsx(t, { ...this.props, ...l });
    }
  }
  const i = t.displayName || t.name || "Component";
  return n.displayName = `withRelativeMousePos(${i})`, n;
}, Ht = C.div`
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
function ze(r) {
  const { geometry: t } = r.annotation;
  return t ? /* @__PURE__ */ v.jsx(
    Ht,
    {
      style: {
        top: `${t.y}%`,
        left: `${t.x}%`
      }
    }
  ) : null;
}
const zt = C.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, Jt = C.div`
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
`, qt = ({
  onChange: r,
  onSubmit: t,
  onFocus: n,
  onBlur: i,
  value: c
}) => /* @__PURE__ */ v.jsxs(te.Fragment, { children: [
  /* @__PURE__ */ v.jsx(zt, { children: /* @__PURE__ */ v.jsx(
    "textarea",
    {
      placeholder: "Write description",
      onFocus: n,
      onBlur: i,
      onChange: r,
      value: c
    }
  ) }),
  c && /* @__PURE__ */ v.jsx(Jt, { onClick: t, children: "Submit" })
] }), Kt = Dt`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Zt = C.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Kt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, Qt = ({
  annotation: r,
  onChange: t,
  onSubmit: n,
  className: i = "",
  style: c = {}
}) => {
  var l;
  const { geometry: u } = r;
  return u ? /* @__PURE__ */ v.jsx(
    Zt,
    {
      className: i,
      style: {
        position: "absolute",
        left: `${u.x}%`,
        top: `${u.y + u.height}%`,
        ...c
      },
      children: /* @__PURE__ */ v.jsx(
        qt,
        {
          onChange: (f) => t({
            ...r,
            data: {
              ...r.data,
              text: f.target.value
            }
          }),
          onSubmit: n,
          value: (l = r.data) == null ? void 0 : l.text
        }
      )
    }
  ) : null;
}, q = C.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, er = C.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function tt(r) {
  const { geometry: t } = r.annotation;
  return t ? /* @__PURE__ */ v.jsxs(
    er,
    {
      className: r.className,
      style: r.style,
      children: [
        /* @__PURE__ */ v.jsx(
          q,
          {
            style: {
              height: `${t.y}%`,
              width: "100%"
            }
          }
        ),
        /* @__PURE__ */ v.jsx(
          q,
          {
            style: {
              top: `${t.y}%`,
              height: `${t.height}%`,
              width: `${t.x}%`
            }
          }
        ),
        /* @__PURE__ */ v.jsx(
          q,
          {
            style: {
              top: `${t.y}%`,
              left: `${t.x + t.width}%`,
              height: `${t.height}%`,
              width: `${100 - (t.x + t.width)}%`
            }
          }
        ),
        /* @__PURE__ */ v.jsx(
          q,
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
tt.defaultProps = {
  className: "",
  style: {}
};
const tr = C.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function rt(r) {
  const { geometry: t } = r.annotation;
  return t ? /* @__PURE__ */ v.jsx(
    tr,
    {
      className: r.className,
      style: {
        position: "absolute",
        left: `${t.x}%`,
        top: `${t.y}%`,
        height: `${t.height}%`,
        width: `${t.width}%`,
        boxShadow: r.active ? "0 0 1px 1px yellow inset" : void 0,
        ...r.style
      }
    }
  ) : null;
}
rt.defaultProps = {
  className: "",
  style: {}
};
const rr = C.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function ve(r) {
  const { geometry: t } = r.annotation;
  return t ? /* @__PURE__ */ v.jsx(
    rr,
    {
      className: r.className,
      style: {
        position: "absolute",
        left: `${t.x}%`,
        top: `${t.y}%`,
        height: `${t.height}%`,
        width: `${t.width}%`,
        boxShadow: r.active ? "0 0 1px 1px yellow inset" : void 0,
        ...r.style
      }
    }
  ) : null;
}
ve.defaultProps = {
  className: "",
  style: {}
};
const or = C.div`
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
function ot(r) {
  const { geometry: t } = r.annotation;
  return !t || typeof t.x > "u" || typeof t.y > "u" || typeof t.width > "u" || typeof t.height > "u" ? null : /* @__PURE__ */ v.jsx(
    or,
    {
      style: {
        position: "absolute",
        left: `${t.x}%`,
        top: `${t.y + t.height}%`,
        ...r.style
      },
      className: r.className,
      children: r.annotation.data && r.annotation.data.text
    }
  );
}
ot.defaultProps = {
  style: {},
  className: ""
};
const ge = C.div`
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
`, nt = "RECTANGLE";
function nr({ x: r, y: t }, n) {
  if (!n) return !1;
  const i = Math.min(n.x, n.x + n.width), c = Math.max(n.x, n.x + n.width), u = Math.min(n.y, n.y + n.height), l = Math.max(n.y, n.y + n.height);
  return !(r < i || t < u || r > c || t > l);
}
function sr(r) {
  if (!r || r.width <= 0 || r.height <= 0) return 0;
  const t = Math.abs(r.width), n = Math.abs(r.height);
  return t * n;
}
const ir = {
  onTouchStart(r, t) {
    return Je(r, t);
  },
  onTouchEnd(r, t) {
    return qe(r);
  },
  onTouchMove(r, t) {
    return Ke(r, t);
  },
  onMouseDown(r, t) {
    return Je(r, t);
  },
  onMouseUp(r, t) {
    return qe(r);
  },
  onMouseMove(r, t) {
    return Ke(r, t);
  }
};
function Je(r, t) {
  if (r.selection)
    return {};
  {
    const { x: n, y: i } = I(t);
    return {
      ...r,
      selection: {
        ...r.selection,
        mode: "SELECTING",
        anchorX: n,
        anchorY: i
      }
    };
  }
}
function qe(r, t) {
  if (r.selection) {
    const { selection: n, geometry: i } = r;
    if (!i)
      return {};
    switch (r.selection.mode) {
      case "SELECTING":
        return {
          ...r,
          selection: {
            ...r.selection,
            showEditor: !0,
            mode: "EDITING"
          }
        };
    }
  }
  return r;
}
function Ke(r, t) {
  if (r.selection && r.selection.mode === "SELECTING") {
    const { anchorX: n, anchorY: i } = r.selection, { x: c, y: u } = I(t), l = c - n, f = u - i;
    return {
      ...r,
      geometry: {
        ...r.geometry,
        type: nt,
        x: l > 0 ? n : c,
        y: f > 0 ? i : u,
        width: Math.abs(l),
        height: Math.abs(f)
      }
    };
  }
  return r;
}
const K = {
  TYPE: nt,
  intersects: nr,
  area: sr,
  methods: ir
}, st = "POINT";
function ar({ x: r, y: t }, n, i) {
  if (!n) return !1;
  const c = Math.abs(r - n.x), u = Math.abs(t - n.y);
  return c === 0 && u === 0;
}
function ur(r, t) {
  return 0;
}
const cr = {
  onClick(r, t) {
    return r.geometry ? {} : {
      ...r,
      selection: {
        ...r.selection,
        showEditor: !0,
        mode: "EDITING"
      },
      geometry: {
        ...r.geometry,
        ...I(t),
        width: 0,
        height: 0,
        type: st
      }
    };
  }
}, Z = {
  TYPE: st,
  intersects: ar,
  area: ur,
  methods: cr
}, Q = (r) => Math.pow(r, 2), ye = "OVAL";
function lr({ x: r, y: t }, n) {
  if (!n || !n.width || !n.height) return !1;
  const i = Math.abs(n.width), c = Math.abs(n.height), u = {
    x: n.x + i / 2,
    y: n.y + c / 2
  }, l = i / 2, f = c / 2;
  if (l === 0 || f === 0) return !1;
  const p = r - u.x, T = t - u.y;
  return Q(p) / Q(l) + Q(T) / Q(f) <= 1;
}
function fr(r) {
  return !r || !r.width || !r.height || r.width <= 0 || r.height <= 0 ? 0 : Math.PI * Math.abs(r.width) * Math.abs(r.height) / 4;
}
const hr = {
  onTouchStart(r, t) {
    return dr(r, t);
  },
  onTouchEnd(r, t) {
    return pr(r);
  },
  onTouchMove(r, t) {
    return vr(r, t);
  },
  onMouseDown(r, t) {
    if (!r.geometry) {
      const { x: n, y: i } = I(t);
      return {
        ...r,
        selection: {
          ...r.selection,
          mode: "SELECTING",
          anchorX: n,
          anchorY: i
        }
      };
    }
    return r;
  },
  onMouseUp(r, t) {
    if (r.selection && r.selection.mode === "SELECTING")
      return {
        ...r,
        selection: {
          ...r.selection,
          showEditor: !0,
          mode: "EDITING"
        }
      };
  },
  onMouseMove(r, t) {
    if (r.selection && r.selection.mode === "SELECTING") {
      const { anchorX: n, anchorY: i } = r.selection, { x: c, y: u } = I(t);
      return {
        ...r,
        geometry: {
          ...r.geometry,
          type: ye,
          x: Math.min(n, c),
          y: Math.min(i, u),
          width: Math.abs(c - n),
          height: Math.abs(u - i)
        }
      };
    }
    return r;
  }
};
function dr(r, t) {
  if (r.selection)
    return {};
  {
    const { x: n, y: i } = I(t);
    return {
      ...r,
      selection: {
        ...r.selection,
        mode: "SELECTING",
        anchorX: n,
        anchorY: i
      }
    };
  }
}
function pr(r, t) {
  if (r.selection) {
    const { selection: n, geometry: i } = r;
    if (!i)
      return {};
    switch (r.selection.mode) {
      case "SELECTING":
        return {
          ...r,
          selection: {
            ...r.selection,
            showEditor: !0,
            mode: "EDITING"
          }
        };
    }
  }
  return r;
}
function vr(r, t) {
  if (r.selection && r.selection.mode === "SELECTING") {
    const { anchorX: n, anchorY: i } = r.selection, { x: c, y: u } = I(t), l = c - n, f = u - i;
    return {
      ...r,
      geometry: {
        ...r.geometry,
        type: ye,
        x: l > 0 ? n : c,
        y: f > 0 ? i : u,
        width: Math.abs(l),
        height: Math.abs(f)
      }
    };
  }
  return r;
}
const de = {
  TYPE: ye,
  intersects: lr,
  area: fr,
  methods: hr
}, Ze = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: K.TYPE,
  selectors: [
    K,
    Z,
    de
  ],
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  activeAnnotationComparator: (r, t) => r === t,
  renderSelector: ({ annotation: r }) => {
    switch (r.geometry.type) {
      case K.TYPE:
        return /* @__PURE__ */ v.jsx(
          tt,
          {
            annotation: r
          }
        );
      case Z.TYPE:
        return /* @__PURE__ */ v.jsx(
          ze,
          {
            annotation: r
          }
        );
      case de.TYPE:
        return /* @__PURE__ */ v.jsx(
          ve,
          {
            annotation: r
          }
        );
      default:
        return null;
    }
  },
  renderEditor: ({ annotation: r, onChange: t, onSubmit: n }) => /* @__PURE__ */ v.jsx(
    Qt,
    {
      annotation: r,
      onChange: t,
      onSubmit: n
    }
  ),
  renderHighlight: ({ key: r, annotation: t, active: n }) => {
    switch (t.geometry.type) {
      case K.TYPE:
        return /* @__PURE__ */ v.jsx(
          rt,
          {
            annotation: t,
            active: n
          },
          r
        );
      case Z.TYPE:
        return /* @__PURE__ */ v.jsx(
          ze,
          {
            annotation: t,
            active: n
          },
          r
        );
      case de.TYPE:
        return /* @__PURE__ */ v.jsx(
          ve,
          {
            annotation: t,
            active: n
          },
          r
        );
      default:
        return null;
    }
  },
  renderContent: ({ key: r, annotation: t }) => /* @__PURE__ */ v.jsx(
    ot,
    {
      annotation: t
    },
    r
  ),
  renderOverlay: ({ type: r, annotation: t } = {}) => {
    switch (r) {
      case Z.TYPE:
        return /* @__PURE__ */ v.jsx(ge, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ v.jsx(ge, { children: "Click and Drag to Annotate" });
    }
  }
}, gr = C.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${ge} {
    opacity: 1;
  }
  touch-action: ${(r) => r.allowTouch ? "pinch-zoom" : "auto"};
`, mr = C.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`, yr = C.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`, xr = C.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`, ee = class ee extends Be.Component {
  constructor() {
    super(...arguments), this.container = null, this.targetRef = Be.createRef(), this.addTargetTouchEventListeners = () => {
      const t = this.targetRef.current;
      t && (t.ontouchstart = this.onTouchStart, t.ontouchend = this.onTouchEnd, t.ontouchmove = this.onTargetTouchMove, t.ontouchcancel = this.onTargetTouchLeave);
    }, this.removeTargetTouchEventListeners = () => {
      const t = this.targetRef.current;
      t && (t.ontouchstart = null, t.ontouchend = null, t.ontouchmove = null, t.ontouchcancel = null);
    }, this.setImageRef = (t) => {
      this.container = t, this.props.relativeMousePos && typeof this.props.relativeMousePos.innerRef == "function" && this.props.relativeMousePos.innerRef(t);
    }, this.setContainerRef = (t) => {
      this.props.isMouseHovering && typeof this.props.isMouseHovering.innerRef == "function" && this.props.isMouseHovering.innerRef(t), this.props.containerRef && (typeof this.props.containerRef == "function" ? this.props.containerRef(t) : this.props.containerRef.current = t);
    }, this.getSelectorByType = (t) => {
      if (t)
        return this.props.selectors.find((n) => n.TYPE === t);
    }, this.getTopAnnotationAt = (t, n) => {
      const { annotations: i } = this.props, { container: c, getSelectorByType: u } = this;
      return !c || t === null || n === null ? void 0 : i.map((f) => {
        const { geometry: p } = f;
        if (!p) return !1;
        const T = u(p.type);
        return T && T.intersects({ x: t, y: n }, p, c) ? f : !1;
      }).filter((f) => !!f).sort((f, p) => {
        const T = u(f.geometry.type), x = u(p.geometry.type);
        return !T || !x || !this.container ? 0 : T.area(f.geometry, this.container) - x.area(p.geometry, this.container);
      })[0];
    }, this.onTargetMouseMove = (t) => {
      this.props.relativeMousePos && typeof this.props.relativeMousePos.onMouseMove == "function" && this.props.relativeMousePos.onMouseMove(t);
      const n = t;
      this.props.onImageMouseMove && this.props.onImageMouseMove(n), this.callSelectorMethod("onMouseMove", n);
    }, this.onTargetTouchMove = (t) => {
      this.props.relativeMousePos && typeof this.props.relativeMousePos.onTouchMove == "function" && this.props.relativeMousePos.onTouchMove(t), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && this.props.allowTouch && t.preventDefault(), this.callSelectorMethod("onTouchMove", t);
    }, this.onTargetMouseLeave = (t) => {
      this.props.relativeMousePos && typeof this.props.relativeMousePos.onMouseLeave == "function" && this.props.relativeMousePos.onMouseLeave(t);
    }, this.onTargetTouchLeave = (t) => {
      this.props.relativeMousePos && typeof this.props.relativeMousePos.onTouchLeave == "function" && this.props.relativeMousePos.onTouchLeave(t);
    }, this.onMouseUp = (t) => {
      this.props.onImageMouseUp && this.props.onImageMouseUp(t), this.callSelectorMethod("onMouseUp", t);
    }, this.onMouseDown = (t) => {
      this.props.onImageMouseDown && this.props.onImageMouseDown(t), this.callSelectorMethod("onMouseDown", t);
    }, this.onClick = (t) => {
      this.props.onImageClick && this.props.onImageClick(t), this.callSelectorMethod("onClick", t);
    }, this.onTouchStart = (t) => {
      navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && this.props.allowTouch && t.preventDefault(), this.callSelectorMethod("onTouchStart", t);
    }, this.onTouchEnd = (t) => this.callSelectorMethod("onTouchEnd", t), this.onSubmit = () => {
      this.props.onSubmit && this.props.value && this.props.onSubmit(this.props.value);
    }, this.callSelectorMethod = (t, n) => {
      if (this.props.disableAnnotation)
        return;
      const i = this.getSelectorByType(this.props.type);
      if (i && i.methods[t]) {
        const c = i.methods[t], u = c(this.props.value || {}, n);
        typeof u > "u" ? process.env.NODE_ENV !== "production" && console.error(
          `Selector method ${String(t)} of type ${this.props.type} returned undefined.
             Make sure to explicitly return the previous state or new state.`
        ) : this.props.onChange && this.props.onChange(u);
      }
    }, this.shouldAnnotationBeActive = (t, n) => this.props.activeAnnotations && !!this.props.activeAnnotations.find(
      (c) => this.props.activeAnnotationComparator ? this.props.activeAnnotationComparator(t, c) : t.data.id === c
    ) || n === t;
  }
  componentDidMount() {
    this.props.allowTouch && this.addTargetTouchEventListeners(), this.props.containerRef && this.props.containerRef;
  }
  componentDidUpdate(t) {
    this.props.allowTouch !== t.allowTouch && (this.props.allowTouch ? this.addTargetTouchEventListeners() : this.removeTargetTouchEventListeners());
  }
  componentWillUnmount() {
    this.props.allowTouch && this.targetRef.current && this.removeTargetTouchEventListeners();
  }
  render() {
    const { props: t } = this, { isHoveringOver: n } = t.isMouseHovering, { x: i, y: c } = t.relativeMousePos, {
      renderHighlight: u,
      renderContent: l,
      renderSelector: f,
      renderEditor: p,
      renderOverlay: T,
      allowTouch: x,
      src: w,
      alt: S,
      style: D,
      className: X,
      annotations: B,
      value: j,
      disableSelector: O,
      disableEditor: E,
      disableOverlay: re,
      type: oe,
      children: ne
    } = t, V = this.getTopAnnotationAt(
      i,
      // Use destructured mouseX from HOC
      c
      // Use destructured mouseY from HOC
    );
    return /* @__PURE__ */ v.jsxs(
      gr,
      {
        style: D,
        ref: this.setContainerRef,
        onMouseLeave: this.onTargetMouseLeave,
        onTouchCancel: this.onTargetTouchLeave,
        onMouseMove: this.onTargetMouseMove,
        allowTouch: x,
        className: X,
        children: [
          /* @__PURE__ */ v.jsx(
            mr,
            {
              alt: S || "Annotation Image",
              src: w,
              draggable: !1,
              ref: this.setImageRef
            }
          ),
          /* @__PURE__ */ v.jsxs(yr, { children: [
            B.map((M) => !M.data || typeof M.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render highlight:", M), null) : u({
              key: M.data.id,
              annotation: M,
              active: this.shouldAnnotationBeActive(M, V)
            })),
            !O && j && j.geometry && f && f({
              annotation: j
            })
          ] }),
          /* @__PURE__ */ v.jsx(
            xr,
            {
              "data-testid": "annotation-target",
              ref: this.targetRef,
              onClick: this.onClick,
              onMouseUp: this.onMouseUp,
              onMouseDown: this.onMouseDown
            }
          ),
          !re && T && T({
            type: oe,
            annotation: j
          }),
          B.map((M) => !M.data || typeof M.data.id > "u" ? (console.warn("Annotation is missing data.id, cannot render content:", M), null) : this.shouldAnnotationBeActive(M, V) && l && l({
            key: M.data.id,
            annotation: M
          })),
          !E && j && j.selection && j.selection.showEditor && p && t.onChange && t.onSubmit && p({
            annotation: j,
            onChange: t.onChange,
            onSubmit: this.onSubmit
          }),
          /* @__PURE__ */ v.jsx("div", { children: ne })
        ]
      }
    );
  }
};
ee.displayName = "AnnotationClass", ee.defaultProps = {
  ...Ze,
  // Ensure all render functions and complex objects from defaultProps are correctly referenced
  // For example, if defaultProps.js exports functions, they are used directly.
  // If it exports instantiated selectors, ensure types match.
  // Type for selectors in defaultProps might need to be `any[]` or cast if they are plain JS objects.
  selectors: Ze.selectors
  // Cast if imported JS selectors
};
let me = ee;
const br = Nt(
  Ut("isMouseHovering"),
  Gt("relativeMousePos")
)(me);
process.env.NODE_ENV !== "production" && (br.displayName = "ComposedAnnotation");
export {
  br as Annotation,
  K as RectangleSelector,
  br as default
};
