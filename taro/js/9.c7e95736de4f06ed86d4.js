(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"161":function(e,t,n){"use strict";n.r(t);var o=n(0),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var i=n(2),c=n(11),a=n(77),u=n(98),l=n(20),s=(n(97),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var p=function(e){function Category(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Category);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Category.__proto__||Object.getPrototypeOf(Category)).apply(this,arguments));return e.config={"navigationBarTitleText":"分类"},e.increment=function(){e.props.counterStore.increment()},e.decrement=function(){e.props.counterStore.decrement()},e.incrementAsync=function(){e.props.counterStore.incrementAsync()},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Category,i["a"].Component),s(Category,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillReact","value":function componentWillReact(){console.log("componentWillReact")}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.props.counterStore.counter;return o.j.createElement(c.a,{"className":"index"},o.j.createElement(a.a,null,"分类"),o.j.createElement(u.a,{"onClick":this.increment},"+"),o.j.createElement(u.a,{"onClick":this.decrement},"-"),o.j.createElement(u.a,{"onClick":this.incrementAsync},"Add Async"),o.j.createElement(a.a,null,e))}}]),Category}();p=function __decorate(e,t,n,o){var i,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(c<3?i(a):c>3?i(t,n,a):i(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a}([Object(l.b)("counterStore"),l.c],p);t.default=p},"74":function(e,t,n){var o=n(75);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(18)(o,r);o.locals&&(e.exports=o.locals)},"75":function(e,t,n){(t=n(17)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""]),e.exports=t},"77":function(e,t,n){"use strict";n(8);var o=n(0),r=n(19),i=n(6),c=n.n(i),a=(n(74),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,o["j"].Component),u(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,i=void 0!==n&&n,u=c()("taro-text",{"taro-text__selectable":i},t);return o.j.createElement("span",a({},Object(r.a)(this.props,["selectable","className"]),{"className":u}),this.props.children)}}]),Text}();t.a=l},"78":function(e,t,n){var o=n(79);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(18)(o,r);o.locals&&(e.exports=o.locals)},"79":function(e,t,n){(t=n(17)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""]),e.exports=t},"97":function(e,t,n){},"98":function(e,t,n){"use strict";n(8);var o=n(0),r=n(19),i=n(6),c=n.n(i),a=(n(78),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var l=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,o["j"].Component),u(Button,[{"key":"componentWillUnmount","value":function componentWillUnmount(){this.startTimer&&clearTimeout(this.startTimer),this.endTimer&&clearTimeout(this.endTimer)}},{"key":"render","value":function render(){var e,t=this,n=this.props,i=n.children,u=n.disabled,l=n.className,s=n.style,p=n.onClick,f=n.onTouchStart,b=n.onTouchEnd,d=n.hoverClass,y=void 0===d?"button-hover":d,h=n.hoverStartTime,m=void 0===h?20:h,v=n.hoverStayTime,g=void 0===v?70:v,_=n.size,w=n.plain,j=n.loading,O=void 0!==j&&j,x=n.type,T=void 0===x?"default":x,k=l||c()("weui-btn",(_defineProperty(e={},""+y,this.state.hover&&!u&&"none"!==y),_defineProperty(e,"weui-btn_plain-"+T,w),_defineProperty(e,"weui-btn_"+T,!w&&T),_defineProperty(e,"weui-btn_mini","mini"===_),_defineProperty(e,"weui-btn_loading",O),_defineProperty(e,"weui-btn_disabled",u),e));return o.j.createElement("button",a({},Object(r.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":k,"style":s,"onClick":p,"disabled":u,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),y&&"none"!==y&&!u&&(t.startTimer=setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},m)),f&&f(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),y&&"none"!==y&&!u&&(t.endTimer=setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},g)),b&&b(e)}}),O&&o.j.createElement("i",{"class":"weui-loading"}),i)}}]),Button}();t.a=l}}]);