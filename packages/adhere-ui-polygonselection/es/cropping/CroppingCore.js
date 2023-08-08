import _Space from"antd/es/space";import _Card from"antd/es/card";import _Button from"antd/es/button";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,t=1,l=arguments.length;t<l;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};import{useUpdateLayoutEffect}from"ahooks";import classNames from"classnames";import React,{forwardRef,memo,useCallback,useImperativeHandle,useLayoutEffect,useMemo,useRef,useState}from"react";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import Intl from"@baifendian/adhere-util-intl";import CircleDrawAction from"../draw/CircleDrawAction";import DiamondDrawAction from"../draw/DiamondDrawAction";import PolygonDrawAction from"../draw/PolygonDrawAction";import RectangleDrawAction from"../draw/RectangleDrawAction";import StartDrawAction from"../draw/StartDrawAction";import TriangleDrawAction from"../draw/TriangleDrawAction";import PolygonSelection from"../index";import CircleModifyAction from"../modify/CircleModifyAction";import DiamondModifyAction from"../modify/DiamondModifyAction";import PolygonModifyAction from"../modify/PolygonModifyAction";import RectangleModifyAction from"../modify/RectangleModifyAction";import StartModifyAction from"../modify/StartModifyAction";import TriangleModifyAction from"../modify/TriangleModifyAction";import{ActionEvents,PolygonSelectionActions,SelectType}from"../types";import{drawCircle,drawDiamond,drawPolygon,drawRectangle,drawStart,drawTriangle,getClipDataUrl,sort}from"./util";var selectorPrefix="adhere-ui-cropping-core",CroppingCore=function(e,n){var t=e.className,l=e.style,r=e.wrapProps,o=e.toolProps,i=e.areaProps,a=e.minHeight,c=void 0===a?200:a,u=e.toolBarConfig,a=useState(null),s=a[0],d=a[1],e=useState(""),f=e[0],g=e[1],y=useRef(null),a=useRef(null),v=useRef(null),m=useRef(null),p=useRef(),_=useRef(null),w=useRef(),S=useRef(null),h=useRef(null),A=useRef(null),e=new Map([["left",function(){return React.createElement(FlexLayout.TRBLC.LCLayout,__assign({},D,r,{lProps:__assign(__assign(__assign({},E),o),{children:P}),cProps:__assign(__assign(__assign({},k),i),{children:M})}))}],["right",function(){return React.createElement(FlexLayout.TRBLC.CRLayout,__assign({},D,r,{rProps:__assign(__assign(__assign({},E),o),{children:P}),cProps:__assign(__assign(__assign({},k),i),{children:M})}))}],["top",function(){return React.createElement(FlexLayout.TRBLC.TCLayout,__assign({},D,r,{tProps:__assign(__assign(__assign({},E),o),{children:P}),cProps:__assign(__assign(__assign({},k),i),{children:M})}))}],["bottom",function(){return React.createElement(FlexLayout.TRBLC.CBLayout,__assign({},D,r,{bProps:__assign(__assign(__assign({},E),o),{children:P}),cProps:__assign(__assign(__assign({},k),i),{children:M})}))}]]),R=useMemo(function(){return new Map([[SelectType.Polygon,PolygonModifyAction],[SelectType.Circle,CircleModifyAction],[SelectType.Rectangle,RectangleModifyAction],[SelectType.Triangle,TriangleModifyAction],[SelectType.Diamond,DiamondModifyAction],[SelectType.Start,StartModifyAction]])},[]),C=useMemo(function(){return{fillStyle:"transparent",strokeStyle:"#fff",lineWidth:1,lineCap:"round",lineJoin:"round",lineDash:[],lineDashOffset:-1,globalAlpha:1}},[]),T={fillStyle:"#fff"},D=useMemo(function(){return{gutter:20,wrapClassName:"".concat(selectorPrefix,"-inner")}},[]),E=useMemo(function(){return{fit:!0}},[]),k=useMemo(function(){return{autoFixed:!0}},[]),P=useMemo(function(){var e,n,t=function(e){return e===s?"primary":"default"},l=function(l,r){return function(){var e,n,t;(e=l)!==s&&(b(),null!=(t=null==(n=null==w?void 0:w.current)?void 0:n.clearCanvasAll)&&t.call(n),A.current=null,d(e)),(e!==s?Promise.resolve():Promise.reject()).then(function(){var e,n;S.current=new r,S.current&&(S.current.setAnchorStyle(__assign({},T)),S.current.setMoveGemStyle(__assign({},T)),null!=(e=null==(n=null==S?void 0:S.current)?void 0:n.on)&&e.call(n,ActionEvents.DrawBeforeStart,function(e){x(e)}),null!=(n=null==(e=null==S?void 0:S.current)?void 0:e.on)&&n.call(e,ActionEvents.DrawStart,function(e){x(e)}),null!=(e=null==(n=null==S?void 0:S.current)?void 0:n.on)&&e.call(n,ActionEvents.Drawing,function(e){x(e)}),null!=(n=null==(e=null==S?void 0:S.current)?void 0:e.on)&&n.call(e,ActionEvents.DrawEnd,function(e){x(e)}),null!=(e=null==(n=null==w?void 0:w.current)?void 0:n.changeAction)&&e.call(n,S.current),null!=(n=null==(e=null==S?void 0:S.current)?void 0:e.start))&&n.call(e,C)})}},r=[{key:"open",value:(null==(r=null==(e=null==u?void 0:u.open)?void 0:e.render)?void 0:r.call(e,function(){var e;null!=(e=h.current)&&e.click()}))||React.createElement(_Button,{key:"open",block:!0,size:"large",type:"primary",onClick:function(){var e;null!=(e=h.current)&&e.click()}},Intl.v("打开"))},f?[{key:"rectangle",value:(!u||!("rectangle"in u)||!("hide"in u.rectangle)||!(null!=(n=null==u?void 0:u.rectangle)&&n.hide))&&((null==(o=null==(n=null==u?void 0:u.rectangle)?void 0:n.render)?void 0:o.call(n,l(SelectType.Rectangle,RectangleDrawAction)))||React.createElement(_Button,{key:"rectangle",block:!0,size:"large",type:t(SelectType.Rectangle),onClick:l(SelectType.Rectangle,RectangleDrawAction)},Intl.v("矩形剪裁")))},{key:"circle",value:(!u||!("circle"in u)||!("hide"in u.circle)||!(null!=(o=null==u?void 0:u.circle)&&o.hide))&&((null==(o=null==(n=null==u?void 0:u.circle)?void 0:n.render)?void 0:o.call(n,l(SelectType.Circle,CircleDrawAction)))||React.createElement(_Button,{key:"circle",block:!0,size:"large",type:t(SelectType.Circle),onClick:l(SelectType.Circle,CircleDrawAction)},Intl.v("圆形剪裁")))},{key:"start",value:(!u||!("start"in u)||!("hide"in u.start)||!(null!=(o=null==u?void 0:u.start)&&o.hide))&&((null==(o=null==(n=null==u?void 0:u.start)?void 0:n.render)?void 0:o.call(n,l(SelectType.Start,StartDrawAction)))||React.createElement(_Button,{key:"start",block:!0,size:"large",type:t(SelectType.Start),onClick:l(SelectType.Start,StartDrawAction)},Intl.v("五角星剪裁")))},{key:"triangle",value:(!u||!("triangle"in u)||!("hide"in u.triangle)||!(null!=(o=null==u?void 0:u.triangle)&&o.hide))&&((null==(o=null==(n=null==u?void 0:u.triangle)?void 0:n.render)?void 0:o.call(n,l(SelectType.Triangle,TriangleDrawAction)))||React.createElement(_Button,{key:"triangle",block:!0,size:"large",type:t(SelectType.Triangle),onClick:l(SelectType.Triangle,TriangleDrawAction)},Intl.v("三角形剪裁")))},{key:"diamond",value:(!u||!("diamond"in u)||!("hide"in u.diamond)||!(null!=(o=null==u?void 0:u.diamond)&&o.hide))&&((null==(o=null==(n=null==u?void 0:u.diamond)?void 0:n.render)?void 0:o.call(n,l(SelectType.Diamond,DiamondDrawAction)))||React.createElement(_Button,{key:"diamond",block:!0,size:"large",type:t(SelectType.Diamond),onClick:l(SelectType.Diamond,DiamondDrawAction)},Intl.v("菱形剪裁")))},{key:"polygon",value:(!u||!("polygon"in u)||!("hide"in u.polygon)||!(null!=(o=null==u?void 0:u.polygon)&&o.hide))&&((null==(o=null==(n=null==u?void 0:u.polygon)?void 0:n.render)?void 0:o.call(n,l(SelectType.Polygon,PolygonDrawAction)))||React.createElement(_Button,{key:"polygon",block:!0,size:"large",type:t(SelectType.Polygon),onClick:l(SelectType.Polygon,PolygonDrawAction)},Intl.v("多边形剪裁")))}].filter(function(e){return!!e.value}):[{key:"",value:null}]].flat().filter(function(e){return!!e.value}),r=sort(r.map(function(e){var n;return"sort"in(null!=(n=null==u?void 0:u[e.key])?n:{})?__assign(__assign({},e),{sort:null==u?void 0:u[e.key].sort}):e})).map(function(e){return e.value}),o=["left","right"].includes(null!=(e=null==u?void 0:u.direction)?e:"left")?"vertical":"horizontal";return React.createElement(_Card,null,React.createElement(_Space,{direction:o,size:20},React.createElement("input",{type:"file",ref:h,accept:"image/*",style:{display:"none"}}),r))},[s,o,f,u]),M=useMemo(function(){return React.createElement(_Card,null,React.createElement("div",{className:"".concat(selectorPrefix,"-background"),style:{minHeight:c||200}},f&&React.createElement("div",{className:"".concat(selectorPrefix,"-background-inner")},React.createElement("img",{ref:y,src:f,alt:""}),React.createElement("div",{className:"".concat(selectorPrefix,"-background-mask")}))),React.createElement("div",{className:"".concat(selectorPrefix,"-geometry"),ref:_}),React.createElement("div",{className:"".concat(selectorPrefix,"-clip"),ref:v}))},[f,i]),L=useCallback(function(){var e=new Image;return e.src=f,e},[f]),x=(useUpdateLayoutEffect(function(){d(null),y.current&&(y.current.onload=function(){w.current&&(A.current=null,B(),H()),I(),N()})},[f]),useLayoutEffect(function(){function n(e){var e=e.target.files[0],n=new FileReader;n.onload=function(e){g(null==(e=e.target)?void 0:e.result)},n.readAsDataURL(e)}var e;return null!=(e=h.current)&&e.addEventListener("change",n),function(){var e;null!=(e=h.current)&&e.removeEventListener("change",n)}},[]),useImperativeHandle(n,function(){return{save:function(){return A.current&&A.current.data&&f?getClipDataUrl({data:A.current,clipCtx:p.current}):""}}}),function(e){var n,t;e.data&&(A.current=e,null!=(n=null==(t=p.current)?void 0:t.restore)&&n.call(t),null!=(t=null==(n=p.current)?void 0:n.save)&&t.call(n),null!=(t=p.current)&&t.clearRect(0,0,null==(n=m.current)?void 0:n.width,null==(t=m.current)?void 0:t.height),null!=(n=new Map([[SelectType.Circle,drawCircle],[SelectType.Rectangle,drawRectangle],[SelectType.Diamond,drawDiamond],[SelectType.Start,drawStart],[SelectType.Triangle,drawTriangle],[SelectType.Polygon,drawPolygon]]).get(e.selectType))&&n(p.current,e.data),null!=(t=null==p?void 0:p.current)&&t.clip(),null!=(n=null==p?void 0:p.current))&&n.drawImage(L(),0,0,null==(e=m.current)?void 0:e.width,null==(t=m.current)?void 0:t.height)}),b=function(){var e,n;null!=(n=p.current)&&n.restore(),null!=(e=null==(n=p.current)?void 0:n.clearRect)&&e.call(n,0,0,null==(e=m.current)?void 0:e.width,null==(n=m.current)?void 0:n.height)},B=function(){v.current&&(v.current.innerHTML="")},I=function(){var e,n;m.current=document.createElement("canvas"),m.current.width=null==(n=y.current)?void 0:n.offsetWidth,m.current.height=null==(n=y.current)?void 0:n.offsetHeight,p.current=null==(e=null==(n=m.current)?void 0:n.getContext)?void 0:e.call(n,"2d"),null!=(n=null==(e=v.current)?void 0:e.appendChild)&&n.call(e,m.current)},H=function(){var e,n;null!=(n=null==(e=null==w?void 0:w.current)?void 0:e.destroy)&&n.call(e)},N=function(){var e;_.current&&(_.current.style.width="".concat(null==(e=null==y?void 0:y.current)?void 0:e.offsetWidth,"px"),_.current.style.height="".concat(null==(e=null==y?void 0:y.current)?void 0:e.offsetHeight,"px"),w.current=new PolygonSelection.PolygonSelection(_.current),w.current.on(PolygonSelectionActions.CanvasClickGeometry,function(e){var n=new(R.get(e.type))({selectType:e.type,actionType:"Draw",data:e});n.setAnchorStyle(__assign({},T)),n.setMoveGemStyle(__assign({},T)),n.on(ActionEvents.ModifyBeforeStart,function(e){x(e)}),n.on(ActionEvents.ModifyStart,function(e){x(e)}),n.on(ActionEvents.Modifying,function(e){x(e)}),n.on(ActionEvents.ModifyEnd,function(e){x(e),n.start()}),n.on(ActionEvents.Moving,function(e){x(e)}),n.on(ActionEvents.MoveEnd,function(e){x(e)}),null!=(e=null==w?void 0:w.current)&&e.changeAction(n),n.start()}),w.current.on(PolygonSelectionActions.CanvasClickEmpty,function(){var e;null!=(e=null==w?void 0:w.current)&&e.clearDraw(),null!=(e=null==w?void 0:w.current)&&e.clearAssistDraw(),null!=(e=null==w?void 0:w.current)&&e.drawHistoryData()}))},e=null==(n=e.get((null==u?void 0:u.direction)||"left"))?void 0:n();return React.createElement("div",{ref:a,className:"".concat(classNames(selectorPrefix,null!=t?t:"")),style:null!=l?l:{}},e)},CroppingCoreHOC=memo(forwardRef(CroppingCore));export default CroppingCoreHOC;
//# sourceMappingURL=CroppingCore.js.map
