(()=>{"use strict";var e,n={144:(e,n)=>{function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function o(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return l(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}(e))||n){t&&(e=t);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){u=!0,r=e},f:function(){try{s||null==t.return||t.return()}finally{if(u)throw r}}}}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var r=function(e){var n,t,i,l=null===(n=[].slice.call(null!==(t=null==e?void 0:e.children)&&void 0!==t?t:[]))||void 0===n?void 0:n[0];l&&([].slice.call(e.children).forEach((function(e){var n=e.getAttribute("data-unitone-layout")||"",t=n.split(" ");e.classList.contains("unitone-empty")?e.remove():(t=o(t.filter((function(e){return!["-bol","-linewrap"," "].includes(e)}))).join(" ")||"")!==n&&e.setAttribute("data-unitone-layout",t)})),[].slice.call(e.children).forEach((function(e){var n,t=l.getBoundingClientRect(),r=null===(n=i)||void 0===n?void 0:n.getBoundingClientRect(),s=e.getAttribute("data-unitone-layout")||"",u=s.split(" ");if((l===e||(null==r?void 0:r.top)<e.getBoundingClientRect().top)&&(u.includes("-bol")||(u=[].concat(o(u),["-bol"]))),(null==r?void 0:r.top)<e.getBoundingClientRect().top){var a=document.createElement("div");a.classList.add("unitone-empty"),e.before(a),(null==r?void 0:r.top)<a.getBoundingClientRect().top&&a.remove()}t.top<e.getBoundingClientRect().top&&(u.includes("-linewrap")||(u=[].concat(o(u),["-linewrap"]))),(u=u.filter(Boolean).join(" ")||"")!==s&&e.setAttribute("data-unitone-layout",u),i=e})))};n.R4=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=0,l=new ResizeObserver((function(e){var n,o=i(e);try{for(o.s();!(n=o.n()).done;){var l,s=n.value,u=null===(l=s.borderBoxSize)||void 0===l?void 0:l[0].inlineSize;u!==t&&(r(s.target),t=u)}}catch(e){o.e(e)}finally{o.f()}})),s={attributes:!0,attributeFilter:["style","data-unitone-layout","class"],attributeOldValue:!0,subtree:!0,characterData:!0},u=new MutationObserver((function(e){var t,l=i(e);try{var s=function(){var e=t.value;if("attributes"===e.type&&"data-unitone-layout"===e.attributeName){var i,l,s,u,a=[].concat(o(null!==(i=null==n||null===(l=n.ignore)||void 0===l?void 0:l.layout)&&void 0!==i?i:[]),["-bol","-linewrap"]);(null!==(s=e.target.getAttribute(e.attributeName))&&void 0!==s?s:"").split(" ").filter((function(e){return!a.includes(e)})).join(" ")!==(null!==(u=e.oldValue)&&void 0!==u?u:"").split(" ").filter((function(e){return!a.includes(e)})).join(" ")&&r(e.target)}else if("attributes"===e.type&&"class"===e.attributeName){var d,m,c,p,g=o(null!==(d=null==n||null===(m=n.ignore)||void 0===m?void 0:m.className)&&void 0!==d?d:[]);(null!==(c=e.target.getAttribute(e.attributeName))&&void 0!==c?c:"").split(" ").filter((function(e){return!g.includes(e)})).join(" ")!==(null!==(p=e.oldValue)&&void 0!==p?p:"").split(" ").filter((function(e){return!g.includes(e)})).join(" ")&&r(e.target)}else"attributes"===e.type&&"style"===e.attributeName&&r(e.target)};for(l.s();!(t=l.n()).done;)s()}catch(e){l.e(e)}finally{l.f()}})),a=new IntersectionObserver((function(e,n){e.forEach((function(e){var t=e.target;e.isIntersecting&&(n.unobserve(t),l.observe(t),u.observe(t,s))}))}),{rootMargin:"100px 0px"});a.observe(e)},n.EU=r},550:(e,n,t)=>{const o=window.wp.blocks,i=window.wp.blockEditor,l=window.wp.compose,r=window.wp.data,s=window.wp.hooks,u=window.ReactJSXRuntime,a=(0,u.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 5.71429H10V11H19.5V6.28571C19.5 5.97012 19.2761 5.71429 19 5.71429ZM19.5 12.5H10V18.2857H19C19.2761 18.2857 19.5 18.0299 19.5 17.7143V12.5ZM10 4H8.5H5C3.89543 4 3 5.02335 3 6.28571V17.7143C3 18.9767 3.89543 20 5 20H8.5H10H19C20.1046 20 21 18.9767 21 17.7143V6.28571C21 5.02335 20.1046 4 19 4H10ZM5 18.2857H8.5V5.71429H5C4.72386 5.71429 4.5 5.97012 4.5 6.28571V17.7143C4.5 18.0299 4.72386 18.2857 5 18.2857Z"})});function d(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=d(e[n]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const m=function(){for(var e,n,t=0,o="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=d(e))&&(o&&(o+=" "),o+=n);return o},c=window.wp.components,p=window.wp.element,g=window.wp.i18n,v=window.wp.editor,_=window.wp.editPost,f=(0,p.memo)((({width:e,height:n,gridTemplateColumns:t,gridTemplateRows:o,gap:i,cellsCount:l,border:r,padding:s})=>(0,u.jsx)("div",{className:"unitone-grid-visualizer__cells",style:{width:e,height:n,gridTemplateColumns:t,gridTemplateRows:o,gap:i,border:r,padding:s},children:Array(l).fill(0).map(((e,n)=>(0,u.jsx)("div",{className:"unitone-grid-cell"},n)))}))),b=(0,p.forwardRef)((({attributes:e},n)=>{const[t,o]=(0,p.useState)({}),i=e=>{var n,t;const o=e.ownerDocument.defaultView.getComputedStyle(e),i=o.getPropertyValue("grid-template-columns"),l=o.getPropertyValue("grid-template-rows"),r=o.getPropertyValue("gap"),s=o.getPropertyValue("border"),u=o.getPropertyValue("padding");return{gridTemplateColumns:i,gridTemplateRows:l,gap:r,rect:e.getBoundingClientRect(),cellsCount:(null!==(n=i?.split(" ")?.length)&&void 0!==n?n:0)*(null!==(t=l?.split(" ")?.length)&&void 0!==t?t:0),border:s,padding:u}};return(0,p.useEffect)((()=>{const e=n.current,t=e.ownerDocument.defaultView,l=[];for(const n of[e,...e.children]){const r=new t.ResizeObserver((()=>{o(i(e))}));r.observe(n),l.push(r)}return()=>{for(const e of l)e.disconnect()}}),[]),(0,p.useEffect)((()=>{const e=n.current;o(i(e))}),[e?.unitone?.gap]),t?.cellsCount?(0,u.jsx)(c.Popover,{anchor:n.current,variant:"unstyled",placement:"overlay",className:"unitone-grid-visualizer",__unstableSlotName:"__unstable-block-tools-after",animate:!1,focusOnMount:!1,resize:!1,flip:!1,children:(0,u.jsx)(f,{width:t?.rect?.width,height:t?.rect?.height,gridTemplateColumns:t?.gridTemplateColumns,gridTemplateRows:t?.gridTemplateRows,gap:t?.gap,cellsCount:t?.cellsCount,border:t?.border,padding:t?.padding})}):null})),w=window.wp.primitives,h=(0,u.jsx)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(w.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})}),x=(0,u.jsx)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(w.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})}),C=(0,u.jsx)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(w.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})});function y({label:e,desktopControls:n,tabletControls:t,mobileControls:o}){const i=(0,r.useSelect)((e=>{const{getDeviceType:n}=e(v.store);if(null!=n)return n()?.toLowerCase();const{__experimentalGetPreviewDeviceType:t}=e(_.store);return t()?.toLowerCase()}),[]),[l,s]=(0,p.useState)(i);(0,p.useEffect)((()=>{s(i)}),[i]);const a=(0,p.useMemo)((()=>"desktop"===l?h:"tablet"===l?x:"mobile"===l?C:h),[l]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.Flex,{className:"unitone-responsive-settings-container",gap:0,children:[(0,u.jsx)(c.FlexBlock,{children:(0,u.jsx)(c.BaseControl,{__nextHasNoMarginBottom:!0,label:e,id:e})}),(0,u.jsx)(c.FlexItem,{children:(0,u.jsx)(c.DropdownMenu,{icon:a,controls:[{icon:h,onClick:()=>s("desktop"),title:(0,g.__)("Desktop","unitone")},{icon:x,onClick:()=>s("tablet"),title:(0,g.__)("Tablet / Mobile","unitone")},{icon:C,onClick:()=>s("mobile"),title:(0,g.__)("Mobile","unitone")}],label:(0,g.__)("Switch to settings based on device size","unitone")})})]}),(0,u.jsxs)("div",{style:{marginTop:"2px"},children:["desktop"===l&&n(),"tablet"===l&&t(),"mobile"===l&&o()]})]})}const j=JSON.parse('{"uK":{"wZ":{"A":"div"},"bf":{"A":"min"},"YB":{"A":""},"$s":{"A":"240px"},"y9":{"A":""},"_$":{"A":"min"},"V9":{"A":""},"UY":{"A":""},"Tt":{"A":""},"xi":{"A":"min"},"Uv":{"A":""},"Rv":{"A":""},"_V":{"A":""},"ZD":{"A":"auto-fit"},"Be":{"A":"rows"},"Ge":{"A":1},"co":{"A":""},"wR":{"A":"rows"},"jJ":{"A":""},"B9":{"A":""},"x_":{"A":"rows"},"YD":{"A":""},"sY":{"A":""}}}');var T=t(144);const B=e=>null!==(e=String(e))&&""!==e?e:void 0,A=e=>(e=parseInt(e),isNaN(e)?void 0:e),k=e=>null!==(e=String(e))&&""!==e?e:void 0,R={from:[{type:"block",blocks:["unitone/grid"],transform:(e,n)=>{const t=n.map((e=>(0,o.createBlock)("unitone/grid-divided-content",{},[e])));return 1>t.length&&t.push((0,o.createBlock)("unitone/grid-divided-content",{},[])),(0,o.createBlock)("unitone/grid-divided",{...e,unitone:{...e?.unitone,dividerType:"stripe"}},t)}},{type:"block",blocks:["unitone/responsive-grid"],transform:(e,n)=>(0,o.createBlock)("unitone/grid-divided",{...e,unitone:{...e?.unitone,dividerType:"stripe"}},n.map((e=>(0,o.createBlock)("unitone/grid-divided-content",{},[e]))))},{type:"block",blocks:["unitone/cluster-divided"],transform:(e,n)=>(0,o.createBlock)("unitone/grid-divided",{...e},n.map((e=>(0,o.createBlock)("unitone/grid-divided-content",{...e.attributes},[...e.innerBlocks]))))},{type:"block",blocks:["unitone/responsive-grid-divided"],transform:(e,n)=>(0,o.createBlock)("unitone/grid-divided",{...e},n.map((e=>(0,o.createBlock)("unitone/grid-divided-content",{...e.attributes},[...e.innerBlocks]))))},{type:"block",blocks:["unitone/stack-divided"],transform:(e,n)=>(0,o.createBlock)("unitone/grid-divided",{...e},n.map((e=>(0,o.createBlock)("unitone/grid-divided-content",{...e.attributes},[...e.innerBlocks]))))},{type:"block",blocks:["unitone/flex-divided"],transform:(e,n)=>(0,o.createBlock)("unitone/grid-divided",{...e},n.map((e=>(0,o.createBlock)("unitone/grid-divided-content",{...e.attributes},[...e.innerBlocks]))))},{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(e){const n=e.map((e=>(0,o.createBlock)("unitone/grid-divided-content",{},[(0,o.createBlock)(e.name,e.attributes,e.innerBlocks)])));return(0,o.createBlock)("unitone/grid-divided",{unitone:{dividerType:"bordered"}},n)}}],ungroup:(e,n)=>n.flatMap((e=>e))},O=[{name:"grid-divided-stripe",title:(0,g.__)("Grid (Divider: stripe)","unitone"),isDefault:!0,attributes:{unitone:{dividerType:"stripe",divider:{style:"solid",width:"1px"},dividerColor:"unitone-light-gray",autoRepeat:"auto-fit"}},isActive:(e,n)=>!!e?.unitone?.dividerType&&!!n?.unitone?.dividerType&&e.unitone.dividerType===n.unitone.dividerType,scope:["inserter"],innerBlocks:[["unitone/grid-divided-content"],["unitone/grid-divided-content"]]},{name:"grid-divided-underline",title:(0,g.__)("Grid (Divider: underline)","unitone"),isDefault:!1,attributes:{unitone:{dividerType:"underline",divider:{style:"solid",width:"1px"},dividerColor:"unitone-light-gray",autoRepeat:"auto-fit"}},isActive:(e,n)=>!!e?.unitone?.dividerType&&!!n?.unitone?.dividerType&&e.unitone.dividerType===n.unitone.dividerType,scope:["inserter"],innerBlocks:[["unitone/grid-divided-content"],["unitone/grid-divided-content"]]},{name:"grid-divided-bordered",title:(0,g.__)("Grid (Divider: bordered)","unitone"),isDefault:!1,attributes:{unitone:{dividerType:"bordered",divider:{style:"solid",width:"1px"},dividerColor:"unitone-light-gray",autoRepeat:"auto-fit"}},isActive:(e,n)=>!!e?.unitone?.dividerType&&!!n?.unitone?.dividerType&&e.unitone.dividerType===n.unitone.dividerType,scope:["inserter"],innerBlocks:[["unitone/grid-divided-content"],["unitone/grid-divided-content"]]}];(0,o.registerBlockType)("unitone/grid-divided",{icon:{src:a},edit:function({attributes:e,setAttributes:n,clientId:t}){const{tagName:o,columnsOption:s,columns:a,columnMinWidth:d,gridTemplateColumns:v,columnAutoRepeat:_,mdColumnsOption:f,mdColumns:w,mdColumnMinWidth:h,mdGridTemplateColumns:x,smColumnsOption:C,smColumns:k,smColumnMinWidth:R,smGridTemplateColumns:O,rowsOption:M,rows:N,gridTemplateRows:G,mdRowsOption:S,mdRows:H,mdGridTemplateRows:V,smRowsOption:F,smRows:$,smGridTemplateRows:K,templateLock:D,__unstableUnitoneBlockOutline:I}=e,P=(0,r.useSelect)((e=>!!e(i.store).getBlock(t)?.innerBlocks?.length),[t]),z=(0,l.useRefEffect)((e=>{(0,T.R4)(e,{ignore:{className:["is-selected","has-child-selected","is-hovered","is-highlighted"]}}),setTimeout((()=>{(0,T.EU)(e)}),100)}),[]),E=o,L={"--unitone--columns":"columns"===s&&B(a)||void 0,"--unitone--column-min-width":"min"===s&&d||void 0,"--unitone--grid-template-columns":"free"===s&&v||void 0,"--unitone--column-auto-repeat":"min"===s&&_||void 0,"--unitone--md-columns":"columns"===f&&B(w)||void 0,"--unitone--md-column-min-width":"min"===f&&h||void 0,"--unitone--md-grid-template-columns":"free"===f&&x||void 0,"--unitone--sm-columns":"columns"===C&&B(k)||void 0,"--unitone--sm-column-min-width":"min"===C&&R||void 0,"--unitone--sm-grid-template-columns":"free"===C&&O||void 0,"--unitone--rows":"rows"===M&&B(N)||void 0,"--unitone--grid-template-rows":"free"===M&&G||void 0,"--unitone--md-rows":"rows"===S&&B(H)||void 0,"--unitone--md-grid-template-rows":"free"===S&&V||void 0,"--unitone--sm-rows":"rows"===F&&B($)||void 0,"--unitone--sm-grid-template-rows":"free"===F&&K||void 0},U=(0,p.useRef)(),W=(0,l.useMergeRefs)([U,z]),Z=(0,i.useBlockProps)({ref:W,className:"unitone-grid",style:L});Z["data-unitone-layout"]=m(Z["data-unitone-layout"],{[`-columns:${s}`]:!!s,[`-columns:md:${f}`]:"columns"===f&&!!w||"min"===f&&!!h||"free"===f&&!!x,[`-columns:sm:${C}`]:"columns"===C&&!!k||"min"===C&&!!R||"free"===C&&!!O,[`-rows:${M}`]:!!M,[`-rows:md:${S}`]:"rows"===S&&!!H||"free"===S&&!!V,[`-rows:sm:${F}`]:"rows"===F&&!!$||"free"===F&&!!K});const Y=(0,i.useInnerBlocksProps)(Z,{templateLock:D,allowedBlocks:["unitone/grid-divided-content"],renderAppender:P?void 0:i.InnerBlocks.ButtonBlockAppender});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.InspectorControls,{children:(0,u.jsxs)(c.__experimentalToolsPanel,{label:(0,g.__)("Settings","unitone"),children:[(0,u.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>o!==j.uK.wZ.A,isShownByDefault:!0,label:(0,g.__)("HTML element","unitone"),onDeselect:()=>n({tagName:j.uK.wZ.A}),children:(0,u.jsx)(c.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,g.__)("HTML element","unitone"),options:[{label:"<div>",value:"div"},{label:"<ul>",value:"ul"},{label:"<ol>",value:"ol"}],value:o,onChange:e=>n({tagName:e})})}),(0,u.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>s!==j.uK.bf.A||f!==j.uK._$.A||C!==j.uK.xi.A,isShownByDefault:!0,label:"grid-template-columns",onDeselect:()=>{n({columnsOption:j.uK.bf.A,columns:j.uK.YB.A,columnMinWidth:j.uK.$s.A,columnAutoRepeat:j.uK.ZD.A,gridTemplateColumns:j.uK.y9.A,mdColumnsOption:j.uK._$.A,mdColumns:j.uK.V9.A,mdColumnMinWidth:j.uK.UY.A,mdGridTemplateColumns:j.uK.Tt.A,smColumnsOption:j.uK.xi.A,smColumns:j.uK.Uv.A,smColumnMinWidth:j.uK.Rv.A,smGridTemplateColumns:j.uK._V.A})},children:(0,u.jsx)(y,{label:"grid-template-columns",desktopControls:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,hideLabelFromVision:!0,className:"unitone-toggle-group-control",value:s,onChange:e=>{n({columnsOption:e})},isBlock:!0,children:[(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"min",label:(0,g.__)("Minimum width","unitone")}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"columns",label:(0,g.__)("Columns count","unitone")}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"free",label:(0,g.__)("Free input","unitone")})]}),(0,u.jsxs)("div",{className:"unitone-toggle-group-control__body",children:["min"===s&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.__experimentalUnitControl,{label:(0,g.__)("Minimum width","unitone"),value:d,onChange:e=>n({columnMinWidth:e})}),(0,u.jsxs)(c.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:(0,g.__)("Auto repeat","unitone"),value:_,onChange:e=>{n({columnAutoRepeat:e})},isBlock:!0,children:[(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"auto-fit",label:"auto-fit"}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"auto-fill",label:"auto-fill"})]})]}),"columns"===s&&(0,u.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,g.__)("Columns count","unitone"),value:A(a),onChange:e=>n({columns:A(e)}),min:1,max:12,step:1}),"free"===s&&(0,u.jsx)(c.TextControl,{__nextHasNoMarginBottom:!0,value:v,onChange:e=>n({gridTemplateColumns:e})})]})]}),tabletControls:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,hideLabelFromVision:!0,className:"unitone-toggle-group-control",value:f,onChange:e=>{n({mdColumnsOption:e})},isBlock:!0,children:[(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"min",label:(0,g.__)("Minimum width","unitone")}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"columns",label:(0,g.__)("Columns count","unitone")}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"free",label:(0,g.__)("Free input","unitone")})]}),(0,u.jsxs)("div",{className:"unitone-toggle-group-control__body",children:["min"===f&&(0,u.jsx)(c.__experimentalUnitControl,{label:`${(0,g.__)("Minimum width","unitone")} (${(0,g.__)("For tablet / mobile","unitone")})`,value:h,onChange:e=>n({mdColumnMinWidth:e})}),"columns"===f&&(0,u.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:`${(0,g.__)("Columns count","unitone")} (${(0,g.__)("For tablet / mobile","unitone")})`,value:A(w),onChange:e=>n({mdColumns:A(e)}),min:1,max:12,step:1,allowReset:!0}),"free"===f&&(0,u.jsx)(c.TextControl,{__nextHasNoMarginBottom:!0,label:`${(0,g.__)("Free input","unitone")} (${(0,g.__)("For tablet / mobile","unitone")})`,value:x,onChange:e=>n({mdGridTemplateColumns:e})})]})]}),mobileControls:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,hideLabelFromVision:!0,className:"unitone-toggle-group-control",value:C,onChange:e=>{n({smColumnsOption:e})},isBlock:!0,children:[(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"min",label:(0,g.__)("Minimum width","unitone")}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"columns",label:(0,g.__)("Columns count","unitone")}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"free",label:(0,g.__)("Free input","unitone")})]}),(0,u.jsxs)("div",{className:"unitone-toggle-group-control__body",children:["min"===C&&(0,u.jsx)(c.__experimentalUnitControl,{label:`${(0,g.__)("Minimum width","unitone")} (${(0,g.__)("For mobile","unitone")})`,value:R,onChange:e=>n({smColumnMinWidth:e})}),"columns"===C&&(0,u.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:`${(0,g.__)("Columns count","unitone")} (${(0,g.__)("For mobile","unitone")})`,value:A(k),onChange:e=>n({smColumns:A(e)}),min:1,max:12,step:1,allowReset:!0}),"free"===C&&(0,u.jsx)(c.TextControl,{__nextHasNoMarginBottom:!0,label:`${(0,g.__)("Free input","unitone")} (${(0,g.__)("For mobile","unitone")})`,value:O,onChange:e=>n({smGridTemplateColumns:e})})]})]})})}),(0,u.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>M!==j.uK.Be.A||S!==j.uK.wR.A||F!==j.uK.x_.A,isShownByDefault:!0,label:"grid-template-rows",onDeselect:()=>n({rowsOption:j.uK.Be.A,rows:j.uK.Ge.A,gridTemplateRows:j.uK.co.A,mdRowsOption:j.uK.wR.A,mdRows:j.uK.jJ.A,mdGridTemplateRows:j.uK.B9.A,smRowsOption:j.uK.x_.A,smRows:j.uK.YD.A,smGridTemplateRows:j.uK.sY.A}),children:(0,u.jsx)(y,{label:"grid-template-rows",desktopControls:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,hideLabelFromVision:!0,className:"unitone-toggle-group-control",value:M,onChange:e=>{n({rowsOption:e,rows:j.uK.Ge.A,gridTemplateRows:j.uK.co.A})},isBlock:!0,children:[(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"rows",label:(0,g.__)("Rows count","unitone")}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"free",label:(0,g.__)("Free input","unitone")})]}),(0,u.jsxs)("div",{className:"unitone-toggle-group-control__body",children:["rows"===M&&(0,u.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,g.__)("Rows count","unitone"),value:A(N),onChange:e=>n({rows:A(e)}),min:1,max:12,step:1}),"free"===M&&(0,u.jsx)(c.TextControl,{__nextHasNoMarginBottom:!0,value:G,onChange:e=>n({gridTemplateRows:e})})]})]}),tabletControls:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,hideLabelFromVision:!0,className:"unitone-toggle-group-control",value:S,onChange:e=>{n({mdRowsOption:e})},isBlock:!0,children:[(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"rows",label:(0,g.__)("Rows count","unitone")}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"free",label:(0,g.__)("Free input","unitone")})]}),(0,u.jsxs)("div",{className:"unitone-toggle-group-control__body",children:["rows"===S&&(0,u.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:`${(0,g.__)("Rows count","unitone")} (${(0,g.__)("For tablet / mobile","unitone")})`,value:A(H),onChange:e=>n({mdRows:A(e)}),min:1,max:12,step:1,allowReset:!0}),"free"===S&&(0,u.jsx)(c.TextControl,{__nextHasNoMarginBottom:!0,label:`${(0,g.__)("Free input","unitone")} (${(0,g.__)("For tablet / mobile","unitone")})`,value:V,onChange:e=>n({mdGridTemplateRows:e})})]})]}),mobileControls:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:`grid-template-rows (${(0,g.__)("For mobile","unitone")})`,className:"unitone-toggle-group-control",value:S,onChange:e=>{n({smRowsOption:e})},isBlock:!0,children:[(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"rows",label:(0,g.__)("Rows count","unitone")}),(0,u.jsx)(c.__experimentalToggleGroupControlOption,{value:"free",label:(0,g.__)("Free input","unitone")})]}),(0,u.jsxs)("div",{className:"unitone-toggle-group-control__body",children:["rows"===S&&(0,u.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:`${(0,g.__)("Rows count","unitone")} (${(0,g.__)("For mobile","unitone")})`,value:A($),onChange:e=>n({smRows:A(e)}),min:1,max:12,step:1,allowReset:!0}),"free"===F&&(0,u.jsx)(c.TextControl,{__nextHasNoMarginBottom:!0,label:`${(0,g.__)("Free input","unitone")} (${(0,g.__)("For mobile","unitone")})`,value:K,onChange:e=>n({smGridTemplateRows:e})})]})]})})})]})}),I&&(0,u.jsx)(b,{ref:U,attributes:e}),(0,u.jsx)(E,{...Y})]})},save:function({attributes:e}){const{tagName:n,columnsOption:t,columns:o,columnMinWidth:l,gridTemplateColumns:r,columnAutoRepeat:s,mdColumnsOption:a,mdColumns:d,mdColumnMinWidth:c,mdGridTemplateColumns:p,smColumnsOption:g,smColumns:v,smColumnMinWidth:_,smGridTemplateColumns:f,rowsOption:b,rows:w,gridTemplateRows:h,mdRowsOption:x,mdRows:C,mdGridTemplateRows:y,smRowsOption:j,smRows:T,smGridTemplateRows:B}=e,A=n,R={"--unitone--columns":"columns"===t&&k(o)||void 0,"--unitone--column-min-width":"min"===t&&l||void 0,"--unitone--grid-template-columns":"free"===t&&r||void 0,"--unitone--column-auto-repeat":"min"===t&&s||void 0,"--unitone--md-columns":"columns"===a&&k(d)||void 0,"--unitone--md-column-min-width":"min"===a&&c||void 0,"--unitone--md-grid-template-columns":"free"===a&&p||void 0,"--unitone--sm-columns":"columns"===g&&k(v)||void 0,"--unitone--sm-column-min-width":"min"===g&&_||void 0,"--unitone--sm-grid-template-columns":"free"===g&&f||void 0,"--unitone--rows":"rows"===b&&k(w)||void 0,"--unitone--grid-template-rows":"free"===b&&h||void 0,"--unitone--md-rows":"rows"===x&&k(C)||void 0,"--unitone--md-grid-template-rows":"free"===x&&y||void 0,"--unitone--sm-rows":"rows"===j&&k(T)||void 0,"--unitone--sm-grid-template-rows":"free"===j&&B||void 0};return(0,u.jsx)(A,{...i.useInnerBlocksProps.save({...i.useBlockProps.save({className:"unitone-grid",style:R,"data-unitone-layout":m({[`-columns:${t}`]:!!t,[`-columns:md:${a}`]:"columns"===a&&!!d||"min"===a&&!!c||"free"===a&&!!p,[`-columns:sm:${g}`]:"columns"===g&&!!v||"min"===g&&!!_||"free"===g&&!!f,[`-rows:${b}`]:!!b,[`-rows:md:${x}`]:"rows"===x&&!!C||"free"===x&&!!y,[`-rows:sm:${j}`]:"rows"===j&&!!T||"free"===j&&!!B})})})})},transforms:R,variations:O});const M=(0,l.createHigherOrderComponent)((e=>n=>{const{getBlock:t}=(0,r.useSelect)(i.store);if(!n.rootClientId)return(0,u.jsx)(e,{...n});const o=t(n.rootClientId);if("unitone/grid-divided"!==o?.name)return(0,u.jsx)(e,{...n});const l={alignSelf:{lg:"stretch"},justifySelf:{lg:"stretch"}},s={...n,attributes:{...n?.attributes,unitone:{...n?.attributes?.unitone,alignSelf:null!=n?.attributes?.unitone?.alignSelf?n?.attributes?.unitone?.alignSelf:l.alignSelf,justifySelf:null!=n?.attributes?.unitone?.justifySelf?n?.attributes?.unitone?.justifySelf:l.justifySelf},__unstableUnitoneSupports:{...n?.attributes?.__unstableUnitoneSupports,alignSelf:{responsive:!0,default:l.alignSelf},justifySelf:{responsive:!0,default:l.justifySelf}}}};return(0,u.jsx)(e,{...s})}),"withChildBlockAttributes");(0,s.addFilter)("editor.BlockListBlock","unitone/grid/with-child-block-attributes",M,11)}},t={};function o(e){var i=t[e];if(void 0!==i)return i.exports;var l=t[e]={exports:{}};return n[e](l,l.exports,o),l.exports}o.m=n,e=[],o.O=(n,t,i,l)=>{if(!t){var r=1/0;for(d=0;d<e.length;d++){t=e[d][0],i=e[d][1],l=e[d][2];for(var s=!0,u=0;u<t.length;u++)(!1&l||r>=l)&&Object.keys(o.O).every((e=>o.O[e](t[u])))?t.splice(u--,1):(s=!1,l<r&&(r=l));if(s){e.splice(d--,1);var a=i();void 0!==a&&(n=a)}}return n}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[t,i,l]},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={4951:0,4751:0};o.O.j=n=>0===e[n];var n=(n,t)=>{var i,l,r=t[0],s=t[1],u=t[2],a=0;if(r.some((n=>0!==e[n]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(u)var d=u(o)}for(n&&n(t);a<r.length;a++)l=r[a],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var i=o.O(void 0,[4751],(()=>o(550)));i=o.O(i)})();