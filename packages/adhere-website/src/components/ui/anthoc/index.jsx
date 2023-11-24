import { Input } from 'antd';
import React, { useState } from 'react';
import reactElementToJsxString from 'react-element-to-jsx-string';

/**
 * input
 * text-area
 * input-number-decimal1
 * input-number-decimal2
 * input-number-integer
 * modal
 * range-picker
 * time-picker
 * upload
 * pagination
 * submit-button
 * form
 *
 * transfer
 * select
 * multiple-select
 * radio
 * checkbox
 * tag
 * list
 * table
 * tree-select
 * cascader
 * auto-complete
 */
import { UploadOutlined } from '@ant-design/icons';
import { FlexLayout, Space } from '@baifendian/adhere';
import {
  Button,
  DatePicker,
  Form,
  Input as InputHOC,
  InputNumberDecimal1,
  InputNumberDecimal2,
  InputNumberInteger,
  Modal,
  Pagination,
  RangePicker,
  SubmitButton,
  TextArea,
  TimePicker,
  Upload,
} from '@baifendian/adhere-ui-anthoc';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';
import Util from '@/util';

import AutoComplete from './examples/AutoComplete/AutoComplete';
import AutoCompleteSelectInput from './examples/AutoComplete/AutoCompleteSelectInput';
import AsyncCascader from './examples/Cascader/AsyncCascader';
import AsyncCascaderChangeOnSelect from './examples/Cascader/AsyncCascaderChangeOnSelect';
import AsyncCascaderEcho from './examples/Cascader/AsyncCascaderEcho';
import AsyncCascaderMulti from './examples/Cascader/AsyncCascaderMulti';
import AsyncCascaderMultiEcho from './examples/Cascader/AsyncCascaderMultiEcho';
import AsyncCascaderShowChild from './examples/Cascader/AsyncCascaderShowChild';
import Cascader from './examples/Cascader/Cascader';
import CascaderChangeOnSelect from './examples/Cascader/CascaderChangeOnSelect';
import CascaderMulti from './examples/Cascader/CascaderMulti';
import CascaderShowChild from './examples/Cascader/CascaderShowChild';
import FlatAsyncCascader from './examples/Cascader/FlatAsyncCascader';
import FlatCascader from './examples/Cascader/FlatCascader';
import AutoCompleteCheckAllCheckboxSelect from './examples/Checkbox/AutoCompleteCheckAllCheckboxSelect';
import AutoCompleteCheckAllCustomCheckboxSelect from './examples/Checkbox/AutoCompleteCheckAllCustomCheckboxSelect';
import AutoCompleteCheckboxSelect from './examples/Checkbox/AutoCompleteCheckboxSelect';
import AutoCompleteCustomCheckboxSelect from './examples/Checkbox/AutoCompleteCustomCheckboxSelect';
import CheckAllCheckboxSelect from './examples/Checkbox/CheckAllCheckboxSelect';
import CheckAllCustomCheckboxSelect from './examples/Checkbox/CheckAllCustomCheckboxSelect';
import Checkbox from './examples/Checkbox/Checkbox';
import CheckboxSelect from './examples/Checkbox/CheckboxSelect';
import CustomCheckAllCheckbox from './examples/Checkbox/CustomCheckAllCheckbox';
import CustomCheckbox from './examples/Checkbox/CustomCheckbox';
import CustomCheckboxSelect from './examples/Checkbox/CustomCheckboxSelect';
import HorizontalCheckAllCheckbox from './examples/Checkbox/HorizontalCheckAllCheckbox';
import HorizontalCheckbox from './examples/Checkbox/HorizontalCheckbox';
import VerticalCheckAllCheckbox from './examples/Checkbox/VerticalCheckAllCheckbox';
import VerticalCheckbox from './examples/Checkbox/VerticalCheckbox';
import AutoCompleteCheckAllListSelect from './examples/List/AutoCompleteCheckAllListSelect';
import AutoCompleteListPagingSelect from './examples/List/AutoCompleteListPagingSelect';
import AutoCompleteListSelect from './examples/List/AutoCompleteListSelect';
import CheckAllListSelect from './examples/List/CheckAllListSelect';
import CheckboxListPaging from './examples/List/CheckboxListPaging';
import CheckboxListPagingSelect from './examples/List/CheckboxListPagingSelect';
import CheckboxListSelect from './examples/List/CheckboxListSelect';
import List from './examples/List/List';
import RadioListPaging from './examples/List/RadioListPaging';
import RadioListPagingSelect from './examples/List/RadioListPagingSelect';
import RadioListSelect from './examples/List/RadioListSelect';
import SuspenseListPaging from './examples/List/SuspenseListPaging';
import AutoCompleteButtonRadioSelect from './examples/Radio/AutoCompleteButtonRadioSelect';
import AutoCompleteCustomRadioSelect from './examples/Radio/AutoCompleteCustomRadioSelect';
import AutoCompleteRadioSelect from './examples/Radio/AutoCompleteRadioSelect';
import ButtonRadio from './examples/Radio/ButtonRadio';
import ButtonRadioSelect from './examples/Radio/ButtonRadioSelect';
import CustomRadio from './examples/Radio/CustomRadio';
import CustomRadioSelect from './examples/Radio/CustomRadioSelect';
import HorizontalRadio from './examples/Radio/HorizontalRadio';
import Radio from './examples/Radio/Radio';
import RadioSelect from './examples/Radio/RadioSelect';
import VerticalRadio from './examples/Radio/VerticalRadio';
import AutoCompleteCheckAllMultipleSelect from './examples/Select/AutoCompleteCheckAllMultipleSelect';
import AutoCompleteMultipleSelect from './examples/Select/AutoCompleteMultipleSelect';
import AutoCompleteSelect from './examples/Select/AutoCompleteSelect';
import CheckAllMultipleSelect from './examples/Select/CheckAllMultipleSelect';
import DropdownRenderSelect from './examples/Select/DropdownRenderSelect';
import MultipleSelect from './examples/Select/MultipleSelect';
import Select from './examples/Select/Select';
import AutoCompleteTablePagingSelect from './examples/Table/AutoCompleteTablePagingSelect';
import AutoCompleteTableSelect from './examples/Table/AutoCompleteTableSelect';
import CheckboxTablePaging from './examples/Table/CheckboxTablePaging';
import CheckboxTablePagingSelect from './examples/Table/CheckboxTablePagingSelect';
import CheckboxTableSelect from './examples/Table/CheckboxTablePagingSelect';
import RadioTablePaging from './examples/Table/RadioTablePaging';
import RadioTablePagingSelect from './examples/Table/RadioTablePagingSelect';
import RadioTableSelect from './examples/Table/RadioTableSelect';
import SuspenseTablePaging from './examples/Table/SuspenseTablePaging';
import Table from './examples/Table/Table';
import AutoCompleteCheckAllTagSelect from './examples/Tag/AutoCompleteCheckAllTagSelect';
import AutoCompleteTagSelect from './examples/Tag/AutoCompleteTagSelect';
import CheckAllTagSelect from './examples/Tag/CheckAllTagSelect';
import HorizontalCheckAllCheckableTagGroup from './examples/Tag/HorizontalCheckAllCheckableTagGroup';
import HorizontalCheckableTagGroup from './examples/Tag/HorizontalCheckableTagGroup';
import HorizontalTagGroup from './examples/Tag/HorizontalTagGroup';
import Tag from './examples/Tag/Tag';
import TagSelect from './examples/Tag/TagSelect';
import VerticalCheckAllCheckableTagGroup from './examples/Tag/VerticalCheckAllCheckableTagGroup';
import VerticalCheckableTagGroup from './examples/Tag/VerticalCheckableTagGroup';
import VerticalTagGroup from './examples/Tag/VerticalTagGroup';
import AutoCompleteTransferSelect from './examples/Transfer/AutoCompleteTransferSelect';
import Transfer from './examples/Transfer/Transfer';
import TransferSelect from './examples/Transfer/TransferSelect';
import AsyncTreeCheckedShowAllSelect from './examples/TreeSelect/AsyncTreeCheckedShowAllSelect';
import AsyncTreeCheckedShowChildSelect from './examples/TreeSelect/AsyncTreeCheckedShowChildSelect';
import AsyncTreeCheckedShowParentSelect from './examples/TreeSelect/AsyncTreeCheckedShowParentSelect';
import AsyncTreeLeafSelect from './examples/TreeSelect/AsyncTreeLeafSelect';
import AsyncTreeMultiLeafSelect from './examples/TreeSelect/AsyncTreeMultiLeafSelect';
import AsyncTreeMultiLeafSelectEcho from './examples/TreeSelect/AsyncTreeMultiLeafSelectEcho';
import AsyncTreeMultiSelect from './examples/TreeSelect/AsyncTreeMultiSelect';
import AsyncTreeMultiSelectEcho from './examples/TreeSelect/AsyncTreeMultiSelectEcho';
import AsyncTreeSelect from './examples/TreeSelect/AsyncTreeSelect';
import AsyncTreeSelectEcho from './examples/TreeSelect/AsyncTreeSelectEcho';
import FlatAsyncTreeMultiSelectEcho from './examples/TreeSelect/FlatAsyncTreeMultiSelectEcho';
import FlatAsyncTreeSelect from './examples/TreeSelect/FlatAsyncTreeSelect';
import FlatTreeSelect from './examples/TreeSelect/FlatTreeSelect';
import TreeCheckedShowAllSelect from './examples/TreeSelect/TreeCheckedShowAllSelect';
import TreeCheckedShowChildSelect from './examples/TreeSelect/TreeCheckedShowChildSelect';
import TreeCheckedShowParentSelect from './examples/TreeSelect/TreeCheckedShowParentSelect';
import TreeLeafSelect from './examples/TreeSelect/TreeLeafSelect';
import TreeMultiLeafSelect from './examples/TreeSelect/TreeMultiLeafSelect';
import TreeMultiSelect from './examples/TreeSelect/TreeMultiSelect';
import TreeSelect from './examples/TreeSelect/TreeSelect';

// Input.defaultProps.maxLength = 2000;

const { ScrollLayout } = FlexLayout;

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('a======', reactElementToJsxString(<FlexLayout />));
  // console.log('a======', reactElementToJsxString(<Input type="primary" />));

  <Input type="primary" />;

  console.log('b======', <FlexLayout type="primary" />);

  const basicHOCConfig = [
    {
      id: `Input`,
      name: `Input`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'Input',
          info: '使用了默认配置',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <Input
            placeholder="请输入"
            style={{
              width: 200,
            }}
          />
        ),
        displayName: 'Input',
      }),
      renderChildren: () => (
        <Input
          placeholder="请输入"
          style={{
            width: 200,
          }}
        />
      ),
    },
    {
      id: `TextArea`,
      name: `TextArea`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'TextArea',
          info: '使用了默认配置',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <TextArea
            placeholder="请输入"
            style={{
              width: 200,
            }}
          />
        ),
        displayName: 'TextArea',
      }),
      renderChildren: () => (
        <TextArea
          placeholder="请输入"
          style={{
            width: 200,
          }}
        />
      ),
    },
    {
      id: `InputNumberDecimal1`,
      name: `InputNumberDecimal1`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'InputNumberDecimal1',
          info: '只能输入一位小数',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <InputNumberDecimal1
            placeholder="请输入"
            style={{
              width: 200,
            }}
          />
        ),
        displayName: 'InputNumberDecimal1',
      }),
      renderChildren: () => (
        <InputNumberDecimal1
          placeholder="请输入"
          style={{
            width: 200,
          }}
        />
      ),
    },
    {
      id: `InputNumberDecimal2`,
      name: `InputNumberDecimal2`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'InputNumberDecimal2',
          info: '只能输入两位小鼠',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <InputNumberDecimal2
            placeholder="请输入"
            style={{
              width: 200,
            }}
          />
        ),
        displayName: 'InputNumberDecimal2',
      }),
      renderChildren: () => (
        <InputNumberDecimal2
          placeholder="请输入"
          style={{
            width: 200,
          }}
        />
      ),
    },
    {
      id: `InputNumberInteger`,
      name: `InputNumberInteger`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'InputNumberInteger',
          info: '只能输入整数',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <InputNumberInteger
            placeholder="请输入"
            style={{
              width: 200,
            }}
          />
        ),
        displayName: 'InputNumberInteger',
      }),
      renderChildren: () => (
        <InputNumberInteger
          placeholder="请输入"
          style={{
            width: 200,
          }}
        />
      ),
    },
    {
      id: `Modal`,
      name: `Modal`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'Modal',
          info: '使用了默认配置',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
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
        ),
        displayName: '',
      }),
      renderChildren: () => (
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
      ),
    },
    {
      id: `DatePicker`,
      name: `DatePicker`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'DatePicker',
          info: '使用了默认配置',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <DatePicker
            style={{
              width: 200,
            }}
          />
        ),
        displayName: 'DatePicker',
      }),
      renderChildren: () => (
        <DatePicker
          style={{
            width: 200,
          }}
        />
      ),
    },
    {
      id: `RangePicker`,
      name: `RangePicker`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'RangePicker',
          info: '使用了默认配置',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <RangePicker
            style={{
              width: 200,
            }}
          />
        ),
        displayName: 'RangePicker',
      }),
      renderChildren: () => (
        <RangePicker
          style={{
            width: 200,
          }}
        />
      ),
    },
    {
      id: `TimePicker`,
      name: `TimePicker`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'TimePicker',
          info: '使用了默认配置',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <TimePicker
            style={{
              width: 200,
            }}
          />
        ),
        displayName: 'TimePicker',
      }),
      renderChildren: () => (
        <TimePicker
          style={{
            width: 200,
          }}
        />
      ),
    },
    {
      id: `Upload`,
      name: `Upload`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'Upload',
          info: '使用了默认配置',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
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
        ),
        displayName: 'Upload',
      }),
      renderChildren: () => (
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
      ),
    },
    {
      id: `Pagination`,
      name: `Pagination`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'Pagination',
          info: '使用了默认配置',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: <Pagination defaultCurrent={1} total={50} />,
        displayName: 'Pagination',
      }),
      renderChildren: () => <Pagination defaultCurrent={1} total={50} />,
    },
    {
      id: `SubmitButton`,
      name: `SubmitButton`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'SubmitButton',
          info: '提交按钮',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <SubmitButton
            style={{
              width: 200,
            }}
            type="primary"
            onClick={() => new Promise((resolve) => setTimeout(resolve, 3000))}
          >
            提交
          </SubmitButton>
        ),
        displayName: 'SubmitButton',
      }),
      renderChildren: () => (
        <SubmitButton
          style={{
            width: 200,
          }}
          type="primary"
          onClick={() => new Promise((resolve) => setTimeout(resolve, 3000))}
        >
          提交
        </SubmitButton>
      ),
    },
    {
      id: `Form`,
      name: `Form`,
      mode: 'code',
      scope: { React },
      cardProps: {
        description: {
          title: 'Form',
          info: '使用了默认配置',
        },
      },
      type: 'PlayGround',
      codeText: Util.reactElementToJsxStringById({
        element: (
          <div>
            <p>
              对Form的Rules进行增强(
              <a target="_blank" href="/adhere/component/util/validator">
                使用adhere-util-validator
              </a>
              )
            </p>

            <Form labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
              <ul>
                <Space.Group direction="vertical">
                  <li>
                    <Form.Item
                      name="email"
                      label="email"
                      rules={[Form.ValidatorRules.isEmail({ invalidMessage: 'email格式错误' })]}
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
          </div>
        ),
        displayName: '',
      }),
      renderChildren: () => (
        <div>
          <p>
            对Form的Rules进行增强(
            <a target="_blank" href="/adhere/component/util/validator">
              使用adhere-util-validator
            </a>
            )
          </p>

          <Form labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
            <ul>
              <Space.Group direction="vertical">
                <li>
                  <Form.Item
                    name="email"
                    label="email"
                    rules={[Form.ValidatorRules.isEmail({ invalidMessage: 'email格式错误' })]}
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
        </div>
      ),
    },
  ];

  return (
    <PlayGroundPage>
      <Section title="AntHOC">
        <p>Antd组件HOC和增强</p>
        <ul>
          <li>对antd一些组件进行HOC处理同时对有些组件在HOC的同时进行增强处理</li>
        </ul>
      </Section>

      <CodeBoxSection title="BasicHOC" config={basicHOCConfig} />

      <CodeBoxSection
        title="TransferHOC"
        config={[
          {
            id: `Transfer`,
            name: `Transfer`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Transfer',
                info: '使用了默认配置',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <Transfer />,
          },
          {
            id: `TransferSelect`,
            name: `TransferSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TransferSelect',
                info: '穿梭框的Select形式',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <TransferSelect />,
          },
          {
            id: `AutoCompleteTransferSelect`,
            name: `AutoCompleteTransferSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteTransferSelect',
                info: '穿梭框的自动补全形式',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteTransferSelect />,
          },
        ]}
      />

      <CodeBoxSection
        title="SelectHOC"
        config={[
          {
            id: `Select`,
            name: `Select`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Select',
                info: '使用了默认配置',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <Select />,
          },
          {
            id: `MultipleSelect`,
            name: `MultipleSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'MultipleSelect',
                info: '多选',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <MultipleSelect />,
          },
          {
            id: `CheckAllMultipleSelect`,
            name: `CheckAllMultipleSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllMultipleSelect',
                info: '带有全选的多选',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckAllMultipleSelect />,
          },
          {
            id: `DropdownRenderSelect`,
            name: `DropdownRenderSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'DropdownRenderSelect',
                info: '可以自定义渲染的Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <DropdownRenderSelect />,
          },
          {
            id: `AutoCompleteSelect`,
            name: `AutoCompleteSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteSelect',
                info: '自动补全的Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteSelect />,
          },
          {
            id: `AutoCompleteMultipleSelect`,
            name: `AutoCompleteMultipleSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteMultipleSelect',
                info: '自动补全的多选Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteMultipleSelect />,
          },
          {
            id: `AutoCompleteCheckAllMultipleSelect`,
            name: `AutoCompleteCheckAllMultipleSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckAllMultipleSelect',
                info: '自动补全的多选且带全选的Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteCheckAllMultipleSelect />,
          },
        ]}
      />

      <CodeBoxSection
        title="RadioHOC"
        config={[
          {
            id: `Radio`,
            name: `Radio`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Radio',
                info: '使用了默认配置',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <Radio />,
          },
          {
            id: `VerticalRadio`,
            name: `VerticalRadio`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'VerticalRadio',
                info: '竖向的RadioGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <VerticalRadio />,
          },
          {
            id: `HorizontalRadio`,
            name: `HorizontalRadio`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'HorizontalRadio',
                info: '横向的RadioGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <HorizontalRadio />,
          },
          {
            id: `CustomRadio`,
            name: `CustomRadio`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CustomRadio',
                info: '自定义的RadioGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CustomRadio />,
          },
          {
            id: `ButtonRadio`,
            name: `ButtonRadio`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ButtonRadio',
                info: 'Button的RadioGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <ButtonRadio />,
          },
          {
            id: `RadioSelect`,
            name: `RadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioSelect',
                info: 'Radio的Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <RadioSelect />,
          },
          {
            id: `CustomRadioSelect`,
            name: `CustomRadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CustomRadioSelect',
                info: '自定义Radio的Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CustomRadioSelect />,
          },
          {
            id: `ButtonRadioSelect`,
            name: `ButtonRadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ButtonRadioSelect',
                info: 'ButtonRadioSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <ButtonRadioSelect />,
          },
          {
            id: `AutoCompleteRadioSelect`,
            name: `AutoCompleteRadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteRadioSelect',
                info: 'AutoCompleteRadioSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteRadioSelect />,
          },
          {
            id: `AutoCompleteCustomRadioSelect`,
            name: `AutoCompleteCustomRadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCustomRadioSelect',
                info: 'AutoCompleteCustomRadioSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteCustomRadioSelect />,
          },
          {
            id: `AutoCompleteButtonRadioSelect`,
            name: `AutoCompleteButtonRadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteButtonRadioSelect',
                info: 'AutoCompleteButtonRadioSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteButtonRadioSelect />,
          },
        ]}
      />

      <CodeBoxSection
        title="CheckboxHOC"
        config={[
          {
            id: `Checkbox`,
            name: `Checkbox`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Checkbox',
                info: '使用了默认配置',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <Checkbox />,
          },
          {
            id: `CheckboxSelect`,
            name: `CheckboxSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxSelect',
                info: 'CheckboxSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckboxSelect />,
          },
          {
            id: `CustomCheckbox`,
            name: `CustomCheckbox`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CustomCheckbox',
                info: '自定义的Checkbox',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CustomCheckbox />,
          },
          {
            id: `CustomCheckAllCheckbox`,
            name: `CustomCheckAllCheckbox`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CustomCheckAllCheckbox',
                info: 'CustomCheckAllCheckbox',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CustomCheckAllCheckbox />,
          },
          {
            id: `CustomCheckboxSelect`,
            name: `CustomCheckboxSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CustomCheckboxSelect',
                info: 'CustomCheckboxSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CustomCheckboxSelect />,
          },
          {
            id: `HorizontalCheckbox`,
            name: `HorizontalCheckbox`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'HorizontalCheckbox',
                info: '横向的Checkbox',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <HorizontalCheckbox />,
          },
          {
            id: `HorizontalCheckAllCheckbox`,
            name: `HorizontalCheckAllCheckbox`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'HorizontalCheckAllCheckbox',
                info: 'HorizontalCheckAllCheckbox',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <HorizontalCheckAllCheckbox />,
          },
          {
            id: `VerticalCheckbox`,
            name: `VerticalCheckbox`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'VerticalCheckbox',
                info: '竖向的Checkbox',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <VerticalCheckbox />,
          },
          {
            id: `VerticalCheckAllCheckbox`,
            name: `VerticalCheckAllCheckbox`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'VerticalCheckAllCheckbox',
                info: 'VerticalCheckAllCheckbox',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <VerticalCheckAllCheckbox />,
          },
          {
            id: `AutoCompleteCheckAllCheckboxSelect`,
            name: `AutoCompleteCheckAllCheckboxSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckAllCheckboxSelect',
                info: 'AutoCompleteCheckAllCheckboxSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteCheckAllCheckboxSelect />,
          },
          {
            id: `AutoCompleteCheckAllCustomCheckboxSelect`,
            name: `AutoCompleteCheckAllCustomCheckboxSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckAllCustomCheckboxSelect',
                info: 'AutoCompleteCheckAllCustomCheckboxSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteCheckAllCustomCheckboxSelect />,
          },
          {
            id: `AutoCompleteCheckboxSelect`,
            name: `AutoCompleteCheckboxSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckboxSelect',
                info: 'AutoCompleteCheckboxSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteCheckboxSelect />,
          },
          {
            id: `AutoCompleteCustomCheckboxSelect`,
            name: `AutoCompleteCustomCheckboxSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCustomCheckboxSelect',
                info: 'AutoCompleteCustomCheckboxSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteCustomCheckboxSelect />,
          },
          {
            id: `CheckAllCheckboxSelect`,
            name: `CheckAllCheckboxSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllCheckboxSelect',
                info: 'CheckAllCheckboxSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckAllCheckboxSelect />,
          },
          {
            id: `CheckAllCustomCheckboxSelect`,
            name: `CheckAllCustomCheckboxSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllCustomCheckboxSelect',
                info: 'CheckAllCustomCheckboxSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckAllCustomCheckboxSelect />,
          },
        ]}
      />

      <CodeBoxSection
        title="TagHOC"
        config={[
          {
            id: `Tag`,
            name: `Tag`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Tag',
                info: '使用了默认配置',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <Tag />,
          },
          {
            id: `VerticalTagGroup`,
            name: `VerticalTagGroup`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'VerticalTagGroup',
                info: 'VerticalTagGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <VerticalTagGroup />,
          },
          {
            id: `VerticalCheckableTagGroup`,
            name: `VerticalCheckableTagGroup`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'VerticalCheckableTagGroup',
                info: 'VerticalCheckableTagGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <VerticalCheckableTagGroup />,
          },
          {
            id: `VerticalCheckAllCheckableTagGroup`,
            name: `VerticalCheckAllCheckableTagGroup`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'VerticalCheckAllCheckableTagGroup',
                info: 'VerticalCheckAllCheckableTagGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <VerticalCheckAllCheckableTagGroup />,
          },
          {
            id: `HorizontalTagGroup`,
            name: `HorizontalTagGroup`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'HorizontalTagGroup',
                info: 'HorizontalTagGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <HorizontalTagGroup />,
          },
          {
            id: `HorizontalCheckableTagGroup`,
            name: `HorizontalCheckableTagGroup`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'HorizontalCheckableTagGroup',
                info: 'HorizontalCheckableTagGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <HorizontalCheckableTagGroup />,
          },
          {
            id: `HorizontalCheckAllCheckableTagGroup`,
            name: `HorizontalCheckAllCheckableTagGroup`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'HorizontalCheckAllCheckableTagGroup',
                info: 'HorizontalCheckAllCheckableTagGroup',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <HorizontalCheckAllCheckableTagGroup />,
          },
          {
            id: `TagSelect`,
            name: `TagSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TagSelect',
                info: 'TagSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <TagSelect />,
          },
          {
            id: `CheckAllTagSelect`,
            name: `CheckAllTagSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllTagSelect',
                info: 'CheckAllTagSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckAllTagSelect />,
          },
          {
            id: `AutoCompleteTagSelect`,
            name: `AutoCompleteTagSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteTagSelect',
                info: 'AutoCompleteTagSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteTagSelect />,
          },
          {
            id: `AutoCompleteCheckAllTagSelect`,
            name: `AutoCompleteCheckAllTagSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckAllTagSelect',
                info: 'AutoCompleteCheckAllTagSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteCheckAllTagSelect />,
          },
        ]}
      />

      <CodeBoxSection
        title="ListHOC"
        config={[
          {
            id: `List`,
            name: `List`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'List',
                info: '使用了默认配置',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <List />,
          },
          {
            id: `RadioListSelect`,
            name: `RadioListSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioListSelect',
                info: 'RadioListSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <RadioListSelect />,
          },
          {
            id: `RadioListPaging`,
            name: `RadioListPaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioListPaging',
                info: 'RadioListPaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <RadioListPaging />,
          },
          {
            id: `RadioListPagingSelect`,
            name: `RadioListPagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioListPagingSelect',
                info: 'RadioListPagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <RadioListPagingSelect />,
          },
          {
            id: `SuspenseListPaging`,
            name: `SuspenseListPaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseListPaging',
                info: 'SuspenseListPaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <SuspenseListPaging />,
          },
          {
            id: `CheckboxListSelect`,
            name: `CheckboxListSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxListSelect',
                info: 'CheckboxListSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckboxListSelect />,
          },
          {
            id: `CheckAllListSelect`,
            name: `CheckAllListSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllListSelect',
                info: 'CheckAllListSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckAllListSelect />,
          },
          {
            id: `CheckboxListPaging`,
            name: `CheckboxListPaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxListPaging',
                info: 'CheckboxListPaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckboxListPaging />,
          },
          {
            id: `CheckboxListPagingSelect`,
            name: `CheckboxListPagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxListPagingSelect',
                info: 'CheckboxListPagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckboxListPagingSelect />,
          },
          {
            id: `AutoCompleteCheckAllListSelect`,
            name: `AutoCompleteCheckAllListSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckAllListSelect',
                info: 'AutoCompleteCheckAllListSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteCheckAllListSelect />,
          },
          {
            id: `AutoCompleteListPagingSelect`,
            name: `AutoCompleteListPagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteListPagingSelect',
                info: 'AutoCompleteListPagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteListPagingSelect />,
          },
          {
            id: `AutoCompleteListSelect`,
            name: `AutoCompleteListSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteListSelect',
                info: 'AutoCompleteListSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteListSelect />,
          },
        ]}
      />

      <CodeBoxSection
        title="TableHOC"
        config={[
          {
            id: `Table`,
            name: `Table`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Table',
                info: '使用了默认配置',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <Table />,
          },
          {
            id: `SuspenseTablePaging`,
            name: `SuspenseTablePaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseTablePaging',
                info: 'SuspenseTablePaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <SuspenseTablePaging />,
          },
          {
            id: `RadioTableSelect`,
            name: `RadioTableSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioTableSelect',
                info: 'RadioTableSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <RadioTableSelect />,
          },
          {
            id: `RadioTablePagingSelect`,
            name: `RadioTablePagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioTablePagingSelect',
                info: 'RadioTablePagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <RadioTablePagingSelect />,
          },
          {
            id: `RadioTablePaging`,
            name: `RadioTablePaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioTablePaging',
                info: 'RadioTablePaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <RadioTablePaging />,
          },
          {
            id: `RadioTablePaging`,
            name: `RadioTablePaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioTablePaging',
                info: 'RadioTablePaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <RadioTablePaging />,
          },
          {
            id: `CheckboxTableSelect`,
            name: `CheckboxTableSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxTableSelect',
                info: 'CheckboxTableSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckboxTableSelect />,
          },
          {
            id: `CheckboxTablePagingSelect`,
            name: `CheckboxTablePagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxTablePagingSelect',
                info: 'CheckboxTablePagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckboxTablePagingSelect />,
          },
          {
            id: `CheckboxTablePaging`,
            name: `CheckboxTablePaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxTablePaging',
                info: 'CheckboxTablePaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CheckboxTablePaging />,
          },
          {
            id: `AutoCompleteTableSelect`,
            name: `AutoCompleteTableSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteTableSelect',
                info: 'AutoCompleteTableSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteTableSelect />,
          },
          {
            id: `AutoCompleteTablePagingSelect`,
            name: `AutoCompleteTablePagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteTablePagingSelect',
                info: 'AutoCompleteTablePagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteTablePagingSelect />,
          },
        ]}
      />

      <CodeBoxSection
        title="TreeSelectHOC"
        config={[
          {
            id: `TreeSelect`,
            name: `TreeSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeSelect',
                info: '使用了默认配置',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <TreeSelect />,
          },
          {
            id: `TreeMultiSelect`,
            name: `TreeMultiSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeMultiSelect',
                info: 'TreeMultiSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <TreeMultiSelect />,
          },
          {
            id: `TreeMultiLeafSelect`,
            name: `TreeMultiLeafSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeMultiLeafSelect',
                info: 'TreeMultiLeafSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <TreeMultiLeafSelect />,
          },
          {
            id: `TreeLeafSelect`,
            name: `TreeLeafSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeLeafSelect',
                info: 'TreeLeafSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <TreeLeafSelect />,
          },
          {
            id: `TreeCheckedShowParentSelect`,
            name: `TreeCheckedShowParentSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeCheckedShowParentSelect',
                info: 'TreeCheckedShowParentSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <TreeCheckedShowParentSelect />,
          },
          {
            id: `TreeCheckedShowChildSelect`,
            name: `TreeCheckedShowChildSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeCheckedShowChildSelect',
                info: 'TreeCheckedShowChildSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <TreeCheckedShowChildSelect />,
          },
          {
            id: `TreeCheckedShowAllSelect`,
            name: `TreeCheckedShowAllSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeCheckedShowAllSelect',
                info: 'TreeCheckedShowAllSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <TreeCheckedShowAllSelect />,
          },
          {
            id: `FlatTreeSelect`,
            name: `FlatTreeSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatTreeSelect',
                info: 'FlatTreeSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <FlatTreeSelect />,
          },
          {
            id: `FlatAsyncTreeSelect`,
            name: `FlatAsyncTreeSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatAsyncTreeSelect',
                info: 'FlatAsyncTreeSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <FlatAsyncTreeSelect />,
          },
          {
            id: `FlatAsyncTreeMultiSelectEcho`,
            name: `FlatAsyncTreeMultiSelectEcho`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatAsyncTreeMultiSelectEcho',
                info: 'FlatAsyncTreeMultiSelectEcho',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <FlatAsyncTreeMultiSelectEcho />,
          },
          {
            id: `AsyncTreeSelectEcho`,
            name: `AsyncTreeSelectEcho`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeSelectEcho',
                info: 'AsyncTreeSelectEcho',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeSelectEcho />,
          },
          {
            id: `AsyncTreeSelect`,
            name: `AsyncTreeSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeSelect',
                info: 'AsyncTreeSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeSelect />,
          },
          {
            id: `AsyncTreeMultiSelectEcho`,
            name: `AsyncTreeMultiSelectEcho`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeMultiSelectEcho',
                info: 'AsyncTreeMultiSelectEcho',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeMultiSelectEcho />,
          },
          {
            id: `AsyncTreeMultiSelect`,
            name: `AsyncTreeMultiSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeMultiSelect',
                info: 'AsyncTreeMultiSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeMultiSelect />,
          },
          {
            id: `AsyncTreeMultiLeafSelectEcho`,
            name: `AsyncTreeMultiLeafSelectEcho`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeMultiLeafSelectEcho',
                info: 'AsyncTreeMultiLeafSelectEcho',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeMultiLeafSelectEcho />,
          },
          {
            id: `AsyncTreeMultiLeafSelect`,
            name: `AsyncTreeMultiLeafSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeMultiLeafSelect',
                info: 'AsyncTreeMultiLeafSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeMultiLeafSelect />,
          },
          {
            id: `AsyncTreeLeafSelect`,
            name: `AsyncTreeLeafSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeLeafSelect',
                info: 'AsyncTreeLeafSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeLeafSelect />,
          },
          {
            id: `AsyncTreeCheckedShowParentSelect`,
            name: `AsyncTreeCheckedShowParentSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeCheckedShowParentSelect',
                info: 'AsyncTreeCheckedShowParentSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeCheckedShowParentSelect />,
          },
          {
            id: `AsyncTreeCheckedShowChildSelect`,
            name: `AsyncTreeCheckedShowChildSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeCheckedShowChildSelect',
                info: 'AsyncTreeCheckedShowChildSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeCheckedShowChildSelect />,
          },
          {
            id: `AsyncTreeCheckedShowAllSelect`,
            name: `AsyncTreeCheckedShowAllSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncTreeCheckedShowAllSelect',
                info: 'AsyncTreeCheckedShowAllSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncTreeCheckedShowAllSelect />,
          },
        ]}
      />

      <CodeBoxSection
        title="CascaderHOC"
        config={[
          {
            id: `Cascader`,
            name: `Cascader`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Cascader',
                info: 'Cascader',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <Cascader />,
          },
          {
            id: `AsyncCascader`,
            name: `AsyncCascader`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncCascader',
                info: 'AsyncCascader',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncCascader />,
          },
          {
            id: `AsyncCascaderChangeOnSelect`,
            name: `AsyncCascaderChangeOnSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncCascaderChangeOnSelect',
                info: 'AsyncCascaderChangeOnSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncCascaderChangeOnSelect />,
          },
          {
            id: `AsyncCascaderEcho`,
            name: `AsyncCascaderEcho`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncCascaderEcho',
                info: 'AsyncCascaderEcho',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncCascaderEcho />,
          },
          {
            id: `AsyncCascaderMulti`,
            name: `AsyncCascaderMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncCascaderMulti',
                info: 'AsyncCascaderMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncCascaderMulti />,
          },
          {
            id: `AsyncCascaderMultiEcho`,
            name: `AsyncCascaderMultiEcho`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncCascaderMultiEcho',
                info: 'AsyncCascaderMultiEcho',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncCascaderMultiEcho />,
          },
          {
            id: `AsyncCascaderShowChild`,
            name: `AsyncCascaderShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AsyncCascaderShowChild',
                info: 'AsyncCascaderShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AsyncCascaderShowChild />,
          },
          {
            id: `CascaderChangeOnSelect`,
            name: `CascaderChangeOnSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderChangeOnSelect',
                info: 'CascaderChangeOnSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CascaderChangeOnSelect />,
          },
          {
            id: `CascaderMulti`,
            name: `CascaderMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderMulti',
                info: 'CascaderMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CascaderMulti />,
          },
          {
            id: `CascaderShowChild`,
            name: `CascaderShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderShowChild',
                info: 'CascaderShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <CascaderShowChild />,
          },
          {
            id: `FlatAsyncCascader`,
            name: `FlatAsyncCascader`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatAsyncCascader',
                info: 'FlatAsyncCascader',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <FlatAsyncCascader />,
          },
          {
            id: `FlatCascader`,
            name: `FlatCascader`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatCascader',
                info: 'FlatCascader',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <FlatCascader />,
          },
        ]}
      />

      <CodeBoxSection
        title="AutoCompleteHOC"
        config={[
          {
            id: `AutoComplete`,
            name: `AutoComplete`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoComplete',
                info: 'AutoComplete',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoComplete />,
          },
          {
            id: `AutoCompleteSelectInput`,
            name: `AutoCompleteSelectInput`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteSelectInput',
                info: 'AutoCompleteSelectInput',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => <AutoCompleteSelectInput />,
          },
        ]}
      />

      <CodeBoxSection
        title="配合ScrollLayout使用"
        config={[
          {
            id: 'p1',
            name: '配合ScrollLayout使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            codeText: ``,
            cardProps: {
              description: {
                title: '使用ScrollLayout做容器',
                info: '自动设置组件的getPopupContainer，浮层跟随滚动`',
              },
            },
            renderChildren: () => (
              <div style={{ height: 500 }}>
                <ScrollLayout scrollY>
                  <Space.Group direction="vertical">
                    <dl>
                      <dt>
                        <p>Select</p>
                      </dt>
                      <dd>
                        <Select />
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <p>MultipleSelect</p>
                      </dt>
                      <dd>
                        <MultipleSelect />
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <p>TreeSelect</p>
                      </dt>
                      <dd>
                        <TreeSelect />
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <p>AutoComplete</p>
                      </dt>
                      <dd>
                        <AutoComplete />
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
                        <Cascader />
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
