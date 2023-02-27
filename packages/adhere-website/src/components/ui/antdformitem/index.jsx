import { Space as AntdSpace, Avatar, Button, Checkbox, List } from 'antd';
import React, { useState } from 'react';

import { UploadOutlined } from '@ant-design/icons';
import { AntdFormItem, FlexLayout, Space } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

const { Option } = AntdFormItem.AntFormItemNormalize.Select;

AntdFormItem.AntFormItemNormalize.Input.defaultProps.maxLength = 2000;

const { ScrollLayout } = FlexLayout;

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [val, setVal] = useState();
  const [vals, setVals] = useState([]);
  const [listVals, setListVals] = useState([]);
  const [autoCompleteValue, setAutoCompleteValue] = useState({
    inputValue: '',
    selectValue: '',
  });

  const listRenderItem = (item) => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={<a href="https://ant.design">{item.name}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  );

  return (
    <PlayGroundPage>
      <Section title="AntdFormItem">
        <p>Antd的FormItem进阶</p>
        <ul>
          <li>对antd一些表单组件进行normalize处理</li>
          <li>从Dict(adhere-util-dict)自动生成FormItem</li>
        </ul>
      </Section>

      <CodeBoxSection
        title="Normalize"
        config={[
          {
            id: `p1`,
            name: `Normalize可以查询合清除的控件`,
            cardProps: {
              description: {
                title: '带有查询合清除的控件',
                info: '默认都可以进行查询合清除',
              },
            },
            type: 'PlayGroundMulit',
            config: [
              {
                title: 'Select',
                mode: 'code',
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
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
                theme: 'eclipse',
                scope: { React },
                codeText: `
  // 默认normalize
  {
    precision: 0,
  }
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
  import { AntdFormItem, FlexLayout, Space } from '@baifendian/adhere';

  const { Option } = AntdFormItem.AntFormItemNormalize.Select;

  const { ScrollLayout } = FlexLayout;

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
                  <Option key={\`\${index + 1}\`} value={\`\${index + 1}\`}>{\`\${
              index + 1
            }\`}</Option>
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
                  <Option key={\`\${index + 1}\`} value={\`\${index + 1}\`}>{\`\${
              index + 1
            }\`}</Option>
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
              placeholder="try to type \`b\`"
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
                        <AntdFormItem.AntFormItemNormalize.Select style={{ width: 200 }}>
                          {Array.from({ length: 150 })
                            .fill(1)
                            .map((t, index) => (
                              <Option key={`${index + 1}`} value={`${index + 1}`}>{`${
                                index + 1
                              }`}</Option>
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
                              <Option key={`${index + 1}`} value={`${index + 1}`}>{`${
                                index + 1
                              }`}</Option>
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
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Radio(字典中以Radio或DynamicRadio结尾)"
        config={[
          {
            id: 'p1',
            name: 'Radio横向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio横向',
                info: 'Radio横向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioHorizontalFormItem
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioHorizontalFormItem
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p2',
            name: 'Radio纵向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio纵向',
                info: 'Radio纵向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioVerticalFormItem
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioVerticalFormItem
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: 'Radio的Button',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio的Button',
                info: 'Radio的Button`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioButtonFormItem
      buttonStyle="solid"
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioButtonFormItem
                buttonStyle="solid"
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: 'Radio的Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio的Select',
                info: 'Radio的Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioSelectFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioSelectFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p5',
            name: 'Radio的自定义',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio的自定义',
                info: 'Radio的自定义',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { Space as AntdSpace } from 'antd';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioCustomFormItem
      optionType="button"
      buttonStyle="solid"
      value={val}
      onChange={(v) => setVal(v)}
    >
      {(data) => <AntdSpace size={8}>{data.map(({ item }) => item)}</AntdSpace>}
    </AntdFormItem.FormItemGeneratorToDict.SystemTestRadioCustomFormItem>
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestRadioCustomFormItem
                optionType="button"
                buttonStyle="solid"
                value={val}
                onChange={(v) => setVal(v)}
              >
                {(data) => <AntdSpace size={8}>{data.map(({ item }) => item)}</AntdSpace>}
              </AntdFormItem.FormItemGeneratorToDict.SystemTestRadioCustomFormItem>
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Checkbox(字典中以Checkbox或DynamicCheckbox结尾)"
        config={[
          {
            id: 'p1',
            name: 'Checkbox横向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox横向',
                info: 'Checkbox横向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxHorizontalFormItem
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxHorizontalFormItem
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p2',
            name: 'Checkbox纵向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox纵向',
                info: 'Checkbox纵向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxVerticalFormItem
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxVerticalFormItem
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: 'Checkbox横向全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox横向全选',
                info: 'Checkbox横向全选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllVerticalFormItem
      buttonStyle="solid"
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllVerticalFormItem
                buttonStyle="solid"
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: 'Checkbox纵向全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox纵向全选',
                info: 'Checkbox纵向全选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllHorizontalFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllHorizontalFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p5',
            name: 'Checkbox的Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox的Select',
                info: 'Checkbox的Select',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxSelectFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxSelectFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p6',
            name: 'Checkbox的CheckAllSelect',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox的CheckAllSelect',
                info: 'Checkbox的CheckAllSelect',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllSelectFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllSelectFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p7',
            name: '自定义CheckBox',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '自定义CheckBox',
                info: '自定义CheckBox',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import {Space as AntdSpace, Checkbox} from 'antd';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCustomFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    >
      {(dataSource) => (
        <AntdSpace size={8}>
          {dataSource.map(({ data }) => (
            <Checkbox key={data.value} value={data.value}>
              {data.label}
            </Checkbox>
          ))}
        </AntdSpace>
      )}
    </AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCustomFormItem>
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCustomFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              >
                {(dataSource) => (
                  <AntdSpace size={8}>
                    {dataSource.map(({ data }) => (
                      <Checkbox key={data.value} value={data.value}>
                        {data.label}
                      </Checkbox>
                    ))}
                  </AntdSpace>
                )}
              </AntdFormItem.FormItemGeneratorToDict.SystemTestCheckBoxCustomFormItem>
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Select"
        config={[
          {
            id: 'p1',
            name: 'Select单选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Select单选',
                info: 'Select单选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestSelectFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestSelectFormItem
                style={{ width: 200 }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p2',
            name: 'Select多选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Select多选',
                info: 'Select多选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestSelectMulitFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestSelectMulitFormItem
                style={{ width: 300 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: 'Select全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Select全选',
                info: 'Select全选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestSelectCheckAllMulitFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestSelectCheckAllMulitFormItem
                style={{ width: 300 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: 'AutoComplete的单选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'AutoComplete的单选',
                info: 'AutoComplete的单选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestAutoCompleteSelectFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestAutoCompleteSelectFormItem
                style={{ width: 200 }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p5',
            name: 'AutoComplete的多选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'AutoComplete的多选',
                info: 'AutoComplete的多选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestAutoCompleteSelectMulitFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestAutoCompleteSelectMulitFormItem
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p6',
            name: 'AutoComplete的全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'AutoComplete的全选',
                info: 'AutoComplete的全选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestAutoCompleteSelectCheckAllMulitFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestAutoCompleteSelectCheckAllMulitFormItem
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - TreeSelect"
        config={[
          {
            id: 'p1',
            name: 'TreeSelect单选(能选任意节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'TreeSelect单选(能选任意节点)',
                info: 'TreeSelect单选(能选任意节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTreeFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTreeFormItem
                style={{ width: 200 }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p2',
            name: 'TreeSelect单选(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'TreeSelect单选(只能选叶子节点)',
                info: 'TreeSelect单选(只能选叶子节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTreeLeafFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTreeLeafFormItem
                style={{ width: 200 }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: 'TreeSelect多选(能选任意节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'TreeSelect多选(能选任意节点)',
                info: 'TreeSelect多选(能选任意节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTreeMulitFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTreeMulitFormItem
                style={{ width: 300 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: 'TreeSelect多选(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'TreeSelect多选(只能选叶子节点)',
                info: 'TreeSelect多选(只能选叶子节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTreeLeafMulitFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTreeLeafMulitFormItem
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Transfer"
        config={[
          {
            id: 'p1',
            name: '基本',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本',
                info: '基本`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTransferFormItem
      targetKeys={vals}
      onChange={(v) => {
        setVals(v);
      }}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTransferFormItem
                targetKeys={vals}
                onChange={(v) => {
                  setVals(v);
                }}
              />
            ),
          },
          {
            id: 'p2',
            name: 'SelectFormItem',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'SelectFormItem',
                info: 'SelectFormItem`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTransferSelectFormItem
      selectProps={{
        style: { width: 300 },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTransferSelectFormItem
                selectProps={{
                  style: { width: 300 },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Table"
        config={[
          {
            id: 'p1',
            name: '普通不带分页',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通不带分页',
                info: '普通不带分页`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTableFormItem
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTableFormItem
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
              />
            ),
          },
          {
            id: 'p2',
            name: '普通单选Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通单选Select',
                info: '普通单选Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTableSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTableSelectFormItem
                selectProps={{
                  style: {
                    width: 1024,
                  },
                }}
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: '普通多选Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通多选Select',
                info: '普通多选Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTableMulitSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTableMulitSelectFormItem
                selectProps={{
                  style: {
                    width: 1024,
                  },
                }}
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: '分页的动态数据',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据',
                info: '分页的动态数据`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTablePaginationFormItem
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTablePaginationFormItem
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
              />
            ),
          },
          {
            id: 'p5',
            name: '分页的动态数据Select单选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据Select单选',
                info: '分页的动态数据Select单选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTablePaginationSelectFormItem
      selectProps={{
        style: { width: 1024 },
      }}
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
      value={val}
      onChange={(v) => {
        if (typeof v !== 'object') {
          setVal(v);
        }
      }}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTablePaginationSelectFormItem
                selectProps={{
                  style: { width: 1024 },
                }}
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
                value={val}
                onChange={(v) => {
                  if (typeof v !== 'object') {
                    setVal(v);
                  }
                }}
              />
            ),
          },
          {
            id: 'p6',
            name: '分页的动态数据Select多选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据Select多选',
                info: '分页的动态数据Select多选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestTablePaginationMulitSelectFormItem
      selectProps={{
        style: { width: 1024 },
      }}
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
      value={vals}
      onChange={(v) => {
        if (typeof v !== 'object') {
          setVals(v);
        }
      }}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestTablePaginationMulitSelectFormItem
                selectProps={{
                  style: { width: 1024 },
                }}
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
                value={vals}
                onChange={(v) => {
                  if (Array.isArray(v)) {
                    setVals(v);
                  }
                }}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Cascader"
        config={[
          {
            id: 'p1',
            name: 'Cascader(能选任意节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader(能选任意节点)',
                info: 'Cascader(能选任意节点)',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCascaderFormItem
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCascaderFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },
          {
            id: 'p2',
            name: 'Cascader(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader(只能选叶子节点)',
                info: 'Cascader(只能选叶子节点)',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCascaderLeafFormItem
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCascaderLeafFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },
          {
            id: 'p3',
            name: 'Cascader多选(能选任意节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader多选(能选任意节点)',
                info: 'Cascader多选(能选任意节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCascaderMulitFormItem
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCascaderMulitFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },
          {
            id: 'p4',
            name: 'Cascader多选(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader多选(只能选叶子节点)',
                info: 'Cascader多选(只能选叶子节点)',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestCascaderLeafMulitFormItem
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestCascaderLeafMulitFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - List"
        config={[
          {
            id: 'p1',
            name: '普通不带分页',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通不带分页',
                info: '普通不带分页`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestListFormItem
      renderItem={listRenderItem}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestListFormItem
                renderItem={listRenderItem}
              />
            ),
          },
          {
            id: 'p2',
            name: '普通单选Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通单选Select',
                info: '普通单选Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestListSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      renderItem={listRenderItem}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestListSelectFormItem
                selectProps={{
                  style: {
                    width: 1024,
                  },
                }}
                renderItem={listRenderItem}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: '普通多选Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通多选Select',
                info: '普通多选Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestListMulitSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      renderItem={listRenderItem}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestListMulitSelectFormItem
                selectProps={{
                  style: {
                    width: 1024,
                  },
                }}
                renderItem={listRenderItem}
                value={listVals}
                onChange={(v) => setListVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: '分页的动态数据',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据',
                info: '分页的动态数据`',
              },
            },
            codeText: `
  import React from 'react';
  import { List,Avatar } from 'antd';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestListPaginationFormItem
      renderItem={listRenderItem}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestListPaginationFormItem
                renderItem={listRenderItem}
              />
            ),
          },
          {
            id: 'p5',
            name: '分页的动态数据Select单选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据Select单选',
                info: '分页的动态数据Select单选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestListPaginationSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      renderItem={listRenderItem}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestListPaginationSelectFormItem
                selectProps={{
                  style: { width: 1024 },
                }}
                renderItem={listRenderItem}
                value={val}
                onChange={(v) => {
                  if (typeof v !== 'object') {
                    setVal(v);
                  }
                }}
              />
            ),
          },
          {
            id: 'p6',
            name: '分页的动态数据Select多选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据Select多选',
                info: '分页的动态数据Select多选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [listVals, setListVals] = useState([]);

    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <AntdFormItem.FormItemGeneratorToDict.SystemTestListPaginationMulitSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      renderItem={listRenderItem}
      value={listVals}
      onChange={(v) => {
        if (Array.isArray(v)) {
          setListVals(v);
        }
      }}
    />
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestListPaginationMulitSelectFormItem
                selectProps={{
                  style: { width: 1024 },
                }}
                renderItem={listRenderItem}
                value={listVals}
                onChange={(v) => {
                  if (Array.isArray(v)) {
                    setListVals(v);
                  }
                }}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - AutoComplete"
        config={[
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem } from '@baifendian/adhere';

  export default () => {
    const [autoCompleteValue, setAutoCompleteValue] = useState({
      inputValue: '',
      selectValue: '',
    });

    return (
      <AntdFormItem.FormItemGeneratorToDict.SystemTestAutoCompleteFormItem
        style={{ width: 200 }}
        value={autoCompleteValue}
        onChange={(v) => {
          setAutoCompleteValue(v);
        }}
      />
    )
  }
            `,
            renderChildren: () => (
              <AntdFormItem.FormItemGeneratorToDict.SystemTestAutoCompleteFormItem
                style={{ width: 200 }}
                value={autoCompleteValue}
                onChange={(v) => {
                  setAutoCompleteValue(v);
                }}
              />
            ),
          },
        ]}
      />

      {/*<PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [],
          },
        ]}
      />*/}
    </PlayGroundPage>
  );
};
