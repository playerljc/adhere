import { Button } from 'antd';
import React from 'react';

import { DeleteOutlined, UserAddOutlined } from '@ant-design/icons';
import {
  ConditionalRender,
  DateDisplay,
  DelConfirm,
  FieldGeneratorToDict,
  Resource,
  SearchTable,
  WarnPrompt,
} from '@baifendian/adhere';

import './serviceRegister';

const { ProSearchStateTable, OptionsWrap, SearchTableStateImplementFactory, DisabledOption } =
  SearchTable;

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
   * hasAdvancedSearchPanel
   * @description 是否有高级搜索按钮
   * @returns {boolean}
   */
  hasAdvancedSearch() {
    return false;
  }

  /**
   * getGridSearchFormGroupParams
   * @description 获取GridSearchFormGroup的参数
   * @return {Array}
   */
  getGridSearchFormGroupParams() {
    return [
      [
        {
          name: 'g1',
          // 一行显示的列数
          columnCount: 3,
          // 各个列的宽度
          colgroup: [, 'auto', , 'auto', , 'auto'],
          data: this.getGridSearchFormGroupDataByColumnConfig(),
        },
      ],
      {},
      {
        // 一共多少行
        rowCount: Number.MAX_VALUE,
        // renderTitleLabel: () => <div>搜索</div>,
        // // 渲染高级查询面板的Collapse
        // renderCollapse: (collapse) => <div>收起</div>,
        // // 渲染高级查询面板显示的按钮
        // renderSearchButton: (callback) => <div onClick={() => callback()}>高级搜索</div>,
        // // 高级查询面板查询按钮的插入位置 (defaultItems) => {}
        // insertSearchButton: null,
      },
    ];
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
        width: 150,
        $search: {
          type: 'input',
          visible: true,
        },
      },
      {
        title: '省',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        width: 150,
        $hide: true,
        $search: {
          type: 'dict',
          visible: true,
          dictName: `SystemProvince${FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard}`,
        },
      },
      {
        title: '市',
        dataIndex: 'height',
        key: 'height',
        align: 'center',
        width: 150,
        sorter: true,
        sortOrder: this.sortOrder('height'),
        $hide: true,
        $search: {
          type: 'dict',
          visible: true,
          dictName: `SystemCity${FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard}`,
          props: {
            cascadeParams: this.state.sex,
          },
        },
      },
      {
        title: '区',
        dataIndex: 'width',
        key: 'width',
        align: 'center',
        width: 150,
        sorter: true,
        $hide: true,
        sortOrder: this.sortOrder('width'),
        $search: {
          type: 'dict',
          visible: true,
          dictName: `SystemCounty${FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard}`,
          props: {
            cascadeParams: this.state.height,
          },
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
        title: '籍贯',
        dataIndex: 'homeTown',
        key: 'homeTown',
        width: 200,
        $search: {
          type: 'dict',
          visible: true,
          dictName: `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.SelectDynamic.Multi}`,
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
      {
        title: '操作',
        dataIndex: this.getOptionsColumnDataIndex(),
        key: this.getOptionsColumnDataIndex(),
        width: 200,
        render: (v, record) => (
          <OptionsWrap style={{ justifyContent: 'center' }}>
            {this.renderOptionColumn(
              [
                {
                  key: 'edit',
                  value: (
                    <ConditionalRender
                      conditional={false}
                      noMatch={() => <DisabledOption>编辑</DisabledOption>}
                    >
                      {() => <a>编辑</a>}
                    </ConditionalRender>
                  ),
                },
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
   * renderSearchFooterItems
   * 渲染表格的工具栏
   * @override
   */
  renderSearchFooterItems(defaultItems) {
    return super.renderSearchFooterItems([
      {
        key: 'add',
        value: (
          <Button key="add" icon={<UserAddOutlined />} type="primary" onClick={() => {}}>
            新增
          </Button>
        ),
      },
      {
        key: 'delete',
        value: (
          <Button
            key="delete"
            icon={<DeleteOutlined />}
            type="primary"
            onClick={() => {
              const { selectedRowKeys } = this.state;

              if (!selectedRowKeys.length) {
                WarnPrompt('请选择要删除的数据');
                return;
              }

              DelConfirm.open(() => {
                return Promise.resolve().then(() => {
                  this.setState({
                    selectedRowKeys: [],
                  });

                  this.fetchData();
                });
              });
            }}
          >
            删除
          </Button>
        ),
      },
      ...defaultItems,
    ]);
  }
}

ProSearchStateTableImpl.propTypes = {};

function getModels() {
  const models = [];

  const requireComponent = require.context('./model', false, /.*\.(js)$/);

  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    models.push(model.default());
  });

  return models;
}

const Wrap = SearchTableStateImplementFactory({
  serviceNames: [serviceName],
  middleWares: [],
  reducer: null,
  models: getModels(),
})(ProSearchStateTableImpl);

export default Wrap;
