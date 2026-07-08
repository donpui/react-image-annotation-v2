Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},s=(n,r,a)=>(a=n==null?{}:e(i(n)),o(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));let c=require("react");c=s(c);let l=require("styled-components");l=s(l);let u=require("react/jsx-runtime");var d=(e,t)=>{let n=t||e.currentTarget;if(!n||typeof n.getBoundingClientRect!=`function`)return{x:0,y:0};let r=n.getBoundingClientRect(),i=e.clientX-r.x,a=e.clientY-r.y;return{x:i/r.width*100,y:a/r.height*100}},f=(e,t,n)=>Math.max(e,Math.min(t,n)),p=e=>{if(!e.currentTarget||typeof e.currentTarget.getBoundingClientRect!=`function`)return{x:0,y:0};let t=e.targetTouches[0],n=e.currentTarget.getBoundingClientRect(),r=t.pageX-n.left,i=t.pageY-(n.top+window.scrollY);return{x:f(0,100,r/n.width*100),y:f(0,100,i/n.height*100)}},m=(e,t)=>h(e)?g(e)?(_(e)&&e.preventDefault(),p(e)):{x:null}:d(e,t),h=e=>e.targetTouches!==void 0,g=e=>e.targetTouches.length===1,_=e=>e.type===`touchmove`;function v(e,t={}){let{onPositionChange:n,throttleMs:r=16}=t,i=(0,c.useRef)({x:null,y:null}),[a,o]=(0,c.useState)({x:null,y:null}),s=(0,c.useRef)(0),l=(0,c.useRef)(null),u=(0,c.useCallback)(e=>{if(i.current=e,n){let t=Date.now();r<=0||t-s.current>=r?(o(e),n(e),s.current=t):(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{o(e),n(e),s.current=Date.now()},r-(t-s.current)))}},[n,r]),f=(0,c.useCallback)(t=>{try{let n=e.current;if(!n){u({x:null,y:null});return}let r=d(t,n);u(r)}catch{u({x:null,y:null})}},[e,u]),p=(0,c.useCallback)(t=>{let n=e.current;if(!n||t.targetTouches.length!==1)return;let r=t.targetTouches[0],i=n.offsetParent;if(i)try{let e=r.pageX-i.offsetLeft,t=r.pageY-i.offsetTop,a=n,o=a.width,s=a.height;u(o>0&&s>0?{x:e/o*100,y:t/s*100}:{x:null,y:null})}catch{u({x:null,y:null})}},[e,u]),m=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),h=(0,c.useCallback)(e=>{u({x:null,y:null})},[u]),g=(0,c.useCallback)(()=>i.current,[]);return(0,c.useEffect)(()=>()=>{l.current&&clearTimeout(l.current)},[]),{mousePosition:n?a:i.current,handlers:{onMouseMove:f,onMouseLeave:m,onTouchMove:p,onTouchLeave:h},getCurrentMousePosition:g}}function y({annotations:e,selectors:t,imageRef:n,enableEditing:r}){let i=(0,c.useMemo)(()=>new Map(t.map(e=>[e.TYPE,e])),[t]),a=(0,c.useCallback)(e=>{if(e)return i.get(e)},[i]);return{getTopAnnotationAt:(0,c.useCallback)((t,i)=>{let o=n.current;if(!o||t===null||i===null)return;let s={x:t,y:i},c=e.map(e=>{let{geometry:t}=e;if(!t)return null;let n=a(t.type);if(!n)return null;let i=t;return r&&t.type===`RECTANGLE`&&typeof t.x==`number`&&typeof t.y==`number`&&typeof t.width==`number`&&typeof t.height==`number`&&(i={...t,x:Math.max(0,t.x-2),y:Math.max(0,t.y-2),width:Math.min(100-t.x+2,t.width+4),height:Math.min(100-t.y+2,t.height+4)}),n.intersects(s,i,o)?e:null}).filter(e=>e!==null);if(c.length!==0)return c.sort((e,t)=>{let n=a(e.geometry.type),r=a(t.geometry.type);return!n||!r?0:n.area(e.geometry,o)-r.area(t.geometry,o)})[0]},[e,a,n,r]),getSelectorByType:a}}function b({targetRef:e,imageRef:t,annotations:n,selectors:r,enableEditing:i,suppressHover:a=!1,throttleMs:o=50}){let[s,l]=(0,c.useState)(void 0),u=(0,c.useRef)(void 0),d=(0,c.useRef)(void 0),[f,p]=(0,c.useState)(n),[m,h]=(0,c.useState)(r);(n!==f||r!==m)&&(p(n),h(r),l(void 0),u.current=void 0,d.current=void 0);let{getTopAnnotationAt:g}=y({annotations:n,selectors:r,imageRef:t,enableEditing:i}),{handlers:_}=v(e,{onPositionChange:(0,c.useCallback)(e=>{if(a){d.current!=null&&(d.current=void 0,u.current=void 0,l(void 0));return}let{x:t,y:n}=e,r=g(t,n),i=r?.data?.id;i!==d.current&&(d.current=i,u.current=r,l(r))},[g,a]),throttleMs:o});return{hoveredAnnotation:s,mouseHandlers:(0,c.useMemo)(()=>_,[_])}}function x({enableEditing:e,isDrawing:t,isCreationEditorOpen:n,isDragging:r,draggingAnnotationId:i,hasPendingChanges:a,annotations:o,hoveredAnnotation:s,lockEditSessionOnHover:l=!0}){let[u,d]=(0,c.useState)(null),f=(0,c.useRef)(null),p=t||n,[m,h]=(0,c.useState)(p);p!==m&&(h(p),p&&(f.current=null,d(null)));let g=(0,c.useCallback)(()=>{f.current=null,d(null)},[]),_=(0,c.useCallback)(e=>{f.current=e,d(e)},[]),v=(0,c.useCallback)(()=>{l&&g()},[l,g]);(0,c.useEffect)(()=>{if(!e||p||!l)return;let t=s?.data?.id;t!=null&&(f.current??(f.current=t,d(t)))},[e,p,l,s?.data?.id]);let y=(0,c.useMemo)(()=>{for(let e of o){let t=e.data?.id;if(t!=null&&a(t))return t}},[o,a]),b=(0,c.useMemo)(()=>p?null:r&&i!=null?i:y??(e&&u!=null?u:null),[p,r,i,y,e,u]);return{effectiveTopAnnotation:(0,c.useMemo)(()=>{if(!p)return b==null?s:o.find(e=>e.data?.id===b)},[p,b,o,s]),focusAnnotationId:b,clearEditingSession:g,engageEdit:_,onContainerMouseLeave:v}}function ee({selectors:e,effectiveType:t,value:n,onChange:r,disableAnnotation:i}){let a=(0,c.useCallback)(t=>{if(t)return e.find(e=>e.TYPE===t)},[e]);return{callSelectorMethod:(0,c.useCallback)((e,o)=>{if(i)return;let s=a(t);if(!s?.methods[e])return;let c=s.methods[e];try{let i=c(n||{},o);if(i===void 0){process.env.NODE_ENV!==`production`&&console.error(`Selector method ${String(e)} of type ${t} returned undefined. Make sure to explicitly return the previous state or new state.`);return}r?.(i)}catch(t){process.env.NODE_ENV!==`production`&&console.error(`Error calling selector method ${String(e)}:`,t)}},[i,a,t,n,r]),getSelectorByType:a}}var S=100;function te(e){let{x:t=0,y:n=0,width:r=0,height:i=0}=e;return r=Math.max(r,0),i=Math.max(i,0),t=Math.min(t,S-r),n=Math.min(n,S-i),{...e,x:t,y:n,width:r,height:i}}function ne({annotations:e,onAnnotationsChange:t,imageRef:n,previewMode:r=!1}){let[i,a]=(0,c.useState)(!1),[o,s]=(0,c.useState)(void 0),[l,u]=(0,c.useState)(()=>new Map),d=(0,c.useRef)(null),f=(0,c.useRef)(null);f.current||=new Map;let p=(0,c.useCallback)(()=>{let e=n.current;if(!e)return{width:1,height:1};let t=e.getBoundingClientRect();return{width:t.width,height:t.height}},[n]),m=(0,c.useCallback)((n,i)=>{let a=te(i);if(r){u(e=>{let t=new Map(e);return t.set(n,a),t});return}t?.(e.map(e=>e.data?.id===n?{...e,geometry:a}:e))},[r,t,e]),h=(0,c.useCallback)((e,t,n,r)=>{let{width:i,height:a}=p(),o=e.clientX-r.x,s=e.clientY-r.y,c={...n};switch(t){case`top`:c.height=Math.min((n.height??0)-s/a*S,(n.y??0)+(n.height??0)),c.y=Math.max((n.y??0)+s/a*S,0);break;case`right`:c.width=Math.min((n.width??0)+o/i*S,S-(n.x??0));break;case`bottom`:c.height=Math.min((n.height??0)+s/a*S,S-(n.y??0));break;case`left`:c.width=Math.min((n.width??0)-o/i*S,(n.x??0)+(n.width??0)),c.x=Math.max((n.x??0)+o/i*S,0);break;default:break}return te(c)},[p]),g=(0,c.useCallback)((e,t)=>{let{width:n,height:r}=p(),i=e.clientX-t.initialCursorPosition.x,a=e.clientY-t.initialCursorPosition.y,o=t.initialGeometry;return te({...o,x:Math.max(Math.min((o.x??0)+i/n*S,S-(o.width??0)),0),y:Math.max(Math.min((o.y??0)+a/r*S,S-(o.height??0)),0)})},[p]),_=(0,c.useCallback)((t,n)=>{let r=e.find(e=>e.data?.id===t),i=l.get(t)??r?.geometry;i&&(d.current={annotationId:t,initialGeometry:{...i},initialCursorPosition:n},f.current.set(t,{...i}),s(t),a(!0))},[e,l]),v=(0,c.useCallback)((e,t)=>{_(e,t)},[_]),y=(0,c.useCallback)((e,t,n)=>{let r=d.current;if(!r)return;let i=h(e,t,r.initialGeometry,r.initialCursorPosition);m(r.annotationId,i)},[h,m]),b=(0,c.useCallback)((e,t)=>{_(e,t)},[_]),x=(0,c.useCallback)((e,t)=>{let n=d.current;if(!n)return;let r=g(e,n);m(n.annotationId,r)},[g,m]),ee=(0,c.useCallback)(()=>{a(!1),d.current=null},[]);return{isDragging:i,draggingAnnotationId:o,hasPendingChanges:(0,c.useCallback)(e=>l.has(e),[l]),onDotDragStart:v,onDotDrag:y,onMoveStart:b,onMove:x,onDragEnd:ee,handleConfirm:(0,c.useCallback)(n=>{let r=l.get(n);r&&t&&t(e.map(e=>e.data?.id===n?{...e,geometry:r}:e)),u(e=>{let t=new Map(e);return t.delete(n),t}),f.current.delete(n),a(!1),s(void 0),d.current=null},[l,t,e]),handleReset:(0,c.useCallback)(n=>{let r=d.current,i=f.current.get(n)??(r?.annotationId===n?r.initialGeometry:e.find(e=>e.data?.id===n)?.geometry);i&&t&&t(e.map(e=>e.data?.id===n?{...e,geometry:i}:e)),u(e=>{let t=new Map(e);return t.delete(n),t}),f.current.delete(n),a(!1),s(void 0),d.current=null},[e,t]),getEffectiveAnnotation:(0,c.useCallback)(e=>{let t=e.data?.id;if(t==null)return e;let n=l.get(t);return n?{...e,geometry:n}:e},[l])}}function re(e){let[t,n]=(0,c.useState)(null),r=(0,c.useRef)(null),i=(0,c.useRef)(null),a=(0,c.useCallback)(()=>{i.current!=null&&(clearTimeout(i.current),i.current=null)},[]),o=(0,c.useCallback)(()=>{a(),i.current=setTimeout(()=>{r.current??n(null),i.current=null},300)},[a]);return(0,c.useEffect)(()=>{let t=e?.data?.id;if(t!=null){a(),n(t);return}r.current??o()},[e,a,o]),(0,c.useEffect)(()=>()=>a(),[a]),{pinnedControlsId:t,onDeleteControlMouseEnter:(0,c.useCallback)(e=>{a(),r.current=e,n(e)},[a]),onDeleteControlMouseLeave:(0,c.useCallback)(()=>{r.current=null,o()},[o])}}function ie(e,t){e&&(typeof e==`function`?e(t):e.current=t)}function ae(e,t){let{src:n,alt:r=`Annotation Image`,style:i,className:a,containerRef:o,imageRef:s,annotations:l,type:u,selectors:d,value:f,onChange:p,onSubmit:m,activeAnnotationComparator:h,activeAnnotations:g,editModeAnnotationIds:_,disableAnnotation:v,drawingCursor:y,disableSelector:S,disableEditor:te,disableOverlay:ae,showOverlayOnce:C,disableContent:w,disableHitTesting:oe,allowTouch:T,enableEditing:E=!1,onAnnotationsChange:D,renderSelector:se,renderEditor:ce,renderHighlight:le,renderDraggableHighlight:ue,renderContent:O,renderOverlay:de,enableRemoval:fe,onRemoveAnnotation:pe,canRemoveAnnotation:k,renderDelete:me,onConfirm:A,onReset:j,onImageMouseUp:M,onImageMouseDown:N,onImageMouseMove:P,onImageClick:he,onImageLoad:ge,onImageError:F}=e,I=(0,c.useRef)(null),L=(0,c.useRef)(null),_e=!!(A&&j),R=f?.selection?.mode===`SELECTING`||f?.selection?.mode===`COLLECTING_POINTS`,z=!!f?.selection?.showEditor,ve=R||z,B=C&&ve,[ye,V]=(0,c.useState)(!1),[be,xe]=(0,c.useState)(B),H=!w&&!!O;B!==be&&(xe(B),B&&V(!0));let Se=!ve&&!(C&&ye),{isDragging:U,draggingAnnotationId:W,hasPendingChanges:Ce,onDotDragStart:we,onDotDrag:Te,onMoveStart:Ee,onMove:De,onDragEnd:Oe,handleConfirm:ke,handleReset:Ae,getEffectiveAnnotation:je}=ne({annotations:l,onAnnotationsChange:D,imageRef:I,previewMode:_e}),{hoveredAnnotation:Me,mouseHandlers:G}=b({targetRef:L,imageRef:I,annotations:l,selectors:d,enableEditing:E,suppressHover:R||z,throttleMs:50}),{effectiveTopAnnotation:K,focusAnnotationId:Ne,clearEditingSession:Pe,engageEdit:q,onContainerMouseLeave:Fe}=x({enableEditing:E,isDrawing:R,isCreationEditorOpen:z,isDragging:U,draggingAnnotationId:W,hasPendingChanges:Ce,annotations:l,hoveredAnnotation:Me,lockEditSessionOnHover:!H});(0,c.useEffect)(()=>{U&&W!=null&&q(W)},[U,W,q]);let Ie=(0,c.useMemo)(()=>({onDotDragStart:we,onDotDrag:Te,onMoveStart:Ee,onMove:De,onDragEnd:Oe}),[we,Te,Ee,De,Oe]),J=(0,c.useCallback)(e=>{ke(e),A?.(e),Pe()},[ke,A,Pe]),Le=(0,c.useCallback)(e=>{Ae(e),j?.(e),Pe()},[Ae,j,Pe]),Re=u||d[0]?.TYPE,ze=(0,c.useCallback)(e=>{L.current&&(L.current.style.cursor=e)},[]),Be=(0,c.useCallback)(()=>{L.current&&L.current.style.removeProperty(`cursor`)},[]);(0,c.useEffect)(()=>{if(!y||!R){document.body.style.removeProperty(`cursor`);return}let e=document.body.style.cursor;return document.body.style.cursor=y,()=>{document.body.style.cursor=e}},[y,R]);let{callSelectorMethod:Y}=ee({selectors:d,effectiveType:Re,value:f,onChange:p,disableAnnotation:v}),Ve=(0,c.useCallback)(e=>{navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&T&&e.preventDefault(),Y(`onTouchStart`,e)},[T,Y]),He=(0,c.useCallback)(e=>{Y(`onTouchEnd`,e)},[Y]),Ue=(0,c.useCallback)(e=>{G.onTouchMove(e),navigator.userAgent.toLowerCase().includes(`safari`)&&!navigator.userAgent.toLowerCase().includes(`chrome`)&&T&&e.preventDefault(),Y(`onTouchMove`,e)},[G,T,Y]),X=(0,c.useCallback)(e=>{G.onTouchLeave(e)},[G]);(0,c.useEffect)(()=>{let e=L.current;if(!(!T||!e))return e.ontouchstart=Ve,e.ontouchend=He,e.ontouchmove=Ue,e.ontouchcancel=X,()=>{e.ontouchstart=null,e.ontouchend=null,e.ontouchmove=null,e.ontouchcancel=null}},[T,Ve,He,Ue,X]);let We=(0,c.useCallback)(e=>{I.current=e,ie(t,e),ie(s,e)},[t,s]),Ge=(0,c.useCallback)(e=>{L.current=e},[]),Ke=(0,c.useCallback)(e=>{ie(o,e)},[o]),qe=(0,c.useCallback)(e=>{G.onMouseMove(e.nativeEvent),P?.(e),Y(`onMouseMove`,e)},[G,P,Y]),Je=(0,c.useCallback)(e=>{G.onMouseLeave(e.nativeEvent),Fe()},[G,Fe]),Ye=(0,c.useCallback)(e=>{M?.(e),Y(`onMouseUp`,e),y&&!v&&(Be(),R||document.body.style.removeProperty(`cursor`))},[M,Y,y,v,Be,R]),Xe=(0,c.useCallback)(e=>{y&&!v&&(ze(y),document.body.style.cursor=y);let t=f?.selection?.mode===`SELECTING`||f?.selection?.mode===`COLLECTING_POINTS`||!!f?.selection?.showEditor,n=K?.data?.id;if(E&&!t&&!z&&n!=null){H&&q(n),N?.(e);return}N?.(e),Y(`onMouseDown`,e)},[y,v,ze,E,H,K?.data?.id,z,f?.selection?.mode,f?.selection?.showEditor,q,N,Y]),Ze=(0,c.useCallback)(e=>{he?.(e),Y(`onClick`,e)},[he,Y]),Qe=(0,c.useCallback)(()=>{m&&f&&m(f)},[m,f]),Z=(0,c.useCallback)(e=>{e.key===`Escape`&&p&&(f?.selection?.showEditor||f?.geometry)&&p({selection:void 0,geometry:void 0,data:void 0})},[f,p]);(0,c.useEffect)(()=>{if(f?.selection?.showEditor||f?.selection?.mode===`COLLECTING_POINTS`)return window.addEventListener(`keydown`,Z),()=>window.removeEventListener(`keydown`,Z)},[f?.selection?.showEditor,f?.selection?.mode,Z]);let Q=K,{pinnedControlsId:$,onDeleteControlMouseEnter:$e,onDeleteControlMouseLeave:et}=re(K),tt=(0,c.useCallback)((e,t)=>{let n=e.data?.id;return n!=null&&$!=null&&n===$?!0:g&&g.some(t=>h?h(e,t):e.data.id===t)||t===e},[g,h,$]);return{setContainerRef:Ke,style:i,className:a,onContainerMouseLeave:Je,onContainerTouchCancel:X,onContainerMouseMove:qe,setImageRef:We,src:n,alt:r,annotations:l,layoutOptions:{touchEnabled:T,selectorDisabled:!!S||E&&U,overlayDisabled:!!ae,overlayHoverEnabled:Se,editorDisabled:!!te||E&&U,contentDisabled:!!w,hitTestingDisabled:!!oe||E&&U||z,enableEditing:E,drawingCursor:y,disableAnnotation:v},onImageLoad:ge,onImageError:F,annotationState:{getIsActive:tt,topAnnotation:Q,editModeIds:_,isDragging:U,draggingAnnotationId:W,hasPendingChanges:Ce,getEffectiveAnnotation:E?je:void 0,draggingHandlers:E?Ie:void 0,focusAnnotationId:Ne,showContentOnHover:H,engageEdit:E&&H?q:void 0,onConfirm:E?J:void 0,onReset:E?Le:void 0,enableRemoval:fe,onRemoveAnnotation:pe,canRemoveAnnotation:k,onDeleteControlMouseEnter:$e,onDeleteControlMouseLeave:et},value:f,isDrawing:R,isCreatingAnnotation:ve,setTargetRef:Ge,onInteractionTargetClick:Ze,onInteractionTargetMouseUp:Ye,onInteractionTargetMouseDown:Xe,effectiveType:Re,onChange:p,onEditorSubmit:Qe,renderSlots:{renderHighlight:le,renderDraggableHighlight:ue,renderSelector:se,renderOverlay:de,renderContent:O,renderEditor:ce,renderDelete:me}}}var C=l.default.div`
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
`;function w(e){let{geometry:t}=e.annotation;return t?(0,u.jsx)(C,{style:{top:`${t.y}%`,left:`${t.x}%`}}):null}var oe=l.default.div`
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
`,E=({onChange:e,onSubmit:t,onFocus:n,onBlur:r,value:i})=>{let a=c.default.useRef(null);return c.default.useEffect(()=>{a.current?.focus({preventScroll:!0})},[]),(0,u.jsxs)(c.default.Fragment,{children:[(0,u.jsx)(oe,{children:(0,u.jsx)(`textarea`,{ref:a,placeholder:`Write description`,onFocus:n,onBlur:r,onChange:e,value:i})}),i&&(0,u.jsx)(T,{onClick:t,children:`Save description`})]})},D={},se={},ce=l.keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,le=l.default.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  pointer-events: auto;
  transform-origin: top left;
  animation: ${ce} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`,ue=({annotation:e,onChange:t,onSubmit:n,className:r=``,style:i=D})=>e.geometry?(0,u.jsx)(le,{className:r,style:i,children:(0,u.jsx)(E,{onChange:n=>t({...e,data:{...e.data,text:n.target.value}}),onSubmit:n,value:e.data?.text})}):null,O=l.default.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
`,de=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function fe({annotation:e,className:t=``,style:n=D}){let{geometry:r}=e;return r?(0,u.jsxs)(de,{className:t,style:n,children:[(0,u.jsx)(O,{style:{height:`${r.y}%`,width:`100%`}}),(0,u.jsx)(O,{style:{top:`${r.y}%`,height:`${r.height}%`,width:`${r.x}%`}}),(0,u.jsx)(O,{style:{top:`${r.y}%`,left:`${r.x+r.width}%`,height:`${r.height}%`,width:`${100-(r.x+r.width)}%`}}),(0,u.jsx)(O,{style:{top:`${r.y+r.height}%`,height:`${100-(r.y+r.height)}%`,width:`100%`}})]}):null}var pe=l.default.div`
  border: dashed 2px black;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function k({annotation:e,className:t=``,style:n=D,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(pe,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var me=l.default.div`
  border: dashed 2px black;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`;function A({annotation:e,className:t=``,style:n=D,active:r}){let{geometry:i}=e;return i?(0,u.jsx)(me,{className:t,style:{position:`absolute`,left:`${i.x}%`,top:`${i.y}%`,height:`${i.height}%`,width:`${i.width}%`,boxShadow:r?`0 0 1px 1px yellow inset`:void 0,...n}}):null}var j=3,M=10;function N(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function P({annotation:e,className:t,style:n,active:r}){let{geometry:i,selection:a}=e;if(!i||!i.points||i.points.length===0)return null;let o=i.points,s=a?.cursorX,c=a?.cursorY,l=a?.mode===`COLLECTING_POINTS`,d=o.length>=3,f=o[0],p=l&&d&&s!==void 0&&c!==void 0&&N({x:s,y:c},f)<j,m=o.map(e=>`${e.x},${e.y}`).join(` `);return(0,u.jsxs)(`div`,{className:t,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,pointerEvents:`none`,...n},children:[(0,u.jsxs)(`svg`,{viewBox:`0 0 100 100`,preserveAspectRatio:`none`,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,overflow:`visible`,pointerEvents:`none`},children:[!l&&o.length>=3&&(0,u.jsx)(`polygon`,{points:m,fill:`rgba(0,0,0,0.1)`,stroke:r?`yellow`:`black`,strokeWidth:`2`,strokeDasharray:r?void 0:`5,3`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`}),l&&o.length>1&&(0,u.jsx)(`polyline`,{points:m,fill:`none`,stroke:`rgba(0,0,0,0.85)`,strokeWidth:`2`,strokeDasharray:`6,3`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`}),l&&p&&(0,u.jsx)(`line`,{x1:o[o.length-1].x,y1:o[o.length-1].y,x2:f.x,y2:f.y,stroke:`rgba(0,128,0,0.7)`,strokeWidth:`2`,strokeDasharray:`6,3`,vectorEffect:`non-scaling-stroke`}),l&&!p&&s!==void 0&&c!==void 0&&(0,u.jsx)(`line`,{x1:o[o.length-1].x,y1:o[o.length-1].y,x2:s,y2:c,stroke:`rgba(0,0,0,0.4)`,strokeWidth:`2`,strokeDasharray:`6,3`,vectorEffect:`non-scaling-stroke`})]}),l&&o.map((e,t)=>{let n=t===0,r=n&&p;return(0,u.jsx)(`div`,{style:{position:`absolute`,left:`${e.x}%`,top:`${e.y}%`,width:M,height:M,transform:`translate(-50%, -50%)`,borderRadius:`50%`,boxSizing:`border-box`,backgroundColor:r?`rgba(0,180,0,0.9)`:n?`white`:`rgba(0,0,0,0.85)`,border:`1.5px solid ${r?`white`:n?`rgba(0,0,0,0.85)`:`white`}`}},t)})]})}var he=l.default.div`
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
`;function ge({annotation:e,style:t=D,className:n=``}){let{geometry:r}=e;return!r||r.x===void 0||r.y===void 0||r.width===void 0||r.height===void 0?null:(0,u.jsx)(he,{style:{marginTop:8,marginLeft:8,...t},className:n,children:e.data&&e.data.text})}var F=l.default.div`
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
`,I=()=>(0,u.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:(0,u.jsx)(`path`,{d:`M12 3V9M12 3L9 6M12 3L15 6M12 15V21M12 21L15 18M12 21L9 18M3 12H9M3 12L6 15M3 12L6 9M15 12H21M21 12L18 9M21 12L18 15`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),L=20,_e=24;function R(e){return(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,...e,children:(0,u.jsx)(`path`,{d:`M6.99 7.01C6.6 7.4 6.6 8.03 6.99 8.42L10.58 12.01L6.99 15.59C6.6 15.98 6.6 16.61 6.99 17.01C7.39 17.4 8.02 17.4 8.41 17.01L11.99 13.42L15.58 17.01C15.97 17.4 16.6 17.4 16.99 17.01C17.38 16.61 17.38 15.98 16.99 15.59L13.41 12.01L16.99 8.42C17.38 8.03 17.38 7.4 16.99 7.01C16.6 6.62 15.97 6.62 15.58 7.01L11.99 10.59L8.41 7.01C8.02 6.62 7.39 6.62 6.99 7.01Z`,fill:`currentColor`})})}var z=l.default.button`
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
`,ve=(0,l.default)(R)`
  width: 12px;
  height: 12px;
  color: #0f0f0f;
  flex-shrink: 0;
`,B=({annotationId:e,onRemove:t,disabled:n,className:r,style:i})=>(0,u.jsx)(z,{type:`button`,className:r,style:i,onClick:r=>{r.stopPropagation(),!n&&t(e)},disabled:n,"aria-label":`Remove annotation`,$disabled:n,"data-testid":`annotation-delete-button`,children:(0,u.jsx)(ve,{})});function ye(e){return!e||typeof e.x!=`number`||typeof e.y!=`number`||typeof e.width!=`number`?null:{left:`calc(${e.x}% + ${e.width}%)`,top:`calc(${e.y}%)`,transform:`translate(-50%, -50%)`}}var V={position:`absolute`,top:0,right:0,transform:`translate(50%, -50%)`,width:24,height:24,display:`flex`,alignItems:`center`,justifyContent:`center`,pointerEvents:`auto`,zIndex:20},be=l.default.div`
  position: absolute;
  bottom: -25px;
  right: 0;
  display: flex;
  gap: 5px;
  z-index: 20;
`,xe=l.default.button`
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
`,H=({onConfirm:e,onReset:t})=>(0,u.jsxs)(be,{onMouseDown:e=>e.stopPropagation(),children:[(0,u.jsx)(xe,{type:`button`,onClick:t=>{t.stopPropagation(),e()},children:`✓`}),(0,u.jsx)(xe,{type:`button`,onClick:e=>{e.stopPropagation(),t()},children:`✕`})]}),Se=l.default.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.3);
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
`,U=l.default.div`
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
`,W=({position:e,onDragStart:t,onDrag:n,onDragEnd:r,annotationId:i})=>(0,u.jsx)(Se,{$position:e,onMouseDown:a=>{a.preventDefault(),a.stopPropagation();let o={x:a.clientX,y:a.clientY};t(i,o);let s=t=>{n(t,e,o)},c=()=>{document.removeEventListener(`mousemove`,s),document.removeEventListener(`mouseup`,c),r?.()};document.addEventListener(`mousemove`,s),document.addEventListener(`mouseup`,c)},onClick:e=>e.stopPropagation(),"data-type":`dot`}),Ce=({onMoveStart:e,onMove:t,onMoveEnd:n,annotationId:r})=>(0,u.jsx)(U,{onMouseDown:i=>{i.preventDefault(),i.stopPropagation();let a={x:i.clientX,y:i.clientY};e(r,a);let o=e=>{t(e,a)},s=()=>{document.removeEventListener(`mousemove`,o),document.removeEventListener(`mouseup`,s),n?.()};document.addEventListener(`mousemove`,o),document.addEventListener(`mouseup`,s)},onClick:e=>e.stopPropagation(),"data-type":`move-button`,children:(0,u.jsx)(I,{})}),we=36,Te=l.default.div`
  position: absolute;
  border: none;
  background: rgba(151, 151, 151, 0.3);
  border-radius: 3px;
  pointer-events: auto;
  z-index: 10;
  box-sizing: border-box;
`,Ee=({annotation:e,isDragging:t,hasPendingChanges:n,onDotDragStart:r,onDotDrag:i,onMoveStart:a,onMove:o,onDragEnd:s,enableRemoval:l,onRemoveAnnotation:d,onConfirm:f,onReset:p,onDeleteControlMouseEnter:m,onDeleteControlMouseLeave:h,allowResetOnMouseLeave:g=!0})=>{let{geometry:_}=e,v=e.data?.id,y=(0,c.useRef)(null),b=(t||n)&&f&&p;if((0,c.useEffect)(()=>{if(!g||t||n||!p||v==null)return;let e=e=>{let t=y.current;if(!t)return;let n=t.getBoundingClientRect(),{clientX:r,clientY:i}=e,a=we;(r<n.left-a||r>n.right+a||i<n.top-a||i>n.bottom+a)&&p(v)};return document.addEventListener(`mousemove`,e),()=>{document.removeEventListener(`mousemove`,e)}},[g,t,n,p,v]),!_||typeof _.x!=`number`||typeof _.y!=`number`||typeof _.width!=`number`||typeof _.height!=`number`)return null;let x=String(v??``);return(0,u.jsxs)(Te,{ref:y,className:`rectangle-editor-box`,style:{left:`${_.x}%`,top:`${_.y}%`,width:`${_.width}%`,height:`${_.height}%`},"data-annotation-draggable-box":!0,children:[(0,u.jsx)(W,{position:`top`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:x}),(0,u.jsx)(W,{position:`right`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:x}),(0,u.jsx)(W,{position:`bottom`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:x}),(0,u.jsx)(W,{position:`left`,onDragStart:r,onDrag:i,onDragEnd:s,annotationId:x}),(0,u.jsx)(Ce,{onMoveStart:a,onMove:o,onMoveEnd:s,annotationId:x}),l&&d&&v!=null&&(0,u.jsx)(`div`,{style:V,onMouseEnter:()=>m?.(v),onMouseLeave:()=>h?.(),onPointerEnter:()=>m?.(v),onPointerLeave:()=>h?.(),children:(0,u.jsx)(B,{annotationId:v,onRemove:d})}),b&&(0,u.jsx)(H,{onConfirm:()=>f(v),onReset:()=>p(v)})]})},De=`RECTANGLE`;function Oe({x:e,y:t},n,r){if(!n)return!1;let i=Math.min(n.x,n.x+n.width),a=Math.max(n.x,n.x+n.width),o=Math.min(n.y,n.y+n.height),s=Math.max(n.y,n.y+n.height);return!(e<i||t<o||e>a||t>s)}function ke(e,t){return!e||e.width<=0||e.height<=0?0:Math.abs(e.width)*Math.abs(e.height)}var Ae={onTouchStart(e,t){return je(e,t)},onTouchEnd(e,t){return Me(e,t)},onTouchMove(e,t){return G(e,t)},onMouseDown(e,t){return je(e,t)},onMouseUp(e,t){return Me(e,t)},onMouseMove(e,t){return G(e,t)}};function je(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}}function Me(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function G(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:De,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var K={TYPE:De,intersects:Oe,area:ke,methods:Ae},Ne=6,Pe=(e={width:100,height:100})=>({marginX:Ne/e.width*100,marginY:Ne/e.height*100}),q=`POINT`;function Fe({x:e,y:t},n,r){if(!n)return!1;let{marginX:i,marginY:a}=Pe(r),o=Math.min(i,a)/2,s=Math.abs(e-n.x),c=Math.abs(t-n.y);return s<=o&&c<=o}function Ie(e,t){return 0}var J={TYPE:q,intersects:Fe,area:Ie,methods:{onClick(e,t){return e.geometry?{}:{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`},geometry:{...e.geometry,...m(t),width:0,height:0,type:q}}}}},Le=e=>e**2,Re=`OVAL`;function ze({x:e,y:t},n,r){if(!n||!n.width||!n.height)return!1;let i=Math.abs(n.width),a=Math.abs(n.height),o={x:n.x+i/2,y:n.y+a/2},s=i/2,c=a/2;if(s===0||c===0)return!1;let l=e-o.x,u=t-o.y;return Le(l)/Le(s)+Le(u)/Le(c)<=1}function Be(e,t){if(!e||e.width<=0||e.height<=0)return 0;let n=Math.abs(e.width),r=Math.abs(e.height);return n/2*Math.PI*(r/2)}var Y={onTouchStart(e,t){return Ve(e,t)},onTouchEnd(e,t){return He(e,t)},onTouchMove(e,t){return Ue(e,t)},onMouseDown(e,t){if(!e.geometry){let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e},onMouseUp(e,t){if(e.selection&&e.selection.mode===`SELECTING`)return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}}},onMouseMove(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t);return{...e,geometry:{...e.geometry,type:Re,x:Math.min(n,i),y:Math.min(r,a),width:Math.abs(i-n),height:Math.abs(a-r)}}}return e}};function Ve(e,t){if(e.selection)return{};{let{x:n,y:r}=m(t);return{...e,selection:{...e.selection,mode:`SELECTING`,anchorX:n,anchorY:r}}}return e}function He(e,t){if(e.selection){let{selection:t,geometry:n}=e;if(!n)return{};switch(e.selection.mode){case`SELECTING`:return{...e,selection:{...e.selection,showEditor:!0,mode:`EDITING`}};default:break}}return e}function Ue(e,t){if(e.selection&&e.selection.mode===`SELECTING`){let{anchorX:n,anchorY:r}=e.selection,{x:i,y:a}=m(t),o=i-n,s=a-r;return{...e,geometry:{...e.geometry,type:Re,x:o>0?n:i,y:s>0?r:a,width:Math.abs(o),height:Math.abs(s)}}}return e}var X={TYPE:Re,intersects:ze,area:Be,methods:Y},We=`POLYGON`,Ge=3,Ke=350,qe=2;function Je(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function Ye(e){let t=e.map(e=>e.x),n=e.map(e=>e.y),r=Math.min(...t),i=Math.min(...n);return{x:r,y:i,width:Math.max(...t)-r,height:Math.max(...n)-i}}function Xe({x:e,y:t},n){if(!n||!n.points||n.points.length<3)return!1;let r=n.points,i=!1;for(let n=0,a=r.length-1;n<r.length;a=n++){let o=r[n].x,s=r[n].y,c=r[a].x,l=r[a].y;s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(i=!i)}return i}function Ze(e){if(!e||!e.points||e.points.length<3)return 0;let t=e.points,n=0;for(let e=0,r=t.length-1;e<t.length;r=e++)n+=(t[r].x+t[e].x)*(t[r].y-t[e].y);return Math.abs(n/2)}function Qe(e){let t=Ye(e.geometry?.points||[]);return{...e,geometry:{...e.geometry,...t},selection:{...e.selection,mode:`EDITING`,showEditor:!0,lastClickX:void 0,lastClickY:void 0,lastClickTime:void 0,cursorX:void 0,cursorY:void 0}}}var Z={TYPE:We,intersects:Xe,area:Ze,methods:{onClick(e,t){let{x:n,y:r}=m(t);if(n==null)return e;let i=e.selection?.mode,a=e.geometry?.points||[];if(i!==`COLLECTING_POINTS`)return{...e,selection:{...e.selection,mode:`COLLECTING_POINTS`,lastClickX:n,lastClickY:r,lastClickTime:Date.now()},geometry:{type:We,points:[{x:n,y:r}]}};let o=Date.now()-(e.selection?.lastClickTime||0),s=e.selection?.lastClickX??n,c=e.selection?.lastClickY??r;return o<Ke&&Je({x:n,y:r},{x:s,y:c})<qe&&a.length>=3||a.length>=3&&Je({x:n,y:r},a[0])<Ge?Qe(e):a.length>=50?a.length>=3?Qe(e):e:{...e,selection:{...e.selection,mode:`COLLECTING_POINTS`,lastClickX:n,lastClickY:r,lastClickTime:Date.now()},geometry:{...e.geometry,type:We,points:[...a,{x:n,y:r}]}}},onMouseMove(e,t){if(e.selection?.mode!==`COLLECTING_POINTS`)return e;let{x:n,y:r}=m(t);return n==null?e:{...e,selection:{...e.selection,cursorX:n,cursorY:r}}}},MAX_POINTS:50},Q={disableAnnotation:!1,disableSelector:!1,disableEditor:!1,disableOverlay:!1,showOverlayOnce:!1,disableContent:!1,disableHitTesting:!1,allowTouch:!1,type:K.TYPE,selectors:[K,J,X,Z],activeAnnotationComparator:(e,t)=>e===t,enableEditing:!1,onAnnotationsChange:()=>{process.env.NODE_ENV!==`production`&&console.warn(`onAnnotationsChange not provided. Annotation editing will not persist changes. Please provide an onAnnotationsChange prop to handle annotation updates.`)},renderSelector:({annotation:e})=>{switch(e.geometry?.type){case K.TYPE:return(0,u.jsx)(fe,{annotation:e});case J.TYPE:return(0,u.jsx)(w,{annotation:e});case X.TYPE:return(0,u.jsx)(A,{annotation:e});case Z.TYPE:return(0,u.jsx)(P,{annotation:e});default:return null}},renderEditor:({annotation:e,onChange:t,onSubmit:n})=>(0,u.jsx)(ue,{annotation:e,onChange:t,onSubmit:n}),renderHighlight:({key:e,annotation:t,active:n})=>{switch(t.geometry.type){case K.TYPE:return(0,u.jsx)(k,{annotation:t,active:n},e);case J.TYPE:return(0,u.jsx)(w,{annotation:t},e);case X.TYPE:return(0,u.jsx)(A,{annotation:t,active:n},e);case Z.TYPE:return(0,u.jsx)(P,{annotation:t,active:n},e);default:return null}},renderContent:({key:e,annotation:t})=>(0,u.jsx)(ge,{annotation:t},e),renderOverlay:({type:e,annotation:t}=se)=>{switch(e){case J.TYPE:return(0,u.jsx)(F,{children:`Click to Annotate`});case Z.TYPE:return(0,u.jsx)(F,{children:`Click to add points · Double-click or click first point to finish · Esc to cancel`});default:return(0,u.jsx)(F,{children:`Click and Drag to Annotate`})}},renderDraggableHighlight:({key:e,annotation:t,active:n,isHovered:r,isDragging:i,hasPendingChanges:a,onDotDragStart:o,onDotDrag:s,onMoveStart:c,onMove:l,onDragEnd:d,enableRemoval:f,onRemoveAnnotation:p,onConfirm:m,onReset:h,onDeleteControlMouseEnter:g,onDeleteControlMouseLeave:_})=>{if(!r&&!i&&!a)switch(t.geometry.type){case K.TYPE:return(0,u.jsx)(k,{annotation:t,active:n},e);case J.TYPE:return(0,u.jsx)(w,{annotation:t},e);case X.TYPE:return(0,u.jsx)(A,{annotation:t,active:n},e);case Z.TYPE:return(0,u.jsx)(P,{annotation:t,active:n},e);default:return null}if(t.geometry.type===K.TYPE)return(0,u.jsx)(Ee,{annotation:t,active:n,isHovered:r,isDragging:i,hasPendingChanges:a,onDotDragStart:o,onDotDrag:s,onMoveStart:c,onMove:l,onDragEnd:d,enableRemoval:f,onRemoveAnnotation:p,onConfirm:m,onReset:h,onDeleteControlMouseEnter:g,onDeleteControlMouseLeave:_},`${e}-editor`);switch(t.geometry.type){case J.TYPE:return(0,u.jsx)(w,{annotation:t},e);case X.TYPE:return(0,u.jsx)(A,{annotation:t,active:n},e);case Z.TYPE:return(0,u.jsx)(P,{annotation:t,active:n},e);default:return null}}},$=8,$e=6;function et(e){return!!e&&typeof e.x==`number`&&typeof e.y==`number`&&typeof e.width==`number`&&typeof e.height==`number`}function tt({placement:e,geometry:t,containerHeight:n,overlayHeight:r,offsetPx:i}){if(e===`above`)return`above`;if(e===`below`)return`below`;let a=t.y/100*n,o=(t.y+t.height)/100*n,s=r+i+$,c=n-o,l=a;return c>=s?`below`:l>=s||l>=c?`above`:`below`}function nt({annotation:e,containerRef:t,placement:n=`auto`,offsetPx:r=$e,className:i,style:a,children:o}){let s=(0,c.useRef)(null),[l,d]=(0,c.useState)({x:0,y:0}),[f,p]=(0,c.useState)(n===`above`?`above`:`below`),{geometry:m}=e;return(0,c.useLayoutEffect)(()=>{let e=s.current,i=t.current;if(!e||!i||!et(m))return;let a=i.getBoundingClientRect(),o=e.offsetHeight,c=tt({placement:n,geometry:m,containerHeight:a.height,overlayHeight:o,offsetPx:r});if(c!==f){p(c);return}let l=e.getBoundingClientRect(),u=0;l.right>a.right-$&&(u=a.right-$-l.right),l.left+u<a.left+$&&(u=a.left+$-l.left);let h=0;l.bottom>a.bottom-$&&(h=a.bottom-$-l.bottom),l.top+h<a.top+$&&(h=a.top+$-l.top),d(e=>e.x===u&&e.y===h?e:{x:u,y:h})},[m,t,n,r,f]),et(m)?(0,u.jsx)(`div`,{ref:s,className:i,style:{...f===`above`?{position:`absolute`,left:`${m.x}%`,bottom:`calc(${100-m.y}% + ${r}px)`,transform:`translate(${l.x}px, ${l.y}px)`,pointerEvents:`none`,zIndex:25}:{position:`absolute`,left:`${m.x}%`,top:`calc(${m.y+m.height}% + ${r}px)`,transform:`translate(${l.x}px, ${l.y}px)`,pointerEvents:`none`,zIndex:25},...a},"data-annotation-content-anchor":!0,"data-placement":f,children:o}):null}var rt=l.default.div`
  position: absolute;
  pointer-events: auto;
  z-index: 10;
  width: ${24}px;
  height: ${24}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;function it({annotation:e,onRemove:t,renderDelete:n,disabled:r,onDeleteControlMouseEnter:i,onDeleteControlMouseLeave:a}){let[o,s]=(0,c.useState)(!1),l=e.data?.id,d=ye(e.geometry),f=r||o,p=(0,c.useCallback)(async()=>{if(!(f||l==null)){s(!0);try{await t(l)}finally{s(!1)}}},[l,f,t]),m=(0,c.useCallback)(()=>{l!=null&&i?.(l)},[l,i]),h=(0,c.useCallback)(()=>{a?.()},[a]);if(!d||l==null)return null;let g={onMouseEnter:m,onMouseLeave:h,onPointerEnter:m,onPointerLeave:h};return n?(0,u.jsx)(rt,{style:d,...g,children:n({key:l,annotation:e,active:!0,onRemove:p,disabled:f})}):(0,u.jsx)(rt,{style:d,className:`annotation-delete`,...g,children:(0,u.jsx)(B,{annotationId:l,onRemove:p,disabled:f})})}var at=l.default.div`
  clear: both;
  position: relative;
  width: 100%;
  overflow: visible;

  ${e=>e.$overlayHoverEnabled&&l.css`
      &:hover ${F} {
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
`;function dt({annotationId:e,annotation:t,active:n,slot:r}){return(0,u.jsx)(u.Fragment,{children:r({key:e,annotation:t,active:n})})}function ft({annotationId:e,annotation:t,slot:n,containerRef:r,onEngageEdit:i}){return(0,u.jsx)(nt,{annotation:t,containerRef:r,placement:`auto`,children:(0,u.jsx)(`div`,{style:{pointerEvents:`auto`,display:`inline-block`},onMouseDown:t=>{t.stopPropagation(),i?.(e)},role:`button`,children:n({key:e,annotation:t})})})}function pt({enableRemoval:e,onRemoveAnnotation:t,isActive:n,annotation:r,canRemoveAnnotation:i,enableEditing:a,draggableHighlightSlot:o,isHovered:s}){return!e||!t||!n||i&&!i(r)?!1:!(a&&o&&s&&r.geometry?.type===K.TYPE)}function mt({setContainerRef:e,style:t,className:n,onContainerMouseLeave:r,onContainerTouchCancel:i,onContainerMouseMove:a,setImageRef:o,src:s,alt:l,annotations:d,renderSlots:f,layoutOptions:p,annotationState:m,value:h,isDrawing:g,isCreatingAnnotation:_,setTargetRef:v,onInteractionTargetClick:y,onInteractionTargetMouseUp:b,onInteractionTargetMouseDown:x,effectiveType:ee,onChange:S,onEditorSubmit:te,onImageLoad:ne,onImageError:re,children:ie}){let{renderHighlight:ae,renderDraggableHighlight:C,renderSelector:w,renderOverlay:oe,renderContent:T,renderEditor:E,renderDelete:D}=f,{touchEnabled:se,selectorDisabled:ce,overlayDisabled:le,overlayHoverEnabled:ue=!0,editorDisabled:O,contentDisabled:de,hitTestingDisabled:fe,enableEditing:pe,drawingCursor:k,disableAnnotation:me}=p,A=k&&!me?k:void 0,{getIsActive:j,topAnnotation:M,editModeIds:N,isDragging:P,draggingAnnotationId:he,hasPendingChanges:ge,getEffectiveAnnotation:F,draggingHandlers:I,onConfirm:L,onReset:_e,enableRemoval:R,onRemoveAnnotation:z,canRemoveAnnotation:ve,onDeleteControlMouseEnter:B,onDeleteControlMouseLeave:ye,focusAnnotationId:V,showContentOnHover:be=!1,engageEdit:xe}=m,H=N?new Set(N):void 0,Se=(0,c.useRef)(null);return(0,u.jsxs)(at,{ref:e,style:t,className:n,onMouseLeave:r,onTouchCancel:i,onMouseMove:a,$allowTouch:se,$cursor:g?k:void 0,$overlayHoverEnabled:ue,children:[(0,u.jsx)(ot,{ref:o,src:s,alt:l,onLoad:ne,onError:re}),(0,u.jsxs)(st,{children:[d.map(e=>{let t=e.data?.id;if(!t)return null;let n=j(e,M);M?.data?.id,ge?.(t);let r=F?F(e):e;return ae?(0,u.jsx)(dt,{annotationId:t,annotation:r,active:n,slot:ae},t):null}),!ce&&h?.geometry&&w&&w({annotation:h})]}),(0,u.jsx)(ct,{ref:v,"data-testid":`annotation-target`,"data-is-drawing":g&&k?!0:void 0,$hitTestingDisabled:fe,$cursor:A,onClick:y,onMouseUp:b,onMouseDown:x}),pe&&C&&I&&(0,u.jsx)(lt,{children:d.map(e=>{let t=e.data?.id;if(!t)return null;let n=j(e,M),r=M?.data?.id===t,i=P&&he===t,a=!!ge?.(t),o=V!=null&&V===t;if(!(i||a||o||r&&!be))return null;let s=F?F(e):e;return(0,u.jsx)(c.default.Fragment,{children:C({key:t,annotation:s,active:n,isHovered:r,isDragging:!!i,hasPendingChanges:a,allowResetOnMouseLeave:!o&&!(L&&_e),...I,enableRemoval:R,onRemoveAnnotation:z,onConfirm:L,onReset:_e,onDeleteControlMouseEnter:B,onDeleteControlMouseLeave:ye})},`edit-chrome-${t}`)})}),!le&&oe&&oe({type:ee,annotation:h,isCreating:_}),(0,u.jsxs)(ut,{ref:Se,children:[d.map(e=>{let t=e.data?.id;if(!t)return null;let n=H?.has(t)??!1,r=j(e,M),i=M?.data?.id===t,a=P&&he===t,o=!!ge?.(t),s=!de&&T!=null&&(n||r&&!(pe&&C&&I&&(V!=null&&V===t||a||o))),l=pt({enableRemoval:R,onRemoveAnnotation:z,isActive:r,annotation:e,canRemoveAnnotation:ve,enableEditing:pe,draggableHighlightSlot:C,isHovered:i});return!s&&!l?null:(0,u.jsxs)(c.default.Fragment,{children:[s?(0,u.jsx)(ft,{annotationId:t,annotation:e,containerRef:Se,onEngageEdit:xe,slot:T}):null,l&&z?(0,u.jsx)(it,{annotation:e,onRemove:z,renderDelete:D,onDeleteControlMouseEnter:B,onDeleteControlMouseLeave:ye}):null]},t)}),!O&&h?.selection?.showEditor&&E&&S&&(0,u.jsx)(nt,{annotation:h,containerRef:Se,placement:`auto`,offsetPx:16,children:E({annotation:h,onChange:S,onSubmit:te})})]}),ie]})}function ht({ref:e,...t}){let{children:n,...r}=(0,c.useMemo)(()=>{let{renderSlots:e,...n}=t;return{...Q,...n,selectors:n.selectors??Q.selectors,renderSelector:n.renderSelector??e?.renderSelector??Q.renderSelector,renderEditor:n.renderEditor??e?.renderEditor??Q.renderEditor,renderHighlight:n.renderHighlight??e?.renderHighlight??Q.renderHighlight,renderContent:n.renderContent??e?.renderContent??Q.renderContent,renderOverlay:n.renderOverlay??e?.renderOverlay??Q.renderOverlay,renderDraggableHighlight:n.renderDraggableHighlight??e?.renderDraggableHighlight??Q.renderDraggableHighlight}},[t]);return(0,u.jsx)(mt,{...ae(r,e),children:n})}ht.displayName=`Annotation`;function gt(e,t){if(!e||typeof e.getBoundingClientRect!=`function`)return!1;let{pageX:n,pageY:r}=t,{left:i,right:a,bottom:o,top:s}=e.getBoundingClientRect();return n>i&&n<a&&r>s&&r<o}function _t(){let[e,t]=(0,c.useState)(!1),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=e=>{let r=n.current,i=gt(r,{pageX:e.pageX,pageY:e.pageY});t(i)};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>{document.removeEventListener(`mousemove`,e)}},[]),{isHoveringOver:e,setRef:(0,c.useCallback)(e=>{n.current=e},[])}}function vt(e,t,n,r=`crosshair`){let i=e.trim();return`${i.startsWith(`url(`)?i:`url("${i}")`} ${t} ${n}, ${r}`}function yt(e,t,n,r=`crosshair`){return vt(`data:image/svg+xml,${encodeURIComponent(e.trim())}`,t,n,r)}var bt=ht;exports.Annotation=ht,exports.AnnotationContentAnchor=nt,exports.AnnotationDeleteControl=it,exports.ConfirmResetButtons=H,exports.DELETE_BUTTON_HIT_AREA_PX=_e,exports.DELETE_BUTTON_SIZE_PX=L,exports.DeleteButton=B,exports.DeleteCrossIcon=R,exports.DraggableBox=Ee,exports.DraggableDot=W,exports.MoveButton=Ce,exports.OvalSelector=X,exports.PointSelector=J,exports.Polygon=P,exports.PolygonSelector=Z,exports.RectangleSelector=K,exports.buildDrawingCursor=vt,exports.buildDrawingCursorFromSvg=yt,exports.default=bt,exports.deleteCornerBoxStyle=V,exports.getDeleteCornerPosition=ye,exports.useAnnotationHitDetection=y,exports.useDragging=ne,exports.useMouseHover=_t,exports.useRelativeMousePosition=v,exports.useSelectorMethods=ee;