(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aeb59"],{"0ae7":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"email-verification-page"},[s("hr"),s("br"),s("br"),s("br"),t.isLoading?s("div",[t._m(0),s("br"),s("h5",{staticClass:"title text-center"},[t._v("Verifying Email...")])]):s("div",[t.errorMessage?s("h6",{staticClass:"text-center text-danger"},[t._v(t._s(t.errorMessage))]):t._e(),!t.errorMessage&&t.status?s("div",[t._m(1),s("h5",{staticClass:"text-center"},[t._v("Your email has been verified")]),s("br"),s("p",{staticClass:"text-center"},[t._v("Click "),s("router-link",{attrs:{to:{name:t.ALL_TENDERS_ROUTE}}},[t._v("here")]),t._v(" to go to tenders page.")],1)]):t._e()])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"spinner-border text-primary text-center",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"text-center text-success"},[s("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})])}],i=s("9f2e"),n=s("ede6"),c={data:function(){return{ALL_TENDERS_ROUTE:i["c"]}},computed:{account:function(){return this.$store.getters.account.data},status:function(){return this.$store.getters.account.status},isLoading:function(){return this.$store.getters.account.isLoading},errorMessage:function(){return this.$store.getters.errorMsg}},methods:{verifyEmail:function(){this.$store.dispatch(n["K"],{verificationToken:this.$route.params.token})}},mounted:function(){this.verifyEmail()}},o=c,u=s("2877"),l=Object(u["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0aeb59.f39a985c.js.map