import React from 'react';

import Mock from '@baifendian/adhere-mock';

import SearchTable from '../src/index';
import './serviceRegister';

const { City, County } = Mock;

const { ProSearchRowDragSortStateTable, SearchTableStateImplementFactory, DragSortColumn } =
  SearchTable;

const serviceName = 'user';

/**
 * RowDragSort
 * @class RowDragSort
 * @classdesc RowDragSort
 */
class RowDragSort extends ProSearchRowDragSortStateTable {
  getComponentId() {
    return 'RowDragSort';
  }

  getServiceName() {
    return serviceName;
  }

  getFetchListPropName() {
    return 'fetchSList';
  }

  getOrderFieldValue() {
    return 'height';
  }

  /**
   * getDataKey
   * @description - 获取数据的key
   * @protected
   */
  getDataKey() {
    return 'list';
  }

  /**
   * getTotalKey
   * @description - 获取total的key
   * @protected
   */
  getTotalKey() {
    return 'totalCount';
  }

  /**
   * Table的列
   * @override
   * @return {*[]}
   */
  getColumns() {
    return super.getColumns([
      DragSortColumn(),
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        $search: {
          type: 'input',
          visible: true,
        },
      },
    ]);
  }

  isUseCheckedStrategy() {
    return true;
  }

  getRowSelectionMode() {
    return SearchTable.Table.ROW_SELECTION_CONTINUOUS_MODE;
  }

  getCheckedStrategy() {
    return SearchTable.Table.CHECKED_STRATEGY_SHOW_ALL;
  }

  isCanAsync(record) {
    const keys = Object.keys(County).reduce((keys, key) => {
      keys.push(...County[key].map((t) => t.id));
      return keys;
    }, []);

    return !keys.includes(record.id);
  }

  loadData(record) {
    const id = record.id;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(City[id] ? City[id] : County[id]);
      }, 1000);
    });
  }
}

RowDragSort.propTypes = {};

const models = [];
const requireComponent = require.context('./model', false, /.*\.(js)$/);
requireComponent.keys().forEach((fileName) => {
  const model = requireComponent(fileName);
  models.push(model.default());
});

const Wrap = SearchTableStateImplementFactory({
  serviceNames: [serviceName],
  middleWares: [],
  reducer: null,
  models,
})(RowDragSort);

export default (props) => {
  return <Wrap {...props} defaultSelectedRowKeys={City['210000000000'].map(({ id }) => id)} />;
};
