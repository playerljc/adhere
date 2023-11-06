import React, { FC } from 'react';

import { deal } from './Util';
import type { ConditionalRenderShowProps } from './types';

/**
 * ConditionalRenderVisibility - 知识用于切换css的visibility
 * @class ConditionalRenderVisibility
 * @classdesc 只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 * 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
 */
const ConditionalRenderVisibility: FC<ConditionalRenderShowProps> = ({
  children,
  noMatch,
  conditional,
}) => (
  <>
    {deal({
      element: children,
      conditional,
      prop: 'visibility',
      value: conditional ? 'visible' : 'hidden',
    })}
    {deal({
      element: noMatch,
      conditional,
      prop: 'visibility',
      value: conditional ? 'hidden' : 'visible',
    })}
  </>
);

export default ConditionalRenderVisibility;
