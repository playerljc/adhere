import { Input, type InputProps } from 'antd';
import React, { type CSSProperties, type ReactNode, useContext } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';

import { DesignContext } from '../../../../Design/Context';
import DesignFieldWrapper from '../../../../components/DesignFieldWrapper';
import {
  DesignContextType,
  DesignValue,
  FieldProps,
  FormItemProps,
  StyleProps,
} from '../../../../types';
import {
  actionsCodeStringToEvents,
  findDesignValueById,
  formItemToProps,
  getLabel,
  styleCodeStringToCSSProperties,
} from '../../../../utils';
import { TableGridLayoutContext } from '../../../layout/TableGridLayout/Context';

const { Label, Value } = TableGridLayout;

export function LabelDesign({
  formItemProps,
  styleProps,
}: {
  formItemProps?: FormItemProps;
  styleProps?: StyleProps;
}) {
  const ConfigProviderContext = useContext(ConfigProvider.Context);

  const { fieldProps } = useContext(TableGridLayoutContext);

  const lang = ConfigProviderContext.intl.lang!;

  const label = getLabel(formItemProps ?? {}, lang);

  const style = styleCodeStringToCSSProperties(styleProps?.labelStyles ?? '');

  let colSpan;

  if (formItemProps?.colSpan && fieldProps.layout === 'vertical') {
    colSpan = formItemProps.colSpan;
  }

  return (
    <Label
      style={style ?? {}}
      // @ts-ignore
      colSpan={colSpan}
    >
      {label}
    </Label>
  );
}

export function ValueDesign({
  value: {
    id,
    props: { formItemProps, fieldProps, styleProps, actionsProps },
  },
  children,
}: {
  value: DesignValue;
  children: (params: {
    fieldProps: FieldProps;
    style: CSSProperties;
    actions: Record<string, (...args: any[]) => any>;
  }) => ReactNode;
}) {
  const ConfigProviderContext = useContext(ConfigProvider.Context);

  const designContext = useContext(DesignContext);

  const lang = ConfigProviderContext.intl.lang!;

  const style = styleCodeStringToCSSProperties(styleProps?.styles ?? '');
  const valueStyle = styleCodeStringToCSSProperties(styleProps?.valueStyles ?? '');
  const actions = actionsCodeStringToEvents({
    actions: actionsProps?.actions ?? [],
    designContext,
  });
  const formProps = formItemToProps(formItemProps ?? {}, lang);
  const colSpan = formItemProps?.colSpan;

  return (
    <Value
      style={valueStyle ?? {}}
      //@ts-ignore
      colSpan={colSpan}
    >
      <DesignFieldWrapper id={id}>
        <Form.Item {...formProps}>
          {children({
            fieldProps,
            style,
            actions,
          })}
        </Form.Item>
      </DesignFieldWrapper>
    </Value>
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
  parentId: string;
  value: DesignValue;
  context: DesignContextType;
}): DataItemRow {
  const {
    id,
    props: { formItemProps, styleProps },
  } = value;

  const { getDesignValue } = context;

  const designValue = getDesignValue() as DesignValue;

  const parent = findDesignValueById(parentId, designValue) as DesignValue;

  let labelColSpan = 1;
  let valueColSpan = 1;

  if (!!parent) {
    const fieldProps = parent.props.fieldProps;
    if (formItemProps?.colSpan) {
      if (fieldProps.layout === 'vertical') {
        labelColSpan = formItemProps.colSpan;
        valueColSpan = formItemProps.colSpan;
      } else if (fieldProps.layout === 'horizontal') {
        valueColSpan = formItemProps.colSpan;
      }
    }
  }

  return {
    key: id,
    require: true,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps, style, actions }) => (
          <Input
            {...(fieldProps as InputProps)}
            style={style ?? {}}
            {...actions}
            value={(formItemProps as InputProps)?.value}
          />
        )}
      </ValueDesign>
    ),
  };
}
