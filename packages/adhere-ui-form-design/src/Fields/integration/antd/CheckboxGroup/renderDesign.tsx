import { Checkbox, Col, Row } from 'antd';
import React, { type ComponentProps } from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { DesignPreviewFieldWithDataSource, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue, FieldProps, FormItemProps } from '../../../../types';
import type { DesignFieldDataSourceOption } from '../../../../utils';
import { computeLabelValueColSpan, findDesignValueById, getDesignFormControlProps } from '../../../../utils';

type CheckboxGroupProps = ComponentProps<typeof Checkbox.Group>;

type LayoutFieldProps = FieldProps & {
  optionWrap?: boolean;
  columnCount?: number;
};

function toCheckboxOptions(options: DesignFieldDataSourceOption[]): CheckboxGroupProps['options'] {
  return options.map((o) => ({
    label: o.label,
    value: o.value,
  }));
}

function renderCheckboxGroupBody(
  optionWrap: boolean | undefined,
  columnCount: number | undefined,
  options: DesignFieldDataSourceOption[],
  groupProps: Omit<CheckboxGroupProps, 'options' | 'children'>,
  formItemProps: FormItemProps | undefined,
  injected: {
    value?: unknown;
    onChange?: (...args: unknown[]) => void;
    checked?: boolean;
    targetKeys?: string[];
    previewValue?: unknown;
  },
) {
  const controlProps = getDesignFormControlProps(formItemProps, injected);
  const cols =
    !optionWrap && columnCount != null && Number(columnCount) > 0
      ? Math.min(24, Math.max(1, Math.floor(Number(columnCount))))
      : 0;
  const span = cols > 0 ? 24 / cols : undefined;

  if (optionWrap) {
    return (
      <Checkbox.Group {...groupProps} {...controlProps}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, width: '100%' }}>
          {options.map((o) => (
            <Checkbox key={String(o.value)} value={o.value}>
              {o.label}
            </Checkbox>
          ))}
        </div>
      </Checkbox.Group>
    );
  }

  if (cols > 0 && span) {
    return (
      <Checkbox.Group {...groupProps} {...controlProps}>
        <Row gutter={[8, 8]} style={{ width: '100%' }}>
          {options.map((o) => (
            <Col key={String(o.value)} span={span}>
              <Checkbox value={o.value}>{o.label}</Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    );
  }

  return (
    <Checkbox.Group
      {...groupProps}
      options={toCheckboxOptions(options)}
      {...controlProps}
    />
  );
}

/**
 * renderDesign �?Checkbox.Group，选项来自数据源；布局参�?antd 文档中的 Group + Row/Col 与换行排�? */
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

  const root = getDesignValue();
  const parent = parentId && root ? findDesignValueById(parentId, root) : undefined;

  const { labelColSpan, valueColSpan } = computeLabelValueColSpan(parent, formItemProps);

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps, style, actions, value, onChange, checked, targetKeys }) => (
          <DesignPreviewFieldWithDataSource
            fieldProps={fieldProps}
            formItemProps={formItemProps}
            style={style ?? {}}
            actions={actions}
            value={value}
            onChange={onChange}
          >
            {({
              restFieldProps,
              options,
              style: fieldStyle,
              actions: fieldActions,
              previewValue,
            }) => {
              const { optionWrap, columnCount, ...groupRest } = restFieldProps as LayoutFieldProps;
              const groupProps: Omit<CheckboxGroupProps, 'options' | 'children'> = {
                ...(groupRest as Omit<CheckboxGroupProps, 'options' | 'children'>),
                style: { width: '100%', ...(fieldStyle ?? {}) },
                ...fieldActions,
              };

              return renderCheckboxGroupBody(
                optionWrap,
                columnCount,
                options,
                groupProps,
                formItemProps,
                { value, onChange, checked, targetKeys, previewValue },
              );
            }}
          </DesignPreviewFieldWithDataSource>
        )}
      </ValueDesign>
    ),
  };
}
