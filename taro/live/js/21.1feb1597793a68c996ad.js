(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"104":function(e,t,n){"use strict";var o=n(105);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,r,i,l){if(l!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e,e}},"105":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"108":function(e,t,n){"use strict";n(10);var o=n(1),r=n(20),i=n(8),l=n.n(i),c=(n(96),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var s=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,o["j"].Component),a(Button,[{"key":"componentWillUnmount","value":function componentWillUnmount(){this.startTimer&&clearTimeout(this.startTimer),this.endTimer&&clearTimeout(this.endTimer)}},{"key":"render","value":function render(){var e,t=this,n=this.props,i=n.children,a=n.disabled,s=n.className,u=n.style,p=n.onClick,f=n.onTouchStart,h=n.onTouchEnd,d=n.hoverClass,y=void 0===d?"button-hover":d,b=n.hoverStartTime,m=void 0===b?20:b,v=n.hoverStayTime,_=void 0===v?70:v,w=n.size,O=n.plain,g=n.loading,C=void 0!==g&&g,j=n.type,P=void 0===j?"default":j,T=s||l()("weui-btn",(_defineProperty(e={},""+y,this.state.hover&&!a&&"none"!==y),_defineProperty(e,"weui-btn_plain-"+P,O),_defineProperty(e,"weui-btn_"+P,!O&&P),_defineProperty(e,"weui-btn_mini","mini"===w),_defineProperty(e,"weui-btn_loading",C),_defineProperty(e,"weui-btn_disabled",a),e));return o.j.createElement("button",c({},Object(r.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":T,"style":u,"onClick":p,"disabled":a,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),y&&"none"!==y&&!a&&(t.startTimer=setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},m)),f&&f(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),y&&"none"!==y&&!a&&(t.endTimer=setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},_)),h&&h(e)}}),C&&o.j.createElement("i",{"class":"weui-loading"}),i)}}]),Button}();t.a=s},"213":function(e,t,n){var o=n(214);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(19)(o,r);o.locals&&(e.exports=o.locals)},"214":function(e,t,n){(t=n(18)(!1)).push([e.i,".taro-scroll {\n  -webkit-overflow-scrolling: auto;\n}\n\n.taro-scroll::-webkit-scrollbar {\n  display: none;\n}\n\n.taro-scroll-view {\n  overflow: hidden;\n}\n\n.taro-scroll-view__scroll-x {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.taro-scroll-view__scroll-y {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}",""]),e.exports=t},"215":function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(1),r=n(8),i=n.n(r),l=n(91),c=n.n(l),a=n(12),s=n(88),u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var p=function(e){function AtModalAction(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtModalAction),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtModalAction.__proto__||Object.getPrototypeOf(AtModalAction)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtModalAction,s["a"]),u(AtModalAction,[{"key":"render","value":function render(){var e=i()("at-modal__footer",{"at-modal__footer--simple":this.props.isSimple},this.props.className);return o.j.createElement(a.a,{"className":e},o.j.createElement(a.a,{"className":"at-modal__action"},this.props.children))}}]),AtModalAction}();p.defaultProps={"isSimple":!1},p.propTypes={"isSimple":c.a.bool}},"232":function(e,t,n){"use strict";var o=n(1),r=n(8),i=n.n(r),l=(n(10),n(20)),c=(n(213),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function easeOutScroll(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2];if(e!==t&&"number"==typeof e){var o=t-e,r=500,i=+new Date,l=t>=e;!function step(){e=function linear(e,t,n,o){return n*e/o+t}(+new Date-i,e,o,r),l&&e>=t||!l&&t>=e?n(t):(n(e),requestAnimationFrame(step))}()}}function scrollIntoView(e){document.querySelector("#"+e).scrollIntoView({"behavior":"smooth","block":"center","inline":"start"})}function scrollVertical(e,t){var n=this;t?easeOutScroll(this._scrollTop,e,function(e){n.container&&(n.container.scrollTop=e)}):this.container&&(this.container.scrollTop=e),this._scrollTop=e}function scrollHorizontal(e,t){var n=this;t?easeOutScroll(this._scrollLeft,e,function(e){n.container&&(n.container.scrollLeft=e)}):this.container&&(this.container.scrollLeft=e),this._scrollLeft=e}var s=function(e){function ScrollView(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ScrollView);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ScrollView.__proto__||Object.getPrototypeOf(ScrollView)).apply(this,arguments));return e.onTouchMove=function(e){e.stopPropagation()},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ScrollView,o["j"].Component),a(ScrollView,[{"key":"componentDidMount","value":function componentDidMount(){this.handleScroll(this.props,!0)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){this.handleScroll(e)}},{"key":"handleScroll","value":function handleScroll(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.scrollIntoView&&"string"==typeof e.scrollIntoView&&document&&document.querySelector&&document.querySelector("#"+e.scrollIntoView))n?setTimeout(function(){return scrollIntoView(e.scrollIntoView)},500):scrollIntoView(e.scrollIntoView);else{var o="scrollWithAnimation"in e;e.scrollY&&"number"==typeof e.scrollTop&&e.scrollTop!==this._scrollTop&&(n?setTimeout(function(){return scrollVertical.bind(t)(e.scrollTop,o)},10):scrollVertical.bind(this)(e.scrollTop,o)),e.scrollX&&"number"==typeof e.scrollLeft&&e.scrollLeft!==this._scrollLeft&&(n?setTimeout(function(){return scrollHorizontal.bind(t)(e.scrollLeft,o)},10):scrollHorizontal.bind(this)(e.scrollLeft,o))}}},{"key":"render","value":function render(){var e,t=this,n=this.props,r=n.className,a=n.onScroll,s=n.onScrollToUpper,u=n.onScrollToLower,p=n.onTouchMove,f=n.scrollX,h=n.scrollY,d=this.props,y=d.upperThreshold,b=void 0===y?50:y,m=d.lowerThreshold,v=void 0===m?50:m,_=i()("taro-scroll",(_defineProperty(e={},"taro-scroll-view__scroll-x",f),_defineProperty(e,"taro-scroll-view__scroll-y",h),e),r);b=parseInt(b),v=parseInt(v);var w=function throttle(e,t){var n=null;return function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout(function(){e.apply(void 0,r)},t)}}(function uperAndLower(e){if(t.container){var n=t.container,o=n.offsetWidth,r=n.offsetHeight,i=n.scrollLeft,l=n.scrollTop,c=n.scrollHeight,a=n.scrollWidth;u&&(t.props.scrollY&&r+l+v>=c||t.props.scrollX&&o+i+v>=a)&&u(e),s&&(t.props.scrollY&&l<=b||t.props.scrollX&&i<=b)&&s(e)}},200);return o.j.createElement("div",c({"ref":function ref(e){t.container=e}},Object(l.a)(this.props,["className","scrollTop","scrollLeft"]),{"className":_,"onScroll":function _onScroll(e){var n=t.container,o=n.scrollLeft,r=n.scrollTop,i=n.scrollHeight,l=n.scrollWidth;t._scrollLeft=o,t._scrollTop=r,Object.defineProperty(e,"detail",{"enumerable":!0,"writable":!0,"value":{"scrollLeft":o,"scrollTop":r,"scrollHeight":i,"scrollWidth":l}}),w(e),a&&a(e)},"onTouchMove":function _onTouchMove(e){p?p(e):t.onTouchMove(e)},"onLoad":function onLoad(e){console.log("onload",e)}}),this.props.children)}}]),ScrollView}(),u=n(88);n.d(t,"a",function(){return f});var p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var f=function(e){function AtModalContent(){return function content_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtModalContent),function content_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtModalContent.__proto__||Object.getPrototypeOf(AtModalContent)).apply(this,arguments))}return function content_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtModalContent,u["a"]),p(AtModalContent,[{"key":"render","value":function render(){var e=i()("at-modal__content",this.props.className);return o.j.createElement(s,{"scrollY":!0,"className":e},this.props.children)}}]),AtModalContent}()},"247":function(e,t,n){"use strict";var o=n(1),r=n(8),i=n.n(r),l=n(91),c=n.n(l),a=n(12),s=n(88),u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var p=function(e){function AtActionSheetBody(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActionSheetBody),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtActionSheetBody.__proto__||Object.getPrototypeOf(AtActionSheetBody)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActionSheetBody,s["a"]),u(AtActionSheetBody,[{"key":"render","value":function render(){var e=i()("at-action-sheet__body",this.props.className);return o.j.createElement(a.a,{"className":e},this.props.children)}}]),AtActionSheetBody}(),f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var h=function(e){function AtActionSheetFooter(){!function footer_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActionSheetFooter);var e=function footer_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtActionSheetFooter.__proto__||Object.getPrototypeOf(AtActionSheetFooter)).apply(this,arguments));return e.handleClick=function(){var t;"function"==typeof e.props.onClick&&(t=e.props).onClick.apply(t,arguments)},e}return function footer_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActionSheetFooter,s["a"]),f(AtActionSheetFooter,[{"key":"render","value":function render(){var e=i()("at-action-sheet__footer",this.props.className);return o.j.createElement(a.a,{"onClick":this.handleClick,"className":e},this.props.children)}}]),AtActionSheetFooter}();h.defaultProps={"onClick":function onClick(){}},h.propTypes={"onClick":c.a.func};var d=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var y=function(e){function AtActionSheetHeader(){return function header_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActionSheetHeader),function header_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtActionSheetHeader.__proto__||Object.getPrototypeOf(AtActionSheetHeader)).apply(this,arguments))}return function header_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActionSheetHeader,s["a"]),d(AtActionSheetHeader,[{"key":"render","value":function render(){var e=i()("at-action-sheet__header",this.props.className);return o.j.createElement(a.a,{"className":e},this.props.children)}}]),AtActionSheetHeader}();n.d(t,"a",function(){return m});var b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var m=function(e){function AtActionSheet(e){!function action_sheet_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActionSheet);var t=function action_sheet_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtActionSheet.__proto__||Object.getPrototypeOf(AtActionSheet)).call(this,e));t.handleClose=function(){"function"==typeof t.props.onClose&&t.props.onClose()},t.handleCancel=function(){if("function"==typeof t.props.onCancel)return t.props.onCancel();t.close()},t.close=function(){t.setState({"_isOpened":!1},t.handleClose)},t.handleTouchMove=function(e){e.stopPropagation(),e.preventDefault()};var n=e.isOpened;return t.state={"_isOpened":n},t}return function action_sheet_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActionSheet,s["a"]),b(AtActionSheet,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.isOpened;t!==this.state._isOpened&&(this.setState({"_isOpened":t}),!t&&this.handleClose())}},{"key":"render","value":function render(){var e=this.props,t=e.title,n=e.cancelText,r=e.className,l=this.state._isOpened,c=i()("at-action-sheet",{"at-action-sheet--active":l},r);return o.j.createElement(a.a,{"className":c,"onTouchMove":this.handleTouchMove},o.j.createElement(a.a,{"onClick":this.close,"className":"at-action-sheet__overlay"}),o.j.createElement(a.a,{"className":"at-action-sheet__container"},t&&o.j.createElement(y,null,t),o.j.createElement(p,null,this.props.children),n&&o.j.createElement(h,{"onClick":this.handleCancel},n)))}}]),AtActionSheet}();m.defaultProps={"title":"","cancelText":"","isOpened":!1},m.propTypes={"title":c.a.string,"onClose":c.a.func,"onCancel":c.a.func,"isOpened":c.a.bool.isRequired,"cancelText":c.a.string}},"254":function(e,t,n){"use strict";var o=n(1),r=n(8),i=n.n(r),l=n(91),c=n.n(l),a=n(12),s=n(90),u=n(108),p=n(2),f=n(88),h=n(98),d=n(215),y=n(232),b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var m=function(e){function AtModalHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtModalHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtModalHeader.__proto__||Object.getPrototypeOf(AtModalHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtModalHeader,f["a"]),b(AtModalHeader,[{"key":"render","value":function render(){var e=i()("at-modal__header",this.props.className);return o.j.createElement(a.a,{"className":e},this.props.children)}}]),AtModalHeader}();n.d(t,"a",function(){return _});var v=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var _=function(e){function AtModal(e){!function modal_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtModal);var t=function modal_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtModal.__proto__||Object.getPrototypeOf(AtModal)).call(this,e));t.handleClickOverlay=function(){t.props.closeOnClickOverlay&&t.setState({"_isOpened":!1},t.handleClose)},t.handleClose=function(e){"function"==typeof t.props.onClose&&t.props.onClose(e)},t.handleCancel=function(e){"function"==typeof t.props.onCancel&&t.props.onCancel(e)},t.handleConfirm=function(e){"function"==typeof t.props.onConfirm&&t.props.onConfirm(e)},t.handleTouchMove=function(e){e.stopPropagation()};var n=e.isOpened;return t.state={"_isOpened":n,"isWEB":p.a.getEnv()===p.a.ENV_TYPE.WEB},t}return function modal_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtModal,f["a"]),v(AtModal,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.isOpened;this.props.isOpened!==t&&Object(h.a)(t),t!==this.state._isOpened&&this.setState({"_isOpened":t})}},{"key":"render","value":function render(){var e=this.state,t=e._isOpened,n=e.isWEB,r=this.props,l=r.title,c=r.content,p=r.cancelText,f=r.confirmText,h=i()("at-modal",{"at-modal--active":t},this.props.className);if(l||c){var b=p||f;return o.j.createElement(a.a,{"className":h},o.j.createElement(a.a,{"onClick":this.handleClickOverlay,"className":"at-modal__overlay"}),o.j.createElement(a.a,{"className":"at-modal__container"},l&&o.j.createElement(m,null,o.j.createElement(s.a,null,l)),c&&o.j.createElement(y.a,null,o.j.createElement(a.a,{"className":"content-simple"},n?o.j.createElement(s.a,{"dangerouslySetInnerHTML":{"__html":c.replace(/\n/g,"<br/>")}}):o.j.createElement(s.a,null,c))),b&&o.j.createElement(d.a,{"isSimple":!0},p&&o.j.createElement(u.a,{"onClick":this.handleCancel},p),f&&o.j.createElement(u.a,{"onClick":this.handleConfirm},f))))}return o.j.createElement(a.a,{"onTouchMove":this.handleTouchMove,"className":h},o.j.createElement(a.a,{"className":"at-modal__overlay","onClick":this.handleClickOverlay}),o.j.createElement(a.a,{"className":"at-modal__container"},this.props.children))}}]),AtModal}();_.defaultProps={"isOpened":!1,"closeOnClickOverlay":!0},_.propTypes={"title":c.a.string,"isOpened":c.a.bool,"onCancel":c.a.func,"onConfirm":c.a.func,"onClose":c.a.func,"content":c.a.string,"closeOnClickOverlay":c.a.bool,"cancelText":c.a.string,"confirmText":c.a.string}},"84":function(e,t,n){var o=n(85);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(19)(o,r);o.locals&&(e.exports=o.locals)},"85":function(e,t,n){(t=n(18)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""]),e.exports=t},"88":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(2),r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var l=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":i(e))){var t="";return Object.keys(e).forEach(function(n){var o=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=o+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},c=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,o["a"].Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":i(e))&&t&&"object"===(void 0===t?"undefined":i(t))?Object.assign({},e,t):l(e)+l(t)}}]),AtComponent}();c.options={"addGlobalClass":!0}},"90":function(e,t,n){"use strict";n(10);var o=n(1),r=n(20),i=n(8),l=n.n(i),c=(n(84),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var s=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,o["j"].Component),a(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,i=void 0!==n&&n,a=l()("taro-text",{"taro-text__selectable":i},t);return o.j.createElement("span",c({},Object(r.a)(this.props,["selectable","className"]),{"className":a}),this.props.children)}}]),Text}();t.a=s},"91":function(e,t,n){e.exports=n(104)()},"96":function(e,t,n){var o=n(97);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(19)(o,r);o.locals&&(e.exports=o.locals)},"97":function(e,t,n){(t=n(18)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""]),e.exports=t},"98":function(e,t,n){"use strict";var o=n(2),r=n(1),i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function filter(e,t,n){if(!t)return null;var o=e.id,r=e.dataset,i=e.rect,l=e.size,c=e.scrollOffset,a=e.properties,s=void 0===a?[]:a,u=e.computedStyle,p=void 0===u?[]:u,f=t.getBoundingClientRect(),h=f.left,d=f.right,y=f.top,b=f.bottom,m=f.width,v=f.height,_="html"===n,w={};if(o&&(w.id=t.id),r&&(w.dataset=Object.assign({},t.dataset)),i&&(_?(w.left=0,w.right=0,w.top=0,w.bottom=0):(w.left=h,w.right=d,w.top=y,w.bottom=b)),l&&(_?(w.width=t.clientWidth,w.height=t.clientHeight):(w.width=m,w.height=v)),c&&(w.scrollLeft=t.scrollLeft,w.scrollTop=t.scrollTop,w.scrollHeight=t.scrollHeight,w.scrollWidth=t.scrollWidth),s.length&&s.forEach(function(e){var n=t.getAttribute(e);n&&(w[e]=n)}),p.length){var O=window.getComputedStyle(t);p.forEach(function(e){var t=O.getPropertyValue(e);t&&(w[e]=t)})}return w}!function(){function Query(){_classCallCheck(this,Query),this._defaultWebviewId=null,this._webviewId=null,this._queue=[],this._queueCb=[],this._component=null}i(Query,[{"key":"in","value":function _in(e){return this._component=e,this}},{"key":"select","value":function select(e){return"string"==typeof e&&(e=e.replace(">>>",">")),new l(e,this,!0)}},{"key":"selectAll","value":function selectAll(e){return"string"==typeof e&&(e=e.replace(">>>",">")),new l(e,this,!1)}},{"key":"selectViewport","value":function selectViewport(){return new l("html",this,!0)}},{"key":"exec","value":function exec(e){var t=this;!function queryBat(e,t){var n=[];e.forEach(function(e){var t=e.selector,o=e.single,i=e.fields,l=e.component,c=null!==l&&r.j.findDOMNode(l)||document,a=!1;if(c!==document)for(var s=c.parentNode.querySelectorAll(t),u=0,p=s.length;u<p;++u)if(c===s[u]){a=!0;break}if(o){var f=!0===a?c:c.querySelector(t);n.push(filter(i,f,t))}else{var h=c.querySelectorAll(t),d=[];!0===a&&d.push(c);for(var y=0,b=h.length;y<b;++y)d.push(h[y]);n.push(d.map(function(e){return filter(i,e)}))}}),t(n)}(this._queue,function(n){var o=t._queueCb;n.forEach(function(e,n){"function"==typeof o[n]&&o[n].call(t,e)}),"function"==typeof e&&e.call(t,n)})}},{"key":"_push","value":function _push(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._queue.push({"component":t,"selector":e,"single":n,"fields":o}),this._queueCb.push(r)}}])}();var l=function(){function NodesRef(e,t,n){_classCallCheck(this,NodesRef),this._component=t._component,this._selector=e,this._selectorQuery=t,this._single=n}return i(NodesRef,[{"key":"boundingClientRect","value":function boundingClientRect(e){var t=this._selector,n=this._component,o=this._single,r=this._selectorQuery;return r._push(t,n,o,{"id":!0,"dataset":!0,"rect":!0,"size":!0},e),r}},{"key":"scrollOffset","value":function scrollOffset(e){var t=this._selector,n=this._component,o=this._single,r=this._selectorQuery;return r._push(t,n,o,{"id":!0,"dataset":!0,"scrollOffset":!0},e),r}},{"key":"fields","value":function fields(e,t){var n=this._selector,o=this._component,r=this._single,i=this._selectorQuery,l=e.id,c=e.dataset,a=e.rect,s=e.size,u=e.scrollOffset,p=e.properties,f=void 0===p?[]:p,h=e.computedStyle,d=void 0===h?[]:h;return i._push(n,o,r,{"id":l,"dataset":c,"rect":a,"size":s,"scrollOffset":u,"properties":f,"computedStyle":d},t),i}}]),NodesRef}();n.d(t,"b",function(){return initTestEnv}),n.d(t,"a",function(){return handleTouchScroll});var c=o.a.getEnv();function initTestEnv(){0}var a=0;function handleTouchScroll(e){c===o.a.ENV_TYPE.WEB&&(e?(a=document.documentElement.scrollTop,document.body.classList.add("at-frozen"),document.body.style.top=-a+"px"):(document.body.style.top=null,document.body.classList.remove("at-frozen"),document.documentElement.scrollTop=a))}}}]);