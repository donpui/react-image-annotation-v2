(function(L,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],h):(L=typeof globalThis<"u"?globalThis:L||self,h(L.ReactImageAnnotation={},L.React,L.styled))})(this,function(L,h,j){"use strict";var me={exports:{}},le={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function ft(){if(Ne)return le;Ne=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(o,r,s){var c=null;if(s!==void 0&&(c=""+s),r.key!==void 0&&(c=""+r.key),"key"in r){s={};for(var a in r)a!=="key"&&(s[a]=r[a])}else s=r;return r=s.ref,{$$typeof:t,type:o,key:c,ref:r!==void 0?r:null,props:s}}return le.Fragment=e,le.jsx=n,le.jsxs=n,le}var ue={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function ht(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){function t(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===S?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case w:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case G:return"Suspense";case T:return"SuspenseList";case k:return"Activity"}if(typeof i=="object")switch(typeof i.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),i.$$typeof){case b:return"Portal";case $:return(i.displayName||"Context")+".Provider";case J:return(i._context.displayName||"Context")+".Consumer";case Y:var v=i.render;return i=i.displayName,i||(i=v.displayName||v.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return v=i.displayName||null,v!==null?v:t(i.type)||"Memo";case R:v=i._payload,i=i._init;try{return t(i(v))}catch{}}return null}function e(i){return""+i}function n(i){try{e(i);var v=!1}catch{v=!0}if(v){v=console;var C=v.error,X=typeof Symbol=="function"&&Symbol.toStringTag&&i[Symbol.toStringTag]||i.constructor.name||"Object";return C.call(v,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",X),e(i)}}function o(i){if(i===w)return"<>";if(typeof i=="object"&&i!==null&&i.$$typeof===R)return"<...>";try{var v=t(i);return v?"<"+v+">":"<...>"}catch{return"<...>"}}function r(){var i=D.A;return i===null?null:i.getOwner()}function s(){return Error("react-stack-top-frame")}function c(i){if(U.call(i,"key")){var v=Object.getOwnPropertyDescriptor(i,"key").get;if(v&&v.isReactWarning)return!1}return i.key!==void 0}function a(i,v){function C(){O||(O=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",v))}C.isReactWarning=!0,Object.defineProperty(i,"key",{get:C,configurable:!0})}function u(){var i=t(this.type);return P[i]||(P[i]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),i=this.props.ref,i!==void 0?i:null}function f(i,v,C,X,B,V,se,ee){return C=V.ref,i={$$typeof:m,type:i,key:v,props:V,_owner:B},(C!==void 0?C:null)!==null?Object.defineProperty(i,"ref",{enumerable:!1,get:u}):Object.defineProperty(i,"ref",{enumerable:!1,value:null}),i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(i,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(i,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:se}),Object.defineProperty(i,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ee}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i}function p(i,v,C,X,B,V,se,ee){var I=v.children;if(I!==void 0)if(X)if(W(I)){for(X=0;X<I.length;X++)l(I[X]);Object.freeze&&Object.freeze(I)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else l(I);if(U.call(v,"key")){I=t(i);var N=Object.keys(v).filter(function(F){return F!=="key"});X=0<N.length?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}",z[I+X]||(N=0<N.length?"{"+N.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,X,I,N,I),z[I+X]=!0)}if(I=null,C!==void 0&&(n(C),I=""+C),c(v)&&(n(v.key),I=""+v.key),"key"in v){C={};for(var te in v)te!=="key"&&(C[te]=v[te])}else C=v;return I&&a(C,typeof i=="function"?i.displayName||i.name||"Unknown":i),f(i,I,V,B,r(),C,se,ee)}function l(i){typeof i=="object"&&i!==null&&i.$$typeof===m&&i._store&&(i._store.validated=1)}var g=h,m=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),$=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),S=Symbol.for("react.client.reference"),D=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=Object.prototype.hasOwnProperty,W=Array.isArray,Q=console.createTask?console.createTask:function(){return null};g={"react-stack-bottom-frame":function(i){return i()}};var O,P={},M=g["react-stack-bottom-frame"].bind(g,s)(),E=Q(o(s)),z={};ue.Fragment=w,ue.jsx=function(i,v,C,X,B){var V=1e4>D.recentlyCreatedOwnerStacks++;return p(i,v,C,!1,X,B,V?Error("react-stack-top-frame"):M,V?Q(o(i)):E)},ue.jsxs=function(i,v,C,X,B){var V=1e4>D.recentlyCreatedOwnerStacks++;return p(i,v,C,!0,X,B,V?Error("react-stack-top-frame"):M,V?Q(o(i)):E)}}()),ue}var _e;function pt(){return _e||(_e=1,process.env.NODE_ENV==="production"?me.exports=ft():me.exports=ht()),me.exports}var x=pt();const Ye=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.x,o=t.clientY-e.y;return{x:n/e.width*100,y:o/e.height*100}},Oe=(t,e,n)=>Math.max(t,Math.min(e,n)),gt=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),o=e.pageX-n.left,r=e.pageY-(n.top+window.scrollY);return{x:Oe(0,100,o/n.width*100),y:Oe(0,100,r/n.height*100)}},oe=t=>mt(t)?xt(t)?(bt(t)&&t.preventDefault(),gt(t)):{x:null}:Ye(t),mt=t=>t.targetTouches!==void 0,xt=t=>t.targetTouches.length===1,bt=t=>t.type==="touchmove";function Ie(){const[t,e]=h.useState({x:null,y:null}),n=h.useRef(null),o=h.useCallback(u=>{try{const f=Ye(u);e(f)}catch{e({x:null,y:null})}},[]),r=h.useCallback(u=>{const f=n.current;if(!f||u.targetTouches.length!==1)return;const p=u.targetTouches[0],l=f.offsetParent;if(l)try{const g=p.pageX-l.offsetLeft,m=p.pageY-l.offsetTop,b=f,w=b.width,y=b.height;w>0&&y>0?e({x:g/w*100,y:m/y*100}):e({x:null,y:null})}catch{e({x:null,y:null})}},[]),s=h.useCallback(u=>{e({x:null,y:null})},[]),c=h.useCallback(u=>{e({x:null,y:null})},[]),a=h.useCallback(u=>{n.current=u},[]);return{mousePosition:t,handlers:{onMouseMove:o,onMouseLeave:s,onTouchMove:r,onTouchLeave:c},setRef:a}}var xe={exports:{}},ye={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le;function vt(){if(Le)return ye;Le=1;var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return ye.c=function(e){return t.H.useMemoCache(e)},ye}var Re={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe;function wt(){return Xe||(Xe=1,process.env.NODE_ENV!=="production"&&function(){var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;Re.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),Re}var Be;function Et(){return Be||(Be=1,process.env.NODE_ENV==="production"?xe.exports=vt():xe.exports=wt()),xe.exports}var Z=Et();function yt(t,e){if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageX:n,pageY:o}=e,{left:r,right:s,bottom:c,top:a}=t.getBoundingClientRect();return n>r&&n<s&&o>a&&o<c}function He(){const t=Z.c(5),[e,n]=h.useState(!1),o=h.useRef(null);let r,s;t[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{const f=p=>{const l=o.current,g={pageX:p.pageX,pageY:p.pageY},m=yt(l,g);n(m)};return document.addEventListener("mousemove",f,{passive:!0}),()=>{document.removeEventListener("mousemove",f)}},s=[],t[0]=r,t[1]=s):(r=t[0],s=t[1]),h.useEffect(r,s);let c;t[2]===Symbol.for("react.memo_cache_sentinel")?(c=f=>{o.current=f},t[2]=c):c=t[2];const a=c;let u;return t[3]!==e?(u={isHoveringOver:e,setRef:a},t[3]=e,t[4]=u):u=t[4],u}function ze({selectors:t,effectiveType:e,value:n,onChange:o,disableAnnotation:r}){const s=h.useCallback(a=>{if(a)return t.find(u=>u.TYPE===a)},[t]);return{callSelectorMethod:h.useCallback((a,u)=>{if(r)return;const f=s(e);if(!(f!=null&&f.methods[a]))return;const p=f.methods[a];try{const l=p(n||{},u);if(typeof l>"u"){process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(a)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);return}o==null||o(l)}catch(l){process.env.NODE_ENV!=="production"&&console.error(`Error calling selector method ${String(a)}:`,l)}},[r,s,e,n,o]),getSelectorByType:s}}function Fe(t){const e=Z.c(12),{annotations:n,selectors:o,imageRef:r,enableEditing:s}=t;let c,a;e[0]!==o?(a=new Map(o.map(Tt)),e[0]=o,e[1]=a):a=e[1],c=a;const u=c;let f;e[2]!==u?(f=b=>{if(b)return u.get(b)},e[2]=u,e[3]=f):f=e[3];const p=f;let l;e[4]!==n||e[5]!==s||e[6]!==p||e[7]!==r?(l=(b,w)=>{const y=r.current;if(!y||b===null||w===null)return;const _={x:b,y:w},J=n.map((Y,G)=>{var S;const{geometry:T}=Y;if(!T)return null;const H=p(T.type);if(!H)return console.warn(`🔍 No selector found for type: ${T.type}`),null;let R=T;s&&T.type==="RECTANGLE"&&typeof T.x=="number"&&typeof T.y=="number"&&typeof T.width=="number"&&typeof T.height=="number"&&(R={...T,x:Math.max(0,T.x-2),y:Math.max(0,T.y-2),width:Math.min(100-T.x+2,T.width+4),height:Math.min(100-T.y+2,T.height+4)});const k=H.intersects(_,R,y);return k&&console.log(`🎯 Hit detected on annotation ${(S=Y.data)==null?void 0:S.id}:`,{point:_,testGeometry:R,intersects:k}),k?Y:null}).filter(Rt);return J.length===0?void 0:J.sort((Y,G)=>{const T=p(Y.geometry.type),H=p(G.geometry.type);return!T||!H?0:T.area(Y.geometry,y)-H.area(G.geometry,y)})[0]},e[4]=n,e[5]=s,e[6]=p,e[7]=r,e[8]=l):l=e[8];const g=l;let m;return e[9]!==p||e[10]!==g?(m={getTopAnnotationAt:g,getSelectorByType:p},e[9]=p,e[10]=g,e[11]=m):m=e[11],m}function Rt(t){return t!==null}function Tt(t){return[t.TYPE,t]}const Mt=(t,e,n)=>{const[o,r]=h.useState(!1),[s,c]=h.useState(null),[a,u]=h.useState(null),[f,p]=h.useState(null),l=h.useRef(null),g=h.useRef(t),m=h.useRef(t),[b,w]=h.useState(t);g.current=n?b:t,h.useEffect(()=>{(!n||!o)&&(m.current=t,n&&w(t))},[t,n,o]);const y=h.useCallback((R,k)=>{const S=g.current.map(D=>D.data.id===R?{...D,isDragging:k}:D);g.current=S,n?w(S):e(S),r(k),c(k?R:null)},[e,n]),_=h.useCallback((R,k)=>{n&&p(R),y(R,!0);const S=g.current.find(D=>D.data.id===R);S&&(l.current={...S.geometry,initialCursorPosition:k})},[y,n]),J=h.useCallback((R,k,S)=>{if(!s||!l.current)return;const D=R.clientX-S.x,U=R.clientY-S.y,W=document.querySelector(".annotation-container");if(!W)return;const Q=W.getBoundingClientRect(),O=Q.width,P=Q.height,M=100,E={...l.current};switch(k){case"top":E.height=Math.min(l.current.height-U/P*M,l.current.y+l.current.height),E.y=Math.max(l.current.y+U/P*M,0);break;case"right":E.width=Math.min(l.current.width+D/O*M,M-l.current.x);break;case"bottom":E.height=Math.min(l.current.height+U/P*M,M-l.current.y);break;case"left":E.width=Math.min(l.current.width-D/O*M,l.current.x+l.current.width),E.x=Math.max(l.current.x+D/O*M,0);break}E.width=Math.max(E.width,0),E.height=Math.max(E.height,0),E.x=Math.min(E.x,M-E.width),E.y=Math.min(E.y,M-E.height);const z=g.current.map(i=>i.data.id===s?{...i,geometry:E}:i);g.current=z,n?w(z):e(z)},[s,e,n]),$=h.useCallback((R,k)=>{n&&p(R),y(R,!0);const S=g.current.find(D=>D.data.id===R);S&&(l.current={...S.geometry,initialCursorPosition:k})},[y,n]),Y=h.useCallback((R,k)=>{if(!s||!l.current)return;const S=R.clientX-k.x,D=R.clientY-k.y,U=document.querySelector(".annotation-container");if(!U)return;const W=U.getBoundingClientRect(),Q=W.width,O=W.height,P=100,M={...l.current};M.x=Math.max(Math.min(l.current.x+S/Q*P,P-l.current.width),0),M.y=Math.max(Math.min(l.current.y+D/O*P,P-l.current.height),0);const E=g.current.map(z=>z.data.id===s?{...z,geometry:M}:z);g.current=E,n?w(E):e(E)},[s,e,n]),G=h.useCallback(()=>{s&&(r(!1),c(null)),l.current=null},[s]),T=h.useCallback(R=>{console.log("handleConfirm hasConfirmMode",n),e(b),m.current=b,p(null),c(null),r(!1)},[e,b]),H=h.useCallback(R=>{w(m.current),g.current=m.current,p(null),c(null),r(!1)},[]);return{isDragging:o,draggingId:s,activeAnnotationId:a,editingAnnotationId:f,setActiveAnnotationId:u,setDraggingId:c,handleDotDragStart:_,handleDotDrag:J,handleMoveStart:$,handleMove:Y,handleMouseUp:G,handleConfirm:T,handleReset:H,displayAnnotations:n?b:t}},Te=j.div`
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
`,Ct=j.div`
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
`;function Me(t){const e=Z.c(3),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.y}%`,r=`${n.x}%`;let s;return e[0]!==o||e[1]!==r?(s=x.jsx(Ct,{style:{top:o,left:r}}),e[0]=o,e[1]=r,e[2]=s):s=e[2],s}const kt=j.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,St=j.div`
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
`,Dt=t=>{const e=Z.c(11),{onChange:n,onSubmit:o,onFocus:r,onBlur:s,value:c}=t;let a;e[0]!==s||e[1]!==n||e[2]!==r||e[3]!==c?(a=x.jsx(kt,{children:x.jsx("textarea",{placeholder:"Write description",onFocus:r,onBlur:s,onChange:n,value:c})}),e[0]=s,e[1]=n,e[2]=r,e[3]=c,e[4]=a):a=e[4];let u;e[5]!==o||e[6]!==c?(u=c&&x.jsx(St,{onClick:o,children:"Submit"}),e[5]=o,e[6]=c,e[7]=u):u=e[7];let f;return e[8]!==a||e[9]!==u?(f=x.jsxs(h.Fragment,{children:[a,u]}),e[8]=a,e[9]=u,e[10]=f):f=e[10],f},At=j.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Pt=j.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${At} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,Nt=t=>{var J;const e=Z.c(17),{annotation:n,onChange:o,onSubmit:r,className:s,style:c}=t,a=s===void 0?"":s;let u;e[0]!==c?(u=c===void 0?{}:c,e[0]=c,e[1]=u):u=e[1];const f=u,{geometry:p}=n;if(!p)return null;const l=`${p.x}%`,g=`${p.y+p.height}%`;let m;e[2]!==f||e[3]!==l||e[4]!==g?(m={position:"absolute",left:l,top:g,...f},e[2]=f,e[3]=l,e[4]=g,e[5]=m):m=e[5];let b;e[6]!==n||e[7]!==o?(b=$=>o({...n,data:{...n.data,text:$.target.value}}),e[6]=n,e[7]=o,e[8]=b):b=e[8];const w=(J=n.data)==null?void 0:J.text;let y;e[9]!==r||e[10]!==b||e[11]!==w?(y=x.jsx(Dt,{onChange:b,onSubmit:r,value:w}),e[9]=r,e[10]=b,e[11]=w,e[12]=y):y=e[12];let _;return e[13]!==a||e[14]!==m||e[15]!==y?(_=x.jsx(Pt,{className:a,style:m,children:y}),e[13]=a,e[14]=m,e[15]=y,e[16]=_):_=e[16],_},be=j.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,jt=j.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Ge(t){const e=Z.c(21),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.y}%`;let r;e[0]!==o?(r=x.jsx(be,{style:{height:o,width:"100%"}}),e[0]=o,e[1]=r):r=e[1];const s=`${n.y}%`,c=`${n.height}%`,a=`${n.x}%`;let u;e[2]!==s||e[3]!==c||e[4]!==a?(u=x.jsx(be,{style:{top:s,height:c,width:a}}),e[2]=s,e[3]=c,e[4]=a,e[5]=u):u=e[5];const f=`${n.y}%`,p=`${n.x+n.width}%`,l=`${n.height}%`,g=`${100-(n.x+n.width)}%`;let m;e[6]!==f||e[7]!==p||e[8]!==l||e[9]!==g?(m=x.jsx(be,{style:{top:f,left:p,height:l,width:g}}),e[6]=f,e[7]=p,e[8]=l,e[9]=g,e[10]=m):m=e[10];const b=`${n.y+n.height}%`,w=`${100-(n.y+n.height)}%`;let y;e[11]!==b||e[12]!==w?(y=x.jsx(be,{style:{top:b,height:w,width:"100%"}}),e[11]=b,e[12]=w,e[13]=y):y=e[13];let _;return e[14]!==t.className||e[15]!==t.style||e[16]!==r||e[17]!==m||e[18]!==y||e[19]!==u?(_=x.jsxs(jt,{className:t.className,style:t.style,children:[r,u,m,y]}),e[14]=t.className,e[15]=t.style,e[16]=r,e[17]=m,e[18]=y,e[19]=u,e[20]=_):_=e[20],_}Ge.defaultProps={className:"",style:{}};const _t=j.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function ve(t){const e=Z.c(10),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.x}%`,r=`${n.y}%`,s=`${n.height}%`,c=`${n.width}%`,a=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==o||e[2]!==r||e[3]!==s||e[4]!==c||e[5]!==a?(u={position:"absolute",left:o,top:r,height:s,width:c,boxShadow:a,...t.style},e[0]=t.style,e[1]=o,e[2]=r,e[3]=s,e[4]=c,e[5]=a,e[6]=u):u=e[6];let f;return e[7]!==t.className||e[8]!==u?(f=x.jsx(_t,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=f):f=e[9],f}ve.defaultProps={className:"",style:{}};const Yt=j.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function we(t){const e=Z.c(10),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.x}%`,r=`${n.y}%`,s=`${n.height}%`,c=`${n.width}%`,a=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==o||e[2]!==r||e[3]!==s||e[4]!==c||e[5]!==a?(u={position:"absolute",left:o,top:r,height:s,width:c,boxShadow:a,...t.style},e[0]=t.style,e[1]=o,e[2]=r,e[3]=s,e[4]=c,e[5]=a,e[6]=u):u=e[6];let f;return e[7]!==t.className||e[8]!==u?(f=x.jsx(Yt,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=f):f=e[9],f}we.defaultProps={className:"",style:{}};const Ot=j.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Ue(t){const e=Z.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const o=`${n.x}%`,r=`${n.y+n.height}%`;let s;e[0]!==t.style||e[1]!==o||e[2]!==r?(s={position:"absolute",left:o,top:r,...t.style},e[0]=t.style,e[1]=o,e[2]=r,e[3]=s):s=e[3];const c=t.annotation.data&&t.annotation.data.text;let a;return e[4]!==t.className||e[5]!==s||e[6]!==c?(a=x.jsx(Ot,{style:s,className:t.className,children:c}),e[4]=t.className,e[5]=s,e[6]=c,e[7]=a):a=e[7],a}Ue.defaultProps={style:{},className:""};const It=j.div`
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
`,Lt=j.div`
  &::before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
    color: #666;
    line-height: 1;
  }
`,We=t=>{const e=Z.c(6),{annotationId:n,onRemove:o}=t;let r;e[0]!==n||e[1]!==o?(r=u=>{u.stopPropagation(),o(n)},e[0]=n,e[1]=o,e[2]=r):r=e[2];const s=r;let c;e[3]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsx(Lt,{}),e[3]=c):c=e[3];let a;return e[4]!==s?(a=x.jsx(It,{onClick:s,children:c}),e[4]=s,e[5]=a):a=e[5],a},Xt=j.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
`,Ve=j.button`
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
`,Je=t=>{const e=Z.c(11),{onConfirm:n,onReset:o}=t;let r;e[0]!==n?(r=l=>{l.stopPropagation(),n()},e[0]=n,e[1]=r):r=e[1];const s=r;let c;e[2]!==o?(c=l=>{l.stopPropagation(),o()},e[2]=o,e[3]=c):c=e[3];const a=c;let u;e[4]!==s?(u=x.jsx(Ve,{$variant:"confirm",onClick:s,children:"✓"}),e[4]=s,e[5]=u):u=e[5];let f;e[6]!==a?(f=x.jsx(Ve,{$variant:"reset",onClick:a,children:"✕"}),e[6]=a,e[7]=f):f=e[7];let p;return e[8]!==u||e[9]!==f?(p=x.jsxs(Xt,{children:[u,f]}),e[8]=u,e[9]=f,e[10]=p):p=e[10],p},Bt=j.div`
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

  ${t=>{switch(t.position){case"top":return`
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          
          &:hover {
            top: -6px;
            transform: translateX(-50%);
          }
        `;case"right":return`
          top: 50%;
          right: -5px;
          transform: translateY(-50%);
          
          &:hover {
            right: -6px;
            transform: translateY(-50%);
          }
        `;case"bottom":return`
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          
          &:hover {
            bottom: -6px;
            transform: translateX(-50%);
          }
        `;case"left":return`
          top: 50%;
          left: -5px;
          transform: translateY(-50%);
          
          &:hover {
            left: -6px;
            transform: translateY(-50%);
          }
        `;default:return""}}}
`,Ht=j.div`
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
`,de=t=>{const e=Z.c(9),{position:n,onDragStart:o,onDrag:r,onDragEnd:s,annotationId:c}=t;let a;e[0]!==c||e[1]!==r||e[2]!==s||e[3]!==o||e[4]!==n?(a=l=>{l.preventDefault(),l.stopPropagation();const g={x:l.clientX,y:l.clientY};o(c,g);const m=w=>{w.preventDefault(),w.stopPropagation(),r(w,n,g)},b=w=>{w.preventDefault(),w.stopPropagation(),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",b),s==null||s()};document.addEventListener("mousemove",m),document.addEventListener("mouseup",b)},e[0]=c,e[1]=r,e[2]=s,e[3]=o,e[4]=n,e[5]=a):a=e[5];const u=a,f=zt;let p;return e[6]!==u||e[7]!==n?(p=x.jsx(Bt,{position:n,onMouseDown:u,onClick:f,"data-type":"dot"}),e[6]=u,e[7]=n,e[8]=p):p=e[8],p},Ze=t=>{const e=Z.c(7),{onMoveStart:n,onMove:o,onMoveEnd:r,annotationId:s}=t;let c;e[0]!==s||e[1]!==o||e[2]!==r||e[3]!==n?(c=p=>{p.preventDefault(),p.stopPropagation();const l={x:p.clientX,y:p.clientY};n(s,l);const g=b=>{b.preventDefault(),b.stopPropagation(),o(b,l)},m=b=>{b.preventDefault(),b.stopPropagation(),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",m),r==null||r()};document.addEventListener("mousemove",g),document.addEventListener("mouseup",m)},e[0]=s,e[1]=o,e[2]=r,e[3]=n,e[4]=c):c=e[4];const a=c,u=Ft;let f;return e[5]!==a?(f=x.jsx(Ht,{onMouseDown:a,onClick:u,"data-type":"move-button",children:"↕"}),e[5]=a,e[6]=f):f=e[6],f};function zt(t){t.preventDefault(),t.stopPropagation()}function Ft(t){t.preventDefault(),t.stopPropagation()}const Gt=j.div`
  position: absolute;
  border: ${t=>t.$isDragging?"1px dashed #FFFFFF":"1px solid #24B3C8"};
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
    border: ${t=>t.$isDragging?"1px dashed #FFFFFF":"2px solid #1e90ff"};
    background: rgba(36, 179, 200, 0.2);
    box-shadow: 0 0 8px rgba(30, 144, 255, 0.4);
  }
`,Qe=t=>{var z,i,v,C,X,B,V,se,ee,I,N,te;const e=Z.c(53),{annotation:n,onDotDragStart:o,onDotDrag:r,onMoveStart:s,onMove:c,onDragEnd:a,isDragging:u,enableRemoval:f,onRemoveAnnotation:p,onConfirm:l,onReset:g}=t,{geometry:m}=n;if(!m||!m.type||typeof m.x!="number"||typeof m.y!="number")return null;let b;e[0]!==((z=n.data)==null?void 0:z.id)||e[1]!==c||e[2]!==s?(b=F=>{var pe;const A=F.target;if(A.closest('[data-type="dot"]')||A.closest('[data-type="move-button"]'))return;F.preventDefault(),F.stopPropagation();const q={x:F.clientX,y:F.clientY},he=(pe=n.data)==null?void 0:pe.id;he&&s(he,q);const ae=ne=>{ne.preventDefault(),ne.stopPropagation(),c(ne,q)},ce=ne=>{ne.preventDefault(),ne.stopPropagation(),document.removeEventListener("mousemove",ae),document.removeEventListener("mouseup",ce)};document.addEventListener("mousemove",ae),document.addEventListener("mouseup",ce)},e[0]=(i=n.data)==null?void 0:i.id,e[1]=c,e[2]=s,e[3]=b):b=e[3];const w=b,y=Ut,_=`${m.x}%`,J=`${m.y}%`,$=`${m.width}%`,Y=`${m.height}%`;let G;e[4]!==_||e[5]!==J||e[6]!==$||e[7]!==Y?(G={left:_,top:J,width:$,height:Y},e[4]=_,e[5]=J,e[6]=$,e[7]=Y,e[8]=G):G=e[8];const T=(v=n.data)==null?void 0:v.id;let H;e[9]!==r||e[10]!==o||e[11]!==a||e[12]!==T?(H=x.jsx(de,{position:"top",onDragStart:o,onDrag:r,onDragEnd:a,annotationId:T}),e[9]=r,e[10]=o,e[11]=a,e[12]=T,e[13]=H):H=e[13];const R=(C=n.data)==null?void 0:C.id;let k;e[14]!==r||e[15]!==o||e[16]!==a||e[17]!==R?(k=x.jsx(de,{position:"right",onDragStart:o,onDrag:r,onDragEnd:a,annotationId:R}),e[14]=r,e[15]=o,e[16]=a,e[17]=R,e[18]=k):k=e[18];const S=(X=n.data)==null?void 0:X.id;let D;e[19]!==r||e[20]!==o||e[21]!==a||e[22]!==S?(D=x.jsx(de,{position:"bottom",onDragStart:o,onDrag:r,onDragEnd:a,annotationId:S}),e[19]=r,e[20]=o,e[21]=a,e[22]=S,e[23]=D):D=e[23];const U=(B=n.data)==null?void 0:B.id;let W;e[24]!==r||e[25]!==o||e[26]!==a||e[27]!==U?(W=x.jsx(de,{position:"left",onDragStart:o,onDrag:r,onDragEnd:a,annotationId:U}),e[24]=r,e[25]=o,e[26]=a,e[27]=U,e[28]=W):W=e[28];const Q=(V=n.data)==null?void 0:V.id;let O;e[29]!==a||e[30]!==c||e[31]!==s||e[32]!==Q?(O=x.jsx(Ze,{onMoveStart:s,onMove:c,onMoveEnd:a,annotationId:Q}),e[29]=a,e[30]=c,e[31]=s,e[32]=Q,e[33]=O):O=e[33];let P;e[34]!==((se=n.data)==null?void 0:se.id)||e[35]!==f||e[36]!==p?(P=f&&p&&x.jsx(We,{annotationId:(ee=n.data)==null?void 0:ee.id,onRemove:p}),e[34]=(I=n.data)==null?void 0:I.id,e[35]=f,e[36]=p,e[37]=P):P=e[37];let M;e[38]!==((N=n.data)==null?void 0:N.id)||e[39]!==l||e[40]!==g?(M=l&&g&&x.jsx(Je,{onConfirm:()=>{var F;return l((F=n.data)==null?void 0:F.id)},onReset:()=>{var F;return g((F=n.data)==null?void 0:F.id)}}),e[38]=(te=n.data)==null?void 0:te.id,e[39]=l,e[40]=g,e[41]=M):M=e[41];let E;return e[42]!==w||e[43]!==u||e[44]!==k||e[45]!==D||e[46]!==W||e[47]!==O||e[48]!==P||e[49]!==M||e[50]!==G||e[51]!==H?(E=x.jsxs(Gt,{style:G,$isDragging:u,onMouseDown:w,onClick:y,children:[H,k,D,W,O,P,M]}),e[42]=w,e[43]=u,e[44]=k,e[45]=D,e[46]=W,e[47]=O,e[48]=P,e[49]=M,e[50]=G,e[51]=H,e[52]=E):E=e[52],E};function Ut(t){t.preventDefault(),t.stopPropagation()}const Ke="RECTANGLE";function Wt({x:t,y:e},n,o){if(!n)return!1;const r=Math.min(n.x,n.x+n.width),s=Math.max(n.x,n.x+n.width),c=Math.min(n.y,n.y+n.height),a=Math.max(n.y,n.y+n.height);return!(t<r||e<c||t>s||e>a)}function Vt(t,e){if(!t||t.width<=0||t.height<=0)return 0;const n=Math.abs(t.width),o=Math.abs(t.height);return n*o}const Jt={onTouchStart(t,e){return $e(t,e)},onTouchEnd(t,e){return qe(t)},onTouchMove(t,e){return et(t,e)},onMouseDown(t,e){return $e(t,e)},onMouseUp(t,e){return qe(t)},onMouseMove(t,e){return et(t,e)}};function $e(t,e){if(t.selection)return{};{const{x:n,y:o}=oe(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}}function qe(t,e){if(t.selection){const{selection:n,geometry:o}=t;if(!o)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function et(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:r,y:s}=oe(e),c=r-n,a=s-o;return{...t,geometry:{...t.geometry,type:Ke,x:c>0?n:r,y:a>0?o:s,width:Math.abs(c),height:Math.abs(a)}}}return t}const re={TYPE:Ke,intersects:Wt,area:Vt,methods:Jt},tt=6,Zt=(t={width:100,height:100})=>({marginX:tt/t.width*100,marginY:tt/t.height*100}),nt="POINT";function Qt({x:t,y:e},n,o){if(!n)return!1;const{marginX:r,marginY:s}=Zt(o),c=Math.min(r,s)/2,a=Math.abs(t-n.x),u=Math.abs(e-n.y);return a<=c&&u<=c}function Kt(t,e){return 0}const ie={TYPE:nt,intersects:Qt,area:Kt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...oe(e),width:0,height:0,type:nt}}}}},Ee=t=>Math.pow(t,2),Ce="OVAL";function $t({x:t,y:e},n,o){if(!n||!n.width||!n.height)return!1;const r=Math.abs(n.width),s=Math.abs(n.height),c={x:n.x+r/2,y:n.y+s/2},a=r/2,u=s/2;if(a===0||u===0)return!1;const f=t-c.x,p=e-c.y;return Ee(f)/Ee(a)+Ee(p)/Ee(u)<=1}function qt(t,e){if(!t||!t.width||!t.height)return 0;const n=Math.abs(t.width),o=Math.abs(t.height);return n<=0||o<=0?0:Math.PI*(n/2)*(o/2)}const en={onTouchStart(t,e){return tn(t,e)},onTouchEnd(t,e){return nn(t)},onTouchMove(t,e){return on(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:o}=oe(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:r,y:s}=oe(e);return{...t,geometry:{...t.geometry,type:Ce,x:Math.min(n,r),y:Math.min(o,s),width:Math.abs(r-n),height:Math.abs(s-o)}}}return t}};function tn(t,e){if(t.selection)return{};{const{x:n,y:o}=oe(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}}function nn(t,e){if(t.selection){const{selection:n,geometry:o}=t;if(!o)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function on(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:r,y:s}=oe(e),c=r-n,a=s-o;return{...t,geometry:{...t.geometry,type:Ce,x:c>0?n:r,y:a>0?o:s,width:Math.abs(c),height:Math.abs(a)}}}return t}const fe={TYPE:Ce,intersects:$t,area:qt,methods:en},ot={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:re.TYPE,selectors:[re,ie,fe],activeAnnotationComparator:(t,e)=>t===e,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!=="production"&&console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderSelector:({annotation:t})=>{var e;switch((e=t.geometry)==null?void 0:e.type){case re.TYPE:return x.jsx(Ge,{annotation:t});case ie.TYPE:return x.jsx(Me,{annotation:t});case fe.TYPE:return x.jsx(we,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>x.jsx(Nt,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case re.TYPE:return x.jsx(ve,{annotation:e,active:n},t);case ie.TYPE:return x.jsx(Me,{annotation:e},t);case fe.TYPE:return x.jsx(we,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>x.jsx(Ue,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case ie.TYPE:return x.jsx(Te,{children:"Click to Annotate"});default:return x.jsx(Te,{children:"Click and Drag to Annotate"})}},renderDraggableHighlight:({key:t,annotation:e,active:n,isDragging:o,isHovered:r,onDotDragStart:s,onDotDrag:c,onMoveStart:a,onMove:u,onDragEnd:f,enableRemoval:p,onRemoveAnnotation:l,onConfirm:g,onReset:m})=>{var b;if(!((b=e.data)!=null&&b.id)||!r)switch(e.geometry.type){case re.TYPE:return x.jsx(ve,{annotation:e,active:n},t);case ie.TYPE:return x.jsx(Me,{annotation:e},t);case fe.TYPE:return x.jsx(we,{annotation:e,active:n},t);default:return null}return e.geometry.type===re.TYPE?x.jsx(Qe,{annotation:e,onDotDragStart:s,onDotDrag:c,onMoveStart:a,onMove:u,onDragEnd:f,isDragging:o,enableRemoval:p,onRemoveAnnotation:l,onConfirm:g,onReset:m},t):x.jsx(ve,{annotation:e,active:n},t)}},rn=j.div`
  clear: both;
  position: relative;
  width: 100%;
  
  &:hover ${Te} {
    opacity: 1;
  }
  
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,sn=j.img`
  display: block;
  width: 100%;
  user-select: none;
`,an=j.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,cn=j.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,rt=t=>{var lt,ut,dt;const e=h.useMemo(()=>({...ot,...t,selectors:t.selectors??ot.selectors}),[t]),{src:n,alt:o="Annotation Image",style:r,className:s,containerRef:c,children:a,annotations:u,type:f,selectors:p,value:l,onChange:g,onSubmit:m,activeAnnotationComparator:b,activeAnnotations:w,disableAnnotation:y,disableSelector:_,disableEditor:J,disableOverlay:$,allowTouch:Y,renderSelector:G,renderEditor:T,renderHighlight:H,renderContent:R,renderOverlay:k,enableEditing:S,onAnnotationsChange:D,renderDraggableHighlight:U,enableRemoval:W,onRemoveAnnotation:Q,onConfirm:O,onReset:P,onImageMouseUp:M,onImageMouseDown:E,onImageMouseMove:z,onImageClick:i}=e,v=h.useRef(null),C=h.useRef(null),{mousePosition:X,handlers:B,setRef:V}=Ie(),{isHoveringOver:se,setRef:ee}=He(),I=f||((lt=p[0])==null?void 0:lt.TYPE),{callSelectorMethod:N}=ze({selectors:p,effectiveType:I,value:l,onChange:g,disableAnnotation:y}),{getTopAnnotationAt:te}=Fe({annotations:u,selectors:p,imageRef:v,enableEditing:S}),F=!!(O&&P),A=S?Mt(u,D||(()=>{}),F):null,q=h.useRef(null),[he,ae]=h.useState(null),ce=h.useRef(0),pe=(A==null?void 0:A.displayAnnotations)||u,{x:ne,y:ln}=X,st=h.useCallback(d=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&Y&&d.preventDefault(),N("onTouchStart",d)},[Y,N]),at=h.useCallback(d=>{N("onTouchEnd",d)},[N]),it=h.useCallback(d=>{B.onTouchMove(d),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&Y&&d.preventDefault(),N("onTouchMove",d)},[B,Y,N]),ke=h.useCallback(d=>{B.onTouchLeave(d)},[B]);h.useEffect(()=>{const d=C.current;if(!(!Y||!d))return d.ontouchstart=st,d.ontouchend=at,d.ontouchmove=it,d.ontouchcancel=ke,()=>{d&&(d.ontouchstart=null,d.ontouchend=null,d.ontouchmove=null,d.ontouchcancel=null)}},[Y,st,at,it,ke]);const un=h.useCallback(d=>{v.current=d,V(d)},[V]),dn=h.useCallback(d=>{ee(d),c&&(typeof c=="function"?c(d):c.current=d)},[ee,c]),fn=h.useCallback(d=>{B.onMouseMove(d.nativeEvent),z==null||z(d),N("onMouseMove",d)},[B,z,N]),hn=h.useCallback(d=>{B.onMouseLeave(d.nativeEvent)},[B]),pn=h.useCallback(d=>{M==null||M(d),N("onMouseUp",d)},[M,N]),gn=h.useCallback(d=>{E==null||E(d),N("onMouseDown",d)},[E,N]),mn=h.useCallback(d=>{i==null||i(d),N("onClick",d)},[i,N]),xn=h.useCallback(()=>{m&&l&&m(l)},[m,l]),Se=h.useCallback(d=>{var K;d.key==="Escape"&&g&&((K=l==null?void 0:l.selection)!=null&&K.showEditor||l!=null&&l.geometry)&&g({selection:void 0,geometry:void 0,data:void 0})},[l,g]);h.useEffect(()=>{var d;if((d=l==null?void 0:l.selection)!=null&&d.showEditor)return window.addEventListener("keydown",Se),()=>window.removeEventListener("keydown",Se)},[(ut=l==null?void 0:l.selection)==null?void 0:ut.showEditor,Se]),h.useEffect(()=>()=>{q.current&&clearTimeout(q.current)},[]);const ct=h.useCallback((d,K)=>w&&w.some(ge=>b?b(d,ge):d.data.id===ge)||K===d,[w,b]),De=te(ne,ln);console.log("topAnnotationAtMouse",De);const bn=h.useCallback(d=>{ce.current=Date.now()+50,ae(null),A?A.handleConfirm(d):O==null||O(d)},[A,O]),vn=h.useCallback(d=>{ce.current=Date.now()+50,ae(null),A?A.handleReset(d):P==null||P(d)},[A,P]);return x.jsxs(rn,{ref:dn,style:r,className:s,onMouseLeave:hn,onTouchCancel:ke,onMouseMove:fn,$allowTouch:Y,children:[x.jsx(sn,{ref:un,src:n,alt:o,draggable:!1}),x.jsxs(an,{children:[pe.map(d=>{var Ae;if(!((Ae=d.data)!=null&&Ae.id))return console.warn("Annotation missing data.id:",d),null;const K=ct(d,De);if(S&&A&&!A.isDragging){const Pe=Date.now()<ce.current;K&&he!==d.data.id&&!Pe?(q.current&&(clearTimeout(q.current),q.current=null),ae(d.data.id),A.setDraggingId(d.data.id)):!K&&he===d.data.id&&(q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{ae(null),A.setDraggingId(null),q.current=null},100))}if(S&&U&&A){const ge=A.draggingId===d.data.id,Pe=A.isDragging&&A.draggingId===d.data.id;return F&&(A.editingAnnotationId,d.data.id),U({key:d.data.id,annotation:d,active:K,isDragging:Pe,isHovered:ge,onDotDragStart:A.handleDotDragStart,onDotDrag:A.handleDotDrag,onMoveStart:A.handleMoveStart,onMove:A.handleMove,onDragEnd:A.handleMouseUp,enableRemoval:W,onRemoveAnnotation:Q,onConfirm:F?bn:O,onReset:F?vn:P})}return H?H({key:d.data.id,annotation:d,active:K}):null}),!_&&(l==null?void 0:l.geometry)&&G&&G({annotation:l})]}),x.jsx(cn,{ref:C,"data-testid":"annotation-target",onClick:mn,onMouseUp:pn,onMouseDown:gn}),!$&&k&&k({type:I,annotation:l}),pe.map(d=>{var K;return(K=d.data)!=null&&K.id&&ct(d,De)&&R!=null?R({key:d.data.id,annotation:d}):null}),!J&&((dt=l==null?void 0:l.selection)==null?void 0:dt.showEditor)&&T&&g&&T({annotation:l,onChange:g,onSubmit:xn}),a]})};L.Annotation=rt,L.ConfirmResetButtons=Je,L.DeleteButton=We,L.DraggableBox=Qe,L.DraggableDot=de,L.MoveButton=Ze,L.OvalSelector=fe,L.PointSelector=ie,L.RectangleSelector=re,L.default=rt,L.useAnnotationHitDetection=Fe,L.useMouseHover=He,L.useRelativeMousePosition=Ie,L.useSelectorMethods=ze,Object.defineProperties(L,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
