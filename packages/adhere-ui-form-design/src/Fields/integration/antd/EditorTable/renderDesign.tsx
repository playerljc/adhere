import React, { useContext, useMemo, useRef } from 'react';

import DateDisplay, { type DateValue } from '@baifendian/adhere-ui-datedisplay';
import SearchTable from '@baifendian/adhere-ui-searchtable';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Util from '@baifendian/adhere-util';
import { Select, type SelectProps } from 'antd';
import dayjs from 'dayjs';

import { DesignContext } from '../../../../Design/Context';
import {
  DesignPreviewFieldWithDataSource,
  FieldWithTip,
  LabelDesign,
  ValueDesign,
  WithDesignFieldDataSourceOptions,
} from '../../../../components';
import type {
  TableColumnEditorType,
  TableColumnSettingItem,
} from '../../../../components/TableColumnSettingFormItem';
import { DatePickerEditorTypes } from '../../../../components/TableColumnSettingFormItem/editorSetting/constants';
import type { Rule } from '../../../../components/RulesSettingFormItem';
import {
  EditableRowControlTable,
  EditableRowControlTableSuperTable,
} from '../../../../components/SearchEditorTableFormItem';
import type { DesignContextType, DesignValue, DesignValueProps, FieldProps } from '../../../../types';
import {
  actionsCodeStringToEvents,
  computeLabelValueColSpan,
  findDesignValueById,
  isDesktop,
  resolveI18nText,
  rulesSettingToRules,
} from '../../../../utils';
import {
  EDITOR_TABLE_MOBILE_COLUMN_MIN_WIDTH,
  EDITOR_TABLE_MOBILE_OPERATION_COLUMN_WIDTH,
} from './constant';
import { resolveFieldPropsForDesignEditor } from './resolveFieldPropsForDesignEditor';

const popupEditorTypes = new Set<TableColumnEditorType>([
  'select',
  'timePicker',
  'rangePicker',
  'colorPicker',
  ...Array.from(DatePickerEditorTypes),
]);

const dateTimeDisplayEditorTypes = new Set<TableColumnEditorType>([
  'datePicker',
  'birthdayPicker',
  'boundedTimePicker',
  'timePicker',
  'rangePicker',
]);

function getPopupContainerProps() {
  return { getPopupContainer: () => document.body };
}

function getEditorPopupProps(editorType?: TableColumnEditorType) {
  if (!editorType || !popupEditorTypes.has(editorType)) {
    return {};
  }
  return getPopupContainerProps();
}

function resolveColumnWidth(columnConfig: TableColumnSettingItem): number | string | Record<string, never> {
  const { widthMode, widthValue } = columnConfig;

  if (!widthMode || widthMode === 'adaptive') {
    return {};
  }

  if (widthMode === 'auto') {
    return 'auto';
  }

  if (widthMode === 'percent' && widthValue != null) {
    return `${widthValue}%`;
  }

  if (widthMode === 'number' && widthValue != null) {
    return widthValue;
  }

  return {};
}

function resolveEditorSetting(
  editorSetting: TableColumnSettingItem['editorSetting'],
  lang: string,
) {
  const { actions: _actions, rules: _rules, placeholder, ...rest } = editorSetting ?? {};

  const resolved: FieldProps = { ...rest };

  if (placeholder !== undefined) {
    resolved.placeholder = resolveI18nText(placeholder, lang);
  }

  return {
    actionsConfig: _actions,
    rulesConfig: _rules,
    resolvedEditorSetting: resolved,
  };
}

function buildSelectEditableConfig({
  resolvedEditorSetting,
  style,
  actions,
  rules,
}: {
  resolvedEditorSetting: FieldProps;
  style: React.CSSProperties;
  actions: Record<string, (...args: any[]) => any>;
  rules: ReturnType<typeof rulesSettingToRules>;
}) {
  return {
    render: (value: unknown) => (
      <EditorTableColumnSelectLabel fieldProps={resolvedEditorSetting} value={value} />
    ),
    $editable: {
      editable: true,
      type: 'custom' as const,
      render: () => (
        <EditorTableColumnSelectEditor
          fieldProps={resolvedEditorSetting}
          style={style}
          actions={actions}
        />
      ),
      rules,
    },
  };
}

function resolveEditableType(editorType?: TableColumnEditorType): TableColumnEditorType | undefined {
  if (editorType === 'birthdayPicker') {
    return 'datePicker';
  }
  return editorType;
}

function buildBirthdayPickerProps(editorProps: FieldProps): FieldProps {
  return {
    ...editorProps,
    disabledDate: (current) =>
      !!current && (current.isSame(dayjs(), 'day') || current.isAfter(dayjs(), 'day')),
  };
}

function resolveDateDisplayFormat(resolvedEditorSetting: FieldProps): string {
  const format = resolvedEditorSetting.format;
  if (typeof format === 'string' && format.trim()) {
    return format.trim();
  }
  return 'L';
}

function buildDateDisplayColumnRender({
  format,
  editorType,
}: {
  format: string;
  editorType?: TableColumnEditorType;
}) {
  if (editorType === 'rangePicker') {
    return (value: unknown) => {
      if (!Array.isArray(value) || value.length !== 2) {
        return null;
      }

      return (
        <>
          <DateDisplay.DateDisplay format={format} value={value[0] as DateValue} />
          {' ~ '}
          <DateDisplay.DateDisplay format={format} value={value[1] as DateValue} />
        </>
      );
    };
  }

  return (value: unknown) => (
    <DateDisplay.DateDisplay format={format} value={value as DateValue} />
  );
}

function buildDefaultEditableConfig({
  editorType,
  editorProps,
  rules,
}: {
  editorType?: TableColumnEditorType;
  editorProps: FieldProps;
  rules: ReturnType<typeof rulesSettingToRules>;
}) {
  return {
    $editable: {
      editable: true,
      type: resolveEditableType(editorType),
      props: editorProps,
      rules,
    },
  };
}

function buildEditorTableColumn({
  columnConfig,
  lang,
  designContext,
  style,
}: {
  columnConfig: TableColumnSettingItem;
  lang: string;
  designContext: DesignContextType;
  style: React.CSSProperties;
}) {
  const { actionsConfig, rulesConfig, resolvedEditorSetting } = resolveEditorSetting(
    columnConfig.editorSetting,
    lang,
  );

  const actions = actionsCodeStringToEvents({
    actions: actionsConfig ?? [],
    designContext,
  });

  const rules = rulesSettingToRules((rulesConfig ?? []) as unknown as Rule[], lang);
  const editorType = columnConfig.editorType;
  const baseEditorProps = {
    ...resolvedEditorSetting,
    ...actions,
    ...getEditorPopupProps(editorType),
  };
  const editorProps =
    editorType === 'birthdayPicker' ? buildBirthdayPickerProps(baseEditorProps) : baseEditorProps;

  const baseColumn = {
    title: resolveI18nText(columnConfig.title, lang),
    dataIndex: columnConfig.field,
    key: columnConfig.field,
    align: columnConfig.align,
    width: resolveColumnWidth(columnConfig),
  };

  if (editorType === 'select') {
    return {
      ...baseColumn,
      ...buildSelectEditableConfig({ resolvedEditorSetting, style, actions, rules }),
    };
  }

  const dateDisplayRender =
    editorType && dateTimeDisplayEditorTypes.has(editorType)
      ? buildDateDisplayColumnRender({
          format: resolveDateDisplayFormat(resolvedEditorSetting),
          editorType,
        })
      : undefined;

  return {
    ...baseColumn,
    ...(dateDisplayRender ? { render: dateDisplayRender } : {}),
    ...buildDefaultEditableConfig({ editorType, editorProps, rules }),
  };
}

/**
 * Select 列只读态：按 options 将 value 显示为 label
 */
function EditorTableColumnSelectLabel({
  fieldProps,
  value,
}: {
  fieldProps: FieldProps;
  value?: unknown;
}) {
  return (
    <WithDesignFieldDataSourceOptions fieldProps={fieldProps}>
      {({ options }) => {
        const matched = options.find((item) => item.value === value);
        return <>{matched?.label ?? value ?? ''}</>;
      }}
    </WithDesignFieldDataSourceOptions>
  );
}

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
    <DesignPreviewFieldWithDataSource
      fieldProps={fieldProps}
      style={style}
      actions={actions}
      value={value}
      onChange={onChange}
    >
      {({ restFieldProps, options, loading, style: fieldStyle, actions: fieldActions, value: formValue, onChange: formOnChange }) => (
        <Select
          {...(restFieldProps as SelectProps)}
          loading={loading || undefined}
          options={options}
          style={{ width: '100%', ...fieldStyle }}
          {...fieldActions}
          {...getPopupContainerProps()}
          value={formValue as SelectProps['value']}
          onChange={formOnChange}
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
  isMobile: boolean;
};

/**
 * createSubClass
 * @description 通过 getParams 读取最新配置，避免父组件刷新时因 subClass 引用变化导致表格重新挂载
 */
function createSubClass(
  getParams: () => EditorTableDesignParams,
): typeof EditableRowControlTableSuperTable {
  return class extends EditableRowControlTableSuperTable {
    /**
     * getEllipsisCount
     * @description 获取省略显示的最大数量
     */
    getEllipsisCount() {
      if (getParams().isMobile) return 1;

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
      if (getParams()?.fieldProps?.noRule === '1') {
        return SearchTable.Table.NUMBER_GENERATOR_RULE_ALONE;
      }
      return SearchTable.Table.NUMBER_GENERATOR_RULE_CONTINUITY;
    }

    getColumns() {
      const { fieldProps, style, lang, designContext, isMobile } = getParams();
      const columnSetting = fieldProps?.columnSetting ?? [];
      const optionsDataIndex = this.getOptionsColumnDataIndex();
      const columns = super.getColumns().map((column) => {
        if (!isMobile || column.dataIndex !== optionsDataIndex) {
          return column;
        }

        return {
          ...column,
          width: EDITOR_TABLE_MOBILE_OPERATION_COLUMN_WIDTH,
        };
      });

      return [
        ...columnSetting.map((columnConfig) =>
          buildEditorTableColumn({ columnConfig, lang, designContext, style }),
        ),
        ...columns,
      ];
    }
  };
}

function EditorTableDesignPreview({
  designValueProps,
  style,
  actions,
  lang,
  designContext,
  value,
  onChange,
}: Omit<EditorTableDesignParams, 'fieldProps' | 'isMobile'> & {
  designValueProps: DesignValueProps;
  value?: Record<string, any>[];
  onChange?: (nextValue: Record<string, any>[]) => void;
}) {
  const terminal = designContext.getTerminal();
  const isMobile = !isDesktop(terminal);
  const fieldProps = useMemo(
    () => resolveFieldPropsForDesignEditor(designValueProps, terminal),
    [designValueProps, terminal],
  );

  const paramsRef = useRef<EditorTableDesignParams>({
    fieldProps,
    style,
    actions,
    lang,
    designContext,
    isMobile,
  });
  paramsRef.current = { fieldProps, style, actions, lang, designContext, isMobile };

  const subClass = useMemo(() => createSubClass(() => paramsRef.current), []);

  return (
    <EditableRowControlTable
      subClass={subClass}
      fieldProps={fieldProps}
      value={value}
      onChange={onChange}
    />
  );
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
        {({ fieldProps, style, actions, lang }) => {
          const designContext = useContext(DesignContext);

          return (
            <FieldWithTip tip={fieldProps.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
              <EditorTableDesignPreview
                designValueProps={value.props}
                style={style}
                actions={actions}
                lang={lang}
                designContext={designContext}
              />
            </FieldWithTip>
          );
        }}
      </ValueDesign>
    ),
  };
}
