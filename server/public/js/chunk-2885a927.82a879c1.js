(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2885a927"],{"367d":function(e,t,r){},"70fa":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mt-4"},[r("div",{staticClass:"col-sm-4 mx-auto"},[r("h2",{staticClass:"reg-title"},[e._v("Додати товар")]),r("form",{attrs:{method:"POST",action:"/api/admin/additem/"+e.$route.params.cat,novalidate:""}},[e.regMessage?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" Ви успішно додали товар! ")]):e._e(),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Фотографія")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.image,expression:"formReg.image",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.image),attrs:{type:"text",id:"image",name:"image"},domProps:{value:e.formReg.image},on:{blur:[function(t){return e.$v.formReg.image.$touch()},function(t){return e.$forceUpdate()}],change:e.GetImage,input:function(t){t.target.composing||e.$set(e.formReg,"image",t.target.value.trim())}}}),e.$v.formReg.image.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")]),e.$v.formReg.image.url?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqUrl)+" ")]),r("br"),r("div",[r("div",{staticClass:"card",staticStyle:{width:"19rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:e.formReg.image,alt:"Зображення"}}),e._m(0)])])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Назва товару")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.name,expression:"formReg.name",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.name),attrs:{type:"text",id:"name",name:"name"},domProps:{value:e.formReg.name},on:{blur:[function(t){return e.$v.formReg.name.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"name",t.target.value.trim())}}}),e.$v.formReg.name.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"brand"}},[e._v("Бренд")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.brand,expression:"formReg.brand",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.brand),attrs:{type:"text",id:"brand",name:"brand"},domProps:{value:e.formReg.brand},on:{blur:[function(t){return e.$v.formReg.brand.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"brand",t.target.value.trim())}}}),e.$v.formReg.brand.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"desc"}},[e._v("Опис")]),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.desc,expression:"formReg.desc",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.desc),attrs:{type:"text",id:"desc",name:"description"},domProps:{value:e.formReg.desc},on:{blur:[function(t){return e.$v.formReg.desc.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"desc",t.target.value.trim())}}}),e.$v.formReg.desc.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"surname"}},[e._v("Ціна")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.surname,expression:"formReg.surname",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.surname),attrs:{type:"text",id:"surname",name:"price"},domProps:{value:e.formReg.surname},on:{blur:[function(t){return e.$v.formReg.surname.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"surname",t.target.value.trim())}}}),e.$v.formReg.surname.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")]),e.$v.formReg.surname.alpha?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.alphaText)+" ")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"count"}},[e._v("Кількість")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.count,expression:"formReg.count",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.count),attrs:{type:"text",id:"count",name:"count"},domProps:{value:e.formReg.count},on:{blur:[function(t){return e.$v.formReg.count.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"count",t.target.value.trim())}}}),e.$v.formReg.count.required?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")]),e.$v.formReg.count.alpha?e._e():r("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.alphaText)+" ")])]),e._l(e.specs,(function(t){return r("div",{key:t.id},[r("div",{staticClass:"form-group"},[r("label",[e._v(e._s(t.name))]),r("input",{staticClass:"form-control",attrs:{type:"text"}})])])})),r("button",{staticClass:"btn btn-light mr-2",attrs:{type:"button"},on:{click:function(t){return e.$router.push({name:"AdminTabl"})}}},[e._v(" Назад ")]),r("button",{staticClass:"btn btn-primary",attrs:{disabled:e.disabledBtn,type:"submit"}},[e._v(" Додати ")])],2)])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text"})])}],i=(r("b0c0"),r("96cf"),r("1da1")),n=r("b5ae"),o=r("bc3a"),m=r.n(o),c=n["helpers"].regex("alpha",/^[0-9]*$/),u={data:function(){return{regMessage:!1,reqText:"Поле обовязкове для заповнення",alphaText:"Заборонені любі символи крім цифр",reqUrl:"Потрібна силка",formReg:{name:"",brand:"",image:""},avatar:null,specs:[]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("/api/admin/additem/"+e.$route.params.cat);case 3:r=t.sent,e.specs=r.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},computed:{disabledBtn:function(){return this.$v.formReg.image.$invalid||this.$v.formReg.name.$invalid||this.$v.formReg.surname.$invalid||this.$v.formReg.count.$invalid||this.$v.formReg.desc.$invalid||this.$v.formReg.brand.$invalid}},methods:{GetImage:function(e){var t=this,r=e.target.files[0],a=new FileReader;a.readAsDataURL(r),a.onload=function(e){t.avatar=e.target.result}},status:function(e){return{"is-invalid":e.$error,error:e.$error}},reset:function(){var e=this;for(var t in this.regMessage=!0,setTimeout((function(){e.regMessage=!1}),3e3),this.formReg)this.formReg[t]="";this.$v.$reset()}},validations:{formReg:{name:{required:n["required"]},surname:{required:n["required"],alpha:c},brand:{required:n["required"]},count:{required:n["required"],alpha:c},desc:{required:n["required"]},image:{required:n["required"],url:n["url"]}}}},d=u,l=(r("dc87"),r("2877")),f=Object(l["a"])(d,a,s,!1,null,null,null);t["default"]=f.exports},dc87:function(e,t,r){"use strict";r("367d")}}]);
//# sourceMappingURL=chunk-2885a927.82a879c1.js.map