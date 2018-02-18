/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes\">\n\n    <title>Micke :: Producer | DJ :: Washington, DC</title>\n    <meta name=\"description\" content=\"Micke - Producer | DJ :: based out of Washington, DC\">\n\n    <!-- See https://goo.gl/OOhYW5 -->\n    <link rel=\"manifest\" href=\"/manifest.json\">\n    <!--// Necessary for the serving. Wuher requires it. #nodroidsallowed //-->\n    <base href=\"/\" target=\"_self\">\n\n    <!-- // TODO: Automate MetaTags //-->\n    <meta property=\"og:url\"           content=\"https://djmicke.com/index.html\" />\n    <meta property=\"og:type\"          content=\"website\" />\n    <meta property=\"og:title\"         content=\"DJ Micke :: BuzzLife |  | Washington, D.C.\" />\n    <meta property=\"og:description\"   content=\"Micke is hitting the scene heavy with original tracks & collaborations with such artists as Sandra Collins & Andy Woldman. He has continued to evolve his 20 year music partnership with EJ, as Temporal Mental, in parallel to his solo career. Micke still represents Buzzlife, helping to remind those in the know of how amazing this music can truly be… \" />\n    <meta property=\"og:image\"         content=\"https://djmicke.com/img/MickeAtTransit.jpg\" />\n\n    <!--// Icon links //-->\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/img/apple-touch-icon.png?v=YAoGlWgkoE\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/img/favicon-32x32.png?v=YAoGlWgkoE\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"194x194\" href=\"/img/favicon-194x194.png?v=YAoGlWgkoE\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"/img/android-chrome-192x192.png?v=YAoGlWgkoE\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/img/favicon-16x16.png?v=YAoGlWgkoE\">\n    <link rel=\"mask-icon\" href=\"/img/safari-pinned-tab.svg?v=YAoGlWgkoE\" color=\"#3692a2\">\n    <link rel=\"shortcut icon\" href=\"/img/favicon.ico?v=YAoGlWgkoE\">\n    <meta name=\"apple-mobile-web-app-title\" content=\"DJ Micke\">\n    <meta name=\"application-name\" content=\"DJ Micke\">\n    <meta name=\"msapplication-TileColor\" content=\"#603cba\">\n    <meta name=\"msapplication-TileImage\" content=\"/img/mstile-144x144.png?v=YAoGlWgkoE\">\n    <meta name=\"msapplication-config\" content=\"/img/browserconfig.xml?v=YAoGlWgkoE\">\n    <meta name=\"theme-color\" content=\"#3692a2\">\n\n    <link rel=\"stylesheet\" href=\"/styles/fonts.css\">\n    <link href=\"https://fonts.googleapis.com/css?family=Archivo+Black|Comfortaa|Geo|Gruppo|Inconsolata\" rel=\"stylesheet\">\n\n    <!-- Global site tag (gtag.js) - Google Analytics -->\n    <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-113018662-1\"></script>\n\n    <style>\n      :root {\n        --font-title: \"Gruppo\",\"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        --font-disp: \"Comfortaa\",\"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        --font-copy: \"Geo\",\"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        --font-mono: \"Inconsolata\", monospace;\n\n        --fs-base: 1vw;\n        --fs-xs: .5em;\n        --fs-sm: .75em;\n        --fs-md: 1em;\n        --fs-lg: 1.5em;\n        --fs-xl: 2em;\n        --fs-xxl: 3em;\n\n        --header-height: calc( var(--fs-xxl) * 2 );\n        --footer-height: calc( var(--header-height) * .75 )\n      }\n      @media (max-width: 2500px) {\n        :root {\n          --fs-base: 1.2vw;\n          --fs-xs: .5em;\n          --fs-sm: .75em;\n          --fs-md: 1em;\n          --fs-lg: 1.5em;\n          --fs-xl: 2.25em;\n          --fs-xxl: 4em;\n        }\n      }\n      @media (max-width: 1500px) {\n        :root {\n          --fs-base: 1.3vw;\n          --fs-xs: .5em;\n          --fs-sm: .75em;\n          --fs-md: 1em;\n          --fs-lg: 1.5em;\n          --fs-xl: 2em;\n          --fs-xxl: 3em;\n        }\n      }\n      @media (max-width: 800px) {\n        :root {\n          --fs-base: 2.5vw;\n          --fs-xs: .69em;\n          --fs-sm: .8em;\n          --fs-md: 1em;\n          --fs-lg: 1.25em;\n          --fs-xl: 1.75em;\n          --fs-xxl: 2.5em;\n        }\n      }\n      @media (max-width: 500px) {\n        :root {\n          --fs-base: 5vw;\n          --fs-xs: .8em;\n          --fs-sm: .9em;\n          --fs-md: 1em;\n          --fs-lg: 1.125em;\n          --fs-xl: 1.25em;\n          --fs-xxl: 2em;\n        }\n      }\n      html {\n        font-size: var(--fs-base);\n      }\n      body {\n        height: 100vh;\n        padding: 0;\n        margin: 0;\n        background-color: rgb(33,33,33);\n        background-image:\n          url('/img/full-logo-white.png'),\n          linear-gradient(15deg, rgba(19, 84, 122, .75) 0%, rgba(128, 208, 199, .75) 100%),\n          url('/img/micke-multi.jpg'),\n          linear-gradient(to top, rgba(172, 203, 238, 1) 0%, rgba(231, 240, 253, .5) 100%),\n          url('/img/bnwmicke.jpg'),\n          linear-gradient(to top, rgba(168, 237, 234, 1) 0%, rgba(254, 214, 227, 1) 100%);\n          /* url('/img/graffgirl.jpg'), */\n          /* url('/img/zerologicalbumcover.jpg'), */\n        background-size:\n          50%,\n          auto,\n          125% auto,\n          auto,\n          cover,\n          auto;\n        background-attachment: fixed;\n        background-repeat: no-repeat;\n        background-position-y: 50%, 0%, 0%, 0%, 0%, 0%;\n        background-position-x: 50%, 0%, 0%, 0%, 0%, 0%;\n        font-family: var(--font-copy);\n      }\n      body.blue {\n        background-blend-mode:\n          soft-light,\n          darken,\n          screen,\n          hard-light,\n          luminosity,\n          normal;\n      }\n      body.red {\n        background-blend-mode:\n          difference,\n          exclusion,\n          overlay,\n          exclusion,\n          luminosity,\n          normal;\n      }\n      h1, h2 {\n        font-family: var(--font-title);\n      }\n      h3, h4, h5 {\n        font-family: var(--font-disp);\n      }\n      h1 {\n        font-size: var(--fs-xl);\n        font-style: normal;\n        font-variant: normal;\n      }\n      h2 {\n        font-size: var(--fs-lg);\n      }\n      h3 {\n        font-size: var(--fs-md);\n        font-style: normal;\n        font-variant: normal;\n      }\n      p {\n        font-family: var(--font-copy);\n        font-size: var(--fs-base);\n        font-style: normal;\n        font-variant: normal;\n      }\n      blockquote {\n        font-family: var(--font-disp);\n        font-size: var(--fs-lg);\n        font-style: normal;\n        font-variant: normal;\n      }\n      pre {\n        font-family: var(--font-pre);\n        font-size: var(--fs-sm);\n        font-style: normal;\n        font-variant: normal;\n      }\n    </style>\n  </head>\n  <body class=\"red\">\n    <djmicke-app>\n      <section slot=\"content\">\n        <djmicke-calendar calid=\"calamia.net_1ahfo3bdvlskjf9ounnmq6eius%40group.calendar.google.com\" apikey=\"AIzaSyDqjseE9IpG0QMnGqSvc5fMOQTIV04S0C0\">\n          <!-- cal = fetch(\"https://www.googleapis.com/calendar/v3/calendars/calamia.net_1ahfo3bdvlskjf9ounnmq6eius%40group.calendar.google.com/events?key=AIzaSyDqjseE9IpG0QMnGqSvc5fMOQTIV04S0C0\").then(r=>{headers = r.headers.keys(); return r.text()}).then(d=>console.log(cal=JSON.parse(d))) -->\n        </djmicke-calendar>\n        <djmicke-releases>\n          <djmicke-track\n            title=\"Zero Logic\" artwork=\"/img/zerologicalbumcover.jpg\" albums=\"[]\"\n            beatport=\"https://www.beatport.com/track/zero-logic-original-mix/9993445\"\n            itunes=\"https://itunes.apple.com/us/album/unfound-house/1315873813\"\n            spotify=\"\" soundcloud=\"\" release-date=\"\" artists=\"[]\" >\n        </djmicke-releases>\n        <djmicke-mixes scid=\"djmickedc\">\n          <djmicke-mix soundcloud=\"the-moon-micke-p1\" title=\"The Moon presents: Sandra Collins, Micke - LIVE - (Micke's Opening 120 Mins)\" date=\" 12/16/2017\">\n        </djmicke-mixes>\n        <!--<djmicke-info></djmicke-info>-->\n      </section>\n      <footer slot=\"footer\">\n      </footer>\n    </djmicke-app>\n    <!--scripts always go at the bottom... -->\n    <script type=\"module\" id=\"indexjs\" src=\"/index.js\"></script>\n    <script defer src=\"/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js\"></script>\n    <!-- It seems like we should load this up here... but we are also importing it in the index.js script... Where to load it? just one place. --> \n    <script type=\"module\" src=\"/src/djmicke-app/djmicke-app.js\"></script>\n    <script type=\"module\" src=\"/src/djmicke-app/djmicke-appbar.js\"></script>\n    <script type=\"module\" src=\"/src/djmicke-app/djmicke_Logo.js\"></script>\n  </body>\n</html>\n"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property 'bindings' of null\n    at Scope.moveBindingTo (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/scope/index.js:929:13)\n    at BlockScoping.updateScopeInfo (/mnt/c/Users/steve/Git/djmicke.com/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:364:17)\n    at BlockScoping.run (/mnt/c/Users/steve/Git/djmicke.com/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:330:12)\n    at PluginPass.BlockStatementSwitchStatementProgram (/mnt/c/Users/steve/Git/djmicke.com/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:70:24)\n    at newFn (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/visitors.js:223:21)\n    at NodePath._call (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/path/context.js:64:19)\n    at NodePath.call (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/path/context.js:38:17)\n    at NodePath.visit (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/path/context.js:99:12)\n    at TraversalContext.visitQueue (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/context.js:139:18)\n    at TraversalContext.visitSingle (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/context.js:98:19)\n    at TraversalContext.visit (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/context.js:180:19)\n    at Function.traverse.node (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/index.js:76:17)\n    at traverse (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/traverse/lib/index.js:46:12)\n    at transformFile (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/core/lib/transformation/index.js:107:27)\n    at runSync (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/core/lib/transformation/index.js:35:3)\n    at transformSync (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/core/lib/transform-sync.js:15:38)\n    at Object.transform (/mnt/c/Users/steve/Git/djmicke.com/node_modules/@babel/core/lib/transform.js:20:65)\n    at transpile (/mnt/c/Users/steve/Git/djmicke.com/node_modules/babel-loader/lib/index.js:55:20)\n    at Object.module.exports (/mnt/c/Users/steve/Git/djmicke.com/node_modules/babel-loader/lib/index.js:179:20)");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map