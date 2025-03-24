import{useUpdateEffect}from"ahooks";import classNames from"classnames";import React,{forwardRef,memo,useImperativeHandle,useLayoutEffect,useRef}from"react";import PropTypesStr from"../common-lib/prop-types.min";import ReactDOMStr from"../common-lib/react-dom.production.min";import ReactStr from"../common-lib/react.production.min";import QuillBubbleCssStr from"./lib/quill.bubble";import QuillSnowCssStr from"./lib/quill.snow";import ReactQuillStr from"./lib/react-quill";let editorId="quillWrap",THEME_MAP=new Map([["snow",QuillSnowCssStr],["bubble",QuillBubbleCssStr]]),selectorPrefix="adhere-ui-richtext-reactquill-sandbox",InternalReactQuillSandbox=memo(forwardRef((o,e)=>{let{wrapStyle:t,wrapClassName:r,quillStyle:n,value:l,...a}=o,i=useRef(null),c=useRef(null),u=useRef(!1),s=useRef(o.value),d=useRef();function m(){return new Promise(e=>{var t;if(!("readOnly"in o&&o.readOnly))return new Promise(t=>{let r=c?.current?.contentDocument,l=c?.current?.contentWindow;if(r&&l){let e=r.getElementById(editorId);l.ReactDOM.render(React.createElement(l.ReactQuill,{ref:d,...a,value:s.current??"",onChange:e=>{u.current&&o.onChange&&o?.onChange?.(e)}}),e,()=>{u.current=!0,t({document:r,window:l,wrap:e})})}});(t=c?.current?.contentDocument)&&(t.getElementById(editorId).innerHTML=o.value,i.current)&&(i.current.style.height=t.documentElement.offsetHeight/b()+"px"),e()})}function b(){let e=window.devicePixelRatio;return e=e&&Math.round(100*e),100/Number(e)}return useImperativeHandle(e,()=>({focus(){d.current?.focus()},blur(){d.current?.blur()},getEditor(){return d.current?.getEditor()},getQuill(){return c?.current?.contentWindow?.ReactQuill?.Quill}})),useLayoutEffect(()=>{function e(){m().then(()=>{})}c?.current?.addEventListener("load",e);let t=URL.createObjectURL(new Blob([PropTypesStr],{type:"text/javascript"})),r=URL.createObjectURL(new Blob([ReactStr],{type:"text/javascript"})),l=URL.createObjectURL(new Blob([ReactDOMStr],{type:"text/javascript"})),a=URL.createObjectURL(new Blob([ReactQuillStr],{type:"text/javascript"})),i=URL.createObjectURL(new Blob([`
        <!DOCTYPE html>
        <head>
          <meta charset="UTF-8" />
          <title></title>
          <style>
            html, body {
              margin: 0;
              padding: 0;
            }

            html.editor {
              width: 100%;
              height: 100%;
            }

            html.editor > body {
              width: 100%;
              height: 100%;
            }

            html.editor > body > #${editorId} {
              width: 100%;
              height: 100%;
            }

            ::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.1);
              border-radius: 4px;
            }
            *::-webkit-scrollbar-track {
              background-color: rgba(0, 0, 0, 0.1);
            }
            ::-webkit-scrollbar {
              width: 10px;
              height: 10px;
            }

            .quill {
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 100%;
              padding: 0;
              margin: 0;
            }

            .quill > .ql-toolbar {
              flex-shrink: 0;
            }

            .quill > .ql-container {
              flex-grow: 1;
              min-height: 0;
            }

            ${THEME_MAP.get("snow")}
            
            body {
              zoom: ${b()};
            }
          </style>
          <script src="${t}"></script>
          <script src="${r}"></script>
          <script src="${l}"></script>
          <script src="${a}"></script>
        </head>
        <html lang="en" class="${classNames({editor:!("readOnly"in o&&o.readOnly)})}">
        <body>
          <div id="${editorId}" style="${n??""}"></div>
        </body>
        </html>
        `],{type:"text/html"}));return c.current.src=i,()=>{c?.current?.removeEventListener("load",e),URL.revokeObjectURL(i),URL.revokeObjectURL(r),URL.revokeObjectURL(l),URL.revokeObjectURL(a),URL.revokeObjectURL(t)}},[]),useUpdateEffect(()=>{s.current=o.value,u.current&&m().then(()=>{})},[o.value]),useUpdateEffect(()=>{u.current&&m().then(()=>{})},[a]),React.createElement("div",{ref:i,className:classNames(""+selectorPrefix,r??""),style:t??{}},React.createElement("iframe",{ref:c,className:selectorPrefix+"-frame"}))})),ReactQuillSandbox=InternalReactQuillSandbox;ReactQuillSandbox.displayName="ReactQuillSandbox",ReactQuillSandbox.AntdFormRequireValidator=(l,a)=>({validator:(e,t,r)=>{1<l?.()?.getLength?.()?r():r(a)}});export default ReactQuillSandbox;
//# sourceMappingURL=ReactQuillSandbox.js.map
