import React, { useState, useRef } from 'react';
import ScrollLoad from '../src/ScrollLoad';
import type { ScrollLoadRefHandle, ScrollLoadStatus } from '../src/types';

/**
 * ScrollLoad 基本使用示例
 */
const BasicExample: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollLoadRef = useRef<ScrollLoadRefHandle>(null);

  /**
   * 模拟加载更多数据
   */
  const loadMoreData = (handle?: (status?: ScrollLoadStatus) => void) => {
    if (loading) return;
    
    setLoading(true);
    console.log('开始加载数据...');
    
    // 模拟异步请求
    setTimeout(() => {
      const newData = Array.from(
        { length: 10 }, 
        (_, i) => `列表项 ${data.length + i + 1}`
      );
      
      if (data.length >= 50) {
        // 没有更多数据
        console.log('没有更多数据');
        handle?.(ScrollLoad.EMPTY);
      } else {
        setData(prev => [...prev, ...newData]);
        console.log('数据加载成功');
        handle?.(ScrollLoad.NORMAL);
      }
      
      setLoading(false);
    }, 1000);
  };

  /**
   * 重置状态
   */
  const resetStatus = () => {
    scrollLoadRef.current?.hideAll();
    setData([]);
  };

  /**
   * 空数据状态点击处理
   */
  const handleEmptyClick = () => {
    console.log('点击了空数据状态');
    resetStatus();
  };

  /**
   * 错误状态点击处理
   */
  const handleErrorClick = () => {
    console.log('点击了错误状态');
    // 这里可以添加重试逻辑
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>ScrollLoad 基本使用示例</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={resetStatus} style={{ marginRight: '10px' }}>
          重置
        </button>
        <span>当前数据条数: {data.length}</span>
      </div>

      <ScrollLoad
        ref={scrollLoadRef}
        distance={50}
        onScrollBottom={loadMoreData}
        onEmptyClick={handleEmptyClick}
        onErrorClick={handleErrorClick}
        style={{ 
          height: '400px', 
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
        loadStyle={{
          color: '#1890ff',
          fontWeight: 'bold'
        }}
        emptyStyle={{
          color: '#999'
        }}
        errorStyle={{
          color: '#ff4d4f'
        }}
      >
        {data.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '12px 16px', 
              borderBottom: '1px solid #f0f0f0',
              backgroundColor: index % 2 === 0 ? '#fafafa' : '#fff'
            }}
          >
            {item}
          </div>
        ))}
      </ScrollLoad>

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>使用说明：</p>
        <ul>
          <li>滚动到底部会自动触发加载</li>
          <li>加载完成后会显示新的数据</li>
          <li>当数据达到50条时会显示"没有更多数据"</li>
          <li>点击"重置"按钮可以清空数据重新开始</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicExample; 