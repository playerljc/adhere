import React, { useState } from 'react';

import Space from '../../src/space';
import Tag from '../../src/tag';

export default () => {
  const [checked, setChecked] = useState(true);

  return (
    <Space orientation="vertical" size={12}>
      <Space wrap>
        <Tag type="success">success</Tag>
        <Tag type="info">info</Tag>
        <Tag type="warning">warning</Tag>
        <Tag type="error">error</Tag>
        <Tag type="primary">primary</Tag>
        <Tag type="processing">processing</Tag>
        <Tag type="danger">danger</Tag>
      </Space>
      <Space wrap>
        <Tag type="blue">blue</Tag>
        <Tag type="purple">purple</Tag>
        <Tag type="cyan">cyan</Tag>
        <Tag type="geekblue">geekblue</Tag>
        <Tag type="secondary">secondary</Tag>
        <Tag type="neutral">neutral</Tag>
        <Tag type="disabled">disabled</Tag>
      </Space>
      <Tag type="success" textColor="#722ed1" bgColor="#f9f0ff" borderColor="#d3adf7">
        自定义三色覆盖 type
      </Tag>
      <Tag type="error" radius={16} padding="4px 12px">
        radius + padding
      </Tag>
      <Tag closable onClose={() => console.log('close')}>
        closable
      </Tag>
      <Tag.CheckableTag checked={checked} onChange={setChecked}>
        CheckableTag
      </Tag.CheckableTag>
      <Tag>默认 Tag</Tag>
    </Space>
  );
};
