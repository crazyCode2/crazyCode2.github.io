(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"139":function(e,t,n){},"140":function(e,t,n){},"141":function(e,t,n){"use strict";var o=n(2),r=n(1),a=n(13),i=(n(139),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var l=function(e){function NavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NavBar.__proto__||Object.getPrototypeOf(NavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NavBar,o["a"].Component),i(NavBar,[{"key":"render","value":function render(){var e=this.props,t=e.title,n=void 0===t?"":t,i=e.onRightClick,l=void 0===i?function(){}:i,c=e.rightIcon;return r.l.createElement(a.a,{"className":"nav-bar-comp"},r.l.createElement(a.a,{"className":"icon icon-return","onClick":function onClick(){return o.a.navigateBack()}}),r.l.createElement(a.a,null,n),c?r.l.createElement(a.a,{"className":"icon "+c,"onClick":function onClick(){return l()}}):r.l.createElement(a.a,{"className":"icon"}))}}]),NavBar}(),c=(n(140),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var s=function(e){function Layout(){return function Layout_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Layout),function Layout_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Layout.__proto__||Object.getPrototypeOf(Layout)).apply(this,arguments))}return function Layout_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Layout,o["a"].Component),c(Layout,[{"key":"render","value":function render(){var e=this.props,t=e.children,n=e.title,o=void 0===n?"":n,i=e.rightIcon,c=e.onRightClick;return r.l.createElement(a.a,{"className":"layout-content"},r.l.createElement(l,{"title":o,"rightIcon":i,"onRightClick":c}),r.l.createElement(a.a,{"className":"layout-content__children","style":{}},t))}}]),Layout}();t.a=s},"234":function(e,t,n){},"276":function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(2),a=n(277),i=n(13),l=n(295),c=n(273),s=n(278),u=n(279),m=n(280),p=n(304),f=n(189),_=n(141),y=n(24),b=(n(234),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),d=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),h=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=[{"title":"信息"},{"title":"目录"},{"title":"评论"}],E=function(e){function CourseDetail(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CourseDetail);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=CourseDetail.__proto__||Object.getPrototypeOf(CourseDetail)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"课程详情"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CourseDetail,r["a"].Component),d(CourseDetail,[{"key":"render","value":function render(){var e=this,t=(this.props,r.a.useRouter()),n=r.a.useState(0),d=b(n,2),h=d[0],E=d[1],N=r.a.useState(""),C=b(N,2),g=C[0],O=C[1],w=r.a.useState(""),D=b(w,2),j=D[0],x=D[1],P=r.a.useState({}),k=b(P,2),S=k[0],T=k[1],R=Object(a.a)("video",this);return r.a.useEffect(function(){"2"===t.params.id?(x(y.e.cover),T(y.e)):(x(y.d.cover),T(y.d))},[t.params.id]),r.a.useEffect(function(){g&&R&&R.play()},[g]),o.l.createElement(_.a,{"title":"课程详情"},o.l.createElement(i.a,{"className":"course-detail__content"},o.l.createElement(i.a,{"className":"video-box"},o.l.createElement(l.a,{"src":g,"controls":!0,"poster":j,"id":"video","enablePlayGesture":!0,"x5-video-player-type":"h5","x5-video-player-fullscreen":"true","x5-video-orientation":"landscape","objectFit":"cover","onEnded":function handleEnded(){var e=S.chapter,t=void 0===e?[]:e,n=t.findIndex(function(e){return e.src===g});n+1<t.length&&O(t[n+1].src)},"ref":function ref(t){e.__taroref_video=t}})),o.l.createElement(s.a,{"current":h,"tabList":v,"onClick":function onClick(e){return E(e)},"className":"tab-content","swipeable":!1},o.l.createElement(u.a,{"className":"tab-content-item","current":h,"index":0},o.l.createElement(i.a,{"className":"info-box"},o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"作品名称："),o.l.createElement(i.a,{"className":"info-item__detail"},S.name)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"风格："),o.l.createElement(i.a,{"className":"info-item__detail"},S.style)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"地区："),o.l.createElement(i.a,{"className":"info-item__detail"},S.region)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"开播时间："),o.l.createElement(i.a,{"className":"info-item__detail"},S.airTime)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"声优："),o.l.createElement(i.a,{"className":"info-item__detail"},S.voiceActor)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"简介："),o.l.createElement(i.a,{"className":"info-item__detail"},S.brief)))),o.l.createElement(u.a,{"className":"tab-content-item","current":h,"index":1},o.l.createElement(i.a,{"className":"chapter-box"},o.l.createElement(m.a,null,S.chapter&&S.chapter.map(function(e,t){return o.l.createElement(p.a,{"key":t,"title":e.title,"arrow":"right","thumb":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png","onClick":function onClick(){return O(e.src)},"extraText":g===e.src?"播放中...":""})})))),o.l.createElement(u.a,{"className":"tab-content-item","current":h,"index":2},o.l.createElement(i.a,{"className":"comment-box"},y.b.map(function(e,t){return o.l.createElement(i.a,{"key":t,"className":"comment-box-item"},o.l.createElement(i.a,{"className":"comment-box-item__top"},o.l.createElement(c.a,{"className":"comment-box-item__avatar","mode":"widthFix","src":y.k}),o.l.createElement(i.a,{"className":"comment-box-item__info"},o.l.createElement(i.a,{"className":"comment-box-item__name"},e.name),o.l.createElement(i.a,{"className":"comment-box-item__time"},e.time))),o.l.createElement(i.a,{"className":"comment-box-item__cont"},e.cont),o.l.createElement(i.a,{"className":"comment-box-item__bottom"},o.l.createElement(f.a,{"className":"comment-box-item__icon","value":"heart","size":"20"}),o.l.createElement(f.a,{"className":"comment-box-item__icon","value":"star","size":"20"})))}))))))}},{"key":"componentDidMount","value":function componentDidMount(){h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidMount",this)&&h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidShow",this)&&h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidHide",this)&&h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidHide",this).call(this)}}]),CourseDetail}();E.config={"navigationBarTitleText":"课程详情"},t.default=E}}]);