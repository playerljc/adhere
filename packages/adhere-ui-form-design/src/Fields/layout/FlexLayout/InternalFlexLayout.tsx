import merge from 'lodash.merge';
import React, { useContext, useMemo } from 'react';
import type { CSSProperties, FC } from 'react';

import { DesignContext } from '../../../Design/Context';
import type { DesignValue } from '../../../types';
import { parseDesign } from '../../parse';

export interface InternalFlexLayoutProps {
  style?: CSSProperties;
  children?: DesignValue[];
  direction?: 'horizontal' | 'vertical';
  wrap?: boolean;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  gap?: CSSProperties['gap'];
}

const selectorPrefix = 'adhere-ui-fd-flex-layout';

/**
 * InternalFlexLayout
 */
const InternalFlexLayout: FC<InternalFlexLayoutProps> = ({ children, style, ...props }) => {
  const context = useContext(DesignContext);

  const targetProps = useMemo(() => {
    // 基本的数据在props中都给了
    const layoutProps = merge({}, props);

    const targetStyle: CSSProperties = { ...style };

    if (props.direction === 'horizontal') {
      targetStyle.flexDirection = 'row';
    }

    if (props.direction === 'vertical') {
      targetStyle.flexDirection = 'column';
    }

    if (props.wrap) {
      targetStyle.flexWrap = 'wrap';
    }

    if (!props.wrap) {
      targetStyle.flexWrap = 'nowrap';
    }

    if (props.justifyContent) {
      targetStyle.justifyContent = props.justifyContent;
    }

    if (props.alignItems) {
      targetStyle.alignItems = props.alignItems;
    }

    if (props.alignContent) {
      targetStyle.alignContent = props.alignContent;
    }

    if (props.gap !== null && props.gap !== undefined && props.gap !== '') {
      targetStyle.gap = props.gap;
    }

    // 对样式的处理
    layoutProps.style = targetStyle;

    // 对children进行解析
    layoutProps.children = children?.map((_item) =>
      parseDesign({
        value: _item,
        context,
      }),
    );

    return layoutProps;
  }, [children, style, props]);

  return <div className={selectorPrefix} {...targetProps} />;
};

export default InternalFlexLayout;
