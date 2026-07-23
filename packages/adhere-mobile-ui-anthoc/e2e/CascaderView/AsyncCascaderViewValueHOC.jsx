import { Button, Form } from 'antd-mobile';
import React from 'react';

import Mock from '@baifendian/adhere-mock';
import { AsyncTreeEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import { CascaderView } from '../../src/index';

import './index.less';

const options = Mock.Province.map((t) => ({
  label: t.name,
  value: t.id,
  pId: 0,
}));

const objs = {
  ...Mock.City,
  ...Mock.County,
};

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="horizontal"
      footer={
        <Button
          block
          type="submit"
          color="primary"
          size="middle"
          onClick={() => {
            const values = form?.getFieldsValue();
            alert(JSON.stringify(values));
          }}
        >
          提交
        </Button>
      }
    >
      <Form.Item
        name="address"
        label="地区"
        rules={[
          {
            required: true,
            message: '请选择地区',
          },
        ]}
      >
        <AsyncTreeEntityValueHOC>
          <CascaderView.AsyncCascaderView
            options={options}
            isEveryAsync
            treeDataSimpleMode
            loadData={(defaultId) => {
              return new Promise((resolve, reject) => {
                if (!objs[defaultId]) {
                  reject();
                } else {
                  setTimeout(() => {
                    resolve(
                      objs[defaultId].map((t) => ({
                        label: t.name,
                        value: t.id,
                        pid: defaultId,
                      })),
                    );
                  }, 1000);
                }
              });
            }}
          />
        </AsyncTreeEntityValueHOC>
      </Form.Item>
    </Form>
  );
};
