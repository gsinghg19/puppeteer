(window.webpackJsonp=window.webpackJsonp||[]).push([[908],{2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,s=m["".concat(l,".").concat(d)]||m[d]||b[d]||p;return n?a.a.createElement(s,c(c({ref:t},u),{},{components:n})):a.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<p;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},979:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),p=(n(0),n(2836)),l=["components"],c={},o={unversionedId:"puppeteer.elementhandle._",id:"puppeteer.elementhandle._",isDocsHomePage:!1,title:"puppeteer.elementhandle._",description:"Home &gt; puppeteer &gt; ElementHandle &gt; $",source:"@site/docs\\puppeteer.elementhandle._.md",slug:"/puppeteer.elementhandle._",permalink:"/puppeteer/docs/next/puppeteer.elementhandle._",version:"current",sidebar:"docs",previous:{title:"puppeteer.elementhandle",permalink:"/puppeteer/docs/next/puppeteer.elementhandle"},next:{title:"puppeteer.elementhandle.__",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.__"}},u=[{value:"ElementHandle.$() method",id:"elementhandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],i={toc:u};function m(e){var t=e.components,n=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle._"},"$")),Object(p.b)("h2",{id:"elementhandle-method"},"ElementHandle.$() method"),Object(p.b)("p",null,"Runs ",Object(p.b)("inlineCode",{parentName:"p"},"element.querySelector")," within the page. If no element matches the selector, the return value resolves to ",Object(p.b)("inlineCode",{parentName:"p"},"null"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"$<T extends Element = Element>(selector: string): Promise<ElementHandle<T> | null>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"selector"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle"},"ElementHandle"),"<","T",">"," ","|"," null",">"))}m.isMDXComponent=!0}}]);