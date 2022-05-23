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
})({"5079T":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a7973dddef0855b0";
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

},{}],"6zV3G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _common = require("../../layouts/common");
var _commonDefault = parcelHelpers.interopDefault(_common);
var _mesh = require("~/ui/mesh");
var _meshDefault = parcelHelpers.interopDefault(_mesh);
exports.default = {
    template: `
    <div class="content">
      <a class="back" href="/home" link>product!!!!</a>
      <a class="next" href="/product/8" link>product!!!!</a>
      <div class="map"></div>
    </div>`,
    layout: _commonDefault.default,
    nodes () {
        return {
            back: {
                textContent: ()=>{
                    return JSON.stringify(this.navigate);
                }
            },
            map: {
                component: {
                    src: _meshDefault.default
                }
            }
        };
    },
    routeUpdate (from, to) {
        console.log(from, to);
    // this.navigate.push('/dhdfdfhdfhdf')
    },
    mounted () {
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../layouts/common":"lvaUR","~/ui/mesh":"6miF5"}],"lvaUR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lesteSvg = require("url:./leste.svg");
var _lesteSvgDefault = parcelHelpers.interopDefault(_lesteSvg);
var _button = require("~/ui/button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _dropdown = require("~/ui/dropdown");
var _dropdownDefault = parcelHelpers.interopDefault(_dropdown);
var _icon = require("~/ui/icon");
var _menuJs = require("./menu.js");
var _menuJsDefault = parcelHelpers.interopDefault(_menuJs);
exports.default = {
    template: `
    <header class="header">
      <a href="/" link><img src="" class="logo"></a>
      <div class="sideNav"></div>
      <nav class="nav"></nav>
      <div class="wr-menu">
        <div class="menuNav"></div>
        <div class="menu-dropdown"></div>
      </div>
      <div class="wr-lang">
        <div class="lang"></div>
        <div class="lang-dropdown"></div>
      </div>
    </header>
    <div class="wrapper"></div>
    <footer></footer>`,
    nodes () {
        return {
            header: {
            },
            logo: {
                src: _lesteSvgDefault.default // return new URL('./leste-logo-mini.png', import.meta.url) as any as string
            },
            nav: {
                innerHTML: _menuJsDefault.default.reduce((html, a)=>a.nav ? html + `<a href="${a.url}" link>${a.name}</a>` : html
                , '')
            },
            'menu-dropdown': {
                component: {
                    src: _dropdownDefault.default,
                    proxies: {
                        toggle: true
                    },
                    params: {
                        triggerSelector: '.wr-menu',
                        content: _menuJsDefault.default.reduce((html, a)=>html + `
            <div>
            <h3><a href="${a.url}">${a.name}</a></h3>
            <span>${a.desc}</span>
            </div>
            `
                        , '')
                    }
                }
            },
            'lang-dropdown': {
                component: {
                    src: _dropdownDefault.default,
                    proxies: {
                        toggle: true
                    },
                    params: {
                        triggerSelector: '.wr-lang',
                        content: [
                            'English',
                            'Русский',
                            'Français'
                        ].reduce((html, ln)=>html + `
            <div>
            <h3>${ln}</h3>
            <span><a>Contribute</a></span>
            </div>
            `
                        , '')
                    }
                }
            },
            sideNav: {
                component: {
                    src: _buttonDefault.default,
                    params: {
                        icon: _icon.iconGenerate('1111100000111110000011111')
                    },
                    methods: {
                        action: ()=>{
                            document.body.classList.add('open');
                        }
                    }
                }
            },
            menuNav: {
                component: {
                    src: _buttonDefault.default,
                    params: {
                        icon: _icon.iconGenerate('0000000000101010000000000')
                    },
                    methods: {
                        action: ()=>{
                            this.node['menu-dropdown'].proxy.toggle = true;
                        }
                    }
                }
            },
            lang: {
                component: {
                    src: _buttonDefault.default,
                    params: {
                        icon: _icon.iconGenerate('0100011111001010011100101')
                    },
                    proxies: {
                        label: 'Languages'
                    },
                    methods: {
                        action: ()=>{
                            this.node['lang-dropdown'].proxy.toggle = true;
                        }
                    }
                }
            }
        };
    },
    methods: {
    },
    mounted () {
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:./leste.svg":"6r9Ox","~/ui/button":"8dzdf","~/ui/icon":"dcE2L","~/ui/dropdown":"lcBYu","./menu.js":"7q7oY"}],"6r9Ox":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eo54y') + "leste.d494ee96.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8dzdf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    template: `
  <button class="l-button fx-b br0">
    <span class="icon"></span>
    <span class="l-preload"></span>
    <span class="label"></span>
  </button>`,
    props: {
        proxies: {
            color: {
            },
            label: {
            },
            active: {
            },
            hide: {
            },
            loading: {
            }
        },
        params: {
            name: {
            },
            label: {
            },
            icon: {
                default: ''
            }
        },
        methods: {
            action: {
            }
        }
    },
    nodes () {
        return {
            'l-button': {
                classes: {
                    hide: ()=>this.proxy.hide
                    ,
                    active: ()=>this.proxy.active
                },
                style: ()=>{
                    return {
                        background: this.proxy.color
                    };
                },
                onclick: ()=>{
                    this.method.action(this.param.name);
                }
            },
            'l-preload': {
                classes: {
                    'hide': ()=>!this.proxy.loading
                }
            },
            'icon': {
                classes: {
                    'hide': ()=>this.proxy.loading
                },
                innerHTML: ()=>this.param.icon
            },
            'label': {
                textContent: ()=>this.param.label || this.proxy.label
            }
        };
    },
    methods: {
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcE2L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iconGenerate", ()=>iconGenerate
);
function randomNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function iconGenerate(dec) {
    if (!dec) return;
    const hasPexel = (n)=>{
        return dec[n] === '1';
    };
    let icon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">`;
    let step = 0;
    if (dec === 'random') {
        const x1 = randomNumber(0, 4);
        const y1 = randomNumber(0, 4);
        const x2 = x1 + randomNumber(1, 3);
        const y2 = y1 + randomNumber(1, 3);
        for(let y = 0; y < 5; y++)for(let x = 0; x < 5; x++){
            icon += `<rect x="${x * 20}" y="${y * 20}" width="20" height="20" fill="${x >= x1 && x <= x2 && y >= y1 && y <= y2 ? 'none' : ''}" shape-rendering="crispEdges"/>`;
            step++;
        }
    } else {
        for(let y = 0; y < 5; y++)for(let x = 0; x < 5; x++){
            icon += `<rect x="${x * 20}" y="${y * 20}" width="20" height="20" fill="${hasPexel(step) ? '' : 'none'}" shape-rendering="crispEdges"/>`;
            step++;
        }
    }
    return icon + '</svg>';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lcBYu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    template: `
  <div class="l-dropdown">
    <div class="l-window"></div>
  </div>`,
    props: {
        proxies: {
            toggle: {
            },
            hide: {
                default: true
            }
        },
        params: {
            triggerSelector: {
                required: true
            },
            content: {
            }
        }
    },
    handlers: {
        toggle () {
            this.proxy.hide = !this.proxy.hide;
        },
        hide (v) {
            v ? document.body.classList.remove('l-no-scroll') : document.body.classList.add('l-no-scroll');
        }
    },
    nodes () {
        return {
            'l-dropdown': {
                classes: {
                    hide: ()=>this.proxy.hide
                }
            },
            'l-window': {
                innerHTML: this.param.content
            }
        };
    },
    methods: {
    },
    mounted () {
        const trigger = document.body.querySelector(this.param.triggerSelector);
        trigger.classList.add('l-relative');
        document.body.addEventListener('click', (event)=>{
            if (!event.target.closest('.l-dropdown') && !event.target.closest(this.param.triggerSelector)) this.proxy.hide = true;
        }, true);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7q7oY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    {
        url: '/docs',
        name: 'Guide',
        desc: 'dfsd fsdg sdgsdgd',
        nav: true
    },
    {
        url: '/docs',
        name: 'Examples',
        desc: 'dfsd fsdg sdgsdgd',
        nav: true
    },
    {
        url: '/docs',
        name: 'UI components',
        desc: 'dfsd fsdg sdgsdgd',
        nav: true
    },
    {
        url: '/docs',
        name: 'Core doc',
        desc: 'dfsd fsdg sdgsdgd'
    },
    {
        url: '/docs',
        name: 'About',
        desc: 'dfsd fsdg sdgsdgd'
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6miF5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    template: `
    <table class="l-mesh">
      <tbody class="tbody"></tbody>
    </table>`,
    props: {
        proxies: {
            type: {
                default: 'default'
            }
        },
        params: {
            w: {
                default: 5
            },
            h: {
                default: 5
            }
        },
        methods: {
            action: {
            }
        }
    },
    nodes () {
        return {
            'tbody': {
                onclick: (event)=>{
                    event.target.closest('td') && event.target.classList.toggle(this.proxy.type);
                },
                innerHTML: ()=>{
                    let tbody = '';
                    for(let y = 0; y < this.param.h; y++){
                        tbody += '<tr>';
                        for(let x = 0; x < this.param.w; x++)tbody += '<td></td>';
                        tbody += '</tr>';
                    }
                    return tbody;
                }
            }
        };
    },
    methods: {
        tiles (y, x) {
            return this.node.tbody.children[y].children[x];
        },
        inf (y, x) {
            return this.node.tbody.children[y].children[x].className;
        },
        add (y, x, type) {
            this.method.tiles(y, x).classList.add(type);
        },
        remove (y, x, type) {
            this.method.tiles(y, x).classList.remove(type);
        },
        contains (y, x, type) {
            this.method.tiles(y, x).classList.contains(type);
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5079T"], null, "parcelRequirefcd5")

//# sourceMappingURL=product.ef0855b0.js.map
