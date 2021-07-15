(window.webpackJsonp=window.webpackJsonp||[]).push([[1331],{1402:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),p=r(7),o=(r(0),r(2836)),a=["components"],c={},u={unversionedId:"puppeteer.puppeteernode.launch",id:"version-5.4.0/puppeteer.puppeteernode.launch",isDocsHomePage:!1,title:"puppeteer.puppeteernode.launch",description:"Home &gt; puppeteer &gt; PuppeteerNode &gt; launch",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.puppeteernode.launch.md",slug:"/puppeteer.puppeteernode.launch",permalink:"/puppeteer/docs/puppeteer.puppeteernode.launch",version:"5.4.0"},i=[{value:"PuppeteerNode.launch() method",id:"puppeteernodelaunch-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],l={toc:i};function s(e){var t=e.components,r=Object(p.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteernode"},"PuppeteerNode")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteernode.launch"},"launch")),Object(o.b)("h2",{id:"puppeteernodelaunch-method"},"PuppeteerNode.launch() method"),Object(o.b)("p",null,"Launches puppeteer and launches a browser instance with given arguments and options when specified."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"launch(options?: LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions & {\n        product?: Product;\n        extraPrefsFirefox?: Record<string, unknown>;\n    }): Promise<Browser>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.launchoptions"},"LaunchOptions")," ","&"," ",Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserlaunchargumentoptions"},"BrowserLaunchArgumentOptions")," ","&"," ",Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserconnectoptions"},"BrowserConnectOptions")," ","&"," { product?: ",Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.product"},"Product"),"; extraPrefsFirefox?: Record","<","string, unknown",">","; }"),Object(o.b)("td",{parentName:"tr",align:null},"Set of configurable options to set on the browser.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser"},"Browser"),">"),Object(o.b)("p",null,"Promise which resolves to browser instance."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"ignoreDefaultArgs")," to filter out ",Object(o.b)("inlineCode",{parentName:"p"},"--mute-audio")," from default arguments:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio']\n});\n\n")),Object(o.b)("p",null,"*","*","NOTE","*","*"," Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chromium it is bundled with. There is no guarantee it will work with any other version. Use ",Object(o.b)("inlineCode",{parentName:"p"},"executablePath")," option with extreme caution. If Google Chrome (rather than Chromium) is preferred, a ",Object(o.b)("a",{parentName:"p",href:"https://www.google.com/chrome/browser/canary.html"},"Chrome Canary")," or ",Object(o.b)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/dev-channel"},"Dev Channel")," build is suggested. In ",Object(o.b)("inlineCode",{parentName:"p"},"puppeteer.launch([options])"),", any mention of Chromium also applies to Chrome. See ",Object(o.b)("a",{parentName:"p",href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"},"this article")," for a description of the differences between Chromium and Chrome. ",Object(o.b)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md"},"This article")," describes some differences for Linux users."))}s.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),p=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=p.a.createContext({}),l=function(e){var t=p.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return p.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},m=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(a,".").concat(m)]||s[m]||b[m]||o;return r?p.a.createElement(d,c(c({ref:t},i),{},{components:r})):p.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var i=2;i<o;i++)a[i]=r[i];return p.a.createElement.apply(null,a)}return p.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);