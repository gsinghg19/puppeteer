(window.webpackJsonp=window.webpackJsonp||[]).push([[1205],{1276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),i=(n(0),n(2836)),p=["components"],a={},c={unversionedId:"puppeteer.framewaitforfunctionoptions.polling",id:"version-5.4.0/puppeteer.framewaitforfunctionoptions.polling",isDocsHomePage:!1,title:"puppeteer.framewaitforfunctionoptions.polling",description:"Home &gt; puppeteer &gt; FrameWaitForFunctionOptions &gt; polling",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.framewaitforfunctionoptions.polling.md",slug:"/puppeteer.framewaitforfunctionoptions.polling",permalink:"/puppeteer/docs/puppeteer.framewaitforfunctionoptions.polling",version:"5.4.0"},l=[{value:"FrameWaitForFunctionOptions.polling property",id:"framewaitforfunctionoptionspolling-property",children:[]}],u={toc:l};function f(e){var t=e.components,n=Object(o.a)(e,p);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.framewaitforfunctionoptions"},"FrameWaitForFunctionOptions")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.framewaitforfunctionoptions.polling"},"polling")),Object(i.b)("h2",{id:"framewaitforfunctionoptionspolling-property"},"FrameWaitForFunctionOptions.polling property"),Object(i.b)("p",null,"An interval at which the ",Object(i.b)("inlineCode",{parentName:"p"},"pageFunction")," is executed, defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"raf"),". If ",Object(i.b)("inlineCode",{parentName:"p"},"polling")," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If ",Object(i.b)("inlineCode",{parentName:"p"},"polling")," is a string, then it can be one of the following values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"raf")," - to constantly execute ",Object(i.b)("inlineCode",{parentName:"p"},"pageFunction")," in ",Object(i.b)("inlineCode",{parentName:"p"},"requestAnimationFrame")," callback. This is the tightest polling mode which is suitable to observe styling changes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"mutation")," - to execute ",Object(i.b)("inlineCode",{parentName:"p"},"pageFunction")," on every DOM mutation."))),Object(i.b)("b",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"polling?: string | number;\n")))}f.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),b=r,m=f["".concat(p,".").concat(b)]||f[b]||s[b]||i;return n?o.a.createElement(m,a(a({ref:t},l),{},{components:n})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var l=2;l<i;l++)p[l]=n[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);