import React from 'react';
import PropTypes from 'prop-types';

import { IConditionalRenderShowProps, IDeal } from './types';

import { deal } from './util';

/**
 * ConditionalRenderVisibility - 知识用于切换css的visibility
 * @class ConditionalRenderVisibility
 * @classdesc 只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 * 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
 */
function ConditionalRenderVisibility({
  conditional,
  noMatch,
  children,
}: IConditionalRenderShowProps) {
  children = deal({
    element: children,
    conditional,
    prop: 'visibility',
    value: conditional ? 'visible' : 'hidden',
  });

  // @ts-ignore
  noMatch = deal({
    element: noMatch,
    conditional,
    prop: 'visibility',
    value: conditional ? 'hidden' : 'visible',
  } as IDeal);

  return (
    <>
      {children}
      {noMatch}
    </>
  );
}

ConditionalRenderVisibility.defaultProps = {
  conditional: true,
  noMatch: null,
};

ConditionalRenderVisibility.propTypes = {
  conditional: PropTypes.bool,
  noMatch: PropTypes.node,
};

export default ConditionalRenderVisibility;
