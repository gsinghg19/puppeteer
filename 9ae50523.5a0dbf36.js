(window.webpackJsonp=window.webpackJsonp||[]).push([[1701],{1772:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),p=(a(0),a(2836)),o=["components"],i={},s={type:"mdx",permalink:"/puppeteer/",source:"@site/src\\pages\\index.md"},l=[{value:"Getting Started",id:"getting-started",children:[{value:"Installation",id:"installation",children:[]},{value:"puppeteer-core",id:"puppeteer-core",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"Default runtime settings",id:"default-runtime-settings",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Debugging tips",id:"debugging-tips",children:[]},{value:"Usage with TypeScript",id:"usage-with-typescript",children:[]},{value:"Contributing to Puppeteer",id:"contributing-to-puppeteer",children:[]}],b={toc:l};function c(e){var t=e.components,a=Object(r.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"puppeteer"},"Puppeteer"),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/actions?query=workflow%3Arun-checks"},Object(p.b)("img",{parentName:"a",src:"https://github.com/puppeteer/puppeteer/workflows/run-checks/badge.svg",alt:"Build status"}))," ",Object(p.b)("a",{parentName:"p",href:"https://npmjs.org/package/puppeteer"},Object(p.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/puppeteer.svg",alt:"npm puppeteer package"}))),Object(p.b)("img",{src:"https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",height:"200",align:"right"}),Object(p.b)("h6",{id:"api--faq--contributing--troubleshooting"},Object(p.b)("a",{parentName:"h6",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md"},"API")," | ",Object(p.b)("a",{parentName:"h6",href:"#faq"},"FAQ")," | ",Object(p.b)("a",{parentName:"h6",href:"https://github.com/puppeteer/puppeteer/blob/main/CONTRIBUTING.md"},"Contributing")," | ",Object(p.b)("a",{parentName:"h6",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md"},"Troubleshooting")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the ",Object(p.b)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol"),". Puppeteer runs ",Object(p.b)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"headless")," by default, but can be configured to run full (non-headless) Chrome or Chromium.")),Object(p.b)("h6",{id:"what-can-i-do"},"What can I do?"),Object(p.b)("p",null,"Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples to get you started:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Generate screenshots and PDFs of pages."),Object(p.b)("li",{parentName:"ul"},'Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).'),Object(p.b)("li",{parentName:"ul"},"Automate form submission, UI testing, keyboard input, etc."),Object(p.b)("li",{parentName:"ul"},"Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features."),Object(p.b)("li",{parentName:"ul"},"Capture a ",Object(p.b)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference"},"timeline trace")," of your site to help diagnose performance issues."),Object(p.b)("li",{parentName:"ul"},"Test Chrome Extensions.")),Object(p.b)("p",null,"Give it a spin: ",Object(p.b)("a",{parentName:"p",href:"https://try-puppeteer.appspot.com/"},"https://try-puppeteer.appspot.com/")),Object(p.b)("h2",{id:"getting-started"},"Getting Started"),Object(p.b)("h3",{id:"installation"},"Installation"),Object(p.b)("p",null,"To use Puppeteer in your project, run:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},'npm i puppeteer\n# or "yarn add puppeteer"\n')),Object(p.b)("p",null,"Note: When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. To skip the download, or to download a different browser, see ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md#environment-variables"},"Environment variables"),"."),Object(p.b)("h3",{id:"puppeteer-core"},"puppeteer-core"),Object(p.b)("p",null,"Since version 1.7.0 we publish the ",Object(p.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer-core"},Object(p.b)("inlineCode",{parentName:"a"},"puppeteer-core"))," package,\na version of Puppeteer that doesn't download any browser by default."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},'npm i puppeteer-core\n# or "yarn add puppeteer-core"\n')),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"puppeteer-core")," is intended to be a lightweight version of Puppeteer for launching an existing browser installation or for connecting to a remote one. Be sure that the version of puppeteer-core you install is compatible with the\nbrowser you intend to connect to."),Object(p.b)("p",null,"See ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteer-vs-puppeteer-core"},"puppeteer vs puppeteer-core"),"."),Object(p.b)("h3",{id:"usage"},"Usage"),Object(p.b)("p",null,"Puppeteer follows the latest ",Object(p.b)("a",{parentName:"p",href:"https://github.com/nodejs/Release#release-schedule"},"maintenance LTS")," version of Node."),Object(p.b)("p",null,"Note: Prior to v1.18.1, Puppeteer required at least Node v6.4.0. Versions from v1.18.1 to v2.1.0 rely on\nNode 8.9.0+. Starting from v3.0.0 Puppeteer starts to rely on Node 10.18.1+. All examples below use async/await which is only supported in Node v7.6.0 or greater."),Object(p.b)("p",null,"Puppeteer will be familiar to people using other browser testing frameworks. You create an instance\nof ",Object(p.b)("inlineCode",{parentName:"p"},"Browser"),", open pages, and then manipulate them with ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md#"},"Puppeteer's API"),"."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Example")," - navigating to ",Object(p.b)("a",{parentName:"p",href:"https://example.com"},"https://example.com")," and saving a screenshot as ",Object(p.b)("em",{parentName:"p"},"example.png"),":"),Object(p.b)("p",null,"Save file as ",Object(p.b)("strong",{parentName:"p"},"example.js")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await page.screenshot({ path: 'example.png' });\n\n  await browser.close();\n})();\n")),Object(p.b)("p",null,"Execute script on the command line"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"node example.js\n")),Object(p.b)("p",null,"Puppeteer sets an initial page size to 800\xd7600px, which defines the screenshot size. The page size can be customized with ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md#pagesetviewportviewport"},Object(p.b)("inlineCode",{parentName:"a"},"Page.setViewport()")),"."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Example")," - create a PDF."),Object(p.b)("p",null,"Save file as ",Object(p.b)("strong",{parentName:"p"},"hn.js")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://news.ycombinator.com', {\n    waitUntil: 'networkidle2',\n  });\n  await page.pdf({ path: 'hn.pdf', format: 'a4' });\n\n  await browser.close();\n})();\n")),Object(p.b)("p",null,"Execute script on the command line"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"node hn.js\n")),Object(p.b)("p",null,"See ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md#pagepdfoptions"},Object(p.b)("inlineCode",{parentName:"a"},"Page.pdf()"))," for more information about creating pdfs."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Example")," - evaluate script in the context of the page"),Object(p.b)("p",null,"Save file as ",Object(p.b)("strong",{parentName:"p"},"get-dimensions.js")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n\n  // Get the \"viewport\" of the page, as reported by the page.\n  const dimensions = await page.evaluate(() => {\n    return {\n      width: document.documentElement.clientWidth,\n      height: document.documentElement.clientHeight,\n      deviceScaleFactor: window.devicePixelRatio,\n    };\n  });\n\n  console.log('Dimensions:', dimensions);\n\n  await browser.close();\n})();\n")),Object(p.b)("p",null,"Execute script on the command line"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"node get-dimensions.js\n")),Object(p.b)("p",null,"See ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md#pageevaluatepagefunction-args"},Object(p.b)("inlineCode",{parentName:"a"},"Page.evaluate()"))," for more information on ",Object(p.b)("inlineCode",{parentName:"p"},"evaluate")," and related methods like ",Object(p.b)("inlineCode",{parentName:"p"},"evaluateOnNewDocument")," and ",Object(p.b)("inlineCode",{parentName:"p"},"exposeFunction"),"."),Object(p.b)("h2",{id:"default-runtime-settings"},"Default runtime settings"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"1. Uses Headless mode")),Object(p.b)("p",null,"Puppeteer launches Chromium in ",Object(p.b)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"headless mode"),". To launch a full version of Chromium, set the ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md#puppeteerlaunchoptions"},Object(p.b)("inlineCode",{parentName:"a"},"headless")," option")," when launching a browser:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({ headless: false }); // default is true\n")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"2. Runs a bundled version of Chromium")),Object(p.b)("p",null,"By default, Puppeteer downloads and uses a specific version of Chromium so its API\nis guaranteed to work out of the box. To use Puppeteer with a different version of Chrome or Chromium,\npass in the executable's path when creating a ",Object(p.b)("inlineCode",{parentName:"p"},"Browser")," instance:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({ executablePath: '/path/to/Chrome' });\n")),Object(p.b)("p",null,"You can also use Puppeteer with Firefox Nightly (experimental support). See ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md#puppeteerlaunchoptions"},Object(p.b)("inlineCode",{parentName:"a"},"Puppeteer.launch()"))," for more information."),Object(p.b)("p",null,"See ",Object(p.b)("a",{parentName:"p",href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"},Object(p.b)("inlineCode",{parentName:"a"},"this article"))," for a description of the differences between Chromium and Chrome. ",Object(p.b)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/master/docs/chromium_browser_vs_google_chrome.md"},Object(p.b)("inlineCode",{parentName:"a"},"This article"))," describes some differences for Linux users."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"3. Creates a fresh user profile")),Object(p.b)("p",null,"Puppeteer creates its own browser user profile which it ",Object(p.b)("strong",{parentName:"p"},"cleans up on every run"),"."),Object(p.b)("h2",{id:"resources"},"Resources"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md"},"API Documentation")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/tree/main/examples/"},"Examples")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://github.com/transitive-bullshit/awesome-puppeteer"},"Community list of Puppeteer resources"))),Object(p.b)("h2",{id:"debugging-tips"},"Debugging tips"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"Turn off headless mode - sometimes it's useful to see what the browser is\ndisplaying. Instead of launching in headless mode, launch a full version of\nthe browser using ",Object(p.b)("inlineCode",{parentName:"p"},"headless: false"),":"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({ headless: false });\n"))),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"Slow it down - the ",Object(p.b)("inlineCode",{parentName:"p"},"slowMo")," option slows down Puppeteer operations by the\nspecified amount of milliseconds. It's another way to help see what's going on."),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({\n  headless: false,\n  slowMo: 250, // slow down by 250ms\n});\n"))),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"Capture console output - You can listen for the ",Object(p.b)("inlineCode",{parentName:"p"},"console")," event.\nThis is also handy when debugging code in ",Object(p.b)("inlineCode",{parentName:"p"},"page.evaluate()"),":"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",{parentName:"pre",className:"language-js"},"page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));\n\nawait page.evaluate(() => console.log(`url is ${location.href}`));\n"))),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"Use debugger in application code browser"),Object(p.b)("p",{parentName:"li"},"There are two execution context: node.js that is running test code, and the browser\nrunning application code being tested. This lets you debug code in the\napplication code browser; ie code inside ",Object(p.b)("inlineCode",{parentName:"p"},"evaluate()"),"."),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Use ",Object(p.b)("inlineCode",{parentName:"p"},"{devtools: true}")," when launching Puppeteer:"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({ devtools: true });\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Change default test timeout:"),Object(p.b)("p",{parentName:"li"},"jest: ",Object(p.b)("inlineCode",{parentName:"p"},"jest.setTimeout(100000);")),Object(p.b)("p",{parentName:"li"},"jasmine: ",Object(p.b)("inlineCode",{parentName:"p"},"jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;")),Object(p.b)("p",{parentName:"li"},"mocha: ",Object(p.b)("inlineCode",{parentName:"p"},"this.timeout(100000);")," (don't forget to change test to use ",Object(p.b)("a",{parentName:"p",href:"https://stackoverflow.com/a/23492442"},"function and not '=>'"),")")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Add an evaluate statement with ",Object(p.b)("inlineCode",{parentName:"p"},"debugger")," inside / add ",Object(p.b)("inlineCode",{parentName:"p"},"debugger")," to an existing evaluate statement:"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(() => {\n  debugger;\n});\n")),Object(p.b)("p",{parentName:"li"},"The test will now stop executing in the above evaluate statement, and chromium will stop in debug mode.")))),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"Use debugger in node.js"),Object(p.b)("p",{parentName:"li"},"This will let you debug test code. For example, you can step over ",Object(p.b)("inlineCode",{parentName:"p"},"await page.click()")," in the node.js script and see the click happen in the application code browser."),Object(p.b)("p",{parentName:"li"},"Note that you won't be able to run ",Object(p.b)("inlineCode",{parentName:"p"},"await page.click()")," in\nDevTools console due to this ",Object(p.b)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=833928"},"Chromium bug"),". So if\nyou want to try something out, you have to add it to your test file."),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Add ",Object(p.b)("inlineCode",{parentName:"p"},"debugger;")," to your test, eg:"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",{parentName:"pre",className:"language-js"},"debugger;\nawait page.click('a[target=_blank]');\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Set ",Object(p.b)("inlineCode",{parentName:"p"},"headless")," to ",Object(p.b)("inlineCode",{parentName:"p"},"false"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Run ",Object(p.b)("inlineCode",{parentName:"p"},"node --inspect-brk"),", eg ",Object(p.b)("inlineCode",{parentName:"p"},"node --inspect-brk node_modules/.bin/jest tests"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In Chrome open ",Object(p.b)("inlineCode",{parentName:"p"},"chrome://inspect/#devices")," and click ",Object(p.b)("inlineCode",{parentName:"p"},"inspect"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the newly opened test browser, type ",Object(p.b)("inlineCode",{parentName:"p"},"F8")," to resume test execution")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Now your ",Object(p.b)("inlineCode",{parentName:"p"},"debugger")," will be hit and you can debug in the test browser")))),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"Enable verbose logging - internal DevTools protocol traffic\nwill be logged via the ",Object(p.b)("a",{parentName:"p",href:"https://github.com/visionmedia/debug"},Object(p.b)("inlineCode",{parentName:"a"},"debug"))," module under the ",Object(p.b)("inlineCode",{parentName:"p"},"puppeteer")," namespace."),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",{parentName:"pre"},' # Basic verbose logging\n env DEBUG="puppeteer:*" node script.js\n\n # Protocol traffic can be rather noisy. This example filters out all Network domain messages\n env DEBUG="puppeteer:*" env DEBUG_COLORS=true node script.js 2>&1 | grep -v \'"Network\'\n'))),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"Debug your Puppeteer (node) code easily, using ",Object(p.b)("a",{parentName:"p",href:"https://github.com/GoogleChromeLabs/ndb"},"ndb")))),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"npm install -g ndb")," (or even better, use ",Object(p.b)("a",{parentName:"p",href:"https://github.com/zkat/npx"},"npx"),"!)")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"add a ",Object(p.b)("inlineCode",{parentName:"p"},"debugger")," to your Puppeteer (node) code")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"add ",Object(p.b)("inlineCode",{parentName:"p"},"ndb")," (or ",Object(p.b)("inlineCode",{parentName:"p"},"npx ndb"),") before your test command. For example:"),Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"ndb jest")," or ",Object(p.b)("inlineCode",{parentName:"p"},"ndb mocha")," (or ",Object(p.b)("inlineCode",{parentName:"p"},"npx ndb jest")," / ",Object(p.b)("inlineCode",{parentName:"p"},"npx ndb mocha"),")")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"debug your test inside chromium like a boss!"))),Object(p.b)("h2",{id:"usage-with-typescript"},"Usage with TypeScript"),Object(p.b)("p",null,"We have recently completed a migration to move the Puppeteer source code from JavaScript to TypeScript and as of version 7.0.1 we ship our own built-in type definitions."),Object(p.b)("p",null,"If you are on a version older than 7, we recommend installing the Puppeteer type definitions from the ",Object(p.b)("a",{parentName:"p",href:"https://definitelytyped.org/"},"DefinitelyTyped")," repository:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @types/puppeteer\n")),Object(p.b)("p",null,"The types that you'll see appearing in the Puppeteer source code are based off the great work of those who have contributed to the ",Object(p.b)("inlineCode",{parentName:"p"},"@types/puppeteer")," package. We really appreciate the hard work those people put in to providing high quality TypeScript definitions for Puppeteer's users."),Object(p.b)("h2",{id:"contributing-to-puppeteer"},"Contributing to Puppeteer"),Object(p.b)("p",null,"Check out ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/CONTRIBUTING.md"},"contributing guide")," to get an overview of Puppeteer development."),Object(p.b)("h1",{id:"faq"},"FAQ"),Object(p.b)("h4",{id:"q-who-maintains-puppeteer"},"Q: Who maintains Puppeteer?"),Object(p.b)("p",null,"The Chrome DevTools team maintains the library, but we'd love your help and expertise on the project!\nSee ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/CONTRIBUTING.md"},"Contributing"),"."),Object(p.b)("h4",{id:"q-what-is-the-status-of-cross-browser-support"},"Q: What is the status of cross-browser support?"),Object(p.b)("p",null,"Official Firefox support is currently experimental. The ongoing collaboration with Mozilla aims to support common end-to-end testing use cases, for which developers expect cross-browser coverage. The Puppeteer team needs input from users to stabilize Firefox support and to bring missing APIs to our attention."),Object(p.b)("p",null,"From Puppeteer v2.1.0 onwards you can specify ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md#puppeteerlaunchoptions"},Object(p.b)("inlineCode",{parentName:"a"},"puppeteer.launch({product: 'firefox'})"))," to run your Puppeteer scripts in Firefox Nightly, without any additional custom patches. While ",Object(p.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer-firefox"},"an older experiment")," required a patched version of Firefox, ",Object(p.b)("a",{parentName:"p",href:"https://wiki.mozilla.org/Remote"},"the current approach")," works with \u201cstock\u201d Firefox."),Object(p.b)("p",null,"We will continue to collaborate with other browser vendors to bring Puppeteer support to browsers such as Safari.\nThis effort includes exploration of a standard for executing cross-browser commands (instead of relying on the non-standard DevTools Protocol used by Chrome)."),Object(p.b)("h4",{id:"q-what-are-puppeteers-goals-and-principles"},"Q: What are Puppeteer\u2019s goals and principles?"),Object(p.b)("p",null,"The goals of the project are:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Provide a slim, canonical library that highlights the capabilities of the ",Object(p.b)("a",{parentName:"li",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol"),"."),Object(p.b)("li",{parentName:"ul"},"Provide a reference implementation for similar testing libraries. Eventually, these other frameworks could adopt Puppeteer as their foundational layer."),Object(p.b)("li",{parentName:"ul"},"Grow the adoption of headless/automated browser testing."),Object(p.b)("li",{parentName:"ul"},"Help dogfood new DevTools Protocol features...and catch bugs!"),Object(p.b)("li",{parentName:"ul"},"Learn more about the pain points of automated browser testing and help fill those gaps.")),Object(p.b)("p",null,"We adapt ",Object(p.b)("a",{parentName:"p",href:"https://www.chromium.org/developers/core-principles"},"Chromium principles")," to help us drive product decisions:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Speed"),": Puppeteer has almost zero performance overhead over an automated page."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Security"),": Puppeteer operates off-process with respect to Chromium, making it safe to automate potentially malicious pages."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Stability"),": Puppeteer should not be flaky and should not leak memory."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Simplicity"),": Puppeteer provides a high-level API that\u2019s easy to use, understand, and debug.")),Object(p.b)("h4",{id:"q-is-puppeteer-replacing-seleniumwebdriver"},"Q: Is Puppeteer replacing Selenium/WebDriver?"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"No"),". Both projects are valuable for very different reasons:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Selenium/WebDriver focuses on cross-browser automation; its value proposition is a single standard API that works across all major browsers."),Object(p.b)("li",{parentName:"ul"},"Puppeteer focuses on Chromium; its value proposition is richer functionality and higher reliability.")),Object(p.b)("p",null,"That said, you ",Object(p.b)("strong",{parentName:"p"},"can")," use Puppeteer to run tests against Chromium, e.g. using the community-driven ",Object(p.b)("a",{parentName:"p",href:"https://github.com/smooth-code/jest-puppeteer"},"jest-puppeteer"),". While this probably shouldn\u2019t be your only testing solution, it does have a few good points compared to WebDriver:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Puppeteer requires zero setup and comes bundled with the Chromium version it works best with, making it ",Object(p.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/#getting-started"},"very easy to start with"),". At the end of the day, it\u2019s better to have a few tests running chromium-only, than no tests at all."),Object(p.b)("li",{parentName:"ul"},"Puppeteer has event-driven architecture, which removes a lot of potential flakiness. There\u2019s no need for evil \u201csleep(1000)\u201d calls in puppeteer scripts."),Object(p.b)("li",{parentName:"ul"},"Puppeteer runs headless by default, which makes it fast to run. Puppeteer v1.5.0 also exposes browser contexts, making it possible to efficiently parallelize test execution."),Object(p.b)("li",{parentName:"ul"},"Puppeteer shines when it comes to debugging: flip the \u201cheadless\u201d bit to false, add \u201cslowMo\u201d, and you\u2019ll see what the browser is doing. You can even open Chrome DevTools to inspect the test environment.")),Object(p.b)("h4",{id:"q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy"},"Q: Why doesn\u2019t Puppeteer v.XXX work with Chromium v.YYY?"),Object(p.b)("p",null,"We see Puppeteer as an ",Object(p.b)("strong",{parentName:"p"},"indivisible entity")," with Chromium. Each version of Puppeteer bundles a specific version of Chromium \u2013 ",Object(p.b)("strong",{parentName:"p"},"the only")," version it is guaranteed to work with."),Object(p.b)("p",null,"This is not an artificial constraint: A lot of work on Puppeteer is actually taking place in the Chromium repository. Here\u2019s a typical story:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"A Puppeteer bug is reported: ",Object(p.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/2709"},"https://github.com/puppeteer/puppeteer/issues/2709")),Object(p.b)("li",{parentName:"ul"},"It turned out this is an issue with the DevTools protocol, so we\u2019re fixing it in Chromium: ",Object(p.b)("a",{parentName:"li",href:"https://chromium-review.googlesource.com/c/chromium/src/+/1102154"},"https://chromium-review.googlesource.com/c/chromium/src/+/1102154")),Object(p.b)("li",{parentName:"ul"},"Once the upstream fix is landed, we roll updated Chromium into Puppeteer: ",Object(p.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/pull/2769"},"https://github.com/puppeteer/puppeteer/pull/2769"))),Object(p.b)("p",null,"However, oftentimes it is desirable to use Puppeteer with the official Google Chrome rather than Chromium. For this to work, you should install a ",Object(p.b)("inlineCode",{parentName:"p"},"puppeteer-core")," version that corresponds to the Chrome version."),Object(p.b)("p",null,"For example, in order to drive Chrome 71 with puppeteer-core, use ",Object(p.b)("inlineCode",{parentName:"p"},"chrome-71")," npm tag:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"npm install puppeteer-core@chrome-71\n")),Object(p.b)("h4",{id:"q-which-chromium-version-does-puppeteer-use"},"Q: Which Chromium version does Puppeteer use?"),Object(p.b)("p",null,"Look for the ",Object(p.b)("inlineCode",{parentName:"p"},"chromium")," entry in ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/revisions.ts"},"revisions.ts"),". To find the corresponding Chromium commit and version number, search for the revision prefixed by an ",Object(p.b)("inlineCode",{parentName:"p"},"r")," in ",Object(p.b)("a",{parentName:"p",href:"https://omahaproxy.appspot.com/"},"OmahaProxy"),'\'s "Find Releases" section.'),Object(p.b)("h4",{id:"q-which-firefox-version-does-puppeteer-use"},"Q: Which Firefox version does Puppeteer use?"),Object(p.b)("p",null,"Since Firefox support is experimental, Puppeteer downloads the latest ",Object(p.b)("a",{parentName:"p",href:"https://wiki.mozilla.org/Nightly"},"Firefox Nightly")," when the ",Object(p.b)("inlineCode",{parentName:"p"},"PUPPETEER_PRODUCT")," environment variable is set to ",Object(p.b)("inlineCode",{parentName:"p"},"firefox"),". That's also why the value of ",Object(p.b)("inlineCode",{parentName:"p"},"firefox")," in ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/revisions.ts"},"revisions.ts")," is ",Object(p.b)("inlineCode",{parentName:"p"},"latest")," -- Puppeteer isn't tied to a particular Firefox version."),Object(p.b)("p",null,"To fetch Firefox Nightly as part of Puppeteer installation:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},'PUPPETEER_PRODUCT=firefox npm i puppeteer\n# or "yarn add puppeteer"\n')),Object(p.b)("h4",{id:"q-whats-considered-a-navigation"},"Q: What\u2019s considered a \u201cNavigation\u201d?"),Object(p.b)("p",null,"From Puppeteer\u2019s standpoint, ",Object(p.b)("strong",{parentName:"p"},"\u201cnavigation\u201d is anything that changes a page\u2019s URL"),".\nAside from regular navigation where the browser hits the network to fetch a new document from the web server, this includes ",Object(p.b)("a",{parentName:"p",href:"https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid"},"anchor navigations")," and ",Object(p.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"History API")," usage."),Object(p.b)("p",null,"With this definition of \u201cnavigation,\u201d ",Object(p.b)("strong",{parentName:"p"},"Puppeteer works seamlessly with single-page applications.")),Object(p.b)("h4",{id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event"},'Q: What\u2019s the difference between a \u201ctrusted" and "untrusted" input event?'),Object(p.b)("p",null,"In browsers, input events could be divided into two big groups: trusted vs. untrusted."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Trusted events"),": events generated by users interacting with the page, e.g. using a mouse or keyboard."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Untrusted event"),": events generated by Web APIs, e.g. ",Object(p.b)("inlineCode",{parentName:"li"},"document.createEvent")," or ",Object(p.b)("inlineCode",{parentName:"li"},"element.click()")," methods.")),Object(p.b)("p",null,"Websites can distinguish between these two groups:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"using an ",Object(p.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted"},Object(p.b)("inlineCode",{parentName:"a"},"Event.isTrusted"))," event flag"),Object(p.b)("li",{parentName:"ul"},"sniffing for accompanying events. For example, every trusted ",Object(p.b)("inlineCode",{parentName:"li"},"'click'")," event is preceded by ",Object(p.b)("inlineCode",{parentName:"li"},"'mousedown'")," and ",Object(p.b)("inlineCode",{parentName:"li"},"'mouseup'")," events.")),Object(p.b)("p",null,"For automation purposes it\u2019s important to generate trusted events. ",Object(p.b)("strong",{parentName:"p"},"All input events generated with Puppeteer are trusted and fire proper accompanying events.")," If, for some reason, one needs an untrusted event, it\u2019s always possible to hop into a page context with ",Object(p.b)("inlineCode",{parentName:"p"},"page.evaluate")," and generate a fake event:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(() => {\n  document.querySelector('button[type=submit]').click();\n});\n")),Object(p.b)("h4",{id:"q-what-features-does-puppeteer-not-support"},"Q: What features does Puppeteer not support?"),Object(p.b)("p",null,"You may find that Puppeteer does not behave as expected when controlling pages that incorporate audio and video. (For example, ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/issues/291"},"video playback/screenshots is likely to fail"),".) There are two reasons for this:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Puppeteer is bundled with Chromium \u2014 not Chrome \u2014 and so by default, it inherits all of ",Object(p.b)("a",{parentName:"li",href:"https://www.chromium.org/audio-video"},"Chromium's media-related limitations"),". This means that Puppeteer does not support licensed formats such as AAC or H.264. (However, it is possible to force Puppeteer to use a separately-installed version Chrome instead of Chromium via the ",Object(p.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/blob/v10.0.0/docs/api.md#puppeteerlaunchoptions"},Object(p.b)("inlineCode",{parentName:"a"},"executablePath")," option to ",Object(p.b)("inlineCode",{parentName:"a"},"puppeteer.launch")),". You should only use this configuration if you need an official release of Chrome that supports these media formats.)"),Object(p.b)("li",{parentName:"ul"},"Since Puppeteer (in all configurations) controls a desktop version of Chromium/Chrome, features that are only supported by the mobile version of Chrome are not supported. This means that Puppeteer ",Object(p.b)("a",{parentName:"li",href:"https://caniuse.com/#feat=http-live-streaming"},"does not support HTTP Live Streaming (HLS)"),".")),Object(p.b)("h4",{id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help"},"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?"),Object(p.b)("p",null,"We have a ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md"},"troubleshooting")," guide for various operating systems that lists the required dependencies."),Object(p.b)("h4",{id:"q-how-do-i-trytest-a-prerelease-version-of-puppeteer"},"Q: How do I try/test a prerelease version of Puppeteer?"),Object(p.b)("p",null,"You can check out this repo or install the latest prerelease from npm:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"npm i --save puppeteer@next\n")),Object(p.b)("p",null,"Please note that prerelease may be unstable and contain bugs."),Object(p.b)("h4",{id:"q-i-have-more-questions-where-do-i-ask"},"Q: I have more questions! Where do I ask?"),Object(p.b)("p",null,"There are many ways to get help on Puppeteer:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues"},"bugtracker")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/puppeteer"},"Stack Overflow"))),Object(p.b)("p",null,"Make sure to search these channels before posting your question."))}c.isMDXComponent=!0},2836:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=b(a),m=n,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||p;return a?r.a.createElement(h,i(i({ref:t},l),{},{components:a})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<p;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);