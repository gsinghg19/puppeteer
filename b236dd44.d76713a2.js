(window.webpackJsonp=window.webpackJsonp||[]).push([[1940],{2012:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),p=(t(0),t(2836)),c=["components"],i={},a={unversionedId:"puppeteer.browsercontext.clearpermissionoverrides",id:"version-6.0.0/puppeteer.browsercontext.clearpermissionoverrides",isDocsHomePage:!1,title:"puppeteer.browsercontext.clearpermissionoverrides",description:"Home &gt; puppeteer &gt; BrowserContext &gt; clearPermissionOverrides",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.browsercontext.clearpermissionoverrides.md",slug:"/puppeteer.browsercontext.clearpermissionoverrides",permalink:"/puppeteer/docs/6.0.0/puppeteer.browsercontext.clearpermissionoverrides",version:"6.0.0"},s=[{value:"BrowserContext.clearPermissionOverrides() method",id:"browsercontextclearpermissionoverrides-method",children:[]},{value:"Example",id:"example",children:[]}],l={toc:s};function u(e){var r=e.components,t=Object(o.a)(e,c);return Object(p.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browsercontext.clearpermissionoverrides"},"clearPermissionOverrides")),Object(p.b)("h2",{id:"browsercontextclearpermissionoverrides-method"},"BrowserContext.clearPermissionOverrides() method"),Object(p.b)("p",null,"Clears all permission overrides for the browser context."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"clearPermissionOverrides(): Promise<void>;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const context = browser.defaultBrowserContext();\ncontext.overridePermissions('https://example.com', ['clipboard-read']);\n// do stuff ..\ncontext.clearPermissionOverrides();\n\n")))}u.isMDXComponent=!0},2836:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||p;return t?o.a.createElement(m,i(i({ref:r},s),{},{components:t})):o.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,c=new Array(p);c[0]=d;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<p;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);