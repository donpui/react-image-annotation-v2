Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},s=(n,r,a)=>(a=n==null?{}:e(i(n)),o(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));let c=require(`react`);c=s(c);let l=require(`styled-components`);l=s(l);let u=require(`react/jsx-runtime`);var d=(e,t)=>{let n=t||e.currentTarget;if(!n||typeof n.getBoundingClientRect!=`function`)return{x:0,y:0};let r=n.getBoundingClientRect(),i=e.clientX-r.x,a=e.clientY-r.y;return{x:i/r.width*100,y:a/r.height*100}},f=(e,t,n)=>Math.max(e,Math.min(t,n)),p=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!=`function`)return{x:0,y:0};let t=e.targetTouches[0],n=e.currentTarget.getBoundingClientRect(),r=t.pageX-n.left,i=t.pageY-(n.top+window.scrollY);return{x:f(0,100,r/n.width*100),y:f(0,100,i/n.height*100)}},m=(e,t)=>h(e)?g(e)?(_(e)&&e.preventDefault(),p(e)):{x:null}:d(e,t),h=e=>e.targetTouches!==void 0,g=e=>e.targetTouches.length===1,_=e=>e.type===`touchmove`;function v(e,t={}){let{onPositionChange:n,throttleMs:r=16}=t,i=(0,c.useRef)({x:null,y:null}),[a,o]=(0,c.useState)({x:null,y:null}),s=(0,c.useRef)(0),l=(0,c.useRef)(null),u=(0,c.useCallback)(e=>{if(i.current=e,n){let t=Date.now();r<=0||t-s.current>=r?(o(e),n(e),s.current=t):(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{o(e),n(e),s.current=Date.now()},r-(t-s.current)))}},[n,r]),f=(0,c.useCallback)(t=>{try{let n=e.current;if(!n){u({x:null,y:null});return}u(d(t,n))}catch{u({x:null,y:null})}},[e,u]),p=(0,c.useCallback)(t=>{let n=e.current;if(!n||t.targetTouches.length!==1)return;let r=t.targetTouches[0],i=n.offsetParent;if(i)try{let e=r.pageX-i.offsetLeft,t=r.pageY-i.offsetTop,a=n,o=a.width,s=a.height;u(o>0&&s>0?{x:e/o*100,y:t/s*100}:{x:null,y:null})}catch{u({x:null,y:null})}},[e,u]),m=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),h=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),g=(0,c.useCallback)(()=>i.current,[]);return(0,c.useEffect)(()=>()=>{l.current&&clearTimeout(l.current)},[]),{mousePosition:n?a:i.current,handlers:{onMouseMove:f,onMouseLeave:m,onTouchMove:p,onTouchLeave:h},getCurrentMousePosition:g}}function y({annotations:e,selectors:t,imageRef:n,enableEditing:r}){let i=(0,c.useMemo)(()=>new Map(t.map(e=>[e.TYPE,e])),[t]),a=(0,c.useCallback)(e=>{if(e)return i.get(e)},[i]);return{getTopAnnotationAt:(0,c.useCallback)((t,i)=>{let o=n.current;if(!o||t===null||i===null)return;let s={x:t,y:i},c=e.map(e=>{let{geometry:t}=e;if(!t)return null;let n=a(t.type);if(!n)return null;let i=t;return r&&t.type===`RECTANGLE`&&typeof t.x==`number`&&typeof t.y==`number`&&typeof t.width==`number`&&typeof t.height==`number`&&(i={...t,x:Math.max(0,t.x-2),y:Math.max(0,t.y-2),width:Math.min(100-t.x+2,t.width+4),height:Math.min(100-t.y+2,t.height+4)}),n.intersects(s,i,o)?e:null}).filter(e=>e!==null);if(c.length!==0)return c.sort((e,t)=>{let n=a(e.geometry.type),r=a(t.geometry.type);return!n||!r?0:n.area(e.geometry,o)-r.area(t.geometry,o)})[0]},[e,a,n,r]),getSelectorByType:a}}function b({targetRef:e,imageRef:t,annotations:n,selectors:r,enableEditing:i,throttleMs:a=50}){let[o,s]=(0,c.useState)(void 0),l=(0,c.useRef)(void 0),u=(0,c.useRef)(void 0),{getTopAnnotationAt:d}=y({annotations:n,selectors:r,imageRef:t,enableEditing:i}),{handlers:f}=v(e,{onPositionChange:(0,c.useCallback)(e=>{let{x:t,y:n}=e,r=d(t,n),i=r?.data?.id;i!==u.current&&(u.current=i,l.current=r,s(r))},[d]),throttleMs:a});return(0,c.useEffect)(()=>{s(void 0),l.current=void 0,u.current=void 0},[n,r]),{hoveredAnnotation:o,mouseHandlers:(0,c.useMemo)(()=>f,[f])}}function ee({selectors:e,effectiveType:t,value:n,onChange:r,disableAnnotation:i}){let a=(0,c.useCallback)(t=>{if(t)return e.find(e=>e.TYPE===t)},[e]);return{callSelectorMethod:(0,c.useCallback)((e,o)=>{if(i)return;let s=a(t);if(!s?.methods[e])return;let c=s.methods[e];try{let i=c(n||{},o);if(i===void 0){process.env.NODE_ENV!==`production`&&console.error(`Selector method ${String(e)} of type ${t} returned undefined. Make sure to explicitly return the previous state or new state.`);return}r?.(i)}catch(t){process.env.NODE_ENV!==`production`&&console.error(`Error calling selector method ${String(e)}:`,t)}},[i,a,t,n,r]),getSelectorByType:a}}var x=100;function S(e){let{x:t=0,y:n=0,width:r=0,height:i=0}=e;return r=Math.max(r,0),i=Math.max(i,0),t=Math.min(t,x-r),n=Math.min(n,x-i),{...e,x:t,y:n,width:r,height:i}}function te({annotations:e,onAnnotationsChange:t,imageRef:n,previewMode:r=!1}){let[i,a]=(0,c.useState)(!1),[o,s]=(0,c.useState)(void 0),[l,u]=(0,c.useState)(()=>new Map),d=(0,c.useRef)(null),f=(0,c.useRef)(new Map),p=(0,c.useCallback)(()=>{let e=n.current;if(!e)return{width:1,height:1};let t=e.getBoundingClientRect();return{width:t.width,height:t.height}},[n]),m=(0,c.useCallback)((n,i)=>{let a=S(i);if(r){u(e=>{let t=new Map(e);return t.set(n,a),t});return}t?.(e.map(e=>e.data?.id===n?{...e,geometry:a}:e))},[r,t,e]),h=(0,c.useCallback)((e,t,n,r)=>{let{width:i,height:a}=p(),o=e.clientX-r.x,s=e.clientY-r.y,c={...n};switch(t){case`top`:c.height=Math.min((n.height??0)-s/a*x,(n.y??0)+(n.height??0)),c.y=Math.max((n.y??0)+s/a*x,0);break;case`right`:c.width=Math.min((n.width??0)+o/i*x,x-(n.x??0));break;case`bottom`:c.height=Math.min((n.height??0)+s/a*x,x-(n.y??0));break;case`left`:c.width=Math.min((n.width??0)-o/i*x,(n.x??0)+(n.width??0)),c.x=Math.max((n.x??0)+o/i*x,0);break;default:break}return S(c)},[p]),g=(0,c.useCallback)((e,t)=>{let{width:n,height:r}=p(),i=e.clientX-t.initialCursorPosition.x,a=e.clientY-t.initialCursorPosition.y,o=t.initialGeometry;return S({...o,x:Math.max(Math.min((o.x??0)+i/n*x,x-(o.width??0)),0),y:Math.max(Math.min((o.y??0)+a/r*x,x-(o.height??0)),0)})},[p]),_=(0,c.useCallback)((t,n)=>{let r=e.find(e=>e.data?.id===t),i=l.get(t)??r?.geometry;i&&(d.current={annotationId:t,initialGeometry:{...i},initialCursorPosition:n},f.current.set(t,{...i}),s(t),a(!0))},[e,l]),v=(0,c.useCallback)((e,t)=>{_(e,t)},[_]),y=(0,c.useCallback)((e,t,n)=>{let r=d.current;if(!r)return;let i=h(e,t,r.initialGeometry,r.initialCursorPosition);m(r.annotationId,i)},[h,m]),b=(0,c.useCallback)((e,t)=>{_(e,t)},[_]),ee=(0,c.useCallback)((e,t)=>{let n=d.current;if(!n)return;let r=g(e,n);m(n.annotationId,r)},[g,m]),te=(0,c.useCallback)(()=>{a(!1),d.current=null},[]);return{isDragging:i,draggingAnnotationId:o,hasPendingChanges:(0,c.useCallback)(e=>l.has(e),[l]),onDotDragStart:v,onDotDrag:y,onMoveStart:b,onMove:ee,onDragEnd:te,handleConfirm:(0,c.useCallback)(n=>{let r=l.get(n);r&&t&&t(e.map(e=>e.data?.id===n?{...e,geometry:r}:e)),u(e=>{let t=new Map(e);return t.delete(n),t}),f.current.delete(n),a(!1),s(void 0),d.current=null},[l,t,e]),handleReset:(0,c.useCallback)(n=>{let r=d.current,i=f.current.get(n)??(r?.annotationId===n?r.initialGeometry:e.find(e=>e.data?.id===n)?.geometry);i&&t&&t(e.map(e=>e.data?.id===n?{...e,geometry:i}:e)),u(e=>{let t=new Map(e);return t.delete(n),t}),f.current.delete(n),a(!1),s(void 0),d.current=null},[e,t]),getEffectiveAnnotation:(0,c.useCallback)(e=>{let t=e.data?.id;if(t==null)return e;let n=l.get(t);return n?{...e,geometry:n}:e},[l])}}function ne(e){let[t,n]=(0,c.useState)(null),r=(0,c.useRef)(null),i=(0,c.useRef)(null),a=(0,c.useCallback)(()=>{i.current!=null&&(clearTimeout(i.current),i.current=null)},[]),o=(0,c.useCallback)(()=>{a(),i.current=setTimeout(()=>{r.current??n(null),i.current=null},300)},[a]);return(0,c.useEffect)(()=>{let t=e?.data?.id;if(t!=null){a(),n(t);return}r.current??o()},[e,a,o]),(0,c.useEffect)(()=>()=>a(),[a]),{pinnedControlsId:t,onDeleteControlMouseEnter:(0,c.useCallback)(e=>{a(),r.current=e,n(e)},[a]),onDeleteControlMouseLeave:(0,c.useCallback)(()=>{r.current=null,o()},[o])}}function C(e,t){e&&(typeof e==`function`?e(t):e.current=t)}function w(e,t){let{src:n,alt:r=`Annotation Image`,style:i,className:a,containerRef:o,imageRef:s,annotations:l,type:u,selectors:d,value:f,onChange:p,onSubmit:m,activeAnnotationComparator:h,activeAnnotations:g,editModeAnnotationIds:_,disableAnnotation:v,drawingCursor:y,disableSelector:x,disableEditor:S,disableOverlay:w,disableContent:T,disableHitTesting:E,allowTouch:D,enableEditing:O=!1,onAnnotationsChange:re,renderSelector:k,renderEditor:ie,renderHighlight:ae,renderDraggableHighlight:A,renderContent:oe,renderOverlay:se,enableRemoval:j,onRemoveAnnotation:ce,canRemoveAnnotation:M,renderDelete:le,onConfirm:N,onReset:P,onImageMouseUp:F,onImageMouseDown:ue,onImageMouseMove:de,onImageClick:I,onImageLoad:fe,onImageError:pe}=e,L=(0,c.useRef)(null),R=(0,c.useRef)(null),{hoveredAnnotation:z,mouseHandlers:B}=b({targetRef:R,imageRef:L,annotations:l,selectors:d,enableEditing:O,throttleMs:50}),{isDragging:V,draggingAnnotationId:me,hasPendingChanges:H,onDotDragStart:U,onDotDrag:W,onMoveStart:he,onMove:ge,onDragEnd:_e,handleConfirm:G,handleReset:ve,getEffectiveAnnotation:ye}=te({annotations:l,onAnnotationsChange:re,imageRef:L,previewMode:!!(N&&P)}),be=(0,c.useMemo)(()=>({onDotDragStart:U,onDotDrag:W,onMoveStart:he,onMove:ge,onDragEnd:_e}),[U,W,he,ge,_e]),xe=(0,c.useCallback)(e=>{G(e),N?.(e)},[G,N]),Se=(0,c.useCallback)(e=>{ve(e),P?.(e)},[ve,P]),Ce=u||d[0]?.TYPE,K=f?.selection?.mode===`SELECTING`,we=(0,c.useCallback)(e=>{R.current&&(R.current.style.cursor=e)},[]),Te=(0,c.useCallback)(()=>{R.current&&R.current.style.removeProperty(`cursor`)},[]);(0,c.useEffect)(()=>{if(!y||!K){document.body.style.removeProperty(`cursor`);return}let e=document.body.style.cursor;return document.body.style.cursor=y,()=>{document.body.style.cursor=e}},[y,K]);let{callSelectorMethod:q}=ee({selectors:d,effectiveType:Ce,value:f,onChange:p,disableAnnotation:v}),J=(0,c.useCallback)(e=>{navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&D&&e.preventDefault(),q(`onTouchStart`,e)},[D,q]),Ee=(0,c.useCallback)(e=>{q(`onTouchEnd`,e)},[q]),De=(0,c.useCallback)(e=>{B.onTouchMove(e),navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&D&&e.preventDefault(),q(`onTouchMove`,e)},[B,D,q]),Y=(0,c.useCallback)(e=>{B.onTouchLeave(e)},[B]);(0,c.useEffect)(()=>{let e=R.current;if(!(!D||!e))return e.ontouchstart=J,e.ontouchend=Ee,e.ontouchmove=De,e.ontouchcancel=Y,()=>{e.ontouchstart=null,e.ontouchend=null,e.ontouchmove=null,e.ontouchcancel=null}},[D,J,Ee,De,Y]);let Oe=(0,c.useCallback)(e=>{L.current=e,C(t,e),C(s,e)},[t,s]),ke=(0,c.useCallback)(e=>{R.current=e},[]),X=(0,c.useCallback)(e=>{C(o,e)},[o]),Z=(0,c.useCallback)(e=>{B.onMouseMove(e.nativeEvent),de?.(e),q(`onMouseMove`,e)},[B,de,q]),Ae=(0,c.useCallback)(e=>{B.onMouseLeave(e.nativeEvent)},[B]),je=(0,c.useCallback)(e=>{F?.(e),q(`onMouseUp`,e),y&&!v&&(Te(),K||document.body.style.removeProperty(`cursor`))},[F,q,y,v,Te,K]),Me=(0,c.useCallback)(e=>{y&&!v&&(we(y),document.body.style.cursor=y),ue?.(e),q(`onMouseDown`,e)},[y,v,we,ue,q]),Ne=(0,c.useCallback)(e=>{I?.(e),q(`onClick`,e)},[I,q]),Pe=(0,c.useCallback)(()=>{m&&f&&m(f)},[m,f]),Fe=(0,c.useCallback)(e=>{e.key===`Escape`&&p&&(f?.selection?.showEditor||f?.geometry)&&p({selection:void 0,geometry:void 0,data:void 0})},[f,p]);(0,c.useEffect)(()=>{if(f?.selection?.showEditor)return window.addEventListener(`keydown`,Fe),()=>window.removeEventListener(`keydown`,Fe)},[f?.selection?.showEditor,Fe]);let Ie=z,{pinnedControlsId:Q,onDeleteControlMouseEnter:$,onDeleteControlMouseLeave:Le}=ne(z),Re=(0,c.useCallback)((e,t)=>{let n=e.data?.id;return n!=null&&Q!=null&&n===Q?!0:g&&g.some(t=>h?h(e,t):e.data.id===t)||t===e},[g,h,Q]);return{setContainerRef:X,style:i,className:a,onContainerMouseLeave:Ae,onContainerTouchCancel:Y,onContainerMouseMove:Z,setImageRef:Oe,src:n,alt:r,annotations:l,layoutOptions:{touchEnabled:D,selectorDisabled:!!x||O&&V,overlayDisabled:!!w,editorDisabled:!!S||O&&V,contentDisabled:!!T,hitTestingDisabled:!!E||O&&V,enableEditing:O,drawingCursor:y,disableAnnotation:v},onImageLoad:fe,onImageError:pe,annotationState:{getIsActive:Re,topAnnotation:Ie,editModeIds:_,isDragging:V,draggingAnnotationId:me,hasPendingChanges:H,getEffectiveAnnotation:O?ye:void 0,draggingHandlers:O?be:void 0,onConfirm:O?xe:void 0,onReset:O?Se:void 0,enableRemoval:j,onRemoveAnnotation:ce,canRemoveAnnotation:M,onDeleteControlMouseEnter:$,onDeleteControlMouseLeave:Le},value:f,isDrawing:K,setTargetRef:ke,onInteractionTargetClick:Ne,onInteractionTargetMouseUp:je,onInteractionTargetMouseDown:Me,effectiveType:Ce,onChange:p,onEditorSubmit:Pe,renderSlots:{renderHighlight:ae,renderDraggableHighlight:A,renderSelector:k,renderOverlay:se,renderContent:oe,renderEditor:ie,renderDelete:le}}}var T=l.default.div`
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
`;function E(e){let{geometry:t}=e.annotation;return t?(0,u.jsx)(T,{style:{top:`${t.y}%`,left:`${t.x}%`}}):null}var D=l.default.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,O=l.default.div`
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
`,re=({onChange:e,onSubmit:t,onFocus:n,onBlur:r,value:i})=>{let a=c.default.useRef(null);return c.default.useEffect(()=>{a.current?.focus({preventScroll:!0})},[]),(0,u.jsxs)(c.default.Fragment,{children:[(0,u.jsx)(D,{children:(0,u.jsx)(`textarea`,{ref:a,placeholder:`Write description`,onFocus:n,onBlur:r,onChange:e,value:i})}),i&&(0,u.jsx)(O,{onClick:t,children:`Save description`})]})},k={},ie={},ae=l.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,A=16,oe=l.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  pointer-events: auto;
  transform-origin: ${({$placement:e})=>e===`above`?`bottom left`:`top left`};

  animation: ${ae} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,se=({annotation:e,onChange:t,onSubmit:n,className:r=``,style:i=k})=>{let{geometry:a}=e,o=c.default.useRef(null),[s,l]=c.default.useState(`below`);if(c.default.useLayoutEffect(()=>{let e=o.current,t=e?.parentElement;if(!e||!t||!a)return;let n=t.getBoundingClientRect(),r=e.offsetHeight;l(((a.y??0)+(a.height??0))/100*n.height+A+r>n.height?`above`:`below`)},[a,e.data?.text]),!a)return null;let d=s===`above`?{bottom:`calc(${100-(a.y??0)}% + ${A}px)`}:{top:`calc(${(a.y??0)+(a.height??0)}% + ${A}px)`};return(0,u.jsx)(oe,{ref:o,className:r,$placement:s,style:{position:`absolute`,left:`${a.x??0}%`,...d,...i},children:(0,u.jsx)(re,{onChange:n=>t({...e,data:{...e.data,text:n.target.value}}),onSubmit:n,value:e.data?.text})})},j=l.default.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,ce=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function M({annotation:e,className:t=``,style:n=k}){let{geometry:r}=e;return r?(0,u.jsxs)(ce,{className:t,style:n,children:[(0,u.jsx)(j,{style:{height:`${r.y}%`,width:`100%`}}),(0,u.jsx)(j,{style:{top:`${r.y}%`,height:`${r.height}%`,width:`${r.x}%`}}),(0,u.jsx)(j,{style:{top:`${r.y}%`,left:`${r.x+r.width}%`,height:`${r.height}%`,width:`${100-(r.x+r.width)}%`}}),(0,u.jsx)(j,{style:{top:`${r.y+r.height}%`,height:`${100-(r.y+r.height)}%`,width:`100%`}})]}):null}var le=l.default.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function N({annotation:e,className:t=``,style:n=k,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(le,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var P=l.default.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function F({annotation:e,className:t=``,style:n=k,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(P,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var ue=l.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
  pointer-events: auto;
`;function de({annotation:e,style:t=k,className:n=``}){let{geometry:r}=e;return!r||r.x===void 0||r.y===void 0||r.width===void 0||r.height===void 0?null:(0,u.jsx)(ue,{style:{position:`absolute`,left:`${r.x}%`,top:`${r.y+r.height}%`,...t},className:n,children:e.data&&e.data.text})}var I=l.default.div`
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
`,fe=()=>(0,u.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,u.jsx)(`path`,{d:`M12 3V9M12 3L9 6M12 3L15 6M12 15V21M12 21L15 18M12 21L9 18M3 12H9M3 12L6 15M3 12L6 9M15 12H21M21 12L18 9M21 12L18 15`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),pe=20,L=44;function R(e){return(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,u.jsx)(`path`,{d:`M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z`,fill:`currentColor`})})}var z=l.default.button`
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
`,B=(0,l.default)(R)`
  width: 12px;
  height: 12px;
  color: #0f0f0f;
  flex-shrink: 0;
`,V=({annotationId:e,onRemove:t,disabled:n,className:r,style:i})=>(0,u.jsx)(z,{type:`button`,className:r,style:i,onClick:r=>{r.stopPropagation(),!n&&t(e)},disabled:n,"aria-label":`Remove annotation`,$disabled:n,"data-testid":`annotation-delete-button`,children:(0,u.jsx)(B,{})});function me(e){return!e||typeof e.x!=`number`||typeof e.y!=`number`||typeof e.width!=`number`?null:{left:`calc(${e.x}% + ${e.width}%)`,top:`calc(${e.y}%)`,transform:`translate(-50%, -50%)`}}var H={position:`absolute`,top:0,right:0,transform:`translate(50%, -50%)`,width:44,height:44,display:`flex`,alignItems:`center`,justifyContent:`center`,pointerEvents:`auto`,zIndex:20},U=l.default.div`
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
`,he=({onConfirm:e,onReset:t})=>(0,u.jsxs)(U,{onMouseDown:e=>e.stopPropagation(),children:[(0,u.jsx)(W,{type:`button`,onClick:t=>{t.stopPropagation(),e()},children:`✓`}),(0,u.jsx)(W,{type:`button`,onClick:e=>{e.stopPropagation(),t()},children:`✕`})]}),ge=l.default.div`
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
`,G=({position:e,onDragStart:t,onDrag:n,onDragEnd:r,annotationId:i})=>(0,u.jsx)(ge,{$position:e,onMouseDown:a=>{a.preventDefault(),a.stopPropagation();let o={x:a.clientX,y:a.clientY};t(i,o);let s=t=>{n(t,e,o)},c=()=>{document.removeEventListener(`mousemove`,s),document.removeEventListener(`mouseup`,c),r?.()};document.addEventListener(`mousemove`,s),document.addEventListener(`mouseup`,c)},onClick:e=>e.stopPropagation(),"data-type":`dot`}),ve=({onMoveStart:e,onMove:t,onMoveEnd:n,annotationId:r})=>(0,u.jsx)(_e,{onMouseDown:i=>{i.preventDefault(),i.stopPropagation();let a={x:i.clientX,y:i.clientY};e(r,a);let o=e=>{t(e,a)},s=()=>{document.removeEventListener(`mousemove`,o),document.removeEventListener(`mouseup`,s),n?.()};document.addEventListener(`mousemove`,o),document.addEventListener(`mouseup`,s)},onClick:e=>e.stopPropagation(),"data-type":`move-button`,children:(0,u.jsx)(fe,{})}),ye=l.default.div`
  position: absolute;
  border: none;
  background: rgba(151, 151, 151, 0.3);
  border-radius: 3px;
  pointer-events: auto;
  z-index: 10;
  box-sizing: border-box;
`,be=({annotation:e,isDragging:t,hasPendingChanges:n,onDotDragStart:r,onDotDrag:i,onMoveStart:a,onMove:o,onDragEnd:s,enableRemoval:l,onRemoveAnnotation:d,onConfirm:f,onReset:p,onDeleteControlMouseEnter:m,onDeleteControlMouseLeave:h})=>{let{geometry:g}=e,_=e.data?.id,v=(0,c.useRef)(null),y=(t||n)&&f&&p;if((0,c.useEffect)(()=>{if(t||n||!p||_==null)return;let e=e=>{let t=v.current;if(!t)return;let n=t.getBoundingClientRect(),{clientX:r,clientY:i}=e;(r<n.left||r>n.right||i<n.top||i>n.bottom)&&p(_)};return document.addEventListener(`mousemove`,e),()=>{document.removeEventListener(`mousemove`,e)}},[t,n,p,_]),!g||typeof g.x!=`number`||typeof g.y!=`number`||typeof g.width!=`number`||typeof g.height!=`number`)return null;let b=String(_??``);return(0,u.jsxs)(ye,{ref:v,className:`rectangle-editor-box`,style:{left:`${g.x}%`,top:`${g.y}%`,width:`${g.width}%`,height:`${g.height}%`},"data-annotation-draggable-box":!0,children:[(0,u.jsx)(G,{position:`top`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(G,{position:`right`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(G,{position:`bottom`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(G,{position:`left`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(ve,{onMoveStart:a,onMove:o,onMoveEnd:s,annotationId:b}),l&&d&&_!=null&&(0,u.jsx)(`div`,{style:H,onMouseEnter:()=>m?.(_),onMouseLeave:()=>h?.(),onPointerEnter:()=>m?.(_),onPointerLeave:()=>h?.(),children:(0,u.jsx)(V,{annotationId:_,onRemove:d})}),y&&(0,u.jsx)(he,{onConfirm:()=>f(_),onReset:()=>p(_)})]})},xe=`RECTANGLE`;function Se({x:e,y:t},n,r){if(!n)return!1;let i=Math.min(n.x,n.x+n.width),a=Math.max(n.x,n.x+n.width),o=Math.min(n.y,n.y+n.height),s=Math.max(n.y,n.y+n.height);return!(e<i||t<o||e>a||t>s)}function Ce(e,t){return!e||e.width<=0||e.height<=0?0:Math.abs(e.width)*Math.abs(e.height)}var K={onTouchStart(e,t){return we(e,t)},onTouchEnd(e,t){return Te(e,t)},onTouchMove(e,t){return q(e,t)},onMouseDown(e,t){return we(e,t)},onMouseUp(e,t){return Te(e,t)},onMouseMove(e,t){return q(e,t)}};function we(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}}function Te(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function q(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:xe,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var J={TYPE:xe,intersects:Se,area:Ce,methods:K},Ee=6,De=(e={width:100,height:100})=>({marginX:Ee/e.width*100,marginY:Ee/e.height*100}),Y=`POINT`;function Oe({x:e,y:t},n,r){if(!n)return!1;let{marginX:i,marginY:a}=De(r),o=Math.min(i,a)/2,s=Math.abs(e-n.x),c=Math.abs(t-n.y);return s<=o&&c<=o}function ke(e,t){return 0}var X={TYPE:Y,intersects:Oe,area:ke,methods:{onClick(e,t){return e.geometry?{}:{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`},geometry:{...e.geometry,...m(t),width:0,height:0,type:Y}}}}},Z=e=>e**2,Ae=`OVAL`;function je({x:e,y:t},n,r){if(!n||!n.width||!n.height)return!1;let i=Math.abs(n.width),a=Math.abs(n.height),o={x:n.x+i/2,y:n.y+a/2},s=i/2,c=a/2;if(s===0||c===0)return!1;let l=e-o.x,u=t-o.y;return Z(l)/Z(s)+Z(u)/Z(c)<=1}function Me(e,t){if(!e||e.width<=0||e.height<=0)return 0;let n=Math.abs(e.width),r=Math.abs(e.height);return n/2*Math.PI*(r/2)}var Ne={onTouchStart(e,t){return Pe(e,t)},onTouchEnd(e,t){return Fe(e,t)},onTouchMove(e,t){return Ie(e,t)},onMouseDown(e,t){if(!e.geometry){let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e},onMouseUp(e,t){if(e.selection&&e.selection.mode===`SELECTING`)return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}}},onMouseMove(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t);return{...e,geometry:{...e.geometry,type:Ae,x:Math.min(n,i),y:Math.min(r,a),width:Math.abs(i-n),height:Math.abs(a-r)}}}return e}};function Pe(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e}function Fe(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function Ie(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:Ae,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var Q={TYPE:Ae,intersects:je,area:Me,methods:Ne},$={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,disableContent:!1,disableHitTesting:!1,allowTouch:!1,type:J.TYPE,selectors:[J,X,Q],activeAnnotationComparator:(e,t)=>e===t,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!==`production`&&console.warn(`onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.`)},renderSelector:({annotation:e})=>{switch(e.geometry?.type){case J.TYPE:return(0,u.jsx)(M,{annotation:e});case X.TYPE:return(0,u.jsx)(E,{annotation:e});case Q.TYPE:return(0,u.jsx)(F,{annotation:e});default:return null}},renderEditor:({annotation:e,onChange:t,onSubmit:n})=>(0,u.jsx)(se,{annotation:e,onChange:t,onSubmit:n}),renderHighlight:({key:e,annotation:t,active:n})=>{switch(t.geometry.type){case J.TYPE:return(0,u.jsx)(N,{annotation:t,active:n},e);case X.TYPE:return(0,u.jsx)(E,{annotation:t},e);case Q.TYPE:return(0,u.jsx)(F,{annotation:t,active:n},e);default:return null}},renderContent:({key:e,annotation:t})=>(0,u.jsx)(de,{annotation:t},e),renderOverlay:({type:e,annotation:t}=ie)=>{switch(e){case X.TYPE:return(0,u.jsx)(I,{children:`Click to Annotate`});default:return(0,u.jsx)(I,{children:`Click and Drag to Annotate`})}},renderDraggableHighlight:({key:e,annotation:t,active:n,isHovered:r,isDragging:i,hasPendingChanges:a,onDotDragStart:o,onDotDrag:s,onMoveStart:c,onMove:l,onDragEnd:d,enableRemoval:f,onRemoveAnnotation:p,onConfirm:m,onReset:h,onDeleteControlMouseEnter:g,onDeleteControlMouseLeave:_})=>{if(!r&&!i&&!a)switch(t.geometry.type){case J.TYPE:return(0,u.jsx)(N,{annotation:t,active:n},e);case X.TYPE:return(0,u.jsx)(E,{annotation:t},e);case Q.TYPE:return(0,u.jsx)(F,{annotation:t,active:n},e);default:return null}if(t.geometry.type===J.TYPE)return(0,u.jsx)(be,{annotation:t,active:n,isHovered:r,isDragging:i,hasPendingChanges:a,onDotDragStart:o,onDotDrag:s,onMoveStart:c,onMove:l,onDragEnd:d,enableRemoval:f,onRemoveAnnotation:p,onConfirm:m,onReset:h,onDeleteControlMouseEnter:g,onDeleteControlMouseLeave:_},`${e}-editor`);switch(t.geometry.type){case X.TYPE:return(0,u.jsx)(E,{annotation:t},e);case Q.TYPE:return(0,u.jsx)(F,{annotation:t,active:n},e);default:return null}}},Le=l.default.div`
  position: absolute;
  pointer-events: auto;
  z-index: 10;
  width: ${44}px;
  height: ${44}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;function Re({annotation:e,onRemove:t,renderDelete:n,disabled:r,onDeleteControlMouseEnter:i,onDeleteControlMouseLeave:a}){let[o,s]=(0,c.useState)(!1),l=e.data?.id,d=me(e.geometry),f=r||o,p=(0,c.useCallback)(async()=>{if(!(f||l==null)){s(!0);try{await t(l)}finally{s(!1)}}},[l,f,t]),m=(0,c.useCallback)(()=>{l!=null&&i?.(l)},[l,i]),h=(0,c.useCallback)(()=>{a?.()},[a]);if(!d||l==null)return null;let g={onMouseEnter:m,onMouseLeave:h,onPointerEnter:m,onPointerLeave:h};return n?(0,u.jsx)(Le,{style:d,...g,children:n({key:l,annotation:e,active:!0,onRemove:p,disabled:f})}):(0,u.jsx)(Le,{style:d,className:`annotation-delete`,...g,children:(0,u.jsx)(V,{annotationId:l,onRemove:p,disabled:f})})}var ze=l.default.div`
  clear: both;
  position: relative;
  width: 100%;

  &:hover ${I} {
    opacity: 1;
  }

  touch-action: ${e=>e.$allowTouch?`pinch-zoom`:`auto`};
  ${e=>e.$cursor?`cursor: ${e.$cursor};`:``}
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
  ${e=>e.$cursor?`cursor: ${e.$cursor};`:``}
`,Ue=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  pointer-events: none;
`;function We({annotationId:e,annotation:t,active:n,slot:r}){return(0,u.jsx)(u.Fragment,{children:r({key:e,annotation:t,active:n})})}function Ge({annotationId:e,annotation:t,slot:n}){return(0,u.jsx)(u.Fragment,{children:n({key:e,annotation:t})})}function Ke({enableRemoval:e,onRemoveAnnotation:t,isActive:n,annotation:r,canRemoveAnnotation:i,enableEditing:a,draggableHighlightSlot:o,isHovered:s}){return!e||!t||!n||i&&!i(r)?!1:!(a&&o&&s&&r.geometry?.type===J.TYPE)}function qe({setContainerRef:e,style:t,className:n,onContainerMouseLeave:r,onContainerTouchCancel:i,onContainerMouseMove:a,setImageRef:o,src:s,alt:l,annotations:d,renderSlots:f,layoutOptions:p,annotationState:m,value:h,isDrawing:g,setTargetRef:_,onInteractionTargetClick:v,onInteractionTargetMouseUp:y,onInteractionTargetMouseDown:b,effectiveType:ee,onChange:x,onEditorSubmit:S,onImageLoad:te,onImageError:ne,children:C}){let{renderHighlight:w,renderDraggableHighlight:T,renderSelector:E,renderOverlay:D,renderContent:O,renderEditor:re,renderDelete:k}=f,{touchEnabled:ie,selectorDisabled:ae,overlayDisabled:A,editorDisabled:oe,contentDisabled:se,hitTestingDisabled:j,enableEditing:ce,drawingCursor:M,disableAnnotation:le}=p,N=M&&!le?M:void 0,{getIsActive:P,topAnnotation:F,editModeIds:ue,isDragging:de,draggingAnnotationId:I,hasPendingChanges:fe,getEffectiveAnnotation:pe,draggingHandlers:L,onConfirm:R,onReset:z,enableRemoval:B,onRemoveAnnotation:V,canRemoveAnnotation:me,onDeleteControlMouseEnter:H,onDeleteControlMouseLeave:U}=m;return(0,u.jsxs)(ze,{ref:e,style:t,className:n,onMouseLeave:r,onTouchCancel:i,onMouseMove:a,$allowTouch:ie,$cursor:g?M:void 0,children:[(0,u.jsx)(Be,{ref:o,src:s,alt:l,onLoad:te,onError:ne}),(0,u.jsxs)(Ve,{children:[d.map(e=>{let t=e.data?.id;if(!t)return null;let n=P(e,F),r=F?.data?.id===t,i=de&&I===t,a=!!fe?.(t),o=pe?pe(e):e,s=ce&&T&&L&&(r||i||a)?e=>(0,u.jsxs)(c.default.Fragment,{children:[w?w(e):null,T({...e,annotation:o,isHovered:r,isDragging:!!i,hasPendingChanges:a,...L,enableRemoval:B,onRemoveAnnotation:V,onConfirm:R,onReset:z,onDeleteControlMouseEnter:H,onDeleteControlMouseLeave:U})]}):w;return s?(0,u.jsx)(We,{annotationId:t,annotation:o,active:n,slot:s},t):null}),!ae&&h?.geometry&&E&&E({annotation:h})]}),(0,u.jsx)(He,{ref:_,"data-testid":`annotation-target`,"data-is-drawing":g&&M?!0:void 0,$hitTestingDisabled:j,$cursor:N,onClick:v,onMouseUp:y,onMouseDown:b}),!A&&D&&D({type:ee,annotation:h}),(0,u.jsxs)(Ue,{children:[d.map(e=>{let t=e.data?.id;if(!t)return null;let n=ue?.includes(t)||!1,r=P(e,F),i=F?.data?.id===t,a=!se&&(r||n)&&O!=null,o=Ke({enableRemoval:B,onRemoveAnnotation:V,isActive:r,annotation:e,canRemoveAnnotation:me,enableEditing:ce,draggableHighlightSlot:T,isHovered:i});return!a&&!o?null:(0,u.jsxs)(c.default.Fragment,{children:[a?(0,u.jsx)(Ge,{annotationId:t,annotation:e,slot:O}):null,o&&V?(0,u.jsx)(Re,{annotation:e,onRemove:V,renderDelete:k,onDeleteControlMouseEnter:H,onDeleteControlMouseLeave:U}):null]},t)}),!oe&&h?.selection?.showEditor&&re&&x&&re({annotation:h,onChange:x,onSubmit:S})]}),C]})}function Je({ref:e,...t}){let{children:n,...r}=(0,c.useMemo)(()=>{let{renderSlots:e,...n}=t;return{...$,...n,selectors:n.selectors??$.selectors,renderSelector:n.renderSelector??e?.renderSelector??$.renderSelector,renderEditor:n.renderEditor??e?.renderEditor??$.renderEditor,renderHighlight:n.renderHighlight??e?.renderHighlight??$.renderHighlight,renderContent:n.renderContent??e?.renderContent??$.renderContent,renderOverlay:n.renderOverlay??e?.renderOverlay??$.renderOverlay,renderDraggableHighlight:n.renderDraggableHighlight??e?.renderDraggableHighlight??$.renderDraggableHighlight}},[t]);return(0,u.jsx)(qe,{...w(r,e),children:n})}Je.displayName=`Annotation`;function Ye(e,t){if(!e||typeof e.getBoundingClientRect!=`function`)return!1;let{pageX:n,pageY:r}=t,{left:i,right:a,bottom:o,top:s}=e.getBoundingClientRect();return n>i&&n<a&&r>s&&r<o}function Xe(){let[e,t]=(0,c.useState)(!1),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=e=>{let r=n.current;t(Ye(r,{pageX:e.pageX,pageY:e.pageY}))};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>{document.removeEventListener(`mousemove`,e)}},[]),{isHoveringOver:e,setRef:(0,c.useCallback)(e=>{n.current=e},[])}}function Ze(e,t,n,r=`crosshair`){let i=e.trim();return`${i.startsWith(`url(`)?i:`url("${i}")`} ${t} ${n}, ${r}`}function Qe(e,t,n,r=`crosshair`){return Ze(`data:image/svg+xml,${encodeURIComponent(e.trim())}`,t,n,r)}var $e=Je;exports.Annotation=Je,exports.AnnotationDeleteControl=Re,exports.ConfirmResetButtons=he,exports.DELETE_BUTTON_HIT_AREA_PX=L,exports.DELETE_BUTTON_SIZE_PX=pe,exports.DeleteButton=V,exports.DeleteCrossIcon=R,exports.DraggableBox=be,exports.DraggableDot=G,exports.MoveButton=ve,exports.OvalSelector=Q,exports.PointSelector=X,exports.RectangleSelector=J,exports.buildDrawingCursor=Ze,exports.buildDrawingCursorFromSvg=Qe,exports.default=$e,exports.deleteCornerBoxStyle=H,exports.getDeleteCornerPosition=me,exports.useAnnotationHitDetection=y,exports.useDragging=te,exports.useMouseHover=Xe,exports.useRelativeMousePosition=v,exports.useSelectorMethods=ee;