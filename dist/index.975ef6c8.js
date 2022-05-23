// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _styles = require("~/demos/todolist/styles");
var _leste = require("~/leste");
var _lesteDefault = parcelHelpers.interopDefault(_leste);
// mount(root, component)
// or
var _routes = require("~/demos/todolist/routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
var _router = require("~/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
const root = document.querySelector('#root');
window.$root = root;
new _routerDefault.default(_routesDefault.default, root, _lesteDefault.default);

},{"~/demos/todolist/styles":"9YWtW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","~/demos/todolist/routes":"jQX0o","~/router":"iszPe","~/leste":"6PCD9"}],"9YWtW":[function(require,module,exports) {
var _uiCss = require("~/ui/ui.css");
var _indexPcss = require("~/ui/sidebar/index.pcss");
var _indexPcss1 = require("~/ui/card/index.pcss");
var _indexPcss2 = require("~/ui/image/index.pcss");
var _indexPcss3 = require("~/ui/input/index.pcss");
var _indexPcss4 = require("~/ui/button/index.pcss");
var _indexPcss5 = require("~/ui/dropdown/index.pcss");
var _indexPcss6 = require("~/ui/preload/index.pcss");
var _indexPcss7 = require("~/ui/progress/index.pcss");
var _indexPcss8 = require("~/ui/mesh/index.pcss");
var _indexCss = require("../components/forms/index.css");
var _indexPcss9 = require("../layouts/index.pcss"); //   const sheet = new CSSStyleSheet()
 //   sheet.replace(style.innerHTML)
 //   sheet.replaceSync(``)
 //   document.adoptedStyleSheets = [sheet]

},{"~/ui/ui.css":"cheaw","../components/forms/index.css":"PTICH","../layouts/index.pcss":"bYSR4","~/ui/sidebar/index.pcss":"agQYr","~/ui/card/index.pcss":"gsiHO","~/ui/image/index.pcss":"j8Kci","~/ui/input/index.pcss":"9lAst","~/ui/button/index.pcss":"7ggLY","~/ui/dropdown/index.pcss":"jP8PT","~/ui/preload/index.pcss":"jVLbC","~/ui/progress/index.pcss":"35b1N","~/ui/mesh/index.pcss":"6SrYi"}],"cheaw":[function() {},{}],"PTICH":[function() {},{}],"bYSR4":[function() {},{}],"agQYr":[function() {},{}],"gsiHO":[function() {},{}],"j8Kci":[function() {},{}],"9lAst":[function() {},{}],"7ggLY":[function() {},{}],"jP8PT":[function() {},{}],"jVLbC":[function() {},{}],"35b1N":[function() {},{}],"6SrYi":[function() {},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jQX0o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    {
        path: '',
        name: 'home',
        component: ()=>require("cedb37eb5f3404bb")
    },
    {
        path: 'guide',
        name: 'guide',
        component: ()=>require("8927920b2f1026ec")
    },
    {
        path: 'examples',
        name: 'examples',
        component: ()=>require("e87a948f85a6a78c")
    },
    {
        path: 'ui',
        name: 'ui',
        component: ()=>require("d91da332371a4812")
    },
    {
        path: 'documentation',
        name: 'documentation',
        component: ()=>require("f33933839824e4d1")
    },
    {
        path: 'about',
        name: 'about',
        component: ()=>require("ea272de2ab604817")
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","cedb37eb5f3404bb":"fAOa2","8927920b2f1026ec":"6rpNN","e87a948f85a6a78c":"9rjHk","d91da332371a4812":"2wZsD","f33933839824e4d1":"3Rrs0","ea272de2ab604817":"evNdl"}],"fAOa2":[function(require,module,exports) {
module.exports = Promise.all([
    require("./helpers/browser/html-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "home.5114f76f.html" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "home.b87a64cb.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "home.bba0791c.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root('j4lAn')
);

},{"./helpers/browser/html-loader":"8uW4v","./helpers/bundle-url":"lgJ39","./helpers/browser/css-loader":"1MWPE","./helpers/browser/js-loader":"61B45"}],"8uW4v":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return fetch(bundle).then(function(res) {
        return res.text();
    });
});

},{"../cacheLoader":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {
};
var cachedPreloads = {
};
var cachedPrefetches = {
};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1MWPE":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same link element twice (e.g. if it was already in the HTML)
        var existingLinks = document.getElementsByTagName('link');
        if ([].concat(existingLinks).some(function isCurrentBundle(link) {
            return link.href === bundle && link.rel.indexOf('stylesheet') > -1;
        })) {
            resolve();
            return;
        }
        var link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.href = bundle;
        link1.onerror = function(e) {
            link1.onerror = link1.onload = null;
            link1.remove();
            reject(e);
        };
        link1.onload = function() {
            link1.onerror = link1.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(link1);
    });
});

},{"../cacheLoader":"j49pS"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var script1 = document.createElement('script');
        script1.async = true;
        script1.type = 'text/javascript';
        script1.charset = 'utf-8';
        script1.src = bundle;
        script1.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script1.onerror = script1.onload = null;
            script1.remove();
            reject(error);
        };
        script1.onload = function() {
            script1.onerror = script1.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script1);
    });
});

},{"../cacheLoader":"j49pS"}],"6rpNN":[function(require,module,exports) {
module.exports = Promise.all([
    require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "guide.7ca1abc2.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "guide.2f422d4b.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root('9UztB')
);

},{"./helpers/browser/css-loader":"1MWPE","./helpers/bundle-url":"lgJ39","./helpers/browser/js-loader":"61B45"}],"9rjHk":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "examples.40682c6f.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('1rIz8')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"2wZsD":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "ui.fd0432c6.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('jV3X8')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"3Rrs0":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "documentation.53610623.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('eZ00r')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"evNdl":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "about.360ae626.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('8rLjX')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"iszPe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Router {
    constructor(routes, root, mount){
        this.current = {
            options: {
            },
            context: {
            },
            path: ''
        };
        this.mount = mount;
        this.routes = routes;
        this.root = root;
        this.from = {
        };
        this.to = {
        };
        this.links();
        this.addListener();
        this.update();
        this.layout = false;
    }
    setName(name) {
        this.root.setAttribute('name', name);
    }
    addListener() {
        window.addEventListener('popstate', ()=>{
            this.update();
        }, false);
    }
    links() {
        this.root.onclick = (event)=>{
            const a = event.target.closest('a[link]');
            if (a && a.href) {
                event.preventDefault();
                this.push(a.href);
            }
        };
    }
    params(slugs, parts) {
        const param = {
        };
        slugs && slugs.forEach((slug, index)=>{
            param[slug.substring(1)] = parts[index + 1];
        });
        return {
            path: parts[0],
            param
        };
    }
    push(path) {
        history.pushState(null, null, path);
        this.update();
    }
    async update() {
        const path = decodeURI(window.location.pathname + window.location.search).toString().replace(/\/$/, '').replace(/^\//, '');
        for (const route of this.routes)try {
            const slugs = route.path.match(/:\w+/g);
            const reg = new RegExp('^' + route.path.replace(/:\w+/g, '(\\w+)') + '$');
            const parts = path.match(reg);
            if (parts) {
                this.current.options.leave && this.current.options.leave.bind(this.current.context)(this.from, this.to);
                if (this.current.path === route.path) this.current.options.route && this.current.options.route.bind(this.current.context)(this.from, this.to);
                else {
                    document.title = route.title || 'Leste';
                    this.setName(route.name);
                    const file = await route.component();
                    const component = file.default;
                    this.current.path = route.path;
                    if (component.layout && !this.layout) {
                        await this.mount(this.root, component.layout);
                        this.layout = true;
                    }
                    this.current = await this.mount(this.root, component);
                    this.from = {
                        ...this.to
                    };
                    this.to = this.params(slugs, parts);
                    this.current.context.router = {
                        push: this.push.bind(this),
                        ...this.to
                    };
                    this.current.options.loaded && this.current.options.loaded.bind(this.current.context)(this.from, this.to);
                }
                break;
            }
        } catch (err) {
            console.log(err);
        }
    }
}
exports.default = Router;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6PCD9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _init = require("./init");
function contain(entry, nodeElement) {
    if (entry.template) {
        nodeElement.insertAdjacentHTML("beforeEnd", entry.template);
        return nodeElement.getAttribute('iterate') ? nodeElement.lastChild : nodeElement;
    } else if (entry.fragments) {
        for (const [key, fr] of Object.entries(entry.fragments)){
            const place = nodeElement.querySelector(`.${key}`);
            place.innerHTML = fr;
        }
        return nodeElement;
    }
}
async function mount(nodeElement, options, props = {
}) {
    if (options) {
        let component = new _init.Init(options);
        await component.created();
        component.stores();
        component.setters();
        component.handlers();
        component.params();
        const container = contain(options, nodeElement);
        container.unmount = async ()=>{
            container.remove();
            await component.unmounted();
        };
        component.props(props, container);
        component.methods(container);
        component.proxies();
        await component.nodes(container);
        await component.mounted();
        return {
            options,
            context: component.context
        };
    }
}
exports.default = mount;

},{"./init":"gbpBc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gbpBc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Init", ()=>Init
);
var _dipprox = require("../utils/dipprox");
var _delay = require("../utils/delay");
var _release = require("../utils/release");
var _releaseDefault = parcelHelpers.interopDefault(_release);
var _errors = require("../errors");
var _errorsDefault = parcelHelpers.interopDefault(_errors);
var _node = require("../node");
var _nodeDefault = parcelHelpers.interopDefault(_node);
class Init {
    constructor(component){
        this.component = component;
        this.paramsData = {
        };
        this.proxiesData = this.component.proxies ? _releaseDefault.default(this.component.proxies) : {
        };
        this.common = {
            refs: [],
            errors: _errorsDefault.default
        }, this.storesHadlers = {
        };
        this.context = {
            options: component,
            node: {
            },
            param: {
            },
            reactiveMap: {
            },
            method: {
            },
            proxy: {
            },
            setter: {
            },
            handler: {
            },
            source: component.sources,
            delay: _delay.delay
        };
    }
    async created() {
        this.component.created && await this.component.created.bind(this.context)();
    }
    async loaded() {
        this.component.loaded && await this.component.loaded.bind(this.context)();
    }
    async mounted() {
        this.component.mounted && await this.component.mounted.bind(this.context)();
    }
    async unmounted() {
        if (this.component.stores) for (let store of Object.values(this.component.stores))document.addEventListener(store.name, this.storesHadlers[store.name]);
        this.component.unmounted && await this.component.unmounted.bind(this.context)();
    }
    stores() {
        if (this.component.stores) for (let store of Object.values(this.component.stores)){
            if (store.params) {
                for(const key in store.params)if (key in this.component.props.params) this.context.param[key] = {
                    ...store.params[key]
                };
            }
            if (store.proxies) {
                for(const key in store.proxies)if (key in this.component.props.proxies) this.component.proxies[key] = _releaseDefault.default(store.proxies[key]);
            }
            if (store.methods) {
                for(const key in store.methods)if (key in this.component.props.methods) this.context.method[key] = (...args)=>store.methods[key].bind(store)(..._releaseDefault.default(args))
                ;
            }
            const name = store.name;
            const handler = (e)=>{
                const { path , value  } = e.detail;
                if (store.proxies && path[0] in this.component.props.proxies) {
                    let target = this.context.proxy;
                    if (path.length > 0) {
                        for(let i = 0; i < path.length - 1; i++)target = target[path[i]];
                        target[path[path.length - 1]] = value;
                    } else target[path[0]] = value;
                }
            };
            Object.assign(this.storesHadlers, {
                [name]: handler
            });
            document.addEventListener(name, handler, false);
        }
    }
    methods(container) {
        if (!container.method) container.method = {
        };
        if (this.component.methods) for (const [key, method] of Object.entries(this.component.methods)){
            this.context.method[key] = method.bind(this.context);
            container.method[key] = (...args)=>this.context.method[key](..._releaseDefault.default(args))
            ;
        }
    }
    setters() {
        if (this.component.setters) for(const key in this.component.setters)this.context.setter[key] = (v)=>this.component.setters[key].bind(this.context)(v)
        ;
    }
    handlers() {
        if (this.component.handlers) for(const key in this.component.handlers)this.context.handler[key] = (v)=>this.component.handlers[key].bind(this.context)(v)
        ;
    }
    params() {
        if (this.component.params) {
            this.paramsData = _releaseDefault.default(this.component.params);
            for(const key in this.paramsData)this.context.param[key] = this.paramsData[key];
        }
    }
    props(props, container) {
        if (!container.proxy) container.proxy = {
        };
        const context = this.context;
        if (this.component.props) {
            if (props.proxies && this.component.props.proxies) {
                for(const key in this.component.props.proxies)if (key in props.proxies) {
                    this.proxiesData[key] = props.proxies[key];
                    Object.defineProperty(container.proxy, key, {
                        set (value) {
                            context.proxy[key] = _releaseDefault.default(value);
                        }
                    });
                } else this.proxiesData[key] = undefined;
            }
            if (props.methods && this.component.props.methods) {
                for(const key in props.methods)if (key in this.component.props.methods) this.context.method[key] = props.methods[key];
            }
            if (props.params && this.component.props.params) {
                for(const key in this.component.props.params)if (key in props.params) this.context.param[key] = _releaseDefault.default(props.params[key]);
                else this.context.param[key] = undefined;
            }
            this.validation();
        }
    }
    validation() {
        if (this.component.props.proxies) for (const [key, pr] of Object.entries(this.component.props.proxies)){
            if (this.proxiesData[key] === undefined || this.proxiesData[key] === null) this.proxiesData[key] = pr.default;
            if (this.component.props.proxies[key].type) {
                if (!typeof this.proxiesData[key] === this.component.props.proxies[key].type) console.error('Error props type');
            }
        }
        if (this.component.props.methods) for(const key1 in this.component.props.methods){
            if (typeof this.component.props.methods !== 'object') console.error('Error props type');
            else if (this.component.props.methods[key1].instance && this.context.method[key1] instanceof this.component.props.methods[key1].instance) console.error('Error props instance');
        }
        if (this.component.props.params) for (const [key2, pr1] of Object.entries(this.component.props.params)){
            if (this.context.param[key2] === undefined || this.context.param[key2] === null) this.context.param[key2] = pr1.default;
            if (this.component.props.params[key2].type) {
                if (!typeof this.context.param[key2] === this.component.props.params[key2].type) console.error('Error props type');
            }
        }
    }
    proxies() {
        const self = this;
        this.context.proxy = _dipprox.dipprox(_releaseDefault.default(this.proxiesData), {
            beforeSet (target, path, value, ref) {
                return self.context.setter[ref]?.bind(self.context)(value);
            },
            async set (target, path, value, ref) {
                if (self.context.reactiveMap) {
                    for(const keyNode in self.context.reactiveMap)for(const name in self.context.reactiveMap[keyNode]){
                        const actives = self.context.reactiveMap[keyNode][name][ref];
                        if (actives?.length) for (const active of actives)await active(target, path, value);
                    }
                }
                return self.context.handler[ref]?.bind(self.context)(value);
            },
            get (target, path) {
                self.common.refs.push(path.join('_'));
            },
            deleteProperty (target, path) {
                console.log('delete', path.join('_'));
            }
        });
    }
    async nodes(container) {
        if (this.component.nodes) {
            const nodes = this.component.nodes.bind(this.context)();
            for await (const [keyNode, options] of Object.entries(nodes)){
                const nodeElement = container.querySelector(`.${keyNode}`) || container.classList.contains(keyNode) && container;
                Object.assign(this.context.node, {
                    [keyNode]: nodeElement
                });
                if (options) {
                    const node = new _nodeDefault.default(options, keyNode, this.context, nodeElement, this.common);
                    for await (const [key, callback] of Object.entries(options)){
                        node.native(key, callback);
                        if (key in node) await node[key](keyNode, callback);
                    }
                }
            }
        }
    }
}

},{"../utils/dipprox":"bgX7m","../utils/delay":"659j8","../utils/release":"4b4N1","../errors":"jgKN2","../node":"5WAPF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgX7m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dipprox", ()=>dipprox
);
function dipprox(target1, handler) {
    const preproxy = new WeakMap();
    function makeHandler(p) {
        return {
            set (target, key, value, receiver) {
                const path = [
                    ...p,
                    key
                ];
                const ref = path.join('_');
                if (handler.beforeSet) value = handler.beforeSet(target, path, value, ref) || value;
                if (value && typeof value === 'object') value = proxify(value, path);
                target[key] = value;
                if (handler.set) handler.set(target, path, value, ref);
                return true;
            },
            get (target, key) {
                if (handler.get) handler.get(target, [
                    ...p,
                    key
                ]);
                return target[key];
            },
            deleteProperty (target, key) {
                if (Reflect.has(target, key)) {
                    unproxy(target, key);
                    let deleted = Reflect.deleteProperty(target, key);
                    if (deleted && handler.deleteProperty) handler.deleteProperty(target, [
                        ...p,
                        key
                    ]);
                    return deleted;
                }
                return false;
            },
            getPrototypeOf (target) {
                return {
                    target,
                    instance: 'Proxy'
                };
            }
        };
    }
    function unproxy(obj, key) {
        if (preproxy.has(obj[key])) {
            obj[key] = preproxy.get(obj[key]);
            preproxy.delete(obj[key]);
        }
        for (let k of Object.keys(obj[key]))if (obj[key][k] != null && typeof obj[key][k] === 'object') unproxy(obj[key], k);
    }
    function proxify(obj, path) {
        for (const key of Object.keys(obj))if (obj[key] && typeof obj[key] === 'object') obj[key] = proxify(obj[key], [
            ...path,
            key
        ]);
        const p = new Proxy(obj, makeHandler(path));
        preproxy.set(p, obj);
        return p;
    }
    return proxify(target1, []);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"659j8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay
);
let timer = null;
function delay(callback, delay1) {
    clearTimeout(timer);
    return new Promise((resolve)=>{
        timer = setTimeout(()=>{
            callback && callback();
            clearTimeout(timer);
            resolve();
        }, delay1 || 0);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4b4N1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function release(data) {
    if (!data) return data;
    if (data instanceof HTMLCollection || data instanceof NodeList || data instanceof Element) return data;
    return JSON.parse(JSON.stringify(data));
}
exports.default = release;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jgKN2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    'Error props type',
    'Node with ingrate must bu empty'
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5WAPF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classes = require("./classes");
var _nativeProperty = require("./nativeProperty");
var _nativePropertyDefault = parcelHelpers.interopDefault(_nativeProperty);
var _component = require("./component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class Node {
    constructor(node, keyNode, context, nodeElement, common){
        this.node = node;
        this.keyNode = keyNode;
        this.context = context;
        this.common = common;
        this.refs = common.refs;
        this.nodeElement = nodeElement;
        this.nodeElement.reactive = (refs, name, active)=>{
            if (refs.length) {
                if (!(this.keyNode in this.context.reactiveMap)) this.context.reactiveMap[this.keyNode] = {
                };
                refs.forEach((ref)=>{
                    if (!(name in this.context.reactiveMap[this.keyNode])) this.context.reactiveMap[this.keyNode][name] = {
                    };
                    if (!(ref in this.context.reactiveMap[this.keyNode][name])) this.context.reactiveMap[this.keyNode][name][ref] = [];
                    this.context.reactiveMap[this.keyNode][name][ref].push(active);
                });
            }
        };
    }
}
Object.assign(Node.prototype, {
    classes: _classes.classes
});
Object.assign(Node.prototype, _nativePropertyDefault.default);
Object.assign(Node.prototype, _componentDefault.default);
exports.default = Node;

},{"./classes":"6uqxk","./nativeProperty":"aIOOP","./component":"3rQju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uqxk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classes", ()=>classes
);
function classes() {
    for (const [cl, v] of Object.entries(this.node.classes)){
        const active = ()=>{
            if (v()) this.nodeElement.classList.add(cl);
            else this.nodeElement.classList.remove(cl);
        };
        this.refs.length = 0;
        active();
        this.nodeElement.reactive(this.refs, 'classes', active);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIOOP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function debounce(fn, timeout = 300) {
    let timer;
    return (...args)=>{
        if (!timer) fn.apply(this, args);
        clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = null;
        }, timeout);
    };
}
function listeners(key, value) {
    if (typeof value === 'function') this.nodeElement[key] = (event)=>this.node[key].bind(this.context)(event, debounce)
    ;
}
function general(key, value) {
    if (typeof value === 'function') {
        const active = ()=>{
            const val = value.bind(this.context)();
            if (typeof val === 'object') Object.assign(this.nodeElement[key], val);
            else this.nodeElement[key] = val;
        };
        this.refs.length = 0;
        active();
        this.nodeElement.reactive(this.refs, key, active);
    } else this.nodeElement[key] = value;
}
function native(key, value) {
    if (key in this.nodeElement) {
        if (key.substr(0, 2) === 'on') this.listeners(key, value);
        else this.general(key, value);
    }
}
exports.default = {
    native,
    listeners,
    general
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3rQju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _simple = require("./simple");
var _simpleDefault = parcelHelpers.interopDefault(_simple);
var _index = require("./iterate/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _induce = require("./induce");
var _induceDefault = parcelHelpers.interopDefault(_induce);
var _component = require("./component");
async function component() {
    this.nodeElement.advance = async (options)=>{
        const component1 = new this.Component(options, this.context, this.keyNode, this.nodeElement, this.common);
        await component1.create(options.src, options.proxies, null, true);
    };
    this.nodeElement.integrate = async (options)=>{
        const { component: component2 , proxies  } = this.simple(options);
        await component2.create(options.src, proxies);
    };
    if (this.node.component.data) await this.iterate();
    else if (this.node.component.precept) await this.induce();
    else {
        const { component: component3 , proxies  } = this.simple();
        await component3.create(this.node.component.src, proxies);
    }
}
exports.default = {
    Component: _component.Component,
    component,
    simple: _simpleDefault.default,
    iterate: _indexDefault.default,
    induce: _induceDefault.default
};

},{"./simple":"3Yrfo","./iterate/index":"42kR2","./induce":"aM2AX","./component":"9ov6N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Yrfo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function simple(options) {
    const component = new this.Component(options || this.node.component, this.context, this.keyNode, this.nodeElement, this.common);
    const proxies = {
    };
    const props = options?.proxies || this.node.component.proxies;
    if (props) {
        for (const [pr, v] of Object.entries(props))if (typeof v === 'function' && v.name) {
            this.refs.length = 0;
            Object.assign(proxies, {
                [pr]: v()
            });
            this.nodeElement.reactive(this.refs, 'component', ()=>{
                const value = v();
                this.nodeElement.proxy[pr] = value;
            });
        } else Object.assign(proxies, {
            [pr]: v
        });
    }
    return {
        component,
        proxies
    };
}
exports.default = simple;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"42kR2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iterator = require("./Iterator");
async function iterate() {
    if (this.nodeElement.innerHTML === '') {
        const propProxies = (data, index4)=>{
            const proxies = {
            };
            if (this.node.component.proxies) {
                for (const [pr, v] of Object.entries(this.node.component.proxies))if (typeof v === 'function' && v.name) {
                    this.refs.length = 0;
                    if (v.length) Object.assign(proxies, {
                        [pr]: v(data[index4], index4)
                    });
                    else Object.assign(proxies, {
                        [pr]: v()
                    });
                    this.nodeElement.reactive(this.refs, 'component', (t, p)=>{
                        const index = p[1] // убедится в имени массива
                        ;
                        if (index) this.nodeElement.children[index].proxy[pr] = v(data[index], index);
                        else for(let index3 = 0; index3 < this.nodeElement.children.length; index3++)this.nodeElement.children[index3].proxy[pr] = v(data[index3], index3);
                    });
                }
            }
            return proxies;
        };
        this.refs.length = 0;
        let data1 = this.node.component.data;
        this.nodeElement.setAttribute('iterate', '');
        const component = new this.Component(this.node.component, this.context, this.keyNode, this.nodeElement, this.common);
        if (typeof data1 === 'number') ;
        else if (Object.getPrototypeOf(this.node.component.data).instance === 'Proxy') {
            const length = data1.length;
            const lengthPath = this.refs[0];
            const arrPath = lengthPath.split('_')[0];
            const create = async (index)=>{
                await component.create(this.node.component.src, propProxies(this.node.component.data, index), this.node.component.data[index], index);
            };
            const iterator = new _iterator.Iterator(this.nodeElement, this.node.component.proxies, this.node.component.data, create);
            this.nodeElement.reactive([
                arrPath
            ], 'component', (t, p, v)=>{
                this.node.component.data = v;
                iterator.set.bind(iterator)(v);
            });
            this.nodeElement.reactive([
                lengthPath
            ], 'component', (t, p, v)=>iterator.length.bind(iterator)(v)
            );
            if (length) for await (const [index5] of data1.entries())await create(index5);
        } else for await (const [index1, val] of data1.entries()){
            const proxies = propProxies(data1, index1);
            await component.create(this.node.component.src, proxies, val, index1);
        }
    } else {
        this.nodeElement.textContent = this.common.errors[1];
        console.error(this.common.errors[1]);
    }
}
exports.default = iterate;

},{"./Iterator":"21fJz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21fJz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Iterator", ()=>Iterator
);
class Iterator {
    constructor(node, props, data, append){
        this.nodeElement = node;
        this.props = props;
        this.append = append;
        this.data = data;
    }
    async length(length) {
        length > this.nodeElement.children.length && await this.add(length);
        length < this.nodeElement.children.length && this.remove(length);
    }
    async set(arr) {
        this.remove(0);
        await this.add(arr.length);
    }
    async add(length) {
        let qty = this.nodeElement.children.length;
        while(length > qty){
            await this.append(qty);
            qty++;
        }
    }
    remove(length) {
        let qty = this.nodeElement.children.length;
        while(length < qty){
            qty--;
            this.nodeElement.children[qty].unmount();
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aM2AX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function induce() {
    this.refs.length = 0;
    const precept = this.node.component.precept();
    this.nodeElement.reactive(this.refs, 'precept', async ()=>{
        if (this.node.component.precept()) {
            this.nodeElement.unmount();
            const { component , proxies  } = this.simple();
            await component.create(this.node.component.src, proxies);
        } else this.nodeElement.unmount();
    });
    if (precept) {
        const { component , proxies  } = this.simple();
        await component.create(this.node.component.src, proxies);
    }
}
exports.default = induce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ov6N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component
);
var _release = require("../../utils/release");
var _releaseDefault = parcelHelpers.interopDefault(_release);
var _index = require("../../index");
var _indexDefault = parcelHelpers.interopDefault(_index);
class Component {
    constructor(component, context, keyNode, nodeElement, common){
        this.common = common;
        this.component = component;
        this.context = context;
        this.keyNode = keyNode;
        this.nodeElement = nodeElement;
        this.props = {
            methods: {
            },
            proxies: {
            },
            params: {
            }
        };
    }
    get options() {
        return this.component;
    }
    propsMethods() {
        const methods = this.component.methods;
        if (methods) {
            for (const [pr, v] of Object.entries(methods))if (typeof v === 'function') Object.assign(this.props.methods, {
                [pr]: (...args)=>v.bind(this.context)(..._releaseDefault.default(args))
            });
        }
    }
    propsParams(val, index) {
        const params = this.component.params;
        if (params) {
            for (const [pr, v] of Object.entries(params))if (typeof v === 'function' && v.name) Object.assign(this.props.params, {
                [pr]: v(val, index)
            });
            else Object.assign(this.props.params, {
                [pr]: v
            }) // release(v) ||
            ;
        }
    }
    async load(src) {
        if (src instanceof Promise) {
            const res = await src;
            return res?.default;
        } else return await src;
    }
    async create(src, proxies, val, index) {
        try {
            this.propsMethods();
            this.propsParams(val, index);
            if (proxies) this.props.proxies = proxies;
            if (src) {
                const component = await this.load(src);
                await _indexDefault.default(this.nodeElement, component, this.props);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

},{"../../utils/release":"4b4N1","../../index":"6PCD9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequirefcd5")

//# sourceMappingURL=index.975ef6c8.js.map
