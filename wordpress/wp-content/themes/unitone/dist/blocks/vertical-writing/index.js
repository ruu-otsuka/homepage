(()=>{"use strict";var t,e={144:(t,e)=>{function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){u=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var r=function(t){t.style.columnCount="",t.setAttribute("data-unitone-layout",t.getAttribute("data-unitone-layout").replace(" -force-switch",""));var e,n=getComputedStyle(t);if(String(n.getPropertyValue("--unitone--threshold")).trim()){var i=document.createElement("div");i.setAttribute("data-unitone-layout","vertical-writing__thresholder"),t.appendChild(i);var r=i.offsetWidth>=t.offsetWidth;if(t.removeChild(i),r)return void t.setAttribute("data-unitone-layout","".concat(t.getAttribute("data-unitone-layout")," -force-switch"))}if([].slice.call(t.children).reverse().some((function(t){if(!["absolute","fixed"].includes(getComputedStyle(t).position))return e=t,!0})),e){var o=!1;t.getBoundingClientRect().left>e.getBoundingClientRect().left&&(t.style.columnCount=2,o=!0),setTimeout((function(){var n=t.getBoundingClientRect().top+t.getBoundingClientRect().height,i=e.getBoundingClientRect().top+e.getBoundingClientRect().height;n!==i&&(t.parentNode.style.height="".concat(Math.ceil(i-t.getBoundingClientRect().top),"px"))}),o?250:0)}};e.aL=function(t){var e=0;t.setAttribute("data-unitone-layout","".concat(t.getAttribute("data-unitone-layout")," -initialized"));var i=new ResizeObserver((function(o,a){var l,u=n(o);try{var s=function(){var n,o=l.value,u=null===(n=o.contentRect)||void 0===n?void 0:n.width;parseInt(u)!==parseInt(e)&&(e=u,i.unobserve(t),a.unobserve(o.target),o.target.parentNode.style.height="",r(o.target),setTimeout((function(){a.observe(o.target)}),500))};for(u.s();!(l=u.n()).done;)s()}catch(t){u.e(t)}finally{u.f()}}));i.observe(t);var o,a={attributes:!0,attributeFilter:["style"],childList:!0,subtree:!0};new MutationObserver((function(e,n){if(clearTimeout(o),0<e.length){var l,u,s=e[0],c=null===(l=s.addedNodes)||void 0===l?void 0:l[0],d=null===(u=s.removedNodes)||void 0===u?void 0:u[0];if((null==c?void 0:c.nodeType)===Node.ELEMENT_NODE&&"vertical-writing__thresholder"===c.getAttribute("data-unitone-layout")||(null==d?void 0:d.nodeType)===Node.ELEMENT_NODE&&"vertical-writing__thresholder"===d.getAttribute("data-unitone-layout"))return;n.disconnect(),i.unobserve(t),o=setTimeout((function(){r(t),setTimeout((function(){n.observe(t,a),i.observe(t)}),500)}),500)}})).observe(t,a)}},245:(t,e,n)=>{const i=window.wp.blocks,r=window.ReactJSXRuntime,o=(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 6V14H7.5V6H6ZM9.5 6V16H11V6H9.5ZM13 14V6H14.5V14H13ZM16.5 6V18H18V6H16.5Z"})});function a(t){var e,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=a(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}const l=function(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=a(t))&&(i&&(i+=" "),i+=e);return i},u=window.wp.blockEditor,s=window.wp.components,c=window.wp.compose,d=window.wp.data,h=window.wp.i18n,f=JSON.parse('{"uK":{"textOrientation":{"type":"string","default":"mixed"},"switchWritingMode":{"type":"boolean","default":false},"threshold":{"type":"string","default":""},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"className":false,"anchor":true,"color":{"background":false,"link":true,"text":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalTextDecoration":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"unitone":{"blockAlign":true,"gap":{"splitOnAxis":true,"vertical":true},"maxHeight":true,"maxWidth":true,"fluidTypography":true,"lineHeight":true}}}');var p=n(144);const v=[{attributes:{...f.uK,textOrientation:{type:"string",default:""}},supports:{...f.xY},save({attributes:t}){const{textOrientation:e,switchWritingMode:n}=t;return(0,r.jsx)("div",{...u.useBlockProps.save({"data-unitone-layout":"vertical-writing-wrapper"}),children:(0,r.jsx)("div",{...u.useInnerBlocksProps.save({"data-unitone-layout":l("vertical-writing",{[`-text-orientation:${e}`]:!!e,"-switch":n})})})})}}],g={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(t){const e=t.map((t=>(0,i.createBlock)(t.name,t.attributes,t.innerBlocks)));return(0,i.createBlock)("unitone/vertical-writing",{},e)}}],ungroup:(t,e)=>e.flatMap((t=>t))};(0,i.registerBlockType)("unitone/vertical-writing",{icon:{src:o},edit:function({attributes:t,setAttributes:e,clientId:n}){const{textOrientation:i,switchWritingMode:o,threshold:a,templateLock:v}=t,g=(0,d.useSelect)((t=>{const e=t(u.store).getBlock(n);return!!e?.innerBlocks?.length}),[n]),w=(0,c.useRefEffect)((t=>{(0,p.aL)(t)}),[]),y=(0,u.useBlockProps)();y["data-unitone-layout"]=l("vertical-writing-wrapper",y["data-unitone-layout"]);const m=(0,u.useInnerBlocksProps)({ref:w,"data-unitone-layout":l("vertical-writing","-initialized",{[`-text-orientation:${i}`]:!!i,"-switch":o}),style:{"--unitone--threshold":a||void 0}},{templateLock:v,allowedBlocks:["core/heading","core/paragraph","core/buttons","core/image","core/video","unitone/stack"],renderAppender:g?void 0:u.InnerBlocks.ButtonBlockAppender});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.InspectorControls,{children:(0,r.jsxs)(s.__experimentalToolsPanel,{label:(0,h.__)("Settings","unitone"),children:[(0,r.jsx)(s.__experimentalToolsPanelItem,{hasValue:()=>i!==f.uK.textOrientation.default,isShownByDefault:!0,label:(0,r.jsxs)(r.Fragment,{children:[(0,h.__)("Text orientation","unitone")," : ",(0,r.jsx)("code",{children:"text-orientation"})]}),onDeselect:()=>e({textOrientation:f.uK.textOrientation.default}),children:(0,r.jsx)(s.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,h.__)("Text orientation","unitone"),options:[{label:"",value:""},{label:"mixed",value:"mixed"},{label:"upright",value:"upright"},{label:"sideways",value:"sideways"}],value:i,onChange:t=>e({textOrientation:t})})}),(0,r.jsx)(s.__experimentalToolsPanelItem,{hasValue:()=>a!==f.uK.threshold.default,isShownByDefault:!0,label:(0,h.__)("Threshold","unitone"),onDeselect:()=>e({threshold:f.uK.threshold.default}),children:(0,r.jsx)(s.TextControl,{__nextHasNoMarginBottom:!0,label:(0,h.__)("Threshold","unitone"),help:(0,h.__)("When this block is smaller than this width, switch to writing horizontally.","unitone"),value:a,onChange:t=>{e({threshold:t})}})}),(0,r.jsx)(s.__experimentalToolsPanelItem,{hasValue:()=>o!==f.uK.switchWritingMode.default,isShownByDefault:!0,label:(0,h.__)("Switch writing mode when portrait","unitone"),onDeselect:()=>e({switchWritingMode:f.uK.switchWritingMode.default}),children:(0,r.jsx)(s.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,h.__)("Switch to writing horizontally when portrait","unitone"),checked:o,onChange:t=>e({switchWritingMode:t})})})]})}),(0,r.jsx)("div",{...y,children:(0,r.jsx)("div",{...m})})]})},save:function({attributes:t}){const{textOrientation:e,switchWritingMode:n,threshold:i}=t;return(0,r.jsx)("div",{...u.useBlockProps.save({"data-unitone-layout":"vertical-writing-wrapper"}),children:(0,r.jsx)("div",{...u.useInnerBlocksProps.save({"data-unitone-layout":l("vertical-writing",{[`-text-orientation:${e}`]:!!e,"-switch":n}),style:{"--unitone--threshold":i||void 0}})})})},deprecated:v,transforms:g})}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,i),o.exports}i.m=e,t=[],i.O=(e,n,r,o)=>{if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],o=t[c][2];for(var l=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(i.O).every((t=>i.O[t](n[u])))?n.splice(u--,1):(l=!1,o<a&&(a=o));if(l){t.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,r,o]},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={4664:0,2512:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,a=n[0],l=n[1],u=n[2],s=0;if(a.some((e=>0!==t[e]))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(u)var c=u(i)}for(e&&e(n);s<a.length;s++)o=a[s],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=i.O(void 0,[2512],(()=>i(245)));r=i.O(r)})();