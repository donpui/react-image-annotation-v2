(function(I,R){typeof exports=="object"&&typeof module<"u"?R(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],R):(I=typeof globalThis<"u"?globalThis:I||self,R(I.ReactImageAnnotation={},I.React,I.styled))})(this,function(I,R,H){"use strict";var de={exports:{}},re={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var et;function _t(){if(et)return re;et=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,c,l){var i=null;if(l!==void 0&&(i=""+l),c.key!==void 0&&(i=""+c.key),"key"in c){l={};for(var r in c)r!=="key"&&(l[r]=c[r])}else l=c;return c=l.ref,{$$typeof:n,type:s,key:i,ref:c!==void 0?c:null,props:l}}return re.Fragment=e,re.jsx=t,re.jsxs=t,re}var se={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tt;function Ct(){return tt||(tt=1,process.env.NODE_ENV!=="production"&&function(){function n(o){if(o==null)return null;if(typeof o=="function")return o.$$typeof===G?null:o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case E:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case T:return"Suspense";case N:return"SuspenseList";case J:return"Activity"}if(typeof o=="object")switch(typeof o.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),o.$$typeof){case f:return"Portal";case k:return o.displayName||"Context";case j:return(o._context.displayName||"Context")+".Consumer";case y:var h=o.render;return o=o.displayName,o||(o=h.displayName||h.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case L:return h=o.displayName||null,h!==null?h:n(o.type)||"Memo";case F:h=o._payload,o=o._init;try{return n(o(h))}catch{}}return null}function e(o){return""+o}function t(o){try{e(o);var h=!1}catch{h=!0}if(h){h=console;var w=h.error,C=typeof Symbol=="function"&&Symbol.toStringTag&&o[Symbol.toStringTag]||o.constructor.name||"Object";return w.call(h,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",C),e(o)}}function s(o){if(o===E)return"<>";if(typeof o=="object"&&o!==null&&o.$$typeof===F)return"<...>";try{var h=n(o);return h?"<"+h+">":"<...>"}catch{return"<...>"}}function c(){var o=D.A;return o===null?null:o.getOwner()}function l(){return Error("react-stack-top-frame")}function i(o){if(Y.call(o,"key")){var h=Object.getOwnPropertyDescriptor(o,"key").get;if(h&&h.isReactWarning)return!1}return o.key!==void 0}function r(o,h){function w(){V||(V=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",h))}w.isReactWarning=!0,Object.defineProperty(o,"key",{get:w,configurable:!0})}function d(){var o=n(this.type);return Q[o]||(Q[o]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),o=this.props.ref,o!==void 0?o:null}function u(o,h,w,C,M,W){var A=w.ref;return o={$$typeof:v,type:o,key:h,props:w,_owner:C},(A!==void 0?A:null)!==null?Object.defineProperty(o,"ref",{enumerable:!1,get:d}):Object.defineProperty(o,"ref",{enumerable:!1,value:null}),o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(o,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(o,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:M}),Object.defineProperty(o,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:W}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o}function g(o,h,w,C,M,W){var A=h.children;if(A!==void 0)if(C)if(Z(A)){for(C=0;C<A.length;C++)x(A[C]);Object.freeze&&Object.freeze(A)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else x(A);if(Y.call(h,"key")){A=n(o);var O=Object.keys(h).filter(function(K){return K!=="key"});C=0<O.length?"{key: someKey, "+O.join(": ..., ")+": ...}":"{key: someKey}",X[A+C]||(O=0<O.length?"{"+O.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,C,A,O,A),X[A+C]=!0)}if(A=null,w!==void 0&&(t(w),A=""+w),i(h)&&(t(h.key),A=""+h.key),"key"in h){w={};for(var P in h)P!=="key"&&(w[P]=h[P])}else w=h;return A&&r(w,typeof o=="function"?o.displayName||o.name||"Unknown":o),u(o,A,w,c(),M,W)}function x(o){a(o)?o._store&&(o._store.validated=1):typeof o=="object"&&o!==null&&o.$$typeof===F&&(o._payload.status==="fulfilled"?a(o._payload.value)&&o._payload.value._store&&(o._payload.value._store.validated=1):o._store&&(o._store.validated=1))}function a(o){return typeof o=="object"&&o!==null&&o.$$typeof===v}var p=R,v=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),k=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),G=Symbol.for("react.client.reference"),D=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=Object.prototype.hasOwnProperty,Z=Array.isArray,U=console.createTask?console.createTask:function(){return null};p={react_stack_bottom_frame:function(o){return o()}};var V,Q={},z=p.react_stack_bottom_frame.bind(p,l)(),B=U(s(l)),X={};se.Fragment=E,se.jsx=function(o,h,w){var C=1e4>D.recentlyCreatedOwnerStacks++;return g(o,h,w,!1,C?Error("react-stack-top-frame"):z,C?U(s(o)):B)},se.jsxs=function(o,h,w){var C=1e4>D.recentlyCreatedOwnerStacks++;return g(o,h,w,!0,C?Error("react-stack-top-frame"):z,C?U(s(o)):B)}}()),se}var nt;function St(){return nt||(nt=1,process.env.NODE_ENV==="production"?de.exports=_t():de.exports=Ct()),de.exports}var _=St(),fe={exports:{}},Pe={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ot;function At(){if(ot)return Pe;ot=1;var n=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Pe.c=function(e){return n.H.useMemoCache(e)},Pe}var je={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt;function kt(){return rt||(rt=1,process.env.NODE_ENV!=="production"&&function(){var n=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;je.c=function(e){var t=n.H;return t===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),t.useMemoCache(e)}}()),je}var st;function Nt(){return st||(st=1,process.env.NODE_ENV==="production"?fe.exports=At():fe.exports=kt()),fe.exports}var $=Nt();const it=(n,e)=>{const t=e||n.currentTarget;if(!t||typeof t.getBoundingClientRect!="function")return{x:0,y:0};const s=t.getBoundingClientRect(),c=n.clientX-s.x,l=n.clientY-s.y;return{x:c/s.width*100,y:l/s.height*100}},ct=(n,e,t)=>Math.max(n,Math.min(e,t)),Ot=n=>{if(!n.currentTarget||typeof n.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=n.targetTouches[0],t=n.currentTarget.getBoundingClientRect(),s=e.pageX-t.left,c=e.pageY-(t.top+window.scrollY);return{x:ct(0,100,s/t.width*100),y:ct(0,100,c/t.height*100)}},te=(n,e)=>Pt(n)?jt(n)?(Yt(n)&&n.preventDefault(),Ot(n)):{x:null}:it(n,e),Pt=n=>n.targetTouches!==void 0,jt=n=>n.targetTouches.length===1,Yt=n=>n.type==="touchmove";function lt(n,e={}){const{onPositionChange:t,throttleMs:s=16}=e,c=R.useRef({x:null,y:null}),[l,i]=R.useState({x:null,y:null}),r=R.useRef(0),d=R.useRef(null),u=R.useCallback(f=>{if(c.current=f,t){const E=Date.now();s<=0||E-r.current>=s?(i(f),t(f),r.current=E):(d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{i(f),t(f),r.current=Date.now()},s-(E-r.current)))}},[t,s]),g=R.useCallback(f=>{try{const E=n.current;if(!E){u({x:null,y:null});return}const b=it(f,E);u(b)}catch{u({x:null,y:null})}},[n,u]),x=R.useCallback(f=>{const E=n.current;if(!E||f.targetTouches.length!==1)return;const b=f.targetTouches[0],S=E.offsetParent;if(S)try{const j=b.pageX-S.offsetLeft,k=b.pageY-S.offsetTop,y=E,T=y.width,N=y.height;T>0&&N>0?u({x:j/T*100,y:k/N*100}):u({x:null,y:null})}catch{u({x:null,y:null})}},[n,u]),a=R.useCallback(f=>{u({x:null,y:null})},[u]),p=R.useCallback(f=>{u({x:null,y:null})},[u]),v=R.useCallback(()=>c.current,[]);return R.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]),{mousePosition:t?l:c.current,handlers:{onMouseMove:g,onMouseLeave:a,onTouchMove:x,onTouchLeave:p},getCurrentMousePosition:v}}function at(n){const e=$.c(12),{annotations:t,selectors:s,imageRef:c,enableEditing:l}=n;let i,r;e[0]!==s?(r=new Map(s.map(Lt)),e[0]=s,e[1]=r):r=e[1],i=r;const d=i;let u;e[2]!==d?(u=v=>{if(v)return d.get(v)},e[2]=d,e[3]=u):u=e[3];const g=u;let x;e[4]!==t||e[5]!==l||e[6]!==g||e[7]!==c?(x=(v,f)=>{const E=c.current;if(!E||v===null||f===null)return;const b={x:v,y:f},S=t.map(k=>{const{geometry:y}=k;if(!y)return null;const T=g(y.type);if(!T)return null;let N=y;return l&&y.type==="RECTANGLE"&&typeof y.x=="number"&&typeof y.y=="number"&&typeof y.width=="number"&&typeof y.height=="number"&&(N={...y,x:Math.max(0,y.x-2),y:Math.max(0,y.y-2),width:Math.min(100-y.x+2,y.width+4),height:Math.min(100-y.y+2,y.height+4)}),T.intersects(b,N,E)?k:null}).filter(It);return S.length===0?void 0:S.sort((k,y)=>{const T=g(k.geometry.type),N=g(y.geometry.type);return!T||!N?0:T.area(k.geometry,E)-N.area(y.geometry,E)})[0]},e[4]=t,e[5]=l,e[6]=g,e[7]=c,e[8]=x):x=e[8];const a=x;let p;return e[9]!==g||e[10]!==a?(p={getTopAnnotationAt:a,getSelectorByType:g},e[9]=g,e[10]=a,e[11]=p):p=e[11],p}function It(n){return n!==null}function Lt(n){return[n.TYPE,n]}function Dt(n){const e=$.c(17),{targetRef:t,imageRef:s,annotations:c,selectors:l,enableEditing:i,throttleMs:r}=n,d=r===void 0?50:r,[u,g]=R.useState(void 0),x=R.useRef(void 0),a=R.useRef(void 0);let p;e[0]!==c||e[1]!==i||e[2]!==s||e[3]!==l?(p={annotations:c,selectors:l,imageRef:s,enableEditing:i},e[0]=c,e[1]=i,e[2]=s,e[3]=l,e[4]=p):p=e[4];const{getTopAnnotationAt:v}=at(p);let f;e[5]!==v?(f=L=>{var Y;const{x:F,y:J}=L,G=v(F,J),D=(Y=G==null?void 0:G.data)==null?void 0:Y.id;D!==a.current&&(a.current=D,x.current=G,g(G))},e[5]=v,e[6]=f):f=e[6];const E=f;let b;e[7]!==E||e[8]!==d?(b={onPositionChange:E,throttleMs:d},e[7]=E,e[8]=d,e[9]=b):b=e[9];const{handlers:S}=lt(t,b);let j;e[10]===Symbol.for("react.memo_cache_sentinel")?(j=()=>{g(void 0),x.current=void 0,a.current=void 0},e[10]=j):j=e[10];let k;e[11]!==c||e[12]!==l?(k=[c,l],e[11]=c,e[12]=l,e[13]=k):k=e[13],R.useEffect(j,k);let y;y=S;const T=y;let N;return e[14]!==u||e[15]!==T?(N={hoveredAnnotation:u,mouseHandlers:T},e[14]=u,e[15]=T,e[16]=N):N=e[16],N}function ut({selectors:n,effectiveType:e,value:t,onChange:s,disableAnnotation:c}){const l=R.useCallback(r=>{if(r)return n.find(d=>d.TYPE===r)},[n]);return{callSelectorMethod:R.useCallback((r,d)=>{if(c)return;const u=l(e);if(!(u!=null&&u.methods[r]))return;const g=u.methods[r];try{const x=g(t||{},d);if(typeof x>"u"){process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(r)} of type ${e} returned undefined. Make sure to explicitly return the previous state or new state.`);return}s==null||s(x)}catch(x){process.env.NODE_ENV!=="production"&&console.error(`Error calling selector method ${String(r)}:`,x)}},[c,l,e,t,s]),getSelectorByType:l}}function Ye(n,e){n&&(typeof n=="function"?n(e):n.current=e)}function Ht(n,e){var Et,bt,yt,Tt,wt,Rt;const t=$.c(97),{src:s,alt:c,style:l,className:i,containerRef:r,imageRef:d,annotations:u,type:g,selectors:x,value:a,onChange:p,onSubmit:v,activeAnnotationComparator:f,activeAnnotations:E,editModeAnnotationIds:b,disableAnnotation:S,disableSelector:j,disableEditor:k,disableOverlay:y,allowTouch:T,renderSelector:N,renderEditor:L,renderHighlight:F,renderContent:J,renderOverlay:G,onImageMouseUp:D,onImageMouseDown:Y,onImageMouseMove:Z,onImageClick:U}=n,V=c===void 0?"Annotation Image":c,Q=R.useRef(null),z=R.useRef(null),B=!k;let X;t[0]!==u||t[1]!==x||t[2]!==B?(X={targetRef:z,imageRef:Q,annotations:u,selectors:x,enableEditing:B,throttleMs:50},t[0]=u,t[1]=x,t[2]=B,t[3]=X):X=t[3];const{hoveredAnnotation:o,mouseHandlers:h}=Dt(X),w=g||((Et=x[0])==null?void 0:Et.TYPE);let C;t[4]!==S||t[5]!==w||t[6]!==p||t[7]!==x||t[8]!==a?(C={selectors:x,effectiveType:w,value:a,onChange:p,disableAnnotation:S},t[4]=S,t[5]=w,t[6]=p,t[7]=x,t[8]=a,t[9]=C):C=t[9];const{callSelectorMethod:M}=ut(C);let W;t[10]!==T||t[11]!==M?(W=m=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&T&&m.preventDefault(),M("onTouchStart",m)},t[10]=T,t[11]=M,t[12]=W):W=t[12];const A=W;let O;t[13]!==M?(O=m=>{M("onTouchEnd",m)},t[13]=M,t[14]=O):O=t[14];const P=O;let K;t[15]!==T||t[16]!==M||t[17]!==h?(K=m=>{h.onTouchMove(m),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&T&&m.preventDefault(),M("onTouchMove",m)},t[15]=T,t[16]=M,t[17]=h,t[18]=K):K=t[18];const q=K;let ge;t[19]!==h?(ge=m=>{h.onTouchLeave(m)},t[19]=h,t[20]=ge):ge=t[20];const ae=ge;let ve,xe;t[21]!==T||t[22]!==P||t[23]!==ae||t[24]!==q||t[25]!==A?(ve=()=>{const m=z.current;if(!(!T||!m))return m.ontouchstart=A,m.ontouchend=P,m.ontouchmove=q,m.ontouchcancel=ae,()=>{m.ontouchstart=null,m.ontouchend=null,m.ontouchmove=null,m.ontouchcancel=null}},xe=[T,A,P,q,ae],t[21]=T,t[22]=P,t[23]=ae,t[24]=q,t[25]=A,t[26]=ve,t[27]=xe):(ve=t[26],xe=t[27]),R.useEffect(ve,xe);let Ee;t[28]!==e||t[29]!==d?(Ee=m=>{Q.current=m,Ye(e,m),Ye(d,m)},t[28]=e,t[29]=d,t[30]=Ee):Ee=t[30];const He=Ee;let be;t[31]===Symbol.for("react.memo_cache_sentinel")?(be=m=>{z.current=m},t[31]=be):be=t[31];const yn=be;let ye;t[32]!==r?(ye=m=>{Ye(r,m)},t[32]=r,t[33]=ye):ye=t[33];const Ge=ye;let Te;t[34]!==M||t[35]!==h||t[36]!==Z?(Te=m=>{h.onMouseMove(m.nativeEvent),Z==null||Z(m),M("onMouseMove",m)},t[34]=M,t[35]=h,t[36]=Z,t[37]=Te):Te=t[37];const Ue=Te;let we;t[38]!==h?(we=m=>{h.onMouseLeave(m.nativeEvent)},t[38]=h,t[39]=we):we=t[39];const Xe=we;let Re;t[40]!==M||t[41]!==D?(Re=m=>{D==null||D(m),M("onMouseUp",m)},t[40]=M,t[41]=D,t[42]=Re):Re=t[42];const Fe=Re;let Me;t[43]!==M||t[44]!==Y?(Me=m=>{Y==null||Y(m),M("onMouseDown",m)},t[43]=M,t[44]=Y,t[45]=Me):Me=t[45];const Ve=Me;let _e;t[46]!==M||t[47]!==U?(_e=m=>{U==null||U(m),M("onClick",m)},t[46]=M,t[47]=U,t[48]=_e):_e=t[48];const ze=_e;let Ce;t[49]!==v||t[50]!==a?(Ce=()=>{v&&a&&v(a)},t[49]=v,t[50]=a,t[51]=Ce):Ce=t[51];const Be=Ce;let Se;t[52]!==p||t[53]!==(a==null?void 0:a.geometry)||t[54]!==((bt=a==null?void 0:a.selection)==null?void 0:bt.showEditor)?(Se=m=>{var ue;m.key==="Escape"&&p&&((ue=a==null?void 0:a.selection)!=null&&ue.showEditor||a!=null&&a.geometry)&&p({selection:void 0,geometry:void 0,data:void 0})},t[52]=p,t[53]=a==null?void 0:a.geometry,t[54]=(yt=a==null?void 0:a.selection)==null?void 0:yt.showEditor,t[55]=Se):Se=t[55];const ne=Se;let Ae;t[56]!==ne||t[57]!==((Tt=a==null?void 0:a.selection)==null?void 0:Tt.showEditor)?(Ae=()=>{var m;if((m=a==null?void 0:a.selection)!=null&&m.showEditor)return window.addEventListener("keydown",ne),()=>window.removeEventListener("keydown",ne)},t[56]=ne,t[57]=(wt=a==null?void 0:a.selection)==null?void 0:wt.showEditor,t[58]=Ae):Ae=t[58];const We=(Rt=a==null?void 0:a.selection)==null?void 0:Rt.showEditor;let ke;t[59]!==ne||t[60]!==We?(ke=[We,ne],t[59]=ne,t[60]=We,t[61]=ke):ke=t[61],R.useEffect(Ae,ke);const $e=o;let Ne;t[62]!==f||t[63]!==E?(Ne=(m,ue)=>E&&E.some(Mt=>f?f(m,Mt):m.data.id===Mt)||ue===m,t[62]=f,t[63]=E,t[64]=Ne):Ne=t[64];const Je=Ne,Ze=ae,Qe=!!j,Ke=!!y,qe=!!k;let oe;t[65]!==J||t[66]!==L||t[67]!==F||t[68]!==G||t[69]!==N?(oe={renderHighlight:F,renderSelector:N,renderOverlay:G,renderContent:J,renderEditor:L},t[65]=J,t[66]=L,t[67]=F,t[68]=G,t[69]=N,t[70]=oe):oe=t[70];let Oe;return t[71]!==T||t[72]!==V||t[73]!==u||t[74]!==i||t[75]!==b||t[76]!==w||t[77]!==Be||t[78]!==ze||t[79]!==Ve||t[80]!==Fe||t[81]!==Xe||t[82]!==Ue||t[83]!==p||t[84]!==Ge||t[85]!==He||t[86]!==Je||t[87]!==s||t[88]!==l||t[89]!==Ze||t[90]!==Qe||t[91]!==Ke||t[92]!==qe||t[93]!==oe||t[94]!==$e||t[95]!==a?(Oe={setContainerRef:Ge,style:l,className:i,onContainerMouseLeave:Xe,onContainerTouchCancel:Ze,onContainerMouseMove:Ue,allowTouch:T,setImageRef:He,src:s,alt:V,annotations:u,shouldAnnotationBeActive:Je,topAnnotationAtMouse:$e,disableSelector:Qe,value:a,setTargetRef:yn,onInteractionTargetClick:ze,onInteractionTargetMouseUp:Fe,onInteractionTargetMouseDown:Ve,disableOverlay:Ke,effectiveType:w,editModeAnnotationIds:b,disableEditor:qe,onChange:p,onEditorSubmit:Be,renderSlots:oe},t[71]=T,t[72]=V,t[73]=u,t[74]=i,t[75]=b,t[76]=w,t[77]=Be,t[78]=ze,t[79]=Ve,t[80]=Fe,t[81]=Xe,t[82]=Ue,t[83]=p,t[84]=Ge,t[85]=He,t[86]=Je,t[87]=s,t[88]=l,t[89]=Ze,t[90]=Qe,t[91]=Ke,t[92]=qe,t[93]=oe,t[94]=$e,t[95]=a,t[96]=Oe):Oe=t[96],Oe}const Gt=H.div`
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
`;function dt(n){const e=$.c(3),{geometry:t}=n.annotation;if(!t)return null;const s=`${t.y}%`,c=`${t.x}%`;let l;return e[0]!==s||e[1]!==c?(l=_.jsx(Gt,{style:{top:s,left:c}}),e[0]=s,e[1]=c,e[2]=l):l=e[2],l}const Ut=H.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,Xt=H.div`
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
`,Ft=n=>{const e=$.c(11),{onChange:t,onSubmit:s,onFocus:c,onBlur:l,value:i}=n;let r;e[0]!==l||e[1]!==t||e[2]!==c||e[3]!==i?(r=_.jsx(Ut,{children:_.jsx("textarea",{placeholder:"Write description",onFocus:c,onBlur:l,onChange:t,value:i})}),e[0]=l,e[1]=t,e[2]=c,e[3]=i,e[4]=r):r=e[4];let d;e[5]!==s||e[6]!==i?(d=i&&_.jsx(Xt,{onClick:s,children:"Submit"}),e[5]=s,e[6]=i,e[7]=d):d=e[7];let u;return e[8]!==r||e[9]!==d?(u=_.jsxs(R.Fragment,{children:[r,d]}),e[8]=r,e[9]=d,e[10]=u):u=e[10],u},ie={},Vt={},zt=H.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Bt=H.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${zt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,Wt=n=>{var b;const e=$.c(15),{annotation:t,onChange:s,onSubmit:c,className:l,style:i}=n,r=l===void 0?"":l,d=i===void 0?ie:i,{geometry:u}=t;if(!u)return null;const g=`${u.x}%`,x=`${u.y+u.height}%`;let a;e[0]!==d||e[1]!==g||e[2]!==x?(a={position:"absolute",left:g,top:x,...d},e[0]=d,e[1]=g,e[2]=x,e[3]=a):a=e[3];let p;e[4]!==t||e[5]!==s?(p=S=>s({...t,data:{...t.data,text:S.target.value}}),e[4]=t,e[5]=s,e[6]=p):p=e[6];const v=(b=t.data)==null?void 0:b.text;let f;e[7]!==c||e[8]!==p||e[9]!==v?(f=_.jsx(Ft,{onChange:p,onSubmit:c,value:v}),e[7]=c,e[8]=p,e[9]=v,e[10]=f):f=e[10];let E;return e[11]!==r||e[12]!==a||e[13]!==f?(E=_.jsx(Bt,{className:r,style:a,children:f}),e[11]=r,e[12]=a,e[13]=f,e[14]=E):E=e[14],E},he=H.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,$t=H.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Jt(n){const e=$.c(21),{annotation:t,className:s,style:c}=n,l=s===void 0?"":s,i=c===void 0?ie:c,{geometry:r}=t;if(!r)return null;const d=`${r.y}%`;let u;e[0]!==d?(u=_.jsx(he,{style:{height:d,width:"100%"}}),e[0]=d,e[1]=u):u=e[1];const g=`${r.y}%`,x=`${r.height}%`,a=`${r.x}%`;let p;e[2]!==g||e[3]!==x||e[4]!==a?(p=_.jsx(he,{style:{top:g,height:x,width:a}}),e[2]=g,e[3]=x,e[4]=a,e[5]=p):p=e[5];const v=`${r.y}%`,f=`${r.x+r.width}%`,E=`${r.height}%`,b=`${100-(r.x+r.width)}%`;let S;e[6]!==f||e[7]!==E||e[8]!==b||e[9]!==v?(S=_.jsx(he,{style:{top:v,left:f,height:E,width:b}}),e[6]=f,e[7]=E,e[8]=b,e[9]=v,e[10]=S):S=e[10];const j=`${r.y+r.height}%`,k=`${100-(r.y+r.height)}%`;let y;e[11]!==j||e[12]!==k?(y=_.jsx(he,{style:{top:j,height:k,width:"100%"}}),e[11]=j,e[12]=k,e[13]=y):y=e[13];let T;return e[14]!==l||e[15]!==i||e[16]!==S||e[17]!==y||e[18]!==u||e[19]!==p?(T=_.jsxs($t,{className:l,style:i,children:[u,p,S,y]}),e[14]=l,e[15]=i,e[16]=S,e[17]=y,e[18]=u,e[19]=p,e[20]=T):T=e[20],T}const Zt=H.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Qt(n){const e=$.c(10),{annotation:t,className:s,style:c,active:l}=n,i=s===void 0?"":s,r=c===void 0?ie:c,{geometry:d}=t;if(!d)return null;const u=`${d.x}%`,g=`${d.y}%`,x=`${d.height}%`,a=`${d.width}%`,p=l?"0 0 1px 1px yellow inset":void 0;let v;e[0]!==r||e[1]!==u||e[2]!==g||e[3]!==x||e[4]!==a||e[5]!==p?(v={position:"absolute",left:u,top:g,height:x,width:a,boxShadow:p,...r},e[0]=r,e[1]=u,e[2]=g,e[3]=x,e[4]=a,e[5]=p,e[6]=v):v=e[6];let f;return e[7]!==i||e[8]!==v?(f=_.jsx(Zt,{className:i,style:v}),e[7]=i,e[8]=v,e[9]=f):f=e[9],f}const Kt=H.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function ft(n){const e=$.c(10),{annotation:t,className:s,style:c,active:l}=n,i=s===void 0?"":s,r=c===void 0?ie:c,{geometry:d}=t;if(!d)return null;const u=`${d.x}%`,g=`${d.y}%`,x=`${d.height}%`,a=`${d.width}%`,p=l?"0 0 1px 1px yellow inset":void 0;let v;e[0]!==r||e[1]!==u||e[2]!==g||e[3]!==x||e[4]!==a||e[5]!==p?(v={position:"absolute",left:u,top:g,height:x,width:a,boxShadow:p,...r},e[0]=r,e[1]=u,e[2]=g,e[3]=x,e[4]=a,e[5]=p,e[6]=v):v=e[6];let f;return e[7]!==i||e[8]!==v?(f=_.jsx(Kt,{className:i,style:v}),e[7]=i,e[8]=v,e[9]=f):f=e[9],f}const qt=H.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function en(n){const e=$.c(8),{annotation:t,style:s,className:c}=n,l=s===void 0?ie:s,i=c===void 0?"":c,{geometry:r}=t;if(!r||typeof r.x>"u"||typeof r.y>"u"||typeof r.width>"u"||typeof r.height>"u")return null;const d=`${r.x}%`,u=`${r.y+r.height}%`;let g;e[0]!==l||e[1]!==d||e[2]!==u?(g={position:"absolute",left:d,top:u,...l},e[0]=l,e[1]=d,e[2]=u,e[3]=g):g=e[3];const x=t.data&&t.data.text;let a;return e[4]!==i||e[5]!==g||e[6]!==x?(a=_.jsx(qt,{style:g,className:i,children:x}),e[4]=i,e[5]=g,e[6]=x,e[7]=a):a=e[7],a}const Ie=H.div`
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
`,ht="RECTANGLE";function tn({x:n,y:e},t,s){if(!t)return!1;const c=Math.min(t.x,t.x+t.width),l=Math.max(t.x,t.x+t.width),i=Math.min(t.y,t.y+t.height),r=Math.max(t.y,t.y+t.height);return!(n<c||e<i||n>l||e>r)}function nn(n,e){if(!n||n.width<=0||n.height<=0)return 0;const t=Math.abs(n.width),s=Math.abs(n.height);return t*s}const on={onTouchStart(n,e){return pt(n,e)},onTouchEnd(n,e){return mt(n)},onTouchMove(n,e){return gt(n,e)},onMouseDown(n,e){return pt(n,e)},onMouseUp(n,e){return mt(n)},onMouseMove(n,e){return gt(n,e)}};function pt(n,e){if(n.selection)return{};{const{x:t,y:s}=te(e);return{...n,selection:{...n.selection,mode:"SELECTING",anchorX:t,anchorY:s}}}}function mt(n,e){if(n.selection){const{selection:t,geometry:s}=n;if(!s)return{};switch(n.selection.mode){case"SELECTING":return{...n,selection:{...n.selection,showEditor:!0,mode:"EDITING"}}}}return n}function gt(n,e){if(n.selection&&n.selection.mode==="SELECTING"){const{anchorX:t,anchorY:s}=n.selection,{x:c,y:l}=te(e),i=c-t,r=l-s;return{...n,geometry:{...n.geometry,type:ht,x:i>0?t:c,y:r>0?s:l,width:Math.abs(i),height:Math.abs(r)}}}return n}const ce={TYPE:ht,intersects:tn,area:nn,methods:on},vt=6,rn=(n={width:100,height:100})=>({marginX:vt/n.width*100,marginY:vt/n.height*100}),xt="POINT";function sn({x:n,y:e},t,s){if(!t)return!1;const{marginX:c,marginY:l}=rn(s),i=Math.min(c,l)/2,r=Math.abs(n-t.x),d=Math.abs(e-t.y);return r<=i&&d<=i}function cn(n,e){return 0}const le={TYPE:xt,intersects:sn,area:cn,methods:{onClick(n,e){return n.geometry?{}:{...n,selection:{...n.selection,showEditor:!0,mode:"EDITING"},geometry:{...n.geometry,...te(e),width:0,height:0,type:xt}}}}},pe=n=>Math.pow(n,2),Le="OVAL";function ln({x:n,y:e},t,s){if(!t||!t.width||!t.height)return!1;const c=Math.abs(t.width),l=Math.abs(t.height),i={x:t.x+c/2,y:t.y+l/2},r=c/2,d=l/2;if(r===0||d===0)return!1;const u=n-i.x,g=e-i.y;return pe(u)/pe(r)+pe(g)/pe(d)<=1}function an(n,e){if(!n||n.width<=0||n.height<=0)return 0;const t=Math.abs(n.width),s=Math.abs(n.height);return Math.PI*(t/2)*(s/2)}const un={onTouchStart(n,e){return dn(n,e)},onTouchEnd(n,e){return fn(n)},onTouchMove(n,e){return hn(n,e)},onMouseDown(n,e){if(!n.geometry){const{x:t,y:s}=te(e);return{...n,selection:{...n.selection,mode:"SELECTING",anchorX:t,anchorY:s}}}return n},onMouseUp(n,e){if(n.selection&&n.selection.mode==="SELECTING")return{...n,selection:{...n.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(n,e){if(n.selection&&n.selection.mode==="SELECTING"){const{anchorX:t,anchorY:s}=n.selection,{x:c,y:l}=te(e);return{...n,geometry:{...n.geometry,type:Le,x:Math.min(t,c),y:Math.min(s,l),width:Math.abs(c-t),height:Math.abs(l-s)}}}return n}};function dn(n,e){if(n.selection)return{};{const{x:t,y:s}=te(e);return{...n,selection:{...n.selection,mode:"SELECTING",anchorX:t,anchorY:s}}}}function fn(n,e){if(n.selection){const{selection:t,geometry:s}=n;if(!s)return{};switch(n.selection.mode){case"SELECTING":return{...n,selection:{...n.selection,showEditor:!0,mode:"EDITING"}}}}return n}function hn(n,e){if(n.selection&&n.selection.mode==="SELECTING"){const{anchorX:t,anchorY:s}=n.selection,{x:c,y:l}=te(e),i=c-t,r=l-s;return{...n,geometry:{...n.geometry,type:Le,x:i>0?t:c,y:r>0?s:l,width:Math.abs(i),height:Math.abs(r)}}}return n}const me={TYPE:Le,intersects:ln,area:an,methods:un},ee={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:ce.TYPE,selectors:[ce,le,me],activeAnnotationComparator:(n,e)=>n===e,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!=="production"&&console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderSelector:({annotation:n})=>{var e;switch((e=n.geometry)==null?void 0:e.type){case ce.TYPE:return _.jsx(Jt,{annotation:n});case le.TYPE:return _.jsx(dt,{annotation:n});case me.TYPE:return _.jsx(ft,{annotation:n});default:return null}},renderEditor:({annotation:n,onChange:e,onSubmit:t})=>_.jsx(Wt,{annotation:n,onChange:e,onSubmit:t}),renderHighlight:({key:n,annotation:e,active:t})=>{switch(e.geometry.type){case ce.TYPE:return _.jsx(Qt,{annotation:e,active:t},n);case le.TYPE:return _.jsx(dt,{annotation:e},n);case me.TYPE:return _.jsx(ft,{annotation:e,active:t},n);default:return null}},renderContent:({key:n,annotation:e})=>_.jsx(en,{annotation:e},n),renderOverlay:({type:n,annotation:e}=Vt)=>{switch(n){case le.TYPE:return _.jsx(Ie,{children:"Click to Annotate"});default:return _.jsx(Ie,{children:"Click and Drag to Annotate"})}}},pn=H.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${Ie} {
    opacity: 1;
  }

  touch-action: ${n=>n.$allowTouch?"pinch-zoom":"auto"};
`,mn=H.img`
  display: block;
  width: 100%;
  user-select: none;
`,gn=H.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,vn=H.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function xn(n){var A;const e=$.c(62),{setContainerRef:t,style:s,className:c,onContainerMouseLeave:l,onContainerTouchCancel:i,onContainerMouseMove:r,allowTouch:d,setImageRef:u,src:g,alt:x,annotations:a,renderSlots:p,shouldAnnotationBeActive:v,topAnnotationAtMouse:f,disableSelector:E,value:b,setTargetRef:S,onInteractionTargetClick:j,onInteractionTargetMouseUp:k,onInteractionTargetMouseDown:y,disableOverlay:T,effectiveType:N,editModeAnnotationIds:L,disableEditor:F,onChange:J,onEditorSubmit:G,children:D}=n,{renderHighlight:Y,renderSelector:Z,renderOverlay:U,renderContent:V,renderEditor:Q}=p;let z;e[0]!==x||e[1]!==u||e[2]!==g?(z=_.jsx(mn,{ref:u,src:g,alt:x}),e[0]=x,e[1]=u,e[2]=g,e[3]=z):z=e[3];let B;if(e[4]!==a||e[5]!==Y||e[6]!==v||e[7]!==f){let O;e[9]!==Y||e[10]!==v||e[11]!==f?(O=P=>{var q;if(!((q=P.data)!=null&&q.id))return null;const K=v(P,f);return Y?_.jsx(R.Fragment,{children:Y({key:P.data.id,annotation:P,active:K})},P.data.id):null},e[9]=Y,e[10]=v,e[11]=f,e[12]=O):O=e[12],B=a.map(O),e[4]=a,e[5]=Y,e[6]=v,e[7]=f,e[8]=B}else B=e[8];let X;e[13]!==E||e[14]!==Z||e[15]!==b?(X=!E&&(b==null?void 0:b.geometry)&&Z&&Z({annotation:b}),e[13]=E,e[14]=Z,e[15]=b,e[16]=X):X=e[16];let o;e[17]!==B||e[18]!==X?(o=_.jsxs(gn,{children:[B,X]}),e[17]=B,e[18]=X,e[19]=o):o=e[19];let h;e[20]!==j||e[21]!==y||e[22]!==k||e[23]!==S?(h=_.jsx(vn,{ref:S,"data-testid":"annotation-target",onClick:j,onMouseUp:k,onMouseDown:y}),e[20]=j,e[21]=y,e[22]=k,e[23]=S,e[24]=h):h=e[24];let w;e[25]!==T||e[26]!==N||e[27]!==U||e[28]!==b?(w=!T&&U&&U({type:N,annotation:b}),e[25]=T,e[26]=N,e[27]=U,e[28]=b,e[29]=w):w=e[29];let C;if(e[30]!==a||e[31]!==L||e[32]!==V||e[33]!==v||e[34]!==f){let O;e[36]!==L||e[37]!==V||e[38]!==v||e[39]!==f?(O=P=>{var q;if(!((q=P.data)!=null&&q.id))return null;const K=(L==null?void 0:L.includes(P.data.id))||!1;return(v(P,f)||K)&&V!=null?_.jsx(R.Fragment,{children:V({key:P.data.id,annotation:P})},P.data.id):null},e[36]=L,e[37]=V,e[38]=v,e[39]=f,e[40]=O):O=e[40],C=a.map(O),e[30]=a,e[31]=L,e[32]=V,e[33]=v,e[34]=f,e[35]=C}else C=e[35];let M;e[41]!==F||e[42]!==J||e[43]!==G||e[44]!==Q||e[45]!==b?(M=!F&&((A=b==null?void 0:b.selection)==null?void 0:A.showEditor)&&Q&&J&&Q({annotation:b,onChange:J,onSubmit:G}),e[41]=F,e[42]=J,e[43]=G,e[44]=Q,e[45]=b,e[46]=M):M=e[46];let W;return e[47]!==d||e[48]!==D||e[49]!==c||e[50]!==l||e[51]!==r||e[52]!==i||e[53]!==t||e[54]!==s||e[55]!==z||e[56]!==o||e[57]!==h||e[58]!==w||e[59]!==C||e[60]!==M?(W=_.jsxs(pn,{ref:t,style:s,className:c,onMouseLeave:l,onTouchCancel:i,onMouseMove:r,$allowTouch:d,children:[z,o,h,w,C,M,D]}),e[47]=d,e[48]=D,e[49]=c,e[50]=l,e[51]=r,e[52]=i,e[53]=t,e[54]=s,e[55]=z,e[56]=o,e[57]=h,e[58]=w,e[59]=C,e[60]=M,e[61]=W):W=e[61],W}function De({ref:n,...e}){const t=R.useMemo(()=>{const{renderSlots:i,...r}=e;return{...ee,...r,selectors:r.selectors??ee.selectors,renderSelector:r.renderSelector??(i==null?void 0:i.renderSelector)??ee.renderSelector,renderEditor:r.renderEditor??(i==null?void 0:i.renderEditor)??ee.renderEditor,renderHighlight:r.renderHighlight??(i==null?void 0:i.renderHighlight)??ee.renderHighlight,renderContent:r.renderContent??(i==null?void 0:i.renderContent)??ee.renderContent,renderOverlay:r.renderOverlay??(i==null?void 0:i.renderOverlay)??ee.renderOverlay,renderDraggableHighlight:r.renderDraggableHighlight??(i==null?void 0:i.renderDraggableHighlight)??ee.renderDraggableHighlight}},[e]),{children:s,...c}=t,l=Ht(c,n);return _.jsx(xn,{...l,children:s})}De.displayName="Annotation";function En(n,e){if(!n||typeof n.getBoundingClientRect!="function")return!1;const{pageX:t,pageY:s}=e,{left:c,right:l,bottom:i,top:r}=n.getBoundingClientRect();return t>c&&t<l&&s>r&&s<i}function bn(){const n=$.c(5),[e,t]=R.useState(!1),s=R.useRef(null);let c,l;n[0]===Symbol.for("react.memo_cache_sentinel")?(c=()=>{const u=g=>{const x=s.current,a={pageX:g.pageX,pageY:g.pageY},p=En(x,a);t(p)};return document.addEventListener("mousemove",u,{passive:!0}),()=>{document.removeEventListener("mousemove",u)}},l=[],n[0]=c,n[1]=l):(c=n[0],l=n[1]),R.useEffect(c,l);let i;n[2]===Symbol.for("react.memo_cache_sentinel")?(i=u=>{s.current=u},n[2]=i):i=n[2];const r=i;let d;return n[3]!==e?(d={isHoveringOver:e,setRef:r},n[3]=e,n[4]=d):d=n[4],d}I.Annotation=De,I.OvalSelector=me,I.PointSelector=le,I.RectangleSelector=ce,I.default=De,I.useAnnotationHitDetection=at,I.useMouseHover=bn,I.useRelativeMousePosition=lt,I.useSelectorMethods=ut,Object.defineProperties(I,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
