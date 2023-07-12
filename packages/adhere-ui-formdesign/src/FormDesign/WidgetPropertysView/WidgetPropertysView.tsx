import { useUpdateEffect } from 'ahooks';
import { Form } from 'antd';
import React, { memo, useEffect } from 'react';
import type { FC } from 'react';

import type { WidgetPropertysViewProps } from '../../types/WidgetPropertysViewTypes';
import { selectorPrefix } from '../FormDesign';

export const suffix = '-widget-propertys-view';

/**
 * WidgetPropertysView
 * @constructor
 */
const WidgetPropertysView: FC<WidgetPropertysViewProps> = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    setValues();
  }, []);

  useUpdateEffect(() => {
    setValues();
  }, [props?.widget?.propertys]);

  const setValues = () => {
    const values = props?.widget?.propertys?.reduce((previousValue, currentValue) => {
      previousValue[currentValue.key] = currentValue?.value?.props?.value;

      return previousValue;
    }, {});

    console.log('initValues', values);

    form.setFieldsValue(values);
  };

  const onValuesChange = (values) => {
    console.log('values', values);
  };

  return (
    <div className={`${selectorPrefix}${suffix}`}>
      <Form form={form} layout="vertical" onValuesChange={onValuesChange}>
        <ul className={`${selectorPrefix}${suffix}-inner`}>
          {props?.widget?.propertys?.map((_property) => _property?.value?.render?.())}
        </ul>
      </Form>
    </div>
  );
};

export default memo(WidgetPropertysView);
