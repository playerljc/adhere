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
import Dict from '@baifendian/adhere-util-dict';

import { City, County, Province, books } from '../../../data';

const PCCFlat = [
  ...Province.map((t) => ({
    title: t.name,
    label: t.name,
    value: t.id,
    id: t.id,
    isLeaf: false,
    pId: 0,
  })),
  ...Object.keys(City)
    .map((key) =>
      City[key].map((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        id: t.id,
        isLeaf: false,
        pId: `${key}`,
      })),
    )
    .flat(),
  ...Object.keys(County)
    .map((key) =>
      County[key].map((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        id: t.id,
        isLeaf: true,
        pId: key,
      })),
    )
    .flat(),
];

const userList = Array.from({ length: 10 }).map((t, index) => ({
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

const ssqCascade = [
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

export default {
  initStatic() {
    Dict.handlers.SystemBookCatalog = () =>
      [
        {
          id: '242',
          catalog: '中国文学',
        },
        {
          id: '243',
          catalog: '外国文学',
        },
        {
          id: '244',
          catalog: '儿童文学',
        },
        {
          id: '245',
          catalog: '散文',
        },
        {
          id: '246',
          catalog: '经典名著',
        },
        {
          id: '247',
          catalog: '小说',
        },
        {
          id: '248',
          catalog: '历史',
        },
        {
          id: '249',
          catalog: '教育',
        },
        {
          id: '250',
          catalog: '成功励志',
        },
        {
          id: '251',
          catalog: '心灵鸡汤',
        },
        {
          id: '252',
          catalog: '人物传记',
        },
        {
          id: '253',
          catalog: '心理学',
        },
        {
          id: '254',
          catalog: '管理',
        },
        {
          id: '255',
          catalog: '经济',
        },
        {
          id: '256',
          catalog: '理财',
        },
        {
          id: '257',
          catalog: '哲学',
        },
        {
          id: '258',
          catalog: '计算机',
        },
      ].map((t) => ({
        label: t.catalog,
        value: t.id,
      }));

    Dict.handlers.SystemOrg = () => [
      {
        title: 'Node1',
        value: '0-0',
        isLeaf: false,
        children: [
          {
            title: 'Child Node1',
            value: '0-0-1',
            isLeaf: true,
          },
          {
            title: 'Child Node2',
            value: '0-0-2',
            isLeaf: true,
          },
        ],
      },
      {
        title: 'Node2',
        value: '0-1',
        isLeaf: true,
      },
    ];

    // User
    Dict.handlers.SystemUser = () => userList;

    Dict.handlers.SystemSSQ = () => ssqCascade;

    // Menu
    Dict.handlers.SystemNav = () => [
      { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
      { label: '菜单项二', key: 'item-2' },
      {
        label: '子菜单',
        key: 'submenu',
        children: [{ label: '子菜单项', key: 'submenu-item-1' }],
      },
    ];
    Dict.handlers.SystemJSX1Nav = () => [
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
    Dict.handlers.SystemJSX2Nav = () =>
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
    Dict.handlers.SystemDropNav = () => [
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
    Dict.handlers.SystemBCNav = () => [
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
    Dict.handlers.SystemSegNav = () => ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
    Dict.handlers.SystemObjArraySegNav = () => [
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
    Dict.handlers.SystemOneTL = () => [
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
    Dict.handlers.SystemTwoTL = () => [
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
    Dict.handlers.SystemThreeTL = () => [
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
    Dict.handlers.SystemOneWizard = () => [
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
    Dict.handlers.SystemTwoWizard = () => [
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
    Dict.handlers.SystemMent = () => [
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

    // sex
    Dict.handlers.SystemTestSex = () => [
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
  initRemote() {
    // 省数据
    Dict.handlers.SystemProvince = () =>
      Promise.resolve(
        Province.map((t) => ({
          label: t.name,
          value: t.id,
        })),
      );

    // 市数据
    Dict.handlers.SystemCity = () => (provinceId) => {
      if (!provinceId) return Promise.resolve([]);

      return Promise.resolve(
        City[provinceId].map((t) => ({
          label: t.name,
          value: t.id,
        })),
      );
    };

    // 区县
    Dict.handlers.SystemCounty = () => (cityId) => {
      if (!cityId) return Promise.resolve([]);

      return Promise.resolve(
        County[cityId].map((t) => ({
          label: t.name,
          value: t.id,
        })),
      );
    };

    Dict.handlers.SystemFilterBookList = () => (kw) => {
      const data = books.map((t) => ({
        label: t.label,
        value: faker.random.uuid(),
      }));

      return Promise.resolve(data.filter((t) => t.label.includes(kw)));
    };

    Dict.handlers.SystemUserPagin = () => (paging) => {
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

    Dict.handlers.SystemDepartment = () => (pid, cascadeParams) => {
      if (!pid) {
        return Promise.resolve(
          Province.map((t) => ({
            title: t.name,
            label: t.name,
            value: t.id,
            id: t.id,
            pId: 0,
            isLeaf: false,
          })),
        );
      }

      const countyIds = Object.keys(County)
        .map((key) => County[key])
        .flat()
        .map((t) => t.id);

      const result = { ...City, ...County }[pid]?.map?.((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        id: t.id,
        pId: pid,
        isLeaf: countyIds.includes(t.id),
      }));

      return Promise.resolve(result);
    };

    Dict.handlers.SystemDepartmentAll = () => Promise.resolve(PCCFlat);

    Dict.handlers.SystemSSQRemote = () => ssqCascade;
  },
};
