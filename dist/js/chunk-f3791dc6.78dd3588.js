(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3791dc6"],{"02d7":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tender-page"},[a("navbar"),a("div",{staticClass:"row tender-section"},[a("sidenav",{staticClass:"d-none d-lg-block"}),a("div",{staticClass:"col-lg-9 tender-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-10"},[a("h3",{staticClass:"page-title"},[e._v("Free Tenders "),null!=e.freeTendersMetaData?a("span",{staticClass:"tender-counts"},[e._v("( "+e._s(e.freeTendersMetaData.total)+" )")]):e._e()]),e.freeTenders&&e.isLoading?a("div",{staticClass:"alert alert-dark loading-alert",attrs:{role:"alert"}},[e._m(0)]):e._e(),a("hr"),e.freeTenders?a("div",[e.freeTenders.length>0?a("div",[e._l(e.freeTenders,(function(e,t){return[a("tenderCard",{key:t,attrs:{tender:e}})]}))],2):a("div",[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e._v("\n                                No results found\n                            ")])])]):e._e(),e.freeTenders||e.isLoading?e._e():a("div",[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\n                            Error! Please check your connection.\n                        ")])]),!e.freeTenders&&e.isLoading?a("div",{staticClass:"d-flex justify-content-center circle-loader"},[e._m(1)]):e._e(),e.freeTenders?a("v-pagination",{attrs:{"page-count":Math.ceil((null!=e.freeTendersMetaData?e.freeTendersMetaData.total:1)/(null!=e.freeTendersMetaData?e.freeTendersMetaData.limit:1)),classes:e.bootstrapPaginationClasses,labels:e.paginationAnchorTexts},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e(),a("br")],1)])])],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[e._v("Loading...")])]),a("div",{staticClass:"col-3"},[e._v("\n                                Loading...\n                            ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[e._v("Loading...")])])}],n=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),i=(a("a481"),a("9735")),o=a("21e0"),c=a("4cb4"),l=a("ede6");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={components:{navbar:i["a"],sidenav:o["a"],tenderCard:c["a"]},data:function(){return{currentPage:1,bootstrapPaginationClasses:{ul:"pagination",li:"page-item",liActive:"active",liDisable:"disabled",button:"page-link"},paginationAnchorTexts:{first:"First",prev:"Previous",next:"Next",last:"Last"}}},watch:{freeTendersMetaData:{},currentPage:{handler:function(){this.getTenders(),this.$router.replace(u(u({},this.$router.currentRoute),{},{query:{page:this.currentPage}})),this.scrollToTop()}}},computed:{isLoading:function(){return this.$store.getters.freeTenders.isLoading},freeTenders:function(){return this.$store.getters.freeTenders.data},freeTendersMetaData:function(){return this.$store.getters.freeTenders.metaData}},methods:{scrollToTop:function(){window.scrollTo(0,0)},setCurrentPage:function(){this.currentPage=null!=this.$route.query.page&&parseInt(this.$route.query.page)>0?this.$route.query.page:1},getTenders:function(){this.$store.dispatch(l["t"],{page:this.currentPage})}},mounted:function(){this.getTenders()}},f=p,g=a("2877"),v=Object(g["a"])(f,s,r,!1,null,null,null);t["default"]=v.exports},"4cb4":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tender-card card",on:{click:e.openTender}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-primary"},[e._v(e._s(e.tender.title))]),a("hr"),a("p",{staticClass:"tender-card-sub-texts"},[a("strong",[e._v("Opening Date:")]),a("span",{staticClass:"values"},[null!=e.tender.bidOpeningDateText?a("span",[e._v(e._s(e.tender.bidOpeningDateText))]):a("span",[e._v(e._s(e._f("getDateOnly")(e._f("formatDate")(new Date(e.tender.bidOpeningDate)))))])])]),a("p",{staticClass:"tender-card-sub-texts"},[a("strong",[e._v("Closing Date:")]),a("span",{staticClass:"values"},[null!=e.tender.bidClosingDateText?a("span",[e._v(e._s(e.tender.bidClosingDateText))]):a("span",[e._v(e._s(e._f("getDateOnly")(e._f("formatDate")(new Date(e.tender.bidClosingDate)))))])])]),a("p",{staticClass:"tender-card-sub-texts"},[a("strong",[e._v("Published On:")]),a("span",{staticClass:"values"},[e._v(e._s(e.tender.tenderSources[0].name.en)+" ( "+e._s(e._f("getDateOnly")(e._f("formatDate")(e.tender.publicationDate)))+" )")])])]),a("div",{staticClass:"card-footer text-muted"},[a("div",{staticClass:"row justify-content-between"},[e._m(0),a("p",{staticClass:"tender-card-sub-texts time-ago"},[e._v("Posted "),a("span",{staticClass:"post-timeago-duration"},[e._v(e._s(e.timeAgo.format(new Date(e.tender.createdAt))))])])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"col-4 tender-card-sub-texts"},[a("strong",[e._v("Status:")]),a("span",{staticClass:"badge badge-success status-badge"},[e._v("open ")])])}],n=a("7c4c"),i=a("541d"),o=a("9f2e");n["a"].addDefaultLocale(i);var c={props:{tender:Object},data:function(){return{timeAgo:new n["a"]("en-US")}},methods:{openTender:function(){var e=this.$router.resolve({name:o["r"],params:{id:this.tender._id}});window.open(e.href,"_blank")}}},l=c,d=a("2877"),u=Object(d["a"])(l,s,r,!1,null,null,null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-f3791dc6.78dd3588.js.map