import _SearchBar from"antd-mobile/es/components/search-bar";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,a=1,o=arguments.length;a<o;a++)for(var s in r=arguments[a])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{memo}from"react";var selectorPrefix="adhere-mobile-ui-prsl-search-keyword",SearchKeyWord=memo(function(e){var r=e.className,a=e.style,o=e.searchKeyWordBarProps,s=(e.searchKeyWordMode,e.searchKeyWordHistoryMaxSize,e.defaultSearchKeyWord),t=e.onSearch,c=e.onSearchClear;return React.createElement("div",{key:s,className:classNames("".concat(selectorPrefix,"-wrapper"),null!=r?r:""),style:null!=a?a:{}},React.createElement(_SearchBar,__assign({},o,{defaultValue:null!=s?s:"",onSearch:function(e){null!=t&&t(e)},onClear:function(){null!=c&&c()}})))});SearchKeyWord.displayName="SearchKeyWord";export default SearchKeyWord;
//# sourceMappingURL=index.js.map
