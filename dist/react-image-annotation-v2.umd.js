(function(k,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],h):(k=typeof globalThis<"u"?globalThis:k||self,h(k.ReactImageAnnotation={},k.React,k.styled))})(this,function(k,h,P){"use strict";var oe={exports:{}},Z={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be;function We(){if(be)return Z;be=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,s,c){var a=null;if(c!==void 0&&(a=""+c),s.key!==void 0&&(a=""+s.key),"key"in s){c={};for(var i in s)i!=="key"&&(c[i]=s[i])}else c=s;return s=c.ref,{$$typeof:t,type:r,key:a,ref:s!==void 0?s:null,props:c}}return Z.Fragment=e,Z.jsx=n,Z.jsxs=n,Z}var Q={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function Je(){return ve||(ve=1,process.env.NODE_ENV!=="production"&&function(){function t(o){if(o==null)return null;if(typeof o=="function")return o.$$typeof===V?null:o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case x:return"Fragment";case w:return"Profiler";case p:return"StrictMode";case y:return"Suspense";case N:return"SuspenseList";case B:return"Activity"}if(typeof o=="object")switch(typeof o.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),o.$$typeof){case T:return"Portal";case O:return(o.displayName||"Context")+".Provider";case A:return(o._context.displayName||"Context")+".Consumer";case C:var m=o.render;return o=o.displayName,o||(o=m.displayName||m.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case S:return m=o.displayName||null,m!==null?m:t(o.type)||"Memo";case U:m=o._payload,o=o._init;try{return t(o(m))}catch{}}return null}function e(o){return""+o}function n(o){try{e(o);var m=!1}catch{m=!0}if(m){m=console;var R=m.error,M=typeof Symbol=="function"&&Symbol.toStringTag&&o[Symbol.toStringTag]||o.constructor.name||"Object";return R.call(m,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",M),e(o)}}function r(o){if(o===x)return"<>";if(typeof o=="object"&&o!==null&&o.$$typeof===U)return"<...>";try{var m=t(o);return m?"<"+m+">":"<...>"}catch{return"<...>"}}function s(){var o=j.A;return o===null?null:o.getOwner()}function c(){return Error("react-stack-top-frame")}function a(o){if(G.call(o,"key")){var m=Object.getOwnPropertyDescriptor(o,"key").get;if(m&&m.isReactWarning)return!1}return o.key!==void 0}function i(o,m){function R(){J||(J=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",m))}R.isReactWarning=!0,Object.defineProperty(o,"key",{get:R,configurable:!0})}function l(){var o=t(this.type);return ae[o]||(ae[o]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),o=this.props.ref,o!==void 0?o:null}function f(o,m,R,M,D,Y,ee,te){return R=Y.ref,o={$$typeof:b,type:o,key:m,props:Y,_owner:D},(R!==void 0?R:null)!==null?Object.defineProperty(o,"ref",{enumerable:!1,get:l}):Object.defineProperty(o,"ref",{enumerable:!1,value:null}),o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(o,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(o,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:ee}),Object.defineProperty(o,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:te}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o}function g(o,m,R,M,D,Y,ee,te){var _=m.children;if(_!==void 0)if(M)if(X(_)){for(M=0;M<_.length;M++)d(_[M]);Object.freeze&&Object.freeze(_)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else d(_);if(G.call(m,"key")){_=t(o);var z=Object.keys(m).filter(function(pe){return pe!=="key"});M=0<z.length?"{key: someKey, "+z.join(": ..., ")+": ...}":"{key: someKey}",q[_+M]||(z=0<z.length?"{"+z.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,M,_,z,_),q[_+M]=!0)}if(_=null,R!==void 0&&(n(R),_=""+R),a(m)&&(n(m.key),_=""+m.key),"key"in m){R={};for(var ne in m)ne!=="key"&&(R[ne]=m[ne])}else R=m;return _&&i(R,typeof o=="function"?o.displayName||o.name||"Unknown":o),f(o,_,Y,D,s(),R,ee,te)}function d(o){typeof o=="object"&&o!==null&&o.$$typeof===b&&o._store&&(o._store.validated=1)}var v=h,b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),O=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),V=Symbol.for("react.client.reference"),j=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=Object.prototype.hasOwnProperty,X=Array.isArray,W=console.createTask?console.createTask:function(){return null};v={"react-stack-bottom-frame":function(o){return o()}};var J,ae={},I=v["react-stack-bottom-frame"].bind(v,c)(),le=W(r(c)),q={};Q.Fragment=x,Q.jsx=function(o,m,R,M,D){var Y=1e4>j.recentlyCreatedOwnerStacks++;return g(o,m,R,!1,M,D,Y?Error("react-stack-top-frame"):I,Y?W(r(o)):le)},Q.jsxs=function(o,m,R,M,D){var Y=1e4>j.recentlyCreatedOwnerStacks++;return g(o,m,R,!0,M,D,Y?Error("react-stack-top-frame"):I,Y?W(r(o)):le)}}()),Q}var Ee;function Ze(){return Ee||(Ee=1,process.env.NODE_ENV==="production"?oe.exports=We():oe.exports=Je()),oe.exports}var E=Ze(),re={exports:{}},ue={};/**
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
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),fe}var Re;function $e(){return Re||(Re=1,process.env.NODE_ENV==="production"?re.exports=Qe():re.exports=Ke()),re.exports}var L=$e();const we=(t,e)=>{const n=e||t.currentTarget;if(!n||typeof n.getBoundingClientRect!="function")return{x:0,y:0};const r=n.getBoundingClientRect(),s=t.clientX-r.x,c=t.clientY-r.y;return{x:s/r.width*100,y:c/r.height*100}},Ce=(t,e,n)=>Math.max(t,Math.min(e,n)),qe=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),r=e.pageX-n.left,s=e.pageY-(n.top+window.scrollY);return{x:Ce(0,100,r/n.width*100),y:Ce(0,100,s/n.height*100)}},F=(t,e)=>et(t)?tt(t)?(nt(t)&&t.preventDefault(),qe(t)):{x:null}:we(t,e),et=t=>t.targetTouches!==void 0,tt=t=>t.targetTouches.length===1,nt=t=>t.type==="touchmove";function Me(t,e={}){const{onPositionChange:n,throttleMs:r=16}=e,s=h.useRef({x:null,y:null}),[c,a]=h.useState({x:null,y:null}),i=h.useRef(0),l=h.useRef(null),f=h.useCallback(x=>{if(s.current=x,n){const p=Date.now();r<=0||p-i.current>=r?(a(x),n(x),i.current=p):(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{a(x),n(x),i.current=Date.now()},r-(p-i.current)))}},[n,r]),g=h.useCallback(x=>{try{const p=t.current;if(!p){f({x:null,y:null});return}const w=we(x,p);f(w)}catch{f({x:null,y:null})}},[t,f]),d=h.useCallback(x=>{const p=t.current;if(!p||x.targetTouches.length!==1)return;const w=x.targetTouches[0],A=p.offsetParent;if(A)try{const O=w.pageX-A.offsetLeft,C=w.pageY-A.offsetTop,y=p,N=y.width,S=y.height;N>0&&S>0?f({x:O/N*100,y:C/S*100}):f({x:null,y:null})}catch{f({x:null,y:null})}},[t,f]),v=h.useCallback(x=>{f({x:null,y:null})},[f]),b=h.useCallback(x=>{f({x:null,y:null})},[f]),T=h.useCallback(()=>s.current,[]);return h.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]),{mousePosition:n?c:s.current,handlers:{onMouseMove:g,onMouseLeave:v,onTouchMove:d,onTouchLeave:b},getCurrentMousePosition:T}}function Se(t){const e=L.c(12),{annotations:n,selectors:r,imageRef:s,enableEditing:c}=t;let a,i;e[0]!==r?(i=new Map(r.map(rt)),e[0]=r,e[1]=i):i=e[1],a=i;const l=a;let f;e[2]!==l?(f=T=>{if(T)return l.get(T)},e[2]=l,e[3]=f):f=e[3];const g=f;let d;e[4]!==n||e[5]!==c||e[6]!==g||e[7]!==s?(d=(T,x)=>{const p=s.current;if(!p||T===null||x===null)return;const w={x:T,y:x},A=n.map(C=>{const{geometry:y}=C;if(!y)return null;const N=g(y.type);if(!N)return null;let S=y;return c&&y.type==="RECTANGLE"&&typeof y.x=="number"&&typeof y.y=="number"&&typeof y.width=="number"&&typeof y.height=="number"&&(S={...y,x:Math.max(0,y.x-2),y:Math.max(0,y.y-2),width:Math.min(100-y.x+2,y.width+4),height:Math.min(100-y.y+2,y.height+4)}),N.intersects(w,S,p)?C:null}).filter(ot);return A.length===0?void 0:A.sort((C,y)=>{const N=g(C.geometry.type),S=g(y.geometry.type);return!N||!S?0:N.area(C.geometry,p)-S.area(y.geometry,p)})[0]},e[4]=n,e[5]=c,e[6]=g,e[7]=s,e[8]=d):d=e[8];const v=d;let b;return e[9]!==g||e[10]!==v?(b={getTopAnnotationAt:v,getSelectorByType:g},e[9]=g,e[10]=v,e[11]=b):b=e[11],b}function ot(t){return t!==null}function rt(t){return[t.TYPE,t]}function st(t){const e=L.c(17),{targetRef:n,imageRef:r,annotations:s,selectors:c,enableEditing:a,throttleMs:i}=t,l=i===void 0?50:i,[f,g]=h.useState(void 0),d=h.useRef(void 0),v=h.useRef(void 0);let b;e[0]!==s||e[1]!==a||e[2]!==r||e[3]!==c?(b={annotations:s,selectors:c,imageRef:r,enableEditing:a},e[0]=s,e[1]=a,e[2]=r,e[3]=c,e[4]=b):b=e[4];const{getTopAnnotationAt:T}=Se(b);let x;e[5]!==T?(x=U=>{var X;const{x:B,y:V}=U,j=T(B,V),G=(X=j==null?void 0:j.data)==null?void 0:X.id;G!==v.current&&(v.current=G,d.current=j,g(j))},e[5]=T,e[6]=x):x=e[6];const p=x;let w;e[7]!==p||e[8]!==l?(w={onPositionChange:p,throttleMs:l},e[7]=p,e[8]=l,e[9]=w):w=e[9];const{handlers:A}=Me(n,w);let O;e[10]===Symbol.for("react.memo_cache_sentinel")?(O=()=>{g(void 0),d.current=void 0,v.current=void 0},e[10]=O):O=e[10];let C;e[11]!==s||e[12]!==c?(C=[s,c],e[11]=s,e[12]=c,e[13]=C):C=e[13],h.useEffect(O,C);let y;y=A;const N=y;let S;return e[14]!==f||e[15]!==N?(S={hoveredAnnotation:f,mouseHandlers:N},e[14]=f,e[15]=N,e[16]=S):S=e[16],S}function _e({selectors:t,effectiveType:e,value:n,onChange:r,disableAnnotation:s}){const c=h.useCallback(i=>{if(i)return t.find(l=>l.TYPE===i)},[t]);return{callSelectorMethod:h.useCallback((i,l)=>{if(s)return;const f=c(e);if(!(f!=null&&f.methods[i]))return;const g=f.methods[i];try{const d=g(n||{},l);if(typeof d>"u"){process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(i)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);return}r==null||r(d)}catch(d){process.env.NODE_ENV!=="production"&&console.error(`Error calling selector method ${String(i)}:`,d)}},[s,c,e,n,r]),getSelectorByType:c}}function ct(t={}){const{logToConsole:e=!1,componentName:n="Component"}=t,r=h.useRef(0),s=h.useRef();r.current+=1,e&&process.env.NODE_ENV!=="production"&&console.log(`🔄 ${n} rendered ${r.current} times`);const c=a=>{if(process.env.NODE_ENV!=="production"&&e){if(s.current){const i=[];Object.keys(a).forEach(l=>{a[l]!==s.current[l]&&i.push(l)}),i.length>0&&console.log(`📝 ${n} props changed:`,i)}s.current=a}};return{renderCount:r.current,logPropsChange:c}}const de=P.div`
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
`,it=P.div`
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
`;function Ne(t){const e=L.c(3),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`,s=`${n.x}%`;let c;return e[0]!==r||e[1]!==s?(c=E.jsx(it,{style:{top:r,left:s}}),e[0]=r,e[1]=s,e[2]=c):c=e[2],c}const at=P.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,lt=P.div`
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
`,ut=t=>{const e=L.c(11),{onChange:n,onSubmit:r,onFocus:s,onBlur:c,value:a}=t;let i;e[0]!==c||e[1]!==n||e[2]!==s||e[3]!==a?(i=E.jsx(at,{children:E.jsx("textarea",{placeholder:"Write description",onFocus:s,onBlur:c,onChange:n,value:a})}),e[0]=c,e[1]=n,e[2]=s,e[3]=a,e[4]=i):i=e[4];let l;e[5]!==r||e[6]!==a?(l=a&&E.jsx(lt,{onClick:r,children:"Submit"}),e[5]=r,e[6]=a,e[7]=l):l=e[7];let f;return e[8]!==i||e[9]!==l?(f=E.jsxs(h.Fragment,{children:[i,l]}),e[8]=i,e[9]=l,e[10]=f):f=e[10],f},ft=P.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,dt=P.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${ft} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,ht=t=>{var A;const e=L.c(17),{annotation:n,onChange:r,onSubmit:s,className:c,style:a}=t,i=c===void 0?"":c;let l;e[0]!==a?(l=a===void 0?{}:a,e[0]=a,e[1]=l):l=e[1];const f=l,{geometry:g}=n;if(!g)return null;const d=`${g.x}%`,v=`${g.y+g.height}%`;let b;e[2]!==f||e[3]!==d||e[4]!==v?(b={position:"absolute",left:d,top:v,...f},e[2]=f,e[3]=d,e[4]=v,e[5]=b):b=e[5];let T;e[6]!==n||e[7]!==r?(T=O=>r({...n,data:{...n.data,text:O.target.value}}),e[6]=n,e[7]=r,e[8]=T):T=e[8];const x=(A=n.data)==null?void 0:A.text;let p;e[9]!==s||e[10]!==T||e[11]!==x?(p=E.jsx(ut,{onChange:T,onSubmit:s,value:x}),e[9]=s,e[10]=T,e[11]=x,e[12]=p):p=e[12];let w;return e[13]!==i||e[14]!==b||e[15]!==p?(w=E.jsx(dt,{className:i,style:b,children:p}),e[13]=i,e[14]=b,e[15]=p,e[16]=w):w=e[16],w},se=P.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,mt=P.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function ke(t){const e=L.c(21),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`;let s;e[0]!==r?(s=E.jsx(se,{style:{height:r,width:"100%"}}),e[0]=r,e[1]=s):s=e[1];const c=`${n.y}%`,a=`${n.height}%`,i=`${n.x}%`;let l;e[2]!==c||e[3]!==a||e[4]!==i?(l=E.jsx(se,{style:{top:c,height:a,width:i}}),e[2]=c,e[3]=a,e[4]=i,e[5]=l):l=e[5];const f=`${n.y}%`,g=`${n.x+n.width}%`,d=`${n.height}%`,v=`${100-(n.x+n.width)}%`;let b;e[6]!==f||e[7]!==g||e[8]!==d||e[9]!==v?(b=E.jsx(se,{style:{top:f,left:g,height:d,width:v}}),e[6]=f,e[7]=g,e[8]=d,e[9]=v,e[10]=b):b=e[10];const T=`${n.y+n.height}%`,x=`${100-(n.y+n.height)}%`;let p;e[11]!==T||e[12]!==x?(p=E.jsx(se,{style:{top:T,height:x,width:"100%"}}),e[11]=T,e[12]=x,e[13]=p):p=e[13];let w;return e[14]!==t.className||e[15]!==t.style||e[16]!==s||e[17]!==b||e[18]!==p||e[19]!==l?(w=E.jsxs(mt,{className:t.className,style:t.style,children:[s,l,b,p]}),e[14]=t.className,e[15]=t.style,e[16]=s,e[17]=b,e[18]=p,e[19]=l,e[20]=w):w=e[20],w}ke.defaultProps={className:"",style:{}};const pt=P.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Ae(t){const e=L.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let l;e[0]!==t.style||e[1]!==r||e[2]!==s||e[3]!==c||e[4]!==a||e[5]!==i?(l={position:"absolute",left:r,top:s,height:c,width:a,boxShadow:i,...t.style},e[0]=t.style,e[1]=r,e[2]=s,e[3]=c,e[4]=a,e[5]=i,e[6]=l):l=e[6];let f;return e[7]!==t.className||e[8]!==l?(f=E.jsx(pt,{className:t.className,style:l}),e[7]=t.className,e[8]=l,e[9]=f):f=e[9],f}Ae.defaultProps={className:"",style:{}};const gt=P.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function he(t){const e=L.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let l;e[0]!==t.style||e[1]!==r||e[2]!==s||e[3]!==c||e[4]!==a||e[5]!==i?(l={position:"absolute",left:r,top:s,height:c,width:a,boxShadow:i,...t.style},e[0]=t.style,e[1]=r,e[2]=s,e[3]=c,e[4]=a,e[5]=i,e[6]=l):l=e[6];let f;return e[7]!==t.className||e[8]!==l?(f=E.jsx(gt,{className:t.className,style:l}),e[7]=t.className,e[8]=l,e[9]=f):f=e[9],f}he.defaultProps={className:"",style:{}};const xt=P.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Pe(t){const e=L.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const r=`${n.x}%`,s=`${n.y+n.height}%`;let c;e[0]!==t.style||e[1]!==r||e[2]!==s?(c={position:"absolute",left:r,top:s,...t.style},e[0]=t.style,e[1]=r,e[2]=s,e[3]=c):c=e[3];const a=t.annotation.data&&t.annotation.data.text;let i;return e[4]!==t.className||e[5]!==c||e[6]!==a?(i=E.jsx(xt,{style:c,className:t.className,children:a}),e[4]=t.className,e[5]=c,e[6]=a,e[7]=i):i=e[7],i}Pe.defaultProps={style:{},className:""};const Oe="RECTANGLE";function bt({x:t,y:e},n,r){if(!n)return!1;const s=Math.min(n.x,n.x+n.width),c=Math.max(n.x,n.x+n.width),a=Math.min(n.y,n.y+n.height),i=Math.max(n.y,n.y+n.height);return!(t<s||e<a||t>c||e>i)}function vt(t,e){if(!t||t.width<=0||t.height<=0)return 0;const n=Math.abs(t.width),r=Math.abs(t.height);return n*r}const Et={onTouchStart(t,e){return je(t,e)},onTouchEnd(t,e){return Ye(t)},onTouchMove(t,e){return Ie(t,e)},onMouseDown(t,e){return je(t,e)},onMouseUp(t,e){return Ye(t)},onMouseMove(t,e){return Ie(t,e)}};function je(t,e){if(t.selection)return{};{const{x:n,y:r}=F(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function Ye(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Ie(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:s,y:c}=F(e),a=s-n,i=c-r;return{...t,geometry:{...t.geometry,type:Oe,x:a>0?n:s,y:i>0?r:c,width:Math.abs(a),height:Math.abs(i)}}}return t}const K={TYPE:Oe,intersects:bt,area:vt,methods:Et},De=6,yt=(t={width:100,height:100})=>({marginX:De/t.width*100,marginY:De/t.height*100}),Le="POINT";function Tt({x:t,y:e},n,r){if(!n)return!1;const{marginX:s,marginY:c}=yt(r),a=Math.min(s,c)/2,i=Math.abs(t-n.x),l=Math.abs(e-n.y);return i<=a&&l<=a}function Rt(t,e){return 0}const $={TYPE:Le,intersects:Tt,area:Rt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...F(e),width:0,height:0,type:Le}}}}},ce=t=>Math.pow(t,2),me="OVAL";function wt({x:t,y:e},n,r){if(!n||!n.width||!n.height)return!1;const s=Math.abs(n.width),c=Math.abs(n.height),a={x:n.x+s/2,y:n.y+c/2},i=s/2,l=c/2;if(i===0||l===0)return!1;const f=t-a.x,g=e-a.y;return ce(f)/ce(i)+ce(g)/ce(l)<=1}function Ct(t,e){if(!t||!t.width||!t.height)return 0;const n=Math.abs(t.width),r=Math.abs(t.height);return n<=0||r<=0?0:Math.PI*(n/2)*(r/2)}const Mt={onTouchStart(t,e){return St(t,e)},onTouchEnd(t,e){return _t(t)},onTouchMove(t,e){return Nt(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:r}=F(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:s,y:c}=F(e);return{...t,geometry:{...t.geometry,type:me,x:Math.min(n,s),y:Math.min(r,c),width:Math.abs(s-n),height:Math.abs(c-r)}}}return t}};function St(t,e){if(t.selection)return{};{const{x:n,y:r}=F(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function _t(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Nt(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:s,y:c}=F(e),a=s-n,i=c-r;return{...t,geometry:{...t.geometry,type:me,x:a>0?n:s,y:i>0?r:c,width:Math.abs(a),height:Math.abs(i)}}}return t}const ie={TYPE:me,intersects:wt,area:Ct,methods:Mt},Ge={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:K.TYPE,selectors:[K,$,ie],activeAnnotationComparator:(t,e)=>t===e,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!=="production"&&console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderSelector:({annotation:t})=>{var e;switch((e=t.geometry)==null?void 0:e.type){case K.TYPE:return E.jsx(ke,{annotation:t});case $.TYPE:return E.jsx(Ne,{annotation:t});case ie.TYPE:return E.jsx(he,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>E.jsx(ht,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case K.TYPE:return E.jsx(Ae,{annotation:e,active:n},t);case $.TYPE:return E.jsx(Ne,{annotation:e},t);case ie.TYPE:return E.jsx(he,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>E.jsx(Pe,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case $.TYPE:return E.jsx(de,{children:"Click to Annotate"});default:return E.jsx(de,{children:"Click and Drag to Annotate"})}}},kt=P.div`
  clear: both;
  position: relative;
  width: 100%;
  
  &:hover ${de} {
    opacity: 1;
  }
  
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,At=P.img`
  display: block;
  width: 100%;
  user-select: none;
`,Pt=P.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,Ot=P.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,He=t=>{var Ve,ze,Fe;const e=h.useMemo(()=>({...Ge,...t,selectors:t.selectors??Ge.selectors}),[t]),{src:n,alt:r="Annotation Image",style:s,className:c,containerRef:a,children:i,annotations:l,type:f,selectors:g,value:d,onChange:v,onSubmit:b,activeAnnotationComparator:T,activeAnnotations:x,disableAnnotation:p,disableSelector:w,disableEditor:A,disableOverlay:O,allowTouch:C,renderSelector:y,renderEditor:N,renderHighlight:S,renderContent:U,renderOverlay:B,onImageMouseUp:V,onImageMouseDown:j,onImageMouseMove:G,onImageClick:X}=e,W=h.useRef(null),J=h.useRef(null),{hoveredAnnotation:ae,mouseHandlers:I}=st({targetRef:J,imageRef:W,annotations:l,selectors:g,enableEditing:!A,throttleMs:50}),{logPropsChange:le}=ct({logToConsole:!0,componentName:"Annotation"});process.env.NODE_ENV!=="production"&&le(e);const q=f||((Ve=g[0])==null?void 0:Ve.TYPE),{callSelectorMethod:o}=_e({selectors:g,effectiveType:q,value:d,onChange:v,disableAnnotation:p}),m=h.useRef(null),R=h.useCallback(u=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&C&&u.preventDefault(),o("onTouchStart",u)},[C,o]),M=h.useCallback(u=>{o("onTouchEnd",u)},[o]),D=h.useCallback(u=>{I.onTouchMove(u),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&C&&u.preventDefault(),o("onTouchMove",u)},[I,C,o]),Y=h.useCallback(u=>{I.onTouchLeave(u)},[I]);h.useEffect(()=>{const u=J.current;if(!(!C||!u))return u.ontouchstart=R,u.ontouchend=M,u.ontouchmove=D,u.ontouchcancel=Y,()=>{u&&(u.ontouchstart=null,u.ontouchend=null,u.ontouchmove=null,u.ontouchcancel=null)}},[C,R,M,D,Y]);const ee=h.useCallback(u=>{W.current=u},[]),te=h.useCallback(u=>{J.current=u},[]),_=h.useCallback(u=>{a&&(typeof a=="function"?a(u):a.current=u)},[a]),z=h.useCallback(u=>{I.onMouseMove(u.nativeEvent),G==null||G(u),o("onMouseMove",u)},[I,G,o]),ne=h.useCallback(u=>{I.onMouseLeave(u.nativeEvent)},[I]),pe=h.useCallback(u=>{V==null||V(u),o("onMouseUp",u)},[V,o]),It=h.useCallback(u=>{j==null||j(u),o("onMouseDown",u)},[j,o]),Dt=h.useCallback(u=>{X==null||X(u),o("onClick",u)},[X,o]),Lt=h.useCallback(()=>{b&&d&&b(d)},[b,d]),ge=h.useCallback(u=>{var H;u.key==="Escape"&&v&&((H=d==null?void 0:d.selection)!=null&&H.showEditor||d!=null&&d.geometry)&&v({selection:void 0,geometry:void 0,data:void 0})},[d,v]);h.useEffect(()=>{var u;if((u=d==null?void 0:d.selection)!=null&&u.showEditor)return window.addEventListener("keydown",ge),()=>window.removeEventListener("keydown",ge)},[(ze=d==null?void 0:d.selection)==null?void 0:ze.showEditor,ge]),h.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]);const Xe=ae,Ue=h.useCallback((u,H)=>x&&x.some(Be=>T?T(u,Be):u.data.id===Be)||H===u,[x,T]);return E.jsxs(kt,{ref:_,style:s,className:c,onMouseLeave:ne,onTouchCancel:Y,onMouseMove:z,$allowTouch:C,children:[E.jsx(At,{ref:ee,src:n,alt:r}),E.jsxs(Pt,{children:[l.map(u=>{var xe;if(!((xe=u.data)!=null&&xe.id))return null;const H=Ue(u,Xe);return S?S({key:u.data.id,annotation:u,active:H}):null}),!w&&(d==null?void 0:d.geometry)&&y&&y({annotation:d})]}),E.jsx(Ot,{ref:te,"data-testid":"annotation-target",onClick:Dt,onMouseUp:pe,onMouseDown:It}),!O&&B&&B({type:q,annotation:d}),l.map(u=>{var H;return(H=u.data)!=null&&H.id&&Ue(u,Xe)&&U!=null?U({key:u.data.id,annotation:u}):null}),!A&&((Fe=d==null?void 0:d.selection)==null?void 0:Fe.showEditor)&&N&&v&&N({annotation:d,onChange:v,onSubmit:Lt}),i]})};function jt(t,e){if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageX:n,pageY:r}=e,{left:s,right:c,bottom:a,top:i}=t.getBoundingClientRect();return n>s&&n<c&&r>i&&r<a}function Yt(){const t=L.c(5),[e,n]=h.useState(!1),r=h.useRef(null);let s,c;t[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{const f=g=>{const d=r.current,v={pageX:g.pageX,pageY:g.pageY},b=jt(d,v);n(b)};return document.addEventListener("mousemove",f,{passive:!0}),()=>{document.removeEventListener("mousemove",f)}},c=[],t[0]=s,t[1]=c):(s=t[0],c=t[1]),h.useEffect(s,c);let a;t[2]===Symbol.for("react.memo_cache_sentinel")?(a=f=>{r.current=f},t[2]=a):a=t[2];const i=a;let l;return t[3]!==e?(l={isHoveringOver:e,setRef:i},t[3]=e,t[4]=l):l=t[4],l}k.Annotation=He,k.OvalSelector=ie,k.PointSelector=$,k.RectangleSelector=K,k.default=He,k.useAnnotationHitDetection=Se,k.useMouseHover=Yt,k.useRelativeMousePosition=Me,k.useSelectorMethods=_e,Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
