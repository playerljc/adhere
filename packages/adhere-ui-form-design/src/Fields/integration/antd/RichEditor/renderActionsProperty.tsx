import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';

import { ActionsFormItem } from '../../../../components';
import { DesignContext } from '../../../../Design/Context';
import { values } from '../../../../Dict';
import type { DesignValueProps } from '../../../../types';

export function ActionsProperty({ designValue }: { designValue: DesignValueProps }) {
  const [form] = Form.useForm();
  const { getActiveFieldId, setActionsProps } = useContext(DesignContext);
  const { actionsProps } = designValue;

  function onFieldsChange() {
    setActionsProps(getActiveFieldId() as string, { ...form.getFieldsValue() });
  }

  useEffect(() => {
    form.setFieldsValue(actionsProps);
  }, [actionsProps]);

  return (
    <Form
      name="antRichEditorActionsProperty"
      form={form}
      onFieldsChange={onFieldsChange}
    >
      <Form.Item name="actions">
        <ActionsFormItem actions={values.RichEditorEvents?.value ?? []} />
      </Form.Item>
    </Form>
  );
}

export function renderActionsProperty(props: DesignValueProps): ReactNode {
  return <ActionsProperty designValue={props} />;
}
