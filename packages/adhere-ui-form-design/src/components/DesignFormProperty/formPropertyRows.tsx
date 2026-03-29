import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';
import React from 'react';

import { InputEventsSelectStandardDict } from '../InputEvents';
import I18nChangeFormItem from '../I18nChangeFormItem';
import NameFormItemWrapper from '../NameFormItemWrapper';
import RulesSettingFormItem from '../RulesSettingFormItem';
import { SlotEndLabel } from '../SlotLabel';
import { Label, Value } from '../TableGridLayout';
import { ValuePropNameSelectStandardDict } from '../ValuePropName';
import { WhetherRadioHorizontalDict } from '../Whether';

export type FormPropertyItemsRef = {
  get: (key: string) => unknown;
  set: (key: string, node: HTMLElement | null) => void;
};

export function createFormPropertyLabelRow(ref: FormPropertyItemsRef): DataItemRow {
  const { get, set } = ref;
  return {
    key: 'label',
    require: false,
    label: (
      <SlotEndLabel
        ref={(node) => {
          set('label', node);
        }}
      >
        {Intl.get('label')}：
      </SlotEndLabel>
    ),
    value: (
      <Value>
        <Form.Item name="label">
          <I18nChangeFormItem getTriggerContainer={() => get('label') as HTMLElement}>
            {({ onChange, value }) => (
              <Input
                value={value}
                placeholder={Intl.get('label')}
                maxLength={200}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
              />
            )}
          </I18nChangeFormItem>
        </Form.Item>
      </Value>
    ),
  };
}

export function createFormPropertyNameRow(): DataItemRow {
  return {
    key: 'name',
    require: true,
    label: <Label>{Intl.get('name')}：</Label>,
    value: (
      <Value>
        <NameFormItemWrapper />
      </Value>
    ),
  };
}

export function createFormPropertyHiddenRow(): DataItemRow {
  return {
    key: 'hidden',
    require: false,
    label: <Label>{Intl.get('is_hidden')}：</Label>,
    value: (
      <Value>
        <Form.Item name="hidden">
          <WhetherRadioHorizontalDict />
        </Form.Item>
      </Value>
    ),
  };
}

export function createFormPropertyNoStyleRow(): DataItemRow {
  return {
    key: 'noStyle',
    require: false,
    label: <Label>{Intl.get('no_style')}：</Label>,
    value: (
      <Value>
        <Form.Item name="noStyle">
          <WhetherRadioHorizontalDict />
        </Form.Item>
      </Value>
    ),
  };
}

export function createFormPropertyValuePropNameSelectRow(): DataItemRow {
  return {
    key: 'valuePropName',
    require: false,
    label: <Label>{Intl.get('value_propname')}：</Label>,
    value: (
      <Value>
        <Form.Item name="valuePropName">
          <ValuePropNameSelectStandardDict />
        </Form.Item>
      </Value>
    ),
  };
}

export function createFormPropertyValuePropNameInputRow(): DataItemRow {
  return {
    key: 'valuePropName',
    require: false,
    label: <Label>{Intl.get('value_propname')}：</Label>,
    value: (
      <Value>
        <Form.Item name="valuePropName">
          <Input placeholder="value" maxLength={50} />
        </Form.Item>
      </Value>
    ),
  };
}

export function createFormPropertyValidateFirstRow(): DataItemRow {
  return {
    key: 'validateFirst',
    require: false,
    label: <Label>{Intl.get('validate_first')}：</Label>,
    value: (
      <Value>
        <Form.Item name="validateFirst">
          <WhetherRadioHorizontalDict />
        </Form.Item>
      </Value>
    ),
  };
}

export function createFormPropertyColSpanRow(): DataItemRow {
  return {
    key: 'colSpan',
    require: false,
    label: <Label>{Intl.get('colspan')}：</Label>,
    value: (
      <Value>
        <Form.Item name="colSpan">
          <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('colspan')} />
        </Form.Item>
      </Value>
    ),
  };
}

export function createFormPropertyFillRow(): DataItemRow {
  return {
    key: 'fill',
    require: false,
    label: <Label>{Intl.get('fill')}：</Label>,
    value: (
      <Value>
        <Form.Item name="fill">
          <WhetherRadioHorizontalDict placeholder={Intl.get('fill')} />
        </Form.Item>
      </Value>
    ),
  };
}

export function createFormPropertyValidateTriggerRow(): DataItemRow {
  return {
    key: 'validateTrigger',
    require: false,
    label: <Label>{Intl.get('validate_trigger')}：</Label>,
    value: (
      <Value>
        <Form.Item name="validateTrigger">
          <InputEventsSelectStandardDict />
        </Form.Item>
      </Value>
    ),
  };
}

export function createFormPropertyRulesRow(): DataItemRow {
  return {
    key: 'rules',
    require: false,
    label: <Label>{Intl.get('rules')}：</Label>,
    value: (
      <Value>
        <Form.Item name="rules">
          <RulesSettingFormItem />
        </Form.Item>
      </Value>
    ),
  };
}
