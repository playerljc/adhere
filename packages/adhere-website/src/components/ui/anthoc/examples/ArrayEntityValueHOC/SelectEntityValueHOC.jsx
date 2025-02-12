import { Button } from 'antd';
import Mock from 'mockjs';
import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';

import {
  ArrayEntityValueHOC,
  Checkbox,
  Form,
  MultipleSelect,
  Select,
} from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

const options = Array.from({ length: 100 }).map(() => {
  const label = Mock.mock('@name');
  const value = Mock.mock('@guid');

  return {
    label,
    value,
  };
});

export default () => {
  const [form] = Form.useForm();

  const [value3, setValue3] = useImmer({
    options: [],
    value: [],
  });

  const [value4, setValue4] = useImmer({
    options: [],
    value: [],
  });

  const [value5, setValue5] = useImmer({
    options: [],
    value: [],
  });

  useEffect(() => {
    // 可以使用两种方式进行赋初值
    form.setFieldValue('user', [options[0], options[1].value]);
  }, []);

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
        name="user"
        label="人员"
        rules={[
          {
            required: true,
            message: '请选择人员',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Select placeholder="请选择人员" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="users1"
        label="参与者1"
        rules={[
          {
            required: true,
            message: '请选择参与者1',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <MultipleSelect placeholder="请选择参与者1" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="users2"
        label="参与者2"
        rules={[
          {
            required: true,
            message: '请选择参与者2',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <MultipleSelect.CheckAllSelect placeholder="请选择参与者2" options={options}>
            {(props) => <Checkbox.Group {...props} />}
          </MultipleSelect.CheckAllSelect>
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="users3"
        label="参与者3"
        rules={[
          {
            required: true,
            message: '请选择参与者3',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Select.AutoCompleteSelect
            placeholder="请选择参与者3"
            value={value3.value}
            options={value3.options}
            onChange={(_value) => {
              setValue3((draft) => {
                draft.value = _value;
              });
            }}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue3((draft) => {
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

                  setValue3((draft) => {
                    draft.options = result;
                  });

                  resolve();
                }, 500);
              })
            }
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="users4"
        label="参与者4"
        rules={[
          {
            required: true,
            message: '请选择参与者4',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <MultipleSelect.AutoCompleteMultipleSelect
            placeholder="请选择参与者4"
            value={value4.value}
            options={value4.options}
            onChange={(_value) => {
              setValue4((draft) => {
                draft.value = _value;
              });
            }}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue4((draft) => {
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

                  setValue4((draft) => {
                    draft.options = result;
                  });

                  resolve();
                }, 500);
              })
            }
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="users5"
        label="参与者5"
        rules={[
          {
            required: true,
            message: '请选择参与者5',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <MultipleSelect.AutoCompleteCheckAllMultipleSelect
            placeholder="请选择参与者5"
            value={value5.value}
            options={value5.options}
            onChange={(_value) => {
              setValue5((draft) => {
                draft.value = _value;
              });
            }}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue5((draft) => {
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

                  setValue5((draft) => {
                    draft.options = result;
                  });

                  resolve();
                }, 500);
              })
            }
          >
            {(props) => <Checkbox.Group {...props} />}
          </MultipleSelect.AutoCompleteCheckAllMultipleSelect>
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
