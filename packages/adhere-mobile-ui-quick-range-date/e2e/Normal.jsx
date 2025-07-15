/**
 * 移动端快速日期范围选择器基础功能测试
 * 演示组件的基本使用方法和功能
 */

import dayjs from 'dayjs';
import React, { useState } from 'react';

import QuickRangeDate from '../src/index';

import '../src/index.less';

/**
 * 基础功能测试组件
 * @returns 渲染的测试组件
 */
export default () => {
  /** 当前选中的日期值 */
  const [value, setValue] = useState({
    type: 'custom',
    value: undefined,
    start: dayjs().subtract(2, 'day').valueOf(),
    end: dayjs().subtract(1, 'day').valueOf(),
  });

  /**
   * 处理日期值变化
   * @param newValue - 新的日期值
   */
  const handleChange = (newValue) => {
    console.log('日期值变化:', newValue);
    setValue(newValue);
  };

  return (
    <div style={{ padding: '16px' }}>
      <h3>移动端快速日期范围选择器 - 基础功能测试</h3>
      
      <QuickRangeDate
        value={value}
        onChange={handleChange}
        calendarModalProps={{}}
        checkboxCheckListProps={{}}
        modalTriggerPromptProps={{}}
        /* 
        可选：自定义配置示例
        config={[
          {
            type: 'a-d',
            value: 1,
            render: () => (
              <div>
                <span>1</span>
                <span>2</span>
              </div>
            ),
          },
          {
            type: 'a-w',
            value: 1,
          },
          {
            type: 'a-M',
            value: 1,
          },
          {
            type: 'a-Q',
            value: 1,
          },
          {
            type: 'a-y',
            value: 1,
          },
          {
            type: 'a-h',
            value: 1,
          },
          {
            type: 'a-m',
            value: 1,
          },
          {
            type: 'a-s',
            value: 1,
          },
          {
            type: 'a-ms',
            value: 1,
          },
          {
            type: 'custom',
          },
        ]}
        */
      />

      {/* 显示当前选中的值 */}
      <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h4>当前选中值：</h4>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  );
};
