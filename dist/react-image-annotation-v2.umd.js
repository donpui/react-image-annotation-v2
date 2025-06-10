(function(N,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],h):(N=typeof globalThis<"u"?globalThis:N||self,h(N.ReactImageAnnotation={},N.React,N.styled))})(this,function(N,h,S){"use strict";var re={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function Ze(){if(ve)return $;ve=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,s,c){var a=null;if(c!==void 0&&(a=""+c),s.key!==void 0&&(a=""+s.key),"key"in s){c={};for(var i in s)i!=="key"&&(c[i]=s[i])}else c=s;return s=c.ref,{$$typeof:t,type:r,key:a,ref:s!==void 0?s:null,props:c}}return $.Fragment=e,$.jsx=n,$.jsxs=n,$}var K={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function Qe(){return Ee||(Ee=1,process.env.NODE_ENV!=="production"&&function(){function t(o){if(o==null)return null;if(typeof o=="function")return o.$$typeof===L?null:o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case w:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case X:return"Suspense";case y:return"SuspenseList";case G:return"Activity"}if(typeof o=="object")switch(typeof o.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),o.$$typeof){case E:return"Portal";case z:return(o.displayName||"Context")+".Provider";case I:return(o._context.displayName||"Context")+".Consumer";case _:var m=o.render;return o=o.displayName,o||(o=m.displayName||m.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case O:return m=o.displayName||null,m!==null?m:t(o.type)||"Memo";case D:m=o._payload,o=o._init;try{return t(o(m))}catch{}}return null}function e(o){return""+o}function n(o){try{e(o);var m=!1}catch{m=!0}if(m){m=console;var v=m.error,C=typeof Symbol=="function"&&Symbol.toStringTag&&o[Symbol.toStringTag]||o.constructor.name||"Object";return v.call(m,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",C),e(o)}}function r(o){if(o===w)return"<>";if(typeof o=="object"&&o!==null&&o.$$typeof===D)return"<...>";try{var m=t(o);return m?"<"+m+">":"<...>"}catch{return"<...>"}}function s(){var o=U.A;return o===null?null:o.getOwner()}function c(){return Error("react-stack-top-frame")}function a(o){if(F.call(o,"key")){var m=Object.getOwnPropertyDescriptor(o,"key").get;if(m&&m.isReactWarning)return!1}return o.key!==void 0}function i(o,m){function v(){J||(J=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",m))}v.isReactWarning=!0,Object.defineProperty(o,"key",{get:v,configurable:!0})}function l(){var o=t(this.type);return le[o]||(le[o]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),o=this.props.ref,o!==void 0?o:null}function f(o,m,v,C,j,k,Z,Q){return v=k.ref,o={$$typeof:x,type:o,key:m,props:k,_owner:j},(v!==void 0?v:null)!==null?Object.defineProperty(o,"ref",{enumerable:!1,get:l}):Object.defineProperty(o,"ref",{enumerable:!1,value:null}),o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(o,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(o,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Z}),Object.defineProperty(o,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Q}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o}function p(o,m,v,C,j,k,Z,Q){var R=m.children;if(R!==void 0)if(C)if(B(R)){for(C=0;C<R.length;C++)d(R[C]);Object.freeze&&Object.freeze(R)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else d(R);if(F.call(m,"key")){R=t(o);var V=Object.keys(m).filter(function(xe){return xe!=="key"});C=0<V.length?"{key: someKey, "+V.join(": ..., ")+": ...}":"{key: someKey}",te[R+C]||(V=0<V.length?"{"+V.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,C,R,V,R),te[R+C]=!0)}if(R=null,v!==void 0&&(n(v),R=""+v),a(m)&&(n(m.key),R=""+m.key),"key"in m){v={};for(var ne in m)ne!=="key"&&(v[ne]=m[ne])}else v=m;return R&&i(v,typeof o=="function"?o.displayName||o.name||"Unknown":o),f(o,R,k,j,s(),v,Z,Q)}function d(o){typeof o=="object"&&o!==null&&o.$$typeof===x&&o._store&&(o._store.validated=1)}var b=h,x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),L=Symbol.for("react.client.reference"),U=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Object.prototype.hasOwnProperty,B=Array.isArray,W=console.createTask?console.createTask:function(){return null};b={"react-stack-bottom-frame":function(o){return o()}};var J,le={},P=b["react-stack-bottom-frame"].bind(b,c)(),ue=W(r(c)),te={};K.Fragment=w,K.jsx=function(o,m,v,C,j){var k=1e4>U.recentlyCreatedOwnerStacks++;return p(o,m,v,!1,C,j,k?Error("react-stack-top-frame"):P,k?W(r(o)):ue)},K.jsxs=function(o,m,v,C,j){var k=1e4>U.recentlyCreatedOwnerStacks++;return p(o,m,v,!0,C,j,k?Error("react-stack-top-frame"):P,k?W(r(o)):ue)}}()),K}var ye;function $e(){return ye||(ye=1,process.env.NODE_ENV==="production"?re.exports=Ze():re.exports=Qe()),re.exports}var g=$e();const Te=(t,e)=>{const n=e||t.currentTarget;if(!n||typeof n.getBoundingClientRect!="function")return{x:0,y:0};const r=n.getBoundingClientRect(),s=t.clientX-r.x,c=t.clientY-r.y;return{x:s/r.width*100,y:c/r.height*100}},we=(t,e,n)=>Math.max(t,Math.min(e,n)),Ke=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),r=e.pageX-n.left,s=e.pageY-(n.top+window.scrollY);return{x:we(0,100,r/n.width*100),y:we(0,100,s/n.height*100)}},H=(t,e)=>qe(t)?et(t)?(tt(t)&&t.preventDefault(),Ke(t)):{x:null}:Te(t,e),qe=t=>t.targetTouches!==void 0,et=t=>t.targetTouches.length===1,tt=t=>t.type==="touchmove";function Re(t){const[e,n]=h.useState({x:null,y:null}),r=h.useCallback(i=>{try{const l=t.current;if(!l){n({x:null,y:null});return}const f=Te(i,l);n(f)}catch{n({x:null,y:null})}},[t]),s=h.useCallback(i=>{const l=t.current;if(!l||i.targetTouches.length!==1)return;const f=i.targetTouches[0],p=l.offsetParent;if(p)try{const d=f.pageX-p.offsetLeft,b=f.pageY-p.offsetTop,x=l,E=x.width,w=x.height;E>0&&w>0?n({x:d/E*100,y:b/w*100}):n({x:null,y:null})}catch{n({x:null,y:null})}},[t]),c=h.useCallback(i=>{n({x:null,y:null})},[]),a=h.useCallback(i=>{n({x:null,y:null})},[]);return{mousePosition:e,handlers:{onMouseMove:r,onMouseLeave:c,onTouchMove:s,onTouchLeave:a}}}function Ce({selectors:t,effectiveType:e,value:n,onChange:r,disableAnnotation:s}){const c=h.useCallback(i=>{if(i)return t.find(l=>l.TYPE===i)},[t]);return{callSelectorMethod:h.useCallback((i,l)=>{if(s)return;const f=c(e);if(!(f!=null&&f.methods[i]))return;const p=f.methods[i];try{const d=p(n||{},l);if(typeof d>"u"){process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(i)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);return}r==null||r(d)}catch(d){process.env.NODE_ENV!=="production"&&console.error(`Error calling selector method ${String(i)}:`,d)}},[s,c,e,n,r]),getSelectorByType:c}}var se={exports:{}},fe={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function nt(){if(Ne)return fe;Ne=1;var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return fe.c=function(e){return t.H.useMemoCache(e)},fe}var he={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me;function ot(){return Me||(Me=1,process.env.NODE_ENV!=="production"&&function(){var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;he.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),he}var _e;function rt(){return _e||(_e=1,process.env.NODE_ENV==="production"?se.exports=nt():se.exports=ot()),se.exports}var Y=rt();function Se(t){const e=Y.c(12),{annotations:n,selectors:r,imageRef:s,enableEditing:c}=t;let a,i;e[0]!==r?(i=new Map(r.map(ct)),e[0]=r,e[1]=i):i=e[1],a=i;const l=a;let f;e[2]!==l?(f=E=>{if(E)return l.get(E)},e[2]=l,e[3]=f):f=e[3];const p=f;let d;e[4]!==n||e[5]!==c||e[6]!==p||e[7]!==s?(d=(E,w)=>{const T=s.current;if(!T||E===null||w===null)return;const M={x:E,y:w},I=n.map((_,X)=>{var L;const{geometry:y}=_;if(!y)return null;const O=p(y.type);if(!O)return console.warn(`🔍 No selector found for type: ${y.type}`),null;let D=y;c&&y.type==="RECTANGLE"&&typeof y.x=="number"&&typeof y.y=="number"&&typeof y.width=="number"&&typeof y.height=="number"&&(D={...y,x:Math.max(0,y.x-2),y:Math.max(0,y.y-2),width:Math.min(100-y.x+2,y.width+4),height:Math.min(100-y.y+2,y.height+4)});const G=O.intersects(M,D,T);return G&&console.log(`🎯 Hit detected on annotation ${(L=_.data)==null?void 0:L.id}:`,{point:M,testGeometry:D,intersects:G}),G?_:null}).filter(st);return I.length===0?void 0:I.sort((_,X)=>{const y=p(_.geometry.type),O=p(X.geometry.type);return!y||!O?0:y.area(_.geometry,T)-O.area(X.geometry,T)})[0]},e[4]=n,e[5]=c,e[6]=p,e[7]=s,e[8]=d):d=e[8];const b=d;let x;return e[9]!==p||e[10]!==b?(x={getTopAnnotationAt:b,getSelectorByType:p},e[9]=p,e[10]=b,e[11]=x):x=e[11],x}function st(t){return t!==null}function ct(t){return[t.TYPE,t]}function it(t={}){const{logToConsole:e=!1,componentName:n="Component"}=t,r=h.useRef(0),s=h.useRef();r.current+=1,e&&process.env.NODE_ENV!=="production"&&console.log(`🔄 ${n} rendered ${r.current} times`);const c=a=>{if(process.env.NODE_ENV!=="production"&&e){if(s.current){const i=[];Object.keys(a).forEach(l=>{a[l]!==s.current[l]&&i.push(l)}),i.length>0&&console.log(`📝 ${n} props changed:`,i)}s.current=a}};return{renderCount:r.current,logPropsChange:c}}const me=S.div`
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
`,at=S.div`
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
`;function ke(t){const e=Y.c(3),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`,s=`${n.x}%`;let c;return e[0]!==r||e[1]!==s?(c=g.jsx(at,{style:{top:r,left:s}}),e[0]=r,e[1]=s,e[2]=c):c=e[2],c}const lt=S.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,ut=S.div`
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
`,dt=t=>{const e=Y.c(11),{onChange:n,onSubmit:r,onFocus:s,onBlur:c,value:a}=t;let i;e[0]!==c||e[1]!==n||e[2]!==s||e[3]!==a?(i=g.jsx(lt,{children:g.jsx("textarea",{placeholder:"Write description",onFocus:s,onBlur:c,onChange:n,value:a})}),e[0]=c,e[1]=n,e[2]=s,e[3]=a,e[4]=i):i=e[4];let l;e[5]!==r||e[6]!==a?(l=a&&g.jsx(ut,{onClick:r,children:"Submit"}),e[5]=r,e[6]=a,e[7]=l):l=e[7];let f;return e[8]!==i||e[9]!==l?(f=g.jsxs(h.Fragment,{children:[i,l]}),e[8]=i,e[9]=l,e[10]=f):f=e[10],f},ft=S.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,ht=S.div`
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
`,mt=t=>{var I;const e=Y.c(17),{annotation:n,onChange:r,onSubmit:s,className:c,style:a}=t,i=c===void 0?"":c;let l;e[0]!==a?(l=a===void 0?{}:a,e[0]=a,e[1]=l):l=e[1];const f=l,{geometry:p}=n;if(!p)return null;const d=`${p.x}%`,b=`${p.y+p.height}%`;let x;e[2]!==f||e[3]!==d||e[4]!==b?(x={position:"absolute",left:d,top:b,...f},e[2]=f,e[3]=d,e[4]=b,e[5]=x):x=e[5];let E;e[6]!==n||e[7]!==r?(E=z=>r({...n,data:{...n.data,text:z.target.value}}),e[6]=n,e[7]=r,e[8]=E):E=e[8];const w=(I=n.data)==null?void 0:I.text;let T;e[9]!==s||e[10]!==E||e[11]!==w?(T=g.jsx(dt,{onChange:E,onSubmit:s,value:w}),e[9]=s,e[10]=E,e[11]=w,e[12]=T):T=e[12];let M;return e[13]!==i||e[14]!==x||e[15]!==T?(M=g.jsx(ht,{className:i,style:x,children:T}),e[13]=i,e[14]=x,e[15]=T,e[16]=M):M=e[16],M},ce=S.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,pt=S.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Ae(t){const e=Y.c(21),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`;let s;e[0]!==r?(s=g.jsx(ce,{style:{height:r,width:"100%"}}),e[0]=r,e[1]=s):s=e[1];const c=`${n.y}%`,a=`${n.height}%`,i=`${n.x}%`;let l;e[2]!==c||e[3]!==a||e[4]!==i?(l=g.jsx(ce,{style:{top:c,height:a,width:i}}),e[2]=c,e[3]=a,e[4]=i,e[5]=l):l=e[5];const f=`${n.y}%`,p=`${n.x+n.width}%`,d=`${n.height}%`,b=`${100-(n.x+n.width)}%`;let x;e[6]!==f||e[7]!==p||e[8]!==d||e[9]!==b?(x=g.jsx(ce,{style:{top:f,left:p,height:d,width:b}}),e[6]=f,e[7]=p,e[8]=d,e[9]=b,e[10]=x):x=e[10];const E=`${n.y+n.height}%`,w=`${100-(n.y+n.height)}%`;let T;e[11]!==E||e[12]!==w?(T=g.jsx(ce,{style:{top:E,height:w,width:"100%"}}),e[11]=E,e[12]=w,e[13]=T):T=e[13];let M;return e[14]!==t.className||e[15]!==t.style||e[16]!==s||e[17]!==x||e[18]!==T||e[19]!==l?(M=g.jsxs(pt,{className:t.className,style:t.style,children:[s,l,x,T]}),e[14]=t.className,e[15]=t.style,e[16]=s,e[17]=x,e[18]=T,e[19]=l,e[20]=M):M=e[20],M}Ae.defaultProps={className:"",style:{}};const gt=S.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Pe(t){const e=Y.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let l;e[0]!==t.style||e[1]!==r||e[2]!==s||e[3]!==c||e[4]!==a||e[5]!==i?(l={position:"absolute",left:r,top:s,height:c,width:a,boxShadow:i,...t.style},e[0]=t.style,e[1]=r,e[2]=s,e[3]=c,e[4]=a,e[5]=i,e[6]=l):l=e[6];let f;return e[7]!==t.className||e[8]!==l?(f=g.jsx(gt,{className:t.className,style:l}),e[7]=t.className,e[8]=l,e[9]=f):f=e[9],f}Pe.defaultProps={className:"",style:{}};const xt=S.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function pe(t){const e=Y.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,s=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,i=t.active?"0 0 1px 1px yellow inset":void 0;let l;e[0]!==t.style||e[1]!==r||e[2]!==s||e[3]!==c||e[4]!==a||e[5]!==i?(l={position:"absolute",left:r,top:s,height:c,width:a,boxShadow:i,...t.style},e[0]=t.style,e[1]=r,e[2]=s,e[3]=c,e[4]=a,e[5]=i,e[6]=l):l=e[6];let f;return e[7]!==t.className||e[8]!==l?(f=g.jsx(xt,{className:t.className,style:l}),e[7]=t.className,e[8]=l,e[9]=f):f=e[9],f}pe.defaultProps={className:"",style:{}};const bt=S.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Oe(t){const e=Y.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const r=`${n.x}%`,s=`${n.y+n.height}%`;let c;e[0]!==t.style||e[1]!==r||e[2]!==s?(c={position:"absolute",left:r,top:s,...t.style},e[0]=t.style,e[1]=r,e[2]=s,e[3]=c):c=e[3];const a=t.annotation.data&&t.annotation.data.text;let i;return e[4]!==t.className||e[5]!==c||e[6]!==a?(i=g.jsx(bt,{style:c,className:t.className,children:a}),e[4]=t.className,e[5]=c,e[6]=a,e[7]=i):i=e[7],i}Oe.defaultProps={style:{},className:""};const je="RECTANGLE";function vt({x:t,y:e},n,r){if(!n)return!1;const s=Math.min(n.x,n.x+n.width),c=Math.max(n.x,n.x+n.width),a=Math.min(n.y,n.y+n.height),i=Math.max(n.y,n.y+n.height);return!(t<s||e<a||t>c||e>i)}function Et(t,e){if(!t||t.width<=0||t.height<=0)return 0;const n=Math.abs(t.width),r=Math.abs(t.height);return n*r}const yt={onTouchStart(t,e){return Ye(t,e)},onTouchEnd(t,e){return Ie(t)},onTouchMove(t,e){return De(t,e)},onMouseDown(t,e){return Ye(t,e)},onMouseUp(t,e){return Ie(t)},onMouseMove(t,e){return De(t,e)}};function Ye(t,e){if(t.selection)return{};{const{x:n,y:r}=H(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function Ie(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function De(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:s,y:c}=H(e),a=s-n,i=c-r;return{...t,geometry:{...t.geometry,type:je,x:a>0?n:s,y:i>0?r:c,width:Math.abs(a),height:Math.abs(i)}}}return t}const q={TYPE:je,intersects:vt,area:Et,methods:yt},Le=6,Tt=(t={width:100,height:100})=>({marginX:Le/t.width*100,marginY:Le/t.height*100}),Xe="POINT";function wt({x:t,y:e},n,r){if(!n)return!1;const{marginX:s,marginY:c}=Tt(r),a=Math.min(s,c)/2,i=Math.abs(t-n.x),l=Math.abs(e-n.y);return i<=a&&l<=a}function Rt(t,e){return 0}const ee={TYPE:Xe,intersects:wt,area:Rt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...H(e),width:0,height:0,type:Xe}}}}},ie=t=>Math.pow(t,2),ge="OVAL";function Ct({x:t,y:e},n,r){if(!n||!n.width||!n.height)return!1;const s=Math.abs(n.width),c=Math.abs(n.height),a={x:n.x+s/2,y:n.y+c/2},i=s/2,l=c/2;if(i===0||l===0)return!1;const f=t-a.x,p=e-a.y;return ie(f)/ie(i)+ie(p)/ie(l)<=1}function Nt(t,e){if(!t||!t.width||!t.height)return 0;const n=Math.abs(t.width),r=Math.abs(t.height);return n<=0||r<=0?0:Math.PI*(n/2)*(r/2)}const Mt={onTouchStart(t,e){return _t(t,e)},onTouchEnd(t,e){return St(t)},onTouchMove(t,e){return kt(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:r}=H(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:s,y:c}=H(e);return{...t,geometry:{...t.geometry,type:ge,x:Math.min(n,s),y:Math.min(r,c),width:Math.abs(s-n),height:Math.abs(c-r)}}}return t}};function _t(t,e){if(t.selection)return{};{const{x:n,y:r}=H(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function St(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function kt(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:s,y:c}=H(e),a=s-n,i=c-r;return{...t,geometry:{...t.geometry,type:ge,x:a>0?n:s,y:i>0?r:c,width:Math.abs(a),height:Math.abs(i)}}}return t}const ae={TYPE:ge,intersects:Ct,area:Nt,methods:Mt},Ge={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:q.TYPE,selectors:[q,ee,ae],activeAnnotationComparator:(t,e)=>t===e,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!=="production"&&console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderSelector:({annotation:t})=>{var e;switch((e=t.geometry)==null?void 0:e.type){case q.TYPE:return g.jsx(Ae,{annotation:t});case ee.TYPE:return g.jsx(ke,{annotation:t});case ae.TYPE:return g.jsx(pe,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>g.jsx(mt,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case q.TYPE:return g.jsx(Pe,{annotation:e,active:n},t);case ee.TYPE:return g.jsx(ke,{annotation:e},t);case ae.TYPE:return g.jsx(pe,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>g.jsx(Oe,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case ee.TYPE:return g.jsx(me,{children:"Click to Annotate"});default:return g.jsx(me,{children:"Click and Drag to Annotate"})}}},At=S.div`
  clear: both;
  position: relative;
  width: 100%;
  
  &:hover ${me} {
    opacity: 1;
  }
  
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,Pt=S.img`
  display: block;
  width: 100%;
  user-select: none;
`,Ot=S.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,jt=S.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,Ue=t=>{var ze,Be,We;const e=h.useMemo(()=>({...Ge,...t,selectors:t.selectors??Ge.selectors}),[t]),{src:n,alt:r="Annotation Image",style:s,className:c,containerRef:a,children:i,annotations:l,type:f,selectors:p,value:d,onChange:b,onSubmit:x,activeAnnotationComparator:E,activeAnnotations:w,disableAnnotation:T,disableSelector:M,disableEditor:I,disableOverlay:z,allowTouch:_,renderSelector:X,renderEditor:y,renderHighlight:O,renderContent:D,renderOverlay:G,onImageMouseUp:L,onImageMouseDown:U,onImageMouseMove:F,onImageClick:B}=e,W=h.useRef(null),J=h.useRef(null),{mousePosition:le,handlers:P}=Re(J),{logPropsChange:ue}=it({logToConsole:!0,componentName:"Annotation"});process.env.NODE_ENV!=="production"&&ue(e);const te=f||((ze=p[0])==null?void 0:ze.TYPE),{callSelectorMethod:o}=Ce({selectors:p,effectiveType:te,value:d,onChange:b,disableAnnotation:T}),{getTopAnnotationAt:m}=Se({annotations:l,selectors:p,imageRef:W}),v=h.useRef(null),{x:C,y:j}=le,k=h.useCallback(u=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&_&&u.preventDefault(),o("onTouchStart",u)},[_,o]),Z=h.useCallback(u=>{o("onTouchEnd",u)},[o]),Q=h.useCallback(u=>{P.onTouchMove(u),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&_&&u.preventDefault(),o("onTouchMove",u)},[P,_,o]),R=h.useCallback(u=>{P.onTouchLeave(u)},[P]);h.useEffect(()=>{const u=J.current;if(!(!_||!u))return u.ontouchstart=k,u.ontouchend=Z,u.ontouchmove=Q,u.ontouchcancel=R,()=>{u&&(u.ontouchstart=null,u.ontouchend=null,u.ontouchmove=null,u.ontouchcancel=null)}},[_,k,Z,Q,R]);const V=h.useCallback(u=>{W.current=u},[]),ne=h.useCallback(u=>{J.current=u},[]),xe=h.useCallback(u=>{a&&(typeof a=="function"?a(u):a.current=u)},[a]),Dt=h.useCallback(u=>{P.onMouseMove(u.nativeEvent),F==null||F(u),o("onMouseMove",u)},[P,F,o]),Lt=h.useCallback(u=>{P.onMouseLeave(u.nativeEvent)},[P]),Xt=h.useCallback(u=>{L==null||L(u),o("onMouseUp",u)},[L,o]),Gt=h.useCallback(u=>{U==null||U(u),o("onMouseDown",u)},[U,o]),Ut=h.useCallback(u=>{B==null||B(u),o("onClick",u)},[B,o]),Vt=h.useCallback(()=>{x&&d&&x(d)},[x,d]),be=h.useCallback(u=>{var A;u.key==="Escape"&&b&&((A=d==null?void 0:d.selection)!=null&&A.showEditor||d!=null&&d.geometry)&&b({selection:void 0,geometry:void 0,data:void 0})},[d,b]);h.useEffect(()=>{var u;if((u=d==null?void 0:d.selection)!=null&&u.showEditor)return window.addEventListener("keydown",be),()=>window.removeEventListener("keydown",be)},[(Be=d==null?void 0:d.selection)==null?void 0:Be.showEditor,be]),h.useEffect(()=>()=>{v.current&&clearTimeout(v.current)},[]);const Ve=h.useCallback((u,A)=>w&&w.some(de=>E?E(u,de):u.data.id===de)||A===u,[w,E]),He=m(C,j),Ht=h.useCallback((u,A,oe,de,Ft,zt)=>{var Je;process.env.NODE_ENV!=="production"&&console.log("🔄 Annotation Render Profile:",{id:u,phase:A,actualDuration:`${oe.toFixed(2)}ms`,baseDuration:`${de.toFixed(2)}ms`,startTime:Ft,commitTime:zt,annotationsCount:l.length,hasValue:!!d,showEditor:!!((Je=d==null?void 0:d.selection)!=null&&Je.showEditor)})},[l.length,d]),Fe=g.jsxs(At,{ref:xe,style:s,className:c,onMouseLeave:Lt,onTouchCancel:R,onMouseMove:Dt,$allowTouch:_,children:[g.jsx(Pt,{ref:V,src:n,alt:r}),g.jsxs(Ot,{children:[l.map(u=>{var oe;if(!((oe=u.data)!=null&&oe.id))return console.warn("Annotation missing data.id:",u),null;const A=Ve(u,He);return O?O({key:u.data.id,annotation:u,active:A}):null}),!M&&(d==null?void 0:d.geometry)&&X&&X({annotation:d})]}),g.jsx(jt,{ref:ne,"data-testid":"annotation-target",onClick:Ut,onMouseUp:Xt,onMouseDown:Gt}),!z&&G&&G({type:te,annotation:d}),l.map(u=>{var A;return(A=u.data)!=null&&A.id&&Ve(u,He)&&D!=null?D({key:u.data.id,annotation:u}):null}),!I&&((We=d==null?void 0:d.selection)==null?void 0:We.showEditor)&&y&&b&&y({annotation:d,onChange:b,onSubmit:Vt}),i]});return process.env.NODE_ENV!=="production"?g.jsx(h.Profiler,{id:"Annotation",onRender:Ht,children:Fe}):Fe};function Yt(t,e){if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageX:n,pageY:r}=e,{left:s,right:c,bottom:a,top:i}=t.getBoundingClientRect();return n>s&&n<c&&r>i&&r<a}function It(){const t=Y.c(5),[e,n]=h.useState(!1),r=h.useRef(null);let s,c;t[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{const f=p=>{const d=r.current,b={pageX:p.pageX,pageY:p.pageY},x=Yt(d,b);n(x)};return document.addEventListener("mousemove",f,{passive:!0}),()=>{document.removeEventListener("mousemove",f)}},c=[],t[0]=s,t[1]=c):(s=t[0],c=t[1]),h.useEffect(s,c);let a;t[2]===Symbol.for("react.memo_cache_sentinel")?(a=f=>{r.current=f},t[2]=a):a=t[2];const i=a;let l;return t[3]!==e?(l={isHoveringOver:e,setRef:i},t[3]=e,t[4]=l):l=t[4],l}N.Annotation=Ue,N.OvalSelector=ae,N.PointSelector=ee,N.RectangleSelector=q,N.default=Ue,N.useAnnotationHitDetection=Se,N.useMouseHover=It,N.useRelativeMousePosition=Re,N.useSelectorMethods=Ce,Object.defineProperties(N,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
