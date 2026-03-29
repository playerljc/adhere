import React, { type ReactNode } from 'react';

import { Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import {
  FormPropertyShell,
  buildFormPropertyColSpanRow,
  buildFormPropertyHiddenRow,
  buildFormPropertyLabelRow,
  buildFormPropertyNameRow,
  buildFormPropertyNoStyleRow,
  buildFormPropertyRequireRow,
  buildFormPropertyRulesRow,
  buildFormPropertyValidateFirstRow,
  buildFormPropertyValidateTriggerRow,
  buildFormPropertyValuePropNamePlainInputRow,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

const { useItemsRef } = Hooks;

/** FormProperty for Rate - value is number (0 to count) */
export function FormProperty({
  designValue,
  renderFormItems,
}: {
  designValue: DesignValueProps;
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) {
  const { get, set } = useItemsRef();

  const { fieldProps } = designValue;
  const maxCount = (fieldProps as { count?: number })?.count ?? 5;

  const rows: DataItemRow[] = [
    buildFormPropertyLabelRow({ get, set }),
    buildFormPropertyNameRow(),
    {
      key: 'initialValue',
      require: true,
      label: <Label>{Intl.get('initial_value')}：</Label>,
      value: (
        <Value>
          <Form.Item name="initialValue">
            <InputNumberInteger.InputPositiveNumberInteger
              placeholder={Intl.get('initial_value')}
              min={0}
              max={maxCount}
            />
          </Form.Item>
        </Value>
      ),
    },
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
      formName="antRateFormProperty"
      designValue={designValue}
      renderFormItems={renderFormItems}
      rows={rows}
    />
  );
}

export function renderFormProperty(props: DesignValueProps): ReactNode {
  return <FormProperty designValue={props} />;
}
