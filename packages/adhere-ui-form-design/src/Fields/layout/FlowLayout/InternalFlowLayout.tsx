import merge from 'lodash.merge';
import React, { useContext, useMemo } from 'react';
import type { CSSProperties, FC } from 'react';

import { DesignContext } from '../../../Design/Context';
import type { DesignValue } from '../../../types';
import { parseDesign } from '../../parse';

export interface InternalFlowLayoutProps {
  style?: CSSProperties;
  children?: DesignValue[];
}

const selectorPrefix = 'adhere-ui-fd-flow-layout';

/**
 * InternalFlowLayout
 */
const InternalFlowLayout: FC<InternalFlowLayoutProps> = ({ children, ...props }) => {
  const { getTerminal, getItems } = useContext(DesignContext);

  const terminal = getTerminal();

  const items = getItems();

  const targetProps = useMemo(() => {
    // 基本的数据在props中都给了
    const layoutProps = merge({}, props);

    // 对children进行解析
    layoutProps.children = children?.map((_item) =>
      parseDesign({
        terminal,
        value: _item,
        items,
      }),
    );

    return layoutProps;
  }, [children, props]);

  return <div className={selectorPrefix} {...targetProps} />;
};

export default InternalFlowLayout;
