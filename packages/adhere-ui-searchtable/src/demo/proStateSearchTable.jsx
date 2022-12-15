import { Button } from 'antd';
import React from 'react';

import { DeleteOutlined, UserAddOutlined } from '@ant-design/icons';
import {
  ConditionalRender,
  DateDisplay,
  DelConfirm,
  Resource,
  WarnPrompt,
} from '@baifendian/adhere';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';
import { createState } from '@ctsj/state/lib/react';

import SearchTable from '../index';
import './serviceRegister';

const { ProSearchStateTable, OptionsWrap, DisabledOption } = SearchTable;

const serviceName = 'user';

console.log('组件1');
/**
 * ProSearchStateTableImpl
 * @class ProSearchStateTableImpl
 * @classdesc ProSearchStateTableImpl
 */
class ProSearchStateTableImpl extends ProSearchStateTable {
  constructor(props) {
    super(props);

    const models = [];

    const requireComponent = require.context('./model', false, /.*\.(js)$/);

    requireComponent.keys().forEach((fileName) => {
      const model = requireComponent(fileName);
      models.push(model.default());
    });

    this.unsubscribe = createState({
      initialState: { ...this.state },
      models,
      mapState: (state) =>
        Object.assign(
          ServiceRegister.mapStateToProps({
            namespaces: [serviceName],
            state,
          }),
          {
            loading: state.loading,
          },
        ),
      mapDispatch: (dispatch) =>
        ServiceRegister.mapDispatchToProps({
          namespaces: [serviceName],
          dispatch,
        }),
      ref: this,
      middleWares: [],
      reducer: null,
    });
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    this.unsubscribe();
  }

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
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        render: (val) => <div style={{ color: 'red' }}>{val}</div>,
        $search: {
          type: 'input',
          visible: true,
        },
        $editable: {
          editable: true,
          type: 'inputNumber',
          rules: [
            {
              required: true,
              message: '请选择',
            },
          ],
          onSave: (params) => {
            return new Promise((resolve) => {
              this.fetchData();
              resolve();
            });
          },
        },
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

export default ProSearchStateTableImpl;
