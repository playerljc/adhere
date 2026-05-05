import React, { useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { DesignContext } from '../../Design/Context';
import type { DesignValueProps, FormItemProps } from '../../types';
import PropertiesGridLayout from '../TableGridLayout';

type FormInstance = ReturnType<typeof Form.useForm>[0];

export type DesignFormPropertyFormProps = {
  formName: string;
  designValue: DesignValueProps;
  rows: DataItemRow[];
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
  /** 默认将 formItemProps 同步到表单；Slider 等需特殊处理时可传入 */
  applyFormItemPropsToForm?: (form: FormInstance, formItemProps: FormItemProps) => void;
};

export function DesignFormPropertyForm({
  formName,
  designValue,
  rows,
  renderFormItems,
  applyFormItemPropsToForm,
}: DesignFormPropertyFormProps) {
  const [form] = Form.useForm();
  const { getActiveFieldId, setFormItemProps } = useContext(DesignContext);
  const { formItemProps } = designValue;
  const activeFieldId = getActiveFieldId();

  useEffect(() => {
    if (applyFormItemPropsToForm) {
      applyFormItemPropsToForm(form, formItemProps as FormItemProps);
    } else {
      form.setFieldsValue(formItemProps);
    }
  }, [form, formItemProps, applyFormItemPropsToForm]);

  function onFieldsChange() {
    setFormItemProps(activeFieldId as string, { ...form.getFieldsValue() });
  }

  const data = renderFormItems ? renderFormItems(rows) : rows;

  return (
    <Form name={formName} form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data,
          },
        ]}
      />
    </Form>
  );
}
