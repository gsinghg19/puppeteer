(window.webpackJsonp=window.webpackJsonp||[]).push([[2207],{2279:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),p=(r(0),r(2836)),a=["components"],c={},i={unversionedId:"puppeteer.browser.wsendpoint",id:"puppeteer.browser.wsendpoint",isDocsHomePage:!1,title:"puppeteer.browser.wsendpoint",description:"Home &gt; puppeteer &gt; Browser &gt; wsEndpoint",source:"@site/docs\\puppeteer.browser.wsendpoint.md",slug:"/puppeteer.browser.wsendpoint",permalink:"/puppeteer/docs/next/puppeteer.browser.wsendpoint",version:"current",sidebar:"docs",previous:{title:"puppeteer.browser.waitfortarget",permalink:"/puppeteer/docs/next/puppeteer.browser.waitfortarget"},next:{title:"puppeteer.browsercontext",permalink:"/puppeteer/docs/next/puppeteer.browsercontext"}},s=[{value:"Browser.wsEndpoint() method",id:"browserwsendpoint-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:s};function b(e){var t=e.components,r=Object(o.a)(e,a);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser"},"Browser")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser.wsendpoint"},"wsEndpoint")),Object(p.b)("h2",{id:"browserwsendpoint-method"},"Browser.wsEndpoint() method"),Object(p.b)("p",null,"The browser websocket endpoint which can be used as an argument to ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"wsEndpoint(): string;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"string"),Object(p.b)("p",null,"The Browser websocket url."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"The format is ",Object(p.b)("inlineCode",{parentName:"p"},"ws://${host}:${port}/devtools/browser/<id>"),"."),Object(p.b)("p",null,"You can find the ",Object(p.b)("inlineCode",{parentName:"p"},"webSocketDebuggerUrl")," from ",Object(p.b)("inlineCode",{parentName:"p"},"http://${host}:${port}/json/version"),". Learn more about the ",Object(p.b)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol"},"devtools protocol")," and the ",Object(p.b)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target"},"browser endpoint"),"."))}b.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(a,".").concat(d)]||b[d]||l[d]||p;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<p;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);