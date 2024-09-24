import { usePrevious } from 'ahooks';
import { Table } from 'antd';
import classNames from 'classnames';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';

import Util from '@baifendian/adhere-util';

import type { TableExtProps } from '../types';

const selectorPrefix = 'adhere-ui-anthoc-table';

const TableExt: FC<TableExtProps> = ({
  wrapperClassName,
  wrapperStyle,
  fixedHeaderAutoTable,
  fixedTableSpaceBetween,
  ...props
}) => {
  const tableWrapRef = useRef<HTMLElement | null>({} as HTMLElement);

  const [scrollY, setScrollY] = useState(0);

  const preScrollY = usePrevious(scrollY);

  const targetFixedHeaderAutoTable = useMemo(() => {
    if (Util.isEmpty(fixedHeaderAutoTable)) return true;

    return fixedHeaderAutoTable;
  }, [fixedHeaderAutoTable]);

  const targetFixedTableSpaceBetween = useMemo(() => {
    if (Util.isEmpty(fixedTableSpaceBetween)) return true;

    return fixedTableSpaceBetween;
  }, [fixedTableSpaceBetween]);

  useEffect(() => {
    debugger;
    if (!tableWrapRef.current) return;

    if (targetFixedHeaderAutoTable) {
      const dataSource = props.dataSource ?? [];

      if (
        dataSource &&
        dataSource.length &&
        ((preScrollY === 0 && scrollY === 0) || preScrollY !== scrollY)
      ) {
        const tableWrap = tableWrapRef.current as HTMLElement;

        const tableHeaderHeight =
          (tableWrap.querySelector('.ant-table-thead') as HTMLElement)?.offsetHeight || 0;

        const tablePaginationHeight =
          (tableWrap.querySelector('.ant-table-pagination') as HTMLElement)?.offsetHeight || 0;

        setScrollY(
          tableWrap.clientHeight -
            (tableHeaderHeight + (tablePaginationHeight ? tablePaginationHeight + 16 * 2 : 0)),
        );
      }
    }
  });

  const targetTableProps = useMemo(() => {
    const targetProps = { ...props };

    if (targetFixedHeaderAutoTable) {
      if (targetProps.scroll) {
        targetProps.scroll.y = scrollY;
      } else {
        targetProps.scroll = { y: scrollY };
      }
    }

    return targetProps;
  }, [scrollY, props, targetFixedHeaderAutoTable]);

  return (
    <div
      className={classNames(
        selectorPrefix,
        {
          [`${selectorPrefix}-fixed-table-space-between`]: targetFixedTableSpaceBetween,
        },
        wrapperClassName,
      )}
      style={wrapperStyle ?? {}}
      // @ts-ignore
      ref={tableWrapRef}
    >
      <Table {...targetTableProps} />
    </div>
  );
};

export default TableExt;
