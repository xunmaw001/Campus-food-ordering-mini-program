(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cantingxinxi/add-or-update"],{"163b":function(n,e,t){"use strict";t.r(e);var r=t("d5f0"),a=t("bbb3");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("a6db");var u,c=t("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"f1b9e8f0",null,!1,r["a"],u);e["default"]=o.exports},2184:function(n,e,t){},"43df":function(n,e,t){"use strict";(function(n){t("26aa");r(t("66fd"));var e=r(t("163b"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},5641:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e,t,r,a,i,u){try{var c=n[i](u),o=c.value}catch(s){return void t(s)}c.done?e(o):Promise.resolve(o).then(r,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var u=n.apply(e,t);function c(n){i(u,r,a,c,o,"next",n)}function o(n){i(u,r,a,c,o,"throw",n)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("fe79"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ruleForm:{cantingmingcheng:"",cantingdizhi:"",renjunxiaofei:"",yingyeshijian:"",cantingjieshao:"",cantingtupian:"",shangjiazhanghao:"",lianxidianhua:"",sfsh:"",shhf:""},user:{},ro:{cantingmingcheng:!1,cantingdizhi:!1,renjunxiaofei:!1,yingyeshijian:!1,cantingjieshao:!1,cantingtupian:!1,shangjiazhanghao:!1,lianxidianhua:!1,sfsh:!1,shhf:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return u(r.default.mark((function a(){var i,u,c,o;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=n.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.ruleForm.shangjiazhanghao=t.user.shangjiazhanghao,t.ro.shangjiazhanghao=!0,t.ruleForm.lianxidianhua=t.user.lianxidianhua,t.ro.lianxidianhua=!0,t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){a.next=17;break}return t.ruleForm.id=e.id,a.next=15,t.$api.info("cantingxinxi",t.ruleForm.id);case 15:u=a.sent,t.ruleForm=u.data;case 17:if(t.cross=e.cross,!e.cross){a.next=73;break}c=n.getStorageSync("crossObj"),a.t0=r.default.keys(c);case 21:if((a.t1=a.t0()).done){a.next=73;break}if(o=a.t1.value,"cantingmingcheng"!=o){a.next=27;break}return t.ruleForm.cantingmingcheng=c[o],t.ro.cantingmingcheng=!0,a.abrupt("continue",21);case 27:if("cantingdizhi"!=o){a.next=31;break}return t.ruleForm.cantingdizhi=c[o],t.ro.cantingdizhi=!0,a.abrupt("continue",21);case 31:if("renjunxiaofei"!=o){a.next=35;break}return t.ruleForm.renjunxiaofei=c[o],t.ro.renjunxiaofei=!0,a.abrupt("continue",21);case 35:if("yingyeshijian"!=o){a.next=39;break}return t.ruleForm.yingyeshijian=c[o],t.ro.yingyeshijian=!0,a.abrupt("continue",21);case 39:if("cantingjieshao"!=o){a.next=43;break}return t.ruleForm.cantingjieshao=c[o],t.ro.cantingjieshao=!0,a.abrupt("continue",21);case 43:if("cantingtupian"!=o){a.next=47;break}return t.ruleForm.cantingtupian=c[o],t.ro.cantingtupian=!0,a.abrupt("continue",21);case 47:if("shangjiazhanghao"!=o){a.next=51;break}return t.ruleForm.shangjiazhanghao=c[o],t.ro.shangjiazhanghao=!0,a.abrupt("continue",21);case 51:if("lianxidianhua"!=o){a.next=55;break}return t.ruleForm.lianxidianhua=c[o],t.ro.lianxidianhua=!0,a.abrupt("continue",21);case 55:if("thumbsupnum"!=o){a.next=59;break}return t.ruleForm.thumbsupnum=c[o],t.ro.thumbsupnum=!0,a.abrupt("continue",21);case 59:if("crazilynum"!=o){a.next=63;break}return t.ruleForm.crazilynum=c[o],t.ro.crazilynum=!0,a.abrupt("continue",21);case 63:if("clicktime"!=o){a.next=67;break}return t.ruleForm.clicktime=c[o],t.ro.clicktime=!0,a.abrupt("continue",21);case 67:if("clicknum"!=o){a.next=71;break}return t.ruleForm.clicknum=c[o],t.ro.clicknum=!0,a.abrupt("continue",21);case 71:a.next=21;break;case 73:t.styleChange();case 74:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(n){console.log(n),this.ruleForm.clicktime=n.result,this.$forceUpdate()},cantingtupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.cantingtupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(r.default.mark((function t(){var a,i,u,c,o,s,l,f,m,g;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.ruleForm.renjunxiaofei||e.$validate.isNumber(e.ruleForm.renjunxiaofei)){t.next=3;break}return e.$utils.msg("人均消费应输入数字"),t.abrupt("return");case 3:if(!e.ruleForm.lianxidianhua||e.$validate.isMobile(e.ruleForm.lianxidianhua)){t.next=6;break}return e.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 6:if(!e.ruleForm.thumbsupnum||e.$validate.isIntNumer(e.ruleForm.thumbsupnum)){t.next=9;break}return e.$utils.msg("赞应输入整数"),t.abrupt("return");case 9:if(!e.ruleForm.crazilynum||e.$validate.isIntNumer(e.ruleForm.crazilynum)){t.next=12;break}return e.$utils.msg("踩应输入整数"),t.abrupt("return");case 12:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){t.next=15;break}return e.$utils.msg("点击次数应输入整数"),t.abrupt("return");case 15:if(!e.cross){t.next=31;break}if(c=n.getStorageSync("statusColumnName"),o=n.getStorageSync("statusColumnValue"),""==c){t.next=31;break}if(s=n.getStorageSync("crossObj"),c.startsWith("[")){t.next=27;break}for(l in s)l==c&&(s[l]=o);return f=n.getStorageSync("crossTable"),t.next=25,e.$api.update("".concat(f),s);case 25:t.next=31;break;case 27:a=Number(n.getStorageSync("userid")),i=s["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!i||!a){t.next=53;break}return e.ruleForm.crossuserid=a,e.ruleForm.crossrefid=i,m={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=37,e.$api.list("cantingxinxi",m);case 37:if(g=t.sent,!(g.data.total>=u)){t.next=43;break}return e.$utils.msg(n.getStorageSync("tips")),t.abrupt("return",!1);case 43:if(!e.ruleForm.id){t.next=48;break}return t.next=46,e.$api.update("cantingxinxi",e.ruleForm);case 46:t.next=50;break;case 48:return t.next=50,e.$api.add("cantingxinxi",e.ruleForm);case 50:e.$utils.msgBack("提交成功");case 51:t.next=61;break;case 53:if(!e.ruleForm.id){t.next=58;break}return t.next=56,e.$api.update("cantingxinxi",e.ruleForm);case 56:t.next=60;break;case 58:return t.next=60,e.$api.add("cantingxinxi",e.ruleForm);case 60:e.$utils.msgBack("提交成功");case 61:case"end":return t.stop()}}),t)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,t("543d")["default"])},a6db:function(n,e,t){"use strict";var r=t("2184"),a=t.n(r);a.a},bbb3:function(n,e,t){"use strict";t.r(e);var r=t("5641"),a=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=a.a},d5f0:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"fe79"))}},a=function(){var n=this,e=n.$createElement;n._self._c},i=[]}},[["43df","common/runtime","common/vendor"]]]);