(function(N,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],h):(N=typeof globalThis<"u"?globalThis:N||self,h(N.ReactImageAnnotation={},N.React,N.styled))})(this,function(N,h,O){"use strict";var re={exports:{}},Q={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be;function We(){if(be)return Q;be=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(o,s,c){var a=null;if(c!==void 0&&(a=""+c),s.key!==void 0&&(a=""+s.key),"key"in s){c={};for(var i in s)i!=="key"&&(c[i]=s[i])}else c=s;return s=c.ref,{$$typeof:t,type:o,key:a,ref:s!==void 0?s:null,props:c}}return Q.Fragment=e,Q.jsx=n,Q.jsxs=n,Q}var K={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function Je(){return ve||(ve=1,process.env.NODE_ENV!=="production"&&function(){function t(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===F?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case R:return"Profiler";case p:return"StrictMode";case y:return"Suspense";case _:return"SuspenseList";case W:return"Activity"}if(typeof r=="object")switch(typeof r.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case T:return"Portal";case j:return(r.displayName||"Context")+".Provider";case P:return(r._context.displayName||"Context")+".Consumer";case C:var m=r.render;return r=r.displayName,r||(r=m.displayName||m.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case S:return m=r.displayName||null,m!==null?m:t(r.type)||"Memo";case z:m=r._payload,r=r._init;try{return t(r(m))}catch{}}return null}function e(r){return""+r}function n(r){try{e(r);var m=!1}catch{m=!0}if(m){m=console;var w=m.error,M=typeof Symbol=="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object";return w.call(m,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",M),e(r)}}function o(r){if(r===x)return"<>";if(typeof r=="object"&&r!==null&&r.$$typeof===z)return"<...>";try{var m=t(r);return m?"<"+m+">":"<...>"}catch{return"<...>"}}function s(){var r=Y.A;return r===null?null:r.getOwner()}function c(){return Error("react-stack-top-frame")}function a(r){if(H.call(r,"key")){var m=Object.getOwnPropertyDescriptor(r,"key").get;if(m&&m.isReactWarning)return!1}return r.key!==void 0}function i(r,m){function w(){Z||(Z=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",m))}w.isReactWarning=!0,Object.defineProperty(r,"key",{get:w,configurable:!0})}function l(){var r=t(this.type);return le[r]||(le[r]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),r=this.props.ref,r!==void 0?r:null}function f(r,m,w,M,I,L,te,ne){return w=L.ref,r={$$typeof:b,type:r,key:m,props:L,_owner:I},(w!==void 0?w:null)!==null?Object.defineProperty(r,"ref",{enumerable:!1,get:l}):Object.defineProperty(r,"ref",{enumerable:!1,value:null}),r._store={},Object.defineProperty(r._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(r,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(r,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:te}),Object.defineProperty(r,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ne}),Object.freeze&&(Object.freeze(r.props),Object.freeze(r)),r}function g(r,m,w,M,I,L,te,ne){var k=m.children;if(k!==void 0)if(M)if(U(k)){for(M=0;M<k.length;M++)d(k[M]);Object.freeze&&Object.freeze(k)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else d(k);if(H.call(m,"key")){k=t(r);var B=Object.keys(m).filter(function(pe){return pe!=="key"});M=0<B.length?"{key: someKey, "+B.join(": ..., ")+": ...}":"{key: someKey}",A[k+M]||(B=0<B.length?"{"+B.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,M,k,B,k),A[k+M]=!0)}if(k=null,w!==void 0&&(n(w),k=""+w),a(m)&&(n(m.key),k=""+m.key),"key"in m){w={};for(var oe in m)oe!=="key"&&(w[oe]=m[oe])}else w=m;return k&&i(w,typeof r=="function"?r.displayName||r.name||"Unknown":r),f(r,k,L,I,s(),w,te,ne)}function d(r){typeof r=="object"&&r!==null&&r.$$typeof===b&&r._store&&(r._store.validated=1)}var v=h,b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),j=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),F=Symbol.for("react.client.reference"),Y=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=Object.prototype.hasOwnProperty,U=Array.isArray,J=console.createTask?console.createTask:function(){return null};v={"react-stack-bottom-frame":function(r){return r()}};var Z,le={},D=v["react-stack-bottom-frame"].bind(v,c)(),ee=J(o(c)),A={};K.Fragment=x,K.jsx=function(r,m,w,M,I){var L=1e4>Y.recentlyCreatedOwnerStacks++;return g(r,m,w,!1,M,I,L?Error("react-stack-top-frame"):D,L?J(o(r)):ee)},K.jsxs=function(r,m,w,M,I){var L=1e4>Y.recentlyCreatedOwnerStacks++;return g(r,m,w,!0,M,I,L?Error("react-stack-top-frame"):D,L?J(o(r)):ee)}}()),K}var Ee;function Ze(){return Ee||(Ee=1,process.env.NODE_ENV==="production"?re.exports=We():re.exports=Je()),re.exports}var E=Ze(),se={exports:{}},ue={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function Qe(){if(ye)return ue;ye=1;var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return ue.c=function(e){return t.H.useMemoCache(e)},ue}var fe={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function Ke(){return Te||(Te=1,process.env.NODE_ENV!=="production"&&function(){var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;fe.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),fe}var we;function $e(){return we||(we=1,process.env.NODE_ENV==="production"?se.exports=Qe():se.exports=Ke()),se.exports}var G=$e();const Re=(t,e)=>{const n=e||t.currentTarget;if(!n||typeof n.getBoundingClientRect!="function")return{x:0,y:0};const o=n.getBoundingClientRect(),s=t.clientX-o.x,c=t.clientY-o.y;return{x:s/o.width*100,y:c/o.height*100}},Ce=(t,e,n)=>Math.max(t,Math.min(e,n)),qe=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),o=e.pageX-n.left,s=e.pageY-(n.top+window.scrollY);return{x:Ce(0,100,o/n.width*100),y:Ce(0,100,s/n.height*100)}},V=(t,e)=>et(t)?tt(t)?(nt(t)&&t.preventDefault(),qe(t)):{x:null}:Re(t,e),et=t=>t.targetTouches!==void 0,tt=t=>t.targetTouches.length===1,nt=t=>t.type==="touchmove";function Me(t,e={}){const{onPositionChange:n,throttleMs:o=16}=e,s=h.useRef({x:null,y:null}),[c,a]=h.useState({x:null,y:null}),i=h.useRef(0),l=h.useRef(null),f=h.useCallback(x=>{if(s.current=x,n){const p=Date.now();o<=0||p-i.current>=o?(a(x),n(x),i.current=p):(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{a(x),n(x),i.current=Date.now()},o-(p-i.current)))}},[n,o]),g=h.useCallback(x=>{try{const p=t.current;if(!p){f({x:null,y:null});return}const R=Re(x,p);f(R)}catch{f({x:null,y:null})}},[t,f]),d=h.useCallback(x=>{const p=t.current;if(!p||x.targetTouches.length!==1)return;const R=x.targetTouches[0],P=p.offsetParent;if(P)try{const j=R.pageX-P.offsetLeft,C=R.pageY-P.offsetTop,y=p,_=y.width,S=y.height;_>0&&S>0?f({x:j/_*100,y:C/S*100}):f({x:null,y:null})}catch{f({x:null,y:null})}},[t,f]),v=h.useCallback(x=>{f({x:null,y:null})},[f]),b=h.useCallback(x=>{f({x:null,y:null})},[f]),T=h.useCallback(()=>s.current,[]);return h.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]),{mousePosition:n?c:s.current,handlers:{onMouseMove:g,onMouseLeave:v,onTouchMove:d,onTouchLeave:b},getCurrentMousePosition:T}}function Se(t){const e=G.c(12),{annotations:n,selectors:o,imageRef:s,enableEditing:c}=t;let a,i;e[0]!==o?(i=new Map(o.map(rt)),e[0]=o,e[1]=i):i=e[1],a=i;const l=a;let f;e[2]!==l?(f=T=>{if(T)return l.get(T)},e[2]=l,e[3]=f):f=e[3];const g=f;let d;e[4]!==n||e[5]!==c||e[6]!==g||e[7]!==s?(d=(T,x)=>{const p=s.current;if(!p||T===null||x===null)return;const R={x:T,y:x},P=n.map(C=>{const{geometry:y}=C;if(!y)return null;const _=g(y.type);if(!_)return null;let S=y;return c&&y.type==="RECTANGLE"&&typeof y.x=="number"&&typeof y.y=="number"&&typeof y.width=="number"&&typeof y.height=="number"&&(S={...y,x:Math.max(0,y.x-2),y:Math.max(0,y.y-2),width:Math.min(100-y.x+2,y.width+4),height:Math.min(100-y.y+2,y.height+4)}),_.intersects(R,S,p)?C:null}).filter(ot);return P.length===0?void 0:P.sort((C,y)=>{const _=g(C.geometry.type),S=g(y.geometry.type);return!_||!S?0:_.area(C.geometry,p)-S.area(y.geometry,p)})[0]},e[4]=n,e[5]=c,e[6]=g,e[7]=s,e[8]=d):d=e[8];const v=d;let b;return e[9]!==g||e[10]!==v?(b={getTopAnnotationAt:v,getSelectorByType:g},e[9]=g,e[10]=v,e[11]=b):b=e[11],b}function ot(t){return t!==null}function rt(t){return[t.TYPE,t]}function st(t){const e=G.c(17),{targetRef:n,imageRef:o,annotations:s,selectors:c,enableEditing:a,throttleMs:i}=t,l=i===void 0?50:i,[f,g]=h.useState(void 0),d=h.useRef(void 0),v=h.useRef(void 0);let b;e[0]!==s||e[1]!==a||e[2]!==o||e[3]!==c?(b={annotations:s,selectors:c,imageRef:o,enableEditing:a},e[0]=s,e[1]=a,e[2]=o,e[3]=c,e[4]=b):b=e[4];const{getTopAnnotationAt:T}=Se(b);let x;e[5]!==T?(x=z=>{var U;const{x:W,y:F}=z,Y=T(W,F),H=(U=Y==null?void 0:Y.data)==null?void 0:U.id;H!==v.current&&(v.current=H,d.current=Y,g(Y))},e[5]=T,e[6]=x):x=e[6];const p=x;let R;e[7]!==p||e[8]!==l?(R={onPositionChange:p,throttleMs:l},e[7]=p,e[8]=l,e[9]=R):R=e[9];const{handlers:P}=Me(n,R);let j;e[10]===Symbol.for("react.memo_cache_sentinel")?(j=()=>{g(void 0),d.current=void 0,v.current=void 0},e[10]=j):j=e[10];let C;e[11]!==s||e[12]!==c?(C=[s,c],e[11]=s,e[12]=c,e[13]=C):C=e[13],h.useEffect(j,C);let y;y=P;const _=y;let S;return e[14]!==f||e[15]!==_?(S={hoveredAnnotation:f,mouseHandlers:_},e[14]=f,e[15]=_,e[16]=S):S=e[16],S}function ke({selectors:t,effectiveType:e,value:n,onChange:o,disableAnnotation:s}){const c=h.useCallback(i=>{if(i)return t.find(l=>l.TYPE===i)},[t]);return{callSelectorMethod:h.useCallback((i,l)=>{if(s)return;const f=c(e);if(!(f!=null&&f.methods[i]))return;const g=f.methods[i];try{const d=g(n||{},l);if(typeof d>"u"){process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(i)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);return}o==null||o(d)}catch(d){process.env.NODE_ENV!=="production"&&console.error(`Error calling selector method ${String(i)}:`,d)}},[s,c,e,n,o]),getSelectorByType:c}}const de=O.div`
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
`,ct=O.div`
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
`;function _e(t){const e=G.c(3),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.y}%`,s=`${n.x}%`;let c;return e[0]!==o||e[1]!==s?(c=E.jsx(ct,{style:{top:o,left:s}}),e[0]=o,e[1]=s,e[2]=c):c=e[2],c}const it=O.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,at=O.div`
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
`,lt=t=>{const e=G.c(11),{onChange:n,onSubmit:o,onFocus:s,onBlur:c,value:a}=t;let i;e[0]!==c||e[1]!==n||e[2]!==s||e[3]!==a?(i=E.jsx(it,{children:E.jsx("textarea",{placeholder:"Write description",onFocus:s,onBlur:c,onChange:n,value:a})}),e[0]=c,e[1]=n,e[2]=s,e[3]=a,e[4]=i):i=e[4];let l;e[5]!==o||e[6]!==a?(l=a&&E.jsx(at,{onClick:o,children:"Submit"}),e[5]=o,e[6]=a,e[7]=l):l=e[7];let f;return e[8]!==i||e[9]!==l?(f=E.jsxs(h.Fragment,{children:[i,l]}),e[8]=i,e[9]=l,e[10]=f):f=e[10],f},ut=O.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,ft=O.div`
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
`,dt=t=>{var P;const e=G.c(17),{annotation:n,onChange:o,onSubmit:s,className:c,style:a}=t,i=c===void 0?"":c;let l;e[0]!==a?(l=a===void 0?{}:a,e[0]=a,e[1]=l):l=e[1];const f=l,{geometry:g}=n;if(!g)return null;const d=`${g.x}%`,v=`${g.y+g.height}%`;let b;e[2]!==f||e[3]!==d||e[4]!==v?(b={position:"absolute",left:d,top:v,...f},e[2]=f,e[3]=d,e[4]=v,e[5]=b):b=e[5];let T;e[6]!==n||e[7]!==o?(T=j=>o({...n,data:{...n.data,text:j.target.value}}),e[6]=n,e[7]=o,e[8]=T):T=e[8];const x=(P=n.data)==null?void 0:P.text;let p;e[9]!==s||e[10]!==T||e[11]!==x?(p=E.jsx(lt,{onChange:T,onSubmit:s,value:x}),e[9]=s,e[10]=T,e[11]=x,e[12]=p):p=e[12];let R;return e[13]!==i||e[14]!==b||e[15]!==p?(R=E.jsx(ft,{className:i,style:b,children:p}),e[13]=i,e[14]=b,e[15]=p,e[16]=R):R=e[16],R},ce=O.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,ht=O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Ae(t){const e=G.c(21),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.y}%`;let s;e[0]!==o?(s=E.jsx(ce,{style:{height:o,width:"100%"}}),e[0]=o,e[1]=s):s=e[1];const c=`${n.y}%`,a=`${n.height}%`,i=`${n.x}%`;let l;e[2]!==c||e[3]!==a||e[4]!==i?(l=E.jsx(ce,{style:{top:c,height:a,width:i}}),e[2]=c,e[3]=a,e[4]=i,e[5]=l):l=e[5];const f=`${n.y}%`,g=`${n.x+n.width}%`,d=`${n.height}%`,v=`${100-(n.x+n.width)}%`;let b;e[6]!==f||e[7]!==g||e[8]!==d||e[9]!==v?(b=E.jsx(ce,{style:{top:f,left:g,height:d,width:v}}),e[6]=f,e[7]=g,e[8]=d,e[9]=v,e[10]=b):b=e[10];const T=`${n.y+n.height}%`,x=`${100-(n.y+n.height)}%`;let p;e[11]!==T||e[12]!==x?(p=E.jsx(ce,{style:{top:T,height:x,width:"100%"}}),e[11]=T,e[12]=x,e[13]=p):p=e[13];let R;return e[14]!==t.className||e[15]!==t.style||e[16]!==s||e[17]!==b||e[18]!==p||e[19]!==l?(R=E.jsxs(ht,{className:t.className,style:t.style,children:[s,l,b,p]}),e[14]=t.className,e[15]=t.style,e[16]=s,e[17]=b,e[18]=p,e[19]=l,e[20]=R):R=e[20],R}Ae.defaultProps={className:"",style:{}};const mt=O.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Ne(t){const e=G.c(10),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let l;e[0]!==t.style||e[1]!==o||e[2]!==s||e[3]!==c||e[4]!==a||e[5]!==i?(l={position:"absolute",left:o,top:s,height:c,width:a,boxShadow:i,...t.style},e[0]=t.style,e[1]=o,e[2]=s,e[3]=c,e[4]=a,e[5]=i,e[6]=l):l=e[6];let f;return e[7]!==t.className||e[8]!==l?(f=E.jsx(mt,{className:t.className,style:l}),e[7]=t.className,e[8]=l,e[9]=f):f=e[9],f}Ne.defaultProps={className:"",style:{}};const pt=O.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function he(t){const e=G.c(10),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let l;e[0]!==t.style||e[1]!==o||e[2]!==s||e[3]!==c||e[4]!==a||e[5]!==i?(l={position:"absolute",left:o,top:s,height:c,width:a,boxShadow:i,...t.style},e[0]=t.style,e[1]=o,e[2]=s,e[3]=c,e[4]=a,e[5]=i,e[6]=l):l=e[6];let f;return e[7]!==t.className||e[8]!==l?(f=E.jsx(pt,{className:t.className,style:l}),e[7]=t.className,e[8]=l,e[9]=f):f=e[9],f}he.defaultProps={className:"",style:{}};const gt=O.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Pe(t){const e=G.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const o=`${n.x}%`,s=`${n.y+n.height}%`;let c;e[0]!==t.style||e[1]!==o||e[2]!==s?(c={position:"absolute",left:o,top:s,...t.style},e[0]=t.style,e[1]=o,e[2]=s,e[3]=c):c=e[3];const a=t.annotation.data&&t.annotation.data.text;let i;return e[4]!==t.className||e[5]!==c||e[6]!==a?(i=E.jsx(gt,{style:c,className:t.className,children:a}),e[4]=t.className,e[5]=c,e[6]=a,e[7]=i):i=e[7],i}Pe.defaultProps={style:{},className:""};const Oe="RECTANGLE";function xt({x:t,y:e},n,o){if(!n)return!1;const s=Math.min(n.x,n.x+n.width),c=Math.max(n.x,n.x+n.width),a=Math.min(n.y,n.y+n.height),i=Math.max(n.y,n.y+n.height);return!(t<s||e<a||t>c||e>i)}function bt(t,e){if(!t||t.width<=0||t.height<=0)return 0;const n=Math.abs(t.width),o=Math.abs(t.height);return n*o}const vt={onTouchStart(t,e){return je(t,e)},onTouchEnd(t,e){return Ye(t)},onTouchMove(t,e){return Ie(t,e)},onMouseDown(t,e){return je(t,e)},onMouseUp(t,e){return Ye(t)},onMouseMove(t,e){return Ie(t,e)}};function je(t,e){if(t.selection)return{};{const{x:n,y:o}=V(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}}function Ye(t,e){if(t.selection){const{selection:n,geometry:o}=t;if(!o)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Ie(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:s,y:c}=V(e),a=s-n,i=c-o;return{...t,geometry:{...t.geometry,type:Oe,x:a>0?n:s,y:i>0?o:c,width:Math.abs(a),height:Math.abs(i)}}}return t}const $={TYPE:Oe,intersects:xt,area:bt,methods:vt},Le=6,Et=(t={width:100,height:100})=>({marginX:Le/t.width*100,marginY:Le/t.height*100}),De="POINT";function yt({x:t,y:e},n,o){if(!n)return!1;const{marginX:s,marginY:c}=Et(o),a=Math.min(s,c)/2,i=Math.abs(t-n.x),l=Math.abs(e-n.y);return i<=a&&l<=a}function Tt(t,e){return 0}const q={TYPE:De,intersects:yt,area:Tt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...V(e),width:0,height:0,type:De}}}}},ie=t=>Math.pow(t,2),me="OVAL";function wt({x:t,y:e},n,o){if(!n||!n.width||!n.height)return!1;const s=Math.abs(n.width),c=Math.abs(n.height),a={x:n.x+s/2,y:n.y+c/2},i=s/2,l=c/2;if(i===0||l===0)return!1;const f=t-a.x,g=e-a.y;return ie(f)/ie(i)+ie(g)/ie(l)<=1}function Rt(t,e){if(!t||!t.width||!t.height)return 0;const n=Math.abs(t.width),o=Math.abs(t.height);return n<=0||o<=0?0:Math.PI*(n/2)*(o/2)}const Ct={onTouchStart(t,e){return Mt(t,e)},onTouchEnd(t,e){return St(t)},onTouchMove(t,e){return kt(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:o}=V(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:s,y:c}=V(e);return{...t,geometry:{...t.geometry,type:me,x:Math.min(n,s),y:Math.min(o,c),width:Math.abs(s-n),height:Math.abs(c-o)}}}return t}};function Mt(t,e){if(t.selection)return{};{const{x:n,y:o}=V(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}}function St(t,e){if(t.selection){const{selection:n,geometry:o}=t;if(!o)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function kt(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:s,y:c}=V(e),a=s-n,i=c-o;return{...t,geometry:{...t.geometry,type:me,x:a>0?n:s,y:i>0?o:c,width:Math.abs(a),height:Math.abs(i)}}}return t}const ae={TYPE:me,intersects:wt,area:Rt,methods:Ct},Ge={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:$.TYPE,selectors:[$,q,ae],activeAnnotationComparator:(t,e)=>t===e,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!=="production"&&console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderSelector:({annotation:t})=>{var e;switch((e=t.geometry)==null?void 0:e.type){case $.TYPE:return E.jsx(Ae,{annotation:t});case q.TYPE:return E.jsx(_e,{annotation:t});case ae.TYPE:return E.jsx(he,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>E.jsx(dt,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case $.TYPE:return E.jsx(Ne,{annotation:e,active:n},t);case q.TYPE:return E.jsx(_e,{annotation:e},t);case ae.TYPE:return E.jsx(he,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>E.jsx(Pe,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case q.TYPE:return E.jsx(de,{children:"Click to Annotate"});default:return E.jsx(de,{children:"Click and Drag to Annotate"})}}},_t=O.div`
  clear: both;
  position: relative;
  width: 100%;
  
  &:hover ${de} {
    opacity: 1;
  }
  
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,At=O.img`
  display: block;
  width: 100%;
  user-select: none;
`,Nt=O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,Pt=O.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,He=t=>{var ze,Fe,Be;const e=h.useMemo(()=>({...Ge,...t,selectors:t.selectors??Ge.selectors}),[t]),{src:n,alt:o="Annotation Image",style:s,className:c,containerRef:a,children:i,annotations:l,type:f,selectors:g,value:d,onChange:v,onSubmit:b,activeAnnotationComparator:T,activeAnnotations:x,disableAnnotation:p,disableSelector:R,disableEditor:P,disableOverlay:j,allowTouch:C,renderSelector:y,renderEditor:_,renderHighlight:S,renderContent:z,renderOverlay:W,onImageMouseUp:F,onImageMouseDown:Y,onImageMouseMove:H,onImageClick:U}=e,J=h.useRef(null),Z=h.useRef(null),{hoveredAnnotation:le,mouseHandlers:D}=st({targetRef:Z,imageRef:J,annotations:l,selectors:g,enableEditing:!P,throttleMs:50}),ee=f||((ze=g[0])==null?void 0:ze.TYPE),{callSelectorMethod:A}=ke({selectors:g,effectiveType:ee,value:d,onChange:v,disableAnnotation:p}),r=h.useRef(null),m=h.useCallback(u=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&C&&u.preventDefault(),A("onTouchStart",u)},[C,A]),w=h.useCallback(u=>{A("onTouchEnd",u)},[A]),M=h.useCallback(u=>{D.onTouchMove(u),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&C&&u.preventDefault(),A("onTouchMove",u)},[D,C,A]),I=h.useCallback(u=>{D.onTouchLeave(u)},[D]);h.useEffect(()=>{const u=Z.current;if(!(!C||!u))return u.ontouchstart=m,u.ontouchend=w,u.ontouchmove=M,u.ontouchcancel=I,()=>{u&&(u.ontouchstart=null,u.ontouchend=null,u.ontouchmove=null,u.ontouchcancel=null)}},[C,m,w,M,I]);const L=h.useCallback(u=>{J.current=u},[]),te=h.useCallback(u=>{Z.current=u},[]),ne=h.useCallback(u=>{a&&(typeof a=="function"?a(u):a.current=u)},[a]),k=h.useCallback(u=>{D.onMouseMove(u.nativeEvent),H==null||H(u),A("onMouseMove",u)},[D,H,A]),B=h.useCallback(u=>{D.onMouseLeave(u.nativeEvent)},[D]),oe=h.useCallback(u=>{F==null||F(u),A("onMouseUp",u)},[F,A]),pe=h.useCallback(u=>{Y==null||Y(u),A("onMouseDown",u)},[Y,A]),Yt=h.useCallback(u=>{U==null||U(u),A("onClick",u)},[U,A]),It=h.useCallback(()=>{b&&d&&b(d)},[b,d]),ge=h.useCallback(u=>{var X;u.key==="Escape"&&v&&((X=d==null?void 0:d.selection)!=null&&X.showEditor||d!=null&&d.geometry)&&v({selection:void 0,geometry:void 0,data:void 0})},[d,v]);h.useEffect(()=>{var u;if((u=d==null?void 0:d.selection)!=null&&u.showEditor)return window.addEventListener("keydown",ge),()=>window.removeEventListener("keydown",ge)},[(Fe=d==null?void 0:d.selection)==null?void 0:Fe.showEditor,ge]),h.useEffect(()=>()=>{r.current&&clearTimeout(r.current)},[]);const Xe=le,Ue=h.useCallback((u,X)=>x&&x.some(Ve=>T?T(u,Ve):u.data.id===Ve)||X===u,[x,T]);return E.jsxs(_t,{ref:ne,style:s,className:c,onMouseLeave:B,onTouchCancel:I,onMouseMove:k,$allowTouch:C,children:[E.jsx(At,{ref:L,src:n,alt:o}),E.jsxs(Nt,{children:[l.map(u=>{var xe;if(!((xe=u.data)!=null&&xe.id))return null;const X=Ue(u,Xe);return S?S({key:u.data.id,annotation:u,active:X}):null}),!R&&(d==null?void 0:d.geometry)&&y&&y({annotation:d})]}),E.jsx(Pt,{ref:te,"data-testid":"annotation-target",onClick:Yt,onMouseUp:oe,onMouseDown:pe}),!j&&W&&W({type:ee,annotation:d}),l.map(u=>{var X;return(X=u.data)!=null&&X.id&&Ue(u,Xe)&&z!=null?z({key:u.data.id,annotation:u}):null}),!P&&((Be=d==null?void 0:d.selection)==null?void 0:Be.showEditor)&&_&&v&&_({annotation:d,onChange:v,onSubmit:It}),i]})};function Ot(t,e){if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageX:n,pageY:o}=e,{left:s,right:c,bottom:a,top:i}=t.getBoundingClientRect();return n>s&&n<c&&o>i&&o<a}function jt(){const t=G.c(5),[e,n]=h.useState(!1),o=h.useRef(null);let s,c;t[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{const f=g=>{const d=o.current,v={pageX:g.pageX,pageY:g.pageY},b=Ot(d,v);n(b)};return document.addEventListener("mousemove",f,{passive:!0}),()=>{document.removeEventListener("mousemove",f)}},c=[],t[0]=s,t[1]=c):(s=t[0],c=t[1]),h.useEffect(s,c);let a;t[2]===Symbol.for("react.memo_cache_sentinel")?(a=f=>{o.current=f},t[2]=a):a=t[2];const i=a;let l;return t[3]!==e?(l={isHoveringOver:e,setRef:i},t[3]=e,t[4]=l):l=t[4],l}N.Annotation=He,N.OvalSelector=ae,N.PointSelector=q,N.RectangleSelector=$,N.default=He,N.useAnnotationHitDetection=Se,N.useMouseHover=jt,N.useRelativeMousePosition=Me,N.useSelectorMethods=ke,Object.defineProperties(N,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
