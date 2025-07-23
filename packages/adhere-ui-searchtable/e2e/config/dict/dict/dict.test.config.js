// import faker from 'faker';
import Mockjs from 'mockjs';

import { genModuleDict } from '@baifendian/adhere-util-dict';

const { names, values } = genModuleDict({
  // 静态字典
  SystemTestRadio: {
    isStatic: true,
    handler: () => [
      {
        value: 1,
        label: '通过',
      },
      {
        value: 2,
        label: '不通过',
      },
      {
        value: 3,
        label: '退回',
      },
    ],
  },
  SystemTestCheckBox: {
    isStatic: true,
    handler: () => [
      {
        value: 1,
        label: '通过',
      },
      {
        value: 2,
        label: '不通过',
      },
      {
        value: 3,
        label: '退回',
      },
    ],
  },
  SystemTestSelect: {
    isStatic: true,
    handler: () => [
      {
        value: 1,
        label: '通过',
      },
      {
        value: 2,
        label: '不通过',
      },
      {
        value: 3,
        label: '退回',
      },
    ],
  },
  SystemTestTree: {
    isStatic: true,
    handler: () => [
      {
        title: 'Node1',
        value: '0-0',
        leaf: false,
        children: [
          {
            title: 'Child Node1',
            value: '0-0-1',
            leaf: true,
          },
          {
            title: 'Child Node2',
            value: '0-0-2',
            leaf: true,
          },
        ],
      },
      {
        title: 'Node2',
        value: '0-1',
        leaf: true,
      },
    ],
  },
  SystemTestTransfer: {
    isStatic: true,
    handler: () => [
      {
        value: 1,
        label: '通过',
      },
      {
        value: 2,
        label: '不通过',
      },
      {
        value: 3,
        label: '退回',
      },
    ],
  },
  SystemTestTable: {
    isStatic: true,
    handler: () =>
      Array.from({ length: 10 }).map((t, index) => ({
        id: Mockjs.mock('@guid'),
        isMore: !!Math.floor((Math.random() * 10) % 2),
        name: Mockjs.mock('@name'),
        sex: `${(index + 1) % 2}`,
        birthDay: new Date().getTime(),
        deptName: Mockjs.mock('@name'),
        height: Mockjs.mock('@integer'),
        width: Mockjs.mock('@integer'),
        hometown: Mockjs.mock('@name'),
        address: Mockjs.mock('@name'),
      })),
  },
  SystemTestCascader: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemTestTreeCascader: {
    isStatic: true,
    handler: () => [
      {
        value: 'zhejiang',
        title: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            title: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                title: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        title: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            title: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                title: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ],
  },
  SystemTestList: {
    isStatic: true,
    handler: () =>
      Array.from({ length: 5 }).map((t, index) => ({
        id: Mockjs.mock('@guid'),
        isMore: !!Math.floor((Math.random() * 10) % 2),
        name: Mockjs.mock('@name'),
        sex: `${(index + 1) % 2}`,
        birthDay: new Date().getTime(),
        deptName: Mockjs.mock('@name'),
        height: Mockjs.mock('@integer'),
        width: Mockjs.mock('@integer'),
        hometown: Mockjs.mock('@name'),
        address: Mockjs.mock('@name'),
      })),
  },
  SystemTestSex: {
    isStatic: true,
    handler: () => [
      {
        label: '男',
        value: '1',
      },
      {
        label: '女',
        value: '0',
      },
    ],
  },
  // 远程字典
  SystemTestDynamicRadio: {
    handler: () =>
      Promise.resolve([
        {
          value: 1,
          label: '通过',
        },
        {
          value: 2,
          label: '不通过',
        },
        {
          value: 3,
          label: '退回',
        },
      ]),
  },
  SystemTestDynamicCheckBox: {
    handler: () =>
      Promise.resolve([
        {
          value: 1,
          label: '通过',
        },
        {
          value: 2,
          label: '不通过',
        },
        {
          value: 3,
          label: '退回',
        },
      ]),
  },
  SystemTestDynamicSelect: {
    handler: () =>
      Promise.resolve([
        {
          value: 1,
          label: '通过',
        },
        {
          value: 2,
          label: '不通过',
        },
        {
          value: 3,
          label: '退回',
        },
      ]),
  },
  SystemTestAutoCompleteSelect: {
    handler: () => (kw) => {
      const data = [
        {
          label: 'java',
          value: 1,
        },
        {
          label: 'javaScript',
          value: 2,
        },
        {
          label: 'html',
          value: 3,
        },
        {
          label: 'css',
          value: 4,
        },
        {
          label: 'spring',
          value: 5,
        },
        {
          label: 'react',
          value: 6,
        },
      ];

      return Promise.resolve(data.filter((t) => t.label.includes(kw)));
    },
  },
  SystemTestDynamicTransfer: {
    handler: () =>
      Promise.resolve([
        {
          value: 1,
          label: '通过',
        },
        {
          value: 2,
          label: '不通过',
        },
        {
          value: 3,
          label: '退回',
        },
      ]),
  },
  SystemTestTablePagination: {
    handler: () => (paging) => {
      const { current, pageSize } = paging;

      const data = [];
      data.length = 300;
      data.fill(0);

      const res = {
        resCode: 0,
        data: {
          total: data.length,
          pages: 30,
          current: 1,
          records: data
            .slice((current - 1) * pageSize, (current - 1) * pageSize + pageSize)
            .map((t, index) => ({
              id: (current - 1) * pageSize + (index + 1),
              isMore: !!Math.floor((Math.random() * 10) % 2),
              name: Mockjs.mock('@name'),
              sex: `${(index + 1) % 2}`,
              birthDay: new Date().getTime(),
              deptName: Mockjs.mock('@name'),
              height: Mockjs.mock('@integer'),
              width: Mockjs.mock('@integer'),
              hometown: Mockjs.mock('@name'),
              address: Mockjs.mock('@name'),
            })),
        },
        resMsg: '',
      };

      return Promise.resolve(res.data);
    },
  },
  SystemTestDynamicCascader: {
    handler: () =>
      Promise.resolve([
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
      ]),
  },
  SystemTestListPagination: {
    handler: () => (paging) => {
      const { current, pageSize } = paging;

      const data = [];
      data.length = 300;
      data.fill(0);

      const res = {
        resCode: 0,
        data: {
          total: data.length,
          pages: 30,
          current: 1,
          records: data
            .slice((current - 1) * pageSize, (current - 1) * pageSize + pageSize)
            .map((t, index) => ({
              id: (current - 1) * pageSize + (index + 1),
              isMore: !!Math.floor((Math.random() * 10) % 2),
              name: Mockjs.mock('@name'),
              sex: `${(index + 1) % 2}`,
              birthDay: new Date().getTime(),
              deptName: Mockjs.mock('@name'),
              height: Mockjs.mock('@integer'),
              width: Mockjs.mock('@integer'),
              hometown: Mockjs.mock('@name'),
              address: Mockjs.mock('@name'),
            })),
        },
        resMsg: '',
      };

      return Promise.resolve(res.data);
    },
  },
});

export { names, values };
