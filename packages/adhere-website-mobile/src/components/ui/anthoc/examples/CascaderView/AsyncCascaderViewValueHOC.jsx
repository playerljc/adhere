import { Button, Form } from 'antd-mobile';
import React from 'react';

import { CascaderView } from '@baifendian/adhere-mobile-ui-anthoc';
import Mock from '@baifendian/adhere-mock';
import { AsyncTreeEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import './index.less';

// 正常
// const options = Mock.Province.map((t) => ({
//   label: t.name,
//   value: t.id,
// }));

// 拉平
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
        name="sex"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
        // initialValue={[]}
      >
        <AsyncTreeEntityValueHOC>
          <CascaderView.AsyncCascaderView
            options={options}
            isEveryAsync
            treeDataSimpleMode
            loadData={(defaultId) => {
              return new Promise((resolve, reject) => {
                // 正常
                // if (!objs[defaultId]) {
                //   reject();
                // } else {
                //   setTimeout(() => {
                //     resolve(
                //       objs[defaultId].map((t) => ({
                //         label: t.name,
                //         value: t.id,
                //       })),
                //     );
                //   }, 1000);
                // }
                // 拉平
                if (!objs[defaultId]) {
                  resolve(options);
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
