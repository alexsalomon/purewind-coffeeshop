!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},r={},n={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,u=function(e,t){for(var r,n=[],i=(o.test(t)?e+"/"+t:t).split("/"),u=0,c=i.length;u<c;u++)r=i[u],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},s=function(t){return function(r){var n=u(c(t),r);return e.require(n,t)}},a=function(e,t){var n=h&&h.createHot(e),i={id:e,exports:{},hot:n};return r[e]=i,t(i.exports,s(e),i),i.exports},l=function(e){return n[e]?l(n[e]):e},f=function(e,t){return l(u(c(e),t))},d=function(e,n){null==n&&(n="/");var o=l(e);if(i.call(r,o))return r[o].exports;if(i.call(t,o))return a(o,t[o]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};d.alias=function(e,t){n[t]=e};var p=/\.[^.\/]+$/,v=/\/index(\.[^\/]+)?$/,m=function(e){if(p.test(e)){var t=e.replace(p,"");i.call(n,t)&&n[t].replace(p,"")!==t+"/index"||(n[t]=e)}if(v.test(e)){var r=e.replace(v,"");i.call(n,r)||(n[r]=e)}};d.register=d.define=function(e,n){if(e&&"object"==typeof e)for(var o in e)i.call(e,o)&&d.register(o,e[o]);else t[e]=n,delete r[e],m(e)},d.list=function(){var e=[];for(var r in t)i.call(t,r)&&e.push(r);return e};var h=e._hmr&&new e._hmr(f,d,t,r);d._cache=r,d.hmr=h&&h.wrap,d.brunch=!0,e.require=d}}(),function(){"undefined"==typeof window?this:window;require.register("js/initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=t("./util/router"),o=n(i),u=t("./routes/common"),c=n(u),s=t("./routes/home"),a=n(s),l=new o["default"]({common:c["default"],home:a["default"]});document.addEventListener("DOMContentLoaded",function(){return l.loadEvents()})}),require.register("js/routes/common.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={init:function(){function e(){var e=document.querySelector(".menu-overlay"),t=document.querySelector(".navbar-burger__icon");document.documentElement.classList.toggle("noscroll"),t.classList.toggle("open"),t.classList.contains("open")?(e.scrollTop=0,e.style.height="100%"):e.style.height="0%"}var t=document.querySelector(".navbar-burger");t.addEventListener("click",e)},finalize:function(){}}}),require.register("js/routes/home.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={init:function(){},finalize:function(){}}}),require.register("js/util/camelCase.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(e){return""+e.charAt(0).toLowerCase()+e.replace(/[\W_]/g,"|").split("|").map(function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)}).join("").slice(1)}}),require.register("js/util/router.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=t("./camelCase"),c=n(u),s=function(){function e(t){i(this,e),this.routes=t}return o(e,[{key:"fire",value:function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"init",n=arguments[2],t=""!==e&&this.routes[e]&&"function"==typeof this.routes[e][r];t&&this.routes[e][r](n)}},{key:"loadEvents",value:function(){var e=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(c["default"]).forEach(function(t){e.fire(t),e.fire(t,"finalize")}),this.fire("common","finalize")}}]),e}();e["default"]=s}),require.register("___globals___",function(e,t,r){})}(),require("___globals___");