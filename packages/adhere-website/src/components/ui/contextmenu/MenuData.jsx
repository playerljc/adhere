import React from 'react';

import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowsAltOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FileAddOutlined,
  FolderAddOutlined,
  FolderOutlined,
} from '@ant-design/icons';

/**
 * 上下文菜单数据
 * @return - {Array}
 */
export const contextMenuData = [
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
