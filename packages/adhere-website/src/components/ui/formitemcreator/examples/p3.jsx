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
    <Form name="selectDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <FormItemCreator
        columns={[
          {
            label: '单选框1',
            name: 'radio1',
            type: FormItemCreator.RADIO,
            contentProps: {
              options: [
                { label: '单选1', value: 1 },
                { label: '单选2', value: 2 },
              ],
            },
          },
          {
            label: '单选框2-按钮形式',
            name: 'radio2',
            type: FormItemCreator.RADIO,
            contentProps: {
              optionType: 'button',
              options: [
                { label: '单选1', value: 1 },
                { label: '单选2', value: 2 },
              ],
            },
          },
          {
            label: '复选框',
            name: 'checkbox1',
            type: FormItemCreator.CHECKBOX,
            contentProps: {
              options: [
                { label: '复选1', value: 1 },
                { label: '复选2', value: 2 },
              ],
            },
          },
          {
            label: '下拉',
            name: 'select1',
            type: FormItemCreator.SELECT,
            contentProps: {
              options: [
                { label: '下拉1', value: 1 },
                { label: '下拉2', value: 2 },
              ],
            },
          },
          {
            label: '多选下拉',
            name: 'select2',
            type: FormItemCreator.SELECT,
            contentProps: {
              mode: 'multiple',
              options: [
                { label: '下拉1', value: 1 },
                { label: '下拉2', value: 2 },
              ],
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
