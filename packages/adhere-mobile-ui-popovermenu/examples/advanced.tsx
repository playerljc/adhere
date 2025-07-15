import React from 'react';
import { Button, Space } from 'antd-mobile';
import { 
  UserOutline, 
  SettingOutline, 
  MessageOutline, 
  StarOutline,
  HeartOutline,
  SmileOutline,
  FireOutline,
  ThunderboltOutline
} from 'antd-mobile-icons';
import PopoverMenu from '../src';

/**
 * 高级使用示例
 */
const AdvancedExample: React.FC = () => {
  const complexMenuItems = [
    {
      key: 'user',
      text: '用户中心',
      icon: <UserOutline />,
      isLeaf: false,
      items: [
        {
          key: 'profile',
          text: '个人资料',
          icon: <UserOutline />,
          isLeaf: true,
          onClick: async () => {
            console.log('点击了个人资料');
            await new Promise(resolve => setTimeout(resolve, 100));
          },
        },
        {
          key: 'favorites',
          text: '我的收藏',
          icon: <StarOutline />,
          isLeaf: true,
          onClick: async () => {
            console.log('点击了我的收藏');
            await new Promise(resolve => setTimeout(resolve, 100));
          },
        },
        {
          key: 'likes',
          text: '我的点赞',
          icon: <HeartOutline />,
          isLeaf: true,
          onClick: async () => {
            console.log('点击了我的点赞');
            await new Promise(resolve => setTimeout(resolve, 100));
          },
        },
      ],
    },
    {
      key: 'settings',
      text: '系统设置',
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
          key: 'notification',
          text: '通知设置',
          icon: <MessageOutline />,
          isLeaf: true,
          onClick: async () => {
            console.log('点击了通知设置');
            await new Promise(resolve => setTimeout(resolve, 100));
          },
        },
        {
          key: 'disabled-setting',
          text: '禁用设置',
          icon: <SmileOutline />,
          isLeaf: true,
          disabled: true,
        },
      ],
    },
    {
      key: 'tools',
      text: '工具',
      icon: <FireOutline />,
      isLeaf: false,
      items: [
        {
          key: 'tool1',
          text: '工具1',
          icon: <ThunderboltOutline />,
          isLeaf: true,
          onClick: async () => {
            console.log('点击了工具1');
            await new Promise(resolve => setTimeout(resolve, 100));
          },
        },
        {
          key: 'tool2',
          text: '工具2',
          isLeaf: true,
          onClick: async () => {
            console.log('点击了工具2');
            await new Promise(resolve => setTimeout(resolve, 100));
          },
        },
      ],
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h3>高级弹出菜单示例</h3>
      <Space direction="vertical" style={{ width: '100%' }}>
        <PopoverMenu 
          items={complexMenuItems}
          maxCount={4} // 限制最大显示数量
        >
          <Button color="primary" block>
            多级菜单（限制显示数量）
          </Button>
        </PopoverMenu>

        <PopoverMenu 
          items={complexMenuItems}
          direction="vertical"
          popoverProps={{
            placement: 'top',
          }}
        >
          <Button color="success" block>
            垂直方向菜单
          </Button>
        </PopoverMenu>

        <PopoverMenu 
          items={complexMenuItems}
          menuClassName="custom-menu"
          menuStyle={{ 
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
          }}
        >
          <Button color="warning" block>
            自定义样式菜单
          </Button>
        </PopoverMenu>
      </Space>
    </div>
  );
};

export default AdvancedExample; 