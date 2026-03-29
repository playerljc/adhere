import { Col, Radio, type RadioGroupProps, Row } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { DesignPreviewFieldWithDataSource, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue, FieldProps } from '../../../../types';
import type { DesignFieldDataSourceOption } from '../../../../utils';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';

type LayoutFieldProps = FieldProps & {
  optionWrap?: boolean;
  columnCount?: number;
  optionType?: 'default' | 'button';
};

function toRadioOptions(
  options: DesignFieldDataSourceOption[],
): NonNullable<RadioGroupProps['options']> {
  return options.map((o) => ({
    label: o.label,
    value: o.value,
  }));
}

function renderRadioGroupBody(
  optionWrap: boolean | undefined,
  columnCount: number | undefined,
  options: DesignFieldDataSourceOption[],
  groupProps: Omit<RadioGroupProps, 'options' | 'children'>,
  previewValue: unknown,
  optionType: 'default' | 'button',
) {
  const cols =
    !optionWrap && columnCount != null && Number(columnCount) > 0
      ? Math.min(24, Math.max(1, Math.floor(Number(columnCount))))
      : 0;
  const span = cols > 0 ? 24 / cols : undefined;
  const OptionTag = optionType === 'button' ? Radio.Button : Radio;

  if (optionWrap) {
    return (
      <Radio.Group {...groupProps} defaultValue={previewValue as RadioGroupProps['defaultValue']}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, width: '100%' }}>
          {options.map((o) => (
            <OptionTag key={String(o.value)} value={o.value}>
              {o.label}
            </OptionTag>
          ))}
        </div>
      </Radio.Group>
    );
  }

  if (cols > 0 && span) {
    return (
      <Radio.Group {...groupProps} defaultValue={previewValue as RadioGroupProps['defaultValue']}>
        <Row gutter={[8, 8]} style={{ width: '100%' }}>
          {options.map((o) => (
            <Col key={String(o.value)} span={span}>
              <OptionTag value={o.value}>{o.label}</OptionTag>
            </Col>
          ))}
        </Row>
      </Radio.Group>
    );
  }

  return (
    <Radio.Group
      {...groupProps}
      options={toRadioOptions(options)}
      defaultValue={previewValue as RadioGroupProps['defaultValue']}
    />
  );
}

/**
 * renderDesign �?Radio.Group，选项来自数据源；布局参�?antd 文档
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
        {({ fieldProps, style, actions }) => (
          <DesignPreviewFieldWithDataSource
            fieldProps={fieldProps}
            formItemProps={formItemProps}
            style={style ?? {}}
            actions={actions}
          >
            {({
              restFieldProps,
              options,
              style: fieldStyle,
              actions: fieldActions,
              previewValue,
            }) => {
              const {
                optionWrap,
                columnCount,
                optionType = 'default',
                ...groupRest
              } = restFieldProps as LayoutFieldProps;
              const groupProps: Omit<RadioGroupProps, 'options' | 'children'> = {
                ...(groupRest as Omit<RadioGroupProps, 'options' | 'children'>),
                style: { width: '100%', ...(fieldStyle ?? {}) },
                ...fieldActions,
              };

              return renderRadioGroupBody(
                optionWrap,
                columnCount,
                options,
                groupProps,
                previewValue,
                optionType,
              );
            }}
          </DesignPreviewFieldWithDataSource>
        )}
      </ValueDesign>
    ),
  };
}
