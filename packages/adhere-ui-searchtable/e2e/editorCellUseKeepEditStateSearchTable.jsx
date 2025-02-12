import { Button, Table } from 'antd';
import faker from 'faker';
import React from 'react';

import { DateDisplay, FieldGeneratorToDict, Resource } from '@baifendian/adhere';
import Intl from '@baifendian/adhere-util-intl';

import SearchTable from '../src';
import './serviceRegister';

const { SearchTableStateImplementFactory, ProEditableCellSearchStateTable } = SearchTable;

const serviceName = 'user';

function getModels() {
  const models = [];
  const requireComponent = require.context('./model', false, /.*\.(js)$/);
  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    models.push(model.default());
  });

  return models;
}

/**
 * EditableCellUseKeepEditStateSearchTable
 * @class EditableCellUseKeepEditStateSearchTable
 * @classdesc EditableCellUseKeepEditStateSearchTable
 */
class EditableCellUseKeepEditStateSearchTable extends ProEditableCellSearchStateTable {
  constructor(props) {
    super(props);

    /**
     *
     * @type {*[]}
     * {
     *   id: '行的id‘
     *   dataIndex: 列的属性
     *   value: 更新的值
     * }
     */
    this.localModifyData = [];

    /**
     * 存储新增的一行行数据
     * @type {*[]}
     */
    this.localAddDataMap = new Map();
  }

  getComponentId() {
    return 'EditableCellUseKeepEditStateSearchTable';
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

  changeLocalModifyData({ rowIndex, dataIndex, form }) {
    const originRecord = this.getData()[rowIndex];

    const id = originRecord.id;

    const record = form.getFieldsValue();

    const modifyDataItem = this.localModifyData.find(
      (t) => t.id === id && t.dataIndex === dataIndex,
    );

    if (modifyDataItem) {
      modifyDataItem.value = record[dataIndex];
    } else {
      const addItem = {
        id,
        dataIndex,
        value: record[dataIndex],
        _add: originRecord._add,
      };

      this.localModifyData.push(addItem);
    }
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
              message: '请输入姓名',
            },
          ],
          useKeepEdit: true,
          props: {
            onBlur: (e, { updateEditorCellData, form, dataIndex, rowIndex }) => {
              this.changeLocalModifyData({ rowIndex, dataIndex, form });

              setTimeout(() => {
                updateEditorCellData();
              }, 30);
            },
          },
        },
        $resizable: true,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        width: 150,
        render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v)?.label,
        $search: {
          type: 'dict',
          visible: true,
          dictName: `SystemTestSex${FieldGeneratorToDict.ComponentNames.Select.Standard}`,
        },
        $editable: {
          editable: true,
          type: 'dict',
          dictName: `SystemTestSex${FieldGeneratorToDict.ComponentNames.Select.Standard}`,
          rules: [
            {
              required: true,
              message: '请选择',
            },
          ],
          useKeepEdit: true,
          props: {
            onChange: (e, { updateEditorCellData, form, dataIndex, rowIndex }) => {
              this.changeLocalModifyData({ rowIndex, dataIndex, form });

              setTimeout(() => {
                updateEditorCellData();
              }, 30);
            },
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
          useKeepEdit: true,
          props: {
            onChange: (e, { updateEditorCellData, form, dataIndex, rowIndex }) => {
              this.changeLocalModifyData({ rowIndex, dataIndex, form });

              setTimeout(() => {
                updateEditorCellData();
              }, 30);
            },
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
              message: '请输入身高',
            },
          ],
          useKeepEdit: true,
          props: {
            onBlur: (e, { updateEditorCellData, form, dataIndex, rowIndex }) => {
              this.changeLocalModifyData({ rowIndex, dataIndex, form });

              setTimeout(() => {
                updateEditorCellData();
              }, 30);
            },
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
              message: '请输入体重',
            },
          ],
          useKeepEdit: true,
          props: {
            onBlur: (e, { updateEditorCellData, form, dataIndex, rowIndex }) => {
              this.changeLocalModifyData({ rowIndex, dataIndex, form });

              setTimeout(() => {
                updateEditorCellData();
              }, 30);
            },
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
              message: '请输入籍贯',
            },
          ],
          useKeepEdit: true,
          props: {
            onBlur: (e, { updateEditorCellData, form, dataIndex, rowIndex }) => {
              this.changeLocalModifyData({ rowIndex, dataIndex, form });

              setTimeout(() => {
                updateEditorCellData();
              }, 30);
            },
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
              message: '请输入居住地',
            },
          ],
          useKeepEdit: true,
          props: {
            onBlur: (e, { updateEditorCellData, form, dataIndex, rowIndex }) => {
              this.changeLocalModifyData({ rowIndex, dataIndex, form });

              setTimeout(() => {
                updateEditorCellData();
              }, 30);
            },
          },
        },
      },
      // {
      //   title: '操作',
      //   dataIndex: this.getOptionsColumnDataIndex(),
      //   key: this.getOptionsColumnDataIndex(),
      //   width: 260,
      //   render: (v, record) => (
      //     <OptionsWrap style={{ justifyContent: 'center' }}>
      //       {this.renderOptionColumn(
      //         [
      //           {
      //             key: 'view',
      //             value: <a>查看</a>,
      //           },
      //           {
      //             key: 'delete',
      //             value: (
      //               <DelConfirm
      //                 success={() =>
      //                   Promise.resolve().then(() => {
      //                     this.fetchData();
      //                   })
      //                 }
      //               >
      //                 <a>删除</a>
      //               </DelConfirm>
      //             ),
      //           },
      //         ],
      //         { value: v, record },
      //       )}
      //     </OptionsWrap>
      //   ),
      // },
    ]);
  }

  renderSearchFooterItems(defaultItems) {
    return super.renderSearchFooterItems([
      {
        key: 'add',
        value: (
          <Button
            key="add"
            type="primary"
            onClick={() => {
              const id = faker.random.uuid();

              const page = this.state.page;

              const item = this.localAddDataMap.get(page);

              if (item) {
                item.unshift({
                  id,
                  name: '',
                  sex: '1',
                  birthday: undefined,
                  height: 0,
                  width: 0,
                  homeTown: '',
                  address: '',
                  _add: true,
                });
              } else {
                this.localAddDataMap.set(this.state.page, [
                  {
                    id,
                    name: '',
                    sex: '1',
                    birthday: undefined,
                    height: 0,
                    width: 0,
                    homeTown: '',
                    address: '',
                    _add: true,
                  },
                ]);
              }

              this.fetchData();

              // this.setState({
              //   // limit: this.state.limit + 1,
              //   [this.getServiceName()]: {
              //     [this.getFetchListPropName()]: {
              //       [this.getTotalKey()]: this.getTotal() + 1,
              //       [this.getDataKey()]: [
              //         {
              //           id,
              //           _add: true,
              //           _page: this.state.page,
              //         },
              //         ...this.getData(),
              //       ],
              //     },
              //   },
              // });
            }}
          >
            {Intl.v('新增')}
          </Button>
        ),
      },

      ...defaultItems,
    ]);
  }

  fetchDataExecute(searchParams) {
    searchParams._localAddDataMap = this.localAddDataMap;

    return this.state?.[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`](
      searchParams,
    );
  }

  getDataSource() {
    return this.getData().map((_record) => {
      return Object.keys(_record).reduce((res, dataIndex) => {
        const localModifyCell = this.localModifyData.find(
          (t) => t.id === _record.id && t.dataIndex === dataIndex,
        );

        if (localModifyCell) {
          res[dataIndex] = localModifyCell.value;
        } else {
          res[dataIndex] = _record[dataIndex];
        }

        return res;
      }, {});
    });
  }

  /**
   * renderTable
   * @description - 认选表格体
   * @return {ReactElement}
   */
  renderBody() {
    const { antdTableProps, fixedHeaderAutoTable } = this.props;

    const { columnSetting = [], tableDensity } = this.state;

    const columns = this.getTableColumns()
      .map((column, index) => ({
        ...columnSetting[index],
        ...column,
      }))
      .filter((column) => column.display);

    columns.sort((c1, c2) => {
      if (c1.sort > c2.sort) return 1;
      if (c1.sort < c2.sort) return -1;
      return 0;
    });

    let dataSource = this.getDataSource();

    console.log('111', this.localModifyData, dataSource);

    // Table的antdProps配置
    const tableProps = {
      rowKey: this.getRowKey(),
      dataSource,
      columns,
      onChange: this.onTableChange,
      pagination: this.getPagination(),
      rowSelection: this.getRowSelection(),
      size: tableDensity,
      // 组件
      components: this.components,
      // onRow
      // 给TableRow的props参数
      onRow: (...params) => this.onTableRow(columns, ...params),
      ...(antdTableProps ?? {}),
      expandable: {
        ...(antdTableProps ?? {}).expandable,
        expandedRowKeys: this.state.expandedRowKeys,
        onExpandedRowsChange: this.onExpandedRowsChange,
      },
    };

    // 是否支持锁定列头，表格体滚动
    if (fixedHeaderAutoTable) {
      const { scrollY } = this.state;

      if (antdTableProps) {
        if (antdTableProps.scroll) {
          tableProps.scroll.y = scrollY;
        } else {
          tableProps.scroll = { y: scrollY };
        }
      } else {
        tableProps.scroll = { y: scrollY };
      }
    }

    this.tableRowComponentReducers = this.onTableRowComponentReducers(columns);
    this.tableCellComponentReducers = this.onTableCellComponentReducers(columns);

    return <Table {...tableProps} />;
  }
}

EditableCellUseKeepEditStateSearchTable.propTypes = {};

const Wrap = SearchTableStateImplementFactory({
  serviceNames: [serviceName],
  middleWares: [],
  reducer: null,
  models: getModels(),
})(EditableCellUseKeepEditStateSearchTable);

export default Wrap;
