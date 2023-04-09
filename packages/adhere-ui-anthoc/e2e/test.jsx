import { Button } from 'antd';
import React, { useState } from 'react';

import { UploadOutlined } from '@ant-design/icons';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Space from '@baifendian/adhere-ui-space';

import {
  AutoComplete,
  Cascader,
  DatePicker,
  Input,
  InputNumberDecimal1,
  InputNumberDecimal2,
  InputNumberInteger,
  Modal,
  MultipleSelect,
  RangePicker,
  Select,
  SubmitButton,
  TextArea,
  TimePicker,
  TreeSelect,
  Upload,
} from '../src/index';

const { Option } = Select;
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
            <Select style={{ width: 200 }}>
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </Select>
          </dd>
        </dl>

        <dl>
          <dt>
            <p>MultipleSelect</p>
          </dt>
          <dd>
            <MultipleSelect style={{ width: 200 }}>
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </MultipleSelect>
          </dd>
        </dl>

        <dl>
          <dt>
            <p>TreeSelect</p>
          </dt>
          <dd>
            <TreeSelect
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
            <AutoComplete
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
            <DatePicker
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
            <RangePicker
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
            <TimePicker
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
            <Cascader
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
            <Upload
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
            </Upload>
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
              <Modal
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
              </Modal>
            </div>
          </dd>
        </dl>

        <dl>
          <dt>
            <p>InputNumberDecimal1</p>
          </dt>
          <dd>
            <InputNumberDecimal1
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
            <InputNumberDecimal2
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
            <InputNumberInteger
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
            <Input
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
            <TextArea
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
            <SubmitButton
              style={{
                width: 200,
              }}
              type="primary"
              onClick={() => new Promise((resolve) => setTimeout(resolve, 3000))}
            >
              提交
            </SubmitButton>
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
                <Select style={{ width: 200 }}>
                  {Array.from({ length: 150 })
                    .fill(1)
                    .map((t, index) => (
                      <Option key={`${index + 1}`} value={`${index + 1}`}>{`${index + 1}`}</Option>
                    ))}
                </Select>
              </dd>
            </dl>

            <dl>
              <dt>
                <p>MultipleSelect</p>
              </dt>
              <dd>
                <MultipleSelect style={{ width: 200 }}>
                  {Array.from({ length: 150 })
                    .fill(1)
                    .map((t, index) => (
                      <Option key={`${index + 1}`} value={`${index + 1}`}>{`${index + 1}`}</Option>
                    ))}
                </MultipleSelect>
              </dd>
            </dl>

            <dl>
              <dt>
                <p>TreeSelect</p>
              </dt>
              <dd>
                <TreeSelect
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
                <AutoComplete
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
                <DatePicker
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
                <RangePicker
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
                <TimePicker
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
                <Cascader
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
