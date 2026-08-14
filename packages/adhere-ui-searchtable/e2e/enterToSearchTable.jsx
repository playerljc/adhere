import React from 'react';

import { Resource } from '@baifendian/adhere';
import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import SearchTable from '../src/index';
import { names } from './config/dict/dict/dict.test.config';
import './serviceRegister';

import './index.less';

const { ProSearchStateTable, SearchTableStateImplementFactory } = SearchTable;
const { ComponentNames, genDictComponentName } = FieldGeneratorToDict;
const serviceName = 'user';

/**
 * EnterToSearchTableImpl
 * @description 非实时查询下，输入型控件回车触发查询示例
 * - 输入型（input / inputNumber）：输入后按 Enter 触发查询（无需点查询按钮）
 * - 非输入型（dict / rangePicker）：仍需点查询按钮（或沿用原有表单回车逻辑）
 * - 未配置 realtimeSearch，行为与改造前一致，仅增强了输入型回车
 */
class EnterToSearchTableImpl extends ProSearchStateTable {
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
        title: '姓名（Enter 查询）',
        dataIndex: 'name',
        key: 'name',
        width: 180,
        $search: {
          type: 'input',
          visible: true,
          // 未开启 realtimeSearch：输入后按回车触发查询
        },
      },
      {
        title: '籍贯（Enter 查询）',
        dataIndex: 'homeTown',
        key: 'homeTown',
        width: 180,
        $search: {
          type: 'input',
          visible: true,
        },
      },
      {
        title: '身高（Enter 查询）',
        dataIndex: 'height',
        key: 'height',
        align: 'center',
        width: 180,
        sorter: true,
        sortOrder: this.sortOrder('height'),
        $search: {
          type: 'inputNumberDecimal2',
          visible: true,
        },
      },
      {
        title: '性别（需点查询）',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        width: 180,
        render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
        $search: {
          type: 'dict',
          visible: true,
          dictName: `${genDictComponentName(names.SystemTestSex, ComponentNames.Select.Standard)}`,
        },
      },
      {
        title: '出生年月（需点查询）',
        dataIndex: 'birthday',
        key: 'birthday',
        align: 'center',
        width: 260,
        sorter: true,
        sortOrder: this.sortOrder('birthday'),
        $search: {
          type: 'rangePicker',
          visible: true,
          startName: 'birthDayStart',
          endName: 'birthDayEnd',
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
})(EnterToSearchTableImpl);

export default () => {
  return <Wrap FieldGeneratorToDict={FieldGeneratorToDict} />;
};
