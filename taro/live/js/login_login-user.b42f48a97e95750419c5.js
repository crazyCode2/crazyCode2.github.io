(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"122":function(e,t,n){var o=n(123);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(22)(o,r);o.locals&&(e.exports=o.locals)},"123":function(e,t,n){(t=n(21)(!1)).push([e.i,"input {\n  display: block;\n  height: 24px;\n  text-align: inherit;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n}",""]),e.exports=t},"129":function(e,t,n){"use strict";n(12);var o=n(1),r=n(20),i=n(9),a=n.n(i),u=(n(122),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function getTrueType(e,t,n){if(!e)throw new Error("unexpected type");return"search"===t&&(e="search"),n&&(e="password"),"digit"===e&&(e="number"),e}var c=function(e){function Input(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Input);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Input.__proto__||Object.getPrototypeOf(Input)).apply(this,arguments));return e.onInput=e.onInput.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e.handleComposition=e.handleComposition.bind(e),e.isOnComposition=!1,e.onInputExcuted=!1,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Input,o["l"].Component),s(Input,[{"key":"componentDidMount","value":function componentDidMount(){"file"===this.props.type&&this.inputRef.addEventListener("change",this.onInput)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){"file"===this.props.type&&this.inputRef.removeEventListener("change",this.onInput)}},{"key":"onInput","value":function onInput(e){var t=this.props,n=t.type,o=t.maxLength,r=t.confirmType,i=t.password,a=t.onInput,onInput=void 0===a?"":a,u=t.onChange,s=void 0===u?"":u;if(!this.isOnComposition&&!this.onInputExcuted){var c=e.target.value,l=getTrueType(n,r,i);if(this.onInputExcuted=!0,"number"===l&&c&&o<=c.length&&(c=c.substring(0,o),e.target.value=c),Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":c}}),!(["number","file"].indexOf(l)>=0)){var p=e.target.selectionEnd;setTimeout(function(){e.target.selectionStart=p,e.target.selectionEnd=p})}if(s)return s(e);if(onInput)return onInput(e)}}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;this.onInputExcuted=!1,Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"onKeyDown","value":function onKeyDown(e){var t=this.props,n=t.onConfirm,onKeyDown=t.onKeyDown;this.onInputExcuted=!1,onKeyDown&&onKeyDown(e),13===e.keyCode&&n&&(Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),n(e))}},{"key":"handleComposition","value":function handleComposition(e){e.target instanceof HTMLInputElement&&("compositionend"===e.type?(this.isOnComposition=!1,this.onInputExcuted=!1,this.onInput(e)):this.isOnComposition=!0)}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.className,i=void 0===n?"":n,s=t.placeholder,c=t.type,l=void 0===c?"text":c,p=t.password,f=t.disabled,d=t.maxLength,m=t.confirmType,h=void 0===m?"":m,g=t.focus,b=void 0!==g&&g,y=t.value,v=a()("weui-input",i),_=Object(r.a)(this.props,["className","placeholder","disabled","max","onChange","onFocus","onBlur","type","focus"]);return"value"in this.props&&(_.value=function fixControlledValue(e){return void 0===e||null===e?"":e}(y)),o.l.createElement("input",u({"ref":function ref(t){e.inputRef=t}},_,{"className":v,"placeholder":s,"disabled":f,"maxlength":d,"onInput":this.onInput,"onFocus":this.onFocus,"onBlur":this.onBlur,"autofocus":b,"onKeyDown":this.onKeyDown,"type":getTrueType(l,h,p),"onCompositionStart":this.handleComposition,"onCompositionEnd":this.handleComposition}))}}]),Input}();c.defaultProps={"type":"text"},t.a=c},"132":function(e,t,n){"use strict";n.d(t,"a",function(){return getWindowWidth}),n.d(t,"b",function(){return postcss});var o=n(277),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function getWindowWidth(){return Object(o.a)().windowWidth+"px"}function postcss(e){if(!e)return e;var t=e.background,n=function _objectWithoutProperties(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["background"]),o={};return t&&(o.backgroundColor=t),r({},n,o)}},"247":function(e,t,n){var o;"function"==typeof Symbol&&Symbol.iterator;!function(r){"use strict";function safeAdd(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function md5cmn(e,t,n,o,r,i){return safeAdd(function bitRotateLeft(e,t){return e<<t|e>>>32-t}(safeAdd(safeAdd(t,e),safeAdd(o,i)),r),n)}function md5ff(e,t,n,o,r,i,a){return md5cmn(t&n|~t&o,e,t,r,i,a)}function md5gg(e,t,n,o,r,i,a){return md5cmn(t&o|n&~o,e,t,r,i,a)}function md5hh(e,t,n,o,r,i,a){return md5cmn(t^n^o,e,t,r,i,a)}function md5ii(e,t,n,o,r,i,a){return md5cmn(n^(t|~o),e,t,r,i,a)}function binlMD5(e,t){var n,o,r,i,a;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var u=1732584193,s=-271733879,c=-1732584194,l=271733878;for(n=0;n<e.length;n+=16)o=u,r=s,i=c,a=l,s=md5ii(s=md5ii(s=md5ii(s=md5ii(s=md5hh(s=md5hh(s=md5hh(s=md5hh(s=md5gg(s=md5gg(s=md5gg(s=md5gg(s=md5ff(s=md5ff(s=md5ff(s=md5ff(s,c=md5ff(c,l=md5ff(l,u=md5ff(u,s,c,l,e[n],7,-680876936),s,c,e[n+1],12,-389564586),u,s,e[n+2],17,606105819),l,u,e[n+3],22,-1044525330),c=md5ff(c,l=md5ff(l,u=md5ff(u,s,c,l,e[n+4],7,-176418897),s,c,e[n+5],12,1200080426),u,s,e[n+6],17,-1473231341),l,u,e[n+7],22,-45705983),c=md5ff(c,l=md5ff(l,u=md5ff(u,s,c,l,e[n+8],7,1770035416),s,c,e[n+9],12,-1958414417),u,s,e[n+10],17,-42063),l,u,e[n+11],22,-1990404162),c=md5ff(c,l=md5ff(l,u=md5ff(u,s,c,l,e[n+12],7,1804603682),s,c,e[n+13],12,-40341101),u,s,e[n+14],17,-1502002290),l,u,e[n+15],22,1236535329),c=md5gg(c,l=md5gg(l,u=md5gg(u,s,c,l,e[n+1],5,-165796510),s,c,e[n+6],9,-1069501632),u,s,e[n+11],14,643717713),l,u,e[n],20,-373897302),c=md5gg(c,l=md5gg(l,u=md5gg(u,s,c,l,e[n+5],5,-701558691),s,c,e[n+10],9,38016083),u,s,e[n+15],14,-660478335),l,u,e[n+4],20,-405537848),c=md5gg(c,l=md5gg(l,u=md5gg(u,s,c,l,e[n+9],5,568446438),s,c,e[n+14],9,-1019803690),u,s,e[n+3],14,-187363961),l,u,e[n+8],20,1163531501),c=md5gg(c,l=md5gg(l,u=md5gg(u,s,c,l,e[n+13],5,-1444681467),s,c,e[n+2],9,-51403784),u,s,e[n+7],14,1735328473),l,u,e[n+12],20,-1926607734),c=md5hh(c,l=md5hh(l,u=md5hh(u,s,c,l,e[n+5],4,-378558),s,c,e[n+8],11,-2022574463),u,s,e[n+11],16,1839030562),l,u,e[n+14],23,-35309556),c=md5hh(c,l=md5hh(l,u=md5hh(u,s,c,l,e[n+1],4,-1530992060),s,c,e[n+4],11,1272893353),u,s,e[n+7],16,-155497632),l,u,e[n+10],23,-1094730640),c=md5hh(c,l=md5hh(l,u=md5hh(u,s,c,l,e[n+13],4,681279174),s,c,e[n],11,-358537222),u,s,e[n+3],16,-722521979),l,u,e[n+6],23,76029189),c=md5hh(c,l=md5hh(l,u=md5hh(u,s,c,l,e[n+9],4,-640364487),s,c,e[n+12],11,-421815835),u,s,e[n+15],16,530742520),l,u,e[n+2],23,-995338651),c=md5ii(c,l=md5ii(l,u=md5ii(u,s,c,l,e[n],6,-198630844),s,c,e[n+7],10,1126891415),u,s,e[n+14],15,-1416354905),l,u,e[n+5],21,-57434055),c=md5ii(c,l=md5ii(l,u=md5ii(u,s,c,l,e[n+12],6,1700485571),s,c,e[n+3],10,-1894986606),u,s,e[n+10],15,-1051523),l,u,e[n+1],21,-2054922799),c=md5ii(c,l=md5ii(l,u=md5ii(u,s,c,l,e[n+8],6,1873313359),s,c,e[n+15],10,-30611744),u,s,e[n+6],15,-1560198380),l,u,e[n+13],21,1309151649),c=md5ii(c,l=md5ii(l,u=md5ii(u,s,c,l,e[n+4],6,-145523070),s,c,e[n+11],10,-1120210379),u,s,e[n+2],15,718787259),l,u,e[n+9],21,-343485551),u=safeAdd(u,o),s=safeAdd(s,r),c=safeAdd(c,i),l=safeAdd(l,a);return[u,s,c,l]}function binl2rstr(e){var t,n="",o=32*e.length;for(t=0;t<o;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function rstr2binl(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var o=8*e.length;for(t=0;t<o;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function rstr2hex(e){var t,n,o="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),o+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return o}function str2rstrUTF8(e){return unescape(encodeURIComponent(e))}function rawMD5(e){return function rstrMD5(e){return binl2rstr(binlMD5(rstr2binl(e),8*e.length))}(str2rstrUTF8(e))}function rawHMACMD5(e,t){return function rstrHMACMD5(e,t){var n,o,r=rstr2binl(e),i=[],a=[];for(i[15]=a[15]=void 0,r.length>16&&(r=binlMD5(r,8*e.length)),n=0;n<16;n+=1)i[n]=909522486^r[n],a[n]=1549556828^r[n];return o=binlMD5(i.concat(rstr2binl(t)),512+8*t.length),binl2rstr(binlMD5(a.concat(o),640))}(str2rstrUTF8(e),str2rstrUTF8(t))}function md5(e,t,n){return t?n?rawHMACMD5(t,e):function hexHMACMD5(e,t){return rstr2hex(rawHMACMD5(e,t))}(t,e):n?rawMD5(e):function hexMD5(e){return rstr2hex(rawMD5(e))}(e)}void 0===(o=function(){return md5}.call(t,n,t,e))||(e.exports=o)}()},"248":function(e,t,n){},"249":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAWlBMVEUAAADMzMzNzc3b29vNzc3MzMzNzc3Nzc3Nzc3MzMzNzc3Nzc3Nzc3MzMzOzs7Ozs7Pz8/Ozs7Q0NDPz8/MzMz////e3t729vby8vLS0tLp6en5+fnj4+PY2NjOPiM4AAAAFHRSTlMA7NQK+fDk38KwrJuFeXJjT0k1IBrTjlAAAAFrSURBVEjHndfbroJADIXhziBnQcSFIOj7v+aeGLPJVFqh/yXxMwRMp9JmfVsXuTudXF7UbU8766oUUWnV/VZJ47CRaxLdXTIIZReFXT2U/FVyZ/zovMmSEj8rk29389iRv305h105JhOPnfn4bkvsrlSe5+5ne8Wh1vfpj0H//zvDwS6fJ5odhVnyhg3iHgjp15o3ZK9+HpY7d9OwRNRRqGPfPYSYHMOlObrSBVghbuEyuNAz+lAVYMrgfVjl6iY2TYh6QJGrY/XUQpKaQ0s1RKk41FRAkaJDQTkUKTrk5KBI0cHRCYJUHU4ccjlCgk6C4xC/T36rueIUmVOhuFGWBdWym3AXZU2t4iDLlnrFKbInSkWnyJSIKslpsvoeHZg+jskXHx18WD1Wt0o+c9zWeFy4C5Lfa7M1kB/zE7zXHLkssR4B1kPHfMxZD1brUW5eHqzrin1Bsq9k9iXQvnbaF137am1f5s1/H/4AEny/i8HiT28AAAAASUVORK5CYII="},"250":function(e,t,n){},"251":function(e,t,n){},"252":function(e,t,n){e.exports=n.p+"static/images/login_logo.e066f075cdab631b400e00c1bb866d67.png"},"253":function(e,t,n){e.exports=n.p+"static/images/login_bg.28fcaceb109bb8f3af9da6dd0a979cbf.jpg"},"297":function(e,t,n){"use strict";n.r(t);var o,r,i=n(1),a=n(2),u=n(14),s=n(271),c=n(93),l=n(247),p=n.n(l),f=n(131),d=n(132),m=n(9),h=n.n(m),g=(n(248),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b,y,v=(r=o=function(e){function ButtonItem(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ButtonItem);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=ButtonItem.__proto__||Object.getPrototypeOf(ButtonItem)).call.apply(e,[this].concat(r))),n.getCls=function(e){var t=n.props,o=t.type,r=t.plain,i=t.disabled;return h()(e,"primary"===o&&e+"--primary",r&&e+"--plain",i&&e+"--disabled")},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ButtonItem,a["a"].Component),g(ButtonItem,[{"key":"render","value":function render(){var e=this.props,t=e.compStyle,n=e.textStyle,o=e.openType,r=e.loading,a=e.disabled,u=e.text,s=e.onClick,l=e.onGetUserInfo;return i.l.createElement(f.a,{"className":this.getCls("comp-button"),"style":Object(d.b)(t),"loading":r,"disabled":a,"openType":o,"onClick":s,"onGetUserInfo":l},i.l.createElement(c.a,{"className":this.getCls("comp-button__txt"),"style":n},u))}}]),ButtonItem}(),o.defaultProps={"compStyle":"","textStyle":"","openType":"","plain":!1,"loading":!1,"disabled":!1,"onClick":function onClick(){},"onGetUserInfo":function onGetUserInfo(){}},r),_=n(129),w=n(249),O=n.n(w),I=(n(250),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());function input_item_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var C=(y=b=function(e){function InputItem(){var e,t,n;!function input_item_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,InputItem);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=n=input_item_possibleConstructorReturn(this,(e=InputItem.__proto__||Object.getPrototypeOf(InputItem)).call.apply(e,[this].concat(r))),n.handleInput=function(e){n.props.onInput(e.detail.value)},n.handleClear=function(){n.props.onInput("")},input_item_possibleConstructorReturn(n,t)}return function input_item_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(InputItem,a["a"].Component),I(InputItem,[{"key":"render","value":function render(){var e=this.props,t=e.type,n=e.value,o=e.placeholder,r=e.focus,a=e.password,c=e.compStyle,l=e.inputStyle,p=e.onFocus,f=e.onBlur;return i.l.createElement(u.a,{"className":"comp-input-item","style":c},i.l.createElement(_.a,{"className":"comp-input-item__input","style":l,"type":t,"value":n,"focus":r,"password":a,"placeholder":o,"placeholderClass":"comp-input-item__input--placeholder","onInput":this.handleInput,"onFocus":p,"onBlur":f}),!!n&&i.l.createElement(u.a,{"className":"comp-input-item__clear","onClick":this.handleClear},i.l.createElement(s.a,{"className":"comp-input-item__clear-img","src":O.a})))}}]),InputItem}(),b.defaultProps={"type":"text","value":"","placeholder":"","focus":!1,"password":!1,"compStyle":"","inputStyle":"","onInput":function onInput(){},"onFocus":function onFocus(){},"onBlur":function onBlur(){}},y),j=n(23),x=n(94),A=(n(251),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),P=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),k=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0};function login_user_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E=n(252),T=n(253),M=["qq.com","gmail.com","163.com","126.com","yeah.net","vip.163.com","vip.126.com"],D=function(e){function Login(){var e,t,n;!function login_user_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Login);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=n=login_user_possibleConstructorReturn(this,(e=Login.__proto__||Object.getPrototypeOf(Login)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"登录"},login_user_possibleConstructorReturn(n,t)}return function login_user_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Login,a["a"].Component),P(Login,[{"key":"render","value":function render(){var e=this.props.loginStore,t=a.a.useState(""),n=A(t,2),o=n[0],r=n[1],l=a.a.useState(""),f=A(l,2),d=f[0],m=f[1],h=a.a.useState(!1),g=A(h,2),b=g[0],y=g[1],_=a.a.useState(!1),w=A(_,2),O=w[0],I=w[1];function handleInput(e,t){if("username"===e){var n=/\.(com|net)$/.test(t);b||!t||n?!b||t&&!n||y(!1):y(!0),r(t)}else m(t)}return a.a.useEffect(function(){e.userInfo.status?Object(x.a)({"url":"/pages/index/index","method":"switchTab"}):function init(){m(""),y(!1),I(!1)}()},[e.userInfo]),i.l.createElement(u.a,{"className":"user-login-email","style":{"backgroundImage":"url("+T+")"}},i.l.createElement(u.a,{"className":"user-login-email__logo"},i.l.createElement(s.a,{"src":E,"className":"user-login-email__logo-img","mode":"widthFix"})),i.l.createElement(u.a,{"className":"user-login-email__wrap"},i.l.createElement(C,{"value":o,"placeholder":"邮箱账号","onInput":function onInput(e){return handleInput("username",e)}}),i.l.createElement(C,{"password":!0,"value":d,"placeholder":"密码","onInput":function onInput(e){return handleInput("password",e)}}),b&&i.l.createElement(u.a,{"className":"user-login-email__suggest"},M.map(function(e){var t=o.split("@")[0]+"@"+e;return i.l.createElement(u.a,{"key":e,"className":"user-login-email__suggest-item","onClick":function onClick(){return handleInput("username",t)}},i.l.createElement(c.a,{"className":"user-login-email__suggest-item-txt"},t))}))),i.l.createElement(u.a,{"className":"user-login-email__btn"},i.l.createElement(v,{"text":"登录","disabled":!o||!d,"loading":O,"onClick":function handleLogin(){var t={"email":o,"password":p()(d)};I(!0),e.login(t)},"compStyle":{"background":"#b59f7b","borderRadius":a.a.pxTransform(4)},"textStyle":{"color":o&&d?"#ffffff":"rgba(255, 255, 255, 0.4)"}})))}},{"key":"componentDidMount","value":function componentDidMount(){k(Login.prototype.__proto__||Object.getPrototypeOf(Login.prototype),"componentDidMount",this)&&k(Login.prototype.__proto__||Object.getPrototypeOf(Login.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){k(Login.prototype.__proto__||Object.getPrototypeOf(Login.prototype),"componentDidShow",this)&&k(Login.prototype.__proto__||Object.getPrototypeOf(Login.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){k(Login.prototype.__proto__||Object.getPrototypeOf(Login.prototype),"componentDidHide",this)&&k(Login.prototype.__proto__||Object.getPrototypeOf(Login.prototype),"componentDidHide",this).call(this)}}]),Login}();D.config={"navigationBarTitleText":"登录"};t.default=Object(j.b)("loginStore")(Object(j.c)(D))},"87":function(e,t,n){var o=n(88);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(22)(o,r);o.locals&&(e.exports=o.locals)},"88":function(e,t,n){(t=n(21)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""]),e.exports=t},"93":function(e,t,n){"use strict";n(12);var o=n(1),r=n(20),i=n(9),a=n.n(i),u=(n(87),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var c=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,o["l"].Component),s(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,i=void 0!==n&&n,s=a()("taro-text",{"taro-text__selectable":i},t);return o.l.createElement("span",u({},Object(r.a)(this.props,["selectable","className"]),{"className":s}),this.props.children)}}]),Text}();t.a=c},"94":function(e,t,n){"use strict";n.d(t,"a",function(){return jump});var o=n(2),r="/pages/webview/webview";function jump(e){var t=e.url,n=e.title,i=void 0===n?"":n,a=e.payload,u=void 0===a?{}:a,s=e.method,c=void 0===s?"navigateTo":s;if(/^https?:\/\//.test(t))o.a[c]({"url":urlStringify(r,{"url":t,"title":i})});else if(/^\/pages\//.test(t)){if("switchTab"===c)return o.a.navigateBack({"delta":o.a.getCurrentPages().length-1}),void setTimeout(function(){o.a.redirectTo({"url":t})},100);o.a[c]({"url":urlStringify(t,u)})}}function urlStringify(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=Object.keys(t).map(function(e){return e+"="+(n?encodeURIComponent(t[e]):t[e])});return o.length?e+"?"+o.join("&"):e}}}]);