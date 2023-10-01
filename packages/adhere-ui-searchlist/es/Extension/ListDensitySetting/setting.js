import PropTypes from"prop-types";import React from"react";import Intl from"@baifendian/adhere-util-intl";var selectorPrefix="adhere-ui-search-list",config=[{label:Intl.v("缺省"),value:"default"},{label:Intl.v("大"),value:"large"},{label:Intl.v("小"),value:"small"}];function ListDensitySetting(e){var t=e.density,n=e.onReset,a=e.onChange;return React.createElement("div",{className:"".concat(selectorPrefix,"-list-density-setting")},React.createElement("div",{className:"".concat(selectorPrefix,"-list-density-setting-header")},React.createElement("a",{onClick:n},Intl.v("重置"))),React.createElement("div",{className:"".concat(selectorPrefix,"-list-density-setting-body")},React.createElement("ul",null,config.map(function(e){return React.createElement("li",{key:e.value,className:t===e.value?"active":"",onClick:function(){a(e.value)}},e.label)}))))}ListDensitySetting.defaultProps={density:"default"},ListDensitySetting.propTypes={density:PropTypes.string,onReset:PropTypes.func,onChange:PropTypes.func};export default ListDensitySetting;
//# sourceMappingURL=setting.js.map
