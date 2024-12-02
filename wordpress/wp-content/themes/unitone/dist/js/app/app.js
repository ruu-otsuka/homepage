(()=>{"use strict";var t={144:(t,e)=>{function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,l=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw l}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var l=function(t){var e=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),n=parseFloat(window.getComputedStyle(t).getPropertyValue("font-size"));t.style.setProperty("--unitone--fluid-font-size-magnification",n/e)},a=function(t){var e,n,r,i=null===(e=[].slice.call(null!==(n=null==t?void 0:t.children)&&void 0!==n?n:[]))||void 0===e?void 0:e[0];i&&([].slice.call(t.children).forEach((function(t){var e=t.getAttribute("data-unitone-layout")||"",n=e.split(" ");t.classList.contains("unitone-empty")?t.remove():(n=o(n.filter((function(t){return!["-bol","-linewrap"," "].includes(t)}))).join(" ")||"")!==e&&t.setAttribute("data-unitone-layout",n)})),[].slice.call(t.children).forEach((function(t){var e,n=i.getBoundingClientRect(),l=null===(e=r)||void 0===e?void 0:e.getBoundingClientRect(),a=t.getAttribute("data-unitone-layout")||"",u=a.split(" ");if((i===t||(null==l?void 0:l.top)<t.getBoundingClientRect().top)&&(u.includes("-bol")||(u=[].concat(o(u),["-bol"]))),(null==l?void 0:l.top)<t.getBoundingClientRect().top){var c=document.createElement("div");c.classList.add("unitone-empty"),t.before(c),(null==l?void 0:l.top)<c.getBoundingClientRect().top&&c.remove()}n.top<t.getBoundingClientRect().top&&(u.includes("-linewrap")||(u=[].concat(o(u),["-linewrap"]))),(u=u.filter(Boolean).join(" ")||"")!==a&&t.setAttribute("data-unitone-layout",u),r=t})))},u=function(t){var e,n,o=null===(e=[].slice.call(null!==(n=null==t?void 0:t.children)&&void 0!==n?n:[]))||void 0===e?void 0:e[0];if(o){var r,i=0,l=i;[].slice.call(t.children).forEach((function(t){var e,n=window.getComputedStyle(t).getPropertyValue("position");if("absolute"!==n&&"fixed"!==n){t.style.setProperty("--unitone--stairs-step","");var a=null===(e=r)||void 0===e?void 0:e.getBoundingClientRect(),u=t.getBoundingClientRect();o===t||null!=a&&a.left&&a.left>=u.left?(i=0,t.style.setProperty("--unitone--stairs-step",i)):(i++,t.style.setProperty("--unitone--stairs-step",i)),r=t,i>l&&(l=i)}})),t.getAttribute("data-unitone-layout").match(/-stairs-up:right/)?t.style.setProperty("--unitone--stairs-step",l):t.style.setProperty("--unitone--stairs-step",i)}};e.R4=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=0,i=new ResizeObserver((function(t){var e,o=r(t);try{for(o.s();!(e=o.n()).done;){var i,l=e.value,u=null===(i=l.borderBoxSize)||void 0===i?void 0:i[0].inlineSize;u!==n&&(a(l.target),n=u)}}catch(t){o.e(t)}finally{o.f()}})),l={attributes:!0,attributeFilter:["style","data-unitone-layout","class"],attributeOldValue:!0,subtree:!0,characterData:!0},u=new MutationObserver((function(t){var n,i=r(t);try{var l=function(){var t=n.value;if("attributes"===t.type&&"data-unitone-layout"===t.attributeName){var r,i,l,u,c=[].concat(o(null!==(r=null==e||null===(i=e.ignore)||void 0===i?void 0:i.layout)&&void 0!==r?r:[]),["-bol","-linewrap"]);(null!==(l=t.target.getAttribute(t.attributeName))&&void 0!==l?l:"").split(" ").filter((function(t){return!c.includes(t)})).join(" ")!==(null!==(u=t.oldValue)&&void 0!==u?u:"").split(" ").filter((function(t){return!c.includes(t)})).join(" ")&&a(t.target)}else if("attributes"===t.type&&"class"===t.attributeName){var s,d,v,f,p=o(null!==(s=null==e||null===(d=e.ignore)||void 0===d?void 0:d.className)&&void 0!==s?s:[]);(null!==(v=t.target.getAttribute(t.attributeName))&&void 0!==v?v:"").split(" ").filter((function(t){return!p.includes(t)})).join(" ")!==(null!==(f=t.oldValue)&&void 0!==f?f:"").split(" ").filter((function(t){return!p.includes(t)})).join(" ")&&a(t.target)}else"attributes"===t.type&&"style"===t.attributeName&&a(t.target)};for(i.s();!(n=i.n()).done;)l()}catch(t){i.e(t)}finally{i.f()}})),c=new IntersectionObserver((function(t,e){t.forEach((function(t){var n=t.target;t.isIntersecting&&(e.unobserve(n),i.observe(n),u.observe(n,l))}))}),{rootMargin:"100px 0px"});c.observe(t)},e.hq=function(t){var e=0;new ResizeObserver((function(t){var n,o=r(t);try{for(o.s();!(n=o.n()).done;){var i,a=n.value,u=null===(i=a.borderBoxSize)||void 0===i?void 0:i[0].inlineSize;u!==e&&(l(a.target),e=u)}}catch(t){o.e(t)}finally{o.f()}})).observe(t)},e.F6=function(t){var e=0;new ResizeObserver((function(t){var n,o=r(t);try{for(o.s();!(n=o.n()).done;){var i,l=n.value,a=null===(i=l.borderBoxSize)||void 0===i?void 0:i[0].inlineSize;a!==e&&(u(l.target),e=a)}}catch(t){o.e(t)}finally{o.f()}})).observe(t)}}},e={},n=function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}(144);document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll('[data-unitone-layout~="-fluid-typography"]').forEach((t=>{(0,n.hq)(t)})),document.querySelectorAll('[data-unitone-layout*="-divider:"]').forEach((t=>{(0,n.R4)(t)})),document.querySelectorAll('[data-unitone-layout*="-stairs:"]').forEach((t=>{(0,n.F6)(t)}))})),document.addEventListener("DOMContentLoaded",(()=>{const t=t=>{[].slice.call(t).forEach((t=>{const e=t.parentElement.getBoundingClientRect();t.style.setProperty("--unitone--top",`${e.y}px`),t.style.setProperty("--unitone--left",`${e.x+e.width}px`)}))},e=document.querySelectorAll(".wp-block-navigation:is(.is-style-unitone, .is-style-unitone-accordion).is-vertical");[].slice.call(e).forEach((e=>{const n=e.querySelectorAll([".wp-block-navigation__container > .wp-block-page-list > .wp-block-pages-list__item > .wp-block-navigation__submenu-container",".wp-block-navigation__container > .wp-block-navigation-item > .wp-block-navigation__submenu-container"].join(","));e.addEventListener("wheel",(()=>{t(n)})),new window.ResizeObserver((()=>{t(n)})).observe(document.body)}))})),document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll("[data-unitone-parallax]"),e=t=>{const e=Math.max(document.documentElement.clientHeight,window.innerHeight||0),n=parseInt(t.getAttribute("data-unitone-parallax-speed")||0),o=t.getBoundingClientRect(),r=.5*n*.125,i=(o.top+o.height/2-e/2)*r,l=1===t.children.length&&(t=>"cover"===window.getComputedStyle(t).getPropertyValue("object-fit"))(t.children[0]);l?t.children[0].style.objectPosition=`50% calc(50% + ${i}px)`:t.style.transform=`translate3d(0, ${i}px, 0)`},n=t=>"enable"===t.getAttribute("data-unitone-parallax"),o=()=>{[].slice.call(t).forEach((t=>{n(t)&&e(t)}))};let r=0;const i=new IntersectionObserver((t=>{t.forEach((t=>{const e=t.target;t.isIntersecting?(r+=1,e.setAttribute("data-unitone-parallax","enable")):(n(e)&&(r-=1),e.setAttribute("data-unitone-parallax","disable"),e.style.transform="")})),0<r?(window.addEventListener("scroll",o),document.addEventListener("touchmove",o)):(window.removeEventListener("scroll",o),document.removeEventListener("touchmove",o))}),{rootMargin:"200px 0px"});[].slice.call(t).forEach((t=>{i.observe(t),e(t),e(t)}))})),document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll("[data-unitone-scroll-animation]"),e=new IntersectionObserver((t=>{t.forEach((t=>{if(!t.isIntersecting)return;const n=t.target,o=n.getAttribute("data-unitone-scroll-animation");n.setAttribute("data-unitone-scroll-animation",`${o} -fired`),e.unobserve(n)}))}),{rootMargin:"-25% 0px"});[].slice.call(t).forEach((t=>{e.observe(t)}))})),document.addEventListener("DOMContentLoaded",(()=>{[].slice.call(document.querySelectorAll(".wp-block-navigation-submenu__toggle + span.wp-block-navigation__submenu-icon")).forEach((t=>{t.addEventListener("click",(()=>{t.previousElementSibling.click()}))}))}))})();