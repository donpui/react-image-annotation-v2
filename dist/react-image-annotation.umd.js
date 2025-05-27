(function(x,b){typeof exports=="object"&&typeof module<"u"?b(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],b):(x=typeof globalThis<"u"?globalThis:x||self,b(x.ReactImageAnnotation={},x.React,x.styled))})(this,function(x,b,g){"use strict";function Re(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:()=>e[o]})}}return t.default=e,Object.freeze(t)}const oe=Re(b);var k={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Se(){if(re)return _;re=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function o(n,i,s){var a=null;if(s!==void 0&&(a=""+s),i.key!==void 0&&(a=""+i.key),"key"in i){s={};for(var u in i)u!=="key"&&(s[u]=i[u])}else s=i;return i=s.ref,{$$typeof:e,type:n,key:a,ref:i!==void 0?i:null,props:s}}return _.Fragment=t,_.jsx=o,_.jsxs=o,_}var A={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Pe(){return ne||(ne=1,process.env.NODE_ENV!=="production"&&function(){function e(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===lt?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case F:return"Profiler";case M:return"StrictMode";case J:return"Suspense";case L:return"SuspenseList";case ut:return"Activity"}if(typeof r=="object")switch(typeof r.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case B:return"Portal";case V:return(r.displayName||"Context")+".Provider";case W:return(r._context.displayName||"Context")+".Consumer";case q:var c=r.render;return r=r.displayName,r||(r=c.displayName||c.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case v:return c=r.displayName||null,c!==null?c:e(r.type)||"Memo";case xe:c=r._payload,r=r._init;try{return e(r(c))}catch{}}return null}function t(r){return""+r}function o(r){try{t(r);var c=!1}catch{c=!0}if(c){c=console;var h=c.error,d=typeof Symbol=="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object";return h.call(c,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",d),t(r)}}function n(r){if(r===P)return"<>";if(typeof r=="object"&&r!==null&&r.$$typeof===xe)return"<...>";try{var c=e(r);return c?"<"+c+">":"<...>"}catch{return"<...>"}}function i(){var r=Z.A;return r===null?null:r.getOwner()}function s(){return Error("react-stack-top-frame")}function a(r){if(be.call(r,"key")){var c=Object.getOwnPropertyDescriptor(r,"key").get;if(c&&c.isReactWarning)return!1}return r.key!==void 0}function u(r,c){function h(){Te||(Te=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",c))}h.isReactWarning=!0,Object.defineProperty(r,"key",{get:h,configurable:!0})}function f(){var r=e(this.type);return Me[r]||(Me[r]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),r=this.props.ref,r!==void 0?r:null}function m(r,c,h,d,R,y,K,ee){return h=y.ref,r={$$typeof:I,type:r,key:c,props:y,_owner:R},(h!==void 0?h:null)!==null?Object.defineProperty(r,"ref",{enumerable:!1,get:f}):Object.defineProperty(r,"ref",{enumerable:!1,value:null}),r._store={},Object.defineProperty(r._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(r,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(r,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:K}),Object.defineProperty(r,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ee}),Object.freeze&&(Object.freeze(r.props),Object.freeze(r)),r}function E(r,c,h,d,R,y,K,ee){var p=c.children;if(p!==void 0)if(d)if(ht(p)){for(d=0;d<p.length;d++)w(p[d]);Object.freeze&&Object.freeze(p)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else w(p);if(be.call(c,"key")){p=e(r);var C=Object.keys(c).filter(function(ft){return ft!=="key"});d=0<C.length?"{key: someKey, "+C.join(": ..., ")+": ...}":"{key: someKey}",we[p+d]||(C=0<C.length?"{"+C.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,d,p,C,p),we[p+d]=!0)}if(p=null,h!==void 0&&(o(h),p=""+h),a(c)&&(o(c.key),p=""+c.key),"key"in c){h={};for(var te in c)te!=="key"&&(h[te]=c[te])}else h=c;return p&&u(h,typeof r=="function"?r.displayName||r.name||"Unknown":r),m(r,p,y,R,i(),h,K,ee)}function w(r){typeof r=="object"&&r!==null&&r.$$typeof===I&&r._store&&(r._store.validated=1)}var T=b,I=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),V=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ut=Symbol.for("react.activity"),lt=Symbol.for("react.client.reference"),Z=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be=Object.prototype.hasOwnProperty,ht=Array.isArray,Q=console.createTask?console.createTask:function(){return null};T={"react-stack-bottom-frame":function(r){return r()}};var Te,Me={},ye=T["react-stack-bottom-frame"].bind(T,s)(),Ee=Q(n(s)),we={};A.Fragment=P,A.jsx=function(r,c,h,d,R){var y=1e4>Z.recentlyCreatedOwnerStacks++;return E(r,c,h,!1,d,R,y?Error("react-stack-top-frame"):ye,y?Q(n(r)):Ee)},A.jsxs=function(r,c,h,d,R){var y=1e4>Z.recentlyCreatedOwnerStacks++;return E(r,c,h,!0,d,R,y?Error("react-stack-top-frame"):ye,y?Q(n(r)):Ee)}}()),A}var se;function Ce(){return se||(se=1,process.env.NODE_ENV==="production"?k.exports=Se():k.exports=Pe()),k.exports}var l=Ce();function _e(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,o)=>(...n)=>t(o(...n)))}const Ae=({elem:e,e:t})=>{if(!e||typeof e.getBoundingClientRect!="function")return!1;const{pageY:o,pageX:n}=t,{left:i,right:s,bottom:a,top:u}=e.getBoundingClientRect();return n>i&&n<s&&o>u&&o<a},je=(e="isMouseHovering")=>t=>{class o extends b.PureComponent{constructor(s){super(s),this.el=null,this.onMouseMove=a=>{const u=this.el,f={pageX:a.pageX,pageY:a.pageY};this.setState({isHoveringOver:Ae({elem:u,e:f})})},this.state={isHoveringOver:!1}}componentDidMount(){document.addEventListener("mousemove",this.onMouseMove)}componentWillUnmount(){document.removeEventListener("mousemove",this.onMouseMove)}render(){const s={[e]:{innerRef:a=>this.el=a,isHoveringOver:this.state.isHoveringOver}};return b.createElement(t,{...this.props,...s})}}const n=t.displayName||t.name||"Component";return o.displayName=`IsMouseHovering(${n})`,o},ie=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const t=e.currentTarget.getBoundingClientRect(),o=e.clientX-t.x,n=e.clientY-t.y;return{x:o/t.width*100,y:n/t.height*100}},ae=(e,t,o)=>Math.max(e,Math.min(t,o)),ke=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const t=e.targetTouches[0],o=e.currentTarget.getBoundingClientRect(),n=t.pageX-o.left,i=t.pageY-(o.top+window.scrollY);return{x:ae(0,100,n/o.width*100),y:ae(0,100,i/o.height*100)}},S=e=>Ne(e)?Oe(e)?($e(e)&&e.preventDefault(),ke(e)):{x:null}:ie(e),Ne=e=>e.targetTouches!==void 0,Oe=e=>e.targetTouches.length===1,$e=e=>e.type==="touchmove",Ye=(e="relativeMousePos")=>t=>{class o extends b.PureComponent{constructor(s){super(s),this.container=null,this._innerRef=a=>{this.container=a},this._onMouseMove=a=>{const u=ie(a);this.setState(u)},this._onTouchMove=a=>{if(!this.container||a.targetTouches.length!==1)return;const u=a.targetTouches[0],f=this.container.offsetParent;if(!f)return;const m=u.pageX-f.offsetLeft,E=u.pageY-f.offsetTop,w=this.container.width,T=this.container.height;typeof w=="number"&&typeof T=="number"&&w>0&&T>0?this.setState({x:m/w*100,y:E/T*100}):this.setState({x:null,y:null})},this._onMouseLeave=a=>{this.setState({x:null,y:null})},this._onTouchLeave=a=>{this.setState({x:null,y:null})},this.state={x:null,y:null}}render(){const s={innerRef:this._innerRef,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,onTouchMove:this._onTouchMove,onTouchLeave:this._onTouchLeave,x:this.state.x,y:this.state.y},a={[e]:s};return l.jsx(t,{...this.props,...a})}}const n=t.displayName||t.name||"Component";return o.displayName=`withRelativeMousePos(${n})`,o},Ie=g.div`
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
`;function ce(e){const{geometry:t}=e.annotation;return t?l.jsx(Ie,{style:{top:`${t.y}%`,left:`${t.x}%`}}):null}const Le=g.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,De=g.div`
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
`,Xe=({onChange:e,onSubmit:t,onFocus:o,onBlur:n,value:i})=>l.jsxs(b.Fragment,{children:[l.jsx(Le,{children:l.jsx("textarea",{placeholder:"Write description",onFocus:o,onBlur:n,onChange:e,value:i})}),i&&l.jsx(De,{onClick:t,children:"Submit"})]}),Ue=g.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Ge=g.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Ue} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,He=({annotation:e,onChange:t,onSubmit:o,className:n="",style:i={}})=>{var a;const{geometry:s}=e;return s?l.jsx(Ge,{className:n,style:{position:"absolute",left:`${s.x}%`,top:`${s.y+s.height}%`,...i},children:l.jsx(Xe,{onChange:u=>t({...e,data:{...e.data,text:u.target.value}}),onSubmit:o,value:(a=e.data)==null?void 0:a.text})}):null},N=g.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,ze=g.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function ue(e){const{geometry:t}=e.annotation;return t?l.jsxs(ze,{className:e.className,style:e.style,children:[l.jsx(N,{style:{height:`${t.y}%`,width:"100%"}}),l.jsx(N,{style:{top:`${t.y}%`,height:`${t.height}%`,width:`${t.x}%`}}),l.jsx(N,{style:{top:`${t.y}%`,left:`${t.x+t.width}%`,height:`${t.height}%`,width:`${100-(t.x+t.width)}%`}}),l.jsx(N,{style:{top:`${t.y+t.height}%`,height:`${100-(t.y+t.height)}%`,width:"100%"}})]}):null}ue.defaultProps={className:"",style:{}};const Be=g.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function le(e){const{geometry:t}=e.annotation;return t?l.jsx(Be,{className:e.className,style:{position:"absolute",left:`${t.x}%`,top:`${t.y}%`,height:`${t.height}%`,width:`${t.width}%`,boxShadow:e.active?"0 0 1px 1px yellow inset":void 0,...e.style}}):null}le.defaultProps={className:"",style:{}};const Fe=g.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function D(e){const{geometry:t}=e.annotation;return t?l.jsx(Fe,{className:e.className,style:{position:"absolute",left:`${t.x}%`,top:`${t.y}%`,height:`${t.height}%`,width:`${t.width}%`,boxShadow:e.active?"0 0 1px 1px yellow inset":void 0,...e.style}}):null}D.defaultProps={className:"",style:{}};const We=g.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function he(e){const{geometry:t}=e.annotation;return!t||typeof t.x>"u"||typeof t.y>"u"||typeof t.width>"u"||typeof t.height>"u"?null:l.jsx(We,{style:{position:"absolute",left:`${t.x}%`,top:`${t.y+t.height}%`,...e.style},className:e.className,children:e.annotation.data&&e.annotation.data.text})}he.defaultProps={style:{},className:""};const X=g.div`
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
`,fe="RECTANGLE";function Ve({x:e,y:t},o){if(!o)return!1;const n=Math.min(o.x,o.x+o.width),i=Math.max(o.x,o.x+o.width),s=Math.min(o.y,o.y+o.height),a=Math.max(o.y,o.y+o.height);return!(e<n||t<s||e>i||t>a)}function qe(e){if(!e||e.width<=0||e.height<=0)return 0;const t=Math.abs(e.width),o=Math.abs(e.height);return t*o}const Je={onTouchStart(e,t){return de(e,t)},onTouchEnd(e,t){return pe(e)},onTouchMove(e,t){return ge(e,t)},onMouseDown(e,t){return de(e,t)},onMouseUp(e,t){return pe(e)},onMouseMove(e,t){return ge(e,t)}};function de(e,t){if(e.selection)return{};{const{x:o,y:n}=S(t);return{...e,selection:{...e.selection,mode:"SELECTING",anchorX:o,anchorY:n}}}}function pe(e,t){if(e.selection){const{selection:o,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case"SELECTING":return{...e,selection:{...e.selection,showEditor:!0,mode:"EDITING"}}}}return e}function ge(e,t){if(e.selection&&e.selection.mode==="SELECTING"){const{anchorX:o,anchorY:n}=e.selection,{x:i,y:s}=S(t),a=i-o,u=s-n;return{...e,geometry:{...e.geometry,type:fe,x:a>0?o:i,y:u>0?n:s,width:Math.abs(a),height:Math.abs(u)}}}return e}const j={TYPE:fe,intersects:Ve,area:qe,methods:Je},ve="POINT";function Ze({x:e,y:t},o,n){if(!o)return!1;const i=Math.abs(e-o.x),s=Math.abs(t-o.y);return i===0&&s===0}function Qe(e,t){return 0}const O={TYPE:ve,intersects:Ze,area:Qe,methods:{onClick(e,t){return e.geometry?{}:{...e,selection:{...e.selection,showEditor:!0,mode:"EDITING"},geometry:{...e.geometry,...S(t),width:0,height:0,type:ve}}}}},$=e=>Math.pow(e,2),U="OVAL";function Ke({x:e,y:t},o){if(!o||!o.width||!o.height)return!1;const n=Math.abs(o.width),i=Math.abs(o.height),s={x:o.x+n/2,y:o.y+i/2},a=n/2,u=i/2;if(a===0||u===0)return!1;const f=e-s.x,m=t-s.y;return $(f)/$(a)+$(m)/$(u)<=1}function et(e){return!e||!e.width||!e.height||e.width<=0||e.height<=0?0:Math.PI*Math.abs(e.width)*Math.abs(e.height)/4}const tt={onTouchStart(e,t){return ot(e,t)},onTouchEnd(e,t){return rt(e)},onTouchMove(e,t){return nt(e,t)},onMouseDown(e,t){if(!e.geometry){const{x:o,y:n}=S(t);return{...e,selection:{...e.selection,mode:"SELECTING",anchorX:o,anchorY:n}}}return e},onMouseUp(e,t){if(e.selection&&e.selection.mode==="SELECTING")return{...e,selection:{...e.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(e,t){if(e.selection&&e.selection.mode==="SELECTING"){const{anchorX:o,anchorY:n}=e.selection,{x:i,y:s}=S(t);return{...e,geometry:{...e.geometry,type:U,x:Math.min(o,i),y:Math.min(n,s),width:Math.abs(i-o),height:Math.abs(s-n)}}}return e}};function ot(e,t){if(e.selection)return{};{const{x:o,y:n}=S(t);return{...e,selection:{...e.selection,mode:"SELECTING",anchorX:o,anchorY:n}}}}function rt(e,t){if(e.selection){const{selection:o,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case"SELECTING":return{...e,selection:{...e.selection,showEditor:!0,mode:"EDITING"}}}}return e}function nt(e,t){if(e.selection&&e.selection.mode==="SELECTING"){const{anchorX:o,anchorY:n}=e.selection,{x:i,y:s}=S(t),a=i-o,u=s-n;return{...e,geometry:{...e.geometry,type:U,x:a>0?o:i,y:u>0?n:s,width:Math.abs(a),height:Math.abs(u)}}}return e}const G={TYPE:U,intersects:Ke,area:et,methods:tt},me={innerRef:()=>{},onChange:()=>{},onSubmit:()=>{},type:j.TYPE,selectors:[j,O,G],disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,activeAnnotationComparator:(e,t)=>e===t,renderSelector:({annotation:e})=>{switch(e.geometry.type){case j.TYPE:return l.jsx(ue,{annotation:e});case O.TYPE:return l.jsx(ce,{annotation:e});case G.TYPE:return l.jsx(D,{annotation:e});default:return null}},renderEditor:({annotation:e,onChange:t,onSubmit:o})=>l.jsx(He,{annotation:e,onChange:t,onSubmit:o}),renderHighlight:({key:e,annotation:t,active:o})=>{switch(t.geometry.type){case j.TYPE:return l.jsx(le,{annotation:t,active:o},e);case O.TYPE:return l.jsx(ce,{annotation:t,active:o},e);case G.TYPE:return l.jsx(D,{annotation:t,active:o},e);default:return null}},renderContent:({key:e,annotation:t})=>l.jsx(he,{annotation:t},e),renderOverlay:({type:e,annotation:t}={})=>{switch(e){case O.TYPE:return l.jsx(X,{children:"Click to Annotate"});default:return l.jsx(X,{children:"Click and Drag to Annotate"})}}},st=g.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${X} {
    opacity: 1;
  }
  touch-action: ${e=>e.allowTouch?"pinch-zoom":"auto"};
`,it=g.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`,at=g.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`,ct=g.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`,Y=class Y extends oe.Component{constructor(){super(...arguments),this.container=null,this.targetRef=oe.createRef(),this.addTargetTouchEventListeners=()=>{const t=this.targetRef.current;t&&(t.ontouchstart=this.onTouchStart,t.ontouchend=this.onTouchEnd,t.ontouchmove=this.onTargetTouchMove,t.ontouchcancel=this.onTargetTouchLeave)},this.removeTargetTouchEventListeners=()=>{const t=this.targetRef.current;t&&(t.ontouchstart=null,t.ontouchend=null,t.ontouchmove=null,t.ontouchcancel=null)},this.setImageRef=t=>{this.container=t,this.props.relativeMousePos&&typeof this.props.relativeMousePos.innerRef=="function"&&this.props.relativeMousePos.innerRef(t)},this.setContainerRef=t=>{this.props.isMouseHovering&&typeof this.props.isMouseHovering.innerRef=="function"&&this.props.isMouseHovering.innerRef(t),this.props.containerRef&&(typeof this.props.containerRef=="function"?this.props.containerRef(t):this.props.containerRef.current=t)},this.getSelectorByType=t=>{if(t)return this.props.selectors.find(o=>o.TYPE===t)},this.getTopAnnotationAt=(t,o)=>{const{annotations:n}=this.props,{container:i,getSelectorByType:s}=this;return!i||t===null||o===null?void 0:n.map(u=>{const{geometry:f}=u;if(!f)return!1;const m=s(f.type);return m&&m.intersects({x:t,y:o},f,i)?u:!1}).filter(u=>!!u).sort((u,f)=>{const m=s(u.geometry.type),E=s(f.geometry.type);return!m||!E||!this.container?0:m.area(u.geometry,this.container)-E.area(f.geometry,this.container)})[0]},this.onTargetMouseMove=t=>{this.props.relativeMousePos&&typeof this.props.relativeMousePos.onMouseMove=="function"&&this.props.relativeMousePos.onMouseMove(t);const o=t;this.props.onImageMouseMove&&this.props.onImageMouseMove(o),this.callSelectorMethod("onMouseMove",o)},this.onTargetTouchMove=t=>{this.props.relativeMousePos&&typeof this.props.relativeMousePos.onTouchMove=="function"&&this.props.relativeMousePos.onTouchMove(t),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&this.props.allowTouch&&t.preventDefault(),this.callSelectorMethod("onTouchMove",t)},this.onTargetMouseLeave=t=>{this.props.relativeMousePos&&typeof this.props.relativeMousePos.onMouseLeave=="function"&&this.props.relativeMousePos.onMouseLeave(t)},this.onTargetTouchLeave=t=>{this.props.relativeMousePos&&typeof this.props.relativeMousePos.onTouchLeave=="function"&&this.props.relativeMousePos.onTouchLeave(t)},this.onMouseUp=t=>{this.props.onImageMouseUp&&this.props.onImageMouseUp(t),this.callSelectorMethod("onMouseUp",t)},this.onMouseDown=t=>{this.props.onImageMouseDown&&this.props.onImageMouseDown(t),this.callSelectorMethod("onMouseDown",t)},this.onClick=t=>{this.props.onImageClick&&this.props.onImageClick(t),this.callSelectorMethod("onClick",t)},this.onTouchStart=t=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&this.props.allowTouch&&t.preventDefault(),this.callSelectorMethod("onTouchStart",t)},this.onTouchEnd=t=>this.callSelectorMethod("onTouchEnd",t),this.onSubmit=()=>{this.props.onSubmit&&this.props.value&&this.props.onSubmit(this.props.value)},this.callSelectorMethod=(t,o)=>{if(this.props.disableAnnotation)return;const n=this.getSelectorByType(this.props.type);if(n&&n.methods[t]){const i=n.methods[t],s=i(this.props.value||{},o);typeof s>"u"?process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(t)} of type ${this.props.type} returned undefined.
             Make sure to explicitly return the previous state or new state.`):this.props.onChange&&this.props.onChange(s)}},this.shouldAnnotationBeActive=(t,o)=>this.props.activeAnnotations&&!!this.props.activeAnnotations.find(i=>this.props.activeAnnotationComparator?this.props.activeAnnotationComparator(t,i):t.data.id===i)||o===t}componentDidMount(){this.props.allowTouch&&this.addTargetTouchEventListeners(),this.props.containerRef&&this.props.containerRef}componentDidUpdate(t){this.props.allowTouch!==t.allowTouch&&(this.props.allowTouch?this.addTargetTouchEventListeners():this.removeTargetTouchEventListeners())}componentWillUnmount(){this.props.allowTouch&&this.targetRef.current&&this.removeTargetTouchEventListeners()}render(){const{props:t}=this,{isHoveringOver:o}=t.isMouseHovering,{x:n,y:i}=t.relativeMousePos,{renderHighlight:s,renderContent:a,renderSelector:u,renderEditor:f,renderOverlay:m,allowTouch:E,src:w,alt:T,style:I,className:B,annotations:P,value:M,disableSelector:F,disableEditor:W,disableOverlay:V,type:q,children:J}=t,L=this.getTopAnnotationAt(n,i);return l.jsxs(st,{style:I,ref:this.setContainerRef,onMouseLeave:this.onTargetMouseLeave,onTouchCancel:this.onTargetTouchLeave,onMouseMove:this.onTargetMouseMove,allowTouch:E,className:B,children:[l.jsx(it,{alt:T||"Annotation Image",src:w,draggable:!1,ref:this.setImageRef}),l.jsxs(at,{children:[P.map(v=>!v.data||typeof v.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render highlight:",v),null):s({key:v.data.id,annotation:v,active:this.shouldAnnotationBeActive(v,L)})),!F&&M&&M.geometry&&u&&u({annotation:M})]}),l.jsx(ct,{"data-testid":"annotation-target",ref:this.targetRef,onClick:this.onClick,onMouseUp:this.onMouseUp,onMouseDown:this.onMouseDown}),!V&&m&&m({type:q,annotation:M}),P.map(v=>!v.data||typeof v.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render content:",v),null):this.shouldAnnotationBeActive(v,L)&&a&&a({key:v.data.id,annotation:v})),!W&&M&&M.selection&&M.selection.showEditor&&f&&t.onChange&&t.onSubmit&&f({annotation:M,onChange:t.onChange,onSubmit:this.onSubmit}),l.jsx("div",{children:J})]})}};Y.displayName="AnnotationClass",Y.defaultProps={...me,selectors:me.selectors};let H=Y;const z=_e(je("isMouseHovering"),Ye("relativeMousePos"))(H);process.env.NODE_ENV!=="production"&&(z.displayName="ComposedAnnotation"),x.Annotation=z,x.RectangleSelector=j,x.default=z,Object.defineProperties(x,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
