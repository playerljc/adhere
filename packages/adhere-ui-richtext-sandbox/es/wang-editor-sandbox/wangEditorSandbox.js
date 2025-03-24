import WangEditorCssStr from"./lib/wang-editor-css";import WangEditorViewCssStr from"./lib/wang-editor-view-css";import{useUpdateEffect}from"ahooks";import classNames from"classnames";import React,{forwardRef,memo,useContext,useEffect,useImperativeHandle,useLayoutEffect,useMemo,useRef}from"react";import ConfigProvider from"@baifendian/adhere-ui-configprovider";import ReactDOMStr from"../common-lib/react-dom.production.min";import ReactStr from"../common-lib/react.production.min";import WangEditorStr from"./lib/wang-editor-5.1.23";import WangEditorReactStr from"./lib/wang-editor-react-1.0.6";let selectorPrefix="adhere-ui-richtext-wangeditor-sandbox",editorId="wangEditorWrap",InternalWangEditorSandbox=memo(forwardRef((c,l)=>{let{wrapStyle:e,wrapClassName:t,wangEditorStyle:i,toolBarProps:r,editorProps:s}=c,o=useRef(null),u=useRef(null),m=useRef(!1),f=useRef(c.value),g=useRef(null),b=useRef(!1),p=useContext(ConfigProvider.Context),h=useMemo(()=>new Map([["zh_CN","zh-CN"],["en_US","en"]]),[]),R=useMemo(()=>({defaultConfig:{},mode:"default"}),[]),w=useMemo(()=>({defaultConfig:{},mode:"default"}),[]);function d(){let e=window.devicePixelRatio;return e=e&&Math.round(100*e),100/Number(e)}function E(){return new Promise(e=>{var t;if(!("readOnly"in c&&c.readOnly))return new Promise(t=>{let r=u?.current?.contentDocument,o=u?.current?.contentWindow;if(r&&o){let e=r.getElementById(editorId);var n=r.styleSheets[0],a=n.cssRules[3],n=n.cssRules[4],i=`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
          `,d=`
            flex-shrink: 0;
          `,a=("bordered"in c&&!c.bordered?(a.style.cssText=i,n.style.cssText=d):(a.style.cssText=`
              ${i}
              border: 1px solid #ccc;
            `,n.style.cssText=`
              ${d}
              border-bottom: 1px solid #ccc;
            `),o?.wangEditor).i18nChangeLanguage,{WangEditorForReact:{Editor:i,Toolbar:n},ReactDOM:d}=(a(h.get(c.lang||p.intl?.lang||"zh_CN")),o);d.render(React.createElement(React.Fragment,null,React.createElement(n,{editor:g.current,...R,...c.toolBarProps??{}}),React.createElement(i,{ref:l,...w,...c.editorProps??{},onCreated:e=>{g.current=e,E().then(()=>{s?.onCreated&&s.onCreated(e)})},value:f.current,onChange:e=>{b.current?c.onChange&&c.onChange(e.getHtml()):b.current=!0}})),e,()=>{m.current=!0,t({document:r,window:o,wrap:e})})}});(t=u?.current?.contentDocument)&&(t.getElementById(editorId).innerHTML=c.value,o.current)&&(o.current.style.height=t.documentElement.offsetHeight/d()+"px"),e()})}return useImperativeHandle(l,()=>({getEditor(){return g.current},getWangEditor(){return u?.current?.contentWindow?.wangEditor}})),useLayoutEffect(()=>{function e(){return E()}u?.current?.addEventListener("load",e);let t=URL.createObjectURL(new Blob([ReactStr],{type:"text/javascript"})),r=URL.createObjectURL(new Blob([ReactDOMStr],{type:"text/javascript"})),o=URL.createObjectURL(new Blob([WangEditorStr],{type:"text/javascript"})),n=URL.createObjectURL(new Blob([WangEditorReactStr],{type:"text/javascript"})),a=URL.createObjectURL(new Blob([`
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
            }
            
            html > body > #${editorId} > [data-w-e-toolbar=true] {
            }
            
            html > body > #${editorId} > [data-w-e-textarea=true] {
              flex-grow: 1;
              min-height: 0;
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
            
            ${WangEditorCssStr}
            ${"readOnly"in c||c.readOnly?WangEditorViewCssStr:""}
            
            body {
              zoom: ${d()};
            }
          </style>
          <script src="${t}"></script>
          <script src="${r}"></script>
          <script src="${o}"></script>
          <script src="${n}"></script>
        </head>
        <html lang="en" class="${classNames({editor:!("readOnly"in c&&c.readOnly)})}">
        <body>
          <div id="${editorId}" class="editor-content-view" style="${i??""}"></div>
        </body>
        </html>
        `],{type:"text/html"}));return u.current.src=a,()=>{u?.current?.removeEventListener("load",e),URL.revokeObjectURL(a),URL.revokeObjectURL(t),URL.revokeObjectURL(r),URL.revokeObjectURL(o),URL.revokeObjectURL(n)}},[]),useEffect(()=>()=>{null!==g.current&&(g.current.destroy(),g.current=null,E())},[g]),useUpdateEffect(()=>{f.current=c.value,m.current&&E().then(()=>{})},[c.value]),useUpdateEffect(()=>{m.current&&E().then(()=>{})},[r,s]),React.createElement("div",{ref:o,className:classNames(""+selectorPrefix,t??""),style:e??{}},React.createElement("iframe",{ref:u,className:selectorPrefix+"-frame"}))})),WangEditorSandbox=InternalWangEditorSandbox;WangEditorSandbox.displayName="WangEditorSandbox",WangEditorSandbox.AntdFormRequireValidator=(o,n)=>({validator:(e,t,r)=>{o?.()?.isEmpty?.()?r(n):r()}});export default WangEditorSandbox;
//# sourceMappingURL=WangEditorSandbox.js.map
