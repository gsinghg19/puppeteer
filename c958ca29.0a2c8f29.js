(window.webpackJsonp=window.webpackJsonp||[]).push([[2198],{2270:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),p=(r(0),r(2836)),i=["components"],o={},c={unversionedId:"puppeteer.eventemitter.emit",id:"version-10.0.0/puppeteer.eventemitter.emit",isDocsHomePage:!1,title:"puppeteer.eventemitter.emit",description:"Home &gt; puppeteer &gt; EventEmitter &gt; emit",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.eventemitter.emit.md",slug:"/puppeteer.eventemitter.emit",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.emit",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.eventemitter.addlistener",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.addlistener"},next:{title:"puppeteer.eventemitter.addlistener",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.addlistener"}},l=[{value:"EventEmitter.emit() method",id:"eventemitteremit-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,i);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.emit"},"emit")),Object(p.b)("h2",{id:"eventemitteremit-method"},"EventEmitter.emit() method"),Object(p.b)("p",null,"Emit an event and call any associated listeners."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"emit(event: EventType, eventData?: unknown): boolean;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"event"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.eventtype"},"EventType")),Object(p.b)("td",{parentName:"tr",align:null},"the event you'd like to emit")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"eventData"),Object(p.b)("td",{parentName:"tr",align:null},"unknown"),Object(p.b)("td",{parentName:"tr",align:null},"any data you'd like to emit with the event")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"boolean"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"true")," if there are any listeners, ",Object(p.b)("inlineCode",{parentName:"p"},"false")," if there are not."))}b.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,s=b["".concat(i,".").concat(d)]||b[d]||m[d]||p;return r?a.a.createElement(s,o(o({ref:t},l),{},{components:r})):a.a.createElement(s,o({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);