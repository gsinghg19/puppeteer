(window.webpackJsonp=window.webpackJsonp||[]).push([[2325],{2396:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(2836)),p=["components"],c={},b={unversionedId:"puppeteer.browsercontextemittedevents",id:"puppeteer.browsercontextemittedevents",isDocsHomePage:!1,title:"puppeteer.browsercontextemittedevents",description:"Home &gt; puppeteer &gt; BrowserContextEmittedEvents",source:"@site/docs\\puppeteer.browsercontextemittedevents.md",slug:"/puppeteer.browsercontextemittedevents",permalink:"/puppeteer/docs/next/puppeteer.browsercontextemittedevents",version:"current"},i=[{value:"BrowserContextEmittedEvents enum",id:"browsercontextemittedevents-enum",children:[]},{value:"Enumeration Members",id:"enumeration-members",children:[]}],u={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browsercontextemittedevents"},"BrowserContextEmittedEvents")),Object(o.b)("h2",{id:"browsercontextemittedevents-enum"},"BrowserContextEmittedEvents enum"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum BrowserContextEmittedEvents \n")),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration Members"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Member"),Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"TargetChanged"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("code",null,'"',"targetchanged",'"')),Object(o.b)("td",{parentName:"tr",align:null},"Emitted when the url of a target inside the browser context changes. Contains a ",Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.target"},"Target")," instance.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"TargetCreated"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("code",null,'"',"targetcreated",'"')),Object(o.b)("td",{parentName:"tr",align:null},"Emitted when a target is created within the browser context, for example when a new page is opened by ",Object(o.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open"},"window.open")," or by ",Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.newpage"},"browserContext.newPage"),"Contains a ",Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.target"},"Target")," instance.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"TargetDestroyed"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("code",null,'"',"targetdestroyed",'"')),Object(o.b)("td",{parentName:"tr",align:null},"Emitted when a target is destroyed within the browser context, for example when a page is closed. Contains a ",Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.target"},"Target")," instance.")))))}l.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(p,".").concat(d)]||l[d]||s[d]||o;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);