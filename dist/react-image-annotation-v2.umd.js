(function(H,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],h):(H=typeof globalThis<"u"?globalThis:H||self,h(H.ReactImageAnnotation={},H.React,H.styled))})(this,function(H,h,Y){"use strict";var fe={exports:{}},ie={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se;function $e(){if(Se)return ie;Se=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,a){var u=null;if(a!==void 0&&(u=""+a),o.key!==void 0&&(u=""+o.key),"key"in o){a={};for(var l in o)l!=="key"&&(a[l]=o[l])}else a=o;return o=a.ref,{$$typeof:t,type:s,key:u,ref:o!==void 0?o:null,props:a}}return ie.Fragment=e,ie.jsx=n,ie.jsxs=n,ie}var ce={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke;function Ke(){return ke||(ke=1,process.env.NODE_ENV!=="production"&&function(){function t(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===w?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case M:return"Fragment";case b:return"Profiler";case v:return"StrictMode";case O:return"Suspense";case G:return"SuspenseList";case k:return"Activity"}if(typeof r=="object")switch(typeof r.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case x:return"Portal";case C:return(r.displayName||"Context")+".Provider";case S:return(r._context.displayName||"Context")+".Consumer";case X:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case L:return g=r.displayName||null,g!==null?g:t(r.type)||"Memo";case I:g=r._payload,r=r._init;try{return t(r(g))}catch{}}return null}function e(r){return""+r}function n(r){try{e(r);var g=!1}catch{g=!0}if(g){g=console;var T=g.error,A=typeof Symbol=="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object";return T.call(g,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",A),e(r)}}function s(r){if(r===M)return"<>";if(typeof r=="object"&&r!==null&&r.$$typeof===I)return"<...>";try{var g=t(r);return g?"<"+g+">":"<...>"}catch{return"<...>"}}function o(){var r=D.A;return r===null?null:r.getOwner()}function a(){return Error("react-stack-top-frame")}function u(r){if(F.call(r,"key")){var g=Object.getOwnPropertyDescriptor(r,"key").get;if(g&&g.isReactWarning)return!1}return r.key!==void 0}function l(r,g){function T(){K||(K=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",g))}T.isReactWarning=!0,Object.defineProperty(r,"key",{get:T,configurable:!0})}function c(){var r=t(this.type);return V[r]||(V[r]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),r=this.props.ref,r!==void 0?r:null}function d(r,g,T,A,z,U,N,B){return T=U.ref,r={$$typeof:f,type:r,key:g,props:U,_owner:z},(T!==void 0?T:null)!==null?Object.defineProperty(r,"ref",{enumerable:!1,get:c}):Object.defineProperty(r,"ref",{enumerable:!1,value:null}),r._store={},Object.defineProperty(r._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(r,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(r,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:N}),Object.defineProperty(r,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:B}),Object.freeze&&(Object.freeze(r.props),Object.freeze(r)),r}function m(r,g,T,A,z,U,N,B){var P=g.children;if(P!==void 0)if(A)if(ee(P)){for(A=0;A<P.length;A++)E(P[A]);Object.freeze&&Object.freeze(P)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else E(P);if(F.call(g,"key")){P=t(r);var J=Object.keys(g).filter(function(xe){return xe!=="key"});A=0<J.length?"{key: someKey, "+J.join(": ..., ")+": ...}":"{key: someKey}",R[P+A]||(J=0<J.length?"{"+J.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,A,P,J,P),R[P+A]=!0)}if(P=null,T!==void 0&&(n(T),P=""+T),u(g)&&(n(g.key),P=""+g.key),"key"in g){T={};for(var _ in g)_!=="key"&&(T[_]=g[_])}else T=g;return P&&l(T,typeof r=="function"?r.displayName||r.name||"Unknown":r),d(r,P,U,z,o(),T,N,B)}function E(r){typeof r=="object"&&r!==null&&r.$$typeof===f&&r._store&&(r._store.validated=1)}var y=h,f=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),C=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),w=Symbol.for("react.client.reference"),D=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Object.prototype.hasOwnProperty,ee=Array.isArray,Q=console.createTask?console.createTask:function(){return null};y={"react-stack-bottom-frame":function(r){return r()}};var K,V={},q=y["react-stack-bottom-frame"].bind(y,a)(),te=Q(s(a)),R={};ce.Fragment=M,ce.jsx=function(r,g,T,A,z){var U=1e4>D.recentlyCreatedOwnerStacks++;return m(r,g,T,!1,A,z,U?Error("react-stack-top-frame"):q,U?Q(s(r)):te)},ce.jsxs=function(r,g,T,A,z){var U=1e4>D.recentlyCreatedOwnerStacks++;return m(r,g,T,!0,A,z,U?Error("react-stack-top-frame"):q,U?Q(s(r)):te)}}()),ce}var De;function qe(){return De||(De=1,process.env.NODE_ENV==="production"?fe.exports=$e():fe.exports=Ke()),fe.exports}var p=qe();function et(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...s)=>e(n(...s)))}const tt=({elem:t,e})=>{if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageY:n,pageX:s}=e,{left:o,right:a,bottom:u,top:l}=t.getBoundingClientRect();return s>o&&s<a&&n>l&&n<u},nt=(t="isMouseHovering")=>e=>{const n=o=>{const[a,u]=h.useState(!1),l=h.useRef(null);h.useEffect(()=>{const d=m=>{const E=l.current,y={pageX:m.pageX,pageY:m.pageY};u(tt({elem:E,e:y}))};return document.addEventListener("mousemove",d),()=>{document.removeEventListener("mousemove",d)}},[]);const c={[t]:{innerRef:d=>l.current=d,isHoveringOver:a}};return h.createElement(e,{...o,...c})},s=e.displayName||e.name||"Component";return n.displayName=`IsMouseHovering(${s})`,n},Pe=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.x,s=t.clientY-e.y;return{x:n/e.width*100,y:s/e.height*100}},Ne=(t,e,n)=>Math.max(t,Math.min(e,n)),ot=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),s=e.pageX-n.left,o=e.pageY-(n.top+window.scrollY);return{x:Ne(0,100,s/n.width*100),y:Ne(0,100,o/n.height*100)}},ne=t=>rt(t)?st(t)?(at(t)&&t.preventDefault(),ot(t)):{x:null}:Pe(t),rt=t=>t.targetTouches!==void 0,st=t=>t.targetTouches.length===1,at=t=>t.type==="touchmove",it=(t="relativeMousePos")=>e=>{class n extends h.PureComponent{constructor(a){super(a),this.container=null,this._innerRef=u=>{this.container=u},this._onMouseMove=u=>{const l=Pe(u);this.setState(l)},this._onTouchMove=u=>{if(!this.container||u.targetTouches.length!==1)return;const l=u.targetTouches[0],c=this.container.offsetParent;if(!c)return;const d=l.pageX-c.offsetLeft,m=l.pageY-c.offsetTop,E=this.container.width,y=this.container.height;typeof E=="number"&&typeof y=="number"&&E>0&&y>0?this.setState({x:d/E*100,y:m/y*100}):this.setState({x:null,y:null})},this._onMouseLeave=u=>{this.setState({x:null,y:null})},this._onTouchLeave=u=>{this.setState({x:null,y:null})},this.state={x:null,y:null}}render(){const a={innerRef:this._innerRef,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,onTouchMove:this._onTouchMove,onTouchLeave:this._onTouchLeave,x:this.state.x,y:this.state.y},u={[t]:a};return h.createElement(e,{...this.props,...u})}}const s=e.displayName||e.name||"Component";return n.displayName=`withRelativeMousePos(${s})`,n},ct=(t,e)=>{const[n,s]=h.useState(!1),[o,a]=h.useState(null),[u,l]=h.useState(null),c=h.useRef(null),d=h.useRef(t);d.current=t;const m=h.useCallback((v,b)=>{const S=d.current.map(C=>C.data.id===v?{...C,isDragging:b}:C);d.current=S,e(S),s(b),a(b?v:null)},[e]),E=h.useCallback((v,b)=>{m(v,!0);const S=d.current.find(C=>C.data.id===v);S&&(c.current={...S.geometry,initialCursorPosition:b})},[m]),y=h.useCallback((v,b,S)=>{if(!o||!c.current)return;const C=v.clientX-S.x,X=v.clientY-S.y,O=document.querySelector(".annotation-container");if(!O)return;const G=O.getBoundingClientRect(),L=G.width,I=G.height,k=100,w={...c.current};switch(b){case"top":w.height=Math.min(c.current.height-X/I*k,c.current.y+c.current.height),w.y=Math.max(c.current.y+X/I*k,0);break;case"right":w.width=Math.min(c.current.width+C/L*k,k-c.current.x);break;case"bottom":w.height=Math.min(c.current.height+X/I*k,k-c.current.y);break;case"left":w.width=Math.min(c.current.width-C/L*k,c.current.x+c.current.width),w.x=Math.max(c.current.x+C/L*k,0);break}w.width=Math.max(w.width,0),w.height=Math.max(w.height,0),w.x=Math.min(w.x,k-w.width),w.y=Math.min(w.y,k-w.height);const D=d.current.map(F=>F.data.id===o?{...F,geometry:w}:F);d.current=D,e(D)},[o,e]),f=h.useCallback((v,b)=>{m(v,!0);const S=d.current.find(C=>C.data.id===v);S&&(c.current={...S.geometry,initialCursorPosition:b})},[m]),x=h.useCallback((v,b)=>{if(!o||!c.current)return;const S=v.clientX-b.x,C=v.clientY-b.y,X=document.querySelector(".annotation-container");if(!X)return;const O=X.getBoundingClientRect(),G=O.width,L=O.height,I=100,k={...c.current};k.x=Math.max(Math.min(c.current.x+S/G*I,I-c.current.width),0),k.y=Math.max(Math.min(c.current.y+C/L*I,I-c.current.height),0);const w=d.current.map(D=>D.data.id===o?{...D,geometry:k}:D);d.current=w,e(w)},[o,e]),M=h.useCallback(()=>{o&&(s(!1),a(null)),c.current=null},[o]);return{isDragging:n,draggingId:o,activeAnnotationId:u,setActiveAnnotationId:l,setDraggingId:a,handleDotDragStart:E,handleDotDrag:y,handleMoveStart:f,handleMove:x,handleMouseUp:M}};var he={exports:{}},be={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae;function lt(){if(Ae)return be;Ae=1;var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return be.c=function(e){return t.H.useMemoCache(e)},be}var ye={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function ut(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;ye.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),ye}var Ye;function dt(){return Ye||(Ye=1,process.env.NODE_ENV==="production"?he.exports=lt():he.exports=ut()),he.exports}var Z=dt();const ft=Y.div`
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
`;function Ee(t){const e=Z.c(3),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.y}%`,o=`${n.x}%`;let a;return e[0]!==s||e[1]!==o?(a=p.jsx(ft,{style:{top:s,left:o}}),e[0]=s,e[1]=o,e[2]=a):a=e[2],a}const ht=Y.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,gt=Y.div`
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
`,pt=t=>{const e=Z.c(11),{onChange:n,onSubmit:s,onFocus:o,onBlur:a,value:u}=t;let l;e[0]!==a||e[1]!==n||e[2]!==o||e[3]!==u?(l=p.jsx(ht,{children:p.jsx("textarea",{placeholder:"Write description",onFocus:o,onBlur:a,onChange:n,value:u})}),e[0]=a,e[1]=n,e[2]=o,e[3]=u,e[4]=l):l=e[4];let c;e[5]!==s||e[6]!==u?(c=u&&p.jsx(gt,{onClick:s,children:"Submit"}),e[5]=s,e[6]=u,e[7]=c):c=e[7];let d;return e[8]!==l||e[9]!==c?(d=p.jsxs(h.Fragment,{children:[l,c]}),e[8]=l,e[9]=c,e[10]=d):d=e[10],d},mt=Y.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,vt=Y.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${mt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,xt=t=>{var S;const e=Z.c(17),{annotation:n,onChange:s,onSubmit:o,className:a,style:u}=t,l=a===void 0?"":a;let c;e[0]!==u?(c=u===void 0?{}:u,e[0]=u,e[1]=c):c=e[1];const d=c,{geometry:m}=n;if(!m)return null;const E=`${m.x}%`,y=`${m.y+m.height}%`;let f;e[2]!==d||e[3]!==E||e[4]!==y?(f={position:"absolute",left:E,top:y,...d},e[2]=d,e[3]=E,e[4]=y,e[5]=f):f=e[5];let x;e[6]!==n||e[7]!==s?(x=C=>s({...n,data:{...n.data,text:C.target.value}}),e[6]=n,e[7]=s,e[8]=x):x=e[8];const M=(S=n.data)==null?void 0:S.text;let v;e[9]!==o||e[10]!==x||e[11]!==M?(v=p.jsx(pt,{onChange:x,onSubmit:o,value:M}),e[9]=o,e[10]=x,e[11]=M,e[12]=v):v=e[12];let b;return e[13]!==l||e[14]!==f||e[15]!==v?(b=p.jsx(vt,{className:l,style:f,children:v}),e[13]=l,e[14]=f,e[15]=v,e[16]=b):b=e[16],b},ge=Y.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,bt=Y.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Ie(t){const e=Z.c(21),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.y}%`;let o;e[0]!==s?(o=p.jsx(ge,{style:{height:s,width:"100%"}}),e[0]=s,e[1]=o):o=e[1];const a=`${n.y}%`,u=`${n.height}%`,l=`${n.x}%`;let c;e[2]!==a||e[3]!==u||e[4]!==l?(c=p.jsx(ge,{style:{top:a,height:u,width:l}}),e[2]=a,e[3]=u,e[4]=l,e[5]=c):c=e[5];const d=`${n.y}%`,m=`${n.x+n.width}%`,E=`${n.height}%`,y=`${100-(n.x+n.width)}%`;let f;e[6]!==d||e[7]!==m||e[8]!==E||e[9]!==y?(f=p.jsx(ge,{style:{top:d,left:m,height:E,width:y}}),e[6]=d,e[7]=m,e[8]=E,e[9]=y,e[10]=f):f=e[10];const x=`${n.y+n.height}%`,M=`${100-(n.y+n.height)}%`;let v;e[11]!==x||e[12]!==M?(v=p.jsx(ge,{style:{top:x,height:M,width:"100%"}}),e[11]=x,e[12]=M,e[13]=v):v=e[13];let b;return e[14]!==t.className||e[15]!==t.style||e[16]!==o||e[17]!==f||e[18]!==v||e[19]!==c?(b=p.jsxs(bt,{className:t.className,style:t.style,children:[o,c,f,v]}),e[14]=t.className,e[15]=t.style,e[16]=o,e[17]=f,e[18]=v,e[19]=c,e[20]=b):b=e[20],b}Ie.defaultProps={className:"",style:{}};const yt=Y.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function pe(t){const e=Z.c(10),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.x}%`,o=`${n.y}%`,a=`${n.height}%`,u=`${n.width}%`,l=t.active?"0 0 1px 1px yellow inset":void 0;let c;e[0]!==t.style||e[1]!==s||e[2]!==o||e[3]!==a||e[4]!==u||e[5]!==l?(c={position:"absolute",left:s,top:o,height:a,width:u,boxShadow:l,...t.style},e[0]=t.style,e[1]=s,e[2]=o,e[3]=a,e[4]=u,e[5]=l,e[6]=c):c=e[6];let d;return e[7]!==t.className||e[8]!==c?(d=p.jsx(yt,{className:t.className,style:c}),e[7]=t.className,e[8]=c,e[9]=d):d=e[9],d}pe.defaultProps={className:"",style:{}};const Et=Y.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function me(t){const e=Z.c(10),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.x}%`,o=`${n.y}%`,a=`${n.height}%`,u=`${n.width}%`,l=t.active?"0 0 1px 1px yellow inset":void 0;let c;e[0]!==t.style||e[1]!==s||e[2]!==o||e[3]!==a||e[4]!==u||e[5]!==l?(c={position:"absolute",left:s,top:o,height:a,width:u,boxShadow:l,...t.style},e[0]=t.style,e[1]=s,e[2]=o,e[3]=a,e[4]=u,e[5]=l,e[6]=c):c=e[6];let d;return e[7]!==t.className||e[8]!==c?(d=p.jsx(Et,{className:t.className,style:c}),e[7]=t.className,e[8]=c,e[9]=d):d=e[9],d}me.defaultProps={className:"",style:{}};const wt=Y.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function _e(t){const e=Z.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const s=`${n.x}%`,o=`${n.y+n.height}%`;let a;e[0]!==t.style||e[1]!==s||e[2]!==o?(a={position:"absolute",left:s,top:o,...t.style},e[0]=t.style,e[1]=s,e[2]=o,e[3]=a):a=e[3];const u=t.annotation.data&&t.annotation.data.text;let l;return e[4]!==t.className||e[5]!==a||e[6]!==u?(l=p.jsx(wt,{style:a,className:t.className,children:u}),e[4]=t.className,e[5]=a,e[6]=u,e[7]=l):l=e[7],l}_e.defaultProps={style:{},className:""};const we=Y.div`
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
`,Tt=Y.div`
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
`,Mt=Y.div`
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
`,le=t=>{const e=Z.c(9),{position:n,onDragStart:s,onDrag:o,onDragEnd:a,annotationId:u}=t;let l;e[0]!==u||e[1]!==o||e[2]!==a||e[3]!==s||e[4]!==n?(l=E=>{E.preventDefault(),E.stopPropagation();const y={x:E.clientX,y:E.clientY};s(u,y);const f=M=>{M.preventDefault(),M.stopPropagation(),o(M,n,y)},x=M=>{M.preventDefault(),M.stopPropagation(),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",x),a==null||a()};document.addEventListener("mousemove",f),document.addEventListener("mouseup",x)},e[0]=u,e[1]=o,e[2]=a,e[3]=s,e[4]=n,e[5]=l):l=e[5];const c=l,d=Rt;let m;return e[6]!==c||e[7]!==n?(m=p.jsx(Tt,{position:n,onMouseDown:c,onClick:d,"data-type":"dot"}),e[6]=c,e[7]=n,e[8]=m):m=e[8],m},Oe=t=>{const e=Z.c(7),{onMoveStart:n,onMove:s,onMoveEnd:o,annotationId:a}=t;let u;e[0]!==a||e[1]!==s||e[2]!==o||e[3]!==n?(u=m=>{m.preventDefault(),m.stopPropagation();const E={x:m.clientX,y:m.clientY};n(a,E);const y=x=>{x.preventDefault(),x.stopPropagation(),s(x,E)},f=x=>{x.preventDefault(),x.stopPropagation(),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",f),o==null||o()};document.addEventListener("mousemove",y),document.addEventListener("mouseup",f)},e[0]=a,e[1]=s,e[2]=o,e[3]=n,e[4]=u):u=e[4];const l=u,c=Ct;let d;return e[5]!==l?(d=p.jsx(Mt,{onMouseDown:l,onClick:c,"data-type":"move-button",children:"↕"}),e[5]=l,e[6]=d):d=e[6],d};function Rt(t){t.preventDefault(),t.stopPropagation()}function Ct(t){t.preventDefault(),t.stopPropagation()}const St=Y.div`
  position: absolute;
  border: ${t=>t.$isDragging?"1px dashed #FFFFFF":"1px solid #24B3C8"};
  background: rgba(36, 179, 200, 0.1);
  pointer-events: auto;
  z-index: 10;
  cursor: move;
  
  &:hover {
    border: ${t=>t.$isDragging?"1px dashed #FFFFFF":"2px solid #1e90ff"};
    background: rgba(36, 179, 200, 0.2);
    box-shadow: 0 0 8px rgba(30, 144, 255, 0.4);
  }
`,Le=t=>{var ee,Q,K,V,q,te,R;const e=Z.c(43),{annotation:n,onDotDragStart:s,onDotDrag:o,onMoveStart:a,onMove:u,onDragEnd:l,isDragging:c}=t,{geometry:d}=n;if(!d||!d.type||typeof d.x!="number"||typeof d.y!="number")return null;let m;e[0]!==((ee=n.data)==null?void 0:ee.id)||e[1]!==u||e[2]!==a?(m=r=>{var N;const g=r.target;if(g.closest('[data-type="dot"]')||g.closest('[data-type="move-button"]'))return;r.preventDefault(),r.stopPropagation();const T={x:r.clientX,y:r.clientY},A=(N=n.data)==null?void 0:N.id;A&&a(A,T);const z=B=>{B.preventDefault(),B.stopPropagation(),u(B,T)},U=B=>{B.preventDefault(),B.stopPropagation(),document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",U)},e[0]=(Q=n.data)==null?void 0:Q.id,e[1]=u,e[2]=a,e[3]=m):m=e[3];const E=m,y=kt,f=`${d.x}%`,x=`${d.y}%`,M=`${d.width}%`,v=`${d.height}%`;let b;e[4]!==f||e[5]!==x||e[6]!==M||e[7]!==v?(b={left:f,top:x,width:M,height:v},e[4]=f,e[5]=x,e[6]=M,e[7]=v,e[8]=b):b=e[8];const S=(K=n.data)==null?void 0:K.id;let C;e[9]!==o||e[10]!==s||e[11]!==l||e[12]!==S?(C=p.jsx(le,{position:"top",onDragStart:s,onDrag:o,onDragEnd:l,annotationId:S}),e[9]=o,e[10]=s,e[11]=l,e[12]=S,e[13]=C):C=e[13];const X=(V=n.data)==null?void 0:V.id;let O;e[14]!==o||e[15]!==s||e[16]!==l||e[17]!==X?(O=p.jsx(le,{position:"right",onDragStart:s,onDrag:o,onDragEnd:l,annotationId:X}),e[14]=o,e[15]=s,e[16]=l,e[17]=X,e[18]=O):O=e[18];const G=(q=n.data)==null?void 0:q.id;let L;e[19]!==o||e[20]!==s||e[21]!==l||e[22]!==G?(L=p.jsx(le,{position:"bottom",onDragStart:s,onDrag:o,onDragEnd:l,annotationId:G}),e[19]=o,e[20]=s,e[21]=l,e[22]=G,e[23]=L):L=e[23];const I=(te=n.data)==null?void 0:te.id;let k;e[24]!==o||e[25]!==s||e[26]!==l||e[27]!==I?(k=p.jsx(le,{position:"left",onDragStart:s,onDrag:o,onDragEnd:l,annotationId:I}),e[24]=o,e[25]=s,e[26]=l,e[27]=I,e[28]=k):k=e[28];const w=(R=n.data)==null?void 0:R.id;let D;e[29]!==l||e[30]!==u||e[31]!==a||e[32]!==w?(D=p.jsx(Oe,{onMoveStart:a,onMove:u,onMoveEnd:l,annotationId:w}),e[29]=l,e[30]=u,e[31]=a,e[32]=w,e[33]=D):D=e[33];let F;return e[34]!==E||e[35]!==c||e[36]!==O||e[37]!==L||e[38]!==k||e[39]!==D||e[40]!==b||e[41]!==C?(F=p.jsxs(St,{style:b,$isDragging:c,onMouseDown:E,onClick:y,children:[C,O,L,k,D]}),e[34]=E,e[35]=c,e[36]=O,e[37]=L,e[38]=k,e[39]=D,e[40]=b,e[41]=C,e[42]=F):F=e[42],F};function kt(t){t.preventDefault(),t.stopPropagation()}const He="RECTANGLE";function Dt({x:t,y:e},n){if(!n)return!1;const s=Math.min(n.x,n.x+n.width),o=Math.max(n.x,n.x+n.width),a=Math.min(n.y,n.y+n.height),u=Math.max(n.y,n.y+n.height);return!(t<s||e<a||t>o||e>u)}function Pt(t){if(!t||t.width<=0||t.height<=0)return 0;const e=Math.abs(t.width),n=Math.abs(t.height);return e*n}const Nt={onTouchStart(t,e){return Xe(t,e)},onTouchEnd(t,e){return Fe(t)},onTouchMove(t,e){return Ue(t,e)},onMouseDown(t,e){return Xe(t,e)},onMouseUp(t,e){return Fe(t)},onMouseMove(t,e){return Ue(t,e)}};function Xe(t,e){if(t.selection)return{};{const{x:n,y:s}=ne(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:s}}}}function Fe(t,e){if(t.selection){const{selection:n,geometry:s}=t;if(!s)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Ue(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:s}=t.selection,{x:o,y:a}=ne(e),u=o-n,l=a-s;return{...t,geometry:{...t.geometry,type:He,x:u>0?n:o,y:l>0?s:a,width:Math.abs(u),height:Math.abs(l)}}}return t}const oe={TYPE:He,intersects:Dt,area:Pt,methods:Nt},Be="POINT";function At({x:t,y:e},n,s){if(!n)return!1;const o=Math.abs(t-n.x),a=Math.abs(e-n.y);return o===0&&a===0}function jt(t,e){return 0}const se={TYPE:Be,intersects:At,area:jt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...ne(e),width:0,height:0,type:Be}}}}},ve=t=>Math.pow(t,2),Te="OVAL";function Yt({x:t,y:e},n){if(!n||!n.width||!n.height)return!1;const s=Math.abs(n.width),o=Math.abs(n.height),a={x:n.x+s/2,y:n.y+o/2},u=s/2,l=o/2;if(u===0||l===0)return!1;const c=t-a.x,d=e-a.y;return ve(c)/ve(u)+ve(d)/ve(l)<=1}function It(t){return!t||!t.width||!t.height||t.width<=0||t.height<=0?0:Math.PI*Math.abs(t.width)*Math.abs(t.height)/4}const _t={onTouchStart(t,e){return Ot(t,e)},onTouchEnd(t,e){return Lt(t)},onTouchMove(t,e){return Ht(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:s}=ne(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:s}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:s}=t.selection,{x:o,y:a}=ne(e);return{...t,geometry:{...t.geometry,type:Te,x:Math.min(n,o),y:Math.min(s,a),width:Math.abs(o-n),height:Math.abs(a-s)}}}return t}};function Ot(t,e){if(t.selection)return{};{const{x:n,y:s}=ne(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:s}}}}function Lt(t,e){if(t.selection){const{selection:n,geometry:s}=t;if(!s)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Ht(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:s}=t.selection,{x:o,y:a}=ne(e),u=o-n,l=a-s;return{...t,geometry:{...t.geometry,type:Te,x:u>0?n:o,y:l>0?s:a,width:Math.abs(u),height:Math.abs(l)}}}return t}const ue={TYPE:Te,intersects:Yt,area:It,methods:_t},Ge={innerRef:()=>{},onChange:()=>{},onSubmit:()=>{},type:oe.TYPE,selectors:[oe,se,ue],disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,activeAnnotationComparator:(t,e)=>t===e,renderSelector:({annotation:t})=>{switch(t.geometry.type){case oe.TYPE:return p.jsx(Ie,{annotation:t});case se.TYPE:return p.jsx(Ee,{annotation:t});case ue.TYPE:return p.jsx(me,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>p.jsx(xt,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case oe.TYPE:return p.jsx(pe,{annotation:e,active:n},t);case se.TYPE:return p.jsx(Ee,{annotation:e},t);case ue.TYPE:return p.jsx(me,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>p.jsx(_e,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case se.TYPE:return p.jsx(we,{children:"Click to Annotate"});default:return p.jsx(we,{children:"Click and Drag to Annotate"})}},enableEditing:!1,onAnnotationsChange:()=>{console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderDraggableHighlight:({key:t,annotation:e,active:n,isDragging:s,isHovered:o,onDotDragStart:a,onDotDrag:u,onMoveStart:l,onMove:c,onDragEnd:d})=>{var m;if(!((m=e.data)!=null&&m.id)||!o)switch(e.geometry.type){case oe.TYPE:return p.jsx(pe,{annotation:e,active:n},t);case se.TYPE:return p.jsx(Ee,{annotation:e},t);case ue.TYPE:return p.jsx(me,{annotation:e,active:n},t);default:return null}return e.geometry.type===oe.TYPE?p.jsx(Le,{annotation:e,onDotDragStart:a,onDotDrag:u,onMoveStart:l,onMove:c,onDragEnd:d,isDragging:s}):p.jsx(pe,{annotation:e,active:n},t)}},Xt=Y.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${we} {
    opacity: 1;
  }
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,Ft=Y.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`,Ut=Y.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`,Bt=Y.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`,Gt=t=>{var Ze;const{selectors:e,...n}=t,s={...Ge,...n,selectors:e!==void 0?e:Ge.selectors},{src:o,alt:a,style:u,className:l,containerRef:c,children:d,annotations:m,type:E,selectors:y,value:f,onChange:x,onSubmit:M,activeAnnotationComparator:v,activeAnnotations:b,disableAnnotation:S,disableSelector:C,renderSelector:X,disableEditor:O,renderEditor:G,renderHighlight:L,renderContent:I,disableOverlay:k,renderOverlay:w,allowTouch:D,onImageMouseUp:F,onImageMouseDown:ee,onImageMouseMove:Q,onImageClick:K,enableEditing:V,onAnnotationsChange:q,renderDraggableHighlight:te,relativeMousePos:R,isMouseHovering:r}=s,g=h.useRef(null),T=h.useRef(null),{x:A,y:z}=R,U=h.useCallback(i=>{V&&q&&q(i)},[V,q]),N=V?ct(m,U):null,B=m,P=h.useCallback(i=>{if(i)return y.find(j=>j.TYPE===i)},[y]),J=E||y&&y[0]&&y[0].TYPE,_=h.useCallback((i,j)=>{if(S)return;const W=P(J);if(W&&W.methods[i]){const re=W.methods[i],$=re(f||{},j);typeof $>"u"?process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(i)} of type ${J} returned undefined.
             Make sure to explicitly return the previous state or new state.`):x&&x($)}},[S,P,J,f,x]),xe=h.useCallback(i=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&D&&i.preventDefault(),_("onTouchStart",i)},[D,_]),ze=h.useCallback(i=>{_("onTouchEnd",i)},[_]),We=h.useCallback(i=>{R&&typeof R.onTouchMove=="function"&&R.onTouchMove(i),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&D&&i.preventDefault(),_("onTouchMove",i)},[R,D,_]),Re=h.useCallback(i=>{R&&typeof R.onTouchLeave=="function"&&R.onTouchLeave(i)},[R]);h.useEffect(()=>{const i=T.current;if(D&&i)return i.ontouchstart=xe,i.ontouchend=ze,i.ontouchmove=We,i.ontouchcancel=Re,()=>{i&&(i.ontouchstart=null,i.ontouchend=null,i.ontouchmove=null,i.ontouchcancel=null)};i&&(i.ontouchstart=null,i.ontouchend=null,i.ontouchmove=null,i.ontouchcancel=null)},[D,xe,ze,We,Re]);const zt=h.useCallback(i=>{g.current=i,R&&typeof R.innerRef=="function"&&R.innerRef(i)},[R]),Wt=h.useCallback(i=>{r&&typeof r.innerRef=="function"&&r.innerRef(i),c&&(typeof c=="function"?c(i):c.current=i)},[r,c]),Vt=h.useCallback((i,j)=>{const W=g.current;return!W||i===null||j===null?void 0:B.map($=>{const{geometry:ae}=$;if(!ae)return!1;const de=P(ae.type);return de&&de.intersects({x:i,y:j},ae,W)?$:!1}).filter($=>!!$).sort(($,ae)=>{const de=P($.geometry.type),Qe=P(ae.geometry.type);return!de||!Qe||!W?0:de.area($.geometry,W)-Qe.area(ae.geometry,W)})[0]},[B,P,g]),Jt=h.useCallback(i=>{R&&typeof R.onMouseMove=="function"&&R.onMouseMove(i);const j=i;Q&&Q(j),_("onMouseMove",j)},[R,Q,_]),Zt=h.useCallback(i=>{R&&typeof R.onMouseLeave=="function"&&R.onMouseLeave(i)},[R]),Qt=h.useCallback(i=>{F&&F(i),_("onMouseUp",i)},[F,_]),$t=h.useCallback(i=>{ee&&ee(i),_("onMouseDown",i)},[ee,_]),Kt=h.useCallback(i=>{K&&K(i),_("onClick",i)},[K,_]),qt=h.useCallback(()=>{M&&f&&M(f)},[M,f]),Ce=h.useCallback(i=>{var j;i.key==="Escape"&&x&&((j=f==null?void 0:f.selection)!=null&&j.showEditor||f!=null&&f.geometry)&&x({selection:void 0,geometry:void 0,data:void 0})},[f,x]);h.useEffect(()=>{var i;if((i=f==null?void 0:f.selection)!=null&&i.showEditor)return window.addEventListener("keydown",Ce),()=>window.removeEventListener("keydown",Ce)},[(Ze=f==null?void 0:f.selection)==null?void 0:Ze.showEditor,Ce]);const Ve=h.useCallback((i,j)=>b&&!!b.find(re=>v?v(i,re):i.data.id===re)||j===i,[b,v]),Je=Vt(A,z);return p.jsxs(Xt,{style:u,ref:Wt,onMouseLeave:Zt,onTouchCancel:Re,onMouseMove:Jt,$allowTouch:D,className:l,children:[p.jsx(Ft,{alt:a||"Annotation Image",src:o,draggable:!1,ref:zt}),p.jsxs(Ut,{children:[B.map(i=>{if(!i.data||typeof i.data.id>"u")return console.warn("Annotation is missing data.id, cannot render highlight:",i),null;const j=Ve(i,Je);if(V&&N&&!N.isDragging&&(j&&N.draggingId!==i.data.id?N.setDraggingId(i.data.id):!j&&N.draggingId===i.data.id&&N.setDraggingId(null)),V&&te&&N){const W=N.draggingId===i.data.id,re=N.isDragging&&N.draggingId===i.data.id;return te({key:i.data.id,annotation:i,active:j,isDragging:re,isHovered:W,onDotDragStart:N.handleDotDragStart,onDotDrag:N.handleDotDrag,onMoveStart:N.handleMoveStart,onMove:N.handleMove,onDragEnd:N.handleMouseUp})}return L({key:i.data.id,annotation:i,active:j})}),!C&&f&&f.geometry&&X&&X({annotation:f})]}),p.jsx(Bt,{"data-testid":"annotation-target",ref:T,onClick:Kt,onMouseUp:Qt,onMouseDown:$t}),!k&&w&&w({type:J,annotation:f}),B.map(i=>!i.data||typeof i.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render content:",i),null):Ve(i,Je)&&I&&I({key:i.data.id,annotation:i})),!O&&f&&f.selection&&f.selection.showEditor&&G&&x&&G({annotation:f,onChange:x,onSubmit:qt}),p.jsx("div",{children:d})]})},Me=et(nt("isMouseHovering"),it("relativeMousePos"))(Gt);process.env.NODE_ENV!=="production"&&(Me.displayName="ComposedAnnotation"),H.Annotation=Me,H.DraggableBox=Le,H.DraggableDot=le,H.MoveButton=Oe,H.OvalSelector=ue,H.PointSelector=se,H.RectangleSelector=oe,H.default=Me,Object.defineProperties(H,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
