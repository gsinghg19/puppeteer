(window.webpackJsonp=window.webpackJsonp||[]).push([[2236],{2307:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),p=(r(0),r(2836)),l=["components"],o={},u={unversionedId:"puppeteer.jshandle.evaluate",id:"version-5.4.0/puppeteer.jshandle.evaluate",isDocsHomePage:!1,title:"puppeteer.jshandle.evaluate",description:"Home &gt; puppeteer &gt; JSHandle &gt; evaluate",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.jshandle.evaluate.md",slug:"/puppeteer.jshandle.evaluate",permalink:"/puppeteer/docs/puppeteer.jshandle.evaluate",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.jshandle.dispose",permalink:"/puppeteer/docs/puppeteer.jshandle.dispose"},next:{title:"puppeteer.jshandle.evaluatehandle",permalink:"/puppeteer/docs/puppeteer.jshandle.evaluatehandle"}},c=[{value:"JSHandle.evaluate() method",id:"jshandleevaluate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],i={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.jshandle"},"JSHandle")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.jshandle.evaluate"},"evaluate")),Object(p.b)("h2",{id:"jshandleevaluate-method"},"JSHandle.evaluate() method"),Object(p.b)("p",null,"This method passes this handle as the first argument to ",Object(p.b)("inlineCode",{parentName:"p"},"pageFunction"),". If ",Object(p.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",Object(p.b)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"evaluate<T extends EvaluateFn<HandleObjectType>>(pageFunction: T | string, ...args: SerializableOrJSHandle[]): Promise<UnwrapPromiseLike<EvaluateFnReturnType<T>>>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(p.b)("td",{parentName:"tr",align:null},"T ","|"," string"),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"args"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.unwrappromiselike"},"UnwrapPromiseLike"),"<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.evaluatefnreturntype"},"EvaluateFnReturnType"),"<","T",">",">",">"),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const tweetHandle = await page.$('.tweet .retweets');\nexpect(await tweetHandle.evaluate(node => node.innerText)).toBe('10');\n\n")))}b.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),i=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=i(r),d=n,m=b["".concat(l,".").concat(d)]||b[d]||s[d]||p;return r?a.a.createElement(m,o(o({ref:t},c),{},{components:r})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<p;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);