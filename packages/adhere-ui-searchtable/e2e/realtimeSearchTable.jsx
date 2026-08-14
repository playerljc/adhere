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
 * RealtimeSearchTableImpl
 * @description 实时查询示例
 * - 输入型（input / inputNumber）：连续输入后 debounce 触发查询
 * - 非输入型（dict / rangePicker）：onChange 后立即触发查询
 */
class RealtimeSearchTableImpl extends ProSearchStateTable {
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
        title: '姓名（实时-输入 debounce）',
        dataIndex: 'name',
        key: 'name',
        width: 200,
        $search: {
          type: 'input',
          visible: true,
          // true：启用实时查询，输入型默认 debounce 300ms
          realtimeSearch: true,
        },
      },
      {
        title: '籍贯（实时-自定义 debounce 500ms）',
        dataIndex: 'homeTown',
        key: 'homeTown',
        width: 220,
        $search: {
          type: 'input',
          visible: true,
          realtimeSearch: {
            enabled: true,
            debounce: 500,
          },
        },
      },
      {
        title: '身高（实时-数字输入）',
        dataIndex: 'height',
        key: 'height',
        align: 'center',
        width: 180,
        sorter: true,
        sortOrder: this.sortOrder('height'),
        $search: {
          type: 'inputNumberDecimal2',
          visible: true,
          realtimeSearch: true,
        },
      },
      {
        title: '性别（实时-非输入型 onChange）',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        width: 200,
        render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
        $search: {
          type: 'dict',
          visible: true,
          dictName: `${genDictComponentName(names.SystemTestSex, ComponentNames.Select.Standard)}`,
          // 非输入型：选择后立即触发查询
          realtimeSearch: true,
        },
      },
      {
        title: '出生年月（实时-区间）',
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
          realtimeSearch: true,
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
})(RealtimeSearchTableImpl);

export default () => {
  return <Wrap FieldGeneratorToDict={FieldGeneratorToDict} />;
};
