import React from 'react';

import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import SearchTable from '../src/index';
import './serviceRegister';

import './index.less';

const { ProSearchStateTable, SearchTableStateImplementFactory } = SearchTable;
const serviceName = 'user';

/**
 * DatePickerDependenciesSearchTableImpl
 * @description datePicker 查询项 dependencies 相互制约示例
 * - 开始日期（effectiveStartTimeStart）不能晚于结束日期（effectiveEndTimeEnd）
 * - 结束日期（effectiveEndTimeEnd）不能早于开始日期（effectiveStartTimeStart）
 */
class DatePickerDependenciesSearchTableImpl extends ProSearchStateTable {
  getServiceName() {
    return serviceName;
  }

  getFetchListPropName() {
    return 'fetchList';
  }

  getOrderFieldValue() {
    return 'height';
  }

  hasAdvancedSearch() {
    return false;
  }

  getDataKey() {
    return 'list';
  }

  getTotalKey() {
    return 'totalCount';
  }

  getColumns() {
    return super.getColumns([
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 180,
      },
      {
        title: '开始日期',
        dataIndex: 'birthday',
        key: 'birthday',
        align: 'center',
        width: 220,
        $search: {
          type: 'datePicker',
          visible: true,
          sort: 1,
          dataIndex: 'effectiveStartTimeStart',
          dependencies: ['effectiveEndTimeEnd'],
        },
      },
      {
        title: '结束日期',
        dataIndex: 'birthday',
        key: 'birthdayEnd',
        align: 'center',
        width: 220,
        $search: {
          type: 'datePicker',
          visible: true,
          sort: 2,
          dataIndex: 'effectiveEndTimeEnd',
          dependencies: ['effectiveStartTimeStart'],
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
      },
      {
        title: '现居住地',
        dataIndex: 'address',
        key: 'address',
        width: 300,
      },
    ]);
  }
}

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
})(DatePickerDependenciesSearchTableImpl);

export default () => {
  return <Wrap FieldGeneratorToDict={FieldGeneratorToDict} />;
};
