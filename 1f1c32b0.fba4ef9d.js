(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var o=p.a.createContext({}),s=function(e){var t=p.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return p.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},i=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=s(r),i=n,m=u["".concat(b,".").concat(i)]||u[i]||d[i]||a;return r?p.a.createElement(m,l(l({ref:t},o),{},{components:r})):p.a.createElement(m,l({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,b=new Array(a);b[0]=i;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<a;o++)b[o]=r[o];return p.a.createElement.apply(null,b)}return p.a.createElement.apply(null,r)}i.displayName="MDXCreateElement"},414:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(3),p=r(7),a=(r(0),r(2836)),b=["components"],l={},c={unversionedId:"puppeteer.httpresponse",id:"puppeteer.httpresponse",isDocsHomePage:!1,title:"puppeteer.httpresponse",description:"Home &gt; puppeteer &gt; HTTPResponse",source:"@site/docs\\puppeteer.httpresponse.md",slug:"/puppeteer.httpresponse",permalink:"/puppeteer/docs/next/puppeteer.httpresponse",version:"current",sidebar:"docs",previous:{title:"puppeteer.httprequest.url",permalink:"/puppeteer/docs/next/puppeteer.httprequest.url"},next:{title:"puppeteer.httpresponse.buffer",permalink:"/puppeteer/docs/next/puppeteer.httpresponse.buffer"}},o=[{value:"HTTPResponse class",id:"httpresponse-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],s={toc:o};function u(e){var t=e.components,r=Object(p.a)(e,b);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.httpresponse"},"HTTPResponse")),Object(a.b)("h2",{id:"httpresponse-class"},"HTTPResponse class"),Object(a.b)("p",null,"The HTTPResponse class represents responses which are received by the ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," class."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class HTTPResponse \n")),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(a.b)("inlineCode",{parentName:"p"},"HTTPResponse")," class."),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Method"),Object(a.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.buffer"},"buffer()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.frame"},"frame()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.fromcache"},"fromCache()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.fromserviceworker"},"fromServiceWorker()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.headers"},"headers()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.json"},"json()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.ok"},"ok()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.remoteaddress"},"remoteAddress()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.request"},"request()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.securitydetails"},"securityDetails()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.status"},"status()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.statustext"},"statusText()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.text"},"text()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httpresponse.url"},"url()")),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);