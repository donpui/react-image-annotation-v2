(function(k,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],m):(k=typeof globalThis<"u"?globalThis:k||self,m(k.ReactImageAnnotation={},k.React,k.styled))})(this,function(k,m,P){"use strict";var re={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function Be(){if(ve)return $;ve=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,s,c){var u=null;if(c!==void 0&&(u=""+c),s.key!==void 0&&(u=""+s.key),"key"in s){c={};for(var i in s)i!=="key"&&(c[i]=s[i])}else c=s;return s=c.ref,{$$typeof:t,type:r,key:u,ref:s!==void 0?s:null,props:c}}return $.Fragment=e,$.jsx=n,$.jsxs=n,$}var q={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be;function We(){return be||(be=1,process.env.NODE_ENV!=="production"&&function(){function t(o){if(o==null)return null;if(typeof o=="function")return o.$$typeof===I?null:o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case p:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case N:return"Suspense";case C:return"SuspenseList";case W:return"Activity"}if(typeof o=="object")switch(typeof o.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),o.$$typeof){case x:return"Portal";case A:return o.displayName||"Context";case O:return(o._context.displayName||"Context")+".Consumer";case y:var h=o.render;return o=o.displayName,o||(o=h.displayName||h.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case F:return h=o.displayName||null,h!==null?h:t(o.type)||"Memo";case H:h=o._payload,o=o._init;try{return t(o(h))}catch{}}return null}function e(o){return""+o}function n(o){try{e(o);var h=!1}catch{h=!0}if(h){h=console;var w=h.error,M=typeof Symbol=="function"&&Symbol.toStringTag&&o[Symbol.toStringTag]||o.constructor.name||"Object";return w.call(h,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",M),e(o)}}function r(o){if(o===p)return"<>";if(typeof o=="object"&&o!==null&&o.$$typeof===H)return"<...>";try{var h=t(o);return h?"<"+h+">":"<...>"}catch{return"<...>"}}function s(){var o=D.A;return o===null?null:o.getOwner()}function c(){return Error("react-stack-top-frame")}function u(o){if(L.call(o,"key")){var h=Object.getOwnPropertyDescriptor(o,"key").get;if(h&&h.isReactWarning)return!1}return o.key!==void 0}function i(o,h){function w(){V||(V=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",h))}w.isReactWarning=!0,Object.defineProperty(o,"key",{get:w,configurable:!0})}function a(){var o=t(this.type);return ne[o]||(ne[o]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),o=this.props.ref,o!==void 0?o:null}function f(o,h,w,M,B,Q){var _=w.ref;return o={$$typeof:v,type:o,key:h,props:w,_owner:M},(_!==void 0?_:null)!==null?Object.defineProperty(o,"ref",{enumerable:!1,get:a}):Object.defineProperty(o,"ref",{enumerable:!1,value:null}),o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(o,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(o,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:B}),Object.defineProperty(o,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Q}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o}function g(o,h,w,M,B,Q){var _=h.children;if(_!==void 0)if(M)if(J(_)){for(M=0;M<_.length;M++)E(_[M]);Object.freeze&&Object.freeze(_)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else E(_);if(L.call(h,"key")){_=t(o);var U=Object.keys(h).filter(function(ge){return ge!=="key"});M=0<U.length?"{key: someKey, "+U.join(": ..., ")+": ...}":"{key: someKey}",j[_+M]||(U=0<U.length?"{"+U.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,M,_,U,_),j[_+M]=!0)}if(_=null,w!==void 0&&(n(w),_=""+w),u(h)&&(n(h.key),_=""+h.key),"key"in h){w={};for(var oe in h)oe!=="key"&&(w[oe]=h[oe])}else w=h;return _&&i(w,typeof o=="function"?o.displayName||o.name||"Unknown":o),f(o,_,w,s(),B,Q)}function E(o){R(o)?o._store&&(o._store.validated=1):typeof o=="object"&&o!==null&&o.$$typeof===H&&(o._payload.status==="fulfilled"?R(o._payload.value)&&o._payload.value._store&&(o._payload.value._store.validated=1):o._store&&(o._store.validated=1))}function R(o){return typeof o=="object"&&o!==null&&o.$$typeof===v}var d=m,v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),A=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),I=Symbol.for("react.client.reference"),D=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=Object.prototype.hasOwnProperty,J=Array.isArray,X=console.createTask?console.createTask:function(){return null};d={react_stack_bottom_frame:function(o){return o()}};var V,ne={},Z=d.react_stack_bottom_frame.bind(d,c)(),le=X(r(c)),j={};q.Fragment=p,q.jsx=function(o,h,w){var M=1e4>D.recentlyCreatedOwnerStacks++;return g(o,h,w,!1,M?Error("react-stack-top-frame"):Z,M?X(r(o)):le)},q.jsxs=function(o,h,w){var M=1e4>D.recentlyCreatedOwnerStacks++;return g(o,h,w,!0,M?Error("react-stack-top-frame"):Z,M?X(r(o)):le)}}()),q}var Ee;function Je(){return Ee||(Ee=1,process.env.NODE_ENV==="production"?re.exports=Be():re.exports=We()),re.exports}var b=Je(),se={exports:{}},ue={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function Ze(){if(ye)return ue;ye=1;var t=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return ue.c=function(e){return t.H.useMemoCache(e)},ue}var fe={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function Qe(){return Te||(Te=1,process.env.NODE_ENV!=="production"&&function(){var t=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;fe.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),fe}var Re;function Ke(){return Re||(Re=1,process.env.NODE_ENV==="production"?se.exports=Ze():se.exports=Qe()),se.exports}var Y=Ke();const we=(t,e)=>{const n=e||t.currentTarget;if(!n||typeof n.getBoundingClientRect!="function")return{x:0,y:0};const r=n.getBoundingClientRect(),s=t.clientX-r.x,c=t.clientY-r.y;return{x:s/r.width*100,y:c/r.height*100}},Ce=(t,e,n)=>Math.max(t,Math.min(e,n)),$e=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),r=e.pageX-n.left,s=e.pageY-(n.top+window.scrollY);return{x:Ce(0,100,r/n.width*100),y:Ce(0,100,s/n.height*100)}},z=(t,e)=>qe(t)?et(t)?(tt(t)&&t.preventDefault(),$e(t)):{x:null}:we(t,e),qe=t=>t.targetTouches!==void 0,et=t=>t.targetTouches.length===1,tt=t=>t.type==="touchmove";function _e(t,e={}){const{onPositionChange:n,throttleMs:r=16}=e,s=m.useRef({x:null,y:null}),[c,u]=m.useState({x:null,y:null}),i=m.useRef(0),a=m.useRef(null),f=m.useCallback(x=>{if(s.current=x,n){const p=Date.now();r<=0||p-i.current>=r?(u(x),n(x),i.current=p):(a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{u(x),n(x),i.current=Date.now()},r-(p-i.current)))}},[n,r]),g=m.useCallback(x=>{try{const p=t.current;if(!p){f({x:null,y:null});return}const T=we(x,p);f(T)}catch{f({x:null,y:null})}},[t,f]),E=m.useCallback(x=>{const p=t.current;if(!p||x.targetTouches.length!==1)return;const T=x.targetTouches[0],S=p.offsetParent;if(S)try{const O=T.pageX-S.offsetLeft,A=T.pageY-S.offsetTop,y=p,N=y.width,C=y.height;N>0&&C>0?f({x:O/N*100,y:A/C*100}):f({x:null,y:null})}catch{f({x:null,y:null})}},[t,f]),R=m.useCallback(x=>{f({x:null,y:null})},[f]),d=m.useCallback(x=>{f({x:null,y:null})},[f]),v=m.useCallback(()=>s.current,[]);return m.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),{mousePosition:n?c:s.current,handlers:{onMouseMove:g,onMouseLeave:R,onTouchMove:E,onTouchLeave:d},getCurrentMousePosition:v}}function Me(t){const e=Y.c(12),{annotations:n,selectors:r,imageRef:s,enableEditing:c}=t;let u,i;e[0]!==r?(i=new Map(r.map(ot)),e[0]=r,e[1]=i):i=e[1],u=i;const a=u;let f;e[2]!==a?(f=v=>{if(v)return a.get(v)},e[2]=a,e[3]=f):f=e[3];const g=f;let E;e[4]!==n||e[5]!==c||e[6]!==g||e[7]!==s?(E=(v,x)=>{const p=s.current;if(!p||v===null||x===null)return;const T={x:v,y:x},S=n.map(A=>{const{geometry:y}=A;if(!y)return null;const N=g(y.type);if(!N)return null;let C=y;return c&&y.type==="RECTANGLE"&&typeof y.x=="number"&&typeof y.y=="number"&&typeof y.width=="number"&&typeof y.height=="number"&&(C={...y,x:Math.max(0,y.x-2),y:Math.max(0,y.y-2),width:Math.min(100-y.x+2,y.width+4),height:Math.min(100-y.y+2,y.height+4)}),N.intersects(T,C,p)?A:null}).filter(nt);return S.length===0?void 0:S.sort((A,y)=>{const N=g(A.geometry.type),C=g(y.geometry.type);return!N||!C?0:N.area(A.geometry,p)-C.area(y.geometry,p)})[0]},e[4]=n,e[5]=c,e[6]=g,e[7]=s,e[8]=E):E=e[8];const R=E;let d;return e[9]!==g||e[10]!==R?(d={getTopAnnotationAt:R,getSelectorByType:g},e[9]=g,e[10]=R,e[11]=d):d=e[11],d}function nt(t){return t!==null}function ot(t){return[t.TYPE,t]}function rt(t){const e=Y.c(17),{targetRef:n,imageRef:r,annotations:s,selectors:c,enableEditing:u,throttleMs:i}=t,a=i===void 0?50:i,[f,g]=m.useState(void 0),E=m.useRef(void 0),R=m.useRef(void 0);let d;e[0]!==s||e[1]!==u||e[2]!==r||e[3]!==c?(d={annotations:s,selectors:c,imageRef:r,enableEditing:u},e[0]=s,e[1]=u,e[2]=r,e[3]=c,e[4]=d):d=e[4];const{getTopAnnotationAt:v}=Me(d);let x;e[5]!==v?(x=F=>{var L;const{x:H,y:W}=F,I=v(H,W),D=(L=I==null?void 0:I.data)==null?void 0:L.id;D!==R.current&&(R.current=D,E.current=I,g(I))},e[5]=v,e[6]=x):x=e[6];const p=x;let T;e[7]!==p||e[8]!==a?(T={onPositionChange:p,throttleMs:a},e[7]=p,e[8]=a,e[9]=T):T=e[9];const{handlers:S}=_e(n,T);let O;e[10]===Symbol.for("react.memo_cache_sentinel")?(O=()=>{g(void 0),E.current=void 0,R.current=void 0},e[10]=O):O=e[10];let A;e[11]!==s||e[12]!==c?(A=[s,c],e[11]=s,e[12]=c,e[13]=A):A=e[13],m.useEffect(O,A);let y;y=S;const N=y;let C;return e[14]!==f||e[15]!==N?(C={hoveredAnnotation:f,mouseHandlers:N},e[14]=f,e[15]=N,e[16]=C):C=e[16],C}function Se({selectors:t,effectiveType:e,value:n,onChange:r,disableAnnotation:s}){const c=m.useCallback(i=>{if(i)return t.find(a=>a.TYPE===i)},[t]);return{callSelectorMethod:m.useCallback((i,a)=>{if(s)return;const f=c(e);if(!(f!=null&&f.methods[i]))return;const g=f.methods[i];try{const E=g(n||{},a);if(typeof E>"u"){process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(i)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);return}r==null||r(E)}catch(E){process.env.NODE_ENV!=="production"&&console.error(`Error calling selector method ${String(i)}:`,E)}},[s,c,e,n,r]),getSelectorByType:c}}const de=P.div`
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
`,st=P.div`
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
`;function ke(t){const e=Y.c(3),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`,s=`${n.x}%`;let c;return e[0]!==r||e[1]!==s?(c=b.jsx(st,{style:{top:r,left:s}}),e[0]=r,e[1]=s,e[2]=c):c=e[2],c}const ct=P.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,it=P.div`
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
`,at=t=>{const e=Y.c(11),{onChange:n,onSubmit:r,onFocus:s,onBlur:c,value:u}=t;let i;e[0]!==c||e[1]!==n||e[2]!==s||e[3]!==u?(i=b.jsx(ct,{children:b.jsx("textarea",{placeholder:"Write description",onFocus:s,onBlur:c,onChange:n,value:u})}),e[0]=c,e[1]=n,e[2]=s,e[3]=u,e[4]=i):i=e[4];let a;e[5]!==r||e[6]!==u?(a=u&&b.jsx(it,{onClick:r,children:"Submit"}),e[5]=r,e[6]=u,e[7]=a):a=e[7];let f;return e[8]!==i||e[9]!==a?(f=b.jsxs(m.Fragment,{children:[i,a]}),e[8]=i,e[9]=a,e[10]=f):f=e[10],f},lt=P.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,ut=P.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${lt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,ft=t=>{var S;const e=Y.c(17),{annotation:n,onChange:r,onSubmit:s,className:c,style:u}=t,i=c===void 0?"":c;let a;e[0]!==u?(a=u===void 0?{}:u,e[0]=u,e[1]=a):a=e[1];const f=a,{geometry:g}=n;if(!g)return null;const E=`${g.x}%`,R=`${g.y+g.height}%`;let d;e[2]!==f||e[3]!==E||e[4]!==R?(d={position:"absolute",left:E,top:R,...f},e[2]=f,e[3]=E,e[4]=R,e[5]=d):d=e[5];let v;e[6]!==n||e[7]!==r?(v=O=>r({...n,data:{...n.data,text:O.target.value}}),e[6]=n,e[7]=r,e[8]=v):v=e[8];const x=(S=n.data)==null?void 0:S.text;let p;e[9]!==s||e[10]!==v||e[11]!==x?(p=b.jsx(at,{onChange:v,onSubmit:s,value:x}),e[9]=s,e[10]=v,e[11]=x,e[12]=p):p=e[12];let T;return e[13]!==i||e[14]!==d||e[15]!==p?(T=b.jsx(ut,{className:i,style:d,children:p}),e[13]=i,e[14]=d,e[15]=p,e[16]=T):T=e[16],T},ce=P.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,dt=P.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Ae(t){const e=Y.c(21),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`;let s;e[0]!==r?(s=b.jsx(ce,{style:{height:r,width:"100%"}}),e[0]=r,e[1]=s):s=e[1];const c=`${n.y}%`,u=`${n.height}%`,i=`${n.x}%`;let a;e[2]!==c||e[3]!==u||e[4]!==i?(a=b.jsx(ce,{style:{top:c,height:u,width:i}}),e[2]=c,e[3]=u,e[4]=i,e[5]=a):a=e[5];const f=`${n.y}%`,g=`${n.x+n.width}%`,E=`${n.height}%`,R=`${100-(n.x+n.width)}%`;let d;e[6]!==f||e[7]!==g||e[8]!==E||e[9]!==R?(d=b.jsx(ce,{style:{top:f,left:g,height:E,width:R}}),e[6]=f,e[7]=g,e[8]=E,e[9]=R,e[10]=d):d=e[10];const v=`${n.y+n.height}%`,x=`${100-(n.y+n.height)}%`;let p;e[11]!==v||e[12]!==x?(p=b.jsx(ce,{style:{top:v,height:x,width:"100%"}}),e[11]=v,e[12]=x,e[13]=p):p=e[13];let T;return e[14]!==t.className||e[15]!==t.style||e[16]!==s||e[17]!==d||e[18]!==p||e[19]!==a?(T=b.jsxs(dt,{className:t.className,style:t.style,children:[s,a,d,p]}),e[14]=t.className,e[15]=t.style,e[16]=s,e[17]=d,e[18]=p,e[19]=a,e[20]=T):T=e[20],T}Ae.defaultProps={className:"",style:{}};const ht=P.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Ne(t){const e=Y.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,u=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let a;e[0]!==t.style||e[1]!==r||e[2]!==s||e[3]!==c||e[4]!==u||e[5]!==i?(a={position:"absolute",left:r,top:s,height:c,width:u,boxShadow:i,...t.style},e[0]=t.style,e[1]=r,e[2]=s,e[3]=c,e[4]=u,e[5]=i,e[6]=a):a=e[6];let f;return e[7]!==t.className||e[8]!==a?(f=b.jsx(ht,{className:t.className,style:a}),e[7]=t.className,e[8]=a,e[9]=f):f=e[9],f}Ne.defaultProps={className:"",style:{}};const mt=P.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function he(t){const e=Y.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,u=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let a;e[0]!==t.style||e[1]!==r||e[2]!==s||e[3]!==c||e[4]!==u||e[5]!==i?(a={position:"absolute",left:r,top:s,height:c,width:u,boxShadow:i,...t.style},e[0]=t.style,e[1]=r,e[2]=s,e[3]=c,e[4]=u,e[5]=i,e[6]=a):a=e[6];let f;return e[7]!==t.className||e[8]!==a?(f=b.jsx(mt,{className:t.className,style:a}),e[7]=t.className,e[8]=a,e[9]=f):f=e[9],f}he.defaultProps={className:"",style:{}};const pt=P.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Pe(t){const e=Y.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const r=`${n.x}%`,s=`${n.y+n.height}%`;let c;e[0]!==t.style||e[1]!==r||e[2]!==s?(c={position:"absolute",left:r,top:s,...t.style},e[0]=t.style,e[1]=r,e[2]=s,e[3]=c):c=e[3];const u=t.annotation.data&&t.annotation.data.text;let i;return e[4]!==t.className||e[5]!==c||e[6]!==u?(i=b.jsx(pt,{style:c,className:t.className,children:u}),e[4]=t.className,e[5]=c,e[6]=u,e[7]=i):i=e[7],i}Pe.defaultProps={style:{},className:""};const Oe="RECTANGLE";function gt({x:t,y:e},n,r){if(!n)return!1;const s=Math.min(n.x,n.x+n.width),c=Math.max(n.x,n.x+n.width),u=Math.min(n.y,n.y+n.height),i=Math.max(n.y,n.y+n.height);return!(t<s||e<u||t>c||e>i)}function xt(t,e){if(!t||t.width<=0||t.height<=0)return 0;const n=Math.abs(t.width),r=Math.abs(t.height);return n*r}const vt={onTouchStart(t,e){return je(t,e)},onTouchEnd(t,e){return Ye(t)},onTouchMove(t,e){return Ie(t,e)},onMouseDown(t,e){return je(t,e)},onMouseUp(t,e){return Ye(t)},onMouseMove(t,e){return Ie(t,e)}};function je(t,e){if(t.selection)return{};{const{x:n,y:r}=z(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function Ye(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Ie(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:s,y:c}=z(e),u=s-n,i=c-r;return{...t,geometry:{...t.geometry,type:Oe,x:u>0?n:s,y:i>0?r:c,width:Math.abs(u),height:Math.abs(i)}}}return t}const ee={TYPE:Oe,intersects:gt,area:xt,methods:vt},Le=6,bt=(t={width:100,height:100})=>({marginX:Le/t.width*100,marginY:Le/t.height*100}),De="POINT";function Et({x:t,y:e},n,r){if(!n)return!1;const{marginX:s,marginY:c}=bt(r),u=Math.min(s,c)/2,i=Math.abs(t-n.x),a=Math.abs(e-n.y);return i<=u&&a<=u}function yt(t,e){return 0}const te={TYPE:De,intersects:Et,area:yt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...z(e),width:0,height:0,type:De}}}}},ie=t=>Math.pow(t,2),me="OVAL";function Tt({x:t,y:e},n,r){if(!n||!n.width||!n.height)return!1;const s=Math.abs(n.width),c=Math.abs(n.height),u={x:n.x+s/2,y:n.y+c/2},i=s/2,a=c/2;if(i===0||a===0)return!1;const f=t-u.x,g=e-u.y;return ie(f)/ie(i)+ie(g)/ie(a)<=1}function Rt(t,e){if(!t||t.width<=0||t.height<=0)return 0;const n=Math.abs(t.width),r=Math.abs(t.height);return Math.PI*(n/2)*(r/2)}const wt={onTouchStart(t,e){return Ct(t,e)},onTouchEnd(t,e){return _t(t)},onTouchMove(t,e){return Mt(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:r}=z(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:s,y:c}=z(e);return{...t,geometry:{...t.geometry,type:me,x:Math.min(n,s),y:Math.min(r,c),width:Math.abs(s-n),height:Math.abs(c-r)}}}return t}};function Ct(t,e){if(t.selection)return{};{const{x:n,y:r}=z(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function _t(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Mt(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:s,y:c}=z(e),u=s-n,i=c-r;return{...t,geometry:{...t.geometry,type:me,x:u>0?n:s,y:i>0?r:c,width:Math.abs(u),height:Math.abs(i)}}}return t}const ae={TYPE:me,intersects:Tt,area:Rt,methods:wt},Ge={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:ee.TYPE,selectors:[ee,te,ae],activeAnnotationComparator:(t,e)=>t===e,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!=="production"&&console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderSelector:({annotation:t})=>{var e;switch((e=t.geometry)==null?void 0:e.type){case ee.TYPE:return b.jsx(Ae,{annotation:t});case te.TYPE:return b.jsx(ke,{annotation:t});case ae.TYPE:return b.jsx(he,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>b.jsx(ft,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case ee.TYPE:return b.jsx(Ne,{annotation:e,active:n},t);case te.TYPE:return b.jsx(ke,{annotation:e},t);case ae.TYPE:return b.jsx(he,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>b.jsx(Pe,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case te.TYPE:return b.jsx(de,{children:"Click to Annotate"});default:return b.jsx(de,{children:"Click and Drag to Annotate"})}}},St=P.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${de} {
    opacity: 1;
  }

  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,kt=P.img`
  display: block;
  width: 100%;
  user-select: none;
`,At=P.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,Nt=P.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,pe=m.forwardRef((t,e)=>{var Ue,ze,Fe;const n=m.useMemo(()=>({...Ge,...t,selectors:t.selectors??Ge.selectors}),[t]),{src:r,alt:s="Annotation Image",style:c,className:u,containerRef:i,imageRef:a,children:f,annotations:g,type:E,selectors:R,value:d,onChange:v,onSubmit:x,activeAnnotationComparator:p,activeAnnotations:T,editModeAnnotationIds:S,disableAnnotation:O,disableSelector:A,disableEditor:y,disableOverlay:N,allowTouch:C,renderSelector:F,renderEditor:H,renderHighlight:W,renderContent:I,renderOverlay:D,onImageMouseUp:L,onImageMouseDown:J,onImageMouseMove:X,onImageClick:V}=n,ne=m.useRef(null),Z=m.useRef(null),{hoveredAnnotation:le,mouseHandlers:j}=rt({targetRef:Z,imageRef:ne,annotations:g,selectors:R,enableEditing:!y,throttleMs:50}),o=E||((Ue=R[0])==null?void 0:Ue.TYPE),{callSelectorMethod:h}=Se({selectors:R,effectiveType:o,value:d,onChange:v,disableAnnotation:O}),w=m.useRef(null),M=m.useCallback(l=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&C&&l.preventDefault(),h("onTouchStart",l)},[C,h]),B=m.useCallback(l=>{h("onTouchEnd",l)},[h]),Q=m.useCallback(l=>{j.onTouchMove(l),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&C&&l.preventDefault(),h("onTouchMove",l)},[j,C,h]),_=m.useCallback(l=>{j.onTouchLeave(l)},[j]);m.useEffect(()=>{const l=Z.current;if(!(!C||!l))return l.ontouchstart=M,l.ontouchend=B,l.ontouchmove=Q,l.ontouchcancel=_,()=>{l&&(l.ontouchstart=null,l.ontouchend=null,l.ontouchmove=null,l.ontouchcancel=null)}},[C,M,B,Q,_]);const U=m.useCallback(l=>{ne.current=l,e&&(typeof e=="function"?e(l):e.current=l),a&&(typeof a=="function"?a(l):a.current=l)},[e,a]),oe=m.useCallback(l=>{Z.current=l},[]),ge=m.useCallback(l=>{i&&(typeof i=="function"?i(l):i.current=l)},[i]),jt=m.useCallback(l=>{j.onMouseMove(l.nativeEvent),X==null||X(l),h("onMouseMove",l)},[j,X,h]),Yt=m.useCallback(l=>{j.onMouseLeave(l.nativeEvent)},[j]),It=m.useCallback(l=>{L==null||L(l),h("onMouseUp",l)},[L,h]),Lt=m.useCallback(l=>{J==null||J(l),h("onMouseDown",l)},[J,h]),Dt=m.useCallback(l=>{V==null||V(l),h("onClick",l)},[V,h]),Gt=m.useCallback(()=>{x&&d&&x(d)},[x,d]),xe=m.useCallback(l=>{var G;l.key==="Escape"&&v&&((G=d==null?void 0:d.selection)!=null&&G.showEditor||d!=null&&d.geometry)&&v({selection:void 0,geometry:void 0,data:void 0})},[d,v]);m.useEffect(()=>{var l;if((l=d==null?void 0:d.selection)!=null&&l.showEditor)return window.addEventListener("keydown",xe),()=>window.removeEventListener("keydown",xe)},[(ze=d==null?void 0:d.selection)==null?void 0:ze.showEditor,xe]),m.useEffect(()=>()=>{w.current&&clearTimeout(w.current)},[]);const He=le,Xe=m.useCallback((l,G)=>T&&T.some(Ve=>p?p(l,Ve):l.data.id===Ve)||G===l,[T,p]);return b.jsxs(St,{ref:ge,style:c,className:u,onMouseLeave:Yt,onTouchCancel:_,onMouseMove:jt,$allowTouch:C,children:[b.jsx(kt,{ref:U,src:r,alt:s}),b.jsxs(At,{children:[g.map(l=>{var K;if(!((K=l.data)!=null&&K.id))return null;const G=Xe(l,He);return W?W({key:l.data.id,annotation:l,active:G}):null}),!A&&(d==null?void 0:d.geometry)&&F&&F({annotation:d})]}),b.jsx(Nt,{ref:oe,"data-testid":"annotation-target",onClick:Dt,onMouseUp:It,onMouseDown:Lt}),!N&&D&&D({type:o,annotation:d}),g.map(l=>{var K;if(!((K=l.data)!=null&&K.id))return null;const G=(S==null?void 0:S.includes(l.data.id))||!1;return(Xe(l,He)||G)&&I!=null?I({key:l.data.id,annotation:l}):null}),!y&&((Fe=d==null?void 0:d.selection)==null?void 0:Fe.showEditor)&&H&&v&&H({annotation:d,onChange:v,onSubmit:Gt}),f]})});pe.displayName="Annotation";function Pt(t,e){if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageX:n,pageY:r}=e,{left:s,right:c,bottom:u,top:i}=t.getBoundingClientRect();return n>s&&n<c&&r>i&&r<u}function Ot(){const t=Y.c(5),[e,n]=m.useState(!1),r=m.useRef(null);let s,c;t[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{const f=g=>{const E=r.current,R={pageX:g.pageX,pageY:g.pageY},d=Pt(E,R);n(d)};return document.addEventListener("mousemove",f,{passive:!0}),()=>{document.removeEventListener("mousemove",f)}},c=[],t[0]=s,t[1]=c):(s=t[0],c=t[1]),m.useEffect(s,c);let u;t[2]===Symbol.for("react.memo_cache_sentinel")?(u=f=>{r.current=f},t[2]=u):u=t[2];const i=u;let a;return t[3]!==e?(a={isHoveringOver:e,setRef:i},t[3]=e,t[4]=a):a=t[4],a}k.Annotation=pe,k.OvalSelector=ae,k.PointSelector=te,k.RectangleSelector=ee,k.default=pe,k.useAnnotationHitDetection=Me,k.useMouseHover=Ot,k.useRelativeMousePosition=_e,k.useSelectorMethods=Se,Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
