import React, { useContext, useMemo } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import type { FieldProps, I18nValue } from '../../types';
import { resolveI18nText } from '../../utils';
import { StateTable, EditableRowControlTable as SuperTable } from './Components';

export { SuperTable };

export type EditableRowControlTableProps = {
  subClass: any;
  fieldProps?: FieldProps;
  value?: Record<string, any>[];
  onChange?: (value: Record<string, any>[]) => void;
};

/**
 * EditableRowControlTable
 * @description 行控制可编辑表格组件，支持在表单中嵌入可编辑的表格，整行进入编辑模式
 */
function EditableRowControlTable({
  subClass,
  fieldProps,
  value,
  onChange,
}: EditableRowControlTableProps) {
  const List = useMemo(() => StateTable(subClass), [subClass]);
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';

  const tableTitle = useMemo(() => {
    const t = fieldProps?.title;
    if (t == null) return undefined;
    if (React.isValidElement(t)) return t;
    return resolveI18nText(t as I18nValue | string | undefined, lang) || undefined;
  }, [fieldProps?.title, lang]);

  return (
    <List
      FieldGeneratorToDict={FieldGeneratorToDict}
      isShowExpandSearch
      autoFixed
      fixedHeaderAutoTable={false}
      fixedTableSpaceBetween
      title={tableTitle}
      // form
      value={value}
      onChange={onChange}
      antdTableProps={{
        bordered: fieldProps?.bordered,
      }}
    />
  );
}

export default EditableRowControlTable;
