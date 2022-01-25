import PropTypes from 'prop-types';
import React from 'react';

import { IConditionalRenderShowProps, IDeal } from './types';

import { deal } from './util';

/**
 * ConditionalRenderShow - 知识用于切换css的display
 * @class ConditionalRenderShow
 * @classdesc 只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 * 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
 */
function ConditionalRenderShow({ conditional, noMatch, children }: IConditionalRenderShowProps) {
  children = deal({
    element: children,
    conditional,
    prop: 'display',
    value: conditional ? '' : 'none',
  });

  // @ts-ignore
  noMatch = deal({
    element: noMatch,
    conditional,
    prop: 'display',
    value: conditional ? 'none' : '',
  } as IDeal);

  return (
    <>
      {children}
      {noMatch}
    </>
  );
}

ConditionalRenderShow.defaultProps = {
  conditional: true,
  noMatch: null,
};

ConditionalRenderShow.propTypes = {
  conditional: PropTypes.bool,
  noMatch: PropTypes.node,
};

export default ConditionalRenderShow;
