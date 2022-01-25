import React from 'react';
import PropTypes from 'prop-types';

import { IConditionalRenderProps } from './types';

import ConditionalRenderShow from './show';
import ConditionalRenderVisibility from './visibility';

/**
 * ConditionalRender - 条件渲染
 * @class ConditionalRender
 * @classdesc ConditionalRender
 */
function ConditionalRender({ conditional, noMatch, children }: IConditionalRenderProps) {
  if (conditional) {
    return children();
  }

  return noMatch ? noMatch() : null;
}

ConditionalRender.Show = ConditionalRenderShow;
ConditionalRender.Visibility = ConditionalRenderVisibility;

ConditionalRender.defaultProps = {
  conditional: true,
  noMatch: () => null,
};

ConditionalRender.propTypes = {
  conditional: PropTypes.bool,
  noMatch: PropTypes.func,
};

export default ConditionalRender;
