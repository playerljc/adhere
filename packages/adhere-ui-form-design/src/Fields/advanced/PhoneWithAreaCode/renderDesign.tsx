import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../components';
import type { DesignContextType, DesignValue } from '../../../types';
import {
  computeLabelValueColSpan,
  findDesignValueById,
  getDesignFormControlProps,
  resolveI18nText,
} from '../../../utils';
import { useDesignPhoneAreaCodeOptions } from '../../../utils/useDesignPhoneAreaCodeOptions';
import PhoneWithAreaCodeField from './PhoneWithAreaCodeField';

function PhoneWithAreaCodeDesignPreview({
  fieldProps,
  formItemProps,
  style,
  actions,
  areaCodeActions,
  phoneInputActions,
  lang,
  value,
  onChange,
  checked,
  targetKeys,
}: any) {
  const { source, options, loading } = useDesignPhoneAreaCodeOptions(fieldProps, 'areaCodeOptionsSource');

  return (
    <PhoneWithAreaCodeField
      style={style ?? {}}
      actions={actions}
      areaCodeActions={areaCodeActions}
      phoneInputActions={phoneInputActions}
      defaultCode={fieldProps.defaultCode}
      allowClear={fieldProps.allowClear}
      disabled={fieldProps.disabled}
      placeholder={resolveI18nText(fieldProps.placeholder as any, lang) as string}
      {...getDesignFormControlProps(formItemProps, { value, onChange, checked, targetKeys })}
      areaCodeOptions={source ? options : undefined}
      areaCodeLoading={source?.type === 'dynamic' ? loading : false}
    />
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
        {({ fieldProps, style, actions, areaCodeActions, phoneInputActions, lang, value, onChange, checked, targetKeys }) => (
          <PhoneWithAreaCodeDesignPreview
            fieldProps={fieldProps}
            formItemProps={formItemProps}
            style={style}
            actions={actions}
            areaCodeActions={areaCodeActions}
            phoneInputActions={phoneInputActions}
            lang={lang}
            value={value}
            onChange={onChange}
            checked={checked}
            targetKeys={targetKeys}
          />
        )}
      </ValueDesign>
    ),
  };
}
