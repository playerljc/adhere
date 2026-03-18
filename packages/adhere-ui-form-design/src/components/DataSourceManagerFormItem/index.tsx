import React, { type FC } from 'react';

export interface DataSourceManagerFormItemProps {
  // 静态数据和动态数据
  type: 'static' | 'dynamic';
}

/**
 * DataSourceManagerFormItem
 */
const DataSourceManagerFormItem: FC<DataSourceManagerFormItemProps> = () => {
  return <div>111</div>;
};

export default DataSourceManagerFormItem;
