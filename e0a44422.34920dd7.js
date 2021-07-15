(window.webpackJsonp=window.webpackJsonp||[]).push([[2440],{2511:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(3),p=n(7),a=(n(0),n(2836)),c=["components"],l={},o={unversionedId:"puppeteer.elementhandle.click",id:"version-10.0.0/puppeteer.elementhandle.click",isDocsHomePage:!1,title:"puppeteer.elementhandle.click",description:"Home &gt; puppeteer &gt; ElementHandle &gt; click",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.elementhandle.click.md",slug:"/puppeteer.elementhandle.click",permalink:"/puppeteer/docs/10.0.0/puppeteer.elementhandle.click",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.elementhandle.boxmodel",permalink:"/puppeteer/docs/10.0.0/puppeteer.elementhandle.boxmodel"},next:{title:"puppeteer.elementhandle.contentframe",permalink:"/puppeteer/docs/10.0.0/puppeteer.elementhandle.contentframe"}},i=[{value:"ElementHandle.click() method",id:"elementhandleclick-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:i};function m(e){var t=e.components,n=Object(p.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.elementhandle.click"},"click")),Object(a.b)("h2",{id:"elementhandleclick-method"},"ElementHandle.click() method"),Object(a.b)("p",null,"This method scrolls element into view if needed, and then uses ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If the element is detached from DOM, the method throws an error."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"click(options?: ClickOptions): Promise<void>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"options"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.clickoptions"},"ClickOptions")),Object(a.b)("td",{parentName:"tr",align:null})))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"))}m.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),p=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=p.a.createContext({}),u=function(e){var t=p.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return p.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,s=m["".concat(c,".").concat(d)]||m[d]||b[d]||a;return n?p.a.createElement(s,l(l({ref:t},i),{},{components:n})):p.a.createElement(s,l({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return p.a.createElement.apply(null,c)}return p.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);