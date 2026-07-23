import { Button, Form } from 'antd-mobile';
import React from 'react';
import Highlighter from 'react-highlight-words';

import { TreeEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import { CascaderView } from '../../src/index';
import { options } from './options';

import './index.less';

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
        <TreeEntityValueHOC treeDataProp="options">
          <CascaderView.FilterCascaderView
            options={options}
            renderLabel={(item, filterValue) => {
              return (
                <label>
                  <Highlighter
                    highlightClassName="Highlight"
                    searchWords={[filterValue]}
                    autoEscape={true}
                    textToHighlight={item.label}
                  />
                </label>
              );
            }}
          />
        </TreeEntityValueHOC>
      </Form.Item>
    </Form>
  );
};
