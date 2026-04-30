import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import { values } from '../../../Dict';
import { ActionsFormItem } from '../../../components';
import { ActionItem } from '../../../components/ActionsFormItem';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';

/**
 * ActionsProperty
 *
 * @description PhoneWithAreaCode：左侧区号选择与右侧号码输入分别配置事件
 */
export function ActionsProperty({
  designValue,
  areaCodeActions,
  phoneInputActions,
}: {
  designValue: DesignValueProps;
  areaCodeActions: ActionItem[];
  phoneInputActions: ActionItem[];
}) {
  const [form] = Form.useForm();

  const { getActiveFieldId, setActionsProps } = useContext(DesignContext);

  const { actionsProps } = designValue;

  function onFieldsChange() {
    const next = form.getFieldsValue();
    setActionsProps(getActiveFieldId() as string, {
      ...actionsProps,
      ...next,
    });
  }

  useEffect(() => {
    form.setFieldsValue(actionsProps);
  }, [actionsProps, form]);

  return (
    <Form name="phoneWithAreaCodeActionsProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'areaCodeActions',
                require: false,
                label: <Label>{Intl.get('phone_area_code_select_actions')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="areaCodeActions">
                      <ActionsFormItem actions={areaCodeActions} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'phoneInputActions',
                require: false,
                label: <Label>{Intl.get('phone_number_input_actions')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="phoneInputActions">
                      <ActionsFormItem actions={phoneInputActions} />
                    </Form.Item>
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </Form>
  );
}

export function renderActionsProperty(props: DesignValueProps): ReactNode {
  return (
    <ActionsProperty
      designValue={props}
      areaCodeActions={(values.PhoneAreaCodeAreaEvents?.value ?? []) as ActionItem[]}
      phoneInputActions={(values.InputEvents?.value ?? []) as ActionItem[]}
    />
  );
}
