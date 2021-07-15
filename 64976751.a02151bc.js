(window.webpackJsonp=window.webpackJsonp||[]).push([[1100],{1171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),p=r(7),a=(r(0),r(2836)),o=["components"],s={},u={unversionedId:"puppeteer.httprequest.respond",id:"version-5.4.0/puppeteer.httprequest.respond",isDocsHomePage:!1,title:"puppeteer.httprequest.respond",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; respond",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.httprequest.respond.md",slug:"/puppeteer.httprequest.respond",permalink:"/puppeteer/docs/puppeteer.httprequest.respond",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.httprequest.resourcetype",permalink:"/puppeteer/docs/puppeteer.httprequest.resourcetype"},next:{title:"puppeteer.httprequest.response",permalink:"/puppeteer/docs/puppeteer.httprequest.response"}},c=[{value:"HTTPRequest.respond() method",id:"httprequestrespond-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],i={toc:c};function l(e){var t=e.components,r=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest.respond"},"respond")),Object(a.b)("h2",{id:"httprequestrespond-method"},"HTTPRequest.respond() method"),Object(a.b)("p",null,"Fulfills a request with the given response."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"respond(response: Partial<ResponseForRequest>): Promise<void>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"response"),Object(a.b)("td",{parentName:"tr",align:null},"Partial","<",Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.responseforrequest"},"ResponseForRequest"),">"),Object(a.b)("td",{parentName:"tr",align:null},"the response to fulfill the request with.")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"To use this, request interception should be enabled with ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.setrequestinterception"},"Page.setRequestInterception()"),"."),Object(a.b)("p",null,"Exception is immediately thrown if the request interception is not enabled."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"An example of fulfilling all requests with 404 responses:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await page.setRequestInterception(true);\npage.on('request', request => {\n  request.respond({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!'\n  });\n});\n\n")),Object(a.b)("p",null,"NOTE: Mocking responses for dataURL requests is not supported. Calling ",Object(a.b)("inlineCode",{parentName:"p"},"request.respond")," for a dataURL request is a noop."))}l.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=p.a.createContext({}),i=function(e){var t=p.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return p.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=i(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||a;return r?p.a.createElement(m,s(s({ref:t},c),{},{components:r})):p.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);