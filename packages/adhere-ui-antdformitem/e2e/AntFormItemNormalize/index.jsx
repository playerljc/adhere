import { Button } from 'antd';
import React, { useState } from 'react';

import { UploadOutlined } from '@ant-design/icons';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Space from '@baifendian/adhere-ui-space';

import AntdFormItem from '../../src/index';

const { Option } = AntdFormItem.AntFormItemNormalize.Select;
const { ScrollLayout } = FlexLayout;

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Space.Group direction="vertical">
        <dl>
          <dt>
            <p>Select</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.Select style={{ width: 200 }}>
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </AntdFormItem.AntFormItemNormalize.Select>
          </dd>
        </dl>

        <dl>
          <dt>
            <p>MultipleSelect</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.MultipleSelect style={{ width: 200 }}>
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </AntdFormItem.AntFormItemNormalize.MultipleSelect>
          </dd>
        </dl>

        <dl>
          <dt>
            <p>TreeSelect</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.TreeSelect
              style={{ width: 200 }}
              treeData={[
                {
                  value: 'parent 1',
                  title: 'parent 1',
                  children: [
                    {
                      value: 'parent 1-0',
                      title: 'parent 1-0',
                      children: [
                        {
                          value: 'leaf1',
                          title: 'leaf1',
                        },
                        {
                          value: 'leaf2',
                          title: 'leaf2',
                        },
                      ],
                    },
                    {
                      value: 'parent 1-1',
                      title: 'parent 1-1',
                      children: [
                        {
                          value: 'leaf3',
                          title: 'leaf3',
                        },
                      ],
                    },
                  ],
                },
              ]}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>AutoComplete</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.AutoComplete
              style={{
                width: 200,
              }}
              options={[
                {
                  value: 'Burns Bay Road',
                },
                {
                  value: 'Downing Street',
                },
                {
                  value: 'Wall Street',
                },
              ]}
              placeholder="try to type `b`"
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>DatePicker</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.DatePicker
              style={{
                width: 200,
              }}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>RangePicker</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.RangePicker
              style={{
                width: 200,
              }}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>TimePicker</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.TimePicker
              style={{
                width: 200,
              }}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>Cascader</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.Cascader
              placeholder="Please select"
              style={{
                width: 200,
              }}
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                      children: [
                        {
                          value: 'xihu',
                          label: 'West Lake',
                        },
                      ],
                    },
                  ],
                },
                {
                  value: 'jiangsu',
                  label: 'Jiangsu',
                  children: [
                    {
                      value: 'nanjing',
                      label: 'Nanjing',
                      children: [
                        {
                          value: 'zhonghuamen',
                          label: 'Zhong Hua Men',
                        },
                      ],
                    },
                  ],
                },
              ]}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>Upload</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.Upload
              {...{
                name: 'file',
                action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
                headers: {
                  authorization: 'authorization-text',
                },
                onChange(info) {
                  if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                  }
                  if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                  } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                  }
                },
              }}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </AntdFormItem.AntFormItemNormalize.Upload>
          </dd>
        </dl>

        <dl>
          <dt>
            <p>Modal</p>
          </dt>
          <dd>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Open Modal
              </Button>
              <AntdFormItem.AntFormItemNormalize.Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={() => {
                  setIsModalOpen(false);
                }}
                onCancel={() => {
                  setIsModalOpen(false);
                }}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </AntdFormItem.AntFormItemNormalize.Modal>
            </div>
          </dd>
        </dl>

        <dl>
          <dt>
            <p>InputNumberDecimal1</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.InputNumberDecimal1
              style={{
                width: 200,
              }}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>InputNumberDecimal2</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.InputNumberDecimal2
              style={{
                width: 200,
              }}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>InputNumberInteger</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.InputNumberInteger
              style={{
                width: 200,
              }}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>Input</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.Input
              style={{
                width: 200,
              }}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>TextArea</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.TextArea
              style={{
                width: 200,
              }}
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <p>SubmitButton</p>
          </dt>
          <dd>
            <AntdFormItem.AntFormItemNormalize.SubmitButton
              style={{
                width: 200,
              }}
              type="primary"
              onClick={() => new Promise((resolve) => setTimeout(resolve, 3000))}
            >
              提交
            </AntdFormItem.AntFormItemNormalize.SubmitButton>
          </dd>
        </dl>
      </Space.Group>

      <div style={{ height: 500 }}>
        <ScrollLayout scrollY>
          <Space.Group direction="vertical">
            <dl>
              <dt>
                <p>Select</p>
              </dt>
              <dd>
                <AntdFormItem.AntFormItemNormalize.Select style={{ width: 200 }}>
                  {Array.from({ length: 150 })
                    .fill(1)
                    .map((t, index) => (
                      <Option key={`${index + 1}`} value={`${index + 1}`}>{`${index + 1}`}</Option>
                    ))}
                </AntdFormItem.AntFormItemNormalize.Select>
              </dd>
            </dl>

            <dl>
              <dt>
                <p>MultipleSelect</p>
              </dt>
              <dd>
                <AntdFormItem.AntFormItemNormalize.MultipleSelect style={{ width: 200 }}>
                  {Array.from({ length: 150 })
                    .fill(1)
                    .map((t, index) => (
                      <Option key={`${index + 1}`} value={`${index + 1}`}>{`${index + 1}`}</Option>
                    ))}
                </AntdFormItem.AntFormItemNormalize.MultipleSelect>
              </dd>
            </dl>

            <dl>
              <dt>
                <p>TreeSelect</p>
              </dt>
              <dd>
                <AntdFormItem.AntFormItemNormalize.TreeSelect
                  style={{ width: 200 }}
                  treeData={[
                    {
                      value: 'parent 1',
                      title: 'parent 1',
                      children: [
                        {
                          value: 'parent 1-0',
                          title: 'parent 1-0',
                          children: [
                            {
                              value: 'leaf1',
                              title: 'leaf1',
                            },
                            {
                              value: 'leaf2',
                              title: 'leaf2',
                            },
                          ],
                        },
                        {
                          value: 'parent 1-1',
                          title: 'parent 1-1',
                          children: [
                            {
                              value: 'leaf3',
                              title: 'leaf3',
                            },
                          ],
                        },
                      ],
                    },
                  ]}
                />
              </dd>
            </dl>

            <dl>
              <dt>
                <p>AutoComplete</p>
              </dt>
              <dd>
                <AntdFormItem.AntFormItemNormalize.AutoComplete
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      value: 'Burns Bay Road',
                    },
                    {
                      value: 'Downing Street',
                    },
                    {
                      value: 'Wall Street',
                    },
                  ]}
                  placeholder="try to type `b`"
                />
              </dd>
            </dl>

            <dl>
              <dt>
                <p>DatePicker</p>
              </dt>
              <dd>
                <AntdFormItem.AntFormItemNormalize.DatePicker
                  style={{
                    width: 200,
                  }}
                />
              </dd>
            </dl>

            <dl>
              <dt>
                <p>RangePicker</p>
              </dt>
              <dd>
                <AntdFormItem.AntFormItemNormalize.RangePicker
                  style={{
                    width: 200,
                  }}
                />
              </dd>
            </dl>

            <dl>
              <dt>
                <p>TimePicker</p>
              </dt>
              <dd>
                <AntdFormItem.AntFormItemNormalize.TimePicker
                  style={{
                    width: 200,
                  }}
                />
              </dd>
            </dl>

            <dl>
              <dt>
                <p>Cascader</p>
              </dt>
              <dd>
                <AntdFormItem.AntFormItemNormalize.Cascader
                  placeholder="Please select"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      value: 'zhejiang',
                      label: 'Zhejiang',
                      children: [
                        {
                          value: 'hangzhou',
                          label: 'Hangzhou',
                          children: [
                            {
                              value: 'xihu',
                              label: 'West Lake',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      value: 'jiangsu',
                      label: 'Jiangsu',
                      children: [
                        {
                          value: 'nanjing',
                          label: 'Nanjing',
                          children: [
                            {
                              value: 'zhonghuamen',
                              label: 'Zhong Hua Men',
                            },
                          ],
                        },
                      ],
                    },
                  ]}
                  onChange={(value) => {
                    console.log(value);
                  }}
                />
              </dd>
            </dl>
          </Space.Group>
        </ScrollLayout>
      </div>
    </div>
  );
};
