import React from 'react';
import BasicExample from './basic';
import AdvancedExample from './advanced';

/**
 * ScrollLoad 组件示例集合
 */
const ScrollLoadExamples: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#1890ff' }}>
        ScrollLoad 组件示例
      </h1>
      
      <div style={{ marginBottom: '60px' }}>
        <BasicExample />
      </div>
      
      <div style={{ borderTop: '2px solid #f0f0f0', paddingTop: '40px' }}>
        <AdvancedExample />
      </div>
    </div>
  );
};

export default ScrollLoadExamples; 