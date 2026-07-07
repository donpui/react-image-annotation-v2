Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},s=(n,r,a)=>(a=n==null?{}:e(i(n)),o(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));let c=require(`react`);c=s(c);let l=require(`styled-components`);l=s(l);let u=require(`react/jsx-runtime`);var d=(e,t)=>{let n=t||e.currentTarget;if(!n||typeof n.getBoundingClientRect!=`function`)return{x:0,y:0};let r=n.getBoundingClientRect(),i=e.clientX-r.x,a=e.clientY-r.y;return{x:i/r.width*100,y:a/r.height*100}},f=(e,t,n)=>Math.max(e,Math.min(t,n)),p=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!=`function`)return{x:0,y:0};let t=e.targetTouches[0],n=e.currentTarget.getBoundingClientRect(),r=t.pageX-n.left,i=t.pageY-(n.top+window.scrollY);return{x:f(0,100,r/n.width*100),y:f(0,100,i/n.height*100)}},m=(e,t)=>h(e)?g(e)?(_(e)&&e.preventDefault(),p(e)):{x:null}:d(e,t),h=e=>e.targetTouches!==void 0,g=e=>e.targetTouches.length===1,_=e=>e.type===`touchmove`;function v(e,t={}){let{onPositionChange:n,throttleMs:r=16}=t,i=(0,c.useRef)({x:null,y:null}),[a,o]=(0,c.useState)({x:null,y:null}),s=(0,c.useRef)(0),l=(0,c.useRef)(null),u=(0,c.useCallback)(e=>{if(i.current=e,n){let t=Date.now();r<=0||t-s.current>=r?(o(e),n(e),s.current=t):(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{o(e),n(e),s.current=Date.now()},r-(t-s.current)))}},[n,r]),f=(0,c.useCallback)(t=>{try{let n=e.current;if(!n){u({x:null,y:null});return}u(d(t,n))}catch{u({x:null,y:null})}},[e,u]),p=(0,c.useCallback)(t=>{let n=e.current;if(!n||t.targetTouches.length!==1)return;let r=t.targetTouches[0],i=n.offsetParent;if(i)try{let e=r.pageX-i.offsetLeft,t=r.pageY-i.offsetTop,a=n,o=a.width,s=a.height;u(o>0&&s>0?{x:e/o*100,y:t/s*100}:{x:null,y:null})}catch{u({x:null,y:null})}},[e,u]),m=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),h=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),g=(0,c.useCallback)(()=>i.current,[]);return(0,c.useEffect)(()=>()=>{l.current&&clearTimeout(l.current)},[]),{mousePosition:n?a:i.current,handlers:{onMouseMove:f,onMouseLeave:m,onTouchMove:p,onTouchLeave:h},getCurrentMousePosition:g}}function y({annotations:e,selectors:t,imageRef:n,enableEditing:r}){let i=(0,c.useMemo)(()=>new Map(t.map(e=>[e.TYPE,e])),[t]),a=(0,c.useCallback)(e=>{if(e)return i.get(e)},[i]);return{getTopAnnotationAt:(0,c.useCallback)((t,i)=>{let o=n.current;if(!o||t===null||i===null)return;let s={x:t,y:i},c=e.map(e=>{let{geometry:t}=e;if(!t)return null;let n=a(t.type);if(!n)return null;let i=t;return r&&t.type===`RECTANGLE`&&typeof t.x==`number`&&typeof t.y==`number`&&typeof t.width==`number`&&typeof t.height==`number`&&(i={...t,x:Math.max(0,t.x-2),y:Math.max(0,t.y-2),width:Math.min(100-t.x+2,t.width+4),height:Math.min(100-t.y+2,t.height+4)}),n.intersects(s,i,o)?e:null}).filter(e=>e!==null);if(c.length!==0)return c.sort((e,t)=>{let n=a(e.geometry.type),r=a(t.geometry.type);return!n||!r?0:n.area(e.geometry,o)-r.area(t.geometry,o)})[0]},[e,a,n,r]),getSelectorByType:a}}function ee({targetRef:e,imageRef:t,annotations:n,selectors:r,enableEditing:i,suppressHover:a=!1,throttleMs:o=50}){let[s,l]=(0,c.useState)(void 0),u=(0,c.useRef)(void 0),d=(0,c.useRef)(void 0),{getTopAnnotationAt:f}=y({annotations:n,selectors:r,imageRef:t,enableEditing:i}),{handlers:p}=v(e,{onPositionChange:(0,c.useCallback)(e=>{if(a){d.current!=null&&(d.current=void 0,u.current=void 0,l(void 0));return}let{x:t,y:n}=e,r=f(t,n),i=r?.data?.id;i!==d.current&&(d.current=i,u.current=r,l(r))},[f,a]),throttleMs:o});return(0,c.useEffect)(()=>{l(void 0),u.current=void 0,d.current=void 0},[n,r]),{hoveredAnnotation:s,mouseHandlers:(0,c.useMemo)(()=>p,[p])}}function b({enableEditing:e,isDrawing:t,isCreationEditorOpen:n,isDragging:r,draggingAnnotationId:i,hasPendingChanges:a,annotations:o,hoveredAnnotation:s,lockEditSessionOnHover:l=!0}){let[u,d]=(0,c.useState)(null),f=(0,c.useRef)(null),p=t||n,m=(0,c.useCallback)(()=>{f.current=null,d(null)},[]),h=(0,c.useCallback)(e=>{f.current=e,d(e)},[]),g=(0,c.useCallback)(()=>{l&&m()},[l,m]);(0,c.useEffect)(()=>{p&&m()},[p,m]),(0,c.useEffect)(()=>{if(!e||p||!l)return;let t=s?.data?.id;t!=null&&(f.current??(f.current=t,d(t)))},[e,p,l,s?.data?.id]);let _=(0,c.useMemo)(()=>{for(let e of o){let t=e.data?.id;if(t!=null&&a(t))return t}},[o,a]),v=(0,c.useMemo)(()=>p?null:r&&i!=null?i:_??(e&&u!=null?u:null),[p,r,i,_,e,u]);return{effectiveTopAnnotation:(0,c.useMemo)(()=>{if(!p)return v==null?s:o.find(e=>e.data?.id===v)},[p,v,o,s]),focusAnnotationId:v,clearEditingSession:m,engageEdit:h,onContainerMouseLeave:g}}function te({selectors:e,effectiveType:t,value:n,onChange:r,disableAnnotation:i}){let a=(0,c.useCallback)(t=>{if(t)return e.find(e=>e.TYPE===t)},[e]);return{callSelectorMethod:(0,c.useCallback)((e,o)=>{if(i)return;let s=a(t);if(!s?.methods[e])return;let c=s.methods[e];try{let i=c(n||{},o);if(i===void 0){process.env.NODE_ENV!==`production`&&console.error(`Selector method ${String(e)} of type ${t} returned undefined. Make sure to explicitly return the previous state or new state.`);return}r?.(i)}catch(t){process.env.NODE_ENV!==`production`&&console.error(`Error calling selector method ${String(e)}:`,t)}},[i,a,t,n,r]),getSelectorByType:a}}var x=100;function ne(e){let{x:t=0,y:n=0,width:r=0,height:i=0}=e;return r=Math.max(r,0),i=Math.max(i,0),t=Math.min(t,x-r),n=Math.min(n,x-i),{...e,x:t,y:n,width:r,height:i}}function re({annotations:e,onAnnotationsChange:t,imageRef:n,previewMode:r=!1}){let[i,a]=(0,c.useState)(!1),[o,s]=(0,c.useState)(void 0),[l,u]=(0,c.useState)(()=>new Map),d=(0,c.useRef)(null),f=(0,c.useRef)(new Map),p=(0,c.useCallback)(()=>{let e=n.current;if(!e)return{width:1,height:1};let t=e.getBoundingClientRect();return{width:t.width,height:t.height}},[n]),m=(0,c.useCallback)((n,i)=>{let a=ne(i);if(r){u(e=>{let t=new Map(e);return t.set(n,a),t});return}t?.(e.map(e=>e.data?.id===n?{...e,geometry:a}:e))},[r,t,e]),h=(0,c.useCallback)((e,t,n,r)=>{let{width:i,height:a}=p(),o=e.clientX-r.x,s=e.clientY-r.y,c={...n};switch(t){case`top`:c.height=Math.min((n.height??0)-s/a*x,(n.y??0)+(n.height??0)),c.y=Math.max((n.y??0)+s/a*x,0);break;case`right`:c.width=Math.min((n.width??0)+o/i*x,x-(n.x??0));break;case`bottom`:c.height=Math.min((n.height??0)+s/a*x,x-(n.y??0));break;case`left`:c.width=Math.min((n.width??0)-o/i*x,(n.x??0)+(n.width??0)),c.x=Math.max((n.x??0)+o/i*x,0);break;default:break}return ne(c)},[p]),g=(0,c.useCallback)((e,t)=>{let{width:n,height:r}=p(),i=e.clientX-t.initialCursorPosition.x,a=e.clientY-t.initialCursorPosition.y,o=t.initialGeometry;return ne({...o,x:Math.max(Math.min((o.x??0)+i/n*x,x-(o.width??0)),0),y:Math.max(Math.min((o.y??0)+a/r*x,x-(o.height??0)),0)})},[p]),_=(0,c.useCallback)((t,n)=>{let r=e.find(e=>e.data?.id===t),i=l.get(t)??r?.geometry;i&&(d.current={annotationId:t,initialGeometry:{...i},initialCursorPosition:n},f.current.set(t,{...i}),s(t),a(!0))},[e,l]),v=(0,c.useCallback)((e,t)=>{_(e,t)},[_]),y=(0,c.useCallback)((e,t,n)=>{let r=d.current;if(!r)return;let i=h(e,t,r.initialGeometry,r.initialCursorPosition);m(r.annotationId,i)},[h,m]),ee=(0,c.useCallback)((e,t)=>{_(e,t)},[_]),b=(0,c.useCallback)((e,t)=>{let n=d.current;if(!n)return;let r=g(e,n);m(n.annotationId,r)},[g,m]),te=(0,c.useCallback)(()=>{a(!1),d.current=null},[]);return{isDragging:i,draggingAnnotationId:o,hasPendingChanges:(0,c.useCallback)(e=>l.has(e),[l]),onDotDragStart:v,onDotDrag:y,onMoveStart:ee,onMove:b,onDragEnd:te,handleConfirm:(0,c.useCallback)(n=>{let r=l.get(n);r&&t&&t(e.map(e=>e.data?.id===n?{...e,geometry:r}:e)),u(e=>{let t=new Map(e);return t.delete(n),t}),f.current.delete(n),a(!1),s(void 0),d.current=null},[l,t,e]),handleReset:(0,c.useCallback)(n=>{let r=d.current,i=f.current.get(n)??(r?.annotationId===n?r.initialGeometry:e.find(e=>e.data?.id===n)?.geometry);i&&t&&t(e.map(e=>e.data?.id===n?{...e,geometry:i}:e)),u(e=>{let t=new Map(e);return t.delete(n),t}),f.current.delete(n),a(!1),s(void 0),d.current=null},[e,t]),getEffectiveAnnotation:(0,c.useCallback)(e=>{let t=e.data?.id;if(t==null)return e;let n=l.get(t);return n?{...e,geometry:n}:e},[l])}}function ie(e){let[t,n]=(0,c.useState)(null),r=(0,c.useRef)(null),i=(0,c.useRef)(null),a=(0,c.useCallback)(()=>{i.current!=null&&(clearTimeout(i.current),i.current=null)},[]),o=(0,c.useCallback)(()=>{a(),i.current=setTimeout(()=>{r.current??n(null),i.current=null},300)},[a]);return(0,c.useEffect)(()=>{let t=e?.data?.id;if(t!=null){a(),n(t);return}r.current??o()},[e,a,o]),(0,c.useEffect)(()=>()=>a(),[a]),{pinnedControlsId:t,onDeleteControlMouseEnter:(0,c.useCallback)(e=>{a(),r.current=e,n(e)},[a]),onDeleteControlMouseLeave:(0,c.useCallback)(()=>{r.current=null,o()},[o])}}function ae(e,t){e&&(typeof e==`function`?e(t):e.current=t)}function oe(e,t){let{src:n,alt:r=`Annotation Image`,style:i,className:a,containerRef:o,imageRef:s,annotations:l,type:u,selectors:d,value:f,onChange:p,onSubmit:m,activeAnnotationComparator:h,activeAnnotations:g,editModeAnnotationIds:_,disableAnnotation:v,drawingCursor:y,disableSelector:x,disableEditor:ne,disableOverlay:oe,showOverlayOnce:S,disableContent:C,disableHitTesting:se,allowTouch:w,enableEditing:T=!1,onAnnotationsChange:E,renderSelector:ce,renderEditor:le,renderHighlight:ue,renderDraggableHighlight:de,renderContent:D,renderOverlay:fe,enableRemoval:pe,onRemoveAnnotation:me,canRemoveAnnotation:O,renderDelete:he,onConfirm:k,onReset:A,onImageMouseUp:j,onImageMouseDown:ge,onImageMouseMove:M,onImageClick:_e,onImageLoad:ve,onImageError:N}=e,P=(0,c.useRef)(null),F=(0,c.useRef)(null),ye=!!(k&&A),I=f?.selection?.mode===`SELECTING`||f?.selection?.mode===`COLLECTING_POINTS`,L=!!f?.selection?.showEditor,R=I||L,[z,be]=(0,c.useState)(!1),B=!C&&!!D;(0,c.useEffect)(()=>{S&&R&&be(!0)},[S,R]);let xe=!R&&!(S&&z),{isDragging:V,draggingAnnotationId:H,hasPendingChanges:Se,onDotDragStart:Ce,onDotDrag:U,onMoveStart:we,onMove:Te,onDragEnd:Ee,handleConfirm:De,handleReset:Oe,getEffectiveAnnotation:ke}=re({annotations:l,onAnnotationsChange:E,imageRef:P,previewMode:ye}),{hoveredAnnotation:Ae,mouseHandlers:W}=ee({targetRef:F,imageRef:P,annotations:l,selectors:d,enableEditing:T,suppressHover:I||L,throttleMs:50}),{effectiveTopAnnotation:G,focusAnnotationId:je,clearEditingSession:K,engageEdit:q,onContainerMouseLeave:Me}=b({enableEditing:T,isDrawing:I,isCreationEditorOpen:L,isDragging:V,draggingAnnotationId:H,hasPendingChanges:Se,annotations:l,hoveredAnnotation:Ae,lockEditSessionOnHover:!B});(0,c.useEffect)(()=>{V&&H!=null&&q(H)},[V,H,q]);let Ne=(0,c.useMemo)(()=>({onDotDragStart:Ce,onDotDrag:U,onMoveStart:we,onMove:Te,onDragEnd:Ee}),[Ce,U,we,Te,Ee]),Pe=(0,c.useCallback)(e=>{De(e),k?.(e),K()},[De,k,K]),Fe=(0,c.useCallback)(e=>{Oe(e),A?.(e),K()},[Oe,A,K]),Ie=u||d[0]?.TYPE,J=(0,c.useCallback)(e=>{F.current&&(F.current.style.cursor=e)},[]),Le=(0,c.useCallback)(()=>{F.current&&F.current.style.removeProperty(`cursor`)},[]);(0,c.useEffect)(()=>{if(!y||!I){document.body.style.removeProperty(`cursor`);return}let e=document.body.style.cursor;return document.body.style.cursor=y,()=>{document.body.style.cursor=e}},[y,I]);let{callSelectorMethod:Y}=te({selectors:d,effectiveType:Ie,value:f,onChange:p,disableAnnotation:v}),Re=(0,c.useCallback)(e=>{navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&w&&e.preventDefault(),Y(`onTouchStart`,e)},[w,Y]),ze=(0,c.useCallback)(e=>{Y(`onTouchEnd`,e)},[Y]),Be=(0,c.useCallback)(e=>{W.onTouchMove(e),navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&w&&e.preventDefault(),Y(`onTouchMove`,e)},[W,w,Y]),Ve=(0,c.useCallback)(e=>{W.onTouchLeave(e)},[W]);(0,c.useEffect)(()=>{let e=F.current;if(!(!w||!e))return e.ontouchstart=Re,e.ontouchend=ze,e.ontouchmove=Be,e.ontouchcancel=Ve,()=>{e.ontouchstart=null,e.ontouchend=null,e.ontouchmove=null,e.ontouchcancel=null}},[w,Re,ze,Be,Ve]);let He=(0,c.useCallback)(e=>{P.current=e,ae(t,e),ae(s,e)},[t,s]),Ue=(0,c.useCallback)(e=>{F.current=e},[]),X=(0,c.useCallback)(e=>{ae(o,e)},[o]),We=(0,c.useCallback)(e=>{W.onMouseMove(e.nativeEvent),M?.(e),Y(`onMouseMove`,e)},[W,M,Y]),Ge=(0,c.useCallback)(e=>{W.onMouseLeave(e.nativeEvent),Me()},[W,Me]),Ke=(0,c.useCallback)(e=>{j?.(e),Y(`onMouseUp`,e),y&&!v&&(Le(),I||document.body.style.removeProperty(`cursor`))},[j,Y,y,v,Le,I]),qe=(0,c.useCallback)(e=>{y&&!v&&(J(y),document.body.style.cursor=y);let t=f?.selection?.mode===`SELECTING`||f?.selection?.mode===`COLLECTING_POINTS`||!!f?.selection?.showEditor,n=G?.data?.id;if(T&&!t&&!L&&n!=null){B&&q(n),ge?.(e);return}ge?.(e),Y(`onMouseDown`,e)},[y,v,J,T,B,G?.data?.id,L,f?.selection?.mode,f?.selection?.showEditor,q,ge,Y]),Je=(0,c.useCallback)(e=>{_e?.(e),Y(`onClick`,e)},[_e,Y]),Ye=(0,c.useCallback)(()=>{m&&f&&m(f)},[m,f]),Xe=(0,c.useCallback)(e=>{e.key===`Escape`&&p&&(f?.selection?.showEditor||f?.geometry)&&p({selection:void 0,geometry:void 0,data:void 0})},[f,p]);(0,c.useEffect)(()=>{if(f?.selection?.showEditor||f?.selection?.mode===`COLLECTING_POINTS`)return window.addEventListener(`keydown`,Xe),()=>window.removeEventListener(`keydown`,Xe)},[f?.selection?.showEditor,f?.selection?.mode,Xe]);let Ze=G,{pinnedControlsId:Qe,onDeleteControlMouseEnter:Z,onDeleteControlMouseLeave:Q}=ie(G),$=(0,c.useCallback)((e,t)=>{let n=e.data?.id;return n!=null&&Qe!=null&&n===Qe?!0:g&&g.some(t=>h?h(e,t):e.data.id===t)||t===e},[g,h,Qe]);return{setContainerRef:X,style:i,className:a,onContainerMouseLeave:Ge,onContainerTouchCancel:Ve,onContainerMouseMove:We,setImageRef:He,src:n,alt:r,annotations:l,layoutOptions:{touchEnabled:w,selectorDisabled:!!x||T&&V,overlayDisabled:!!oe,overlayHoverEnabled:xe,editorDisabled:!!ne||T&&V,contentDisabled:!!C,hitTestingDisabled:!!se||T&&V||L,enableEditing:T,drawingCursor:y,disableAnnotation:v},onImageLoad:ve,onImageError:N,annotationState:{getIsActive:$,topAnnotation:Ze,editModeIds:_,isDragging:V,draggingAnnotationId:H,hasPendingChanges:Se,getEffectiveAnnotation:T?ke:void 0,draggingHandlers:T?Ne:void 0,focusAnnotationId:je,showContentOnHover:B,engageEdit:T&&B?q:void 0,onConfirm:T?Pe:void 0,onReset:T?Fe:void 0,enableRemoval:pe,onRemoveAnnotation:me,canRemoveAnnotation:O,onDeleteControlMouseEnter:Z,onDeleteControlMouseLeave:Q},value:f,isDrawing:I,isCreatingAnnotation:R,setTargetRef:Ue,onInteractionTargetClick:Je,onInteractionTargetMouseUp:Ke,onInteractionTargetMouseDown:qe,effectiveType:Ie,onChange:p,onEditorSubmit:Ye,renderSlots:{renderHighlight:ue,renderDraggableHighlight:de,renderSelector:ce,renderOverlay:fe,renderContent:D,renderEditor:le,renderDelete:he}}}var S=l.default.div`
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
`;function C(e){let{geometry:t}=e.annotation;return t?(0,u.jsx)(S,{style:{top:`${t.y}%`,left:`${t.x}%`}}):null}var se=l.default.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`,w=l.default.div`
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
`,T=({onChange:e,onSubmit:t,onFocus:n,onBlur:r,value:i})=>{let a=c.default.useRef(null);return c.default.useEffect(()=>{a.current?.focus({preventScroll:!0})},[]),(0,u.jsxs)(c.default.Fragment,{children:[(0,u.jsx)(se,{children:(0,u.jsx)(`textarea`,{ref:a,placeholder:`Write description`,onFocus:n,onBlur:r,onChange:e,value:i})}),i&&(0,u.jsx)(w,{onClick:t,children:`Save description`})]})},E={},ce={},le=l.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,ue=l.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  pointer-events: auto;
  transform-origin: top left;
  animation: ${le} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,de=({annotation:e,onChange:t,onSubmit:n,className:r=``,style:i=E})=>e.geometry?(0,u.jsx)(ue,{className:r,style:i,children:(0,u.jsx)(T,{onChange:n=>t({...e,data:{...e.data,text:n.target.value}}),onSubmit:n,value:e.data?.text})}):null,D=l.default.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,fe=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function pe({annotation:e,className:t=``,style:n=E}){let{geometry:r}=e;return r?(0,u.jsxs)(fe,{className:t,style:n,children:[(0,u.jsx)(D,{style:{height:`${r.y}%`,width:`100%`}}),(0,u.jsx)(D,{style:{top:`${r.y}%`,height:`${r.height}%`,width:`${r.x}%`}}),(0,u.jsx)(D,{style:{top:`${r.y}%`,left:`${r.x+r.width}%`,height:`${r.height}%`,width:`${100-(r.x+r.width)}%`}}),(0,u.jsx)(D,{style:{top:`${r.y+r.height}%`,height:`${100-(r.y+r.height)}%`,width:`100%`}})]}):null}var me=l.default.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function O({annotation:e,className:t=``,style:n=E,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(me,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var he=l.default.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function k({annotation:e,className:t=``,style:n=E,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(he,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var A=3,j=10;function ge(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function M({annotation:e,className:t,style:n,active:r}){let{geometry:i,selection:a}=e;if(!i||!i.points||i.points.length===0)return null;let o=i.points,s=a?.cursorX,c=a?.cursorY,l=a?.mode===`COLLECTING_POINTS`,d=o.length>=3,f=o[0],p=l&&d&&s!==void 0&&c!==void 0&&ge({x:s,y:c},f)<A,m=o.map(e=>`${e.x},${e.y}`).join(` `);return(0,u.jsxs)(`div`,{className:t,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,pointerEvents:`none`,...n},children:[(0,u.jsxs)(`svg`,{viewBox:`0 0 100 100`,preserveAspectRatio:`none`,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,overflow:`visible`,pointerEvents:`none`},children:[!l&&o.length>=3&&(0,u.jsx)(`polygon`,{points:m,fill:`rgba(0,0,0,0.1)`,stroke:r?`yellow`:`black`,strokeWidth:`2`,strokeDasharray:r?void 0:`5,3`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`}),l&&o.length>1&&(0,u.jsx)(`polyline`,{points:m,fill:`none`,stroke:`rgba(0,0,0,0.85)`,strokeWidth:`2`,strokeDasharray:`6,3`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`}),l&&p&&(0,u.jsx)(`line`,{x1:o[o.length-1].x,y1:o[o.length-1].y,x2:f.x,y2:f.y,stroke:`rgba(0,128,0,0.7)`,strokeWidth:`2`,strokeDasharray:`6,3`,vectorEffect:`non-scaling-stroke`}),l&&!p&&s!==void 0&&c!==void 0&&(0,u.jsx)(`line`,{x1:o[o.length-1].x,y1:o[o.length-1].y,x2:s,y2:c,stroke:`rgba(0,0,0,0.4)`,strokeWidth:`2`,strokeDasharray:`6,3`,vectorEffect:`non-scaling-stroke`})]}),l&&o.map((e,t)=>{let n=t===0,r=n&&p;return(0,u.jsx)(`div`,{style:{position:`absolute`,left:`${e.x}%`,top:`${e.y}%`,width:j,height:j,transform:`translate(-50%, -50%)`,borderRadius:`50%`,boxSizing:`border-box`,backgroundColor:r?`rgba(0,180,0,0.9)`:n?`white`:`rgba(0,0,0,0.85)`,border:`1.5px solid ${r?`white`:n?`rgba(0,0,0,0.85)`:`white`}`}},t)})]})}var _e=l.default.div`
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
`;function ve({annotation:e,style:t=E,className:n=``}){let{geometry:r}=e;return!r||r.x===void 0||r.y===void 0||r.width===void 0||r.height===void 0?null:(0,u.jsx)(_e,{style:{marginTop:8,marginLeft:8,...t},className:n,children:e.data&&e.data.text})}var N=l.default.div`
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
`,P=()=>(0,u.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,u.jsx)(`path`,{d:`M12 3V9M12 3L9 6M12 3L15 6M12 15V21M12 21L15 18M12 21L9 18M3 12H9M3 12L6 15M3 12L6 9M15 12H21M21 12L18 9M21 12L18 15`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),F=20,ye=44;function I(e){return(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,u.jsx)(`path`,{d:`M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z`,fill:`currentColor`})})}var L=l.default.button`
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
`,R=(0,l.default)(I)`
  width: 12px;
  height: 12px;
  color: #0f0f0f;
  flex-shrink: 0;
`,z=({annotationId:e,onRemove:t,disabled:n,className:r,style:i})=>(0,u.jsx)(L,{type:`button`,className:r,style:i,onClick:r=>{r.stopPropagation(),!n&&t(e)},disabled:n,"aria-label":`Remove annotation`,$disabled:n,"data-testid":`annotation-delete-button`,children:(0,u.jsx)(R,{})});function be(e){return!e||typeof e.x!=`number`||typeof e.y!=`number`||typeof e.width!=`number`?null:{left:`calc(${e.x}% + ${e.width}%)`,top:`calc(${e.y}%)`,transform:`translate(-50%, -50%)`}}var B={position:`absolute`,top:0,right:0,transform:`translate(50%, -50%)`,width:44,height:44,display:`flex`,alignItems:`center`,justifyContent:`center`,pointerEvents:`auto`,zIndex:20},xe=l.default.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
  z-index: 20;
`,V=l.default.button`
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
`,H=({onConfirm:e,onReset:t})=>(0,u.jsxs)(xe,{onMouseDown:e=>e.stopPropagation(),children:[(0,u.jsx)(V,{type:`button`,onClick:t=>{t.stopPropagation(),e()},children:`✓`}),(0,u.jsx)(V,{type:`button`,onClick:e=>{e.stopPropagation(),t()},children:`✕`})]}),Se=l.default.div`
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
`,Ce=l.default.div`
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
`,U=({position:e,onDragStart:t,onDrag:n,onDragEnd:r,annotationId:i})=>(0,u.jsx)(Se,{$position:e,onMouseDown:a=>{a.preventDefault(),a.stopPropagation();let o={x:a.clientX,y:a.clientY};t(i,o);let s=t=>{n(t,e,o)},c=()=>{document.removeEventListener(`mousemove`,s),document.removeEventListener(`mouseup`,c),r?.()};document.addEventListener(`mousemove`,s),document.addEventListener(`mouseup`,c)},onClick:e=>e.stopPropagation(),"data-type":`dot`}),we=({onMoveStart:e,onMove:t,onMoveEnd:n,annotationId:r})=>(0,u.jsx)(Ce,{onMouseDown:i=>{i.preventDefault(),i.stopPropagation();let a={x:i.clientX,y:i.clientY};e(r,a);let o=e=>{t(e,a)},s=()=>{document.removeEventListener(`mousemove`,o),document.removeEventListener(`mouseup`,s),n?.()};document.addEventListener(`mousemove`,o),document.addEventListener(`mouseup`,s)},onClick:e=>e.stopPropagation(),"data-type":`move-button`,children:(0,u.jsx)(P,{})}),Te=36,Ee=l.default.div`
  position: absolute;
  border: none;
  background: rgba(151, 151, 151, 0.3);
  border-radius: 3px;
  pointer-events: auto;
  z-index: 10;
  box-sizing: border-box;
`,De=({annotation:e,isDragging:t,hasPendingChanges:n,onDotDragStart:r,onDotDrag:i,onMoveStart:a,onMove:o,onDragEnd:s,enableRemoval:l,onRemoveAnnotation:d,onConfirm:f,onReset:p,onDeleteControlMouseEnter:m,onDeleteControlMouseLeave:h,allowResetOnMouseLeave:g=!0})=>{let{geometry:_}=e,v=e.data?.id,y=(0,c.useRef)(null),ee=(t||n)&&f&&p;if((0,c.useEffect)(()=>{if(!g||t||n||!p||v==null)return;let e=e=>{let t=y.current;if(!t)return;let n=t.getBoundingClientRect(),{clientX:r,clientY:i}=e,a=Te;(r<n.left-a||r>n.right+a||i<n.top-a||i>n.bottom+a)&&p(v)};return document.addEventListener(`mousemove`,e),()=>{document.removeEventListener(`mousemove`,e)}},[g,t,n,p,v]),!_||typeof _.x!=`number`||typeof _.y!=`number`||typeof _.width!=`number`||typeof _.height!=`number`)return null;let b=String(v??``);return(0,u.jsxs)(Ee,{ref:y,className:`rectangle-editor-box`,style:{left:`${_.x}%`,top:`${_.y}%`,width:`${_.width}%`,height:`${_.height}%`},"data-annotation-draggable-box":!0,children:[(0,u.jsx)(U,{position:`top`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(U,{position:`right`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(U,{position:`bottom`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(U,{position:`left`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:b}),(0,u.jsx)(we,{onMoveStart:a,onMove:o,onMoveEnd:s,annotationId:b}),l&&d&&v!=null&&(0,u.jsx)(`div`,{style:B,onMouseEnter:()=>m?.(v),onMouseLeave:()=>h?.(),onPointerEnter:()=>m?.(v),onPointerLeave:()=>h?.(),children:(0,u.jsx)(z,{annotationId:v,onRemove:d})}),ee&&(0,u.jsx)(H,{onConfirm:()=>f(v),onReset:()=>p(v)})]})},Oe=`RECTANGLE`;function ke({x:e,y:t},n,r){if(!n)return!1;let i=Math.min(n.x,n.x+n.width),a=Math.max(n.x,n.x+n.width),o=Math.min(n.y,n.y+n.height),s=Math.max(n.y,n.y+n.height);return!(e<i||t<o||e>a||t>s)}function Ae(e,t){return!e||e.width<=0||e.height<=0?0:Math.abs(e.width)*Math.abs(e.height)}var W={onTouchStart(e,t){return G(e,t)},onTouchEnd(e,t){return je(e,t)},onTouchMove(e,t){return K(e,t)},onMouseDown(e,t){return G(e,t)},onMouseUp(e,t){return je(e,t)},onMouseMove(e,t){return K(e,t)}};function G(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}}function je(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function K(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:Oe,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var q={TYPE:Oe,intersects:ke,area:Ae,methods:W},Me=6,Ne=(e={width:100,height:100})=>({marginX:Me/e.width*100,marginY:Me/e.height*100}),Pe=`POINT`;function Fe({x:e,y:t},n,r){if(!n)return!1;let{marginX:i,marginY:a}=Ne(r),o=Math.min(i,a)/2,s=Math.abs(e-n.x),c=Math.abs(t-n.y);return s<=o&&c<=o}function Ie(e,t){return 0}var J={TYPE:Pe,intersects:Fe,area:Ie,methods:{onClick(e,t){return e.geometry?{}:{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`},geometry:{...e.geometry,...m(t),width:0,height:0,type:Pe}}}}},Le=e=>e**2,Y=`OVAL`;function Re({x:e,y:t},n,r){if(!n||!n.width||!n.height)return!1;let i=Math.abs(n.width),a=Math.abs(n.height),o={x:n.x+i/2,y:n.y+a/2},s=i/2,c=a/2;if(s===0||c===0)return!1;let l=e-o.x,u=t-o.y;return Le(l)/Le(s)+Le(u)/Le(c)<=1}function ze(e,t){if(!e||e.width<=0||e.height<=0)return 0;let n=Math.abs(e.width),r=Math.abs(e.height);return n/2*Math.PI*(r/2)}var Be={onTouchStart(e,t){return Ve(e,t)},onTouchEnd(e,t){return He(e,t)},onTouchMove(e,t){return Ue(e,t)},onMouseDown(e,t){if(!e.geometry){let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e},onMouseUp(e,t){if(e.selection&&e.selection.mode===`SELECTING`)return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}}},onMouseMove(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t);return{...e,geometry:{...e.geometry,type:Y,x:Math.min(n,i),y:Math.min(r,a),width:Math.abs(i-n),height:Math.abs(a-r)}}}return e}};function Ve(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e}function He(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function Ue(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:Y,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var X={TYPE:Y,intersects:Re,area:ze,methods:Be},We=`POLYGON`,Ge=3,Ke=350,qe=2;function Je(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function Ye(e){let t=e.map(e=>e.x),n=e.map(e=>e.y),r=Math.min(...t),i=Math.min(...n);return{x:r,y:i,width:Math.max(...t)-r,height:Math.max(...n)-i}}function Xe({x:e,y:t},n){if(!n||!n.points||n.points.length<3)return!1;let r=n.points,i=!1;for(let n=0,a=r.length-1;n<r.length;a=n++){let o=r[n].x,s=r[n].y,c=r[a].x,l=r[a].y;s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(i=!i)}return i}function Ze(e){if(!e||!e.points||e.points.length<3)return 0;let t=e.points,n=0;for(let e=0,r=t.length-1;e<t.length;r=e++)n+=(t[r].x+t[e].x)*(t[r].y-t[e].y);return Math.abs(n/2)}function Qe(e){let t=Ye(e.geometry?.points||[]);return{...e,geometry:{...e.geometry,...t},selection:{...e.selection,mode:`EDITING`,showEditor:!0,lastClickX:void 0,lastClickY:void 0,lastClickTime:void 0,cursorX:void 0,cursorY:void 0}}}var Z={TYPE:We,intersects:Xe,area:Ze,methods:{onClick(e,t){let{x:n,y:r}=m(t);if(n==null)return e;let i=e.selection?.mode,a=e.geometry?.points||[];if(i!==`COLLECTING_POINTS`)return{...e,selection:{...e.selection,mode:`COLLECTING_POINTS`,lastClickX:n,lastClickY:r,lastClickTime:Date.now()},geometry:{type:We,points:[{x:n,y:r}]}};let o=Date.now()-(e.selection?.lastClickTime||0),s=e.selection?.lastClickX??n,c=e.selection?.lastClickY??r;return o<Ke&&Je({x:n,y:r},{x:s,y:c})<qe&&a.length>=3||a.length>=3&&Je({x:n,y:r},a[0])<Ge?Qe(e):a.length>=50?a.length>=3?Qe(e):e:{...e,selection:{...e.selection,mode:`COLLECTING_POINTS`,lastClickX:n,lastClickY:r,lastClickTime:Date.now()},geometry:{...e.geometry,type:We,points:[...a,{x:n,y:r}]}}},onMouseMove(e,t){if(e.selection?.mode!==`COLLECTING_POINTS`)return e;let{x:n,y:r}=m(t);return n==null?e:{...e,selection:{...e.selection,cursorX:n,cursorY:r}}}},MAX_POINTS:50},Q={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,showOverlayOnce:!1,disableContent:!1,disableHitTesting:!1,allowTouch:!1,type:q.TYPE,selectors:[q,J,X,Z],activeAnnotationComparator:(e,t)=>e===t,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!==`production`&&console.warn(`onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.`)},renderSelector:({annotation:e})=>{switch(e.geometry?.type){case q.TYPE:return(0,u.jsx)(pe,{annotation:e});case J.TYPE:return(0,u.jsx)(C,{annotation:e});case X.TYPE:return(0,u.jsx)(k,{annotation:e});case Z.TYPE:return(0,u.jsx)(M,{annotation:e});default:return null}},renderEditor:({annotation:e,onChange:t,onSubmit:n})=>(0,u.jsx)(de,{annotation:e,onChange:t,onSubmit:n}),renderHighlight:({key:e,annotation:t,active:n})=>{switch(t.geometry.type){case q.TYPE:return(0,u.jsx)(O,{annotation:t,active:n},e);case J.TYPE:return(0,u.jsx)(C,{annotation:t},e);case X.TYPE:return(0,u.jsx)(k,{annotation:t,active:n},e);case Z.TYPE:return(0,u.jsx)(M,{annotation:t,active:n},e);default:return null}},renderContent:({key:e,annotation:t})=>(0,u.jsx)(ve,{annotation:t},e),renderOverlay:({type:e,annotation:t}=ce)=>{switch(e){case J.TYPE:return(0,u.jsx)(N,{children:`Click to Annotate`});case Z.TYPE:return(0,u.jsx)(N,{children:`Click to add points · Double-click or click first point to finish · Esc to cancel`});default:return(0,u.jsx)(N,{children:`Click and Drag to Annotate`})}},renderDraggableHighlight:({key:e,annotation:t,active:n,isHovered:r,isDragging:i,hasPendingChanges:a,onDotDragStart:o,onDotDrag:s,onMoveStart:c,onMove:l,onDragEnd:d,enableRemoval:f,onRemoveAnnotation:p,onConfirm:m,onReset:h,onDeleteControlMouseEnter:g,onDeleteControlMouseLeave:_})=>{if(!r&&!i&&!a)switch(t.geometry.type){case q.TYPE:return(0,u.jsx)(O,{annotation:t,active:n},e);case J.TYPE:return(0,u.jsx)(C,{annotation:t},e);case X.TYPE:return(0,u.jsx)(k,{annotation:t,active:n},e);case Z.TYPE:return(0,u.jsx)(M,{annotation:t,active:n},e);default:return null}if(t.geometry.type===q.TYPE)return(0,u.jsx)(De,{annotation:t,active:n,isHovered:r,isDragging:i,hasPendingChanges:a,onDotDragStart:o,onDotDrag:s,onMoveStart:c,onMove:l,onDragEnd:d,enableRemoval:f,onRemoveAnnotation:p,onConfirm:m,onReset:h,onDeleteControlMouseEnter:g,onDeleteControlMouseLeave:_},`${e}-editor`);switch(t.geometry.type){case J.TYPE:return(0,u.jsx)(C,{annotation:t},e);case X.TYPE:return(0,u.jsx)(k,{annotation:t,active:n},e);case Z.TYPE:return(0,u.jsx)(M,{annotation:t,active:n},e);default:return null}}},$=8,$e=6;function et(e){return!!e&&typeof e.x==`number`&&typeof e.y==`number`&&typeof e.width==`number`&&typeof e.height==`number`}function tt({placement:e,geometry:t,containerHeight:n,overlayHeight:r,offsetPx:i}){if(e===`above`)return`above`;if(e===`below`)return`below`;let a=t.y/100*n,o=(t.y+t.height)/100*n,s=r+i+$,c=n-o,l=a;return c>=s?`below`:l>=s||l>=c?`above`:`below`}function nt({annotation:e,containerRef:t,placement:n=`auto`,offsetPx:r=$e,className:i,style:a,children:o}){let s=(0,c.useRef)(null),[l,d]=(0,c.useState)({x:0,y:0}),[f,p]=(0,c.useState)(n===`above`?`above`:`below`),{geometry:m}=e;return(0,c.useLayoutEffect)(()=>{let e=s.current,i=t.current;if(!e||!i||!et(m))return;let a=i.getBoundingClientRect(),o=e.offsetHeight,c=tt({placement:n,geometry:m,containerHeight:a.height,overlayHeight:o,offsetPx:r});if(c!==f){p(c);return}let l=e.getBoundingClientRect(),u=0;l.right>a.right-$&&(u=a.right-$-l.right),l.left+u<a.left+$&&(u=a.left+$-l.left);let h=0;l.bottom>a.bottom-$&&(h=a.bottom-$-l.bottom),l.top+h<a.top+$&&(h=a.top+$-l.top),d(e=>e.x===u&&e.y===h?e:{x:u,y:h})},[m,t,n,r,f]),et(m)?(0,u.jsx)(`div`,{ref:s,className:i,style:{...f===`above`?{position:`absolute`,left:`${m.x}%`,bottom:`calc(${100-m.y}% + ${r}px)`,transform:`translate(${l.x}px, ${l.y}px)`,pointerEvents:`none`,zIndex:25}:{position:`absolute`,left:`${m.x}%`,top:`calc(${m.y+m.height}% + ${r}px)`,transform:`translate(${l.x}px, ${l.y}px)`,pointerEvents:`none`,zIndex:25},...a},"data-annotation-content-anchor":!0,"data-placement":f,children:o}):null}var rt=l.default.div`
  position: absolute;
  pointer-events: auto;
  z-index: 10;
  width: ${44}px;
  height: ${44}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;function it({annotation:e,onRemove:t,renderDelete:n,disabled:r,onDeleteControlMouseEnter:i,onDeleteControlMouseLeave:a}){let[o,s]=(0,c.useState)(!1),l=e.data?.id,d=be(e.geometry),f=r||o,p=(0,c.useCallback)(async()=>{if(!(f||l==null)){s(!0);try{await t(l)}finally{s(!1)}}},[l,f,t]),m=(0,c.useCallback)(()=>{l!=null&&i?.(l)},[l,i]),h=(0,c.useCallback)(()=>{a?.()},[a]);if(!d||l==null)return null;let g={onMouseEnter:m,onMouseLeave:h,onPointerEnter:m,onPointerLeave:h};return n?(0,u.jsx)(rt,{style:d,...g,children:n({key:l,annotation:e,active:!0,onRemove:p,disabled:f})}):(0,u.jsx)(rt,{style:d,className:`annotation-delete`,...g,children:(0,u.jsx)(z,{annotationId:l,onRemove:p,disabled:f})})}var at=l.default.div`
  clear: both;
  position: relative;
  width: 100%;
  overflow: visible;

  ${e=>e.$overlayHoverEnabled&&l.css`
      &:hover ${N} {
        opacity: 1;
      }
    `}

  touch-action: ${e=>e.$allowTouch?`pinch-zoom`:`auto`};
  ${e=>e.$cursor?`cursor: ${e.$cursor};`:``}
`,ot=l.default.img`
  display: block;
  width: 100%;
  user-select: none;
`,st=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`,ct=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: ${e=>e.$hitTestingDisabled?`none`:`auto`};
  ${e=>e.$cursor?`cursor: ${e.$cursor};`:``}
`,lt=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  pointer-events: none;
  overflow: visible;
`,ut=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  pointer-events: none;
  overflow: visible;
`;function dt({annotationId:e,annotation:t,active:n,slot:r}){return(0,u.jsx)(u.Fragment,{children:r({key:e,annotation:t,active:n})})}function ft({annotationId:e,annotation:t,slot:n,containerRef:r,onEngageEdit:i}){return(0,u.jsx)(nt,{annotation:t,containerRef:r,placement:`auto`,children:(0,u.jsx)(`div`,{style:{pointerEvents:`auto`,display:`inline-block`},onMouseDown:t=>{t.stopPropagation(),i?.(e)},children:n({key:e,annotation:t})})})}function pt({enableRemoval:e,onRemoveAnnotation:t,isActive:n,annotation:r,canRemoveAnnotation:i,enableEditing:a,draggableHighlightSlot:o,isHovered:s}){return!e||!t||!n||i&&!i(r)?!1:!(a&&o&&s&&r.geometry?.type===q.TYPE)}function mt({setContainerRef:e,style:t,className:n,onContainerMouseLeave:r,onContainerTouchCancel:i,onContainerMouseMove:a,setImageRef:o,src:s,alt:l,annotations:d,renderSlots:f,layoutOptions:p,annotationState:m,value:h,isDrawing:g,isCreatingAnnotation:_,setTargetRef:v,onInteractionTargetClick:y,onInteractionTargetMouseUp:ee,onInteractionTargetMouseDown:b,effectiveType:te,onChange:x,onEditorSubmit:ne,onImageLoad:re,onImageError:ie,children:ae}){let{renderHighlight:oe,renderDraggableHighlight:S,renderSelector:C,renderOverlay:se,renderContent:w,renderEditor:T,renderDelete:E}=f,{touchEnabled:ce,selectorDisabled:le,overlayDisabled:ue,overlayHoverEnabled:de=!0,editorDisabled:D,contentDisabled:fe,hitTestingDisabled:pe,enableEditing:me,drawingCursor:O,disableAnnotation:he}=p,k=O&&!he?O:void 0,{getIsActive:A,topAnnotation:j,editModeIds:ge,isDragging:M,draggingAnnotationId:_e,hasPendingChanges:ve,getEffectiveAnnotation:N,draggingHandlers:P,onConfirm:F,onReset:ye,enableRemoval:I,onRemoveAnnotation:L,canRemoveAnnotation:R,onDeleteControlMouseEnter:z,onDeleteControlMouseLeave:be,focusAnnotationId:B,showContentOnHover:xe=!1,engageEdit:V}=m,H=(0,c.useRef)(null);return(0,u.jsxs)(at,{ref:e,style:t,className:n,onMouseLeave:r,onTouchCancel:i,onMouseMove:a,$allowTouch:ce,$cursor:g?O:void 0,$overlayHoverEnabled:de,children:[(0,u.jsx)(ot,{ref:o,src:s,alt:l,onLoad:re,onError:ie}),(0,u.jsxs)(st,{children:[d.map(e=>{let t=e.data?.id;if(!t)return null;let n=A(e,j);j?.data?.id,ve?.(t);let r=N?N(e):e;return oe?(0,u.jsx)(dt,{annotationId:t,annotation:r,active:n,slot:oe},t):null}),!le&&h?.geometry&&C&&C({annotation:h})]}),(0,u.jsx)(ct,{ref:v,"data-testid":`annotation-target`,"data-is-drawing":g&&O?!0:void 0,$hitTestingDisabled:pe,$cursor:k,onClick:y,onMouseUp:ee,onMouseDown:b}),me&&S&&P&&(0,u.jsx)(lt,{children:d.map(e=>{let t=e.data?.id;if(!t)return null;let n=A(e,j),r=j?.data?.id===t,i=M&&_e===t,a=!!ve?.(t),o=B!=null&&B===t;if(!(i||a||o||r&&!xe))return null;let s=N?N(e):e;return(0,u.jsx)(c.default.Fragment,{children:S({key:t,annotation:s,active:n,isHovered:r,isDragging:!!i,hasPendingChanges:a,allowResetOnMouseLeave:!o&&!(F&&ye),...P,enableRemoval:I,onRemoveAnnotation:L,onConfirm:F,onReset:ye,onDeleteControlMouseEnter:z,onDeleteControlMouseLeave:be})},`edit-chrome-${t}`)})}),!ue&&se&&se({type:te,annotation:h,isCreating:_}),(0,u.jsxs)(ut,{ref:H,children:[d.map(e=>{let t=e.data?.id;if(!t)return null;let n=ge?.includes(t)||!1,r=A(e,j),i=j?.data?.id===t,a=M&&_e===t,o=!!ve?.(t),s=!fe&&w!=null&&(n||r&&!(me&&S&&P&&(B!=null&&B===t||a||o))),l=pt({enableRemoval:I,onRemoveAnnotation:L,isActive:r,annotation:e,canRemoveAnnotation:R,enableEditing:me,draggableHighlightSlot:S,isHovered:i});return!s&&!l?null:(0,u.jsxs)(c.default.Fragment,{children:[s?(0,u.jsx)(ft,{annotationId:t,annotation:e,containerRef:H,onEngageEdit:V,slot:w}):null,l&&L?(0,u.jsx)(it,{annotation:e,onRemove:L,renderDelete:E,onDeleteControlMouseEnter:z,onDeleteControlMouseLeave:be}):null]},t)}),!D&&h?.selection?.showEditor&&T&&x&&(0,u.jsx)(nt,{annotation:h,containerRef:H,placement:`auto`,offsetPx:16,children:T({annotation:h,onChange:x,onSubmit:ne})})]}),ae]})}function ht({ref:e,...t}){let{children:n,...r}=(0,c.useMemo)(()=>{let{renderSlots:e,...n}=t;return{...Q,...n,selectors:n.selectors??Q.selectors,renderSelector:n.renderSelector??e?.renderSelector??Q.renderSelector,renderEditor:n.renderEditor??e?.renderEditor??Q.renderEditor,renderHighlight:n.renderHighlight??e?.renderHighlight??Q.renderHighlight,renderContent:n.renderContent??e?.renderContent??Q.renderContent,renderOverlay:n.renderOverlay??e?.renderOverlay??Q.renderOverlay,renderDraggableHighlight:n.renderDraggableHighlight??e?.renderDraggableHighlight??Q.renderDraggableHighlight}},[t]);return(0,u.jsx)(mt,{...oe(r,e),children:n})}ht.displayName=`Annotation`;function gt(e,t){if(!e||typeof e.getBoundingClientRect!=`function`)return!1;let{pageX:n,pageY:r}=t,{left:i,right:a,bottom:o,top:s}=e.getBoundingClientRect();return n>i&&n<a&&r>s&&r<o}function _t(){let[e,t]=(0,c.useState)(!1),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=e=>{let r=n.current;t(gt(r,{pageX:e.pageX,pageY:e.pageY}))};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>{document.removeEventListener(`mousemove`,e)}},[]),{isHoveringOver:e,setRef:(0,c.useCallback)(e=>{n.current=e},[])}}function vt(e,t,n,r=`crosshair`){let i=e.trim();return`${i.startsWith(`url(`)?i:`url("${i}")`} ${t} ${n}, ${r}`}function yt(e,t,n,r=`crosshair`){return vt(`data:image/svg+xml,${encodeURIComponent(e.trim())}`,t,n,r)}var bt=ht;exports.Annotation=ht,exports.AnnotationContentAnchor=nt,exports.AnnotationDeleteControl=it,exports.ConfirmResetButtons=H,exports.DELETE_BUTTON_HIT_AREA_PX=ye,exports.DELETE_BUTTON_SIZE_PX=F,exports.DeleteButton=z,exports.DeleteCrossIcon=I,exports.DraggableBox=De,exports.DraggableDot=U,exports.MoveButton=we,exports.OvalSelector=X,exports.PointSelector=J,exports.Polygon=M,exports.PolygonSelector=Z,exports.RectangleSelector=q,exports.buildDrawingCursor=vt,exports.buildDrawingCursorFromSvg=yt,exports.default=bt,exports.deleteCornerBoxStyle=B,exports.getDeleteCornerPosition=be,exports.useAnnotationHitDetection=y,exports.useDragging=re,exports.useMouseHover=_t,exports.useRelativeMousePosition=v,exports.useSelectorMethods=te;