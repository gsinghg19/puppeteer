(window.webpackJsonp=window.webpackJsonp||[]).push([[814],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),p=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=p.a.createContext({}),s=function(e){var t=p.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return p.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},f=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),f=n,d=l["".concat(a,".").concat(f)]||l[f]||b[f]||o;return r?p.a.createElement(d,c(c({ref:t},u),{},{components:r})):p.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return p.a.createElement.apply(null,a)}return p.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},885:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),p=r(7),o=(r(0),r(2836)),a=["components"],c={},i={unversionedId:"puppeteer.tracing.stop",id:"version-5.4.0/puppeteer.tracing.stop",isDocsHomePage:!1,title:"puppeteer.tracing.stop",description:"Home &gt; puppeteer &gt; Tracing &gt; stop",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.tracing.stop.md",slug:"/puppeteer.tracing.stop",permalink:"/puppeteer/docs/puppeteer.tracing.stop",version:"5.4.0"},u=[{value:"Tracing.stop() method",id:"tracingstop-method",children:[]}],s={toc:u};function l(e){var t=e.components,r=Object(p.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.tracing"},"Tracing")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.tracing.stop"},"stop")),Object(o.b)("h2",{id:"tracingstop-method"},"Tracing.stop() method"),Object(o.b)("p",null,"Stops a trace started with the ",Object(o.b)("inlineCode",{parentName:"p"},"start")," method."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"stop(): Promise<Buffer>;\n")),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","Buffer",">"),Object(o.b)("p",null,"Promise which resolves to buffer with trace data."))}l.isMDXComponent=!0}}]);