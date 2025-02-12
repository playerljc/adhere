import React from 'react';

import Mock from '@baifendian/adhere-mock';

import SearchTable from '../src/index';
import { fetchSSQData } from './mock';
import './serviceRegister';

const { County } = Mock;
const { ProSearchRowDragSortStateTable, Table, SearchTableStateImplementFactory, DragSortColumn } =
  SearchTable;

const serviceName = 'user';

/**
 * RowDragSort
 * @class RowDragSort
 * @classdesc RowDragSort
 */
class RowDragSort extends ProSearchRowDragSortStateTable {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      // selectedRowKeys: City['330000000000'].map(({ id }) => id),
      // selectedRowKeys: ['210102000000'],
      selectedRowKeys: props.defaultSelectedRowKeys,
    };
  }

  getComponentId() {
    return 'RowDragSort';
  }

  getServiceName() {
    return serviceName;
  }

  getFetchListPropName() {
    return 'fetchSSQData';
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

  // loadData(record) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(
  //         Array.from({ length: 6 }).map((_, i) => ({
  //           id: faker.random.uuid(),
  //           name: faker.internet.userName(),
  //           sex: `${Util.generatorRandom(0, 1)}`,
  //           homeTown: faker.address.city(),
  //           address: faker.address.city(),
  //           birthday: new Date().getTime(),
  //           deptName: faker.company.companyName(),
  //           height: faker.random.number(),
  //           width: faker.random.number(),
  //         })),
  //       );
  //     }, 1000);
  //   });
  // }
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
  return <Wrap {...props} defaultSelectedRowKeys={County['330100000000'].map(({ id }) => id)} />;
};
