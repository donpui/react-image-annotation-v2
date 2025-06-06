(function(P,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],h):(P=typeof globalThis<"u"?globalThis:P||self,h(P.ReactImageAnnotation={},P.React,P.styled))})(this,function(P,h,C){"use strict";var re={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function We(){if(we)return B;we=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,i,c){var a=null;if(c!==void 0&&(a=""+c),i.key!==void 0&&(a=""+i.key),"key"in i){c={};for(var l in i)l!=="key"&&(c[l]=i[l])}else c=i;return i=c.ref,{$$typeof:t,type:s,key:a,ref:i!==void 0?i:null,props:c}}return B.Fragment=e,B.jsx=n,B.jsxs=n,B}var $={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re;function Ve(){return Re||(Re=1,process.env.NODE_ENV!=="production"&&function(){function t(o){if(o==null)return null;if(typeof o=="function")return o.$$typeof===fe?null:o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case S:return"Fragment";case k:return"Profiler";case R:return"StrictMode";case xe:return"Suspense";case ue:return"SuspenseList";case Ee:return"Activity"}if(typeof o=="object")switch(typeof o.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),o.$$typeof){case y:return"Portal";case Q:return(o.displayName||"Context")+".Provider";case D:return(o._context.displayName||"Context")+".Consumer";case le:var d=o.render;return o=o.displayName,o||(o=d.displayName||d.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case be:return d=o.displayName||null,d!==null?d:t(o.type)||"Memo";case K:d=o._payload,o=o._init;try{return t(o(d))}catch{}}return null}function e(o){return""+o}function n(o){try{e(o);var d=!1}catch{d=!0}if(d){d=console;var g=d.error,T=typeof Symbol=="function"&&Symbol.toStringTag&&o[Symbol.toStringTag]||o.constructor.name||"Object";return g.call(d,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",T),e(o)}}function s(o){if(o===S)return"<>";if(typeof o=="object"&&o!==null&&o.$$typeof===K)return"<...>";try{var d=t(o);return d?"<"+d+">":"<...>"}catch{return"<...>"}}function i(){var o=A.A;return o===null?null:o.getOwner()}function c(){return Error("react-stack-top-frame")}function a(o){if(G.call(o,"key")){var d=Object.getOwnPropertyDescriptor(o,"key").get;if(d&&d.isReactWarning)return!1}return o.key!==void 0}function l(o,d){function g(){U||(U=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",d))}g.isReactWarning=!0,Object.defineProperty(o,"key",{get:g,configurable:!0})}function u(){var o=t(this.type);return x[o]||(x[o]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),o=this.props.ref,o!==void 0?o:null}function m(o,d,g,T,b,_,z,W){return g=_.ref,o={$$typeof:f,type:o,key:d,props:_,_owner:b},(g!==void 0?g:null)!==null?Object.defineProperty(o,"ref",{enumerable:!1,get:u}):Object.defineProperty(o,"ref",{enumerable:!1,value:null}),o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(o,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(o,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:z}),Object.defineProperty(o,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:W}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o}function E(o,d,g,T,b,_,z,W){var w=d.children;if(w!==void 0)if(T)if(q(w)){for(T=0;T<w.length;T++)M(w[T]);Object.freeze&&Object.freeze(w)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else M(w);if(G.call(d,"key")){w=t(o);var Y=Object.keys(d).filter(function(ye){return ye!=="key"});T=0<Y.length?"{key: someKey, "+Y.join(": ..., ")+": ...}":"{key: someKey}",ee[w+T]||(Y=0<Y.length?"{"+Y.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,T,w,Y,w),ee[w+T]=!0)}if(w=null,g!==void 0&&(n(g),w=""+g),a(d)&&(n(d.key),w=""+d.key),"key"in d){g={};for(var te in d)te!=="key"&&(g[te]=d[te])}else g=d;return w&&l(g,typeof o=="function"?o.displayName||o.name||"Unknown":o),m(o,w,_,b,i(),g,z,W)}function M(o){typeof o=="object"&&o!==null&&o.$$typeof===f&&o._store&&(o._store.validated=1)}var v=h,f=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),fe=Symbol.for("react.client.reference"),A=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=Object.prototype.hasOwnProperty,q=Array.isArray,H=console.createTask?console.createTask:function(){return null};v={"react-stack-bottom-frame":function(o){return o()}};var U,x={},X=v["react-stack-bottom-frame"].bind(v,c)(),F=H(s(c)),ee={};$.Fragment=S,$.jsx=function(o,d,g,T,b){var _=1e4>A.recentlyCreatedOwnerStacks++;return E(o,d,g,!1,T,b,_?Error("react-stack-top-frame"):X,_?H(s(o)):F)},$.jsxs=function(o,d,g,T,b){var _=1e4>A.recentlyCreatedOwnerStacks++;return E(o,d,g,!0,T,b,_?Error("react-stack-top-frame"):X,_?H(s(o)):F)}}()),$}var Me;function Be(){return Me||(Me=1,process.env.NODE_ENV==="production"?re.exports=We():re.exports=Ve()),re.exports}var p=Be();function $e(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...s)=>e(n(...s)))}const Je=({elem:t,e})=>{if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageY:n,pageX:s}=e,{left:i,right:c,bottom:a,top:l}=t.getBoundingClientRect();return s>i&&s<c&&n>l&&n<a},Ze=(t="isMouseHovering")=>e=>{const n=i=>{const[c,a]=h.useState(!1),l=h.useRef(null);h.useEffect(()=>{const m=E=>{const M=l.current,v={pageX:E.pageX,pageY:E.pageY};a(Je({elem:M,e:v}))};return document.addEventListener("mousemove",m),()=>{document.removeEventListener("mousemove",m)}},[]);const u={[t]:{innerRef:m=>l.current=m,isHoveringOver:c}};return h.createElement(e,{...i,...u})},s=e.displayName||e.name||"Component";return n.displayName=`IsMouseHovering(${s})`,n},Ce=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.x,s=t.clientY-e.y;return{x:n/e.width*100,y:s/e.height*100}},Se=(t,e,n)=>Math.max(t,Math.min(e,n)),Qe=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),s=e.pageX-n.left,i=e.pageY-(n.top+window.scrollY);return{x:Se(0,100,s/n.width*100),y:Se(0,100,i/n.height*100)}},I=t=>Ke(t)?qe(t)?(et(t)&&t.preventDefault(),Qe(t)):{x:null}:Ce(t),Ke=t=>t.targetTouches!==void 0,qe=t=>t.targetTouches.length===1,et=t=>t.type==="touchmove",tt=(t="relativeMousePos")=>e=>{class n extends h.PureComponent{constructor(c){super(c),this.container=null,this._innerRef=a=>{this.container=a},this._onMouseMove=a=>{const l=Ce(a);this.setState(l)},this._onTouchMove=a=>{if(!this.container||a.targetTouches.length!==1)return;const l=a.targetTouches[0],u=this.container.offsetParent;if(!u)return;const m=l.pageX-u.offsetLeft,E=l.pageY-u.offsetTop,M=this.container.width,v=this.container.height;typeof M=="number"&&typeof v=="number"&&M>0&&v>0?this.setState({x:m/M*100,y:E/v*100}):this.setState({x:null,y:null})},this._onMouseLeave=a=>{this.setState({x:null,y:null})},this._onTouchLeave=a=>{this.setState({x:null,y:null})},this.state={x:null,y:null}}render(){const c={innerRef:this._innerRef,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,onTouchMove:this._onTouchMove,onTouchLeave:this._onTouchLeave,x:this.state.x,y:this.state.y},a={[t]:c};return h.createElement(e,{...this.props,...a})}}const s=e.displayName||e.name||"Component";return n.displayName=`withRelativeMousePos(${s})`,n};var se={exports:{}},de={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke;function nt(){if(ke)return de;ke=1;var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return de.c=function(e){return t.H.useMemoCache(e)},de}var he={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function ot(){return Ne||(Ne=1,process.env.NODE_ENV!=="production"&&function(){var t=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;he.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),he}var _e;function rt(){return _e||(_e=1,process.env.NODE_ENV==="production"?se.exports=nt():se.exports=ot()),se.exports}var L=rt();const st=C.div`
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
`;function Pe(t){const e=L.c(3),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.y}%`,i=`${n.x}%`;let c;return e[0]!==s||e[1]!==i?(c=p.jsx(st,{style:{top:s,left:i}}),e[0]=s,e[1]=i,e[2]=c):c=e[2],c}const it=C.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,ct=C.div`
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
`,at=t=>{const e=L.c(11),{onChange:n,onSubmit:s,onFocus:i,onBlur:c,value:a}=t;let l;e[0]!==c||e[1]!==n||e[2]!==i||e[3]!==a?(l=p.jsx(it,{children:p.jsx("textarea",{placeholder:"Write description",onFocus:i,onBlur:c,onChange:n,value:a})}),e[0]=c,e[1]=n,e[2]=i,e[3]=a,e[4]=l):l=e[4];let u;e[5]!==s||e[6]!==a?(u=a&&p.jsx(ct,{onClick:s,children:"Submit"}),e[5]=s,e[6]=a,e[7]=u):u=e[7];let m;return e[8]!==l||e[9]!==u?(m=p.jsxs(h.Fragment,{children:[l,u]}),e[8]=l,e[9]=u,e[10]=m):m=e[10],m},lt=C.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,ut=C.div`
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
`,ft=t=>{var D;const e=L.c(17),{annotation:n,onChange:s,onSubmit:i,className:c,style:a}=t,l=c===void 0?"":c;let u;e[0]!==a?(u=a===void 0?{}:a,e[0]=a,e[1]=u):u=e[1];const m=u,{geometry:E}=n;if(!E)return null;const M=`${E.x}%`,v=`${E.y+E.height}%`;let f;e[2]!==m||e[3]!==M||e[4]!==v?(f={position:"absolute",left:M,top:v,...m},e[2]=m,e[3]=M,e[4]=v,e[5]=f):f=e[5];let y;e[6]!==n||e[7]!==s?(y=Q=>s({...n,data:{...n.data,text:Q.target.value}}),e[6]=n,e[7]=s,e[8]=y):y=e[8];const S=(D=n.data)==null?void 0:D.text;let R;e[9]!==i||e[10]!==y||e[11]!==S?(R=p.jsx(at,{onChange:y,onSubmit:i,value:S}),e[9]=i,e[10]=y,e[11]=S,e[12]=R):R=e[12];let k;return e[13]!==l||e[14]!==f||e[15]!==R?(k=p.jsx(ut,{className:l,style:f,children:R}),e[13]=l,e[14]=f,e[15]=R,e[16]=k):k=e[16],k},ie=C.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,dt=C.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Ae(t){const e=L.c(21),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.y}%`;let i;e[0]!==s?(i=p.jsx(ie,{style:{height:s,width:"100%"}}),e[0]=s,e[1]=i):i=e[1];const c=`${n.y}%`,a=`${n.height}%`,l=`${n.x}%`;let u;e[2]!==c||e[3]!==a||e[4]!==l?(u=p.jsx(ie,{style:{top:c,height:a,width:l}}),e[2]=c,e[3]=a,e[4]=l,e[5]=u):u=e[5];const m=`${n.y}%`,E=`${n.x+n.width}%`,M=`${n.height}%`,v=`${100-(n.x+n.width)}%`;let f;e[6]!==m||e[7]!==E||e[8]!==M||e[9]!==v?(f=p.jsx(ie,{style:{top:m,left:E,height:M,width:v}}),e[6]=m,e[7]=E,e[8]=M,e[9]=v,e[10]=f):f=e[10];const y=`${n.y+n.height}%`,S=`${100-(n.y+n.height)}%`;let R;e[11]!==y||e[12]!==S?(R=p.jsx(ie,{style:{top:y,height:S,width:"100%"}}),e[11]=y,e[12]=S,e[13]=R):R=e[13];let k;return e[14]!==t.className||e[15]!==t.style||e[16]!==i||e[17]!==f||e[18]!==R||e[19]!==u?(k=p.jsxs(dt,{className:t.className,style:t.style,children:[i,u,f,R]}),e[14]=t.className,e[15]=t.style,e[16]=i,e[17]=f,e[18]=R,e[19]=u,e[20]=k):k=e[20],k}Ae.defaultProps={className:"",style:{}};const ht=C.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function je(t){const e=L.c(10),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.x}%`,i=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,l=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==s||e[2]!==i||e[3]!==c||e[4]!==a||e[5]!==l?(u={position:"absolute",left:s,top:i,height:c,width:a,boxShadow:l,...t.style},e[0]=t.style,e[1]=s,e[2]=i,e[3]=c,e[4]=a,e[5]=l,e[6]=u):u=e[6];let m;return e[7]!==t.className||e[8]!==u?(m=p.jsx(ht,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=m):m=e[9],m}je.defaultProps={className:"",style:{}};const mt=C.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function me(t){const e=L.c(10),{geometry:n}=t.annotation;if(!n)return null;const s=`${n.x}%`,i=`${n.y}%`,c=`${n.height}%`,a=`${n.width}%`,l=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==s||e[2]!==i||e[3]!==c||e[4]!==a||e[5]!==l?(u={position:"absolute",left:s,top:i,height:c,width:a,boxShadow:l,...t.style},e[0]=t.style,e[1]=s,e[2]=i,e[3]=c,e[4]=a,e[5]=l,e[6]=u):u=e[6];let m;return e[7]!==t.className||e[8]!==u?(m=p.jsx(mt,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=m):m=e[9],m}me.defaultProps={className:"",style:{}};const pt=C.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Oe(t){const e=L.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const s=`${n.x}%`,i=`${n.y+n.height}%`;let c;e[0]!==t.style||e[1]!==s||e[2]!==i?(c={position:"absolute",left:s,top:i,...t.style},e[0]=t.style,e[1]=s,e[2]=i,e[3]=c):c=e[3];const a=t.annotation.data&&t.annotation.data.text;let l;return e[4]!==t.className||e[5]!==c||e[6]!==a?(l=p.jsx(pt,{style:c,className:t.className,children:a}),e[4]=t.className,e[5]=c,e[6]=a,e[7]=l):l=e[7],l}Oe.defaultProps={style:{},className:""};const pe=C.div`
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
`,Ye="RECTANGLE";function gt({x:t,y:e},n){if(!n)return!1;const s=Math.min(n.x,n.x+n.width),i=Math.max(n.x,n.x+n.width),c=Math.min(n.y,n.y+n.height),a=Math.max(n.y,n.y+n.height);return!(t<s||e<c||t>i||e>a)}function vt(t){if(!t||t.width<=0||t.height<=0)return 0;const e=Math.abs(t.width),n=Math.abs(t.height);return e*n}const xt={onTouchStart(t,e){return Ie(t,e)},onTouchEnd(t,e){return Le(t)},onTouchMove(t,e){return De(t,e)},onMouseDown(t,e){return Ie(t,e)},onMouseUp(t,e){return Le(t)},onMouseMove(t,e){return De(t,e)}};function Ie(t,e){if(t.selection)return{};{const{x:n,y:s}=I(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:s}}}}function Le(t,e){if(t.selection){const{selection:n,geometry:s}=t;if(!s)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function De(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:s}=t.selection,{x:i,y:c}=I(e),a=i-n,l=c-s;return{...t,geometry:{...t.geometry,type:Ye,x:a>0?n:i,y:l>0?s:c,width:Math.abs(a),height:Math.abs(l)}}}return t}const J={TYPE:Ye,intersects:gt,area:vt,methods:xt},He="POINT";function bt({x:t,y:e},n,s){if(!n)return!1;const i=Math.abs(t-n.x),c=Math.abs(e-n.y);return i===0&&c===0}function Et(t,e){return 0}const Z={TYPE:He,intersects:bt,area:Et,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...I(e),width:0,height:0,type:He}}}}},ce=t=>Math.pow(t,2),ge="OVAL";function yt({x:t,y:e},n){if(!n||!n.width||!n.height)return!1;const s=Math.abs(n.width),i=Math.abs(n.height),c={x:n.x+s/2,y:n.y+i/2},a=s/2,l=i/2;if(a===0||l===0)return!1;const u=t-c.x,m=e-c.y;return ce(u)/ce(a)+ce(m)/ce(l)<=1}function Tt(t){return!t||!t.width||!t.height||t.width<=0||t.height<=0?0:Math.PI*Math.abs(t.width)*Math.abs(t.height)/4}const wt={onTouchStart(t,e){return Rt(t,e)},onTouchEnd(t,e){return Mt(t)},onTouchMove(t,e){return Ct(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:s}=I(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:s}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:s}=t.selection,{x:i,y:c}=I(e);return{...t,geometry:{...t.geometry,type:ge,x:Math.min(n,i),y:Math.min(s,c),width:Math.abs(i-n),height:Math.abs(c-s)}}}return t}};function Rt(t,e){if(t.selection)return{};{const{x:n,y:s}=I(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:s}}}}function Mt(t,e){if(t.selection){const{selection:n,geometry:s}=t;if(!s)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Ct(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:s}=t.selection,{x:i,y:c}=I(e),a=i-n,l=c-s;return{...t,geometry:{...t.geometry,type:ge,x:a>0?n:i,y:l>0?s:c,width:Math.abs(a),height:Math.abs(l)}}}return t}const ae={TYPE:ge,intersects:yt,area:Tt,methods:wt},Ue={innerRef:()=>{},onChange:()=>{},onSubmit:()=>{},type:J.TYPE,selectors:[J,Z,ae],disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,activeAnnotationComparator:(t,e)=>t===e,renderSelector:({annotation:t})=>{switch(t.geometry.type){case J.TYPE:return p.jsx(Ae,{annotation:t});case Z.TYPE:return p.jsx(Pe,{annotation:t});case ae.TYPE:return p.jsx(me,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>p.jsx(ft,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case J.TYPE:return p.jsx(je,{annotation:e,active:n},t);case Z.TYPE:return p.jsx(Pe,{annotation:e,active:n},t);case ae.TYPE:return p.jsx(me,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>p.jsx(Oe,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case Z.TYPE:return p.jsx(pe,{children:"Click to Annotate"});default:return p.jsx(pe,{children:"Click and Drag to Annotate"})}}},St=C.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${pe} {
    opacity: 1;
  }
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,kt=C.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`,Nt=C.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`,_t=C.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`,Pt=t=>{var Fe;const{selectors:e,...n}=t,s={...Ue,...n,selectors:e!==void 0?e:Ue.selectors},{src:i,alt:c,style:a,className:l,containerRef:u,children:m,annotations:E,type:M,selectors:v,value:f,onChange:y,onSubmit:S,activeAnnotationComparator:R,activeAnnotations:k,disableAnnotation:D,disableSelector:Q,renderSelector:le,disableEditor:xe,renderEditor:ue,renderHighlight:be,renderContent:K,disableOverlay:Ee,renderOverlay:fe,allowTouch:A,onImageMouseUp:G,onImageMouseDown:q,onImageMouseMove:H,onImageClick:U,relativeMousePos:x,isMouseHovering:X}=s,F=h.useRef(null),ee=h.useRef(null),{x:o,y:d}=x,g=h.useCallback(r=>{if(r)return v.find(N=>N.TYPE===r)},[v]),T=M||v&&v[0]&&v[0].TYPE,b=h.useCallback((r,N)=>{if(D)return;const j=g(T);if(j&&j.methods[r]){const ne=j.methods[r],O=ne(f||{},N);typeof O>"u"?process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(r)} of type ${T} returned undefined.
             Make sure to explicitly return the previous state or new state.`):y&&y(O)}},[D,g,T,f,y]),_=h.useCallback(r=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&A&&r.preventDefault(),b("onTouchStart",r)},[A,b]),z=h.useCallback(r=>{b("onTouchEnd",r)},[b]),W=h.useCallback(r=>{x&&typeof x.onTouchMove=="function"&&x.onTouchMove(r),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&A&&r.preventDefault(),b("onTouchMove",r)},[x,A,b]),w=h.useCallback(r=>{x&&typeof x.onTouchLeave=="function"&&x.onTouchLeave(r)},[x]);h.useEffect(()=>{const r=ee.current;if(A&&r)return r.ontouchstart=_,r.ontouchend=z,r.ontouchmove=W,r.ontouchcancel=w,()=>{r&&(r.ontouchstart=null,r.ontouchend=null,r.ontouchmove=null,r.ontouchcancel=null)};r&&(r.ontouchstart=null,r.ontouchend=null,r.ontouchmove=null,r.ontouchcancel=null)},[A,_,z,W,w]);const Y=h.useCallback(r=>{F.current=r,x&&typeof x.innerRef=="function"&&x.innerRef(r)},[x]),te=h.useCallback(r=>{X&&typeof X.innerRef=="function"&&X.innerRef(r),u&&(typeof u=="function"?u(r):u.current=r)},[X,u]),ye=h.useCallback((r,N)=>{const j=F.current;return!j||r===null||N===null?void 0:E.map(O=>{const{geometry:V}=O;if(!V)return!1;const oe=g(V.type);return oe&&oe.intersects({x:r,y:N},V,j)?O:!1}).filter(O=>!!O).sort((O,V)=>{const oe=g(O.geometry.type),ze=g(V.geometry.type);return!oe||!ze||!j?0:oe.area(O.geometry,j)-ze.area(V.geometry,j)})[0]},[E,g,F]),At=h.useCallback(r=>{x&&typeof x.onMouseMove=="function"&&x.onMouseMove(r);const N=r;H&&H(N),b("onMouseMove",N)},[x,H,b]),jt=h.useCallback(r=>{x&&typeof x.onMouseLeave=="function"&&x.onMouseLeave(r)},[x]),Ot=h.useCallback(r=>{G&&G(r),b("onMouseUp",r)},[G,b]),Yt=h.useCallback(r=>{q&&q(r),b("onMouseDown",r)},[q,b]),It=h.useCallback(r=>{console.log("onClickHandler",r,"onImageClick",U),U&&U(r),b("onClick",r)},[U,b]),Lt=h.useCallback(()=>{S&&f&&S(f)},[S,f]),Te=h.useCallback(r=>{var N;r.key==="Escape"&&y&&((N=f==null?void 0:f.selection)!=null&&N.showEditor||f!=null&&f.geometry)&&y({selection:void 0,geometry:void 0,data:void 0})},[f,y]);h.useEffect(()=>{var r;if((r=f==null?void 0:f.selection)!=null&&r.showEditor)return window.addEventListener("keydown",Te),()=>window.removeEventListener("keydown",Te)},[(Fe=f==null?void 0:f.selection)==null?void 0:Fe.showEditor,Te]);const Xe=h.useCallback((r,N)=>k&&!!k.find(ne=>R?R(r,ne):r.data.id===ne)||N===r,[k,R]),Ge=ye(o,d);return p.jsxs(St,{style:a,ref:te,onMouseLeave:jt,onTouchCancel:w,onMouseMove:At,$allowTouch:A,className:l,children:[p.jsx(kt,{alt:c||"Annotation Image",src:i,draggable:!1,ref:Y}),p.jsxs(Nt,{children:[E.map(r=>!r.data||typeof r.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render highlight:",r),null):be({key:r.data.id,annotation:r,active:Xe(r,Ge)})),!Q&&f&&f.geometry&&le&&le({annotation:f})]}),p.jsx(_t,{"data-testid":"annotation-target",ref:ee,onClick:It,onMouseUp:Ot,onMouseDown:Yt}),!Ee&&fe&&fe({type:T,annotation:f}),E.map(r=>!r.data||typeof r.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render content:",r),null):Xe(r,Ge)&&K&&K({key:r.data.id,annotation:r})),!xe&&f&&f.selection&&f.selection.showEditor&&ue&&y&&ue({annotation:f,onChange:y,onSubmit:Lt}),p.jsx("div",{children:m})]})},ve=$e(Ze("isMouseHovering"),tt("relativeMousePos"))(Pt);process.env.NODE_ENV!=="production"&&(ve.displayName="ComposedAnnotation"),P.Annotation=ve,P.OvalSelector=ae,P.PointSelector=Z,P.RectangleSelector=J,P.default=ve,Object.defineProperties(P,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
