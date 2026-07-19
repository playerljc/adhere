import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Radio, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import Tabs from '../../src/tabs';

/**
 * SegmentedTabs e2e
 * 验收：基本切换 / disabled / 可编辑增删 / 横纵溢出滑动 / destroyOnHidden / forceRender / extra
 */
const MountProbe = ({ name }) => {
  useEffect(() => {
    console.log(`[MountProbe] mount: ${name}`);
    return () => {
      console.log(`[MountProbe] unmount: ${name}`);
    };
  }, [name]);

  return <div>Panel content: {name}</div>;
};

const initialEditableItems = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of editable Tab 1',
  },
  {
    key: '2',
    label: 'Tab 2 (closable=false)',
    closable: false,
    children: 'Content of editable Tab 2（不可关闭）',
  },
  {
    key: '3',
    label: 'Tab 3 (disabled)',
    disabled: true,
    children: 'Content of editable Tab 3（禁用，无删除按钮）',
  },
  {
    key: '4',
    label: 'Tab 4',
    children: 'Content of editable Tab 4',
  },
];

export default () => {
  const [placement, setPlacement] = useState('top');
  const [destroyOnHidden, setDestroyOnHidden] = useState(false);
  const [editableActiveKey, setEditableActiveKey] = useState(initialEditableItems[0].key);
  const [editableItems, setEditableItems] = useState(initialEditableItems);
  const newTabIndex = useRef(0);

  const overflowItems = Array.from({ length: 20 }, (_, i) => {
    const id = String(i + 1);
    return {
      key: id,
      label: `Tab ${id}`,
      disabled: i === 17,
      children: <div style={{ padding: 16 }}>Content of Tab {id}</div>,
    };
  });

  const addEditableTab = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    setEditableItems((prev) => [
      ...prev,
      {
        key: newActiveKey,
        label: `New Tab ${newTabIndex.current}`,
        children: `Content of ${newActiveKey}`,
      },
    ]);
    setEditableActiveKey(newActiveKey);
  };

  const removeEditableTab = (targetKey) => {
    setEditableItems((prev) => {
      const targetIndex = prev.findIndex((item) => item.key === targetKey);
      const nextItems = prev.filter((item) => item.key !== targetKey);

      if (nextItems.length && targetKey === editableActiveKey) {
        const nextActive =
          nextItems[targetIndex === nextItems.length ? targetIndex - 1 : targetIndex];
        setEditableActiveKey(nextActive.key);
      }

      return nextItems;
    });
  };

  const onEditableEdit = (targetKey, action) => {
    if (action === 'add') {
      addEditableTab();
    } else {
      removeEditableTab(targetKey);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <h3>Basic + icon + size + disabled</h3>
          <Tabs.SegmentedTabs
            defaultActiveKey="1"
            size="middle"
            items={[
              {
                key: '1',
                label: 'Tab 1',
                icon: <AppleOutlined />,
                children: 'Content of Tab Pane 1',
              },
              {
                key: '2',
                label: 'Tab 2',
                icon: <AndroidOutlined />,
                children: 'Content of Tab Pane 2',
              },
              {
                key: '3',
                label: 'Tab 3 (disabled)',
                disabled: true,
                children: 'Content of Tab Pane 3',
              },
            ]}
            tabBarExtraContent={<a>Extra</a>}
          />
        </div>

        <div>
          <h3>Editable + disabled + closable</h3>
          <Tabs.SegmentedTabs
            type="editable-card"
            activeKey={editableActiveKey}
            onChange={setEditableActiveKey}
            onEdit={onEditableEdit}
            items={editableItems}
          />
          <p style={{ color: '#999', marginTop: 8 }}>
            可新增/删除；Tab 2 设置 closable=false 无删除按钮；Tab 3 disabled 不可点选且无删除按钮。
          </p>
        </div>

        <div>
          <h3>Overflow Swiper (placement)</h3>
          <Radio.Group
            value={placement}
            onChange={(e) => setPlacement(e.target.value)}
            style={{ marginBottom: 12 }}
            optionType="button"
            options={[
              { label: 'top', value: 'top' },
              { label: 'bottom', value: 'bottom' },
              { label: 'start', value: 'start' },
              { label: 'end', value: 'end' },
            ]}
          />
          <div
            style={{
              height: 220,
              width: placement === 'top' || placement === 'bottom' ? 360 : '100%',
            }}
          >
            <Tabs.SegmentedTabs
              defaultActiveKey="1"
              tabPlacement={placement}
              style={{ height: '100%' }}
              items={overflowItems}
              onTabScroll={(info) => {
                console.log('[onTabScroll]', info);
              }}
            />
          </div>
        </div>

        <div>
          <h3>destroyOnHidden / forceRender</h3>
          <Radio.Group
            value={destroyOnHidden}
            onChange={(e) => setDestroyOnHidden(e.target.value)}
            style={{ marginBottom: 12 }}
            optionType="button"
            options={[
              { label: 'keep alive', value: false },
              { label: 'destroyOnHidden', value: true },
            ]}
          />
          <Tabs.SegmentedTabs
            defaultActiveKey="a"
            destroyOnHidden={destroyOnHidden}
            items={[
              {
                key: 'a',
                label: 'Keep/Destroy A',
                children: <MountProbe name="A" />,
              },
              {
                key: 'b',
                label: 'ForceRender B',
                forceRender: true,
                children: <MountProbe name="B-forceRender" />,
              },
              {
                key: 'c',
                label: 'Normal C',
                children: <MountProbe name="C" />,
              },
            ]}
          />
          <p style={{ color: '#999', marginTop: 8 }}>
            打开控制台：切换 Tab 观察 MountProbe mount/unmount。destroyOnHidden=true 时非激活面板应卸载；B
            带 forceRender 时应预先挂载。
          </p>
        </div>
      </Space>
    </div>
  );
};
