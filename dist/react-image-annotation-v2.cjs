Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},s=(n,r,a)=>(a=n==null?{}:e(i(n)),o(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));let c=require(`react`);c=s(c);let l=require(`styled-components`);l=s(l);let u=require(`react/jsx-runtime`);var d=(e,t)=>{let n=t||e.currentTarget;if(!n||typeof n.getBoundingClientRect!=`function`)return{x:0,y:0};let r=n.getBoundingClientRect(),i=e.clientX-r.x,a=e.clientY-r.y;return{x:i/r.width*100,y:a/r.height*100}},f=(e,t,n)=>Math.max(e,Math.min(t,n)),p=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!=`function`)return{x:0,y:0};let t=e.targetTouches[0],n=e.currentTarget.getBoundingClientRect(),r=t.pageX-n.left,i=t.pageY-(n.top+window.scrollY);return{x:f(0,100,r/n.width*100),y:f(0,100,i/n.height*100)}},m=(e,t)=>h(e)?g(e)?(_(e)&&e.preventDefault(),p(e)):{x:null}:d(e,t),h=e=>e.targetTouches!==void 0,g=e=>e.targetTouches.length===1,_=e=>e.type===`touchmove`;function v(e,t={}){let{onPositionChange:n,throttleMs:r=16}=t,i=(0,c.useRef)({x:null,y:null}),[a,o]=(0,c.useState)({x:null,y:null}),s=(0,c.useRef)(0),l=(0,c.useRef)(null),u=(0,c.useCallback)(e=>{if(i.current=e,n){let t=Date.now();r<=0||t-s.current>=r?(o(e),n(e),s.current=t):(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{o(e),n(e),s.current=Date.now()},r-(t-s.current)))}},[n,r]),f=(0,c.useCallback)(t=>{try{let n=e.current;if(!n){u({x:null,y:null});return}u(d(t,n))}catch{u({x:null,y:null})}},[e,u]),p=(0,c.useCallback)(t=>{let n=e.current;if(!n||t.targetTouches.length!==1)return;let r=t.targetTouches[0],i=n.offsetParent;if(i)try{let e=r.pageX-i.offsetLeft,t=r.pageY-i.offsetTop,a=n,o=a.width,s=a.height;u(o>0&&s>0?{x:e/o*100,y:t/s*100}:{x:null,y:null})}catch{u({x:null,y:null})}},[e,u]),m=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),h=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),g=(0,c.useCallback)(()=>i.current,[]);return(0,c.useEffect)(()=>()=>{l.current&&clearTimeout(l.current)},[]),{mousePosition:n?a:i.current,handlers:{onMouseMove:f,onMouseLeave:m,onTouchMove:p,onTouchLeave:h},getCurrentMousePosition:g}}function y({annotations:e,selectors:t,imageRef:n,enableEditing:r}){let i=(0,c.useMemo)(()=>new Map(t.map(e=>[e.TYPE,e])),[t]),a=(0,c.useCallback)(e=>{if(e)return i.get(e)},[i]);return{getTopAnnotationAt:(0,c.useCallback)((t,i)=>{let o=n.current;if(!o||t===null||i===null)return;let s={x:t,y:i},c=e.map(e=>{let{geometry:t}=e;if(!t)return null;let n=a(t.type);if(!n)return null;let i=t;return r&&t.type===`RECTANGLE`&&typeof t.x==`number`&&typeof t.y==`number`&&typeof t.width==`number`&&typeof t.height==`number`&&(i={...t,x:Math.max(0,t.x-2),y:Math.max(0,t.y-2),width:Math.min(100-t.x+2,t.width+4),height:Math.min(100-t.y+2,t.height+4)}),n.intersects(s,i,o)?e:null}).filter(e=>e!==null);if(c.length!==0)return c.sort((e,t)=>{let n=a(e.geometry.type),r=a(t.geometry.type);return!n||!r?0:n.area(e.geometry,o)-r.area(t.geometry,o)})[0]},[e,a,n,r]),getSelectorByType:a}}function ee({targetRef:e,imageRef:t,annotations:n,selectors:r,enableEditing:i,throttleMs:a=50}){let[o,s]=(0,c.useState)(void 0),l=(0,c.useRef)(void 0),u=(0,c.useRef)(void 0),{getTopAnnotationAt:d}=y({annotations:n,selectors:r,imageRef:t,enableEditing:i}),{handlers:f}=v(e,{onPositionChange:(0,c.useCallback)(e=>{let{x:t,y:n}=e,r=d(t,n),i=r?.data?.id;i!==u.current&&(u.current=i,l.current=r,s(r))},[d]),throttleMs:a});return(0,c.useEffect)(()=>{s(void 0),l.current=void 0,u.current=void 0},[n,r]),{hoveredAnnotation:o,mouseHandlers:(0,c.useMemo)(()=>f,[f])}}function b({selectors:e,effectiveType:t,value:n,onChange:r,disableAnnotation:i}){let a=(0,c.useCallback)(t=>{if(t)return e.find(e=>e.TYPE===t)},[e]);return{callSelectorMethod:(0,c.useCallback)((e,o)=>{if(i)return;let s=a(t);if(!s?.methods[e])return;let c=s.methods[e];try{let i=c(n||{},o);if(i===void 0){process.env.NODE_ENV!==`production`&&console.error(`Selector method ${String(e)} of type ${t} returned undefined. Make sure to explicitly return the previous state or new state.`);return}r?.(i)}catch(t){process.env.NODE_ENV!==`production`&&console.error(`Error calling selector method ${String(e)}:`,t)}},[i,a,t,n,r]),getSelectorByType:a}}function x(e,t){e&&(typeof e==`function`?e(t):e.current=t)}function S(e,t){let{src:n,alt:r=`Annotation Image`,style:i,className:a,containerRef:o,imageRef:s,annotations:l,type:u,selectors:d,value:f,onChange:p,onSubmit:m,activeAnnotationComparator:h,activeAnnotations:g,editModeAnnotationIds:_,disableAnnotation:v,disableSelector:y,disableEditor:S,disableOverlay:te,allowTouch:C,renderSelector:w,renderEditor:T,renderHighlight:E,renderContent:D,renderOverlay:O,onImageMouseUp:k,onImageMouseDown:A,onImageMouseMove:j,onImageClick:M}=e,N=(0,c.useRef)(null),P=(0,c.useRef)(null),{hoveredAnnotation:ne,mouseHandlers:F}=ee({targetRef:P,imageRef:N,annotations:l,selectors:d,enableEditing:!S,throttleMs:50}),re=u||d[0]?.TYPE,{callSelectorMethod:I}=b({selectors:d,effectiveType:re,value:f,onChange:p,disableAnnotation:v}),L=(0,c.useCallback)(e=>{navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&C&&e.preventDefault(),I(`onTouchStart`,e)},[C,I]),R=(0,c.useCallback)(e=>{I(`onTouchEnd`,e)},[I]),z=(0,c.useCallback)(e=>{F.onTouchMove(e),navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&C&&e.preventDefault(),I(`onTouchMove`,e)},[F,C,I]),B=(0,c.useCallback)(e=>{F.onTouchLeave(e)},[F]);(0,c.useEffect)(()=>{let e=P.current;if(!(!C||!e))return e.ontouchstart=L,e.ontouchend=R,e.ontouchmove=z,e.ontouchcancel=B,()=>{e.ontouchstart=null,e.ontouchend=null,e.ontouchmove=null,e.ontouchcancel=null}},[C,L,R,z,B]);let V=(0,c.useCallback)(e=>{N.current=e,x(t,e),x(s,e)},[t,s]),ie=(0,c.useCallback)(e=>{P.current=e},[]),ae=(0,c.useCallback)(e=>{x(o,e)},[o]),oe=(0,c.useCallback)(e=>{F.onMouseMove(e.nativeEvent),j?.(e),I(`onMouseMove`,e)},[F,j,I]),H=(0,c.useCallback)(e=>{F.onMouseLeave(e.nativeEvent)},[F]),U=(0,c.useCallback)(e=>{k?.(e),I(`onMouseUp`,e)},[k,I]),W=(0,c.useCallback)(e=>{A?.(e),I(`onMouseDown`,e)},[A,I]),G=(0,c.useCallback)(e=>{M?.(e),I(`onClick`,e)},[M,I]),K=(0,c.useCallback)(()=>{m&&f&&m(f)},[m,f]),q=(0,c.useCallback)(e=>{e.key===`Escape`&&p&&(f?.selection?.showEditor||f?.geometry)&&p({selection:void 0,geometry:void 0,data:void 0})},[f,p]);(0,c.useEffect)(()=>{if(f?.selection?.showEditor)return window.addEventListener(`keydown`,q),()=>window.removeEventListener(`keydown`,q)},[f?.selection?.showEditor,q]);let J=ne;return{setContainerRef:ae,style:i,className:a,onContainerMouseLeave:H,onContainerTouchCancel:B,onContainerMouseMove:oe,allowTouch:C,setImageRef:V,src:n,alt:r,annotations:l,shouldAnnotationBeActive:(0,c.useCallback)((e,t)=>g&&g.some(t=>h?h(e,t):e.data.id===t)||t===e,[g,h]),topAnnotationAtMouse:J,disableSelector:!!y,value:f,setTargetRef:ie,onInteractionTargetClick:G,onInteractionTargetMouseUp:U,onInteractionTargetMouseDown:W,disableOverlay:!!te,effectiveType:re,editModeAnnotationIds:_,disableEditor:!!S,onChange:p,onEditorSubmit:K,renderSlots:{renderHighlight:E,renderSelector:w,renderOverlay:O,renderContent:D,renderEditor:T}}}var te=l.default.div`
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
`;function C(e){let{geometry:t}=e.annotation;return t?(0,u.jsx)(te,{style:{top:`${t.y}%`,left:`${t.x}%`}}):null}var w=l.default.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,T=l.default.div`
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
`,E=({onChange:e,onSubmit:t,onFocus:n,onBlur:r,value:i})=>{let a=c.default.useRef(null);return c.default.useEffect(()=>{a.current?.focus({preventScroll:!0})},[]),(0,u.jsxs)(c.default.Fragment,{children:[(0,u.jsx)(w,{children:(0,u.jsx)(`textarea`,{ref:a,placeholder:`Write description`,onFocus:n,onBlur:r,onChange:e,value:i})}),i&&(0,u.jsx)(T,{onClick:t,children:`Save description`})]})},D={},O={},k=l.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,A=16,j=l.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transform-origin: ${({$placement:e})=>e===`above`?`bottom left`:`top left`};

  animation: ${k} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,M=({annotation:e,onChange:t,onSubmit:n,className:r=``,style:i=D})=>{let{geometry:a}=e,o=c.default.useRef(null),[s,l]=c.default.useState(`below`);if(c.default.useLayoutEffect(()=>{let e=o.current,t=e?.parentElement;if(!e||!t||!a)return;let n=t.getBoundingClientRect(),r=e.offsetHeight;l(((a.y??0)+(a.height??0))/100*n.height+A+r>n.height?`above`:`below`)},[a,e.data?.text]),!a)return null;let d=s===`above`?{bottom:`calc(${100-(a.y??0)}% + ${A}px)`}:{top:`calc(${(a.y??0)+(a.height??0)}% + ${A}px)`};return(0,u.jsx)(j,{ref:o,className:r,$placement:s,style:{position:`absolute`,left:`${a.x??0}%`,...d,...i},children:(0,u.jsx)(E,{onChange:n=>t({...e,data:{...e.data,text:n.target.value}}),onSubmit:n,value:e.data?.text})})},N=l.default.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,P=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function ne({annotation:e,className:t=``,style:n=D}){let{geometry:r}=e;return r?(0,u.jsxs)(P,{className:t,style:n,children:[(0,u.jsx)(N,{style:{height:`${r.y}%`,width:`100%`}}),(0,u.jsx)(N,{style:{top:`${r.y}%`,height:`${r.height}%`,width:`${r.x}%`}}),(0,u.jsx)(N,{style:{top:`${r.y}%`,left:`${r.x+r.width}%`,height:`${r.height}%`,width:`${100-(r.x+r.width)}%`}}),(0,u.jsx)(N,{style:{top:`${r.y+r.height}%`,height:`${100-(r.y+r.height)}%`,width:`100%`}})]}):null}var F=l.default.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function re({annotation:e,className:t=``,style:n=D,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(F,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var I=l.default.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function L({annotation:e,className:t=``,style:n=D,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(I,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var R=l.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function z({annotation:e,style:t=D,className:n=``}){let{geometry:r}=e;return!r||r.x===void 0||r.y===void 0||r.width===void 0||r.height===void 0?null:(0,u.jsx)(R,{style:{position:`absolute`,left:`${r.x}%`,top:`${r.y+r.height}%`,...t},className:n,children:e.data&&e.data.text})}var B=l.default.div`
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
`,V=`RECTANGLE`;function ie({x:e,y:t},n,r){if(!n)return!1;let i=Math.min(n.x,n.x+n.width),a=Math.max(n.x,n.x+n.width),o=Math.min(n.y,n.y+n.height),s=Math.max(n.y,n.y+n.height);return!(e<i||t<o||e>a||t>s)}function ae(e,t){return!e||e.width<=0||e.height<=0?0:Math.abs(e.width)*Math.abs(e.height)}var oe={onTouchStart(e,t){return H(e,t)},onTouchEnd(e,t){return U(e,t)},onTouchMove(e,t){return W(e,t)},onMouseDown(e,t){return H(e,t)},onMouseUp(e,t){return U(e,t)},onMouseMove(e,t){return W(e,t)}};function H(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}}function U(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function W(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:V,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var G={TYPE:V,intersects:ie,area:ae,methods:oe},K=6,q=(e={width:100,height:100})=>({marginX:K/e.width*100,marginY:K/e.height*100}),J=`POINT`;function se({x:e,y:t},n,r){if(!n)return!1;let{marginX:i,marginY:a}=q(r),o=Math.min(i,a)/2,s=Math.abs(e-n.x),c=Math.abs(t-n.y);return s<=o&&c<=o}function ce(e,t){return 0}var Y={TYPE:J,intersects:se,area:ce,methods:{onClick(e,t){return e.geometry?{}:{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`},geometry:{...e.geometry,...m(t),width:0,height:0,type:J}}}}},X=e=>e**2,Z=`OVAL`;function le({x:e,y:t},n,r){if(!n||!n.width||!n.height)return!1;let i=Math.abs(n.width),a=Math.abs(n.height),o={x:n.x+i/2,y:n.y+a/2},s=i/2,c=a/2;if(s===0||c===0)return!1;let l=e-o.x,u=t-o.y;return X(l)/X(s)+X(u)/X(c)<=1}function ue(e,t){if(!e||e.width<=0||e.height<=0)return 0;let n=Math.abs(e.width),r=Math.abs(e.height);return n/2*Math.PI*(r/2)}var de={onTouchStart(e,t){return fe(e,t)},onTouchEnd(e,t){return pe(e,t)},onTouchMove(e,t){return me(e,t)},onMouseDown(e,t){if(!e.geometry){let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e},onMouseUp(e,t){if(e.selection&&e.selection.mode===`SELECTING`)return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}}},onMouseMove(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t);return{...e,geometry:{...e.geometry,type:Z,x:Math.min(n,i),y:Math.min(r,a),width:Math.abs(i-n),height:Math.abs(a-r)}}}return e}};function fe(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e}function pe(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function me(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:Z,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var Q={TYPE:Z,intersects:le,area:ue,methods:de},$={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,allowTouch:!1,type:G.TYPE,selectors:[G,Y,Q],activeAnnotationComparator:(e,t)=>e===t,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!==`production`&&console.warn(`onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.`)},renderSelector:({annotation:e})=>{switch(e.geometry?.type){case G.TYPE:return(0,u.jsx)(ne,{annotation:e});case Y.TYPE:return(0,u.jsx)(C,{annotation:e});case Q.TYPE:return(0,u.jsx)(L,{annotation:e});default:return null}},renderEditor:({annotation:e,onChange:t,onSubmit:n})=>(0,u.jsx)(M,{annotation:e,onChange:t,onSubmit:n}),renderHighlight:({key:e,annotation:t,active:n})=>{switch(t.geometry.type){case G.TYPE:return(0,u.jsx)(re,{annotation:t,active:n},e);case Y.TYPE:return(0,u.jsx)(C,{annotation:t},e);case Q.TYPE:return(0,u.jsx)(L,{annotation:t,active:n},e);default:return null}},renderContent:({key:e,annotation:t})=>(0,u.jsx)(z,{annotation:t},e),renderOverlay:({type:e,annotation:t}=O)=>{switch(e){case Y.TYPE:return(0,u.jsx)(B,{children:`Click to Annotate`});default:return(0,u.jsx)(B,{children:`Click and Drag to Annotate`})}}},he=l.default.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${B} {
    opacity: 1;
  }

  touch-action: ${e=>e.$allowTouch?`pinch-zoom`:`auto`};
`,ge=l.default.img`
  display: block;
  width: 100%;
  user-select: none;
`,_e=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,ve=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function ye({annotationId:e,annotation:t,active:n,renderHighlight:r}){return(0,u.jsx)(u.Fragment,{children:r({key:e,annotation:t,active:n})})}function be({annotationId:e,annotation:t,renderContent:n}){return(0,u.jsx)(u.Fragment,{children:n({key:e,annotation:t})})}function xe({setContainerRef:e,style:t,className:n,onContainerMouseLeave:r,onContainerTouchCancel:i,onContainerMouseMove:a,allowTouch:o,setImageRef:s,src:c,alt:l,annotations:d,renderSlots:f,shouldAnnotationBeActive:p,topAnnotationAtMouse:m,disableSelector:h,value:g,setTargetRef:_,onInteractionTargetClick:v,onInteractionTargetMouseUp:y,onInteractionTargetMouseDown:ee,disableOverlay:b,effectiveType:x,editModeAnnotationIds:S,disableEditor:te,onChange:C,onEditorSubmit:w,children:T}){let{renderHighlight:E,renderSelector:D,renderOverlay:O,renderContent:k,renderEditor:A}=f;return(0,u.jsxs)(he,{ref:e,style:t,className:n,onMouseLeave:r,onTouchCancel:i,onMouseMove:a,$allowTouch:o,children:[(0,u.jsx)(ge,{ref:s,src:c,alt:l}),(0,u.jsxs)(_e,{children:[d.map(e=>{let t=e.data?.id;if(!t)return null;let n=p(e,m);return E?(0,u.jsx)(ye,{annotationId:t,annotation:e,active:n,renderHighlight:E},t):null}),!h&&g?.geometry&&D&&D({annotation:g})]}),(0,u.jsx)(ve,{ref:_,"data-testid":`annotation-target`,onClick:v,onMouseUp:y,onMouseDown:ee}),!b&&O&&O({type:x,annotation:g}),d.map(e=>{let t=e.data?.id;if(!t)return null;let n=S?.includes(t)||!1;return(p(e,m)||n)&&k!=null?(0,u.jsx)(be,{annotationId:t,annotation:e,renderContent:k},t):null}),!te&&g?.selection?.showEditor&&A&&C&&A({annotation:g,onChange:C,onSubmit:w}),T]})}function Se({ref:e,...t}){let{children:n,...r}=(0,c.useMemo)(()=>{let{renderSlots:e,...n}=t;return{...$,...n,selectors:n.selectors??$.selectors,renderSelector:n.renderSelector??e?.renderSelector??$.renderSelector,renderEditor:n.renderEditor??e?.renderEditor??$.renderEditor,renderHighlight:n.renderHighlight??e?.renderHighlight??$.renderHighlight,renderContent:n.renderContent??e?.renderContent??$.renderContent,renderOverlay:n.renderOverlay??e?.renderOverlay??$.renderOverlay,renderDraggableHighlight:n.renderDraggableHighlight??e?.renderDraggableHighlight??$.renderDraggableHighlight}},[t]);return(0,u.jsx)(xe,{...S(r,e),children:n})}Se.displayName=`Annotation`;function Ce(e,t){if(!e||typeof e.getBoundingClientRect!=`function`)return!1;let{pageX:n,pageY:r}=t,{left:i,right:a,bottom:o,top:s}=e.getBoundingClientRect();return n>i&&n<a&&r>s&&r<o}function we(){let[e,t]=(0,c.useState)(!1),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=e=>{let r=n.current;t(Ce(r,{pageX:e.pageX,pageY:e.pageY}))};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>{document.removeEventListener(`mousemove`,e)}},[]),{isHoveringOver:e,setRef:(0,c.useCallback)(e=>{n.current=e},[])}}var Te=Se;exports.Annotation=Se,exports.OvalSelector=Q,exports.PointSelector=Y,exports.RectangleSelector=G,exports.default=Te,exports.useAnnotationHitDetection=y,exports.useMouseHover=we,exports.useRelativeMousePosition=v,exports.useSelectorMethods=b;