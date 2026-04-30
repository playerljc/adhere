import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../components';
import type { DesignContextType, DesignValue } from '../../../types';
import { computeLabelValueColSpan, findDesignValueById, resolveI18nText } from '../../../utils';
import SendSMSField from './SendSMSField';

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
        {({ fieldProps, style, actions, lang, codeInputActions, sendButtonActions, countdownActions }) => (
          <div style={style ?? {}} {...actions}>
            <SendSMSField
              rootDesignValue={designValue}
              placeholder={resolveI18nText(fieldProps.placeholder as any, lang) as any}
              countdownSeconds={fieldProps.countdownSeconds}
              sendApi={fieldProps.sendApi}
              disabled={fieldProps.disabled}
              readOnly={fieldProps.readOnly}
              codeInputActions={codeInputActions}
              sendButtonActions={sendButtonActions}
              countdownActions={countdownActions}
              defaultValue={formItemProps?.initialValue as any}
            />
          </div>
        )}
      </ValueDesign>
    ),
  };
}

