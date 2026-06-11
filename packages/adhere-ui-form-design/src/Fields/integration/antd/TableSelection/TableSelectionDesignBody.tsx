import React, { type CSSProperties } from 'react';

import { FieldWithTip } from '../../../../components';
import type { FieldProps } from '../../../../types';
import { useDesignFieldTableDataSource } from '../../../../utils/tableDataSource';
import TableSelectField from './TableSelectField';
import type { TableSelectFieldConfig } from './resolveTableFieldProps';

export type TableSelectDesignBodyProps = {
  fieldProps: FieldProps;
  style?: CSSProperties;
  lang: string;
  isMobile?: boolean;
  actions?: Record<string, (...args: any[]) => any>;
  value?: React.Key[];
  onChange?: (value: React.Key[]) => void;
};

const TableSelectDesignBody: React.FC<TableSelectDesignBodyProps> = ({
  fieldProps,
  style,
  lang,
  isMobile = false,
  actions = {},
  value,
  onChange,
}) => {
  const { dataSource, loading, restFieldProps } = useDesignFieldTableDataSource(fieldProps);

  const config = restFieldProps as TableSelectFieldConfig & FieldProps;

  return (
    <FieldWithTip tip={fieldProps.tip as any} lang={lang}>
      <TableSelectField
        {...config}
        value={value}
        onChange={onChange}
        dataSource={dataSource}
        loading={loading || config.loading}
        isMobile={isMobile}
        lang={lang}
        style={style}
        actions={actions}
      />
    </FieldWithTip>
  );
};

export default TableSelectDesignBody;
