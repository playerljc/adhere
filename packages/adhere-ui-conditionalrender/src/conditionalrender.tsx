import React from 'react';
import PropTypes from 'prop-types';

/**
 * ConditionalRender - 条件渲染
 * @class ConditionalRender
 * @classdesc ConditionalRender
 */
function ConditionalRender({ conditional, noMatch, children }) {
  if (conditional) {
    return children;
  }

  return noMatch ? noMatch : null;
}

ConditionalRender.defaultProps = {
  conditional: true,
  noMatch: null,
};

ConditionalRender.propTypes = {
  conditional: PropTypes.bool,
  noMatch: PropTypes.node,
};

export default ConditionalRender;
