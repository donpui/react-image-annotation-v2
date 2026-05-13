(function(j,x){typeof exports=="object"&&typeof module<"u"?x(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],x):(j=typeof globalThis<"u"?globalThis:j||self,x(j.ReactImageAnnotation={},j.React,j.styled))})(this,function(j,x,I){"use strict";var ve={exports:{}},de={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dt;function Ut(){if(dt)return de;dt=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(r,s,i){var a=null;if(i!==void 0&&(a=""+i),s.key!==void 0&&(a=""+s.key),"key"in s){i={};for(var l in s)l!=="key"&&(i[l]=s[l])}else i=s;return s=i.ref,{$$typeof:n,type:r,key:a,ref:s!==void 0?s:null,props:i}}return de.Fragment=t,de.jsx=e,de.jsxs=e,de}var he={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht;function zt(){return ht||(ht=1,process.env.NODE_ENV!=="production"&&function(){function n(o){if(o==null)return null;if(typeof o=="function")return o.$$typeof===N?null:o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case h:return"Fragment";case M:return"Profiler";case c:return"StrictMode";case A:return"Suspense";case P:return"SuspenseList";case te:return"Activity"}if(typeof o=="object")switch(typeof o.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),o.$$typeof){case b:return"Portal";case k:return o.displayName||"Context";case O:return(o._context.displayName||"Context")+".Consumer";case T:var m=o.render;return o=o.displayName,o||(o=m.displayName||m.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case B:return m=o.displayName||null,m!==null?m:n(o.type)||"Memo";case H:m=o._payload,o=o._init;try{return n(o(m))}catch{}}return null}function t(o){return""+o}function e(o){try{t(o);var m=!1}catch{m=!0}if(m){m=console;var _=m.error,S=typeof Symbol=="function"&&Symbol.toStringTag&&o[Symbol.toStringTag]||o.constructor.name||"Object";return _.call(m,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",S),t(o)}}function r(o){if(o===h)return"<>";if(typeof o=="object"&&o!==null&&o.$$typeof===H)return"<...>";try{var m=n(o);return m?"<"+m+">":"<...>"}catch{return"<...>"}}function s(){var o=G.A;return o===null?null:o.getOwner()}function i(){return Error("react-stack-top-frame")}function a(o){if(X.call(o,"key")){var m=Object.getOwnPropertyDescriptor(o,"key").get;if(m&&m.isReactWarning)return!1}return o.key!==void 0}function l(o,m){function _(){ne||(ne=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",m))}_.isReactWarning=!0,Object.defineProperty(o,"key",{get:_,configurable:!0})}function u(){var o=n(this.type);return $[o]||($[o]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),o=this.props.ref,o!==void 0?o:null}function d(o,m,_,S,V,ge){var E=_.ref;return o={$$typeof:v,type:o,key:m,props:_,_owner:S},(E!==void 0?E:null)!==null?Object.defineProperty(o,"ref",{enumerable:!1,get:u}):Object.defineProperty(o,"ref",{enumerable:!1,value:null}),o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(o,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(o,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:V}),Object.defineProperty(o,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ge}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o}function p(o,m,_,S,V,ge){var E=m.children;if(E!==void 0)if(S)if(W(E)){for(S=0;S<E.length;S++)y(E[S]);Object.freeze&&Object.freeze(E)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else y(E);if(X.call(m,"key")){E=n(o);var L=Object.keys(m).filter(function(C){return C!=="key"});S=0<L.length?"{key: someKey, "+L.join(": ..., ")+": ...}":"{key: someKey}",Q[E+S]||(L=0<L.length?"{"+L.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,S,E,L,E),Q[E+S]=!0)}if(E=null,_!==void 0&&(e(_),E=""+_),a(m)&&(e(m.key),E=""+m.key),"key"in m){_={};for(var K in m)K!=="key"&&(_[K]=m[K])}else _=m;return E&&l(_,typeof o=="function"?o.displayName||o.name||"Unknown":o),d(o,E,_,s(),V,ge)}function y(o){R(o)?o._store&&(o._store.validated=1):typeof o=="object"&&o!==null&&o.$$typeof===H&&(o._payload.status==="fulfilled"?R(o._payload.value)&&o._payload.value._store&&(o._payload.value._store.validated=1):o._store&&(o._store.validated=1))}function R(o){return typeof o=="object"&&o!==null&&o.$$typeof===v}var g=x,v=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),k=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),N=Symbol.for("react.client.reference"),G=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=Object.prototype.hasOwnProperty,W=Array.isArray,U=console.createTask?console.createTask:function(){return null};g={react_stack_bottom_frame:function(o){return o()}};var ne,$={},J=g.react_stack_bottom_frame.bind(g,i)(),Z=U(r(i)),Q={};he.Fragment=h,he.jsx=function(o,m,_){var S=1e4>G.recentlyCreatedOwnerStacks++;return p(o,m,_,!1,S?Error("react-stack-top-frame"):J,S?U(r(o)):Z)},he.jsxs=function(o,m,_){var S=1e4>G.recentlyCreatedOwnerStacks++;return p(o,m,_,!0,S?Error("react-stack-top-frame"):J,S?U(r(o)):Z)}}()),he}var mt;function Ft(){return mt||(mt=1,process.env.NODE_ENV==="production"?ve.exports=Ut():ve.exports=zt()),ve.exports}var w=Ft(),be={exports:{}},Je={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt;function Vt(){if(pt)return Je;pt=1;var n=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Je.c=function(t){return n.H.useMemoCache(t)},Je}var Ze={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gt;function Bt(){return gt||(gt=1,process.env.NODE_ENV!=="production"&&function(){var n=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;Ze.c=function(t){var e=n.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e.useMemoCache(t)}}()),Ze}var xt;function Wt(){return xt||(xt=1,process.env.NODE_ENV==="production"?be.exports=Vt():be.exports=Bt()),be.exports}var D=Wt();const vt=(n,t)=>{const e=t||n.currentTarget;if(!e||typeof e.getBoundingClientRect!="function")return{x:0,y:0};const r=e.getBoundingClientRect(),s=n.clientX-r.x,i=n.clientY-r.y;return{x:s/r.width*100,y:i/r.height*100}},bt=(n,t,e)=>Math.max(n,Math.min(t,e)),$t=n=>{if(!n.currentTarget||typeof n.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const t=n.targetTouches[0],e=n.currentTarget.getBoundingClientRect(),r=t.pageX-e.left,s=t.pageY-(e.top+window.scrollY);return{x:bt(0,100,r/e.width*100),y:bt(0,100,s/e.height*100)}},ee=(n,t)=>Jt(n)?Zt(n)?(Qt(n)&&n.preventDefault(),$t(n)):{x:null}:vt(n,t),Jt=n=>n.targetTouches!==void 0,Zt=n=>n.targetTouches.length===1,Qt=n=>n.type==="touchmove";function Et(n,t={}){const{onPositionChange:e,throttleMs:r=16}=t,s=x.useRef({x:null,y:null}),[i,a]=x.useState({x:null,y:null}),l=x.useRef(0),u=x.useRef(null),d=x.useCallback(b=>{if(s.current=b,e){const h=Date.now();r<=0||h-l.current>=r?(a(b),e(b),l.current=h):(u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{a(b),e(b),l.current=Date.now()},r-(h-l.current)))}},[e,r]),p=x.useCallback(b=>{try{const h=n.current;if(!h){d({x:null,y:null});return}const c=vt(b,h);d(c)}catch{d({x:null,y:null})}},[n,d]),y=x.useCallback(b=>{const h=n.current;if(!h||b.targetTouches.length!==1)return;const c=b.targetTouches[0],M=h.offsetParent;if(M)try{const O=c.pageX-M.offsetLeft,k=c.pageY-M.offsetTop,T=h,A=T.width,P=T.height;A>0&&P>0?d({x:O/A*100,y:k/P*100}):d({x:null,y:null})}catch{d({x:null,y:null})}},[n,d]),R=x.useCallback(b=>{d({x:null,y:null})},[d]),g=x.useCallback(b=>{d({x:null,y:null})},[d]),v=x.useCallback(()=>s.current,[]);return x.useEffect(()=>()=>{u.current&&clearTimeout(u.current)},[]),{mousePosition:e?i:s.current,handlers:{onMouseMove:p,onMouseLeave:R,onTouchMove:y,onTouchLeave:g},getCurrentMousePosition:v}}function yt(n){const t=D.c(12),{annotations:e,selectors:r,imageRef:s,enableEditing:i}=n;let a,l;t[0]!==r?(l=new Map(r.map(qt)),t[0]=r,t[1]=l):l=t[1],a=l;const u=a;let d;t[2]!==u?(d=v=>{if(v)return u.get(v)},t[2]=u,t[3]=d):d=t[3];const p=d;let y;t[4]!==e||t[5]!==i||t[6]!==p||t[7]!==s?(y=(v,b)=>{const h=s.current;if(!h||v===null||b===null)return;const c={x:v,y:b},M=e.map(k=>{const{geometry:T}=k;if(!T)return null;const A=p(T.type);if(!A)return null;let P=T;return i&&T.type==="RECTANGLE"&&typeof T.x=="number"&&typeof T.y=="number"&&typeof T.width=="number"&&typeof T.height=="number"&&(P={...T,x:Math.max(0,T.x-2),y:Math.max(0,T.y-2),width:Math.min(100-T.x+2,T.width+4),height:Math.min(100-T.y+2,T.height+4)}),A.intersects(c,P,h)?k:null}).filter(Kt);return M.length===0?void 0:M.sort((k,T)=>{const A=p(k.geometry.type),P=p(T.geometry.type);return!A||!P?0:A.area(k.geometry,h)-P.area(T.geometry,h)})[0]},t[4]=e,t[5]=i,t[6]=p,t[7]=s,t[8]=y):y=t[8];const R=y;let g;return t[9]!==p||t[10]!==R?(g={getTopAnnotationAt:R,getSelectorByType:p},t[9]=p,t[10]=R,t[11]=g):g=t[11],g}function Kt(n){return n!==null}function qt(n){return[n.TYPE,n]}function en(n){const t=D.c(17),{targetRef:e,imageRef:r,annotations:s,selectors:i,enableEditing:a,throttleMs:l}=n,u=l===void 0?50:l,[d,p]=x.useState(void 0),y=x.useRef(void 0),R=x.useRef(void 0);let g;t[0]!==s||t[1]!==a||t[2]!==r||t[3]!==i?(g={annotations:s,selectors:i,imageRef:r,enableEditing:a},t[0]=s,t[1]=a,t[2]=r,t[3]=i,t[4]=g):g=t[4];const{getTopAnnotationAt:v}=yt(g);let b;t[5]!==v?(b=B=>{var X;const{x:H,y:te}=B,N=v(H,te),G=(X=N==null?void 0:N.data)==null?void 0:X.id;G!==R.current&&(R.current=G,y.current=N,p(N))},t[5]=v,t[6]=b):b=t[6];const h=b;let c;t[7]!==h||t[8]!==u?(c={onPositionChange:h,throttleMs:u},t[7]=h,t[8]=u,t[9]=c):c=t[9];const{handlers:M}=Et(e,c);let O;t[10]===Symbol.for("react.memo_cache_sentinel")?(O=()=>{p(void 0),y.current=void 0,R.current=void 0},t[10]=O):O=t[10];let k;t[11]!==s||t[12]!==i?(k=[s,i],t[11]=s,t[12]=i,t[13]=k):k=t[13],x.useEffect(O,k);let T;T=M;const A=T;let P;return t[14]!==d||t[15]!==A?(P={hoveredAnnotation:d,mouseHandlers:A},t[14]=d,t[15]=A,t[16]=P):P=t[16],P}function Tt({selectors:n,effectiveType:t,value:e,onChange:r,disableAnnotation:s}){const i=x.useCallback(l=>{if(l)return n.find(u=>u.TYPE===l)},[n]);return{callSelectorMethod:x.useCallback((l,u)=>{if(s)return;const d=i(t);if(!(d!=null&&d.methods[l]))return;const p=d.methods[l];try{const y=p(e||{},u);if(typeof y>"u"){process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(l)} of type ${t} returned undefined. Make sure to explicitly return the previous state or new state.`);return}r==null||r(y)}catch(y){process.env.NODE_ENV!=="production"&&console.error(`Error calling selector method ${String(l)}:`,y)}},[s,i,t,e,r]),getSelectorByType:i}}const Qe=I.div`
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
`,tn=I.div`
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
`;function wt(n){const t=D.c(3),{geometry:e}=n.annotation;if(!e)return null;const r=`${e.y}%`,s=`${e.x}%`;let i;return t[0]!==r||t[1]!==s?(i=w.jsx(tn,{style:{top:r,left:s}}),t[0]=r,t[1]=s,t[2]=i):i=t[2],i}const nn=I.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,on=I.div`
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
`,rn=n=>{const t=D.c(11),{onChange:e,onSubmit:r,onFocus:s,onBlur:i,value:a}=n;let l;t[0]!==i||t[1]!==e||t[2]!==s||t[3]!==a?(l=w.jsx(nn,{children:w.jsx("textarea",{placeholder:"Write description",onFocus:s,onBlur:i,onChange:e,value:a})}),t[0]=i,t[1]=e,t[2]=s,t[3]=a,t[4]=l):l=t[4];let u;t[5]!==r||t[6]!==a?(u=a&&w.jsx(on,{onClick:r,children:"Submit"}),t[5]=r,t[6]=a,t[7]=u):u=t[7];let d;return t[8]!==l||t[9]!==u?(d=w.jsxs(x.Fragment,{children:[l,u]}),t[8]=l,t[9]=u,t[10]=d):d=t[10],d},sn=I.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,cn=I.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${sn} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,ln=n=>{var M;const t=D.c(17),{annotation:e,onChange:r,onSubmit:s,className:i,style:a}=n,l=i===void 0?"":i;let u;t[0]!==a?(u=a===void 0?{}:a,t[0]=a,t[1]=u):u=t[1];const d=u,{geometry:p}=e;if(!p)return null;const y=`${p.x}%`,R=`${p.y+p.height}%`;let g;t[2]!==d||t[3]!==y||t[4]!==R?(g={position:"absolute",left:y,top:R,...d},t[2]=d,t[3]=y,t[4]=R,t[5]=g):g=t[5];let v;t[6]!==e||t[7]!==r?(v=O=>r({...e,data:{...e.data,text:O.target.value}}),t[6]=e,t[7]=r,t[8]=v):v=t[8];const b=(M=e.data)==null?void 0:M.text;let h;t[9]!==s||t[10]!==v||t[11]!==b?(h=w.jsx(rn,{onChange:v,onSubmit:s,value:b}),t[9]=s,t[10]=v,t[11]=b,t[12]=h):h=t[12];let c;return t[13]!==l||t[14]!==g||t[15]!==h?(c=w.jsx(cn,{className:l,style:g,children:h}),t[13]=l,t[14]=g,t[15]=h,t[16]=c):c=t[16],c},Ee=I.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,an=I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Rt(n){const t=D.c(21),{geometry:e}=n.annotation;if(!e)return null;const r=`${e.y}%`;let s;t[0]!==r?(s=w.jsx(Ee,{style:{height:r,width:"100%"}}),t[0]=r,t[1]=s):s=t[1];const i=`${e.y}%`,a=`${e.height}%`,l=`${e.x}%`;let u;t[2]!==i||t[3]!==a||t[4]!==l?(u=w.jsx(Ee,{style:{top:i,height:a,width:l}}),t[2]=i,t[3]=a,t[4]=l,t[5]=u):u=t[5];const d=`${e.y}%`,p=`${e.x+e.width}%`,y=`${e.height}%`,R=`${100-(e.x+e.width)}%`;let g;t[6]!==d||t[7]!==p||t[8]!==y||t[9]!==R?(g=w.jsx(Ee,{style:{top:d,left:p,height:y,width:R}}),t[6]=d,t[7]=p,t[8]=y,t[9]=R,t[10]=g):g=t[10];const v=`${e.y+e.height}%`,b=`${100-(e.y+e.height)}%`;let h;t[11]!==v||t[12]!==b?(h=w.jsx(Ee,{style:{top:v,height:b,width:"100%"}}),t[11]=v,t[12]=b,t[13]=h):h=t[13];let c;return t[14]!==n.className||t[15]!==n.style||t[16]!==s||t[17]!==g||t[18]!==h||t[19]!==u?(c=w.jsxs(an,{className:n.className,style:n.style,children:[s,u,g,h]}),t[14]=n.className,t[15]=n.style,t[16]=s,t[17]=g,t[18]=h,t[19]=u,t[20]=c):c=t[20],c}Rt.defaultProps={className:"",style:{}};const un=I.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function _t(n){const t=D.c(10),{geometry:e}=n.annotation;if(!e)return null;const r=`${e.x}%`,s=`${e.y}%`,i=`${e.height}%`,a=`${e.width}%`,l=n.active?"0 0 1px 1px yellow inset":void 0;let u;t[0]!==n.style||t[1]!==r||t[2]!==s||t[3]!==i||t[4]!==a||t[5]!==l?(u={position:"absolute",left:r,top:s,height:i,width:a,boxShadow:l,...n.style},t[0]=n.style,t[1]=r,t[2]=s,t[3]=i,t[4]=a,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==n.className||t[8]!==u?(d=w.jsx(un,{className:n.className,style:u}),t[7]=n.className,t[8]=u,t[9]=d):d=t[9],d}_t.defaultProps={className:"",style:{}};const fn=I.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Ke(n){const t=D.c(10),{geometry:e}=n.annotation;if(!e)return null;const r=`${e.x}%`,s=`${e.y}%`,i=`${e.height}%`,a=`${e.width}%`,l=n.active?"0 0 1px 1px yellow inset":void 0;let u;t[0]!==n.style||t[1]!==r||t[2]!==s||t[3]!==i||t[4]!==a||t[5]!==l?(u={position:"absolute",left:r,top:s,height:i,width:a,boxShadow:l,...n.style},t[0]=n.style,t[1]=r,t[2]=s,t[3]=i,t[4]=a,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==n.className||t[8]!==u?(d=w.jsx(fn,{className:n.className,style:u}),t[7]=n.className,t[8]=u,t[9]=d):d=t[9],d}Ke.defaultProps={className:"",style:{}};const dn=I.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Mt(n){const t=D.c(8),{geometry:e}=n.annotation;if(!e||typeof e.x>"u"||typeof e.y>"u"||typeof e.width>"u"||typeof e.height>"u")return null;const r=`${e.x}%`,s=`${e.y+e.height}%`;let i;t[0]!==n.style||t[1]!==r||t[2]!==s?(i={position:"absolute",left:r,top:s,...n.style},t[0]=n.style,t[1]=r,t[2]=s,t[3]=i):i=t[3];const a=n.annotation.data&&n.annotation.data.text;let l;return t[4]!==n.className||t[5]!==i||t[6]!==a?(l=w.jsx(dn,{style:i,className:n.className,children:a}),t[4]=n.className,t[5]=i,t[6]=a,t[7]=l):l=t[7],l}Mt.defaultProps={style:{},className:""};const St="RECTANGLE";function hn({x:n,y:t},e,r){if(!e)return!1;const s=Math.min(e.x,e.x+e.width),i=Math.max(e.x,e.x+e.width),a=Math.min(e.y,e.y+e.height),l=Math.max(e.y,e.y+e.height);return!(n<s||t<a||n>i||t>l)}function mn(n,t){if(!n||n.width<=0||n.height<=0)return 0;const e=Math.abs(n.width),r=Math.abs(n.height);return e*r}const pn={onTouchStart(n,t){return Ct(n,t)},onTouchEnd(n,t){return At(n)},onTouchMove(n,t){return Nt(n,t)},onMouseDown(n,t){return Ct(n,t)},onMouseUp(n,t){return At(n)},onMouseMove(n,t){return Nt(n,t)}};function Ct(n,t){if(n.selection)return{};{const{x:e,y:r}=ee(t);return{...n,selection:{...n.selection,mode:"SELECTING",anchorX:e,anchorY:r}}}}function At(n,t){if(n.selection){const{selection:e,geometry:r}=n;if(!r)return{};switch(n.selection.mode){case"SELECTING":return{...n,selection:{...n.selection,showEditor:!0,mode:"EDITING"}}}}return n}function Nt(n,t){if(n.selection&&n.selection.mode==="SELECTING"){const{anchorX:e,anchorY:r}=n.selection,{x:s,y:i}=ee(t),a=s-e,l=i-r;return{...n,geometry:{...n.geometry,type:St,x:a>0?e:s,y:l>0?r:i,width:Math.abs(a),height:Math.abs(l)}}}return n}const me={TYPE:St,intersects:hn,area:mn,methods:pn},kt=6,gn=(n={width:100,height:100})=>({marginX:kt/n.width*100,marginY:kt/n.height*100}),Pt="POINT";function xn({x:n,y:t},e,r){if(!e)return!1;const{marginX:s,marginY:i}=gn(r),a=Math.min(s,i)/2,l=Math.abs(n-e.x),u=Math.abs(t-e.y);return l<=a&&u<=a}function vn(n,t){return 0}const pe={TYPE:Pt,intersects:xn,area:vn,methods:{onClick(n,t){return n.geometry?{}:{...n,selection:{...n.selection,showEditor:!0,mode:"EDITING"},geometry:{...n.geometry,...ee(t),width:0,height:0,type:Pt}}}}},ye=n=>Math.pow(n,2),qe="OVAL";function bn({x:n,y:t},e,r){if(!e||!e.width||!e.height)return!1;const s=Math.abs(e.width),i=Math.abs(e.height),a={x:e.x+s/2,y:e.y+i/2},l=s/2,u=i/2;if(l===0||u===0)return!1;const d=n-a.x,p=t-a.y;return ye(d)/ye(l)+ye(p)/ye(u)<=1}function En(n,t){if(!n||n.width<=0||n.height<=0)return 0;const e=Math.abs(n.width),r=Math.abs(n.height);return Math.PI*(e/2)*(r/2)}const yn={onTouchStart(n,t){return Tn(n,t)},onTouchEnd(n,t){return wn(n)},onTouchMove(n,t){return Rn(n,t)},onMouseDown(n,t){if(!n.geometry){const{x:e,y:r}=ee(t);return{...n,selection:{...n.selection,mode:"SELECTING",anchorX:e,anchorY:r}}}return n},onMouseUp(n,t){if(n.selection&&n.selection.mode==="SELECTING")return{...n,selection:{...n.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(n,t){if(n.selection&&n.selection.mode==="SELECTING"){const{anchorX:e,anchorY:r}=n.selection,{x:s,y:i}=ee(t);return{...n,geometry:{...n.geometry,type:qe,x:Math.min(e,s),y:Math.min(r,i),width:Math.abs(s-e),height:Math.abs(i-r)}}}return n}};function Tn(n,t){if(n.selection)return{};{const{x:e,y:r}=ee(t);return{...n,selection:{...n.selection,mode:"SELECTING",anchorX:e,anchorY:r}}}}function wn(n,t){if(n.selection){const{selection:e,geometry:r}=n;if(!r)return{};switch(n.selection.mode){case"SELECTING":return{...n,selection:{...n.selection,showEditor:!0,mode:"EDITING"}}}}return n}function Rn(n,t){if(n.selection&&n.selection.mode==="SELECTING"){const{anchorX:e,anchorY:r}=n.selection,{x:s,y:i}=ee(t),a=s-e,l=i-r;return{...n,geometry:{...n.geometry,type:qe,x:a>0?e:s,y:l>0?r:i,width:Math.abs(a),height:Math.abs(l)}}}return n}const Te={TYPE:qe,intersects:bn,area:En,methods:yn},Ot={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:me.TYPE,selectors:[me,pe,Te],activeAnnotationComparator:(n,t)=>n===t,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!=="production"&&console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderSelector:({annotation:n})=>{var t;switch((t=n.geometry)==null?void 0:t.type){case me.TYPE:return w.jsx(Rt,{annotation:n});case pe.TYPE:return w.jsx(wt,{annotation:n});case Te.TYPE:return w.jsx(Ke,{annotation:n});default:return null}},renderEditor:({annotation:n,onChange:t,onSubmit:e})=>w.jsx(ln,{annotation:n,onChange:t,onSubmit:e}),renderHighlight:({key:n,annotation:t,active:e})=>{switch(t.geometry.type){case me.TYPE:return w.jsx(_t,{annotation:t,active:e},n);case pe.TYPE:return w.jsx(wt,{annotation:t},n);case Te.TYPE:return w.jsx(Ke,{annotation:t,active:e},n);default:return null}},renderContent:({key:n,annotation:t})=>w.jsx(Mt,{annotation:t},n),renderOverlay:({type:n,annotation:t}={})=>{switch(n){case pe.TYPE:return w.jsx(Qe,{children:"Click to Annotate"});default:return w.jsx(Qe,{children:"Click and Drag to Annotate"})}}},_n=I.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${Qe} {
    opacity: 1;
  }

  touch-action: ${n=>n.$allowTouch?"pinch-zoom":"auto"};
`,Mn=I.img`
  display: block;
  width: 100%;
  user-select: none;
`,Sn=I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,Cn=I.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function et(n,t){n&&(typeof n=="function"?n(t):n.current=t)}const tt=x.forwardRef((n,t)=>{var Yt,It,Lt,Dt,Gt,Ht,Xt;const e=D.c(131);let r;const s=n.selectors??Ot.selectors;let i;e[0]!==n||e[1]!==s?(i={...Ot,...n,selectors:s},e[0]=n,e[1]=s,e[2]=i):i=e[2],r=i;const a=r,{src:l,alt:u,style:d,className:p,containerRef:y,imageRef:R,children:g,annotations:v,type:b,selectors:h,value:c,onChange:M,onSubmit:O,activeAnnotationComparator:k,activeAnnotations:T,editModeAnnotationIds:A,disableAnnotation:P,disableSelector:B,disableEditor:H,disableOverlay:te,allowTouch:N,renderSelector:G,renderEditor:X,renderHighlight:W,renderContent:U,renderOverlay:ne,onImageMouseUp:$,onImageMouseDown:J,onImageMouseMove:Z,onImageClick:Q}=a,o=u===void 0?"Annotation Image":u,m=x.useRef(null),_=x.useRef(null),S=!H;let V;e[3]!==v||e[4]!==h||e[5]!==S?(V={targetRef:_,imageRef:m,annotations:v,selectors:h,enableEditing:S,throttleMs:50},e[3]=v,e[4]=h,e[5]=S,e[6]=V):V=e[6];const{hoveredAnnotation:ge,mouseHandlers:E}=en(V),L=b||((Yt=h[0])==null?void 0:Yt.TYPE);let K;e[7]!==P||e[8]!==L||e[9]!==M||e[10]!==h||e[11]!==c?(K={selectors:h,effectiveType:L,value:c,onChange:M,disableAnnotation:P},e[7]=P,e[8]=L,e[9]=M,e[10]=h,e[11]=c,e[12]=K):K=e[12];const{callSelectorMethod:C}=Tt(K),jt=x.useRef(null);let we;e[13]!==N||e[14]!==C?(we=f=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&N&&f.preventDefault(),C("onTouchStart",f)},e[13]=N,e[14]=C,e[15]=we):we=e[15];const Re=we;let _e;e[16]!==C?(_e=f=>{C("onTouchEnd",f)},e[16]=C,e[17]=_e):_e=e[17];const Me=_e;let Se;e[18]!==N||e[19]!==C||e[20]!==E?(Se=f=>{E.onTouchMove(f),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&N&&f.preventDefault(),C("onTouchMove",f)},e[18]=N,e[19]=C,e[20]=E,e[21]=Se):Se=e[21];const Ce=Se;let Ae;e[22]!==E?(Ae=f=>{E.onTouchLeave(f)},e[22]=E,e[23]=Ae):Ae=e[23];const xe=Ae;let Ne,ke;e[24]!==N||e[25]!==Me||e[26]!==xe||e[27]!==Ce||e[28]!==Re?(Ne=()=>{const f=_.current;if(!(!N||!f))return f.ontouchstart=Re,f.ontouchend=Me,f.ontouchmove=Ce,f.ontouchcancel=xe,()=>{f&&(f.ontouchstart=null,f.ontouchend=null,f.ontouchmove=null,f.ontouchcancel=null)}},ke=[N,Re,Me,Ce,xe],e[24]=N,e[25]=Me,e[26]=xe,e[27]=Ce,e[28]=Re,e[29]=Ne,e[30]=ke):(Ne=e[29],ke=e[30]),x.useEffect(Ne,ke);let Pe;e[31]!==t||e[32]!==R?(Pe=f=>{m.current=f,et(t,f),et(R,f)},e[31]=t,e[32]=R,e[33]=Pe):Pe=e[33];const nt=Pe;let Oe;e[34]===Symbol.for("react.memo_cache_sentinel")?(Oe=f=>{_.current=f},e[34]=Oe):Oe=e[34];const kn=Oe;let je;e[35]!==y?(je=f=>{et(y,f)},e[35]=y,e[36]=je):je=e[36];const ot=je;let Ye;e[37]!==C||e[38]!==E||e[39]!==Z?(Ye=f=>{E.onMouseMove(f.nativeEvent),Z==null||Z(f),C("onMouseMove",f)},e[37]=C,e[38]=E,e[39]=Z,e[40]=Ye):Ye=e[40];const rt=Ye;let Ie;e[41]!==E?(Ie=f=>{E.onMouseLeave(f.nativeEvent)},e[41]=E,e[42]=Ie):Ie=e[42];const st=Ie;let Le;e[43]!==C||e[44]!==$?(Le=f=>{$==null||$(f),C("onMouseUp",f)},e[43]=C,e[44]=$,e[45]=Le):Le=e[45];const it=Le;let De;e[46]!==C||e[47]!==J?(De=f=>{J==null||J(f),C("onMouseDown",f)},e[46]=C,e[47]=J,e[48]=De):De=e[48];const ct=De;let Ge;e[49]!==C||e[50]!==Q?(Ge=f=>{Q==null||Q(f),C("onClick",f)},e[49]=C,e[50]=Q,e[51]=Ge):Ge=e[51];const lt=Ge;let He;e[52]!==O||e[53]!==c?(He=()=>{O&&c&&O(c)},e[52]=O,e[53]=c,e[54]=He):He=e[54];const at=He;let Xe;e[55]!==M||e[56]!==(c==null?void 0:c.geometry)||e[57]!==((It=c==null?void 0:c.selection)==null?void 0:It.showEditor)?(Xe=f=>{var Y;f.key==="Escape"&&M&&((Y=c==null?void 0:c.selection)!=null&&Y.showEditor||c!=null&&c.geometry)&&M({selection:void 0,geometry:void 0,data:void 0})},e[55]=M,e[56]=c==null?void 0:c.geometry,e[57]=(Lt=c==null?void 0:c.selection)==null?void 0:Lt.showEditor,e[58]=Xe):Xe=e[58];const oe=Xe;let Ue;e[59]!==oe||e[60]!==((Dt=c==null?void 0:c.selection)==null?void 0:Dt.showEditor)?(Ue=()=>{var f;if((f=c==null?void 0:c.selection)!=null&&f.showEditor)return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},e[59]=oe,e[60]=(Gt=c==null?void 0:c.selection)==null?void 0:Gt.showEditor,e[61]=Ue):Ue=e[61];const ut=(Ht=c==null?void 0:c.selection)==null?void 0:Ht.showEditor;let ze;e[62]!==oe||e[63]!==ut?(ze=[ut,oe],e[62]=oe,e[63]=ut,e[64]=ze):ze=e[64],x.useEffect(Ue,ze);let Fe,Ve;e[65]===Symbol.for("react.memo_cache_sentinel")?(Fe=()=>()=>{jt.current&&clearTimeout(jt.current)},Ve=[],e[65]=Fe,e[66]=Ve):(Fe=e[65],Ve=e[66]),x.useEffect(Fe,Ve);const z=ge;let Be;e[67]!==k||e[68]!==T?(Be=(f,Y)=>T&&T.some(q=>k?k(f,q):f.data.id===q)||Y===f,e[67]=k,e[68]=T,e[69]=Be):Be=e[69];const F=Be,ft=xe;let re;e[70]!==o||e[71]!==nt||e[72]!==l?(re=w.jsx(Mn,{ref:nt,src:l,alt:o}),e[70]=o,e[71]=nt,e[72]=l,e[73]=re):re=e[73];let se;if(e[74]!==v||e[75]!==W||e[76]!==F||e[77]!==z){let f;e[79]!==W||e[80]!==F||e[81]!==z?(f=Y=>{var q;if(!((q=Y.data)!=null&&q.id))return null;const $e=F(Y,z);return W?W({key:Y.data.id,annotation:Y,active:$e}):null},e[79]=W,e[80]=F,e[81]=z,e[82]=f):f=e[82],se=v.map(f),e[74]=v,e[75]=W,e[76]=F,e[77]=z,e[78]=se}else se=e[78];let ie;e[83]!==B||e[84]!==G||e[85]!==c?(ie=!B&&(c==null?void 0:c.geometry)&&G&&G({annotation:c}),e[83]=B,e[84]=G,e[85]=c,e[86]=ie):ie=e[86];let ce;e[87]!==se||e[88]!==ie?(ce=w.jsxs(Sn,{children:[se,ie]}),e[87]=se,e[88]=ie,e[89]=ce):ce=e[89];let le;e[90]!==lt||e[91]!==ct||e[92]!==it?(le=w.jsx(Cn,{ref:kn,"data-testid":"annotation-target",onClick:lt,onMouseUp:it,onMouseDown:ct}),e[90]=lt,e[91]=ct,e[92]=it,e[93]=le):le=e[93];let ae;e[94]!==te||e[95]!==L||e[96]!==ne||e[97]!==c?(ae=!te&&ne&&ne({type:L,annotation:c}),e[94]=te,e[95]=L,e[96]=ne,e[97]=c,e[98]=ae):ae=e[98];let ue;if(e[99]!==v||e[100]!==A||e[101]!==U||e[102]!==F||e[103]!==z){let f;e[105]!==A||e[106]!==U||e[107]!==F||e[108]!==z?(f=Y=>{var q;if(!((q=Y.data)!=null&&q.id))return null;const $e=(A==null?void 0:A.includes(Y.data.id))||!1;return(F(Y,z)||$e)&&U!=null?U({key:Y.data.id,annotation:Y}):null},e[105]=A,e[106]=U,e[107]=F,e[108]=z,e[109]=f):f=e[109],ue=v.map(f),e[99]=v,e[100]=A,e[101]=U,e[102]=F,e[103]=z,e[104]=ue}else ue=e[104];let fe;e[110]!==H||e[111]!==at||e[112]!==M||e[113]!==X||e[114]!==c?(fe=!H&&((Xt=c==null?void 0:c.selection)==null?void 0:Xt.showEditor)&&X&&M&&X({annotation:c,onChange:M,onSubmit:at}),e[110]=H,e[111]=at,e[112]=M,e[113]=X,e[114]=c,e[115]=fe):fe=e[115];let We;return e[116]!==N||e[117]!==g||e[118]!==p||e[119]!==st||e[120]!==rt||e[121]!==ot||e[122]!==d||e[123]!==ft||e[124]!==re||e[125]!==ce||e[126]!==le||e[127]!==ae||e[128]!==ue||e[129]!==fe?(We=w.jsxs(_n,{ref:ot,style:d,className:p,onMouseLeave:st,onTouchCancel:ft,onMouseMove:rt,$allowTouch:N,children:[re,ce,le,ae,ue,fe,g]}),e[116]=N,e[117]=g,e[118]=p,e[119]=st,e[120]=rt,e[121]=ot,e[122]=d,e[123]=ft,e[124]=re,e[125]=ce,e[126]=le,e[127]=ae,e[128]=ue,e[129]=fe,e[130]=We):We=e[130],We});tt.displayName="Annotation";function An(n,t){if(!n||typeof n.getBoundingClientRect!="function")return!1;const{pageX:e,pageY:r}=t,{left:s,right:i,bottom:a,top:l}=n.getBoundingClientRect();return e>s&&e<i&&r>l&&r<a}function Nn(){const n=D.c(5),[t,e]=x.useState(!1),r=x.useRef(null);let s,i;n[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{const d=p=>{const y=r.current,R={pageX:p.pageX,pageY:p.pageY},g=An(y,R);e(g)};return document.addEventListener("mousemove",d,{passive:!0}),()=>{document.removeEventListener("mousemove",d)}},i=[],n[0]=s,n[1]=i):(s=n[0],i=n[1]),x.useEffect(s,i);let a;n[2]===Symbol.for("react.memo_cache_sentinel")?(a=d=>{r.current=d},n[2]=a):a=n[2];const l=a;let u;return n[3]!==t?(u={isHoveringOver:t,setRef:l},n[3]=t,n[4]=u):u=n[4],u}j.Annotation=tt,j.OvalSelector=Te,j.PointSelector=pe,j.RectangleSelector=me,j.default=tt,j.useAnnotationHitDetection=yt,j.useMouseHover=Nn,j.useRelativeMousePosition=Et,j.useSelectorMethods=Tt,Object.defineProperties(j,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
