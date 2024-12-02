(()=>{"use strict";const t=window.wp.blocks,e=window.ReactJSXRuntime,o=(0,e.jsx)("svg",{width:"24",height:"24",viewBox:"-14 -14 44 44","aria-hidden":"true",focusable:"false",children:(0,e.jsx)("path",{d:"M18.01,.52c-.35-.35-.79-.52-1.32-.52s-.97,.18-1.32,.52c-.35,.35-.52,.79-.52,1.32V10.74c0,1.35-.25,2.47-.76,3.35-.51,.88-1.19,1.53-2.06,1.95-.61,.3-1.28,.48-2,.57-.09,0-.18,.02-.28,.03-.16,.01-.32,.02-.49,.02-.16,0-.33-.01-.49-.02-.1,0-.18-.02-.28-.03-.72-.09-1.39-.27-2-.57-.87-.42-1.55-1.07-2.06-1.95-.51-.88-.76-1.99-.76-3.35V1.84c0-.53-.18-.97-.52-1.32-.35-.35-.79-.52-1.32-.52S.87,.18,.52,.52s-.52,.79-.52,1.32V10.74c0,2,.38,3.69,1.14,5.06,.76,1.37,1.8,2.42,3.11,3.13,1.31,.71,2.8,1.07,4.47,1.07,.19,0,.37-.02,.55-.03,.18,0,.36,.03,.55,.03,1.66,0,3.15-.36,4.47-1.07,1.31-.71,2.35-1.75,3.11-3.13,.76-1.37,1.14-3.06,1.14-5.06V1.84c0-.53-.17-.97-.52-1.32Z"})});function n(t){var e,o,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(o=n(t[e]))&&(i&&(i+=" "),i+=o)}else for(o in t)t[o]&&(i&&(i+=" "),i+=o);return i}const i=function(){for(var t,e,o=0,i="",s=arguments.length;o<s;o++)(t=arguments[o])&&(e=n(t))&&(i&&(i+=" "),i+=e);return i},s=window.wp.blockEditor,l=window.wp.components,r=window.wp.data,a=window.wp.i18n,u=JSON.parse('{"uK":{"fill":{"type":"boolean","default":false},"position":{"type":"string"},"unitone":{"type":"object","default":{"position":{"position":"relative"}}},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"className":false,"anchor":true,"color":{"background":false,"link":true,"text":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalTextDecoration":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"unitone":{"position":true,"fluidTypography":true,"lineHeight":true}}}'),c=[{attributes:{...u.uK},supports:{...u.xY},save({attributes:t}){const{fill:o,position:n}=t;return(0,e.jsx)("div",{...s.useInnerBlocksProps.save(s.useBlockProps.save({"data-unitone-layout":i("cover__content",{"-fill":o,[`-valign:${n}`]:null!=n,[`-position:${t?.unitone?.position?.position}`]:null!=t?.unitone?.position?.position}),style:{"--unitone--top":t?.unitone?.position?.top,"--unitone--right":t?.unitone?.position?.right,"--unitone--bottom":t?.unitone?.position?.bottom,"--unitone--left":t?.unitone?.position?.left,"--unitone--z-index":t?.unitone?.position?.zIndex}}))})}},{attributes:{...u.uK},supports:{...u.xY},save({attributes:t}){const{position:o}=t;return(0,e.jsx)("div",{...s.useInnerBlocksProps.save(s.useBlockProps.save({"data-layout":i("cover__content",{[`-position:${o}`]:!!o})}))})}}],p=[{name:"cover-content-top",title:(0,a.__)("Cover content (Top)","unitone"),isDefault:!1,scope:["block"],attributes:{position:"top"},isActive:["position"]},{name:"cover-content-center",title:(0,a.__)("Cover content (Center)","unitone"),isDefault:!0,scope:["block"],attributes:{position:"center"},isActive:["position"]},{name:"cover-content-bottom",title:(0,a.__)("Cover content (Bottom)","unitone"),isDefault:!1,scope:["block"],attributes:{position:"bottom"},isActive:["position"]}];(0,t.registerBlockType)("unitone/cover-content",{icon:{src:o},edit:function({attributes:t,setAttributes:o,clientId:n}){const{fill:c,position:p,templateLock:f}=t,d=(0,r.useSelect)((t=>!!t(s.store).getBlock(n)?.innerBlocks?.length),[n]),_=(0,s.useBlockProps)();_["data-unitone-layout"]=i("cover__content",_["data-unitone-layout"],{"-fill":c,[`-valign:${p}`]:!!p});const v=(0,s.useInnerBlocksProps)(_,{templateLock:f,renderAppender:d?void 0:s.InnerBlocks.ButtonBlockAppender});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.InspectorControls,{children:(0,e.jsx)(l.__experimentalToolsPanel,{label:(0,a.__)("Settings","unitone"),children:(0,e.jsx)(l.__experimentalToolsPanelItem,{hasValue:()=>c!==u.uK.fill.default,isShownByDefault:!0,label:(0,a.__)("Fill a space","unitone"),onDeselect:()=>o({fill:u.uK.fill.default}),children:(0,e.jsx)(l.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Fill a space","unitone"),checked:c,onChange:t=>{o({fill:t})}})})})}),(0,e.jsx)("div",{...v})]})},save:function({attributes:t}){const{fill:o,position:n}=t;return(0,e.jsx)("div",{...s.useInnerBlocksProps.save(s.useBlockProps.save({"data-unitone-layout":i("cover__content",{"-fill":o,[`-valign:${n}`]:!!n})}))})},deprecated:c,variations:p})})();