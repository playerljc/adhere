import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  InputEventsSelectStandardDict,
  RulesSettingFormItem,
  SlotEndLabel,
  ValuePropNameSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import I18nChangeFormItem from '../../../../components/I18nChangeFormItem';
import PropertiesGridLayout, { Label, Value } from '../../../../components/PropertiesGridLayout';
import type { DesignValueProps } from '../../../../types';

const { useItemsRef } = Hooks;

/**
 * FormProperty
 *
 * @description
 *
 * @param {DesignValueProps} props
 */
function FormProperty(props: DesignValueProps) {
  // 表单的instance
  const [form] = Form.useForm();

  const { get, set } = useItemsRef();

  const {
    // 获取当前激活的控件的id(也就是Editor中选中的控件)
    getActiveFieldId,
    // 设置控件的属性
    setFormItemProps,
  } = useContext(DesignContext);

  const { formItemProps } = props;

  function onFieldsChange() {
    const values = form.getFieldsValue();

    setFormItemProps(getActiveFieldId() as string, {
      ...values,
    });
  }

  useEffect(() => {
    form.setFieldsValue(formItemProps);
  }, [formItemProps]);

  return (
    <Form name="antInputFormProperty" form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: [
              {
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
              },
              {
                key: 'name',
                require: true,
                label: <Label>{Intl.get('name')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="name">
                      <Input placeholder={Intl.get('name')} />
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
                    <Form.Item name="hidden" initValue={false}>
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
                    <Form.Item name="noStyle" initValue={false}>
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
                    <Form.Item name="valuePropName" initValue="value">
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
                    <Form.Item name="validateFirst" initValue={false}>
                      <WhetherRadioHorizontalDict />
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
                    <Form.Item name="validateTrigger" initValue="onChange">
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
            ],
          },
        ]}
      ></PropertiesGridLayout>
    </Form>
  );
}
/**
 * renderFormProperty
 * @description 对表单的渲染
 * @param props
 */
export function renderFormProperty(props: DesignValueProps): ReactNode {
  return <FormProperty {...props} />;
}
