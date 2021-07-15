(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),p=(n(0),n(2836)),l=["components"],o={},c={unversionedId:"puppeteer.elementhandle.__",id:"version-10.0.0/puppeteer.elementhandle.__",isDocsHomePage:!1,title:"puppeteer.elementhandle.__",description:"Home &gt; puppeteer &gt; ElementHandle &gt; $$",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.elementhandle.__.md",slug:"/puppeteer.elementhandle.__",permalink:"/puppeteer/docs/10.0.0/puppeteer.elementhandle.__",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.elementhandle._",permalink:"/puppeteer/docs/10.0.0/puppeteer.elementhandle._"},next:{title:"puppeteer.elementhandle.__eval",permalink:"/puppeteer/docs/10.0.0/puppeteer.elementhandle.__eval"}},u=[{value:"ElementHandle.$$() method",id:"elementhandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],i={toc:u};function m(e){var t=e.components,n=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.elementhandle.__"},"$$")),Object(p.b)("h2",{id:"elementhandle-method"},"ElementHandle.$$() method"),Object(p.b)("p",null,"Runs ",Object(p.b)("inlineCode",{parentName:"p"},"element.querySelectorAll")," within the page. If no elements match the selector, the return value resolves to ",Object(p.b)("inlineCode",{parentName:"p"},"[]"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"$$<T extends Element = Element>(selector: string): Promise<Array<ElementHandle<T>>>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"selector"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","Array","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle"),"<","T",">",">",">"))}m.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,s=m["".concat(l,".").concat(d)]||m[d]||b[d]||p;return n?a.a.createElement(s,o(o({ref:t},u),{},{components:n})):a.a.createElement(s,o({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<p;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);