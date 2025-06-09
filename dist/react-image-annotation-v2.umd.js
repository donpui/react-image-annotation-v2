(function(H,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],h):(H=typeof globalThis<"u"?globalThis:H||self,h(H.ReactImageAnnotation={},H.React,H.styled))})(this,function(H,h,N){"use strict";var we={exports:{}},me={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le;function dt(){if(Le)return me;Le=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(o,r,s){var c=null;if(s!==void 0&&(c=""+s),r.key!==void 0&&(c=""+r.key),"key"in r){s={};for(var l in r)l!=="key"&&(s[l]=r[l])}else s=r;return r=s.ref,{$$typeof:t,type:o,key:c,ref:r!==void 0?r:null,props:s}}return me.Fragment=e,me.jsx=n,me.jsxs=n,me}var xe={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function ft(){return He||(He=1,process.env.NODE_ENV!=="production"&&function(){function t(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===A?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case E:return"Fragment";case j:return"Profiler";case k:return"StrictMode";case Q:return"Suspense";case oe:return"SuspenseList";case P:return"Activity"}if(typeof i=="object")switch(typeof i.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),i.$$typeof){case b:return"Portal";case ee:return(i.displayName||"Context")+".Provider";case V:return(i._context.displayName||"Context")+".Consumer";case ne:var x=i.render;return i=i.displayName,i||(i=x.displayName||x.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case K:return x=i.displayName||null,x!==null?x:t(i.type)||"Memo";case C:x=i._payload,i=i._init;try{return t(i(x))}catch{}}return null}function e(i){return""+i}function n(i){try{e(i);var x=!1}catch{x=!0}if(x){x=console;var M=x.error,y=typeof Symbol=="function"&&Symbol.toStringTag&&i[Symbol.toStringTag]||i.constructor.name||"Object";return M.call(x,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",y),e(i)}}function o(i){if(i===E)return"<>";if(typeof i=="object"&&i!==null&&i.$$typeof===C)return"<...>";try{var x=t(i);return x?"<"+x+">":"<...>"}catch{return"<...>"}}function r(){var i=R.A;return i===null?null:i.getOwner()}function s(){return Error("react-stack-top-frame")}function c(i){if(X.call(i,"key")){var x=Object.getOwnPropertyDescriptor(i,"key").get;if(x&&x.isReactWarning)return!1}return i.key!==void 0}function l(i,x){function M(){_||(_=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",x))}M.isReactWarning=!0,Object.defineProperty(i,"key",{get:M,configurable:!0})}function u(){var i=t(this.type);return D[i]||(D[i]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),i=this.props.ref,i!==void 0?i:null}function p(i,x,M,y,z,B,re,ie){return M=B.ref,i={$$typeof:d,type:i,key:x,props:B,_owner:z},(M!==void 0?M:null)!==null?Object.defineProperty(i,"ref",{enumerable:!1,get:u}):Object.defineProperty(i,"ref",{enumerable:!1,value:null}),i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(i,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(i,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:re}),Object.defineProperty(i,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ie}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i}function v(i,x,M,y,z,B,re,ie){var I=x.children;if(I!==void 0)if(y)if(L(I)){for(y=0;y<I.length;y++)f(I[y]);Object.freeze&&Object.freeze(I)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else f(I);if(X.call(x,"key")){I=t(i);var te=Object.keys(x).filter(function(w){return w!=="key"});y=0<te.length?"{key: someKey, "+te.join(": ..., ")+": ...}":"{key: someKey}",U[I+y]||(te=0<te.length?"{"+te.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,y,I,te,I),U[I+y]=!0)}if(I=null,M!==void 0&&(n(M),I=""+M),c(x)&&(n(x.key),I=""+x.key),"key"in x){M={};for(var $ in x)$!=="key"&&(M[$]=x[$])}else M=x;return I&&l(M,typeof i=="function"?i.displayName||i.name||"Unknown":i),p(i,I,B,z,r(),M,re,ie)}function f(i){typeof i=="object"&&i!==null&&i.$$typeof===d&&i._store&&(i._store.validated=1)}var m=h,d=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),A=Symbol.for("react.client.reference"),R=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=Object.prototype.hasOwnProperty,L=Array.isArray,F=console.createTask?console.createTask:function(){return null};m={"react-stack-bottom-frame":function(i){return i()}};var _,D={},S=m["react-stack-bottom-frame"].bind(m,s)(),T=F(o(s)),U={};xe.Fragment=E,xe.jsx=function(i,x,M,y,z){var B=1e4>R.recentlyCreatedOwnerStacks++;return v(i,x,M,!1,y,z,B?Error("react-stack-top-frame"):S,B?F(o(i)):T)},xe.jsxs=function(i,x,M,y,z){var B=1e4>R.recentlyCreatedOwnerStacks++;return v(i,x,M,!0,y,z,B?Error("react-stack-top-frame"):S,B?F(o(i)):T)}}()),xe}var Xe;function ht(){return Xe||(Xe=1,process.env.NODE_ENV==="production"?we.exports=dt():we.exports=ft()),we.exports}var g=ht();function pt(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...o)=>e(n(...o)))}const gt=({elem:t,e})=>{if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageY:n,pageX:o}=e,{left:r,right:s,bottom:c,top:l}=t.getBoundingClientRect();return o>r&&o<s&&n>l&&n<c},mt=(t="isMouseHovering")=>e=>{const n=r=>{const[s,c]=h.useState(!1),l=h.useRef(null);h.useEffect(()=>{const p=v=>{const f=l.current,m={pageX:v.pageX,pageY:v.pageY};c(gt({elem:f,e:m}))};return document.addEventListener("mousemove",p),()=>{document.removeEventListener("mousemove",p)}},[]);const u={[t]:{innerRef:p=>l.current=p,isHoveringOver:s}};return h.createElement(e,{...r,...u})},o=e.displayName||e.name||"Component";return n.displayName=`IsMouseHovering(${o})`,n},Be=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.x,o=t.clientY-e.y;return{x:n/e.width*100,y:o/e.height*100}},Fe=(t,e,n)=>Math.max(t,Math.min(e,n)),xt=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),o=e.pageX-n.left,r=e.pageY-(n.top+window.scrollY);return{x:Fe(0,100,o/n.width*100),y:Fe(0,100,r/n.height*100)}},ce=t=>vt(t)?bt(t)?(yt(t)&&t.preventDefault(),xt(t)):{x:null}:Be(t),vt=t=>t.targetTouches!==void 0,bt=t=>t.targetTouches.length===1,yt=t=>t.type==="touchmove",wt=(t="relativeMousePos")=>e=>{class n extends h.PureComponent{constructor(s){super(s),this.container=null,this._innerRef=c=>{this.container=c},this._onMouseMove=c=>{const l=Be(c);this.setState(l)},this._onTouchMove=c=>{if(!this.container||c.targetTouches.length!==1)return;const l=c.targetTouches[0],u=this.container.offsetParent;if(!u)return;const p=l.pageX-u.offsetLeft,v=l.pageY-u.offsetTop,f=this.container.width,m=this.container.height;typeof f=="number"&&typeof m=="number"&&f>0&&m>0?this.setState({x:p/f*100,y:v/m*100}):this.setState({x:null,y:null})},this._onMouseLeave=c=>{this.setState({x:null,y:null})},this._onTouchLeave=c=>{this.setState({x:null,y:null})},this.state={x:null,y:null}}render(){const s={innerRef:this._innerRef,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,onTouchMove:this._onTouchMove,onTouchLeave:this._onTouchLeave,x:this.state.x,y:this.state.y},c={[t]:s};return h.createElement(e,{...this.props,...c})}}const o=e.displayName||e.name||"Component";return n.displayName=`withRelativeMousePos(${o})`,n},Et=(t,e,n)=>{const[o,r]=h.useState(!1),[s,c]=h.useState(null),[l,u]=h.useState(null),[p,v]=h.useState(null),f=h.useRef(null),m=h.useRef(t),d=h.useRef(t),[b,E]=h.useState(t);m.current=n?b:t,h.useEffect(()=>{(!n||!o)&&(d.current=t,n&&E(t))},[t,n,o]);const k=h.useCallback((C,P)=>{const A=m.current.map(R=>R.data.id===C?{...R,isDragging:P}:R);m.current=A,n?E(A):e(A),r(P),c(P?C:null)},[e,n]),j=h.useCallback((C,P)=>{n&&v(C),k(C,!0);const A=m.current.find(R=>R.data.id===C);A&&(f.current={...A.geometry,initialCursorPosition:P})},[k,n]),V=h.useCallback((C,P,A)=>{if(!s||!f.current)return;const R=C.clientX-A.x,X=C.clientY-A.y,L=document.querySelector(".annotation-container");if(!L)return;const F=L.getBoundingClientRect(),_=F.width,D=F.height,S=100,T={...f.current};switch(P){case"top":T.height=Math.min(f.current.height-X/D*S,f.current.y+f.current.height),T.y=Math.max(f.current.y+X/D*S,0);break;case"right":T.width=Math.min(f.current.width+R/_*S,S-f.current.x);break;case"bottom":T.height=Math.min(f.current.height+X/D*S,S-f.current.y);break;case"left":T.width=Math.min(f.current.width-R/_*S,f.current.x+f.current.width),T.x=Math.max(f.current.x+R/_*S,0);break}T.width=Math.max(T.width,0),T.height=Math.max(T.height,0),T.x=Math.min(T.x,S-T.width),T.y=Math.min(T.y,S-T.height);const U=m.current.map(i=>i.data.id===s?{...i,geometry:T}:i);m.current=U,n?E(U):e(U)},[s,e,n]),ee=h.useCallback((C,P)=>{n&&v(C),k(C,!0);const A=m.current.find(R=>R.data.id===C);A&&(f.current={...A.geometry,initialCursorPosition:P})},[k,n]),ne=h.useCallback((C,P)=>{if(!s||!f.current)return;const A=C.clientX-P.x,R=C.clientY-P.y,X=document.querySelector(".annotation-container");if(!X)return;const L=X.getBoundingClientRect(),F=L.width,_=L.height,D=100,S={...f.current};S.x=Math.max(Math.min(f.current.x+A/F*D,D-f.current.width),0),S.y=Math.max(Math.min(f.current.y+R/_*D,D-f.current.height),0);const T=m.current.map(U=>U.data.id===s?{...U,geometry:S}:U);m.current=T,n?E(T):e(T)},[s,e,n]),Q=h.useCallback(()=>{s&&(r(!1),c(null)),f.current=null},[s]),oe=h.useCallback(C=>{n&&(e(b),d.current=b,v(null),c(null))},[n,e,b]),K=h.useCallback(C=>{n&&(E(d.current),m.current=d.current,v(null),c(null))},[n]);return{isDragging:o,draggingId:s,activeAnnotationId:l,editingAnnotationId:p,setActiveAnnotationId:u,setDraggingId:c,handleDotDragStart:j,handleDotDrag:V,handleMoveStart:ee,handleMove:ne,handleMouseUp:Q,handleConfirm:oe,handleReset:K,displayAnnotations:n?b:t}};var Ee={exports:{}},Pe={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze;function Rt(){if(ze)return Pe;ze=1;var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Pe.c=function(e){return t.H.useMemoCache(e)},Pe}var Ae={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge;function Tt(){return Ge||(Ge=1,process.env.NODE_ENV!=="production"&&function(){var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;Ae.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),Ae}var Ue;function Mt(){return Ue||(Ue=1,process.env.NODE_ENV==="production"?Ee.exports=Rt():Ee.exports=Tt()),Ee.exports}var Z=Mt();const Ct=N.div`
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
`;function Ne(t){const e=Z.c(3),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.y}%`,r=`${n.x}%`;let s;return e[0]!==o||e[1]!==r?(s=g.jsx(Ct,{style:{top:o,left:r}}),e[0]=o,e[1]=r,e[2]=s):s=e[2],s}const St=N.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,kt=N.div`
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
`,Dt=t=>{const e=Z.c(11),{onChange:n,onSubmit:o,onFocus:r,onBlur:s,value:c}=t;let l;e[0]!==s||e[1]!==n||e[2]!==r||e[3]!==c?(l=g.jsx(St,{children:g.jsx("textarea",{placeholder:"Write description",onFocus:r,onBlur:s,onChange:n,value:c})}),e[0]=s,e[1]=n,e[2]=r,e[3]=c,e[4]=l):l=e[4];let u;e[5]!==o||e[6]!==c?(u=c&&g.jsx(kt,{onClick:o,children:"Submit"}),e[5]=o,e[6]=c,e[7]=u):u=e[7];let p;return e[8]!==l||e[9]!==u?(p=g.jsxs(h.Fragment,{children:[l,u]}),e[8]=l,e[9]=u,e[10]=p):p=e[10],p},Pt=N.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,At=N.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Pt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,Nt=t=>{var V;const e=Z.c(17),{annotation:n,onChange:o,onSubmit:r,className:s,style:c}=t,l=s===void 0?"":s;let u;e[0]!==c?(u=c===void 0?{}:c,e[0]=c,e[1]=u):u=e[1];const p=u,{geometry:v}=n;if(!v)return null;const f=`${v.x}%`,m=`${v.y+v.height}%`;let d;e[2]!==p||e[3]!==f||e[4]!==m?(d={position:"absolute",left:f,top:m,...p},e[2]=p,e[3]=f,e[4]=m,e[5]=d):d=e[5];let b;e[6]!==n||e[7]!==o?(b=ee=>o({...n,data:{...n.data,text:ee.target.value}}),e[6]=n,e[7]=o,e[8]=b):b=e[8];const E=(V=n.data)==null?void 0:V.text;let k;e[9]!==r||e[10]!==b||e[11]!==E?(k=g.jsx(Dt,{onChange:b,onSubmit:r,value:E}),e[9]=r,e[10]=b,e[11]=E,e[12]=k):k=e[12];let j;return e[13]!==l||e[14]!==d||e[15]!==k?(j=g.jsx(At,{className:l,style:d,children:k}),e[13]=l,e[14]=d,e[15]=k,e[16]=j):j=e[16],j},Re=N.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,jt=N.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function We(t){const e=Z.c(21),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.y}%`;let r;e[0]!==o?(r=g.jsx(Re,{style:{height:o,width:"100%"}}),e[0]=o,e[1]=r):r=e[1];const s=`${n.y}%`,c=`${n.height}%`,l=`${n.x}%`;let u;e[2]!==s||e[3]!==c||e[4]!==l?(u=g.jsx(Re,{style:{top:s,height:c,width:l}}),e[2]=s,e[3]=c,e[4]=l,e[5]=u):u=e[5];const p=`${n.y}%`,v=`${n.x+n.width}%`,f=`${n.height}%`,m=`${100-(n.x+n.width)}%`;let d;e[6]!==p||e[7]!==v||e[8]!==f||e[9]!==m?(d=g.jsx(Re,{style:{top:p,left:v,height:f,width:m}}),e[6]=p,e[7]=v,e[8]=f,e[9]=m,e[10]=d):d=e[10];const b=`${n.y+n.height}%`,E=`${100-(n.y+n.height)}%`;let k;e[11]!==b||e[12]!==E?(k=g.jsx(Re,{style:{top:b,height:E,width:"100%"}}),e[11]=b,e[12]=E,e[13]=k):k=e[13];let j;return e[14]!==t.className||e[15]!==t.style||e[16]!==r||e[17]!==d||e[18]!==k||e[19]!==u?(j=g.jsxs(jt,{className:t.className,style:t.style,children:[r,u,d,k]}),e[14]=t.className,e[15]=t.style,e[16]=r,e[17]=d,e[18]=k,e[19]=u,e[20]=j):j=e[20],j}We.defaultProps={className:"",style:{}};const It=N.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Te(t){const e=Z.c(10),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.x}%`,r=`${n.y}%`,s=`${n.height}%`,c=`${n.width}%`,l=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==o||e[2]!==r||e[3]!==s||e[4]!==c||e[5]!==l?(u={position:"absolute",left:o,top:r,height:s,width:c,boxShadow:l,...t.style},e[0]=t.style,e[1]=o,e[2]=r,e[3]=s,e[4]=c,e[5]=l,e[6]=u):u=e[6];let p;return e[7]!==t.className||e[8]!==u?(p=g.jsx(It,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=p):p=e[9],p}Te.defaultProps={className:"",style:{}};const Yt=N.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Me(t){const e=Z.c(10),{geometry:n}=t.annotation;if(!n)return null;const o=`${n.x}%`,r=`${n.y}%`,s=`${n.height}%`,c=`${n.width}%`,l=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==o||e[2]!==r||e[3]!==s||e[4]!==c||e[5]!==l?(u={position:"absolute",left:o,top:r,height:s,width:c,boxShadow:l,...t.style},e[0]=t.style,e[1]=o,e[2]=r,e[3]=s,e[4]=c,e[5]=l,e[6]=u):u=e[6];let p;return e[7]!==t.className||e[8]!==u?(p=g.jsx(Yt,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=p):p=e[9],p}Me.defaultProps={className:"",style:{}};const _t=N.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Ve(t){const e=Z.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const o=`${n.x}%`,r=`${n.y+n.height}%`;let s;e[0]!==t.style||e[1]!==o||e[2]!==r?(s={position:"absolute",left:o,top:r,...t.style},e[0]=t.style,e[1]=o,e[2]=r,e[3]=s):s=e[3];const c=t.annotation.data&&t.annotation.data.text;let l;return e[4]!==t.className||e[5]!==s||e[6]!==c?(l=g.jsx(_t,{style:s,className:t.className,children:c}),e[4]=t.className,e[5]=s,e[6]=c,e[7]=l):l=e[7],l}Ve.defaultProps={style:{},className:""};const je=N.div`
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
`,Ot=N.div`
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
`,Lt=N.div`
  &::before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
    color: #666;
    line-height: 1;
  }
`,Je=t=>{const e=Z.c(6),{annotationId:n,onRemove:o}=t;let r;e[0]!==n||e[1]!==o?(r=u=>{u.stopPropagation(),o(n)},e[0]=n,e[1]=o,e[2]=r):r=e[2];const s=r;let c;e[3]===Symbol.for("react.memo_cache_sentinel")?(c=g.jsx(Lt,{}),e[3]=c):c=e[3];let l;return e[4]!==s?(l=g.jsx(Ot,{onClick:s,children:c}),e[4]=s,e[5]=l):l=e[5],l},Ht=N.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
`,Ze=N.button`
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
`,Qe=t=>{const e=Z.c(11),{onConfirm:n,onReset:o}=t;let r;e[0]!==n?(r=f=>{f.stopPropagation(),n()},e[0]=n,e[1]=r):r=e[1];const s=r;let c;e[2]!==o?(c=f=>{f.stopPropagation(),o()},e[2]=o,e[3]=c):c=e[3];const l=c;let u;e[4]!==s?(u=g.jsx(Ze,{$variant:"confirm",onClick:s,children:"✓"}),e[4]=s,e[5]=u):u=e[5];let p;e[6]!==l?(p=g.jsx(Ze,{$variant:"reset",onClick:l,children:"✕"}),e[6]=l,e[7]=p):p=e[7];let v;return e[8]!==u||e[9]!==p?(v=g.jsxs(Ht,{children:[u,p]}),e[8]=u,e[9]=p,e[10]=v):v=e[10],v},Xt=N.div`
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
`,Bt=N.div`
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
`,ve=t=>{const e=Z.c(9),{position:n,onDragStart:o,onDrag:r,onDragEnd:s,annotationId:c}=t;let l;e[0]!==c||e[1]!==r||e[2]!==s||e[3]!==o||e[4]!==n?(l=f=>{f.preventDefault(),f.stopPropagation();const m={x:f.clientX,y:f.clientY};o(c,m);const d=E=>{E.preventDefault(),E.stopPropagation(),r(E,n,m)},b=E=>{E.preventDefault(),E.stopPropagation(),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",b),s==null||s()};document.addEventListener("mousemove",d),document.addEventListener("mouseup",b)},e[0]=c,e[1]=r,e[2]=s,e[3]=o,e[4]=n,e[5]=l):l=e[5];const u=l,p=Ft;let v;return e[6]!==u||e[7]!==n?(v=g.jsx(Xt,{position:n,onMouseDown:u,onClick:p,"data-type":"dot"}),e[6]=u,e[7]=n,e[8]=v):v=e[8],v},Ke=t=>{const e=Z.c(7),{onMoveStart:n,onMove:o,onMoveEnd:r,annotationId:s}=t;let c;e[0]!==s||e[1]!==o||e[2]!==r||e[3]!==n?(c=v=>{v.preventDefault(),v.stopPropagation();const f={x:v.clientX,y:v.clientY};n(s,f);const m=b=>{b.preventDefault(),b.stopPropagation(),o(b,f)},d=b=>{b.preventDefault(),b.stopPropagation(),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",d),r==null||r()};document.addEventListener("mousemove",m),document.addEventListener("mouseup",d)},e[0]=s,e[1]=o,e[2]=r,e[3]=n,e[4]=c):c=e[4];const l=c,u=zt;let p;return e[5]!==l?(p=g.jsx(Bt,{onMouseDown:l,onClick:u,"data-type":"move-button",children:"↕"}),e[5]=l,e[6]=p):p=e[6],p};function Ft(t){t.preventDefault(),t.stopPropagation()}function zt(t){t.preventDefault(),t.stopPropagation()}const Gt=N.div`
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
`,$e=t=>{var U,i,x,M,y,z,B,re,ie,I,te,$;const e=Z.c(53),{annotation:n,onDotDragStart:o,onDotDrag:r,onMoveStart:s,onMove:c,onDragEnd:l,isDragging:u,allowDelete:p,onRemoveAnnotation:v,onConfirm:f,onReset:m}=t,{geometry:d}=n;if(!d||!d.type||typeof d.x!="number"||typeof d.y!="number")return null;let b;e[0]!==((U=n.data)==null?void 0:U.id)||e[1]!==c||e[2]!==s?(b=w=>{var Se;const q=w.target;if(q.closest('[data-type="dot"]')||q.closest('[data-type="move-button"]'))return;w.preventDefault(),w.stopPropagation();const ye={x:w.clientX,y:w.clientY},ue=(Se=n.data)==null?void 0:Se.id;ue&&s(ue,ye);const he=ae=>{ae.preventDefault(),ae.stopPropagation(),c(ae,ye)},de=ae=>{ae.preventDefault(),ae.stopPropagation(),document.removeEventListener("mousemove",he),document.removeEventListener("mouseup",de)};document.addEventListener("mousemove",he),document.addEventListener("mouseup",de)},e[0]=(i=n.data)==null?void 0:i.id,e[1]=c,e[2]=s,e[3]=b):b=e[3];const E=b,k=Ut,j=`${d.x}%`,V=`${d.y}%`,ee=`${d.width}%`,ne=`${d.height}%`;let Q;e[4]!==j||e[5]!==V||e[6]!==ee||e[7]!==ne?(Q={left:j,top:V,width:ee,height:ne},e[4]=j,e[5]=V,e[6]=ee,e[7]=ne,e[8]=Q):Q=e[8];const oe=(x=n.data)==null?void 0:x.id;let K;e[9]!==r||e[10]!==o||e[11]!==l||e[12]!==oe?(K=g.jsx(ve,{position:"top",onDragStart:o,onDrag:r,onDragEnd:l,annotationId:oe}),e[9]=r,e[10]=o,e[11]=l,e[12]=oe,e[13]=K):K=e[13];const C=(M=n.data)==null?void 0:M.id;let P;e[14]!==r||e[15]!==o||e[16]!==l||e[17]!==C?(P=g.jsx(ve,{position:"right",onDragStart:o,onDrag:r,onDragEnd:l,annotationId:C}),e[14]=r,e[15]=o,e[16]=l,e[17]=C,e[18]=P):P=e[18];const A=(y=n.data)==null?void 0:y.id;let R;e[19]!==r||e[20]!==o||e[21]!==l||e[22]!==A?(R=g.jsx(ve,{position:"bottom",onDragStart:o,onDrag:r,onDragEnd:l,annotationId:A}),e[19]=r,e[20]=o,e[21]=l,e[22]=A,e[23]=R):R=e[23];const X=(z=n.data)==null?void 0:z.id;let L;e[24]!==r||e[25]!==o||e[26]!==l||e[27]!==X?(L=g.jsx(ve,{position:"left",onDragStart:o,onDrag:r,onDragEnd:l,annotationId:X}),e[24]=r,e[25]=o,e[26]=l,e[27]=X,e[28]=L):L=e[28];const F=(B=n.data)==null?void 0:B.id;let _;e[29]!==l||e[30]!==c||e[31]!==s||e[32]!==F?(_=g.jsx(Ke,{onMoveStart:s,onMove:c,onMoveEnd:l,annotationId:F}),e[29]=l,e[30]=c,e[31]=s,e[32]=F,e[33]=_):_=e[33];let D;e[34]!==p||e[35]!==((re=n.data)==null?void 0:re.id)||e[36]!==v?(D=p&&v&&g.jsx(Je,{annotationId:(ie=n.data)==null?void 0:ie.id,onRemove:v}),e[34]=p,e[35]=(I=n.data)==null?void 0:I.id,e[36]=v,e[37]=D):D=e[37];let S;e[38]!==((te=n.data)==null?void 0:te.id)||e[39]!==f||e[40]!==m?(S=f&&m&&g.jsx(Qe,{onConfirm:()=>{var w;return f((w=n.data)==null?void 0:w.id)},onReset:()=>{var w;return m((w=n.data)==null?void 0:w.id)}}),e[38]=($=n.data)==null?void 0:$.id,e[39]=f,e[40]=m,e[41]=S):S=e[41];let T;return e[42]!==E||e[43]!==u||e[44]!==P||e[45]!==R||e[46]!==L||e[47]!==_||e[48]!==D||e[49]!==S||e[50]!==Q||e[51]!==K?(T=g.jsxs(Gt,{style:Q,$isDragging:u,onMouseDown:E,onClick:k,children:[K,P,R,L,_,D,S]}),e[42]=E,e[43]=u,e[44]=P,e[45]=R,e[46]=L,e[47]=_,e[48]=D,e[49]=S,e[50]=Q,e[51]=K,e[52]=T):T=e[52],T};function Ut(t){t.preventDefault(),t.stopPropagation()}const qe="RECTANGLE";function Wt({x:t,y:e},n){if(!n)return!1;const o=Math.min(n.x,n.x+n.width),r=Math.max(n.x,n.x+n.width),s=Math.min(n.y,n.y+n.height),c=Math.max(n.y,n.y+n.height);return!(t<o||e<s||t>r||e>c)}function Vt(t){if(!t||t.width<=0||t.height<=0)return 0;const e=Math.abs(t.width),n=Math.abs(t.height);return e*n}const Jt={onTouchStart(t,e){return et(t,e)},onTouchEnd(t,e){return tt(t)},onTouchMove(t,e){return nt(t,e)},onMouseDown(t,e){return et(t,e)},onMouseUp(t,e){return tt(t)},onMouseMove(t,e){return nt(t,e)}};function et(t,e){if(t.selection)return{};{const{x:n,y:o}=ce(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}}function tt(t,e){if(t.selection){const{selection:n,geometry:o}=t;if(!o)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function nt(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:r,y:s}=ce(e),c=r-n,l=s-o;return{...t,geometry:{...t.geometry,type:qe,x:c>0?n:r,y:l>0?o:s,width:Math.abs(c),height:Math.abs(l)}}}return t}const le={TYPE:qe,intersects:Wt,area:Vt,methods:Jt},ot="POINT";function Zt({x:t,y:e},n,o){if(!n)return!1;const r=Math.abs(t-n.x),s=Math.abs(e-n.y);return r===0&&s===0}function Qt(t,e){return 0}const fe={TYPE:ot,intersects:Zt,area:Qt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...ce(e),width:0,height:0,type:ot}}}}},Ce=t=>Math.pow(t,2),Ie="OVAL";function Kt({x:t,y:e},n){if(!n||!n.width||!n.height)return!1;const o=Math.abs(n.width),r=Math.abs(n.height),s={x:n.x+o/2,y:n.y+r/2},c=o/2,l=r/2;if(c===0||l===0)return!1;const u=t-s.x,p=e-s.y;return Ce(u)/Ce(c)+Ce(p)/Ce(l)<=1}function $t(t){return!t||!t.width||!t.height||t.width<=0||t.height<=0?0:Math.PI*Math.abs(t.width)*Math.abs(t.height)/4}const qt={onTouchStart(t,e){return en(t,e)},onTouchEnd(t,e){return tn(t)},onTouchMove(t,e){return nn(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:o}=ce(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:r,y:s}=ce(e);return{...t,geometry:{...t.geometry,type:Ie,x:Math.min(n,r),y:Math.min(o,s),width:Math.abs(r-n),height:Math.abs(s-o)}}}return t}};function en(t,e){if(t.selection)return{};{const{x:n,y:o}=ce(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:o}}}}function tn(t,e){if(t.selection){const{selection:n,geometry:o}=t;if(!o)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function nn(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:o}=t.selection,{x:r,y:s}=ce(e),c=r-n,l=s-o;return{...t,geometry:{...t.geometry,type:Ie,x:c>0?n:r,y:l>0?o:s,width:Math.abs(c),height:Math.abs(l)}}}return t}const be={TYPE:Ie,intersects:Kt,area:$t,methods:qt},rt={innerRef:()=>{},onChange:()=>{},onSubmit:()=>{},type:le.TYPE,selectors:[le,fe,be],disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,activeAnnotationComparator:(t,e)=>t===e,renderSelector:({annotation:t})=>{switch(t.geometry.type){case le.TYPE:return g.jsx(We,{annotation:t});case fe.TYPE:return g.jsx(Ne,{annotation:t});case be.TYPE:return g.jsx(Me,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>g.jsx(Nt,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case le.TYPE:return g.jsx(Te,{annotation:e,active:n},t);case fe.TYPE:return g.jsx(Ne,{annotation:e},t);case be.TYPE:return g.jsx(Me,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>g.jsx(Ve,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case fe.TYPE:return g.jsx(je,{children:"Click to Annotate"});default:return g.jsx(je,{children:"Click and Drag to Annotate"})}},enableEditing:!1,onAnnotationsChange:()=>{console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderDraggableHighlight:({key:t,annotation:e,active:n,isDragging:o,isHovered:r,onDotDragStart:s,onDotDrag:c,onMoveStart:l,onMove:u,onDragEnd:p,allowDelete:v,onRemoveAnnotation:f,onConfirm:m,onReset:d})=>{var b;if(!((b=e.data)!=null&&b.id)||!r)switch(e.geometry.type){case le.TYPE:return g.jsx(Te,{annotation:e,active:n},t);case fe.TYPE:return g.jsx(Ne,{annotation:e},t);case be.TYPE:return g.jsx(Me,{annotation:e,active:n},t);default:return null}return e.geometry.type===le.TYPE?g.jsx($e,{annotation:e,onDotDragStart:s,onDotDrag:c,onMoveStart:l,onMove:u,onDragEnd:p,isDragging:o,allowDelete:v,onRemoveAnnotation:f,onConfirm:m,onReset:d},t):g.jsx(Te,{annotation:e,active:n},t)}},on=N.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${je} {
    opacity: 1;
  }
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,rn=N.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`,sn=N.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`,an=N.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`,cn=t=>{var ut;const{selectors:e,...n}=t,o={...rt,...n,selectors:e!==void 0?e:rt.selectors},{src:r,alt:s,style:c,className:l,containerRef:u,children:p,annotations:v,type:f,selectors:m,value:d,onChange:b,onSubmit:E,activeAnnotationComparator:k,activeAnnotations:j,disableAnnotation:V,disableSelector:ee,renderSelector:ne,disableEditor:Q,renderEditor:oe,renderHighlight:K,renderContent:C,disableOverlay:P,renderOverlay:A,allowTouch:R,onImageMouseUp:X,onImageMouseDown:L,onImageMouseMove:F,onImageClick:_,enableEditing:D,onAnnotationsChange:S,renderDraggableHighlight:T,allowDelete:U,onRemoveAnnotation:i,onConfirm:x,onReset:M,relativeMousePos:y,isMouseHovering:z}=o,B=h.useRef(null),re=h.useRef(null),{x:ie,y:I}=y,te=h.useCallback(a=>{D&&S&&S(a)},[D,S]),$=!!(x&&M),w=D?Et(v,te,$):null,q=h.useRef(null),[ye,ue]=h.useState(null),he=h.useRef(0),de=(w==null?void 0:w.displayAnnotations)||v,Se=h.useCallback(a=>{he.current=Date.now()+200,ue(null),w?w.handleConfirm(a):x&&x(a)},[w,x]),ae=h.useCallback(a=>{he.current=Date.now()+200,ue(null),w?w.handleReset(a):M&&M(a)},[w,M]),pe=h.useCallback(a=>{if(a)return m.find(Y=>Y.TYPE===a)},[m]),ke=f||m&&m[0]&&m[0].TYPE,W=h.useCallback((a,Y)=>{if(V)return;const G=pe(ke);if(G&&G.methods[a]){const se=G.methods[a],J=se(d||{},Y);typeof J>"u"?process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(a)} of type ${ke} returned undefined.
             Make sure to explicitly return the previous state or new state.`):b&&b(J)}},[V,pe,ke,d,b]),st=h.useCallback(a=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&R&&a.preventDefault(),W("onTouchStart",a)},[R,W]),it=h.useCallback(a=>{W("onTouchEnd",a)},[W]),at=h.useCallback(a=>{y&&typeof y.onTouchMove=="function"&&y.onTouchMove(a),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&R&&a.preventDefault(),W("onTouchMove",a)},[y,R,W]),_e=h.useCallback(a=>{y&&typeof y.onTouchLeave=="function"&&y.onTouchLeave(a)},[y]);h.useEffect(()=>{const a=re.current;if(R&&a)return a.ontouchstart=st,a.ontouchend=it,a.ontouchmove=at,a.ontouchcancel=_e,()=>{a&&(a.ontouchstart=null,a.ontouchend=null,a.ontouchmove=null,a.ontouchcancel=null)};a&&(a.ontouchstart=null,a.ontouchend=null,a.ontouchmove=null,a.ontouchcancel=null)},[R,st,it,at,_e]);const ln=h.useCallback(a=>{B.current=a,y&&typeof y.innerRef=="function"&&y.innerRef(a)},[y]),un=h.useCallback(a=>{z&&typeof z.innerRef=="function"&&z.innerRef(a),u&&(typeof u=="function"?u(a):u.current=a)},[z,u]),dn=h.useCallback((a,Y)=>{const G=B.current;return!G||a===null||Y===null?void 0:de.map(J=>{const{geometry:O}=J;if(!O)return!1;const ge=pe(O.type);if(!ge)return!1;if(D&&O.type==="RECTANGLE"&&typeof O.x=="number"&&typeof O.y=="number"&&typeof O.width=="number"&&typeof O.height=="number"){const De={...O,x:Math.max(0,O.x-2),y:Math.max(0,O.y-2),width:Math.min(100-O.x+2,O.width+4),height:Math.min(100-O.y+2,O.height+4)};return ge.intersects({x:a,y:Y},De,G)?J:!1}return ge.intersects({x:a,y:Y},O,G)?J:!1}).filter(J=>!!J).sort((J,O)=>{const ge=pe(J.geometry.type),De=pe(O.geometry.type);return!ge||!De||!G?0:ge.area(J.geometry,G)-De.area(O.geometry,G)})[0]},[de,pe,B,D]),fn=h.useCallback(a=>{y&&typeof y.onMouseMove=="function"&&y.onMouseMove(a);const Y=a;F&&F(Y),W("onMouseMove",Y)},[y,F,W]),hn=h.useCallback(a=>{y&&typeof y.onMouseLeave=="function"&&y.onMouseLeave(a)},[y]),pn=h.useCallback(a=>{X&&X(a),W("onMouseUp",a)},[X,W]),gn=h.useCallback(a=>{L&&L(a),W("onMouseDown",a)},[L,W]),mn=h.useCallback(a=>{_&&_(a),W("onClick",a)},[_,W]),xn=h.useCallback(()=>{E&&d&&E(d)},[E,d]),Oe=h.useCallback(a=>{var Y;a.key==="Escape"&&b&&((Y=d==null?void 0:d.selection)!=null&&Y.showEditor||d!=null&&d.geometry)&&b({selection:void 0,geometry:void 0,data:void 0})},[d,b]);h.useEffect(()=>{var a;if((a=d==null?void 0:d.selection)!=null&&a.showEditor)return window.addEventListener("keydown",Oe),()=>window.removeEventListener("keydown",Oe)},[(ut=d==null?void 0:d.selection)==null?void 0:ut.showEditor,Oe]),h.useEffect(()=>()=>{q.current&&clearTimeout(q.current)},[]);const ct=h.useCallback((a,Y)=>j&&!!j.find(se=>k?k(a,se):a.data.id===se)||Y===a,[j,k]),lt=dn(ie,I);return g.jsxs(on,{style:c,ref:un,onMouseLeave:hn,onTouchCancel:_e,onMouseMove:fn,$allowTouch:R,className:l,children:[g.jsx(rn,{alt:s||"Annotation Image",src:r,draggable:!1,ref:ln}),g.jsxs(sn,{children:[de.map(a=>{if(!a.data||typeof a.data.id>"u")return console.warn("Annotation is missing data.id, cannot render highlight:",a),null;const Y=ct(a,lt);if(D&&w&&!w.isDragging){const se=Date.now()<he.current;Y&&ye!==a.data.id&&!se?(q.current&&(clearTimeout(q.current),q.current=null),ue(a.data.id),w.setDraggingId(a.data.id)):!Y&&ye===a.data.id&&(q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{ue(null),w.setDraggingId(null),q.current=null},100))}if(D&&T&&w){const G=w.draggingId===a.data.id,se=w.isDragging&&w.draggingId===a.data.id,J=$&&w.editingAnnotationId===a.data.id;if($&&J||G)return T({key:a.data.id,annotation:a,active:Y,isDragging:se,isHovered:G,onDotDragStart:w.handleDotDragStart,onDotDrag:w.handleDotDrag,onMoveStart:w.handleMoveStart,onMove:w.handleMove,onDragEnd:w.handleMouseUp,allowDelete:U,onRemoveAnnotation:i,onConfirm:$?Se:x,onReset:$?ae:M})}return K({key:a.data.id,annotation:a,active:Y})}),!ee&&d&&d.geometry&&ne&&ne({annotation:d})]}),g.jsx(an,{"data-testid":"annotation-target",ref:re,onClick:mn,onMouseUp:pn,onMouseDown:gn}),!P&&A&&A({type:ke,annotation:d}),de.map(a=>!a.data||typeof a.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render content:",a),null):ct(a,lt)&&C&&C({key:a.data.id,annotation:a})),!Q&&d&&d.selection&&d.selection.showEditor&&oe&&b&&oe({annotation:d,onChange:b,onSubmit:xn}),g.jsx("div",{children:p})]})},Ye=pt(mt("isMouseHovering"),wt("relativeMousePos"))(cn);process.env.NODE_ENV!=="production"&&(Ye.displayName="ComposedAnnotation"),H.Annotation=Ye,H.ConfirmResetButtons=Qe,H.DeleteButton=Je,H.DraggableBox=$e,H.DraggableDot=ve,H.MoveButton=Ke,H.OvalSelector=be,H.PointSelector=fe,H.RectangleSelector=le,H.default=Ye,Object.defineProperties(H,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
