(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(2836)),o=["components"],c={},i={unversionedId:"puppeteer.page.createpdfstream",id:"puppeteer.page.createpdfstream",isDocsHomePage:!1,title:"puppeteer.page.createpdfstream",description:"Home &gt; puppeteer &gt; Page &gt; createPDFStream",source:"@site/docs\\puppeteer.page.createpdfstream.md",slug:"/puppeteer.page.createpdfstream",permalink:"/puppeteer/docs/next/puppeteer.page.createpdfstream",version:"current"},l=[{value:"Page.createPDFStream() method",id:"pagecreatepdfstream-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.createpdfstream"},"createPDFStream")),Object(p.b)("h2",{id:"pagecreatepdfstream-method"},"Page.createPDFStream() method"),Object(p.b)("p",null,"Generatees a PDF of the page with the ",Object(p.b)("inlineCode",{parentName:"p"},"print")," CSS media type."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"createPDFStream(options?: PDFOptions): Promise<Readable>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.pdfoptions"},"PDFOptions")),Object(p.b)("td",{parentName:"tr",align:null},"options for generating the PDF.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","Readable",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"NOTE: PDF generation is only supported in Chrome headless mode."),Object(p.b)("p",null,"To generate a PDF with the ",Object(p.b)("inlineCode",{parentName:"p"},"screen")," media type, call ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.emulatemediatype"},"`","page.emulateMediaType('screen')","`")," before calling ",Object(p.b)("inlineCode",{parentName:"p"},"page.pdf()"),"."),Object(p.b)("p",null,"By default, ",Object(p.b)("inlineCode",{parentName:"p"},"page.pdf()")," generates a pdf with modified colors for printing. Use the ",Object(p.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust"},"`","-webkit-print-color-adjust","`")," property to force rendering of exact colors."))}u.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,s=u["".concat(o,".").concat(d)]||u[d]||m[d]||p;return r?a.a.createElement(s,c(c({ref:t},l),{},{components:r})):a.a.createElement(s,c({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<p;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);