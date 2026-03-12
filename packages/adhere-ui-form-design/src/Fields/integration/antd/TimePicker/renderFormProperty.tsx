import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  InputEventsSelectStandardDict,
  NameFormItemWrapper,
  RulesSettingFormItem,
  SlotEndLabel,
  ValuePropNameSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import I18nChangeFormItem from '../../../../components/I18nChangeFormItem';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

const { useItemsRef } = Hooks;

export function FormProperty({
  designValue,
  renderFormItems,
}: {
  designValue: DesignValueProps;
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) {
  const [form] = Form.useForm();
  const { get, set } = useItemsRef();
  const { getActiveFieldId, setFormItemProps } = useContext(DesignContext);
  const { formItemProps } = designValue;
  const activeFieldId = getActiveFieldId();

  const defaultFormItems: DataItemRow[] = [
    {
      key: 'label',
      require: false,
      label: <SlotEndLabel ref={(node) => set('label', node)}>{Intl.get('label')}：</SlotEndLabel>,
      value: (
        <Value>
          <Form.Item name="label">
            <I18nChangeFormItem getTriggerContainer={() => get('label') as HTMLElement}>
              {({ onChange, value }) => (
                <Input
                  value={value}
                  placeholder={Intl.get('label')}
                  maxLength={200}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            </I18nChangeFormItem>
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'name',
      require: true,
      label: <Label>{Intl.get('name')}：</Label>,
      value: (
        <Value>
          <NameFormItemWrapper />
        </Value>
      ),
    },
    {
      key: 'value',
      require: true,
      label: <Label>{Intl.get('initial_value')}：</Label>,
      value: (
        <Value>
          <Form.Item name="value">
            <Input placeholder={Intl.get('initial_value')} />
          </Form.Item>
        </Value>
      ),
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  function onFieldsChange() {
    setFormItemProps(activeFieldId as string, { ...form.getFieldsValue() });
  }

  useEffect(() => {
    form.setFieldsValue(formItemProps);
  }, [formItemProps]);

  return (
    <Form name="antTimePickerFormProperty" form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: renderFormItems ? renderFormItems(defaultFormItems) : defaultFormItems,
          },
        ]}
      />
    </Form>
  );
}

export function renderFormProperty(props: DesignValueProps): ReactNode {
  return <FormProperty designValue={props} />;
}
