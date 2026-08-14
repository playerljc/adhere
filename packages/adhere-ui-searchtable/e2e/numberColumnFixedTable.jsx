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
 * NumberColumnFixedTableImpl
 * @description 序号列固定随数据动态切换示例
 * - 有数据时：序号列 fixed=left（横向滚动时序号列保持可见）
 * - 无数据时：序号列不固定（避免空表时固定列占位异常）
 * - 验证方式：输入一个查不到的姓名后点查询 → 空数据 → 序号列不再固定；点重置恢复数据后序号列重新固定
 * - hasNumberColumnFixed() 已由 ProTableFactory 按 getData().length 自动判断，本例无需覆盖
 */
class NumberColumnFixedTableImpl extends ProSearchStateTable {
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
        $search: {
          type: 'input',
          visible: true,
        },
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        width: 120,
        render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
        $search: {
          type: 'dict',
          visible: true,
          dictName: `${genDictComponentName(names.SystemTestSex, ComponentNames.Select.Standard)}`,
        },
      },
      {
        title: '籍贯',
        dataIndex: 'homeTown',
        key: 'homeTown',
        width: 200,
        $search: {
          type: 'input',
          visible: true,
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
        title: '体重',
        dataIndex: 'width',
        key: 'width',
        align: 'center',
        width: 150,
        sorter: true,
        sortOrder: this.sortOrder('width'),
      },
      {
        title: '出生年月',
        dataIndex: 'birthday',
        key: 'birthday',
        align: 'center',
        width: 200,
      },
      {
        title: '现居住地',
        dataIndex: 'address',
        key: 'address',
        width: 300,
      },
      // 额外宽列，便于横向滚动时观察序号列是否固定
      {
        title: '备注1',
        dataIndex: 'remark1',
        key: 'remark1',
        width: 220,
        render: () => '横向滚动观察序号列固定',
      },
      {
        title: '备注2',
        dataIndex: 'remark2',
        key: 'remark2',
        width: 220,
        render: () => '有数据时序号列固定左侧',
      },
      {
        title: '备注3',
        dataIndex: 'remark3',
        key: 'remark3',
        width: 220,
        render: () => '无数据时序号列不固定',
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
})(NumberColumnFixedTableImpl);

export default () => {
  return <Wrap FieldGeneratorToDict={FieldGeneratorToDict} />;
};
