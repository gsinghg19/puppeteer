(window.webpackJsonp=window.webpackJsonp||[]).push([[2012],{2084:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),p=r(7),a=(r(0),r(2836)),o=["components"],c={},l={unversionedId:"puppeteer.jshandle.getproperty",id:"version-5.4.0/puppeteer.jshandle.getproperty",isDocsHomePage:!1,title:"puppeteer.jshandle.getproperty",description:"Home &gt; puppeteer &gt; JSHandle &gt; getProperty",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.jshandle.getproperty.md",slug:"/puppeteer.jshandle.getproperty",permalink:"/puppeteer/docs/puppeteer.jshandle.getproperty",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.jshandle.getproperties",permalink:"/puppeteer/docs/puppeteer.jshandle.getproperties"},next:{title:"puppeteer.jshandle.jsonvalue",permalink:"/puppeteer/docs/puppeteer.jshandle.jsonvalue"}},u=[{value:"JSHandle.getProperty() method",id:"jshandlegetproperty-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],i={toc:u};function s(e){var t=e.components,r=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.jshandle"},"JSHandle")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.jshandle.getproperty"},"getProperty")),Object(a.b)("h2",{id:"jshandlegetproperty-method"},"JSHandle.getProperty() method"),Object(a.b)("p",null,"Fetches a single property from the referenced object."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"getProperty(propertyName: string): Promise<JSHandle | undefined>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"propertyName"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null})))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.jshandle"},"JSHandle")," ","|"," undefined",">"))}s.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=p.a.createContext({}),i=function(e){var t=p.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return p.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return r?p.a.createElement(m,c(c({ref:t},u),{},{components:r})):p.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);