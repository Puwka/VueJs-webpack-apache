webpackJsonp([1],{"0zxg":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("p",[e._v("The Sign Up Page")])])}],s={render:n,staticRenderFns:r};a.a=s},"6G96":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("p",[e._v("The Sign in Page")])])}],s={render:n,staticRenderFns:r};a.a=s},Dqi8:function(e,a,t){"use strict";var n=t("UUtG"),r=t("VU/8"),s=r(null,n.a,null,null,null);a.a=s.exports},Fs8J:function(e,a,t){"use strict";var n=t("mtWM");a.a={data:function(){return{name:null,server:null,summonerId:"",lp:"",rank:"",wr:"",tier:"",gameIds:[],blueTeam:[{name:"",champ:"",lp:"",rank:"",tier:"",wr:""},{name:"",champ:"",lp:"",rank:"",tier:"",wr:""},{name:"",champ:"",lp:"",rank:"",tier:"",wr:""},{name:"",champ:"",lp:"",rank:"",tier:"",wr:""},{name:"",champ:"",lp:"",rank:"",tier:"",wr:""}],redTeam:[{name:"",champ:"",lp:"",rank:"",tier:"",wr:""},{name:"",champ:"",lp:"",rank:"",tier:"",wr:""},{name:"",champ:"",lp:"",rank:"",tier:"",wr:""},{name:"",champ:"",lp:"",rank:"",tier:"",wr:""},{name:"",champ:"",lp:"",rank:"",tier:"",wr:""}],items:[{text:"EUW",value:"euw1"},{text:"NA",value:"na1"},{text:"RU",value:"ru"},{text:"BR",value:"br1"},{text:"KR",value:"kr1"},{text:"OC",value:"oc1"},{text:"JP",value:"jp1"},{text:"EUN",value:"eun1"},{text:"TR",value:"tr1"},{text:"LA1",value:"la1"},{text:"LA2",value:"la2"}]}},methods:{getLeaguePos:function(){this.lp="Loading...",this.rank="Loading...",this.tier="Loading...",this.wr="Loading...";var e=this;n.post("../php/testing.php",{name:this.name,server:this.server}).then(function(a){e.summonerId=a.data.id,n.post("../php/leaguePos.php",{id:e.summonerId,server:e.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.lp=a.data[t].leaguePoints,e.rank=a.data[t].rank,e.tier=a.data[t].tier,e.wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100))}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},getCurrentGame:function(){for(var e=this,a=0;a<5;a++)this.blueTeam[a].name="Loading..",this.blueTeam[a].lp="Loading..",this.blueTeam[a].rank="Loading..",this.blueTeam[a].tier="Loading..",this.blueTeam[a].wr="Loading..",this.blueTeam[a].champ="Loading..",this.redTeam[a].name="Loading..",this.redTeam[a].lp="Loading..",this.redTeam[a].rank="Loading..",this.redTeam[a].tier="Loading..",this.redTeam[a].wr="Loading..",this.redTeam[a].champ="Loading..";n.post("../php/testing.php",{name:this.name,server:this.server}).then(function(a){e.summonerId=a.data.id,n.post("../php/current.php",{id:e.summonerId,server:e.server}).then(function(a){console.log(a.data);for(var t=0;t<a.data.participants.length;t++){e.gameIds.push(a.data.participants[t].summonerId);for(var n=0;n<5;n++)e.blueTeam[n].champ=a.data.participants[n].championId;for(var r=0;r<5;r++)e.redTeam[r].champ=a.data.participants[r+5].championId}e.getGameStats()}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},getGameStats:function(){var e=this;n.post("../php/leaguePos.php",{id:this.gameIds[0],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.blueTEam[0].name=a.data[t].playerOrTeamName,e.blueTEam[0].lp=a.data[t].leaguePoints,e.blueTEam[0].rank=a.data[t].rank,e.blueTEam[0].tier=a.data[t].tier,e.blueTEam[0].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)}),n.post("../php/leaguePos.php",{id:this.gameIds[1],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.blueTeam[1].name=a.data[t].playerOrTeamName,e.blueTeam[1].lp=a.data[t].leaguePoints,e.blueTeam[1].rank=a.data[t].rank,e.blueTeam[1].tier=a.data[t].tier,e.blueTeam[1].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)}),n.post("../php/leaguePos.php",{id:this.gameIds[2],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.blueTeam[2].name=a.data[t].playerOrTeamName,e.blueTeam[2].lp=a.data[t].leaguePoints,e.blueTeam[2].rank=a.data[t].rank,e.blueTeam[2].tier=a.data[t].tier,e.blueTeam[2].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)}),n.post("../php/leaguePos.php",{id:this.gameIds[3],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.blueTeam[3].name=a.data[t].playerOrTeamName,e.blueTeam[3].lp=a.data[t].leaguePoints,e.blueTeam[3].rank=a.data[t].rank,e.blueTeam[3].tier=a.data[t].tier,e.blueTeam[3].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)}),n.post("../php/leaguePos.php",{id:this.gameIds[4],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.blueTeam[4].name=a.data[t].playerOrTeamName,e.blueTeam[4].lp=a.data[t].leaguePoints,e.blueTeam[4].rank=a.data[t].rank,e.blueTeam[4].tier=a.data[t].tier,e.blueTeam[4].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)}),n.post("../php/leaguePos.php",{id:this.gameIds[5],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.redTeam[0].name=a.data[t].playerOrTeamName,e.redTeam[0].lp=a.data[t].leaguePoints,e.redTeam[0].rank=a.data[t].rank,e.redTeam[0].tier=a.data[t].tier,e.redTeam[0].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)}),n.post("../php/leaguePos.php",{id:this.gameIds[6],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.redTeam[1].name=a.data[t].playerOrTeamName,e.redTeam[1].lp=a.data[t].leaguePoints,e.redTeam[1].rank=a.data[t].rank,e.redTeam[1].tier=a.data[t].tier,e.redTeam[1].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)}),n.post("../php/leaguePos.php",{id:this.gameIds[7],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.redTeam[2].name=a.data[t].playerOrTeamName,e.redTeam[2].lp=a.data[t].leaguePoints,e.redTeam[2].rank=a.data[t].rank,e.redTeam[2].tier=a.data[t].tier,e.redTeam[2].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)}),n.post("../php/leaguePos.php",{id:this.gameIds[8],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.redTeam[3].name=a.data[t].playerOrTeamName,e.redTeam[3].lp=a.data[t].leaguePoints,e.redTeam[3].rank=a.data[t].rank,e.redTeam[3].tier=a.data[t].tier,e.redTeam[3].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)}),n.post("../php/leaguePos.php",{id:this.gameIds[9],server:this.server}).then(function(a){for(var t=0;t<a.data.length;t++)"RANKED_SOLO_5x5"===a.data[t].queueType&&(e.redTeam[4].name=a.data[t].playerOrTeamName,e.redTeam[4].lp=a.data[t].leaguePoints,e.redTeam[4].rank=a.data[t].rank,e.redTeam[4].tier=a.data[t].tier,e.redTeam[4].wr=Math.round(a.data[t].wins/(a.data[t].wins+a.data[t].losses)*100)+"%")}).catch(function(e){console.log(e)})}}}},M93x:function(e,a,t){"use strict";var n=t("xJD8"),r=t("Sujo"),s=t("VU/8"),i=s(n.a,r.a,null,null,null);a.a=i.exports},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("/5sW"),r=t("3EgV"),s=t.n(r),i=t("tLfa"),o=(t.n(i),t("M93x")),l=t("YaEn");n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:l.a,render:function(e){return e(o.a)}})},Sujo:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-navigation-drawer",{attrs:{temporary:""},model:{value:e.sideNav,callback:function(a){e.sideNav=a},expression:"sideNav"}},[t("v-list",e._l(e.menuItems,function(a){return t("v-list-tile",{key:a.title,attrs:{router:"",to:a.link},on:{click:function(e){}}},[t("v-list-tile-action",[t("v-icon",[e._v(e._s(a.icon))])],1),e._v(" "),t("v-list-tile-content",[e._v(e._s(a.title))])],1)}))],1),e._v(" "),t("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[t("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",nativeOn:{click:function(a){a.stopPropagation(),e.sideNav=!e.sideNav}}}),e._v(" "),t("v-toolbar-title",[t("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[e._v("CoolApp")])],1),e._v(" "),t("v-spacer"),e._v(" "),t("v-toolbar-items",{staticClass:"hidden-xs-only"},e._l(e.menuItems,function(a){return t("v-btn",{key:a.title,attrs:{flat:"",router:"",to:a.link}},[t("v-icon",{attrs:{left:""}},[e._v(e._s(a.icon))]),e._v("\n        "+e._s(a.title)+"\n      ")],1)}))],1),e._v(" "),t("main",[t("router-view",[e._v(", link: ''")])],1)],1)},r=[],s={render:n,staticRenderFns:r};a.a=s},UUtG:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("p",[e._v("The User Page")])])}],s={render:n,staticRenderFns:r};a.a=s},YaEn:function(e,a,t){"use strict";var n=t("/5sW"),r=t("/ocq"),s=t("lO7g"),i=t("Dqi8"),o=t("ixtv"),l=t("eu7k");n.a.use(r.a),a.a=new r.a({routes:[{path:"/",name:"Home",component:s.a},{path:"/profile",name:"Profile",component:i.a},{path:"/signup",name:"Signup",component:l.a},{path:"/signin",name:"Signin",component:o.a}]})},eu7k:function(e,a,t){"use strict";var n=t("0zxg"),r=t("VU/8"),s=r(null,n.a,null,null,null);a.a=s.exports},ixtv:function(e,a,t){"use strict";var n=t("6G96"),r=t("VU/8"),s=r(null,n.a,null,null,null);a.a=s.exports},kDPf:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-spacer"),e._v(" "),t("v-flex",{attrs:{xs6:"",sm8:""}},[t("v-form",[t("v-text-field",{attrs:{label:"Summoner Name",required:""},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),e._v(" "),e._l(e.blueTeam,function(a){return t("div",[e._v(e._s(a))])}),e._v(" "),e._l(e.redTeam,function(a){return t("div",[e._v(e._s(a))])}),e._v(" "),t("br"),e._v("League: "+e._s(e.tier)+"\r\n        "),t("br"),e._v("Division: "+e._s(e.rank)+"\r\n        "),t("br"),e._v("League points: "+e._s(e.lp)+"\r\n\t\t\t\t"),t("br"),e._v("Win Rate: "+e._s(e.wr)+"\r\n      ")],2)],1),e._v(" "),t("v-flex",{attrs:{xs3:"",sm2:"",lg1:""}},[t("v-select",{attrs:{items:e.items,label:"Server","single-line":"",bottom:""},model:{value:e.server,callback:function(a){e.server=a},expression:"server"}})],1),e._v(" "),t("v-flex",{attrs:{xs3:"",sm2:"",lg1:""}},[t("v-btn",{staticClass:"primary",attrs:{raised:"",large:"",dark:""},nativeOn:{click:function(a){e.getLeaguePos(),e.getCurrentGame()}}},[e._v("GO!")])],1),e._v(" "),t("v-spacer")],1)],1)},r=[],s={render:n,staticRenderFns:r};a.a=s},lO7g:function(e,a,t){"use strict";var n=t("Fs8J"),r=t("kDPf"),s=t("VU/8"),i=s(n.a,r.a,null,null,null);a.a=i.exports},tLfa:function(e,a){},xJD8:function(e,a,t){"use strict";a.a={data:function(){return{sideNav:!1,name:"",server:"",menuItems:[{icon:"person",title:"Profile",link:"/profile"},{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}]}}}}},["NHnr"]);
//# sourceMappingURL=app.56d9316a395a8b7bdadc.js.map