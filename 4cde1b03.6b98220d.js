(window.webpackJsonp=window.webpackJsonp||[]).push([[834],{2836:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=n,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||p;return t?o.a.createElement(d,a(a({ref:r},s),{},{components:t})):o.a.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,c=new Array(p);c[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var s=2;s<p;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},905:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),p=(t(0),t(2836)),c=["components"],a={},i={unversionedId:"puppeteer.browserfetcher.localrevisions",id:"version-6.0.0/puppeteer.browserfetcher.localrevisions",isDocsHomePage:!1,title:"puppeteer.browserfetcher.localrevisions",description:"Home &gt; puppeteer &gt; BrowserFetcher &gt; localRevisions",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.browserfetcher.localrevisions.md",slug:"/puppeteer.browserfetcher.localrevisions",permalink:"/puppeteer/docs/6.0.0/puppeteer.browserfetcher.localrevisions",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.browserfetcher.host",permalink:"/puppeteer/docs/6.0.0/puppeteer.browserfetcher.host"},next:{title:"puppeteer.browserfetcher.platform",permalink:"/puppeteer/docs/6.0.0/puppeteer.browserfetcher.platform"}},s=[{value:"BrowserFetcher.localRevisions() method",id:"browserfetcherlocalrevisions-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:s};function u(e){var r=e.components,t=Object(o.a)(e,c);return Object(p.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browserfetcher"},"BrowserFetcher")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browserfetcher.localrevisions"},"localRevisions")),Object(p.b)("h2",{id:"browserfetcherlocalrevisions-method"},"BrowserFetcher.localRevisions() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"localRevisions(): Promise<string[]>;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","string","[","]",">"),Object(p.b)("p",null,"A promise with a list of all revision strings (for the current ",Object(p.b)("inlineCode",{parentName:"p"},"product"),") available locally on disk."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"This method is affected by the current ",Object(p.b)("inlineCode",{parentName:"p"},"product"),"."))}u.isMDXComponent=!0}}]);