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
    props: { formItemProps, fieldProps, styleProps, actionsProps, fieldActionTypes },
  },
  children,
}: {
  value: DesignValue;
  children: (params: {
    fieldProps: FieldProps;
    style: CSSProperties;
    actions: Record<string, (...args: any[]) => any>;
    /** PhoneWithAreaCode：左侧区号选择 */
    areaCodeActions?: Record<string, (...args: any[]) => any>;
    /** PhoneWithAreaCode：右侧号码输入 */
    phoneInputActions?: Record<string, (...args: any[]) => any>;
    /** SendSMS：验证码输入框事件 */
    codeInputActions?: Record<string, (...args: any[]) => any>;
    /** SendSMS：发送按钮事件 */
    sendButtonActions?: Record<string, (...args: any[]) => any>;
    /** SendSMS：倒计时事件 */
    countdownActions?: Record<string, (...args: any[]) => any>;
    lang: string;
  }) => ReactNode;
}) {
  const ConfigProviderContext = useContext(ConfigProvider.Context);
  const designContext = useContext(DesignContext);
  const lang = ConfigProviderContext.intl.lang!;

  const formDisabled = designContext.getFormDisabled?.();
  const finalFieldProps = (formDisabled === undefined
    ? fieldProps
    : {
        ...fieldProps,
        disabled: formDisabled,
      }) as FieldProps;

  const style = styleCodeStringToCSSProperties(styleProps?.styles ?? '');
  const valueStyle = styleCodeStringToCSSProperties(styleProps?.valueStyles ?? '');
  const actions = actionsCodeStringToEvents({
    actions: actionsProps?.actions ?? [],
    designContext,
  });
  const areaCodeActions = actionsCodeStringToEvents({
    actions: actionsProps?.areaCodeActions ?? [],
    designContext,
  });
  const phoneInputActions = actionsCodeStringToEvents({
    actions: actionsProps?.phoneInputActions ?? [],
    designContext,
  });
  const codeInputActions = actionsCodeStringToEvents({
    actions: (actionsProps as any)?.codeInputActions ?? [],
    designContext,
  });
  const sendButtonActions = actionsCodeStringToEvents({
    actions: (actionsProps as any)?.sendButtonActions ?? [],
    designContext,
  });
  const countdownActions = actionsCodeStringToEvents({
    actions: (actionsProps as any)?.countdownActions ?? [],
    designContext,
  });
  const formProps = formItemToProps(formItemProps ?? {}, lang);
  const colSpan =
    typeof formItemProps?.colSpan === 'number' && formItemProps.colSpan > 1
      ? formItemProps.colSpan
      : undefined;
  const fill = finalFieldProps?.fill;

  return (
    <Value
      style={valueStyle ?? {}}
      // @ts-ignore
      {...(colSpan != null ? { colSpan } : {})}
    >
      <DesignFieldWrapper
        id={id}
        fieldActionTypes={fieldActionTypes}
        style={{ width: '100%' }}
      >
        <Form.Item
          {...formProps}
          style={{
            width: '100%',
            minWidth: 0,
            flex: fill ? 1 : undefined,
          }}
        >
          {children({
            fieldProps: finalFieldProps,
            style,
            actions,
            areaCodeActions,
            phoneInputActions,
            codeInputActions,
            sendButtonActions,
            countdownActions,
            lang,
          })}
        </Form.Item>
      </DesignFieldWrapper>
    </Value>
  );
}
