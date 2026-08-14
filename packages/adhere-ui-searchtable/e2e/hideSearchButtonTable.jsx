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
 * HideSearchButtonTableImpl
 * @description 隐藏查询按钮示例（通常配合实时查询使用）
 * - 覆盖 renderSearchFormToolBarSearchItem 返回 null，隐藏「查询」按钮
 * - 保留「重置」按钮
 * - 各查询项开启 realtimeSearch，无需手动点查询
 */
class HideSearchButtonTableImpl extends ProSearchStateTable {
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

  /**
   * 隐藏查询按钮
   */
  renderSearchFormToolBarSearchItem() {
    return null;
  }

  getColumns() {
    return super.getColumns([
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 180,
        $search: {
          type: 'input',
          visible: true,
          realtimeSearch: true,
        },
      },
      {
        title: '籍贯',
        dataIndex: 'homeTown',
        key: 'homeTown',
        width: 180,
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
        title: '身高',
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
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        width: 180,
        render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
        $search: {
          type: 'dict',
          visible: true,
          dictName: `${genDictComponentName(names.SystemTestSex, ComponentNames.Select.Standard)}`,
          realtimeSearch: true,
        },
      },
      {
        title: '出生年月',
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
})(HideSearchButtonTableImpl);

export default () => {
  return <Wrap FieldGeneratorToDict={FieldGeneratorToDict} />;
};
