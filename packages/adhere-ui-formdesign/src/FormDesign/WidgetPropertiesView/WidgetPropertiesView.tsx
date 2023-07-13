import { useUpdateEffect } from 'ahooks';
import { Form } from 'antd';
import React, { memo, useContext, useEffect } from 'react';
import type { FC } from 'react';

import type { WidgetPropertiesViewProps } from '../../types/WidgetPropertiesViewTypes';
import { findWidgetById } from '../../util';
import { selectorPrefix } from '../FormDesign';
import { FormDesignContext } from '../FormDesignProvider';

export const suffix = '-widget-properties-view';

/**
 * WidgetPropertiesView
 * @description 属性设置视图
 * @constructor
 */
const WidgetPropertiesView: FC<WidgetPropertiesViewProps> = (props) => {
  const [form] = Form.useForm();

  const { setDataSource, getWidgetActiveKey } = useContext(FormDesignContext);

  useEffect(() => {
    setValues();
  }, []);

  useUpdateEffect(() => {
    setValues();
  }, [props?.widget?.properties]);

  /**
   * setValues
   * @description 设置属性表单的值
   */
  const setValues = () => {
    const values = props?.widget?.properties?.reduce((previousValue, currentValue) => {
      previousValue[currentValue.key] = currentValue?.value?.props?.value;

      return previousValue;
    }, {});

    form.setFieldsValue(values);
  };

  /**
   * onValuesChange
   * @description 表单属性改变
   * @param {Object} values
   */
  const onValuesChange = (values) => {
    setDataSource((_dataSource) => {
      const widget = findWidgetById(getWidgetActiveKey(), _dataSource);

      if (widget) {
        const dataIndex = Object.keys(values)[0];
        const property = widget.properties.find((property) => property.key === dataIndex);
        if (property && property.value && property.value.props) {
          property.value.props.value = values[dataIndex];
        }
      }

      return [..._dataSource];
    });
  };

  return (
    <div className={`${selectorPrefix}${suffix}`}>
      <Form form={form} layout="vertical" onValuesChange={onValuesChange}>
        <ul className={`${selectorPrefix}${suffix}-inner`}>
          {props?.widget?.properties?.map((_property) => _property?.value?.render?.())}
        </ul>
      </Form>
    </div>
  );
};

export default memo(WidgetPropertiesView);
