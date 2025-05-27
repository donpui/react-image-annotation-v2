var tt = Object.defineProperty;
var rt = (e, n, r) => n in e ? tt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var P = (e, n, r) => rt(e, typeof n != "symbol" ? n + "" : n, r);
import Re, { PureComponent as ze, Component as nt } from "react";
import q, { keyframes as ot } from "styled-components";
function st(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var me = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function it() {
  if (Pe) return ne;
  Pe = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(i, a, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      s = {};
      for (var d in a)
        d !== "key" && (s[d] = a[d]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: i,
      key: l,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return ne.Fragment = n, ne.jsx = r, ne.jsxs = r, ne;
}
var oe = {};
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
function at() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === te ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case C:
          return "Fragment";
        case L:
          return "Profiler";
        case I:
          return "StrictMode";
        case u:
          return "Suspense";
        case z:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case N:
            return "Portal";
          case k:
            return (t.displayName || "Context") + ".Provider";
          case G:
            return (t._context.displayName || "Context") + ".Consumer";
          case $:
            var o = t.render;
            return t = t.displayName, t || (t = o.displayName || o.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case K:
            return o = t.displayName || null, o !== null ? o : e(t.type) || "Memo";
          case V:
            o = t._payload, t = t._init;
            try {
              return e(t(o));
            } catch {
            }
        }
      return null;
    }
    function n(t) {
      return "" + t;
    }
    function r(t) {
      try {
        n(t);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var f = o.error, h = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), n(t);
      }
    }
    function i(t) {
      if (t === C) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === V)
        return "<...>";
      try {
        var o = e(t);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var t = X.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(t) {
      if (J.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function d(t, o) {
      function f() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: f,
        configurable: !0
      });
    }
    function b() {
      var t = e(this.type);
      return D[t] || (D[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function E(t, o, f, h, p, y, g, T) {
      return f = y.ref, t = {
        $$typeof: j,
        type: t,
        key: o,
        props: y,
        _owner: p
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: b
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function x(t, o, f, h, p, y, g, T) {
      var v = o.children;
      if (v !== void 0)
        if (h)
          if (re(v)) {
            for (h = 0; h < v.length; h++)
              m(v[h]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(v);
      if (J.call(o, "key")) {
        v = e(t);
        var R = Object.keys(o).filter(function(Y) {
          return Y !== "key";
        });
        h = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", Q[v + h] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          v,
          R,
          v
        ), Q[v + h] = !0);
      }
      if (v = null, f !== void 0 && (r(f), v = "" + f), l(o) && (r(o.key), v = "" + o.key), "key" in o) {
        f = {};
        for (var w in o)
          w !== "key" && (f[w] = o[w]);
      } else f = o;
      return v && d(
        f,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), E(
        t,
        v,
        y,
        p,
        a(),
        f,
        g,
        T
      );
    }
    function m(t) {
      typeof t == "object" && t !== null && t.$$typeof === j && t._store && (t._store.validated = 1);
    }
    var A = Re, j = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), k = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), X = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, re = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var Z, D = {}, W = A["react-stack-bottom-frame"].bind(
      A,
      s
    )(), B = U(i(s)), Q = {};
    oe.Fragment = C, oe.jsx = function(t, o, f, h, p) {
      var y = 1e4 > X.recentlyCreatedOwnerStacks++;
      return x(
        t,
        o,
        f,
        !1,
        h,
        p,
        y ? Error("react-stack-top-frame") : W,
        y ? U(i(t)) : B
      );
    }, oe.jsxs = function(t, o, f, h, p) {
      var y = 1e4 > X.recentlyCreatedOwnerStacks++;
      return x(
        t,
        o,
        f,
        !0,
        h,
        p,
        y ? Error("react-stack-top-frame") : W,
        y ? U(i(t)) : B
      );
    };
  }()), oe;
}
process.env.NODE_ENV === "production" ? me.exports = it() : me.exports = at();
var M = me.exports, Te = { exports: {} }, ie = { exports: {} }, _ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function ct() {
  if (Oe) return _;
  Oe = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, N = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
  function k(u) {
    if (typeof u == "object" && u !== null) {
      var z = u.$$typeof;
      switch (z) {
        case n:
          switch (u = u.type, u) {
            case b:
            case E:
            case i:
            case s:
            case a:
            case m:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case d:
                case x:
                case N:
                case j:
                case l:
                  return u;
                default:
                  return z;
              }
          }
        case r:
          return z;
      }
    }
  }
  function $(u) {
    return k(u) === E;
  }
  return _.AsyncMode = b, _.ConcurrentMode = E, _.ContextConsumer = d, _.ContextProvider = l, _.Element = n, _.ForwardRef = x, _.Fragment = i, _.Lazy = N, _.Memo = j, _.Portal = r, _.Profiler = s, _.StrictMode = a, _.Suspense = m, _.isAsyncMode = function(u) {
    return $(u) || k(u) === b;
  }, _.isConcurrentMode = $, _.isContextConsumer = function(u) {
    return k(u) === d;
  }, _.isContextProvider = function(u) {
    return k(u) === l;
  }, _.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === n;
  }, _.isForwardRef = function(u) {
    return k(u) === x;
  }, _.isFragment = function(u) {
    return k(u) === i;
  }, _.isLazy = function(u) {
    return k(u) === N;
  }, _.isMemo = function(u) {
    return k(u) === j;
  }, _.isPortal = function(u) {
    return k(u) === r;
  }, _.isProfiler = function(u) {
    return k(u) === s;
  }, _.isStrictMode = function(u) {
    return k(u) === a;
  }, _.isSuspense = function(u) {
    return k(u) === m;
  }, _.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === i || u === E || u === s || u === a || u === m || u === A || typeof u == "object" && u !== null && (u.$$typeof === N || u.$$typeof === j || u.$$typeof === l || u.$$typeof === d || u.$$typeof === x || u.$$typeof === I || u.$$typeof === L || u.$$typeof === G || u.$$typeof === C);
  }, _.typeOf = k, _;
}
var O = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function ut() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, N = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
    function k(c) {
      return typeof c == "string" || typeof c == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      c === i || c === E || c === s || c === a || c === m || c === A || typeof c == "object" && c !== null && (c.$$typeof === N || c.$$typeof === j || c.$$typeof === l || c.$$typeof === d || c.$$typeof === x || c.$$typeof === I || c.$$typeof === L || c.$$typeof === G || c.$$typeof === C);
    }
    function $(c) {
      if (typeof c == "object" && c !== null) {
        var F = c.$$typeof;
        switch (F) {
          case n:
            var se = c.type;
            switch (se) {
              case b:
              case E:
              case i:
              case s:
              case a:
              case m:
                return se;
              default:
                var Me = se && se.$$typeof;
                switch (Me) {
                  case d:
                  case x:
                  case N:
                  case j:
                  case l:
                    return Me;
                  default:
                    return F;
                }
            }
          case r:
            return F;
        }
      }
    }
    var u = b, z = E, K = d, V = l, ee = n, te = x, X = i, J = N, re = j, U = r, Z = s, D = a, W = m, B = !1;
    function Q(c) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(c) || $(c) === b;
    }
    function t(c) {
      return $(c) === E;
    }
    function o(c) {
      return $(c) === d;
    }
    function f(c) {
      return $(c) === l;
    }
    function h(c) {
      return typeof c == "object" && c !== null && c.$$typeof === n;
    }
    function p(c) {
      return $(c) === x;
    }
    function y(c) {
      return $(c) === i;
    }
    function g(c) {
      return $(c) === N;
    }
    function T(c) {
      return $(c) === j;
    }
    function v(c) {
      return $(c) === r;
    }
    function R(c) {
      return $(c) === s;
    }
    function w(c) {
      return $(c) === a;
    }
    function Y(c) {
      return $(c) === m;
    }
    O.AsyncMode = u, O.ConcurrentMode = z, O.ContextConsumer = K, O.ContextProvider = V, O.Element = ee, O.ForwardRef = te, O.Fragment = X, O.Lazy = J, O.Memo = re, O.Portal = U, O.Profiler = Z, O.StrictMode = D, O.Suspense = W, O.isAsyncMode = Q, O.isConcurrentMode = t, O.isContextConsumer = o, O.isContextProvider = f, O.isElement = h, O.isForwardRef = p, O.isFragment = y, O.isLazy = g, O.isMemo = T, O.isPortal = v, O.isProfiler = R, O.isStrictMode = w, O.isSuspense = Y, O.isValidElementType = k, O.typeOf = $;
  }()), O;
}
var Ae;
function Xe() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? ie.exports = ct() : ie.exports = ut()), ie.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var de, je;
function lt() {
  if (je) return de;
  je = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function i(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var l = {}, d = 0; d < 10; d++)
        l["_" + String.fromCharCode(d)] = d;
      var b = Object.getOwnPropertyNames(l).map(function(x) {
        return l[x];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var E = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(x) {
        E[x] = x;
      }), Object.keys(Object.assign({}, E)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return de = a() ? Object.assign : function(s, l) {
    for (var d, b = i(s), E, x = 1; x < arguments.length; x++) {
      d = Object(arguments[x]);
      for (var m in d)
        n.call(d, m) && (b[m] = d[m]);
      if (e) {
        E = e(d);
        for (var A = 0; A < E.length; A++)
          r.call(d, E[A]) && (b[E[A]] = d[E[A]]);
      }
    }
    return b;
  }, de;
}
var he, $e;
function we() {
  if ($e) return he;
  $e = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return he = e, he;
}
var pe, ke;
function Ge() {
  return ke || (ke = 1, pe = Function.call.bind(Object.prototype.hasOwnProperty)), pe;
}
var ve, Ie;
function ft() {
  if (Ie) return ve;
  Ie = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = we(), r = {}, i = Ge();
    e = function(s) {
      var l = "Warning: " + s;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function a(s, l, d, b, E) {
    if (process.env.NODE_ENV !== "production") {
      for (var x in s)
        if (i(s, x)) {
          var m;
          try {
            if (typeof s[x] != "function") {
              var A = Error(
                (b || "React class") + ": " + d + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            m = s[x](l, x, b, d, null, n);
          } catch (N) {
            m = N;
          }
          if (m && !(m instanceof Error) && e(
            (b || "React class") + ": type specification of " + d + " `" + x + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var j = E ? E() : "";
            e(
              "Failed " + d + " type: " + m.message + (j ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ve = a, ve;
}
var ye, Ye;
function dt() {
  if (Ye) return ye;
  Ye = 1;
  var e = Xe(), n = lt(), r = we(), i = Ge(), a = ft(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(d) {
    var b = "Warning: " + d;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return ye = function(d, b) {
    var E = typeof Symbol == "function" && Symbol.iterator, x = "@@iterator";
    function m(t) {
      var o = t && (E && t[E] || t[x]);
      if (typeof o == "function")
        return o;
    }
    var A = "<<anonymous>>", j = {
      array: L("array"),
      bigint: L("bigint"),
      bool: L("boolean"),
      func: L("function"),
      number: L("number"),
      object: L("object"),
      string: L("string"),
      symbol: L("symbol"),
      any: G(),
      arrayOf: k,
      element: $(),
      elementType: u(),
      instanceOf: z,
      node: te(),
      objectOf: V,
      oneOf: K,
      oneOfType: ee,
      shape: J,
      exact: re
    };
    function N(t, o) {
      return t === o ? t !== 0 || 1 / t === 1 / o : t !== t && o !== o;
    }
    function C(t, o) {
      this.message = t, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function I(t) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, f = 0;
      function h(y, g, T, v, R, w, Y) {
        if (v = v || A, w = w || T, Y !== r) {
          if (b) {
            var c = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw c.name = "Invariant Violation", c;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var F = v + ":" + T;
            !o[F] && // Avoid spamming the console because they are often not actionable except for lib authors
            f < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + w + "` prop on `" + v + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[F] = !0, f++);
          }
        }
        return g[T] == null ? y ? g[T] === null ? new C("The " + R + " `" + w + "` is marked as required " + ("in `" + v + "`, but its value is `null`.")) : new C("The " + R + " `" + w + "` is marked as required in " + ("`" + v + "`, but its value is `undefined`.")) : null : t(g, T, v, R, w);
      }
      var p = h.bind(null, !1);
      return p.isRequired = h.bind(null, !0), p;
    }
    function L(t) {
      function o(f, h, p, y, g, T) {
        var v = f[h], R = D(v);
        if (R !== t) {
          var w = W(v);
          return new C(
            "Invalid " + y + " `" + g + "` of type " + ("`" + w + "` supplied to `" + p + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return I(o);
    }
    function G() {
      return I(l);
    }
    function k(t) {
      function o(f, h, p, y, g) {
        if (typeof t != "function")
          return new C("Property `" + g + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var T = f[h];
        if (!Array.isArray(T)) {
          var v = D(T);
          return new C("Invalid " + y + " `" + g + "` of type " + ("`" + v + "` supplied to `" + p + "`, expected an array."));
        }
        for (var R = 0; R < T.length; R++) {
          var w = t(T, R, p, y, g + "[" + R + "]", r);
          if (w instanceof Error)
            return w;
        }
        return null;
      }
      return I(o);
    }
    function $() {
      function t(o, f, h, p, y) {
        var g = o[f];
        if (!d(g)) {
          var T = D(g);
          return new C("Invalid " + p + " `" + y + "` of type " + ("`" + T + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(t);
    }
    function u() {
      function t(o, f, h, p, y) {
        var g = o[f];
        if (!e.isValidElementType(g)) {
          var T = D(g);
          return new C("Invalid " + p + " `" + y + "` of type " + ("`" + T + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(t);
    }
    function z(t) {
      function o(f, h, p, y, g) {
        if (!(f[h] instanceof t)) {
          var T = t.name || A, v = Q(f[h]);
          return new C("Invalid " + y + " `" + g + "` of type " + ("`" + v + "` supplied to `" + p + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return I(o);
    }
    function K(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), l;
      function o(f, h, p, y, g) {
        for (var T = f[h], v = 0; v < t.length; v++)
          if (N(T, t[v]))
            return null;
        var R = JSON.stringify(t, function(Y, c) {
          var F = W(c);
          return F === "symbol" ? String(c) : c;
        });
        return new C("Invalid " + y + " `" + g + "` of value `" + String(T) + "` " + ("supplied to `" + p + "`, expected one of " + R + "."));
      }
      return I(o);
    }
    function V(t) {
      function o(f, h, p, y, g) {
        if (typeof t != "function")
          return new C("Property `" + g + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var T = f[h], v = D(T);
        if (v !== "object")
          return new C("Invalid " + y + " `" + g + "` of type " + ("`" + v + "` supplied to `" + p + "`, expected an object."));
        for (var R in T)
          if (i(T, R)) {
            var w = t(T, R, p, y, g + "." + R, r);
            if (w instanceof Error)
              return w;
          }
        return null;
      }
      return I(o);
    }
    function ee(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var o = 0; o < t.length; o++) {
        var f = t[o];
        if (typeof f != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(f) + " at index " + o + "."
          ), l;
      }
      function h(p, y, g, T, v) {
        for (var R = [], w = 0; w < t.length; w++) {
          var Y = t[w], c = Y(p, y, g, T, v, r);
          if (c == null)
            return null;
          c.data && i(c.data, "expectedType") && R.push(c.data.expectedType);
        }
        var F = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new C("Invalid " + T + " `" + v + "` supplied to " + ("`" + g + "`" + F + "."));
      }
      return I(h);
    }
    function te() {
      function t(o, f, h, p, y) {
        return U(o[f]) ? null : new C("Invalid " + p + " `" + y + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return I(t);
    }
    function X(t, o, f, h, p) {
      return new C(
        (t || "React class") + ": " + o + " type `" + f + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function J(t) {
      function o(f, h, p, y, g) {
        var T = f[h], v = D(T);
        if (v !== "object")
          return new C("Invalid " + y + " `" + g + "` of type `" + v + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var R in t) {
          var w = t[R];
          if (typeof w != "function")
            return X(p, y, g, R, W(w));
          var Y = w(T, R, p, y, g + "." + R, r);
          if (Y)
            return Y;
        }
        return null;
      }
      return I(o);
    }
    function re(t) {
      function o(f, h, p, y, g) {
        var T = f[h], v = D(T);
        if (v !== "object")
          return new C("Invalid " + y + " `" + g + "` of type `" + v + "` " + ("supplied to `" + p + "`, expected `object`."));
        var R = n({}, f[h], t);
        for (var w in R) {
          var Y = t[w];
          if (i(t, w) && typeof Y != "function")
            return X(p, y, g, w, W(Y));
          if (!Y)
            return new C(
              "Invalid " + y + " `" + g + "` key `" + w + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(f[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var c = Y(T, w, p, y, g + "." + w, r);
          if (c)
            return c;
        }
        return null;
      }
      return I(o);
    }
    function U(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(U);
          if (t === null || d(t))
            return !0;
          var o = m(t);
          if (o) {
            var f = o.call(t), h;
            if (o !== t.entries) {
              for (; !(h = f.next()).done; )
                if (!U(h.value))
                  return !1;
            } else
              for (; !(h = f.next()).done; ) {
                var p = h.value;
                if (p && !U(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Z(t, o) {
      return t === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function D(t) {
      var o = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : Z(o, t) ? "symbol" : o;
    }
    function W(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var o = D(t);
      if (o === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function B(t) {
      var o = W(t);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function Q(t) {
      return !t.constructor || !t.constructor.name ? A : t.constructor.name;
    }
    return j.checkPropTypes = a, j.resetWarningCache = a.resetWarningCache, j.PropTypes = j, j;
  }, ye;
}
var be, Ne;
function ht() {
  if (Ne) return be;
  Ne = 1;
  var e = we();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, be = function() {
    function i(l, d, b, E, x, m) {
      if (m !== e) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    i.isRequired = i;
    function a() {
      return i;
    }
    var s = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: a,
      element: i,
      elementType: i,
      instanceOf: a,
      node: i,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return s.PropTypes = s, s;
  }, be;
}
if (process.env.NODE_ENV !== "production") {
  var pt = Xe(), vt = !0;
  Te.exports = dt()(pt.isElement, vt);
} else
  Te.exports = ht()();
var yt = Te.exports;
const S = /* @__PURE__ */ st(yt);
function bt(...e) {
  return e.length === 0 ? (n) => n : e.length === 1 ? e[0] : e.reduce((n, r) => (...i) => n(r(...i)));
}
const gt = ({ elem: e, e: n }) => {
  const { pageY: r, pageX: i } = n, { left: a, right: s, bottom: l, top: d } = e.getBoundingClientRect();
  return i > a && i < s && r > d && r < l;
}, mt = (e = "isMouseHovering") => (n) => {
  class r extends ze {
    constructor() {
      super();
      P(this, "onMouseMove", (s) => {
        const l = this.el;
        this.setState({
          isHoveringOver: gt({ elem: l, e: s })
        });
      });
      this.state = {
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
        [e]: {
          innerRef: (l) => this.el = l,
          isHoveringOver: this.state.isHoveringOver
        }
      };
      return /* @__PURE__ */ M.jsx(
        n,
        {
          ...this.props,
          ...s
        }
      );
    }
  }
  return r.displayName = `IsMouseHovering(${n.displayName})`, r;
}, Be = (e) => {
  const n = e.currentTarget.getBoundingClientRect(), r = e.clientX - n.x, i = e.clientY - n.y;
  return {
    x: r / n.width * 100,
    y: i / n.height * 100
  };
}, Le = (e, n, r) => Math.max(e, Math.min(n, r)), Tt = (e) => {
  const n = e.targetTouches[0], r = e.currentTarget.getBoundingClientRect(), i = n.pageX - r.left, a = n.pageY - (r.top + window.scrollY);
  return {
    x: Le(0, 100, i / r.width * 100),
    y: Le(0, 100, a / r.height * 100)
  };
}, H = (e) => xt(e) ? Et(e) ? (Rt(e) && e.preventDefault(), Tt(e)) : {
  x: null
} : Be(e), xt = (e) => e.targetTouches !== void 0, Et = (e) => e.targetTouches.length === 1, Rt = (e) => e.type === "touchmove", wt = (e = "relativeMousePos") => (n) => {
  class r extends ze {
    constructor() {
      super(...arguments);
      P(this, "state", { x: null, y: null });
      P(this, "innerRef", (s) => {
        this.container = s;
      });
      P(this, "onMouseMove", (s) => {
        const l = Be(s, this.container);
        this.setState(l);
      });
      P(this, "onTouchMove", (s) => {
        if (s.targetTouches.length === 1) {
          const l = s.targetTouches[0], d = l.pageX - this.container.offsetParent.offsetLeft, b = l.pageY - this.container.offsetParent.offsetTop;
          this.setState({
            x: d / this.container.width * 100,
            y: b / this.container.height * 100
          });
        }
      });
      P(this, "onMouseLeave", (s) => {
        this.setState({ x: null, y: null });
      });
      P(this, "onTouchLeave", (s) => {
        this.setState({ x: null, y: null });
      });
    }
    render() {
      const s = {
        [e]: {
          innerRef: this.innerRef,
          onMouseMove: this.onMouseMove,
          onMouseLeave: this.onMouseLeave,
          onTouchMove: this.onTouchMove,
          onTouchLeave: this.onTouchLeave,
          x: this.state.x,
          y: this.state.y
        }
      };
      return /* @__PURE__ */ M.jsx(
        n,
        {
          ...this.props,
          ...s
        }
      );
    }
  }
  return r.displayName = `withRelativeMousePos(${n.displayName})`, r;
}, St = q.div`
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
function De(e) {
  const { geometry: n } = e.annotation;
  return n ? /* @__PURE__ */ M.jsx(
    St,
    {
      style: {
        top: `${n.y}%`,
        left: `${n.x}%`
      }
    }
  ) : null;
}
const Mt = q.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, Pt = q.div`
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
`;
function _t(e) {
  return /* @__PURE__ */ M.jsxs(Re.Fragment, { children: [
    /* @__PURE__ */ M.jsx(Mt, { children: /* @__PURE__ */ M.jsx(
      "textarea",
      {
        placeholder: "Write description",
        onFocus: e.onFocus,
        onBlur: e.onBlur,
        onChange: e.onChange,
        value: e.value
      }
    ) }),
    e.value && /* @__PURE__ */ M.jsx(
      Pt,
      {
        onClick: e.onSubmit,
        children: "Submit"
      }
    )
  ] });
}
const Ot = ot`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Ct = q.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Ot} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`;
function He(e) {
  const { geometry: n } = e.annotation;
  return n ? /* @__PURE__ */ M.jsx(
    Ct,
    {
      className: e.className,
      style: {
        position: "absolute",
        left: `${n.x}%`,
        top: `${n.y + n.height}%`,
        ...e.style
      },
      children: /* @__PURE__ */ M.jsx(
        _t,
        {
          onChange: (r) => e.onChange({
            ...e.annotation,
            data: {
              ...e.annotation.data,
              text: r.target.value
            }
          }),
          onSubmit: e.onSubmit,
          value: e.annotation.data && e.annotation.data.text
        }
      )
    }
  ) : null;
}
He.defaultProps = {
  className: "",
  style: {}
};
const ae = q.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, At = q.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function Ve(e) {
  const { geometry: n } = e.annotation;
  return n ? /* @__PURE__ */ M.jsxs(
    At,
    {
      className: e.className,
      style: e.style,
      children: [
        /* @__PURE__ */ M.jsx(
          ae,
          {
            style: {
              height: `${n.y}%`,
              width: "100%"
            }
          }
        ),
        /* @__PURE__ */ M.jsx(
          ae,
          {
            style: {
              top: `${n.y}%`,
              height: `${n.height}%`,
              width: `${n.x}%`
            }
          }
        ),
        /* @__PURE__ */ M.jsx(
          ae,
          {
            style: {
              top: `${n.y}%`,
              left: `${n.x + n.width}%`,
              height: `${n.height}%`,
              width: `${100 - (n.x + n.width)}%`
            }
          }
        ),
        /* @__PURE__ */ M.jsx(
          ae,
          {
            style: {
              top: `${n.y + n.height}%`,
              height: `${100 - (n.y + n.height)}%`,
              width: "100%"
            }
          }
        )
      ]
    }
  ) : null;
}
Ve.defaultProps = {
  className: "",
  style: {}
};
const jt = q.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Je(e) {
  const { geometry: n } = e.annotation;
  return n ? /* @__PURE__ */ M.jsx(
    jt,
    {
      className: e.className,
      style: {
        position: "absolute",
        left: `${n.x}%`,
        top: `${n.y}%`,
        height: `${n.height}%`,
        width: `${n.width}%`,
        boxShadow: e.active && "0 0 1px 1px yellow inset",
        ...e.style
      }
    }
  ) : null;
}
Je.defaultProps = {
  className: "",
  style: {}
};
const $t = q.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function xe(e) {
  const { geometry: n } = e.annotation;
  return n ? /* @__PURE__ */ M.jsx(
    $t,
    {
      className: e.className,
      style: {
        position: "absolute",
        left: `${n.x}%`,
        top: `${n.y}%`,
        height: `${n.height}%`,
        width: `${n.width}%`,
        boxShadow: e.active && "0 0 1px 1px yellow inset",
        ...e.style
      }
    }
  ) : null;
}
xe.defaultProps = {
  className: "",
  style: {}
};
const kt = q.div`
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
function Ze(e) {
  const { geometry: n } = e.annotation;
  return n ? /* @__PURE__ */ M.jsx(
    kt,
    {
      style: {
        position: "absolute",
        left: `${n.x}%`,
        top: `${n.y + n.height}%`,
        ...e.style
      },
      className: e.className,
      geometry: n,
      children: e.annotation.data && e.annotation.data.text
    }
  ) : null;
}
Ze.defaultProps = {
  style: {},
  className: ""
};
const Ee = q.div`
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
`, Qe = "RECTANGLE";
function It({ x: e, y: n }, r) {
  if (!r) return !1;
  const i = Math.min(r.x, r.x + r.width), a = Math.max(r.x, r.x + r.width), s = Math.min(r.y, r.y + r.height), l = Math.max(r.y, r.y + r.height);
  return !(e < i || n < s || e > a || n > l);
}
function Yt(e) {
  if (!e || !e.width || !e.height) return 0;
  const n = Math.abs(e.width), r = Math.abs(e.height);
  return n * r;
}
const Nt = {
  onTouchStart(e, n) {
    return qe(e, n);
  },
  onTouchEnd(e, n) {
    return Ue(e);
  },
  onTouchMove(e, n) {
    return We(e, n);
  },
  onMouseDown(e, n) {
    return qe(e, n);
  },
  onMouseUp(e, n) {
    return Ue(e);
  },
  onMouseMove(e, n) {
    return We(e, n);
  }
};
function qe(e, n) {
  if (e.selection)
    return {};
  {
    const { x: r, y: i } = H(n);
    return {
      ...e,
      selection: {
        ...e.selection,
        mode: "SELECTING",
        anchorX: r,
        anchorY: i
      }
    };
  }
}
function Ue(e, n) {
  if (e.selection) {
    const { selection: r, geometry: i } = e;
    if (!i)
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
function We(e, n) {
  if (e.selection && e.selection.mode === "SELECTING") {
    const { anchorX: r, anchorY: i } = e.selection, { x: a, y: s } = H(n), l = a - r, d = s - i;
    return {
      ...e,
      geometry: {
        ...e.geometry,
        type: Qe,
        x: l > 0 ? r : a,
        y: d > 0 ? i : s,
        width: Math.abs(l),
        height: Math.abs(d)
      }
    };
  }
  return e;
}
const ce = {
  TYPE: Qe,
  intersects: It,
  area: Yt,
  methods: Nt
}, Fe = 6, Lt = (e = { width: 100, height: 100 }) => ({
  marginX: Fe / e.width * 100,
  marginY: Fe / e.height * 100
}), Ke = "POINT";
function Dt({ x: e, y: n }, r, i) {
  if (!r) return !1;
  const { marginX: a, marginY: s } = Lt(i), l = Math.min(a, s) / 2, d = Math.abs(e - r.x), b = Math.abs(n - r.y);
  return d <= l && b <= l;
}
function qt(e, n) {
  return 0;
}
const Ut = {
  onClick(e, n) {
    return e.geometry ? {} : {
      ...e,
      selection: {
        ...e.selection,
        showEditor: !0,
        mode: "EDITING"
      },
      geometry: {
        ...e.geometry,
        ...H(n),
        width: 0,
        height: 0,
        type: Ke
      }
    };
  }
}, ue = {
  TYPE: Ke,
  intersects: Dt,
  area: qt,
  methods: Ut
}, le = (e) => Math.pow(e, 2), Se = "OVAL";
function Wt({ x: e, y: n }, r) {
  if (!r || !r.width || !r.height) return !1;
  const i = Math.abs(r.width), a = Math.abs(r.height), s = {
    x: r.x + i / 2,
    y: r.y + a / 2
  }, l = i / 2, d = a / 2;
  if (l === 0 || d === 0) return !1;
  const b = e - s.x, E = n - s.y;
  return le(b) / le(l) + le(E) / le(d) <= 1;
}
function Ft(e) {
  return !e || !e.width || !e.height || e.width <= 0 || e.height <= 0 ? 0 : Math.PI * Math.abs(e.width) * Math.abs(e.height) / 4;
}
const zt = {
  onTouchStart(e, n) {
    return Xt(e, n);
  },
  onTouchEnd(e, n) {
    return Gt(e);
  },
  onTouchMove(e, n) {
    return Bt(e, n);
  },
  onMouseDown(e, n) {
    if (!e.geometry) {
      const { x: r, y: i } = H(n);
      return {
        ...e,
        selection: {
          ...e.selection,
          mode: "SELECTING",
          anchorX: r,
          anchorY: i
        }
      };
    }
  },
  onMouseUp(e, n) {
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
  onMouseMove(e, n) {
    if (e.selection && e.selection.mode === "SELECTING") {
      const { anchorX: r, anchorY: i } = e.selection, { x: a, y: s } = H(n);
      return {
        ...e,
        geometry: {
          ...e.geometry,
          type: Se,
          x: Math.min(r, a),
          y: Math.min(i, s),
          width: Math.abs(a - r),
          height: Math.abs(s - i)
        }
      };
    }
  }
};
function Xt(e, n) {
  if (e.selection)
    return {};
  {
    const { x: r, y: i } = H(n);
    return {
      ...e,
      selection: {
        ...e.selection,
        mode: "SELECTING",
        anchorX: r,
        anchorY: i
      }
    };
  }
}
function Gt(e, n) {
  if (e.selection) {
    const { selection: r, geometry: i } = e;
    if (!i)
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
function Bt(e, n) {
  if (e.selection && e.selection.mode === "SELECTING") {
    const { anchorX: r, anchorY: i } = e.selection, { x: a, y: s } = H(n), l = a - r, d = s - i;
    return {
      ...e,
      geometry: {
        ...e.geometry,
        type: Se,
        x: l > 0 ? r : a,
        y: d > 0 ? i : s,
        width: Math.abs(l),
        height: Math.abs(d)
      }
    };
  }
  return e;
}
const ge = {
  TYPE: Se,
  intersects: Wt,
  area: Ft,
  methods: zt
}, Ht = {
  innerRef: () => {
  },
  onChange: () => {
  },
  onSubmit: () => {
  },
  type: ce.TYPE,
  selectors: [
    ce,
    ue,
    ge
  ],
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  activeAnnotationComparator: (e, n) => e === n,
  renderSelector: ({ annotation: e }) => {
    switch (e.geometry.type) {
      case ce.TYPE:
        return /* @__PURE__ */ M.jsx(
          Ve,
          {
            annotation: e
          }
        );
      case ue.TYPE:
        return /* @__PURE__ */ M.jsx(
          De,
          {
            annotation: e
          }
        );
      case ge.TYPE:
        return /* @__PURE__ */ M.jsx(
          xe,
          {
            annotation: e
          }
        );
      default:
        return null;
    }
  },
  renderEditor: ({ annotation: e, onChange: n, onSubmit: r }) => /* @__PURE__ */ M.jsx(
    He,
    {
      annotation: e,
      onChange: n,
      onSubmit: r
    }
  ),
  renderHighlight: ({ key: e, annotation: n, active: r }) => {
    switch (n.geometry.type) {
      case ce.TYPE:
        return /* @__PURE__ */ M.jsx(
          Je,
          {
            annotation: n,
            active: r
          },
          e
        );
      case ue.TYPE:
        return /* @__PURE__ */ M.jsx(
          De,
          {
            annotation: n,
            active: r
          },
          e
        );
      case ge.TYPE:
        return /* @__PURE__ */ M.jsx(
          xe,
          {
            annotation: n,
            active: r
          },
          e
        );
      default:
        return null;
    }
  },
  renderContent: ({ key: e, annotation: n }) => /* @__PURE__ */ M.jsx(
    Ze,
    {
      annotation: n
    },
    e
  ),
  renderOverlay: ({ type: e, annotation: n }) => {
    switch (e) {
      case ue.TYPE:
        return /* @__PURE__ */ M.jsx(Ee, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ M.jsx(Ee, { children: "Click and Drag to Annotate" });
    }
  }
}, Vt = q.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Ee} {
    opacity: 1;
  }
  touch-action: ${(e) => e.allowTouch ? "pinch-zoom" : "auto"};
`, Jt = q.img`
  display: block;
  width: 100%;
`, et = q.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`, Zt = et;
var fe;
const tr = bt(
  mt(),
  wt()
)((fe = class extends nt {
  constructor() {
    super(...arguments);
    P(this, "targetRef", Re.createRef());
    P(this, "addTargetTouchEventListeners", () => {
      this.targetRef.current.ontouchstart = this.onTouchStart, this.targetRef.current.ontouchend = this.onTouchEnd, this.targetRef.current.ontouchmove = this.onTargetTouchMove, this.targetRef.current.ontouchcancel = this.onTargetTouchLeave;
    });
    P(this, "removeTargetTouchEventListeners", () => {
      this.targetRef.current.ontouchstart = void 0, this.targetRef.current.ontouchend = void 0, this.targetRef.current.ontouchmove = void 0, this.targetRef.current.ontouchcancel = void 0;
    });
    P(this, "setInnerRef", (r) => {
      this.container = r, this.props.relativeMousePos.innerRef(r), this.props.innerRef(r);
    });
    P(this, "getSelectorByType", (r) => this.props.selectors.find((i) => i.TYPE === r));
    P(this, "getTopAnnotationAt", (r, i) => {
      const { annotations: a } = this.props, { container: s, getSelectorByType: l } = this;
      return s ? a.map((b) => {
        const { geometry: E } = b;
        return l(E.type).intersects({ x: r, y: i }, E, s) ? b : !1;
      }).filter((b) => !!b).sort((b, E) => {
        const x = l(b.geometry.type), m = l(E.geometry.type);
        return x.area(b.geometry, s) - m.area(E.geometry, s);
      })[0] : void 0;
    });
    P(this, "onTargetMouseMove", (r) => {
      this.props.relativeMousePos.onMouseMove(r), this.onMouseMove(r);
    });
    P(this, "onTargetTouchMove", (r) => {
      this.props.relativeMousePos.onTouchMove(r), this.onTouchMove(r);
    });
    P(this, "onTargetMouseLeave", (r) => {
      this.props.relativeMousePos.onMouseLeave(r);
    });
    P(this, "onTargetTouchLeave", (r) => {
      this.props.relativeMousePos.onTouchLeave(r);
    });
    P(this, "onMouseUp", (r) => this.callSelectorMethod("onMouseUp", r));
    P(this, "onMouseDown", (r) => this.callSelectorMethod("onMouseDown", r));
    P(this, "onMouseMove", (r) => this.callSelectorMethod("onMouseMove", r));
    P(this, "onTouchStart", (r) => this.callSelectorMethod("onTouchStart", r));
    P(this, "onTouchEnd", (r) => this.callSelectorMethod("onTouchEnd", r));
    P(this, "onTouchMove", (r) => this.callSelectorMethod("onTouchMove", r));
    P(this, "onClick", (r) => this.callSelectorMethod("onClick", r));
    P(this, "onSubmit", () => {
      this.props.onSubmit(this.props.value);
    });
    P(this, "callSelectorMethod", (r, i) => {
      if (!this.props.disableAnnotation)
        if (this.props[r])
          this.props[r](i);
        else {
          const a = this.getSelectorByType(this.props.type);
          if (a && a.methods[r]) {
            const s = a.methods[r](this.props.value, i);
            typeof s > "u" ? process.env.NODE_ENV !== "production" && console.error(`
              ${r} of selector type ${this.props.type} returned undefined.
              Make sure to explicitly return the previous state
            `) : this.props.onChange(s);
          }
        }
    });
    P(this, "shouldAnnotationBeActive", (r, i) => this.props.activeAnnotations && !!this.props.activeAnnotations.find((s) => this.props.activeAnnotationComparator(r, s)) || i === r);
  }
  componentDidMount() {
    this.props.allowTouch && this.addTargetTouchEventListeners();
  }
  componentDidUpdate(r) {
    this.props.allowTouch !== r.allowTouch && (this.props.allowTouch ? this.addTargetTouchEventListeners() : this.removeTargetTouchEventListeners());
  }
  render() {
    const { props: r } = this, {
      isMouseHovering: i,
      renderHighlight: a,
      renderContent: s,
      renderSelector: l,
      renderEditor: d,
      renderOverlay: b,
      allowTouch: E
    } = r, x = this.getTopAnnotationAt(
      this.props.relativeMousePos.x,
      this.props.relativeMousePos.y
    );
    return /* @__PURE__ */ M.jsxs(
      Vt,
      {
        style: r.style,
        innerRef: i.innerRef,
        onMouseLeave: this.onTargetMouseLeave,
        onTouchCancel: this.onTargetTouchLeave,
        allowTouch: E,
        children: [
          /* @__PURE__ */ M.jsx(
            Jt,
            {
              className: r.className,
              style: r.style,
              alt: r.alt,
              src: r.src,
              draggable: !1,
              innerRef: this.setInnerRef
            }
          ),
          /* @__PURE__ */ M.jsxs(et, { children: [
            r.annotations.map((m) => a({
              key: m.data.id,
              annotation: m,
              active: this.shouldAnnotationBeActive(m, x)
            })),
            !r.disableSelector && r.value && r.value.geometry && l({
              annotation: r.value
            })
          ] }),
          /* @__PURE__ */ M.jsx(
            Zt,
            {
              innerRef: this.targetRef,
              onClick: this.onClick,
              onMouseUp: this.onMouseUp,
              onMouseDown: this.onMouseDown,
              onMouseMove: this.onTargetMouseMove
            }
          ),
          !r.disableOverlay && b({
            type: r.type,
            annotation: r.value
          }),
          r.annotations.map((m) => this.shouldAnnotationBeActive(m, x) && s({
            key: m.data.id,
            annotation: m
          })),
          !r.disableEditor && r.value && r.value.selection && r.value.selection.showEditor && d({
            annotation: r.value,
            onChange: r.onChange,
            onSubmit: this.onSubmit
          }),
          /* @__PURE__ */ M.jsx("div", { children: r.children })
        ]
      }
    );
  }
}, P(fe, "propTypes", {
  innerRef: S.func,
  onMouseUp: S.func,
  onMouseDown: S.func,
  onMouseMove: S.func,
  onClick: S.func,
  children: S.object,
  annotations: S.arrayOf(
    S.shape({
      type: S.string
    })
  ).isRequired,
  type: S.string,
  selectors: S.arrayOf(
    S.shape({
      TYPE: S.string,
      intersects: S.func.isRequired,
      area: S.func.isRequired,
      methods: S.object.isRequired
    })
  ).isRequired,
  value: S.shape({
    selection: S.object,
    geometry: S.shape({
      type: S.string.isRequired
    }),
    data: S.object
  }),
  onChange: S.func,
  onSubmit: S.func,
  activeAnnotationComparator: S.func,
  activeAnnotations: S.arrayOf(S.any),
  disableAnnotation: S.bool,
  disableSelector: S.bool,
  renderSelector: S.func,
  disableEditor: S.bool,
  renderEditor: S.func,
  renderHighlight: S.func.isRequired,
  renderContent: S.func.isRequired,
  disableOverlay: S.bool,
  renderOverlay: S.func.isRequired,
  allowTouch: S.bool
}), P(fe, "defaultProps", Ht), fe));
export {
  tr as default,
  Ht as defaultProps
};
