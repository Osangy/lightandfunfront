webpackJsonp([1],{AhXn:function(s,e){},NHnr:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("7+uW"),a={render:function(){var s=this.$createElement,e=this._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},a,!1,function(s){t("p17E")},null,null).exports,i=t("/ocq"),o=t("mtWM"),j=t.n(o),l=t("PJh5"),c=t.n(l),u=t("UlOv"),d=u.b.reactiveProp,p={extends:u.a,mixins:[d],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}};c.a.locale("fr");var h={name:"HelloWorld",components:{LineChart:p},data:function(){return{msg:"Welcome to Your Vue.js App",weights:[],errors:[],datacollection:null}},created:function(){var s=this,e="https://light-and-fun.herokuapp.com/api/weight/"+this.$route.params.messengerid;j.a.get(e).then(function(e){s.weights=e.data.weights,s.fillData()}).catch(function(e){s.errors.push(e)})},methods:{fillData:function(){var s=[],e=[];this.weights.forEach(function(t){s.push(t.weight),e.push(c()(t.createdAt).format("Do MMM"))}),this.datacollection={labels:e,datasets:[{label:"Ton poids",backgroundColor:"#DC1649",pointBackgroundColor:"white",pointBorderColor:"#DC1649",pointRadius:"4",borderWidth:"1px",lineTension:.4,data:s}]}},getRandomInt:function(){return Math.floor(46*Math.random())+5}}},m={render:function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"chart"},[e("h1",[this._v("Evolution de ton poids")]),this._v(" "),e("line-chart",{attrs:{"chart-data":this.datacollection,options:{animation:{duration:2e3},legend:{display:!1},scales:{xAxes:[{ticks:{autoSkipPadding:10},gridLines:{display:!1,drawBorder:!1}}],yAxes:[{gridLines:{display:!1,drawBorder:!1}}]},maintainAspectRation:!1}}})],1)},staticRenderFns:[]};var b=t("VU/8")(h,m,!1,function(s){t("oK0o")},"data-v-c2b16f80",null).exports,f={name:"RecipesList",data:function(){return{recipes:[]}},created:function(){var s=this;j.a.get("https://light-and-fun.herokuapp.com/api/recipes").then(function(e){s.recipes=e.data.recipes}).catch(function(e){s.errors.push(e)})},methods:{video:function(s){j.a.post("https://light-and-fun.herokuapp.com/api/sendvideo",{recipe_id:s.target.id,messengerid:this.$route.params.messengerid}).then(function(s){console.log(s),window.location="https://m.me/chefclublightandfun"}).catch(function(s){console.log(s)})},fiche:function(s){j.a.post("https://light-and-fun.herokuapp.com/api/sendrecipecard",{recipe_id:s.target.id,messengerid:this.$route.params.messengerid}).then(function(s){console.log(s),window.location="https://m.me/chefclublightandfun"}).catch(function(s){console.log(s)})}}},v={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"recipes"},[t("h1",[s._v("Les recettes Light and Fun")]),s._v(" "),t("ul",{attrs:{id:"recipes"}},s._l(s.recipes,function(e){return t("li",{key:e.title,staticClass:"top"},[t("div",{staticClass:"recipe-lign"},[t("ul",[t("li",{staticClass:"title"},[s._v(s._s(e.title))]),s._v(" "),t("li",[t("button",{attrs:{id:e.id,type:"button"},on:{click:s.video}},[s._v("Vidéo")]),s._v(" "),t("button",{attrs:{id:e.id,type:"button"},on:{click:s.fiche}},[s._v("Fiche recette")])])])])])}))])},staticRenderFns:[]};var g=t("VU/8")(f,v,!1,function(s){t("AhXn")},"data-v-7363ac54",null).exports;n.a.use(i.a);var k=new i.a({mode:"history",routes:[{path:"/weight/:messengerid",name:"HelloWorld",component:b},{path:"/recipes/:messengerid",name:"RecipesList",component:g}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:k,components:{App:r},template:"<App/>"})},ll94:function(s,e){s.exports={_from:"vue-chartjs",_id:"vue-chartjs@3.1.1",_inBundle:!1,_integrity:"sha512-t4cUEhQeA3uA+eF39iloAF4vsbWhPzIHJth1IATBG6d6/ZiXKvMQ9bUuClIhm1urnYZb5cvABy9zNEcap+Y0LQ==",_location:"/vue-chartjs",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"vue-chartjs",name:"vue-chartjs",escapedName:"vue-chartjs",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-3.1.1.tgz",_shasum:"ce2c691a7eda39312722d347d4df37b8c83fdac1",_spec:"vue-chartjs",_where:"/Users/adriendulong/Documents/Dev/Chefclub/lightfun-cli",author:{name:"Jakub Juszczak",email:"jakub@posteo.de"},browserify:{transform:["babelify"]},bugs:{url:"https://github.com/apertureless/vue-chartjs/issues"},bundleDependencies:!1,contributors:[{name:"Thorsten Lünborg",url:"https://github.com/LinusBorg"},{name:"Juan Carlos Alonso",url:"https://github.com/jcalonso"}],dependencies:{},deprecated:!1,description:"Vue.js wrapper for chart.js for creating beautiful charts.",devDependencies:{"@babel/cli":"^7.0.0-beta.31","@babel/core":"^7.0.0-beta.31","@babel/preset-env":"^7.0.0-beta.31","@babel/preset-stage-2":"^7.0.0-beta.31","babel-loader":"8.0.0-beta.0",chai:"^3.5.0","chart.js":"2.7.0",chromedriver:"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^5.1.1","cross-spawn":"^5.1.0","css-loader":"^0.28.0",eslint:"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.15.2","extract-text-webpack-plugin":"^3.0.1","file-loader":"^0.10.1","friendly-errors-webpack-plugin":"^1.6.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0",isparta:"^4.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4",karma:"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"2",lolex:"^1.6.0",mocha:"^3.1.0",opn:"^5.1.0",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.13",portfinder:"^1.0.13","selenium-server":"^3.3.1",shelljs:"^0.7.7",sinon:"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8",vue:"2.5.2","vue-hot-reload-api":"2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^13.3.0","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.2",webpack:"^3.7.1","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"^4.1.0"},engines:{node:">=6.9.0",npm:">= 3.0.0"},files:["src","dist","es"],greenkeeper:{ignore:["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},homepage:"http://vue-chartjs.org","jsnext:main":"es/index.js",keywords:["ChartJs","Vue","Visualisation","Wrapper","Charts"],license:"MIT",main:"dist/vue-chartjs.js",maintainers:[{name:"Jakub Juszczak",email:"jakub@posteo.de",url:"http://www.jakubjuszczak.de"}],module:"es/index.js",name:"vue-chartjs",peerDependencies:{"chart.js":"2.7.x"},repository:{type:"git",url:"git+ssh://git@github.com/apertureless/vue-chartjs.git"},scripts:{build:"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es",dev:"node build/dev-server.js",e2e:"node test/e2e/runner.js",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs",prepublishOnly:"yarn run lint && yarn run test && yarn run build",release:"webpack --progress --hide-modules --config  ./build/webpack.release.js && cross-env NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js",test:"npm run unit",unit:"karma start test/unit/karma.conf.js --single-run"},unpkg:"dist/vue-chartjs.min.js",version:"3.1.1"}},mj8Y:function(s,e,t){var n={"./af":"el6m","./af.js":"el6m","./ar":"k/LX","./ar-dz":"8sQJ","./ar-dz.js":"8sQJ","./ar-kw":"Ypiv","./ar-kw.js":"Ypiv","./ar-ly":"vFBa","./ar-ly.js":"vFBa","./ar-ma":"5srG","./ar-ma.js":"5srG","./ar-sa":"OWdl","./ar-sa.js":"OWdl","./ar-tn":"zbnz","./ar-tn.js":"zbnz","./ar.js":"k/LX","./az":"+TbT","./az.js":"+TbT","./be":"I3+K","./be.js":"I3+K","./bg":"6pzG","./bg.js":"6pzG","./bn":"BSxz","./bn.js":"BSxz","./bo":"xZM4","./bo.js":"xZM4","./br":"z7xq","./br.js":"z7xq","./bs":"CRbE","./bs.js":"CRbE","./ca":"vtJn","./ca.js":"vtJn","./cs":"50M2","./cs.js":"50M2","./cv":"imKR","./cv.js":"imKR","./cy":"0GzN","./cy.js":"0GzN","./da":"w5+c","./da.js":"w5+c","./de":"EVTu","./de-at":"nG3g","./de-at.js":"nG3g","./de-ch":"Yt6q","./de-ch.js":"Yt6q","./de.js":"EVTu","./dv":"qtbI","./dv.js":"qtbI","./el":"5alt","./el.js":"5alt","./en-au":"z0Rx","./en-au.js":"z0Rx","./en-ca":"3NXy","./en-ca.js":"3NXy","./en-gb":"+etJ","./en-gb.js":"+etJ","./en-ie":"9aRM","./en-ie.js":"9aRM","./en-nz":"nuu6","./en-nz.js":"nuu6","./eo":"ScLw","./eo.js":"ScLw","./es":"dvvA","./es-do":"yg1m","./es-do.js":"yg1m","./es.js":"dvvA","./et":"0unr","./et.js":"0unr","./eu":"RwsK","./eu.js":"RwsK","./fa":"0MmL","./fa.js":"0MmL","./fi":"3jre","./fi.js":"3jre","./fo":"wY+L","./fo.js":"wY+L","./fr":"khqN","./fr-ca":"bEN0","./fr-ca.js":"bEN0","./fr-ch":"S4fe","./fr-ch.js":"S4fe","./fr.js":"khqN","./fy":"1XdY","./fy.js":"1XdY","./gd":"Q4Vj","./gd.js":"Q4Vj","./gl":"ZUnQ","./gl.js":"ZUnQ","./gom-latn":"4dEw","./gom-latn.js":"4dEw","./he":"9PWd","./he.js":"9PWd","./hi":"d8Wo","./hi.js":"d8Wo","./hr":"YkY+","./hr.js":"YkY+","./hu":"79Lb","./hu.js":"79Lb","./hy-am":"DMpe","./hy-am.js":"DMpe","./id":"Ibyo","./id.js":"Ibyo","./is":"L3mU","./is.js":"L3mU","./it":"9XIi","./it.js":"9XIi","./ja":"x5kd","./ja.js":"x5kd","./jv":"30df","./jv.js":"30df","./ka":"JI1o","./ka.js":"JI1o","./kk":"HJwE","./kk.js":"HJwE","./km":"OTi2","./km.js":"OTi2","./kn":"2230","./kn.js":"2230","./ko":"dDkv","./ko.js":"dDkv","./ky":"PHd1","./ky.js":"PHd1","./lb":"vxmX","./lb.js":"vxmX","./lo":"K877","./lo.js":"K877","./lt":"Zk7u","./lt.js":"Zk7u","./lv":"JOTR","./lv.js":"JOTR","./me":"Ex1I","./me.js":"Ex1I","./mi":"jjiy","./mi.js":"jjiy","./mk":"gWcD","./mk.js":"gWcD","./ml":"kBLj","./ml.js":"kBLj","./mr":"V2NI","./mr.js":"V2NI","./ms":"KQOe","./ms-my":"POgm","./ms-my.js":"POgm","./ms.js":"KQOe","./my":"ZAKQ","./my.js":"ZAKQ","./nb":"MQ71","./nb.js":"MQ71","./ne":"PefK","./ne.js":"PefK","./nl":"aSId","./nl-be":"Fpiv","./nl-be.js":"Fpiv","./nl.js":"aSId","./nn":"YpEG","./nn.js":"YpEG","./pa-in":"r+L2","./pa-in.js":"r+L2","./pl":"eXAp","./pl.js":"eXAp","./pt":"I4bD","./pt-br":"iAmb","./pt-br.js":"iAmb","./pt.js":"I4bD","./ro":"tXyB","./ro.js":"tXyB","./ru":"ngkl","./ru.js":"ngkl","./sd":"OWeY","./sd.js":"OWeY","./se":"+EdD","./se.js":"+EdD","./si":"gaPs","./si.js":"gaPs","./sk":"jUKU","./sk.js":"jUKU","./sl":"DQFe","./sl.js":"DQFe","./sq":"M7V7","./sq.js":"M7V7","./sr":"bzhX","./sr-cyrl":"33c5","./sr-cyrl.js":"33c5","./sr.js":"bzhX","./ss":"NejB","./ss.js":"NejB","./sv":"w+2E","./sv.js":"w+2E","./sw":"Dll1","./sw.js":"Dll1","./ta":"jbxT","./ta.js":"jbxT","./te":"jB/5","./te.js":"jB/5","./tet":"VbPC","./tet.js":"VbPC","./th":"nLNk","./th.js":"nLNk","./tl-ph":"mfkQ","./tl-ph.js":"mfkQ","./tlh":"jXJl","./tlh.js":"jXJl","./tr":"92cT","./tr.js":"92cT","./tzl":"5MIk","./tzl.js":"5MIk","./tzm":"0vIq","./tzm-latn":"3+Cq","./tzm-latn.js":"3+Cq","./tzm.js":"0vIq","./uk":"Hd7b","./uk.js":"Hd7b","./ur":"XtGu","./ur.js":"XtGu","./uz":"uRCu","./uz-latn":"1AHx","./uz-latn.js":"1AHx","./uz.js":"uRCu","./vi":"FB03","./vi.js":"FB03","./x-pseudo":"APXS","./x-pseudo.js":"APXS","./yo":"/1ch","./yo.js":"/1ch","./zh-cn":"yEKL","./zh-cn.js":"yEKL","./zh-hk":"sjvb","./zh-hk.js":"sjvb","./zh-tw":"f55z","./zh-tw.js":"f55z"};function a(s){return t(r(s))}function r(s){var e=n[s];if(!(e+1))throw new Error("Cannot find module '"+s+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=r,s.exports=a,a.id="mj8Y"},oK0o:function(s,e){},p17E:function(s,e){},uslO:function(s,e,t){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(s){return t(r(s))}function r(s){var e=n[s];if(!(e+1))throw new Error("Cannot find module '"+s+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=r,s.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.0654c1d38bd3ebb84e0f.js.map