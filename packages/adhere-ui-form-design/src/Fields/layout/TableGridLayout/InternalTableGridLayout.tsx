import merge from 'lodash.merge';
import React, { useContext, useMemo } from 'react';
import type { FC } from 'react';

import TableGridLayout, { type DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { DesignContext } from '../../../Design/Context';
import type { InternalTableGridLayoutProps } from '../../../types';
import { useParseDesignCached } from '../../parse';
import { resolveTableGridChildForMobileParse } from './resolveFieldPropsForDesignEditor';

/**
 * InternalTableGridLayout
 * @description TableGridLayout的内部实现
 */
const InternalTableGridLayout: FC<InternalTableGridLayoutProps> = ({ children, id, ...props }) => {
  const context = useContext(DesignContext);
  const terminal = context.getTerminal();
  const parseDesignCached = useParseDesignCached();

  const targetProps = useMemo<TableGridLayoutProps>(() => {
    // 基本的数据在props中都给了
    const tableGridLayoutProps = merge({}, props);

    // 对children进行解析
    tableGridLayoutProps.data[0].data = children?.map((_item) => {
      return parseDesignCached({
        parentId: id,
        value: resolveTableGridChildForMobileParse(_item, terminal),
        context,
      }) as DataItemRow;
    });

    return tableGridLayoutProps;
  }, [children, context, id, parseDesignCached, props, terminal]);

  return <TableGridLayout {...targetProps} />;
};

export default InternalTableGridLayout;
