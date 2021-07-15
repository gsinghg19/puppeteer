(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(2836)),p=["components"],o={},i={unversionedId:"puppeteer.page.click",id:"puppeteer.page.click",isDocsHomePage:!1,title:"puppeteer.page.click",description:"Home &gt; puppeteer &gt; Page &gt; click",source:"@site/docs\\puppeteer.page.click.md",slug:"/puppeteer.page.click",permalink:"/puppeteer/docs/next/puppeteer.page.click",version:"current"},l=[{value:"Page.click() method",id:"pageclick-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,p);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.click"},"click")),Object(c.b)("h2",{id:"pageclick-method"},"Page.click() method"),Object(c.b)("p",null,"This method fetches an element with ",Object(c.b)("inlineCode",{parentName:"p"},"selector"),", scrolls it into view if needed, and then uses ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If there's no element matching ",Object(c.b)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"click(selector: string, options?: {\n        delay?: number;\n        button?: MouseButton;\n        clickCount?: number;\n    }): Promise<void>;\n")),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Parameter"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"selector"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"A ",Object(c.b)("code",null,"selector")," to search for element to click. If there are multiple elements satisfying the ",Object(c.b)("code",null,"selector"),", the first will be clicked")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"options"),Object(c.b)("td",{parentName:"tr",align:null},"{ delay?: number; button?: ",Object(c.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.mousebutton"},"MouseButton"),"; clickCount?: number; }"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("code",null,"Object"))))),Object(c.b)("b",null,"Returns:"),Object(c.b)("p",null,"Promise","<","void",">"),Object(c.b)("p",null,"Promise which resolves when the element matching ",Object(c.b)("inlineCode",{parentName:"p"},"selector")," is successfully clicked. The Promise will be rejected if there is no element matching ",Object(c.b)("inlineCode",{parentName:"p"},"selector"),"."),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("p",null,"Bear in mind that if ",Object(c.b)("inlineCode",{parentName:"p"},"click()")," triggers a navigation event and there's a separate ",Object(c.b)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const [response] = await Promise.all([\npage.waitForNavigation(waitOptions),\npage.click(selector, clickOptions),\n]);\n\n")),Object(c.b)("p",null,"Shortcut for ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame.click"},"page.mainFrame().click(selector","[",", options","]",")"),"."))}u.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||c;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,p=new Array(c);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<c;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);