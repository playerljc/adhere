import React, { type ReactNode } from 'react';

import { Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import {
  FormPropertyShell,
  mapSliderFormPropertyFormValues,
  buildFormPropertyColSpanRow,
  buildFormPropertyFillRow,
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

/** FormProperty for Slider - value is number (single mode) or [number, number] (range mode). We use one number for initial value. */
export function FormProperty({
  designValue,
  renderFormItems,
}: {
  designValue: DesignValueProps;
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) {
  const { get, set } = useItemsRef();

  const { fieldProps } = designValue;
  const min = (fieldProps as { min?: number })?.min ?? 0;
  const max = (fieldProps as { max?: number })?.max ?? 100;

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
            <InputNumberInteger placeholder={Intl.get('initial_value')} min={min} max={max} />
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
    buildFormPropertyFillRow(),
    buildFormPropertyValidateTriggerRow(),
    buildFormPropertyRulesRow(),
  ];

  return (
    <FormPropertyShell
      formName="antSliderFormProperty"
      designValue={designValue}
      renderFormItems={renderFormItems}
      rows={rows}
      mapFormValuesFromFormItemProps={mapSliderFormPropertyFormValues}
    />
  );
}

export function renderFormProperty(props: DesignValueProps): ReactNode {
  return <FormProperty designValue={props} />;
}
