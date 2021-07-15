(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=p.a.createContext({}),s=function(e){var t=p.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return p.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||a;return r?p.a.createElement(m,u(u({ref:t},c),{},{components:r})):p.a.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var c=2;c<a;c++)o[c]=r[c];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},762:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),p=r(7),a=(r(0),r(2836)),o=["components"],u={},i={unversionedId:"puppeteer.httprequest.continue",id:"version-5.4.0/puppeteer.httprequest.continue",isDocsHomePage:!1,title:"puppeteer.httprequest.continue",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; continue",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.httprequest.continue.md",slug:"/puppeteer.httprequest.continue",permalink:"/puppeteer/docs/puppeteer.httprequest.continue",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.httprequest.abort",permalink:"/puppeteer/docs/puppeteer.httprequest.abort"},next:{title:"puppeteer.httprequest.failure",permalink:"/puppeteer/docs/puppeteer.httprequest.failure"}},c=[{value:"HTTPRequest.continue() method",id:"httprequestcontinue-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest.continue"},"continue")),Object(a.b)("h2",{id:"httprequestcontinue-method"},"HTTPRequest.continue() method"),Object(a.b)("p",null,"Continues request with optional request overrides."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"continue(overrides?: ContinueRequestOverrides): Promise<void>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"overrides"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.continuerequestoverrides"},"ContinueRequestOverrides")),Object(a.b)("td",{parentName:"tr",align:null},"optional overrides to apply to the request.")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"To use this, request interception should be enabled with ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.setrequestinterception"},"Page.setRequestInterception()"),"."),Object(a.b)("p",null,"Exception is immediately thrown if the request interception is not enabled."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await page.setRequestInterception(true);\npage.on('request', request => {\n  // Override headers\n  const headers = Object.assign({}, request.headers(), {\n    foo: 'bar', // set \"foo\" header\n    origin: undefined, // remove \"origin\" header\n  });\n  request.continue({headers});\n});\n\n")))}l.isMDXComponent=!0}}]);