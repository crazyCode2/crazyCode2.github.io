(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"149":function(e,t,r){},"155":function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(2),a=r(11),i=r(153),c=r(81),l=r(80),u=(r(149),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(n)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),p=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),s=function get(e,t,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0};var f=function(e){function Lottery(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Lottery),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Lottery.__proto__||Object.getPrototypeOf(Lottery)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Lottery,n["a"].Component),p(Lottery,[{"key":"render","value":function render(){this.props;var e=n.a.useState(!1),t=u(e,2),r=t[0],p=t[1];return n.a.useEffect(function(){setTimeout(function(){p(!r)},500)},[r]),o.j.createElement(a.a,{"className":"lottery"},o.j.createElement(c.a,{"title":"每日抽奖"}),o.j.createElement(a.a,{"className":"lottery-content"},o.j.createElement(a.a,{"className":"lottery-title"},o.j.createElement(i.a,{"src":l.c})),o.j.createElement(a.a,{"className":"lottery-turntable","style":{"backgroundImage":"url("+(r?l.e:l.f)+")"}},o.j.createElement(a.a,{"className":"lottery-turntable-item"},l.b.slice(0,4).map(function(e,t){return o.j.createElement(i.a,{"key":t,"src":e.icon})})),o.j.createElement(a.a,{"className":"lottery-turntable-item"},l.b.slice(4,6).map(function(e,t){return o.j.createElement(i.a,{"key":t,"src":e.icon})})),o.j.createElement(a.a,{"className":"lottery-turntable-item"},l.b.slice(6,8).map(function(e,t){return o.j.createElement(i.a,{"key":t,"src":e.icon})})),o.j.createElement(a.a,{"className":"lottery-turntable-item"},l.b.slice(4,8).map(function(e,t){return o.j.createElement(i.a,{"key":t,"src":e.icon})})),o.j.createElement(i.a,{"className":"lottery-turntable-button-up","src":l.a}))))}},{"key":"componentDidMount","value":function componentDidMount(){s(Lottery.prototype.__proto__||Object.getPrototypeOf(Lottery.prototype),"componentDidMount",this)&&s(Lottery.prototype.__proto__||Object.getPrototypeOf(Lottery.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){s(Lottery.prototype.__proto__||Object.getPrototypeOf(Lottery.prototype),"componentDidShow",this)&&s(Lottery.prototype.__proto__||Object.getPrototypeOf(Lottery.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){s(Lottery.prototype.__proto__||Object.getPrototypeOf(Lottery.prototype),"componentDidHide",this)&&s(Lottery.prototype.__proto__||Object.getPrototypeOf(Lottery.prototype),"componentDidHide",this).call(this)}}]),Lottery}();t.default=f},"81":function(e,t,r){"use strict";var o=r(0),n=r(2),a=r(11),i=(r(82),function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}());var c=function(e){function NavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NavBar.__proto__||Object.getPrototypeOf(NavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NavBar,n["a"].Component),i(NavBar,[{"key":"render","value":function render(){var e=this.props,t=e.title,r=void 0===t?"":t,i=e.onRightClick,c=void 0===i?function(){}:i,l=e.rightIcon;return o.j.createElement(a.a,{"className":"nav-bar-comp"},o.j.createElement(a.a,{"className":"icon icon-return","onClick":function onClick(){return n.a.navigateBack()}}),o.j.createElement(a.a,null,r),l?o.j.createElement(a.a,{"className":"icon "+l,"onClick":function onClick(){return c()}}):o.j.createElement(a.a,{"className":"icon"}))}}]),NavBar}();t.a=c},"82":function(e,t,r){}}]);