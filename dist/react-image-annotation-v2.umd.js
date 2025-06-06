(function(_,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],g):(_=typeof globalThis<"u"?globalThis:_||self,g(_.ReactImageAnnotation={},_.React,_.styled))})(this,function(_,g,N){"use strict";var pe={exports:{}},ue={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De;function et(){if(De)return ue;De=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,i){var l=null;if(i!==void 0&&(l=""+i),o.key!==void 0&&(l=""+o.key),"key"in o){i={};for(var c in o)c!=="key"&&(i[c]=o[c])}else i=o;return o=i.ref,{$$typeof:t,type:r,key:l,ref:o!==void 0?o:null,props:i}}return ue.Fragment=e,ue.jsx=n,ue.jsxs=n,ue}var de={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe;function tt(){return Pe||(Pe=1,process.env.NODE_ENV!=="production"&&function(){function t(s){if(s==null)return null;if(typeof s=="function")return s.$$typeof===M?null:s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case R:return"Fragment";case w:return"Profiler";case b:return"StrictMode";case Y:return"Suspense";case G:return"SuspenseList";case S:return"Activity"}if(typeof s=="object")switch(typeof s.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),s.$$typeof){case y:return"Portal";case C:return(s.displayName||"Context")+".Provider";case k:return(s._context.displayName||"Context")+".Consumer";case L:var d=s.render;return s=s.displayName,s||(s=d.displayName||d.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case O:return d=s.displayName||null,d!==null?d:t(s.type)||"Memo";case j:d=s._payload,s=s._init;try{return t(s(d))}catch{}}return null}function e(s){return""+s}function n(s){try{e(s);var d=!1}catch{d=!0}if(d){d=console;var T=d.error,P=typeof Symbol=="function"&&Symbol.toStringTag&&s[Symbol.toStringTag]||s.constructor.name||"Object";return T.call(d,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",P),e(s)}}function r(s){if(s===R)return"<>";if(typeof s=="object"&&s!==null&&s.$$typeof===j)return"<...>";try{var d=t(s);return d?"<"+d+">":"<...>"}catch{return"<...>"}}function o(){var s=D.A;return s===null?null:s.getOwner()}function i(){return Error("react-stack-top-frame")}function l(s){if(X.call(s,"key")){var d=Object.getOwnPropertyDescriptor(s,"key").get;if(d&&d.isReactWarning)return!1}return s.key!==void 0}function c(s,d){function T(){Z||(Z=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",d))}T.isReactWarning=!0,Object.defineProperty(s,"key",{get:T,configurable:!0})}function u(){var s=t(this.type);return $[s]||($[s]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),s=this.props.ref,s!==void 0?s:null}function f(s,d,T,P,B,H,Q,oe){return T=H.ref,s={$$typeof:h,type:s,key:d,props:H,_owner:B},(T!==void 0?T:null)!==null?Object.defineProperty(s,"ref",{enumerable:!1,get:u}):Object.defineProperty(s,"ref",{enumerable:!1,value:null}),s._store={},Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(s,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(s,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Q}),Object.defineProperty(s,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:oe}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s}function m(s,d,T,P,B,H,Q,oe){var E=d.children;if(E!==void 0)if(P)if(W(E)){for(P=0;P<E.length;P++)v(E[P]);Object.freeze&&Object.freeze(E)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else v(E);if(X.call(d,"key")){E=t(s);var U=Object.keys(d).filter(function(ee){return ee!=="key"});P=0<U.length?"{key: someKey, "+U.join(": ..., ")+": ...}":"{key: someKey}",ie[E+P]||(U=0<U.length?"{"+U.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,P,E,U,E),ie[E+P]=!0)}if(E=null,T!==void 0&&(n(T),E=""+T),l(d)&&(n(d.key),E=""+d.key),"key"in d){T={};for(var z in d)z!=="key"&&(T[z]=d[z])}else T=d;return E&&c(T,typeof s=="function"?s.displayName||s.name||"Unknown":s),f(s,E,H,B,o(),T,Q,oe)}function v(s){typeof s=="object"&&s!==null&&s.$$typeof===h&&s._store&&(s._store.validated=1)}var x=g,h=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),M=Symbol.for("react.client.reference"),D=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=Object.prototype.hasOwnProperty,W=Array.isArray,F=console.createTask?console.createTask:function(){return null};x={"react-stack-bottom-frame":function(s){return s()}};var Z,$={},q=x["react-stack-bottom-frame"].bind(x,i)(),ne=F(r(i)),ie={};de.Fragment=R,de.jsx=function(s,d,T,P,B){var H=1e4>D.recentlyCreatedOwnerStacks++;return m(s,d,T,!1,P,B,H?Error("react-stack-top-frame"):q,H?F(r(s)):ne)},de.jsxs=function(s,d,T,P,B){var H=1e4>D.recentlyCreatedOwnerStacks++;return m(s,d,T,!0,P,B,H?Error("react-stack-top-frame"):q,H?F(r(s)):ne)}}()),de}var Ne;function nt(){return Ne||(Ne=1,process.env.NODE_ENV==="production"?pe.exports=et():pe.exports=tt()),pe.exports}var p=nt();function ot(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}const rt=({elem:t,e})=>{if(!t||typeof t.getBoundingClientRect!="function")return!1;const{pageY:n,pageX:r}=e,{left:o,right:i,bottom:l,top:c}=t.getBoundingClientRect();return r>o&&r<i&&n>c&&n<l},st=(t="isMouseHovering")=>e=>{const n=o=>{const[i,l]=g.useState(!1),c=g.useRef(null);g.useEffect(()=>{const f=m=>{const v=c.current,x={pageX:m.pageX,pageY:m.pageY};l(rt({elem:v,e:x}))};return document.addEventListener("mousemove",f),()=>{document.removeEventListener("mousemove",f)}},[]);const u={[t]:{innerRef:f=>c.current=f,isHoveringOver:i}};return g.createElement(e,{...o,...u})},r=e.displayName||e.name||"Component";return n.displayName=`IsMouseHovering(${r})`,n},Ae=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.x,r=t.clientY-e.y;return{x:n/e.width*100,y:r/e.height*100}},je=(t,e,n)=>Math.max(t,Math.min(e,n)),it=t=>{if(!t.currentTarget||typeof t.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const e=t.targetTouches[0],n=t.currentTarget.getBoundingClientRect(),r=e.pageX-n.left,o=e.pageY-(n.top+window.scrollY);return{x:je(0,100,r/n.width*100),y:je(0,100,o/n.height*100)}},re=t=>at(t)?ct(t)?(lt(t)&&t.preventDefault(),it(t)):{x:null}:Ae(t),at=t=>t.targetTouches!==void 0,ct=t=>t.targetTouches.length===1,lt=t=>t.type==="touchmove",ut=(t="relativeMousePos")=>e=>{class n extends g.PureComponent{constructor(i){super(i),this.container=null,this._innerRef=l=>{this.container=l},this._onMouseMove=l=>{const c=Ae(l);this.setState(c)},this._onTouchMove=l=>{if(!this.container||l.targetTouches.length!==1)return;const c=l.targetTouches[0],u=this.container.offsetParent;if(!u)return;const f=c.pageX-u.offsetLeft,m=c.pageY-u.offsetTop,v=this.container.width,x=this.container.height;typeof v=="number"&&typeof x=="number"&&v>0&&x>0?this.setState({x:f/v*100,y:m/x*100}):this.setState({x:null,y:null})},this._onMouseLeave=l=>{this.setState({x:null,y:null})},this._onTouchLeave=l=>{this.setState({x:null,y:null})},this.state={x:null,y:null}}render(){const i={innerRef:this._innerRef,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,onTouchMove:this._onTouchMove,onTouchLeave:this._onTouchLeave,x:this.state.x,y:this.state.y},l={[t]:i};return g.createElement(e,{...this.props,...l})}}const r=e.displayName||e.name||"Component";return n.displayName=`withRelativeMousePos(${r})`,n},dt=(t,e)=>{const[n,r]=g.useState(!1),[o,i]=g.useState(null),[l,c]=g.useState(null),u=g.useRef(null),f=g.useRef(t);f.current=t;const m=g.useCallback((b,w)=>{const k=f.current.map(C=>C.data.id===b?{...C,isDragging:w}:C);f.current=k,e(k),r(w),i(w?b:null)},[e]),v=g.useCallback((b,w)=>{m(b,!0);const k=f.current.find(C=>C.data.id===b);k&&(u.current={...k.geometry,initialCursorPosition:w})},[m]),x=g.useCallback((b,w,k)=>{if(!o||!u.current)return;const C=b.clientX-k.x,L=b.clientY-k.y,Y=document.querySelector(".annotation-container");if(!Y)return;const G=Y.getBoundingClientRect(),O=G.width,j=G.height,S=100,M={...u.current};switch(w){case"top":M.height=Math.min(u.current.height-L/j*S,u.current.y+u.current.height),M.y=Math.max(u.current.y+L/j*S,0);break;case"right":M.width=Math.min(u.current.width+C/O*S,S-u.current.x);break;case"bottom":M.height=Math.min(u.current.height+L/j*S,S-u.current.y);break;case"left":M.width=Math.min(u.current.width-C/O*S,u.current.x+u.current.width),M.x=Math.max(u.current.x+C/O*S,0);break}M.width=Math.max(M.width,0),M.height=Math.max(M.height,0),M.x=Math.min(M.x,S-M.width),M.y=Math.min(M.y,S-M.height);const D=f.current.map(X=>X.data.id===o?{...X,geometry:M}:X);f.current=D,e(D)},[o,e]),h=g.useCallback((b,w)=>{m(b,!0);const k=f.current.find(C=>C.data.id===b);k&&(u.current={...k.geometry,initialCursorPosition:w})},[m]),y=g.useCallback((b,w)=>{if(!o||!u.current)return;const k=b.clientX-w.x,C=b.clientY-w.y,L=document.querySelector(".annotation-container");if(!L)return;const Y=L.getBoundingClientRect(),G=Y.width,O=Y.height,j=100,S={...u.current};S.x=Math.max(Math.min(u.current.x+k/G*j,j-u.current.width),0),S.y=Math.max(Math.min(u.current.y+C/O*j,j-u.current.height),0);const M=f.current.map(D=>D.data.id===o?{...D,geometry:S}:D);f.current=M,e(M)},[o,e]),R=g.useCallback(()=>{o&&(r(!1),i(null)),u.current=null},[o]);return{isDragging:n,draggingId:o,activeAnnotationId:l,setActiveAnnotationId:c,setDraggingId:i,handleDotDragStart:v,handleDotDrag:x,handleMoveStart:h,handleMove:y,handleMouseUp:R}};var me={exports:{}},Ee={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie;function ft(){if(Ie)return Ee;Ie=1;var t=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Ee.c=function(e){return t.H.useMemoCache(e)},Ee}var we={};/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function ht(){return _e||(_e=1,process.env.NODE_ENV!=="production"&&function(){var t=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;we.c=function(e){var n=t.H;return n===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),n.useMemoCache(e)}}()),we}var Ye;function gt(){return Ye||(Ye=1,process.env.NODE_ENV==="production"?me.exports=ft():me.exports=ht()),me.exports}var J=gt();const pt=N.div`
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
`;function Te(t){const e=J.c(3),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`,o=`${n.x}%`;let i;return e[0]!==r||e[1]!==o?(i=p.jsx(pt,{style:{top:r,left:o}}),e[0]=r,e[1]=o,e[2]=i):i=e[2],i}const mt=N.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,xt=N.div`
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
`,vt=t=>{const e=J.c(11),{onChange:n,onSubmit:r,onFocus:o,onBlur:i,value:l}=t;let c;e[0]!==i||e[1]!==n||e[2]!==o||e[3]!==l?(c=p.jsx(mt,{children:p.jsx("textarea",{placeholder:"Write description",onFocus:o,onBlur:i,onChange:n,value:l})}),e[0]=i,e[1]=n,e[2]=o,e[3]=l,e[4]=c):c=e[4];let u;e[5]!==r||e[6]!==l?(u=l&&p.jsx(xt,{onClick:r,children:"Submit"}),e[5]=r,e[6]=l,e[7]=u):u=e[7];let f;return e[8]!==c||e[9]!==u?(f=p.jsxs(g.Fragment,{children:[c,u]}),e[8]=c,e[9]=u,e[10]=f):f=e[10],f},bt=N.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,yt=N.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${bt} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,Et=t=>{var k;const e=J.c(17),{annotation:n,onChange:r,onSubmit:o,className:i,style:l}=t,c=i===void 0?"":i;let u;e[0]!==l?(u=l===void 0?{}:l,e[0]=l,e[1]=u):u=e[1];const f=u,{geometry:m}=n;if(!m)return null;const v=`${m.x}%`,x=`${m.y+m.height}%`;let h;e[2]!==f||e[3]!==v||e[4]!==x?(h={position:"absolute",left:v,top:x,...f},e[2]=f,e[3]=v,e[4]=x,e[5]=h):h=e[5];let y;e[6]!==n||e[7]!==r?(y=C=>r({...n,data:{...n.data,text:C.target.value}}),e[6]=n,e[7]=r,e[8]=y):y=e[8];const R=(k=n.data)==null?void 0:k.text;let b;e[9]!==o||e[10]!==y||e[11]!==R?(b=p.jsx(vt,{onChange:y,onSubmit:o,value:R}),e[9]=o,e[10]=y,e[11]=R,e[12]=b):b=e[12];let w;return e[13]!==c||e[14]!==h||e[15]!==b?(w=p.jsx(yt,{className:c,style:h,children:b}),e[13]=c,e[14]=h,e[15]=b,e[16]=w):w=e[16],w},xe=N.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,wt=N.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Oe(t){const e=J.c(21),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.y}%`;let o;e[0]!==r?(o=p.jsx(xe,{style:{height:r,width:"100%"}}),e[0]=r,e[1]=o):o=e[1];const i=`${n.y}%`,l=`${n.height}%`,c=`${n.x}%`;let u;e[2]!==i||e[3]!==l||e[4]!==c?(u=p.jsx(xe,{style:{top:i,height:l,width:c}}),e[2]=i,e[3]=l,e[4]=c,e[5]=u):u=e[5];const f=`${n.y}%`,m=`${n.x+n.width}%`,v=`${n.height}%`,x=`${100-(n.x+n.width)}%`;let h;e[6]!==f||e[7]!==m||e[8]!==v||e[9]!==x?(h=p.jsx(xe,{style:{top:f,left:m,height:v,width:x}}),e[6]=f,e[7]=m,e[8]=v,e[9]=x,e[10]=h):h=e[10];const y=`${n.y+n.height}%`,R=`${100-(n.y+n.height)}%`;let b;e[11]!==y||e[12]!==R?(b=p.jsx(xe,{style:{top:y,height:R,width:"100%"}}),e[11]=y,e[12]=R,e[13]=b):b=e[13];let w;return e[14]!==t.className||e[15]!==t.style||e[16]!==o||e[17]!==h||e[18]!==b||e[19]!==u?(w=p.jsxs(wt,{className:t.className,style:t.style,children:[o,u,h,b]}),e[14]=t.className,e[15]=t.style,e[16]=o,e[17]=h,e[18]=b,e[19]=u,e[20]=w):w=e[20],w}Oe.defaultProps={className:"",style:{}};const Tt=N.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function ve(t){const e=J.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,o=`${n.y}%`,i=`${n.height}%`,l=`${n.width}%`,c=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==r||e[2]!==o||e[3]!==i||e[4]!==l||e[5]!==c?(u={position:"absolute",left:r,top:o,height:i,width:l,boxShadow:c,...t.style},e[0]=t.style,e[1]=r,e[2]=o,e[3]=i,e[4]=l,e[5]=c,e[6]=u):u=e[6];let f;return e[7]!==t.className||e[8]!==u?(f=p.jsx(Tt,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=f):f=e[9],f}ve.defaultProps={className:"",style:{}};const Mt=N.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function be(t){const e=J.c(10),{geometry:n}=t.annotation;if(!n)return null;const r=`${n.x}%`,o=`${n.y}%`,i=`${n.height}%`,l=`${n.width}%`,c=t.active?"0 0 1px 1px yellow inset":void 0;let u;e[0]!==t.style||e[1]!==r||e[2]!==o||e[3]!==i||e[4]!==l||e[5]!==c?(u={position:"absolute",left:r,top:o,height:i,width:l,boxShadow:c,...t.style},e[0]=t.style,e[1]=r,e[2]=o,e[3]=i,e[4]=l,e[5]=c,e[6]=u):u=e[6];let f;return e[7]!==t.className||e[8]!==u?(f=p.jsx(Mt,{className:t.className,style:u}),e[7]=t.className,e[8]=u,e[9]=f):f=e[9],f}be.defaultProps={className:"",style:{}};const Rt=N.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Le(t){const e=J.c(8),{geometry:n}=t.annotation;if(!n||typeof n.x>"u"||typeof n.y>"u"||typeof n.width>"u"||typeof n.height>"u")return null;const r=`${n.x}%`,o=`${n.y+n.height}%`;let i;e[0]!==t.style||e[1]!==r||e[2]!==o?(i={position:"absolute",left:r,top:o,...t.style},e[0]=t.style,e[1]=r,e[2]=o,e[3]=i):i=e[3];const l=t.annotation.data&&t.annotation.data.text;let c;return e[4]!==t.className||e[5]!==i||e[6]!==l?(c=p.jsx(Rt,{style:i,className:t.className,children:l}),e[4]=t.className,e[5]=i,e[6]=l,e[7]=c):c=e[7],c}Le.defaultProps={style:{},className:""};const Me=N.div`
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
`,Ct=N.div`
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

  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.1);
  }
`,kt=N.div`
  &::before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
    color: #666;
    line-height: 1;
  }
`,He=t=>{const e=J.c(6),{annotationId:n,onRemove:r}=t;let o;e[0]!==n||e[1]!==r?(o=u=>{u.stopPropagation(),r(n)},e[0]=n,e[1]=r,e[2]=o):o=e[2];const i=o;let l;e[3]===Symbol.for("react.memo_cache_sentinel")?(l=p.jsx(kt,{}),e[3]=l):l=e[3];let c;return e[4]!==i?(c=p.jsx(Ct,{onClick:i,children:l}),e[4]=i,e[5]=c):c=e[5],c},St=N.div`
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
`,Dt=N.div`
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
`,fe=t=>{const e=J.c(9),{position:n,onDragStart:r,onDrag:o,onDragEnd:i,annotationId:l}=t;let c;e[0]!==l||e[1]!==o||e[2]!==i||e[3]!==r||e[4]!==n?(c=v=>{v.preventDefault(),v.stopPropagation();const x={x:v.clientX,y:v.clientY};r(l,x);const h=R=>{R.preventDefault(),R.stopPropagation(),o(R,n,x)},y=R=>{R.preventDefault(),R.stopPropagation(),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",y),i==null||i()};document.addEventListener("mousemove",h),document.addEventListener("mouseup",y)},e[0]=l,e[1]=o,e[2]=i,e[3]=r,e[4]=n,e[5]=c):c=e[5];const u=c,f=Pt;let m;return e[6]!==u||e[7]!==n?(m=p.jsx(St,{position:n,onMouseDown:u,onClick:f,"data-type":"dot"}),e[6]=u,e[7]=n,e[8]=m):m=e[8],m},Xe=t=>{const e=J.c(7),{onMoveStart:n,onMove:r,onMoveEnd:o,annotationId:i}=t;let l;e[0]!==i||e[1]!==r||e[2]!==o||e[3]!==n?(l=m=>{m.preventDefault(),m.stopPropagation();const v={x:m.clientX,y:m.clientY};n(i,v);const x=y=>{y.preventDefault(),y.stopPropagation(),r(y,v)},h=y=>{y.preventDefault(),y.stopPropagation(),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",h),o==null||o()};document.addEventListener("mousemove",x),document.addEventListener("mouseup",h)},e[0]=i,e[1]=r,e[2]=o,e[3]=n,e[4]=l):l=e[4];const c=l,u=Nt;let f;return e[5]!==c?(f=p.jsx(Dt,{onMouseDown:c,onClick:u,"data-type":"move-button",children:"↕"}),e[5]=c,e[6]=f):f=e[6],f};function Pt(t){t.preventDefault(),t.stopPropagation()}function Nt(t){t.preventDefault(),t.stopPropagation()}const At=N.div`
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
`,Fe=t=>{var $,q,ne,ie,s,d,T,P,B,H;const e=J.c(48),{annotation:n,onDotDragStart:r,onDotDrag:o,onMoveStart:i,onMove:l,onDragEnd:c,isDragging:u,allowDelete:f,onRemoveAnnotation:m}=t,{geometry:v}=n;if(!v||!v.type||typeof v.x!="number"||typeof v.y!="number")return null;let x;e[0]!==(($=n.data)==null?void 0:$.id)||e[1]!==l||e[2]!==i?(x=Q=>{var I;const oe=Q.target;if(oe.closest('[data-type="dot"]')||oe.closest('[data-type="move-button"]'))return;Q.preventDefault(),Q.stopPropagation();const E={x:Q.clientX,y:Q.clientY},U=(I=n.data)==null?void 0:I.id;U&&i(U,E);const z=te=>{te.preventDefault(),te.stopPropagation(),l(te,E)},ee=te=>{te.preventDefault(),te.stopPropagation(),document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",ee)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",ee)},e[0]=(q=n.data)==null?void 0:q.id,e[1]=l,e[2]=i,e[3]=x):x=e[3];const h=x,y=jt,R=`${v.x}%`,b=`${v.y}%`,w=`${v.width}%`,k=`${v.height}%`;let C;e[4]!==R||e[5]!==b||e[6]!==w||e[7]!==k?(C={left:R,top:b,width:w,height:k},e[4]=R,e[5]=b,e[6]=w,e[7]=k,e[8]=C):C=e[8];const L=(ne=n.data)==null?void 0:ne.id;let Y;e[9]!==o||e[10]!==r||e[11]!==c||e[12]!==L?(Y=p.jsx(fe,{position:"top",onDragStart:r,onDrag:o,onDragEnd:c,annotationId:L}),e[9]=o,e[10]=r,e[11]=c,e[12]=L,e[13]=Y):Y=e[13];const G=(ie=n.data)==null?void 0:ie.id;let O;e[14]!==o||e[15]!==r||e[16]!==c||e[17]!==G?(O=p.jsx(fe,{position:"right",onDragStart:r,onDrag:o,onDragEnd:c,annotationId:G}),e[14]=o,e[15]=r,e[16]=c,e[17]=G,e[18]=O):O=e[18];const j=(s=n.data)==null?void 0:s.id;let S;e[19]!==o||e[20]!==r||e[21]!==c||e[22]!==j?(S=p.jsx(fe,{position:"bottom",onDragStart:r,onDrag:o,onDragEnd:c,annotationId:j}),e[19]=o,e[20]=r,e[21]=c,e[22]=j,e[23]=S):S=e[23];const M=(d=n.data)==null?void 0:d.id;let D;e[24]!==o||e[25]!==r||e[26]!==c||e[27]!==M?(D=p.jsx(fe,{position:"left",onDragStart:r,onDrag:o,onDragEnd:c,annotationId:M}),e[24]=o,e[25]=r,e[26]=c,e[27]=M,e[28]=D):D=e[28];const X=(T=n.data)==null?void 0:T.id;let W;e[29]!==c||e[30]!==l||e[31]!==i||e[32]!==X?(W=p.jsx(Xe,{onMoveStart:i,onMove:l,onMoveEnd:c,annotationId:X}),e[29]=c,e[30]=l,e[31]=i,e[32]=X,e[33]=W):W=e[33];let F;e[34]!==f||e[35]!==((P=n.data)==null?void 0:P.id)||e[36]!==m?(F=f&&m&&p.jsx(He,{annotationId:(B=n.data)==null?void 0:B.id,onRemove:m}),e[34]=f,e[35]=(H=n.data)==null?void 0:H.id,e[36]=m,e[37]=F):F=e[37];let Z;return e[38]!==h||e[39]!==u||e[40]!==O||e[41]!==S||e[42]!==D||e[43]!==W||e[44]!==F||e[45]!==C||e[46]!==Y?(Z=p.jsxs(At,{style:C,$isDragging:u,onMouseDown:h,onClick:y,children:[Y,O,S,D,W,F]}),e[38]=h,e[39]=u,e[40]=O,e[41]=S,e[42]=D,e[43]=W,e[44]=F,e[45]=C,e[46]=Y,e[47]=Z):Z=e[47],Z};function jt(t){t.preventDefault(),t.stopPropagation()}const Be="RECTANGLE";function It({x:t,y:e},n){if(!n)return!1;const r=Math.min(n.x,n.x+n.width),o=Math.max(n.x,n.x+n.width),i=Math.min(n.y,n.y+n.height),l=Math.max(n.y,n.y+n.height);return!(t<r||e<i||t>o||e>l)}function _t(t){if(!t||t.width<=0||t.height<=0)return 0;const e=Math.abs(t.width),n=Math.abs(t.height);return e*n}const Yt={onTouchStart(t,e){return Ue(t,e)},onTouchEnd(t,e){return Ge(t)},onTouchMove(t,e){return ze(t,e)},onMouseDown(t,e){return Ue(t,e)},onMouseUp(t,e){return Ge(t)},onMouseMove(t,e){return ze(t,e)}};function Ue(t,e){if(t.selection)return{};{const{x:n,y:r}=re(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function Ge(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function ze(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:o,y:i}=re(e),l=o-n,c=i-r;return{...t,geometry:{...t.geometry,type:Be,x:l>0?n:o,y:c>0?r:i,width:Math.abs(l),height:Math.abs(c)}}}return t}const se={TYPE:Be,intersects:It,area:_t,methods:Yt},We="POINT";function Ot({x:t,y:e},n,r){if(!n)return!1;const o=Math.abs(t-n.x),i=Math.abs(e-n.y);return o===0&&i===0}function Lt(t,e){return 0}const ce={TYPE:We,intersects:Ot,area:Lt,methods:{onClick(t,e){return t.geometry?{}:{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"},geometry:{...t.geometry,...re(e),width:0,height:0,type:We}}}}},ye=t=>Math.pow(t,2),Re="OVAL";function Ht({x:t,y:e},n){if(!n||!n.width||!n.height)return!1;const r=Math.abs(n.width),o=Math.abs(n.height),i={x:n.x+r/2,y:n.y+o/2},l=r/2,c=o/2;if(l===0||c===0)return!1;const u=t-i.x,f=e-i.y;return ye(u)/ye(l)+ye(f)/ye(c)<=1}function Xt(t){return!t||!t.width||!t.height||t.width<=0||t.height<=0?0:Math.PI*Math.abs(t.width)*Math.abs(t.height)/4}const Ft={onTouchStart(t,e){return Bt(t,e)},onTouchEnd(t,e){return Ut(t)},onTouchMove(t,e){return Gt(t,e)},onMouseDown(t,e){if(!t.geometry){const{x:n,y:r}=re(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}return t},onMouseUp(t,e){if(t.selection&&t.selection.mode==="SELECTING")return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:o,y:i}=re(e);return{...t,geometry:{...t.geometry,type:Re,x:Math.min(n,o),y:Math.min(r,i),width:Math.abs(o-n),height:Math.abs(i-r)}}}return t}};function Bt(t,e){if(t.selection)return{};{const{x:n,y:r}=re(e);return{...t,selection:{...t.selection,mode:"SELECTING",anchorX:n,anchorY:r}}}}function Ut(t,e){if(t.selection){const{selection:n,geometry:r}=t;if(!r)return{};switch(t.selection.mode){case"SELECTING":return{...t,selection:{...t.selection,showEditor:!0,mode:"EDITING"}}}}return t}function Gt(t,e){if(t.selection&&t.selection.mode==="SELECTING"){const{anchorX:n,anchorY:r}=t.selection,{x:o,y:i}=re(e),l=o-n,c=i-r;return{...t,geometry:{...t.geometry,type:Re,x:l>0?n:o,y:c>0?r:i,width:Math.abs(l),height:Math.abs(c)}}}return t}const he={TYPE:Re,intersects:Ht,area:Xt,methods:Ft},Ve={innerRef:()=>{},onChange:()=>{},onSubmit:()=>{},type:se.TYPE,selectors:[se,ce,he],disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,activeAnnotationComparator:(t,e)=>t===e,renderSelector:({annotation:t})=>{switch(t.geometry.type){case se.TYPE:return p.jsx(Oe,{annotation:t});case ce.TYPE:return p.jsx(Te,{annotation:t});case he.TYPE:return p.jsx(be,{annotation:t});default:return null}},renderEditor:({annotation:t,onChange:e,onSubmit:n})=>p.jsx(Et,{annotation:t,onChange:e,onSubmit:n}),renderHighlight:({key:t,annotation:e,active:n})=>{switch(e.geometry.type){case se.TYPE:return p.jsx(ve,{annotation:e,active:n},t);case ce.TYPE:return p.jsx(Te,{annotation:e},t);case he.TYPE:return p.jsx(be,{annotation:e,active:n},t);default:return null}},renderContent:({key:t,annotation:e})=>p.jsx(Le,{annotation:e},t),renderOverlay:({type:t,annotation:e}={})=>{switch(t){case ce.TYPE:return p.jsx(Me,{children:"Click to Annotate"});default:return p.jsx(Me,{children:"Click and Drag to Annotate"})}},enableEditing:!1,onAnnotationsChange:()=>{console.warn("onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.")},renderDraggableHighlight:({key:t,annotation:e,active:n,isDragging:r,isHovered:o,onDotDragStart:i,onDotDrag:l,onMoveStart:c,onMove:u,onDragEnd:f,allowDelete:m,onRemoveAnnotation:v})=>{var x;if(!((x=e.data)!=null&&x.id)||!o)switch(e.geometry.type){case se.TYPE:return p.jsx(ve,{annotation:e,active:n},t);case ce.TYPE:return p.jsx(Te,{annotation:e},t);case he.TYPE:return p.jsx(be,{annotation:e,active:n},t);default:return null}return e.geometry.type===se.TYPE?p.jsx(Fe,{annotation:e,onDotDragStart:i,onDotDrag:l,onMoveStart:c,onMove:u,onDragEnd:f,isDragging:r,allowDelete:m,onRemoveAnnotation:v}):p.jsx(ve,{annotation:e,active:n},t)}},zt=N.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${Me} {
    opacity: 1;
  }
  touch-action: ${t=>t.$allowTouch?"pinch-zoom":"auto"};
`,Wt=N.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`,Vt=N.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`,Jt=N.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`,Zt=t=>{var Ke;const{selectors:e,...n}=t,r={...Ve,...n,selectors:e!==void 0?e:Ve.selectors},{src:o,alt:i,style:l,className:c,containerRef:u,children:f,annotations:m,type:v,selectors:x,value:h,onChange:y,onSubmit:R,activeAnnotationComparator:b,activeAnnotations:w,disableAnnotation:k,disableSelector:C,renderSelector:L,disableEditor:Y,renderEditor:G,renderHighlight:O,renderContent:j,disableOverlay:S,renderOverlay:M,allowTouch:D,onImageMouseUp:X,onImageMouseDown:W,onImageMouseMove:F,onImageClick:Z,enableEditing:$,onAnnotationsChange:q,renderDraggableHighlight:ne,allowDelete:ie,onRemoveAnnotation:s,relativeMousePos:d,isMouseHovering:T}=r,P=g.useRef(null),B=g.useRef(null),{x:H,y:Q}=d,oe=g.useCallback(a=>{$&&q&&q(a)},[$,q]),E=$?dt(m,oe):null,U=m,z=g.useCallback(a=>{if(a)return x.find(A=>A.TYPE===a)},[x]),ee=v||x&&x[0]&&x[0].TYPE,I=g.useCallback((a,A)=>{if(k)return;const V=z(ee);if(V&&V.methods[a]){const ae=V.methods[a],K=ae(h||{},A);typeof K>"u"?process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(a)} of type ${ee} returned undefined.
             Make sure to explicitly return the previous state or new state.`):y&&y(K)}},[k,z,ee,h,y]),te=g.useCallback(a=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&D&&a.preventDefault(),I("onTouchStart",a)},[D,I]),Je=g.useCallback(a=>{I("onTouchEnd",a)},[I]),Ze=g.useCallback(a=>{d&&typeof d.onTouchMove=="function"&&d.onTouchMove(a),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&D&&a.preventDefault(),I("onTouchMove",a)},[d,D,I]),ke=g.useCallback(a=>{d&&typeof d.onTouchLeave=="function"&&d.onTouchLeave(a)},[d]);g.useEffect(()=>{const a=B.current;if(D&&a)return a.ontouchstart=te,a.ontouchend=Je,a.ontouchmove=Ze,a.ontouchcancel=ke,()=>{a&&(a.ontouchstart=null,a.ontouchend=null,a.ontouchmove=null,a.ontouchcancel=null)};a&&(a.ontouchstart=null,a.ontouchend=null,a.ontouchmove=null,a.ontouchcancel=null)},[D,te,Je,Ze,ke]);const $t=g.useCallback(a=>{P.current=a,d&&typeof d.innerRef=="function"&&d.innerRef(a)},[d]),Qt=g.useCallback(a=>{T&&typeof T.innerRef=="function"&&T.innerRef(a),u&&(typeof u=="function"?u(a):u.current=a)},[T,u]),Kt=g.useCallback((a,A)=>{const V=P.current;return!V||a===null||A===null?void 0:U.map(K=>{const{geometry:le}=K;if(!le)return!1;const ge=z(le.type);return ge&&ge.intersects({x:a,y:A},le,V)?K:!1}).filter(K=>!!K).sort((K,le)=>{const ge=z(K.geometry.type),qe=z(le.geometry.type);return!ge||!qe||!V?0:ge.area(K.geometry,V)-qe.area(le.geometry,V)})[0]},[U,z,P]),qt=g.useCallback(a=>{d&&typeof d.onMouseMove=="function"&&d.onMouseMove(a);const A=a;F&&F(A),I("onMouseMove",A)},[d,F,I]),en=g.useCallback(a=>{d&&typeof d.onMouseLeave=="function"&&d.onMouseLeave(a)},[d]),tn=g.useCallback(a=>{X&&X(a),I("onMouseUp",a)},[X,I]),nn=g.useCallback(a=>{W&&W(a),I("onMouseDown",a)},[W,I]),on=g.useCallback(a=>{Z&&Z(a),I("onClick",a)},[Z,I]),rn=g.useCallback(()=>{R&&h&&R(h)},[R,h]),Se=g.useCallback(a=>{var A;a.key==="Escape"&&y&&((A=h==null?void 0:h.selection)!=null&&A.showEditor||h!=null&&h.geometry)&&y({selection:void 0,geometry:void 0,data:void 0})},[h,y]);g.useEffect(()=>{var a;if((a=h==null?void 0:h.selection)!=null&&a.showEditor)return window.addEventListener("keydown",Se),()=>window.removeEventListener("keydown",Se)},[(Ke=h==null?void 0:h.selection)==null?void 0:Ke.showEditor,Se]);const $e=g.useCallback((a,A)=>w&&!!w.find(ae=>b?b(a,ae):a.data.id===ae)||A===a,[w,b]),Qe=Kt(H,Q);return p.jsxs(zt,{style:l,ref:Qt,onMouseLeave:en,onTouchCancel:ke,onMouseMove:qt,$allowTouch:D,className:c,children:[p.jsx(Wt,{alt:i||"Annotation Image",src:o,draggable:!1,ref:$t}),p.jsxs(Vt,{children:[U.map(a=>{if(!a.data||typeof a.data.id>"u")return console.warn("Annotation is missing data.id, cannot render highlight:",a),null;const A=$e(a,Qe);if($&&E&&!E.isDragging&&(A&&E.draggingId!==a.data.id?E.setDraggingId(a.data.id):!A&&E.draggingId===a.data.id&&E.setDraggingId(null)),$&&ne&&E){const V=E.draggingId===a.data.id,ae=E.isDragging&&E.draggingId===a.data.id;return ne({key:a.data.id,annotation:a,active:A,isDragging:ae,isHovered:V,onDotDragStart:E.handleDotDragStart,onDotDrag:E.handleDotDrag,onMoveStart:E.handleMoveStart,onMove:E.handleMove,onDragEnd:E.handleMouseUp,allowDelete:ie,onRemoveAnnotation:s})}return O({key:a.data.id,annotation:a,active:A})}),!C&&h&&h.geometry&&L&&L({annotation:h})]}),p.jsx(Jt,{"data-testid":"annotation-target",ref:B,onClick:on,onMouseUp:tn,onMouseDown:nn}),!S&&M&&M({type:ee,annotation:h}),U.map(a=>!a.data||typeof a.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render content:",a),null):$e(a,Qe)&&j&&j({key:a.data.id,annotation:a})),!Y&&h&&h.selection&&h.selection.showEditor&&G&&y&&G({annotation:h,onChange:y,onSubmit:rn}),p.jsx("div",{children:f})]})},Ce=ot(st("isMouseHovering"),ut("relativeMousePos"))(Zt);process.env.NODE_ENV!=="production"&&(Ce.displayName="ComposedAnnotation"),_.Annotation=Ce,_.DeleteButton=He,_.DraggableBox=Fe,_.DraggableDot=fe,_.MoveButton=Xe,_.OvalSelector=he,_.PointSelector=ce,_.RectangleSelector=se,_.default=Ce,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
