import React, { type ReactNode, useContext, useEffect, useMemo } from 'react';

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
 * @param {DesignValueProps} props
 */
export function ActionsProperty({
  designValue,
}: {
  designValue: DesignValueProps;
  actions: ActionItem[];
}) {
  const [form] = Form.useForm();

  const { getActiveFieldId, setActionsProps } = useContext(DesignContext);

  const { actionsProps } = designValue;

  const actions = useMemo(
    () => [
      {
        label: 'onChange',
        value: 'onChange',
      },
    ],
    [],
  );

  function onFieldsChange() {
    const formValues = form.getFieldsValue();

    setActionsProps(getActiveFieldId() as string, {
      ...formValues,
    });
  }

  useEffect(() => {
    form.setFieldsValue(actionsProps);
  }, [actionsProps, form]);

  return (
    <Form name="layoutStepsActionsProperty" form={form} onFieldsChange={onFieldsChange}>
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
 * @param props
 */
export function renderActionsProperty(props: DesignValueProps): ReactNode {
  return <ActionsProperty designValue={props} actions={values.InputEvents?.value ?? []} />;
}
