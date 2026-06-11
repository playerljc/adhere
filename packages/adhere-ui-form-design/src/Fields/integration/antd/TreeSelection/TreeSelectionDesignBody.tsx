import React, { type CSSProperties } from 'react';

import { FieldWithTip } from '../../../../components';
import type { FieldProps } from '../../../../types';
import { useDesignFieldTreeDataSource } from '../../../../utils/treeDataSource';
import TreeSelectionField, { type TreeSelectionCheckedKeys } from './TreeSelectionField';
import type { TreeSelectionFieldConfig } from './resolveTreeSelectionFieldProps';

export type TreeSelectionDesignBodyProps = {
  fieldProps: FieldProps;
  style?: CSSProperties;
  lang: string;
  actions?: Record<string, (...args: any[]) => any>;
  value?: TreeSelectionCheckedKeys;
  onChange?: (value: TreeSelectionCheckedKeys) => void;
};

const TreeSelectionDesignBody: React.FC<TreeSelectionDesignBodyProps> = ({
  fieldProps,
  style,
  lang,
  actions = {},
  value,
  onChange,
}) => {
  const { treeData, loading, restFieldProps } = useDesignFieldTreeDataSource(fieldProps);

  const config = restFieldProps as TreeSelectionFieldConfig & FieldProps;

  return (
    <FieldWithTip tip={fieldProps.tip as any} lang={lang}>
      <TreeSelectionField
        {...config}
        value={value}
        onChange={onChange}
        treeData={treeData}
        loading={loading}
        lang={lang}
        style={style}
        actions={actions}
      />
    </FieldWithTip>
  );
};

export default TreeSelectionDesignBody;
