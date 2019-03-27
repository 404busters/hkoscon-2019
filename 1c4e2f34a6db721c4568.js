(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{142:function(t,e,n){"use strict";n.d(e,"a",function(){return k}),n.d(e,"c",function(){return C}),n.d(e,"b",function(){return w});var c=n(12),o=(n(45),n(61),n(146),n(90),n(23)),r=(n(24),n(147)),l=n.n(r),_=n(149),h=n.n(_),f=n(143),d=n.n(f),m=n(150),v=n.n(m);function k(){return l.a.get("/hkoscon-2019/data/timetable.json").then(function(t){return{days:t.data.days}})}function C(){return k().then(function(t){var e=t.days,n=new Map;return v()(e,function(t){return v()(t.timeslots,function(t){return t.events})}).filter(function(t){return!(!t||!t.topic)&&(!n.has(t.internal)&&(n.set(t.internal,!0),!0))}).sort(function(t,e){return t.display.localeCompare(e.display)})})}function w(t){return k().then(function(e){var n=e.days,map=new Map;return n.forEach(function(t){var e=t.day,n=t.date;t.timeslots.forEach(function(t){var r=t.startTime,l=t.endTime;t.events.forEach(function(t){t.topic&&map.set(function(t){if("object"!==Object(o.a)(t))return"";if("string"!=typeof t.internal)return t.replace(/[^_\W]+/g,"","").replace(" ","-").toLowerCase();var u=d.a.parse(t.internal);return h.a.basename(u.pathname)}(t),Object(c.a)({day:e,date:n,startTime:r,endTime:l},t))})})}),map.get(t)})}},153:function(t,e,n){},198:function(t,e,n){"use strict";var c;!function(o){if("function"!=typeof r){var r=function(t){return t};r.nonNative=!0}const l=r("plaintext"),_=r("html"),h=r("comment"),f=/<(\w*)>/g,d=/<\/?([^\s\/>]+)/;function m(html,t,e){return k(html=html||"",v(t=t||[],e=e||""))}function v(t,e){return{allowable_tags:t=function(t){let e=new Set;if("string"==typeof t){let n;for(;n=f.exec(t);)e.add(n[1])}else r.nonNative||"function"!=typeof t[r.iterator]?"function"==typeof t.forEach&&t.forEach(e.add,e):e=new Set(t);return e}(t),tag_replacement:e,state:l,tag_buffer:"",depth:0,in_quote_char:""}}function k(html,t){let e=t.allowable_tags,n=t.tag_replacement,c=t.state,o=t.tag_buffer,r=t.depth,f=t.in_quote_char,output="";for(let t=0,d=html.length;t<d;t++){let d=html[t];if(c===l)switch(d){case"<":c=_,o+=d;break;default:output+=d}else if(c===_)switch(d){case"<":if(f)break;r++;break;case">":if(f)break;if(r){r--;break}f="",c=l,o+=">",e.has(C(o))?output+=o:output+=n,o="";break;case'"':case"'":f=d===f?"":f||d,o+=d;break;case"-":"<!-"===o&&(c=h),o+=d;break;case" ":case"\n":if("<"===o){c=l,output+="< ",o="";break}o+=d;break;default:o+=d}else if(c===h)switch(d){case">":"--"==o.slice(-2)&&(c=l),o="";break;default:o+=d}}return t.state=c,t.tag_buffer=o,t.depth=r,t.in_quote_char=f,output}function C(t){let e=d.exec(t);return e?e[1].toLowerCase():null}m.init_streaming_mode=function(t,e){let n=v(t=t||[],e=e||"");return function(html){return k(html||"",n)}},void 0===(c=function(){return m}.call(e,n,e,t))||(t.exports=c)}()},199:function(t,e,n){"use strict";var c=n(153);n.n(c).a},214:function(t,e,n){"use strict";n.r(e);n(46),n(90);var c=n(198),o=n.n(c),r=n(142);var l={name:"TopicPage",head:function(){var t,e,title="".concat(this.topic.display," | Hong Kong Open Source Conference 2019"),n=(t=o()(this.topic.description).replace(/[\n\r]+/," "),e=250,t.length>e?"".concat(t.substr(0,e-1),"..."):t),image="";return""===(image=this.topic.speakers.reduce(function(t,e){return void 0!==e.thumbnail&&""!==e.thumbnail?(console.log("currentValue.thumbnail",e.thumbnail),e.thumbnail):t},image))&&(image="https://hkoscon.org/logo.png"),{title:title,meta:[{hid:"og:title",name:"og:title",content:title},{hid:"description",name:"description",content:n},{hid:"og:image",name:"og:image",content:image}]}},components:{AuthorCard:function(){return n.e(20).then(n.bind(null,220))}},data:function(){return{canSave:!0,shareModal:!1,hostname:"hkoscon.org"}},computed:{speakers:function(){return this.topic.speakers.map(function(t){return t.name}).join(", ")},shareLink:function(){return"https://".concat(this.hostname).concat("/hkoscon-2019","/topic/").concat(this.id,"?utm_medium=share&utm_campaign=website_share")},twitterShareLink:function(){var t="".concat(this.shareLink,"&utm_source=twitter"),text="".concat(this.speakers," in going to deliver ").concat(this.topic.display," in HKOSCon 2019");return"https://twitter.com/share?text=".concat(encodeURIComponent(text),"&via=hkoscon&hashtags=").concat(encodeURIComponent("hkoscon,hkoscon2019"),"&url=").concat(encodeURIComponent(t))},linkedInShareLink:function(){var t="".concat(this.shareLink,"&utm_source=linkedin");return"https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURIComponent(t))},plurkShareLink:function(){var t="".concat(this.shareLink,"&utm_source=plurk"),text="".concat(t," (").concat(this.topic.display," | Hoog Kong Open Source Conference)");return"http://www.plurk.com/?qualifier=shares&status=".concat(encodeURIComponent(text))}},asyncData:function(t){var e=t.params.id,n=t.error;return Object(r.b)(e).then(function(t){return{topic:t,id:e}||n(404)})},mounted:function(){this.hostname=window.location.host}},_=(n(199),n(17)),component=Object(_.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"topicPage"},[n("section",{staticClass:"hero is-medium"},[n("div",{staticClass:"hero-body topicPage__header"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title topicPage__title"},[t._v("\n          "+t._s(t.topic.display)+"\n        ")]),t._v(" "),n("div",{staticClass:"topicPage__actions"},[n("button",{staticClass:"button is-reverse is-fab",on:{click:function(e){t.shareModal=!0}}},[t._m(0)]),t._v(" "),n("div",{staticClass:"modal",class:{"is-active":t.shareModal}},[n("div",{staticClass:"modal-background",on:{click:function(e){t.shareModal=!1}}}),t._v(" "),n("div",{staticClass:"modal-content"},[n("div",{staticClass:"topicPage__share"},[n("a",{staticClass:"topicPage__share__button topicPage__share__button--twitter",attrs:{href:t.twitterShareLink,target:"_blank"}},[t._m(1)]),t._v(" "),n("a",{staticClass:"topicPage__share__button topicPage__share__button--linkedin",attrs:{href:t.linkedInShareLink,target:"_blank"}},[t._m(2)]),t._v(" "),n("a",{staticClass:"topicPage__share__button topicPage__share__button--pinterest",attrs:{href:t.linkedInShareLink,target:"_blank"}},[t._m(3)]),t._v(" "),n("a",{staticClass:"topicPage__share__button topicPage__share__button--plurk",attrs:{href:t.plurkShareLink,target:"_blank"}},[t._m(4)])])]),t._v(" "),n("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.shareModal=!1}}})])])])])]),t._v(" "),t._m(5),t._v(" "),n("section",{staticClass:"topicPage__description"},[n("div",{staticClass:"container"},[n("div",{domProps:{innerHTML:t._s(t.topic.description)}})])]),t._v(" "),n("div",{staticClass:"section topicPage__section"},[n("div",{staticClass:"container"},t._l(t.topic.speakers,function(t){return n("author-card",{key:t.name,attrs:{speaker:t}})}),1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[this._v("share")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium"},[e("i",{staticClass:"fa fa-twitter fa-2x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium"},[e("i",{staticClass:"fa fa-linkedin-square fa-2x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium"},[e("i",{staticClass:"fa fa-pinterest fa-2x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"image topicPage__share__button__logo"},[e("img",{attrs:{src:"https://s.plurk.com/0fb4e821ff17e6c109ad18afe0002cdd.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section topicPage__section topicPage__section--meta"},[e("div",{staticClass:"container"},[e("div",{staticClass:"topicPage__meta"},[e("i",{staticClass:"material-icons topicPage__icon"},[this._v("\n          comment\n        ")]),this._v(" "),e("span",{staticClass:"topicPage__meta__text"},[this._v("\n          English\n        ")])]),this._v(" "),e("div",{staticClass:"topicPage__meta"},[e("i",{staticClass:"material-icons topicPage__icon"},[this._v("\n          network_check\n        ")]),e("span",{staticClass:"topicPage__meta__text"},[this._v("\n          Intermediate\n        ")])])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=1c4e2f34a6db721c4568.js.map