import React, { type ReactNode } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import {
  FormPropertyShell,
  buildFormPropertyValuePropNamePlainInputRow,
  buildFormPropertyColSpanRow,
  buildFormPropertyHiddenRow,
  buildFormPropertyLabelRow,
  buildFormPropertyNameRow,
  buildFormPropertyNoStyleRow,
  buildFormPropertyRequireRow,
  buildFormPropertyRulesRow,
  buildFormPropertyValidateFirstRow,
  buildFormPropertyValidateTriggerRow,
} from '../../../components';
import type { DesignValueProps } from '../../../types';

const { useItemsRef } = Hooks;

export function FormProperty({
  designValue,
  renderFormItems,
}: {
  designValue: DesignValueProps;
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) {
  const { get, set } = useItemsRef();

  const rows: DataItemRow[] = [
    buildFormPropertyLabelRow({ get, set } as any),
    buildFormPropertyNameRow(),
    buildFormPropertyRequireRow(),
    buildFormPropertyHiddenRow(),
    buildFormPropertyNoStyleRow(),
    buildFormPropertyValuePropNamePlainInputRow(),
    buildFormPropertyValidateFirstRow(),
    buildFormPropertyColSpanRow(),
    buildFormPropertyValidateTriggerRow(),
    buildFormPropertyRulesRow(),
  ];

  return (
    <FormPropertyShell
      formName="imageCaptchaFormProperty"
      designValue={designValue}
      renderFormItems={renderFormItems}
      rows={rows}
    />
  );
}

export function renderFormProperty(props: DesignValueProps): ReactNode {
  return <FormProperty designValue={props} />;
}

