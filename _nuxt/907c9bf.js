(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{317:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("64e9ef21",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n(317)},325:function(t,e,n){var o=n(47),d=n(80),r=n(81),c=n(82),l=o(!1),v=d(r),f=d(c);l.push([t.i,"[data-theme=light][data-v-69ab034e]{--background:#fafafa;--hover:#e6e6e6;--elements:#fff;--text:#111517;--search:url("+v+")}[data-theme=dark][data-v-69ab034e]{--background:#202c37;--hover:#11181d;--elements:#2b3945;--text:#fff;--search:url("+f+')}*[data-v-69ab034e],[data-v-69ab034e]:after,[data-v-69ab034e]:before{box-sizing:border-box;margin:0;padding:0}html[data-v-69ab034e]{font-family:"Nunito Sans";background-color:#fafafa;overflow-x:hidden}main[data-v-69ab034e]{min-height:calc(100vh - 163px)}.back[data-v-69ab034e],main[data-v-69ab034e]{background-color:var(--background)}.back[data-v-69ab034e]{width:100%;height:100%}.container[data-v-69ab034e]{padding:25px;margin:0 auto;max-width:1440px}@media(min-width:576px){.container[data-v-69ab034e]{padding:25px 50px}}@media(min-width:992px){.container[data-v-69ab034e]{padding:25px 85px}}.fade-enter-active[data-v-69ab034e],.fade-leave-active[data-v-69ab034e]{transition:opacity .5s}.fade-enter[data-v-69ab034e],.fade-leave-to[data-v-69ab034e]{opacity:0}.tile-enter-active[data-v-69ab034e]{transition:all 1s}.tile-leave-active[data-v-69ab034e]{transition:all 1s;position:absolute}.tile-enter[data-v-69ab034e],.tile-leave-to[data-v-69ab034e]{opacity:0}.tile-enter-to[data-v-69ab034e],.tile-leave-from[data-v-69ab034e]{opacity:1}.tile-move[data-v-69ab034e]{transition:transform 1s}.dropdown[data-v-69ab034e]{position:relative;display:inline-block;width:175px}.dropdown-btn[data-v-69ab034e]{display:flex;align-items:center;justify-content:space-between;background-color:var(--elements);color:var(--text);padding:14px;width:100%;text-align:left;font-size:14px;font-weight:700;border:none;border-radius:5px;cursor:pointer}.icon[data-v-69ab034e]{transition:transform .5s}.dropdown-content[data-v-69ab034e]{display:none;position:absolute;width:100%;background-color:var(--elements);font-size:14px;z-index:1;transition:opacity 5s;border-radius:0 0 5px 5px}.dropdown-content p[data-v-69ab034e]{display:block;padding:8px 16px;text-decoration:none;color:var(--text);cursor:pointer}.dropdown-content p[data-v-69ab034e]:last-of-type{border-radius:0 0 5px 5px}.dropdown-content p[data-v-69ab034e]:hover{background-color:var(--hover)}.dropdown:hover .dropdown-content[data-v-69ab034e]{display:block}.dropdown:hover .icon[data-v-69ab034e]{transform:rotate(-180deg)}@media(min-width:576px){.dropdown-btn[data-v-69ab034e]{padding:14px}.dropdown-content[data-v-69ab034e]{font-size:14px}}@media(min-width:992px){.dropdown[data-v-69ab034e]{width:200px}.dropdown-content a[data-v-69ab034e]{padding:10px 16px}.dropdown-btn[data-v-69ab034e]{padding:16px}.dropdown-btn[data-v-69ab034e],.dropdown-content[data-v-69ab034e]{font-size:16px}}',""]),t.exports=l},331:function(t,e,n){"use strict";n.r(e);var o={name:"DropdownBar",emits:["filterAll","filterRegion"],props:["current-region"]},d=(n(324),n(20)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown"},[e("button",{staticClass:"dropdown-btn"},[t._v("\n    "+t._s(t.currentRegion?t.currentRegion:"Filter by Region")+"\n    "),e("font-awesome-icon",{staticClass:"icon",attrs:{icon:"fa-solid fa-chevron-down"}})],1),t._v(" "),e("div",{staticClass:"dropdown-content"},[e("p",{on:{click:function(e){return t.$emit("filterAll")}}},[t._v("All")]),t._v(" "),e("p",{on:{click:function(e){return t.$emit("filterRegion",e)}}},[t._v("Africa")]),t._v(" "),e("p",{on:{click:function(e){return t.$emit("filterRegion",e)}}},[t._v("Americas")]),t._v(" "),e("p",{on:{click:function(e){return t.$emit("filterRegion",e)}}},[t._v("Asia")]),t._v(" "),e("p",{on:{click:function(e){return t.$emit("filterRegion",e)}}},[t._v("Europe")]),t._v(" "),e("p",{on:{click:function(e){return t.$emit("filterRegion",e)}}},[t._v("Oceania")])])])}),[],!1,null,"69ab034e",null);e.default=component.exports}}]);