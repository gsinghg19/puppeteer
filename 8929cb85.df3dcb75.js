(window.webpackJsonp=window.webpackJsonp||[]).push([[1485],{1556:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),p=(r(0),r(2836)),l=["components"],o={},c={unversionedId:"puppeteer.frame.__eval",id:"puppeteer.frame.__eval",isDocsHomePage:!1,title:"puppeteer.frame.__eval",description:"Home &gt; puppeteer &gt; Frame &gt; $$eval",source:"@site/docs\\puppeteer.frame.__eval.md",slug:"/puppeteer.frame.__eval",permalink:"/puppeteer/docs/next/puppeteer.frame.__eval",version:"current"},u=[{value:"Frame.$$eval() method",id:"frameeval-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],i={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame"},"Frame")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame.__eval"},"$$eval")),Object(p.b)("h2",{id:"frameeval-method"},"Frame.$$eval() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"$$eval<ReturnType>(selector: string, pageFunction: (elements: Element[], ...args: unknown[]) => ReturnType | Promise<ReturnType>, ...args: SerializableOrJSHandle[]): Promise<WrapElementHandle<ReturnType>>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"selector"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},"the selector to query for")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(p.b)("td",{parentName:"tr",align:null},"(elements: Element","[","]",", ...args: unknown","[","]",") =",">"," ReturnType ","|"," Promise","<","ReturnType",">"),Object(p.b)("td",{parentName:"tr",align:null},"the function to be evaluated in the frame's context")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"args"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(p.b)("td",{parentName:"tr",align:null},"additional arguments to pass to ",Object(p.b)("code",null,"pageFuncton"))))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.wrapelementhandle"},"WrapElementHandle"),"<","ReturnType",">",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"This method runs ",Object(p.b)("inlineCode",{parentName:"p"},"Array.from(document.querySelectorAll(selector))")," within the frame and passes it as the first argument to ",Object(p.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(p.b)("p",null,"If ",Object(p.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",Object(p.b)("inlineCode",{parentName:"p"},"frame.$$eval")," would wait for the promise to resolve and return its value."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const divsCounts = await frame.$$eval('div', divs => divs.length);\n\n")))}b.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=i(r),s=n,d=b["".concat(l,".").concat(s)]||b[s]||m[s]||p;return r?a.a.createElement(d,o(o({ref:t},u),{},{components:r})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<p;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);