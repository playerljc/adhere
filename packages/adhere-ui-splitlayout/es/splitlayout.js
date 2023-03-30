import classNames from"classnames";import React,{memo,useContext,useLayoutEffect,useRef}from"react";import FlexLayout from"@baifendian/adhere-ui-flexlayout";var FlexContext=FlexLayout.Context,flexLayoutSelectorPrefix=FlexLayout.selectorPrefix,directionProp={horizontal:{page:"pageX",dimension:"width",offset:"offsetWidth"},vertical:{page:"pageY",dimension:"height",offset:"offsetHeight"}},selectorPrefix="adhere-ui-splitlayout";function toPoint(e){return Number(e.replace("%",""))/100}var SplitLayout=function(e){var r=e.className,r=void 0===r?"":r,n=e.style,n=void 0===n?{}:n,t=e.maxSize,l=void 0===t?"100%":t,t=e.minSize,s=void 0===t?10:t,u=e.onCanDrag,o=e.onDragStarted,c=e.onDragFinished,i=(e.onOut,e.onChange),v=useContext(FlexContext).direction,m=useRef(null),a=useRef(),f=useRef(),L=useRef(),M=useRef(new Map([["".concat(flexLayoutSelectorPrefix,"-fixed_").concat(flexLayoutSelectorPrefix,"-auto"),!0],["".concat(flexLayoutSelectorPrefix,"-auto_").concat(flexLayoutSelectorPrefix,"-fixed"),!0]])),d=useRef(!1),E=useRef(!1),x=useRef(!1),p=useRef(!1),y=useRef(0),g=useRef(0),P=useRef(0),S=useRef(0),R=useRef(0);function b(){var e=m.current,n=e.previousElementSibling,t=e.nextElementSibling;return Array.from(M.current.keys()).some(function(e){var e=e.split("_"),r=e[0],e=e[1];return(null==n?void 0:n.classList.contains(r))&&(null==t?void 0:t.classList.contains(e))})}function h(){var e=m.current,r=e.previousElementSibling,e=e.nextElementSibling;return null!=r&&r.classList.contains("".concat(flexLayoutSelectorPrefix,"-fixed"))?r:e}function w(){var e=m.current,r=e.previousElementSibling,e=e.nextElementSibling;return null!=r&&r.classList.contains("".concat(flexLayoutSelectorPrefix,"-auto"))?r:e}function C(){return"vertical"===v?"rowResize":"colResize"}function F(){return directionProp[v]}function z(){var e,r,n;return R.current||(e=h(),r=w(),n=F().offset,R.current=e[n]+r[n]),R.current}function N(e){var r;null!=(r=m.current)&&r.classList.add("".concat(selectorPrefix,"-").concat(C())),E.current=!1,d.current=!0,u&&u(e)}function D(e){var r;null!=(r=m.current)&&r.classList.remove("".concat(selectorPrefix,"-").concat(C())),d.current&&(x.current=!0,y.current=e[F().page],S.current=null==(r=a.current)?void 0:r[F().offset],o)&&o(e)}function _(e){var r;null!=(r=m.current)&&r.classList.add("".concat(selectorPrefix,"-").concat(C())),x.current&&(x.current=!1,p.current=!1,d.current=!E,y.current=0,P.current=P.current+g.current,c)&&c(e)}function k(e){x.current&&(x.current=!1,p.current=!1,d.current=!1,y.current=0,P.current+=g.current,c)&&c(e)}function A(e){var r,n,t,u,o,c;d.current&&x.current&&(p.current=!0,c=e[F().page],g.current=c-y.current,c="prev"==(null!=(c=m.current.previousElementSibling)&&c.classList.contains("".concat(flexLayoutSelectorPrefix,"-fixed"))?"prev":"next")?S.current+g.current:S.current-g.current,r=void 0,u=0,o=z(),"string"==typeof l?u=o*toPoint(l):"number"==typeof l&&(u=l),o=o<u?o:u,u=0,n=z(),t=F().offset,t=m[t],"string"==typeof s?u=n*toPoint(s):"number"==typeof s&&(u=s),n=u<t?t:u,o<=c||c<=n?o<=c?r=o:c<=n&&(r=n):r=c,a.current.style[F().dimension]="".concat(r,"px"),i)&&i(e)}function H(e){E.current=!0,x.current||(d.current=!1,i&&i(e))}function O(){var e;null!=(e=m.current)&&e.removeEventListener("mouseenter",N),null!=(e=m.current)&&e.addEventListener("mouseenter",N),null!=(e=m.current)&&e.removeEventListener("mousedown",D),null!=(e=m.current)&&e.addEventListener("mousedown",D),null!=(e=a.current)&&e.removeEventListener("mousemove",A),null!=(e=m.current)&&e.removeEventListener("mousemove",A),null!=(e=f.current)&&e.removeEventListener("mousemove",A),null!=(e=a.current)&&e.addEventListener("mousemove",A),null!=(e=m.current)&&e.addEventListener("mousemove",A),null!=(e=f.current)&&e.addEventListener("mousemove",A),null!=(e=a.current)&&e.removeEventListener("mouseout",H),null!=(e=m.current)&&e.removeEventListener("mouseout",H),null!=(e=f.current)&&e.removeEventListener("mouseout",H),null!=(e=a.current)&&e.addEventListener("mouseout",H),null!=(e=m.current)&&e.addEventListener("mouseout",H),null!=(e=f.current)&&e.addEventListener("mouseout",H),null!=(e=a.current)&&e.removeEventListener("mouseup",_),null!=(e=m.current)&&e.removeEventListener("mouseup",_),null!=(e=f.current)&&e.removeEventListener("mouseup",_),null!=(e=a.current)&&e.addEventListener("mouseup",_),null!=(e=m.current)&&e.addEventListener("mouseup",_),null!=(e=f.current)&&e.addEventListener("mouseup",_),null!=(e=L.current)&&e.removeEventListener("mouseleave",k),null!=(e=L.current)&&e.addEventListener("mouseleave",k)}function W(){var e;null!=(e=m.current)&&e.removeEventListener("mouseenter",N),null!=(e=m.current)&&e.removeEventListener("mouseenter",N),null!=(e=m.current)&&e.removeEventListener("mousedown",D),null!=(e=m.current)&&e.removeEventListener("mousedown",D),null!=(e=a.current)&&e.removeEventListener("mousemove",A),null!=(e=m.current)&&e.removeEventListener("mousemove",A),null!=(e=f.current)&&e.removeEventListener("mousemove",A),null!=(e=a.current)&&e.removeEventListener("mousemove",A),null!=(e=m.current)&&e.removeEventListener("mousemove",A),null!=(e=f.current)&&e.removeEventListener("mousemove",A),null!=(e=a.current)&&e.removeEventListener("mouseout",H),null!=(e=m.current)&&e.removeEventListener("mouseout",H),null!=(e=f.current)&&e.removeEventListener("mouseout",H),null!=(e=a.current)&&e.removeEventListener("mouseout",H),null!=(e=m.current)&&e.removeEventListener("mouseout",H),null!=(e=f.current)&&e.removeEventListener("mouseout",H),null!=(e=a.current)&&e.removeEventListener("mouseup",_),null!=(e=m.current)&&e.removeEventListener("mouseup",_),null!=(e=f.current)&&e.removeEventListener("mouseup",_),null!=(e=a.current)&&e.removeEventListener("mouseup",_),null!=(e=m.current)&&e.removeEventListener("mouseup",_),null!=(e=f.current)&&e.removeEventListener("mouseup",_),null!=(e=L.current)&&e.removeEventListener("mouseleave",k),null!=(e=L.current)&&e.removeEventListener("mouseleave",k)}return useLayoutEffect(function(){var e;return b()&&(a.current=h(),f.current=w(),L.current=null==(e=m.current)?void 0:e.parentElement,L.current.classList.add("".concat(selectorPrefix,"-noSelect")),O()),W},[]),useLayoutEffect(function(){return b()&&(d.current=!1,E.current=!1,x.current=!1,p.current=!1,y.current=0,g.current=0,P.current=0,S.current=0,R.current=0,a.current=h(),f.current=w(),O()),W}),React.createElement("div",{ref:m,className:classNames(selectorPrefix,"".concat(selectorPrefix,"-").concat(v),r||""),style:n||{}})};export default memo(SplitLayout);
//# sourceMappingURL=splitlayout.js.map
