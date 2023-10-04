import { Button } from 'antd';
import React, { useState } from 'react';

import { UploadOutlined } from '@ant-design/icons';
import { FlexLayout, Space } from '@baifendian/adhere';
import {
  AutoComplete,
  Cascader,
  DatePicker,
  Form,
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
} from '@baifendian/adhere-ui-anthoc';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

const { Option } = Select;

Input.defaultProps.maxLength = 2000;

const { ScrollLayout } = FlexLayout;

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PlayGroundPage>
      <Section title="AntHOC">
        <p>Antd组件HOC和增强</p>
        <ul>
          <li>对antd一些组件进行HOC处理同时对有些组件在HOC的同时进行增强处理</li>
        </ul>
      </Section>

      <CodeBoxSection
        title="AntHOC"
        config={[
          {
            id: `p1`,
            name: `HOC可以查询和清除的控件`,
            cardProps: {
              description: {
                title: '带有查询合清除的控件',
                info: '默认都可以进行查询合清除',
              },
            },
            type: 'PlayGroundMulti',
            config: [
              {
                title: 'Select',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    showSearch: true,
    allowClear: true,
    filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
  }
                `,
              },
              {
                title: 'MultipleSelect',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    allowClear: true,
    mode: 'multiple',
    filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
  }
                `,
              },
              {
                title: 'TreeSelect',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    showSearch: true,
    allowClear: true,
  }
                `,
              },
              {
                title: 'AutoComplete',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    allowClear: true,
    filterOption: (input, option) => option!.value.toUpperCase().indexOf(input.toUpperCase()) >= 0,
  }
                `,
              },
              {
                title: 'DatePicker',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    allowClear: true,
  }
                `,
              },
              {
                title: 'RangePicker',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    allowClear: true,
  }
                `,
              },
              {
                title: 'TimePicker',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    allowClear: true,
  }
                `,
              },
              {
                title: 'Cascader',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    showSearch: {
    filter: (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1),
    },
    allowClear: true,
  }
                `,
              },
              {
                title: 'Upload',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    name: 'file',
    withCredentials: true,
  }
                `,
              },
              {
                title: 'Modal',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    closable: true,
    centered: true,
    maskClosable: true,
    destroyOnClose: true,
    zIndex: Resource.Dict.value.ResourceNormalMaxZIndex.value,
  }
                `,
              },
              {
                title: 'InputNumberDecimal1',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    precision: 1,
  }
                `,
              },
              {
                title: 'InputNumberDecimal2',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    precision: 2,
  }
                `,
              },
              {
                title: 'InputNumberInteger',
                mode: 'code',

                scope: { React },
                codeText: `
  // 默认normalize
  {
    precision: 0,
  }
                `,
              },
              {
                title: 'Form',
                mode: 'code',

                scope: { React },
                codeText: `
  <Form.Item
    name="email"
    label="email"
    rules={[
      Form.ValidatorRules.isEmail({ invalidMessage: 'email格式错误' }),
    ]}
  >
    <Input placeholder="email" />
  </Form.Item>
                `,
              },
            ],
            renderChildren: () => (
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

                <dl>
                  <dt>
                    <p>Form</p>
                  </dt>
                  <dd>
                    <p>
                      对Form的Rules进行增强(
                      <a target="_blank" href="/adhere/component/util/validator">
                        使用adhere-util-validator
                      </a>
                      )
                    </p>

                    <Form>
                      <ul>
                        <Space.Group direction="vertical">
                          <li>
                            <Form.Item
                              name="email"
                              label="email"
                              rules={[
                                Form.ValidatorRules.isEmail({ invalidMessage: 'email格式错误' }),
                              ]}
                            >
                              <Input placeholder="email" />
                            </Form.Item>
                          </li>
                          <li>
                            <Form.Item
                              name="mime"
                              label="mime"
                              rules={[
                                Form.ValidatorRules.isMimeType({
                                  invalidMessage: 'MimeType格式错误',
                                }),
                              ]}
                            >
                              <Input placeholder="mime" />
                            </Form.Item>
                          </li>
                          <li>
                            <Form.Item
                              name="hex"
                              label="hex"
                              rules={[
                                Form.ValidatorRules.isHexColor({
                                  invalidMessage: 'hex值格式错误',
                                }),
                              ]}
                            >
                              <Input placeholder="hex" />
                            </Form.Item>
                          </li>
                          <li>
                            <Form.Item
                              name="ip"
                              label="ip"
                              rules={[
                                Form.ValidatorRules.isIP({
                                  invalidMessage: 'ip地址格式错误',
                                }),
                              ]}
                            >
                              <Input placeholder="ip" />
                            </Form.Item>
                          </li>
                          <li>
                            <Form.Item
                              name="chinaPhoneNumber"
                              label="手机卡 + 数据卡 + 上网卡"
                              rules={[
                                Form.ValidatorRules.isAllChinaPhoneNumber({
                                  invalidMessage: '手机卡或数据卡或上网卡格式错误',
                                }),
                              ]}
                            >
                              <Input placeholder="手机卡 + 数据卡 + 上网卡" />
                            </Form.Item>
                          </li>
                        </Space.Group>
                      </ul>
                    </Form>
                  </dd>
                </dl>
              </Space.Group>
            ),
          },
          {
            id: 'p2',
            name: '配合ScrollLayout使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '使用ScrollLayout做容器',
                info: '自动设置组件的getPopupContainer，浮层跟随滚动`',
              },
            },
            codeText: `
  import { FlexLayout, Space } from '@baifendian/adhere';

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
    TimePicker,
    TreeSelect,
    Upload,
  } from '@baifendian/adhere-ui-anthoc'

  const { Option } = Select;

  const { ScrollLayout } = FlexLayout;

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
                  <Option key={\`\${index + 1}\`} value={\`\${index + 1}\`}>{\`\${
              index + 1
            }\`}</Option>
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
                  <Option key={\`\${index + 1}\`} value={\`\${index + 1}\`}>{\`\${
              index + 1
            }\`}</Option>
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
              placeholder="try to type \`b\`"
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
            `,
            renderChildren: () => (
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
                              <Option key={`${index + 1}`} value={`${index + 1}`}>{`${
                                index + 1
                              }`}</Option>
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
                              <Option key={`${index + 1}`} value={`${index + 1}`}>{`${
                                index + 1
                              }`}</Option>
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
            ),
          },
        ]}
      />

      <PropsSection
        title="anthoc"
        config={[
          {
            border: true,
            title: 'Select（单选）、MultipleSelect（多选）',
            data: [
              {
                params: 'showSearch',
                desc: '配置是否可搜索',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'placement',
                desc: '选择框弹出的位置',
                type: 'bottomLeft bottomRight topLeft topRight',
                defaultVal: 'bottomLeft',
              },
              {
                params: 'filterOption',
                desc: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false',
                type: 'boolean | function(inputValue, option)',
                defaultVal:
                  '(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/select-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'TreeSelect',
            data: [
              {
                params: 'showSearch',
                desc: '配置是否可搜索',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'placement',
                desc: '选择框弹出的位置',
                type: 'bottomLeft bottomRight topLeft topRight',
                defaultVal: 'bottomLeft',
              },
              {
                params: 'treeNodeFilterProp',
                desc: '输入项过滤对应的 treeNode 属性',
                type: 'string',
                defaultVal: 'title',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/tree-select-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'AutoComplete',
            data: [
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'filterOption',
                desc: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false',
                type: 'boolean | function(inputValue, option)',
                defaultVal:
                  '(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/auto-complete-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'DatePicker、RangePicker、TimePicker',
            data: [
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'placement',
                desc: '选择框弹出的位置',
                type: 'bottomLeft bottomRight topLeft topRight',
                defaultVal: 'bottomLeft',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/date-picker-cn#api、https://ant.design/components/time-picker-cn',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'Cascader',
            data: [
              {
                params: 'showSearch',
                desc: '配置是否可搜索',
                type: 'boolean',
                defaultVal: `{
                  filter: (inputValue, path) =>
                    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1),
                },`,
              },
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'placement',
                desc: '选择框弹出的位置',
                type: 'bottomLeft bottomRight topLeft topRight',
                defaultVal: 'bottomLeft',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/cascader-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'Upload',
            data: [
              {
                params: 'name',
                desc: '发到后台的文件参数名',
                type: 'string',
                defaultVal: 'file',
              },
              {
                params: 'withCredentials',
                desc: '上传请求时是否携带 cookie',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/upload-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'Modal',
            data: [
              {
                params: 'closable',
                desc: '是否显示右上角的关闭按钮',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'centered',
                desc: '垂直居中展示 Modal',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'maskClosable',
                desc: '点击蒙层是否允许关闭',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'destroyOnClose',
                desc: '关闭时销毁 Modal 里的子元素',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'zIndex',
                desc: '设置 Modal 的 z-index',
                type: 'number',
                defaultVal: 'Resource.Dict.value.ResourceNormalMaxZIndex.value',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/modal-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'Input、TextArea',
            data: [
              {
                params: 'allowClear',
                desc: '可以点击清除图标删除内容',
                type: 'boolean | { clearIcon: ReactNode }',
                defaultVal: 'true',
              },
              {
                params: 'maxLength',
                desc: '最大长度',
                type: 'number',
                defaultVal: '1000',
              },
              {
                params: 'showCount',
                desc: '是否展示字数',
                type: 'boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }',
                defaultVal: 'true',
              },
              {
                params: 'autoSize（适用于TextArea）',
                desc: '自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
                type: 'boolean | object',
                defaultVal: 'false',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/input-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title:
              'InputNumberDecimal1（1位小数）、InputNumberDecimal2（2位小数）、InputNumberInteger（整数）',
            data: [
              {
                params: 'precision',
                desc: '数值精度，配置 formatter 时会以 formatter 为准',
                type: 'number',
                defaultVal:
                  'InputNumberDecimal1 = 1、 InputNumberDecimal2 = 2、 InputNumberInteger = 0',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/input-number-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'SubmitButton（默认点击显示loading,通过onClick事件返回promise来取消loading）',
            data: [
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/button-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
