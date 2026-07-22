import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import Space from '../../src/space';
import Select from '../../src/select/index';

const options = [
  {
    label: '男',
    value: '2',
  },
  {
    label: '女',
    value: '1',
  },
];

export default () => {
  const [emptyValue, setEmptyValue] = useState([]);
  const [shouldRenderValue, setShouldRenderValue] = useState([]);

  return (
    <Space direction="vertical" size={24}>
      <div>
        <div style={{ marginBottom: 8 }}>emptyContent：搜索无结果时展示自定义空态</div>
        <Select.DropdownRenderSelect
          mode="multiple"
          placeholder="搜索不存在的关键字"
          value={emptyValue}
          onChange={setEmptyValue}
          style={{ width: 320 }}
          showSearch
          emptyContent={<div style={{ padding: 16, textAlign: 'center' }}>自定义空数据</div>}
          options={options}
        >
          {({ value: selectedValue, onChange, options: filterOptions }) => {
            return (
              <Checkbox.Group value={selectedValue} onChange={onChange} options={filterOptions} />
            );
          }}
        </Select.DropdownRenderSelect>
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>
          shouldRenderEmptyData：无数据时仍渲染 children（不展示空态）
        </div>
        <Select.DropdownRenderSelect
          mode="multiple"
          placeholder="shouldRenderEmptyData"
          value={shouldRenderValue}
          onChange={setShouldRenderValue}
          style={{ width: 320 }}
          showSearch
          shouldRenderEmptyData
          options={[]}
        >
          {({ value: selectedValue, onChange, options: filterOptions }) => {
            return (
              <div style={{ padding: 12 }}>
                <div style={{ marginBottom: 8, color: '#999' }}>options 为空仍渲染</div>
                <Checkbox.Group value={selectedValue} onChange={onChange} options={filterOptions} />
              </div>
            );
          }}
        </Select.DropdownRenderSelect>
      </div>
    </Space>
  );
};
