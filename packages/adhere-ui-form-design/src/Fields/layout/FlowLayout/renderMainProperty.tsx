import merge from 'lodash.merge';
import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';

import { DesignContext } from '../../../Design/Context';
import type { DesignValueProps } from '../../../types';

/**
 * MainProperty
 * @description 控件的属性面板，如果控件是TableGridLayout，那么属性面板就是TableGridLayout的属性面板
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  // 表单的instance
  const [form] = Form.useForm();

  const {
    // 获取当前激活的控件的id(也就是Editor中选中的控件)
    getActiveFieldId,
    // 设置控件的属性
    setFieldProps,
  } = useContext(DesignContext);

  // 控件的数据
  const { fieldProps } = props;

  function onFieldsChange() {
    const { columnCount, width, ...rest } = form.getFieldsValue();

    setFieldProps(
      getActiveFieldId() as string,
      merge({}, fieldProps, {
        ...rest,
      }),
    );
  }

  useEffect(() => {}, [fieldProps]);

  return <Form name="layoutMainProperty" form={form} onFieldsChange={onFieldsChange}></Form>;
}

/**
 * renderMainProperty
 * @param {DesignValueProps} props
 * @return ReactElement
 */
export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty {...props} />;
}
