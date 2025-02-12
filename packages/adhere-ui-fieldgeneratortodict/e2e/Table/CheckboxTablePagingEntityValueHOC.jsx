import { Button, Form } from 'antd';
import React, { useEffect } from 'react';

import FieldGeneratorToDict from '../../src/index';

const { ArrayEntityValueHOC } = FieldGeneratorToDict;

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    // form.setFieldValue('sex', [
    //   {
    //     label: 'A',
    //     value: 'A',
    //   },
    //   'B',
    // ]);
  }, []);

  const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.Multi}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <Form
      form={form}
      onFinish={(values) => {
        debugger;
      }}
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
        <ArrayEntityValueHOC getOptionsByDataSource={(_dataSource) => _dataSource.data}>
          <DictComponent
            pagingProps={{
              defaultLimit: 10,
            }}
            tablePagingProps={{
              rowKey: 'id',
              columns: [
                {
                  title: 'title',
                  key: 'title',
                  dataIndex: 'title',
                },
                {
                  title: 'avatar',
                  key: 'avatar',
                  dataIndex: 'avatar',
                  render: (v) => <img width={50} src={v} alt="" />,
                },
              ],
            }}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
