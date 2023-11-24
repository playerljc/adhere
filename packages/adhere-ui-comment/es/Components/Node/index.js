var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,o=0,l=t.length;o<l;o++)!a&&o in t||((a=a||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))};import classNames from"classnames";import React,{memo,useCallback,useEffect,useRef,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import Util from"@baifendian/adhere-util";import Intl from"@baifendian/adhere-util-intl";import ReplyInfo from"../../Reply/Info";import ReplySubmit from"../../Reply/Submit";var selectorPrefix="adhere-ui-comment-node",Node=memo(function(n){var e,t=n.isReply,t=void 0!==t&&t,a=n.dataKeys,o=void 0===a?{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}:a,a=n.limit,l=void 0===a?10:a,r=n.keyProp,i=n.children,c=n.isMoreProp,u=n.renderAuthor,s=n.renderAvatar,d=n.renderContent,f=n.renderDateTime,m=n.renderLoading,R=n.showReplyText,p=n.hideReplyText,h=n.loadMoreReplyText,y=n.showReplyTextIcon,v=n.loadMoreCollapseTextIcon,x=n.hideReplyTextIcon,E=n.fetchReply,_=n.emojiPickerProps,a=n.local,C=void 0===a?"zh":a,a=useState(((a={})[o.current]=1,a[o.list]=[],a[o.totalCount]=0,a[o.totalPage]=0,a)),g=a[0],P=a[1],a=useState(null==n?void 0:n.data),F=a[0],N=a[1],a=useState(!1),k=a[0],A=a[1],a=useState(!1),b=a[0],M=a[1],a=useState(!1),T=a[0],w=a[1],I=useRef({page:1,limit:l}),a=useCallback(function(){var e=__spreadArray([],((null==(e=null==n?void 0:n.renderActions)?void 0:e.call(n,__assign({},F),function(e){return N(e)}))||[]).map(function(e,t){var n;return ConditionalRender.conditionalRender({conditional:!(null!=(n=null==(n=null==e?void 0:e.props)?void 0:n.className)&&n.endsWith("-actions-action")),noMatch:e,match:React.createElement("li",{key:t,className:"".concat(selectorPrefix,"-actions-action")},e)})}),!0);return e.find(function(e){return"reply"===(null==(e=null==(e=null==e?void 0:e.props)?void 0:e.children)?void 0:e.key)})||e.push(React.createElement("li",{key:"reply",className:classNames("".concat(selectorPrefix,"-actions-action"),"".concat(selectorPrefix,"-actions-action-reply-btn")),onClick:function(){return w(!0)}},Intl.v("回复"))),e},[null==n?void 0:n.renderActions,F,T]),U=useCallback(function(){var e,t;return React.createElement("ul",{className:"".concat(selectorPrefix,"-children")},null==(t=null===(e=g[o.list]||[])?void 0:e.map)?void 0:t.call(e,function(e){return React.createElement("li",{className:"".concat(selectorPrefix,"-children-item"),key:e[r]},React.createElement(ConditionalRender,{conditional:!i,noMatch:function(){return null==i?void 0:i(e)}},function(){return React.createElement(ReplyInfo,{isReply:!0,data:e,dataKeys:o,limit:l,keyProp:r,isMoreProp:c,fetchData:null==n?void 0:n.fetchData,fetchReply:null==n?void 0:n.fetchReply,renderActions:null==n?void 0:n.renderActions,renderAuthor:u,renderAvatar:s,renderContent:d,renderDateTime:f,renderLoading:m,showReplyText:R,hideReplyText:p,loadMoreReplyText:h,showReplyTextIcon:y,hideReplyTextIcon:x,loadMoreCollapseTextIcon:v,local:C,emojiPickerProps:_})}))}),React.createElement(ConditionalRender,{conditional:!b&&j()},function(){return React.createElement("li",{className:classNames("".concat(selectorPrefix,"-children-item"),"more")},React.createElement("a",{onClick:O},React.createElement("span",null,React.createElement(ConditionalRender,{conditional:Util.isFunction(v),noMatch:function(){return v}},function(){return v instanceof Function?v():v})),React.createElement("span",null,React.createElement(ConditionalRender,{conditional:Util.isFunction(h),noMatch:function(){return h}},function(){return h instanceof Function?h():h}))))}))},[g,o.list,r,c,a,u,s,d,f,m,R,p,h,y,x,v,b]),D=useCallback(function(){return React.createElement(ConditionalRender,{conditional:!k,noMatch:function(){return React.createElement("a",{className:"".concat(selectorPrefix,"-collapse"),onClick:function(){return A(!1)}},React.createElement("span",null,React.createElement(ConditionalRender,{conditional:Util.isFunction(x),noMatch:function(){return x}},function(){return x instanceof Function?x():x})),React.createElement("span",null,React.createElement(ConditionalRender,{conditional:Util.isFunction(p),noMatch:function(){return p}},function(){return p instanceof Function?p():p})))}},function(){return React.createElement("a",{className:"".concat(selectorPrefix,"-collapse"),onClick:function(){var e;g[o.list].length?A(!0):null!=(e=S())&&e.then(function(){return A(!0)})}},React.createElement("span",null,React.createElement(ConditionalRender,{conditional:Util.isFunction(y),noMatch:function(){return y}},function(){return y instanceof Function?y():y})),React.createElement("span",null,React.createElement(ConditionalRender,{conditional:Util.isFunction(R),noMatch:function(){return R}},function(){return R instanceof Function?R():R})))})},[k,g,o.list,p,x,R,y]),j=useCallback(function(){return g[o.list].length<=g[o.totalCount]},[g,o.list,o.totalCount]),L=useCallback(function(){var e;return null==(e=null==(e=null==(e=null==n?void 0:n.fetchData)?void 0:e.call(n,__assign(__assign({},I.current),{record:__assign({},F)})))?void 0:e.then(function(e){return M(!1),e}))?void 0:e.catch(function(e){return M(!1),e})},[null==n?void 0:n.fetchData,I.current.page,I.current.limit,F]);function S(){var e;return M(!0),I.current={page:1,limit:l},null==(e=L())?void 0:e.then(function(e){P(e)})}function O(){M(!0),I.current.page=I.current.page+1;var e,a=o.list;return null==(e=L())?void 0:e.then(function(n){P(function(e){var t;return __assign(__assign({},n),((t={})[o.list]=__spreadArray(__spreadArray([],e[a],!0),n[a],!0),t))})})}return useEffect(function(){N(n.data)},[null==n?void 0:n.data]),React.createElement(FlexLayout,{direction:"horizontal",className:classNames(selectorPrefix,((e={})["".concat(selectorPrefix,"-reply")]=t,e))},React.createElement(FlexLayout.Fixed,{className:"".concat(selectorPrefix,"-avatar-wrap")},null==s?void 0:s(__assign({},F))),React.createElement(FlexLayout.Auto,{autoFixed:!0,fit:!0},React.createElement(FlexLayout,{direction:"vertical"},React.createElement(FlexLayout.Fixed,{className:"".concat(selectorPrefix,"-title-row"),fit:!1},React.createElement("div",{className:"".concat(selectorPrefix,"-title-row-author")},null==u?void 0:u(__assign({},F))),React.createElement("div",{className:"".concat(selectorPrefix,"-title-row-date-time")},null==f?void 0:f(__assign({},F)))),React.createElement(FlexLayout.Auto,{className:"".concat(selectorPrefix,"-content-wrap")},null==d?void 0:d(__assign({},F))),React.createElement(FlexLayout.Fixed,null,React.createElement("ul",{className:"".concat(selectorPrefix,"-actions")},a())),React.createElement(ConditionalRender,{conditional:T},function(){return React.createElement(FlexLayout.Fixed,{style:{marginTop:15}},React.createElement(ReplySubmit,{onCancel:function(){return w(!1)},onResult:function(e){null!=(e=null==E?void 0:E({id:null==F?void 0:F[r],record:__assign({},F),reply:e}))&&e.then(function(){w(!1),S()})},local:C,emojiPickerProps:_}))}),React.createElement(ConditionalRender,{conditional:null==F?void 0:F[c]},function(){return React.createElement(React.Fragment,null,React.createElement(ConditionalRender,{conditional:!b},function(){return D()}),React.createElement(ConditionalRender.Show,{conditional:k},U()),React.createElement(ConditionalRender,{conditional:b},function(){return null==m?void 0:m()}))}))))});Node.displayName="Node";export default Node;
//# sourceMappingURL=index.js.map
