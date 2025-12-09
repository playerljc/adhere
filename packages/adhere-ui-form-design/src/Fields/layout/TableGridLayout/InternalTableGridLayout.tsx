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
 */
const InternalTableGridLayout: FC<InternalTableGridLayout> = ({ children, ...props }) => {
  const { getTerminal, getItems } = useContext(DesignContext);

  const terminal = getTerminal();

  const items = getItems();

  const targetProps = useMemo<TableGridLayoutProps>(() => {
    const tableGridLayoutProps = merge({}, props);
    tableGridLayoutProps.data[0].data = children?.map(
      (_item) =>
        parseDesign({
          terminal,
          value: _item,
          items,
        }) as DataItemRow,
    );

    return tableGridLayoutProps;
  }, [children, props]);

  return <TableGridLayout {...targetProps} />;
};

export default InternalTableGridLayout;
