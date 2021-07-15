(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{2836:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},b=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},l=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(t),l=n,f=b["".concat(c,".").concat(l)]||b[l]||d[l]||p;return t?o.a.createElement(f,a(a({ref:r},s),{},{components:t})):o.a.createElement(f,a({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,c=new Array(p);c[0]=l;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var s=2;s<p;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},92:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(7),p=(t(0),t(2836)),c=["components"],a={},i={unversionedId:"puppeteer.browser.disconnect",id:"puppeteer.browser.disconnect",isDocsHomePage:!1,title:"puppeteer.browser.disconnect",description:"Home &gt; puppeteer &gt; Browser &gt; disconnect",source:"@site/docs\\puppeteer.browser.disconnect.md",slug:"/puppeteer.browser.disconnect",permalink:"/puppeteer/docs/next/puppeteer.browser.disconnect",version:"current",sidebar:"docs",previous:{title:"puppeteer.browser.defaultbrowsercontext",permalink:"/puppeteer/docs/next/puppeteer.browser.defaultbrowsercontext"},next:{title:"puppeteer.browser.isconnected",permalink:"/puppeteer/docs/next/puppeteer.browser.isconnected"}},s=[{value:"Browser.disconnect() method",id:"browserdisconnect-method",children:[]}],u={toc:s};function b(e){var r=e.components,t=Object(o.a)(e,c);return Object(p.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser"},"Browser")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser.disconnect"},"disconnect")),Object(p.b)("h2",{id:"browserdisconnect-method"},"Browser.disconnect() method"),Object(p.b)("p",null,"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling ",Object(p.b)("inlineCode",{parentName:"p"},"disconnect"),", the ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser"},"Browser")," object is considered disposed and cannot be used anymore."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"disconnect(): void;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"void"))}b.isMDXComponent=!0}}]);