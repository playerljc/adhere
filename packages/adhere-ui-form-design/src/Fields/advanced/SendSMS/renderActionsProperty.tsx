import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import { values } from '../../../Dict';
import { ActionsFormItem } from '../../../components';
import { ActionItem } from '../../../components/ActionsFormItem';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';

export function ActionsProperty({
  designValue,
  areaCodeActions,
  phoneInputActions,
  codeInputActions,
  sendButtonActions,
  countdownActions,
}: {
  designValue: DesignValueProps;
  areaCodeActions: ActionItem[];
  phoneInputActions: ActionItem[];
  codeInputActions: ActionItem[];
  sendButtonActions: ActionItem[];
  countdownActions: ActionItem[];
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
    <Form name="sendSMSActionsProperty" form={form} onFieldsChange={onFieldsChange}>
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
              {
                key: 'codeInputActions',
                require: false,
                label: <Label>{Intl.get('verification_code_input_actions')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="codeInputActions">
                      <ActionsFormItem actions={codeInputActions} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'sendButtonActions',
                require: false,
                label: <Label>{Intl.get('send_sms_button_actions')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="sendButtonActions">
                      <ActionsFormItem actions={sendButtonActions} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'countdownActions',
                require: false,
                label: <Label>{Intl.get('send_sms_countdown_actions')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="countdownActions">
                      <ActionsFormItem actions={countdownActions} />
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
      codeInputActions={(values.InputEvents?.value ?? []) as ActionItem[]}
      sendButtonActions={(values.ButtonEvents?.value ?? []) as ActionItem[]}
      countdownActions={(values.SendSMSCountdownEvents?.value ?? []) as ActionItem[]}
    />
  );
}

