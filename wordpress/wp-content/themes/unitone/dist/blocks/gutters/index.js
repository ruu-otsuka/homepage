(()=>{"use strict";var e,t={248:()=>{const e=window.wp.blocks,t=window.wp.compose,n=window.wp.hooks,r=window.wp.i18n,o=window.ReactJSXRuntime,s=(0,o.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.2 5.5H4.8C4.73895 5.5 4.64503 5.5279 4.54319 5.65723C4.43901 5.78951 4.35 6.00722 4.35 6.28571V17.7143C4.35 17.9928 4.43901 18.2105 4.54319 18.3428C4.64503 18.4721 4.73895 18.5 4.8 18.5H19.2C19.2611 18.5 19.355 18.4721 19.4568 18.3428C19.561 18.2105 19.65 17.9928 19.65 17.7143V6.28571C19.65 6.00722 19.561 5.78951 19.4568 5.65723C19.355 5.5279 19.2611 5.5 19.2 5.5ZM4.8 4C3.80589 4 3 5.02335 3 6.28571V17.7143C3 18.9767 3.80589 20 4.8 20H19.2C20.1941 20 21 18.9767 21 17.7143V6.28571C21 5.02335 20.1941 4 19.2 4H4.8Z"}),(0,o.jsx)("rect",{x:"4",y:"8.5",width:"16",height:"7"})]});function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const a=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r},u=window.wp.blockEditor,l=window.wp.data,p={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(t){const n=t.map((t=>(0,e.createBlock)(t.name,t.attributes,t.innerBlocks)));return(0,e.createBlock)("unitone/gutters",{},n)}}],ungroup:(e,t)=>t.flatMap((e=>e))},c=JSON.parse('{"uK":{"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"className":false,"anchor":true,"color":{"background":false,"link":true,"text":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalTextDecoration":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"unitone":{"padding":true,"fluidTypography":true,"lineHeight":true}}}'),d=[{attributes:{...c.uK},supports:{...c.xY},save:({attributes:e})=>(0,o.jsx)("div",{...u.useInnerBlocksProps.save(u.useBlockProps.save({"data-unitone-layout":a("gutters",{[`-padding:${e?.unitone?.padding}`]:null!=e?.unitone?.padding})}))})},{attributes:{...c.uK},supports:{...c.xY},save:()=>(0,o.jsx)("div",{...u.useInnerBlocksProps.save(u.useBlockProps.save({"data-layout":"gutters"}))})}];(0,e.registerBlockType)("unitone/gutters",{icon:{src:s},edit:function({attributes:e,clientId:t}){const{templateLock:n}=e,r=(0,l.useSelect)((e=>!!e(u.store).getBlock(t)?.innerBlocks?.length),[t]),s=(0,u.useBlockProps)();s["data-unitone-layout"]=a("gutters",s["data-unitone-layout"]);const i=(0,u.useInnerBlocksProps)(s,{templateLock:n,renderAppender:r?void 0:u.InnerBlocks.ButtonBlockAppender});return(0,o.jsx)("div",{...i})},save:function(){return(0,o.jsx)("div",{...u.useInnerBlocksProps.save(u.useBlockProps.save({"data-unitone-layout":"gutters"}))})},transforms:p,deprecated:d});const f=(0,t.createHigherOrderComponent)((e=>t=>{if(!t.isSelected||"unitone/gutters"!==t.name)return(0,o.jsx)(e,{...t});const n={...t,attributes:{...t?.attributes,__unstableUnitoneSupports:{...t?.attributes?.__unstableUnitoneSupports,padding:{label:(0,r.__)("Top and bottom padding","unitone"),code:(0,o.jsx)("code",{children:"padding-top/bottom"})}}}};return(0,o.jsx)(e,{...n})}),"changeUnitoneSupportsLabels");(0,n.addFilter)("editor.BlockListBlock","unitone/gutters/change-unitone-supports-labels",f,11)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,n,o,s)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){n=e[p][0],o=e[p][1],s=e[p][2];for(var a=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(a=!1,s<i&&(i=s));if(a){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[n,o,s]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={8337:0,2453:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,s,i=n[0],a=n[1],u=n[2],l=0;if(i.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var p=u(r)}for(t&&t(n);l<i.length;l++)s=i[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(p)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[2453],(()=>r(248)));o=r.O(o)})();