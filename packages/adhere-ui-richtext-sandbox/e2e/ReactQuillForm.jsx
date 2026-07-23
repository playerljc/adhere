import { Button, Form, Space } from 'antd';
import React, { useEffect, useRef } from 'react';

import { ReactQuillSandbox } from '../src/index';

import '../src/index.less';

export default () => {
  const [form] = Form.useForm();
  const ref = useRef();

  useEffect(() => {
    form.setFieldsValue({
      article: '<p>ReactQuillSandbox Form 示例</p>',
    });
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            form.setFieldsValue({
              article: `<p>${Date.now()}</p>`,
            });
          }}
        >
          设置表单值
        </Button>
        <Button
          onClick={() => {
            form
              .validateFields()
              .then((values) => {
                console.log(values);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          校验并获取
        </Button>
        <Button
          onClick={() => {
            ref.current?.focus?.();
          }}
        >
          focus
        </Button>
      </Space>
      <Form form={form} name="reactQuillForm">
        <Form.Item
          name="article"
          rules={[
            ReactQuillSandbox.AntdFormRequireValidator(
              () => ref.current?.getEditor?.(),
              '请输入文章',
            ),
          ]}
        >
          <ReactQuillSandbox
            ref={ref}
            theme="snow"
            wrapStyle={{ height: 420 }}
            onChange={() => {}}
          />
        </Form.Item>
      </Form>
    </div>
  );
};
