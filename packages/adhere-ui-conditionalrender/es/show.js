import PropTypes from"prop-types";import React from"react";import{deal}from"./util";function ConditionalRenderShow(o){var e=o.conditional,n=o.noMatch,o=o.children,o=deal({element:o,conditional:e,prop:"display",value:e?"":"none"}),n=deal({element:n,conditional:e,prop:"display",value:e?"none":""});return React.createElement(React.Fragment,null,o,n)}ConditionalRenderShow.defaultProps={conditional:!0,noMatch:null},ConditionalRenderShow.propTypes={conditional:PropTypes.bool,noMatch:PropTypes.node};export default ConditionalRenderShow;
//# sourceMappingURL=show.js.map