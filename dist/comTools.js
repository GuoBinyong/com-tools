!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.comTools=t():e.comTools=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,u=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){l=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return JSON.stringify(e)==JSON.stringify(t)}function u(e){var t=e.loopCall,n=e.complete,r=e.stepComplete,o=e.thisValue,i=e.total,u=void 0===i?Number.POSITIVE_INFINITY:i,l=e.step,a=void 0===l?50:l,f=e.delay,c=void 0===f?0:f,s=0,d=0,v=!1;function p(e){e&&(v=e,n&&n.call(o,v,s,d,u))}function y(){var e=s<u;return!e&&n&&n.call(o,!1,s-1,d,u),e}var b=null;return y()&&function e(){d++;for(var n=Math.min(s+a,u);s<n&&!v;)p(t.call(o,s,d,u)),s++;r&&p(r.call(o,s-1,d,u)),y()&&!v&&(b=setTimeout(e,c))}(),function(e){e||(e=!0),clearTimeout(b),p(e)}}n.r(t),n.d(t,"isEqualOfJSON",(function(){return i})),n.d(t,"multipleLoop",(function(){return u})),n.d(t,"safelyIterate",(function(){return a})),n.d(t,"getTypeOf",(function(){return f})),n.d(t,"getTypeStringOf",(function(){return c})),n.d(t,"defineListenableProperty",(function(){return s})),n.d(t,"defineListenableProperties",(function(){return d})),n.d(t,"defineListenablePropertyGetter",(function(){return v})),n.d(t,"createUniqueIdentifier",(function(){return p})),n.d(t,"createControllablePromise",(function(){return y}));var l={multipleLoop:{enumerable:!1,value:function(e){var t=this,n=e.loopCall,r=e.complete,o=e.stepComplete,i=e.thisValue,l=e.step,a=e.delay;i&&(i=this);var f={loopCall:function(e,r,o){return n.call(i,t[e],e,r,t)},total:this.length,step:l,delay:a};return r&&(f.complete=function(e,n,o,u){return r.call(i,e,n,o,t)}),o&&(f.stepComplete=function(e,n,r){return o.call(i,e,n,t)}),u(f)}}};function a(e,t,n){null==n&&(n=e);var o,i=[],u=r(e);try{for(u.s();!(o=u.n()).done;){var l=o.value;i.push(l)}}catch(e){u.e(e)}finally{u.f()}return i.filter((function(r){var o=this.indexOf(r);t.call(n,r,o,e)}),i)}function f(e){var t=e;return null!=e&&(t=e.constructor),t}function c(e){switch(e){case void 0:var t="undefined";break;case null:t="null";break;default:t=e.constructor.name}return t}function s(e,t,n){var r=n||{},o=r.ready,i=void 0===o?t+"Ready":o,u=r.noEvent,l=r.event,a=void 0===l?t+"Change":l,f=r.newValueKey,c=void 0===f?"value":f,s=r.oldValueKey,d=void 0===s?"oldValue":s,v=r.getDefault,p="_"+i,b="_"+t;if(Object.defineProperty(e,i,{configurable:!0,enumerable:!0,get:function(){var e=this||window;if(!e[p]){var t=e[b];e[p]=t?Promise.resolve(t):y()}return e[p]},set:function(e){(this||window)[p]=e}}),v)var m=function(){var e=this||window;return!e[b]&&v&&(e[t]=v.call(e,e)),e[b]};else m=function(){return(this||window)[b]};if(u)var h=function(e){var t=this||window;if(e&&e!==t[b]){t[b];t[b]=e;var n=t[i];n.resolve?n.resolve(e):t[i]=Promise.resolve(e)}};else h=function(e){var t=this||window;if(e&&e!==t[b]){var n=t[b];t[b]=e;var r=t[i];r.resolve?r.resolve(e):t[i]=Promise.resolve(e);var o=new Event(a,{bubbles:!0});o[c]=e,o[d]=n,window.dispatchEvent(o)}};return Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:m,set:h}),e}function d(e,t,n){var r=t;return Array.isArray(t)&&(r=t.reduce((function(e,t){return e[t]=n,e}),{})),Object.keys(r).forEach((function(t){var n=r[t];s(e,t,n)})),e}function v(e,t,n,r){var o="_"+t;if(r)var i=n;else i=n?function(){var e=this||window;return!e[o]&&n&&(e[t]=n.call(e,e)),e[o]}:function(){return(this||window)[o]};Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:i})}function p(){return(new Date).getTime().toString()+Math.random()}function y(e,t){var n="function"==typeof e;n&&null==t&&(t=!0);var r={};function o(){l.resolve=void 0,l.reject=void 0,l.clearAdditions=void 0}function i(e){o(),r.resolve(e)}function u(e){o(),r.reject(e)}var l=new Promise((function(o,l){if(r.resolve=o,r.reject=l,n){if(!t)return e(i,u);setTimeout(e,0,i,u)}}));return l.clearAdditions=o,l.resolve=i,l.reject=u,l}Object.defineProperties(Array.prototype,l)}])}));
//# sourceMappingURL=comTools.js.map