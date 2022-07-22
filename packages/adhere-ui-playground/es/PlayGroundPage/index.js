import React,{useContext,forwardRef}from"react";import PropTypes from"prop-types";import classNames from"classnames";import Space from"@baifendian/adhere-ui-space";import{PlayGroundPageContext}from"./Context";import{AnchorNavigationContext}from"../AnchorNavigationContext";import AnchorNavigation from"../AnchorNavigation";import Section from"./Section";import CodeBoxSection from"./CodeBoxSection";import PropsSection from"./PropsSection";import FunctionPropsSection from"./FunctionPropsSection";var selectPrefix="adhere-ui-playground-page";function PlayGroundPage(o,e){var r=useContext(PlayGroundPageContext).scrollEl;return React.createElement(AnchorNavigationContext.Provider,{value:{scrollEl:r}},React.createElement("div",{ref:e,className:""+classNames(selectPrefix,(o.className||"").split(/\s+/)),style:o.style||{}},React.createElement(AnchorNavigation,{anchors:null===(e=o.children.filter(function(o){return"type"in o&&o.type instanceof Function&&o.type===CodeBoxSection}).map(function(o){return null===(o=null===(o=null==o?void 0:o.props)||void 0===o?void 0:o.config)||void 0===o?void 0:o.map(function(o){return{name:o.name,anchor:o.id}})}))||void 0===e?void 0:e.flat(),anchorPosition:o.anchorPosition},React.createElement(Space.Group,{direction:"vertical"},o.children))))}PlayGroundPage.defaultProps={className:"",style:{},anchorPosition:{top:77,width:120}},PlayGroundPage.propTypes={className:PropTypes.string,style:PropTypes.object,anchorPosition:PropTypes.shape({top:PropTypes.number,width:PropTypes.number})};var PlayGroundPageForward=forwardRef(PlayGroundPage);PlayGroundPageForward.Section=Section,PlayGroundPageForward.CodeBoxSection=CodeBoxSection,PlayGroundPageForward.PropsSection=PropsSection,PlayGroundPageForward.FunctionPropsSection=FunctionPropsSection;export default PlayGroundPageForward;
//# sourceMappingURL=index.js.map
