import React, { useContext } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import SearchTable from '@baifendian/adhere-ui-searchtable';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Util from '@baifendian/adhere-util';
import { Select, type SelectProps } from 'antd';

import { DesignContext } from '../../../../Design/Context';
import { DesignPreviewFieldWithDataSource, LabelDesign, ValueDesign } from '../../../../components';
import type { Rule } from '../../../../components/RulesSettingFormItem';
import {
  EditableRowControlTable,
  EditableRowControlTableSuperTable,
} from '../../../../components/SearchEditorTableFormItem';
import type { DesignContextType, DesignValue, FieldProps } from '../../../../types';
import {
  actionsCodeStringToEvents,
  computeLabelValueColSpan,
  findDesignValueById,
  resolveI18nText,
  rulesSettingToRules,
} from '../../../../utils';

/**
 * 表格列编辑态：与 Select/renderDesign 一致的数据源 + Select 渲染。
 * value / onChange 由外层 Form.Item 注入或与 render 参数传入，不使用 defaultValue。
 */
function EditorTableColumnSelectEditor({
  fieldProps,
  style,
  actions,
  value,
  onChange,
}: {
  fieldProps: FieldProps;
  style: React.CSSProperties;
  actions: Record<string, (...args: any[]) => any>;
  value?: SelectProps['value'];
  onChange?: SelectProps['onChange'];
}) {
  return (
    <DesignPreviewFieldWithDataSource fieldProps={fieldProps} style={style} actions={actions}>
      {({ restFieldProps, options, loading, style: fieldStyle, actions: fieldActions }) => (
        <Select
          {...(restFieldProps as SelectProps)}
          loading={loading || undefined}
          options={options}
          style={{ width: '100%', ...fieldStyle }}
          {...fieldActions}
          value={value}
          onChange={onChange}
        />
      )}
    </DesignPreviewFieldWithDataSource>
  );
}

/**
 * createSubClass
 * @param _params
 * @returns
 */
function createSubClass(_params: {
  fieldProps: FieldProps;
  style: React.CSSProperties;
  actions: Record<string, (...args: any[]) => any>;
  lang: string;
  designContext: DesignContextType;
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

          const {
            actions: actionsConfig,
            rules: rulesConfig,
            ...editorSetting
          } = columnConfigconfig.editorSetting ?? {};

          const actions = actionsCodeStringToEvents({
            actions: actionsConfig ?? [],
            designContext: _params.designContext,
          });

          const rules = rulesSettingToRules((rulesConfig ?? []) as unknown as Rule[], _params.lang);

          const isSelect = columnConfigconfig?.editorType === 'select';

          return {
            title: resolveI18nText(columnConfigconfig?.title, _params.lang),
            dataIndex: columnConfigconfig?.field,
            key: columnConfigconfig?.field,
            align: columnConfigconfig?.align,
            width,
            $editable: isSelect
              ? {
                  editable: true,
                  type: 'custom',
                  render: ({ value }) => (
                    <EditorTableColumnSelectEditor
                      fieldProps={editorSetting}
                      style={_params.style}
                      actions={actions}
                      value={value}
                    />
                  ),
                  rules,
                }
              : {
                  editable: true,
                  type: columnConfigconfig?.editorType,
                  props: {
                    ...editorSetting,
                    ...actions,
                  },
                  rules,
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
          const designContext = useContext(DesignContext);

          return (
            <EditableRowControlTable
              subClass={createSubClass({
                fieldProps,
                style,
                actions,
                lang,
                designContext,
              })}
              fieldProps={fieldProps}
            />
          );
        }}
      </ValueDesign>
    ),
  };
}
