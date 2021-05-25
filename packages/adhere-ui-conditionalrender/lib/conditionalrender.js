import PropTypes from"prop-types";function ConditionalRender(n){var o=n.conditional,e=n.noMatch,n=n.children;return o?n():e?e():null}ConditionalRender.defaultProps={conditional:!0,noMatch:function(){return null}},ConditionalRender.propTypes={conditional:PropTypes.bool,noMatch:PropTypes.func};export default ConditionalRender;
//# sourceMappingURL=conditionalrender.js.map
