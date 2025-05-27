(function(_,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],h):(_=typeof globalThis<"u"?globalThis:_||self,h(_.ReactImageAnnotation={},_.React,_.styled))})(this,function(_,h,S){"use strict";var re={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function Fe(){if(ye)return V;ye=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,i,c){var a=null;if(c!==void 0&&(a=""+c),i.key!==void 0&&(a=""+i.key),"key"in i){c={};for(var l in i)l!=="key"&&(c[l]=i[l])}else c=i;return i=c.ref,{$$typeof:t,type:s,key:a,ref:i!==void 0?i:null,props:c}}return V.Fragment=e,V.jsx=n,V.jsxs=n,V}var B={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re;function ze(){return Re||(Re=1,process.env.NODE_ENV!=="production"&&function(){function t(o){if(o==null)return null;if(typeof o=="function")return o.$$typeof===fe?null:o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case C:return"Fragment";case N:return"Profiler";case y:return"StrictMode";case xe:return"Suspense";case ue:return"SuspenseList";case Ee:return"Activity"}if(typeof o=="object")switch(typeof o.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),o.$$typeof){case M:return"Portal";case Q:return(o.displayName||"Context")+".Provider";case H:return(o._context.displayName||"Context")+".Consumer";case le:var f=o.render;return o=o.displayName,o||(o=f.displayName||f.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case be:return f=o.displayName||null,f!==null?f:t(o.type)||"Memo";case K:f=o._payload,o=o._init;try{return t(o(f))}catch{}}return null}function e(o){return""+o}function n(o){try{e(o);var f=!1}catch{f=!0}if(f){f=console;var g=f.error,E=typeof Symbol=="function"&&Symbol.toStringTag&&o[Symbol.toStringTag]||o.constructor.name||"Object";return g.call(f,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",E),e(o)}}function s(o){if(o===C)return"<>";if(typeof o=="object"&&o!==null&&o.$$typeof===K)return"<...>";try{var f=t(o);return f?"<"+f+">":"<...>"}catch{return"<...>"}}function i(){var o=A.A;return o===null?null:o.getOwner()}function c(){return Error("react-stack-top-frame")}function a(o){if(X.call(o,"key")){var f=Object.getOwnPropertyDescriptor(o,"key").get;if(f&&f.isReactWarning)return!1}return o.key!==void 0}function l(o,f){function g(){G||(G=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",f))}g.isReactWarning=!0,Object.defineProperty(o,"key",{get:g,configurable:!0})}function u(){var o=t(this.type);return b[o]||(b[o]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),o=this.props.ref,o!==void 0?o:null}function d(o,f,g,E,k,v,z,W){return g=v.ref,o={$$typeof:p,type:o,key:f,props:v,_owner:k},(g!==void 0?g:null)!==null?Object.defineProperty(o,"ref",{enumerable:!1,get:u}):Object.defineProperty(o,"ref",{enumerable:!1,value:null}),o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(o,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(o,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:z}),Object.defineProperty(o,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:W}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o}function T(o,f,g,E,k,v,z,W){var R=f.children;if(R!==void 0)if(E)if(q(R)){for(E=0;E<R.length;E++)w(R[E]);Object.freeze&&Object.freeze(R)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else w(R);if(X.call(f,"key")){R=t(o);var O=Object.keys(f).filter(function(Te){return Te!=="key"});E=0<O.length?"{key: someKey, "+O.join(": ..., ")+": ...}":"{key: someKey}",ee[R+E]||(O=0<O.length?"{"+O.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,E,R,O,R),ee[R+E]=!0)}if(R=null,g!==void 0&&(n(g),R=""+g),a(f)&&(n(f.key),R=""+f.key),"key"in f){g={};for(var te in f)te!=="key"&&(g[te]=f[te])}else g=f;return R&&l(g,typeof o=="function"?o.displayName||o.name||"Unknown":o),d(o,R,v,k,i(),g,z,W)}function w(o){typeof o=="object"&&o!==null&&o.$$typeof===p&&o._store&&(o._store.validated=1)}var x=h,p=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),fe=Symbol.for("react.client.reference"),A=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=Object.prototype.hasOwnProperty,q=Array.isArray,U=console.createTask?console.createTask:function(){return null};x={"react-stack-bottom-frame":function(o){return o()}};var G,b={},I=x["react-stack-bottom-frame"].bind(x,c)(),F=U(s(c)),ee={};B.Fragment=C,B.jsx=function(o,f,g,E,k){var v=1e4>A.recentlyCreatedOwnerStacks++;return T(o,f,g,!1,E,k,v?Error("react-stack-top-frame"):I,v?U(s(o)):F)},B.jsxs=function(o,f,g,E,k){var v=1e4>A.recentlyCreatedOwnerStacks++;return T(o,f,g,!0,E,k,v?Error("react-stack-top-frame"):I,v?U(s(o)):F)}}()),B}var we;function We(){return we||(we=1,process.env.NODE_ENV==="production"?re.exports=Fe():re.exports=ze()),re.exports}var m=We();function $e(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...s)=>e(n(...s)))}const Ve=({elem:t,e})=>{if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageY:n,pageX:s}=e,{left:i,right:c,bottom:a,top:l}=t.getBoundingClientRect();return s>i&&s<c&&n>l&&n<a},Be=(t="isMouseHovering")=>e=>{const n=i=>{const[c,a]=h.useState(!1),l=h.useRef(null);h.useEffect(()=>{const d=T=>{const w=l.current,x={pageX:T.pageX,pageY:T.pageY};a(Ve({elem:w,e:x}))};return document.addEventListener("mousemove",d),()=>{document.removeEventListener("mousemove",d)}},[]);const u={[t]:{innerRef:d=>l.current=d,isHoveringOver:c}};return h.createElement(e,{...i,...u})},s=e.displayName||e.name||"Component";return n.displayName=`IsMouseHovering(${s})`,n},Me=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.x,s=t.clientY-e.y;return{x:n/e.width*100,y:s/e.height*100}},Ce=(t,e,n)=>Math.max(t,Math.min(e,n)),Je=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),s=e.pageX-n.left,i=e.pageY-(n.top+window.scrollY);return{x:Ce(0,100,s/n.width*100),y:Ce(0,100,i/n.height*100)}},L=t=>Ze(t)?Qe(t)?(Ke(t)&&t.preventDefault(),Je(t)):{x:null}:Me(t),Ze=t=>t.targetTouches!==void 0,Qe=t=>t.targetTouches.length===1,Ke=t=>t.type==="touchmove",qe=(t="relativeMousePos")=>e=>{class n extends h.PureComponent{constructor(c){super(c),this.container=null,this._innerRef=a=>{this.container=a},this._onMouseMove=a=>{const l=Me(a);this.setState(l)},this._onTouchMove=a=>{if(!this.container||a.targetTouches.length!==1)return;const l=a.targetTouches[0],u=this.container.offsetParent;if(!u)return;const d=l.pageX-u.offsetLeft,T=l.pageY-u.offsetTop,w=this.container.width,x=this.container.height;typeof w=="number"&&typeof x=="number"&&w>0&&x>0?this.setState({x:d/w*100,y:T/x*100}):this.setState({x:null,y:null})},this._onMouseLeave=a=>{this.setState({x:null,y:null})},this._onTouchLeave=a=>{this.setState({x:null,y:null})},this.state={x:null,y:null}}render(){const c={innerRef:this._innerRef,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,onTouchMove:this._onTouchMove,onTouchLeave:this._onTouchLeave,x:this.state.x,y:this.state.y},a={[t]:c};return h.createElement(e,{...this.props,...a})}}const s=e.displayName||e.name||"Component";return n.displayName=`withRelativeMousePos(${s})`,n};var se={exports:{}},de={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se;function et(){if(Se)return de;Se=1;var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return de.c=function(e){return t.H.useMemoCache(e)},de}var he={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function tt(){return Ne||(Ne=1,process.env.NODE_ENV!=="production"&&function(){var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;he.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),he}var ke;function nt(){return ke||(ke=1,process.env.NODE_ENV==="production"?se.exports=et():se.exports=tt()),se.exports}var D=nt();const ot=S.div`
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
`;function _e(t){const e=D.c(3),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.y}%`,i=`${n.x}%`;let c;return e[0]!==s||e[1]!==i?(c=m.jsx(ot,{style:{top:s,left:i}}),e[0]=s,e[1]=i,e[2]=c):c=e[2],c}const rt=S.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,st=S.div`
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
`,it=t=>{const e=D.c(11),{onChange:n,onSubmit:s,onFocus:i,onBlur:c,value:a}=t;let l;e[0]!==c||e[1]!==n||e[2]!==i||e[3]!==a?(l=m.jsx(rt,{children:m.jsx("textarea",{placeholder:"Write description",onFocus:i,onBlur:c,onChange:n,value:a})}),e[0]=c,e[1]=n,e[2]=i,e[3]=a,e[4]=l):l=e[4];let u;e[5]!==s||e[6]!==a?(u=a&&m.jsx(st,{onClick:s,children:"Submit"}),e[5]=s,e[6]=a,e[7]=u):u=e[7];let d;return e[8]!==l||e[9]!==u?(d=m.jsxs(h.Fragment,{children:[l,u]}),e[8]=l,e[9]=u,e[10]=d):d=e[10],d},ct=S.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,at=S.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${ct} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,lt=t=>{var H;const e=D.c(17),{annotation:n,onChange:s,onSubmit:i,className:c,style:a}=t,l=c===void 0?"":c;let u;e[0]!==a?(u=a===void 0?{}:a,e[0]=a,e[1]=u):u=e[1];const d=u,{geometry:T}=n;if(!T)return null;const w=`${T.x}%`,x=`${T.y+T.height}%`;let p;e[2]!==d||e[3]!==w||e[4]!==x?(p={position:"absolute",left:w,top:x,...d},e[2]=d,e[3]=w,e[4]=x,e[5]=p):p=e[5];let M;e[6]!==n||e[7]!==s?(M=Q=>s({...n,data:{...n.data,text:Q.target.value}}),e[6]=n,e[7]=s,e[8]=M):M=e[8];const C=(H=n.data)==null?void 0:H.text;let y;e[9]!==i||e[10]!==M||e[11]!==C?(y=m.jsx(it,{onChange:M,onSubmit:i,value:C}),e[9]=i,e[10]=M,e[11]=C,e[12]=y):y=e[12];let N;return e[13]!==l||e[14]!==p||e[15]!==y?(N=m.jsx(at,{className:l,style:p,children:y}),e[13]=l,e[14]=p,e[15]=y,e[16]=N):N=e[16],N},ie=S.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,ut=S.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Pe(t){const e=D.c(21),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.y}%`;let i;e[0]!==s?(i=m.jsx(ie,{style:{height:s,width:"100%"}}),e[0]=s,e[1]=i):i=e[1];const c=`${n.y}%`,a=`${n.height}%`,l=`${n.x}%`;let u;e[2]!==c||e[3]!==a||e[4]!==l?(u=m.jsx(ie,{style:{top:c,height:a,width:l}}),e[2]=c,e[3]=a,e[4]=l,e[5]=u):u=e[5];const d=`${n.y}%`,T=`${n.x+n.width}%`,w=`${n.height}%`,x=`${100-(n.x+n.width)}%`;let p;e[6]!==d||e[7]!==T||e[8]!==w||e[9]!==x?(p=m.jsx(ie,{style:{top:d,left:T,height:w,width:x}}),e[6]=d,e[7]=T,e[8]=w,e[9]=x,e[10]=p):p=e[10];const M=`${n.y+n.height}%`,C=`${100-(n.y+n.height)}%`;let y;e[11]!==M||e[12]!==C?(y=m.jsx(ie,{style:{top:M,height:C,width:"100%"}}),e[11]=M,e[12]=C,e[13]=y):y=e[13];let N;return e[14]!==t.className||e[15]!==t.style||e[16]!==i||e[17]!==p||e[18]!==y||e[19]!==u?(N=m.jsxs(ut,{className:t.className,style:t.style,children:[i,u,p,y]}),e[14]=t.className,e[15]=t.style,e[16]=i,e[17]=p,e[18]=y,e[19]=u,e[20]=N):N=e[20],N}Pe.defaultProps={className:"",style:{}};const ft=S.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Ae(t){const e=D.c(10),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.x}%`,i=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,l=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==s||e[2]!==i||e[3]!==c||e[4]!==a||e[5]!==l?(u={position:"absolute",left:s,top:i,height:c,width:a,boxShadow:l,...t.style},e[0]=t.style,e[1]=s,e[2]=i,e[3]=c,e[4]=a,e[5]=l,e[6]=u):u=e[6];let d;return e[7]!==t.className||e[8]!==u?(d=m.jsx(ft,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=d):d=e[9],d}Ae.defaultProps={className:"",style:{}};const dt=S.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function me(t){const e=D.c(10),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.x}%`,i=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,l=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==s||e[2]!==i||e[3]!==c||e[4]!==a||e[5]!==l?(u={position:"absolute",left:s,top:i,height:c,width:a,boxShadow:l,...t.style},e[0]=t.style,e[1]=s,e[2]=i,e[3]=c,e[4]=a,e[5]=l,e[6]=u):u=e[6];let d;return e[7]!==t.className||e[8]!==u?(d=m.jsx(dt,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=d):d=e[9],d}me.defaultProps={className:"",style:{}};const ht=S.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Oe(t){const e=D.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const s=`${n.x}%`,i=`${n.y+n.height}%`;let c;e[0]!==t.style||e[1]!==s||e[2]!==i?(c={position:"absolute",left:s,top:i,...t.style},e[0]=t.style,e[1]=s,e[2]=i,e[3]=c):c=e[3];const a=t.annotation.data&&t.annotation.data.text;let l;return e[4]!==t.className||e[5]!==c||e[6]!==a?(l=m.jsx(ht,{style:c,className:t.className,children:a}),e[4]=t.className,e[5]=c,e[6]=a,e[7]=l):l=e[7],l}Oe.defaultProps={style:{},className:""};const pe=S.div`
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
`,je="RECTANGLE";function mt({x:t,y:e},n){if(!n)return!1;const s=Math.min(n.x,n.x+n.width),i=Math.max(n.x,n.x+n.width),c=Math.min(n.y,n.y+n.height),a=Math.max(n.y,n.y+n.height);return!(t<s||e<c||t>i||e>a)}function pt(t){if(!t||t.width<=0||t.height<=0)return 0;const e=Math.abs(t.width),n=Math.abs(t.height);return e*n}const gt={onTouchStart(t,e){return Ye(t,e)},onTouchEnd(t,e){return Ie(t)},onTouchMove(t,e){return Le(t,e)},onMouseDown(t,e){return Ye(t,e)},onMouseUp(t,e){return Ie(t)},onMouseMove(t,e){return Le(t,e)}};function Ye(t,e){if(t.selection)return{};{const{x:n,y:s}=L(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:s}}}}function Ie(t,e){if(t.selection){const{selection:n,geometry:s}=t;if(!s)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Le(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:s}=t.selection,{x:i,y:c}=L(e),a=i-n,l=c-s;return{...t,geometry:{...t.geometry,type:je,x:a>0?n:i,y:l>0?s:c,width:Math.abs(a),height:Math.abs(l)}}}return t}const J={TYPE:je,intersects:mt,area:pt,methods:gt},De="POINT";function vt({x:t,y:e},n,s){if(!n)return!1;const i=Math.abs(t-n.x),c=Math.abs(e-n.y);return i===0&&c===0}function xt(t,e){return 0}const Z={TYPE:De,intersects:vt,area:xt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...L(e),width:0,height:0,type:De}}}}},ce=t=>Math.pow(t,2),ge="OVAL";function bt({x:t,y:e},n){if(!n||!n.width||!n.height)return!1;const s=Math.abs(n.width),i=Math.abs(n.height),c={x:n.x+s/2,y:n.y+i/2},a=s/2,l=i/2;if(a===0||l===0)return!1;const u=t-c.x,d=e-c.y;return ce(u)/ce(a)+ce(d)/ce(l)<=1}function Et(t){return!t||!t.width||!t.height||t.width<=0||t.height<=0?0:Math.PI*Math.abs(t.width)*Math.abs(t.height)/4}const Tt={onTouchStart(t,e){return yt(t,e)},onTouchEnd(t,e){return Rt(t)},onTouchMove(t,e){return wt(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:s}=L(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:s}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:s}=t.selection,{x:i,y:c}=L(e);return{...t,geometry:{...t.geometry,type:ge,x:Math.min(n,i),y:Math.min(s,c),width:Math.abs(i-n),height:Math.abs(c-s)}}}return t}};function yt(t,e){if(t.selection)return{};{const{x:n,y:s}=L(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:s}}}}function Rt(t,e){if(t.selection){const{selection:n,geometry:s}=t;if(!s)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function wt(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:s}=t.selection,{x:i,y:c}=L(e),a=i-n,l=c-s;return{...t,geometry:{...t.geometry,type:ge,x:a>0?n:i,y:l>0?s:c,width:Math.abs(a),height:Math.abs(l)}}}return t}const ae={TYPE:ge,intersects:bt,area:Et,methods:Tt},He={innerRef:()=>{},onChange:()=>{},onSubmit:()=>{},type:J.TYPE,selectors:[J,Z,ae],disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,activeAnnotationComparator:(t,e)=>t===e,renderSelector:({annotation:t})=>{switch(t.geometry.type){case J.TYPE:return m.jsx(Pe,{annotation:t});case Z.TYPE:return m.jsx(_e,{annotation:t});case ae.TYPE:return m.jsx(me,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>m.jsx(lt,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case J.TYPE:return m.jsx(Ae,{annotation:e,active:n},t);case Z.TYPE:return m.jsx(_e,{annotation:e,active:n},t);case ae.TYPE:return m.jsx(me,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>m.jsx(Oe,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case Z.TYPE:return m.jsx(pe,{children:"Click to Annotate"});default:return m.jsx(pe,{children:"Click and Drag to Annotate"})}}},Mt=S.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${pe} {
    opacity: 1;
  }
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,Ct=S.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`,St=S.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`,Nt=S.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`,kt=t=>{const{selectors:e,...n}=t,s={...He,...n,selectors:e!==void 0?e:He.selectors},{src:i,alt:c,style:a,className:l,containerRef:u,children:d,annotations:T,type:w,selectors:x,value:p,onChange:M,onSubmit:C,activeAnnotationComparator:y,activeAnnotations:N,disableAnnotation:H,disableSelector:Q,renderSelector:le,disableEditor:xe,renderEditor:ue,renderHighlight:be,renderContent:K,disableOverlay:Ee,renderOverlay:fe,allowTouch:A,onImageMouseUp:X,onImageMouseDown:q,onImageMouseMove:U,onImageClick:G,relativeMousePos:b,isMouseHovering:I}=s,F=h.useRef(null),ee=h.useRef(null),{isHoveringOver:o}=I,{x:f,y:g}=b,E=h.useCallback(r=>{if(r)return x.find(P=>P.TYPE===r)},[x]),k=w||x&&x[0]&&x[0].TYPE;E(k);const v=h.useCallback((r,P)=>{if(H)return;const j=E(k);if(j&&j.methods[r]){const ne=j.methods[r],Y=ne(p||{},P);typeof Y>"u"?process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(r)} of type ${k} returned undefined.
             Make sure to explicitly return the previous state or new state.`):M&&M(Y)}},[H,E,k,p,M]),z=h.useCallback(r=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&A&&r.preventDefault(),v("onTouchStart",r)},[A,v]),W=h.useCallback(r=>{v("onTouchEnd",r)},[v]),R=h.useCallback(r=>{b&&typeof b.onTouchMove=="function"&&b.onTouchMove(r),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&A&&r.preventDefault(),v("onTouchMove",r)},[b,A,v]),O=h.useCallback(r=>{b&&typeof b.onTouchLeave=="function"&&b.onTouchLeave(r)},[b]);h.useEffect(()=>{const r=ee.current;if(A&&r)return r.ontouchstart=z,r.ontouchend=W,r.ontouchmove=R,r.ontouchcancel=O,()=>{r&&(r.ontouchstart=null,r.ontouchend=null,r.ontouchmove=null,r.ontouchcancel=null)};r&&(r.ontouchstart=null,r.ontouchend=null,r.ontouchmove=null,r.ontouchcancel=null)},[A,z,W,R,O]);const te=h.useCallback(r=>{F.current=r,b&&typeof b.innerRef=="function"&&b.innerRef(r)},[b]),Te=h.useCallback(r=>{I&&typeof I.innerRef=="function"&&I.innerRef(r),u&&(typeof u=="function"?u(r):u.current=r)},[I,u]),_t=h.useCallback((r,P)=>{const j=F.current;return!j||r===null||P===null?void 0:T.map(Y=>{const{geometry:$}=Y;if(!$)return!1;const oe=E($.type);return oe&&oe.intersects({x:r,y:P},$,j)?Y:!1}).filter(Y=>!!Y).sort((Y,$)=>{const oe=E(Y.geometry.type),Ge=E($.geometry.type);return!oe||!Ge||!j?0:oe.area(Y.geometry,j)-Ge.area($.geometry,j)})[0]},[T,E,F]),Pt=h.useCallback(r=>{b&&typeof b.onMouseMove=="function"&&b.onMouseMove(r);const P=r;U&&U(P),v("onMouseMove",P)},[b,U,v]),At=h.useCallback(r=>{b&&typeof b.onMouseLeave=="function"&&b.onMouseLeave(r)},[b]),Ot=h.useCallback(r=>{X&&X(r),v("onMouseUp",r)},[X,v]),jt=h.useCallback(r=>{q&&q(r),v("onMouseDown",r)},[q,v]),Yt=h.useCallback(r=>{G&&G(r),v("onClick",r)},[G,v]),It=h.useCallback(()=>{C&&p&&C(p)},[C,p]),Ue=h.useCallback((r,P)=>N&&!!N.find(ne=>y?y(r,ne):r.data.id===ne)||P===r,[N,y]),Xe=_t(f,g);return m.jsxs(Mt,{style:a,ref:Te,onMouseLeave:At,onTouchCancel:O,onMouseMove:Pt,$allowTouch:A,className:l,children:[m.jsx(Ct,{alt:c||"Annotation Image",src:i,draggable:!1,ref:te}),m.jsxs(St,{children:[T.map(r=>!r.data||typeof r.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render highlight:",r),null):be({key:r.data.id,annotation:r,active:Ue(r,Xe)})),!Q&&p&&p.geometry&&le&&le({annotation:p})]}),m.jsx(Nt,{"data-testid":"annotation-target",ref:ee,onClick:Yt,onMouseUp:Ot,onMouseDown:jt}),!Ee&&fe&&fe({type:k,annotation:p}),T.map(r=>!r.data||typeof r.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render content:",r),null):Ue(r,Xe)&&K&&K({key:r.data.id,annotation:r})),!xe&&p&&p.selection&&p.selection.showEditor&&ue&&M&&C&&ue({annotation:p,onChange:M,onSubmit:It}),m.jsx("div",{children:d})]})},ve=$e(Be("isMouseHovering"),qe("relativeMousePos"))(kt);process.env.NODE_ENV!=="production"&&(ve.displayName="ComposedAnnotation"),_.Annotation=ve,_.OvalSelector=ae,_.PointSelector=Z,_.RectangleSelector=J,_.default=ve,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
