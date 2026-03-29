import React, { type CSSProperties, type ReactNode, useContext } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';

import { DesignContext } from '../Design/Context';
import { TableGridLayoutContext } from '../Fields/layout/TableGridLayout/Context';
import type { DesignValue, FieldProps, FormItemProps, StyleProps } from '../types';
import {
  actionsCodeStringToEvents,
  formItemToProps,
  getLabel,
  styleCodeStringToCSSProperties,
} from '../utils';
import DesignFieldWrapper from './DesignFieldWrapper';

const { Label, Value } = TableGridLayout;

export function LabelDesign({
  formItemProps,
  styleProps,
  className,
}: {
  formItemProps?: FormItemProps;
  styleProps?: StyleProps;
  className?: string;
}) {
  const ConfigProviderContext = useContext(ConfigProvider.Context);
  const { fieldProps } = useContext(TableGridLayoutContext);
  const lang = ConfigProviderContext.intl.lang!;
  const label = getLabel(formItemProps ?? {}, lang);
  const style = styleCodeStringToCSSProperties(styleProps?.labelStyles ?? '');

  let colSpan: number | undefined;
  if (formItemProps?.colSpan && fieldProps.layout === 'vertical') {
    colSpan = formItemProps.colSpan;
  }

  return (
    <Label
      className={className}
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
  const fill = formItemProps?.fill;

  return (
    <Value
      style={valueStyle ?? {}}
      // @ts-ignore
      colSpan={colSpan}
    >
      <DesignFieldWrapper id={id}>
        <Form.Item {...formProps} style={{ flex: fill ? '1' : 'none' }}>
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
