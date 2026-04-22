import { Button } from 'antd';
import React from 'react';

import { DateDisplay, FieldGeneratorToDict, Resource } from '@baifendian/adhere';

import SearchTable from '../src/index';
import { names } from './config/dict/dict/dict.test.config';
import './serviceRegister';

const { ComponentNames, genDictComponentName } = FieldGeneratorToDict;
const {
  ProSearchEditableRowDragSortStateTable,
  ProEditableRowSearchStateTable,
  EditableRowControl,
  SearchTableStateImplementFactory,
} = SearchTable;

const serviceName = 'user';

/**
 * RowDragSort
 * @class RowDragSort
 * @classdesc RowDragSort
 */
class RowDragSort extends ProSearchEditableRowDragSortStateTable {
  // getComponentId() {
  //   return 'RowDragSort';
  // }

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

  renderSearchFooterItems(defaultItems) {
    return super.renderSearchFooterItems([
      {
        key: 'add',
        value: (
          <Button
            key="add"
            type="primary"
            onClick={() => {
              const dataSource = this.getData();
              this.setActiveEditorRowIds(dataSource.map((t) => t.id));
            }}
          >
            激活指定行
          </Button>
        ),
      },
      {
        key: 'add1',
        value: (
          <Button
            key="add"
            type="primary"
            onClick={() => {
              this.setActiveEditorRowIds([]);
            }}
          >
            取消所有激活行
          </Button>
        ),
      },
      {
        key: 'add2',
        value: (
          <Button
            key="add"
            type="primary"
            onClick={() => {
              const dataSource = this.getData();
              const rowId = dataSource[0].id;

              this.setActiveEditorRowIds([rowId]).then(() => {
                this.validateActiveEditorRow(rowId)
                  .then((values) => {
                    debugger;
                  })
                  .catch((e) => {
                    debugger;
                  });
              });
            }}
          >
            校验指定行
          </Button>
        ),
      },
      ...defaultItems,
    ]);
  }

  isUseExclusiveEditorRow() {
    return true;
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
          onSave: ({ value, record, dataIndex }) =>
            new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
            }),
        },
        // $resizable: true,
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
          // dictName: 'SystemTestSexSelect',
          dictName: `${genDictComponentName(names.SystemTestSex, ComponentNames.Select.Standard)}`,
        },
        $editable: {
          editable: true,
          type: 'select',
          // dictName: 'SystemTestSexSelect',
          dictName: `${genDictComponentName(names.SystemTestSex, ComponentNames.Select.Standard)}`,
          rules: [
            {
              required: true,
              message: '请选择',
            },
          ],
          onSave: ({ record, dataIndex, value }) =>
            new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
            }),
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
          onSave: ({ record, dataIndex, value }) =>
            new Promise((resolve) => {
              this.updateEditorCellDateData({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
            }),
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
          onSave: ({ record, dataIndex, value }) =>
            new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
            }),
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
          onSave: ({ record, dataIndex, value }) =>
            new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
            }),
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
          onSave: ({ record, dataIndex, value }) =>
            new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
            }),
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
            // colSpan: 5,
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
          onSave: ({ record, dataIndex, value }) =>
            new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
            }),
        },
      },
      {
        title: '操作',
        dataIndex: this.getOptionsColumnDataIndex(),
        key: this.getOptionsColumnDataIndex(),
        width: 100,
        render: (v, record) => (
          <EditableRowControl
            record={record}
            rowKey={this.getRowKey()}
            editorRowIds={this.state.editorRowIds}
          />
        ),
      },
    ]);
  }
}

RowDragSort.propTypes = {};

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
})(RowDragSort);

export default () => {
  return <Wrap FieldGeneratorToDict={FieldGeneratorToDict} />;
};
