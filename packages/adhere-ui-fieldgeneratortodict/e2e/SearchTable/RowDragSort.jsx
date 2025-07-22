import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';
import sage from '../saga';

const { DragSortColumn } = SearchTable;

// const DictComponentName = `SystemTable${FieldGeneratorToDict.ComponentNames.SearchTable.RowDragSort}`;
const DictComponent = FieldGeneratorToDict.Components[
  FieldGeneratorToDict.genDictComponentName(
    // @ts-ignore
    names.SystemTable,
    FieldGeneratorToDict.ComponentNames.SearchTable.RowDragSort,
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
            title: '籍贯',
            dataIndex: 'homeTown',
            key: 'homeTown',
            ellipsis: true,
            width: 200,
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
          },
          {
            title: '现居住地',
            dataIndex: 'address',
            key: 'address',
            width: 300,
          },
        ],
      ]);
    },
    /**
     * getTableColumnsAll
     * @description 自第一列上加入拖拽句柄
     * @return {any[]}
     */
    getTableColumnsAll() {
      return [DragSortColumn(), ...this.applySuper('getTableColumnsAll')];
    },
    /**
     * onDragSortRow
     * @description 行拖动的控制
     * @param {number} rowIndex targetRecordIndex
     * @param {object} record targetRecord
     * @param {object[]} columns
     * @return {{dropHooks: {drop: (function({sourceRecord: *, targetRecord: *, item: *}): Promise<unknown>)}}}
     */
    onDragSortRow({ rowIndex, record, columns }) {
      return {
        dropHooks: {
          /**
           * drop
           * @description 拖动结束
           * @param {object} sourceRecord 开始
           * @param {object} targetRecord 结束
           * @param {object} item 开始
           * @return {Promise<unknown>}
           */
          drop: ({ sourceRecord, targetRecord, item }) => {
            return new Promise((resolve) => {
              console.log('onDragSortRow-dropHooks-drop-rowIndex', rowIndex);
              console.log('onDragSortRow-dropHooks-drop-record', record);
              console.log('onDragSortRow-dropHooks-drop-columns', columns);
              console.log('onDragSortRow-dropHooks-drop-sourceRecord', sourceRecord);
              console.log('onDragSortRow-dropHooks-drop-targetRecord', targetRecord);
              console.log('onDragSortRow-dropHooks-drop-item', item);
              // 可以调用接口进行保存，然后resolve进行交换
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
