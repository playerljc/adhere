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
  const context = useContext(DesignContext);

  const targetProps = useMemo(() => {
    // 基本的数据在props中都给了
    const layoutProps = merge({}, props);

    // 对children进行解析
    layoutProps.children = children?.map((_item) =>
      parseDesign({
        value: _item,
        context,
      }),
    );

    return layoutProps;
  }, [children, props]);

  return <div className={selectorPrefix} {...targetProps} />;
};

export default InternalFlowLayout;
