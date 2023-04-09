import { Avatar } from 'antd';
import faker from 'faker';
import React from 'react';

import {
  AppstoreOutlined,
  ClockCircleOutlined,
  MailOutlined,
  SettingOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Dict } from '@baifendian/adhere';

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
    Dict.handlers.SystemTestRadioDynamic = () =>
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
    Dict.handlers.SystemTestCheckBoxDynamic = () =>
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
    Dict.handlers.SystemTestSelectDynamic = () =>
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
    Dict.handlers.SystemTestAutoSelectComplete = () => (kw) => {
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
    Dict.handlers.SystemTestTransferDynamic = () =>
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
    Dict.handlers.SystemTestCascaderDynamic = () =>
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
        value: '1',
      },
      {
        label: '女',
        value: '0',
      },
    ];

    // AutoComplete
    Dict.handlers.SystemTestAutoComplete = () => [
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

    // Tag
    Dict.handlers.SystemTestTag = () => [
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

    // Menu
    Dict.handlers.SystemTestMenu = () => [
      { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
      { label: '菜单项二', key: 'item-2' },
      {
        label: '子菜单',
        key: 'submenu',
        children: [{ label: '子菜单项', key: 'submenu-item-1' }],
      },
    ];

    Dict.handlers.SystemTestJSX1Menu = () => [
      {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
      },
      {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
      },
      {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
          {
            type: 'group',
            label: 'Item 1',
            children: [
              {
                label: 'Option 1',
                key: 'setting:1',
              },
              {
                label: 'Option 2',
                key: 'setting:2',
              },
            ],
          },
          {
            type: 'group',
            label: 'Item 2',
            children: [
              {
                label: 'Option 3',
                key: 'setting:3',
              },
              {
                label: 'Option 4',
                key: 'setting:4',
              },
            ],
          },
        ],
      },
      {
        label: (
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        ),
        key: 'alipay',
      },
    ];

    Dict.handlers.SystemTestJSX2Menu = () =>
      (() => {
        function getItem(label, key, icon, children, type) {
          return {
            key,
            icon,
            children,
            label,
            type,
          };
        }

        return [
          getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem(
              'Item 1',
              'g1',
              null,
              [getItem('Option 1', '1'), getItem('Option 2', '2')],
              'group',
            ),
            getItem(
              'Item 2',
              'g2',
              null,
              [getItem('Option 3', '3'), getItem('Option 4', '4')],
              'group',
            ),
          ]),
          getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
          ]),
          {
            type: 'divider',
          },
          getItem('Navigation Three', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
          ]),
          getItem(
            'Group',
            'grp',
            null,
            [getItem('Option 13', '13'), getItem('Option 14', '14')],
            'group',
          ),
        ];
      })();

    // Dropdown
    Dict.handlers.SystemTestDropdown = () => [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ];

    // Breadcrumb
    Dict.handlers.SystemTestBreadcrumb = () => [
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ];

    // Segmented
    Dict.handlers.SystemTestSegmented = () => ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
    Dict.handlers.SystemTestObjArraySegmented = () => [
      {
        label: (
          <div style={{ padding: 4 }}>
            <Avatar src="https://joesch.moe/api/v1/random" />
            <div>User 1</div>
          </div>
        ),
        value: 'user1',
      },
      {
        label: (
          <div style={{ padding: 4 }}>
            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            <div>User 2</div>
          </div>
        ),
        value: 'user2',
      },
      {
        label: (
          <div style={{ padding: 4 }}>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <div>User 3</div>
          </div>
        ),
        value: 'user3',
      },
    ];

    // Timeline
    Dict.handlers.SystemTestOneTimeline = () => [
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ];
    Dict.handlers.SystemTestTwoTimeline = () => [
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
        color: 'green',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      },
      {
        color: 'red',
        children: 'Network problems being solved 2015-09-01',
      },
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: 'Technical testing 2015-09-01',
      },
    ];
    Dict.handlers.SystemTestThreeTimeline = () => [
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'red',
        children: (
          <>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </>
        ),
      },
      {
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <SmileOutlined />,
        children: <p>Custom color testing</p>,
      },
    ];

    // Steps
    Dict.handlers.SystemTestOneSteps = () => [
      {
        title: 'Finished',
        description: 'This is a description.',
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description: 'This is a description.',
      },
    ];

    Dict.handlers.SystemTestTwoSteps = () => [
      {
        title: 'Finished',
        description: 'This is a description.',
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description: 'This is a description.',
      },
    ];

    // Mentions
    Dict.handlers.SystemTestMentions = () => [
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ];
  },
  initRemote() {},
};
