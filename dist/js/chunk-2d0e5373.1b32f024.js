(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5373"],{9413:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("navbar"),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-md-12 col-sm-12 offset-lg-2"},[t._m(0),a("hr"),t.isLoading?a("div",{staticClass:"alert alert-dark loading-alert",attrs:{role:"alert"}},[t._m(1)]):t._e(),null!=t.alertEmails&&t.alertEmails.length>0?a("div",[t.alertEmails.length>0?a("table",{staticClass:"table table-striped table-bordered table-hover alert-email-table"},[t._m(2),a("tbody",[t._l(t.alertEmails,(function(e,s){return[a("tr",{key:s},[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[a("span",{staticClass:"open-alert-email-btn",on:{click:function(a){return t.openEmail(e._id)}}},[t._v(t._s(t._f("getDateOnly")(t._f("formatDate")(e.createdAt))))])]),a("td",[a("a",{staticClass:"text-secondary",attrs:{href:"mailto:"+e.sentToEmail}},[t._v(t._s(e.sentToEmail))])]),a("td",[a("strong",{staticClass:"text-secondary"},[t._v(t._s(e.tenders.length))])]),a("td",[e.isOpened?a("span",{staticClass:"badge badge-success status-badge"},[t._v("Yes")]):a("span",{staticClass:"badge badge-danger status-badge"},[t._v("No")])]),a("td",[a("span",{staticClass:"btn open-alert-email-btn",on:{click:function(a){return t.openEmail(e._id)}}},[t._v("Open")])])])]}))],2)]):t._e()]):t._e(),null!=t.alertEmails&&0!=t.alertEmails.length||t.isLoading?t._e():a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[t._v("\n                To receive Alert Emails, select Tender Categories and Regions you wish to receive alerts on. To select categories and regions "),a("router-link",{attrs:{to:{name:t.SETTINGS_ROUTE}}},[t._v("click here")]),t._v(". \n            ")],1)])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card title-card"},[a("div",{staticClass:"card-body"},[a("h4",[t._v("Alert Emails")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])]),a("div",{staticClass:"col-3"},[t._v("\n                        Loading...\n                    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Sent On")]),a("th",{attrs:{scope:"col"}},[t._v("Sent to")]),a("th",{attrs:{scope:"col"}},[t._v("Number of Alert Tenders")]),a("th",{attrs:{scope:"col"}},[t._v("Is Opened")]),a("th",{attrs:{scope:"col"}})])])}],n=a("9735"),l=a("9f2e"),i=a("ede6"),o={components:{navbar:n["a"]},data:function(){return{ALERT_EMAIL_ROUTE:l["b"],SETTINGS_ROUTE:l["o"]}},computed:{account:function(){return this.$store.getters.account.data},alertEmails:function(){return this.$store.getters.alertEmails.data},isLoading:function(){return this.$store.getters.alertEmails.isLoading}},methods:{getAlertEmails:function(){this.$store.dispatch(i["q"],{account:this.account._id})},openEmail:function(t){var e=this.$router.resolve({name:l["b"],params:{id:t}});window.open(e.href,"_blank")}},mounted:function(){this.getAlertEmails()}},c=o,d=a("2877"),u=Object(d["a"])(c,s,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e5373.1b32f024.js.map