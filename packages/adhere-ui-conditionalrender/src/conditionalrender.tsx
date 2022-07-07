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

/**
 * conditionalRender
 * @description - 使用方法的ConditionalRender
 * @param conditional
 * @param match
 * @param noMatch
 */
ConditionalRender.conditionalRender = function ({
  conditional,
  match,
  noMatch,
}: {
  conditional: boolean;
  match: JSX.Element;
  noMatch: JSX.Element | null;
}): JSX.Element | null {
  return conditional ? match : noMatch || null;
};

/**
 * conditionalArr
 * @description - 含有PermissionConditional的React.Element的数组
 * @param arr
 * @return Array
 */
ConditionalRender.conditionalArr = function (arr: any[]): any[] {
  return arr.filter((t) => {
    if ('props' in t && 'conditional' in t.props) {
      if (!t.props.conditional) {
        if (t.props.noMatch && t.props.noMatch?.() !== null) return true;
        return false;
      }
    }

    return true;
  });
};

/**
 * conditionalNotEmptyArr
 * @deprecated 去除null和undefined值
 * @param arr
 */
ConditionalRender.conditionalNotEmptyArr = function (arr: any[]): any[] {
  return arr.filter((t) => !(t === null || t === undefined));
};

ConditionalRender.defaultProps = {
  conditional: true,
  noMatch: () => null,
};

ConditionalRender.propTypes = {
  conditional: PropTypes.bool,
  noMatch: PropTypes.func,
};

export default ConditionalRender;
