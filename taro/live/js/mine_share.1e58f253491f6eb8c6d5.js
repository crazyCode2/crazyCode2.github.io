(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"139":function(e,t,n){"use strict";var r=n(1),o=n(2),a=n(13),l=(n(140),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var i=function(e){function NavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NavBar.__proto__||Object.getPrototypeOf(NavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NavBar,o["a"].Component),l(NavBar,[{"key":"render","value":function render(){var e=this.props,t=e.title,n=void 0===t?"":t,l=e.onRightClick,i=void 0===l?function(){}:l,c=e.rightIcon;return r.l.createElement(a.a,{"className":"nav-bar-comp"},r.l.createElement(a.a,{"className":"icon icon-return","onClick":function onClick(){return o.a.navigateBack()}}),r.l.createElement(a.a,null,n),c?r.l.createElement(a.a,{"className":"icon "+c,"onClick":function onClick(){return i()}}):r.l.createElement(a.a,{"className":"icon"}))}}]),NavBar}();t.a=i},"140":function(e,t,n){},"243":function(e,t,n){e.exports=n.p+"static/images/head.199a9af15624fb4b7392a5ab4a1b7472.png"},"244":function(e,t,n){},"276":function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(2),a=n(13),l=n(269),i=n(142),c=n(186),u=n(268),s=n(183),p=n(184),f=n(290),h=n(139),m=n(243),y=n.n(m),d=n(24),b=(n(244),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),v=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),_=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E=function(e){function Share(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Share);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=Share.__proto__||Object.getPrototypeOf(Share)).call.apply(e,[this].concat(o))),n.config={"navigationBarTitleText":"邀请好友"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Share,o["a"].Component),v(Share,[{"key":"render","value":function render(){this.props;var e=o.a.useState(!1),t=b(e,2),n=t[0],m=t[1],v=o.a.useState(!1),_=b(v,2),E=_[0],O=_[1];function handleModal(){O(!E)}function handleActionSheet(){m(!n)}return r.l.createElement(a.a,{"className":"share-content"},r.l.createElement(h.a,{"title":"邀请好友","rightIcon":"icon-share","onRightClick":handleActionSheet}),r.l.createElement(a.a,{"className":"scroll-view","style":{}},r.l.createElement(a.a,{"className":"head-invite"},r.l.createElement(l.a,{"mode":"widthFix","className":"head-invite__img","src":y.a}),r.l.createElement(a.a,{"className":"rule","onClick":handleModal},"活动规则")),r.l.createElement(a.a,{"className":"invite-button"},r.l.createElement(a.a,{"className":"share-btn","onClick":handleActionSheet},"邀请好友，一起领取"),r.l.createElement(a.a,{"className":"share-tip"},"已成功邀请",r.l.createElement(i.a,null,"23")," | 已获得 ",r.l.createElement(i.a,null,"929"),"元"))),r.l.createElement(u.a,{"isOpened":E,"onClose":handleModal},r.l.createElement(s.a,null,r.l.createElement(a.a,null,"【活动细则】"),r.l.createElement(a.a,null,"一、持有投资产品金额的定义"),r.l.createElement(a.a,null,"投资申请中的产品不计入奖励核算范围，产品赎回/到期的到账当天，产品不再持有，不计入奖励核算范围，账户余额不计入奖励核算范围，股票资产不计入奖励核算范围。"),r.l.createElement(a.a,null,"二、奖励内容"),r.l.createElement(a.a,null,"好友在2020年1月1日0点-2021年12月31日24点成功注册有效。"),r.l.createElement(a.a,null,"通过 “邀好友赚奖励”活动邀请好友注册素材网财富管理平台"),r.l.createElement(a.a,null,"您本次活动邀请注册的好友，每位好友在注册30天内首笔投资成功")),r.l.createElement(p.a,null,r.l.createElement(c.a,{"onClick":handleModal},"我知道了"))),r.l.createElement(f.a,{"isOpened":n,"cancelText":"取消","onClose":handleActionSheet},r.l.createElement(a.a,{"className":"share-list"},d.k.map(function(e,t){return r.l.createElement(a.a,{"key":t,"className":"share-list-item"},r.l.createElement(l.a,{"mode":"widthFix","className":"share-list-item__icon","src":e.icon}),r.l.createElement(i.a,null,e.name))}))))}},{"key":"componentDidMount","value":function componentDidMount(){_(Share.prototype.__proto__||Object.getPrototypeOf(Share.prototype),"componentDidMount",this)&&_(Share.prototype.__proto__||Object.getPrototypeOf(Share.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){_(Share.prototype.__proto__||Object.getPrototypeOf(Share.prototype),"componentDidShow",this)&&_(Share.prototype.__proto__||Object.getPrototypeOf(Share.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){_(Share.prototype.__proto__||Object.getPrototypeOf(Share.prototype),"componentDidHide",this)&&_(Share.prototype.__proto__||Object.getPrototypeOf(Share.prototype),"componentDidHide",this).call(this)}}]),Share}();E.config={"navigationBarTitleText":"邀请好友"},t.default=E}}]);