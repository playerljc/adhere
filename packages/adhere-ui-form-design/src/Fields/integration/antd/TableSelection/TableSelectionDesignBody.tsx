import React, { type CSSProperties } from 'react';

import { FieldWithTip } from '../../../../components';
import type { FieldProps } from '../../../../types';
import { useDesignFieldTableDataSource } from '../../../../utils/tableDataSource';
import TableSelectionField from './TableSelectionField';
import type { TableSelectionFieldConfig } from './resolveTableSelectionFieldProps';

export type TableSelectionDesignBodyProps = {
  fieldProps: FieldProps;
  style?: CSSProperties;
  lang: string;
  isMobile?: boolean;
  actions?: Record<string, (...args: any[]) => any>;
  value?: React.Key[];
  onChange?: (value: React.Key[]) => void;
};

const TableSelectionDesignBody: React.FC<TableSelectionDesignBodyProps> = ({
  fieldProps,
  style,
  lang,
  isMobile = false,
  actions = {},
  value,
  onChange,
}) => {
  const { dataSource, loading, restFieldProps } = useDesignFieldTableDataSource(fieldProps);

  const config = restFieldProps as TableSelectionFieldConfig & FieldProps;

  return (
    <FieldWithTip tip={fieldProps.tip as any} lang={lang}>
      <TableSelectionField
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

export default TableSelectionDesignBody;
