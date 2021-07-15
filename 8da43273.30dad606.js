(window.webpackJsonp=window.webpackJsonp||[]).push([[1551],{1622:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),p=(t(0),t(2836)),a=["components"],i={},s={unversionedId:"puppeteer.browser.version",id:"version-6.0.0/puppeteer.browser.version",isDocsHomePage:!1,title:"puppeteer.browser.version",description:"Home &gt; puppeteer &gt; Browser &gt; version",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.browser.version.md",slug:"/puppeteer.browser.version",permalink:"/puppeteer/docs/6.0.0/puppeteer.browser.version",version:"6.0.0"},c=[{value:"Browser.version() method",id:"browserversion-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:c};function l(e){var r=e.components,t=Object(o.a)(e,a);return Object(p.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browser"},"Browser")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browser.version"},"version")),Object(p.b)("h2",{id:"browserversion-method"},"Browser.version() method"),Object(p.b)("p",null,"A string representing the browser name and version."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"version(): Promise<string>;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","string",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"For headless Chromium, this is similar to ",Object(p.b)("inlineCode",{parentName:"p"},"HeadlessChrome/61.0.3153.0"),". For non-headless, this is similar to ",Object(p.b)("inlineCode",{parentName:"p"},"Chrome/61.0.3153.0"),"."),Object(p.b)("p",null,"The format of browser.version() might change with future releases of Chromium."))}l.isMDXComponent=!0},2836:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,f=l["".concat(a,".").concat(m)]||l[m]||b[m]||p;return t?o.a.createElement(f,i(i({ref:r},c),{},{components:t})):o.a.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);