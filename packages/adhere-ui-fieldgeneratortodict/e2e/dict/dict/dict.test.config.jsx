import { Avatar } from 'antd';
import { Image } from 'antd-mobile';
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
import MobileGlobalIndicator from '@baifendian/adhere-mobile-ui-globalindicator';
import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';

import { City, County, Province, books, options } from './data';

const { genModuleDict } = Dict;

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
  id: Mock.mock('@guid'),
  isMore: !!Math.floor((Math.random() * 10) % 2),
  name: Mock.mock('@name'),
  sex: `${(index + 1) % 2}`,
  birthDay: new Date().getTime(),
  deptName: Mock.mock('@name'),
  height: Mock.mock('@integer'),
  width: Mock.mock('@integer'),
  hometown: Mock.mock('@name'),
  address: Mock.mock('@name'),
}));

const ssqCascade = [
  {
    label: 'Light',
    value: 'light',
    children: Array.from({ length: 20 }).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            disableCheckbox: true,
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
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

const SYSTEM_ORG_TREE = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    isLeaf: false,
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
        key: '0-0-1',
        isLeaf: true,
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    isLeaf: true,
  },
];

const { names, values } = genModuleDict({
  // 静态字典
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
  SystemBookCatalog: {
    isStatic: true,
    handler: () =>
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
  },
  SystemOrg: {
    isStatic: true,
    handler: () => SYSTEM_ORG_TREE,
  },
  SystemOrgFlat: {
    isStatic: true,
    handler: () =>
      Util.treeToArray(
        SYSTEM_ORG_TREE,
        {
          parentIdAttr: 'pId',
          rootParentId: 0,
        },
        'key',
      ).map((t) => ({
        ...t,
        id: t.key,
      })),
  },
  // SystemUser: {
  //   isStatic: true,
  //   handler: () => userList,
  // },
  SystemSSQ: {
    isStatic: true,
    handler: () => ssqCascade,
  },
  SystemNav: {
    isStatic: true,
    handler: () => [
      { label: '菜单项一', key: 'item-1' },
      { label: '菜单项二', key: 'item-2' },
      {
        label: '子菜单',
        key: 'submenu',
        children: [{ label: '子菜单项', key: 'submenu-item-1' }],
      },
    ],
  },
  SystemJSX1Nav: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemJSX2Nav: {
    isStatic: true,
    handler: () =>
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
      })(),
  },
  SystemDropNav: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemBCNav: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemSegNav: {
    isStatic: true,
    handler: () => ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
  },
  SystemObjArraySegNav: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemOneTL: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemTwoTL: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemThreeTL: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemOneWizard: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemTwoWizard: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemMent: {
    isStatic: true,
    handler: () => [
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
    ],
  },
  SystemListStatic: {
    isStatic: true,
    handler: () =>
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
        })),
  },
  SystemTreeStatic: {
    isStatic: true,
    handler: () => TREE_DATA,
  },
  SystemUserStatic: {
    isStatic: true,
    handler: () =>
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
  },

  // 远程字典
  SystemProvince: {
    handler: () =>
      Promise.resolve(
        Province.map((t) => ({
          label: t.name,
          value: t.id,
        })),
      ),
  },
  SystemBookCatalogDynamic: {
    handler: () =>
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
      ),
  },
  SystemBookCatalogText: {
    isStatic: true,
    handler: () => [
      '中国文学',
      '外国文学',
      '儿童文学',
      '散文',
      '经典名著',
      '小说',
      '历史',
      '教育',
      '成功励志',
      '心灵鸡汤',
      '人物传记',
      '影视原著',
    ],
  },
  SystemBookCatalogTextDynamic: {
    handler: () =>
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
        ].map((t) => t.catalog),
      ),
  },
  SystemBookCatalogRem: {
    handler: () =>
      Promise.resolve(
        [].map((t) => ({
          label: t.catalog,
          value: t.id,
          children: t.catalog,
        })),
      ),
  },
  SystemCity: {
    handler: () => (provinceId) => {
      if (!provinceId) return Promise.resolve([]);

      return Promise.resolve(
        City[provinceId].map((t) => ({
          label: t.name,
          value: t.id,
        })),
      );
    },
  },
  SystemCounty: {
    handler: () => (cityId) => {
      if (!cityId) return Promise.resolve([]);

      return Promise.resolve(
        County[cityId].map((t) => ({
          label: t.name,
          value: t.id,
        })),
      );
    },
  },
  SystemFilterBookList: {
    handler: () => (kw) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (!kw) {
            resolve([]);
            return;
          }

          resolve(books.filter((t) => t.label.includes(kw)));
        }, 1000);
      });
    },
  },
  SystemUserPagin: {
    // 分页字典约定：(page, limit, cascadeParams, queryParams)
    // queryParams 仅在 TablePagingSelect/ListPagingSelect 设置 localFilter={false}（服务器搜索）时才会有值，
    // 由 optionFilterProp 对应字段名和搜索关键字组成，例如 { label: '关键字' }，多个字段之间为 OR 关系
    handler: () => (page, limit, cascadeParams, queryParams) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filtered = queryParams
            ? UserData.filter((item) =>
                Object.entries(queryParams).some(([field, kw]) => {
                  const value = item[field];
                  return kw && value != null && String(value).indexOf(kw) !== -1;
                }),
              )
            : UserData;

          resolve({
            totalCount: filtered.length,
            data: filtered.slice((page - 1) * limit, page * limit),
          });
        }, 1000);
      });
    },
  },
  SystemUserACPagin: {
    handler: () => (page, limit, _kw) => {
      console.log(page, limit, _kw);

      return new Promise((resolve) => {
        const data = !_kw ? [] : UserData.filter(({ label }) => label.indexOf(_kw) !== -1);

        resolve({
          totalCount: data.length,
          data: data.slice((page - 1) * limit, page * limit),
        });
      });
    },
  },
  SystemBookAC: {
    handler: () => (_kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve([]);
        }

        setTimeout(() => {
          const result = books.filter((_book) => _book.t.indexOf(_kw) !== -1);

          resolve(result);
        }, 500);
      });
    },
  },
  SystemDepartment: {
    handler: () => (pid, cascadeParams) => {
      if (!pid) {
        return Promise.resolve(
          Province.map((t) => {
            const result = {
              title: t.name,
              label: t.name,
              value: t.id,
              key: t.id,
              id: t.id,
              pId: 0,
              isLeaf: false,
            };

            const provinceId = cascadeParams?.[0];
            const cityId = cascadeParams?.[1];

            if (t.id === provinceId) {
              result.children = City[t.id].map((t) => {
                const result1 = {
                  title: t.name,
                  label: t.name,
                  value: t.id,
                  key: t.id,
                  id: t.id,
                  pId: t.id,
                  isLeaf: false,
                };

                if (t.id === cityId) {
                  result1.children = County[t.id].map((t) => ({
                    title: t.name,
                    label: t.name,
                    value: t.id,
                    key: t.id,
                    id: t.id,
                    pId: t.id,
                    isLeaf: true,
                  }));
                }

                return result1;
              });
            }

            return result;
          }),
        );
      }

      const countyIds = Object.keys(County)
        .map((key) => County[key])
        .flat()
        .map((t) => t.id);

      let pidValue = pid;
      if (typeof pid === 'object') {
        pidValue = pid.key;
      }

      const result = { ...City, ...County }[pidValue]?.map?.((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        key: t.id,
        id: t.id,
        pId: pidValue,
        isLeaf: countyIds.includes(t.id),
      }));

      return Promise.resolve(result);
    },
  },
  SystemDepartmentAll: {
    handler: () => Promise.resolve(PCCFlat),
  },
  SystemDepartmentAllStatic: {
    isStatic: true,
    handler: () => PCCFlat,
  },
  SystemSSQRemote: {
    handler: () => ssqCascade,
  },
  SystemBook: {
    handler: () => Promise.resolve(books),
  },
  SystemTableBook: {
    handler: () => (params) => {
      debugger
      const options = books.map(({ children, ...t }) => ({
        ...t,
        value: t.id,
      }));

      return Promise.resolve(options);
    },
  },
  SystemTableBookStatic: {
    isStatic: true,
    handler: () =>
      books.map(({ children, ...t }) => ({
        ...t,
        value: t.id,
      })),
  },
  SystemTableTree: {
    handler: () => Promise.resolve(TABLE_TREE_DATA),
  },
  SystemTableTreeStatic: {
    isStatic: true,
    handler: () => TABLE_TREE_DATA,
  },
  SystemTableTreePagin: {
    handler: () => (page, limit) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            totalCount: TABLE_TREE_DATA.length,
            data: TABLE_TREE_DATA.slice((page - 1) * limit, page * limit),
          });
        }, 100);
      });
    },
  },
  SystemTableBookAC: {
    handler: () => (_kw) => {
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
    },
  },
  SystemTreeAC: {
    handler: () => (_kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve();
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

          resolve(targetTreeData);
        }, 100);
      });
    },
  },
  SystemTreeACFlat: {
    handler: () => (_kw) => {
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
    },
  },
  SystemTableTreeAC: {
    handler: () => (_kw) => {
      return new Promise((resolve) => {
        if (!_kw) {
          resolve();
          return;
        }

        setTimeout(() => {
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
    },
  },
  SystemTableTreeACFlat: {
    handler: () => (_kw) => {
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
    },
  },
  SystemTableTreeACPaging: {
    handler: () => (page, limit, _kw) => {
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
    },
  },
  SystemUser: {
    handler: () =>
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
      ),
  },
  SystemUserByKw: {
    handler: () => (_kw) => {
      return new Promise((resolve) => {
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
    },
  },
  SystemUserByKPL: {
    handler: () => (_kw, page, limit) => {
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
    },
  },
  SystemUserPaging: {
    handler: () => (page, limit) => {
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

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: options.slice((page - 1) * limit, page * limit),
            total: options.length,
          });
        }, 1000);
      });
    },
  },
  SystemTable: {
    handler: () => {
      const dataSource = Array.from({ length: 100 }).map((t) => {
        const value = Mock.mock('@guid');
        const label = Mock.mock('@name');

        return {
          label,
          value,
          id: value,
          name: label,
          sex: `${Util.generatorRandom(0, 1)}`,
          homeTown: Mock.mock('@name'),
          address: Mock.mock('@name'),
          birthday: new Date().getTime(),
          deptName: Mock.mock('@name'),
          height: Mock.mock('@integer'),
          width: Mock.mock('@integer'),
        };
      });

      return (argv) => {
        if (argv.isAsync) {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                Array.from({ length: 5 }).map(() => {
                  const value = Mock.mock('@guid');
                  const label = Mock.mock('@name');

                  return {
                    label,
                    value,
                    id: value,
                    name: label,
                    sex: `${Util.generatorRandom(0, 1)}`,
                    homeTown: Mock.mock('@name'),
                    address: Mock.mock('@name'),
                    birthday: new Date().getTime(),
                    deptName: Mock.mock('@name'),
                    height: Mock.mock('@integer'),
                    width: Mock.mock('@integer'),
                  };
                }),
              );
            }, 1000);
          });
        } else {
          const { cascadeParams, params } = argv;

          const { page, limit } = params;
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                resCode: 0,
                data: {
                  total: dataSource.length,
                  records: dataSource.slice((page - 1) * limit, page * limit),
                },
              });
            }, 300);
          });
        }
      };
    },
  },
  SystemList: {
    handler: () => {
      const dataSource = Array.from({ length: 100 }).map((t) => {
        const value = Mock.mock('@guid');
        const label = Mock.mock('@name');

        return {
          label,
          value,
          id: value,
          title: Mock.mock('@title'),
          subTitle: Mock.mock('@title'),
          description: Mock.mock('@sentence'),
          content: Mock.mock('@paragraph'),
          avatar: 'https://avatar.iran.liara.run/public',
        };
      });

      return (argv) => {
        const { cascadeParams, params } = argv;

        const { page, limit } = params;

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              resCode: 0,
              data: {
                total: dataSource.length,
                records: dataSource.slice((page - 1) * limit, page * limit),
              },
            });
          }, 300);
        });
      };
    },
  },
  SystemTreeTable: {
    handler: () => {
      const _level = 3;

      function genChildren(length, level) {
        return Array.from({ length }).map((t) => {
          const value = Mock.mock('@guid');
          const title = Mock.mock('@name');

          const record = {
            value,
            title,
            id: value,
            name: title,
            sex: `${Util.generatorRandom(0, 1)}`,
            homeTown: Mock.mock('@name'),
            address: Mock.mock('@name'),
            birthday: new Date().getTime(),
            deptName: Mock.mock('@name'),
            height: Mock.mock('@integer'),
            width: Mock.mock('@integer'),
          };

          if (_level !== level) {
            record.children = genChildren(2, level + 1);
          }

          return record;
        });
      }

      const dataSource = Array.from({ length: 100 }).map(() => {
        const value = Mock.mock('@guid');
        const title = Mock.mock('@name');

        return {
          value,
          title,
          id: value,
          name: title,
          sex: `${Util.generatorRandom(0, 1)}`,
          homeTown: Mock.mock('@name'),
          address: Mock.mock('@name'),
          birthday: new Date().getTime(),
          deptName: Mock.mock('@name'),
          height: Mock.mock('@integer'),
          width: Mock.mock('@integer'),
          children: genChildren(2, 2),
        };
      });

      return ({ cascadeParams, params }) => {
        const { page, limit } = params;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              resCode: 0,
              data: {
                total: dataSource.length,
                records: dataSource.slice((page - 1) * limit, page * limit),
              },
            });
          }, 300);
        });
      };
    },
  },
  SystemListDynamic: {
    handler: () =>
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
      ),
  },
  SystemTreeDynamic: {
    handler: () => Promise.resolve(TREE_DATA),
  },
  SystemTreeDynamicFlat: {
    handler: () => Promise.resolve(FLAT_TREE_DATA),
  },
});

export { names, values };
