(window.webpackJsonp=window.webpackJsonp||[]).push([[1947],{2019:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(2836)),o=["components"],c={},b={unversionedId:"puppeteer.keyboard.type",id:"puppeteer.keyboard.type",isDocsHomePage:!1,title:"puppeteer.keyboard.type",description:"Home &gt; puppeteer &gt; Keyboard &gt; type",source:"@site/docs\\puppeteer.keyboard.type.md",slug:"/puppeteer.keyboard.type",permalink:"/puppeteer/docs/next/puppeteer.keyboard.type",version:"current"},l=[{value:"Keyboard.type() method",id:"keyboardtype-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],i={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.keyboard"},"Keyboard")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.keyboard.type"},"type")),Object(p.b)("h2",{id:"keyboardtype-method"},"Keyboard.type() method"),Object(p.b)("p",null,"Sends a ",Object(p.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(p.b)("inlineCode",{parentName:"p"},"keypress"),"/",Object(p.b)("inlineCode",{parentName:"p"},"input"),", and ",Object(p.b)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"type(text: string, options?: {\n        delay?: number;\n    }): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"text"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},"A text to type into a focused element.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},"{ delay?: number; }"),Object(p.b)("td",{parentName:"tr",align:null},"An object of options. Accepts delay which, if specified, is the time to wait between ",Object(p.b)("code",null,"keydown")," and ",Object(p.b)("code",null,"keyup")," in milliseconds. Defaults to 0.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"To press a special key, like ",Object(p.b)("inlineCode",{parentName:"p"},"Control")," or ",Object(p.b)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.keyboard.press"},"Keyboard.press()"),"."),Object(p.b)("p",null,"Modifier keys DO NOT effect ",Object(p.b)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",Object(p.b)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"await page.keyboard.type('Hello'); // Types instantly\nawait page.keyboard.type('World', {delay: 100}); // Types slower, like a user\n\n")))}u.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=i(r),s=n,y=u["".concat(o,".").concat(s)]||u[s]||d[s]||p;return r?a.a.createElement(y,c(c({ref:t},l),{},{components:r})):a.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<p;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);