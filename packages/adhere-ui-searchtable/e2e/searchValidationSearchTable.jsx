import React from 'react';

import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import SearchTable from '../src/index';
import './serviceRegister';

import './index.less';

const { ProSearchStateTable, SearchTableStateImplementFactory } = SearchTable;
const serviceName = 'user';

/**
 * SearchValidationSearchTableImpl
 * @description 查询项 required / rules / help 校验示例
 * - 点击查询按钮：校验失败时 notification 提示并阻断
 * - 实时查询：同样先校验，失败不发起请求
 */
class SearchValidationSearchTableImpl extends ProSearchStateTable {
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
        title: '姓名（必填）',
        dataIndex: 'name',
        key: 'name',
        width: 220,
        $search: {
          type: 'input',
          visible: true,
          sort: 1,
          required: true,
          requiredMarkPlacement: 'before',
          help: '姓名为必填查询条件',
        },
      },
      {
        title: '身高（最小值校验）',
        dataIndex: 'height',
        key: 'height',
        align: 'center',
        width: 220,
        $search: {
          type: 'inputNumberDecimal2',
          visible: true,
          sort: 2,
          rules: [{ required: true, message: '请输入身高' }, { min: 1, message: '身高至少为 1' }],
          help: '请输入大于 0 的身高',
        },
      },
      {
        title: '开始日期',
        dataIndex: 'birthday',
        key: 'birthdayStart',
        align: 'center',
        width: 220,
        $search: {
          type: 'datePicker',
          visible: true,
          sort: 3,
          dataIndex: 'effectiveStartTimeStart',
          required: true,
          requiredMarkPlacement: 'after',
          renderRequiredMark: (mark) => <span style={{ color: '#ff4d4f' }}>{mark}</span>,
          dependencies: ['effectiveEndTimeEnd'],
          help: '开始日期不能为空',
        },
      },
      {
        title: '结束日期（实时查询 + 必填）',
        dataIndex: 'birthday',
        key: 'birthdayEnd',
        align: 'center',
        width: 260,
        $search: {
          type: 'datePicker',
          visible: true,
          sort: 4,
          dataIndex: 'effectiveEndTimeEnd',
          required: true,
          dependencies: ['effectiveStartTimeStart'],
          realtimeSearch: true,
          help: '修改后立即查询，但会先校验',
        },
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
})(SearchValidationSearchTableImpl);

export default () => {
  return <Wrap FieldGeneratorToDict={FieldGeneratorToDict} />;
};
