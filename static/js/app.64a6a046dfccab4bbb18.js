webpackJsonp([0],{"6gl0":function(e,t,a){"use strict";var n=a("jrNp"),c=a.n(n);t.a={name:"fastSelect",components:{VueFastSelect:c.a},data:function(){return{items:[],selectIndex:0,isNative:!1,isFastSelect:!1}},mounted:function(){var e=this;setTimeout(function(){for(var t=0;t<1e4;t++)e.items.push({id:t,name:"test"+t})},1)}}},"7WRh":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[e._m(0),e._v(" "),a("div",{staticClass:"row"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"formGroupExampleInput"}},[e._v("Vue Txt Number")]),e._v(" "),a("vue-txt-number",{staticClass:"form-control",attrs:{"key-length":e.keyLength,"decimal-length":e.decimalLength,placeholder:"only can input number","allow-negative":e.allowNegative},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.keyLengthChecked,expression:"keyLengthChecked"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.keyLengthChecked)?e._i(e.keyLengthChecked,null)>-1:e.keyLengthChecked},on:{change:function(t){var a=e.keyLengthChecked,n=t.target,c=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.keyLengthChecked=a.concat([null])):i>-1&&(e.keyLengthChecked=a.slice(0,i).concat(a.slice(i+1)))}else e.keyLengthChecked=c}}}),e._v("enable\n          ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.keyLength,expression:"keyLength"}],staticClass:"form-control",attrs:{type:"number",placeholder:"limit key length",disabled:!e.keyLengthChecked},domProps:{value:e.keyLength},on:{change:e.change,input:function(t){t.target.composing||(e.keyLength=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.decimalLengthChecked,expression:"decimalLengthChecked"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.decimalLengthChecked)?e._i(e.decimalLengthChecked,null)>-1:e.decimalLengthChecked},on:{change:function(t){var a=e.decimalLengthChecked,n=t.target,c=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.decimalLengthChecked=a.concat([null])):i>-1&&(e.decimalLengthChecked=a.slice(0,i).concat(a.slice(i+1)))}else e.decimalLengthChecked=c}}}),e._v("enable\n          ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.decimalLength,expression:"decimalLength"}],staticClass:"form-control",attrs:{type:"number",placeholder:"limit decimal length",disabled:!e.decimalLengthChecked},domProps:{value:e.decimalLength},on:{change:e.change,input:function(t){t.target.composing||(e.decimalLength=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.allowNegative,expression:"allowNegative"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allowNegative)?e._i(e.allowNegative,null)>-1:e.allowNegative},on:{change:[function(t){var a=e.allowNegative,n=t.target,c=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.allowNegative=a.concat([null])):i>-1&&(e.allowNegative=a.slice(0,i).concat(a.slice(i+1)))}else e.allowNegative=c},e.change]}}),e._v("allow negative\n          ")])])])])]),e._v(" "),a("git-icon",{attrs:{url:"https://github.com/kinanson/vue-txt-number"}})],1)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("nav",{staticClass:"navbar bg-info text-center"},[a("h3",[e._v("\n        This is number input\n      ")])])])}],i={render:n,staticRenderFns:c};t.a=i},Jmt5:function(e,t){},LwKA:function(e,t){},M93x:function(e,t,a){"use strict";function n(e){a("LwKA")}var c=a("xJD8"),i=a("eCKr"),s=a("VU/8"),l=n,r=s(c.a,i.a,!1,l,null,null);t.a=r.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Jmt5"),c=(a.n(n),a("7+uW")),i=a("M93x"),s=a("YaEn"),l=a("g5tu");c.a.component("GitIcon",l.a),c.a.config.productionTip=!1,new c.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},OW3n:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-fast-select"},[a("git-icon",{attrs:{url:"https://github.com/kinanson/vue-fast-select"}}),e._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.isNative,expression:"isNative"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isNative"},domProps:{checked:Array.isArray(e.isNative)?e._i(e.isNative,null)>-1:e.isNative},on:{change:function(t){var a=e.isNative,n=t.target,c=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.isNative=a.concat([null])):i>-1&&(e.isNative=a.slice(0,i).concat(a.slice(i+1)))}else e.isNative=c}}}),e._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"isNative"}},[e._v("\n      native select\n    ")]),e._v(" "),e.isNative?a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectIndex,expression:"selectIndex"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectIndex=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("please select")]),e._v(" "),e._l(e.items,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v("\n        "+e._s(t.name)+"\n      ")])})],2):e._e()]),e._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.isFastSelect,expression:"isFastSelect"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isFastSelect"},domProps:{checked:Array.isArray(e.isFastSelect)?e._i(e.isFastSelect,null)>-1:e.isFastSelect},on:{change:function(t){var a=e.isFastSelect,n=t.target,c=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.isFastSelect=a.concat([null])):i>-1&&(e.isFastSelect=a.slice(0,i).concat(a.slice(i+1)))}else e.isFastSelect=c}}}),e._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"isFastSelect"}},[e._v("\n      fast select\n    ")]),e._v(" "),e.isFastSelect?a("vue-fast-select",{attrs:{items:e.items,"key-field":"id","value-field":"name"},model:{value:e.selectIndex,callback:function(t){e.selectIndex=t},expression:"selectIndex"}}):e._e()],1)],1)},c=[],i={render:n,staticRenderFns:c};t.a=i},"PID+":function(e,t,a){"use strict";t.a={name:"gitIcon",props:["url"]}},SmWj:function(e,t,a){"use strict";function n(e){a("UXCf")}var c=a("6gl0"),i=a("OW3n"),s=a("VU/8"),l=n,r=s(c.a,i.a,!1,l,null,null);t.a=r.exports},UXCf:function(e,t){},"V+FQ":function(e,t,a){"use strict";function n(e){a("gL45")}var c=a("sTkp"),i=a("7WRh"),s=a("VU/8"),l=n,r=s(c.a,i.a,!1,l,null,null);t.a=r.exports},YaEn:function(e,t,a){"use strict";var n=a("7+uW"),c=a("/ocq"),i=a("V+FQ"),s=a("SmWj");n.a.use(c.a),t.a=new c.a({routes:[{path:"/",name:"TxtNumber",component:i.a},{path:"/fastSelect",name:"FastSelect",component:s.a}]})},eCKr:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],i={render:n,staticRenderFns:c};t.a=i},g5tu:function(e,t,a){"use strict";function n(e){a("zDwh")}var c=a("PID+"),i=a("vPso"),s=a("VU/8"),l=n,r=s(c.a,i.a,!1,l,null,null);t.a=r.exports},gL45:function(e,t){},sTkp:function(e,t,a){"use strict";var n=a("gGjQ"),c=a.n(n);t.a={name:"txtNumber",components:{VueTxtNumber:c.a},data:function(){return{number:1,keyLengthChecked:!1,keyLength:0,decimalLengthChecked:!1,decimalLength:0,allowNegative:!0}},methods:{change:function(){this.number=1}},watch:{keyLengthChecked:function(e){e||(this.keyLength=0,this.number=1)},decimalLengthChecked:function(e){e||(this.decimalLength=0,this.number=1)}}}},vPso:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"github-corner",attrs:{href:e.url,"aria-label":"View source on Github"}},[a("svg",{staticStyle:{fill:"#FD6C6C",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e._v(" "),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e._v(" "),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},c=[],i={render:n,staticRenderFns:c};t.a=i},xJD8:function(e,t,a){"use strict";t.a={name:"app"}},zDwh:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.64a6a046dfccab4bbb18.js.map