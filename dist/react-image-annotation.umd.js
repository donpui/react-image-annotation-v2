(function(R,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],l):(R=typeof globalThis<"u"?globalThis:R||self,l(R.ReactImageAnnotation={},R.React,R.styled))})(this,function(R,l,b){"use strict";var ee={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function Ye(){if(ve)return U;ve=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(s,i,c){var u=null;if(c!==void 0&&(u=""+c),i.key!==void 0&&(u=""+i.key),"key"in i){c={};for(var d in i)d!=="key"&&(c[d]=i[d])}else c=i;return i=c.ref,{$$typeof:e,type:s,key:u,ref:i!==void 0?i:null,props:c}}return U.Fragment=t,U.jsx=r,U.jsxs=r,U}var F={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be;function Ie(){return be||(be=1,process.env.NODE_ENV!=="production"&&function(){function e(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ce?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case A:return"Fragment";case B:return"Profiler";case W:return"StrictMode";case pe:return"Suspense";case ie:return"SuspenseList";case me:return"Activity"}if(typeof n=="object")switch(typeof n.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),n.$$typeof){case O:return"Portal";case he:return(n.displayName||"Context")+".Provider";case oe:return(n._context.displayName||"Context")+".Consumer";case se:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ge:return a=n.displayName||null,a!==null?a:e(n.type)||"Memo";case V:a=n._payload,n=n._init;try{return e(n(a))}catch{}}return null}function t(n){return""+n}function r(n){try{t(n);var a=!1}catch{a=!0}if(a){a=console;var h=a.error,g=typeof Symbol=="function"&&Symbol.toStringTag&&n[Symbol.toStringTag]||n.constructor.name||"Object";return h.call(a,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",g),t(n)}}function s(n){if(n===A)return"<>";if(typeof n=="object"&&n!==null&&n.$$typeof===V)return"<...>";try{var a=e(n);return a?"<"+a+">":"<...>"}catch{return"<...>"}}function i(){var n=S.A;return n===null?null:n.getOwner()}function c(){return Error("react-stack-top-frame")}function u(n){if(I.call(n,"key")){var a=Object.getOwnPropertyDescriptor(n,"key").get;if(a&&a.isReactWarning)return!1}return n.key!==void 0}function d(n,a){function h(){L||(L=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",a))}h.isReactWarning=!0,Object.defineProperty(n,"key",{get:h,configurable:!0})}function E(){var n=e(this.type);return p[n]||(p[n]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),n=this.props.ref,n!==void 0?n:null}function M(n,a,h,g,m,w,X,H){return h=w.ref,n={$$typeof:v,type:n,key:a,props:w,_owner:m},(h!==void 0?h:null)!==null?Object.defineProperty(n,"ref",{enumerable:!1,get:E}):Object.defineProperty(n,"ref",{enumerable:!1,value:null}),n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(n,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(n,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:X}),Object.defineProperty(n,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:H}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n}function C(n,a,h,g,m,w,X,H){var x=a.children;if(x!==void 0)if(g)if(q(x)){for(g=0;g<x.length;g++)T(x[g]);Object.freeze&&Object.freeze(x)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else T(x);if(I.call(a,"key")){x=e(n);var N=Object.keys(a).filter(function(xe){return xe!=="key"});g=0<N.length?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}",J[x+g]||(N=0<N.length?"{"+N.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,g,x,N,x),J[x+g]=!0)}if(x=null,h!==void 0&&(r(h),x=""+h),u(a)&&(r(a.key),x=""+a.key),"key"in a){h={};for(var Z in a)Z!=="key"&&(h[Z]=a[Z])}else h=a;return x&&d(h,typeof n=="function"?n.displayName||n.name||"Unknown":n),M(n,x,w,m,i(),h,X,H)}function T(n){typeof n=="object"&&n!==null&&n.$$typeof===v&&n._store&&(n._store.validated=1)}var y=l,v=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),oe=Symbol.for("react.consumer"),he=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),ce=Symbol.for("react.client.reference"),S=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.prototype.hasOwnProperty,q=Array.isArray,Y=console.createTask?console.createTask:function(){return null};y={"react-stack-bottom-frame":function(n){return n()}};var L,p={},j=y["react-stack-bottom-frame"].bind(y,c)(),D=Y(s(c)),J={};F.Fragment=A,F.jsx=function(n,a,h,g,m){var w=1e4>S.recentlyCreatedOwnerStacks++;return C(n,a,h,!1,g,m,w?Error("react-stack-top-frame"):j,w?Y(s(n)):D)},F.jsxs=function(n,a,h,g,m){var w=1e4>S.recentlyCreatedOwnerStacks++;return C(n,a,h,!0,g,m,w?Error("react-stack-top-frame"):j,w?Y(s(n)):D)}}()),F}var Ee;function Le(){return Ee||(Ee=1,process.env.NODE_ENV==="production"?ee.exports=Ye():ee.exports=Ie()),ee.exports}var f=Le();function De(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...s)=>t(r(...s)))}const Xe=({elem:e,e:t})=>{if(!e||typeof e.getBoundingClientRect!="function")return!1;const{pageY:r,pageX:s}=t,{left:i,right:c,bottom:u,top:d}=e.getBoundingClientRect();return s>i&&s<c&&r>d&&r<u},He=(e="isMouseHovering")=>t=>{const r=i=>{const[c,u]=l.useState(!1),d=l.useRef(null);l.useEffect(()=>{const M=C=>{const T=d.current,y={pageX:C.pageX,pageY:C.pageY};u(Xe({elem:T,e:y}))};return document.addEventListener("mousemove",M),()=>{document.removeEventListener("mousemove",M)}},[]);const E={[e]:{innerRef:M=>d.current=M,isHoveringOver:c}};return l.createElement(t,{...i,...E})},s=t.displayName||t.name||"Component";return r.displayName=`IsMouseHovering(${s})`,r},Te=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const t=e.currentTarget.getBoundingClientRect(),r=e.clientX-t.x,s=e.clientY-t.y;return{x:r/t.width*100,y:s/t.height*100}},ye=(e,t,r)=>Math.max(e,Math.min(t,r)),Ge=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const t=e.targetTouches[0],r=e.currentTarget.getBoundingClientRect(),s=t.pageX-r.left,i=t.pageY-(r.top+window.scrollY);return{x:ye(0,100,s/r.width*100),y:ye(0,100,i/r.height*100)}},$=e=>Ue(e)?Fe(e)?(ze(e)&&e.preventDefault(),Ge(e)):{x:null}:Te(e),Ue=e=>e.targetTouches!==void 0,Fe=e=>e.targetTouches.length===1,ze=e=>e.type==="touchmove",We=(e="relativeMousePos")=>t=>{class r extends l.PureComponent{constructor(c){super(c),this.container=null,this._innerRef=u=>{this.container=u},this._onMouseMove=u=>{const d=Te(u);this.setState(d)},this._onTouchMove=u=>{if(!this.container||u.targetTouches.length!==1)return;const d=u.targetTouches[0],E=this.container.offsetParent;if(!E)return;const M=d.pageX-E.offsetLeft,C=d.pageY-E.offsetTop,T=this.container.width,y=this.container.height;typeof T=="number"&&typeof y=="number"&&T>0&&y>0?this.setState({x:M/T*100,y:C/y*100}):this.setState({x:null,y:null})},this._onMouseLeave=u=>{this.setState({x:null,y:null})},this._onTouchLeave=u=>{this.setState({x:null,y:null})},this.state={x:null,y:null}}render(){const c={innerRef:this._innerRef,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,onTouchMove:this._onTouchMove,onTouchLeave:this._onTouchLeave,x:this.state.x,y:this.state.y},u={[e]:c};return l.createElement(t,{...this.props,...u})}}const s=t.displayName||t.name||"Component";return r.displayName=`withRelativeMousePos(${s})`,r},Be=b.div`
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
`;function we(e){const{geometry:t}=e.annotation;return t?f.jsx(Be,{style:{top:`${t.y}%`,left:`${t.x}%`}}):null}const Ve=b.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,qe=b.div`
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
`,Je=({onChange:e,onSubmit:t,onFocus:r,onBlur:s,value:i})=>f.jsxs(l.Fragment,{children:[f.jsx(Ve,{children:f.jsx("textarea",{placeholder:"Write description",onFocus:r,onBlur:s,onChange:e,value:i})}),i&&f.jsx(qe,{onClick:t,children:"Submit"})]}),Ze=b.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Qe=b.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Ze} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,Ke=({annotation:e,onChange:t,onSubmit:r,className:s="",style:i={}})=>{var u;const{geometry:c}=e;return c?f.jsx(Qe,{className:s,style:{position:"absolute",left:`${c.x}%`,top:`${c.y+c.height}%`,...i},children:f.jsx(Je,{onChange:d=>t({...e,data:{...e.data,text:d.target.value}}),onSubmit:r,value:(u=e.data)==null?void 0:u.text})}):null},te=b.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,et=b.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Me(e){const{geometry:t}=e.annotation;return t?f.jsxs(et,{className:e.className,style:e.style,children:[f.jsx(te,{style:{height:`${t.y}%`,width:"100%"}}),f.jsx(te,{style:{top:`${t.y}%`,height:`${t.height}%`,width:`${t.x}%`}}),f.jsx(te,{style:{top:`${t.y}%`,left:`${t.x+t.width}%`,height:`${t.height}%`,width:`${100-(t.x+t.width)}%`}}),f.jsx(te,{style:{top:`${t.y+t.height}%`,height:`${100-(t.y+t.height)}%`,width:"100%"}})]}):null}Me.defaultProps={className:"",style:{}};const tt=b.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Ce(e){const{geometry:t}=e.annotation;return t?f.jsx(tt,{className:e.className,style:{position:"absolute",left:`${t.x}%`,top:`${t.y}%`,height:`${t.height}%`,width:`${t.width}%`,boxShadow:e.active?"0 0 1px 1px yellow inset":void 0,...e.style}}):null}Ce.defaultProps={className:"",style:{}};const nt=b.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function ae(e){const{geometry:t}=e.annotation;return t?f.jsx(nt,{className:e.className,style:{position:"absolute",left:`${t.x}%`,top:`${t.y}%`,height:`${t.height}%`,width:`${t.width}%`,boxShadow:e.active?"0 0 1px 1px yellow inset":void 0,...e.style}}):null}ae.defaultProps={className:"",style:{}};const rt=b.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function ke(e){const{geometry:t}=e.annotation;return!t||typeof t.x>"u"||typeof t.y>"u"||typeof t.width>"u"||typeof t.height>"u"?null:f.jsx(rt,{style:{position:"absolute",left:`${t.x}%`,top:`${t.y+t.height}%`,...e.style},className:e.className,children:e.annotation.data&&e.annotation.data.text})}ke.defaultProps={style:{},className:""};const ue=b.div`
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
`,Se="RECTANGLE";function ot({x:e,y:t},r){if(!r)return!1;const s=Math.min(r.x,r.x+r.width),i=Math.max(r.x,r.x+r.width),c=Math.min(r.y,r.y+r.height),u=Math.max(r.y,r.y+r.height);return!(e<s||t<c||e>i||t>u)}function st(e){if(!e||e.width<=0||e.height<=0)return 0;const t=Math.abs(e.width),r=Math.abs(e.height);return t*r}const it={onTouchStart(e,t){return Re(e,t)},onTouchEnd(e,t){return Pe(e)},onTouchMove(e,t){return _e(e,t)},onMouseDown(e,t){return Re(e,t)},onMouseUp(e,t){return Pe(e)},onMouseMove(e,t){return _e(e,t)}};function Re(e,t){if(e.selection)return{};{const{x:r,y:s}=$(t);return{...e,selection:{...e.selection,mode:"SELECTING",anchorX:r,anchorY:s}}}}function Pe(e,t){if(e.selection){const{selection:r,geometry:s}=e;if(!s)return{};switch(e.selection.mode){case"SELECTING":return{...e,selection:{...e.selection,showEditor:!0,mode:"EDITING"}}}}return e}function _e(e,t){if(e.selection&&e.selection.mode==="SELECTING"){const{anchorX:r,anchorY:s}=e.selection,{x:i,y:c}=$(t),u=i-r,d=c-s;return{...e,geometry:{...e.geometry,type:Se,x:u>0?r:i,y:d>0?s:c,width:Math.abs(u),height:Math.abs(d)}}}return e}const z={TYPE:Se,intersects:ot,area:st,methods:it},Ae="POINT";function ct({x:e,y:t},r,s){if(!r)return!1;const i=Math.abs(e-r.x),c=Math.abs(t-r.y);return i===0&&c===0}function at(e,t){return 0}const ne={TYPE:Ae,intersects:ct,area:at,methods:{onClick(e,t){return e.geometry?{}:{...e,selection:{...e.selection,showEditor:!0,mode:"EDITING"},geometry:{...e.geometry,...$(t),width:0,height:0,type:Ae}}}}},re=e=>Math.pow(e,2),le="OVAL";function ut({x:e,y:t},r){if(!r||!r.width||!r.height)return!1;const s=Math.abs(r.width),i=Math.abs(r.height),c={x:r.x+s/2,y:r.y+i/2},u=s/2,d=i/2;if(u===0||d===0)return!1;const E=e-c.x,M=t-c.y;return re(E)/re(u)+re(M)/re(d)<=1}function lt(e){return!e||!e.width||!e.height||e.width<=0||e.height<=0?0:Math.PI*Math.abs(e.width)*Math.abs(e.height)/4}const ft={onTouchStart(e,t){return dt(e,t)},onTouchEnd(e,t){return ht(e)},onTouchMove(e,t){return pt(e,t)},onMouseDown(e,t){if(!e.geometry){const{x:r,y:s}=$(t);return{...e,selection:{...e.selection,mode:"SELECTING",anchorX:r,anchorY:s}}}return e},onMouseUp(e,t){if(e.selection&&e.selection.mode==="SELECTING")return{...e,selection:{...e.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(e,t){if(e.selection&&e.selection.mode==="SELECTING"){const{anchorX:r,anchorY:s}=e.selection,{x:i,y:c}=$(t);return{...e,geometry:{...e.geometry,type:le,x:Math.min(r,i),y:Math.min(s,c),width:Math.abs(i-r),height:Math.abs(c-s)}}}return e}};function dt(e,t){if(e.selection)return{};{const{x:r,y:s}=$(t);return{...e,selection:{...e.selection,mode:"SELECTING",anchorX:r,anchorY:s}}}}function ht(e,t){if(e.selection){const{selection:r,geometry:s}=e;if(!s)return{};switch(e.selection.mode){case"SELECTING":return{...e,selection:{...e.selection,showEditor:!0,mode:"EDITING"}}}}return e}function pt(e,t){if(e.selection&&e.selection.mode==="SELECTING"){const{anchorX:r,anchorY:s}=e.selection,{x:i,y:c}=$(t),u=i-r,d=c-s;return{...e,geometry:{...e.geometry,type:le,x:u>0?r:i,y:d>0?s:c,width:Math.abs(u),height:Math.abs(d)}}}return e}const fe={TYPE:le,intersects:ut,area:lt,methods:ft},je={innerRef:()=>{},onChange:()=>{},onSubmit:()=>{},type:z.TYPE,selectors:[z,ne,fe],disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,activeAnnotationComparator:(e,t)=>e===t,renderSelector:({annotation:e})=>{switch(e.geometry.type){case z.TYPE:return f.jsx(Me,{annotation:e});case ne.TYPE:return f.jsx(we,{annotation:e});case fe.TYPE:return f.jsx(ae,{annotation:e});default:return null}},renderEditor:({annotation:e,onChange:t,onSubmit:r})=>f.jsx(Ke,{annotation:e,onChange:t,onSubmit:r}),renderHighlight:({key:e,annotation:t,active:r})=>{switch(t.geometry.type){case z.TYPE:return f.jsx(Ce,{annotation:t,active:r},e);case ne.TYPE:return f.jsx(we,{annotation:t,active:r},e);case fe.TYPE:return f.jsx(ae,{annotation:t,active:r},e);default:return null}},renderContent:({key:e,annotation:t})=>f.jsx(ke,{annotation:t},e),renderOverlay:({type:e,annotation:t}={})=>{switch(e){case ne.TYPE:return f.jsx(ue,{children:"Click to Annotate"});default:return f.jsx(ue,{children:"Click and Drag to Annotate"})}}},gt=b.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${ue} {
    opacity: 1;
  }
  touch-action: ${e=>e.$allowTouch?"pinch-zoom":"auto"};
`,mt=b.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`,xt=b.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`,vt=b.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`,bt=e=>{const{selectors:t,...r}=e,s={...je,...r,selectors:t!==void 0?t:je.selectors},{src:i,alt:c,style:u,className:d,containerRef:E,children:M,annotations:C,type:T,selectors:y,value:v,onChange:O,onSubmit:A,activeAnnotationComparator:W,activeAnnotations:B,disableAnnotation:oe,disableSelector:he,renderSelector:se,disableEditor:pe,renderEditor:ie,renderHighlight:ge,renderContent:V,disableOverlay:me,renderOverlay:ce,allowTouch:S,onImageMouseUp:I,onImageMouseDown:q,onImageMouseMove:Y,onImageClick:L,relativeMousePos:p,isMouseHovering:j}=s,D=l.useRef(null),J=l.useRef(null),{isHoveringOver:n}=j,{x:a,y:h}=p,g=l.useCallback(o=>{if(o)return y.find(k=>k.TYPE===o)},[y]),m=l.useCallback((o,k)=>{if(oe)return;const P=g(T);if(P&&P.methods[o]){const Q=P.methods[o],_=Q(v||{},k);typeof _>"u"?process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(o)} of type ${T} returned undefined.
             Make sure to explicitly return the previous state or new state.`):O&&O(_)}},[oe,g,T,v,O]),w=l.useCallback(o=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&S&&o.preventDefault(),m("onTouchStart",o)},[S,m]),X=l.useCallback(o=>{m("onTouchEnd",o)},[m]),H=l.useCallback(o=>{p&&typeof p.onTouchMove=="function"&&p.onTouchMove(o),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&S&&o.preventDefault(),m("onTouchMove",o)},[p,S,m]),x=l.useCallback(o=>{p&&typeof p.onTouchLeave=="function"&&p.onTouchLeave(o)},[p]);l.useEffect(()=>{const o=J.current;if(S&&o)return o.ontouchstart=w,o.ontouchend=X,o.ontouchmove=H,o.ontouchcancel=x,()=>{o&&(o.ontouchstart=null,o.ontouchend=null,o.ontouchmove=null,o.ontouchcancel=null)};o&&(o.ontouchstart=null,o.ontouchend=null,o.ontouchmove=null,o.ontouchcancel=null)},[S,w,X,H,x]);const N=l.useCallback(o=>{D.current=o,p&&typeof p.innerRef=="function"&&p.innerRef(o)},[p]),Z=l.useCallback(o=>{j&&typeof j.innerRef=="function"&&j.innerRef(o),E&&(typeof E=="function"?E(o):E.current=o)},[j,E]),xe=l.useCallback((o,k)=>{const P=D.current;return!P||o===null||k===null?void 0:C.map(_=>{const{geometry:G}=_;if(!G)return!1;const K=g(G.type);return K&&K.intersects({x:o,y:k},G,P)?_:!1}).filter(_=>!!_).sort((_,G)=>{const K=g(_.geometry.type),Oe=g(G.geometry.type);return!K||!Oe||!P?0:K.area(_.geometry,P)-Oe.area(G.geometry,P)})[0]},[C,g,D]),Et=l.useCallback(o=>{p&&typeof p.onMouseMove=="function"&&p.onMouseMove(o);const k=o;Y&&Y(k),m("onMouseMove",k)},[p,Y,m]),Tt=l.useCallback(o=>{p&&typeof p.onMouseLeave=="function"&&p.onMouseLeave(o)},[p]),yt=l.useCallback(o=>{I&&I(o),m("onMouseUp",o)},[I,m]),wt=l.useCallback(o=>{q&&q(o),m("onMouseDown",o)},[q,m]),Mt=l.useCallback(o=>{L&&L(o),m("onClick",o)},[L,m]),Ct=l.useCallback(()=>{A&&v&&A(v)},[A,v]),Ne=l.useCallback((o,k)=>B&&!!B.find(Q=>W?W(o,Q):o.data.id===Q)||k===o,[B,W]),$e=xe(a,h);return f.jsxs(gt,{style:u,ref:Z,onMouseLeave:Tt,onTouchCancel:x,onMouseMove:Et,$allowTouch:S,className:d,children:[f.jsx(mt,{alt:c||"Annotation Image",src:i,draggable:!1,ref:N}),f.jsxs(xt,{children:[C.map(o=>!o.data||typeof o.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render highlight:",o),null):ge({key:o.data.id,annotation:o,active:Ne(o,$e)})),!he&&v&&v.geometry&&se&&se({annotation:v})]}),f.jsx(vt,{"data-testid":"annotation-target",ref:J,onClick:Mt,onMouseUp:yt,onMouseDown:wt}),!me&&ce&&ce({type:T,annotation:v}),C.map(o=>!o.data||typeof o.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render content:",o),null):Ne(o,$e)&&V&&V({key:o.data.id,annotation:o})),!pe&&v&&v.selection&&v.selection.showEditor&&ie&&O&&A&&ie({annotation:v,onChange:O,onSubmit:Ct}),f.jsx("div",{children:M})]})},de=De(He("isMouseHovering"),We("relativeMousePos"))(bt);process.env.NODE_ENV!=="production"&&(de.displayName="ComposedAnnotation"),R.Annotation=de,R.RectangleSelector=z,R.default=de,Object.defineProperties(R,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
