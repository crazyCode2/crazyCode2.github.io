(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"216":function(e,t,n){},"217":function(e,t,n){},"228":function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(0),i=n(79),a=n(236),c=n(6),s=n.n(c),l=n(84),p=n.n(l),u=n(11),f=n(81),h=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var d=function(e){function AtList(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtList),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtList.__proto__||Object.getPrototypeOf(AtList)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtList,f["a"]),h(AtList,[{"key":"render","value":function render(){var e=s()("at-list",{"at-list--no-border":!this.props.hasBorder},this.props.className);return o.j.createElement(u.a,{"className":e},this.props.children)}}]),AtList}();d.defaultProps={"hasBorder":!0},d.propTypes={"hasBorder":p.a.bool};var m=n(220),b=n(83),y=(n(8),n(19)),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var v={"switch":"switch","checkbox":"check"};var g=function(e){function Switch(){!function switch_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Switch);var e=function switch_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Switch.__proto__||Object.getPrototypeOf(Switch)).apply(this,arguments));return e.state={"checked":e.props.checked},e.switchChange=e.switchChange.bind(e),e}return function switch_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Switch,o["j"].Component),w(Switch,[{"key":"switchChange","value":function switchChange(e){var t=this.props.onChange;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.checked}}),t&&t(e),this.setState({"checked":e.target.checked})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){e.hasOwnProperty("checked")&&this.setState({"checked":e.checked})}},{"key":"render","value":function render(){var e=this.props,t=e.type,n=void 0===t?"switch":t,r=e.className,i=e.color,a=s()(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},"weui-"+function parseType(e){if(!v[e])throw new Error("unexpected type");return v[e]}(n),!0),r),c=void 0;return c=this.state.checked?{"borderColor":i||"04BE02","backgroundColor":i||"04BE02"}:"",o.j.createElement("input",_({},Object(y.a)(this.props,["className","checked","onChange"]),{"className":a,"checked":this.state.checked,"type":"checkbox","onChange":this.switchChange,"style":c}))}}]),Switch}(),j=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var O=function(e){function AtListItem(){!function item_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtListItem);var e=function item_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtListItem.__proto__||Object.getPrototypeOf(AtListItem)).apply(this,arguments));return e.handleClick=function(t){"function"!=typeof e.props.onClick||e.props.disabled||e.props.onClick(t)},e.handleSwitchChange=function(t){"function"!=typeof e.props.onSwitchChange||e.props.disabled||e.props.onSwitchChange(t)},e}return function item_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtListItem,f["a"]),j(AtListItem,[{"key":"handleSwitchClick","value":function handleSwitchClick(e){e.stopPropagation()}},{"key":"render","value":function render(){var e=this.props,t=e.note,n=e.arrow,r=e.thumb,i=e.iconInfo,a=e.disabled,c=e.isSwitch,l=e.hasBorder,p=e.extraThumb,f=e.switchColor,h=e.switchIsCheck,d=this.props,y=d.extraText,_=d.title;y=String(y),_=String(_);var w=s()("at-list__item",{"at-list__item--thumb":r,"at-list__item--multiple":t,"at-list__item--disabled":a,"at-list__item--no-border":!l},this.props.className),v=s()(i.prefixClass||"at-icon",function item_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},(i.prefixClass||"at-icon")+"-"+i.value,i.value),i.className);return o.j.createElement(u.a,{"className":w,"onClick":this.handleClick},o.j.createElement(u.a,{"className":"at-list__item-container"},r&&o.j.createElement(u.a,{"className":"at-list__item-thumb item-thumb"},o.j.createElement(m.a,{"className":"item-thumb__info","mode":"scaleToFill","src":r})),i.value&&o.j.createElement(u.a,{"className":"at-list__item-icon item-icon"},o.j.createElement(b.a,{"className":v,"style":this.mergeStyle({"color":i.color||"","fontSize":(i.size||24)+"px"},i.customStyle)})),o.j.createElement(u.a,{"className":"at-list__item-content item-content"},o.j.createElement(u.a,{"className":"item-content__info"},o.j.createElement(u.a,{"className":"item-content__info-title"},_),t&&o.j.createElement(u.a,{"className":"item-content__info-note"},t))),o.j.createElement(u.a,{"className":"at-list__item-extra item-extra"},y&&o.j.createElement(u.a,{"className":"item-extra__info"},y),p&&!y&&o.j.createElement(u.a,{"className":"item-extra__image"},o.j.createElement(m.a,{"className":"item-extra__image-info","mode":"aspectFit","src":p})),c&&!p&&!y&&o.j.createElement(u.a,{"className":"item-extra__switch","onClick":this.handleSwitchClick},o.j.createElement(g,{"color":f,"disabled":a,"checked":h,"onChange":this.handleSwitchChange})),n?o.j.createElement(u.a,{"className":"item-extra__icon"},o.j.createElement(b.a,{"className":"at-icon item-extra__icon-arrow at-icon-chevron-"+n})):null)))}}]),AtListItem}();O.defaultProps={"note":"","disabled":!1,"title":"","thumb":"","isSwitch":!1,"hasBorder":!0,"switchColor":"#6190E8","switchIsCheck":!1,"extraText":"","extraThumb":"","iconInfo":{"value":""},"onSwitchChange":function onSwitchChange(){},"onClick":function onClick(){}},O.propTypes={"note":p.a.string,"disabled":p.a.bool,"title":p.a.string,"thumb":p.a.string,"onClick":p.a.func,"isSwitch":p.a.bool,"hasBorder":p.a.bool,"switchColor":p.a.string,"switchIsCheck":p.a.bool,"extraText":p.a.string,"extraThumb":p.a.string,"onSwitchChange":p.a.func,"arrow":p.a.oneOf(["up","down","right"]),"iconInfo":p.a.shape({"size":p.a.number,"value":p.a.string,"color":p.a.string,"prefixClass":p.a.string,"customStyle":p.a.oneOfType([p.a.object,p.a.string]),"className":p.a.oneOfType([p.a.array,p.a.string])})};var P={"pwdArr":[1,2,3,4,5,6,7,8,9,"",0,"删除"],"init":function init(e){this.template();for(var t=this,n="",r=!1,o=document.getElementsByClassName("pwd_btn"),i=0;i<o.length;i++)o[i].addEventListener("click",function(o){r&&(r=!r,n="");var i=o.target.dataset.item;if(""!=i){if("删除"==i){if(""==n)return;return n=n.substring(0,n.length-1),void t.callbackPwd(n,e,i)}n.length>=6?t.callbackPwd(n,e):(n+=i,t.callbackPwd(n,e))}}),this.reset=function(){r=!0;for(var e=0;e<6;e++)document.querySelectorAll(".pwd_input span")[e].classList.remove("on")};document.getElementsByClassName("pwd_close")[0].addEventListener("click",function(n){t.close(e)})},"callbackPwd":function callbackPwd(e,t,n){"删除"==n?this.removeClass(e):this.addClass(e),t&&t({"pwd":e})},"template":function template(){for(var e="",t="",n=0;n<6;n++)e+='<span class="pwd_line"></span>';for(n=0;n<this.pwdArr.length;n++){var r=this.pwdArr[n];t+="number"==typeof r?'<span class="pwd_btn pwd_line" data-item='+r+">"+r+"</span>":'<span class="pwd_btn pwd_line pwd_gray '+("删除"==r?"pwd_delete":"")+'" data-item='+r+"></span>"}var o='<div class="pwd_fixed" id="pwd_fixed"><div class="pwd_box"><div class="pwd_title"><span class="pwd_close"></span><span>请输入支付密码</span></div><div class="pwd_input pwd_line">'+e+'</div><div class="pwd_num">'+t+"</div></div></div>";document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",o),setTimeout(function(){document.querySelectorAll(".pwd_box")[0].classList.add("on")},100)},"addClass":function addClass(e){for(var t=0;t<e.length;t++)document.querySelectorAll(".pwd_input span")[t].classList.add("on")},"removeClass":function removeClass(e){document.querySelectorAll(".pwd_input span")[e.length].classList.remove("on")},"open":function open(e){this.init(e),e&&e({"type":0})},"close":function close(e){document.querySelectorAll(".pwd_box")[0].classList.remove("on"),e&&e({"type":1}),setTimeout(function(){document.getElementById("pwd_fixed").remove()},300)}},C=(n(216),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),k=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var E=function WithPwdInputHOC(e){return function(t){function PwdInput(e){!function PwdInput_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PwdInput);var t=function PwdInput_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PwdInput.__proto__||Object.getPrototypeOf(PwdInput)).call(this,e));return t.handleClick=function(){var e=t.props.getPwdInputValue;P.open(function(t){e&&e(t)})},t}return function PwdInput_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PwdInput,r.a.Component),k(PwdInput,[{"key":"render","value":function render(){var t=C({},this.props,{"onClick":this.handleClick});return o.j.createElement(e,t)}}]),PwdInput}()},S=(n(217),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),x=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0};var N=E(a.a),T=function(e){function Setting(){return function setting_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Setting),function setting_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Setting.__proto__||Object.getPrototypeOf(Setting)).apply(this,arguments))}return function setting_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Setting,r["a"].Component),S(Setting,[{"key":"render","value":function render(){return o.j.createElement(u.a,{"className":"setting-content"},o.j.createElement(i.a,{"title":"设置"}),o.j.createElement(d,null,o.j.createElement(O,{"title":"仅WiFi下载","extraText":"打开"}),o.j.createElement(O,{"title":"我要合作","arrow":"right"}),o.j.createElement(O,{"title":"关于我们","arrow":"right"}),o.j.createElement(O,{"title":"清空缓存","extraText":"0M"}),o.j.createElement(O,{"title":"版本号","extraText":"1.3.33"})),o.j.createElement(a.a,{"className":"logout-btn","type":"primary"},"退出登录"),o.j.createElement(N,{"className":"logout-btn","getPwdInputValue":function getPwdInputValue(e){console.log(e)}},"付款"))}},{"key":"componentDidMount","value":function componentDidMount(){x(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidMount",this)&&x(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){x(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidShow",this)&&x(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){x(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidHide",this)&&x(Setting.prototype.__proto__||Object.getPrototypeOf(Setting.prototype),"componentDidHide",this).call(this)}}]),Setting}();t.default=T},"77":function(e,t,n){var r=n(78);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(18)(r,o);r.locals&&(e.exports=r.locals)},"78":function(e,t,n){(t=n(17)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""]),e.exports=t},"79":function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(11),a=(n(80),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var c=function(e){function NavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NavBar.__proto__||Object.getPrototypeOf(NavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NavBar,o["a"].Component),a(NavBar,[{"key":"render","value":function render(){var e=this.props,t=e.title,n=void 0===t?"":t,a=e.onRightClick,c=void 0===a?function(){}:a,s=e.rightIcon;return r.j.createElement(i.a,{"className":"nav-bar-comp"},r.j.createElement(i.a,{"className":"icon icon-return","onClick":function onClick(){return o.a.navigateBack()}}),r.j.createElement(i.a,null,n),s?r.j.createElement(i.a,{"className":"icon "+s,"onClick":function onClick(){return c()}}):r.j.createElement(i.a,{"className":"icon"}))}}]),NavBar}();t.a=c},"80":function(e,t,n){},"83":function(e,t,n){"use strict";n(8);var r=n(0),o=n(19),i=n(6),a=n.n(i),c=(n(77),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,r["j"].Component),s(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,i=void 0!==n&&n,s=a()("taro-text",{"taro-text__selectable":i},t);return r.j.createElement("span",c({},Object(o.a)(this.props,["selectable","className"]),{"className":s}),this.props.children)}}]),Text}();t.a=l}}]);