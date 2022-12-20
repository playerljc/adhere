import React from 'react';

import { DateDisplay, Resource, SearchTable } from '@baifendian/adhere';

import './serviceRegister';

const { SearchTableStateImplementFactory, ProEditorCellSearchStateTable } = SearchTable;

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
 * EditorCellUseKeepEditStateSearchTable
 * @class EditorCellUseKeepEditStateSearchTable
 * @classdesc EditorCellUseKeepEditStateSearchTable
 */
class EditorCellUseKeepEditStateSearchTable extends ProEditorCellSearchStateTable {
  getComponentId() {
    return 'EditorCellUseKeepEditStateSearchTable';
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
              message: '请输入姓名',
            },
          ],
          useKeepEdit: true,
          props: {
            onBlur: (e, { updateEditorCellData }) => {
              updateEditorCellData();
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
          useKeepEdit: true,
          props: {
            onChange: (e, { updateEditorCellData }) => {
              updateEditorCellData();
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
            onChange: (e, { updateEditorCellData }) => {
              updateEditorCellData();
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
            onBlur: (e, { updateEditorCellData }) => {
              updateEditorCellData();
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
            onBlur: (e, { updateEditorCellData }) => {
              updateEditorCellData();
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
            onBlur: (e, { updateEditorCellData }) => {
              updateEditorCellData();
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
            onBlur: (e, { updateEditorCellData }) => {
              updateEditorCellData();
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
}

EditorCellUseKeepEditStateSearchTable.propTypes = {};

const Wrap = SearchTableStateImplementFactory({
  serviceNames: [serviceName],
  middleWares: [],
  reducer: null,
  models: getModels(),
})(EditorCellUseKeepEditStateSearchTable);

export default Wrap;
