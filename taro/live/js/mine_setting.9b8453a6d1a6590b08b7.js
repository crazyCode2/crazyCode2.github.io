(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"223":function(e,t,n){},"245":function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(1),i=n(86),a=n(8),c=n.n(a),s=n(91),l=n.n(s),u=n(12),p=n(88),f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var h=function(e){function AtList(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtList),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtList.__proto__||Object.getPrototypeOf(AtList)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtList,p["a"]),f(AtList,[{"key":"render","value":function render(){var e=c()("at-list",{"at-list--no-border":!this.props.hasBorder},this.props.className);return o.j.createElement(u.a,{"className":e},this.props.children)}}]),AtList}();h.defaultProps={"hasBorder":!0},h.propTypes={"hasBorder":l.a.bool};var m=n(233),b=n(90),y=(n(10),n(20)),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var w={"switch":"switch","checkbox":"check"};var g=function(e){function Switch(){!function switch_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Switch);var e=function switch_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Switch.__proto__||Object.getPrototypeOf(Switch)).apply(this,arguments));return e.state={"checked":e.props.checked},e.switchChange=e.switchChange.bind(e),e}return function switch_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Switch,o["j"].Component),_(Switch,[{"key":"switchChange","value":function switchChange(e){var t=this.props.onChange;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.checked}}),t&&t(e),this.setState({"checked":e.target.checked})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){e.hasOwnProperty("checked")&&this.setState({"checked":e.checked})}},{"key":"render","value":function render(){var e=this.props,t=e.type,n=void 0===t?"switch":t,r=e.className,i=e.color,a=c()(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},"weui-"+function parseType(e){if(!w[e])throw new Error("unexpected type");return w[e]}(n),!0),r),s=void 0;return s=this.state.checked?{"borderColor":i||"04BE02","backgroundColor":i||"04BE02"}:"",o.j.createElement("input",d({},Object(y.a)(this.props,["className","checked","onChange"]),{"className":a,"checked":this.state.checked,"type":"checkbox","onChange":this.switchChange,"style":s}))}}]),Switch}(),v=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var j=function(e){function AtListItem(){!function item_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtListItem);var e=function item_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtListItem.__proto__||Object.getPrototypeOf(AtListItem)).apply(this,arguments));return e.handleClick=function(t){"function"!=typeof e.props.onClick||e.props.disabled||e.props.onClick(t)},e.handleSwitchChange=function(t){"function"!=typeof e.props.onSwitchChange||e.props.disabled||e.props.onSwitchChange(t)},e}return function item_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtListItem,p["a"]),v(AtListItem,[{"key":"handleSwitchClick","value":function handleSwitchClick(e){e.stopPropagation()}},{"key":"render","value":function render(){var e=this.props,t=e.note,n=e.arrow,r=e.thumb,i=e.iconInfo,a=e.disabled,s=e.isSwitch,l=e.hasBorder,p=e.extraThumb,f=e.switchColor,h=e.switchIsCheck,y=this.props,d=y.extraText,_=y.title;d=String(d),_=String(_);var w=c()("at-list__item",{"at-list__item--thumb":r,"at-list__item--multiple":t,"at-list__item--disabled":a,"at-list__item--no-border":!l},this.props.className),v=c()(i.prefixClass||"at-icon",function item_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},(i.prefixClass||"at-icon")+"-"+i.value,i.value),i.className);return o.j.createElement(u.a,{"className":w,"onClick":this.handleClick},o.j.createElement(u.a,{"className":"at-list__item-container"},r&&o.j.createElement(u.a,{"className":"at-list__item-thumb item-thumb"},o.j.createElement(m.a,{"className":"item-thumb__info","mode":"scaleToFill","src":r})),i.value&&o.j.createElement(u.a,{"className":"at-list__item-icon item-icon"},o.j.createElement(b.a,{"className":v,"style":this.mergeStyle({"color":i.color||"","fontSize":(i.size||24)+"px"},i.customStyle)})),o.j.createElement(u.a,{"className":"at-list__item-content item-content"},o.j.createElement(u.a,{"className":"item-content__info"},o.j.createElement(u.a,{"className":"item-content__info-title"},_),t&&o.j.createElement(u.a,{"className":"item-content__info-note"},t))),o.j.createElement(u.a,{"className":"at-list__item-extra item-extra"},d&&o.j.createElement(u.a,{"className":"item-extra__info"},d),p&&!d&&o.j.createElement(u.a,{"className":"item-extra__image"},o.j.createElement(m.a,{"className":"item-extra__image-info","mode":"aspectFit","src":p})),s&&!p&&!d&&o.j.createElement(u.a,{"className":"item-extra__switch","onClick":this.handleSwitchClick},o.j.createElement(g,{"color":f,"disabled":a,"checked":h,"onChange":this.handleSwitchChange})),n?o.j.createElement(u.a,{"className":"item-extra__icon"},o.j.createElement(b.a,{"className":"at-icon item-extra__icon-arrow at-icon-chevron-"+n})):null)))}}]),AtListItem}();j.defaultProps={"note":"","disabled":!1,"title":"","thumb":"","isSwitch":!1,"hasBorder":!0,"switchColor":"#6190E8","switchIsCheck":!1,"extraText":"","extraThumb":"","iconInfo":{"value":""},"onSwitchChange":function onSwitchChange(){},"onClick":function onClick(){}},j.propTypes={"note":l.a.string,"disabled":l.a.bool,"title":l.a.string,"thumb":l.a.string,"onClick":l.a.func,"isSwitch":l.a.bool,"hasBorder":l.a.bool,"switchColor":l.a.string,"switchIsCheck":l.a.bool,"extraText":l.a.string,"extraThumb":l.a.string,"onSwitchChange":l.a.func,"arrow":l.a.oneOf(["up","down","right"]),"iconInfo":l.a.shape({"size":l.a.number,"value":l.a.string,"color":l.a.string,"prefixClass":l.a.string,"customStyle":l.a.oneOfType([l.a.object,l.a.string]),"className":l.a.oneOfType([l.a.array,l.a.string])})};var O=n(250),C=(n(223),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),k=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0};var P=function(e){function Setting(){return function setting_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Setting),function setting_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Setting.__proto__||Object.getPrototypeOf(Setting)).apply(this,arguments))}return function setting_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Setting,r["a"].Component),C(Setting,[{"key":"render","value":function render(){return o.j.createElement(u.a,{"className":"setting-content"},o.j.createElement(i.a,{"title":"设置"}),o.j.createElement(h,null,o.j.createElement(j,{"title":"仅WiFi下载","extraText":"打开"}),o.j.createElement(j,{"title":"我要合作","arrow":"right"}),o.j.createElement(j,{"title":"关于我们","arrow":"right"}),o.j.createElement(j,{"title":"清空缓存","extraText":"0M"}),o.j.createElement(j,{"title":"版本号","extraText":"1.3.33"})),o.j.createElement(O.a,{"className":"logout-btn","type":"primary"},"退出登录"))}},{"key":"componentDidMount","value":function componentDidMount(){k(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidMount",this)&&k(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){k(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidShow",this)&&k(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){k(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidHide",this)&&k(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidHide",this).call(this)}}]),Setting}();t.default=P},"84":function(e,t,n){var r=n(85);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(19)(r,o);r.locals&&(e.exports=r.locals)},"85":function(e,t,n){(t=n(18)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""]),e.exports=t},"86":function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(12),a=(n(87),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var c=function(e){function NavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NavBar.__proto__||Object.getPrototypeOf(NavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NavBar,o["a"].Component),a(NavBar,[{"key":"render","value":function render(){var e=this.props,t=e.title,n=void 0===t?"":t,a=e.onRightClick,c=void 0===a?function(){}:a,s=e.rightIcon;return r.j.createElement(i.a,{"className":"nav-bar-comp"},r.j.createElement(i.a,{"className":"icon icon-return","onClick":function onClick(){return o.a.navigateBack()}}),r.j.createElement(i.a,null,n),s?r.j.createElement(i.a,{"className":"icon "+s,"onClick":function onClick(){return c()}}):r.j.createElement(i.a,{"className":"icon"}))}}]),NavBar}();t.a=c},"87":function(e,t,n){},"90":function(e,t,n){"use strict";n(10);var r=n(1),o=n(20),i=n(8),a=n.n(i),c=(n(84),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,r["j"].Component),s(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,i=void 0!==n&&n,s=a()("taro-text",{"taro-text__selectable":i},t);return r.j.createElement("span",c({},Object(o.a)(this.props,["selectable","className"]),{"className":s}),this.props.children)}}]),Text}();t.a=l}}]);