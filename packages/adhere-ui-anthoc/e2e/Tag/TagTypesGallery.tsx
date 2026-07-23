import React from 'react';

import Space from '../../src/space';
import Tag from '../../src/tag';
import type { TagSemanticType } from '../../src/tag/types';

/** README 截图用：覆盖 types.ts 中全部语义 type */
export const TAG_SEMANTIC_TYPES: TagSemanticType[] = [
  'success',
  'info',
  'warning',
  'error',
  'primary',
  'default',
  'processing',
  'danger',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
  'secondary',
  'neutral',
  'disabled',
];

export default function TagTypesGallery() {
  return (
    <div style={{ padding: 24, background: '#fff' }}>
      <Space orientation="vertical" size={24} style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(140px, 1fr))',
            gap: 20,
          }}
        >
          {TAG_SEMANTIC_TYPES.map((type) => (
            <div key={type} data-tag-type={type} style={{ padding: 4 }}>
              <Tag type={type}>{type}</Tag>
            </div>
          ))}
        </div>
        <Space orientation="vertical" size={12}>
          <div data-tag-type="custom-colors">
            <Tag type="success" textColor="#722ed1" bgColor="#f9f0ff" borderColor="#d3adf7">
              自定义三色
            </Tag>
          </div>
          <div data-tag-type="radius-padding">
            <Tag type="error" radius={16} padding="4px 12px">
              radius + padding
            </Tag>
          </div>
          <div data-tag-type="antd-color">
            <Tag color="blue">Ant Design color</Tag>
          </div>
          <div data-tag-type="plain">
            <Tag>默认 Tag</Tag>
          </div>
        </Space>
      </Space>
    </div>
  );
}
