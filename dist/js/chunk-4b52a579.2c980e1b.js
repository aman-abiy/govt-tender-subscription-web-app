(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b52a579"],{"4c93":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return d}));
/**
  * vee-validate v3.4.11
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
var a=function(t,e){var r=(void 0===e?{}:e).multiple,a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r&&!Array.isArray(t)&&(t=String(t).split(",").map((function(t){return t.trim()}))),Array.isArray(t)?t.every((function(t){return a.test(String(t))})):a.test(String(t))},s=[{name:"multiple",default:!1}],n={validate:a,params:s};function o(t){return null===t||void 0===t}function i(t){return Array.isArray(t)&&0===t.length}var c=function(t,e){var r=(void 0===e?{allowFalse:!0}:e).allowFalse,a={valid:!1,required:!0};return o(t)||i(t)?a:!1!==t||r?(a.valid=!!String(t).trim().length,a):a},l=!0,u=[{name:"allowFalse",default:!0}],d={validate:c,params:u,computesRequired:l}},"59c8":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tender-page"},[r("navbar"),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 col-md-12 col-sm-12 col-10 offset-lg-2 offset-1"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[r("form",{on:{submit:function(e){return e.preventDefault(),a(t.changePassword)}}},[r("div",{staticClass:"card title-card"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row justify-content-between"},[r("h4",{staticClass:"col-6"},[t._v("Change Password")]),r("button",{staticClass:"btn close-edit-profile-btn col-1 ml-auto",on:{click:t.close}},[t._v("Close")]),r("button",{staticClass:"btn save-edit-profile-btn col-1",attrs:{type:"submit",disabled:!!t.isLoading}},[t.isLoading?r("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t.isLoading?t._e():r("span",[t._v("Save")])])])])]),r("br"),r("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[t._v("\n                        After you change your password, you will be logged out and you will have to Login again.\n                    ")]),r("div",{staticClass:"card edit-profile-card"},[r("div",{staticClass:"card-body"},[r("p",{staticClass:"text-center text-danger auth-status-msg"},[t._v(t._s(t.errorMessage))]),r("form",{attrs:{action:""}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-5 form-group"},[r("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("label",{attrs:{for:"email"}},[t._v("New Password")]),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.accountVal.password,expression:"accountVal.password"}],ref:"passwordInput",staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.accountVal.password},on:{input:function(e){e.target.composing||t.$set(t.accountVal,"password",e.target.value)}}}),r("div",{staticClass:"input-group-append",on:{click:function(e){return t.showPassword()}}},[r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"fa fa-eye"})])])]),r("small",{staticClass:"form-text text-muted"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)])])])])])]}}])})],1)])],1)},s=[],n=(r("8e6e"),r("ac6a"),r("456d"),r("ade3")),o=r("9735"),i=r("ede6"),c=r("7bb1"),l=r("4c93");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={components:{navbar:o["a"]},data:function(){return{accountVal:{password:null}}},computed:{isLoading:function(){return this.$store.getters.account.isLoading},account:function(){return this.$store.getters.account.data},errorMessage:function(){return this.$store.getters.errorMsg}},methods:{changePassword:function(){this.$store.dispatch(i["b"],this.accountVal)},close:function(){this.$router.go(-1)},showPassword:function(){var t=this.$refs.passwordInput;t&&("password"===t.type?t.type="text":t.type="password")}},mounted:function(){}};Object(c["c"])("required",d(d({},l["b"]),{},{message:"This field is required"})),Object(c["c"])("min",{validate:function(t,e){return t.length>=e.length},message:"Password must be 6 or more characters",params:["length"]});var f=p,v=r("2877"),g=Object(v["a"])(f,a,s,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-4b52a579.2c980e1b.js.map