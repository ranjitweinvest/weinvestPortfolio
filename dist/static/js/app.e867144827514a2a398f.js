webpackJsonp([1],{"+NZZ":function(t,e){},CcgO:function(t,e){},EB8I:function(t,e,i){t.exports=i.p+"static/img/header_img.3b56fc6.png"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},o,!1,function(t){i("+NZZ")},null,null).exports,a=i("/ocq"),r=i("Dd8w"),l=i.n(r),c=i("NYxO"),u={name:"Portfolio",data:function(){return{title:"Portfolio"}},computed:l()({},Object(c.c)("portfolio",{getPortfolios:"getPortfolios"}))},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticStyle:{color:"red"}},[t._v(t._s(t.title))]),t._v(" "),t._l(t.getPortfolios,function(e,o){return n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("img",{staticClass:"card-header-img",attrs:{src:i("EB8I")}}),t._v(" "),n("h1",{staticClass:"goal-name"},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"card-body col-xs-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-5 cell-text"},[t._v("Volatility")]),t._v(" "),n("div",{staticClass:"col-xs-7 cell-text"},[t._v(t._s(e.volatility)+"%")])]),t._v(" "),t._m(0,!0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-5 cell-text"},[t._v("Mean Return")]),t._v(" "),n("div",{staticClass:"col-xs-7 cell-text"},[t._v(t._s(e.mean_return)+"%")])]),t._v(" "),t._m(1,!0),t._v(" "),t._m(2,!0),t._v(" "),n("div",{staticClass:"row"},[n("router-link",{staticClass:"col-xs-12 btn btn-danger",attrs:{to:{name:"PortfolioDetails",params:{id:e.id}}}},[t._v("Explore Investment Idea")])],1)])])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-5 cell-text"},[this._v("1 Month Return")]),this._v(" "),e("div",{staticClass:"col-xs-7 cell-text"},[this._v("1 Month Return")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-5 cell-text"},[this._v("Min Investment")]),this._v(" "),e("div",{staticClass:"col-xs-7 cell-text"},[this._v("Min Investment")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-5 cell-text"},[this._v("Eligibility")]),this._v(" "),e("div",{staticClass:"col-xs-7 cell-text"},[this._v("Available for all investor")])])}]};var m=i("VU/8")(u,d,!1,function(t){i("CcgO")},null,null).exports,h=i("woOf"),p=i.n(h),f=i("M4fF"),v=i.n(f),g={name:"PortfolioDetails",data:function(){return{title:"Portfolio Constituents"}},computed:l()({},Object(c.c)("portfolio",{getPortfolios:"getPortfolios"}),{inputListeners:function(){return p()({},this.$listeners,{input:function(t){}})},modifyedPortfolio:{get:function(){var t=this,e=this.getPortfolios.filter(function(e,i){return e.id==t.$route.params.id});return(e=e&&e[0]&&e[0].constituents?e[0].constituents:[]).map(function(t,e){return p()({},l()({},t.instrument),{weight:t.weight,model_weight:t.model_weight?t.model_weight:t.weight,lock:!!t.lock&&t.lock})})}},myConstituents:{get:function(){return v.a.groupBy(this.modifyedPortfolio,"type")}}}),methods:l()({},Object(c.b)("portfolio",{updateWeightAction:"updateWeightAction",updateLockAction:"updateLockAction",deletConstituentsAction:"deletConstituentsAction",rebalanceConstituentsAction:"rebalanceConstituentsAction"}),{handleChange:function(t,e){var i=t.target.value,n=this.$route.params.id;""==i||parseFloat(i)<=100?this.updateWeightAction({router_id:n,value:i,data:e}):t.preventDefault()},updateValue:function(t,e){var i=t.weight,n=this.$route.params.id;"inc"==e?this.updateWeightAction({router_id:n,value:parseInt(i||0)+1,data:t}):this.updateWeightAction({router_id:n,value:parseInt(i)-1,data:t})},delectConstituent:function(t){var e=this.$route.params.id;this.deletConstituentsAction({data:t,router_id:e})},rebalanceConstituents:function(){var t=this.$route.params.id;this.rebalanceConstituentsAction({router_id:t})},updateLock:function(t,e){var i=this.$route.params.id;this.updateLockAction({data:t,type:e,router_id:i})},isNumber:function(t){var e=(t=t||window.event).which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e))return!0;t.preventDefault()},getTotalPercent:function(t,e){var i=v.a.sumBy(t,function(t){return t[e]?parseFloat(t[e]):0});return parseFloat(i.toPrecision(2))}})},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",{staticStyle:{color:"red"}},[t._v(t._s(t.title))]),t._v(" "),i("div",[i("button",{staticClass:"btn btn-primary pull-right",staticStyle:{margin:"5px"},on:{click:function(e){t.rebalanceConstituents()}}},[t._v("Rebalance")]),t._v(" "),i("table",{staticClass:"table"},[i("thead",{staticClass:"thead-main-title"},[i("tr",[i("th",[t._v("Category/Stock")]),t._v(" "),i("th"),t._v(" "),i("th",[t._v("Model Weight("+t._s(t.getTotalPercent(this.modifyedPortfolio,"model_weight"))+"%)")]),t._v(" "),i("th",[t._v("Weight("+t._s(t.getTotalPercent(this.modifyedPortfolio,"weight"))+"%)")])])])]),t._v(" "),t._l(t.myConstituents,function(e,n,o){return i("table",{staticClass:"table"},[i("thead",{staticClass:"thead-body-title"},[i("tr",[i("th",[i("div",{staticClass:"thead-body-title-head"}),t._v(t._s(n))]),t._v(" "),i("th"),t._v(" "),i("th",[t._v(t._s(t.getTotalPercent(e,"model_weight"))+"%")]),t._v(" "),i("th",[t._v(t._s(t.getTotalPercent(e,"weight"))+"%")])])]),t._v(" "),t._l(e,function(e){return i("tbody",[i("tr",[i("td",[i("button",{on:{click:function(i){t.delectConstituent(e)}}},[i("i",{staticClass:"fas fa-trash-alt"})]),i("a",[t._v(t._s(e.name))])]),t._v(" "),i("td",[i("button",{directives:[{name:"show",rawName:"v-show",value:e.lock,expression:"im.lock"}],on:{click:function(i){t.updateLock(e,!1)}}},[i("i",{staticClass:"fas fa-lock-open"})]),i("button",{directives:[{name:"show",rawName:"v-show",value:!e.lock,expression:"!im.lock"}],on:{click:function(i){t.updateLock(e,!0)}}},[i("i",{staticClass:"fas fa-lock"})])]),t._v(" "),i("td",[t._v(t._s(e.model_weight)+"%")]),t._v(" "),i("td",[i("button",{directives:[{name:"show",rawName:"v-show",value:!e.lock,expression:"!im.lock"}],attrs:{disabled:e.weight>99},on:{click:function(i){t.updateValue(e,"inc")}}},[i("i",{staticClass:"fas fa-plus-square"})]),t._v(" "),i("input",t._g({attrs:{disabled:e.lock},domProps:{value:e.weight},on:{keypress:function(e){t.isNumber(e)},input:function(i){t.handleChange(i,e)}}},t.inputListeners)),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:!e.lock,expression:"!im.lock"}],attrs:{disabled:e.weight<1},on:{click:function(i){t.updateValue(e,"dec")}}},[i("i",{staticClass:"fas fa-minus-square"})]),t._v(" %")])])])})],2)})],2)])},staticRenderFns:[]};var C=i("VU/8")(g,w,!1,function(t){i("sGzh")},null,null).exports;n.a.use(a.a);var y=new a.a({mode:"history",routes:[{path:"/",name:"Portfolio",component:m},{path:"/PortfolioDetails/:id",name:"PortfolioDetails",component:C}]}),b={namespaced:!0,state:{portfolios:[{id:1,name:"HONGKONG TECHNOLOGY",volatility:"26.8",mean_return:"2.96",currency:"SGD",constituents:[{weight:"3",instrument:{id:1,name:"CSX corp",type:"Equity"}},{weight:"17",instrument:{id:2,name:"cummins Inc",type:"Equity"}},{weight:"10",instrument:{id:3,name:"Eaton Corp PLC",type:"Equity"}},{weight:"10",instrument:{id:4,name:"Fedx corp",type:"Equity"}},{weight:"10",instrument:{id:5,name:"Haris corp",type:"Equity"}},{weight:"10",instrument:{id:6,name:"Norfolk Southern Corp",type:"Bond"}},{weight:"5",instrument:{id:7,name:"General Dynamics",type:"Bond"}},{weight:"15",instrument:{id:8,name:"hal",type:"Bond"}},{weight:"20",instrument:{id:10,name:"USD CASH",type:"CASH"}}]},{id:2,name:"Hong kong/China Technology",volatility:"28.01",mean_return:"24.11",currency:"SGD",constituents:[{weight:"30",instrument:{id:1,name:"CSX corp",type:"Equity"}},{weight:"10",instrument:{id:2,name:"cummins Inc",type:"Equity"}},{weight:"60",instrument:{id:3,name:"Eaton Corp PLC",type:"Equity"}}]},{id:3,name:"US TECH LEADERS",volatility:"19.84",mean_return:"26.64",currency:"SGD",constituents:[{weight:"3",instrument:{id:1,name:"CSX corp",type:"Equity"}},{weight:"17",instrument:{id:2,name:"cummins Inc",type:"Equity"}},{weight:"10",instrument:{id:3,name:"Eaton Corp PLC",type:"Equity"}},{weight:"10",instrument:{id:4,name:"Fedx corp",type:"Equity"}},{weight:"10",instrument:{id:5,name:"Haris corp",type:"Equity"}},{weight:"10",instrument:{id:6,name:"Norfolk Southern Corp",type:"Bond"}},{weight:"5",instrument:{id:7,name:"General Dynamics",type:"Bond"}},{weight:"15",instrument:{id:8,name:"hal",type:"Bond"}},{weight:"20",instrument:{id:10,name:"USD CASH",type:"CASH"}}]}],detailPortfolios:[]},getters:{getPortfolios:function(t,e,i){return t.portfolios}},actions:{updateWeightAction:function(t,e){var i=t.commit;t.state,i("updateWeightMutation",e)},updateLockAction:function(t,e){var i=t.commit;t.state,i("updateLockMutation",e)},deletConstituentsAction:function(t,e){var i=t.commit;t.state,i("deletConstituentsMutation",e)},rebalanceConstituentsAction:function(t,e){var i=t.commit;t.state,i("rebalanceConstituentsMutation",e)}},mutations:{setDetailPortfolios:function(t,e){var i=e.data;t.detailPortfolios=i},updateWeightMutation:function(t,e){var i=e.router_id,n=e.value,o=e.data,s=(o.weight,o.model_weight),a=o.id,r=Number(s)-(n?parseFloat(n):0),c=t.portfolios.filter(function(t,e){return t.id==i}),u=_.sumBy(c[0].constituents,function(t){if(t.lock)return parseFloat(t.model_weight?t.model_weight:t.weight)});u=u||0;var d=c[0].constituents.map(function(t,e){return a==t.instrument.id?p()({},l()({},t),{lock:!!t.lock&&t.lock,model_weight:t.model_weight?t.model_weight:t.weight,weight:t.lock?t.weight:n}):p()({},l()({},t),{lock:!!t.lock&&t.lock,model_weight:t.model_weight?t.model_weight:t.weight,weight:t.lock?t.weight:Number(Number(t.model_weight?t.model_weight:t.weight)+r*Number(t.model_weight?t.model_weight:t.weight)/(100-(parseInt(s)+u))).toFixed(2)})}),m=t.portfolios.map(function(t,e){return t.id==i?p()({},l()({},t),{constituents:d}):t});t.portfolios=m},updateLockMutation:function(t,e){var i=e.data.id,n=e.type,o=e.router_id,s=t.portfolios.filter(function(t,e){return t.id==o})[0].constituents.map(function(t,e){return i==t.instrument.id?p()({},l()({},t),{lock:n}):t}),a=t.portfolios.map(function(t,e){return t.id==o?p()({},l()({},t),{constituents:s}):t});t.portfolios=a},deletConstituentsMutation:function(t,e){var i=e.data.id,n=e.router_id,o=t.portfolios.filter(function(t,e){return t.id==n}),s=_.remove(o[0].constituents,function(t){return!(i==t.instrument.id)}),a=t.portfolios.map(function(t,e){return t.id==n?p()({},l()({},t),{constituents:s}):t});t.portfolios=a},rebalanceConstituentsMutation:function(t,e){var i=e.router_id,n=t.portfolios.filter(function(t,e){return t.id==i}),o=_.sumBy(n[0].constituents,function(t){return parseFloat(t.model_weight?t.model_weight:t.weight)}),s=_.sumBy(n[0].constituents,function(t){return parseFloat(t.weight?t.weight:t.model_weight)}),a=n[0].constituents.map(function(t,e){return t.lock?p()({},l()({},t),{model_weight:t.model_weight?t.model_weight:t.weight,weight:t.weight}):p()({},l()({},t),{model_weight:100!==Math.round(o)?Number(Number(t.model_weight?t.model_weight:t.weight)+(100-o)/o*Number(t.model_weight?t.model_weight:t.weight)).toFixed(2):t.model_weight?t.model_weight:t.weight,weight:100!==Math.round(s)?Number(Number(t.weight)+(100-s)/s*Number(t.weight)).toFixed(2):Number(t.weight)})}),r=t.portfolios.map(function(t,e){return t.id==i?p()({},l()({},t),{constituents:a}):t});t.portfolios=r}}};n.a.use(c.a);var k=new c.a.Store({modules:{portfolio:b},strict:!1});n.a.config.productionTip=!1,new n.a({el:"#app",store:k,router:y,components:{App:s},template:"<App/>"})},sGzh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e867144827514a2a398f.js.map