webpackJsonp([1],{"0zxg":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("The Sign Up Page")])])}],i={render:a,staticRenderFns:r};t.a=i},"6G96":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("The Sign in Page")])])}],i={render:a,staticRenderFns:r};t.a=i},Dqi8:function(e,t,n){"use strict";var a=n("UUtG"),r=n("VU/8"),i=r(null,a.a,null,null,null);t.a=i.exports},FO2o:function(e,t,n){"use strict";var a=n("hlNW"),r=n("VU/8"),i=r(null,a.a,null,null,null);t.a=i.exports},Fs8J:function(e,t,n){"use strict";var a=n("mtWM");t.a={data:function(){return{name:null,server:null,summonerId:"",lp:"",rank:"",wr:"",tier:"",items:[{text:"EUW",value:"euw1"},{text:"NA",value:"na1"},{text:"RU",value:"ru"},{text:"BR",value:"br1"},{text:"KR",value:"kr1"},{text:"OC",value:"oc1"},{text:"JP",value:"jp1"},{text:"EUN",value:"eun1"},{text:"TR",value:"tr1"},{text:"LA1",value:"la1"},{text:"LA2",value:"la2"}]}},methods:{doSmth:function(){var e=this;console.log("hi"),a.post("../php/testing.php",{name:this.name,server:this.server}).then(function(t){console.log(t.data.name),e.summonerId=t.data.id}).catch(function(e){console.log(e)})},getLeaguePos:function(){this.doSmth();var e=this;this.lp="Loading...",this.rank="Loading...",this.tier="Loading...",this.wr="Loading...",setTimeout(function(){a.post("../php/leaguePos.php",{id:e.summonerId,server:e.server}).then(function(t){for(console.log(t.data),i=0;i<t.data.length;i++)"RANKED_SOLO_5x5"==t.data[i].queueType&&(e.lp=t.data[i].leaguePoints,e.rank=t.data[i].rank,e.tier=t.data[i].tier,e.wr=Math.round(t.data[i].wins/(t.data[1].wins+t.data[1].losses)*100))}).catch(function(e){console.log(e)})},500)}}}},M93x:function(e,t,n){"use strict";var a=n("xJD8"),r=n("Sujo"),i=n("VU/8"),s=i(a.a,r.a,null,null,null);t.a=s.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("/5sW"),r=n("3EgV"),i=n.n(r),s=n("tLfa"),l=(n.n(s),n("M93x")),o=n("YaEn");a.a.use(i.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,render:function(e){return e(l.a)}})},Sujo:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{temporary:""},model:{value:e.sideNav,callback:function(t){e.sideNav=t},expression:"sideNav"}},[n("v-list",e._l(e.menuItems,function(t){return n("v-list-tile",{key:t.title,attrs:{router:"",to:t.link},on:{click:function(e){}}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-tile-content",[e._v(e._s(t.title))])],1)}))],1),e._v(" "),n("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",nativeOn:{click:function(t){t.stopPropagation(),e.sideNav=!e.sideNav}}}),e._v(" "),n("v-toolbar-title",[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[e._v("CoolApp")])],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",{staticClass:"hidden-xs-only"},e._l(e.menuItems,function(t){return n("v-btn",{key:t.title,attrs:{flat:"",router:"",to:t.link}},[n("v-icon",{attrs:{left:""}},[e._v(e._s(t.icon))]),e._v("\n        "+e._s(t.title)+"\n      ")],1)}))],1),e._v(" "),n("main",[n("router-view",[e._v(", link: ''")])],1)],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},UUtG:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("The User Page")])])}],i={render:a,staticRenderFns:r};t.a=i},YaEn:function(e,t,n){"use strict";var a=n("/5sW"),r=n("/ocq"),i=n("lO7g"),s=n("FO2o"),l=n("hi2M"),o=n("Dqi8"),u=n("ixtv"),c=n("eu7k");a.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/meetups",name:"Meetups",component:s.a},{path:"/meetups/new",name:"CreateMeetup",component:l.a},{path:"/profile",name:"Profile",component:o.a},{path:"/signup",name:"Signup",component:c.a},{path:"/signin",name:"Signin",component:u.a}]})},eu7k:function(e,t,n){"use strict";var a=n("0zxg"),r=n("VU/8"),i=r(null,a.a,null,null,null);t.a=i.exports},hi2M:function(e,t,n){"use strict";var a=n("jTzJ"),r=n("VU/8"),i=r(null,a.a,null,null,null);t.a=i.exports},hlNW:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("The Meetups Page")])])}],i={render:a,staticRenderFns:r};t.a=i},ixtv:function(e,t,n){"use strict";var a=n("6G96"),r=n("VU/8"),i=r(null,a.a,null,null,null);t.a=i.exports},jTzJ:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("The Create Meetup Page")])])}],i={render:a,staticRenderFns:r};t.a=i},kDPf:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-spacer"),e._v(" "),n("v-flex",{attrs:{xs6:"",sm8:""}},[n("v-form",[n("v-text-field",{attrs:{label:"Summoner Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("br"),e._v("League: "+e._s(e.tier)+"\r\n        "),n("br"),e._v("Division: "+e._s(e.rank)+"\r\n        "),n("br"),e._v("League points: "+e._s(e.lp)+"\r\n\t\t\t\t"),n("br"),e._v("Win Rate: "+e._s(e.wr)+"\r\n      ")],1)],1),e._v(" "),n("v-flex",{attrs:{xs3:"",sm2:"",lg1:""}},[n("v-select",{attrs:{items:e.items,label:"Server","single-line":"",bottom:""},model:{value:e.server,callback:function(t){e.server=t},expression:"server"}})],1),e._v(" "),n("v-flex",{attrs:{xs3:"",sm2:"",lg1:""}},[n("v-btn",{staticClass:"primary",attrs:{raised:"",large:"",dark:""},nativeOn:{click:function(t){e.getLeaguePos()}}},[e._v("GO!")])],1),e._v(" "),n("v-spacer")],1)],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},lO7g:function(e,t,n){"use strict";var a=n("Fs8J"),r=n("kDPf"),i=n("VU/8"),s=i(a.a,r.a,null,null,null);t.a=s.exports},tLfa:function(e,t){},xJD8:function(e,t,n){"use strict";t.a={data:function(){return{sideNav:!1,name:"",server:"",menuItems:[{icon:"supervisor_account",title:"Cool list",link:"/meetups"},{icon:"room",title:"Stay cool",link:"/meetup/new"},{icon:"person",title:"Profile",link:"/profile"},{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}]}}}}},["NHnr"]);
//# sourceMappingURL=app.cccd0c81078865ee0195.js.map