(window.webpackJsonp=window.webpackJsonp||[]).push([[1007],{1078:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return b}));var n=t(3),p=t(7),a=(t(0),t(2836)),o=["components"],c={},s={unversionedId:"puppeteer.browser.pages",id:"version-6.0.0/puppeteer.browser.pages",isDocsHomePage:!1,title:"puppeteer.browser.pages",description:"Home &gt; puppeteer &gt; Browser &gt; pages",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.browser.pages.md",slug:"/puppeteer.browser.pages",permalink:"/puppeteer/docs/6.0.0/puppeteer.browser.pages",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.browser.newpage",permalink:"/puppeteer/docs/6.0.0/puppeteer.browser.newpage"},next:{title:"puppeteer.browser.process",permalink:"/puppeteer/docs/6.0.0/puppeteer.browser.process"}},u=[{value:"Browser.pages() method",id:"browserpages-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],i={toc:u};function b(e){var r=e.components,t=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browser"},"Browser")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browser.pages"},"pages")),Object(a.b)("h2",{id:"browserpages-method"},"Browser.pages() method"),Object(a.b)("p",null,"An array of all open pages inside the Browser."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"pages(): Promise<Page[]>;\n")),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.page"},"Page"),"[","]",">"),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"In case of multiple browser contexts, returns an array with all the pages in all browser contexts. Non-visible pages, such as ",Object(a.b)("inlineCode",{parentName:"p"},'"background_page"'),", will not be listed here. You can find them using ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.target.page"},"Target.page()"),"."))}b.isMDXComponent=!0},2836:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),p=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var u=p.a.createContext({}),i=function(e){var r=p.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},b=function(e){var r=i(e.components);return p.a.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return p.a.createElement(p.a.Fragment,{},r)}},d=p.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=i(t),d=n,f=b["".concat(o,".").concat(d)]||b[d]||l[d]||a;return t?p.a.createElement(f,c(c({ref:r},u),{},{components:t})):p.a.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);