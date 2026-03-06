import merge from 'lodash.merge';
import React, { useContext, useMemo } from 'react';
import type { FC } from 'react';

import TableGridLayout, { type DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { DesignContext } from '../../../Design/Context';
import type { InternalTableGridLayout } from '../../../types';
import { parseDesign } from '../../parse';

/**
 * InternalTableGridLayout
 * @description TableGridLayout的内部实现
 */
const InternalTableGridLayout: FC<InternalTableGridLayout> = ({ children, ...props }) => {
  const { getTerminal, getItems } = useContext(DesignContext);

  const terminal = getTerminal();

  const items = getItems();

  const targetProps = useMemo<TableGridLayoutProps>(() => {
    // 基本的数据在props中都给了
    const tableGridLayoutProps = merge({}, props);

    // 对children进行解析
    tableGridLayoutProps.data[0].data = children?.map((_item) => {
      return parseDesign({
        terminal,
        value: _item,
        items,
      }) as DataItemRow;
    });

    return tableGridLayoutProps;
  }, [children, props]);

  return <TableGridLayout {...targetProps} />;
};

export default InternalTableGridLayout;
