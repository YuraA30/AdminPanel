(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8114fd50"],{"0dc2":function(t,e,a){},cd53:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"min-height":"100vh"}},[a("br"),a("div",{staticClass:"form-group"},[a("div",{staticClass:"d-flex justify-content-end"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"form-control",placeholder:"Пошук",height:"35",width:"200",autofocus:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("a",{staticClass:"btn btn-info",attrs:{href:"/admin/specs/add/"+t.$route.params.product_id}},[t._v(" Додати характеристику "),a("i",{staticClass:"far fa-trash-alt"})])])]),a("br"),a("br"),a("table",{staticClass:"table table-striped"},[t._m(0),a("tbody",t._l(t.filterList,(function(e){return a("tr",{key:e.id},[a("td",[t._v(" "+t._s(e.id)+" ")]),a("td",[t._v(" "+t._s(e.name)+" ")]),a("td",[t._v(" "+t._s(e.value)+" ")]),a("td",[a("a",{staticClass:"btn btn-danger",attrs:{href:"/api/admin/specs/delete/"+e.id,onclick:"return confirm('Ви дійсно хочете видалити дану характеристику?');"}},[t._v(" Видалити "),a("i",{staticClass:"far fa-trash-alt"})])]),a("td",[a("a",{staticClass:"btn btn-info",attrs:{href:"/admin/specs/edit/"+e.id}},[t._v(" Змінити "),a("i",{staticClass:"far fa-trash-alt"})])])])})),0),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"5"}},[t._v("Загальна сума")]),a("td",{staticClass:"text-right"},[t._v(t._s(t.product_subtotal))])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{scope:"col"}},[t._v("id")]),a("th",{attrs:{scope:"col"}},[t._v("Назва")]),a("th",{attrs:{scope:"col"}},[t._v("Значення")]),a("th",{attrs:{scope:"col"}},[t._v("Видалення")]),a("th",{attrs:{scope:"col"}},[t._v("Редагування")])])}],c=(a("4de4"),a("caad"),a("b0c0"),a("ac1f"),a("2532"),a("841c"),a("96cf"),a("1da1")),n=a("bc3a"),i=a.n(n),o={data:function(){return{specs:[],search:""}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/api/admin/specs/"+t.$route.params.product_id);case 3:a=e.sent,t.specs=a.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},computed:{filterList:function(){var t=this;return this.specs.filter((function(e){return e.name.toLowerCase().includes(t.search.toLowerCase())||e.value.toLowerCase().includes(t.search.toLowerCase())}))}}},d=o,l=(a("de1e"),a("2877")),u=Object(l["a"])(d,s,r,!1,null,null,null);e["default"]=u.exports},de1e:function(t,e,a){"use strict";a("0dc2")}}]);
//# sourceMappingURL=chunk-8114fd50.cc6c14eb.js.map