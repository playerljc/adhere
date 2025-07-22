import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';
import sage from '../saga';

// const DictComponentName = `SystemTable${FieldGeneratorToDict.ComponentNames.SearchTable.EditorCell}`;
const DictComponent = FieldGeneratorToDict.Components[
  FieldGeneratorToDict.genDictComponentName(
    // @ts-ignore
    names.SystemTable,
    FieldGeneratorToDict.ComponentNames.SearchTable.EditorCell,
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
              onSave: function ({ value, record, dataIndex }) {
                return new Promise((resolve) => {
                  // 在此处可以调用接口来更新单元格的值
                  self
                    .updateEditorCellDate({
                      record,
                      dataIndex,
                      value,
                    })
                    .then(() => resolve());
                });
              },
            },
          },
          {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            $tip: '性别',
            width: 150,
            render: (val) => {
              return val == 0 ? '女' : '男';
            },
            $search: {
              type: 'dict',
              visible: true,
              dictName: FieldGeneratorToDict.genDictComponentName(
                // @ts-ignore
                names.SystemTestSex,
                FieldGeneratorToDict.ComponentNames.Select.Standard,
              ),
            },
            $editable: {
              editable: true,
              type: 'dict',
              dictName: FieldGeneratorToDict.genDictComponentName(
                // @ts-ignore
                names.SystemTestSex,
                FieldGeneratorToDict.ComponentNames.Select.Standard,
              ),
              rules: [
                {
                  required: true,
                  message: '请选择性别',
                },
              ],
              onSave: function ({ value, record, dataIndex }) {
                return new Promise((resolve) => {
                  debugger;
                  // 在此处可以调用接口来更新单元格的值
                  self
                    .updateEditorCellDate({
                      record,
                      dataIndex,
                      value,
                    })
                    .then(() => resolve());
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
            $editable: {
              editable: true,
              type: 'inputNumberDecimal2',
              rules: [
                {
                  required: true,
                  message: '请输入身高',
                },
              ],
              onSave: ({ record, dataIndex, value }) => {
                return new Promise((resolve) => {
                  self
                    .updateEditorCellDate({
                      record,
                      dataIndex,
                      value,
                    })
                    .then(() => resolve());
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
            $editable: {
              editable: true,
              type: 'inputNumberDecimal2',
              rules: [
                {
                  required: true,
                  message: '请输入身高',
                },
              ],
              onSave: ({ record, dataIndex, value }) => {
                return new Promise((resolve) => {
                  self
                    .updateEditorCellDate({
                      record,
                      dataIndex,
                      value,
                    })
                    .then(() => resolve());
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
            $editable: {
              editable: true,
              type: 'input',
              rules: [
                {
                  required: true,
                  message: '请输入姓名',
                },
              ],
              onSave: ({ value, record, dataIndex }) => {
                return new Promise((resolve) => {
                  // 在此处可以调用接口来更新单元格的值
                  self
                    .updateEditorCellDate({
                      record,
                      dataIndex,
                      value,
                    })
                    .then(() => resolve());
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
              onSave: ({ record, dataIndex, value }) => {
                return new Promise((resolve) => {
                  self
                    .updateEditorCellDateData({
                      record,
                      dataIndex,
                      value,
                    })
                    .then(() => resolve());
                });
              },
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
              onSave: ({ record, dataIndex, value }) => {
                return new Promise((resolve) => {
                  self
                    .updateEditorCellDate({
                      record,
                      dataIndex,
                      value,
                    })
                    .then(() => resolve());
                });
              },
            },
          },
        ],
      ]);
    },
  },
  SearchClass: SearchTable,
  sage,
});

export default () => {
  return <DictComponent FieldGeneratorToDict={FieldGeneratorToDict} />;
};
