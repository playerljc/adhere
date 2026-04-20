import merge from 'lodash.merge';
import React, { useContext, useMemo } from 'react';
import type { CSSProperties, FC } from 'react';

import { DesignContext } from '../../../Design/Context';
import { SELECT_PREFIX } from '../../../constant';
import type { DesignValue } from '../../../types';
import { parseDesign } from '../../parse';

export interface InternalFlexLayoutProps {
  id?: string;
  style?: CSSProperties;
  children?: DesignValue[];
  direction?: 'horizontal' | 'vertical';
  wrap?: boolean;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  gap?: CSSProperties['gap'];
}

const selectorPrefix = `${SELECT_PREFIX}-flex-layout`;

/**
 * InternalFlexLayout
 */
const InternalFlexLayout: FC<InternalFlexLayoutProps> = ({
  id,
  children,
  style,
  direction,
  wrap,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  ...props
}) => {
  const context = useContext(DesignContext);

  const targetProps = useMemo(() => {
    // 基本的数据在props中都给了
    const layoutProps = merge({}, props);

    const targetStyle: CSSProperties = { ...style };

    if (direction === 'horizontal') {
      targetStyle.flexDirection = 'row';
    }

    if (direction === 'vertical') {
      targetStyle.flexDirection = 'column';
    }

    if (wrap) {
      targetStyle.flexWrap = 'wrap';
    }

    if (!wrap) {
      targetStyle.flexWrap = 'nowrap';
    }

    if (justifyContent) {
      targetStyle.justifyContent = justifyContent;
    }

    if (alignItems) {
      targetStyle.alignItems = alignItems;
    }

    if (alignContent) {
      targetStyle.alignContent = alignContent;
    }

    if (gap !== null && gap !== undefined && gap !== '') {
      targetStyle.gap = gap;
    }

    // 对样式的处理
    layoutProps.style = targetStyle;

    // 对children进行解析
    layoutProps.children = children?.map((_item) =>
      parseDesign({
        parentId: id,
        value: _item,
        context,
      }),
    );

    return layoutProps;
  }, [children, style, direction, wrap, justifyContent, alignItems, alignContent, gap, props]);

  return <div className={selectorPrefix} {...targetProps} />;
};

export default InternalFlexLayout;
