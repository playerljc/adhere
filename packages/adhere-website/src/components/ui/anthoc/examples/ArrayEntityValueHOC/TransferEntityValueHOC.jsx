import { Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { ArrayEntityValueHOC, Form, Transfer } from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));
const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

export default () => {
  const [form] = Form.useForm();

  const [value, setValue] = useImmer({
    options: [],
    value: [],
  });

  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(initialTargetKeys);
  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };
  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  const { media } = useContext(ConfigProvider.Context);

  useEffect(() => {}, []);

  return (
    <Form
      form={form}
      labelAlign="right"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 21 }}
      onFinish={(values) => {
        console.log('values', values);
        alert(JSON.stringify(values));
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
      >
        <ArrayEntityValueHOC>
          <Transfer
            dataSource={mockData}
            titles={['Source', 'Target']}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
            onScroll={onScroll}
            render={(item) => item.title}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex1"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Transfer.TransferSelect
            placeholder="A-Z"
            options={Array.from({ length: 26 }).map((t, _index) => {
              const letter = String.fromCharCode(97 + _index).toUpperCase();

              return {
                label: letter,
                value: letter,
              };
            })}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex2"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Transfer.AutoCompleteTransferSelect
            placeholder="AutoCompleteTransferSelect"
            dropdownStyle={{
              maxHeight: Util.pxToRem(300, media.designWidth, media),
              overflow: 'auto',
            }}
            options={value.options}
            loadData={(_kw) =>
              new Promise((resolve) => {
                console.log('_kw', _kw);

                if (!_kw) {
                  setValue((draft) => {
                    draft.options = [];
                  });
                  resolve();
                  return;
                }

                setTimeout(() => {
                  const result = [...Book]
                    .filter((_book) => _book.t.indexOf(_kw) !== -1)
                    .map((t) => ({
                      label: t.t,
                      value: t.id,
                    }));

                  setValue((draft) => {
                    draft.options = result;
                  });

                  resolve();
                }, 500);
              })
            }
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
