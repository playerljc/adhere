import React from 'react';

import { CheckCircleOutlined, CloseCircleOutlined, CopyOutlined } from '@ant-design/icons';
import { DateDisplay, Resource, SearchTable } from '@baifendian/adhere';

import './serviceRegister';

const { SearchTableStateImplementFactory, ProEditorCellSearchStateTable, OptionsWrap } =
  SearchTable;

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
 * EditorCellRenderTriggerStateSearchTable
 * @class EditorCellRenderTriggerStateSearchTable
 * @classdesc EditorCellRenderTriggerStateSearchTable
 */
class EditorCellRenderTriggerStateSearchTable extends ProEditorCellSearchStateTable {
  getComponentId() {
    return 'EditorCellRenderTriggerStateSearchTable';
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
          renderToEditTrigger: () => <CopyOutlined />,
          renderSaveTrigger: () => <CheckCircleOutlined />,
          renderCancelTrigger: () => <CloseCircleOutlined />,
          onSave: ({ value, record, dataIndex }) => {
            return new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
            });
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
          renderToEditTrigger: () => <CopyOutlined />,
          renderSaveTrigger: () => <CheckCircleOutlined />,
          renderCancelTrigger: () => <CloseCircleOutlined />,
          onSave: ({ record, dataIndex, value }) => {
            return new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
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
          renderToEditTrigger: () => <CopyOutlined />,
          renderSaveTrigger: () => <CheckCircleOutlined />,
          renderCancelTrigger: () => <CloseCircleOutlined />,
          onSave: ({ record, dataIndex, value }) => {
            return new Promise((resolve) => {
              this.updateEditorCellDateData({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
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
              message: '请输入身高',
            },
          ],
          renderToEditTrigger: () => <CopyOutlined />,
          renderSaveTrigger: () => <CheckCircleOutlined />,
          renderCancelTrigger: () => <CloseCircleOutlined />,
          onSave: ({ record, dataIndex, value }) => {
            return new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
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
              message: '请输入体重',
            },
          ],
          renderToEditTrigger: () => <CopyOutlined />,
          renderSaveTrigger: () => <CheckCircleOutlined />,
          renderCancelTrigger: () => <CloseCircleOutlined />,
          onSave: ({ record, dataIndex, value }) => {
            return new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
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
              message: '请输入籍贯',
            },
          ],
          renderToEditTrigger: () => <CopyOutlined />,
          renderSaveTrigger: () => <CheckCircleOutlined />,
          renderCancelTrigger: () => <CloseCircleOutlined />,
          onSave: ({ record, dataIndex, value }) => {
            return new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
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
              message: '请输入居住地',
            },
          ],
          renderToEditTrigger: () => <CopyOutlined />,
          renderSaveTrigger: () => <CheckCircleOutlined />,
          renderCancelTrigger: () => <CloseCircleOutlined />,
          onSave: ({ record, dataIndex, value }) => {
            return new Promise((resolve) => {
              this.updateEditorCellDate({
                record,
                dataIndex,
                value,
              }).then(() => resolve());
            });
          },
        },
      },
    ]);
  }
}

EditorCellRenderTriggerStateSearchTable.propTypes = {};

const Wrap = SearchTableStateImplementFactory({
  serviceNames: [serviceName],
  middleWares: [],
  reducer: null,
  models: getModels(),
})(EditorCellRenderTriggerStateSearchTable);

export default Wrap;
