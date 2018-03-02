webpackJsonp([1],{"6xJA":function(t,n){},DKjp:function(t,n){},FqWb:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:{name:"PersonalInfo"}}},[e("span",{staticClass:"navDecoration"},[t._v("<")]),t._v("Fabian Poels"),e("span",{staticClass:"navDecoration"},[t._v(">")])]),t._v(" "),e("router-link",{attrs:{to:{name:"Skills"}}},[e("span",{staticClass:"navDecoration"},[t._v("<")]),t._v("Skills"),e("span",{staticClass:"navDecoration"},[t._v(">")])]),t._v(" "),e("router-link",{attrs:{to:{name:"WorkExperience"}}},[e("span",{staticClass:"navDecoration"},[t._v("<")]),t._v("Experience"),e("span",{staticClass:"navDecoration"},[t._v(">")])]),t._v(" "),e("router-link",{attrs:{to:{name:"Education"}}},[e("span",{staticClass:"navDecoration"},[t._v("<")]),t._v("Education"),e("span",{staticClass:"navDecoration"},[t._v(">")])])],1),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")({name:"App"},i,!1,function(t){e("6xJA")},null,null).exports,r=e("/ocq"),l=e("mtWM"),o=e.n(l),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"spinner spinner--circle-2",style:this.styles})},staticRenderFns:[]};var u={name:"Spinner",components:{Circle2:e("VU/8")({props:{size:{default:"40px"},background:{default:"#41b883"},color:{default:"#35495e"},stroke:{default:"5px"}},computed:{styles:function(){return{width:this.size,height:this.size,border:this.stroke+" solid "+this.background,borderTopColor:this.color}}}},c,!1,function(t){e("Y3Y/")},"data-v-6c679bfb",null).exports},data:function(){return{}}},v={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"spinner"}},[n("circle2",{attrs:{color:"#000",background:"#f2511b"}})],1)},staticRenderFns:[]};var d=e("VU/8")(u,v,!1,function(t){e("PUIU")},null,null).exports,p={name:"PersonalInfo",components:{Spinner:d},data:function(){return{personalInfo:null,error:null,loading:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.loading=!0,this.error=this.personalInfo=null,o.a.get("https://polar-wave-24506.herokuapp.com/api/v1/personal").then(function(n){t.personalInfo=n.data,t.loading=!1}).catch(function(n){t.error=n,t.loading=!1})}}},_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"mainContent"}},[t.loading?e("div",{attrs:{id:"spinner"}},[e("spinner")],1):t._e(),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.personalInfo?e("div",{attrs:{id:"personalInfo"}},[e("ul",[e("li",[t._v("{")]),t._v(" "),e("li",{staticClass:"info"},[t._v('"name": "'),e("span",{staticClass:"orange"},[t._v(t._s(t.personalInfo.name))]),t._v('",')]),t._v(" "),e("li",{staticClass:"info"},[t._v('"dateOfBirth": "'),e("span",{staticClass:"orange"},[t._v(t._s(t.personalInfo.dateOfBirth))]),t._v('",')]),t._v(" "),e("li",{staticClass:"info"},[t._v('"email:" "'),e("span",{staticClass:"orange"},[t._v("hello@fabianpoels.com")]),t._v('"')]),t._v(" "),e("li",[t._v("}")])])]):t._e()])],1)},staticRenderFns:[]};var f=e("VU/8")(p,_,!1,function(t){e("OAgJ")},null,null).exports,h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"skillLevel"},[n("div",{staticClass:"fill",style:{width:this.getWidth(),opacity:this.getOpacity(),animation:this.getAnimation()}}),this._v(" "),n("div",{staticClass:"corner",style:{opacity:this.getOpacity()}})])},staticRenderFns:[]};var m={name:"Skills",components:{Spinner:d,SkillLevel:e("VU/8")({name:"skillLevel",data:function(){return{}},methods:{getWidth:function(){return 40*this.level+"px"},getOpacity:function(){switch(this.level){case 1:return.4;case 2:return.6;case 3:return.8;default:return 1}},getAnimation:function(){return"fill"+this.level+" 1s ease-in"}},props:["level"]},h,!1,function(t){e("YMgm")},null,null).exports},data:function(){return{skills:null,error:null,loading:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.loading=!0,this.error=this.skills=null,o.a.get("https://polar-wave-24506.herokuapp.com/api/v1/skills").then(function(n){t.skills=n.data,t.loading=!1}).catch(function(n){t.error=n,t.loading=!1})}}},g={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"mainContent"}},[t.loading?e("div",{attrs:{id:"spinner"}},[e("spinner")],1):t._e(),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.skills?e("div",{attrs:{id:"skills"}},[e("div",{staticClass:"box"},[e("h2",[t._v("Programming languages")]),t._v(" "),e("ul",t._l(t.skills.programmingLanguages,function(n){return e("li",{key:n.language},[t._v("\n            "+t._s(n.language)+"\n            "),e("skill-level",{attrs:{level:n.skill}})],1)}))]),t._v(" "),e("div",{staticClass:"box"},[e("h2",[t._v("Frameworks")]),t._v(" "),e("ul",t._l(t.skills.frameworks,function(n){return e("li",{key:n.name},[t._v("\n            "+t._s(n.name)+"\n            "),e("skill-level",{attrs:{level:n.skill}})],1)}))]),t._v(" "),e("div",{staticClass:"box"},[e("h2",[t._v("Other")]),t._v(" "),e("ul",t._l(t.skills.other,function(n){return e("li",{key:n.name},[t._v("\n            "+t._s(n.name)+"\n            "),e("skill-level",{attrs:{level:n.skill}})],1)}))]),t._v(" "),e("div",{staticClass:"box"},[e("h2",[t._v("Languages")]),t._v(" "),e("ul",t._l(t.skills.languages,function(n){return e("li",{key:n.language},[t._v("\n            "+t._s(n.language)+"\n            "),e("skill-level",{attrs:{level:n.skill}})],1)}))])]):t._e()])],1)},staticRenderFns:[]};var k=e("VU/8")(m,g,!1,function(t){e("DKjp")},null,null).exports,C={name:"WorkExperience",components:{Spinner:d},data:function(){return{experience:null,error:null,loading:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.loading=!0,this.error=this.experience=null,o.a.get("https://polar-wave-24506.herokuapp.com/api/v1/experience").then(function(n){t.experience=n.data,t.loading=!1}).catch(function(n){t.error=n,t.loading=!1})}}},x={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"mainContent"}},[t.loading?e("div",{attrs:{id:"spinner"}},[e("spinner")],1):t._e(),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.experience?e("div",{attrs:{id:"experience"}},[e("ul",t._l(t.experience,function(n){return e("li",{key:n.function},[e("ul",[e("li",{staticClass:"title"},[e("span",{staticClass:"name"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"orange"},[t._v("/")]),t._v(" "+t._s(n.function))]),t._v(" "),e("li",{staticClass:"timespan"},[t._v(t._s(n.timespan)+", "+t._s(n.location))]),t._v(" "),e("li",{staticClass:"description"},[t._v(t._s(n.description))])])])}))]):t._e()])],1)},staticRenderFns:[]};var D=e("VU/8")(C,x,!1,function(t){e("FqWb")},null,null).exports,b={name:"Education",components:{Spinner:d},data:function(){return{education:null,error:null,loading:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.loading=!0,this.error=this.education=null,o.a.get("https://polar-wave-24506.herokuapp.com/api/v1/education").then(function(n){t.education=n.data,t.loading=!1}).catch(function(n){t.error=n,t.loading=!1})}}},E={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"mainContent"}},[t.loading?e("div",{attrs:{id:"spinner"}},[e("spinner")],1):t._e(),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.education?e("div",{attrs:{id:"education"}},[e("ul",t._l(t.education,function(n){return e("li",{key:n.degree},[e("ul",[e("li",{staticClass:"title"},[e("span",{staticClass:"instance"},[t._v(t._s(n.instance))]),t._v(" "),e("span",{staticClass:"orange"},[t._v("/")]),t._v(" "+t._s(n.degree))]),t._v(" "),e("li",{staticClass:"timespan"},[t._v(t._s(n.timespan))]),t._v(" "),e("li",{staticClass:"comment"},[t._v(t._s(n.comment))])])])}))]):t._e()])],1)},staticRenderFns:[]};var w=e("VU/8")(b,E,!1,function(t){e("OOTZ")},null,null).exports;a.a.use(r.a);var y=new r.a({routes:[{path:"/",redirect:"/PersonalInfo"},{path:"/PersonalInfo",name:"PersonalInfo",component:f},{path:"/Skills",name:"Skills",component:k},{path:"/WorkExperience",name:"WorkExperience",component:D},{path:"/Education",name:"Education",component:w},{path:"*",redirect:"/PersonalInfo"}]});new a.a({el:"#app",router:y,components:{App:s},template:"<App/>"})},OAgJ:function(t,n){},OOTZ:function(t,n){},PUIU:function(t,n){},"Y3Y/":function(t,n){},YMgm:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.ed7f3720f9f3217dc4ff.js.map