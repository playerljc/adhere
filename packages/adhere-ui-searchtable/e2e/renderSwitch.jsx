import React from 'react';

import DelConfirm from '@baifendian/adhere-ui-confirm-delconfirm';
import DateDisplay from '@baifendian/adhere-ui-datedisplay';
import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import SearchTable from '../src/index';
import { names } from './config/dict/dict/dict.test.config';
import './serviceRegister';

const { ProSearchStateTable, OptionsWrap, SearchTableStateImplementFactory } = SearchTable;
const { ComponentNames, genDictComponentName } = FieldGeneratorToDict;
const serviceName = 'user';

/**
 * ProSearchStateTableImpl
 * @class ProSearchStateTableImpl
 * @classdesc ProSearchStateTableImpl
 */
class ProSearchStateTableImpl extends ProSearchStateTable {
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
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: {},
        align: 'left',
        $search: {
          visible: true,
          showColumnHeader: true,
        },
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        $tip: '性别',
        width: 400,
        render: (v, record) =>
          this.renderSwitch({
            record,
            dataIndex: 'sex',
            switchProps: {},
            onChange: () => {
              return Promise.reject();
            },
          }),
        $search: {
          type: 'dict',
          visible: true,
          showColumnHeader: true,
          dictName: `${genDictComponentName(names.SystemTestSex, ComponentNames.Select.Standard)}`,
          isHideInvalidValue: false,
          props: {
            getPopupContainer: () => {
              return document.body;
            },
          },
        },
      },
      {
        title: '出生年月',
        dataIndex: 'birthday',
        key: 'birthday',
        align: 'center',
        width: {},
        render: (val) => <DateDisplay.DateDisplay format="L" value={val} />,
        $search: {
          type: 'rangePicker',
          visible: true,
          startName: 'birthDayStart',
          endName: 'birthDayEnd',
          showColumnHeader: true,
          props: {
            getPopupContainer: () => {
              return document.body;
            },
          },
        },
      },
      {
        title: '身高',
        dataIndex: 'height',
        key: 'height',
        align: 'center',
        width: {},
        sorter: true,
        sortOrder: this.sortOrder('height'),
        $search: {
          type: 'inputNumberDecimal2',
          visible: true,
          showColumnHeader: true,
        },
      },
      {
        title: '体重',
        dataIndex: 'width',
        key: 'width',
        align: 'center',
        width: {},
        sorter: true,
        sortOrder: this.sortOrder('width'),
        $search: {
          type: 'inputNumberDecimal2',
          visible: true,
          showColumnHeader: true,
        },
      },
      {
        title: '籍贯',
        dataIndex: 'homeTown',
        key: 'homeTown',
        ellipsis: true,
        width: {},
        $search: {
          type: 'input',
          visible: true,
          showColumnHeader: true,
        },
      },
      {
        title: '现居住地',
        dataIndex: 'address',
        key: 'address',
        width: {},
        $search: {
          type: 'input',
          visible: true,
          showColumnHeader: true,

          // valueAttrs: {
          //   colSpan: 5,
          // },
        },
      },
      {
        title: '操作',
        dataIndex: this.getOptionsColumnDataIndex(),
        key: this.getOptionsColumnDataIndex(),
        width: {},
        render: (v, record) => (
          <OptionsWrap style={{ justifyContent: 'center' }}>
            {this.renderOptionColumn(
              [
                {
                  key: 'view',
                  value: <a>查看</a>,
                },
                {
                  key: 'delete',
                  value: (
                    <DelConfirm
                      success={() =>
                        Promise.resolve().then(() => {
                          this.fetchData();
                        })
                      }
                    >
                      <a>删除</a>
                    </DelConfirm>
                  ),
                },
              ],
              { value: v, record },
            )}
          </OptionsWrap>
        ),
      },
    ]);
  }

  /**
   * getGridSearchFormColgroup
   * @description 获取搜索表单的列分组配置
   * @returns {{columnCount: number, colgroup: Array}}
   */
  getGridSearchFormColgroup() {
    return {
      // columnCount: 3,
      // colgroup: [130, 'auto', 130, 'auto', 130, 'auto'],
      columnCount: 3,
      colgroup: ['auto', 'auto', 'auto'],
    };
  }

  getGridSearchFormGroupParams() {
    const tableGridLayoutProps = {
      layout: 'prefix',
    };

    return [
      [
        {
          name: 'g1',
          ...this.getGridSearchFormColgroup(),
          data: this.getGridSearchFormGroupDataByColumnConfig(tableGridLayoutProps),
        },
      ],
      tableGridLayoutProps,
      {
        rowCount: Number.MAX_VALUE,
      },
    ];
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
})(ProSearchStateTableImpl);

export default () => {
  return (
    <Wrap
      FieldGeneratorToDict={FieldGeneratorToDict}
      antdTableProps={{
        getPopupContainer: () => document.body,
      }}
    />
  );
};
