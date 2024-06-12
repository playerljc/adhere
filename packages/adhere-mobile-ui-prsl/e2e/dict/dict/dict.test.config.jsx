import { Avatar } from 'antd';
import { Image } from 'antd-mobile';
import faker from 'faker';
import Mock from 'mockjs';
import React from 'react';

import {
  AppstoreOutlined,
  ClockCircleOutlined,
  MailOutlined,
  SettingOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MobileGlobalIndicator } from '@baifendian/adhere';
import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';

import { City, County, Province, books } from './data';

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

const UserData = Array.from({ length: 100 }).map(() => {
  const label = Mock.mock('@cname');
  const value = Mock.mock('@guid');

  return {
    id: value,
    label,
    value,
    title: label,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${value}`,
  };
});

const options = Array.from({ length: 1000 }).map((t, _index) => {
  const value = Mock.mock('@guid');
  const title = `${Mock.mock('@name')}1`;

  return {
    value,
    title,
    label: title,
    children: title,
    id: value,
    description: title,
  };
});

function genChildren(length) {
  return Array.from({ length: length }).map(() => {
    const title = Mock.mock('@name');
    const value = Mock.mock('@guid');

    return {
      value,
      title,
      label: title,
      id: value,
      name: title,
      address: Mock.mock('@region'),
      height: Mock.mock('@integer(60, 100)'),
      width: Mock.mock('@integer(60, 100)'),
      nativePlace: Mock.mock('@city'),
    };
  });
}

const TREE_DATA = Array.from({ length: 100 }).map(() => {
  const title = Mock.mock('@name');
  const value = Mock.mock('@guid');

  return {
    value,
    title,
    label: title,
    id: value,
    name: title,
    address: Mock.mock('@region'),
    height: Mock.mock('@integer(60, 100)'),
    width: Mock.mock('@integer(60, 100)'),
    nativePlace: Mock.mock('@city'),
    children: genChildren(5).map((t) => ({
      ...t,
      children: genChildren(5),
    })),
  };
});

const FLAT_TREE_DATA = Util.treeToArray(
  TREE_DATA,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'id',
);

const TABLE_TREE_DATA = Array.from({ length: 5 }).map(() => {
  const title = Mock.mock('@name');
  const value = Mock.mock('@guid');

  return {
    value,
    title,
    id: value,
    name: title,
    address: Mock.mock('@region'),
    height: Mock.mock('@integer(60, 100)'),
    width: Mock.mock('@integer(60, 100)'),
    nativePlace: Mock.mock('@city'),
    children: genChildren(5).map((t) => ({
      ...t,
      children: genChildren(5),
    })),
  };
});

const FLAT_TABLE_TREE_DATA = Util.treeToArray(
  TABLE_TREE_DATA,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'id',
);

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

    Dict.handlers.SystemBookCatalogDynamic = () =>
      Promise.resolve(
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
          children: t.catalog,
          key: t.id,
          title: t.catalog,
        })),
      );

    Dict.handlers.SystemBookCatalogRem = () =>
      Promise.resolve(
        [].map((t) => ({
          label: t.catalog,
          value: t.id,
          children: t.catalog,
        })),
      );

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
      return new Promise((resolve) => {
        setTimeout(() => {
          if (!kw) {
            resolve([]);
            return;
          }

          resolve(books.filter((t) => t.label.includes(kw)));
        }, 1000);
      });
    };

    Dict.handlers.SystemUserPagin = () => (page, limit) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            totalCount: UserData.length,
            data: UserData.slice((page - 1) * limit, page * limit),
          });
        }, 1000);
      });
    };

    Dict.handlers.SystemUserACPagin = () => (page, limit, _kw) => {
      console.log(page, limit, _kw);

      return new Promise((resolve) => {
        const data = !_kw ? [] : UserData.filter(({ label }) => label.indexOf(_kw) !== -1);

        resolve({
          totalCount: data.length,
          data: data.slice((page - 1) * limit, page * limit),
        });
      });
    };

    Dict.handlers.SystemBookAC = () => (_kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve([]);
        }

        setTimeout(() => {
          const result = books.filter((_book) => _book.t.indexOf(_kw) !== -1);

          resolve(result);
        }, 500);
      });
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

    Dict.handlers.SystemBook = () => Promise.resolve(books);

    Dict.handlers.SystemTableBook = () =>
      Promise.resolve(
        books.map(({ children, ...t }) => ({
          ...t,
          value: t.id,
        })),
      );

    Dict.handlers.SystemTableBookAC = () => (_kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve([]);
        }

        setTimeout(() => {
          const result = books
            .map(({ children, ...t }) => ({
              ...t,
              value: t.id,
            }))
            .filter((_book) => _book.t.indexOf(_kw) !== -1);

          resolve(result);
        }, 500);
      });
    };

    Dict.handlers.SystemTreeAC = () => (_kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve();
          return;
        }

        setTimeout(() => {
          // 正常
          const flatTreeData = Util.treeToArray(
            TREE_DATA,
            { parentIdAttr: 'pId', rootParentId: '' },
            'value',
          );

          const result = flatTreeData.filter((_node) => _node.title.indexOf(_kw) !== -1);

          const targetTreeData = Util.completionIncompleteFlatArr(flatTreeData, result, {
            keyAttr: 'value',
            titleAttr: 'title',
            parentIdAttr: 'pId',
            rootParentId: '',
          });

          resolve(targetTreeData);
        }, 100);
      });
    };

    Dict.handlers.SystemTreeACFlat = () => (_kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve([]);
          return;
        }

        setTimeout(() => {
          const result = FLAT_TREE_DATA.filter((_node) => _node.title.indexOf(_kw) !== -1);

          const targetTreeData = Util.treeToArray(
            Util.completionIncompleteFlatArr(FLAT_TREE_DATA, result, {
              keyAttr: 'id',
              titleAttr: 'title',
              parentIdAttr: 'pId',
              rootParentId: 0,
            }),
            {
              keyAttr: 'id',
              titleAttr: 'title',
              parentIdAttr: 'pId',
              rootParentId: 0,
            },
          );

          resolve(targetTreeData);
        }, 100);
      });
    };

    Dict.handlers.SystemTableTreeAC = () => (_kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve();
          return;
        }

        setTimeout(() => {
          // 正常
          const flatTreeData = Util.treeToArray(
            TABLE_TREE_DATA,
            { parentIdAttr: 'pId', rootParentId: '' },
            'value',
          );

          const result = flatTreeData.filter((_node) => _node.title.indexOf(_kw) !== -1);

          const targetTreeData = Util.completionIncompleteFlatArr(flatTreeData, result, {
            keyAttr: 'value',
            titleAttr: 'title',
            parentIdAttr: 'pId',
            rootParentId: '',
          });

          resolve(targetTreeData);
        }, 100);
      });
    };

    Dict.handlers.SystemTableTreeACFlat = () => (_kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve([]);
          return;
        }

        setTimeout(() => {
          const result = FLAT_TABLE_TREE_DATA.filter((_node) => _node.title.indexOf(_kw) !== -1);

          const targetTreeData = Util.treeToArray(
            Util.completionIncompleteFlatArr(FLAT_TABLE_TREE_DATA, result, {
              keyAttr: 'id',
              titleAttr: 'title',
              parentIdAttr: 'pId',
              rootParentId: 0,
            }),
            {
              keyAttr: 'id',
              titleAttr: 'title',
              parentIdAttr: 'pId',
              rootParentId: 0,
            },
          );

          resolve(targetTreeData);
        }, 100);
      });
    };

    Dict.handlers.SystemTableTreeACPaging = () => (page, limit, _kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve({
            totalCount: 0,
            data: [],
          });
          return;
        }

        setTimeout(() => {
          const flatTreeData = Util.treeToArray(
            TREE_DATA,
            { parentIdAttr: 'pId', rootParentId: '' },
            'value',
          );

          const result = flatTreeData.filter((_node) => _node.title.indexOf(_kw) !== -1);

          const targetTreeData = Util.completionIncompleteFlatArr(flatTreeData, result, {
            keyAttr: 'value',
            titleAttr: 'title',
            parentIdAttr: 'pId',
            rootParentId: '',
          });

          resolve({
            totalCount: targetTreeData.length,
            data: targetTreeData.slice((page - 1) * limit, page * limit),
          });
        }, 100);
      });
    };

    Dict.handlers.SystemUser = () =>
      Promise.resolve(
        Array.from({ length: 1000 }).map((t, _index) => {
          const value = Mock.mock('@guid');
          const title = `${Mock.mock('@name')}1`;

          return {
            value,
            title,
            label: title,
            children: title,
            id: value,
            description: title,
          };
        }),
      );

    Dict.handlers.SystemUserStatic = () =>
      Array.from({ length: 1000 }).map((t, _index) => {
        const value = Mock.mock('@guid');
        const title = `${Mock.mock('@name')}1`;

        return {
          value,
          title,
          label: title,
          children: title,
          id: value,
          description: title,
        };
      });

    Dict.handlers.SystemUserByKw = () => (_kw) => {
      return new Promise((resolve) => {
        const options = Array.from({ length: 1000 }).map((t, _index) => {
          const value = Mock.mock('@guid');
          const title = `${Mock.mock('@name')}1`;

          return {
            value,
            title,
            label: title,
            children: title,
            id: value,
            description: title,
          };
        });

        if (!_kw) {
          resolve([]);
          return;
        }

        const handler = MobileGlobalIndicator.show();

        setTimeout(() => {
          MobileGlobalIndicator.hide(handler);
          resolve(options.filter((_option) => _option.title.indexOf(_kw) !== -1));
        }, 500);
      });
    };

    Dict.handlers.SystemUserByKPL = () => (_kw, page, limit) => {
      return new Promise((resolve) => {
        const options = Array.from({ length: 1000 }).map((t, _index) => {
          const value = Mock.mock('@guid');
          const title = `${Mock.mock('@name')}1`;

          return {
            value,
            title,
            label: title,
            children: title,
            id: value,
            description: title,
          };
        });

        if (!_kw) {
          resolve({
            total: 0,
            data: [],
          });

          return;
        }

        const handler = MobileGlobalIndicator.show();

        setTimeout(() => {
          const data = options.filter((t) => t.title.indexOf(_kw) > -1);

          MobileGlobalIndicator.hide(handler);

          resolve({
            total: data.length,
            data: data.slice((page - 1) * limit, page * limit),
          });
        }, 500);
      });
    };

    Dict.handlers.SystemUserPaging = () => (page, limit) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: options.slice((page - 1) * limit, page * limit),
            total: options.length,
          });
        }, 1000);
      });
    };

    Dict.handlers.SystemListStatic = () =>
      Array(1000)
        .fill({
          avatar:
            'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
          name: 'Novalee Spicer',
          description: 'Deserunt dolor ea eaque eos',
        })
        .map((t) => ({
          ...t,
          key: t.name,
          prefix: (
            <Image src={t.avatar} style={{ borderRadius: 20 }} fit="cover" width={40} height={40} />
          ),
        }));

    Dict.handlers.SystemListDynamic = () =>
      Promise.resolve(
        Array(1000)
          .fill({
            avatar:
              'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Novalee Spicer',
            description: 'Deserunt dolor ea eaque eos',
          })
          .map((t) => ({
            ...t,
            key: t.name,
            prefix: (
              <Image
                src={t.avatar}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            ),
          })),
      );

    Dict.handlers.SystemTreeStatic = () => TREE_DATA;

    Dict.handlers.SystemTreeDynamic = () => Promise.resolve(TREE_DATA);
  },
};
