import React from 'react';
import PropTypes from 'prop-types';

import { IConditionalRenderProps } from './types';

/**
 * ConditionalRender - 条件渲染
 * @class ConditionalRender
 * @classdesc ConditionalRender
 */
function ConditionalRender({ conditional, noMatch, children }: IConditionalRenderProps) {
  if (conditional) {
    return children();
  }

  // @ts-ignore
  return noMatch ? noMatch() : null;
}

ConditionalRender.defaultProps = {
  conditional: true,
  noMatch: () => null,
};

ConditionalRender.propTypes = {
  conditional: PropTypes.bool,
  noMatch: PropTypes.func,
};

export default ConditionalRender;
