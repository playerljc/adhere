export default'!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@wangeditor/editor")):"function"==typeof define&&define.amd?define(["exports","react","@wangeditor/editor"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).WangEditorForReact={},e.React,e.wangEditor)}(this,(function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var a=n(t),l=o(r),u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};function i(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)l.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return l}e.Editor=function(e){var n=e.defaultContent,o=void 0===n?[]:n,l=e.onCreated,f=e.defaultHtml,c=void 0===f?"":f,d=e.value,s=void 0===d?"":d,v=e.onChange,y=e.defaultConfig,g=void 0===y?{}:y,m=e.mode,p=void 0===m?"default":m,b=e.style,h=void 0===b?{}:b,j=e.className,E=t.useRef(null),O=i(t.useState(null),2),C=O[0],w=O[1],x=i(t.useState(""),2),N=x[0],P=x[1],R=function(e){l&&l(e);var t=g.onCreated;t&&t(e)},S=function(e){P(e.getHtml()),v&&v(e);var t=g.onChange;t&&t(e)},T=function(e){var t=g.onDestroyed;w(null),t&&t(e)};return t.useEffect((function(){if(null!=C&&s!==N)try{C.setHtml(s)}catch(e){console.error(e)}}),[s]),t.useEffect((function(){var e;if(null!=E.current&&null==C&&!(null===(e=E.current)||void 0===e?void 0:e.getAttribute("data-w-e-textarea"))){var t=r.createEditor({selector:E.current,config:u(u({},g),{onCreated:R,onChange:S,onDestroyed:T}),content:o,html:c||s,mode:p});w(t)}}),[C]),a.default.createElement("div",{style:h,ref:E,className:j})},e.Toolbar=function(e){var r=e.editor,n=e.defaultConfig,o=void 0===n?{}:n,u=e.mode,i=void 0===u?"default":u,f=e.style,c=void 0===f?{}:f,d=e.className,s=t.useRef(null);return t.useEffect((function(){null!=s.current&&null!=r&&l.createToolbar({editor:r,selector:s.current,config:o,mode:i})}),[r]),a.default.createElement("div",{style:c,ref:s,className:d})},Object.defineProperty(e,"__esModule",{value:!0})}));\n//# sourceMappingURL=index.js.map\n';
//# sourceMappingURL=wang-editor-react-1.0.6.js.map
