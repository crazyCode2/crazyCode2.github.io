(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"138":function(t,e,n){var o=n(139);"string"==typeof o&&(o=[[t.i,o,""]]);var i={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(22)(o,i);o.locals&&(t.exports=o.locals)},"139":function(t,e,n){(e=n(21)(!1)).push([t.i,'img[src=""] {\n  opacity: 0;\n}\n\n.taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px;\n}\n\n.taro-img.taro-img__widthfix {\n  height: 100%;\n}\n\n.taro-img__mode-scaletofill {\n  width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfit {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.taro-img__mode-aspectfill {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.taro-img__mode-aspectfill--width {\n  min-width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfill--height {\n  width: 100%;\n  min-height: 100%;\n}\n\n.taro-img__mode-widthfix {\n  width: 100%;\n}\n\n.taro-img__mode-top {\n  width: 100%;\n}\n\n.taro-img__mode-bottom {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-left {\n  height: 100%;\n}\n\n.taro-img__mode-right {\n  position: absolute;\n  height: 100%;\n  right: 0;\n}\n\n.taro-img__mode-topright {\n  position: absolute;\n  right: 0;\n}\n\n.taro-img__mode-bottomleft {\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}',""]),t.exports=e},"140":function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){"use strict";if("object"===("undefined"==typeof window?"undefined":n(window)))if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{"get":function get(){return this.intersectionRatio>0}});else{var t=window.document,e=[];IntersectionObserver.prototype.THROTTLE_TIMEOUT=100,IntersectionObserver.prototype.POLL_INTERVAL=null,IntersectionObserver.prototype.USE_MUTATION_OBSERVER=!0,IntersectionObserver.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({"element":t,"entry":null}),this._monitorIntersections(),this._checkForIntersections()}},IntersectionObserver.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},IntersectionObserver.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},IntersectionObserver.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},IntersectionObserver.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},IntersectionObserver.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{"value":parseFloat(e[1]),"unit":e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},IntersectionObserver.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(addEvent(window,"resize",this._checkForIntersections,!0),addEvent(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{"attributes":!0,"childList":!0,"characterData":!0,"subtree":!0}))))},IntersectionObserver.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,removeEvent(window,"resize",this._checkForIntersections,!0),removeEvent(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},IntersectionObserver.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{"top":0,"bottom":0,"left":0,"right":0,"width":0,"height":0};this._observationTargets.forEach(function(n){var o=n.element,i=getBoundingClientRect(o),r=this._rootContainsTarget(o),s=n.entry,a=t&&r&&this._computeTargetAndRootIntersection(o,e),c=n.entry=new IntersectionObserverEntry({"time":function now(){return window.performance&&performance.now&&performance.now()}(),"target":o,"boundingClientRect":i,"rootBounds":e,"intersectionRect":a});s?t&&r?this._hasCrossedThreshold(s,c)&&this._queuedEntries.push(c):s&&s.isIntersecting&&this._queuedEntries.push(c):this._queuedEntries.push(c)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},IntersectionObserver.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=window.getComputedStyle(e).display){for(var o,i,r,s,a,c,h,u,l=getBoundingClientRect(e),d=getParentNode(e),p=!1;!p;){var f=null,g=1==d.nodeType?window.getComputedStyle(d):{};if("none"==g.display)return;if(d==this.root||d==t?(p=!0,f=n):d!=t.body&&d!=t.documentElement&&"visible"!=g.overflow&&(f=getBoundingClientRect(d)),f&&(o=f,i=l,void 0,void 0,void 0,void 0,void 0,void 0,r=Math.max(o.top,i.top),s=Math.min(o.bottom,i.bottom),a=Math.max(o.left,i.left),c=Math.min(o.right,i.right),u=s-r,!(l=(h=c-a)>=0&&u>=0&&{"top":r,"bottom":s,"left":a,"right":c,"width":h,"height":u})))break;d=getParentNode(d)}return l}},IntersectionObserver.prototype._getRootRect=function(){var e;if(this.root)e=getBoundingClientRect(this.root);else{var n=t.documentElement,o=t.body;e={"top":0,"left":0,"right":n.clientWidth||o.clientWidth,"width":n.clientWidth||o.clientWidth,"bottom":n.clientHeight||o.clientHeight,"height":n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},IntersectionObserver.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={"top":t.top-e[0],"right":t.right+e[1],"bottom":t.bottom+e[2],"left":t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},IntersectionObserver.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},IntersectionObserver.prototype._rootIsInDom=function(){return!this.root||containsDeep(t,this.root)},IntersectionObserver.prototype._rootContainsTarget=function(e){return containsDeep(this.root||t,e)},IntersectionObserver.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},IntersectionObserver.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=IntersectionObserver,window.IntersectionObserverEntry=IntersectionObserverEntry}function IntersectionObserverEntry(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{"top":0,"bottom":0,"left":0,"right":0,"width":0,"height":0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function IntersectionObserver(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function throttle(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function addEvent(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function removeEvent(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function getBoundingClientRect(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={"top":e.top,"right":e.right,"bottom":e.bottom,"left":e.left,"width":e.right-e.left,"height":e.bottom-e.top}),e):{"top":0,"bottom":0,"left":0,"right":0,"width":0,"height":0}}function containsDeep(t,e){for(var n=e;n;){if(n==t)return!0;n=getParentNode(n)}return!1}function getParentNode(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}()},"271":function(t,e,n){"use strict";n(12);var o=n(1),i=n(9),r=n.n(i),s=(n(138),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}),a=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();n(140);var c=function(t){function Image(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Image);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Image.__proto__||Object.getPrototypeOf(Image)).apply(this,arguments));return t.state={"isLoaded":!1,"aspectFillMode":"width"},t.imageOnLoad=t.imageOnLoad.bind(t),t.observer={},t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Image,o["l"].Component),a(Image,[{"key":"componentDidMount","value":function componentDidMount(){var t=this;this.props.lazyLoad&&(this.observer=new IntersectionObserver(function(e,n){e[e.length-1].isIntersecting&&t.setState({"isLoaded":!0},function(){o.l.findDOMNode(t).children[0].src=t.props.src})},{"rootMargin":"300px 0px"}),this.observer.observe(this.imgRef))}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.observer.disconnect&&this.observer.disconnect()}},{"key":"imageOnLoad","value":function imageOnLoad(t){var e=this.props.onLoad;Object.defineProperty(t,"detail",{"enumerable":!0,"writable":!0,"value":{"width":this.imgRef.width,"height":this.imgRef.height}}),this.imgRef.naturalWidth>this.imgRef.naturalHeight?this.setState({"aspectFillMode":"width"}):this.setState({"aspectFillMode":"height"}),e&&e(t)}},{"key":"render","value":function render(){var t=this,e=this.props,n=e.className,i=e.src,a=e.style,c=e.mode,h=e.onError,u=e.lazyLoad,l=e.imgProps,d=function _objectWithoutProperties(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(e,["className","src","style","mode","onError","lazyLoad","imgProps"]),p=this.state.aspectFillMode,f=r()("taro-img",{"taro-img__widthfix":"widthFix"===c},n),g=r()("taro-img__mode-"+(c||"scaleToFill").toLowerCase().replace(/\s/g,""),function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}({},"taro-img__mode-aspectfill--"+p,"aspectFill"===c));return o.l.createElement("div",s({"className":f,"style":a},d),u?o.l.createElement("img",s({"ref":function ref(e){return t.imgRef=e},"className":g,"data-src":i,"onLoad":this.imageOnLoad,"onError":h},l)):o.l.createElement("img",s({"ref":function ref(e){return t.imgRef=e},"className":g,"src":i,"onLoad":this.imageOnLoad,"onError":h},l)))}}]),Image}();e.a=c}}]);