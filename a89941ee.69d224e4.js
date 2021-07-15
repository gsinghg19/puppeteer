(window.webpackJsonp=window.webpackJsonp||[]).push([[1833],{1905:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(2836)),p=["components"],i={},l={unversionedId:"puppeteer.page.waitforselector",id:"puppeteer.page.waitforselector",isDocsHomePage:!1,title:"puppeteer.page.waitforselector",description:"Home &gt; puppeteer &gt; Page &gt; waitForSelector",source:"@site/docs\\puppeteer.page.waitforselector.md",slug:"/puppeteer.page.waitforselector",permalink:"/puppeteer/docs/next/puppeteer.page.waitforselector",version:"current"},c=[{value:"Page.waitForSelector() method",id:"pagewaitforselector-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.waitforselector"},"waitForSelector")),Object(o.b)("h2",{id:"pagewaitforselector-method"},"Page.waitForSelector() method"),Object(o.b)("p",null,"Wait for the ",Object(o.b)("inlineCode",{parentName:"p"},"selector")," to appear in page. If at the moment of calling the method the ",Object(o.b)("inlineCode",{parentName:"p"},"selector")," already exists, the method will return immediately. If the ",Object(o.b)("inlineCode",{parentName:"p"},"selector")," doesn't appear after the ",Object(o.b)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),Object(o.b)("p",null,"This method works across navigations:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n(async () => {\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nlet currentURL;\npage\n.waitForSelector('img')\n.then(() => console.log('First URL with image: ' + currentURL));\nfor (currentURL of [\n'https://example.com',\n'https://google.com',\n'https://bbc.com',\n]) {\nawait page.goto(currentURL);\n}\nawait browser.close();\n})();\n\n")),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitForSelector(selector: string, options?: {\n        visible?: boolean;\n        hidden?: boolean;\n        timeout?: number;\n    }): Promise<ElementHandle | null>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"selector"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"A ",Object(o.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," of an element to wait for")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},"{ visible?: boolean; hidden?: boolean; timeout?: number; }"),Object(o.b)("td",{parentName:"tr",align:null},"Optional waiting parameters")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle"},"ElementHandle")," ","|"," null",">"),Object(o.b)("p",null,"Promise which resolves when element specified by selector string is added to DOM. Resolves to ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if waiting for hidden: ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and selector is not found in DOM."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"The optional Parameter in Arguments ",Object(o.b)("inlineCode",{parentName:"p"},"options")," are :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Visible"),": A boolean wait for element to be present in DOM and to be visible, i.e. to not have ",Object(o.b)("inlineCode",{parentName:"p"},"display: none")," or ",Object(o.b)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"hidden"),": ait for element to not be found in the DOM or to be hidden, i.e. have ",Object(o.b)("inlineCode",{parentName:"p"},"display: none")," or ",Object(o.b)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"timeout"),": maximum time to wait for in milliseconds. Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",Object(o.b)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method."))))}s.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},c),{},{components:n})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);