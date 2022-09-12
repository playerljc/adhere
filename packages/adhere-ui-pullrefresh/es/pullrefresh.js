import React,{forwardRef,useEffect,useLayoutEffect,useRef,useImperativeHandle}from"react";import classNames from"classnames";import moment from"moment";import Intl from"@baifendian/adhere-util-intl";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Util from"@baifendian/adhere-util";import Resource from"@baifendian/adhere-util-resource";import Hooks from"@baifendian/adhere-ui-hooks";var selectorPrefix="adhere-ui-pullrefresh",defaultImg="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==",useSetState=Hooks.useSetState,PullRefresh=function(r,e){var t=r.className,n=void 0===t?"":t,c=r.style,u=void 0===c?{}:c,i=r.scrollClassName,l=void 0===i?"":i,a=r.scrollStyle,o=void 0===a?{}:a,s=r.renderIcon,t=r.renderLabel,d=void 0===t?function(){return Intl.v("下拉刷新")}:t,c=r.renderCanLabel,m=void 0===c?function(){return Intl.v("松开刷新")}:c,i=r.renderLoadingAnimation,f=void 0===i?"la-ball-circus la-dark":i,a=r.isShowUpdateTime,t=void 0===a||a,c=r.updateTimeFormat,M=void 0===c?Resource.Dict.value.ResourceMomentFormat18.value():c,i=r.children,a=useSetState(!1),c=a[0],v=a[1],a=useSetState(moment().valueOf()),g=a[0],I=a[1],N=useRef(null),y=useRef(null),E=useRef(null),R=useRef(null),T=useRef(null),D=useRef(null),L=useRef(null),h=useRef(null),z=useRef(null),x=useRef(null),j=useRef(!0),p=useRef(200),A=useRef(-1),w=useRef(!1),C=useRef(0);function b(e,t){r[e]&&r[e](t)}function P(e,t,r){e.style.transition=e.style.webkitTransition="transform "+(r=void 0===r?0:r)+"ms ease",e.style.transform=e.style.webkitTransform="translate3d(0,"+t+",0)"}function k(){S(),w.current=!1,j.current=!0,D.current.style.display="flex",R.current.style.display="none",z.current.style.display="flex",G(h.current,180,0),L.current.style.overflowY="auto",x.current.style.display="none"}function S(){var e;null!==(e=L.current)&&void 0!==e&&e.removeEventListener("mousemove",Q),null!==(e=L.current)&&void 0!==e&&e.removeEventListener("mouseup",U),null!==(e=L.current)&&void 0!==e&&e.removeEventListener("touchmove",Q),null!==(e=L.current)&&void 0!==e&&e.removeEventListener("touchend",U)}function O(){var e;x.current.style.display="block",S(),null!==(e=L.current)&&void 0!==e&&e.addEventListener("transitionend",function e(){var t;z.current.style.display="none",R.current.style.display="block",b("onPullRefresh"),null!==(t=L.current)&&void 0!==t&&t.removeEventListener("transitionend",e),I(moment().valueOf())}),P(L.current,C.current+"px",500),P(D.current,"calc(-100% + "+C.current+"px)",500),G(h.current,180,300)}function Y(){var e;k(),null!==(e=L.current)&&void 0!==e&&e.addEventListener("transitionend",function e(){var t;null!==(t=L.current)&&void 0!==t&&t.removeEventListener("transitionend",e),z.current.style.display="flex"}),P(L.current,"0px",200),P(D.current,"calc(-100% + 0px)",200)}function Z(t){return new Promise(function(e){return I(t||moment().valueOf(),function(){return e()})})}function B(){return g}function G(e,t,r){e.style.transition=e.style.webkitTransition="transform "+(r=void 0===r?0:r)+"ms linear",e.style.transform=e.style.webkitTransform="rotate("+t+"deg)"}function H(e){b("onPullStart"),A.current=(e.changedTouches?e.changedTouches[0]:e).pageY,null!==(e=L.current)&&void 0!==e&&e.addEventListener("touchmove",Q),null!==(e=L.current)&&void 0!==e&&e.addEventListener("mousemove",Q),null!==(e=L.current)&&void 0!==e&&e.addEventListener("touchend",U),null!==(e=L.current)&&void 0!==e&&e.addEventListener("mouseup",U)}function Q(e){L.current.style.overflow="hidden";var t=(e.changedTouches?e.changedTouches[0]:e).pageY-A.current,r=Math.abs(t);0<t?(e.preventDefault(),w.current=!0,r<p.current?(P(L.current,r+"px",0),P(D.current,"calc(-100% + "+r+"px)",0),r>=C.current+80?(G(h.current,0,150),v(!0,function(){return b("onPullCanRefresh")})):(G(h.current,180,150),v(!1)),D.current.style.display="flex"):(P(L.current,p.current+"px",0),P(D.current,"calc(-100% + "+p.current+"px)",0),G(h.current,0,150),v(!0,function(){return b("onPullBottom")}))):w.current?(e.preventDefault(),P(L.current,"0px",0),P(D.current,"calc(-100% + 0px)",0),G(h.current,180,0)):k()}function U(e){var t=(e.changedTouches?e.changedTouches[0]:e).pageY-A.current,e=Math.abs(t);0<t?!(e<p.current)||e>=C.current+80?O():(b("onPullRebound"),Y()):k()}function W(e){var t;0===e.target.scrollTop?(j.current=!0,null!==(t=L.current)&&void 0!==t&&t.addEventListener("touchstart",H),null!==(t=L.current)&&void 0!==t&&t.addEventListener("mousedown",H)):j.current&&(j.current=!1,null!==(t=L.current)&&void 0!==t&&t.removeEventListener("touchstart",H),null!==(t=L.current)&&void 0!==t&&t.removeEventListener("mousedown",H))}return useImperativeHandle(e,function(){return{refresh:O,reset:Y,resetUpdateTime:Z,getUpdateTime:B}}),useEffect(function(){I(r.updateTime||moment().valueOf())},[r.updateTime]),useEffect(function(){x.current=document.querySelector("."+selectorPrefix+"-mask"),x.current||(x.current=document.createElement("div"),x.current.className=selectorPrefix+"-mask",document.body.appendChild(x.current))},[]),useLayoutEffect(function(){var e;D.current=N.current,h.current=E.current,L.current=y.current,z.current=T.current,p.current=((e=void 0===(e=r.pullHeight)?200:e)||200)<=0?200:(e||200)>L.current.clientHeight?L.current.clientHeight:e||200,C.current=D.current.clientHeight},[]),useLayoutEffect(function(){var e;return null!==(e=L.current)&&void 0!==e&&e.addEventListener("touchstart",H),null!==(e=L.current)&&void 0!==e&&e.addEventListener("mousedown",H),null!==(e=L.current)&&void 0!==e&&e.addEventListener("scroll",W),S}),React.createElement("div",{className:classNames(selectorPrefix,n||""),style:u||{}},React.createElement("div",{className:classNames(selectorPrefix+"-scroll",l||""),style:o||{},ref:y},i),React.createElement("div",{className:selectorPrefix+"-trigger",ref:N},React.createElement("div",{className:selectorPrefix+"-trigger-inner",ref:T},React.createElement(ConditionalRender,{conditional:!!s,noMatch:function(){return React.createElement("div",{className:selectorPrefix+"-trigger-icon"},React.createElement("img",{className:selectorPrefix+"-trigger-icon-inner",src:defaultImg,alt:"",ref:E}))}},function(){return React.createElement("div",{className:selectorPrefix+"-trigger-icon"},React.createElement("div",{className:selectorPrefix+"-trigger-icon-inner",ref:E},null==s?void 0:s()))}),React.createElement("p",{className:selectorPrefix+"-trigger-label"},React.createElement(ConditionalRender,{conditional:c,noMatch:function(){return null==d?void 0:d()}},function(){return null==m?void 0:m()})),React.createElement(ConditionalRender,{conditional:t},function(){return React.createElement("p",{className:selectorPrefix+"-trigger-update"},Intl.v("更新时间"),"：",React.createElement("span",{className:selectorPrefix+"-trigger-update-label"},moment(g).format(M)))})),React.createElement(ConditionalRender,{conditional:!!f},function(){return React.createElement(ConditionalRender,{conditional:Util.isString(f),noMatch:function(){return React.createElement("div",{className:selectorPrefix+"-trigger-refresh",ref:R},f())}},function(){return React.createElement("div",{className:classNames(selectorPrefix+"-trigger-refresh",f),ref:R},React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null))})})))};export default forwardRef(PullRefresh);
//# sourceMappingURL=pullrefresh.js.map
