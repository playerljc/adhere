import _Radio from"antd-mobile/es/components/radio";import _PullToRefresh from"antd-mobile/es/components/pull-to-refresh";import _Button from"antd-mobile/es/components/button";import _ErrorBlock from"antd-mobile/es/components/error-block";import _DotLoading from"antd-mobile/es/components/dot-loading";import _Skeleton from"antd-mobile/es/components/skeleton";import _typeof from"@babel/runtime/helpers/typeof";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,r,n){if(n||2===arguments.length)for(var t,o=0,l=r.length;o<l;o++)!t&&o in r||((t=t||Array.prototype.slice.call(r,0,o))[o]=r[o]);return e.concat(t||Array.prototype.slice.call(r))};import{useMount,useNetwork,useUpdate,useUpdateEffect}from"ahooks";import classNames from"classnames";import isPrimaryEmpty from"lodash.isempty";import React,{forwardRef,memo,useCallback,useImperativeHandle,useMemo,useRef,useState}from"react";import{useImmer}from"use-immer";import BackTopAnimation from"@baifendian/adhere-ui-backtopanimation";import ScrollLoad from"@baifendian/adhere-ui-scrollload";import Intl from"@baifendian/adhere-util-intl";import Context from"./Context";import{DNDManageButton,SortableContainer,useDND}from"./DND";import PRSLItem from"./PRSLItem";import SearchKeyWord from"./SearchKeyWord";import{SelectionCheckAllManage,SelectionManageButton,useSelection}from"./Selection";import ToolBar from"./Toolbar";var selectorPrefix="adhere-mobile-ui-prsl",DEFAULT_PAGING_SIZE=30,DEFAULT_PAGING_PAGE=1,DEFAULT_DISTANCE=50,DEFAULT_TOOLBAR_COLLAPSE_COUNT=3,DEFAULT_SEARCH_KEY_WORD_HISTORY_STORE_TYPE="session",DEFAULT_ROW_KEY="id",DEFAULT_MODE="normal",DEFAULT_SEARCH_KEY_WORD_MODE="normal",DEFAULT_IS_USE_DND=!1,DEFAULT_IS_USE_SELECTION=!1,DEFAULT_ACTION_TRIGGER_MODE="ActionSheet",InternalPRSL=memo(forwardRef(function(e,w){var r=e.className,r=void 0===r?"":r,B=e.style,n=e.innerClassName,O=void 0===n?"":n,V=e.innerStyle,n=e.isLoading,n=void 0===n||n,W=e.isUseFirstLoading,W=void 0===W||W,x=e.firstLoading,k=e.pullToRefreshProps,G=e.onRefreshBefore,t=e.paging,H=e.onRefresh,z=e.rowKey,o=e.showKeyWordSearchBar,Y=void 0===o||o,j=e.searchKeyWordBarProps,o=e.searchKeyWordWrapperClassName,Z=void 0===o?"":o,q=e.searchKeyWordWrapperStyle,J=e.searchKeyWordMode,Q=e.searchKeyWordHistoryMaxSize,X=e.isSearchKeyWordHistoryIntoStore,$=e.searchKeyWordHistoryStoreType,l=e.defaultSearchKeyWord,o=e.showToolBar,ee=void 0===o||o,o=e.showTotal,re=e.renderToolBar,ne=e.afterToolBarRender,te=e.beforeToolBarRender,oe=e.beforeToolBarRenderClassName,oe=void 0===oe?"":oe,le=e.beforeToolBarRenderStyle,ae=e.afterToolBarRenderClassName,ae=void 0===ae?"":ae,ie=e.afterToolBarRenderStyle,a=e.toolbarWrapperClassName,a=void 0===a?"":a,se=e.toolbarWrapperStyle,ce=e.toolbarCollapseCount,ce=void 0===ce?DEFAULT_TOOLBAR_COLLAPSE_COUNT:ce,ue=e.toolbarConfig,i=e.scrollLoadProps,de=e.onLoadMore,fe=e.loadMoreLoading,s=e.isUseBackTopAnimation,me=void 0===s||s,ge=e.backTopAnimationProps,_e=e.scrollLoadBeforeRender,Se=e.scrollLoadAfterRender,pe=e.scrollLoadInnerBeforeRender,Re=e.scrollLoadInnerAfterRender,ve=e.scrollLoadInnerBeforeRenderClassName,ye=e.scrollLoadInnerBeforeRenderStyle,Ee=e.scrollLoadInnerAfterRenderClassName,he=e.scrollLoadInnerAfterRenderStyle,s=e.scrollLoadBeforeRenderClassName,Te=void 0===s?"":s,Le=e.scrollLoadBeforeRenderStyle,s=e.scrollLoadAfterRenderClassName,Ae=void 0===s?"":s,Ne=e.scrollLoadAfterRenderStyle,Me=e.beforeRender,Pe=e.afterRender,s=e.beforeRenderClassName,Ce=void 0===s?"":s,De=e.beforeRenderStyle,s=e.afterRenderClassName,be=void 0===s?"":s,Ue=e.afterRenderStyle,s=e.isShowFilterTrigger,Ie=e.renderFilterTrigger,Ke=e.isShowSortTrigger,Fe=e.renderSortTrigger,we=e.isShowViewSettingTrigger,Be=e.renderViewSettingTrigger,Oe=e.viewSettingTriggerMode,Ve=e.viewSettingTriggerProps,We=e.renderViewSetting,xe=e.viewSettingConfig,ke=e.defaultViewSettingValue,Ge=e.onViewSetting,He=e.onViewSettingReset,ze=e.loadData,Ye=e.renderEmpty,je=e.renderOffLine,Ze=e.filterTriggerMode,qe=e.filterTriggerProps,Je=e.renderFilter,Qe=e.filterFormProps,Xe=e.filterConfig,c=e.defaultFilterValues,$e=e.sortTriggerMode,er=e.sortTriggerProps,rr=e.renderSort,nr=e.sortConfig,u=e.defaultSortValues,tr=e.isUseLocal,or=e.selectionLabel,lr=e.selectionFinishLabel,ar=e.selectionCancelLabel,ir=e.isUseSelection,d=e.selectedRowKeys,sr=e.selectionMultiple,cr=e.onSelectChange,ur=e.isUseDND,dr=e.dndDragHandle,fr=e.dndLabel,mr=e.dndFinishLabel,gr=e.dndCancelLabel,_r=e.onDNDChange,Sr=e.actionTriggerMode,pr=e.renderActionSheetTrigger,Rr=e.onAction,vr=e.headerExtra,yr=e.children,e=useRef(!0),f=useRef(!1),Er=useRef(void 0),m=useRef(null),hr=useRef(ScrollLoad.NORMAL),g=useRef(),_=useRef({page:void 0!==t&&"object"===_typeof(t)&&null!=(S=t.page)?S:DEFAULT_PAGING_PAGE,pageSize:void 0!==t&&"object"===_typeof(t)&&null!=(S=t.defaultPageSize)?S:DEFAULT_PAGING_SIZE}),S=useState({data:[],total:0}),p=S[0],R=S[1],S=useState(DEFAULT_MODE),v=S[0],Tr=S[1],S=useNetwork(),Lr=useUpdate(),y=useMemo(function(){return"normal"===v},[v]),Ar=useMemo(function(){return null!=Sr?Sr:DEFAULT_ACTION_TRIGGER_MODE},[Sr]),Nr=useMemo(function(){return null!=ur?ur:DEFAULT_IS_USE_DND},[ur]),Mr=useMemo(function(){return null!=ir?ir:DEFAULT_IS_USE_SELECTION},[ir]),E=useMemo(function(){return null!=z?z:DEFAULT_ROW_KEY},[z]),d=useSelection({selectedRowKeys:d,selectionMultiple:sr,mode:v,dataSource:p.data,rowKey:E}),Pr=d.optionSelectedRowKeys,h=d.isUseSelectionMode,T=d.isSelectionMultiple,Cr=d.finish,Dr=d.cancel,sr=d.selectionChange,d=d.selectionAllChange,L=useDND({mode:v,dataSource:p.data,total:p.total,rowKey:E,reset:function(){R(__assign({},p))}}),A=L.optionDataSource,N=L.isUseDNDMode,br=L.finish,Ur=L.cancel,Ir=L.move,L=useImmer({searchKeyWord:null!=l?l:"",filterValues:null!=c?c:{},sortValues:null!=u?u:[]}),M=L[0],P=L[1],C=useMemo(function(){return"boolean"!=typeof t||t},[t]),D=useMemo(function(){return"boolean"==typeof tr&&tr},[tr]),b=useMemo(function(){var e,r=M.searchKeyWord,n=void 0===r?"":r,r=M.filterValues,t=void 0===r?{}:r,r=M.sortValues,r=void 0===r?[]:r,o=null!=(o=p.data)?o:[];return N&&(o=A.data),(null!=r?r:[]).length&&(o=r.reduce(function(e,r){var n=r.order,t=r.name;return e=e.sort(function(e,r){return"asc"===n?e[t]>r[t]?1:e[t]<r[t]?-1:0:e[t]<r[t]?1:e[t]>r[t]?-1:0}),__spreadArray([],e,!0)},null!=(e=p.data)?e:[])),o=!n&&isPrimaryEmpty(t)&&!r.length?o:o.filter(function(r){return n?Object.keys(r).some(function(e){return-1!==r[e].indexOf(n)}):!!isPrimaryEmpty(t)||Object.keys(t).filter(function(e){return!!t[e]}).every(function(e){return-1!==r[e].indexOf(t[e])})})},[M,p,N,A]),U=useMemo(function(){var e,r;return D?(r=b,C&&(e=(_.current.page-1)*_.current.pageSize,r=b.slice(e,_.current.page*_.current.pageSize),1!==_.current.page)&&(r=__spreadArray(__spreadArray([],b.slice(0,e),!0),r,!0)),{total:b.length,data:r}):N?A:p},[p,b,A,N,D,C,_.current.page,_.current.pageSize]),I=useMemo(function(){return null==yr?void 0:yr({dataSource:U.data})},[yr,U.data]),Kr=React.createElement(ToolBar,{className:a,style:se,showTotal:o,renderToolBar:re,afterToolBarRender:ne,beforeToolBarRender:te,beforeToolBarRenderClassName:oe,beforeToolBarRenderStyle:le,afterToolBarRenderClassName:ae,afterToolBarRenderStyle:ie,isShowFilterTrigger:s,renderFilterTrigger:Ie,isShowSortTrigger:Ke,renderSortTrigger:Fe,isShowViewSettingTrigger:we,renderViewSettingTrigger:Be,viewSettingTriggerMode:Oe,viewSettingTriggerProps:Ve,renderViewSetting:We,viewSettingConfig:xe,defaultViewSettingValue:ke,onViewSetting:Ge,onViewSettingReset:He,toolbarCollapseCount:ce,toolbarConfig:ue,total:null!=(L=null==U?void 0:U.total)?L:0,filterTriggerMode:Ze,filterTriggerProps:qe,renderFilter:Je,filterFormProps:Qe,filterConfig:Xe,defaultFilterValues:M.filterValues,onFilter:function(r){if(F(),P(function(e){e.filterValues=r}),D)return Promise.resolve();return K(__assign(__assign({},M),{filterValues:r}))},onFilterReset:function(){if(F(),P(function(e){e.filterValues={}}),D)return Promise.resolve();return K(__assign(__assign({},M),{filterValues:{}}))},sortTriggerMode:$e,sortTriggerProps:er,renderSort:rr,sortConfig:nr,defaultSortValues:M.sortValues,disabled:!y,onSort:function(r){if(F(),P(function(e){e.sortValues=r}),D)return Promise.resolve();return K(__assign(__assign({},M),{sortValues:r}))},onSortReset:function(){if(F(),P(function(e){e.sortValues=[]}),D)return Promise.resolve();return K(__assign(__assign({},M),{sortValues:[]}))}}),Fr=useMemo(function(){var e;return Math.floor((null!=(e=null==U?void 0:U.total)?e:0)/_.current.pageSize)||1},[U.total]),wr=useMemo(function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-first-loading")},React.createElement(_Skeleton.Title,{animated:!0}),React.createElement(_Skeleton.Paragraph,{lineCount:25,animated:!0}))},[]),Br=useMemo(function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-load-more-loading")},React.createElement("div",{className:"".concat(selectorPrefix,"-load-more-loading-dot")},React.createElement(_DotLoading,{color:"primary"})),React.createElement("div",null,"".concat(Intl.v("数据加载中")),"..."))},[]),a=useMemo(function(){var e;return null!=(e=null==je?void 0:je())?e:React.createElement(_ErrorBlock,{status:"disconnected"},React.createElement(_Button,{color:"primary",onClick:function(){Lr()}},Intl.v("点击重试")))},[je]),Or=useMemo(function(){var e;return React.createElement(SearchKeyWord,{className:null!=Z?Z:"",style:null!=q?q:{},searchKeyWordBarProps:j,searchKeyWordMode:null!=J?J:DEFAULT_SEARCH_KEY_WORD_MODE,searchKeyWordHistoryMaxSize:null!=Q?Q:DEFAULT_DISTANCE,isSearchKeyWordHistoryIntoStore:null==X||X,searchKeyWordHistoryStoreType:null!=$?$:DEFAULT_SEARCH_KEY_WORD_HISTORY_STORE_TYPE,disabled:!y,defaultSearchKeyWord:null!=(e=M.searchKeyWord)?e:"",onSearch:rn,onSearchClear:nn})},[Z,q,j,J,Q,M.searchKeyWord,y]),Vr=useMemo(function(){var e=null==Me?void 0:Me();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner-before"),null!=Ce?Ce:""),style:null!=De?De:{}},e)},[Me,Ce,De]),Wr=useMemo(function(){var e=null==Pe?void 0:Pe();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner-after"),null!=be?be:""),style:null!=Ue?Ue:{}},e)},[Pe,be,Ue]),xr=useMemo(function(){var e=null==_e?void 0:_e();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-scroll-before"),null!=Te?Te:""),style:null!=Le?Le:{}},e)},[_e,Te,Le]),kr=useMemo(function(){var e=null==Se?void 0:Se();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-scroll-after"),null!=Ae?Ae:""),style:null!=Ne?Ne:{}},e)},[Se,Ae,Ne]),Gr=useMemo(function(){var e=null==pe?void 0:pe();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-scroll-inner-before"),null!=ve?ve:""),style:null!=ye?ye:{}},e)},[pe,ve,ye]),Hr=useMemo(function(){var e=null==Re?void 0:Re();return e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-scroll-inner-after"),null!=Ee?Ee:""),style:null!=he?he:{}},e)},[Re,Ee,he]),zr=useCallback(function(){return!U.data.length},[U.data]),se=useCallback(function(){var e;return null!=(e=null==x?void 0:x())?e:wr},[x]),Yr=useCallback(function(){var e;return null!=(e=null==fe?void 0:fe())?e:Br},[fe]),jr=useMemo(function(){var e;return React.createElement(ScrollLoad,__assign({ref:g,renderLoading:Yr,distance:(null==i?void 0:i.distance)||50,onScrollBottom:sn},i||{},{disabled:Fr<=1||!y,className:classNames("".concat(selectorPrefix,"-scroll-load"),null!=(e=null==i?void 0:i.className)?e:"")}),Gr,function(){if(h&&!T)return function(e){return!h||T?e:React.createElement(_Radio.Group,null,e)}(I);if(N)return React.createElement(SortableContainer,{onSortEnd:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];Ir.apply(void 0,e)},useDragHandle:!0},I);return I}(),Hr)},[Gr,Hr,N,h,T,y,U.data,Yr,i,I,Fr]),Zr=useMemo(function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-scroll"),ref:Er},Gr,I,Hr)},[I]),qr=useMemo(function(){return React.createElement(BackTopAnimation,__assign({},null!=ge?ge:{},{getContainer:tn,onTrigger:function(){return Promise.resolve()}}))},[ge]),Jr=useMemo(function(){return Nr&&React.createElement(DNDManageButton,{dndLabel:fr,dndFinishLabel:mr,dndCancelLabel:gr,isUseDNDMode:N,isUseNormalMode:y,onChange:function(e){e?Tr("dnd"):$r()},onFinish:function(){R(A);var e=br();null!=_r&&_r(e)},onCancel:Ur})},[Nr,N,y,A,fr,mr,gr]),Qr=useMemo(function(){return Mr&&React.createElement(SelectionManageButton,{selectionLabel:or,selectionFinishLabel:lr,selectionCancelLabel:ar,isUseSelectionMode:h,isUseNormalMode:y,onChange:function(e){e?Tr("selection"):$r()},onFinish:function(){var e=Cr(),r=e.selectedRows,n=e.selectedRowKeys,t=e.changeRowKeys,e=e.info;null!=cr&&cr(n,r,t,e)},onCancel:Dr})},[Mr,or,lr,ar,h,y]),Xr=useMemo(function(){var e;return React.createElement(_PullToRefresh,__assign({},null!=k?k:{},{onRefresh:an,disabled:!y}),xr,zr()&&(null!=(e=null==Ye?void 0:Ye())?e:React.createElement(_ErrorBlock,{status:"empty"})),!zr()&&C&&jr,!zr()&&!C&&Zr,kr,me&&qr)},[t,k,xr,kr,jr,Zr,me,qr,y,Ye,C]),o=useCallback(function(){var e=[Jr,Qr].filter(function(e){return!!e}),r=null!=(r=null==vr?void 0:vr(e,v))?r:e,e=!1;return r&&Array.isArray(r)&&r.length&&(e=!0),React.createElement(React.Fragment,null,React.createElement("div",{className:"".concat(selectorPrefix,"-header")},React.createElement("div",{className:"".concat(selectorPrefix,"-header-main")},Y&&Or),e?React.createElement("div",{className:"".concat(selectorPrefix,"-header-extra")},r):null),ee&&Kr,React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner"),null!=O?O:""),style:null!=V?V:{}},Vr,Xr,Wr),h&&T&&React.createElement(SelectionCheckAllManage,null))},[Y,Or,ee,Kr,O,V,Vr,Xr,Wr,h,T,Jr,Qr,vr,v]);function $r(){Tr("normal")}function K(e){return ze?ze(__assign(__assign({},_.current),e)).then(function(e){return R(e),e}):Promise.resolve()}function F(){var e,r,n=null===tn?void 0:tn();n&&(n.scrollTop=0),null!=(e=null==(n=null==g?void 0:g.current)?void 0:n.hideAll)&&e.call(n),m.current=null,hr.current=ScrollLoad.NORMAL,_.current.page=void 0!==t&&"object"===_typeof(t)&&null!=(r=t.page)?r:DEFAULT_PAGING_PAGE,_.current.pageSize=void 0!==t&&"object"===_typeof(t)&&null!=(r=t.defaultPageSize)?r:DEFAULT_PAGING_SIZE}function en(){F(),P(function(e){e.searchKeyWord=l,e.filterValues=c,e.sortValues=u})}function rn(r){F(),P(function(e){e.searchKeyWord=r}),D||K(__assign(__assign({},M),{searchKeyWord:r}))}function nn(){F(),P(function(e){e.searchKeyWord=""}),D||K(__assign(__assign({},M),{searchKeyWord:""}))}function tn(){var e;return null!=(e=null!=(e=null==(e=g.current)?void 0:e.getScrollContainer())?e:Er.current)?e:document.body}function on(e){var r={searchKeyWord:l,filterValues:c,sortValues:u};return(G?G(__assign(__assign({},_.current),r)):Promise.resolve()).then(function(){if(e(),!D)return null==H?void 0:H(__assign(__assign({},_.current),r)).then(function(e){R(e)});Lr()})}function ln(){return on(en)}function an(){return ln()}function sn(e){if(m.current=e,!D)return null==de?void 0:de(__assign({page:_.current.page+1,pageSize:_.current.pageSize},M)).then(function(r){_.current.page+=1,R(function(e){return e.total=r.total,e.data=__spreadArray(__spreadArray([],e.data,!0),r.data,!0),__assign({},e)})});_.current.page+=1,Lr()}return useMount(function(){K({searchKeyWord:l,filterValues:c,sortValues:u})}),useUpdateEffect(function(){m.current&&(hr.current=_.current.page<Fr?ScrollLoad.NORMAL:ScrollLoad.EMPTY,m.current(hr.current))},[U.data,Fr]),useUpdateEffect(function(){en(),K({searchKeyWord:l,filterValues:c,sortValues:u})},[l,u,c,D]),useImperativeHandle(w,function(){return{getScrollEl:tn,scrollLoadHideAll:function(){var e,r;return null==(r=null==(e=null==g?void 0:g.current)?void 0:e.hideAll)?void 0:r.call(e)},resetPagination:ln,resetAll:function(){return on(F)}}}),React.createElement(Context.Provider,{value:{isUseSelectionMode:function(){return h},isUseDNDMode:function(){return N},isUseNormalMode:function(){return y},selectionChange:sr,selectionAllChange:d,getRowKey:function(){return E},getOptionSelectedRowKeys:function(){return null!=Pr?Pr:[]},getDatasourceLength:function(){return p.data.length},getSelectionMultiple:function(){return T},getIndexByIdFormOptionDataSource:function(r){return A.data.findIndex(function(e){return e[E]===r})},getDndDragHandle:function(){return dr},getActionTriggerMode:function(){return Ar},getRenderActionSheetTrigger:function(){return null==pr?void 0:pr()},onAction:function(e,r){return null!=(e=null==Rr?void 0:Rr(e,r))?e:[]}}},React.createElement("div",{className:classNames(selectorPrefix,null!=r?r:""),style:null!=B?B:{}},S.online&&(W&&(e.current&&!f.current&&n&&(f.current=!0),e.current&&f.current&&!n&&(e.current=!1,f.current=!1),e.current)?se:o)(),!S.online&&a))})),PRSL=InternalPRSL;PRSL.displayName="PRSL",PRSL.Item=PRSLItem;export default PRSL;
//# sourceMappingURL=PRSL.js.map
