import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';
import sage from '../saga';

const { EditableRowControl, DragSortColumn } = SearchTable;

const DictComponent = FieldGeneratorToDict.Components[
  FieldGeneratorToDict.genDictComponentName(
    // @ts-ignore
    names.SystemTable,
    FieldGeneratorToDict.ComponentNames.SearchTable.EditorRowDragSort,
  )
]({
  override: {
    getColumns() {
      const self = this;

      return this.applySuper('getColumns', [
        [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: 150,
            align: 'left',
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
            },
          },
          {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            $tip: '性别',
            width: 150,
          },
          {
            title: '身高',
            dataIndex: 'height',
            key: 'height',
            align: 'center',
            width: 150,
            sorter: true,
            sortOrder: this.sortOrder('height'),
            $editable: {
              editable: true,
              type: 'inputNumberDecimal2',
              rules: [
                {
                  required: true,
                  message: '请输入身高',
                },
              ],
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
            $editable: {
              editable: true,
              type: 'inputNumberDecimal2',
              rules: [
                {
                  required: true,
                  message: '请输入身高',
                },
              ],
            },
          },
          {
            title: '籍贯',
            dataIndex: 'homeTown',
            key: 'homeTown',
            ellipsis: true,
            width: 200,
            $editable: {
              editable: true,
              type: 'input',
              rules: [
                {
                  required: true,
                  message: '请输入姓名',
                },
              ],
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
            },
          },
          {
            title: '现居住地',
            dataIndex: 'address',
            key: 'address',
            width: 300,
            $editable: {
              editable: true,
              type: 'input',
              rules: [
                {
                  required: true,
                  message: '请输入居住地',
                },
              ],
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
                rowKey={self.getRowKey()}
                editorRowIds={self.state.editorRowIds}
                onSave={(values) => {
                  return Promise.resolve();
                }}
              />
            ),
          },
        ],
      ]);
    },
    getTableColumnsAll() {
      return [DragSortColumn(), ...this.applySuper('getTableColumnsAll')];
    },
    onDragSortRow({ rowIndex, record, columns }) {
      return {
        dropHooks: {
          drop: ({ sourceRecord, targetRecord, item }) => {
            return new Promise((resolve) => {
              resolve();
            });
          },
        },
      };
    },
  },
  SearchClass: SearchTable,
  sage,
});

export default () => {
  return <DictComponent FieldGeneratorToDict={FieldGeneratorToDict} />;
};
