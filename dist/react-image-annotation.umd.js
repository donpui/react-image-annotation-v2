(function(O,j){typeof exports=="object"&&typeof module<"u"?j(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],j):(O=typeof globalThis<"u"?globalThis:O||self,j(O.ReactImageAnnotation={},O.React,O.styled))})(this,function(O,j,w){"use strict";function at(r){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const o in r)if(o!=="default"){const i=Object.getOwnPropertyDescriptor(r,o);Object.defineProperty(t,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}return t.default=r,Object.freeze(t)}const Te=at(j);var oe={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function ut(){if(Ee)return U;Ee=1;var r=j,t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(f,p,T){var y,M={},C=null,Y=null;T!==void 0&&(C=""+T),p.key!==void 0&&(C=""+p.key),p.ref!==void 0&&(Y=p.ref);for(y in p)i.call(p,y)&&!u.hasOwnProperty(y)&&(M[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)M[y]===void 0&&(M[y]=p[y]);return{$$typeof:t,type:f,key:C,ref:Y,props:M,_owner:c.current}}return U.Fragment=o,U.jsx=l,U.jsxs=l,U}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function ct(){return we||(we=1,process.env.NODE_ENV!=="production"&&function(){var r=j,t=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),J=Symbol.iterator,K="@@iterator";function $(e){if(e===null||typeof e!="object")return null;var n=J&&e[J]||e[K];return typeof n=="function"?n:null}var k=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(e){{for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];le("error",e,s)}}function le(e,n,s){{var a=k.ReactDebugCurrentFrame,g=a.getStackAddendum();g!==""&&(n+="%s",s=s.concat([g]));var m=s.map(function(d){return String(d)});m.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,m)}}var fe=!1,he=!1,Z=!1,R=!1,Bt=!1,De;De=Symbol.for("react.module.reference");function Vt(e){return!!(typeof e=="string"||typeof e=="function"||e===i||e===u||Bt||e===c||e===T||e===y||R||e===Y||fe||he||Z||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===M||e.$$typeof===l||e.$$typeof===f||e.$$typeof===p||e.$$typeof===De||e.getModuleId!==void 0))}function Gt(e,n,s){var a=e.displayName;if(a)return a;var g=n.displayName||n.name||"";return g!==""?s+"("+g+")":s}function Le(e){return e.displayName||"Context"}function A(e){if(e==null)return null;if(typeof e.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case i:return"Fragment";case o:return"Portal";case u:return"Profiler";case c:return"StrictMode";case T:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case f:var n=e;return Le(n)+".Consumer";case l:var s=e;return Le(s._context)+".Provider";case p:return Gt(e,e.render,"ForwardRef");case M:var a=e.displayName||null;return a!==null?a:A(e.type)||"Memo";case C:{var g=e,m=g._payload,d=g._init;try{return A(d(m))}catch{return null}}}return null}var D=Object.assign,B=0,Ye,Ne,Fe,Ue,We,Xe,Be;function Ve(){}Ve.__reactDisabledLog=!0;function Ht(){{if(B===0){Ye=console.log,Ne=console.info,Fe=console.warn,Ue=console.error,We=console.group,Xe=console.groupCollapsed,Be=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}B++}}function zt(){{if(B--,B===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:Ye}),info:D({},e,{value:Ne}),warn:D({},e,{value:Fe}),error:D({},e,{value:Ue}),group:D({},e,{value:We}),groupCollapsed:D({},e,{value:Xe}),groupEnd:D({},e,{value:Be})})}B<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var de=k.ReactCurrentDispatcher,pe;function Q(e,n,s){{if(pe===void 0)try{throw Error()}catch(g){var a=g.stack.trim().match(/\n( *(at )?)/);pe=a&&a[1]||""}return`
`+pe+e}}var ve=!1,ee;{var qt=typeof WeakMap=="function"?WeakMap:Map;ee=new qt}function Ge(e,n){if(!e||ve)return"";{var s=ee.get(e);if(s!==void 0)return s}var a;ve=!0;var g=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var m;m=de.current,de.current=null,Ht();try{if(n){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(_){a=_}Reflect.construct(e,[],d)}else{try{d.call()}catch(_){a=_}e.call(d.prototype)}}else{try{throw Error()}catch(_){a=_}e()}}catch(_){if(_&&a&&typeof _.stack=="string"){for(var h=_.stack.split(`
`),S=a.stack.split(`
`),x=h.length-1,b=S.length-1;x>=1&&b>=0&&h[x]!==S[b];)b--;for(;x>=1&&b>=0;x--,b--)if(h[x]!==S[b]){if(x!==1||b!==1)do if(x--,b--,b<0||h[x]!==S[b]){var P=`
`+h[x].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),typeof e=="function"&&ee.set(e,P),P}while(x>=1&&b>=0);break}}}finally{ve=!1,de.current=m,zt(),Error.prepareStackTrace=g}var F=e?e.displayName||e.name:"",L=F?Q(F):"";return typeof e=="function"&&ee.set(e,L),L}function Jt(e,n,s){return Ge(e,!1)}function Kt(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function te(e,n,s){if(e==null)return"";if(typeof e=="function")return Ge(e,Kt(e));if(typeof e=="string")return Q(e);switch(e){case T:return Q("Suspense");case y:return Q("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return Jt(e.render);case M:return te(e.type,n,s);case C:{var a=e,g=a._payload,m=a._init;try{return te(m(g),n,s)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,He={},ze=k.ReactDebugCurrentFrame;function re(e){if(e){var n=e._owner,s=te(e.type,e._source,n?n.type:null);ze.setExtraStackFrame(s)}else ze.setExtraStackFrame(null)}function Zt(e,n,s,a,g){{var m=Function.call.bind(V);for(var d in e)if(m(e,d)){var h=void 0;try{if(typeof e[d]!="function"){var S=Error((a||"React class")+": "+s+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw S.name="Invariant Violation",S}h=e[d](n,d,a,s,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(x){h=x}h&&!(h instanceof Error)&&(re(g),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",s,d,typeof h),re(null)),h instanceof Error&&!(h.message in He)&&(He[h.message]=!0,re(g),E("Failed %s type: %s",s,h.message),re(null))}}}var Qt=Array.isArray;function ge(e){return Qt(e)}function er(e){{var n=typeof Symbol=="function"&&Symbol.toStringTag,s=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return s}}function tr(e){try{return qe(e),!1}catch{return!0}}function qe(e){return""+e}function Je(e){if(tr(e))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",er(e)),qe(e)}var Ke=k.ReactCurrentOwner,rr={key:!0,ref:!0,__self:!0,__source:!0},Ze,Qe;function or(e){if(V.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return e.ref!==void 0}function nr(e){if(V.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function sr(e,n){typeof e.ref=="string"&&Ke.current}function ir(e,n){{var s=function(){Ze||(Ze=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};s.isReactWarning=!0,Object.defineProperty(e,"key",{get:s,configurable:!0})}}function ar(e,n){{var s=function(){Qe||(Qe=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};s.isReactWarning=!0,Object.defineProperty(e,"ref",{get:s,configurable:!0})}}var ur=function(e,n,s,a,g,m,d){var h={$$typeof:t,type:e,key:n,ref:s,props:d,_owner:m};return h._store={},Object.defineProperty(h._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(h,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(h,"_source",{configurable:!1,enumerable:!1,writable:!1,value:g}),Object.freeze&&(Object.freeze(h.props),Object.freeze(h)),h};function cr(e,n,s,a,g){{var m,d={},h=null,S=null;s!==void 0&&(Je(s),h=""+s),nr(n)&&(Je(n.key),h=""+n.key),or(n)&&(S=n.ref,sr(n,g));for(m in n)V.call(n,m)&&!rr.hasOwnProperty(m)&&(d[m]=n[m]);if(e&&e.defaultProps){var x=e.defaultProps;for(m in x)d[m]===void 0&&(d[m]=x[m])}if(h||S){var b=typeof e=="function"?e.displayName||e.name||"Unknown":e;h&&ir(d,b),S&&ar(d,b)}return ur(e,h,S,g,a,Ke.current,d)}}var me=k.ReactCurrentOwner,et=k.ReactDebugCurrentFrame;function N(e){if(e){var n=e._owner,s=te(e.type,e._source,n?n.type:null);et.setExtraStackFrame(s)}else et.setExtraStackFrame(null)}var xe;xe=!1;function ye(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function tt(){{if(me.current){var e=A(me.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function lr(e){return""}var rt={};function fr(e){{var n=tt();if(!n){var s=typeof e=="string"?e:e.displayName||e.name;s&&(n=`

Check the top-level render call using <`+s+">.")}return n}}function ot(e,n){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var s=fr(n);if(rt[s])return;rt[s]=!0;var a="";e&&e._owner&&e._owner!==me.current&&(a=" It was passed a child from "+A(e._owner.type)+"."),N(e),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',s,a),N(null)}}function nt(e,n){{if(typeof e!="object")return;if(ge(e))for(var s=0;s<e.length;s++){var a=e[s];ye(a)&&ot(a,n)}else if(ye(e))e._store&&(e._store.validated=!0);else if(e){var g=$(e);if(typeof g=="function"&&g!==e.entries)for(var m=g.call(e),d;!(d=m.next()).done;)ye(d.value)&&ot(d.value,n)}}}function hr(e){{var n=e.type;if(n==null||typeof n=="string")return;var s;if(typeof n=="function")s=n.propTypes;else if(typeof n=="object"&&(n.$$typeof===p||n.$$typeof===M))s=n.propTypes;else return;if(s){var a=A(n);Zt(s,e.props,"prop",a,e)}else if(n.PropTypes!==void 0&&!xe){xe=!0;var g=A(n);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",g||"Unknown")}typeof n.getDefaultProps=="function"&&!n.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dr(e){{for(var n=Object.keys(e.props),s=0;s<n.length;s++){var a=n[s];if(a!=="children"&&a!=="key"){N(e),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),N(null);break}}e.ref!==null&&(N(e),E("Invalid attribute `ref` supplied to `React.Fragment`."),N(null))}}var st={};function it(e,n,s,a,g,m){{var d=Vt(e);if(!d){var h="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(h+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var S=lr();S?h+=S:h+=tt();var x;e===null?x="null":ge(e)?x="array":e!==void 0&&e.$$typeof===t?(x="<"+(A(e.type)||"Unknown")+" />",h=" Did you accidentally export a JSX literal instead of a component?"):x=typeof e,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",x,h)}var b=cr(e,n,s,g,m);if(b==null)return b;if(d){var P=n.children;if(P!==void 0)if(a)if(ge(P)){for(var F=0;F<P.length;F++)nt(P[F],e);Object.freeze&&Object.freeze(P)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else nt(P,e)}if(V.call(n,"key")){var L=A(e),_=Object.keys(n).filter(function(yr){return yr!=="key"}),be=_.length>0?"{key: someKey, "+_.join(": ..., ")+": ...}":"{key: someKey}";if(!st[L+be]){var xr=_.length>0?"{"+_.join(": ..., ")+": ...}":"{}";E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,be,L,xr,L),st[L+be]=!0}}return e===i?dr(b):hr(b),b}}function pr(e,n,s){return it(e,n,s,!0)}function vr(e,n,s){return it(e,n,s,!1)}var gr=vr,mr=pr;W.Fragment=i,W.jsx=gr,W.jsxs=mr}()),W}process.env.NODE_ENV==="production"?oe.exports=ut():oe.exports=ct();var v=oe.exports;function lt(...r){return r.length===0?t=>t:r.length===1?r[0]:r.reduce((t,o)=>(...i)=>t(o(...i)))}const ft=({elem:r,e:t})=>{if(!r||typeof r.getBoundingClientRect!="function")return!1;const{pageY:o,pageX:i}=t,{left:c,right:u,bottom:l,top:f}=r.getBoundingClientRect();return i>c&&i<u&&o>f&&o<l},ht=(r="isMouseHovering")=>t=>{class o extends j.PureComponent{constructor(u){super(u),this.el=null,this.onMouseMove=l=>{const f=this.el,p={pageX:l.pageX,pageY:l.pageY};this.setState({isHoveringOver:ft({elem:f,e:p})})},this.state={isHoveringOver:!1}}componentDidMount(){document.addEventListener("mousemove",this.onMouseMove)}componentWillUnmount(){document.removeEventListener("mousemove",this.onMouseMove)}render(){const u={[r]:{innerRef:l=>this.el=l,isHoveringOver:this.state.isHoveringOver}};return j.createElement(t,{...this.props,...u})}}const i=t.displayName||t.name||"Component";return o.displayName=`IsMouseHovering(${i})`,o},Me=r=>{if(!r.currentTarget||typeof r.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const t=r.currentTarget.getBoundingClientRect(),o=r.clientX-t.x,i=r.clientY-t.y;return{x:o/t.width*100,y:i/t.height*100}},Re=(r,t,o)=>Math.max(r,Math.min(t,o)),dt=r=>{if(!r.currentTarget||typeof r.currentTarget.getBoundingClientRect!="function")return{x:0,y:0};const t=r.targetTouches[0],o=r.currentTarget.getBoundingClientRect(),i=t.pageX-o.left,c=t.pageY-(o.top+window.scrollY);return{x:Re(0,100,i/o.width*100),y:Re(0,100,c/o.height*100)}},I=r=>pt(r)?vt(r)?(gt(r)&&r.preventDefault(),dt(r)):{x:null}:Me(r),pt=r=>r.targetTouches!==void 0,vt=r=>r.targetTouches.length===1,gt=r=>r.type==="touchmove",mt=(r="relativeMousePos")=>t=>{class o extends j.PureComponent{constructor(u){super(u),this.container=null,this._innerRef=l=>{this.container=l},this._onMouseMove=l=>{const f=Me(l);this.setState(f)},this._onTouchMove=l=>{if(!this.container||l.targetTouches.length!==1)return;const f=l.targetTouches[0],p=this.container.offsetParent;if(!p)return;const T=f.pageX-p.offsetLeft,y=f.pageY-p.offsetTop,M=this.container.width,C=this.container.height;typeof M=="number"&&typeof C=="number"&&M>0&&C>0?this.setState({x:T/M*100,y:y/C*100}):this.setState({x:null,y:null})},this._onMouseLeave=l=>{this.setState({x:null,y:null})},this._onTouchLeave=l=>{this.setState({x:null,y:null})},this.state={x:null,y:null}}render(){const u={innerRef:this._innerRef,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,onTouchMove:this._onTouchMove,onTouchLeave:this._onTouchLeave,x:this.state.x,y:this.state.y},l={[r]:u};return v.jsx(t,{...this.props,...l})}}const i=t.displayName||t.name||"Component";return o.displayName=`withRelativeMousePos(${i})`,o},xt=w.div`
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
`;function Se(r){const{geometry:t}=r.annotation;return t?v.jsx(xt,{style:{top:`${t.y}%`,left:`${t.x}%`}}):null}const yt=w.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,bt=w.div`
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
`,Tt=({onChange:r,onSubmit:t,onFocus:o,onBlur:i,value:c})=>v.jsxs(j.Fragment,{children:[v.jsx(yt,{children:v.jsx("textarea",{placeholder:"Write description",onFocus:o,onBlur:i,onChange:r,value:c})}),c&&v.jsx(bt,{onClick:t,children:"Submit"})]}),Et=w.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,wt=w.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${Et} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,Mt=({annotation:r,onChange:t,onSubmit:o,className:i="",style:c={}})=>{var l;const{geometry:u}=r;return u?v.jsx(wt,{className:i,style:{position:"absolute",left:`${u.x}%`,top:`${u.y+u.height}%`,...c},children:v.jsx(Tt,{onChange:f=>t({...r,data:{...r.data,text:f.target.value}}),onSubmit:o,value:(l=r.data)==null?void 0:l.text})}):null},G=w.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,Rt=w.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function _e(r){const{geometry:t}=r.annotation;return t?v.jsxs(Rt,{className:r.className,style:r.style,children:[v.jsx(G,{style:{height:`${t.y}%`,width:"100%"}}),v.jsx(G,{style:{top:`${t.y}%`,height:`${t.height}%`,width:`${t.x}%`}}),v.jsx(G,{style:{top:`${t.y}%`,left:`${t.x+t.width}%`,height:`${t.height}%`,width:`${100-(t.x+t.width)}%`}}),v.jsx(G,{style:{top:`${t.y+t.height}%`,height:`${100-(t.y+t.height)}%`,width:"100%"}})]}):null}_e.defaultProps={className:"",style:{}};const St=w.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function Ce(r){const{geometry:t}=r.annotation;return t?v.jsx(St,{className:r.className,style:{position:"absolute",left:`${t.x}%`,top:`${t.y}%`,height:`${t.height}%`,width:`${t.width}%`,boxShadow:r.active&&"0 0 1px 1px yellow inset",...r.style}}):null}Ce.defaultProps={className:"",style:{}};const _t=w.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function ne(r){const{geometry:t}=r.annotation;return t?v.jsx(_t,{className:r.className,style:{position:"absolute",left:`${t.x}%`,top:`${t.y}%`,height:`${t.height}%`,width:`${t.width}%`,boxShadow:r.active&&"0 0 1px 1px yellow inset",...r.style}}):null}ne.defaultProps={className:"",style:{}};const Ct=w.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function Pe(r){const{geometry:t}=r.annotation;return t?v.jsx(Ct,{style:{position:"absolute",left:`${t.x}%`,top:`${t.y+t.height}%`,...r.style},className:r.className,geometry:t,children:r.annotation.data&&r.annotation.data.text}):null}Pe.defaultProps={style:{},className:""};const se=w.div`
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
`,je="RECTANGLE";function Pt({x:r,y:t},o){if(!o)return!1;const i=Math.min(o.x,o.x+o.width),c=Math.max(o.x,o.x+o.width),u=Math.min(o.y,o.y+o.height),l=Math.max(o.y,o.y+o.height);return!(r<i||t<u||r>c||t>l)}function jt(r){if(!r||r.width<=0||r.height<=0)return 0;const t=Math.abs(r.width),o=Math.abs(r.height);return t*o}const Ot={onTouchStart(r,t){return Oe(r,t)},onTouchEnd(r,t){return $e(r)},onTouchMove(r,t){return ke(r,t)},onMouseDown(r,t){return Oe(r,t)},onMouseUp(r,t){return $e(r)},onMouseMove(r,t){return ke(r,t)}};function Oe(r,t){if(r.selection)return{};{const{x:o,y:i}=I(t);return{...r,selection:{...r.selection,mode:"SELECTING",anchorX:o,anchorY:i}}}}function $e(r,t){if(r.selection){const{selection:o,geometry:i}=r;if(!i)return{};switch(r.selection.mode){case"SELECTING":return{...r,selection:{...r.selection,showEditor:!0,mode:"EDITING"}}}}return r}function ke(r,t){if(r.selection&&r.selection.mode==="SELECTING"){const{anchorX:o,anchorY:i}=r.selection,{x:c,y:u}=I(t),l=c-o,f=u-i;return{...r,geometry:{...r.geometry,type:je,x:l>0?o:c,y:f>0?i:u,width:Math.abs(l),height:Math.abs(f)}}}return r}const X={TYPE:je,intersects:Pt,area:jt,methods:Ot},Ae="POINT";function $t({x:r,y:t},o,i){if(!o)return!1;const c=Math.abs(r-o.x),u=Math.abs(t-o.y);return c===0&&u===0}function kt(r,t){return 0}const H={TYPE:Ae,intersects:$t,area:kt,methods:{onClick(r,t){return r.geometry?{}:{...r,selection:{...r.selection,showEditor:!0,mode:"EDITING"},geometry:{...r.geometry,...I(t),width:0,height:0,type:Ae}}}}},z=r=>Math.pow(r,2),ie="OVAL";function At({x:r,y:t},o){if(!o||!o.width||!o.height)return!1;const i=Math.abs(o.width),c=Math.abs(o.height),u={x:o.x+i/2,y:o.y+c/2},l=i/2,f=c/2;if(l===0||f===0)return!1;const p=r-u.x,T=t-u.y;return z(p)/z(l)+z(T)/z(f)<=1}function It(r){return!r||!r.width||!r.height||r.width<=0||r.height<=0?0:Math.PI*Math.abs(r.width)*Math.abs(r.height)/4}const Dt={onTouchStart(r,t){return Lt(r,t)},onTouchEnd(r,t){return Yt(r)},onTouchMove(r,t){return Nt(r,t)},onMouseDown(r,t){if(!r.geometry){const{x:o,y:i}=I(t);return{...r,selection:{...r.selection,mode:"SELECTING",anchorX:o,anchorY:i}}}return r},onMouseUp(r,t){if(r.selection&&r.selection.mode==="SELECTING")return{...r,selection:{...r.selection,showEditor:!0,mode:"EDITING"}}},onMouseMove(r,t){if(r.selection&&r.selection.mode==="SELECTING"){const{anchorX:o,anchorY:i}=r.selection,{x:c,y:u}=I(t);return{...r,geometry:{...r.geometry,type:ie,x:Math.min(o,c),y:Math.min(i,u),width:Math.abs(c-o),height:Math.abs(u-i)}}}return r}};function Lt(r,t){if(r.selection)return{};{const{x:o,y:i}=I(t);return{...r,selection:{...r.selection,mode:"SELECTING",anchorX:o,anchorY:i}}}}function Yt(r,t){if(r.selection){const{selection:o,geometry:i}=r;if(!i)return{};switch(r.selection.mode){case"SELECTING":return{...r,selection:{...r.selection,showEditor:!0,mode:"EDITING"}}}}return r}function Nt(r,t){if(r.selection&&r.selection.mode==="SELECTING"){const{anchorX:o,anchorY:i}=r.selection,{x:c,y:u}=I(t),l=c-o,f=u-i;return{...r,geometry:{...r.geometry,type:ie,x:l>0?o:c,y:f>0?i:u,width:Math.abs(l),height:Math.abs(f)}}}return r}const ae={TYPE:ie,intersects:At,area:It,methods:Dt},Ie={innerRef:()=>{},onChange:()=>{},onSubmit:()=>{},type:X.TYPE,selectors:[X,H,ae],disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,activeAnnotationComparator:(r,t)=>r===t,renderSelector:({annotation:r})=>{switch(r.geometry.type){case X.TYPE:return v.jsx(_e,{annotation:r});case H.TYPE:return v.jsx(Se,{annotation:r});case ae.TYPE:return v.jsx(ne,{annotation:r});default:return null}},renderEditor:({annotation:r,onChange:t,onSubmit:o})=>v.jsx(Mt,{annotation:r,onChange:t,onSubmit:o}),renderHighlight:({key:r,annotation:t,active:o})=>{switch(t.geometry.type){case X.TYPE:return v.jsx(Ce,{annotation:t,active:o},r);case H.TYPE:return v.jsx(Se,{annotation:t,active:o},r);case ae.TYPE:return v.jsx(ne,{annotation:t,active:o},r);default:return null}},renderContent:({key:r,annotation:t})=>v.jsx(Pe,{annotation:t},r),renderOverlay:({type:r,annotation:t}={})=>{switch(r){case H.TYPE:return v.jsx(se,{children:"Click to Annotate"});default:return v.jsx(se,{children:"Click and Drag to Annotate"})}}},Ft=w.div`
  clear: both;
  position: relative;
  width: 100%;
  &:hover ${se} {
    opacity: 1;
  }
  touch-action: ${r=>r.allowTouch?"pinch-zoom":"auto"};
`,Ut=w.img`
  display: block;
  width: 100%;
  user-select: none; /* To prevent image selection during drag */
`,Wt=w.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none; /* Allow clicks to pass through to Target unless specific items have pointer-events: auto */
`,Xt=w.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* Target for mouse/touch events for drawing */
`,q=class q extends Te.Component{constructor(){super(...arguments),this.container=null,this.targetRef=Te.createRef(),this.addTargetTouchEventListeners=()=>{const t=this.targetRef.current;t&&(t.ontouchstart=this.onTouchStart,t.ontouchend=this.onTouchEnd,t.ontouchmove=this.onTargetTouchMove,t.ontouchcancel=this.onTargetTouchLeave)},this.removeTargetTouchEventListeners=()=>{const t=this.targetRef.current;t&&(t.ontouchstart=null,t.ontouchend=null,t.ontouchmove=null,t.ontouchcancel=null)},this.setImageRef=t=>{this.container=t,this.props.relativeMousePos&&typeof this.props.relativeMousePos.innerRef=="function"&&this.props.relativeMousePos.innerRef(t)},this.setContainerRef=t=>{this.props.isMouseHovering&&typeof this.props.isMouseHovering.innerRef=="function"&&this.props.isMouseHovering.innerRef(t),this.props.containerRef&&(typeof this.props.containerRef=="function"?this.props.containerRef(t):this.props.containerRef.current=t)},this.getSelectorByType=t=>{if(t)return this.props.selectors.find(o=>o.TYPE===t)},this.getTopAnnotationAt=(t,o)=>{const{annotations:i}=this.props,{container:c,getSelectorByType:u}=this;return!c||t===null||o===null?void 0:i.map(f=>{const{geometry:p}=f;if(!p)return!1;const T=u(p.type);return T&&T.intersects({x:t,y:o},p,c)?f:!1}).filter(f=>!!f).sort((f,p)=>{const T=u(f.geometry.type),y=u(p.geometry.type);return!T||!y||!this.container?0:T.area(f.geometry,this.container)-y.area(p.geometry,this.container)})[0]},this.onTargetMouseMove=t=>{this.props.relativeMousePos&&typeof this.props.relativeMousePos.onMouseMove=="function"&&this.props.relativeMousePos.onMouseMove(t);const o=t;this.props.onImageMouseMove&&this.props.onImageMouseMove(o),this.callSelectorMethod("onMouseMove",o)},this.onTargetTouchMove=t=>{this.props.relativeMousePos&&typeof this.props.relativeMousePos.onTouchMove=="function"&&this.props.relativeMousePos.onTouchMove(t),navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&this.props.allowTouch&&t.preventDefault(),this.callSelectorMethod("onTouchMove",t)},this.onTargetMouseLeave=t=>{this.props.relativeMousePos&&typeof this.props.relativeMousePos.onMouseLeave=="function"&&this.props.relativeMousePos.onMouseLeave(t)},this.onTargetTouchLeave=t=>{this.props.relativeMousePos&&typeof this.props.relativeMousePos.onTouchLeave=="function"&&this.props.relativeMousePos.onTouchLeave(t)},this.onMouseUp=t=>{this.props.onImageMouseUp&&this.props.onImageMouseUp(t),this.callSelectorMethod("onMouseUp",t)},this.onMouseDown=t=>{this.props.onImageMouseDown&&this.props.onImageMouseDown(t),this.callSelectorMethod("onMouseDown",t)},this.onClick=t=>{this.props.onImageClick&&this.props.onImageClick(t),this.callSelectorMethod("onClick",t)},this.onTouchStart=t=>{navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome")&&this.props.allowTouch&&t.preventDefault(),this.callSelectorMethod("onTouchStart",t)},this.onTouchEnd=t=>this.callSelectorMethod("onTouchEnd",t),this.onSubmit=()=>{this.props.onSubmit&&this.props.value&&this.props.onSubmit(this.props.value)},this.callSelectorMethod=(t,o)=>{if(this.props.disableAnnotation)return;const i=this.getSelectorByType(this.props.type);if(i&&i.methods[t]){const c=i.methods[t],u=c(this.props.value||{},o);typeof u>"u"?process.env.NODE_ENV!=="production"&&console.error(`Selector method ${String(t)} of type ${this.props.type} returned undefined.
             Make sure to explicitly return the previous state or new state.`):this.props.onChange&&this.props.onChange(u)}},this.shouldAnnotationBeActive=(t,o)=>this.props.activeAnnotations&&!!this.props.activeAnnotations.find(c=>this.props.activeAnnotationComparator?this.props.activeAnnotationComparator(t,c):t.data.id===c)||o===t}componentDidMount(){this.props.allowTouch&&this.addTargetTouchEventListeners(),this.props.containerRef&&this.props.containerRef}componentDidUpdate(t){this.props.allowTouch!==t.allowTouch&&(this.props.allowTouch?this.addTargetTouchEventListeners():this.removeTargetTouchEventListeners())}componentWillUnmount(){this.props.allowTouch&&this.targetRef.current&&this.removeTargetTouchEventListeners()}render(){const{props:t}=this,{isHoveringOver:o}=t.isMouseHovering,{x:i,y:c}=t.relativeMousePos,{renderHighlight:u,renderContent:l,renderSelector:f,renderEditor:p,renderOverlay:T,allowTouch:y,src:M,alt:C,style:Y,className:J,annotations:K,value:$,disableSelector:k,disableEditor:E,disableOverlay:le,type:fe,children:he}=t,Z=this.getTopAnnotationAt(i,c);return v.jsxs(Ft,{style:Y,ref:this.setContainerRef,onMouseLeave:this.onTargetMouseLeave,onTouchCancel:this.onTargetTouchLeave,onMouseMove:this.onTargetMouseMove,allowTouch:y,className:J,children:[v.jsx(Ut,{alt:C||"Annotation Image",src:M,draggable:!1,ref:this.setImageRef}),v.jsxs(Wt,{children:[K.map(R=>!R.data||typeof R.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render highlight:",R),null):u({key:R.data.id,annotation:R,active:this.shouldAnnotationBeActive(R,Z)})),!k&&$&&$.geometry&&f&&f({annotation:$})]}),v.jsx(Xt,{"data-testid":"annotation-target",ref:this.targetRef,onClick:this.onClick,onMouseUp:this.onMouseUp,onMouseDown:this.onMouseDown}),!le&&T&&T({type:fe,annotation:$}),K.map(R=>!R.data||typeof R.data.id>"u"?(console.warn("Annotation is missing data.id, cannot render content:",R),null):this.shouldAnnotationBeActive(R,Z)&&l&&l({key:R.data.id,annotation:R})),!E&&$&&$.selection&&$.selection.showEditor&&p&&t.onChange&&t.onSubmit&&p({annotation:$,onChange:t.onChange,onSubmit:this.onSubmit}),v.jsx("div",{children:he})]})}};q.displayName="AnnotationClass",q.defaultProps={...Ie,selectors:Ie.selectors};let ue=q;const ce=lt(ht("isMouseHovering"),mt("relativeMousePos"))(ue);process.env.NODE_ENV!=="production"&&(ce.displayName="ComposedAnnotation"),O.Annotation=ce,O.RectangleSelector=X,O.default=ce,Object.defineProperties(O,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
