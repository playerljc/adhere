import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import I18nChangeFormItem from './I18nChangeFormItem';
import { InputEventsSelectStandardDict } from './InputEvents';
import NameFormItemWrapper from './NameFormItemWrapper';
import RulesSettingFormItem from './RulesSettingFormItem';
import { SlotEndLabel } from './SlotLabel';
import { Label, Value } from './TableGridLayout';
import { WhetherRadioHorizontalDict } from './Whether';

export type FormPropertyLabelSlotRef = {
  get: (key: string) => unknown;
  set: (key: string, value: unknown) => void;
};

/** 标签（含 i18n） */
export function buildFormPropertyLabelRow(slot: FormPropertyLabelSlotRef): DataItemRow {
  return {
    key: 'label',
    require: false,
    label: (
      <SlotEndLabel
        ref={(node) => {
          slot.set('label', node);
        }}
      >
        {Intl.get('label')}：
      </SlotEndLabel>
    ),
    value: (
      <Value>
        <Form.Item name="label">
          <I18nChangeFormItem getTriggerContainer={() => slot.get('label') as HTMLElement}>
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

/** 字段 name */
export function buildFormPropertyNameRow(): DataItemRow {
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

/** 是否隐藏 */
export function buildFormPropertyHiddenRow(): DataItemRow {
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

/** noStyle */
export function buildFormPropertyNoStyleRow(): DataItemRow {
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

/** 跨列 colSpan */
export function buildFormPropertyColSpanRow(): DataItemRow {
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

/** 充满父级 fill */
export function buildFormPropertyFillRow(): DataItemRow {
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

/** validateFirst */
export function buildFormPropertyValidateFirstRow(): DataItemRow {
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

/** validateTrigger */
export function buildFormPropertyValidateTriggerRow(): DataItemRow {
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

/** 设计视图中 label 是否显示必填星号 */
export function buildFormPropertyRequireRow(): DataItemRow {
  return {
    key: 'require',
    require: false,
    label: <Label>{Intl.get('required')}：</Label>,
    value: (
      <Value>
        <Form.Item name="require">
          <WhetherRadioHorizontalDict />
        </Form.Item>
      </Value>
    ),
  };
}

/** 校验规则 */
export function buildFormPropertyRulesRow(): DataItemRow {
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

/** valuePropName：纯文本输入（Rate / Slider 等） */
export function buildFormPropertyValuePropNamePlainInputRow(): DataItemRow {
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
