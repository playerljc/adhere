var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import WangEditorCssStr from"./lib/wang-editor-css";import{useUpdateEffect}from"ahooks";import classNames from"classnames";import React,{forwardRef,memo,useEffect,useImperativeHandle,useLayoutEffect,useMemo,useRef}from"react";import ReactDOMStr from"../common-lib/react-dom.production.min";import ReactStr from"../common-lib/react.production.min";import WangEditorStr from"./lib/wang-editor-5.1.23";import WangEditorReactStr from"./lib/wang-editor-react-1.0.6";var selectorPrefix="adhere-ui-richtext-wangeditor-sandbox",editorId="wangEditorWrap",WangEditorSandbox=function(i,c){var e=i.wrapStyle,t=i.wrapClassName,l=i.wangEditorStyle,n=i.toolBarProps,u=i.editorProps,r=useRef(null),d=useRef(null),s=useRef(!1),f=useRef(i.value),m=useRef(null),p=useMemo(function(){return{defaultConfig:{},mode:"default"}},[]),g=useMemo(function(){return{defaultConfig:{},mode:"default"}},[]);function b(){return new Promise(function(e){var t;if(!("readOnly"in i&&i.readOnly))return new Promise(function(e){var t=null==(o=null==d?void 0:d.current)?void 0:o.contentDocument,n=null==(o=null==d?void 0:d.current)?void 0:o.contentWindow,r=t.getElementById(editorId),o=n.WangEditorForReact,a=o.Editor,o=o.Toolbar;n.ReactDOM.render(React.createElement(React.Fragment,null,React.createElement(o,__assign({editor:m.current},p,i.toolBarProps||{})),React.createElement(a,__assign({ref:c},g,i.editorProps||{},{onCreated:function(e){m.current=e,b().then(function(){null!=u&&u.onCreated&&u.onCreated(e)})},value:f.current,onChange:function(e){i.onChange&&i.onChange(e.getHtml())}}))),r,function(){s.current=!0,e({document:t,window:n,wrap:r})})});(t=null==(t=null==d?void 0:d.current)?void 0:t.contentDocument).getElementById(editorId).innerHTML=i.value,r.current&&(r.current.style.height="".concat(t.documentElement.offsetHeight,"px")),e()})}return useImperativeHandle(c,function(){return{getEditor:function(){return m.current},getWangEditor:function(){var e;return null==(e=null==(e=null==d?void 0:d.current)?void 0:e.contentWindow)?void 0:e.wangEditor}}}),useLayoutEffect(function(){var e;function t(){return b()}null!=(e=null==d?void 0:d.current)&&e.addEventListener("load",t);var n=URL.createObjectURL(new Blob([ReactStr],{type:"text/javascript"})),r=URL.createObjectURL(new Blob([ReactDOMStr],{type:"text/javascript"})),o=URL.createObjectURL(new Blob([WangEditorStr],{type:"text/javascript"})),a=URL.createObjectURL(new Blob([WangEditorReactStr],{type:"text/javascript"})),c=URL.createObjectURL(new Blob(['\n        <!DOCTYPE html>\n        <head>\n          <meta charset="UTF-8" />\n          <title></title>\n          <style>\n            html, body {\n              margin: 0;\n              padding: 0;\n            }\n\n            html.editor {\n              width: 100%;\n              height: 100%;\n            }\n\n            html.editor > body {\n              width: 100%;\n              height: 100%;\n            }\n\n            html.editor > body > #'.concat(editorId," {\n              display: flex;\n              flex-direction: column;\n              width: 100%;\n              height: 100%;\n            }\n            \n            html > body > #").concat(editorId," > [data-w-e-toolbar=true] {\n              flex-shrink: 0;\n            }\n            \n            html > body > #").concat(editorId," > [data-w-e-textarea=true] {\n              flex-grow: 1;\n              min-height: 0;\n            }\n\n            ::-webkit-scrollbar-thumb {\n              background-color: rgba(0, 0, 0, 0.1);\n              border-radius: 4px;\n            }\n            *::-webkit-scrollbar-track {\n              background-color: rgba(0, 0, 0, 0.1);\n            }\n            ::-webkit-scrollbar {\n              width: 10px;\n              height: 10px;\n            }\n\n            ").concat(WangEditorCssStr,'\n          </style>\n          <script src="').concat(n,'"><\/script>\n          <script src="').concat(r,'"><\/script>\n          <script src="').concat(o,'"><\/script>\n          <script src="').concat(a,'"><\/script>\n        </head>\n        <html lang="en" class="').concat(classNames({editor:!("readOnly"in i&&i.readOnly)}),'">\n        <body>\n          <div id="').concat(editorId,'" style="').concat(l||"",'"></div>\n        </body>\n        </html>\n        ')],{type:"text/html"}));return d.current.src=c,function(){var e;null!=(e=null==d?void 0:d.current)&&e.removeEventListener("load",t),URL.revokeObjectURL(c),URL.revokeObjectURL(n),URL.revokeObjectURL(r),URL.revokeObjectURL(o),URL.revokeObjectURL(a)}},[]),useEffect(function(){return function(){null!==m.current&&(m.current.destroy(),m.current=null,b())}},[m]),useUpdateEffect(function(){f.current=i.value,s.current&&b().then(function(){})},[i.value]),useUpdateEffect(function(){s.current&&b().then(function(){})},[n,u]),React.createElement("div",{ref:r,className:classNames("".concat(selectorPrefix),t||""),style:e||{}},React.createElement("iframe",{ref:d,className:"".concat(selectorPrefix,"-frame")}))};export default memo(forwardRef(WangEditorSandbox));
//# sourceMappingURL=wangEditorSandbox.js.map
