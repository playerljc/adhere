import Dict from"@baifendian/adhere-util-dict";import Intl from"@baifendian/adhere-util-intl";export default{initStatic:function(){Dict.handlers.FormInputNumberRule=function(){return{type:"number",message:Intl.v("输入的值在1~200之间"),min:1,max:200}},Dict.handlers.FormWhitespaceRule=function(){return{message:Intl.v("输入的内容前后不能有空格"),whitespace:!0}},Dict.handlers.FormInputStringRule=function(){return{type:"string",message:Intl.v("输入的内容在100个字符之内"),min:1,max:100}},Dict.handlers.FormPopupContainer=function(){return function(n){return n.parentElement}}}};
//# sourceMappingURL=dict.form.config.js.map
