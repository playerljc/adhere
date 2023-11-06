import React, { memo } from 'react';

import ConditionalRenderShow from './Show';
import ConditionalRenderVisibility from './Visibility';
import type { ConditionalRenderComponent, ConditionalRenderProps } from './types';

const InternalConditionalRender = memo<ConditionalRenderProps>((props) => {
  const { conditional, noMatch, children } = props;

  if (conditional) {
    return children?.();
  }

  return noMatch ? noMatch() : null;
});

const ConditionalRender = InternalConditionalRender as ConditionalRenderComponent;

ConditionalRender.Show = ConditionalRenderShow;

ConditionalRender.Visibility = ConditionalRenderVisibility;

/**
 * conditionalRender
 * @description - 使用方法的ConditionalRender
 * @param conditional
 * @param match
 * @param noMatch
 */
ConditionalRender.conditionalRender = function ({ conditional, match, noMatch }) {
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
        return t.props.noMatch && t.props.noMatch?.() !== null;
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

export default ConditionalRender;
