import { Button } from 'antd';
import React, { useContext } from 'react';

import { DeleteOutlined, UserAddOutlined } from '@ant-design/icons';
import {
  ConditionalRender,
  DateDisplay,
  DelConfirm,
  Resource,
  WarnPrompt,
} from '@baifendian/adhere';

import SearchTable from '../index';
import './serviceRegister';

const { ProSearchStateTable, EditableContext, SearchTableStateImplementFactory } = SearchTable;

const serviceName = 'user';

function RowEditorCell({ record, onEditor, onSave, editorRowId }) {
  const form = useContext(EditableContext);

  return (
    <div>
      <ConditionalRender
        conditional={editorRowId !== record.id}
        noMatch={() => (
          <a
            onClick={() => {
              form.validateFields().then((values) => {
                onSave(values);
              });
            }}
          >
            保存
          </a>
        )}
      >
        {() => <a onClick={() => onEditor(record.id)}>编辑行</a>}
      </ConditionalRender>
    </div>
  );
}

/**
 * ProSearchStateTableImpl
 * @class ProSearchStateTableImpl
 * @classdesc ProSearchStateTableImpl
 */
class ProSearchStateTableImpl extends ProSearchStateTable {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      editorRowId: '',
    };
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
          type: 'input',
          rules: [
            {
              required: true,
              message: '请选择',
            },
          ],
          useKeepEdit: true,
          props: {
            onBlur: (e, { form, rowIndex, dataIndex }) => {
              form.validateFields().then((values) => {
                // 调用修改接口
                // 修改当前数据
              });
            },
          },
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
        $editable: {
          editable: true,
          type: 'select',
          dictName: 'SystemTestSexSelect',
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
        $editable: {
          editable: true,
          type: 'datePicker',
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
        $editable: {
          editable: true,
          type: 'inputNumberDecimal2',
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
        $editable: {
          editable: true,
          type: 'inputNumberDecimal2',
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
        title: '籍贯',
        dataIndex: 'homeTown',
        key: 'homeTown',
        ellipsis: true,
        width: 200,
        $search: {
          type: 'input',
          visible: true,
        },
        $editable: {
          editable: true,
          type: 'input',
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
        $editable: {
          editable: true,
          type: 'input',
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
        title: '操作',
        dataIndex: this.getOptionsColumnDataIndex(),
        key: this.getOptionsColumnDataIndex(),
        width: 200,
        render: (v, record, rowIndex) => (
          <RowEditorCell
            value={v}
            record={record}
            rowIndex={rowIndex}
            editorRowId={this.state.editorRowId}
            onEditor={(id) => {
              this.setState({
                editorRowId: id,
              });
            }}
            onSave={(values) => {
              this.fetchData().then(() =>
                this.setState({
                  editorRowId: '',
                }),
              );
            }}
          />
        ),
        /*(
          <OptionsWrap style={{ justifyContent: 'center' }}>
            {this.renderOptionColumn(
              [
                {
                  key: 'edit',
                  value: (
                    <ConditionalRender
                      conditional={true}
                      noMatch={() => <DisabledOption>编辑</DisabledOption>}
                    >
                      {() => (
                        <a
                          onClick={() => {
                            this.setState({
                              editorRowId: rowIndex,
                            });
                          }}
                        >
                          编辑行
                        </a>
                      )}
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
        )*/
      },
    ]);
  }

  onEditorCell({ rowIndex, record, editorConfig }) {
    if (record.id === this.state.editorRowId) {
      if (editorConfig) {
        editorConfig.defaultStatus = 'edit';
      }
    }
  }

  fetchData(...params) {
    return super.fetchData(...params).then((res) => {
      this.setState({
        editorRowId: '',
      });
      return res;
    });
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
