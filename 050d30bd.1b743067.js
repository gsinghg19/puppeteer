(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),p=n(7),a=(n(0),n(2836)),o=["components"],c={},l={unversionedId:"puppeteer.wrapelementhandle",id:"version-6.0.0/puppeteer.wrapelementhandle",isDocsHomePage:!1,title:"puppeteer.wrapelementhandle",description:"Home &gt; puppeteer &gt; WrapElementHandle",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.wrapelementhandle.md",slug:"/puppeteer.wrapelementhandle",permalink:"/puppeteer/docs/6.0.0/puppeteer.wrapelementhandle",version:"6.0.0"},u=[{value:"WrapElementHandle type",id:"wrapelementhandle-type",children:[]}],i={toc:u};function d(e){var t=e.components,n=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.wrapelementhandle"},"WrapElementHandle")),Object(a.b)("h2",{id:"wrapelementhandle-type"},"WrapElementHandle type"),Object(a.b)("p",null,"Wraps a DOM element into an ElementHandle instance"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export declare type WrapElementHandle<X> = X extends Element ? ElementHandle<X> : X;\n")),Object(a.b)("b",null,"References:")," [ElementHandle](/puppeteer/docs/6.0.0/puppeteer.elementhandle)")}d.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),p=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var u=p.a.createContext({}),i=function(e){var t=p.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return p.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},s=p.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),s=r,f=d["".concat(o,".").concat(s)]||d[s]||m[s]||a;return n?p.a.createElement(f,c(c({ref:t},u),{},{components:n})):p.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);