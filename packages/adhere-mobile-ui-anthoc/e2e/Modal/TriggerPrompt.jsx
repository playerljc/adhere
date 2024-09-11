import { Button, Form } from 'antd-mobile';
import Mockjs from 'mockjs';
import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';

import { MobileGlobalIndicator } from '@baifendian/adhere';
import Mock from '@baifendian/adhere-mock';
import { ArrayEntityValueHOC, TreeEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import { CascaderView, CheckList, Modal } from '../../src/index';

// import FilterCheckAllCheckList from '../CheckList/FilterCheckAllCheckList';
import '../../src/index.less';

const { Book } = Mock;

const book = Book.map((t) => {
  const id = Mockjs.mock('@guid');

  return {
    ...t,
    value: id,
    title: t.t,
    id,
  };
});

const options = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '杭州',
        value: '杭州',
        children: [
          {
            label: '西湖区',
            value: '西湖区',
          },
          {
            label: '上城区',
            value: '上城区',
          },
          {
            label: '余杭区',
            value: '余杭区',
            disabled: true,
          },
        ],
      },
      {
        label: '温州',
        value: '温州',
        children: [
          {
            label: '鹿城区',
            value: '鹿城区',
          },
          {
            label: '龙湾区',
            value: '龙湾区',
            disabled: true,
          },
          {
            label: '瓯海区',
            value: '瓯海区',
          },
        ],
      },
      {
        label: '宁波',
        value: '宁波',
        children: [
          {
            label: '海曙区',
            value: '海曙区',
          },
          {
            label: '江北区',
            value: '江北区',
          },
          {
            label: '镇海区',
            value: '镇海区',
          },
        ],
      },
    ],
  },
  {
    label: '安徽',
    value: '安徽',
    children: [
      {
        label: '合肥',
        value: '合肥',
        children: [
          {
            label: '包河区',
            value: '包河区',
          },
          {
            label: '蜀山区',
            value: '蜀山区',
          },
          {
            label: '瑶海区',
            value: '瑶海区',
          },
        ],
      },
      {
        label: '芜湖',
        value: '芜湖',
        children: [
          {
            label: '镜湖区',
            value: '镜湖区',
          },
          {
            label: '弋江区',
            value: '弋江区',
          },
          {
            label: '湾沚区',
            value: '湾沚区',
          },
        ],
      },
    ],
  },
  {
    label: '江苏',
    value: '江苏',
    children: [
      {
        label: '南京',
        value: '南京',
        children: [
          {
            label: '玄武区',
            value: '玄武区',
          },
          {
            label: '秦淮区',
            value: '秦淮区',
          },
          {
            label: '建邺区',
            value: '建邺区',
          },
        ],
      },
      {
        label: '苏州',
        value: '苏州',
        children: [
          {
            label: '虎丘区',
            value: '虎丘区',
          },
          {
            label: '吴中区',
            value: '吴中区',
          },
          {
            label: '相城区',
            value: '相城区',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [form] = Form.useForm();

  // const person = Form.useWatch('person', form) ?? [];

  // const filterCheckAllCheckListRef = useRef();
  const [searchDataSource, setSearchDataSource] = useState([]);

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
      <Form.Header>TriggerPrompt</Form.Header>

      <Form.Item name="person" label="人员" rules={[{ required: true, message: '人员不能为空' }]}>
        <Modal.TriggerPrompt
          title="人员选择"
          submitAction={{
            key: 'submit',
            primary: true,
            // onClick: () => {
            //   const value = filterCheckAllCheckListRef.current.getValue();
            //   return Promise.resolve(value);
            // },
            onClick: () => {
              return Promise.resolve();
            },
          }}
          popoverTriggerProps={{
            renderTrigger: (changeValue) => {
              debugger;
              return (
                <Button color="primary" size="mini">
                  人员选择({changeValue?.length})
                </Button>
              );
            },
          }}
        >
          {/*<FilterCheckAllCheckList ref={filterCheckAllCheckListRef} />*/}
          <ArrayEntityValueHOC isUsePrimaryValue={false} optionsProp="searchDataSource">
            <CheckList.AutoCompleteCheckList
              // filterProps={{ placeholder: '请输入关键字' }}
              // style={{ height: '100%' }}
              // bodyWrapperStyle={{ overflowY: 'auto' }}
              // value={value}
              // options={options}
              // onChange={(val) => {
              //   setValue(val);
              //   props.onChange(val);
              // }}
              // onCheckAllChange={setValue}
              loadData={(_kw) => {
                if (!_kw) {
                  setSearchDataSource([]);
                  return;
                }

                const handler = MobileGlobalIndicator.show();

                setTimeout(() => {
                  setSearchDataSource(book.filter((_book) => _book.t.indexOf(_kw) !== -1));

                  MobileGlobalIndicator.hide(handler);
                }, 500);
              }}
              searchDataSource={searchDataSource}
              placeholder="请输入关键字"
              style={{ height: '100%', overflowY: 'hidden' }}
              checkListProps={{
                multiple: true,
              }}
            />
          </ArrayEntityValueHOC>
          {/*<TreeEntityValueHOC treeDataProp="options">
            <CascaderView.FilterCascaderView
              options={options}
              renderLabel={(item, filterValue) => {
                return (
                  <label>
                    <Highlighter
                      highlightClassName="Highlight"
                      searchWords={[filterValue]}
                      autoEscape={true}
                      textToHighlight={item.label}
                    />
                  </label>
                );
              }}
            />
          </TreeEntityValueHOC>*/}
        </Modal.TriggerPrompt>
      </Form.Item>
    </Form>
  );
};
