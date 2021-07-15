(window.webpackJsonp=window.webpackJsonp||[]).push([[1239],{1310:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),p=(r(0),r(2836)),c=["components"],o={},i={unversionedId:"puppeteer.page.addscripttag",id:"version-10.0.0/puppeteer.page.addscripttag",isDocsHomePage:!1,title:"puppeteer.page.addscripttag",description:"Home &gt; puppeteer &gt; Page &gt; addScriptTag",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.page.addscripttag.md",slug:"/puppeteer.page.addscripttag",permalink:"/puppeteer/docs/10.0.0/puppeteer.page.addscripttag",version:"10.0.0"},l=[{value:"Page.addScriptTag() method",id:"pageaddscripttag-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:l};function d(e){var t=e.components,r=Object(a.a)(e,c);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page.addscripttag"},"addScriptTag")),Object(p.b)("h2",{id:"pageaddscripttag-method"},"Page.addScriptTag() method"),Object(p.b)("p",null,"Adds a ",Object(p.b)("inlineCode",{parentName:"p"},"<script>")," tag into the page with the desired URL or content."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"addScriptTag(options: {\n        url?: string;\n        path?: string;\n        content?: string;\n        type?: string;\n    }): Promise<ElementHandle>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},"{ url?: string; path?: string; content?: string; type?: string; }"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle"),">"),Object(p.b)("p",null,"Promise which resolves to the added tag when the script's onload fires or when the script content was injected into frame."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"Shortcut for ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.frame.addscripttag"},"page.mainFrame().addScriptTag(options)"),"."))}d.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||p;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,c=new Array(p);c[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<p;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);