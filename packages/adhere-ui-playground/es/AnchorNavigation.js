import React,{useEffect,useRef,useState}from"react";import PropTypes from"prop-types";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Util from"@baifendian/adhere-util";import{AnchorNavigationContext}from"./AnchorNavigationContext";var selectPrefix="adhere-ui-playground-anchor-navigation";function AnchorNavigation(r){var e=useState(r.activeAnchor),t=e[0],a=e[1],e=useState(null),i=e[0],n=e[1],c=useRef(),s=useRef([]);return useEffect(function(){if("undefined"!=typeof window)return window.addEventListener("hashchange",e),function(){"undefined"!=typeof window&&window.removeEventListener("hashchange",e)};function e(){a(window.location.hash.substring(1))}},[]),useEffect(function(){var o;if(i)return i&&(o=i,s.current=[],r.anchors.forEach(function(e,t){var n=e.anchor,r=document.getElementById(n);r&&(e=Util.getTopUntil({el:r,untilEl:o}),s.current.push(n={anchor:n,range:{top:e,bottom:void 0}}),0!==t&&(s.current[t-1].range.bottom=e),t===s.current.length-1&&(n.range.bottom=e+r.offsetHeight))})),i.addEventListener("scroll",e),function(){i&&i.removeEventListener("scroll",e)};function e(){var e,t,n;i&&(e=i.scrollTop,n=e,(t=s.current.find(function(e){return n>=e.range.top&&n<=e.range.bottom}))&&a(t.anchor),0===e?c.current.classList.remove(selectPrefix+"-affix"):(c.current.classList.add(selectPrefix+"-affix"),c.current.style.top=r.anchorPosition.top+"px"))}},[i]),useEffect(function(){a(r.activeAnchor)},[r.activeAnchor]),React.createElement(AnchorNavigationContext.Consumer,null,function(e){e=e.scrollEl;return n(e),React.createElement("div",{className:selectPrefix},React.createElement("div",{className:selectPrefix+"-auto"},React.createElement("div",{className:selectPrefix+"-inner"},r.children)),React.createElement(ConditionalRender,{conditional:!!r.anchors.length},function(){return React.createElement("div",{className:selectPrefix+"-fixed",style:{width:r.anchorPosition.width+"px"}},React.createElement("ul",{className:selectPrefix+"-anchor",ref:c},r.anchors.map(function(e){return React.createElement("li",{className:e.anchor===t?selectPrefix+"-active":"",title:e.name},React.createElement("a",{href:"#"+e.anchor},e.name))})))}))})}AnchorNavigation.defaultProps={activeAnchor:"",anchors:[],anchorPosition:{top:77,width:120}},AnchorNavigation.propTypes={activeAnchor:PropTypes.string,anchors:PropTypes.arrayOf(PropTypes.shape({name:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),anchor:PropTypes.string})),anchorPosition:PropTypes.shape({top:PropTypes.number,width:PropTypes.number})};export default AnchorNavigation;
//# sourceMappingURL=AnchorNavigation.js.map
