(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"139":function(e,t,n){},"140":function(e,t,n){},"141":function(e,t,n){"use strict";var o=n(2),r=n(1),a=n(13),i=(n(139),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var l=function(e){function NavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NavBar.__proto__||Object.getPrototypeOf(NavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NavBar,o["a"].Component),i(NavBar,[{"key":"render","value":function render(){var e=this.props,t=e.title,n=void 0===t?"":t,i=e.onRightClick,l=void 0===i?function(){}:i,c=e.rightIcon;return r.l.createElement(a.a,{"className":"nav-bar-comp"},r.l.createElement(a.a,{"className":"icon icon-return","onClick":function onClick(){return o.a.navigateBack()}}),r.l.createElement(a.a,null,n),c?r.l.createElement(a.a,{"className":"icon "+c,"onClick":function onClick(){return l()}}):r.l.createElement(a.a,{"className":"icon"}))}}]),NavBar}(),c=(n(140),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var s=function(e){function Layout(){return function Layout_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Layout),function Layout_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Layout.__proto__||Object.getPrototypeOf(Layout)).apply(this,arguments))}return function Layout_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Layout,o["a"].Component),c(Layout,[{"key":"render","value":function render(){var e=this.props,t=e.children,n=e.title,o=void 0===n?"":n,i=e.rightIcon,c=e.onRightClick;return r.l.createElement(a.a,{"className":"layout-content"},r.l.createElement(l,{"title":o,"rightIcon":i,"onRightClick":c}),r.l.createElement(a.a,{"className":"layout-content__children","style":{}},t))}}]),Layout}();t.a=s},"146":function(e,t,n){"use strict";n.d(t,"a",function(){return jump});var o=n(2),r="/pages/webview/webview";function jump(e){var t=e.url,n=e.title,a=void 0===n?"":n,i=e.payload,l=void 0===i?{}:i,c=e.method,s=void 0===c?"navigateTo":c;if(/^https?:\/\//.test(t))o.a[s]({"url":urlStringify(r,{"url":t,"title":a})});else if(/^\/pages\//.test(t)){if("switchTab"===s)return o.a.navigateBack({"delta":o.a.getCurrentPages().length-1}),void setTimeout(function(){o.a.redirectTo({"url":t})},100);o.a[s]({"url":urlStringify(t,l)})}}function urlStringify(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=Object.keys(t).map(function(e){return e+"="+(n?encodeURIComponent(t[e]):t[e])});return o.length?e+"?"+o.join("&"):e}},"184":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(1),r=n(9),a=n.n(r),i=n(242),l=n(138),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var s=function(e){function AtModalContent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtModalContent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtModalContent.__proto__||Object.getPrototypeOf(AtModalContent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtModalContent,l["a"]),c(AtModalContent,[{"key":"render","value":function render(){var e=a()("at-modal__content",this.props.className);return o.l.createElement(i.a,{"scrollY":!0,"className":e},this.props.children)}}]),AtModalContent}()},"185":function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(1),r=n(9),a=n.n(r),i=n(142),l=n.n(i),c=n(13),s=n(138),u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var p=function(e){function AtModalAction(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtModalAction),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtModalAction.__proto__||Object.getPrototypeOf(AtModalAction)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtModalAction,s["a"]),u(AtModalAction,[{"key":"render","value":function render(){var e=a()("at-modal__footer",{"at-modal__footer--simple":this.props.isSimple},this.props.className);return o.l.createElement(c.a,{"className":e},o.l.createElement(c.a,{"className":"at-modal__action"},this.props.children))}}]),AtModalAction}();p.defaultProps={"isSimple":!1},p.propTypes={"isSimple":l.a.bool}},"251":function(e,t,n){},"270":function(e,t,n){"use strict";var o=n(1),r=n(9),a=n.n(r),i=n(142),l=n.n(i),c=n(13),s=n(143),u=n(187),p=n(2),f=n(138),d=n(144),y=n(185),h=n(184),b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var m=function(e){function AtModalHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtModalHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtModalHeader.__proto__||Object.getPrototypeOf(AtModalHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtModalHeader,f["a"]),b(AtModalHeader,[{"key":"render","value":function render(){var e=a()("at-modal__header",this.props.className);return o.l.createElement(c.a,{"className":e},this.props.children)}}]),AtModalHeader}();n.d(t,"a",function(){return v});var _=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var v=function(e){function AtModal(e){!function modal_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtModal);var t=function modal_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtModal.__proto__||Object.getPrototypeOf(AtModal)).call(this,e));t.handleClickOverlay=function(){t.props.closeOnClickOverlay&&t.setState({"_isOpened":!1},t.handleClose)},t.handleClose=function(e){"function"==typeof t.props.onClose&&t.props.onClose(e)},t.handleCancel=function(e){"function"==typeof t.props.onCancel&&t.props.onCancel(e)},t.handleConfirm=function(e){"function"==typeof t.props.onConfirm&&t.props.onConfirm(e)},t.handleTouchMove=function(e){e.stopPropagation()};var n=e.isOpened;return t.state={"_isOpened":n,"isWEB":p.a.getEnv()===p.a.ENV_TYPE.WEB},t}return function modal_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtModal,f["a"]),_(AtModal,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.isOpened;this.props.isOpened!==t&&Object(d.a)(t),t!==this.state._isOpened&&this.setState({"_isOpened":t})}},{"key":"render","value":function render(){var e=this.state,t=e._isOpened,n=e.isWEB,r=this.props,i=r.title,l=r.content,p=r.cancelText,f=r.confirmText,d=a()("at-modal",{"at-modal--active":t},this.props.className);if(i||l){var b=p||f;return o.l.createElement(c.a,{"className":d},o.l.createElement(c.a,{"onClick":this.handleClickOverlay,"className":"at-modal__overlay"}),o.l.createElement(c.a,{"className":"at-modal__container"},i&&o.l.createElement(m,null,o.l.createElement(s.a,null,i)),l&&o.l.createElement(h.a,null,o.l.createElement(c.a,{"className":"content-simple"},n?o.l.createElement(s.a,{"dangerouslySetInnerHTML":{"__html":l.replace(/\n/g,"<br/>")}}):o.l.createElement(s.a,null,l))),b&&o.l.createElement(y.a,{"isSimple":!0},p&&o.l.createElement(u.a,{"onClick":this.handleCancel},p),f&&o.l.createElement(u.a,{"onClick":this.handleConfirm},f))))}return o.l.createElement(c.a,{"onTouchMove":this.handleTouchMove,"className":d},o.l.createElement(c.a,{"className":"at-modal__overlay","onClick":this.handleClickOverlay}),o.l.createElement(c.a,{"className":"at-modal__container"},this.props.children))}}]),AtModal}();v.defaultProps={"isOpened":!1,"closeOnClickOverlay":!0},v.propTypes={"title":l.a.string,"isOpened":l.a.bool,"onCancel":l.a.func,"onConfirm":l.a.func,"onClose":l.a.func,"content":l.a.string,"closeOnClickOverlay":l.a.bool,"cancelText":l.a.string,"confirmText":l.a.string}},"281":function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(2),a=n(141),i=n(278),l=n(301),c=n(296),s=n(270),u=n(13),p=n(146),f=(n(251),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),d=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),y=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function Setting(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Setting);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=Setting.__proto__||Object.getPrototypeOf(Setting)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"设置"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Setting,r["a"].Component),d(Setting,[{"key":"render","value":function render(){var e=r.a.useState(!1),t=f(e,2),n=t[0],d=t[1];function closeModal(){d(!1)}return o.l.createElement(a.a,{"title":"设置"},o.l.createElement(u.a,{"className":"setting-content"},o.l.createElement(i.a,null,o.l.createElement(l.a,{"title":"我要合作","arrow":"right"}),o.l.createElement(l.a,{"title":"关于我们","arrow":"right"}),o.l.createElement(l.a,{"title":"清空缓存","extraText":"0M"}),o.l.createElement(l.a,{"title":"版本号","extraText":"1.3.33"})),o.l.createElement(c.a,{"className":"logout-btn","type":"primary","onClick":function onClick(){return d(!0)}},"退出登录"),o.l.createElement(s.a,{"isOpened":n,"title":"","cancelText":"取消","confirmText":"确认","onClose":closeModal,"onCancel":closeModal,"onConfirm":function onConfirm(){closeModal(),Object(p.a)({"url":"/pages/login/login","method":"navigateTo"})},"content":"确定退出登录？"})))}},{"key":"componentDidMount","value":function componentDidMount(){y(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidMount",this)&&y(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){y(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidShow",this)&&y(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){y(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidHide",this)&&y(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidHide",this).call(this)}}]),Setting}();h.config={"navigationBarTitleText":"设置"},t.default=h}}]);