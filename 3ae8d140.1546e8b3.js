(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var p=r(0),n=r.n(p);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},o=Object.keys(e);for(p=0;p<o.length;p++)r=o[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)r=o[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=s(r),b=p,m=l["".concat(a,".").concat(b)]||l[b]||d[b]||o;return r?n.a.createElement(m,c(c({ref:t},i),{},{components:r})):n.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:p,a[1]=c;for(var i=2;i<o;i++)a[i]=r[i];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},706:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var p=r(3),n=r(7),o=(r(0),r(2836)),a=["components"],c={},u={unversionedId:"puppeteer.puppeteer.devices",id:"version-5.4.0/puppeteer.puppeteer.devices",isDocsHomePage:!1,title:"puppeteer.puppeteer.devices",description:"Home &gt; puppeteer &gt; Puppeteer &gt; devices",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.puppeteer.devices.md",slug:"/puppeteer.puppeteer.devices",permalink:"/puppeteer/docs/puppeteer.puppeteer.devices",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.puppeteer.customqueryhandlernames",permalink:"/puppeteer/docs/puppeteer.puppeteer.customqueryhandlernames"},next:{title:"puppeteer.puppeteer.errors",permalink:"/puppeteer/docs/puppeteer.puppeteer.errors"}},i=[{value:"Puppeteer.devices property",id:"puppeteerdevices-property",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:i};function l(e){var t=e.components,r=Object(n.a)(e,a);return Object(o.b)("wrapper",Object(p.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteer"},"Puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteer.devices"},"devices")),Object(o.b)("h2",{id:"puppeteerdevices-property"},"Puppeteer.devices property"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"get devices(): DevicesMap;\n")),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"A list of devices to be used with ",Object(o.b)("inlineCode",{parentName:"p"},"page.emulate(options)"),". Actual list of devices can be found in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts"},"src/common/DeviceDescriptors.ts"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\nconst iPhone = puppeteer.devices['iPhone 6'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulate(iPhone);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n\n")))}l.isMDXComponent=!0}}]);