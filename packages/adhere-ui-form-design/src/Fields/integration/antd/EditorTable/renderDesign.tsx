import React, { useContext } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import SearchTable from '@baifendian/adhere-ui-searchtable';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Util from '@baifendian/adhere-util';

import { LabelDesign, ValueDesign } from '../../../../components';
import {
  EditableRowControlTable,
  EditableRowControlTableSuperTable,
} from '../../../../components/SearchEditorTableFormItem';
import { SELECT_VALUE_KEY_NAME } from '../../../../constant';
import type { DesignContextType, DesignValue, FieldProps, I18nValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';

function resolveI18nText(value: I18nValue | string | undefined, lang: string): string {
  if (value === undefined || value === null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && SELECT_VALUE_KEY_NAME in value) {
    const i18n = value as I18nValue;
    return String(i18n[lang] ?? i18n[i18n.selectValue] ?? '');
  }
  return '';
}

function createSubTitle(_params: {
  fieldProps: FieldProps;
  style: React.CSSProperties;
  actions: Record<string, (...args: any[]) => any>;
  lang: string;
}): typeof EditableRowControlTableSuperTable {
  return class extends EditableRowControlTableSuperTable {
    getEllipsisCount() {
      return 5;
    }

    onAdd() {
      return super.onAdd(
        (_params?.fieldProps.columnSetting ?? []).reduce(
          (record, columnConfig) => {
            record[columnConfig.field] = columnConfig?.defaultValue;

            return record;
          },
          {
            id: Util.uuid(),
          },
        ),
      );
    }

    getPagination(): boolean {
      return _params?.fieldProps?.pagination;
    }

    getTableDensity() {
      return _params?.fieldProps?.size ?? super.getTableDensity();
    }

    isShowNumber() {
      return _params?.fieldProps?.no;
    }

    getNumberGeneratorRule() {
      return _params?.fieldProps?.noRule === '1'
        ? SearchTable.Table.NUMBER_GENERATOR_RULE_ALONE
        : SearchTable.Table.NUMBER_GENERATOR_RULE_CONTINUITY;
    }

    getColumns() {
      const columns = super.getColumns();

      const columnSetting = _params?.fieldProps?.columnSetting ?? [];

      return [
        ...columnSetting.map((columnConfigconfig) => {
          let width = {};

          if (columnConfigconfig.widthMode) {
            if (columnConfigconfig.widthMode === 'auto') {
              width = 'auto';
            } else if (columnConfigconfig.widthMode === 'percent') {
              width = `${columnConfigconfig.widthMode}%`;
            } else if (columnConfigconfig.widthMode === 'number') {
              width = columnConfigconfig.widthMode;
            }
          }

          return {
            title: resolveI18nText(columnConfigconfig?.title, _params.lang),
            dataIndex: columnConfigconfig?.field,
            key: columnConfigconfig?.field,
            align: columnConfigconfig?.align,
            width,
            $editable: {
              editable: true,
              type: columnConfigconfig?.editorType,
              props: {
                placeholder: '',
              },
              rules: [
                {
                  required: true,
                  message: '',
                },
              ],
            },
          };
        }),
        ...columns,
      ];
    }
  };
}

/**
 * renderDesign
 * @param props
 */
export function renderDesign({
  parentId,
  value,
  context,
}: {
  parentId?: string;
  value: DesignValue;
  context: DesignContextType;
}): DataItemRow {
  const {
    id,
    props: { formItemProps, styleProps },
  } = value;

  const { getDesignValue } = context;

  const designValue = getDesignValue() as DesignValue;

  const parent = findDesignValueById(parentId as string, designValue) as DesignValue;

  const { labelColSpan, valueColSpan } = computeLabelValueColSpan(parent, formItemProps);

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps, style, actions }) => {
          const { intl } = useContext(ConfigProvider.Context);
          const lang = intl.lang!;

          return (
            <EditableRowControlTable
              subClass={createSubTitle({
                fieldProps,
                style,
                actions,
                lang,
              })}
              fieldProps={fieldProps}
            />
          );
        }}
      </ValueDesign>
    ),
  };
}
