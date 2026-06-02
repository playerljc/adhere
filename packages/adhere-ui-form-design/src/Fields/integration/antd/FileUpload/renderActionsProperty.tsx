import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import { values } from '../../../../Dict';
import { ActionsFormItem } from '../../../../components';
import { ActionItem } from '../../../../components/ActionsFormItem';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

/**
 * ActionsProperty
 *
 * @description Upload 的事件配置面板
 */
export function ActionsProperty({
  designValue,
  actions,
}: {
  designValue: DesignValueProps;
  actions: ActionItem[];
}) {
  const [form] = Form.useForm();

  const { getActiveFieldId, setActionsProps } = useContext(DesignContext);
  const { actionsProps } = designValue;

  function onFieldsChange() {
    const values = form.getFieldsValue();
    setActionsProps(getActiveFieldId() as string, { ...values });
  }

  useEffect(() => {
    form.setFieldsValue(actionsProps);
  }, [actionsProps]);

  return (
    <Form name="antFileUploadActionsProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'actions',
                require: false,
                label: <Label>{Intl.get('actions')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="actions">
                      <ActionsFormItem actions={actions} />
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

/**
 * renderActionsProperty
 * @description 对 Upload Actions 的渲染
 */
export function renderActionsProperty(props: DesignValueProps): ReactNode {
  return <ActionsProperty designValue={props} actions={values.UploadEvents?.value ?? []} />;
}

