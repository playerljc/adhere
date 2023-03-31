import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

const { ProTableFactory } = SearchTable;

/**
 * ProListFactory
 * @param SuperClass
 * @param searchAndPaginParamsMemo
 */
export default (SuperClass, searchAndPaginParamsMemo) =>
  class extends ProTableFactory(SuperClass, searchAndPaginParamsMemo) {
    getParams() {
      const params = {};

      const loop = (columns) => {
        columns.reduce((params, column) => {
          const { $search, children } = column;
          const searchConfig = $search || {};
          const dataIndex = searchConfig.dataIndex || column.dataIndex;

          if (searchConfig.type === 'rangePicker') {
            if (searchConfig.startName) params[searchConfig.startName] = null;
            if (searchConfig.endName) params[searchConfig.endName] = null;
          } else if (['datePicker', 'timePicker'].includes(searchConfig.type)) {
            params[dataIndex] = null;
          } else {
            params[dataIndex] = undefined;
          }

          if (children && Array.isArray(children)) {
            loop(children);
          }

          return params;
        }, params);
      };

      loop(this.getColumns());

      return params;
    }

    getColumns() {
      return [];
    }
  };
