import { Button } from 'antd';
import React from 'react';

import { DateDisplay, DelConfirm, Resource } from '@baifendian/adhere';
import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import SearchTable from '../src/index';
import { names } from './config/dict/dict/dict.test.config';
import './serviceRegister';

import './index.less';

const {
  ProSearchStateTable,
  /*ProEditableCellSearchStateTable,*/ OptionsWrap,
  SearchTableStateImplementFactory,
} = SearchTable;
const { ComponentNames, genDictComponentName } = FieldGeneratorToDict;
const serviceName = 'user';

/**
 * ProSearchStateHeaderGroupTableImpl
 * @class ProSearchStateHeaderGroupTableImpl
 * @classdesc ProSearchStateHeaderGroupTableImpl - 表头分组示例
 */
class ProSearchStateHeaderGroupTableImpl extends ProSearchStateTable {
  // getComponentId() {
  //   return 'ProSearchStateHeaderGroupTableImpl';
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

  // getLimit() {
  //   return 500;
  // }

  // getPagination() {
  //   return false;
  // }

  /**
   * hasAdvancedSearch
   * @description 是否有高级搜索
   * @returns {boolean}
   */
  hasAdvancedSearch() {
    return false;
  }

  hasOptionColumnFixed() {
    return false;
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
   * renderSearchFooterItems
   * 渲染表格的工具栏
   * @override
   */
  renderSearchFooterItems(defaultItems) {
    return super.renderSearchFooterItems([
      {
        key: 'add',
        value: (
          <Button
            key="add"
            type="primary"
            onClick={() => {
              this.validateAllEditableRow(false);
            }}
          >
            保存
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
              this.validateAllEditableRow(false);
            }}
          >
            保存
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
              this.validateAllEditableRow(false);
            }}
          >
            保存
          </Button>
        ),
      },
      ...defaultItems,
    ]);
  }

  // isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing() {
  //   return true;
  // }
  //
  // isSearchFormToolBarItemEllipsesShowOnlyOneAfterCollapsing() {
  //   return true;
  // }
  //
  // isShowNumber() {
  //   return false;
  // }
  //
  // renderSearchFooterItemsMore() {
  //   return <span>111</span>;
  // }
  //
  // renderSearchFormToolBarMore() {
  //   return <span>222</span>;
  // }
  //
  // renderSearchFormToolBarSearchItem(cb) {
  //   return <span onClick={cb}>Search</span>;
  // }
  //
  // renderSearchFormToolBarResetItem(cb) {
  //   return <span onClick={cb}>Reset</span>;
  // }

  /**
   * Table的列
   * @override
   * @return {*[]}
   */
  getColumns() {
    return super.getColumns([
    {
      title: '基本信息',
      key: 'basicInfo',
      children: [
      {
              // title: () => <div style={{ color: 'red' }}>姓名</div>,
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              // width: 200,
              width: {},
              // align: 'left',
              // render: (val) => <div style={{ color: 'red' }}>{val}</div>,
              $search: {
                type: 'input',
                visible: true,
                title: () => <div style={{ color: 'red' }}>姓名111</div>,
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
              $tip: '性别',
              titleToString: '性别',
              width: {},
              render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v)?.label,
              renderToString: (v) =>
                Resource.Dict.value.ResourceNormalSexMap.value.get(v)?.label ?? '',
              $search: {
                type: 'dict',
                visible: true,
                // dictName: `SystemTestTree${FieldGeneratorToDict.ComponentNames.Tree.Standard}`,
                dictName: `${genDictComponentName(names.SystemTestSex, ComponentNames.Select.Standard)}`,
                // props: {
                //   isHideInvalidValue: false,
                // },
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
              $resizable: true,
              // $hide: true,
            },
      {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
              align: 'center',
              // width: 100,
              width: {},
              sorter: true,
              sortOrder: this.sortOrder('age'),
              $search: {
                type: 'inputNumber',
                visible: true,
              },
              $editable: {
                editable: true,
                type: 'inputNumber',
                rules: [
                  {
                    required: true,
                    message: '请输入年龄',
                  },
                ],
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
              // width: 200,
              width: {},
              sorter: true,
              sortOrder: this.sortOrder('birthday'),
              render: (val) => <DateDisplay.DateDisplay10 value={val} />,
              renderToString: (val) => {
                if (!val) return '';
                const date = new Date(val);
                if (Number.isNaN(date.getTime())) return '';
                const y = date.getFullYear();
                const m = `${date.getMonth() + 1}`.padStart(2, '0');
                const d = `${date.getDate()}`.padStart(2, '0');
                return `${y}-${m}-${d}`;
              },
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
              title: '民族',
              dataIndex: 'nation',
              key: 'nation',
              // width: 120,
              width: {},
              $search: {
                type: 'input',
                visible: true,
              },
              $editable: {
                editable: true,
                type: 'input',
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
              title: '学历',
              dataIndex: 'education',
              key: 'education',
              // width: 120,
              width: {},
              $search: {
                type: 'input',
                visible: true,
              },
              $editable: {
                editable: true,
                type: 'input',
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
      ],
    },
    {
      title: '身体指标',
      key: 'bodyInfo',
      children: [
      {
              title: '身高',
              dataIndex: 'height',
              key: 'height',
              align: 'center',
              width: {},
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
              // $hide: true,
            },
      {
              title: '体重',
              dataIndex: 'width',
              key: 'width',
              align: 'center',
              // width: {
              //   minWidth: 300,
              // },
              width: {},
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
              // $hide: true,
            },
      ],
    },
    {
      title: '地区信息',
      key: 'regionInfo',
      children: [
      {
              title: '籍贯',
              dataIndex: 'homeTown',
              key: 'homeTown',
              ellipsis: false,
              // width: {
              //   maxWidth: 1000,
              // },
              width: {},
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
              // $hide: true,
            },
      {
              title: '现居住地',
              dataIndex: 'address',
              key: 'address',
              width: {},
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
                    message: '请输入居住地',
                  },
                ],
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
              // $hide: true,
            },
      ],
    },
    {
      title: '联系方式',
      key: 'contactInfo',
      children: [
      {
              title: '邮箱',
              dataIndex: 'email',
              key: 'email',
              // width: 220,
              width: {},
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
                    message: '请输入邮箱',
                  },
                ],
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
              title: '手机号',
              dataIndex: 'phone',
              key: 'phone',
              // width: 140,
              width: {},
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
                    message: '请输入手机号',
                  },
                ],
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
      ],
    },
    {
      title: '工作信息',
      key: 'jobInfo',
      children: [
      {
              title: '部门',
              dataIndex: 'deptName',
              key: 'deptName',
              // width: 160,
              width: {},
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
                    message: '请输入部门',
                  },
                ],
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
              title: '公司',
              dataIndex: 'company',
              key: 'company',
              // width: 220,
              width: {},
              ellipsis: true,
              $search: {
                type: 'input',
                visible: true,
              },
              $editable: {
                editable: true,
                type: 'input',
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
              title: '职位',
              dataIndex: 'position',
              key: 'position',
              // width: 140,
              width: {},
              $search: {
                type: 'input',
                visible: true,
              },
              $editable: {
                editable: true,
                type: 'input',
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
              title: '薪资',
              dataIndex: 'salary',
              key: 'salary',
              align: 'center',
              // width: 120,
              width: {},
              sorter: true,
              sortOrder: this.sortOrder('salary'),
              $search: {
                type: 'inputNumber',
                visible: true,
              },
              $editable: {
                editable: true,
                type: 'inputNumber',
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
      ],
    },
    {
      title: '其他',
      key: 'otherInfo',
      children: [
      {
              title: '备注',
              dataIndex: 'remark',
              key: 'remark',
              // width: 200,
              width: {},
              ellipsis: true,
              $search: {
                type: 'input',
                visible: true,
              },
              $editable: {
                editable: true,
                type: 'input',
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
      ],
    },
    {
        title: '操作',
        dataIndex: this.getOptionsColumnDataIndex(),
        key: this.getOptionsColumnDataIndex(),
        width: {},
        renderToString: () => '查看删除',
        render: (v, record) => (
          <OptionsWrap
            style={{ justifyContent: 'center' }}
            isEllipsesShowOnlyOneAfterCollapsing
            renderEllipsis={() => <span>333</span>}
          >
            {this.renderOptionColumn(
              [
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
}

ProSearchStateHeaderGroupTableImpl.propTypes = {};

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
})(ProSearchStateHeaderGroupTableImpl);

export default () => {
  return (
    <Wrap
      className="Wrapper"
      wrapClassName="Wrapper"
      // style={{ height: '100%' }}
      // wrapStyle={{ height: '100%' }}
      FieldGeneratorToDict={FieldGeneratorToDict}
      // isShowExpandSearch={false}
      // isColumnMaxContent
      isShowExpandSearch
      autoFixed
      fixedHeaderAutoTable
      fixedTableSpaceBetween
      antdTableProps={{
        virtual: true,
      }}
    />
  );
};
