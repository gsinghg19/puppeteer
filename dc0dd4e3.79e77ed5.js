(window.webpackJsonp=window.webpackJsonp||[]).push([[2397],{2468:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),p=(r(0),r(2836)),o=["components"],b={},c={unversionedId:"puppeteer.keyboard",id:"version-10.0.0/puppeteer.keyboard",isDocsHomePage:!1,title:"puppeteer.keyboard",description:"Home &gt; puppeteer &gt; Keyboard",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.keyboard.md",slug:"/puppeteer.keyboard",permalink:"/puppeteer/docs/10.0.0/puppeteer.keyboard",version:"10.0.0"},l=[{value:"Keyboard class",id:"keyboard-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Methods",id:"methods",children:[]}],d={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,o);return Object(p.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard"},"Keyboard")),Object(p.b)("h2",{id:"keyboard-class"},"Keyboard class"),Object(p.b)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.type"},"Keyboard.type()"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Keyboard \n")),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"For finer control, you can use ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.down"},"Keyboard.down()"),", ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.up"},"Keyboard.up()"),", and ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.sendcharacter"},"Keyboard.sendCharacter()")," to manually fire events as if they were generated from a real keyboard."),Object(p.b)("p",null,"On MacOS, keyboard shortcuts like ",Object(p.b)("inlineCode",{parentName:"p"},"\u2318 A")," -",">"," Select All do not work. See ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/issues/1313"},"#","1313"),"."),Object(p.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(p.b)("inlineCode",{parentName:"p"},"Keyboard")," class."),Object(p.b)("h2",{id:"example-1"},"Example 1"),Object(p.b)("p",null,"An example of holding down ",Object(p.b)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"await page.keyboard.type('Hello World!');\nawait page.keyboard.press('ArrowLeft');\n\nawait page.keyboard.down('Shift');\nfor (let i = 0; i < ' World'.length; i++)\n  await page.keyboard.press('ArrowLeft');\nawait page.keyboard.up('Shift');\n\nawait page.keyboard.press('Backspace');\n// Result text will end up saying 'Hello!'\n\n")),Object(p.b)("h2",{id:"example-2"},"Example 2"),Object(p.b)("p",null,"An example of pressing ",Object(p.b)("inlineCode",{parentName:"p"},"A")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"await page.keyboard.down('Shift');\nawait page.keyboard.press('KeyA');\nawait page.keyboard.up('Shift');\n\n")),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Method"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.down"},"down(key, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(p.b)("code",null,"keydown")," event.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.press"},"press(key, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Shortcut for ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.down"},"Keyboard.down()")," and ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.up"},"Keyboard.up()"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.sendcharacter"},"sendCharacter(char)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(p.b)("code",null,"keypress")," and ",Object(p.b)("code",null,"input")," event. This does not send a ",Object(p.b)("code",null,"keydown")," or ",Object(p.b)("code",null,"keyup")," event.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.type"},"type(text, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Sends a ",Object(p.b)("code",null,"keydown"),", ",Object(p.b)("code",null,"keypress"),"/",Object(p.b)("code",null,"input"),", and ",Object(p.b)("code",null,"keyup")," event for each character in the text.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.keyboard.up"},"up(key)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Dispatches a ",Object(p.b)("code",null,"keyup")," event.")))))}u.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var a=r(0),n=r.n(a);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),s=a,y=u["".concat(o,".").concat(s)]||u[s]||i[s]||p;return r?n.a.createElement(y,b(b({ref:t},l),{},{components:r})):n.a.createElement(y,b({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var l=2;l<p;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);