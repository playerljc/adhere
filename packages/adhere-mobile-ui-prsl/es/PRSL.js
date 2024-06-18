import _Radio from"antd-mobile/es/components/radio";import _PullToRefresh from"antd-mobile/es/components/pull-to-refresh";import _Button from"antd-mobile/es/components/button";import _ErrorBlock from"antd-mobile/es/components/error-block";import _DotLoading from"antd-mobile/es/components/dot-loading";import _Skeleton from"antd-mobile/es/components/skeleton";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,r,n){if(n||2===arguments.length)for(var t,o=0,a=r.length;o<a;o++)!t&&o in r||((t=t||Array.prototype.slice.call(r,0,o))[o]=r[o]);return e.concat(t||Array.prototype.slice.call(r))};import{useMount,useNetwork,useUpdate,useUpdateEffect}from"ahooks";import classNames from"classnames";import isPrimaryEmpty from"lodash.isempty";import React,{forwardRef,memo,useCallback,useImperativeHandle,useMemo,useRef,useState}from"react";import{useImmer}from"use-immer";import BackTopAnimation from"@baifendian/adhere-ui-backtopanimation";import ScrollLoad from"@baifendian/adhere-ui-scrollload";import Intl from"@baifendian/adhere-util-intl";import Context from"./Context";import{DNDManageButton,SortableContainer,useDND}from"./DND";import PRSLItem from"./PRSLItem";import SearchKeyWord from"./SearchKeyWord";import{SelectionCheckAllManage,SelectionManageButton,useSelection}from"./Selection";import ToolBar from"./Toolbar";var selectorPrefix="adhere-mobile-ui-prsl",DEFAULT_PAGING_SIZE=30,DEFAULT_PAGING_PAGE=1,DEFAULT_DISTANCE=50,DEFAULT_TOOLBAR_COLLAPSE_COUNT=3,DEFAULT_SEARCH_KEY_WORD_HISTORY_STORE_TYPE="session",DEFAULT_ROW_KEY="id",DEFAULT_MODE="normal",DEFAULT_SEARCH_KEY_WORD_MODE="normal",DEFAULT_IS_USE_DND=!1,DEFAULT_IS_USE_SELECTION=!1,DEFAULT_ACTION_TRIGGER_MODE="ActionSheet",InternalPRSL=memo(forwardRef(function(e,w){var r=e.className,r=void 0===r?"":r,V=e.style,n=e.innerClassName,B=void 0===n?"":n,W=e.innerStyle,n=e.isLoading,n=void 0===n||n,O=e.isUseFirstLoading,O=void 0===O||O,x=e.firstLoading,k=e.pullToRefreshProps,G=e.onRefreshBefore,t=e.paging,H=e.onRefresh,z=e.rowKey,o=e.showKeyWordSearchBar,Y=void 0===o||o,j=e.searchKeyWordBarProps,o=e.searchKeyWordWrapperClassName,Z=void 0===o?"":o,q=e.searchKeyWordWrapperStyle,J=e.searchKeyWordMode,Q=e.searchKeyWordHistoryMaxSize,X=e.isSearchKeyWordHistoryIntoStore,$=e.searchKeyWordHistoryStoreType,a=e.defaultSearchKeyWord,o=e.showToolBar,ee=void 0===o||o,o=e.showTotal,re=e.renderToolBar,ne=e.afterToolBarRender,te=e.beforeToolBarRender,oe=e.beforeToolBarRenderClassName,oe=void 0===oe?"":oe,ae=e.beforeToolBarRenderStyle,le=e.afterToolBarRenderClassName,le=void 0===le?"":le,ie=e.afterToolBarRenderStyle,l=e.toolbarWrapperClassName,l=void 0===l?"":l,se=e.toolbarWrapperStyle,ce=e.toolbarCollapseCount,ce=void 0===ce?DEFAULT_TOOLBAR_COLLAPSE_COUNT:ce,ue=e.toolbarConfig,i=e.scrollLoadProps,de=e.onLoadMore,fe=e.loadMoreLoading,s=e.isUseBackTopAnimation,me=void 0===s||s,ge=e.backTopAnimationProps,Se=e.scrollLoadBeforeRender,_e=e.scrollLoadAfterRender,pe=e.scrollLoadInnerBeforeRender,Re=e.scrollLoadInnerAfterRender,ve=e.scrollLoadInnerBeforeRenderClassName,ye=e.scrollLoadInnerBeforeRenderStyle,Ee=e.scrollLoadInnerAfterRenderClassName,he=e.scrollLoadInnerAfterRenderStyle,s=e.scrollLoadBeforeRenderClassName,Te=void 0===s?"":s,Le=e.scrollLoadBeforeRenderStyle,s=e.scrollLoadAfterRenderClassName,Ae=void 0===s?"":s,Ne=e.scrollLoadAfterRenderStyle,Me=e.beforeRender,Pe=e.afterRender,s=e.beforeRenderClassName,De=void 0===s?"":s,Ce=e.beforeRenderStyle,s=e.afterRenderClassName,be=void 0===s?"":s,Ue=e.afterRenderStyle,s=e.isShowFilterTrigger,Ke=e.renderFilterTrigger,Ie=e.isShowSortTrigger,Fe=e.renderSortTrigger,we=e.isShowViewSettingTrigger,Ve=e.renderViewSettingTrigger,Be=e.viewSettingTriggerMode,We=e.viewSettingTriggerProps,Oe=e.renderViewSetting,xe=e.viewSettingConfig,ke=e.defaultViewSettingValue,Ge=e.onViewSetting,He=e.onViewSettingReset,ze=e.loadData,Ye=e.renderEmpty,je=e.renderOffLine,Ze=e.filterTriggerMode,qe=e.filterTriggerProps,Je=e.renderFilter,Qe=e.filterFormProps,Xe=e.filterConfig,c=e.defaultFilterValues,$e=e.sortTriggerMode,er=e.sortTriggerProps,rr=e.renderSort,nr=e.sortConfig,u=e.defaultSortValues,tr=e.isUseLocal,or=e.selectionLabel,ar=e.selectionFinishLabel,lr=e.selectionCancelLabel,ir=e.isUseSelection,d=e.selectedRowKeys,sr=e.selectionMultiple,cr=e.onSelectChange,ur=e.isUseDND,dr=e.dndDragHandle,fr=e.dndLabel,mr=e.dndFinishLabel,gr=e.dndCancelLabel,Sr=e.onDNDChange,_r=e.actionTriggerMode,pr=e.renderActionSheetTrigger,Rr=e.onAction,vr=e.headerExtra,yr=e.children,e=useRef(!0),f=useRef(!1),Er=useRef(void 0),m=useRef(null),hr=useRef(ScrollLoad.NORMAL),g=useRef(),S=useRef({page:void 0!==t&&"object"==typeof t&&null!=(_=t.page)?_:DEFAULT_PAGING_PAGE,pageSize:void 0!==t&&"object"==typeof t&&null!=(_=t.defaultPageSize)?_:DEFAULT_PAGING_SIZE}),_=useState({data:[],total:0}),p=_[0],R=_[1],_=useState(DEFAULT_MODE),v=_[0],Tr=_[1],_=useNetwork(),Lr=useUpdate(),y=useMemo(function(){return"normal"===v},[v]),Ar=useMemo(function(){return null!=_r?_r:DEFAULT_ACTION_TRIGGER_MODE},[_r]),Nr=useMemo(function(){return null!=ur?ur:DEFAULT_IS_USE_DND},[ur]),Mr=useMemo(function(){return null!=ir?ir:DEFAULT_IS_USE_SELECTION},[ir]),E=useMemo(function(){return null!=z?z:DEFAULT_ROW_KEY},[z]),d=useSelection({selectedRowKeys:d,selectionMultiple:sr,mode:v,dataSource:p.data,rowKey:E}),Pr=d.optionSelectedRowKeys,h=d.isUseSelectionMode,T=d.isSelectionMultiple,Dr=d.finish,Cr=d.cancel,sr=d.selectionChange,d=d.selectionAllChange,L=useDND({mode:v,dataSource:p.data,total:p.total,rowKey:E,reset:function(){R(__assign({},p))}}),A=L.optionDataSource,N=L.isUseDNDMode,br=L.finish,Ur=L.cancel,Kr=L.move,L=useImmer({searchKeyWord:null!=a?a:"",filterValues:null!=c?c:{},sortValues:null!=u?u:[]}),M=L[0],P=L[1],D=useMemo(function(){return"boolean"!=typeof t||t},[t]),C=useMemo(function(){return"boolean"==typeof tr&&tr},[tr]),b=useMemo(function(){var e,r=M.searchKeyWord,n=void 0===r?"":r,r=M.filterValues,t=void 0===r?{}:r,r=M.sortValues,r=void 0===r?[]:r,o=null!=(o=p.data)?o:[];return N&&(o=A.data),(null!=r?r:[]).length&&(o=r.reduce(function(e,r){var n=r.order,t=r.name;return e=e.sort(function(e,r){return"asc"===n?e[t]>r[t]?1:e[t]<r[t]?-1:0:e[t]<r[t]?1:e[t]>r[t]?-1:0}),__spreadArray([],e,!0)},null!=(e=p.data)?e:[])),o=!n&&isPrimaryEmpty(t)&&!r.length?o:o.filter(function(r){return n?Object.keys(r).some(function(e){return-1!==r[e].indexOf(n)}):!!isPrimaryEmpty(t)||Object.keys(t).filter(function(e){return!!t[e]}).every(function(e){return-1!==r[e].indexOf(t[e])})})},[M,p,N,A]),U=useMemo(function(){var e,r;return C?(r=b,D&&(e=(S.current.page-1)*S.current.pageSize,r=b.slice(e,S.current.page*S.current.pageSize),1!==S.current.page)&&(r=__spreadArray(__spreadArray([],b.slice(0,e),!0),r,!0)),{total:b.length,data:r}):N?A:p},[p,b,A,N,C,D,S.current.page,S.current.pageSize]),K=useMemo(function(){return null==yr?void 0:yr({dataSource:U.data})},[yr,U.data]),Ir=React.createElement(ToolBar,{className:l,style:se,showTotal:o,renderToolBar:re,afterToolBarRender:ne,beforeToolBarRender:te,beforeToolBarRenderClassName:oe,beforeToolBarRenderStyle:ae,afterToolBarRenderClassName:le,afterToolBarRenderStyle:ie,isShowFilterTrigger:s,renderFilterTrigger:Ke,isShowSortTrigger:Ie,renderSortTrigger:Fe,isShowViewSettingTrigger:we,renderViewSettingTrigger:Ve,viewSettingTriggerMode:Be,viewSettingTriggerProps:We,renderViewSetting:Oe,viewSettingConfig:xe,defaultViewSettingValue:ke,onViewSetting:Ge,onViewSettingReset:He,toolbarCollapseCount:ce,toolbarConfig:ue,total:null!=(L=null==U?void 0:U.total)?L:0,filterTriggerMode:Ze,filterTriggerProps:qe,renderFilter:Je,filterFormProps:Qe,filterConfig:Xe,defaultFilterValues:M.filterValues,onFilter:function(r){if(F(),P(function(e){e.filterValues=r}),C)return Promise.resolve();return I(__assign(__assign({},M),{filterValues:r}))},onFilterReset:function(){if(F(),P(function(e){e.filterValues={}}),C)return Promise.resolve();return I(__assign(__assign({},M),{filterValues:{}}))},sortTriggerMode:$e,sortTriggerProps:er,renderSort:rr,sortConfig:nr,defaultSortValues:M.sortValues,disabled:!y,onSort:function(r){if(F(),P(function(e){e.sortValues=r}),C)return Promise.resolve();return I(__assign(__assign({},M),{sortValues:r}))},onSortReset:function(){if(F(),P(function(e){e.sortValues=[]}),C)return Promise.resolve();return I(__assign(__assign({},M),{sortValues:[]}))}}),Fr=useMemo(function(){var e;return Math.floor((null!=(e=null==U?void 0:U.total)?e:0)/S.current.pageSize)||1},[U.total]),wr=useMemo(function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-first-loading")},React.createElement(_Skeleton.Title,{animated:!0}),React.createElement(_Skeleton.Paragraph,{lineCount:25,animated:!0}))},[]),Vr=useMemo(function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-load-more-loading")},React.createElement("div",{className:"".concat(selectorPrefix,"-load-more-loading-dot")},React.createElement(_DotLoading,{color:"primary"})),React.createElement("div",null,"".concat(Intl.v("数据加载中")),"..."))},[]),l=useMemo(function(){var e;return null!=(e=null==je?void 0:je())?e:React.createElement(_ErrorBlock,{status:"disconnected"},React.createElement(_Button,{color:"primary",onClick:function(){Lr()}},Intl.v("点击重试")))},[je]),Br=useMemo(function(){var e;return React.createElement(SearchKeyWord,{className:null!=Z?Z:"",style:null!=q?q:{},searchKeyWordBarProps:j,searchKeyWordMode:null!=J?J:DEFAULT_SEARCH_KEY_WORD_MODE,searchKeyWordHistoryMaxSize:null!=Q?Q:DEFAULT_DISTANCE,isSearchKeyWordHistoryIntoStore:null==X||X,searchKeyWordHistoryStoreType:null!=$?$:DEFAULT_SEARCH_KEY_WORD_HISTORY_STORE_TYPE,disabled:!y,defaultSearchKeyWord:null!=(e=M.searchKeyWord)?e:"",onSearch:rn,onSearchClear:nn})},[Z,q,j,J,Q,M.searchKeyWord,y]),Wr=useMemo(function(){var e=null==Me?void 0:Me();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner-before"),null!=De?De:""),style:null!=Ce?Ce:{}},e)},[Me,De,Ce]),Or=useMemo(function(){var e=null==Pe?void 0:Pe();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner-after"),null!=be?be:""),style:null!=Ue?Ue:{}},e)},[Pe,be,Ue]),xr=useMemo(function(){var e=null==Se?void 0:Se();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-scroll-before"),null!=Te?Te:""),style:null!=Le?Le:{}},e)},[Se,Te,Le]),kr=useMemo(function(){var e=null==_e?void 0:_e();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-scroll-after"),null!=Ae?Ae:""),style:null!=Ne?Ne:{}},e)},[_e,Ae,Ne]),Gr=useMemo(function(){var e=null==pe?void 0:pe();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-scroll-inner-before"),null!=ve?ve:""),style:null!=ye?ye:{}},e)},[pe,ve,ye]),Hr=useMemo(function(){var e=null==Re?void 0:Re();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-scroll-inner-after"),null!=Ee?Ee:""),style:null!=he?he:{}},e)},[Re,Ee,he]),zr=useCallback(function(){return!U.data.length},[U.data]),se=useCallback(function(){var e;return null!=(e=null==x?void 0:x())?e:wr},[x]),Yr=useCallback(function(){var e;return null!=(e=null==fe?void 0:fe())?e:Vr},[fe]),jr=useMemo(function(){var e;return React.createElement(ScrollLoad,__assign({ref:g,renderLoading:Yr,distance:(null==i?void 0:i.distance)||50,onScrollBottom:sn},i||{},{disabled:Fr<=1||!y,className:classNames("".concat(selectorPrefix,"-scroll-load"),null!=(e=null==i?void 0:i.className)?e:"")}),Gr,function(){if(h&&!T)return function(e){return!h||T?e:React.createElement(_Radio.Group,null,e)}(K);if(N)return React.createElement(SortableContainer,{onSortEnd:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];Kr.apply(void 0,e)},useDragHandle:!0},K);return K}(),Hr)},[Gr,Hr,N,h,T,y,U.data,Yr,i,K,Fr]),Zr=useMemo(function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-scroll"),ref:Er},Gr,K,Hr)},[K]),qr=useMemo(function(){return React.createElement(BackTopAnimation,__assign({},null!=ge?ge:{},{getContainer:tn,onTrigger:function(){return Promise.resolve()}}))},[ge]),Jr=useMemo(function(){return Nr&&React.createElement(DNDManageButton,{dndLabel:fr,dndFinishLabel:mr,dndCancelLabel:gr,isUseDNDMode:N,isUseNormalMode:y,onChange:function(e){e?Tr("dnd"):$r()},onFinish:function(){R(A);var e=br();null!=Sr&&Sr(e)},onCancel:Ur})},[Nr,N,y,A,fr,mr,gr]),Qr=useMemo(function(){return Mr&&React.createElement(SelectionManageButton,{selectionLabel:or,selectionFinishLabel:ar,selectionCancelLabel:lr,isUseSelectionMode:h,isUseNormalMode:y,onChange:function(e){e?Tr("selection"):$r()},onFinish:function(){var e=Dr(),r=e.selectedRows,n=e.selectedRowKeys,t=e.changeRowKeys,e=e.info;null!=cr&&cr(n,r,t,e)},onCancel:Cr})},[Mr,or,ar,lr,h,y]),Xr=useMemo(function(){var e;return React.createElement(_PullToRefresh,__assign({},null!=k?k:{},{onRefresh:ln,disabled:!y}),xr,zr()&&(null!=(e=null==Ye?void 0:Ye())?e:React.createElement(_ErrorBlock,{status:"empty"})),!zr()&&D&&jr,!zr()&&!D&&Zr,kr,me&&qr)},[t,k,xr,kr,jr,Zr,me,qr,y,Ye,D]),o=useCallback(function(){var e=[Jr,Qr].filter(function(e){return!!e}),r=null!=(r=null==vr?void 0:vr(e,v))?r:e,e=!1;return r&&Array.isArray(r)&&r.length&&(e=!0),React.createElement(React.Fragment,null,React.createElement("div",{className:"".concat(selectorPrefix,"-header")},React.createElement("div",{className:"".concat(selectorPrefix,"-header-main")},Y&&Br),e?React.createElement("div",{className:"".concat(selectorPrefix,"-header-extra")},r):null),ee&&Ir,React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner"),null!=B?B:""),style:null!=W?W:{}},Wr,Xr,Or),h&&T&&React.createElement(SelectionCheckAllManage,null))},[Y,Br,ee,Ir,B,W,Wr,Xr,Or,h,T,Jr,Qr,vr,v]);function $r(){Tr("normal")}function I(e){return ze?ze(__assign(__assign({},S.current),e)).then(function(e){return R(e),e}):Promise.resolve()}function F(){var e,r,n=null===tn?void 0:tn();n&&(n.scrollTop=0),null!=(e=null==(n=null==g?void 0:g.current)?void 0:n.hideAll)&&e.call(n),m.current=null,hr.current=ScrollLoad.NORMAL,S.current.page=void 0!==t&&"object"==typeof t&&null!=(r=t.page)?r:DEFAULT_PAGING_PAGE,S.current.pageSize=void 0!==t&&"object"==typeof t&&null!=(r=t.defaultPageSize)?r:DEFAULT_PAGING_SIZE}function en(){F(),P(function(e){e.searchKeyWord=a,e.filterValues=c,e.sortValues=u})}function rn(r){F(),P(function(e){e.searchKeyWord=r}),C||I(__assign(__assign({},M),{searchKeyWord:r}))}function nn(){F(),P(function(e){e.searchKeyWord=""}),C||I(__assign(__assign({},M),{searchKeyWord:""}))}function tn(){var e;return null!=(e=null!=(e=null==(e=g.current)?void 0:e.getScrollContainer())?e:Er.current)?e:document.body}function on(e){var r={searchKeyWord:a,filterValues:c,sortValues:u};return(G?G(__assign(__assign({},S.current),r)):Promise.resolve()).then(function(){if(e(),!C)return null==H?void 0:H(__assign(__assign({},S.current),r)).then(function(e){R(e)});Lr()})}function an(){return on(en)}function ln(){return an()}function sn(e){if(m.current=e,!C)return null==de?void 0:de(__assign({page:S.current.page+1,pageSize:S.current.pageSize},M)).then(function(r){S.current.page+=1,R(function(e){return e.total=r.total,e.data=__spreadArray(__spreadArray([],e.data,!0),r.data,!0),__assign({},e)})});S.current.page+=1,Lr()}return useMount(function(){I({searchKeyWord:a,filterValues:c,sortValues:u})}),useUpdateEffect(function(){m.current&&(hr.current=S.current.page<Fr?ScrollLoad.NORMAL:ScrollLoad.EMPTY,m.current(hr.current))},[U.data,Fr]),useUpdateEffect(function(){en(),I({searchKeyWord:a,filterValues:c,sortValues:u})},[a,u,c,C]),useImperativeHandle(w,function(){return{getScrollEl:tn,scrollLoadHideAll:function(){var e,r;return null==(r=null==(e=null==g?void 0:g.current)?void 0:e.hideAll)?void 0:r.call(e)},resetPagination:function(){return on(F)},resetAll:an,loadData:function(){return I({searchKeyWord:a,filterValues:c,sortValues:u})},resetPaginationAndLoadData:function(){return F(),I({searchKeyWord:a,filterValues:c,sortValues:u})}}}),React.createElement(Context.Provider,{value:{isUseSelectionMode:function(){return h},isUseDNDMode:function(){return N},isUseNormalMode:function(){return y},selectionChange:sr,selectionAllChange:d,getRowKey:function(){return E},getOptionSelectedRowKeys:function(){return null!=Pr?Pr:[]},getDatasourceLength:function(){return p.data.length},getSelectionMultiple:function(){return T},getIndexByIdFormOptionDataSource:function(r){return A.data.findIndex(function(e){return e[E]===r})},getDndDragHandle:function(){return dr},getActionTriggerMode:function(){return Ar},getRenderActionSheetTrigger:function(){return null==pr?void 0:pr()},onAction:function(e,r){return null!=(e=null==Rr?void 0:Rr(e,r))?e:[]}}},React.createElement("div",{className:classNames(selectorPrefix,null!=r?r:""),style:null!=V?V:{}},_.online&&(O&&(e.current&&!f.current&&n&&(f.current=!0),e.current&&f.current&&!n&&(e.current=!1,f.current=!1),e.current)?se:o)(),!_.online&&l))})),PRSL=InternalPRSL;PRSL.displayName="PRSL",PRSL.Item=PRSLItem;export default PRSL;
//# sourceMappingURL=PRSL.js.map
