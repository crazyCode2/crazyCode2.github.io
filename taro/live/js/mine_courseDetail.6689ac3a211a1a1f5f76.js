(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"139":function(e,t,n){},"140":function(e,t,n){},"141":function(e,t,n){"use strict";var o=n(2),r=n(1),a=n(13),i=(n(139),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var l=function(e){function NavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NavBar.__proto__||Object.getPrototypeOf(NavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NavBar,o["a"].Component),i(NavBar,[{"key":"render","value":function render(){var e=this.props,t=e.title,n=void 0===t?"":t,i=e.onRightClick,l=void 0===i?function(){}:i,c=e.rightIcon;return r.l.createElement(a.a,{"className":"nav-bar-comp"},r.l.createElement(a.a,{"className":"icon icon-return","onClick":function onClick(){return o.a.navigateBack()}}),r.l.createElement(a.a,null,n),c?r.l.createElement(a.a,{"className":"icon "+c,"onClick":function onClick(){return l()}}):r.l.createElement(a.a,{"className":"icon"}))}}]),NavBar}(),c=(n(140),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var s=function(e){function Layout(){return function Layout_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Layout),function Layout_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Layout.__proto__||Object.getPrototypeOf(Layout)).apply(this,arguments))}return function Layout_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Layout,o["a"].Component),c(Layout,[{"key":"render","value":function render(){var e=this.props,t=e.children,n=e.title,o=void 0===n?"":n,i=e.rightIcon,c=e.onRightClick;return r.l.createElement(a.a,{"className":"layout-content"},r.l.createElement(l,{"title":o,"rightIcon":i,"onRightClick":c}),r.l.createElement(a.a,{"className":"layout-content__children","style":{}},t))}}]),Layout}();t.a=s},"231":function(e,t,n){},"274":function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(2),a=n(275),i=n(13),l=n(291),c=n(271),s=n(276),u=n(277),m=n(278),p=n(301),f=n(243),_=n(141),y=n(24),b=(n(231),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),d=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),h=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=[{"title":"信息"},{"title":"目录"},{"title":"评论"}],E=function(e){function CourseDetail(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CourseDetail);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=CourseDetail.__proto__||Object.getPrototypeOf(CourseDetail)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"课程详情"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CourseDetail,r["a"].Component),d(CourseDetail,[{"key":"render","value":function render(){var e=this,t=(this.props,r.a.useState(0)),n=b(t,2),d=n[0],h=n[1],E=r.a.useState(y.d.chapter[0].src),N=b(E,2),C=N[0],g=N[1],O=r.a.useState(y.d.cover),w=b(O,2),j=w[0],D=(w[1],Object(a.a)("video",this));return r.a.useEffect(function(){C&&D&&D.play()},[C]),o.l.createElement(_.a,{"title":"课程详情"},o.l.createElement(i.a,{"className":"course-detail__content"},o.l.createElement(i.a,{"className":"video-box"},o.l.createElement(l.a,{"src":C,"controls":!0,"poster":j,"id":"video","enablePlayGesture":!0,"x5-video-player-type":"h5","x5-video-player-fullscreen":"true","x5-video-orientation":"landscape","objectFit":"cover","onEnded":function handleEnded(){var e=y.d.chapter,t=void 0===e?[]:e,n=t.findIndex(function(e){return e.src===C});n+1<t.length&&g(t[n+1].src)},"ref":function ref(t){e.__taroref_video=t}})),o.l.createElement(s.a,{"current":d,"tabList":v,"onClick":function onClick(e){return h(e)},"className":"tab-content","swipeable":!1},o.l.createElement(u.a,{"className":"tab-content-item","current":d,"index":0},o.l.createElement(i.a,{"className":"info-box"},o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"作品名称："),o.l.createElement(i.a,{"className":"info-item__detail"},y.d.name)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"风格："),o.l.createElement(i.a,{"className":"info-item__detail"},y.d.style)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"地区："),o.l.createElement(i.a,{"className":"info-item__detail"},y.d.region)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"开播时间："),o.l.createElement(i.a,{"className":"info-item__detail"},y.d.airTime)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"声优："),o.l.createElement(i.a,{"className":"info-item__detail"},y.d.voiceActor)),o.l.createElement(i.a,{"className":"info-item"},o.l.createElement(i.a,{"className":"info-item__label"},"简介："),o.l.createElement(i.a,{"className":"info-item__detail"},y.d.brief)))),o.l.createElement(u.a,{"className":"tab-content-item","current":d,"index":1},o.l.createElement(i.a,{"className":"chapter-box"},o.l.createElement(m.a,null,y.d.chapter&&y.d.chapter.map(function(e,t){return o.l.createElement(p.a,{"key":t,"title":e.title,"arrow":"right","thumb":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png","onClick":function onClick(){return g(e.src)},"extraText":C===e.src?"播放中...":""})})))),o.l.createElement(u.a,{"className":"tab-content-item","current":d,"index":2},o.l.createElement(i.a,{"className":"comment-box"},y.b.map(function(e,t){return o.l.createElement(i.a,{"key":t,"className":"comment-box-item"},o.l.createElement(i.a,{"className":"comment-box-item__top"},o.l.createElement(c.a,{"className":"comment-box-item__avatar","mode":"widthFix","src":y.j}),o.l.createElement(i.a,{"className":"comment-box-item__info"},o.l.createElement(i.a,{"className":"comment-box-item__name"},e.name),o.l.createElement(i.a,{"className":"comment-box-item__time"},e.time))),o.l.createElement(i.a,{"className":"comment-box-item__cont"},e.cont),o.l.createElement(i.a,{"className":"comment-box-item__bottom"},o.l.createElement(f.a,{"className":"comment-box-item__icon","value":"heart","size":"20"}),o.l.createElement(f.a,{"className":"comment-box-item__icon","value":"star","size":"20"})))}))))))}},{"key":"componentDidMount","value":function componentDidMount(){h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidMount",this)&&h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidShow",this)&&h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidHide",this)&&h(CourseDetail.prototype.__proto__||Object.getPrototypeOf(CourseDetail.prototype),"componentDidHide",this).call(this)}}]),CourseDetail}();E.config={"navigationBarTitleText":"课程详情"},t.default=E}}]);