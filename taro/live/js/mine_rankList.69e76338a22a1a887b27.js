(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"136":function(e,t,n){var r=n(137);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(21)(r,o);r.locals&&(e.exports=r.locals)},"137":function(e,t,n){(t=n(20)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""]),e.exports=t},"139":function(e,t,n){"use strict";var r=n(1),o=n(2),a=n(13),i=(n(140),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var s=function(e){function NavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NavBar.__proto__||Object.getPrototypeOf(NavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NavBar,o["a"].Component),i(NavBar,[{"key":"render","value":function render(){var e=this.props,t=e.title,n=void 0===t?"":t,i=e.onRightClick,s=void 0===i?function(){}:i,c=e.rightIcon;return r.l.createElement(a.a,{"className":"nav-bar-comp"},r.l.createElement(a.a,{"className":"icon icon-return","onClick":function onClick(){return o.a.navigateBack()}}),r.l.createElement(a.a,null,n),c?r.l.createElement(a.a,{"className":"icon "+c,"onClick":function onClick(){return s()}}):r.l.createElement(a.a,{"className":"icon"}))}}]),NavBar}();t.a=s},"140":function(e,t,n){},"142":function(e,t,n){"use strict";n(11);var r=n(1),o=n(22),a=n(9),i=n.n(a),s=(n(136),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,r["l"].Component),c(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,a=void 0!==n&&n,c=i()("taro-text",{"taro-text__selectable":a},t);return r.l.createElement("span",s({},Object(o.a)(this.props,["selectable","className"]),{"className":c}),this.props.children)}}]),Text}();t.a=l},"245":function(e,t,n){},"277":function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(1),a=n(139),i=n(13),s=n(142),c=n(269),l=n(24),u=(n(245),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),p=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function RankList(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RankList);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=RankList.__proto__||Object.getPrototypeOf(RankList)).call.apply(e,[this].concat(o))),n.config={"navigationBarTitleText":"排行榜"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(RankList,r["a"].Component),u(RankList,[{"key":"render","value":function render(){return o.l.createElement(i.a,{"className":"rank-list-content"},o.l.createElement(a.a,{"title":"排行榜"}),o.l.createElement(i.a,{"className":"rank-list-top"},o.l.createElement(i.a,null,"学 ",o.l.createElement(s.a,{"className":"rank-list-top__num"},"0")," 章"),o.l.createElement(c.a,{"className":"rank-list-top__img","mode":"widthFix","src":l.i}),o.l.createElement(s.a,null,"暂无排名")),o.l.createElement(i.a,{"className":"rank-list"},l.j.map(function(e,t){return o.l.createElement(i.a,{"key":t,"className":"rank-list-item"},[1,2,3].includes(e.sort)?o.l.createElement(i.a,{"className":"rank-list-item__sort"},o.l.createElement(c.a,{"mode":"widthFix","className":"rank-list-item__img","src":1===e.sort?l.e:2===e.sort?l.l:l.b})):o.l.createElement(s.a,{"className":"rank-list-item__sort"},e.sort),o.l.createElement(c.a,{"mode":"widthFix","className":"rank-list-item__img rank-list-item__icon","src":e.icon}),o.l.createElement(s.a,{"className":"rank-list-item__name"},e.name),o.l.createElement(i.a,{"className":"rank-list-item__sum"},o.l.createElement(s.a,{"className":"rank-list-item__num"},e.sum)," 章"))})))}},{"key":"componentDidMount","value":function componentDidMount(){p(RankList.prototype.__proto__||Object.getPrototypeOf(RankList.prototype),"componentDidMount",this)&&p(RankList.prototype.__proto__||Object.getPrototypeOf(RankList.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){p(RankList.prototype.__proto__||Object.getPrototypeOf(RankList.prototype),"componentDidShow",this)&&p(RankList.prototype.__proto__||Object.getPrototypeOf(RankList.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(RankList.prototype.__proto__||Object.getPrototypeOf(RankList.prototype),"componentDidHide",this)&&p(RankList.prototype.__proto__||Object.getPrototypeOf(RankList.prototype),"componentDidHide",this).call(this)}}]),RankList}();f.config={"navigationBarTitleText":"排行榜"},t.default=f}}]);