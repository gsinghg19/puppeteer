(window.webpackJsonp=window.webpackJsonp||[]).push([[2765],{2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(y,l(l({ref:t},i),{},{components:n})):a.a.createElement(y,l({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2850:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),c};e.exports=r,e.exports.default=r},2851:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},2852:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a),c=n(2839),l=n(2838),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:s};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?p({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=p({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?p({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),u(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,l=[],s=[l];c>-1;){for(;(o=r[c]++)<a[c];){var i=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=y(u,p.type),p.alias&&(u=y(u,p.alias)),i=p.content),"string"==typeof i){var f=i.split(m),h=f.length;l.push({types:u,content:f[0]});for(var g=1;g<h;g++)d(l),s.push(l=[]),l.push({types:u,content:f[g]})}else c++,t.push(u),n.push(i),r.push(0),a.push(i.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return d(l),s}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),b=n(2850),v=n.n(b),k=n(2851),j=n.n(k),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(2848),N=n(2837);var x=()=>{const{prism:e}=Object(N.useThemeConfig)(),{isDarkTheme:t}=Object(E.a)(),n=e.theme||O,r=e.darkTheme||n;return t?r:n},w=n(57),C=n.n(w);const T=/{([\d,-]+)}/,P=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},S=/(?:title=")(.*)(?:")/;var L=({children:e,className:t,metastring:n})=>{const{prism:c}=Object(N.useThemeConfig)(),[s,u]=Object(a.useState)(!1),[p,m]=Object(a.useState)(!1);Object(a.useEffect)((()=>{m(!0)}),[]);const d=Object(a.useRef)(null);let y=[],f="";const h=x(),b=Array.isArray(e)?e.join(""):e;if(n&&T.test(n)){const e=n.match(T)[1];y=j()(e).filter((e=>e>0))}n&&S.test(n)&&(f=n.match(S)[1]);let k=t&&t.replace(/language-/,"");!k&&c.defaultLanguage&&(k=c.defaultLanguage);let O=b.replace(/\n$/,"");if(0===y.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}})(k),n=b.replace(/\n$/,"").split("\n");let r;for(let a=0;a<n.length;){const o=a+1,c=n[a].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${o},`;break;case"highlight-start":r=o;break;case"highlight-end":e+=`${r}-${o-1},`}n.splice(a,1)}else a+=1}y=j()(e),O=n.join("\n")}const E=()=>{v()(O),u(!0),setTimeout((()=>u(!1)),2e3)};return o.a.createElement(g,Object(r.a)({},i,{key:String(p),theme:h,code:O,language:k}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:c})=>o.a.createElement(o.a.Fragment,null,f&&o.a.createElement("div",{style:t,className:C.a.codeBlockTitle},f),o.a.createElement("div",{className:C.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,C.a.codeBlock,"thin-scrollbar",{[C.a.codeBlockWithTitle]:f})},o.a.createElement("div",{className:C.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return y.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>o.a.createElement("span",Object(r.a)({key:t},c({token:e,key:t}))))))})))),o.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(C.a.copyButton),onClick:E},s?"Copied":"Copy")))))},B=(n(58),n(59)),D=n.n(B);var $=e=>function({id:t,...n}){const{navbar:{hideOnScroll:r}}=Object(N.useThemeConfig)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",{[D.a.enhancedAnchor]:!r}),id:t}),n.children,o.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):o.a.createElement(e,n)},_=n(60),R=n.n(_);const z={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(L,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(c.a,e),pre:e=>o.a.createElement("div",Object(r.a)({className:R.a.mdxCodeBlock},e)),h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6")};t.a=z},2853:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2838);var c=function(e,t,n){const[a,o]=Object(r.useState)(void 0);Object(r.useEffect)((()=>{function r(){const r=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){const n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(r){let n=0,c=!1;const l=document.getElementsByClassName(e);for(;n<l.length&&!c;){const e=l[n],{href:s}=e,i=decodeURIComponent(s.substring(s.indexOf("#")+1));r.id===i&&(a&&a.classList.remove(t),e.classList.add(t),o(e),c=!0),n+=1}}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},l=n(56),s=n.n(l);const i="table-of-contents__link";function u({toc:e,isChild:t}){return e.length?a.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),a.a.createElement(u,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return c(i,"table-of-contents__link--active",100),a.a.createElement("div",{className:Object(o.a)(s.a.tableOfContents,"thin-scrollbar")},a.a.createElement(u,{toc:e}))}},415:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2844),c=n(2836),l=n(2852),s=n(2853);t.default=function(e){const{content:t}=e,{frontMatter:n,metadata:r}=t,{title:i,description:u,wrapperClassName:p,hide_table_of_contents:m}=n,{permalink:d}=r;return a.a.createElement(o.a,{title:i,description:u,permalink:d,wrapperClassName:p},a.a.createElement("main",null,a.a.createElement("div",{className:"container container--fluid"},a.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--8 col--offset-2"},a.a.createElement("div",{className:"container"},a.a.createElement(c.a,{components:l.a},a.a.createElement(t,null)))),!m&&t.toc&&a.a.createElement("div",{className:"col col--2"},a.a.createElement(s.a,{toc:t.toc})))))))}}}]);