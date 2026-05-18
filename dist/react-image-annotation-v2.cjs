Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},s=(n,r,a)=>(a=n==null?{}:e(i(n)),o(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));let c=require(`react`);c=s(c);let l=require(`styled-components`);l=s(l);let u=require(`react/jsx-runtime`);var d=(e,t)=>{let n=t||e.currentTarget;if(!n||typeof n.getBoundingClientRect!=`function`)return{x:0,y:0};let r=n.getBoundingClientRect(),i=e.clientX-r.x,a=e.clientY-r.y;return{x:i/r.width*100,y:a/r.height*100}},f=(e,t,n)=>Math.max(e,Math.min(t,n)),p=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!=`function`)return{x:0,y:0};let t=e.targetTouches[0],n=e.currentTarget.getBoundingClientRect(),r=t.pageX-n.left,i=t.pageY-(n.top+window.scrollY);return{x:f(0,100,r/n.width*100),y:f(0,100,i/n.height*100)}},m=(e,t)=>h(e)?g(e)?(_(e)&&e.preventDefault(),p(e)):{x:null}:d(e,t),h=e=>e.targetTouches!==void 0,g=e=>e.targetTouches.length===1,_=e=>e.type===`touchmove`;function v(e,t={}){let{onPositionChange:n,throttleMs:r=16}=t,i=(0,c.useRef)({x:null,y:null}),[a,o]=(0,c.useState)({x:null,y:null}),s=(0,c.useRef)(0),l=(0,c.useRef)(null),u=(0,c.useCallback)(e=>{if(i.current=e,n){let t=Date.now();r<=0||t-s.current>=r?(o(e),n(e),s.current=t):(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{o(e),n(e),s.current=Date.now()},r-(t-s.current)))}},[n,r]),f=(0,c.useCallback)(t=>{try{let n=e.current;if(!n){u({x:null,y:null});return}u(d(t,n))}catch{u({x:null,y:null})}},[e,u]),p=(0,c.useCallback)(t=>{let n=e.current;if(!n||t.targetTouches.length!==1)return;let r=t.targetTouches[0],i=n.offsetParent;if(i)try{let e=r.pageX-i.offsetLeft,t=r.pageY-i.offsetTop,a=n,o=a.width,s=a.height;u(o>0&&s>0?{x:e/o*100,y:t/s*100}:{x:null,y:null})}catch{u({x:null,y:null})}},[e,u]),m=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),h=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),g=(0,c.useCallback)(()=>i.current,[]);return(0,c.useEffect)(()=>()=>{l.current&&clearTimeout(l.current)},[]),{mousePosition:n?a:i.current,handlers:{onMouseMove:f,onMouseLeave:m,onTouchMove:p,onTouchLeave:h},getCurrentMousePosition:g}}function y({annotations:e,selectors:t,imageRef:n,enableEditing:r}){let i=(0,c.useMemo)(()=>new Map(t.map(e=>[e.TYPE,e])),[t]),a=(0,c.useCallback)(e=>{if(e)return i.get(e)},[i]);return{getTopAnnotationAt:(0,c.useCallback)((t,i)=>{let o=n.current;if(!o||t===null||i===null)return;let s={x:t,y:i},c=e.map(e=>{let{geometry:t}=e;if(!t)return null;let n=a(t.type);if(!n)return null;let i=t;return r&&t.type===`RECTANGLE`&&typeof t.x==`number`&&typeof t.y==`number`&&typeof t.width==`number`&&typeof t.height==`number`&&(i={...t,x:Math.max(0,t.x-2),y:Math.max(0,t.y-2),width:Math.min(100-t.x+2,t.width+4),height:Math.min(100-t.y+2,t.height+4)}),n.intersects(s,i,o)?e:null}).filter(e=>e!==null);if(c.length!==0)return c.sort((e,t)=>{let n=a(e.geometry.type),r=a(t.geometry.type);return!n||!r?0:n.area(e.geometry,o)-r.area(t.geometry,o)})[0]},[e,a,n,r]),getSelectorByType:a}}function b({targetRef:e,imageRef:t,annotations:n,selectors:r,enableEditing:i,throttleMs:a=50}){let[o,s]=(0,c.useState)(void 0),l=(0,c.useRef)(void 0),u=(0,c.useRef)(void 0),{getTopAnnotationAt:d}=y({annotations:n,selectors:r,imageRef:t,enableEditing:i}),{handlers:f}=v(e,{onPositionChange:(0,c.useCallback)(e=>{let{x:t,y:n}=e,r=d(t,n),i=r?.data?.id;i!==u.current&&(u.current=i,l.current=r,s(r))},[d]),throttleMs:a});return(0,c.useEffect)(()=>{s(void 0),l.current=void 0,u.current=void 0},[n,r]),{hoveredAnnotation:o,mouseHandlers:(0,c.useMemo)(()=>f,[f])}}function x({selectors:e,effectiveType:t,value:n,onChange:r,disableAnnotation:i}){let a=(0,c.useCallback)(t=>{if(t)return e.find(e=>e.TYPE===t)},[e]);return{callSelectorMethod:(0,c.useCallback)((e,o)=>{if(i)return;let s=a(t);if(!s?.methods[e])return;let c=s.methods[e];try{let i=c(n||{},o);if(i===void 0){process.env.NODE_ENV!==`production`&&console.error(`Selector method ${String(e)} of type ${t} returned undefined. Make sure to explicitly return the previous state or new state.`);return}r?.(i)}catch(t){process.env.NODE_ENV!==`production`&&console.error(`Error calling selector method ${String(e)}:`,t)}},[i,a,t,n,r]),getSelectorByType:a}}var S=100;function C(e){let{x:t=0,y:n=0,width:r=0,height:i=0}=e;return r=Math.max(r,0),i=Math.max(i,0),t=Math.min(t,S-r),n=Math.min(n,S-i),{...e,x:t,y:n,width:r,height:i}}function ee({annotations:e,onAnnotationsChange:t,imageRef:n,previewMode:r=!1}){let[i,a]=(0,c.useState)(!1),[o,s]=(0,c.useState)(void 0),[l,u]=(0,c.useState)(()=>new Map),d=(0,c.useRef)(null),f=(0,c.useRef)(new Map),p=(0,c.useCallback)(()=>{let e=n.current;if(!e)return{width:1,height:1};let t=e.getBoundingClientRect();return{width:t.width,height:t.height}},[n]),m=(0,c.useCallback)((n,i)=>{let a=C(i);if(r){u(e=>{let t=new Map(e);return t.set(n,a),t});return}t?.(e.map(e=>e.data?.id===n?{...e,geometry:a}:e))},[r,t,e]),h=(0,c.useCallback)((e,t,n,r)=>{let{width:i,height:a}=p(),o=e.clientX-r.x,s=e.clientY-r.y,c={...n};switch(t){case`top`:c.height=Math.min((n.height??0)-s/a*S,(n.y??0)+(n.height??0)),c.y=Math.max((n.y??0)+s/a*S,0);break;case`right`:c.width=Math.min((n.width??0)+o/i*S,S-(n.x??0));break;case`bottom`:c.height=Math.min((n.height??0)+s/a*S,S-(n.y??0));break;case`left`:c.width=Math.min((n.width??0)-o/i*S,(n.x??0)+(n.width??0)),c.x=Math.max((n.x??0)+o/i*S,0);break;default:break}return C(c)},[p]),g=(0,c.useCallback)((e,t)=>{let{width:n,height:r}=p(),i=e.clientX-t.initialCursorPosition.x,a=e.clientY-t.initialCursorPosition.y,o=t.initialGeometry;return C({...o,x:Math.max(Math.min((o.x??0)+i/n*S,S-(o.width??0)),0),y:Math.max(Math.min((o.y??0)+a/r*S,S-(o.height??0)),0)})},[p]),_=(0,c.useCallback)((t,n)=>{let r=e.find(e=>e.data?.id===t),i=l.get(t)??r?.geometry;i&&(d.current={annotationId:t,initialGeometry:{...i},initialCursorPosition:n},f.current.set(t,{...i}),s(t),a(!0))},[e,l]),v=(0,c.useCallback)((e,t)=>{_(e,t)},[_]),y=(0,c.useCallback)((e,t,n)=>{let r=d.current;if(!r)return;let i=h(e,t,r.initialGeometry,r.initialCursorPosition);m(r.annotationId,i)},[h,m]),b=(0,c.useCallback)((e,t)=>{_(e,t)},[_]),x=(0,c.useCallback)((e,t)=>{let n=d.current;if(!n)return;let r=g(e,n);m(n.annotationId,r)},[g,m]),ee=(0,c.useCallback)(()=>{a(!1),d.current=null},[]);return{isDragging:i,draggingAnnotationId:o,hasPendingChanges:(0,c.useCallback)(e=>l.has(e),[l]),onDotDragStart:v,onDotDrag:y,onMoveStart:b,onMove:x,onDragEnd:ee,handleConfirm:(0,c.useCallback)(n=>{let r=l.get(n);r&&t&&t(e.map(e=>e.data?.id===n?{...e,geometry:r}:e)),u(e=>{let t=new Map(e);return t.delete(n),t}),f.current.delete(n),a(!1),s(void 0),d.current=null},[l,t,e]),handleReset:(0,c.useCallback)(n=>{let r=d.current,i=f.current.get(n)??(r?.annotationId===n?r.initialGeometry:e.find(e=>e.data?.id===n)?.geometry);i&&t&&t(e.map(e=>e.data?.id===n?{...e,geometry:i}:e)),u(e=>{let t=new Map(e);return t.delete(n),t}),f.current.delete(n),a(!1),s(void 0),d.current=null},[e,t]),getEffectiveAnnotation:(0,c.useCallback)(e=>{let t=e.data?.id;if(t==null)return e;let n=l.get(t);return n?{...e,geometry:n}:e},[l])}}function te(e){let[t,n]=(0,c.useState)(null),r=(0,c.useRef)(null),i=(0,c.useRef)(null),a=(0,c.useCallback)(()=>{i.current!=null&&(clearTimeout(i.current),i.current=null)},[]),o=(0,c.useCallback)(()=>{a(),i.current=setTimeout(()=>{r.current??n(null),i.current=null},300)},[a]);return(0,c.useEffect)(()=>{let t=e?.data?.id;if(t!=null){a(),n(t);return}r.current??o()},[e,a,o]),(0,c.useEffect)(()=>()=>a(),[a]),{pinnedControlsId:t,onDeleteControlMouseEnter:(0,c.useCallback)(e=>{a(),r.current=e,n(e)},[a]),onDeleteControlMouseLeave:(0,c.useCallback)(()=>{r.current=null,o()},[o])}}function w(e,t){e&&(typeof e==`function`?e(t):e.current=t)}function T(e,t){let{src:n,alt:r=`Annotation Image`,style:i,className:a,containerRef:o,imageRef:s,annotations:l,type:u,selectors:d,value:f,onChange:p,onSubmit:m,activeAnnotationComparator:h,activeAnnotations:g,editModeAnnotationIds:_,disableAnnotation:v,disableSelector:y,disableEditor:S,disableOverlay:C,disableContent:T,disableHitTesting:ne,allowTouch:E,enableEditing:D=!1,onAnnotationsChange:re,renderSelector:ie,renderEditor:O,renderHighlight:ae,renderDraggableHighlight:oe,renderContent:k,renderOverlay:se,enableRemoval:ce,onRemoveAnnotation:A,canRemoveAnnotation:j,renderDelete:M,onConfirm:N,onReset:P,onImageMouseUp:le,onImageMouseDown:F,onImageMouseMove:I,onImageClick:L,onImageLoad:R,onImageError:ue}=e,z=(0,c.useRef)(null),B=(0,c.useRef)(null),{hoveredAnnotation:V,mouseHandlers:H}=b({targetRef:B,imageRef:z,annotations:l,selectors:d,enableEditing:D,throttleMs:50}),{isDragging:U,draggingAnnotationId:de,hasPendingChanges:fe,onDotDragStart:pe,onDotDrag:me,onMoveStart:W,onMove:he,onDragEnd:ge,handleConfirm:_e,handleReset:G,getEffectiveAnnotation:ve}=ee({annotations:l,onAnnotationsChange:re,imageRef:z,previewMode:!!(N&&P)}),ye=(0,c.useMemo)(()=>({onDotDragStart:pe,onDotDrag:me,onMoveStart:W,onMove:he,onDragEnd:ge}),[pe,me,W,he,ge]),be=(0,c.useCallback)(e=>{_e(e),N?.(e)},[_e,N]),xe=(0,c.useCallback)(e=>{G(e),P?.(e)},[G,P]),Se=u||d[0]?.TYPE,{callSelectorMethod:K}=x({selectors:d,effectiveType:Se,value:f,onChange:p,disableAnnotation:v}),Ce=(0,c.useCallback)(e=>{navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&E&&e.preventDefault(),K(`onTouchStart`,e)},[E,K]),we=(0,c.useCallback)(e=>{K(`onTouchEnd`,e)},[K]),Te=(0,c.useCallback)(e=>{H.onTouchMove(e),navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&E&&e.preventDefault(),K(`onTouchMove`,e)},[H,E,K]),q=(0,c.useCallback)(e=>{H.onTouchLeave(e)},[H]);(0,c.useEffect)(()=>{let e=B.current;if(!(!E||!e))return e.ontouchstart=Ce,e.ontouchend=we,e.ontouchmove=Te,e.ontouchcancel=q,()=>{e.ontouchstart=null,e.ontouchend=null,e.ontouchmove=null,e.ontouchcancel=null}},[E,Ce,we,Te,q]);let J=(0,c.useCallback)(e=>{z.current=e,w(t,e),w(s,e)},[t,s]),Ee=(0,c.useCallback)(e=>{B.current=e},[]),De=(0,c.useCallback)(e=>{w(o,e)},[o]),Oe=(0,c.useCallback)(e=>{H.onMouseMove(e.nativeEvent),I?.(e),K(`onMouseMove`,e)},[H,I,K]),ke=(0,c.useCallback)(e=>{H.onMouseLeave(e.nativeEvent)},[H]),Ae=(0,c.useCallback)(e=>{le?.(e),K(`onMouseUp`,e)},[le,K]),Y=(0,c.useCallback)(e=>{F?.(e),K(`onMouseDown`,e)},[F,K]),X=(0,c.useCallback)(e=>{L?.(e),K(`onClick`,e)},[L,K]),je=(0,c.useCallback)(()=>{m&&f&&m(f)},[m,f]),Me=(0,c.useCallback)(e=>{e.key===`Escape`&&p&&(f?.selection?.showEditor||f?.geometry)&&p({selection:void 0,geometry:void 0,data:void 0})},[f,p]);(0,c.useEffect)(()=>{if(f?.selection?.showEditor)return window.addEventListener(`keydown`,Me),()=>window.removeEventListener(`keydown`,Me)},[f?.selection?.showEditor,Me]);let Ne=V,{pinnedControlsId:Z,onDeleteControlMouseEnter:Pe,onDeleteControlMouseLeave:Fe}=te(V),Ie=(0,c.useCallback)((e,t)=>{let n=e.data?.id;return n!=null&&Z!=null&&n===Z?!0:g&&g.some(t=>h?h(e,t):e.data.id===t)||t===e},[g,h,Z]);return{setContainerRef:De,style:i,className:a,onContainerMouseLeave:ke,onContainerTouchCancel:q,onContainerMouseMove:Oe,setImageRef:J,src:n,alt:r,annotations:l,layoutOptions:{touchEnabled:E,selectorDisabled:!!y||D&&U,overlayDisabled:!!C,editorDisabled:!!S||D&&U,contentDisabled:!!T,hitTestingDisabled:!!ne||D&&U,enableEditing:D},onImageLoad:R,onImageError:ue,annotationState:{getIsActive:Ie,topAnnotation:Ne,editModeIds:_,isDragging:U,draggingAnnotationId:de,hasPendingChanges:fe,getEffectiveAnnotation:D?ve:void 0,draggingHandlers:D?ye:void 0,onConfirm:D?be:void 0,onReset:D?xe:void 0,enableRemoval:ce,onRemoveAnnotation:A,canRemoveAnnotation:j,onDeleteControlMouseEnter:Pe,onDeleteControlMouseLeave:Fe},value:f,setTargetRef:Ee,onInteractionTargetClick:X,onInteractionTargetMouseUp:Ae,onInteractionTargetMouseDown:Y,effectiveType:Se,onChange:p,onEditorSubmit:je,renderSlots:{renderHighlight:ae,renderDraggableHighlight:oe,renderSelector:ie,renderOverlay:se,renderContent:k,renderEditor:O,renderDelete:M}}}var ne=l.default.div`
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
`;function E(e){let{geometry:t}=e.annotation;return t?(0,u.jsx)(ne,{style:{top:`${t.y}%`,left:`${t.x}%`}}):null}var D=l.default.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,re=l.default.div`
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
`,ie=({onChange:e,onSubmit:t,onFocus:n,onBlur:r,value:i})=>{let a=c.default.useRef(null);return c.default.useEffect(()=>{a.current?.focus({preventScroll:!0})},[]),(0,u.jsxs)(c.default.Fragment,{children:[(0,u.jsx)(D,{children:(0,u.jsx)(`textarea`,{ref:a,placeholder:`Write description`,onFocus:n,onBlur:r,onChange:e,value:i})}),i&&(0,u.jsx)(re,{onClick:t,children:`Save description`})]})},O={},ae={},oe=l.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,k=16,se=l.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transform-origin: ${({$placement:e})=>e===`above`?`bottom left`:`top left`};

  animation: ${oe} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,ce=({annotation:e,onChange:t,onSubmit:n,className:r=``,style:i=O})=>{let{geometry:a}=e,o=c.default.useRef(null),[s,l]=c.default.useState(`below`);if(c.default.useLayoutEffect(()=>{let e=o.current,t=e?.parentElement;if(!e||!t||!a)return;let n=t.getBoundingClientRect(),r=e.offsetHeight;l(((a.y??0)+(a.height??0))/100*n.height+k+r>n.height?`above`:`below`)},[a,e.data?.text]),!a)return null;let d=s===`above`?{bottom:`calc(${100-(a.y??0)}% + ${k}px)`}:{top:`calc(${(a.y??0)+(a.height??0)}% + ${k}px)`};return(0,u.jsx)(se,{ref:o,className:r,$placement:s,style:{position:`absolute`,left:`${a.x??0}%`,...d,...i},children:(0,u.jsx)(ie,{onChange:n=>t({...e,data:{...e.data,text:n.target.value}}),onSubmit:n,value:e.data?.text})})},A=l.default.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,j=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function M({annotation:e,className:t=``,style:n=O}){let{geometry:r}=e;return r?(0,u.jsxs)(j,{className:t,style:n,children:[(0,u.jsx)(A,{style:{height:`${r.y}%`,width:`100%`}}),(0,u.jsx)(A,{style:{top:`${r.y}%`,height:`${r.height}%`,width:`${r.x}%`}}),(0,u.jsx)(A,{style:{top:`${r.y}%`,left:`${r.x+r.width}%`,height:`${r.height}%`,width:`${100-(r.x+r.width)}%`}}),(0,u.jsx)(A,{style:{top:`${r.y+r.height}%`,height:`${100-(r.y+r.height)}%`,width:`100%`}})]}):null}var N=l.default.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function P({annotation:e,className:t=``,style:n=O,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(N,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var le=l.default.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function F({annotation:e,className:t=``,style:n=O,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(le,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var I=l.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;function L({annotation:e,style:t=O,className:n=``}){let{geometry:r}=e;return!r||r.x===void 0||r.y===void 0||r.width===void 0||r.height===void 0?null:(0,u.jsx)(I,{style:{position:`absolute`,left:`${r.x}%`,top:`${r.y+r.height}%`,...t},className:n,children:e.data&&e.data.text})}var R=l.default.div`
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
`,ue=()=>(0,u.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,u.jsx)(`path`,{d:`M12 3V9M12 3L9 6M12 3L15 6M12 15V21M12 21L15 18M12 21L9 18M3 12H9M3 12L6 15M3 12L6 9M15 12H21M21 12L18 9M21 12L18 15`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),z=20,B=44;function V(e){return(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,u.jsx)(`path`,{d:`M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z`,fill:`currentColor`})})}var H=l.default.button`
  border-radius: 10px;
  position: relative;
  border: none !important;
  box-shadow: 0 0 10px rgba(119, 127, 152, 0.2);
  z-index: 1;
  background-color: white;
  height: ${20}px;
  width: ${20}px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: auto;
  }

  opacity: ${e=>e.$disabled?.5:1};
  cursor: ${e=>e.$disabled?`not-allowed`:`pointer`};

  &:hover:not(:disabled) {
    background-color: lightgray;
    transform: scale(1.1);
  }
`,U=(0,l.default)(V)`
  width: 12px;
  height: 12px;
  color: #0f0f0f;
  flex-shrink: 0;
`,de=({annotationId:e,onRemove:t,disabled:n,className:r,style:i})=>(0,u.jsx)(H,{type:`button`,className:r,style:i,onClick:r=>{r.stopPropagation(),!n&&t(e)},disabled:n,"aria-label":`Remove annotation`,$disabled:n,"data-testid":`annotation-delete-button`,children:(0,u.jsx)(U,{})});function fe(e){return!e||typeof e.x!=`number`||typeof e.y!=`number`||typeof e.width!=`number`?null:{left:`calc(${e.x}% + ${e.width}%)`,top:`calc(${e.y}%)`,transform:`translate(-50%, -50%)`}}var pe={position:`absolute`,top:0,right:0,transform:`translate(50%, -50%)`,width:44,height:44,display:`flex`,alignItems:`center`,justifyContent:`center`,pointerEvents:`auto`,zIndex:20},me=l.default.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
  z-index: 20;
`,W=l.default.button`
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

  &:hover {
    background-color: lightgray;
  }
`,he=({onConfirm:e,onReset:t})=>(0,u.jsxs)(me,{onMouseDown:e=>e.stopPropagation(),children:[(0,u.jsx)(W,{type:`button`,onClick:t=>{t.stopPropagation(),e()},children:`✓`}),(0,u.jsx)(W,{type:`button`,onClick:e=>{e.stopPropagation(),t()},children:`✕`})]}),ge=l.default.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  z-index: 15;
  pointer-events: auto;

  ${e=>{switch(e.$position){case`top`:return`
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
        `;case`right`:return`
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
        `;case`bottom`:return`
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
        `;case`left`:return`
          left: -5px;
          top: 50%;
          transform: translateY(-50%);
        `;default:return``}}}
`,_e=l.default.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  width: 20px;
  height: 20px;
  cursor: move;
  z-index: 15;
  pointer-events: auto;
`,G=({position:e,onDragStart:t,onDrag:n,onDragEnd:r,annotationId:i})=>(0,u.jsx)(ge,{$position:e,onMouseDown:a=>{a.preventDefault(),a.stopPropagation();let o={x:a.clientX,y:a.clientY};t(i,o);let s=t=>{n(t,e,o)},c=()=>{document.removeEventListener(`mousemove`,s),document.removeEventListener(`mouseup`,c),r?.()};document.addEventListener(`mousemove`,s),document.addEventListener(`mouseup`,c)},onClick:e=>e.stopPropagation(),"data-type":`dot`}),ve=({onMoveStart:e,onMove:t,onMoveEnd:n,annotationId:r})=>(0,u.jsx)(_e,{onMouseDown:i=>{i.preventDefault(),i.stopPropagation();let a={x:i.clientX,y:i.clientY};e(r,a);let o=e=>{t(e,a)},s=()=>{document.removeEventListener(`mousemove`,o),document.removeEventListener(`mouseup`,s),n?.()};document.addEventListener(`mousemove`,o),document.addEventListener(`mouseup`,s)},onClick:e=>e.stopPropagation(),"data-type":`move-button`,children:(0,u.jsx)(ue,{})}),ye=l.default.div`
  position: absolute;
  border: none;
  background: rgba(151, 151, 151, 0.3);
  border-radius: 3px;
  pointer-events: auto;
  z-index: 10;
  box-sizing: border-box;
`,be=({annotation:e,isDragging:t,hasPendingChanges:n,onDotDragStart:r,onDotDrag:i,onMoveStart:a,onMove:o,onDragEnd:s,enableRemoval:l,onRemoveAnnotation:d,onConfirm:f,onReset:p,onDeleteControlMouseEnter:m,onDeleteControlMouseLeave:h})=>{let{geometry:g}=e,_=e.data?.id,v=(0,c.useRef)(null),y=(t||n)&&f&&p;if((0,c.useEffect)(()=>{if(t||n||!p||_==null)return;let e=e=>{let t=v.current;if(!t)return;let n=t.getBoundingClientRect(),{clientX:r,clientY:i}=e;(r<n.left||r>n.right||i<n.top||i>n.bottom)&&p(_)};return document.addEventListener(`mousemove`,e),()=>{document.removeEventListener(`mousemove`,e)}},[t,n,p,_]),!g||typeof g.x!=`number`||typeof g.y!=`number`||typeof g.width!=`number`||typeof g.height!=`number`)return null;let b=String(_??``);return(0,u.jsxs)(ye,{ref:v,className:`rectangle-editor-box`,style:{left:`${g.x}%`,top:`${g.y}%`,width:`${g.width}%`,height:`${g.height}%`},"data-annotation-draggable-box":!0,children:[(0,u.jsx)(G,{position:`top`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(G,{position:`right`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(G,{position:`bottom`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(G,{position:`left`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(ve,{onMoveStart:a,onMove:o,onMoveEnd:s,annotationId:b}),l&&d&&_!=null&&(0,u.jsx)(`div`,{style:pe,onMouseEnter:()=>m?.(_),onMouseLeave:()=>h?.(),onPointerEnter:()=>m?.(_),onPointerLeave:()=>h?.(),children:(0,u.jsx)(de,{annotationId:_,onRemove:d})}),y&&(0,u.jsx)(he,{onConfirm:()=>f(_),onReset:()=>p(_)})]})},xe=`RECTANGLE`;function Se({x:e,y:t},n,r){if(!n)return!1;let i=Math.min(n.x,n.x+n.width),a=Math.max(n.x,n.x+n.width),o=Math.min(n.y,n.y+n.height),s=Math.max(n.y,n.y+n.height);return!(e<i||t<o||e>a||t>s)}function K(e,t){return!e||e.width<=0||e.height<=0?0:Math.abs(e.width)*Math.abs(e.height)}var Ce={onTouchStart(e,t){return we(e,t)},onTouchEnd(e,t){return Te(e,t)},onTouchMove(e,t){return q(e,t)},onMouseDown(e,t){return we(e,t)},onMouseUp(e,t){return Te(e,t)},onMouseMove(e,t){return q(e,t)}};function we(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}}function Te(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function q(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:xe,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var J={TYPE:xe,intersects:Se,area:K,methods:Ce},Ee=6,De=(e={width:100,height:100})=>({marginX:Ee/e.width*100,marginY:Ee/e.height*100}),Oe=`POINT`;function ke({x:e,y:t},n,r){if(!n)return!1;let{marginX:i,marginY:a}=De(r),o=Math.min(i,a)/2,s=Math.abs(e-n.x),c=Math.abs(t-n.y);return s<=o&&c<=o}function Ae(e,t){return 0}var Y={TYPE:Oe,intersects:ke,area:Ae,methods:{onClick(e,t){return e.geometry?{}:{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`},geometry:{...e.geometry,...m(t),width:0,height:0,type:Oe}}}}},X=e=>e**2,je=`OVAL`;function Me({x:e,y:t},n,r){if(!n||!n.width||!n.height)return!1;let i=Math.abs(n.width),a=Math.abs(n.height),o={x:n.x+i/2,y:n.y+a/2},s=i/2,c=a/2;if(s===0||c===0)return!1;let l=e-o.x,u=t-o.y;return X(l)/X(s)+X(u)/X(c)<=1}function Ne(e,t){if(!e||e.width<=0||e.height<=0)return 0;let n=Math.abs(e.width),r=Math.abs(e.height);return n/2*Math.PI*(r/2)}var Z={onTouchStart(e,t){return Pe(e,t)},onTouchEnd(e,t){return Fe(e,t)},onTouchMove(e,t){return Ie(e,t)},onMouseDown(e,t){if(!e.geometry){let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e},onMouseUp(e,t){if(e.selection&&e.selection.mode===`SELECTING`)return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}}},onMouseMove(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t);return{...e,geometry:{...e.geometry,type:je,x:Math.min(n,i),y:Math.min(r,a),width:Math.abs(i-n),height:Math.abs(a-r)}}}return e}};function Pe(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e}function Fe(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function Ie(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:je,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var Q={TYPE:je,intersects:Me,area:Ne,methods:Z},$={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,disableContent:!1,disableHitTesting:!1,allowTouch:!1,type:J.TYPE,selectors:[J,Y,Q],activeAnnotationComparator:(e,t)=>e===t,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!==`production`&&console.warn(`onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.`)},renderSelector:({annotation:e})=>{switch(e.geometry?.type){case J.TYPE:return(0,u.jsx)(M,{annotation:e});case Y.TYPE:return(0,u.jsx)(E,{annotation:e});case Q.TYPE:return(0,u.jsx)(F,{annotation:e});default:return null}},renderEditor:({annotation:e,onChange:t,onSubmit:n})=>(0,u.jsx)(ce,{annotation:e,onChange:t,onSubmit:n}),renderHighlight:({key:e,annotation:t,active:n})=>{switch(t.geometry.type){case J.TYPE:return(0,u.jsx)(P,{annotation:t,active:n},e);case Y.TYPE:return(0,u.jsx)(E,{annotation:t},e);case Q.TYPE:return(0,u.jsx)(F,{annotation:t,active:n},e);default:return null}},renderContent:({key:e,annotation:t})=>(0,u.jsx)(L,{annotation:t},e),renderOverlay:({type:e,annotation:t}=ae)=>{switch(e){case Y.TYPE:return(0,u.jsx)(R,{children:`Click to Annotate`});default:return(0,u.jsx)(R,{children:`Click and Drag to Annotate`})}},renderDraggableHighlight:({key:e,annotation:t,active:n,isHovered:r,isDragging:i,hasPendingChanges:a,onDotDragStart:o,onDotDrag:s,onMoveStart:c,onMove:l,onDragEnd:d,enableRemoval:f,onRemoveAnnotation:p,onConfirm:m,onReset:h,onDeleteControlMouseEnter:g,onDeleteControlMouseLeave:_})=>{if(!r&&!i&&!a)switch(t.geometry.type){case J.TYPE:return(0,u.jsx)(P,{annotation:t,active:n},e);case Y.TYPE:return(0,u.jsx)(E,{annotation:t},e);case Q.TYPE:return(0,u.jsx)(F,{annotation:t,active:n},e);default:return null}if(t.geometry.type===J.TYPE)return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(be,{annotation:t,active:n,isHovered:r,isDragging:i,hasPendingChanges:a,onDotDragStart:o,onDotDrag:s,onMoveStart:c,onMove:l,onDragEnd:d,enableRemoval:f,onRemoveAnnotation:p,onConfirm:m,onReset:h,onDeleteControlMouseEnter:g,onDeleteControlMouseLeave:_},`${e}-editor`),(0,u.jsx)(P,{annotation:t,active:n,style:{pointerEvents:`none`}},`${e}-highlight`)]});switch(t.geometry.type){case Y.TYPE:return(0,u.jsx)(E,{annotation:t},e);case Q.TYPE:return(0,u.jsx)(F,{annotation:t,active:n},e);default:return null}}},Le=l.default.div`
  position: absolute;
  pointer-events: auto;
  z-index: 10;
  width: ${44}px;
  height: ${44}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;function Re({annotation:e,onRemove:t,renderDelete:n,disabled:r,onDeleteControlMouseEnter:i,onDeleteControlMouseLeave:a}){let[o,s]=(0,c.useState)(!1),l=e.data?.id,d=fe(e.geometry),f=r||o,p=(0,c.useCallback)(async()=>{if(!(f||l==null)){s(!0);try{await t(l)}finally{s(!1)}}},[l,f,t]),m=(0,c.useCallback)(()=>{l!=null&&i?.(l)},[l,i]),h=(0,c.useCallback)(()=>{a?.()},[a]);if(!d||l==null)return null;let g={onMouseEnter:m,onMouseLeave:h,onPointerEnter:m,onPointerLeave:h};return n?(0,u.jsx)(Le,{style:d,...g,children:n({key:l,annotation:e,active:!0,onRemove:p,disabled:f})}):(0,u.jsx)(Le,{style:d,className:`annotation-delete`,...g,children:(0,u.jsx)(de,{annotationId:l,onRemove:p,disabled:f})})}var ze=l.default.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${R} {
    opacity: 1;
  }

  touch-action: ${e=>e.$allowTouch?`pinch-zoom`:`auto`};
`,Be=l.default.img`
  display: block;
  width: 100%;
  user-select: none;
`,Ve=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,He=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: ${e=>e.$hitTestingDisabled?`none`:`auto`};
`;function Ue({annotationId:e,annotation:t,active:n,slot:r}){return(0,u.jsx)(u.Fragment,{children:r({key:e,annotation:t,active:n})})}function We({annotationId:e,annotation:t,slot:n}){return(0,u.jsx)(u.Fragment,{children:n({key:e,annotation:t})})}function Ge({enableRemoval:e,onRemoveAnnotation:t,isActive:n,annotation:r,canRemoveAnnotation:i,enableEditing:a,draggableHighlightSlot:o,isHovered:s}){return!e||!t||!n||i&&!i(r)?!1:!(a&&o&&s&&r.geometry?.type===J.TYPE)}function Ke({setContainerRef:e,style:t,className:n,onContainerMouseLeave:r,onContainerTouchCancel:i,onContainerMouseMove:a,setImageRef:o,src:s,alt:l,annotations:d,renderSlots:f,layoutOptions:p,annotationState:m,value:h,setTargetRef:g,onInteractionTargetClick:_,onInteractionTargetMouseUp:v,onInteractionTargetMouseDown:y,effectiveType:b,onChange:x,onEditorSubmit:S,onImageLoad:C,onImageError:ee,children:te}){let{renderHighlight:w,renderDraggableHighlight:T,renderSelector:ne,renderOverlay:E,renderContent:D,renderEditor:re,renderDelete:ie}=f,{touchEnabled:O,selectorDisabled:ae,overlayDisabled:oe,editorDisabled:k,contentDisabled:se,hitTestingDisabled:ce,enableEditing:A}=p,{getIsActive:j,topAnnotation:M,editModeIds:N,isDragging:P,draggingAnnotationId:le,hasPendingChanges:F,getEffectiveAnnotation:I,draggingHandlers:L,onConfirm:R,onReset:ue,enableRemoval:z,onRemoveAnnotation:B,canRemoveAnnotation:V,onDeleteControlMouseEnter:H,onDeleteControlMouseLeave:U}=m;return(0,u.jsxs)(ze,{ref:e,style:t,className:n,onMouseLeave:r,onTouchCancel:i,onMouseMove:a,$allowTouch:O,children:[(0,u.jsx)(Be,{ref:o,src:s,alt:l,onLoad:C,onError:ee}),(0,u.jsxs)(Ve,{children:[d.map(e=>{let t=e.data?.id;if(!t)return null;let n=j(e,M),r=M?.data?.id===t,i=P&&le===t,a=!!F?.(t),o=I?I(e):e,s=A&&T&&L&&(r||i||a)?e=>T({...e,annotation:o,isHovered:r,isDragging:!!i,hasPendingChanges:a,...L,enableRemoval:z,onRemoveAnnotation:B,onConfirm:R,onReset:ue,onDeleteControlMouseEnter:H,onDeleteControlMouseLeave:U}):w;return s?(0,u.jsx)(Ue,{annotationId:t,annotation:o,active:n,slot:s},t):null}),!ae&&h?.geometry&&ne&&ne({annotation:h})]}),(0,u.jsx)(He,{ref:g,"data-testid":`annotation-target`,$hitTestingDisabled:ce,onClick:_,onMouseUp:v,onMouseDown:y}),!oe&&E&&E({type:b,annotation:h}),d.map(e=>{let t=e.data?.id;if(!t)return null;let n=N?.includes(t)||!1,r=j(e,M),i=M?.data?.id===t,a=!se&&(r||n)&&D!=null,o=Ge({enableRemoval:z,onRemoveAnnotation:B,isActive:r,annotation:e,canRemoveAnnotation:V,enableEditing:A,draggableHighlightSlot:T,isHovered:i});return!a&&!o?null:(0,u.jsxs)(c.default.Fragment,{children:[a?(0,u.jsx)(We,{annotationId:t,annotation:e,slot:D}):null,o&&B?(0,u.jsx)(Re,{annotation:e,onRemove:B,renderDelete:ie,onDeleteControlMouseEnter:H,onDeleteControlMouseLeave:U}):null]},t)}),!k&&h?.selection?.showEditor&&re&&x&&re({annotation:h,onChange:x,onSubmit:S}),te]})}function qe({ref:e,...t}){let{children:n,...r}=(0,c.useMemo)(()=>{let{renderSlots:e,...n}=t;return{...$,...n,selectors:n.selectors??$.selectors,renderSelector:n.renderSelector??e?.renderSelector??$.renderSelector,renderEditor:n.renderEditor??e?.renderEditor??$.renderEditor,renderHighlight:n.renderHighlight??e?.renderHighlight??$.renderHighlight,renderContent:n.renderContent??e?.renderContent??$.renderContent,renderOverlay:n.renderOverlay??e?.renderOverlay??$.renderOverlay,renderDraggableHighlight:n.renderDraggableHighlight??e?.renderDraggableHighlight??$.renderDraggableHighlight}},[t]);return(0,u.jsx)(Ke,{...T(r,e),children:n})}qe.displayName=`Annotation`;function Je(e,t){if(!e||typeof e.getBoundingClientRect!=`function`)return!1;let{pageX:n,pageY:r}=t,{left:i,right:a,bottom:o,top:s}=e.getBoundingClientRect();return n>i&&n<a&&r>s&&r<o}function Ye(){let[e,t]=(0,c.useState)(!1),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=e=>{let r=n.current;t(Je(r,{pageX:e.pageX,pageY:e.pageY}))};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>{document.removeEventListener(`mousemove`,e)}},[]),{isHoveringOver:e,setRef:(0,c.useCallback)(e=>{n.current=e},[])}}var Xe=qe;exports.Annotation=qe,exports.AnnotationDeleteControl=Re,exports.ConfirmResetButtons=he,exports.DELETE_BUTTON_HIT_AREA_PX=B,exports.DELETE_BUTTON_SIZE_PX=z,exports.DeleteButton=de,exports.DeleteCrossIcon=V,exports.DraggableBox=be,exports.DraggableDot=G,exports.MoveButton=ve,exports.OvalSelector=Q,exports.PointSelector=Y,exports.RectangleSelector=J,exports.default=Xe,exports.deleteCornerBoxStyle=pe,exports.getDeleteCornerPosition=fe,exports.useAnnotationHitDetection=y,exports.useDragging=ee,exports.useMouseHover=Ye,exports.useRelativeMousePosition=v,exports.useSelectorMethods=x;