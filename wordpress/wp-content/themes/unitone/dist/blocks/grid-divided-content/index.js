(()=>{"use strict";var t={144:(t,e)=>{function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.EU=function(t){var e,n,i,r=null===(e=[].slice.call(null!==(n=null==t?void 0:t.children)&&void 0!==n?n:[]))||void 0===e?void 0:e[0];r&&([].slice.call(t.children).forEach((function(t){var e=t.getAttribute("data-unitone-layout")||"",n=e.split(" ");t.classList.contains("unitone-empty")?t.remove():(n=o(n.filter((function(t){return!["-bol","-linewrap"," "].includes(t)}))).join(" ")||"")!==e&&t.setAttribute("data-unitone-layout",n)})),[].slice.call(t.children).forEach((function(t){var e,n=r.getBoundingClientRect(),c=null===(e=i)||void 0===e?void 0:e.getBoundingClientRect(),l=t.getAttribute("data-unitone-layout")||"",a=l.split(" ");if((r===t||(null==c?void 0:c.top)<t.getBoundingClientRect().top)&&(a.includes("-bol")||(a=[].concat(o(a),["-bol"]))),(null==c?void 0:c.top)<t.getBoundingClientRect().top){var u=document.createElement("div");u.classList.add("unitone-empty"),t.before(u),(null==c?void 0:c.top)<u.getBoundingClientRect().top&&u.remove()}n.top<t.getBoundingClientRect().top&&(a.includes("-linewrap")||(a=[].concat(o(a),["-linewrap"]))),(a=a.filter(Boolean).join(" ")||"")!==l&&t.setAttribute("data-unitone-layout",a),i=t})))}}},e={};const n=window.wp.blocks,o=window.ReactJSXRuntime,i=(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"-14 -14 44 44","aria-hidden":"true",focusable:"false",children:(0,o.jsx)("path",{d:"M18.01,.52c-.35-.35-.79-.52-1.32-.52s-.97,.18-1.32,.52c-.35,.35-.52,.79-.52,1.32V10.74c0,1.35-.25,2.47-.76,3.35-.51,.88-1.19,1.53-2.06,1.95-.61,.3-1.28,.48-2,.57-.09,0-.18,.02-.28,.03-.16,.01-.32,.02-.49,.02-.16,0-.33-.01-.49-.02-.1,0-.18-.02-.28-.03-.72-.09-1.39-.27-2-.57-.87-.42-1.55-1.07-2.06-1.95-.51-.88-.76-1.99-.76-3.35V1.84c0-.53-.18-.97-.52-1.32-.35-.35-.79-.52-1.32-.52S.87,.18,.52,.52s-.52,.79-.52,1.32V10.74c0,2,.38,3.69,1.14,5.06,.76,1.37,1.8,2.42,3.11,3.13,1.31,.71,2.8,1.07,4.47,1.07,.19,0,.37-.02,.55-.03,.18,0,.36,.03,.55,.03,1.66,0,3.15-.36,4.47-1.07,1.31-.71,2.35-1.75,3.11-3.13,.76-1.37,1.14-3.06,1.14-5.06V1.84c0-.53-.17-.97-.52-1.32Z"})}),r=window.wp.blockEditor,c=window.wp.data,l=window.wp.element;var a=function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}(144);(0,n.registerBlockType)("unitone/grid-divided-content",{icon:{src:i},edit:function({attributes:t,setAttributes:e,clientId:n,context:i}){const{tagName:u,templateLock:s}=t,d=(0,l.useRef)();(0,l.useEffect)((()=>{e({tagName:["ul","ol"].includes(i["unitone/grid-divided/tagName"])?"li":"div"})}),[i]),(0,l.useLayoutEffect)((()=>{const t=d?.current?.parentElement;t&&(0,a.EU)(t)}),[JSON.stringify(t?.unitone)]);const p=(0,c.useSelect)((t=>!!t(r.store).getBlock(n)?.innerBlocks?.length),[n]),f=(0,r.useBlockProps)({ref:d,className:"unitone-grid__content"}),v=(0,r.useInnerBlocksProps)({className:"unitone-grid__content__content"},{templateLock:s,renderAppender:p?void 0:r.InnerBlocks.ButtonBlockAppender}),g=u;return(0,o.jsx)(g,{...f,children:(0,o.jsx)("div",{...v})})},save:function({attributes:t}){const{tagName:e}=t,n=e;return(0,o.jsx)(n,{...r.useBlockProps.save({className:"unitone-grid__content"}),children:(0,o.jsx)("div",{...r.useInnerBlocksProps.save({className:"unitone-grid__content__content"})})})}})})();