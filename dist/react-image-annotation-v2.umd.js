(function(_,p){typeof exports=="object"&&typeof module<"u"?p(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],p):(_=typeof globalThis<"u"?globalThis:_||self,p(_.ReactImageAnnotation={},_.React,_.styled))})(this,function(_,p,A){"use strict";var me={exports:{}},fe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae;function ot(){if(Ae)return fe;Ae=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,i){var l=null;if(i!==void 0&&(l=""+i),o.key!==void 0&&(l=""+o.key),"key"in o){i={};for(var c in o)c!=="key"&&(i[c]=o[c])}else i=o;return o=i.ref,{$$typeof:t,type:r,key:l,ref:o!==void 0?o:null,props:i}}return fe.Fragment=e,fe.jsx=n,fe.jsxs=n,fe}var he={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function rt(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){function t(s){if(s==null)return null;if(typeof s=="function")return s.$$typeof===M?null:s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case R:return"Fragment";case w:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case U:return"SuspenseList";case k:return"Activity"}if(typeof s=="object")switch(typeof s.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),s.$$typeof){case y:return"Portal";case C:return(s.displayName||"Context")+".Provider";case S:return(s._context.displayName||"Context")+".Consumer";case H:var d=s.render;return s=s.displayName,s||(s=d.displayName||d.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case L:return d=s.displayName||null,d!==null?d:t(s.type)||"Memo";case I:d=s._payload,s=s._init;try{return t(s(d))}catch{}}return null}function e(s){return""+s}function n(s){try{e(s);var d=!1}catch{d=!0}if(d){d=console;var T=d.error,P=typeof Symbol=="function"&&Symbol.toStringTag&&s[Symbol.toStringTag]||s.constructor.name||"Object";return T.call(d,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",P),e(s)}}function r(s){if(s===R)return"<>";if(typeof s=="object"&&s!==null&&s.$$typeof===I)return"<...>";try{var d=t(s);return d?"<"+d+">":"<...>"}catch{return"<...>"}}function o(){var s=D.A;return s===null?null:s.getOwner()}function i(){return Error("react-stack-top-frame")}function l(s){if(F.call(s,"key")){var d=Object.getOwnPropertyDescriptor(s,"key").get;if(d&&d.isReactWarning)return!1}return s.key!==void 0}function c(s,d){function T(){K||(K=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",d))}T.isReactWarning=!0,Object.defineProperty(s,"key",{get:T,configurable:!0})}function u(){var s=t(this.type);return W[s]||(W[s]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),s=this.props.ref,s!==void 0?s:null}function f(s,d,T,P,z,X,$,oe){return T=X.ref,s={$$typeof:h,type:s,key:d,props:X,_owner:z},(T!==void 0?T:null)!==null?Object.defineProperty(s,"ref",{enumerable:!1,get:u}):Object.defineProperty(s,"ref",{enumerable:!1,value:null}),s._store={},Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(s,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(s,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:$}),Object.defineProperty(s,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:oe}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s}function m(s,d,T,P,z,X,$,oe){var E=d.children;if(E!==void 0)if(P)if(Z(E)){for(P=0;P<E.length;P++)v(E[P]);Object.freeze&&Object.freeze(E)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else v(E);if(F.call(d,"key")){E=t(s);var j=Object.keys(d).filter(function(ae){return ae!=="key"});P=0<j.length?"{key: someKey, "+j.join(": ..., ")+": ...}":"{key: someKey}",ie[E+P]||(j=0<j.length?"{"+j.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,P,E,j,E),ie[E+P]=!0)}if(E=null,T!==void 0&&(n(T),E=""+T),l(d)&&(n(d.key),E=""+d.key),"key"in d){T={};for(var te in d)te!=="key"&&(T[te]=d[te])}else T=d;return E&&c(T,typeof s=="function"?s.displayName||s.name||"Unknown":s),f(s,E,X,z,o(),T,$,oe)}function v(s){typeof s=="object"&&s!==null&&s.$$typeof===h&&s._store&&(s._store.validated=1)}var x=p,h=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),C=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),M=Symbol.for("react.client.reference"),D=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Object.prototype.hasOwnProperty,Z=Array.isArray,B=console.createTask?console.createTask:function(){return null};x={"react-stack-bottom-frame":function(s){return s()}};var K,W={},ee=x["react-stack-bottom-frame"].bind(x,i)(),ne=B(r(i)),ie={};he.Fragment=R,he.jsx=function(s,d,T,P,z){var X=1e4>D.recentlyCreatedOwnerStacks++;return m(s,d,T,!1,P,z,X?Error("react-stack-top-frame"):ee,X?B(r(s)):ne)},he.jsxs=function(s,d,T,P,z){var X=1e4>D.recentlyCreatedOwnerStacks++;return m(s,d,T,!0,P,z,X?Error("react-stack-top-frame"):ee,X?B(r(s)):ne)}}()),he}var Ie;function st(){return Ie||(Ie=1,process.env.NODE_ENV==="production"?me.exports=ot():me.exports=rt()),me.exports}var g=st();function it(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}const at=({elem:t,e})=>{if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageY:n,pageX:r}=e,{left:o,right:i,bottom:l,top:c}=t.getBoundingClientRect();return r>o&&r<i&&n>c&&n<l},ct=(t="isMouseHovering")=>e=>{const n=o=>{const[i,l]=p.useState(!1),c=p.useRef(null);p.useEffect(()=>{const f=m=>{const v=c.current,x={pageX:m.pageX,pageY:m.pageY};l(at({elem:v,e:x}))};return document.addEventListener("mousemove",f),()=>{document.removeEventListener("mousemove",f)}},[]);const u={[t]:{innerRef:f=>c.current=f,isHoveringOver:i}};return p.createElement(e,{...o,...u})},r=e.displayName||e.name||"Component";return n.displayName=`IsMouseHovering(${r})`,n},Ye=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.x,r=t.clientY-e.y;return{x:n/e.width*100,y:r/e.height*100}},_e=(t,e,n)=>Math.max(t,Math.min(e,n)),lt=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),r=e.pageX-n.left,o=e.pageY-(n.top+window.scrollY);return{x:_e(0,100,r/n.width*100),y:_e(0,100,o/n.height*100)}},re=t=>ut(t)?dt(t)?(ft(t)&&t.preventDefault(),lt(t)):{x:null}:Ye(t),ut=t=>t.targetTouches!==void 0,dt=t=>t.targetTouches.length===1,ft=t=>t.type==="touchmove",ht=(t="relativeMousePos")=>e=>{class n extends p.PureComponent{constructor(i){super(i),this.container=null,this._innerRef=l=>{this.container=l},this._onMouseMove=l=>{const c=Ye(l);this.setState(c)},this._onTouchMove=l=>{if(!this.container||l.targetTouches.length!==1)return;const c=l.targetTouches[0],u=this.container.offsetParent;if(!u)return;const f=c.pageX-u.offsetLeft,m=c.pageY-u.offsetTop,v=this.container.width,x=this.container.height;typeof v=="number"&&typeof x=="number"&&v>0&&x>0?this.setState({x:f/v*100,y:m/x*100}):this.setState({x:null,y:null})},this._onMouseLeave=l=>{this.setState({x:null,y:null})},this._onTouchLeave=l=>{this.setState({x:null,y:null})},this.state={x:null,y:null}}render(){const i={innerRef:this._innerRef,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,onTouchMove:this._onTouchMove,onTouchLeave:this._onTouchLeave,x:this.state.x,y:this.state.y},l={[t]:i};return p.createElement(e,{...this.props,...l})}}const r=e.displayName||e.name||"Component";return n.displayName=`withRelativeMousePos(${r})`,n},pt=(t,e)=>{const[n,r]=p.useState(!1),[o,i]=p.useState(null),[l,c]=p.useState(null),u=p.useRef(null),f=p.useRef(t);f.current=t;const m=p.useCallback((b,w)=>{const S=f.current.map(C=>C.data.id===b?{...C,isDragging:w}:C);f.current=S,e(S),r(w),i(w?b:null)},[e]),v=p.useCallback((b,w)=>{m(b,!0);const S=f.current.find(C=>C.data.id===b);S&&(u.current={...S.geometry,initialCursorPosition:w})},[m]),x=p.useCallback((b,w,S)=>{if(!o||!u.current)return;const C=b.clientX-S.x,H=b.clientY-S.y,O=document.querySelector(".annotation-container");if(!O)return;const U=O.getBoundingClientRect(),L=U.width,I=U.height,k=100,M={...u.current};switch(w){case"top":M.height=Math.min(u.current.height-H/I*k,u.current.y+u.current.height),M.y=Math.max(u.current.y+H/I*k,0);break;case"right":M.width=Math.min(u.current.width+C/L*k,k-u.current.x);break;case"bottom":M.height=Math.min(u.current.height+H/I*k,k-u.current.y);break;case"left":M.width=Math.min(u.current.width-C/L*k,u.current.x+u.current.width),M.x=Math.max(u.current.x+C/L*k,0);break}M.width=Math.max(M.width,0),M.height=Math.max(M.height,0),M.x=Math.min(M.x,k-M.width),M.y=Math.min(M.y,k-M.height);const D=f.current.map(F=>F.data.id===o?{...F,geometry:M}:F);f.current=D,e(D)},[o,e]),h=p.useCallback((b,w)=>{m(b,!0);const S=f.current.find(C=>C.data.id===b);S&&(u.current={...S.geometry,initialCursorPosition:w})},[m]),y=p.useCallback((b,w)=>{if(!o||!u.current)return;const S=b.clientX-w.x,C=b.clientY-w.y,H=document.querySelector(".annotation-container");if(!H)return;const O=H.getBoundingClientRect(),U=O.width,L=O.height,I=100,k={...u.current};k.x=Math.max(Math.min(u.current.x+S/U*I,I-u.current.width),0),k.y=Math.max(Math.min(u.current.y+C/L*I,I-u.current.height),0);const M=f.current.map(D=>D.data.id===o?{...D,geometry:k}:D);f.current=M,e(M)},[o,e]),R=p.useCallback(()=>{o&&(r(!1),i(null)),u.current=null},[o]);return{isDragging:n,draggingId:o,activeAnnotationId:l,setActiveAnnotationId:c,setDraggingId:i,handleDotDragStart:v,handleDotDrag:x,handleMoveStart:h,handleMove:y,handleMouseUp:R}};var xe={exports:{}},Me={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function gt(){if(Oe)return Me;Oe=1;var t=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Me.c=function(e){return t.H.useMemoCache(e)},Me}var Re={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le;function mt(){return Le||(Le=1,process.env.NODE_ENV!=="production"&&function(){var t=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;Re.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),Re}var He;function xt(){return He||(He=1,process.env.NODE_ENV==="production"?xe.exports=gt():xe.exports=mt()),xe.exports}var Q=xt();const vt=A.div`
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
`;function Ce(t){const e=Q.c(3),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`,o=`${n.x}%`;let i;return e[0]!==r||e[1]!==o?(i=g.jsx(vt,{style:{top:r,left:o}}),e[0]=r,e[1]=o,e[2]=i):i=e[2],i}const bt=A.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,yt=A.div`
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
`,Et=t=>{const e=Q.c(11),{onChange:n,onSubmit:r,onFocus:o,onBlur:i,value:l}=t;let c;e[0]!==i||e[1]!==n||e[2]!==o||e[3]!==l?(c=g.jsx(bt,{children:g.jsx("textarea",{placeholder:"Write description",onFocus:o,onBlur:i,onChange:n,value:l})}),e[0]=i,e[1]=n,e[2]=o,e[3]=l,e[4]=c):c=e[4];let u;e[5]!==r||e[6]!==l?(u=l&&g.jsx(yt,{onClick:r,children:"Submit"}),e[5]=r,e[6]=l,e[7]=u):u=e[7];let f;return e[8]!==c||e[9]!==u?(f=g.jsxs(p.Fragment,{children:[c,u]}),e[8]=c,e[9]=u,e[10]=f):f=e[10],f},wt=A.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Tt=A.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${wt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,Mt=t=>{var S;const e=Q.c(17),{annotation:n,onChange:r,onSubmit:o,className:i,style:l}=t,c=i===void 0?"":i;let u;e[0]!==l?(u=l===void 0?{}:l,e[0]=l,e[1]=u):u=e[1];const f=u,{geometry:m}=n;if(!m)return null;const v=`${m.x}%`,x=`${m.y+m.height}%`;let h;e[2]!==f||e[3]!==v||e[4]!==x?(h={position:"absolute",left:v,top:x,...f},e[2]=f,e[3]=v,e[4]=x,e[5]=h):h=e[5];let y;e[6]!==n||e[7]!==r?(y=C=>r({...n,data:{...n.data,text:C.target.value}}),e[6]=n,e[7]=r,e[8]=y):y=e[8];const R=(S=n.data)==null?void 0:S.text;let b;e[9]!==o||e[10]!==y||e[11]!==R?(b=g.jsx(Et,{onChange:y,onSubmit:o,value:R}),e[9]=o,e[10]=y,e[11]=R,e[12]=b):b=e[12];let w;return e[13]!==c||e[14]!==h||e[15]!==b?(w=g.jsx(Tt,{className:c,style:h,children:b}),e[13]=c,e[14]=h,e[15]=b,e[16]=w):w=e[16],w},ve=A.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,Rt=A.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Xe(t){const e=Q.c(21),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`;let o;e[0]!==r?(o=g.jsx(ve,{style:{height:r,width:"100%"}}),e[0]=r,e[1]=o):o=e[1];const i=`${n.y}%`,l=`${n.height}%`,c=`${n.x}%`;let u;e[2]!==i||e[3]!==l||e[4]!==c?(u=g.jsx(ve,{style:{top:i,height:l,width:c}}),e[2]=i,e[3]=l,e[4]=c,e[5]=u):u=e[5];const f=`${n.y}%`,m=`${n.x+n.width}%`,v=`${n.height}%`,x=`${100-(n.x+n.width)}%`;let h;e[6]!==f||e[7]!==m||e[8]!==v||e[9]!==x?(h=g.jsx(ve,{style:{top:f,left:m,height:v,width:x}}),e[6]=f,e[7]=m,e[8]=v,e[9]=x,e[10]=h):h=e[10];const y=`${n.y+n.height}%`,R=`${100-(n.y+n.height)}%`;let b;e[11]!==y||e[12]!==R?(b=g.jsx(ve,{style:{top:y,height:R,width:"100%"}}),e[11]=y,e[12]=R,e[13]=b):b=e[13];let w;return e[14]!==t.className||e[15]!==t.style||e[16]!==o||e[17]!==h||e[18]!==b||e[19]!==u?(w=g.jsxs(Rt,{className:t.className,style:t.style,children:[o,u,h,b]}),e[14]=t.className,e[15]=t.style,e[16]=o,e[17]=h,e[18]=b,e[19]=u,e[20]=w):w=e[20],w}Xe.defaultProps={className:"",style:{}};const Ct=A.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function be(t){const e=Q.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,o=`${n.y}%`,i=`${n.height}%`,l=`${n.width}%`,c=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==r||e[2]!==o||e[3]!==i||e[4]!==l||e[5]!==c?(u={position:"absolute",left:r,top:o,height:i,width:l,boxShadow:c,...t.style},e[0]=t.style,e[1]=r,e[2]=o,e[3]=i,e[4]=l,e[5]=c,e[6]=u):u=e[6];let f;return e[7]!==t.className||e[8]!==u?(f=g.jsx(Ct,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=f):f=e[9],f}be.defaultProps={className:"",style:{}};const St=A.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function ye(t){const e=Q.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,o=`${n.y}%`,i=`${n.height}%`,l=`${n.width}%`,c=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==r||e[2]!==o||e[3]!==i||e[4]!==l||e[5]!==c?(u={position:"absolute",left:r,top:o,height:i,width:l,boxShadow:c,...t.style},e[0]=t.style,e[1]=r,e[2]=o,e[3]=i,e[4]=l,e[5]=c,e[6]=u):u=e[6];let f;return e[7]!==t.className||e[8]!==u?(f=g.jsx(St,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=f):f=e[9],f}ye.defaultProps={className:"",style:{}};const kt=A.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Fe(t){const e=Q.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const r=`${n.x}%`,o=`${n.y+n.height}%`;let i;e[0]!==t.style||e[1]!==r||e[2]!==o?(i={position:"absolute",left:r,top:o,...t.style},e[0]=t.style,e[1]=r,e[2]=o,e[3]=i):i=e[3];const l=t.annotation.data&&t.annotation.data.text;let c;return e[4]!==t.className||e[5]!==i||e[6]!==l?(c=g.jsx(kt,{style:i,className:t.className,children:l}),e[4]=t.className,e[5]=i,e[6]=l,e[7]=c):c=e[7],c}Fe.defaultProps={style:{},className:""};const Se=A.div`
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
`,Dt=A.div`
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
`,Pt=A.div`
  &::before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
    color: #666;
    line-height: 1;
  }
`,Be=t=>{const e=Q.c(6),{annotationId:n,onRemove:r}=t;let o;e[0]!==n||e[1]!==r?(o=u=>{u.stopPropagation(),r(n)},e[0]=n,e[1]=r,e[2]=o):o=e[2];const i=o;let l;e[3]===Symbol.for("react.memo_cache_sentinel")?(l=g.jsx(Pt,{}),e[3]=l):l=e[3];let c;return e[4]!==i?(c=g.jsx(Dt,{onClick:i,children:l}),e[4]=i,e[5]=c):c=e[5],c},Nt=A.div`
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
`,At=A.div`
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
`,pe=t=>{const e=Q.c(9),{position:n,onDragStart:r,onDrag:o,onDragEnd:i,annotationId:l}=t;let c;e[0]!==l||e[1]!==o||e[2]!==i||e[3]!==r||e[4]!==n?(c=v=>{v.preventDefault(),v.stopPropagation();const x={x:v.clientX,y:v.clientY};r(l,x);const h=R=>{R.preventDefault(),R.stopPropagation(),o(R,n,x)},y=R=>{R.preventDefault(),R.stopPropagation(),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",y),i==null||i()};document.addEventListener("mousemove",h),document.addEventListener("mouseup",y)},e[0]=l,e[1]=o,e[2]=i,e[3]=r,e[4]=n,e[5]=c):c=e[5];const u=c,f=jt;let m;return e[6]!==u||e[7]!==n?(m=g.jsx(Nt,{position:n,onMouseDown:u,onClick:f,"data-type":"dot"}),e[6]=u,e[7]=n,e[8]=m):m=e[8],m},ze=t=>{const e=Q.c(7),{onMoveStart:n,onMove:r,onMoveEnd:o,annotationId:i}=t;let l;e[0]!==i||e[1]!==r||e[2]!==o||e[3]!==n?(l=m=>{m.preventDefault(),m.stopPropagation();const v={x:m.clientX,y:m.clientY};n(i,v);const x=y=>{y.preventDefault(),y.stopPropagation(),r(y,v)},h=y=>{y.preventDefault(),y.stopPropagation(),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",h),o==null||o()};document.addEventListener("mousemove",x),document.addEventListener("mouseup",h)},e[0]=i,e[1]=r,e[2]=o,e[3]=n,e[4]=l):l=e[4];const c=l,u=It;let f;return e[5]!==c?(f=g.jsx(At,{onMouseDown:c,onClick:u,"data-type":"move-button",children:"↕"}),e[5]=c,e[6]=f):f=e[6],f};function jt(t){t.preventDefault(),t.stopPropagation()}function It(t){t.preventDefault(),t.stopPropagation()}const Yt=A.div`
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
`,Ge=t=>{var W,ee,ne,ie,s,d,T,P,z,X;const e=Q.c(48),{annotation:n,onDotDragStart:r,onDotDrag:o,onMoveStart:i,onMove:l,onDragEnd:c,isDragging:u,allowDelete:f,onRemoveAnnotation:m}=t,{geometry:v}=n;if(!v||!v.type||typeof v.x!="number"||typeof v.y!="number")return null;let x;e[0]!==((W=n.data)==null?void 0:W.id)||e[1]!==l||e[2]!==i?(x=$=>{var ce;const oe=$.target;if(oe.closest('[data-type="dot"]')||oe.closest('[data-type="move-button"]'))return;$.preventDefault(),$.stopPropagation();const E={x:$.clientX,y:$.clientY},j=(ce=n.data)==null?void 0:ce.id;j&&i(j,E);const te=V=>{V.preventDefault(),V.stopPropagation(),l(V,E)},ae=V=>{V.preventDefault(),V.stopPropagation(),document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",ae)};document.addEventListener("mousemove",te),document.addEventListener("mouseup",ae)},e[0]=(ee=n.data)==null?void 0:ee.id,e[1]=l,e[2]=i,e[3]=x):x=e[3];const h=x,y=_t,R=`${v.x}%`,b=`${v.y}%`,w=`${v.width}%`,S=`${v.height}%`;let C;e[4]!==R||e[5]!==b||e[6]!==w||e[7]!==S?(C={left:R,top:b,width:w,height:S},e[4]=R,e[5]=b,e[6]=w,e[7]=S,e[8]=C):C=e[8];const H=(ne=n.data)==null?void 0:ne.id;let O;e[9]!==o||e[10]!==r||e[11]!==c||e[12]!==H?(O=g.jsx(pe,{position:"top",onDragStart:r,onDrag:o,onDragEnd:c,annotationId:H}),e[9]=o,e[10]=r,e[11]=c,e[12]=H,e[13]=O):O=e[13];const U=(ie=n.data)==null?void 0:ie.id;let L;e[14]!==o||e[15]!==r||e[16]!==c||e[17]!==U?(L=g.jsx(pe,{position:"right",onDragStart:r,onDrag:o,onDragEnd:c,annotationId:U}),e[14]=o,e[15]=r,e[16]=c,e[17]=U,e[18]=L):L=e[18];const I=(s=n.data)==null?void 0:s.id;let k;e[19]!==o||e[20]!==r||e[21]!==c||e[22]!==I?(k=g.jsx(pe,{position:"bottom",onDragStart:r,onDrag:o,onDragEnd:c,annotationId:I}),e[19]=o,e[20]=r,e[21]=c,e[22]=I,e[23]=k):k=e[23];const M=(d=n.data)==null?void 0:d.id;let D;e[24]!==o||e[25]!==r||e[26]!==c||e[27]!==M?(D=g.jsx(pe,{position:"left",onDragStart:r,onDrag:o,onDragEnd:c,annotationId:M}),e[24]=o,e[25]=r,e[26]=c,e[27]=M,e[28]=D):D=e[28];const F=(T=n.data)==null?void 0:T.id;let Z;e[29]!==c||e[30]!==l||e[31]!==i||e[32]!==F?(Z=g.jsx(ze,{onMoveStart:i,onMove:l,onMoveEnd:c,annotationId:F}),e[29]=c,e[30]=l,e[31]=i,e[32]=F,e[33]=Z):Z=e[33];let B;e[34]!==f||e[35]!==((P=n.data)==null?void 0:P.id)||e[36]!==m?(B=f&&m&&g.jsx(Be,{annotationId:(z=n.data)==null?void 0:z.id,onRemove:m}),e[34]=f,e[35]=(X=n.data)==null?void 0:X.id,e[36]=m,e[37]=B):B=e[37];let K;return e[38]!==h||e[39]!==u||e[40]!==L||e[41]!==k||e[42]!==D||e[43]!==Z||e[44]!==B||e[45]!==C||e[46]!==O?(K=g.jsxs(Yt,{style:C,$isDragging:u,onMouseDown:h,onClick:y,children:[O,L,k,D,Z,B]}),e[38]=h,e[39]=u,e[40]=L,e[41]=k,e[42]=D,e[43]=Z,e[44]=B,e[45]=C,e[46]=O,e[47]=K):K=e[47],K};function _t(t){t.preventDefault(),t.stopPropagation()}const Ue="RECTANGLE";function Ot({x:t,y:e},n){if(!n)return!1;const r=Math.min(n.x,n.x+n.width),o=Math.max(n.x,n.x+n.width),i=Math.min(n.y,n.y+n.height),l=Math.max(n.y,n.y+n.height);return!(t<r||e<i||t>o||e>l)}function Lt(t){if(!t||t.width<=0||t.height<=0)return 0;const e=Math.abs(t.width),n=Math.abs(t.height);return e*n}const Ht={onTouchStart(t,e){return We(t,e)},onTouchEnd(t,e){return Ve(t)},onTouchMove(t,e){return Je(t,e)},onMouseDown(t,e){return We(t,e)},onMouseUp(t,e){return Ve(t)},onMouseMove(t,e){return Je(t,e)}};function We(t,e){if(t.selection)return{};{const{x:n,y:r}=re(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function Ve(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Je(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:o,y:i}=re(e),l=o-n,c=i-r;return{...t,geometry:{...t.geometry,type:Ue,x:l>0?n:o,y:c>0?r:i,width:Math.abs(l),height:Math.abs(c)}}}return t}const se={TYPE:Ue,intersects:Ot,area:Lt,methods:Ht},Ze="POINT";function Xt({x:t,y:e},n,r){if(!n)return!1;const o=Math.abs(t-n.x),i=Math.abs(e-n.y);return o===0&&i===0}function Ft(t,e){return 0}const ue={TYPE:Ze,intersects:Xt,area:Ft,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...re(e),width:0,height:0,type:Ze}}}}},Ee=t=>Math.pow(t,2),ke="OVAL";function Bt({x:t,y:e},n){if(!n||!n.width||!n.height)return!1;const r=Math.abs(n.width),o=Math.abs(n.height),i={x:n.x+r/2,y:n.y+o/2},l=r/2,c=o/2;if(l===0||c===0)return!1;const u=t-i.x,f=e-i.y;return Ee(u)/Ee(l)+Ee(f)/Ee(c)<=1}function zt(t){return!t||!t.width||!t.height||t.width<=0||t.height<=0?0:Math.PI*Math.abs(t.width)*Math.abs(t.height)/4}const Gt={onTouchStart(t,e){return Ut(t,e)},onTouchEnd(t,e){return Wt(t)},onTouchMove(t,e){return Vt(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:r}=re(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:o,y:i}=re(e);return{...t,geometry:{...t.geometry,type:ke,x:Math.min(n,o),y:Math.min(r,i),width:Math.abs(o-n),height:Math.abs(i-r)}}}return t}};function Ut(t,e){if(t.selection)return{};{const{x:n,y:r}=re(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function Wt(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Vt(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:o,y:i}=re(e),l=o-n,c=i-r;return{...t,geometry:{...t.geometry,type:ke,x:l>0?n:o,y:c>0?r:i,width:Math.abs(l),height:Math.abs(c)}}}return t}const ge={TYPE:ke,intersects:Bt,area:zt,methods:Gt},Qe={innerRef:()=>{},onChange:()=>{},onSubmit:()=>{},type:se.TYPE,selectors:[se,ue,ge],disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,activeAnnotationComparator:(t,e)=>t===e,renderSelector:({annotation:t})=>{switch(t.geometry.type){case se.TYPE:return g.jsx(Xe,{annotation:t});case ue.TYPE:return g.jsx(Ce,{annotation:t});case ge.TYPE:return g.jsx(ye,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>g.jsx(Mt,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case se.TYPE:return g.jsx(be,{annotation:e,active:n},t);case ue.TYPE:return g.jsx(Ce,{annotation:e},t);case ge.TYPE:return g.jsx(ye,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>g.jsx(Fe,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case ue.TYPE:return g.jsx(Se,{children:"Click to Annotate"});default:return g.jsx(Se,{children:"Click and Drag to Annotate"})}},enableEditing:!1,onAnnotationsChange:()=>{console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderDraggableHighlight:({key:t,annotation:e,active:n,isDragging:r,isHovered:o,onDotDragStart:i,onDotDrag:l,onMoveStart:c,onMove:u,onDragEnd:f,allowDelete:m,onRemoveAnnotation:v})=>{var x;if(!((x=e.data)!=null&&x.id)||!o)switch(e.geometry.type){case se.TYPE:return g.jsx(be,{annotation:e,active:n},t);case ue.TYPE:return g.jsx(Ce,{annotation:e},t);case ge.TYPE:return g.jsx(ye,{annotation:e,active:n},t);default:return null}return e.geometry.type===se.TYPE?g.jsx(Ge,{annotation:e,onDotDragStart:i,onDotDrag:l,onMoveStart:c,onMove:u,onDragEnd:f,isDragging:r,allowDelete:m,onRemoveAnnotation:v}):g.jsx(be,{annotation:e,active:n},t)}},Jt=A.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Se} {
    opacity: 1;
  }
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,Zt=A.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`,Qt=A.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`,Kt=A.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`,$t=t=>{var nt;const{selectors:e,...n}=t,r={...Qe,...n,selectors:e!==void 0?e:Qe.selectors},{src:o,alt:i,style:l,className:c,containerRef:u,children:f,annotations:m,type:v,selectors:x,value:h,onChange:y,onSubmit:R,activeAnnotationComparator:b,activeAnnotations:w,disableAnnotation:S,disableSelector:C,renderSelector:H,disableEditor:O,renderEditor:U,renderHighlight:L,renderContent:I,disableOverlay:k,renderOverlay:M,allowTouch:D,onImageMouseUp:F,onImageMouseDown:Z,onImageMouseMove:B,onImageClick:K,enableEditing:W,onAnnotationsChange:ee,renderDraggableHighlight:ne,allowDelete:ie,onRemoveAnnotation:s,relativeMousePos:d,isMouseHovering:T}=r,P=p.useRef(null),z=p.useRef(null),{x:X,y:$}=d,oe=p.useCallback(a=>{W&&ee&&ee(a)},[W,ee]),E=W?pt(m,oe):null,j=p.useRef(null),[te,ae]=p.useState(null),ce=m,V=p.useCallback(a=>{if(a)return x.find(N=>N.TYPE===a)},[x]),we=v||x&&x[0]&&x[0].TYPE,G=p.useCallback((a,N)=>{if(S)return;const J=V(we);if(J&&J.methods[a]){const le=J.methods[a],q=le(h||{},N);typeof q>"u"?process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(a)} of type ${we} returned undefined.
             Make sure to explicitly return the previous state or new state.`):y&&y(q)}},[S,V,we,h,y]),Ke=p.useCallback(a=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&D&&a.preventDefault(),G("onTouchStart",a)},[D,G]),$e=p.useCallback(a=>{G("onTouchEnd",a)},[G]),qe=p.useCallback(a=>{d&&typeof d.onTouchMove=="function"&&d.onTouchMove(a),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&D&&a.preventDefault(),G("onTouchMove",a)},[d,D,G]),Pe=p.useCallback(a=>{d&&typeof d.onTouchLeave=="function"&&d.onTouchLeave(a)},[d]);p.useEffect(()=>{const a=z.current;if(D&&a)return a.ontouchstart=Ke,a.ontouchend=$e,a.ontouchmove=qe,a.ontouchcancel=Pe,()=>{a&&(a.ontouchstart=null,a.ontouchend=null,a.ontouchmove=null,a.ontouchcancel=null)};a&&(a.ontouchstart=null,a.ontouchend=null,a.ontouchmove=null,a.ontouchcancel=null)},[D,Ke,$e,qe,Pe]);const qt=p.useCallback(a=>{P.current=a,d&&typeof d.innerRef=="function"&&d.innerRef(a)},[d]),en=p.useCallback(a=>{T&&typeof T.innerRef=="function"&&T.innerRef(a),u&&(typeof u=="function"?u(a):u.current=a)},[T,u]),tn=p.useCallback((a,N)=>{const J=P.current;return!J||a===null||N===null?void 0:ce.map(q=>{const{geometry:Y}=q;if(!Y)return!1;const de=V(Y.type);if(!de)return!1;if(W&&Y.type==="RECTANGLE"&&typeof Y.x=="number"&&typeof Y.y=="number"&&typeof Y.width=="number"&&typeof Y.height=="number"){const Te={...Y,x:Math.max(0,Y.x-2),y:Math.max(0,Y.y-2),width:Math.min(100-Y.x+2,Y.width+4),height:Math.min(100-Y.y+2,Y.height+4)};return de.intersects({x:a,y:N},Te,J)?q:!1}return de.intersects({x:a,y:N},Y,J)?q:!1}).filter(q=>!!q).sort((q,Y)=>{const de=V(q.geometry.type),Te=V(Y.geometry.type);return!de||!Te||!J?0:de.area(q.geometry,J)-Te.area(Y.geometry,J)})[0]},[ce,V,P,W]),nn=p.useCallback(a=>{d&&typeof d.onMouseMove=="function"&&d.onMouseMove(a);const N=a;B&&B(N),G("onMouseMove",N)},[d,B,G]),on=p.useCallback(a=>{d&&typeof d.onMouseLeave=="function"&&d.onMouseLeave(a)},[d]),rn=p.useCallback(a=>{F&&F(a),G("onMouseUp",a)},[F,G]),sn=p.useCallback(a=>{Z&&Z(a),G("onMouseDown",a)},[Z,G]),an=p.useCallback(a=>{K&&K(a),G("onClick",a)},[K,G]),cn=p.useCallback(()=>{R&&h&&R(h)},[R,h]),Ne=p.useCallback(a=>{var N;a.key==="Escape"&&y&&((N=h==null?void 0:h.selection)!=null&&N.showEditor||h!=null&&h.geometry)&&y({selection:void 0,geometry:void 0,data:void 0})},[h,y]);p.useEffect(()=>{var a;if((a=h==null?void 0:h.selection)!=null&&a.showEditor)return window.addEventListener("keydown",Ne),()=>window.removeEventListener("keydown",Ne)},[(nt=h==null?void 0:h.selection)==null?void 0:nt.showEditor,Ne]),p.useEffect(()=>()=>{j.current&&clearTimeout(j.current)},[]);const et=p.useCallback((a,N)=>w&&!!w.find(le=>b?b(a,le):a.data.id===le)||N===a,[w,b]),tt=tn(X,$);return g.jsxs(Jt,{style:l,ref:en,onMouseLeave:on,onTouchCancel:Pe,onMouseMove:nn,$allowTouch:D,className:c,children:[g.jsx(Zt,{alt:i||"Annotation Image",src:o,draggable:!1,ref:qt}),g.jsxs(Qt,{children:[ce.map(a=>{if(!a.data||typeof a.data.id>"u")return console.warn("Annotation is missing data.id, cannot render highlight:",a),null;const N=et(a,tt);if(W&&E&&!E.isDragging&&(N&&te!==a.data.id?(j.current&&(clearTimeout(j.current),j.current=null),ae(a.data.id),E.setDraggingId(a.data.id)):!N&&te===a.data.id&&(j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{ae(null),E.setDraggingId(null),j.current=null},100))),W&&ne&&E){const J=E.draggingId===a.data.id,le=E.isDragging&&E.draggingId===a.data.id;return ne({key:a.data.id,annotation:a,active:N,isDragging:le,isHovered:J,onDotDragStart:E.handleDotDragStart,onDotDrag:E.handleDotDrag,onMoveStart:E.handleMoveStart,onMove:E.handleMove,onDragEnd:E.handleMouseUp,allowDelete:ie,onRemoveAnnotation:s})}return L({key:a.data.id,annotation:a,active:N})}),!C&&h&&h.geometry&&H&&H({annotation:h})]}),g.jsx(Kt,{"data-testid":"annotation-target",ref:z,onClick:an,onMouseUp:rn,onMouseDown:sn}),!k&&M&&M({type:we,annotation:h}),ce.map(a=>!a.data||typeof a.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render content:",a),null):et(a,tt)&&I&&I({key:a.data.id,annotation:a})),!O&&h&&h.selection&&h.selection.showEditor&&U&&y&&U({annotation:h,onChange:y,onSubmit:cn}),g.jsx("div",{children:f})]})},De=it(ct("isMouseHovering"),ht("relativeMousePos"))($t);process.env.NODE_ENV!=="production"&&(De.displayName="ComposedAnnotation"),_.Annotation=De,_.DeleteButton=Be,_.DraggableBox=Ge,_.DraggableDot=pe,_.MoveButton=ze,_.OvalSelector=ge,_.PointSelector=ue,_.RectangleSelector=se,_.default=De,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
