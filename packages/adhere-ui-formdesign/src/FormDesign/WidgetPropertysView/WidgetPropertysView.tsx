import { useUpdateEffect } from 'ahooks';
import { Form } from 'antd';
import React, { memo, useEffect } from 'react';
import type { FC } from 'react';

import type { WidgetPropertysViewProps } from '../../types/WidgetPropertysViewTypes';
import { selectorPrefix } from '../FormDesign';

const suffix = '-widget-propertys-view';

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
      previousValue[currentValue.name] = currentValue?.value?.props?.value;

      return previousValue;
    }, {});

    form.setFieldsValue(values);
  };

  const onValuesChange = (values) => {
    debugger;
  };

  debugger;

  return (
    <div className={`${selectorPrefix}${suffix}`}>
      <Form form={form} layout="vertical" onValuesChange={onValuesChange}>
        <ul>{props?.widget?.propertys?.map((_property) => _property?.value?.render?.())}</ul>
      </Form>
    </div>
  );
};

export default memo(WidgetPropertysView);
