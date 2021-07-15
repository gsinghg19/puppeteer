(window.webpackJsonp=window.webpackJsonp||[]).push([[2340],{2411:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),p=(t(0),t(2836)),a=["components"],c={},i={unversionedId:"puppeteer.browserfetcher.remove",id:"puppeteer.browserfetcher.remove",isDocsHomePage:!1,title:"puppeteer.browserfetcher.remove",description:"Home &gt; puppeteer &gt; BrowserFetcher &gt; remove",source:"@site/docs\\puppeteer.browserfetcher.remove.md",slug:"/puppeteer.browserfetcher.remove",permalink:"/puppeteer/docs/next/puppeteer.browserfetcher.remove",version:"current",sidebar:"docs",previous:{title:"puppeteer.browserfetcher.product",permalink:"/puppeteer/docs/next/puppeteer.browserfetcher.product"},next:{title:"puppeteer.browserfetcher.revisioninfo",permalink:"/puppeteer/docs/next/puppeteer.browserfetcher.revisioninfo"}},u=[{value:"BrowserFetcher.remove() method",id:"browserfetcherremove-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:u};function l(e){var r=e.components,t=Object(o.a)(e,a);return Object(p.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browserfetcher"},"BrowserFetcher")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browserfetcher.remove"},"remove")),Object(p.b)("h2",{id:"browserfetcherremove-method"},"BrowserFetcher.remove() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"remove(revision: string): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"revision"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},"A revision to remove for the current ",Object(p.b)("code",null,"product"),".")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("p",null,"A promise that resolves when the revision has been removes or throws if the revision has not been downloaded."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"This method is affected by the current ",Object(p.b)("inlineCode",{parentName:"p"},"product"),"."))}l.isMDXComponent=!0},2836:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),b=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=b(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=b(t),m=n,d=l["".concat(a,".").concat(m)]||l[m]||s[m]||p;return t?o.a.createElement(d,c(c({ref:r},u),{},{components:t})):o.a.createElement(d,c({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<p;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);