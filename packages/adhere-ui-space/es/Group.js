var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};import React,{Fragment,useMemo}from"react";import*as ReactIs from"react-is";import Space from"./Space";var SpaceGroup=function(e){var r=e.children,t=__rest(e,["children"]),a=useMemo(function(){return Array.isArray(r)?(r||[]).filter(function(e){return!!e}):r},[r]),e=useMemo(function(){var n=[];return function t(e){React.Children.map(e,function(e){var r;ReactIs.isFragment(e)?t(((null==(r=null==e?void 0:e.props)?void 0:r.children)||[]).filter(function(e){return!!e})):n.push(e)})}(a),n},[a]);return React.Children.count(a)<=1?a:e.map(function(e,r){return 0===r?e:React.createElement(Fragment,{key:r},React.createElement(Space,__assign({},t)),e)})};export default SpaceGroup;
//# sourceMappingURL=Group.js.map
