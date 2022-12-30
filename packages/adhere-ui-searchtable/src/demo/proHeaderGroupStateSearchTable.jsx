import React from 'react';

import { DateDisplay, Resource } from '@baifendian/adhere';

import SearchTable from '../index';
import './serviceRegister';

const { ProSearchStateTable, SearchTableStateImplementFactory } = SearchTable;

const serviceName = 'user';

/**
 * ProSearchStateTableImpl
 * @class ProSearchStateTableImpl
 * @classdesc ProSearchStateTableImpl
 */
class ProSearchStateTableImpl extends ProSearchStateTable {
  getComponentId() {
    return 'ProSearchStateTableImpl';
  }

  getServiceName() {
    return serviceName;
  }

  getFetchListPropName() {
    return 'fetchList';
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
      {
        title: '工作任务',
        $search: {
          type: 'select',
          visible: true,
          dictName: 'SystemTestSexSelect',
        },
        children: [
          {
            title: '预出成果数',
            dataIndex: 'taskResultsAllCount',
            key: 'taskResultsAllCount',
            width: 100,
            align: 'center',
            $search: {
              type: 'select',
              visible: true,
              dictName: 'SystemTestSexSelect',
            },
            $resizable: true,
          },
          {
            title: '完成数',
            dataIndex: 'taskResultsFinishCount',
            key: 'taskResultsFinishCount',
            width: 100,
            align: 'center',
            $search: {
              type: 'select',
              visible: true,
              dictName: 'SystemTestSexSelect',
            },
            $resizable: true,
          },
          {
            title: '总得分',
            dataIndex: 'taskResultsScore',
            key: 'taskResultsScore',
            width: 100,
            align: 'center',
            $search: {
              type: 'select',
              visible: true,
              dictName: 'SystemTestSexSelect',
            },
            $resizable: true,
          },
        ],
        $resizable: true,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        render: (val) => <div style={{ color: 'red' }}>{val}</div>,
        $search: {
          type: 'input',
          visible: true,
        },
        $resizable: true,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        width: 150,
        render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
        $search: {
          type: 'select',
          visible: true,
          dictName: 'SystemTestSexSelect',
        },
      },
      {
        title: '出生年月',
        dataIndex: 'birthday',
        key: 'birthday',
        align: 'center',
        width: 200,
        sorter: true,
        sortOrder: this.sortOrder('birthday'),
        render: (val) => <DateDisplay.DateDisplay10 value={val} />,
        $search: {
          type: 'rangePicker',
          visible: true,
          startName: 'birthDayStart',
          endName: 'birthDayEnd',
        },
      },
      {
        title: '身高',
        dataIndex: 'height',
        key: 'height',
        align: 'center',
        width: 150,
        sorter: true,
        sortOrder: this.sortOrder('height'),
        $search: {
          type: 'inputNumberDecimal2',
          visible: true,
        },
      },
      {
        title: '体重',
        dataIndex: 'width',
        key: 'width',
        align: 'center',
        width: 150,
        sorter: true,
        sortOrder: this.sortOrder('width'),
        $search: {
          type: 'inputNumberDecimal2',
          visible: true,
        },
      },
      {
        title: '籍贯',
        dataIndex: 'homeTown',
        key: 'homeTown',
        ellipsis: true,
        width: 200,
        $search: {
          type: 'input',
          visible: true,
        },
      },
      {
        title: '现居住地',
        dataIndex: 'address',
        key: 'address',
        width: 300,
        $search: {
          type: 'input',
          visible: true,
          valueAttrs: {
            colSpan: 5,
          },
        },
      },
    ]);
  }
}

ProSearchStateTableImpl.propTypes = {};

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
})(ProSearchStateTableImpl);

export default Wrap;
