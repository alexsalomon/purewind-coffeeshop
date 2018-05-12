(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("js/initialize.js", function(exports, require, module) {

"use strict";

var _router = require('./util/router');

var _router2 = _interopRequireDefault(_router);

var _common = require('./routes/common');

var _common2 = _interopRequireDefault(_common);

var _home = require('./routes/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = new _router2.default({
    common: _common2.default,
    home: _home2.default
});

// Load Events
document.addEventListener('DOMContentLoaded', function () {
    return routes.loadEvents();
});
});

require.register("js/routes/common.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        // JavaScript to be fired on all pages
    },
    finalize: function finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
    }
};
});

require.register("js/routes/home.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        // JavaScript to be on the home page
    },
    finalize: function finalize() {
        // JavaScript to be fired on the home pages, after init
    }
};
});

require.register("js/util/camelCase.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
exports.default = function (str) {
  return '' + str.charAt(0).toLowerCase() + str.replace(/[\W_]/g, '|').split('|').map(function (part) {
    return '' + part.charAt(0).toUpperCase() + part.slice(1);
  }).join('').slice(1);
};
});

require.register("js/util/router.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _camelCase = require('./camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing
 */
var Router = function () {

    /**
     * Create a new Router
     * @param {Object} routes
     */
    function Router(routes) {
        _classCallCheck(this, Router);

        this.routes = routes;
    }

    /**
     * Fire Router events
     * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
     * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
     * @param {string} [arg] Any custom argument to be passed to the event.
     */


    _createClass(Router, [{
        key: 'fire',
        value: function fire(route) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';
            var arg = arguments[2];

            var fire = route !== '' && this.routes[route] && typeof this.routes[route][event] === 'function';
            if (fire) {
                this.routes[route][event](arg);
            }
        }

        /**
         * Automatically load and fire Router events
         *
         * Events are fired in the following order:
         *  * common init
         *  * page-specific init
         *  * page-specific finalize
         *  * common finalize
         */

    }, {
        key: 'loadEvents',
        value: function loadEvents() {
            var _this = this;

            // Fire common init JS
            this.fire('common');

            // Fire page-specific init JS, and then finalize JS
            document.body.className.toLowerCase().replace(/-/g, '_').split(/\s+/).map(_camelCase2.default).forEach(function (className) {
                _this.fire(className);
                _this.fire(className, 'finalize');
            });

            // Fire common finalize JS
            this.fire('common', 'finalize');
        }
    }]);

    return Router;
}();

exports.default = Router;
});

;require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map