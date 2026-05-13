(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports,require(`react`),require(`styled-components`)):typeof define==`function`&&define.amd?define([`exports`,`react`,`styled-components`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e.ReactImageAnnotation={},e.React,e.styled))})(this,function(e,t,n){Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});var r=Object.create,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,l=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),u=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var s=o(t),l=0,u=s.length,d;l<u;l++)d=s[l],!c.call(e,d)&&d!==n&&i(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(r=a(t,d))||r.enumerable});return e},d=(e,t,n)=>(n=e==null?{}:r(s(e)),u(t||!e||!e.__esModule?i(n,`default`,{value:e,enumerable:!0}):n,e));t=d(t),n=d(n);var f=(e,t)=>{let n=t||e.currentTarget;if(!n||typeof n.getBoundingClientRect!=`function`)return{x:0,y:0};let r=n.getBoundingClientRect(),i=e.clientX-r.x,a=e.clientY-r.y;return{x:i/r.width*100,y:a/r.height*100}},p=(e,t,n)=>Math.max(e,Math.min(t,n)),m=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!=`function`)return{x:0,y:0};let t=e.targetTouches[0],n=e.currentTarget.getBoundingClientRect(),r=t.pageX-n.left,i=t.pageY-(n.top+window.scrollY);return{x:p(0,100,r/n.width*100),y:p(0,100,i/n.height*100)}},h=(e,t)=>g(e)?_(e)?(v(e)&&e.preventDefault(),m(e)):{x:null}:f(e,t),g=e=>e.targetTouches!==void 0,_=e=>e.targetTouches.length===1,v=e=>e.type===`touchmove`;function y(e,n={}){let{onPositionChange:r,throttleMs:i=16}=n,a=(0,t.useRef)({x:null,y:null}),[o,s]=(0,t.useState)({x:null,y:null}),c=(0,t.useRef)(0),l=(0,t.useRef)(null),u=(0,t.useCallback)(e=>{if(a.current=e,r){let t=Date.now();i<=0||t-c.current>=i?(s(e),r(e),c.current=t):(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{s(e),r(e),c.current=Date.now()},i-(t-c.current)))}},[r,i]),d=(0,t.useCallback)(t=>{try{let n=e.current;if(!n){u({x:null,y:null});return}u(f(t,n))}catch{u({x:null,y:null})}},[e,u]),p=(0,t.useCallback)(t=>{let n=e.current;if(!n||t.targetTouches.length!==1)return;let r=t.targetTouches[0],i=n.offsetParent;if(i)try{let e=r.pageX-i.offsetLeft,t=r.pageY-i.offsetTop,a=n,o=a.width,s=a.height;u(o>0&&s>0?{x:e/o*100,y:t/s*100}:{x:null,y:null})}catch{u({x:null,y:null})}},[e,u]),m=(0,t.useCallback)(e=>{u({x:null,y:null})},[u]),h=(0,t.useCallback)(e=>{u({x:null,y:null})},[u]),g=(0,t.useCallback)(()=>a.current,[]);return(0,t.useEffect)(()=>()=>{l.current&&clearTimeout(l.current)},[]),{mousePosition:r?o:a.current,handlers:{onMouseMove:d,onMouseLeave:m,onTouchMove:p,onTouchLeave:h},getCurrentMousePosition:g}}function b({annotations:e,selectors:n,imageRef:r,enableEditing:i}){let a=(0,t.useMemo)(()=>new Map(n.map(e=>[e.TYPE,e])),[n]),o=(0,t.useCallback)(e=>{if(e)return a.get(e)},[a]);return{getTopAnnotationAt:(0,t.useCallback)((t,n)=>{let a=r.current;if(!a||t===null||n===null)return;let s={x:t,y:n},c=e.map(e=>{let{geometry:t}=e;if(!t)return null;let n=o(t.type);if(!n)return null;let r=t;return i&&t.type===`RECTANGLE`&&typeof t.x==`number`&&typeof t.y==`number`&&typeof t.width==`number`&&typeof t.height==`number`&&(r={...t,x:Math.max(0,t.x-2),y:Math.max(0,t.y-2),width:Math.min(100-t.x+2,t.width+4),height:Math.min(100-t.y+2,t.height+4)}),n.intersects(s,r,a)?e:null}).filter(e=>e!==null);if(c.length!==0)return c.sort((e,t)=>{let n=o(e.geometry.type),r=o(t.geometry.type);return!n||!r?0:n.area(e.geometry,a)-r.area(t.geometry,a)})[0]},[e,o,r,i]),getSelectorByType:o}}function x({targetRef:e,imageRef:n,annotations:r,selectors:i,enableEditing:a,throttleMs:o=50}){let[s,c]=(0,t.useState)(void 0),l=(0,t.useRef)(void 0),u=(0,t.useRef)(void 0),{getTopAnnotationAt:d}=b({annotations:r,selectors:i,imageRef:n,enableEditing:a}),{handlers:f}=y(e,{onPositionChange:(0,t.useCallback)(e=>{let{x:t,y:n}=e,r=d(t,n),i=r?.data?.id;i!==u.current&&(u.current=i,l.current=r,c(r))},[d]),throttleMs:o});return(0,t.useEffect)(()=>{c(void 0),l.current=void 0,u.current=void 0},[r,i]),{hoveredAnnotation:s,mouseHandlers:(0,t.useMemo)(()=>f,[f])}}function S({selectors:e,effectiveType:n,value:r,onChange:i,disableAnnotation:a}){let o=(0,t.useCallback)(t=>{if(t)return e.find(e=>e.TYPE===t)},[e]);return{callSelectorMethod:(0,t.useCallback)((e,t)=>{if(a)return;let s=o(n);if(!s?.methods[e])return;let c=s.methods[e];try{let a=c(r||{},t);if(a===void 0){process.env.NODE_ENV!==`production`&&console.error(`Selector method ${String(e)} of type ${n} returned undefined. Make sure to explicitly return the previous state or new state.`);return}i?.(a)}catch(t){process.env.NODE_ENV!==`production`&&console.error(`Error calling selector method ${String(e)}:`,t)}},[a,o,n,r,i]),getSelectorByType:o}}function C(e,t){e&&(typeof e==`function`?e(t):e.current=t)}function w(e,n){let{src:r,alt:i=`Annotation Image`,style:a,className:o,containerRef:s,imageRef:c,annotations:l,type:u,selectors:d,value:f,onChange:p,onSubmit:m,activeAnnotationComparator:h,activeAnnotations:g,editModeAnnotationIds:_,disableAnnotation:v,disableSelector:y,disableEditor:b,disableOverlay:w,allowTouch:T,renderSelector:E,renderEditor:D,renderHighlight:O,renderContent:k,renderOverlay:A,onImageMouseUp:j,onImageMouseDown:M,onImageMouseMove:N,onImageClick:P}=e,F=(0,t.useRef)(null),I=(0,t.useRef)(null),{hoveredAnnotation:L,mouseHandlers:R}=x({targetRef:I,imageRef:F,annotations:l,selectors:d,enableEditing:!b,throttleMs:50}),z=u||d[0]?.TYPE,{callSelectorMethod:B}=S({selectors:d,effectiveType:z,value:f,onChange:p,disableAnnotation:v}),V=(0,t.useCallback)(e=>{navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&T&&e.preventDefault(),B(`onTouchStart`,e)},[T,B]),H=(0,t.useCallback)(e=>{B(`onTouchEnd`,e)},[B]),U=(0,t.useCallback)(e=>{R.onTouchMove(e),navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&T&&e.preventDefault(),B(`onTouchMove`,e)},[R,T,B]),W=(0,t.useCallback)(e=>{R.onTouchLeave(e)},[R]);(0,t.useEffect)(()=>{let e=I.current;if(!(!T||!e))return e.ontouchstart=V,e.ontouchend=H,e.ontouchmove=U,e.ontouchcancel=W,()=>{e.ontouchstart=null,e.ontouchend=null,e.ontouchmove=null,e.ontouchcancel=null}},[T,V,H,U,W]);let ee=(0,t.useCallback)(e=>{F.current=e,C(n,e),C(c,e)},[n,c]),te=(0,t.useCallback)(e=>{I.current=e},[]),G=(0,t.useCallback)(e=>{C(s,e)},[s]),K=(0,t.useCallback)(e=>{R.onMouseMove(e.nativeEvent),N?.(e),B(`onMouseMove`,e)},[R,N,B]),ne=(0,t.useCallback)(e=>{R.onMouseLeave(e.nativeEvent)},[R]),re=(0,t.useCallback)(e=>{j?.(e),B(`onMouseUp`,e)},[j,B]),ie=(0,t.useCallback)(e=>{M?.(e),B(`onMouseDown`,e)},[M,B]),q=(0,t.useCallback)(e=>{P?.(e),B(`onClick`,e)},[P,B]),ae=(0,t.useCallback)(()=>{m&&f&&m(f)},[m,f]),J=(0,t.useCallback)(e=>{e.key===`Escape`&&p&&(f?.selection?.showEditor||f?.geometry)&&p({selection:void 0,geometry:void 0,data:void 0})},[f,p]);(0,t.useEffect)(()=>{if(f?.selection?.showEditor)return window.addEventListener(`keydown`,J),()=>window.removeEventListener(`keydown`,J)},[f?.selection?.showEditor,J]);let Y=L;return{setContainerRef:G,style:a,className:o,onContainerMouseLeave:ne,onContainerTouchCancel:W,onContainerMouseMove:K,allowTouch:T,setImageRef:ee,src:r,alt:i,annotations:l,shouldAnnotationBeActive:(0,t.useCallback)((e,t)=>g&&g.some(t=>h?h(e,t):e.data.id===t)||t===e,[g,h]),topAnnotationAtMouse:Y,disableSelector:!!y,value:f,setTargetRef:te,onInteractionTargetClick:q,onInteractionTargetMouseUp:re,onInteractionTargetMouseDown:ie,disableOverlay:!!w,effectiveType:z,editModeAnnotationIds:_,disableEditor:!!b,onChange:p,onEditorSubmit:ae,renderSlots:{renderHighlight:O,renderSelector:E,renderOverlay:A,renderContent:k,renderEditor:D}}}var T=l((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),E=l((e=>{process.env.NODE_ENV!==`production`&&(function(){function t(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===O?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _:return`Fragment`;case y:return`Profiler`;case v:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case D:return`Activity`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case g:return`Portal`;case x:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case S:var n=e.render;return e=e.displayName,e||=(e=n.displayName||n.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return n=e.displayName||null,n===null?t(e.type)||`Memo`:n;case E:n=e._payload,e=e._init;try{return t(e(n))}catch{}}return null}function n(e){return``+e}function r(e){try{n(e);var t=!1}catch{t=!0}if(t){t=console;var r=t.error,i=typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`;return r.call(t,`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,i),n(e)}}function i(e){if(e===_)return`<>`;if(typeof e==`object`&&e&&e.$$typeof===E)return`<...>`;try{var n=t(e);return n?`<`+n+`>`:`<...>`}catch{return`<...>`}}function a(){var e=k.A;return e===null?null:e.getOwner()}function o(){return Error(`react-stack-top-frame`)}function s(e){if(A.call(e,`key`)){var t=Object.getOwnPropertyDescriptor(e,`key`).get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function c(e,t){function n(){N||(N=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,`key`,{get:n,configurable:!0})}function l(){var e=t(this.type);return P[e]||(P[e]=!0,console.error(`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`)),e=this.props.ref,e===void 0?null:e}function u(e,t,n,r,i,a){var o=n.ref;return e={$$typeof:h,type:e,key:t,props:n,_owner:r},(o===void 0?null:o)===null?Object.defineProperty(e,`ref`,{enumerable:!1,value:null}):Object.defineProperty(e,`ref`,{enumerable:!1,get:l}),e._store={},Object.defineProperty(e._store,`validated`,{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,`_debugInfo`,{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,`_debugStack`,{configurable:!1,enumerable:!1,writable:!0,value:i}),Object.defineProperty(e,`_debugTask`,{configurable:!1,enumerable:!1,writable:!0,value:a}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function d(e,n,i,o,l,d){var p=n.children;if(p!==void 0)if(o)if(j(p)){for(o=0;o<p.length;o++)f(p[o]);Object.freeze&&Object.freeze(p)}else console.error(`React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.`);else f(p);if(A.call(n,`key`)){p=t(e);var m=Object.keys(n).filter(function(e){return e!==`key`});o=0<m.length?`{key: someKey, `+m.join(`: ..., `)+`: ...}`:`{key: someKey}`,L[p+o]||(m=0<m.length?`{`+m.join(`: ..., `)+`: ...}`:`{}`,console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,o,p,m,p),L[p+o]=!0)}if(p=null,i!==void 0&&(r(i),p=``+i),s(n)&&(r(n.key),p=``+n.key),`key`in n)for(var h in i={},n)h!==`key`&&(i[h]=n[h]);else i=n;return p&&c(i,typeof e==`function`?e.displayName||e.name||`Unknown`:e),u(e,p,i,a(),l,d)}function f(e){p(e)?e._store&&(e._store.validated=1):typeof e==`object`&&e&&e.$$typeof===E&&(e._payload.status===`fulfilled`?p(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function p(e){return typeof e==`object`&&!!e&&e.$$typeof===h}var m=require(`react`),h=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),_=Symbol.for(`react.fragment`),v=Symbol.for(`react.strict_mode`),y=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),x=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),D=Symbol.for(`react.activity`),O=Symbol.for(`react.client.reference`),k=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.prototype.hasOwnProperty,j=Array.isArray,M=console.createTask?console.createTask:function(){return null};m={react_stack_bottom_frame:function(e){return e()}};var N,P={},F=m.react_stack_bottom_frame.bind(m,o)(),I=M(i(o)),L={};e.Fragment=_,e.jsx=function(e,t,n){var r=1e4>k.recentlyCreatedOwnerStacks++;return d(e,t,n,!1,r?Error(`react-stack-top-frame`):F,r?M(i(e)):I)},e.jsxs=function(e,t,n){var r=1e4>k.recentlyCreatedOwnerStacks++;return d(e,t,n,!0,r?Error(`react-stack-top-frame`):F,r?M(i(e)):I)}})()})),D=l(((e,t)=>{process.env.NODE_ENV===`production`?t.exports=T():t.exports=E()}))(),O=n.default.div`
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
`;function k(e){let{geometry:t}=e.annotation;return t?(0,D.jsx)(O,{style:{top:`${t.y}%`,left:`${t.x}%`}}):null}var A=n.default.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,j=n.default.div`
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
`,M=({onChange:e,onSubmit:n,onFocus:r,onBlur:i,value:a})=>(0,D.jsxs)(t.default.Fragment,{children:[(0,D.jsx)(A,{children:(0,D.jsx)(`textarea`,{placeholder:`Write description`,onFocus:r,onBlur:i,onChange:e,value:a})}),a&&(0,D.jsx)(j,{onClick:n,children:`Submit`})]}),N={},P={},F=n.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,I=n.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-top: 16px;
  transform-origin: top left;

  animation: ${F} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,L=({annotation:e,onChange:t,onSubmit:n,className:r=``,style:i=N})=>{let{geometry:a}=e;return a?(0,D.jsx)(I,{className:r,style:{position:`absolute`,left:`${a.x}%`,top:`${a.y+a.height}%`,...i},children:(0,D.jsx)(M,{onChange:n=>t({...e,data:{...e.data,text:n.target.value}}),onSubmit:n,value:e.data?.text})}):null},R=n.default.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,z=n.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function B({annotation:e,className:t=``,style:n=N}){let{geometry:r}=e;return r?(0,D.jsxs)(z,{className:t,style:n,children:[(0,D.jsx)(R,{style:{height:`${r.y}%`,width:`100%`}}),(0,D.jsx)(R,{style:{top:`${r.y}%`,height:`${r.height}%`,width:`${r.x}%`}}),(0,D.jsx)(R,{style:{top:`${r.y}%`,left:`${r.x+r.width}%`,height:`${r.height}%`,width:`${100-(r.x+r.width)}%`}}),(0,D.jsx)(R,{style:{top:`${r.y+r.height}%`,height:`${100-(r.y+r.height)}%`,width:`100%`}})]}):null}var V=n.default.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function H({annotation:e,className:t=``,style:n=N,active:r}){let{geometry:i}=e;return i?(0,D.jsx)(V,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var U=n.default.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function W({annotation:e,className:t=``,style:n=N,active:r}){let{geometry:i}=e;return i?(0,D.jsx)(U,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var ee=n.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function te({annotation:e,style:t=N,className:n=``}){let{geometry:r}=e;return!r||r.x===void 0||r.y===void 0||r.width===void 0||r.height===void 0?null:(0,D.jsx)(ee,{style:{position:`absolute`,left:`${r.x}%`,top:`${r.y+r.height}%`,...t},className:n,children:e.data&&e.data.text})}var G=n.default.div`
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
`,K=`RECTANGLE`;function ne({x:e,y:t},n,r){if(!n)return!1;let i=Math.min(n.x,n.x+n.width),a=Math.max(n.x,n.x+n.width),o=Math.min(n.y,n.y+n.height),s=Math.max(n.y,n.y+n.height);return!(e<i||t<o||e>a||t>s)}function re(e,t){return!e||e.width<=0||e.height<=0?0:Math.abs(e.width)*Math.abs(e.height)}var ie={onTouchStart(e,t){return q(e,t)},onTouchEnd(e,t){return ae(e,t)},onTouchMove(e,t){return J(e,t)},onMouseDown(e,t){return q(e,t)},onMouseUp(e,t){return ae(e,t)},onMouseMove(e,t){return J(e,t)}};function q(e,t){if(e.selection)return{};{let{x:n,y:r}=h(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}}function ae(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function J(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=h(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:K,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var Y={TYPE:K,intersects:ne,area:re,methods:ie},oe=6,se=(e={width:100,height:100})=>({marginX:oe/e.width*100,marginY:oe/e.height*100}),ce=`POINT`;function le({x:e,y:t},n,r){if(!n)return!1;let{marginX:i,marginY:a}=se(r),o=Math.min(i,a)/2,s=Math.abs(e-n.x),c=Math.abs(t-n.y);return s<=o&&c<=o}function ue(e,t){return 0}var X={TYPE:ce,intersects:le,area:ue,methods:{onClick(e,t){return e.geometry?{}:{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`},geometry:{...e.geometry,...h(t),width:0,height:0,type:ce}}}}},Z=e=>e**2,de=`OVAL`;function fe({x:e,y:t},n,r){if(!n||!n.width||!n.height)return!1;let i=Math.abs(n.width),a=Math.abs(n.height),o={x:n.x+i/2,y:n.y+a/2},s=i/2,c=a/2;if(s===0||c===0)return!1;let l=e-o.x,u=t-o.y;return Z(l)/Z(s)+Z(u)/Z(c)<=1}function pe(e,t){if(!e||e.width<=0||e.height<=0)return 0;let n=Math.abs(e.width),r=Math.abs(e.height);return n/2*Math.PI*(r/2)}var me={onTouchStart(e,t){return he(e,t)},onTouchEnd(e,t){return ge(e,t)},onTouchMove(e,t){return _e(e,t)},onMouseDown(e,t){if(!e.geometry){let{x:n,y:r}=h(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e},onMouseUp(e,t){if(e.selection&&e.selection.mode===`SELECTING`)return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}}},onMouseMove(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=h(t);return{...e,geometry:{...e.geometry,type:de,x:Math.min(n,i),y:Math.min(r,a),width:Math.abs(i-n),height:Math.abs(a-r)}}}return e}};function he(e,t){if(e.selection)return{};{let{x:n,y:r}=h(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e}function ge(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function _e(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=h(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:de,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var Q={TYPE:de,intersects:fe,area:pe,methods:me},$={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:Y.TYPE,selectors:[Y,X,Q],activeAnnotationComparator:(e,t)=>e===t,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!==`production`&&console.warn(`onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.`)},renderSelector:({annotation:e})=>{switch(e.geometry?.type){case Y.TYPE:return(0,D.jsx)(B,{annotation:e});case X.TYPE:return(0,D.jsx)(k,{annotation:e});case Q.TYPE:return(0,D.jsx)(W,{annotation:e});default:return null}},renderEditor:({annotation:e,onChange:t,onSubmit:n})=>(0,D.jsx)(L,{annotation:e,onChange:t,onSubmit:n}),renderHighlight:({key:e,annotation:t,active:n})=>{switch(t.geometry.type){case Y.TYPE:return(0,D.jsx)(H,{annotation:t,active:n},e);case X.TYPE:return(0,D.jsx)(k,{annotation:t},e);case Q.TYPE:return(0,D.jsx)(W,{annotation:t,active:n},e);default:return null}},renderContent:({key:e,annotation:t})=>(0,D.jsx)(te,{annotation:t},e),renderOverlay:({type:e,annotation:t}=P)=>{switch(e){case X.TYPE:return(0,D.jsx)(G,{children:`Click to Annotate`});default:return(0,D.jsx)(G,{children:`Click and Drag to Annotate`})}}},ve=n.default.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${G} {
    opacity: 1;
  }

  touch-action: ${e=>e.$allowTouch?`pinch-zoom`:`auto`};
`,ye=n.default.img`
  display: block;
  width: 100%;
  user-select: none;
`,be=n.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,xe=n.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Se({setContainerRef:e,style:n,className:r,onContainerMouseLeave:i,onContainerTouchCancel:a,onContainerMouseMove:o,allowTouch:s,setImageRef:c,src:l,alt:u,annotations:d,renderSlots:f,shouldAnnotationBeActive:p,topAnnotationAtMouse:m,disableSelector:h,value:g,setTargetRef:_,onInteractionTargetClick:v,onInteractionTargetMouseUp:y,onInteractionTargetMouseDown:b,disableOverlay:x,effectiveType:S,editModeAnnotationIds:C,disableEditor:w,onChange:T,onEditorSubmit:E,children:O}){let{renderHighlight:k,renderSelector:A,renderOverlay:j,renderContent:M,renderEditor:N}=f;return(0,D.jsxs)(ve,{ref:e,style:n,className:r,onMouseLeave:i,onTouchCancel:a,onMouseMove:o,$allowTouch:s,children:[(0,D.jsx)(ye,{ref:c,src:l,alt:u}),(0,D.jsxs)(be,{children:[d.map(e=>{if(!e.data?.id)return null;let n=p(e,m);return k?(0,D.jsx)(t.default.Fragment,{children:k({key:e.data.id,annotation:e,active:n})},e.data.id):null}),!h&&g?.geometry&&A&&A({annotation:g})]}),(0,D.jsx)(xe,{ref:_,"data-testid":`annotation-target`,onClick:v,onMouseUp:y,onMouseDown:b}),!x&&j&&j({type:S,annotation:g}),d.map(e=>{if(!e.data?.id)return null;let n=C?.includes(e.data.id)||!1;return(p(e,m)||n)&&M!=null?(0,D.jsx)(t.default.Fragment,{children:M({key:e.data.id,annotation:e})},e.data.id):null}),!w&&g?.selection?.showEditor&&N&&T&&N({annotation:g,onChange:T,onSubmit:E}),O]})}function Ce({ref:e,...n}){let{children:r,...i}=(0,t.useMemo)(()=>{let{renderSlots:e,...t}=n;return{...$,...t,selectors:t.selectors??$.selectors,renderSelector:t.renderSelector??e?.renderSelector??$.renderSelector,renderEditor:t.renderEditor??e?.renderEditor??$.renderEditor,renderHighlight:t.renderHighlight??e?.renderHighlight??$.renderHighlight,renderContent:t.renderContent??e?.renderContent??$.renderContent,renderOverlay:t.renderOverlay??e?.renderOverlay??$.renderOverlay,renderDraggableHighlight:t.renderDraggableHighlight??e?.renderDraggableHighlight??$.renderDraggableHighlight}},[n]);return(0,D.jsx)(Se,{...w(i,e),children:r})}Ce.displayName=`Annotation`;function we(e,t){if(!e||typeof e.getBoundingClientRect!=`function`)return!1;let{pageX:n,pageY:r}=t,{left:i,right:a,bottom:o,top:s}=e.getBoundingClientRect();return n>i&&n<a&&r>s&&r<o}function Te(){let[e,n]=(0,t.useState)(!1),r=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let e=e=>{let t=r.current;n(we(t,{pageX:e.pageX,pageY:e.pageY}))};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>{document.removeEventListener(`mousemove`,e)}},[]),{isHoveringOver:e,setRef:(0,t.useCallback)(e=>{r.current=e},[])}}var Ee=Ce;e.Annotation=Ce,e.OvalSelector=Q,e.PointSelector=X,e.RectangleSelector=Y,e.default=Ee,e.useAnnotationHitDetection=b,e.useMouseHover=Te,e.useRelativeMousePosition=y,e.useSelectorMethods=S});