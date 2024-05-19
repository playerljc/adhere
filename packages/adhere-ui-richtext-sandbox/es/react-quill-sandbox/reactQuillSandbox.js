var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var l in n=arguments[t])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,n){var t={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)n.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(t[l[r]]=e[l[r]]);return t};import{useUpdateEffect}from"ahooks";import classNames from"classnames";import React,{forwardRef,memo,useImperativeHandle,useLayoutEffect,useRef}from"react";import PropTypesStr from"../common-lib/prop-types.min";import ReactDOMStr from"../common-lib/react-dom.production.min";import ReactStr from"../common-lib/react.production.min";import QuillBubbleCssStr from"./lib/quill.bubble";import QuillSnowCssStr from"./lib/quill.snow";import ReactQuillStr from"./lib/react-quill";var editorId="quillWrap",THEME_MAP=new Map([["snow",QuillSnowCssStr],["bubble",QuillBubbleCssStr]]),selectorPrefix="adhere-ui-richtext-reactquill-sandbox",InternalReactQuillSandbox=memo(forwardRef(function(c,e){var n=c.wrapStyle,t=c.wrapClassName,a=c.quillStyle,o=(c.value,__rest(c,["wrapStyle","wrapClassName","quillStyle","value"])),r=useRef(null),u=useRef(null),i=useRef(!1),s=useRef(c.value),d=useRef();function f(){return new Promise(function(e){var n;if(!("readOnly"in c&&c.readOnly))return new Promise(function(e){var n,t,r=null==(n=null==u?void 0:u.current)?void 0:n.contentDocument,l=null==(n=null==u?void 0:u.current)?void 0:n.contentWindow;r&&l&&(t=r.getElementById(editorId),l.ReactDOM.render(React.createElement(l.ReactQuill,__assign({ref:d},o,{value:null!=(n=s.current)?n:"",onChange:function(e){var n;i.current&&c.onChange&&null!=(n=null==c?void 0:c.onChange)&&n.call(c,e)}})),t,function(){i.current=!0,e({document:r,window:l,wrap:t})}))});(n=null==(n=null==u?void 0:u.current)?void 0:n.contentDocument)&&(n.getElementById(editorId).innerHTML=c.value,r.current)&&(r.current.style.height="".concat(n.documentElement.offsetHeight/m(),"px")),e()})}function m(){var e=(e=window.devicePixelRatio)&&Math.round(100*e);return 100/Number(e)}return useImperativeHandle(e,function(){return{focus:function(){var e;null!=(e=d.current)&&e.focus()},blur:function(){var e;null!=(e=d.current)&&e.blur()},getEditor:function(){var e;return null==(e=d.current)?void 0:e.getEditor()},getQuill:function(){var e;return null==(e=null==(e=null==(e=null==u?void 0:u.current)?void 0:e.contentWindow)?void 0:e.ReactQuill)?void 0:e.Quill}}}),useLayoutEffect(function(){var e;function n(){f().then(function(){})}null!=(e=null==u?void 0:u.current)&&e.addEventListener("load",n);var t=URL.createObjectURL(new Blob([PropTypesStr],{type:"text/javascript"})),r=URL.createObjectURL(new Blob([ReactStr],{type:"text/javascript"})),l=URL.createObjectURL(new Blob([ReactDOMStr],{type:"text/javascript"})),o=URL.createObjectURL(new Blob([ReactQuillStr],{type:"text/javascript"})),i=URL.createObjectURL(new Blob(['\n        <!DOCTYPE html>\n        <head>\n          <meta charset="UTF-8" />\n          <title></title>\n          <style>\n            html, body {\n              margin: 0;\n              padding: 0;\n            }\n\n            html.editor {\n              width: 100%;\n              height: 100%;\n            }\n\n            html.editor > body {\n              width: 100%;\n              height: 100%;\n            }\n\n            html.editor > body > #'.concat(editorId," {\n              width: 100%;\n              height: 100%;\n            }\n\n            ::-webkit-scrollbar-thumb {\n              background-color: rgba(0, 0, 0, 0.1);\n              border-radius: 4px;\n            }\n            *::-webkit-scrollbar-track {\n              background-color: rgba(0, 0, 0, 0.1);\n            }\n            ::-webkit-scrollbar {\n              width: 10px;\n              height: 10px;\n            }\n\n            .quill {\n              display: flex;\n              flex-direction: column;\n              width: 100%;\n              height: 100%;\n              padding: 0;\n              margin: 0;\n            }\n\n            .quill > .ql-toolbar {\n              flex-shrink: 0;\n            }\n\n            .quill > .ql-container {\n              flex-grow: 1;\n              min-height: 0;\n            }\n\n            ").concat(THEME_MAP.get("snow"),"\n            \n            body {\n              zoom: ").concat(m(),';\n            }\n          </style>\n          <script src="').concat(t,'"><\/script>\n          <script src="').concat(r,'"><\/script>\n          <script src="').concat(l,'"><\/script>\n          <script src="').concat(o,'"><\/script>\n        </head>\n        <html lang="en" class="').concat(classNames({editor:!("readOnly"in c&&c.readOnly)}),'">\n        <body>\n          <div id="').concat(editorId,'" style="').concat(null!=a?a:"",'"></div>\n        </body>\n        </html>\n        ')],{type:"text/html"}));return u.current.src=i,function(){var e;null!=(e=null==u?void 0:u.current)&&e.removeEventListener("load",n),URL.revokeObjectURL(i),URL.revokeObjectURL(r),URL.revokeObjectURL(l),URL.revokeObjectURL(o),URL.revokeObjectURL(t)}},[]),useUpdateEffect(function(){s.current=c.value,i.current&&f().then(function(){})},[c.value]),useUpdateEffect(function(){i.current&&f().then(function(){})},[o]),React.createElement("div",{ref:r,className:classNames("".concat(selectorPrefix),null!=t?t:""),style:null!=n?n:{}},React.createElement("iframe",{ref:u,className:"".concat(selectorPrefix,"-frame")}))})),ReactQuillSandbox=InternalReactQuillSandbox;ReactQuillSandbox.displayName="ReactQuillSandbox",ReactQuillSandbox.AntdFormRequireValidator=function(o,i){return{validator:function(e,n,t){var r,l;1<(null==(l=null==(r=null==o?void 0:o())?void 0:r.getLength)?void 0:l.call(r))?t():t(i)}}};export default ReactQuillSandbox;
//# sourceMappingURL=ReactQuillSandbox.js.map
