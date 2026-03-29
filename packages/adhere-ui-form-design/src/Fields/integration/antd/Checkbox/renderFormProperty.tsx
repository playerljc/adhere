import React, { type ReactNode } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
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
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

const { useItemsRef } = Hooks;

/** FormProperty for Checkbox - valuePropName "checked", initial value boolean */
export function FormProperty({
  designValue,
  renderFormItems,
}: {
  designValue: DesignValueProps;
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) {
  const { get, set } = useItemsRef();

  const rows: DataItemRow[] = [
    buildFormPropertyLabelRow({ get, set }),
    buildFormPropertyNameRow(),
    {
      key: 'initialValue',
      require: true,
      label: <Label>{Intl.get('initial_checked')}：</Label>,
      value: (
        <Value>
          <Form.Item name="initialValue">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    buildFormPropertyRequireRow(),
    buildFormPropertyHiddenRow(),
    buildFormPropertyNoStyleRow(),
    buildFormPropertyColSpanRow(),
    buildFormPropertyValidateFirstRow(),
    buildFormPropertyValidateTriggerRow(),
    buildFormPropertyRulesRow(),
  ];

  return (
    <FormPropertyShell
      formName="antCheckboxFormProperty"
      designValue={designValue}
      renderFormItems={renderFormItems}
      rows={rows}
    />
  );
}

export function renderFormProperty(props: DesignValueProps): ReactNode {
  return <FormProperty designValue={props} />;
}
