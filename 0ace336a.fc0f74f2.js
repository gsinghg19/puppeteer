(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{194:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),p=(r(0),r(2836)),o=["components"],l={},u={unversionedId:"puppeteer.customqueryhandler",id:"version-5.4.0/puppeteer.customqueryhandler",isDocsHomePage:!1,title:"puppeteer.customqueryhandler",description:"Home &gt; puppeteer &gt; CustomQueryHandler",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.customqueryhandler.md",slug:"/puppeteer.customqueryhandler",permalink:"/puppeteer/docs/puppeteer.customqueryhandler",version:"5.4.0"},c=[{value:"CustomQueryHandler interface",id:"customqueryhandler-interface",children:[]},{value:"Properties",id:"properties",children:[]}],i={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.customqueryhandler"},"CustomQueryHandler")),Object(p.b)("h2",{id:"customqueryhandler-interface"},"CustomQueryHandler interface"),Object(p.b)("p",null,"Contains two functions ",Object(p.b)("inlineCode",{parentName:"p"},"queryOne")," and ",Object(p.b)("inlineCode",{parentName:"p"},"queryAll")," that can be ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteer.registercustomqueryhandler"},"registered")," as alternative querying strategies. The functions ",Object(p.b)("inlineCode",{parentName:"p"},"queryOne")," and ",Object(p.b)("inlineCode",{parentName:"p"},"queryAll")," are executed in the page context. ",Object(p.b)("inlineCode",{parentName:"p"},"queryOne")," should take an ",Object(p.b)("inlineCode",{parentName:"p"},"Element")," and a selector string as argument and return a single ",Object(p.b)("inlineCode",{parentName:"p"},"Element")," or ",Object(p.b)("inlineCode",{parentName:"p"},"null")," if no element is found. ",Object(p.b)("inlineCode",{parentName:"p"},"queryAll")," takes the same arguments but should instead return a ",Object(p.b)("inlineCode",{parentName:"p"},"NodeListOf<Element>")," or ",Object(p.b)("inlineCode",{parentName:"p"},"Array<Element>")," with all the elements that match the given query selector."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export interface CustomQueryHandler \n")),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Property"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.customqueryhandler.queryall"},"queryAll?")),Object(p.b)("td",{parentName:"tr",align:null},"(element: Element ","|"," Document, selector: string) =",">"," Element","[","]"," ","|"," NodeListOf","<","Element",">"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.customqueryhandler.queryone"},"queryOne?")),Object(p.b)("td",{parentName:"tr",align:null},"(element: Element ","|"," Document, selector: string) =",">"," Element ","|"," null"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)"))))))}b.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),i=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=i(r),s=n,d=b["".concat(o,".").concat(s)]||b[s]||m[s]||p;return r?a.a.createElement(d,l(l({ref:t},c),{},{components:r})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<p;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);