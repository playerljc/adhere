import { Button } from 'antd';
import React, { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { ArrayEntityValueHOC, Col, Form, Radio, Row } from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: letter,
  };
});

export default () => {
  const [form] = Form.useForm();

  const [value5, setValue5] = useImmer({
    options: [],
    value: [],
  });

  const [value6, setValue6] = useImmer({
    options: [],
    value: [],
  });

  const [value7, setValue7] = useImmer({
    options: [],
    value: [],
  });

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
          <Radio.HorizontalRadio
            options={[
              {
                label: '男',
                value: 2,
              },
              {
                label: '女',
                value: 1,
              },
            ]}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Radio.RadioSelect placeholder="A-Z" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter1"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Radio.CustomRadio options={options}>
            {(options) => (
              <Row gutter={[16, 24]}>
                {options.map(({ data }) => (
                  <Col span={4}>
                    <Radio key={data?.value} {...(data ?? {})}>
                      {data?.label}
                    </Radio>
                  </Col>
                ))}
              </Row>
            )}
          </Radio.CustomRadio>
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter2"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Radio.CustomRadioSelect
            dropdownStyle={{
              maxHeight: Util.pxToRem(300, media.designWidth, media),
              overflow: 'auto',
            }}
            placeholder="A-Z"
            options={options}
          >
            {(options) => (
              <Row gutter={[16, 24]}>
                {options.map(({ data }) => (
                  <Col span={4}>
                    <Radio key={data?.value} {...(data ?? {})}>
                      {data?.label}
                    </Radio>
                  </Col>
                ))}
              </Row>
            )}
          </Radio.CustomRadioSelect>
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter3"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Radio.ButtonRadio options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter4"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Radio.ButtonRadioSelect placeholder="A-Z" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter5"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Radio.AutoCompleteRadioSelect
            placeholder="AutoCompleteRadioSelect"
            options={value5.options}
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
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter6"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Radio.AutoCompleteCustomRadioSelect
            placeholder="AutoCompleteCustomRadioSelect"
            dropdownStyle={{
              maxHeight: Util.pxToRem(300, media.designWidth, media),
              overflow: 'auto',
            }}
            options={value6.options}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue6((draft) => {
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

                  setValue6((draft) => {
                    draft.options = result;
                  });

                  resolve();
                }, 500);
              })
            }
          >
            {(options) => (
              <Row gutter={[16, 24]}>
                {options.map(({ data }) => (
                  <Col span={4}>
                    <Radio key={data?.value} {...(data ?? {})}>
                      {data?.label}
                    </Radio>
                  </Col>
                ))}
              </Row>
            )}
          </Radio.AutoCompleteCustomRadioSelect>
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter7"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Radio.AutoCompleteButtonRadioSelect
            placeholder="AutoCompleteButtonRadioSelect"
            dropdownStyle={{
              maxHeight: Util.pxToRem(300, media.designWidth, media),
              overflow: 'auto',
            }}
            options={value7.options}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue7((draft) => {
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

                  setValue7((draft) => {
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
