import Re, { useState as oe, useRef as ee, useCallback as T, useEffect as ge, useMemo as xt } from "react";
import I, { keyframes as vt } from "styled-components";
var me = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function bt() {
  if (Be) return fe;
  Be = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(o, r, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), r.key !== void 0 && (c = "" + r.key), "key" in r) {
      s = {};
      for (var i in r)
        i !== "key" && (s[i] = r[i]);
    } else s = r;
    return r = s.ref, {
      $$typeof: t,
      type: o,
      key: c,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return fe.Fragment = e, fe.jsx = n, fe.jsxs = n, fe;
}
var he = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function yt() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === A ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case b:
          return "Fragment";
        case P:
          return "Profiler";
        case w:
          return "StrictMode";
        case z:
          return "Suspense";
        case R:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case m:
            return "Portal";
          case Z:
            return (a.displayName || "Context") + ".Provider";
          case q:
            return (a._context.displayName || "Context") + ".Consumer";
          case j:
            var v = a.render;
            return a = a.displayName, a || (a = v.displayName || v.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case X:
            return v = a.displayName || null, v !== null ? v : t(a.type) || "Memo";
          case E:
            v = a._payload, a = a._init;
            try {
              return t(a(v));
            } catch {
            }
        }
      return null;
    }
    function e(a) {
      return "" + a;
    }
    function n(a) {
      try {
        e(a);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var D = v.error, O = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return D.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), e(a);
      }
    }
    function o(a) {
      if (a === b) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === E)
        return "<...>";
      try {
        var v = t(a);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var a = C.A;
      return a === null ? null : a.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(a) {
      if (F.call(a, "key")) {
        var v = Object.getOwnPropertyDescriptor(a, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function i(a, v) {
      function D() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: D,
        configurable: !0
      });
    }
    function u() {
      var a = t(this.type);
      return $[a] || ($[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function f(a, v, D, O, L, U, re, K) {
      return D = U.ref, a = {
        $$typeof: g,
        type: a,
        key: v,
        props: U,
        _owner: L
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function h(a, v, D, O, L, U, re, K) {
      var _ = v.children;
      if (_ !== void 0)
        if (O)
          if (G(_)) {
            for (O = 0; O < _.length; O++)
              l(_[O]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(_);
      if (F.call(v, "key")) {
        _ = t(a);
        var N = Object.keys(v).filter(function(B) {
          return B !== "key";
        });
        O = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", H[_ + O] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          _,
          N,
          _
        ), H[_ + O] = !0);
      }
      if (_ = null, D !== void 0 && (n(D), _ = "" + D), c(v) && (n(v.key), _ = "" + v.key), "key" in v) {
        D = {};
        for (var te in v)
          te !== "key" && (D[te] = v[te]);
      } else D = v;
      return _ && i(
        D,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), f(
        a,
        _,
        U,
        L,
        r(),
        D,
        re,
        K
      );
    }
    function l(a) {
      typeof a == "object" && a !== null && a.$$typeof === g && a._store && (a._store.validated = 1);
    }
    var p = Re, g = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), C = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, G = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var Y, $ = {}, M = p["react-stack-bottom-frame"].bind(
      p,
      s
    )(), y = W(o(s)), H = {};
    he.Fragment = b, he.jsx = function(a, v, D, O, L) {
      var U = 1e4 > C.recentlyCreatedOwnerStacks++;
      return h(
        a,
        v,
        D,
        !1,
        O,
        L,
        U ? Error("react-stack-top-frame") : M,
        U ? W(o(a)) : y
      );
    }, he.jsxs = function(a, v, D, O, L) {
      var U = 1e4 > C.recentlyCreatedOwnerStacks++;
      return h(
        a,
        v,
        D,
        !0,
        O,
        L,
        U ? Error("react-stack-top-frame") : M,
        U ? W(o(a)) : y
      );
    };
  }()), he;
}
var Fe;
function wt() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? me.exports = bt() : me.exports = yt()), me.exports;
}
var x = wt();
const tt = (t) => {
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
}, Ge = (t, e, n) => Math.max(t, Math.min(e, n)), Et = (t) => {
  if (!t.currentTarget || typeof t.currentTarget.getBoundingClientRect != "function")
    return {
      x: 0,
      y: 0
    };
  const e = t.targetTouches[0], n = t.currentTarget.getBoundingClientRect(), o = e.pageX - n.left, r = e.pageY - (n.top + window.scrollY);
  return {
    x: Ge(0, 100, o / n.width * 100),
    y: Ge(0, 100, r / n.height * 100)
  };
}, ie = (t) => Tt(t) ? Rt(t) ? (Mt(t) && t.preventDefault(), Et(t)) : {
  x: null
} : tt(t), Tt = (t) => t.targetTouches !== void 0, Rt = (t) => t.targetTouches.length === 1, Mt = (t) => t.type === "touchmove";
function Dt() {
  const [t, e] = oe({
    x: null,
    y: null
  }), n = ee(null), o = T((u) => {
    try {
      const f = tt(u);
      e(f);
    } catch {
      e({
        x: null,
        y: null
      });
    }
  }, []), r = T((u) => {
    const f = n.current;
    if (!f || u.targetTouches.length !== 1)
      return;
    const h = u.targetTouches[0], l = f.offsetParent;
    if (l)
      try {
        const p = h.pageX - l.offsetLeft, g = h.pageY - l.offsetTop, m = f, b = m.width, w = m.height;
        b > 0 && w > 0 ? e({
          x: p / b * 100,
          y: g / w * 100
        }) : e({
          x: null,
          y: null
        });
      } catch {
        e({
          x: null,
          y: null
        });
      }
  }, []), s = T((u) => {
    e({
      x: null,
      y: null
    });
  }, []), c = T((u) => {
    e({
      x: null,
      y: null
    });
  }, []), i = T((u) => {
    n.current = u;
  }, []);
  return {
    mousePosition: t,
    handlers: {
      onMouseMove: o,
      onMouseLeave: s,
      onTouchMove: r,
      onTouchLeave: c
    },
    setRef: i
  };
}
var xe = { exports: {} }, ke = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function St() {
  if (Ue) return ke;
  Ue = 1;
  var t = Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return ke.c = function(e) {
    return t.H.useMemoCache(e);
  }, ke;
}
var $e = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function At() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    $e.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  }()), $e;
}
var We;
function Ct() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? xe.exports = St() : xe.exports = At()), xe.exports;
}
var V = Ct();
function kt(t, e) {
  if (!t || typeof t.getBoundingClientRect != "function")
    return !1;
  const {
    pageX: n,
    pageY: o
  } = e, {
    left: r,
    right: s,
    bottom: c,
    top: i
  } = t.getBoundingClientRect();
  return n > r && n < s && o > i && o < c;
}
function $t() {
  const t = V.c(5), [e, n] = oe(!1), o = ee(null);
  let r, s;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
    const f = (h) => {
      const l = o.current, p = {
        pageX: h.pageX,
        pageY: h.pageY
      }, g = kt(l, p);
      n(g);
    };
    return document.addEventListener("mousemove", f, {
      passive: !0
    }), () => {
      document.removeEventListener("mousemove", f);
    };
  }, s = [], t[0] = r, t[1] = s) : (r = t[0], s = t[1]), ge(r, s);
  let c;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (f) => {
    o.current = f;
  }, t[2] = c) : c = t[2];
  const i = c;
  let u;
  return t[3] !== e ? (u = {
    isHoveringOver: e,
    setRef: i
  }, t[3] = e, t[4] = u) : u = t[4], u;
}
function Nt({
  selectors: t,
  effectiveType: e,
  value: n,
  onChange: o,
  disableAnnotation: r
}) {
  const s = T((i) => {
    if (i)
      return t.find((u) => u.TYPE === i);
  }, [t]);
  return {
    callSelectorMethod: T((i, u) => {
      if (r)
        return;
      const f = s(e);
      if (!(f != null && f.methods[i]))
        return;
      const h = f.methods[i];
      try {
        const l = h(n || {}, u);
        if (typeof l > "u") {
          process.env.NODE_ENV !== "production" && console.error(`Selector method ${String(i)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);
          return;
        }
        o == null || o(l);
      } catch (l) {
        process.env.NODE_ENV !== "production" && console.error(`Error calling selector method ${String(i)}:`, l);
      }
    }, [r, s, e, n, o]),
    getSelectorByType: s
  };
}
function Pt(t) {
  const e = V.c(12), {
    annotations: n,
    selectors: o,
    imageRef: r,
    enableEditing: s
  } = t;
  let c, i;
  e[0] !== o ? (i = new Map(o.map(Yt)), e[0] = o, e[1] = i) : i = e[1], c = i;
  const u = c;
  let f;
  e[2] !== u ? (f = (m) => {
    if (m)
      return u.get(m);
  }, e[2] = u, e[3] = f) : f = e[3];
  const h = f;
  let l;
  e[4] !== n || e[5] !== s || e[6] !== h || e[7] !== r ? (l = (m, b) => {
    const w = r.current;
    if (!w || m === null || b === null)
      return;
    const P = {
      x: m,
      y: b
    }, q = n.map((j, z) => {
      var A;
      const {
        geometry: R
      } = j;
      if (!R)
        return null;
      const X = h(R.type);
      if (!X)
        return console.warn(`🔍 No selector found for type: ${R.type}`), null;
      let E = R;
      s && R.type === "RECTANGLE" && typeof R.x == "number" && typeof R.y == "number" && typeof R.width == "number" && typeof R.height == "number" && (E = {
        ...R,
        x: Math.max(0, R.x - 2),
        y: Math.max(0, R.y - 2),
        width: Math.min(100 - R.x + 2, R.width + 4),
        height: Math.min(100 - R.y + 2, R.height + 4)
      });
      const S = X.intersects(P, E, w);
      return S && console.log(`🎯 Hit detected on annotation ${(A = j.data) == null ? void 0 : A.id}:`, {
        point: P,
        testGeometry: E,
        intersects: S
      }), S ? j : null;
    }).filter(jt);
    return q.length === 0 ? void 0 : q.sort((j, z) => {
      const R = h(j.geometry.type), X = h(z.geometry.type);
      return !R || !X ? 0 : R.area(j.geometry, w) - X.area(z.geometry, w);
    })[0];
  }, e[4] = n, e[5] = s, e[6] = h, e[7] = r, e[8] = l) : l = e[8];
  const p = l;
  let g;
  return e[9] !== h || e[10] !== p ? (g = {
    getTopAnnotationAt: p,
    getSelectorByType: h
  }, e[9] = h, e[10] = p, e[11] = g) : g = e[11], g;
}
function jt(t) {
  return t !== null;
}
function Yt(t) {
  return [t.TYPE, t];
}
const _t = (t, e, n) => {
  const [o, r] = oe(!1), [s, c] = oe(null), [i, u] = oe(null), [f, h] = oe(null), l = ee(null), p = ee(t), g = ee(t), [m, b] = oe(t);
  p.current = n ? m : t, ge(() => {
    (!n || !o) && (g.current = t, n && b(t));
  }, [t, n, o]);
  const w = T((E, S) => {
    const A = p.current.map((C) => C.data.id === E ? {
      ...C,
      isDragging: S
    } : C);
    p.current = A, n ? b(A) : e(A), r(S), c(S ? E : null);
  }, [e, n]), P = T((E, S) => {
    n && h(E), w(E, !0);
    const A = p.current.find((C) => C.data.id === E);
    A && (l.current = {
      ...A.geometry,
      initialCursorPosition: S
    });
  }, [w, n]), q = T((E, S, A) => {
    if (!s || !l.current) return;
    const C = E.clientX - A.x, F = E.clientY - A.y, G = document.querySelector(".annotation-container");
    if (!G) return;
    const W = G.getBoundingClientRect(), Y = W.width, $ = W.height, M = 100, y = {
      ...l.current
    };
    switch (S) {
      case "top":
        y.height = Math.min(l.current.height - F / $ * M, l.current.y + l.current.height), y.y = Math.max(l.current.y + F / $ * M, 0);
        break;
      case "right":
        y.width = Math.min(l.current.width + C / Y * M, M - l.current.x);
        break;
      case "bottom":
        y.height = Math.min(l.current.height + F / $ * M, M - l.current.y);
        break;
      case "left":
        y.width = Math.min(l.current.width - C / Y * M, l.current.x + l.current.width), y.x = Math.max(l.current.x + C / Y * M, 0);
        break;
    }
    y.width = Math.max(y.width, 0), y.height = Math.max(y.height, 0), y.x = Math.min(y.x, M - y.width), y.y = Math.min(y.y, M - y.height);
    const H = p.current.map((a) => a.data.id === s ? {
      ...a,
      geometry: y
    } : a);
    p.current = H, n ? b(H) : e(H);
  }, [s, e, n]), Z = T((E, S) => {
    n && h(E), w(E, !0);
    const A = p.current.find((C) => C.data.id === E);
    A && (l.current = {
      ...A.geometry,
      initialCursorPosition: S
    });
  }, [w, n]), j = T((E, S) => {
    if (!s || !l.current) return;
    const A = E.clientX - S.x, C = E.clientY - S.y, F = document.querySelector(".annotation-container");
    if (!F) return;
    const G = F.getBoundingClientRect(), W = G.width, Y = G.height, $ = 100, M = {
      ...l.current
    };
    M.x = Math.max(Math.min(l.current.x + A / W * $, $ - l.current.width), 0), M.y = Math.max(Math.min(l.current.y + C / Y * $, $ - l.current.height), 0);
    const y = p.current.map((H) => H.data.id === s ? {
      ...H,
      geometry: M
    } : H);
    p.current = y, n ? b(y) : e(y);
  }, [s, e, n]), z = T(() => {
    s && (r(!1), c(null)), l.current = null;
  }, [s]), R = T((E) => {
    console.log("handleConfirm hasConfirmMode", n), e(m), g.current = m, h(null), c(null), r(!1);
  }, [e, m]), X = T((E) => {
    b(g.current), p.current = g.current, h(null), c(null), r(!1);
  }, []);
  return {
    isDragging: o,
    draggingId: s,
    activeAnnotationId: i,
    editingAnnotationId: f,
    setActiveAnnotationId: u,
    setDraggingId: c,
    handleDotDragStart: P,
    handleDotDrag: q,
    handleMoveStart: Z,
    handleMove: j,
    handleMouseUp: z,
    handleConfirm: R,
    handleReset: X,
    // Return the appropriate annotations for display
    displayAnnotations: n ? m : t
  };
}, Pe = I.div`
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
`, Ot = I.div`
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
function Ne(t) {
  const e = V.c(3), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.y}%`, r = `${n.x}%`;
  let s;
  return e[0] !== o || e[1] !== r ? (s = /* @__PURE__ */ x.jsx(Ot, { style: {
    top: o,
    left: r
  } }), e[0] = o, e[1] = r, e[2] = s) : s = e[2], s;
}
const It = I.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`, Lt = I.div`
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
`, Xt = (t) => {
  const e = V.c(11), {
    onChange: n,
    onSubmit: o,
    onFocus: r,
    onBlur: s,
    value: c
  } = t;
  let i;
  e[0] !== s || e[1] !== n || e[2] !== r || e[3] !== c ? (i = /* @__PURE__ */ x.jsx(It, { children: /* @__PURE__ */ x.jsx("textarea", { placeholder: "Write description", onFocus: r, onBlur: s, onChange: n, value: c }) }), e[0] = s, e[1] = n, e[2] = r, e[3] = c, e[4] = i) : i = e[4];
  let u;
  e[5] !== o || e[6] !== c ? (u = c && /* @__PURE__ */ x.jsx(Lt, { onClick: o, children: "Submit" }), e[5] = o, e[6] = c, e[7] = u) : u = e[7];
  let f;
  return e[8] !== i || e[9] !== u ? (f = /* @__PURE__ */ x.jsxs(Re.Fragment, { children: [
    i,
    u
  ] }), e[8] = i, e[9] = u, e[10] = f) : f = e[10], f;
}, Ht = vt`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`, Bt = I.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Ht} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`, zt = (t) => {
  var q;
  const e = V.c(17), {
    annotation: n,
    onChange: o,
    onSubmit: r,
    className: s,
    style: c
  } = t, i = s === void 0 ? "" : s;
  let u;
  e[0] !== c ? (u = c === void 0 ? {} : c, e[0] = c, e[1] = u) : u = e[1];
  const f = u, {
    geometry: h
  } = n;
  if (!h)
    return null;
  const l = `${h.x}%`, p = `${h.y + h.height}%`;
  let g;
  e[2] !== f || e[3] !== l || e[4] !== p ? (g = {
    position: "absolute",
    left: l,
    top: p,
    ...f
  }, e[2] = f, e[3] = l, e[4] = p, e[5] = g) : g = e[5];
  let m;
  e[6] !== n || e[7] !== o ? (m = (Z) => o({
    ...n,
    data: {
      ...n.data,
      text: Z.target.value
    }
  }), e[6] = n, e[7] = o, e[8] = m) : m = e[8];
  const b = (q = n.data) == null ? void 0 : q.text;
  let w;
  e[9] !== r || e[10] !== m || e[11] !== b ? (w = /* @__PURE__ */ x.jsx(Xt, { onChange: m, onSubmit: r, value: b }), e[9] = r, e[10] = m, e[11] = b, e[12] = w) : w = e[12];
  let P;
  return e[13] !== i || e[14] !== g || e[15] !== w ? (P = /* @__PURE__ */ x.jsx(Bt, { className: i, style: g, children: w }), e[13] = i, e[14] = g, e[15] = w, e[16] = P) : P = e[16], P;
}, ve = I.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`, Ft = I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
function nt(t) {
  const e = V.c(21), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.y}%`;
  let r;
  e[0] !== o ? (r = /* @__PURE__ */ x.jsx(ve, { style: {
    height: o,
    width: "100%"
  } }), e[0] = o, e[1] = r) : r = e[1];
  const s = `${n.y}%`, c = `${n.height}%`, i = `${n.x}%`;
  let u;
  e[2] !== s || e[3] !== c || e[4] !== i ? (u = /* @__PURE__ */ x.jsx(ve, { style: {
    top: s,
    height: c,
    width: i
  } }), e[2] = s, e[3] = c, e[4] = i, e[5] = u) : u = e[5];
  const f = `${n.y}%`, h = `${n.x + n.width}%`, l = `${n.height}%`, p = `${100 - (n.x + n.width)}%`;
  let g;
  e[6] !== f || e[7] !== h || e[8] !== l || e[9] !== p ? (g = /* @__PURE__ */ x.jsx(ve, { style: {
    top: f,
    left: h,
    height: l,
    width: p
  } }), e[6] = f, e[7] = h, e[8] = l, e[9] = p, e[10] = g) : g = e[10];
  const m = `${n.y + n.height}%`, b = `${100 - (n.y + n.height)}%`;
  let w;
  e[11] !== m || e[12] !== b ? (w = /* @__PURE__ */ x.jsx(ve, { style: {
    top: m,
    height: b,
    width: "100%"
  } }), e[11] = m, e[12] = b, e[13] = w) : w = e[13];
  let P;
  return e[14] !== t.className || e[15] !== t.style || e[16] !== r || e[17] !== g || e[18] !== w || e[19] !== u ? (P = /* @__PURE__ */ x.jsxs(Ft, { className: t.className, style: t.style, children: [
    r,
    u,
    g,
    w
  ] }), e[14] = t.className, e[15] = t.style, e[16] = r, e[17] = g, e[18] = w, e[19] = u, e[20] = P) : P = e[20], P;
}
nt.defaultProps = {
  className: "",
  style: {}
};
const Gt = I.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Ee(t) {
  const e = V.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.x}%`, r = `${n.y}%`, s = `${n.height}%`, c = `${n.width}%`, i = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  e[0] !== t.style || e[1] !== o || e[2] !== r || e[3] !== s || e[4] !== c || e[5] !== i ? (u = {
    position: "absolute",
    left: o,
    top: r,
    height: s,
    width: c,
    boxShadow: i,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = r, e[3] = s, e[4] = c, e[5] = i, e[6] = u) : u = e[6];
  let f;
  return e[7] !== t.className || e[8] !== u ? (f = /* @__PURE__ */ x.jsx(Gt, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = f) : f = e[9], f;
}
Ee.defaultProps = {
  className: "",
  style: {}
};
const Ut = I.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;
function Te(t) {
  const e = V.c(10), {
    geometry: n
  } = t.annotation;
  if (!n)
    return null;
  const o = `${n.x}%`, r = `${n.y}%`, s = `${n.height}%`, c = `${n.width}%`, i = t.active ? "0 0 1px 1px yellow inset" : void 0;
  let u;
  e[0] !== t.style || e[1] !== o || e[2] !== r || e[3] !== s || e[4] !== c || e[5] !== i ? (u = {
    position: "absolute",
    left: o,
    top: r,
    height: s,
    width: c,
    boxShadow: i,
    ...t.style
  }, e[0] = t.style, e[1] = o, e[2] = r, e[3] = s, e[4] = c, e[5] = i, e[6] = u) : u = e[6];
  let f;
  return e[7] !== t.className || e[8] !== u ? (f = /* @__PURE__ */ x.jsx(Ut, { className: t.className, style: u }), e[7] = t.className, e[8] = u, e[9] = f) : f = e[9], f;
}
Te.defaultProps = {
  className: "",
  style: {}
};
const qt = I.div`
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
function ot(t) {
  const e = V.c(8), {
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
  let i;
  return e[4] !== t.className || e[5] !== s || e[6] !== c ? (i = /* @__PURE__ */ x.jsx(qt, { style: s, className: t.className, children: c }), e[4] = t.className, e[5] = s, e[6] = c, e[7] = i) : i = e[7], i;
}
ot.defaultProps = {
  style: {},
  className: ""
};
const Wt = I.div`
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
`, Vt = I.div`
  &::before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
    color: #666;
    line-height: 1;
  }
`, Jt = (t) => {
  const e = V.c(6), {
    annotationId: n,
    onRemove: o
  } = t;
  let r;
  e[0] !== n || e[1] !== o ? (r = (u) => {
    u.stopPropagation(), o(n);
  }, e[0] = n, e[1] = o, e[2] = r) : r = e[2];
  const s = r;
  let c;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (c = /* @__PURE__ */ x.jsx(Vt, {}), e[3] = c) : c = e[3];
  let i;
  return e[4] !== s ? (i = /* @__PURE__ */ x.jsx(Wt, { onClick: s, children: c }), e[4] = s, e[5] = i) : i = e[5], i;
}, Zt = I.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
`, Ve = I.button`
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
`, Qt = (t) => {
  const e = V.c(11), {
    onConfirm: n,
    onReset: o
  } = t;
  let r;
  e[0] !== n ? (r = (l) => {
    l.stopPropagation(), n();
  }, e[0] = n, e[1] = r) : r = e[1];
  const s = r;
  let c;
  e[2] !== o ? (c = (l) => {
    l.stopPropagation(), o();
  }, e[2] = o, e[3] = c) : c = e[3];
  const i = c;
  let u;
  e[4] !== s ? (u = /* @__PURE__ */ x.jsx(Ve, { $variant: "confirm", onClick: s, children: "✓" }), e[4] = s, e[5] = u) : u = e[5];
  let f;
  e[6] !== i ? (f = /* @__PURE__ */ x.jsx(Ve, { $variant: "reset", onClick: i, children: "✕" }), e[6] = i, e[7] = f) : f = e[7];
  let h;
  return e[8] !== u || e[9] !== f ? (h = /* @__PURE__ */ x.jsxs(Zt, { children: [
    u,
    f
  ] }), e[8] = u, e[9] = f, e[10] = h) : h = e[10], h;
}, Kt = I.div`
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
`, en = I.div`
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
`, be = (t) => {
  const e = V.c(9), {
    position: n,
    onDragStart: o,
    onDrag: r,
    onDragEnd: s,
    annotationId: c
  } = t;
  let i;
  e[0] !== c || e[1] !== r || e[2] !== s || e[3] !== o || e[4] !== n ? (i = (l) => {
    l.preventDefault(), l.stopPropagation();
    const p = {
      x: l.clientX,
      y: l.clientY
    };
    o(c, p);
    const g = (b) => {
      b.preventDefault(), b.stopPropagation(), r(b, n, p);
    }, m = (b) => {
      b.preventDefault(), b.stopPropagation(), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", m), s == null || s();
    };
    document.addEventListener("mousemove", g), document.addEventListener("mouseup", m);
  }, e[0] = c, e[1] = r, e[2] = s, e[3] = o, e[4] = n, e[5] = i) : i = e[5];
  const u = i, f = nn;
  let h;
  return e[6] !== u || e[7] !== n ? (h = /* @__PURE__ */ x.jsx(Kt, { position: n, onMouseDown: u, onClick: f, "data-type": "dot" }), e[6] = u, e[7] = n, e[8] = h) : h = e[8], h;
}, tn = (t) => {
  const e = V.c(7), {
    onMoveStart: n,
    onMove: o,
    onMoveEnd: r,
    annotationId: s
  } = t;
  let c;
  e[0] !== s || e[1] !== o || e[2] !== r || e[3] !== n ? (c = (h) => {
    h.preventDefault(), h.stopPropagation();
    const l = {
      x: h.clientX,
      y: h.clientY
    };
    n(s, l);
    const p = (m) => {
      m.preventDefault(), m.stopPropagation(), o(m, l);
    }, g = (m) => {
      m.preventDefault(), m.stopPropagation(), document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", g), r == null || r();
    };
    document.addEventListener("mousemove", p), document.addEventListener("mouseup", g);
  }, e[0] = s, e[1] = o, e[2] = r, e[3] = n, e[4] = c) : c = e[4];
  const i = c, u = on;
  let f;
  return e[5] !== i ? (f = /* @__PURE__ */ x.jsx(en, { onMouseDown: i, onClick: u, "data-type": "move-button", children: "↕" }), e[5] = i, e[6] = f) : f = e[6], f;
};
function nn(t) {
  t.preventDefault(), t.stopPropagation();
}
function on(t) {
  t.preventDefault(), t.stopPropagation();
}
const rn = I.div`
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
`, sn = (t) => {
  var H, a, v, D, O, L, U, re, K, _, N, te;
  const e = V.c(53), {
    annotation: n,
    onDotDragStart: o,
    onDotDrag: r,
    onMoveStart: s,
    onMove: c,
    onDragEnd: i,
    isDragging: u,
    enableRemoval: f,
    onRemoveAnnotation: h,
    onConfirm: l,
    onReset: p
  } = t, {
    geometry: g
  } = n;
  if (!g || !g.type || typeof g.x != "number" || typeof g.y != "number")
    return null;
  let m;
  e[0] !== ((H = n.data) == null ? void 0 : H.id) || e[1] !== c || e[2] !== s ? (m = (B) => {
    var ue;
    const k = B.target;
    if (k.closest('[data-type="dot"]') || k.closest('[data-type="move-button"]'))
      return;
    B.preventDefault(), B.stopPropagation();
    const Q = {
      x: B.clientX,
      y: B.clientY
    }, le = (ue = n.data) == null ? void 0 : ue.id;
    le && s(le, Q);
    const se = (ne) => {
      ne.preventDefault(), ne.stopPropagation(), c(ne, Q);
    }, ae = (ne) => {
      ne.preventDefault(), ne.stopPropagation(), document.removeEventListener("mousemove", se), document.removeEventListener("mouseup", ae);
    };
    document.addEventListener("mousemove", se), document.addEventListener("mouseup", ae);
  }, e[0] = (a = n.data) == null ? void 0 : a.id, e[1] = c, e[2] = s, e[3] = m) : m = e[3];
  const b = m, w = an, P = `${g.x}%`, q = `${g.y}%`, Z = `${g.width}%`, j = `${g.height}%`;
  let z;
  e[4] !== P || e[5] !== q || e[6] !== Z || e[7] !== j ? (z = {
    left: P,
    top: q,
    width: Z,
    height: j
  }, e[4] = P, e[5] = q, e[6] = Z, e[7] = j, e[8] = z) : z = e[8];
  const R = (v = n.data) == null ? void 0 : v.id;
  let X;
  e[9] !== r || e[10] !== o || e[11] !== i || e[12] !== R ? (X = /* @__PURE__ */ x.jsx(be, { position: "top", onDragStart: o, onDrag: r, onDragEnd: i, annotationId: R }), e[9] = r, e[10] = o, e[11] = i, e[12] = R, e[13] = X) : X = e[13];
  const E = (D = n.data) == null ? void 0 : D.id;
  let S;
  e[14] !== r || e[15] !== o || e[16] !== i || e[17] !== E ? (S = /* @__PURE__ */ x.jsx(be, { position: "right", onDragStart: o, onDrag: r, onDragEnd: i, annotationId: E }), e[14] = r, e[15] = o, e[16] = i, e[17] = E, e[18] = S) : S = e[18];
  const A = (O = n.data) == null ? void 0 : O.id;
  let C;
  e[19] !== r || e[20] !== o || e[21] !== i || e[22] !== A ? (C = /* @__PURE__ */ x.jsx(be, { position: "bottom", onDragStart: o, onDrag: r, onDragEnd: i, annotationId: A }), e[19] = r, e[20] = o, e[21] = i, e[22] = A, e[23] = C) : C = e[23];
  const F = (L = n.data) == null ? void 0 : L.id;
  let G;
  e[24] !== r || e[25] !== o || e[26] !== i || e[27] !== F ? (G = /* @__PURE__ */ x.jsx(be, { position: "left", onDragStart: o, onDrag: r, onDragEnd: i, annotationId: F }), e[24] = r, e[25] = o, e[26] = i, e[27] = F, e[28] = G) : G = e[28];
  const W = (U = n.data) == null ? void 0 : U.id;
  let Y;
  e[29] !== i || e[30] !== c || e[31] !== s || e[32] !== W ? (Y = /* @__PURE__ */ x.jsx(tn, { onMoveStart: s, onMove: c, onMoveEnd: i, annotationId: W }), e[29] = i, e[30] = c, e[31] = s, e[32] = W, e[33] = Y) : Y = e[33];
  let $;
  e[34] !== ((re = n.data) == null ? void 0 : re.id) || e[35] !== f || e[36] !== h ? ($ = f && h && /* @__PURE__ */ x.jsx(Jt, { annotationId: (K = n.data) == null ? void 0 : K.id, onRemove: h }), e[34] = (_ = n.data) == null ? void 0 : _.id, e[35] = f, e[36] = h, e[37] = $) : $ = e[37];
  let M;
  e[38] !== ((N = n.data) == null ? void 0 : N.id) || e[39] !== l || e[40] !== p ? (M = l && p && /* @__PURE__ */ x.jsx(Qt, { onConfirm: () => {
    var B;
    return l((B = n.data) == null ? void 0 : B.id);
  }, onReset: () => {
    var B;
    return p((B = n.data) == null ? void 0 : B.id);
  } }), e[38] = (te = n.data) == null ? void 0 : te.id, e[39] = l, e[40] = p, e[41] = M) : M = e[41];
  let y;
  return e[42] !== b || e[43] !== u || e[44] !== S || e[45] !== C || e[46] !== G || e[47] !== Y || e[48] !== $ || e[49] !== M || e[50] !== z || e[51] !== X ? (y = /* @__PURE__ */ x.jsxs(rn, { style: z, $isDragging: u, onMouseDown: b, onClick: w, children: [
    X,
    S,
    C,
    G,
    Y,
    $,
    M
  ] }), e[42] = b, e[43] = u, e[44] = S, e[45] = C, e[46] = G, e[47] = Y, e[48] = $, e[49] = M, e[50] = z, e[51] = X, e[52] = y) : y = e[52], y;
};
function an(t) {
  t.preventDefault(), t.stopPropagation();
}
const rt = "RECTANGLE";
function cn({
  x: t,
  y: e
}, n, o) {
  if (!n) return !1;
  const r = Math.min(n.x, n.x + n.width), s = Math.max(n.x, n.x + n.width), c = Math.min(n.y, n.y + n.height), i = Math.max(n.y, n.y + n.height);
  return !(t < r || e < c || t > s || e > i);
}
function ln(t, e) {
  if (!t || t.width <= 0 || t.height <= 0) return 0;
  const n = Math.abs(t.width), o = Math.abs(t.height);
  return n * o;
}
const un = {
  onTouchStart(t, e) {
    return Je(t, e);
  },
  onTouchEnd(t, e) {
    return Ze(t);
  },
  onTouchMove(t, e) {
    return Qe(t, e);
  },
  onMouseDown(t, e) {
    return Je(t, e);
  },
  onMouseUp(t, e) {
    return Ze(t);
  },
  onMouseMove(t, e) {
    return Qe(t, e);
  }
};
function Je(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: o
    } = ie(e);
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
function Ze(t, e) {
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
function Qe(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: o
    } = t.selection, {
      x: r,
      y: s
    } = ie(e), c = r - n, i = s - o;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: rt,
        x: c > 0 ? n : r,
        y: i > 0 ? o : s,
        width: Math.abs(c),
        height: Math.abs(i)
      }
    };
  }
  return t;
}
const ce = {
  TYPE: rt,
  intersects: cn,
  area: ln,
  methods: un
}, Ke = 6, dn = (t = {
  width: 100,
  height: 100
}) => ({
  marginX: Ke / t.width * 100,
  marginY: Ke / t.height * 100
}), st = "POINT";
function fn({
  x: t,
  y: e
}, n, o) {
  if (!n) return !1;
  const {
    marginX: r,
    marginY: s
  } = dn(o), c = Math.min(r, s) / 2, i = Math.abs(t - n.x), u = Math.abs(e - n.y);
  return i <= c && u <= c;
}
function hn(t, e) {
  return 0;
}
const pn = {
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
        ...ie(e),
        width: 0,
        height: 0,
        type: st
      }
    };
  }
}, pe = {
  TYPE: st,
  intersects: fn,
  area: hn,
  methods: pn
}, ye = (t) => Math.pow(t, 2), je = "OVAL";
function gn({
  x: t,
  y: e
}, n, o) {
  if (!n || !n.width || !n.height) return !1;
  const r = Math.abs(n.width), s = Math.abs(n.height), c = {
    x: n.x + r / 2,
    y: n.y + s / 2
  }, i = r / 2, u = s / 2;
  if (i === 0 || u === 0) return !1;
  const f = t - c.x, h = e - c.y;
  return ye(f) / ye(i) + ye(h) / ye(u) <= 1;
}
function mn(t, e) {
  if (!t || !t.width || !t.height) return 0;
  const n = Math.abs(t.width), o = Math.abs(t.height);
  return n <= 0 || o <= 0 ? 0 : Math.PI * (n / 2) * (o / 2);
}
const xn = {
  onTouchStart(t, e) {
    return vn(t, e);
  },
  onTouchEnd(t, e) {
    return bn(t);
  },
  onTouchMove(t, e) {
    return yn(t, e);
  },
  onMouseDown(t, e) {
    if (!t.geometry) {
      const {
        x: n,
        y: o
      } = ie(e);
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
      } = ie(e);
      return {
        ...t,
        geometry: {
          ...t.geometry,
          type: je,
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
function vn(t, e) {
  if (t.selection)
    return {};
  {
    const {
      x: n,
      y: o
    } = ie(e);
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
function bn(t, e) {
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
function yn(t, e) {
  if (t.selection && t.selection.mode === "SELECTING") {
    const {
      anchorX: n,
      anchorY: o
    } = t.selection, {
      x: r,
      y: s
    } = ie(e), c = r - n, i = s - o;
    return {
      ...t,
      geometry: {
        ...t.geometry,
        type: je,
        x: c > 0 ? n : r,
        y: i > 0 ? o : s,
        width: Math.abs(c),
        height: Math.abs(i)
      }
    };
  }
  return t;
}
const we = {
  TYPE: je,
  intersects: gn,
  area: mn,
  methods: xn
}, et = {
  // Basic settings
  disableAnnotation: !1,
  disableSelector: !1,
  disableEditor: !1,
  disableOverlay: !1,
  allowTouch: !1,
  // Selectors configuration
  type: ce.TYPE,
  selectors: [ce, pe, we],
  // Comparator for active annotations
  activeAnnotationComparator: (t, e) => t === e,
  // Editing functionality defaults
  enableEditing: !1,
  onAnnotationsChange: () => {
    process.env.NODE_ENV !== "production" && console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.");
  },
  // Render functions with improved typing
  renderSelector: ({
    annotation: t
  }) => {
    var e;
    switch ((e = t.geometry) == null ? void 0 : e.type) {
      case ce.TYPE:
        return /* @__PURE__ */ x.jsx(nt, { annotation: t });
      case pe.TYPE:
        return /* @__PURE__ */ x.jsx(Ne, { annotation: t });
      case we.TYPE:
        return /* @__PURE__ */ x.jsx(Te, { annotation: t });
      default:
        return null;
    }
  },
  renderEditor: ({
    annotation: t,
    onChange: e,
    onSubmit: n
  }) => /* @__PURE__ */ x.jsx(zt, { annotation: t, onChange: e, onSubmit: n }),
  renderHighlight: ({
    key: t,
    annotation: e,
    active: n
  }) => {
    switch (e.geometry.type) {
      case ce.TYPE:
        return /* @__PURE__ */ x.jsx(Ee, { annotation: e, active: n }, t);
      case pe.TYPE:
        return /* @__PURE__ */ x.jsx(Ne, { annotation: e }, t);
      case we.TYPE:
        return /* @__PURE__ */ x.jsx(Te, { annotation: e, active: n }, t);
      default:
        return null;
    }
  },
  renderContent: ({
    key: t,
    annotation: e
  }) => /* @__PURE__ */ x.jsx(ot, { annotation: e }, t),
  renderOverlay: ({
    type: t,
    annotation: e
  } = {}) => {
    switch (t) {
      case pe.TYPE:
        return /* @__PURE__ */ x.jsx(Pe, { children: "Click to Annotate" });
      default:
        return /* @__PURE__ */ x.jsx(Pe, { children: "Click and Drag to Annotate" });
    }
  },
  renderDraggableHighlight: ({
    key: t,
    annotation: e,
    active: n,
    isDragging: o,
    isHovered: r,
    onDotDragStart: s,
    onDotDrag: c,
    onMoveStart: i,
    onMove: u,
    onDragEnd: f,
    enableRemoval: h,
    onRemoveAnnotation: l,
    onConfirm: p,
    onReset: g
  }) => {
    var m;
    if (!((m = e.data) != null && m.id) || !r)
      switch (e.geometry.type) {
        case ce.TYPE:
          return /* @__PURE__ */ x.jsx(Ee, { annotation: e, active: n }, t);
        case pe.TYPE:
          return /* @__PURE__ */ x.jsx(Ne, { annotation: e }, t);
        case we.TYPE:
          return /* @__PURE__ */ x.jsx(Te, { annotation: e, active: n }, t);
        default:
          return null;
      }
    return e.geometry.type === ce.TYPE ? /* @__PURE__ */ x.jsx(sn, { annotation: e, onDotDragStart: s, onDotDrag: c, onMoveStart: i, onMove: u, onDragEnd: f, isDragging: o, enableRemoval: h, onRemoveAnnotation: l, onConfirm: p, onReset: g }, t) : /* @__PURE__ */ x.jsx(Ee, { annotation: e, active: n }, t);
  }
}, wn = I.div`
  clear: both;
  position: relative;
  width: 100%;
  
  &:hover ${Pe} {
    opacity: 1;
  }
  
  touch-action: ${(t) => t.$allowTouch ? "pinch-zoom" : "auto"};
`, En = I.img`
  display: block;
  width: 100%;
  user-select: none;
`, Tn = I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`, Rn = I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`, Sn = (t) => {
  var Le, Xe, He;
  const e = xt(() => ({
    ...et,
    ...t,
    // Handle selectors explicitly to avoid override issues
    selectors: t.selectors ?? et.selectors
  }), [t]), {
    // Basic props
    src: n,
    alt: o = "Annotation Image",
    style: r,
    className: s,
    containerRef: c,
    children: i,
    // Core functionality
    annotations: u,
    type: f,
    selectors: h,
    value: l,
    onChange: p,
    onSubmit: g,
    // Active annotation handling
    activeAnnotationComparator: m,
    activeAnnotations: b,
    // Feature toggles
    disableAnnotation: w,
    disableSelector: P,
    disableEditor: q,
    disableOverlay: Z,
    allowTouch: j,
    // Render props
    renderSelector: z,
    renderEditor: R,
    renderHighlight: X,
    renderContent: E,
    renderOverlay: S,
    // Editing functionality
    enableEditing: A,
    onAnnotationsChange: C,
    renderDraggableHighlight: F,
    // Interaction handlers
    enableRemoval: G,
    onRemoveAnnotation: W,
    onConfirm: Y,
    onReset: $,
    // Event handlers
    onImageMouseUp: M,
    onImageMouseDown: y,
    onImageMouseMove: H,
    onImageClick: a
  } = e, v = ee(null), D = ee(null), {
    mousePosition: O,
    handlers: L,
    setRef: U
  } = Dt(), {
    isHoveringOver: re,
    setRef: K
  } = $t(), _ = f || ((Le = h[0]) == null ? void 0 : Le.TYPE), {
    callSelectorMethod: N
  } = Nt({
    selectors: h,
    effectiveType: _,
    value: l,
    onChange: p,
    disableAnnotation: w
  }), {
    getTopAnnotationAt: te
  } = Pt({
    annotations: u,
    selectors: h,
    imageRef: v,
    enableEditing: A
  }), B = !!(Y && $), k = A ? _t(u, C || (() => {
  }), B) : null, Q = ee(null), [le, se] = oe(null), ae = ee(0), ue = (k == null ? void 0 : k.displayAnnotations) || u, {
    x: ne,
    y: it
  } = O, Ye = T((d) => {
    navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && j && d.preventDefault(), N("onTouchStart", d);
  }, [j, N]), _e = T((d) => {
    N("onTouchEnd", d);
  }, [N]), Oe = T((d) => {
    L.onTouchMove(d), navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && j && d.preventDefault(), N("onTouchMove", d);
  }, [L, j, N]), Me = T((d) => {
    L.onTouchLeave(d);
  }, [L]);
  ge(() => {
    const d = D.current;
    if (!(!j || !d))
      return d.ontouchstart = Ye, d.ontouchend = _e, d.ontouchmove = Oe, d.ontouchcancel = Me, () => {
        d && (d.ontouchstart = null, d.ontouchend = null, d.ontouchmove = null, d.ontouchcancel = null);
      };
  }, [j, Ye, _e, Oe, Me]);
  const at = T((d) => {
    v.current = d, U(d);
  }, [U]), ct = T((d) => {
    K(d), c && (typeof c == "function" ? c(d) : c.current = d);
  }, [K, c]), lt = T((d) => {
    L.onMouseMove(d.nativeEvent), H == null || H(d), N("onMouseMove", d);
  }, [L, H, N]), ut = T((d) => {
    L.onMouseLeave(d.nativeEvent);
  }, [L]), dt = T((d) => {
    M == null || M(d), N("onMouseUp", d);
  }, [M, N]), ft = T((d) => {
    y == null || y(d), N("onMouseDown", d);
  }, [y, N]), ht = T((d) => {
    a == null || a(d), N("onClick", d);
  }, [a, N]), pt = T(() => {
    g && l && g(l);
  }, [g, l]), De = T((d) => {
    var J;
    d.key === "Escape" && p && ((J = l == null ? void 0 : l.selection) != null && J.showEditor || l != null && l.geometry) && p({
      selection: void 0,
      geometry: void 0,
      data: void 0
    });
  }, [l, p]);
  ge(() => {
    var d;
    if ((d = l == null ? void 0 : l.selection) != null && d.showEditor)
      return window.addEventListener("keydown", De), () => window.removeEventListener("keydown", De);
  }, [(Xe = l == null ? void 0 : l.selection) == null ? void 0 : Xe.showEditor, De]), ge(() => () => {
    Q.current && clearTimeout(Q.current);
  }, []);
  const Ie = T((d, J) => b && b.some((de) => m ? m(d, de) : d.data.id === de) || J === d, [b, m]), Se = te(ne, it);
  console.log("topAnnotationAtMouse", Se);
  const gt = T((d) => {
    ae.current = Date.now() + 50, se(null), k ? k.handleConfirm(d) : Y == null || Y(d);
  }, [k, Y]), mt = T((d) => {
    ae.current = Date.now() + 50, se(null), k ? k.handleReset(d) : $ == null || $(d);
  }, [k, $]);
  return /* @__PURE__ */ x.jsxs(wn, { ref: ct, style: r, className: s, onMouseLeave: ut, onTouchCancel: Me, onMouseMove: lt, $allowTouch: j, children: [
    /* @__PURE__ */ x.jsx(En, { ref: at, src: n, alt: o, draggable: !1 }),
    /* @__PURE__ */ x.jsxs(Tn, { children: [
      ue.map((d) => {
        var Ae;
        if (!((Ae = d.data) != null && Ae.id))
          return console.warn("Annotation missing data.id:", d), null;
        const J = Ie(d, Se);
        if (A && k && !k.isDragging) {
          const Ce = Date.now() < ae.current;
          J && le !== d.data.id && !Ce ? (Q.current && (clearTimeout(Q.current), Q.current = null), se(d.data.id), k.setDraggingId(d.data.id)) : !J && le === d.data.id && (Q.current && clearTimeout(Q.current), Q.current = setTimeout(() => {
            se(null), k.setDraggingId(null), Q.current = null;
          }, 100));
        }
        if (A && F && k) {
          const de = k.draggingId === d.data.id, Ce = k.isDragging && k.draggingId === d.data.id;
          return B && (k.editingAnnotationId, d.data.id), F({
            key: d.data.id,
            annotation: d,
            active: J,
            isDragging: Ce,
            isHovered: de,
            onDotDragStart: k.handleDotDragStart,
            onDotDrag: k.handleDotDrag,
            onMoveStart: k.handleMoveStart,
            onMove: k.handleMove,
            onDragEnd: k.handleMouseUp,
            enableRemoval: G,
            onRemoveAnnotation: W,
            onConfirm: B ? gt : Y,
            onReset: B ? mt : $
          });
        }
        return X ? X({
          key: d.data.id,
          annotation: d,
          active: J
        }) : null;
      }),
      !P && (l == null ? void 0 : l.geometry) && z && z({
        annotation: l
      })
    ] }),
    /* @__PURE__ */ x.jsx(Rn, { ref: D, "data-testid": "annotation-target", onClick: ht, onMouseUp: dt, onMouseDown: ft }),
    !Z && S && S({
      type: _,
      annotation: l
    }),
    ue.map((d) => {
      var J;
      return (J = d.data) != null && J.id && Ie(d, Se) && E != null ? E({
        key: d.data.id,
        annotation: d
      }) : null;
    }),
    !q && ((He = l == null ? void 0 : l.selection) == null ? void 0 : He.showEditor) && R && p && R({
      annotation: l,
      onChange: p,
      onSubmit: pt
    }),
    i
  ] });
};
export {
  Sn as Annotation,
  Qt as ConfirmResetButtons,
  Jt as DeleteButton,
  sn as DraggableBox,
  be as DraggableDot,
  tn as MoveButton,
  we as OvalSelector,
  pe as PointSelector,
  ce as RectangleSelector,
  Sn as default,
  Pt as useAnnotationHitDetection,
  $t as useMouseHover,
  Dt as useRelativeMousePosition,
  Nt as useSelectorMethods
};
