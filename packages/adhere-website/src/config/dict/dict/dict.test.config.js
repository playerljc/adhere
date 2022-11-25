import faker from 'faker';

import {
  Dict,
  /*WatchMemoized*/
} from '@baifendian/adhere';

export default {
  initStatic() {
    // Radio
    Dict.handlers.SystemTestRadio = () => [
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
    ];

    Dict.handlers.SystemTestDynamicRadio = () =>
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
      ]);

    // CheckBox
    Dict.handlers.SystemTestCheckBox = () => [
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
    ];

    Dict.handlers.SystemTestDynamicCheckBox = () =>
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
      ]);

    //Select
    Dict.handlers.SystemTestSelect = () => [
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
    ];
    Dict.handlers.SystemTestDynamicSelect = () =>
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
      ]);

    // AutoComplete
    Dict.handlers.SystemTestAutoCompleteSelect = () => (kw) => {
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
    };

    Dict.handlers.SystemTestTree = () => [
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
    ];

    //Transfer
    Dict.handlers.SystemTestTransfer = () => [
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
    ];
    Dict.handlers.SystemTestDynamicTransfer = () =>
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
      ]);

    // Table
    Dict.handlers.SystemTestTable = () =>
      Array.from({ length: 10 }).map((t, index) => ({
        id: faker.random.uuid(),
        isMore: !!Math.floor((Math.random() * 10) % 2),
        name: faker.internet.userName(),
        sex: `${(index + 1) % 2}`,
        birthDay: faker.time.recent(),
        deptName: faker.company.companyName(),
        height: faker.random.number(),
        width: faker.random.number(),
        hometown: faker.address.city(),
        address: faker.address.streetAddress(),
      }));

    Dict.handlers.SystemTestTablePagination = () => (paging) => {
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
              name: faker.internet.userName(),
              sex: `${(index + 1) % 2}`,
              birthDay: faker.time.recent(),
              deptName: faker.company.companyName(),
              height: faker.random.number(),
              width: faker.random.number(),
              hometown: faker.address.city(),
              address: faker.address.streetAddress(),
            })),
        },
        resMsg: '',
      };

      return Promise.resolve(res.data);
    };

    // Cascader
    Dict.handlers.SystemTestCascader = () => [
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
    ];

    Dict.handlers.SystemTestDynamicCascader = () =>
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
      ]);

    // List
    Dict.handlers.SystemTestList = () =>
      Array.from({ length: 5 }).map((t, index) => ({
        id: faker.random.uuid(),
        isMore: !!Math.floor((Math.random() * 10) % 2),
        name: faker.internet.userName(),
        sex: `${(index + 1) % 2}`,
        birthDay: faker.time.recent(),
        deptName: faker.company.companyName(),
        height: faker.random.number(),
        width: faker.random.number(),
        hometown: faker.address.city(),
        address: faker.address.streetAddress(),
      }));

    Dict.handlers.SystemTestListPagination = () => (paging) => {
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
              name: faker.internet.userName(),
              sex: `${(index + 1) % 2}`,
              birthDay: faker.time.recent(),
              deptName: faker.company.companyName(),
              height: faker.random.number(),
              width: faker.random.number(),
              hometown: faker.address.city(),
              address: faker.address.streetAddress(),
            })),
        },
        resMsg: '',
      };

      return Promise.resolve(res.data);
    };

    // sex
    Dict.handlers.SystemTestSexSelect = () => [
      {
        label: '男',
        value: 1,
      },
      {
        label: '女',
        value: 2,
      },
    ];
  },
  initRemote() {},
};
