(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(p,".").concat(d)]||b[d]||s[d]||o;return n?r.a.createElement(m,c(c({ref:t},i),{},{components:n})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(2836)),p=["components"],c={},l={unversionedId:"puppeteer.executioncontext.evaluate",id:"version-6.0.0/puppeteer.executioncontext.evaluate",isDocsHomePage:!1,title:"puppeteer.executioncontext.evaluate",description:"Home &gt; puppeteer &gt; ExecutionContext &gt; evaluate",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.executioncontext.evaluate.md",slug:"/puppeteer.executioncontext.evaluate",permalink:"/puppeteer/docs/6.0.0/puppeteer.executioncontext.evaluate",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.executioncontext",permalink:"/puppeteer/docs/6.0.0/puppeteer.executioncontext"},next:{title:"puppeteer.executioncontext.evaluatehandle",permalink:"/puppeteer/docs/6.0.0/puppeteer.executioncontext.evaluatehandle"}},i=[{value:"ExecutionContext.evaluate() method",id:"executioncontextevaluate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],u={toc:i};function b(e){var t=e.components,n=Object(r.a)(e,p);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.executioncontext"},"ExecutionContext")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.executioncontext.evaluate"},"evaluate")),Object(o.b)("h2",{id:"executioncontextevaluate-method"},"ExecutionContext.evaluate() method"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"evaluate<ReturnType extends any>(pageFunction: Function | string, ...args: unknown[]): Promise<ReturnType>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(o.b)("td",{parentName:"tr",align:null},"Function ","|"," string"),Object(o.b)("td",{parentName:"tr",align:null},"a function to be evaluated in the ",Object(o.b)("code",null,"executionContext"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"args"),Object(o.b)("td",{parentName:"tr",align:null},"unknown","[","]"),Object(o.b)("td",{parentName:"tr",align:null},"argument to pass to the page function")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","ReturnType",">"),Object(o.b)("p",null,"A promise that resolves to the return value of the given function."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"executionContext.evaluate")," returns a Promise, then ",Object(o.b)("inlineCode",{parentName:"p"},"executionContext.evaluate")," would wait for the promise to resolve and return its value. If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"executionContext.evaluate")," returns a non-serializable value, then ",Object(o.b)("inlineCode",{parentName:"p"},"executionContext.evaluate")," resolves to ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",Object(o.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.b)("inlineCode",{parentName:"p"},"-Infinity"),", and bigint literals."),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const executionContext = await page.mainFrame().executionContext();\nconst result = await executionContext.evaluate(() => Promise.resolve(8 * 7))* ;\nconsole.log(result); // prints "56"\n\n')),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("p",null,"A string can also be passed in instead of a function."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"console.log(await executionContext.evaluate('1 + 2')); // prints \"3\"\n\n")),Object(o.b)("h2",{id:"example-3"},"Example 3"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.jshandle"},"JSHandle")," instances can be passed as arguments to the ",Object(o.b)("inlineCode",{parentName:"p"},"executionContext.* evaluate"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const oneHandle = await executionContext.evaluateHandle(() => 1);\nconst twoHandle = await executionContext.evaluateHandle(() => 2);\nconst result = await executionContext.evaluate(\n   (a, b) => a + b, oneHandle, * twoHandle\n);\nawait oneHandle.dispose();\nawait twoHandle.dispose();\nconsole.log(result); // prints '3'.\n\n")))}b.isMDXComponent=!0}}]);