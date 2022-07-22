import React from 'react';
import { ContextMenu } from '@baifendian/adhere';
import { Button, Radio } from 'antd';
import {
  FolderAddOutlined,
  FileAddOutlined,
  ArrowsAltOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  DownloadOutlined,
  DeleteOutlined,
  EditOutlined,
  FolderOutlined,
} from '@ant-design/icons';

import PlayGroundPage, {
  Section,
  PropsSection,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

/**
 * 上下文菜单数据
 * @return - {Array}
 */
const contextMenuData = [
  {
    name: 'add',
    id: 'add',
    icon: <FolderAddOutlined />,
    separation: false,
    attribute: {},
    children: [
      {
        name: 'folder',
        id: 'folder',
        icon: <FolderOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'Add page above',
        id: 'addpageabove',
        icon: <FileAddOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'Add page below',
        id: 'addpagebelow',
        icon: <FileAddOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'subpage',
        id: 'subpage',
        icon: <FileAddOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
    ],
  },
  {
    name: 'move',
    id: 'move',
    icon: <ArrowsAltOutlined />,
    separation: false,
    attribute: {},
    children: [
      {
        name: 'Move up',
        id: 'moveup',
        icon: 'fa fa-long-arrow-alt-up',
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'Move down',
        id: 'movedown',
        icon: <ArrowUpOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'upgrade',
        id: 'upgrade',
        icon: <ArrowDownOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'downgrade',
        id: 'downgrade',
        icon: <DownloadOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
    ],
  },
  {
    name: 'delete',
    id: 'delete',
    icon: <DeleteOutlined />,
    separation: false,
    attribute: {},
    children: [],
  },
  {
    name: 'rename',
    id: 'rename',
    icon: <EditOutlined />,
    separation: false,
    attribute: {},
    children: [],
  },
];

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `菜单的数据`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '菜单的数据',
            info: '菜单的数据',
          },
        },
        codeText: `
  import {
    FolderAddOutlined,
    FileAddOutlined,
    ArrowsAltOutlined,
    ArrowDownOutlined,
    ArrowUpOutlined,
    DownloadOutlined,
    DeleteOutlined,
    EditOutlined,
    FolderOutlined,
  } from '@ant-design/icons';

 /**
  * 上下文菜单数据
  * @return - {Array}
  */
  const contextMenuData = [
  {
    name: 'add',
    id: 'add',
    icon: <FolderAddOutlined />,
    separation: false,
    attribute: {},
    children: [
      {
        name: 'folder',
        id: 'folder',
        icon: <FolderOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'Add page above',
        id: 'addpageabove',
        icon: <FileAddOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'Add page below',
        id: 'addpagebelow',
        icon: <FileAddOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'subpage',
        id: 'subpage',
        icon: <FileAddOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
    ],
  },
  {
    name: 'move',
    id: 'move',
    icon: <ArrowsAltOutlined />,
    separation: false,
    attribute: {},
    children: [
      {
        name: 'Move up',
        id: 'moveup',
        icon: 'fa fa-long-arrow-alt-up',
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'Move down',
        id: 'movedown',
        icon: <ArrowUpOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'upgrade',
        id: 'upgrade',
        icon: <ArrowDownOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'downgrade',
        id: 'downgrade',
        icon: <DownloadOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
    ],
  },
  {
    name: 'delete',
    id: 'delete',
    icon: <DeleteOutlined />,
    separation: false,
    attribute: {},
    children: [],
  },
  {
    name: 'rename',
    id: 'rename',
    icon: <EditOutlined />,
    separation: false,
    attribute: {},
    children: [],
  },
  ];
      `,
        type: 'PlayGround',
      },
      {
        id: `p2`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        codeText: `
  import { ContextMenu } from '@baifendian/adhere';
  import { Button } from 'antd';

  <Button
    type="primary"
    onClick={(e) => {
      ContextMenu.open([].concat(contextMenuData), {
        width: 200,
        x: e.clientX,
        y: e.clientY,
        maskClosable: true,
        handler: (id, attribute) => {
          // folder 添加目录
          // addpageabove 向上添加页面
          // addpagebelow 向下添加页面
          // subpage 添加子页面
          // delete 删除
          // rename 重命名
        },
      });
    }}
  >
    点击弹出
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={(e) => {
              ContextMenu.open([].concat(contextMenuData), {
                width: 200,
                x: e.clientX,
                y: e.clientY,
                maskClosable: true,
                handler: (id, attribute) => {
                  // folder 添加目录
                  // addpageabove 向上添加页面
                  // addpagebelow 向下添加页面
                  // subpage 添加子页面
                  // delete 删除
                  // rename 重命名
                },
              });
            }}
          >
            点击弹出
          </Button>
        ),
      },
      {
        id: `p3`,
        name: `右键弹出`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '右键弹出',
            info: '右键弹出',
          },
        },
        codeText: `
 import { ContextMenu } from '@baifendian/adhere';
 import { Button } from 'antd';

 <Button
    type="primary"
    onContextMenu={(e) => {
      e.preventDefault();

      ContextMenu.open([].concat(contextMenuData), {
        width: 200,
        x: e.clientX,
        y: e.clientY,
        maskClosable: true,
        handler: (id, attribute) => {
          // folder 添加目录
          // addpageabove 向上添加页面
          // addpagebelow 向下添加页面
          // subpage 添加子页面
          // delete 删除
          // rename 重命名
        },
      });
    }}
  >
    右键弹出
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onContextMenu={(e) => {
              e.preventDefault();

              ContextMenu.open([].concat(contextMenuData), {
                width: 200,
                x: e.clientX,
                y: e.clientY,
                maskClosable: true,
                handler: (id, attribute) => {
                  // folder 添加目录
                  // addpageabove 向上添加页面
                  // addpagebelow 向下添加页面
                  // subpage 添加子页面
                  // delete 删除
                  // rename 重命名
                },
              });
            }}
          >
            右键弹出
          </Button>
        ),
      },
      {
        id: `p4`,
        name: `多项按钮`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '多项按钮',
            info: '多项按钮',
          },
        },
        codeText: `
 import { ContextMenu } from '@baifendian/adhere';
 import { Radio } from 'antd';

 <Radio.Group
    value="large"
    onChange={(e) => {
      e.preventDefault();

      ContextMenu.open([].concat(contextMenuData), {
        width: 200,
        x: e.nativeEvent.clientX,
        y: e.nativeEvent.clientY,
        maskClosable: true,
        handler: (id, attribute) => {
          // folder 添加目录
          // addpageabove 向上添加页面
          // addpagebelow 向下添加页面
          // subpage 添加子页面
          // delete 删除
          // rename 重命名
          alert("id:"+id+"attribute:"+attribute);
        },
      });
    }}
  >
    <Radio.Button value="file">File</Radio.Button>
    <Radio.Button value="edit">Edit</Radio.Button>
    <Radio.Button value="view">View</Radio.Button>
  </Radio.Group>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Radio.Group
            value="large"
            onChange={(e) => {
              e.preventDefault();

              ContextMenu.open([].concat(contextMenuData), {
                width: 200,
                x: e.nativeEvent.clientX,
                y: e.nativeEvent.clientY,
                maskClosable: true,
                handler: (id, attribute) => {
                  // folder 添加目录
                  // addpageabove 向上添加页面
                  // addpagebelow 向下添加页面
                  // subpage 添加子页面
                  // delete 删除
                  // rename 重命名
                  alert(`${id},${attribute}`);
                },
              });
            }}
          >
            <Radio.Button value="file">File</Radio.Button>
            <Radio.Button value="edit">Edit</Radio.Button>
            <Radio.Button value="view">View</Radio.Button>
          </Radio.Group>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ContextMenu">
        <p>上下文菜单</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'IData',
            data: [
              {
                params: 'name',
                desc: '菜单名称',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'icon',
                desc: '菜单图标',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'id',
                desc: '菜单的唯一id',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '是否可用',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'separation',
                desc: '是否是分割线',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'attribute',
                desc: '自定义参数',
                type: 'Object',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '孩子',
                type: 'Array<IData>',
                defaultVal: '[]',
              },
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'Object',
                defaultVal: '',
              },
              {
                params: 'subMenuClassName',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'subMenuStyle',
                desc: '附加样式',
                type: 'Object',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'IConfig',
            data: [
              {
                params: 'x',
                desc: '菜单显示的x坐标，现对于视口',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'y',
                desc: '菜单显示的y坐标，现对于视口',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'width',
                desc: '菜单宽度',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'maskClosable',
                desc: '是否点击遮罩消失',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'handler',
                desc: '点击菜单项的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'Object',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'open',
                desc: '显示一个上下文菜单',
                modifier: 'public',
                params: [
                  {
                    name: 'data',
                    desc: '菜单的数据',
                    type: 'IData',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'IConfig',
                    defaultVal: '{}',
                    required: '',
                  },
                ],
                returnType: 'HtmlElement',
                returnDesc: '上下文菜单的el',
              },
              {
                name: 'close',
                desc: '关闭一个上下文菜单',
                modifier: 'public',
                params: [
                  {
                    name: 'el',
                    desc: '使用open方法返回的参数',
                    type: 'HtmlElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
