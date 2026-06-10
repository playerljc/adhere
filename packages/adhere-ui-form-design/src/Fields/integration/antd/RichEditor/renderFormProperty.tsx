import React, { type ReactNode } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import {
  FormPropertyShell,
  ValuePropNameSelectStandardDict,
  buildFormPropertyColSpanRow,
  buildFormPropertyHiddenRow,
  buildFormPropertyLabelRow,
  buildFormPropertyNameRow,
  buildFormPropertyNoStyleRow,
  buildFormPropertyRequireRow,
  buildFormPropertyRulesRow,
  buildFormPropertyValidateFirstRow,
  buildFormPropertyValidateTriggerRow,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

const { useItemsRef } = Hooks;
const { TextArea } = Input;

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
      require: false,
      label: <Label>{Intl.get('initial_value')}：</Label>,
      value: (
        <Value>
          <Form.Item name="initialValue">
            <TextArea rows={4} placeholder={Intl.get('initial_value')} />
          </Form.Item>
        </Value>
      ),
    },
    buildFormPropertyRequireRow(),
    buildFormPropertyHiddenRow(),
    buildFormPropertyNoStyleRow(),
    {
      key: 'valuePropName',
      require: false,
      label: <Label>{Intl.get('value_propname')}：</Label>,
      value: (
        <Value>
          <Form.Item name="valuePropName">
            <ValuePropNameSelectStandardDict placeholder={Intl.get('value_propname')} />
          </Form.Item>
        </Value>
      ),
    },
    buildFormPropertyValidateFirstRow(),
    buildFormPropertyColSpanRow(),
    buildFormPropertyValidateTriggerRow(),
    buildFormPropertyRulesRow(),
  ];

  return (
    <FormPropertyShell
      formName="antRichEditorFormProperty"
      designValue={designValue}
      renderFormItems={renderFormItems}
      rows={rows}
    />
  );
}

export function renderFormProperty(props: DesignValueProps): ReactNode {
  return <FormProperty designValue={props} />;
}
