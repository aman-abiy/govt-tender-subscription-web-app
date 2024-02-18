(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12dbac01"],{"34c3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("div",{staticClass:"row auth-page"},[a("div",{staticClass:"col-lg-4 col-md-8 col-10 offset-lg-4 offset-md-2 offset-1"},[a("h2",{staticClass:"text-center"},[t._v("Alpha Tenders")]),a("br"),a("h4",{staticClass:"text-center"},[t._v("Signup")]),a("p",{staticClass:"text-center text-danger auth-status-msg"},[t._v(t._s(t.errorMessage))]),a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),r(t.signup)}}},[a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{name:"fname",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("label",{attrs:{for:"fname"}},[t._v("First Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.fname,expression:"account.fname"}],staticClass:"form-control",attrs:{type:"fname",id:"fname",placeholder:"First Name"},domProps:{value:t.account.fname},on:{input:function(e){e.target.composing||t.$set(t.account,"fname",e.target.value)}}}),a("small",{staticClass:"form-text text-muted"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{name:"fname",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("label",{attrs:{for:"lname"}},[t._v("Last Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.lname,expression:"account.lname"}],staticClass:"form-control",attrs:{type:"lname",id:"lname",placeholder:"Last Name"},domProps:{value:t.account.lname},on:{input:function(e){e.target.composing||t.$set(t.account,"lname",e.target.value)}}}),a("small",{staticClass:"form-text text-muted"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("label",{attrs:{for:"email"}},[t._v("Email Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.email,expression:"account.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email"},domProps:{value:t.account.email},on:{input:function(e){e.target.composing||t.$set(t.account,"email",e.target.value)}}}),a("small",{staticClass:"form-text text-muted"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"mobile"}},[t._v("Phone Number")]),a("MazPhoneNumberInput",{staticClass:"auth-input",attrs:{id:"mobile","default-country-code":"ET","preferred-countries":["ET","US","GB"]},on:{update:function(e){t.account.mobile=e}}})],1),a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{name:"password|min:6",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("label",{attrs:{for:"email"}},[t._v("Password")]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.password,expression:"account.password"}],ref:"passwordInput",staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.account.password},on:{input:function(e){e.target.composing||t.$set(t.account,"password",e.target.value)}}}),a("div",{staticClass:"input-group-append",on:{click:function(e){return t.showPassword()}}},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-eye"})])])]),a("small",{staticClass:"form-text text-muted"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("a",{staticClass:"forgot-password"},[t._v("Forgot password?")]),a("br"),a("br"),a("button",{staticClass:"btn auth-btn col-12",attrs:{type:"submit",disabled:!!t.isLoading}},[t.isLoading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t.isLoading?t._e():a("span",[t._v("Register")])])])]}}])}),a("br"),a("p",{staticClass:"text-center"},[t._v("Already have an account?"),a("router-link",{staticClass:"switch-auth",attrs:{to:{name:t.LOGIN_ROUTE}}},[t._v(" Login")])],1),t._m(0),t._m(1)],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center copyright"},[t._v("2022 copyright © "),a("a",{attrs:{href:""}},[t._v("alphatenders.com")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"company-copyright text-center"},[t._v("powered by "),a("span",{staticClass:"company-name"},[a("span",{staticClass:"name"},[t._v("arrpo")]),a("span",{staticClass:"desc"},[t._v(" technologies")])])])}],n=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),o=a("ffd9"),i=a("ede6"),l=a("9f2e"),c=a("7bb1"),u=a("4c93");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={components:{MazPhoneNumberInput:o["MazPhoneNumberInput"]},data:function(){return{account:{fname:null,lname:null,email:null,mobile:null,password:null},LOGIN_ROUTE:l["j"]}},computed:{errorMessage:function(){return this.$store.getters.errorMsg},isLoading:function(){return this.$store.getters.account.isLoading}},methods:{signup:function(){this.$store.dispatch(i["H"],this.account)},showPassword:function(){var t=this.$refs.passwordInput;t&&("password"===t.type?t.type="text":t.type="password")}}};Object(c["c"])("email",u["a"]),Object(c["c"])("required",m(m({},u["b"]),{},{message:"This field is required"})),Object(c["c"])("min",{validate:function(t,e){return t.length>=e.length},message:"Password must be 6 or more characters",params:["length"]});var f=p,v=a("2877"),g=Object(v["a"])(f,r,s,!1,null,null,null);e["default"]=g.exports},"4c93":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return d}));
/**
  * vee-validate v3.4.11
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
var r=function(t,e){var a=(void 0===e?{}:e).multiple,r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a&&!Array.isArray(t)&&(t=String(t).split(",").map((function(t){return t.trim()}))),Array.isArray(t)?t.every((function(t){return r.test(String(t))})):r.test(String(t))},s=[{name:"multiple",default:!1}],n={validate:r,params:s};function o(t){return null===t||void 0===t}function i(t){return Array.isArray(t)&&0===t.length}var l=function(t,e){var a=(void 0===e?{allowFalse:!0}:e).allowFalse,r={valid:!1,required:!0};return o(t)||i(t)?r:!1!==t||a?(r.valid=!!String(t).trim().length,r):r},c=!0,u=[{name:"allowFalse",default:!0}],d={validate:l,params:u,computesRequired:c}}}]);
//# sourceMappingURL=chunk-12dbac01.5ae0a36e.js.map