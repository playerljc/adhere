import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

import ViewFactory from './ViewFactory';

const { TableDensitySetting } = SearchTable;

/**
 * TableViewFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass) {
  return class extends ViewFactory<P, S>(SuperClass) {
    /**
     * getOrderFieldValue
     * @description - 获取默认排序字段的值
     * @override
     * @protected
     * @return {string}
     */
    getOrderFieldValue(): string {
      return 'resourceType';
    }

    renderTableDensitySetting({ density, onChange, onReset }) {
      return (
        <TableDensitySetting
          density={density}
          onChange={(_density) => {
            this.setState({
              tableDensity: _density,
            });
            onChange(_density);
          }}
          onReset={() => {
            const defaultDensity = this.getTableDensity();

            this.setState({
              tableDensity: defaultDensity,
            });
            onReset(defaultDensity);
          }}
        />
      );
    }
  };
}
