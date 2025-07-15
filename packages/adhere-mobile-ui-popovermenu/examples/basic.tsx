import React from 'react';
import { Button } from 'antd-mobile';
import { UserOutline, SettingOutline, RightOutline } from 'antd-mobile-icons';
import PopoverMenu from '../src';

/**
 * 基础使用示例
 */
const BasicExample: React.FC = () => {
  const menuItems = [
    {
      key: 'profile',
      text: '个人资料',
      icon: <UserOutline />,
      isLeaf: true,
      onClick: async () => {
        console.log('点击了个人资料');
        // 模拟异步操作
        await new Promise(resolve => setTimeout(resolve, 100));
      },
    },
    {
      key: 'settings',
      text: '设置',
      icon: <SettingOutline />,
      isLeaf: false,
      items: [
        {
          key: 'general',
          text: '通用设置',
          isLeaf: true,
          onClick: async () => {
            console.log('点击了通用设置');
            await new Promise(resolve => setTimeout(resolve, 100));
          },
        },
        {
          key: 'privacy',
          text: '隐私设置',
          isLeaf: true,
          onClick: async () => {
            console.log('点击了隐私设置');
            await new Promise(resolve => setTimeout(resolve, 100));
          },
        },
        {
          key: 'disabled-item',
          text: '禁用选项',
          isLeaf: true,
          disabled: true,
        },
      ],
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h3>基础弹出菜单示例</h3>
      <PopoverMenu items={menuItems}>
        <Button color="primary">
          点击显示菜单
        </Button>
      </PopoverMenu>
    </div>
  );
};

export default BasicExample; 