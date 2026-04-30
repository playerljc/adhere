import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../components';
import type { DesignContextType, DesignValue } from '../../../types';
import { computeLabelValueColSpan, findDesignValueById, resolveI18nText } from '../../../utils';
import { useDesignPhoneAreaCodeOptions } from '../../../utils/useDesignPhoneAreaCodeOptions';
import SendSMSField from './SendSMSField';

function SendSMSDesignPreview({
  rootDesignValue,
  fieldProps,
  style,
  actions,
  lang,
  codeInputActions,
  sendButtonActions,
  countdownActions,
  areaCodeActions,
  phoneInputActions,
  defaultValue,
}: any) {
  const { source, options, loading } = useDesignPhoneAreaCodeOptions(fieldProps, 'areaCodeOptionsSource');

  return (
    <div style={style ?? {}} {...actions}>
      <SendSMSField
        rootDesignValue={rootDesignValue}
        placeholder={resolveI18nText(fieldProps.placeholder as any, lang) as any}
        countdownSeconds={fieldProps.countdownSeconds}
        sendApi={fieldProps.sendApi}
        disabled={fieldProps.disabled}
        readOnly={fieldProps.readOnly}
        codeInputActions={codeInputActions}
        sendButtonActions={sendButtonActions}
        countdownActions={countdownActions}
        phoneProps={{
          defaultCode: fieldProps.defaultCode,
          allowClear: fieldProps.allowClear,
          placeholder: resolveI18nText(fieldProps.phonePlaceholder as any, lang) as any,
          areaCodeOptions: source ? options : undefined,
          areaCodeLoading: source?.type === 'dynamic' ? loading : false,
          areaCodeActions,
          phoneInputActions,
        }}
        defaultValue={defaultValue}
      />
    </div>
  );
}

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
        {({
          fieldProps,
          style,
          actions,
          lang,
          codeInputActions,
          sendButtonActions,
          countdownActions,
          areaCodeActions,
          phoneInputActions,
        }) => (
          <SendSMSDesignPreview
            rootDesignValue={designValue}
            fieldProps={fieldProps}
            style={style}
            actions={actions}
            lang={lang}
            codeInputActions={codeInputActions}
            sendButtonActions={sendButtonActions}
            countdownActions={countdownActions}
            areaCodeActions={areaCodeActions}
            phoneInputActions={phoneInputActions}
            defaultValue={formItemProps?.initialValue as any}
          />
        )}
      </ValueDesign>
    ),
  };
}

