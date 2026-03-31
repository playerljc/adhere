import React from 'react';

import { Button } from '@baifendian/adhere-ui-anthoc';
import DelConfirm from '@baifendian/adhere-ui-confirm-delconfirm';
import SearchTable from '@baifendian/adhere-ui-searchtable';
import Intl from '@baifendian/adhere-util-intl';

import Model from '../Model';
import { serviceName } from '../Service';

const {
  EditableRowControl,
  SearchTableStateImplementFactory,
  OptionsWrap,
  ProEditableCellSearchStateTable,
  ProEditableRowSearchStateTable,
  Table: AdhereSearchTable,
} = SearchTable as any;

type AnyRecord = Record<string, any>;

/**
 * createImplFactory
 * @description 创建搜索表格状态实现工厂函数，包装基础实现类并添加通用配置
 * @param {Class} SuperClass - 要包装的超类
 * @returns {Class} 返回扩展后的新类
 */
function createImplFactory(SuperClass: any) {
  return class extends SuperClass {
    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    renderSearchForm() {
      return null;
    }

    getPagination() {
      return false;
    }

    hasAdvancedSearch() {
      return false;
    }

    renderTableDensitySetting() {
      return null;
    }

    renderTableReload() {
      return null;
    }

    renderColumnSetting() {
      return null;
    }

    getRowSelection() {
      return false;
    }

    isUsePadding() {
      return false;
    }

    isUseSearchFormToolBarGap() {
      return true;
    }

    isUseSearchWrapperGap() {
      return true;
    }

    getNumberGeneratorRule() {
      return AdhereSearchTable.NUMBER_GENERATOR_RULE_ALONE;
    }

    onAdd(values?: AnyRecord) {
      return this.setData((_data: AnyRecord[]) => {
        return [values, ..._data];
      })
        .then(() => {
          this.props?.onChange?.(this.getData());
        })
        .catch((err: unknown) => {
          throw err;
        });
    }

    async onDel(key: unknown) {
      return this.setData((_data: AnyRecord[]) => {
        return _data.filter((record) => record[this.getRowKey()] !== key);
      })
        .then(() => {
          this.props?.onChange?.(this.getData());
        })
        .catch((err: unknown) => {
          throw err;
        });
    }

    afterFetchData() {
      // 初始化设置数据
      this.setData(() => {
        return this?.props?.value ?? [];
      });
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillReceiveProps(nextProps: AnyRecord) {
      super.componentWillReceiveProps(nextProps);

      // 设置数据
      this.setData(() => {
        return nextProps.value ?? [];
      });
    }

    renderSearchFooterItems(defaultItems: AnyRecord[]) {
      return super.renderSearchFooterItems([
        {
          key: 'add',
          value: (
            <Button key="add" type="primary" onClick={() => this.onAdd()}>
              {Intl.get('add')}
            </Button>
          ),
        },
        ...defaultItems,
      ]);
    }
  };
}

/**
 * EditableRowControlTable
 * @description 带有行编辑控制功能的搜索表格实现类，支持整行编辑和删除操作
 */
export class EditableRowControlTable extends createImplFactory(ProEditableRowSearchStateTable) {
  /**
   * onSave
   * @description 保存一行数据
   * @param values {Record<string, any>}
   * @return {Promise<void>}
   */
  async onSave(values: AnyRecord) {
    const key = this.getRowKey();

    return this.setData((_data: AnyRecord[]) => {
      const index = _data.findIndex((record) => record[key] === values[key]);

      if (index !== -1) {
        _data[index] = values;
      }

      return [..._data];
    })
      .then(() => {
        this.props?.onChange?.(this.getData());
      })
      .catch((err: unknown) => {
        throw err;
      });
  }

  getColumns() {
    const columns = super.getColumns();

    columns.push({
      title: Intl.get('operation'),
      dataIndex: this.getOptionsColumnDataIndex(),
      key: this.getOptionsColumnDataIndex(),
      width: {},
      renderToString: () => this.getOptionsColumnString([Intl.get('edit'), Intl.get('delete')]),
      render: (_: unknown, record: AnyRecord) => (
        <OptionsWrap style={{ justifyContent: 'center' }} ellipsisCount={this.getEllipsisCount()}>
          {this.renderOptionColumn([
            {
              key: 'edit',
              value: (
                <EditableRowControl
                  record={record}
                  rowKey={this.getRowKey()}
                  editorRowId={this.state.editorRowId}
                  renderEditorRow={() => <a>{Intl.get('edit')}</a>}
                  onSave={(values: AnyRecord) => this.onSave(values)}
                />
              ),
            },
            {
              key: 'delete',
              value: (
                <DelConfirm success={() => this.onDel(record[this.getRowKey()])}>
                  <a>{Intl.get('delete')}</a>
                </DelConfirm>
              ),
            },
          ])}
        </OptionsWrap>
      ),
    });

    return columns;
  }
}

/**
 * EditorCellTable
 * @description 带有单元格编辑功能的搜索表格实现类，支持单个单元格编辑和删除操作
 */
export class EditorCellTable extends createImplFactory(ProEditableCellSearchStateTable) {
  /**
   * onCellSave
   * @description 保存单元格数据
   */
  onCellSave({ value, record, dataIndex }: { value: any; record: AnyRecord; dataIndex: any }) {
    // 在此处可以调用接口来更新单元格的值
    return this.updateEditorCellDate({
      record,
      dataIndex,
      value,
    })
      .then(() => {
        this.props?.onChange?.(this.getData());
      })
      .catch((err: unknown) => {
        throw err;
      });
  }

  /**
   * onCellSaveByDate
   * @description 保存日期单元格数据
   */
  onCellSaveByDate({
    value,
    record,
    dataIndex,
  }: {
    value: any;
    record: AnyRecord;
    dataIndex: any;
  }) {
    return this.updateEditorCellDateData({
      record,
      dataIndex,
      value,
    })
      .then(() => {
        this.props?.onChange?.(this.getData());
      })
      .catch((err: unknown) => {
        throw err;
      });
  }

  getColumns() {
    const columns = super.getColumns();

    columns.push({
      title: Intl.get('operation'),
      dataIndex: this.getOptionsColumnDataIndex(),
      key: this.getOptionsColumnDataIndex(),
      width: this.isMobile() ? 'auto' : {},
      renderToString: () => this.getOptionsColumnString([Intl.get('delete')]),
      render: (_: unknown, record: AnyRecord) => (
        <OptionsWrap style={{ justifyContent: 'center' }} ellipsisCount={this.getEllipsisCount()}>
          {this.renderOptionColumn([
            {
              key: 'delete',
              value: (
                <DelConfirm success={() => this.onDel(record[this.getRowKey()])}>
                  <a>{Intl.get('delete')}</a>
                </DelConfirm>
              ),
            },
          ])}
        </OptionsWrap>
      ),
    });

    return columns;
  }
}

/**
 * StateTable
 * @description 创建基于 SystemBaseSearchTableStateImpl 的状态表格高阶组件，自动加载 Model 和 Service
 */
export const StateTable = (SubClass: any) => {
  return (SearchTableStateImplementFactory as any)({
    serviceNames: [serviceName],
    middleWares: [],
    reducer: null,
    models: (() => {
      return [Model];
      // const models: any[] = [];
      //
      // // webpack require.context - 在调用 StateTable 时才加载/执行 Model
      // // eslint-disable-next-line @typescript-eslint/no-var-requires
      // const requireComponent = (require as any).context('../Model', false, /.*\.(ts)$/);
      //
      // requireComponent.keys().forEach((fileName: string) => {
      //   const model = requireComponent(fileName);
      //   models.push(model.default);
      // });
      //
      // return models;
    })(),
  })(SubClass);
};
