(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(p,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},i),{},{components:r})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},411:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(2836)),p=["components"],c={},l={unversionedId:"puppeteer.frame.waitforselector",id:"version-5.4.0/puppeteer.frame.waitforselector",isDocsHomePage:!1,title:"puppeteer.frame.waitforselector",description:"Home &gt; puppeteer &gt; Frame &gt; waitForSelector",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.frame.waitforselector.md",slug:"/puppeteer.frame.waitforselector",permalink:"/puppeteer/docs/puppeteer.frame.waitforselector",version:"5.4.0"},i=[{value:"Frame.waitForSelector() method",id:"framewaitforselector-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],u={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.frame"},"Frame")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.frame.waitforselector"},"waitForSelector")),Object(o.b)("h2",{id:"framewaitforselector-method"},"Frame.waitForSelector() method"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitForSelector(selector: string, options?: WaitForSelectorOptions): Promise<ElementHandle | null>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"selector"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"the selector to wait for.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.waitforselectoroptions"},"WaitForSelectorOptions")),Object(o.b)("td",{parentName:"tr",align:null},"options to define if the element should be visible and how long to wait before timing out.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle"},"ElementHandle")," ","|"," null",">"),Object(o.b)("p",null,"a promise which resolves when an element matching the selector string is added to the DOM."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"Wait for the ",Object(o.b)("inlineCode",{parentName:"p"},"selector")," to appear in page. If at the moment of calling the method the ",Object(o.b)("inlineCode",{parentName:"p"},"selector")," already exists, the method will return immediately. If the selector doesn't appear after the ",Object(o.b)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),Object(o.b)("p",null,"This method works across navigations."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page.mainFrame()\n  .waitForSelector('img')\n  .then(() => console.log('First URL with image: ' + currentURL));\n\n  for (currentURL of ['https://example.com', 'https://google.com', 'https://bbc.com']) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n\n")))}s.isMDXComponent=!0}}]);