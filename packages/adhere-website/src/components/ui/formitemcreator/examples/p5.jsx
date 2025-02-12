import { Button, Form } from 'antd';
import React from 'react';

import { FormItemCreator } from '@baifendian/adhere';

export default () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
  };

  const onFinish = (values) => {
    console.log('success', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('failed', errorInfo);
  };

  return (
    <Form name="pickerDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <FormItemCreator
        columns={[
          {
            label: '选择日期',
            name: 'date',
            type: FormItemCreator.DATEPICKER,
            contentProps: {
              // antd DatePicker支持的属性
            },
          },
          {
            label: '选择年份',
            name: 'year',
            type: FormItemCreator.DATEPICKER,
            contentProps: {
              // antd DatePicker支持的属性
              picker: 'year',
            },
          },
          {
            label: '选择月份',
            name: 'month',
            type: FormItemCreator.DATEPICKER,
            contentProps: {
              // antd DatePicker支持的属性
              picker: 'month',
            },
          },
          {
            label: '选择季度',
            name: 'quarter',
            type: FormItemCreator.DATEPICKER,
            contentProps: {
              // antd DatePicker支持的属性
              picker: 'quarter',
            },
          },
          {
            label: '选择周',
            name: 'week',
            type: FormItemCreator.DATEPICKER,
            contentProps: {
              // antd DatePicker支持的属性
              picker: 'week',
            },
          },
          {
            label: '选择日期范围',
            name: 'rangedate',
            type: FormItemCreator.RANGEPICKER,
            contentProps: {
              // antd DatePicker.RangePicker支持的属性
            },
          },
          {
            label: '选择时间',
            name: 'time',
            type: FormItemCreator.TIMEPICKER,
            contentProps: {
              // antd TimePicker支持的属性
            },
          },
        ]}
        layout={layout}
      />
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
