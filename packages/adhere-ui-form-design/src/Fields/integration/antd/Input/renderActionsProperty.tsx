import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import PropertiesGridLayout, {
  Label,
  Value,
} from '../../../../Design/Properties/PropertiesGridLayout';
import { values } from '../../../../Dict';
import { ActionsFormItem } from '../../../../components';
import type { DesignValueProps } from '../../../../types';

/**
 * ActionsProperty
 *
 * @description
 *
 * @param {DesignValueProps} props
 */
function ActionsProperty(props: DesignValueProps) {
  // 表单的instance
  const [form] = Form.useForm();

  const {
    // 获取当前激活的控件的id(也就是Editor中选中的控件)
    getActiveFieldId,
    // 设置控件的属性
    setActionsProps,
  } = useContext(DesignContext);

  const { actionsProps } = props;

  function onFieldsChange() {
    const values = form.getFieldsValue();

    setActionsProps(getActiveFieldId() as string, {
      ...values,
    });
  }

  useEffect(() => {
    // 设置控件的数据到表单
    form.setFieldsValue(actionsProps);
  }, [actionsProps]);

  return (
    <Form name="antInputActionsProperty" form={form} onFieldsChange={onFieldsChange}>
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
                label: <Label>{Intl.get('action')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="actions">
                      <ActionsFormItem actions={values.InputEvents?.value ?? []} />
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
 * renderActionsProperty
 * @description 对Actions的渲染
 * @param props
 */
export function renderActionsProperty(props: DesignValueProps): ReactNode {
  return <ActionsProperty {...props} />;
}
