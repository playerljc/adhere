import React, { useContext, useMemo, useRef } from 'react';

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

type EditorTableDesignParams = {
  fieldProps: FieldProps;
  style: React.CSSProperties;
  actions: Record<string, (...args: any[]) => any>;
  lang: string;
  designContext: DesignContextType;
};

/**
 * createSubClass
 * @description 通过 getParams 读取最新配置，避免父组件刷新时因 subClass 引用变化导致表格重新挂载
 */
function createSubClass(
  getParams: () => EditorTableDesignParams,
): typeof EditableRowControlTableSuperTable {
  return class extends EditableRowControlTableSuperTable {
    getEllipsisCount() {
      return 5;
    }

    onAdd() {
      const { fieldProps } = getParams();

      return super.onAdd(
        (fieldProps.columnSetting ?? []).reduce(
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
      return getParams()?.fieldProps?.pagination;
    }

    getTableDensity() {
      const { fieldProps } = getParams();
      return fieldProps?.size ?? super.getTableDensity();
    }

    isShowNumber() {
      return getParams()?.fieldProps?.no;
    }

    getNumberGeneratorRule() {
      return getParams()?.fieldProps?.noRule === '1'
        ? SearchTable.Table.NUMBER_GENERATOR_RULE_ALONE
        : SearchTable.Table.NUMBER_GENERATOR_RULE_CONTINUITY;
    }

    getColumns() {
      const columns = super.getColumns();
      const { fieldProps, style, lang, designContext } = getParams();
      const columnSetting = fieldProps?.columnSetting ?? [];

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
            designContext,
          });

          const rules = rulesSettingToRules((rulesConfig ?? []) as unknown as Rule[], lang);

          const isSelect = columnConfigconfig?.editorType === 'select';

          return {
            title: resolveI18nText(columnConfigconfig?.title, lang),
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
                      style={style}
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

function EditorTableDesignPreview({
  fieldProps,
  style,
  actions,
  lang,
  designContext,
}: EditorTableDesignParams) {
  const paramsRef = useRef<EditorTableDesignParams>({
    fieldProps,
    style,
    actions,
    lang,
    designContext,
  });
  paramsRef.current = { fieldProps, style, actions, lang, designContext };

  const subClass = useMemo(() => createSubClass(() => paramsRef.current), []);

  return <EditableRowControlTable subClass={subClass} fieldProps={fieldProps} />;
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
            <EditorTableDesignPreview
              fieldProps={fieldProps}
              style={style}
              actions={actions}
              lang={lang}
              designContext={designContext}
            />
          );
        }}
      </ValueDesign>
    ),
  };
}
