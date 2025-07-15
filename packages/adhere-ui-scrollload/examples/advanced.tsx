import React, { useState, useRef } from 'react';
import ScrollLoad from '../src/ScrollLoad';
import type { ScrollLoadRefHandle, ScrollLoadStatus } from '../src/types';

/**
 * ScrollLoad 高级使用示例
 * 展示自定义UI、错误处理和自定义滚动容器
 */
const AdvancedExample: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollLoadRef = useRef<ScrollLoadRefHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * 模拟加载更多数据（包含错误处理）
   */
  const loadMoreData = (handle?: (status?: ScrollLoadStatus) => void) => {
    if (loading) return;
    
    setLoading(true);
    setError(false);
    console.log('开始加载数据...');
    
    // 模拟异步请求，随机出现错误
    setTimeout(() => {
      const shouldError = Math.random() < 0.2; // 20% 概率出现错误
      
      if (shouldError) {
        console.log('加载失败');
        setError(true);
        handle?.(ScrollLoad.ERROR);
        setLoading(false);
        return;
      }
      
      const newData = Array.from(
        { length: 8 }, 
        (_, i) => `高级列表项 ${data.length + i + 1}`
      );
      
      if (data.length >= 40) {
        console.log('没有更多数据');
        handle?.(ScrollLoad.EMPTY);
      } else {
        setData(prev => [...prev, ...newData]);
        console.log('数据加载成功');
        handle?.(ScrollLoad.NORMAL);
      }
      
      setLoading(false);
    }, 1500);
  };

  /**
   * 重置状态
   */
  const resetStatus = () => {
    scrollLoadRef.current?.hideAll();
    setData([]);
    setError(false);
  };

  /**
   * 重试加载
   */
  const retryLoad = () => {
    setError(false);
    // 手动触发加载
    loadMoreData();
  };

  /**
   * 自定义加载状态渲染
   */
  const renderCustomLoading = () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px',
      color: '#1890ff'
    }}>
      <div style={{
        width: '20px',
        height: '20px',
        border: '2px solid #f3f3f3',
        borderTop: '2px solid #1890ff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginRight: '10px'
      }} />
      <span>正在加载更多数据...</span>
    </div>
  );

  /**
   * 自定义空数据状态渲染
   */
  const renderCustomEmpty = () => (
    <div style={{ 
      textAlign: 'center', 
      padding: '30px 20px',
      color: '#999'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '10px' }}>📭</div>
      <p style={{ margin: '0 0 15px 0', fontSize: '16px' }}>暂无更多数据</p>
      <button 
        onClick={resetStatus}
        style={{
          padding: '8px 16px',
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        重新开始
      </button>
    </div>
  );

  /**
   * 自定义错误状态渲染
   */
  const renderCustomError = () => (
    <div style={{ 
      textAlign: 'center', 
      padding: '30px 20px',
      color: '#ff4d4f'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '10px' }}>⚠️</div>
      <p style={{ margin: '0 0 15px 0', fontSize: '16px' }}>加载失败，请重试</p>
      <button 
        onClick={retryLoad}
        style={{
          padding: '8px 16px',
          border: '1px solid #ff4d4f',
          borderRadius: '4px',
          backgroundColor: '#ff4d4f',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '14px',
          marginRight: '10px'
        }}
      >
        重试
      </button>
      <button 
        onClick={resetStatus}
        style={{
          padding: '8px 16px',
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        重置
      </button>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>ScrollLoad 高级使用示例</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={resetStatus} 
          style={{ 
            marginRight: '10px',
            padding: '8px 16px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            backgroundColor: '#fff',
            cursor: 'pointer'
          }}
        >
          重置
        </button>
        <span>当前数据条数: {data.length}</span>
        {error && <span style={{ color: '#ff4d4f', marginLeft: '10px' }}>⚠️ 上次加载失败</span>}
      </div>

      {/* 自定义滚动容器 */}
      <div 
        ref={containerRef}
        style={{ 
          height: '500px', 
          overflow: 'auto',
          border: '1px solid #ddd',
          borderRadius: '4px',
          position: 'relative'
        }}
      >
        <ScrollLoad
          ref={scrollLoadRef}
          getScrollContainer={() => containerRef.current!}
          distance={80}
          onScrollBottom={loadMoreData}
          renderLoading={renderCustomLoading}
          renderEmpty={renderCustomEmpty}
          renderError={renderCustomError}
        >
          {data.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                padding: '16px 20px', 
                borderBottom: '1px solid #f0f0f0',
                backgroundColor: index % 2 === 0 ? '#fafafa' : '#fff',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: `hsl(${(index * 25) % 360}, 70%, 60%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 'bold',
                marginRight: '12px'
              }}>
                {index + 1}
              </div>
              <div>
                <div style={{ fontWeight: '500', marginBottom: '4px' }}>{item}</div>
                <div style={{ fontSize: '12px', color: '#999' }}>
                  创建时间: {new Date(Date.now() - Math.random() * 1000000000).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </ScrollLoad>
      </div>

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>高级功能说明：</p>
        <ul>
          <li>使用自定义滚动容器，支持更灵活的布局</li>
          <li>自定义加载、空数据、错误状态的UI</li>
          <li>包含错误处理机制，20%概率模拟加载失败</li>
          <li>支持重试和重置功能</li>
          <li>更美观的列表项展示，包含头像和时间戳</li>
        </ul>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AdvancedExample; 