(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(r),s=n,d=b["".concat(o,".").concat(s)]||b[s]||m[s]||c;return r?a.a.createElement(d,p(p({ref:t},l),{},{components:r})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},623:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(2836)),o=["components"],p={},i={unversionedId:"puppeteer.frame.click",id:"version-6.0.0/puppeteer.frame.click",isDocsHomePage:!1,title:"puppeteer.frame.click",description:"Home &gt; puppeteer &gt; Frame &gt; click",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.frame.click.md",slug:"/puppeteer.frame.click",permalink:"/puppeteer/docs/6.0.0/puppeteer.frame.click",version:"6.0.0"},l=[{value:"Frame.click() method",id:"frameclick-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.frame"},"Frame")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.frame.click"},"click")),Object(c.b)("h2",{id:"frameclick-method"},"Frame.click() method"),Object(c.b)("p",null,"This method clicks the first element found that matches ",Object(c.b)("inlineCode",{parentName:"p"},"selector"),"."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"click(selector: string, options?: {\n        delay?: number;\n        button?: MouseButton;\n        clickCount?: number;\n    }): Promise<void>;\n")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Parameter"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"selector"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"the selector to search for to click. If there are multiple elements, the first will be clicked.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"options"),Object(c.b)("td",{parentName:"tr",align:null},"{ delay?: number; button?: ",Object(c.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.mousebutton"},"MouseButton"),"; clickCount?: number; }"),Object(c.b)("td",{parentName:"tr",align:null})))),Object(c.b)("b",null,"Returns:"),Object(c.b)("p",null,"Promise","<","void",">"),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("p",null,"This method scrolls the element into view if needed, and then uses ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If there's no element matching ",Object(c.b)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),Object(c.b)("p",null,"Bear in mind that if ",Object(c.b)("inlineCode",{parentName:"p"},"click()")," triggers a navigation event and there's a separate ",Object(c.b)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const [response] = await Promise.all([\n  page.waitForNavigation(waitOptions),\n  frame.click(selector, clickOptions),\n]);\n\n")))}b.isMDXComponent=!0}}]);