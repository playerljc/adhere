// import React from 'react';
//
// import { DateDisplay, Resource } from '@baifendian/adhere';
//
// import SearchTable from '../src/index';
// import './serviceRegister';
//
// const {
//   ProSearchEditableTableRowDragSortStateTable,
//   ProEditableSearchStateTable,
//   EditableTableControl,
//   SearchTableStateImplementFactory,
// } = SearchTable;
//
// const serviceName = 'user';
//
// /**
//  * RowDragSort
//  * @class RowDragSort
//  * @classdesc RowDragSort
//  */
// class RowDragSort extends ProSearchEditableTableRowDragSortStateTable {
//   getComponentId() {
//     return 'RowDragSort';
//   }
//
//   getServiceName() {
//     return serviceName;
//   }
//
//   getFetchListPropName() {
//     return 'fetchList';
//   }
//
//   getOrderFieldValue() {
//     return 'height';
//   }
//
//   /**
//    * getDataKey
//    * @description - 获取数据的key
//    * @protected
//    */
//   getDataKey() {
//     return 'list';
//   }
//
//   /**
//    * getTotalKey
//    * @description - 获取total的key
//    * @protected
//    */
//   getTotalKey() {
//     return 'totalCount';
//   }
//
//   /**
//    * Table的列
//    * @override
//    * @return {*[]}
//    */
//   getColumns() {
//     return super.getColumns([
//       {
//         title: '姓名',
//         dataIndex: 'name',
//         key: 'name',
//         width: 150,
//         render: (val) => <div style={{ color: 'red' }}>{val}</div>,
//         $search: {
//           type: 'input',
//           visible: true,
//         },
//         $editable: {
//           editable: true,
//           type: 'input',
//           rules: [
//             {
//               required: true,
//               message: '请输入姓名',
//             },
//           ],
//           onSave: ({ value, record, dataIndex }) =>
//             new Promise((resolve) => {
//               this.updateEditorCellDate({
//                 record,
//                 dataIndex,
//                 value,
//               }).then(() => resolve());
//             }),
//         },
//         $resizable: true,
//       },
//       {
//         title: '性别',
//         dataIndex: 'sex',
//         key: 'sex',
//         align: 'center',
//         width: 150,
//         render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
//         $search: {
//           type: 'select',
//           visible: true,
//           dictName: 'SystemTestSexSelect',
//         },
//         $editable: {
//           editable: true,
//           type: 'select',
//           dictName: 'SystemTestSexSelect',
//           rules: [
//             {
//               required: true,
//               message: '请选择',
//             },
//           ],
//           onSave: ({ record, dataIndex, value }) =>
//             new Promise((resolve) => {
//               this.updateEditorCellDate({
//                 record,
//                 dataIndex,
//                 value,
//               }).then(() => resolve());
//             }),
//         },
//       },
//       {
//         title: '出生年月',
//         dataIndex: 'birthday',
//         key: 'birthday',
//         align: 'center',
//         width: 200,
//         sorter: true,
//         sortOrder: this.sortOrder('birthday'),
//         render: (val) => <DateDisplay.DateDisplay10 value={val} />,
//         $search: {
//           type: 'rangePicker',
//           visible: true,
//           startName: 'birthDayStart',
//           endName: 'birthDayEnd',
//         },
//         $editable: {
//           editable: true,
//           type: 'datePicker',
//           rules: [
//             {
//               required: true,
//               message: '请选择',
//             },
//           ],
//           onSave: ({ record, dataIndex, value }) =>
//             new Promise((resolve) => {
//               this.updateEditorCellDateData({
//                 record,
//                 dataIndex,
//                 value,
//               }).then(() => resolve());
//             }),
//         },
//       },
//       {
//         title: '身高',
//         dataIndex: 'height',
//         key: 'height',
//         align: 'center',
//         width: 150,
//         sorter: true,
//         sortOrder: this.sortOrder('height'),
//         $search: {
//           type: 'inputNumberDecimal2',
//           visible: true,
//         },
//         $editable: {
//           editable: true,
//           type: 'inputNumberDecimal2',
//           rules: [
//             {
//               required: true,
//               message: '请选择',
//             },
//           ],
//           onSave: ({ record, dataIndex, value }) =>
//             new Promise((resolve) => {
//               this.updateEditorCellDate({
//                 record,
//                 dataIndex,
//                 value,
//               }).then(() => resolve());
//             }),
//         },
//       },
//       {
//         title: '体重',
//         dataIndex: 'width',
//         key: 'width',
//         align: 'center',
//         width: 150,
//         sorter: true,
//         sortOrder: this.sortOrder('width'),
//         $search: {
//           type: 'inputNumberDecimal2',
//           visible: true,
//         },
//         $editable: {
//           editable: true,
//           type: 'inputNumberDecimal2',
//           rules: [
//             {
//               required: true,
//               message: '请选择',
//             },
//           ],
//           onSave: ({ record, dataIndex, value }) =>
//             new Promise((resolve) => {
//               this.updateEditorCellDate({
//                 record,
//                 dataIndex,
//                 value,
//               }).then(() => resolve());
//             }),
//         },
//       },
//       {
//         title: '籍贯',
//         dataIndex: 'homeTown',
//         key: 'homeTown',
//         ellipsis: true,
//         width: 200,
//         $search: {
//           type: 'input',
//           visible: true,
//         },
//         $editable: {
//           editable: true,
//           type: 'input',
//           rules: [
//             {
//               required: true,
//               message: '请选择',
//             },
//           ],
//           onSave: ({ record, dataIndex, value }) =>
//             new Promise((resolve) => {
//               this.updateEditorCellDate({
//                 record,
//                 dataIndex,
//                 value,
//               }).then(() => resolve());
//             }),
//         },
//       },
//       {
//         title: '现居住地',
//         dataIndex: 'address',
//         key: 'address',
//         width: 300,
//         $search: {
//           type: 'input',
//           visible: true,
//           valueAttrs: {
//             colSpan: 5,
//           },
//         },
//         $editable: {
//           editable: true,
//           type: 'input',
//           rules: [
//             {
//               required: true,
//               message: '请选择',
//             },
//           ],
//           onSave: ({ record, dataIndex, value }) =>
//             new Promise((resolve) => {
//               this.updateEditorCellDate({
//                 record,
//                 dataIndex,
//                 value,
//               }).then(() => resolve());
//             }),
//         },
//       },
//     ]);
//   }
//
//   /**
//    * renderSearchFooterItems
//    * 渲染表格的工具栏
//    * @override
//    */
//   renderSearchFooterItems(defaultItems) {
//     return super.renderSearchFooterItems([
//       {
//         key: 'editorTable',
//         value: <EditableTableControl />,
//       },
//       ...defaultItems,
//     ]);
//   }
// }
//
// RowDragSort.propTypes = {};
//
// const models = [];
// const requireComponent = require.context('./model', false, /.*\.(js)$/);
// requireComponent.keys().forEach((fileName) => {
//   const model = requireComponent(fileName);
//   models.push(model.default());
// });
//
// const Wrap = SearchTableStateImplementFactory({
//   serviceNames: [serviceName],
//   middleWares: [],
//   reducer: null,
//   models,
// })(RowDragSort);
//
// export default Wrap;
// ------------------------------------------------------------------
import React from 'react';

import { DateDisplay, Resource } from '@baifendian/adhere';

import SearchTable from '../src/index';

const {
  SearchTableImplementFactory,
  EditableTableControl,
  ProSearchEditableTableRowDragSortTable,
  ProEditableSearchTable,
  OptionsWrap,
  DisabledOption,
} = SearchTable;

const serviceName = 'user';

const List = SearchTableImplementFactory({
  serviceNames: [serviceName],
})(
  class extends ProSearchEditableTableRowDragSortTable {
    isShowNumber() {
      return false;
    }

    getComponentId() {
      return 'RowDragSort';
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

    getLimit() {
      return 70;
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
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 400,
          $tip: 'Name',
          $search: {
            visible: true,
          },
        },
        {
          title: 'Other',
          key: 'Other',
          children: [
            {
              title: 'Age',
              dataIndex: 'sex',
              key: 'sex',
            },
            {
              title: 'Address',
              key: 'Address',
              children: [
                {
                  title: 'Street',
                  dataIndex: 'address',
                  key: 'address',
                },
                {
                  title: 'Block',
                  key: 'Block',
                  children: [
                    {
                      title: 'Building',
                      dataIndex: 'birthday',
                      key: 'birthday',
                    },
                    {
                      title: 'Door No.',
                      dataIndex: 'deptName',
                      key: 'deptName',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'Company',
          key: 'Company',
          children: [
            {
              title: 'Company Address',
              dataIndex: 'height',
              key: 'height',
            },
            {
              title: 'Company Name',
              dataIndex: 'width',
              key: 'width',
            },
          ],
        },
        {
          title: 'Gender',
          dataIndex: 'id',
          key: 'id',
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
                    value: <DisabledOption>编辑</DisabledOption>,
                  },
                  {
                    key: 'view',
                    value: <a>查看</a>,
                  },
                  {
                    key: 'modalView',
                    value: <DisabledOption>弹窗查看</DisabledOption>,
                  },
                  {
                    key: 'modalEdit',
                    value: <a href="#">弹窗修改</a>,
                  },
                  {
                    key: 'modalList',
                    value: <a href="#">列表弹窗</a>,
                  },
                  {
                    key: 'delete',
                    value: <a href="#">删除</a>,
                  },
                ],
                { value: v, record },
              )}
            </OptionsWrap>
          ),
        },
        // Table.EXPAND_COLUMN,
        // {},
        // {
        //   title: '姓名',
        //   dataIndex: 'name',
        //   key: 'name',
        //   width: 256,
        //   headerCellAlign: 'center',
        //   align: 'left',
        //   fixed: 'left',
        //   render: (val) => <div style={{ color: 'red' }}>{val}</div>,
        //   $search: {
        //     type: 'input',
        //     visible: true,
        //   },
        //   $editable: {
        //     editable: true,
        //     type: 'input',
        //     rules: [
        //       {
        //         required: true,
        //         message: '请输入姓名',
        //       },
        //     ],
        //     onSave: ({ value, record, dataIndex }) =>
        //       new Promise((resolve) => {
        //         this.updateEditorCellDate({
        //           record,
        //           dataIndex,
        //           value,
        //         }).then(() => resolve());
        //       }),
        //   },
        //   $resizable: true,
        // },
        // {
        //   title: '性别',
        //   dataIndex: 'sex',
        //   key: 'sex',
        //   align: 'left',
        //   headerCellAlign: 'center',
        //   width: 150,
        //   render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
        //   $search: {
        //     type: 'dict',
        //     visible: true,
        //     dictName: 'SystemTestSexSelect',
        //   },
        //   $editable: {
        //     editable: true,
        //     type: 'dict',
        //     dictName: 'SystemTestSexSelect',
        //     rules: [
        //       {
        //         required: true,
        //         message: '请选择',
        //       },
        //     ],
        //     onSave: ({ record, dataIndex, value }) =>
        //       new Promise((resolve) => {
        //         this.updateEditorCellDate({
        //           record,
        //           dataIndex,
        //           value,
        //         }).then(() => resolve());
        //       }),
        //   },
        // },
        // {
        //   title: '出生年月',
        //   dataIndex: 'birthday',
        //   key: 'birthday',
        //   headerCellAlign: 'center',
        //   align: 'left',
        //   width: 200,
        //   sorter: true,
        //   sortOrder: this.sortOrder('birthday'),
        //   render: (val) => <DateDisplay.DateDisplay10 value={val} />,
        //   $search: {
        //     type: 'rangePicker',
        //     visible: true,
        //     startName: 'birthDayStart',
        //     endName: 'birthDayEnd',
        //   },
        //   $editable: {
        //     editable: true,
        //     type: 'datePicker',
        //     rules: [
        //       {
        //         required: true,
        //         message: '请选择',
        //       },
        //     ],
        //     onSave: ({ record, dataIndex, value }) =>
        //       new Promise((resolve) => {
        //         this.updateEditorCellDateData({
        //           record,
        //           dataIndex,
        //           value,
        //         }).then(() => resolve());
        //       }),
        //   },
        // },
        // {
        //   title: '身高',
        //   dataIndex: 'height',
        //   key: 'height',
        //   align: 'center',
        //   width: 150,
        //   sorter: true,
        //   sortOrder: this.sortOrder('height'),
        //   $search: {
        //     type: 'inputNumberDecimal2',
        //     visible: true,
        //   },
        //   $editable: {
        //     editable: true,
        //     type: 'inputNumberDecimal2',
        //     rules: [
        //       {
        //         required: true,
        //         message: '请选择',
        //       },
        //     ],
        //     onSave: ({ record, dataIndex, value }) =>
        //       new Promise((resolve) => {
        //         this.updateEditorCellDate({
        //           record,
        //           dataIndex,
        //           value,
        //         }).then(() => resolve());
        //       }),
        //   },
        // },
        // {
        //   title: '体重',
        //   dataIndex: 'width',
        //   key: 'width',
        //   align: 'center',
        //   width: 150,
        //   sorter: true,
        //   sortOrder: this.sortOrder('width'),
        //   $search: {
        //     type: 'inputNumberDecimal2',
        //     visible: true,
        //   },
        //   $editable: {
        //     editable: true,
        //     type: 'inputNumberDecimal2',
        //     rules: [
        //       {
        //         required: true,
        //         message: '请选择',
        //       },
        //     ],
        //     onSave: ({ record, dataIndex, value }) =>
        //       new Promise((resolve) => {
        //         this.updateEditorCellDate({
        //           record,
        //           dataIndex,
        //           value,
        //         }).then(() => resolve());
        //       }),
        //   },
        // },
        // {
        //   title: '籍贯',
        //   dataIndex: 'homeTown',
        //   key: 'homeTown',
        //   ellipsis: true,
        //   width: 200,
        //   $search: {
        //     type: 'input',
        //     visible: true,
        //   },
        //   $editable: {
        //     editable: true,
        //     type: 'input',
        //     rules: [
        //       {
        //         required: true,
        //         message: '请选择',
        //       },
        //     ],
        //     onSave: ({ record, dataIndex, value }) =>
        //       new Promise((resolve) => {
        //         this.updateEditorCellDate({
        //           record,
        //           dataIndex,
        //           value,
        //         }).then(() => resolve());
        //       }),
        //   },
        // },
        // {
        //   title: '现居住地',
        //   dataIndex: 'address',
        //   key: 'address',
        //   width: 300,
        //   headerCellAlign: 'center',
        //   align: 'left',
        //   $hide: true,
        //   $search: {
        //     type: 'input',
        //     visible: true,
        //     valueAttrs: {
        //       colSpan: 5,
        //     },
        //   },
        //   $editable: {
        //     editable: true,
        //     type: 'input',
        //     rules: [
        //       {
        //         required: true,
        //         message: '请选择',
        //       },
        //     ],
        //     onSave: ({ record, dataIndex, value }) =>
        //       new Promise((resolve) => {
        //         this.updateEditorCellDate({
        //           record,
        //           dataIndex,
        //           value,
        //         }).then(() => resolve());
        //       }),
        //   },
        // },
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
          key: 'editorTable1',
          value: <EditableTableControl />,
        },
        {
          key: 'editorTable2',
          value: <EditableTableControl />,
        },
        {
          key: 'editorTable3',
          value: <EditableTableControl />,
        },
        {
          key: 'editorTable4',
          value: <EditableTableControl />,
        },
        {
          key: 'editorTable5',
          value: <EditableTableControl />,
        },
        {
          key: 'editorTable6',
          value: <EditableTableControl />,
        },
        {
          key: 'editorTable7',
          value: <EditableTableControl />,
        },
        {
          key: 'editorTable',
          value: <EditableTableControl />,
        },
        ...defaultItems,
      ]);
    }

    /**
     * onRowSelectionChange
     */
    onRowSelectionChange() {}

    /**
     * onRowSelectionSelect
     */
    onRowSelectionSelect() {}

    /**
     * onRowSelectionSelectAll
     */
    onRowSelectionSelectAll() {}
  },
);

export default (props) => (
  <List
    antdTableProps={{
      bordered: true,
    }}
    {...props}
  />
);
