(window.webpackJsonp=window.webpackJsonp||[]).push([[873],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=p.a.createContext({}),s=function(e){var t=p.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return p.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},b=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return r?p.a.createElement(m,c(c({ref:t},i),{},{components:r})):p.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<a;i++)o[i]=r[i];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},944:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),p=r(7),a=(r(0),r(2836)),o=["components"],c={},l={unversionedId:"puppeteer.jshandle.getproperties",id:"puppeteer.jshandle.getproperties",isDocsHomePage:!1,title:"puppeteer.jshandle.getproperties",description:"Home &gt; puppeteer &gt; JSHandle &gt; getProperties",source:"@site/docs\\puppeteer.jshandle.getproperties.md",slug:"/puppeteer.jshandle.getproperties",permalink:"/puppeteer/docs/next/puppeteer.jshandle.getproperties",version:"current",sidebar:"docs",previous:{title:"puppeteer.jshandle.executioncontext",permalink:"/puppeteer/docs/next/puppeteer.jshandle.executioncontext"},next:{title:"puppeteer.jshandle.getproperty",permalink:"/puppeteer/docs/next/puppeteer.jshandle.getproperty"}},i=[{value:"JSHandle.getProperties() method",id:"jshandlegetproperties-method",children:[]},{value:"Example",id:"example",children:[]}],s={toc:i};function u(e){var t=e.components,r=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.jshandle"},"JSHandle")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.jshandle.getproperties"},"getProperties")),Object(a.b)("h2",{id:"jshandlegetproperties-method"},"JSHandle.getProperties() method"),Object(a.b)("p",null,"The method returns a map with property names as keys and JSHandle instances for the property values."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"getProperties(): Promise<Map<string, JSHandle>>;\n")),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","Map","<","string, ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.jshandle"},"JSHandle"),">",">"),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const listHandle = await page.evaluateHandle(() => document.body.children);\nconst properties = await listHandle.getProperties();\nconst children = [];\nfor (const property of properties.values()) {\n  const element = property.asElement();\n  if (element)\n    children.push(element);\n}\nchildren; // holds elementHandles to all children of document.body\n\n")))}u.isMDXComponent=!0}}]);