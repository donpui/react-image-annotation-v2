(function(A,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],m):(A=typeof globalThis<"u"?globalThis:A||self,m(A.ReactImageAnnotation={},A.React,A.styled))})(this,function(A,m,N){"use strict";var re={exports:{}},K={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function We(){if(ve)return K;ve=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(o,s,c){var l=null;if(c!==void 0&&(l=""+c),s.key!==void 0&&(l=""+s.key),"key"in s){c={};for(var i in s)i!=="key"&&(c[i]=s[i])}else c=s;return s=c.ref,{$$typeof:t,type:o,key:l,ref:s!==void 0?s:null,props:c}}return K.Fragment=e,K.jsx=n,K.jsxs=n,K}var $={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function Je(){return Ee||(Ee=1,process.env.NODE_ENV!=="production"&&function(){function t(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===Z?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case R:return"Profiler";case p:return"StrictMode";case T:return"Suspense";case C:return"SuspenseList";case J:return"Activity"}if(typeof r=="object")switch(typeof r.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case b:return"Portal";case O:return(r.displayName||"Context")+".Provider";case P:return(r._context.displayName||"Context")+".Consumer";case _:var h=r.render;return r=r.displayName,r||(r=h.displayName||h.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case S:return h=r.displayName||null,h!==null?h:t(r.type)||"Memo";case U:h=r._payload,r=r._init;try{return t(r(h))}catch{}}return null}function e(r){return""+r}function n(r){try{e(r);var h=!1}catch{h=!0}if(h){h=console;var w=h.error,M=typeof Symbol=="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object";return w.call(h,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",M),e(r)}}function o(r){if(r===x)return"<>";if(typeof r=="object"&&r!==null&&r.$$typeof===U)return"<...>";try{var h=t(r);return h?"<"+h+">":"<...>"}catch{return"<...>"}}function s(){var r=Y.A;return r===null?null:r.getOwner()}function c(){return Error("react-stack-top-frame")}function l(r){if(G.call(r,"key")){var h=Object.getOwnPropertyDescriptor(r,"key").get;if(h&&h.isReactWarning)return!1}return r.key!==void 0}function i(r,h){function w(){V||(V=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",h))}w.isReactWarning=!0,Object.defineProperty(r,"key",{get:w,configurable:!0})}function a(){var r=t(this.type);return te[r]||(te[r]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),r=this.props.ref,r!==void 0?r:null}function f(r,h,w,M,L,j,W,ne){return w=j.ref,r={$$typeof:d,type:r,key:h,props:j,_owner:L},(w!==void 0?w:null)!==null?Object.defineProperty(r,"ref",{enumerable:!1,get:a}):Object.defineProperty(r,"ref",{enumerable:!1,value:null}),r._store={},Object.defineProperty(r._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(r,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(r,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:W}),Object.defineProperty(r,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ne}),Object.freeze&&(Object.freeze(r.props),Object.freeze(r)),r}function g(r,h,w,M,L,j,W,ne){var k=h.children;if(k!==void 0)if(M)if(X(k)){for(M=0;M<k.length;M++)E(k[M]);Object.freeze&&Object.freeze(k)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else E(k);if(G.call(h,"key")){k=t(r);var F=Object.keys(h).filter(function(ge){return ge!=="key"});M=0<F.length?"{key: someKey, "+F.join(": ..., ")+": ...}":"{key: someKey}",I[k+M]||(F=0<F.length?"{"+F.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,M,k,F,k),I[k+M]=!0)}if(k=null,w!==void 0&&(n(w),k=""+w),l(h)&&(n(h.key),k=""+h.key),"key"in h){w={};for(var oe in h)oe!=="key"&&(w[oe]=h[oe])}else w=h;return k&&i(w,typeof r=="function"?r.displayName||r.name||"Unknown":r),f(r,k,j,L,s(),w,W,ne)}function E(r){typeof r=="object"&&r!==null&&r.$$typeof===d&&r._store&&(r._store.validated=1)}var y=m,d=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),Z=Symbol.for("react.client.reference"),Y=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=Object.prototype.hasOwnProperty,X=Array.isArray,z=console.createTask?console.createTask:function(){return null};y={"react-stack-bottom-frame":function(r){return r()}};var V,te={},Q=y["react-stack-bottom-frame"].bind(y,c)(),le=z(o(c)),I={};$.Fragment=x,$.jsx=function(r,h,w,M,L){var j=1e4>Y.recentlyCreatedOwnerStacks++;return g(r,h,w,!1,M,L,j?Error("react-stack-top-frame"):Q,j?z(o(r)):le)},$.jsxs=function(r,h,w,M,L){var j=1e4>Y.recentlyCreatedOwnerStacks++;return g(r,h,w,!0,M,L,j?Error("react-stack-top-frame"):Q,j?z(o(r)):le)}}()),$}var ye;function Ze(){return ye||(ye=1,process.env.NODE_ENV==="production"?re.exports=We():re.exports=Je()),re.exports}var v=Ze(),se={exports:{}},ue={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function Qe(){if(Te)return ue;Te=1;var t=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return ue.c=function(e){return t.H.useMemoCache(e)},ue}var fe={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re;function Ke(){return Re||(Re=1,process.env.NODE_ENV!=="production"&&function(){var t=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;fe.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),fe}var we;function $e(){return we||(we=1,process.env.NODE_ENV==="production"?se.exports=Qe():se.exports=Ke()),se.exports}var D=$e();const Ce=(t,e)=>{const n=e||t.currentTarget;if(!n||typeof n.getBoundingClientRect!="function")return{x:0,y:0};const o=n.getBoundingClientRect(),s=t.clientX-o.x,c=t.clientY-o.y;return{x:s/o.width*100,y:c/o.height*100}},Me=(t,e,n)=>Math.max(t,Math.min(e,n)),qe=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),o=e.pageX-n.left,s=e.pageY-(n.top+window.scrollY);return{x:Me(0,100,o/n.width*100),y:Me(0,100,s/n.height*100)}},B=(t,e)=>et(t)?tt(t)?(nt(t)&&t.preventDefault(),qe(t)):{x:null}:Ce(t,e),et=t=>t.targetTouches!==void 0,tt=t=>t.targetTouches.length===1,nt=t=>t.type==="touchmove";function Se(t,e={}){const{onPositionChange:n,throttleMs:o=16}=e,s=m.useRef({x:null,y:null}),[c,l]=m.useState({x:null,y:null}),i=m.useRef(0),a=m.useRef(null),f=m.useCallback(x=>{if(s.current=x,n){const p=Date.now();o<=0||p-i.current>=o?(l(x),n(x),i.current=p):(a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{l(x),n(x),i.current=Date.now()},o-(p-i.current)))}},[n,o]),g=m.useCallback(x=>{try{const p=t.current;if(!p){f({x:null,y:null});return}const R=Ce(x,p);f(R)}catch{f({x:null,y:null})}},[t,f]),E=m.useCallback(x=>{const p=t.current;if(!p||x.targetTouches.length!==1)return;const R=x.targetTouches[0],P=p.offsetParent;if(P)try{const O=R.pageX-P.offsetLeft,_=R.pageY-P.offsetTop,T=p,C=T.width,S=T.height;C>0&&S>0?f({x:O/C*100,y:_/S*100}):f({x:null,y:null})}catch{f({x:null,y:null})}},[t,f]),y=m.useCallback(x=>{f({x:null,y:null})},[f]),d=m.useCallback(x=>{f({x:null,y:null})},[f]),b=m.useCallback(()=>s.current,[]);return m.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),{mousePosition:n?c:s.current,handlers:{onMouseMove:g,onMouseLeave:y,onTouchMove:E,onTouchLeave:d},getCurrentMousePosition:b}}function ke(t){const e=D.c(12),{annotations:n,selectors:o,imageRef:s,enableEditing:c}=t;let l,i;e[0]!==o?(i=new Map(o.map(rt)),e[0]=o,e[1]=i):i=e[1],l=i;const a=l;let f;e[2]!==a?(f=b=>{if(b)return a.get(b)},e[2]=a,e[3]=f):f=e[3];const g=f;let E;e[4]!==n||e[5]!==c||e[6]!==g||e[7]!==s?(E=(b,x)=>{const p=s.current;if(!p||b===null||x===null)return;const R={x:b,y:x},P=n.map(_=>{const{geometry:T}=_;if(!T)return null;const C=g(T.type);if(!C)return null;let S=T;return c&&T.type==="RECTANGLE"&&typeof T.x=="number"&&typeof T.y=="number"&&typeof T.width=="number"&&typeof T.height=="number"&&(S={...T,x:Math.max(0,T.x-2),y:Math.max(0,T.y-2),width:Math.min(100-T.x+2,T.width+4),height:Math.min(100-T.y+2,T.height+4)}),C.intersects(R,S,p)?_:null}).filter(ot);return P.length===0?void 0:P.sort((_,T)=>{const C=g(_.geometry.type),S=g(T.geometry.type);return!C||!S?0:C.area(_.geometry,p)-S.area(T.geometry,p)})[0]},e[4]=n,e[5]=c,e[6]=g,e[7]=s,e[8]=E):E=e[8];const y=E;let d;return e[9]!==g||e[10]!==y?(d={getTopAnnotationAt:y,getSelectorByType:g},e[9]=g,e[10]=y,e[11]=d):d=e[11],d}function ot(t){return t!==null}function rt(t){return[t.TYPE,t]}function st(t){const e=D.c(17),{targetRef:n,imageRef:o,annotations:s,selectors:c,enableEditing:l,throttleMs:i}=t,a=i===void 0?50:i,[f,g]=m.useState(void 0),E=m.useRef(void 0),y=m.useRef(void 0);let d;e[0]!==s||e[1]!==l||e[2]!==o||e[3]!==c?(d={annotations:s,selectors:c,imageRef:o,enableEditing:l},e[0]=s,e[1]=l,e[2]=o,e[3]=c,e[4]=d):d=e[4];const{getTopAnnotationAt:b}=ke(d);let x;e[5]!==b?(x=U=>{var X;const{x:J,y:Z}=U,Y=b(J,Z),G=(X=Y==null?void 0:Y.data)==null?void 0:X.id;G!==y.current&&(y.current=G,E.current=Y,g(Y))},e[5]=b,e[6]=x):x=e[6];const p=x;let R;e[7]!==p||e[8]!==a?(R={onPositionChange:p,throttleMs:a},e[7]=p,e[8]=a,e[9]=R):R=e[9];const{handlers:P}=Se(n,R);let O;e[10]===Symbol.for("react.memo_cache_sentinel")?(O=()=>{g(void 0),E.current=void 0,y.current=void 0},e[10]=O):O=e[10];let _;e[11]!==s||e[12]!==c?(_=[s,c],e[11]=s,e[12]=c,e[13]=_):_=e[13],m.useEffect(O,_);let T;T=P;const C=T;let S;return e[14]!==f||e[15]!==C?(S={hoveredAnnotation:f,mouseHandlers:C},e[14]=f,e[15]=C,e[16]=S):S=e[16],S}function _e({selectors:t,effectiveType:e,value:n,onChange:o,disableAnnotation:s}){const c=m.useCallback(i=>{if(i)return t.find(a=>a.TYPE===i)},[t]);return{callSelectorMethod:m.useCallback((i,a)=>{if(s)return;const f=c(e);if(!(f!=null&&f.methods[i]))return;const g=f.methods[i];try{const E=g(n||{},a);if(typeof E>"u"){process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(i)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);return}o==null||o(E)}catch(E){process.env.NODE_ENV!=="production"&&console.error(`Error calling selector method ${String(i)}:`,E)}},[s,c,e,n,o]),getSelectorByType:c}}const de=N.div`
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
`,ct=N.div`
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
`;function Ae(t){const e=D.c(3),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.y}%`,s=`${n.x}%`;let c;return e[0]!==o||e[1]!==s?(c=v.jsx(ct,{style:{top:o,left:s}}),e[0]=o,e[1]=s,e[2]=c):c=e[2],c}const it=N.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,at=N.div`
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
`,lt=t=>{const e=D.c(11),{onChange:n,onSubmit:o,onFocus:s,onBlur:c,value:l}=t;let i;e[0]!==c||e[1]!==n||e[2]!==s||e[3]!==l?(i=v.jsx(it,{children:v.jsx("textarea",{placeholder:"Write description",onFocus:s,onBlur:c,onChange:n,value:l})}),e[0]=c,e[1]=n,e[2]=s,e[3]=l,e[4]=i):i=e[4];let a;e[5]!==o||e[6]!==l?(a=l&&v.jsx(at,{onClick:o,children:"Submit"}),e[5]=o,e[6]=l,e[7]=a):a=e[7];let f;return e[8]!==i||e[9]!==a?(f=v.jsxs(m.Fragment,{children:[i,a]}),e[8]=i,e[9]=a,e[10]=f):f=e[10],f},ut=N.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,ft=N.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${ut} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,dt=t=>{var P;const e=D.c(17),{annotation:n,onChange:o,onSubmit:s,className:c,style:l}=t,i=c===void 0?"":c;let a;e[0]!==l?(a=l===void 0?{}:l,e[0]=l,e[1]=a):a=e[1];const f=a,{geometry:g}=n;if(!g)return null;const E=`${g.x}%`,y=`${g.y+g.height}%`;let d;e[2]!==f||e[3]!==E||e[4]!==y?(d={position:"absolute",left:E,top:y,...f},e[2]=f,e[3]=E,e[4]=y,e[5]=d):d=e[5];let b;e[6]!==n||e[7]!==o?(b=O=>o({...n,data:{...n.data,text:O.target.value}}),e[6]=n,e[7]=o,e[8]=b):b=e[8];const x=(P=n.data)==null?void 0:P.text;let p;e[9]!==s||e[10]!==b||e[11]!==x?(p=v.jsx(lt,{onChange:b,onSubmit:s,value:x}),e[9]=s,e[10]=b,e[11]=x,e[12]=p):p=e[12];let R;return e[13]!==i||e[14]!==d||e[15]!==p?(R=v.jsx(ft,{className:i,style:d,children:p}),e[13]=i,e[14]=d,e[15]=p,e[16]=R):R=e[16],R},ce=N.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,ht=N.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Ne(t){const e=D.c(21),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.y}%`;let s;e[0]!==o?(s=v.jsx(ce,{style:{height:o,width:"100%"}}),e[0]=o,e[1]=s):s=e[1];const c=`${n.y}%`,l=`${n.height}%`,i=`${n.x}%`;let a;e[2]!==c||e[3]!==l||e[4]!==i?(a=v.jsx(ce,{style:{top:c,height:l,width:i}}),e[2]=c,e[3]=l,e[4]=i,e[5]=a):a=e[5];const f=`${n.y}%`,g=`${n.x+n.width}%`,E=`${n.height}%`,y=`${100-(n.x+n.width)}%`;let d;e[6]!==f||e[7]!==g||e[8]!==E||e[9]!==y?(d=v.jsx(ce,{style:{top:f,left:g,height:E,width:y}}),e[6]=f,e[7]=g,e[8]=E,e[9]=y,e[10]=d):d=e[10];const b=`${n.y+n.height}%`,x=`${100-(n.y+n.height)}%`;let p;e[11]!==b||e[12]!==x?(p=v.jsx(ce,{style:{top:b,height:x,width:"100%"}}),e[11]=b,e[12]=x,e[13]=p):p=e[13];let R;return e[14]!==t.className||e[15]!==t.style||e[16]!==s||e[17]!==d||e[18]!==p||e[19]!==a?(R=v.jsxs(ht,{className:t.className,style:t.style,children:[s,a,d,p]}),e[14]=t.className,e[15]=t.style,e[16]=s,e[17]=d,e[18]=p,e[19]=a,e[20]=R):R=e[20],R}Ne.defaultProps={className:"",style:{}};const mt=N.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Pe(t){var g;const e=D.c(10),{geometry:n}=t.annotation;if(!n)return null;console.log("Rectangle",(g=t.annotation.data)==null?void 0:g.id,"geometry",n);const o=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,l=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let a;e[0]!==t.style||e[1]!==o||e[2]!==s||e[3]!==c||e[4]!==l||e[5]!==i?(a={position:"absolute",left:o,top:s,height:c,width:l,boxShadow:i,...t.style},e[0]=t.style,e[1]=o,e[2]=s,e[3]=c,e[4]=l,e[5]=i,e[6]=a):a=e[6];let f;return e[7]!==t.className||e[8]!==a?(f=v.jsx(mt,{className:t.className,style:a}),e[7]=t.className,e[8]=a,e[9]=f):f=e[9],f}Pe.defaultProps={className:"",style:{}};const pt=N.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function he(t){const e=D.c(10),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,l=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let a;e[0]!==t.style||e[1]!==o||e[2]!==s||e[3]!==c||e[4]!==l||e[5]!==i?(a={position:"absolute",left:o,top:s,height:c,width:l,boxShadow:i,...t.style},e[0]=t.style,e[1]=o,e[2]=s,e[3]=c,e[4]=l,e[5]=i,e[6]=a):a=e[6];let f;return e[7]!==t.className||e[8]!==a?(f=v.jsx(pt,{className:t.className,style:a}),e[7]=t.className,e[8]=a,e[9]=f):f=e[9],f}he.defaultProps={className:"",style:{}};const gt=N.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Oe(t){const e=D.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const o=`${n.x}%`,s=`${n.y+n.height}%`;let c;e[0]!==t.style||e[1]!==o||e[2]!==s?(c={position:"absolute",left:o,top:s,...t.style},e[0]=t.style,e[1]=o,e[2]=s,e[3]=c):c=e[3];const l=t.annotation.data&&t.annotation.data.text;let i;return e[4]!==t.className||e[5]!==c||e[6]!==l?(i=v.jsx(gt,{style:c,className:t.className,children:l}),e[4]=t.className,e[5]=c,e[6]=l,e[7]=i):i=e[7],i}Oe.defaultProps={style:{},className:""};const je="RECTANGLE";function xt({x:t,y:e},n,o){if(!n)return!1;const s=Math.min(n.x,n.x+n.width),c=Math.max(n.x,n.x+n.width),l=Math.min(n.y,n.y+n.height),i=Math.max(n.y,n.y+n.height);return!(t<s||e<l||t>c||e>i)}function bt(t,e){if(!t||t.width<=0||t.height<=0)return 0;const n=Math.abs(t.width),o=Math.abs(t.height);return n*o}const vt={onTouchStart(t,e){return Ye(t,e)},onTouchEnd(t,e){return Ie(t)},onTouchMove(t,e){return Le(t,e)},onMouseDown(t,e){return Ye(t,e)},onMouseUp(t,e){return Ie(t)},onMouseMove(t,e){return Le(t,e)}};function Ye(t,e){if(t.selection)return{};{const{x:n,y:o}=B(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}}function Ie(t,e){if(t.selection){const{selection:n,geometry:o}=t;if(!o)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Le(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:s,y:c}=B(e),l=s-n,i=c-o;return{...t,geometry:{...t.geometry,type:je,x:l>0?n:s,y:i>0?o:c,width:Math.abs(l),height:Math.abs(i)}}}return t}const q={TYPE:je,intersects:xt,area:bt,methods:vt},De=6,Et=(t={width:100,height:100})=>({marginX:De/t.width*100,marginY:De/t.height*100}),Ge="POINT";function yt({x:t,y:e},n,o){if(!n)return!1;const{marginX:s,marginY:c}=Et(o),l=Math.min(s,c)/2,i=Math.abs(t-n.x),a=Math.abs(e-n.y);return i<=l&&a<=l}function Tt(t,e){return 0}const ee={TYPE:Ge,intersects:yt,area:Tt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...B(e),width:0,height:0,type:Ge}}}}},ie=t=>Math.pow(t,2),me="OVAL";function Rt({x:t,y:e},n,o){if(!n||!n.width||!n.height)return!1;const s=Math.abs(n.width),c=Math.abs(n.height),l={x:n.x+s/2,y:n.y+c/2},i=s/2,a=c/2;if(i===0||a===0)return!1;const f=t-l.x,g=e-l.y;return ie(f)/ie(i)+ie(g)/ie(a)<=1}function wt(t,e){if(!t||!t.width||!t.height)return 0;const n=Math.abs(t.width),o=Math.abs(t.height);return n<=0||o<=0?0:Math.PI*(n/2)*(o/2)}const Ct={onTouchStart(t,e){return Mt(t,e)},onTouchEnd(t,e){return St(t)},onTouchMove(t,e){return kt(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:o}=B(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:s,y:c}=B(e);return{...t,geometry:{...t.geometry,type:me,x:Math.min(n,s),y:Math.min(o,c),width:Math.abs(s-n),height:Math.abs(c-o)}}}return t}};function Mt(t,e){if(t.selection)return{};{const{x:n,y:o}=B(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}}function St(t,e){if(t.selection){const{selection:n,geometry:o}=t;if(!o)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function kt(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:s,y:c}=B(e),l=s-n,i=c-o;return{...t,geometry:{...t.geometry,type:me,x:l>0?n:s,y:i>0?o:c,width:Math.abs(l),height:Math.abs(i)}}}return t}const ae={TYPE:me,intersects:Rt,area:wt,methods:Ct},He={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:q.TYPE,selectors:[q,ee,ae],activeAnnotationComparator:(t,e)=>t===e,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!=="production"&&console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderSelector:({annotation:t})=>{var e;switch((e=t.geometry)==null?void 0:e.type){case q.TYPE:return v.jsx(Ne,{annotation:t});case ee.TYPE:return v.jsx(Ae,{annotation:t});case ae.TYPE:return v.jsx(he,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>v.jsx(dt,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case q.TYPE:return v.jsx(Pe,{annotation:e,active:n},t);case ee.TYPE:return v.jsx(Ae,{annotation:e},t);case ae.TYPE:return v.jsx(he,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>v.jsx(Oe,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case ee.TYPE:return v.jsx(de,{children:"Click to Annotate"});default:return v.jsx(de,{children:"Click and Drag to Annotate"})}}},_t=N.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${de} {
    opacity: 1;
  }

  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,At=N.img`
  display: block;
  width: 100%;
  user-select: none;
`,Nt=N.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,Pt=N.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,pe=m.forwardRef((t,e)=>{var ze,Fe,Be;const n=m.useMemo(()=>({...He,...t,selectors:t.selectors??He.selectors}),[t]),{src:o,alt:s="Annotation Image",style:c,className:l,containerRef:i,imageRef:a,children:f,annotations:g,type:E,selectors:y,value:d,onChange:b,onSubmit:x,activeAnnotationComparator:p,activeAnnotations:R,disableAnnotation:P,disableSelector:O,disableEditor:_,disableOverlay:T,allowTouch:C,renderSelector:S,renderEditor:U,renderHighlight:J,renderContent:Z,renderOverlay:Y,onImageMouseUp:G,onImageMouseDown:X,onImageMouseMove:z,onImageClick:V}=n,te=m.useRef(null),Q=m.useRef(null),{hoveredAnnotation:le,mouseHandlers:I}=st({targetRef:Q,imageRef:te,annotations:g,selectors:y,enableEditing:!_,throttleMs:50}),r=E||((ze=y[0])==null?void 0:ze.TYPE),{callSelectorMethod:h}=_e({selectors:y,effectiveType:r,value:d,onChange:b,disableAnnotation:P}),w=m.useRef(null),M=m.useCallback(u=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&C&&u.preventDefault(),h("onTouchStart",u)},[C,h]),L=m.useCallback(u=>{h("onTouchEnd",u)},[h]),j=m.useCallback(u=>{I.onTouchMove(u),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&C&&u.preventDefault(),h("onTouchMove",u)},[I,C,h]),W=m.useCallback(u=>{I.onTouchLeave(u)},[I]);m.useEffect(()=>{const u=Q.current;if(!(!C||!u))return u.ontouchstart=M,u.ontouchend=L,u.ontouchmove=j,u.ontouchcancel=W,()=>{u&&(u.ontouchstart=null,u.ontouchend=null,u.ontouchmove=null,u.ontouchcancel=null)}},[C,M,L,j,W]);const ne=m.useCallback(u=>{te.current=u,e&&(typeof e=="function"?e(u):e.current=u),a&&(typeof a=="function"?a(u):a.current=u)},[e,a]),k=m.useCallback(u=>{Q.current=u},[]),F=m.useCallback(u=>{i&&(typeof i=="function"?i(u):i.current=u)},[i]),oe=m.useCallback(u=>{I.onMouseMove(u.nativeEvent),z==null||z(u),h("onMouseMove",u)},[I,z,h]),ge=m.useCallback(u=>{I.onMouseLeave(u.nativeEvent)},[I]),Yt=m.useCallback(u=>{G==null||G(u),h("onMouseUp",u)},[G,h]),It=m.useCallback(u=>{X==null||X(u),h("onMouseDown",u)},[X,h]),Lt=m.useCallback(u=>{V==null||V(u),h("onClick",u)},[V,h]),Dt=m.useCallback(()=>{x&&d&&x(d)},[x,d]),xe=m.useCallback(u=>{var H;u.key==="Escape"&&b&&((H=d==null?void 0:d.selection)!=null&&H.showEditor||d!=null&&d.geometry)&&b({selection:void 0,geometry:void 0,data:void 0})},[d,b]);m.useEffect(()=>{var u;if((u=d==null?void 0:d.selection)!=null&&u.showEditor)return window.addEventListener("keydown",xe),()=>window.removeEventListener("keydown",xe)},[(Fe=d==null?void 0:d.selection)==null?void 0:Fe.showEditor,xe]),m.useEffect(()=>()=>{w.current&&clearTimeout(w.current)},[]);const Xe=le,Ue=m.useCallback((u,H)=>R&&R.some(Ve=>p?p(u,Ve):u.data.id===Ve)||H===u,[R,p]);return v.jsxs(_t,{ref:F,style:c,className:l,onMouseLeave:ge,onTouchCancel:W,onMouseMove:oe,$allowTouch:C,children:[v.jsx(At,{ref:ne,src:o,alt:s}),v.jsxs(Nt,{children:[g.map(u=>{var be;if(!((be=u.data)!=null&&be.id))return null;const H=Ue(u,Xe);return J?J({key:u.data.id,annotation:u,active:H}):null}),!O&&(d==null?void 0:d.geometry)&&S&&S({annotation:d})]}),v.jsx(Pt,{ref:k,"data-testid":"annotation-target",onClick:Lt,onMouseUp:Yt,onMouseDown:It}),!T&&Y&&Y({type:r,annotation:d}),g.map(u=>{var H;return(H=u.data)!=null&&H.id&&Ue(u,Xe)&&Z!=null?Z({key:u.data.id,annotation:u}):null}),!_&&((Be=d==null?void 0:d.selection)==null?void 0:Be.showEditor)&&U&&b&&U({annotation:d,onChange:b,onSubmit:Dt}),f]})});pe.displayName="Annotation";function Ot(t,e){if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageX:n,pageY:o}=e,{left:s,right:c,bottom:l,top:i}=t.getBoundingClientRect();return n>s&&n<c&&o>i&&o<l}function jt(){const t=D.c(5),[e,n]=m.useState(!1),o=m.useRef(null);let s,c;t[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{const f=g=>{const E=o.current,y={pageX:g.pageX,pageY:g.pageY},d=Ot(E,y);n(d)};return document.addEventListener("mousemove",f,{passive:!0}),()=>{document.removeEventListener("mousemove",f)}},c=[],t[0]=s,t[1]=c):(s=t[0],c=t[1]),m.useEffect(s,c);let l;t[2]===Symbol.for("react.memo_cache_sentinel")?(l=f=>{o.current=f},t[2]=l):l=t[2];const i=l;let a;return t[3]!==e?(a={isHoveringOver:e,setRef:i},t[3]=e,t[4]=a):a=t[4],a}A.Annotation=pe,A.OvalSelector=ae,A.PointSelector=ee,A.RectangleSelector=q,A.default=pe,A.useAnnotationHitDetection=ke,A.useMouseHover=jt,A.useRelativeMousePosition=Se,A.useSelectorMethods=_e,Object.defineProperties(A,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
