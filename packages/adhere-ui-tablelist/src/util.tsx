/*
 * @Description: 表格列表
 * @Author: yumeng.qin
 * @Date: 2021-04-27 16:23:26
 * @LastEditor: yumeng.qin
 * @LastEditTime: 2021-05-21 10:41:27
 */
import { Tooltip } from 'antd';
import dayjs from 'dayjs';
import { difference, isEmpty, union } from 'lodash';
import React from 'react';

import FormItemCreator from '@baifendian/adhere-ui-formitemcreator';
import intl from '@baifendian/adhere-util-intl';

class Util {
  public ins: any;

  constructor(ins) {
    this.ins = ins;
  }

  /**
   * 获取对应mode的属性
   */
  getModeProps = () => {
    return { rowKey: 'id', ...this.ins.props[this.ins.props.mode || 'table'] };
  };

  /**
   * 获取默认显示的列项
   */
  getDefaultSelectedColumnKeys = (columns) => {
    const { showNumber } = this.getModeProps();

    const result = (columns || [])
      .filter((v) => v.show || !v.hasOwnProperty('show'))
      .map((v) => v.key);
    if (showNumber && !result.includes('xuhao')) {
      result.unshift(showNumber?.key || 'xuhao');
    }
    return result;
  };

  /**
   * 获取rowSelection 默认支持跨页选中，如果想要跨页取消设置clearOnChange为true
   */
  getRowSelection = () => {
    const { selectedRowKeys = [], selectedRows = [], selectAll } = this.ins.state;
    const { rowSelection } = this.getModeProps();
    return rowSelection
      ? {
          // 在表格变化的时候是否清空选中
          clearOnChange: false,
          ...rowSelection,
          onChange: this.onSelectChange,
          selectedRowKeys: rowSelection.selectedRowKeys || selectedRowKeys,
          // 一下是自定义的变量
          selectedRows,
          // 是否选中全部数据
          selectAll,
        }
      : null;
  };

  /**
   * 获取排序后的表格数据
   */
  getSortDataSource = () => {
    return this.ins.SortableTableRef.state.dataSource;
  };

  /**
   * 获取参数
   */
  getParams = () => {
    const { params } = this.ins.props;
    let formParams = {};
    if (this.ins.searchFormRef && this.ins.searchFormRef.current) {
      formParams = this.ins.searchFormRef.current.getFieldsValue();
    }
    return { ...formParams, ...this.ins.state.params, ...params };
  };

  /**
   * 获取表单统一配置
   * @param {*} Formcolumns
   */
  getFormColumns = (Formcolumns, size, searchNow) => {
    return Formcolumns.map((temp) => {
      const t = temp;
      t.contentProps = t.contentProps || {};
      t.contentProps.size = size;
      if (t.type === FormItemCreator.RANGEPICKER || t.type === FormItemCreator.SELECT) {
        t.contentProps = {
          getPopupContainer: () => this.ins.TableListRef,
          ...t.contentProps,
        };
      }
      if (t.type === FormItemCreator.SELECT) {
        t.contentProps = {
          style: { width: '150px' },
          allowClear: true,
          ...t.contentProps,
        };
      }
      if (searchNow) {
        t.contentProps = {
          onSearch:
            t.type === FormItemCreator.SEARCH ? (v) => this.onSearch({ [t.name]: v }) : null,
          onPressEnter:
            t.type !== FormItemCreator.SEARCH
              ? (e) =>
                  this.onSearch({
                    [t.name]: [
                      FormItemCreator.INPUT,
                      FormItemCreator.TEXTAREA,
                      FormItemCreator.NUMBER,
                    ].includes(t.type)
                      ? e.target.value
                      : e,
                  })
              : null,
          ...t.contentProps,
        };
      }
      return t;
    });
  };

  /**
   * 获取分页
   */
  getPagination = (pagination) => {
    const { params } = this.ins.state;
    return {
      size: 'default',
      defaultPageSize: 10,
      current: params.page,
      pageSize: params.limit,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50'],
      showQuickJumper: true,
      showTotal: (total, [page, pageSize]) => {
        return `当前 ${page}-${pageSize}/共 ${total} 条`;
      },
      onChange: this.onPageChange,
      onShowSizeChange: this.onPageChange,
      ...pagination,
    };
  };

  /**
   * 获取表格的配置项
   */
  getTableColumns = () => {
    const { params } = this.ins.state;
    const { columns, showNumber } = this.getModeProps();
    const tableColumns = (columns || []).map((item) => ({
      ...item,
      render: (text, record, index) => {
        let result = '';
        if (item.render) {
          // 如果有render根据传入的显示
          result = item.render(text, record, index);
        } else if (item.valueType === 'date') {
          // 日期类型默认显示
          result = text ? dayjs(text).format('L') : '-';
        } else if (item.valueType === 'datetime') {
          // 带时间的日期类型默认显示
          result = text ? dayjs(text).format('LLL') : '-';
        } else if (item.valueType === 'map' && item.map) {
          // 根据数组匹配进行显示
          const current =
            text && (item.map || []).find((v) => v.value.toString() === text.toString());
          result = text && current ? current.label : '-';
        } else {
          // 默认显示
          result = text;
        }
        // ellipsis 超出...
        if (item?.ellipsis) {
          return (
            <Tooltip title={result} placement="topLeft">
              {result}
            </Tooltip>
          );
        }
        return result;
      },
      filtered: item.filters?.length && params[item.key],
    }));

    // 如果showNumber 则添加序号列
    if (showNumber && !tableColumns.find((v) => v.key === 'xuhao')) {
      tableColumns.unshift({
        title: intl.v('序号'),
        dataIndex: 'xuhao',
        key: 'xuhao',
        width: 80,
        render: (v, r, i) => {
          return (params.page - 1) * params.limit + i + 1;
        },
        ...showNumber,
      });
    }

    return tableColumns;
  };

  /*
   * 获取表格或者列表的loading
   */
  getLoading = (loading) => {
    if (loading || this.ins.state.loading) {
      return loading && loading.hasOwnProperty('size') ? loading : { size: 'large' };
    }
    return false;
  };

  /**
   * 发起请求
   * @param {*} params
   */
  fetchList = (params?: object) => {
    const fetchParams = { ...this.getParams(), ...params };
    if (this.ins.props.request) {
      this.ins.setState({ loading: true });
      this.ins.props.request(fetchParams).then(() => {
        this.ins.setState({ loading: false });
      });
    }
  };

  /**
   * 搜索
   */
  onSearch = (searchParams) => {
    const { params } = this.ins.state;
    // 当rowSelection.clearOnChange为true 搜索的时候会清空
    const rowSelection = this.getRowSelection();
    if (rowSelection && !rowSelection.selectAll && rowSelection.clearOnChange) {
      rowSelection.onChange([], []);
    }
    this.ins.setState(
      {
        params: { ...params, ...searchParams, page: 1 },
      },
      () => {
        this.fetchList();
      },
    );
  };

  /**
   * 重置
   */
  onResetSearch = () => {
    const { params } = this.ins.state;
    const rowSelection = this.getRowSelection();
    if (this.ins.searchFormRef && this.ins.searchFormRef.current) {
      this.ins.searchFormRef.current.resetFields();
    }
    params.page = 1;
    // 重置的时候清空
    if (rowSelection) {
      rowSelection.onChange([], []);
    }
    this.ins.setState({ params }, () => {
      this.fetchList();
    });
  };

  /**
   * 列设置变化
   */
  onSettingChange = (selectedColumnKeys) => {
    this.ins.setState({ selectedColumnKeys });
  };

  /**
   * 列设置拖拽排序完毕
   */
  onSettingSortEnd = ({ oldIndex, newIndex }) => {
    const { tableColumns } = this.ins.state;
    if (oldIndex !== newIndex) {
      const oldItem = tableColumns[oldIndex];
      let newData = tableColumns.filter((_, i) => i !== oldIndex);
      newData.splice(newIndex, 0, oldItem);
      this.ins.setState({ tableColumns: newData });
    }
  };

  /**
   * 表格变化
   * @param {*} _
   * @param {*} filters
   * @param {*} sorter
   */
  onTableChange = (keys, filters, sorter) => {
    if (!isEmpty(sorter) || !isEmpty(filters)) {
      const params = {
        ...this.ins.state.params,
        order: sorter?.order?.replace('end', ''),
        sidx: sorter?.field,
      };
      for (let filterKey in filters) {
        params[filterKey] = filters[filterKey].join(',');
        params.page = 1;
      }
      // 当rowSelection.clearOnChange为true 表格变化会清空
      const rowSelection = this.getRowSelection();
      if (rowSelection && !rowSelection.selectAll && rowSelection.clearOnChange) {
        rowSelection.onChange([], []);
      }
      this.ins.setState({ params }, () => this.fetchList());
    }
  };

  /**
   * 选项变化
   */
  onSelectChange = (selectedRowKeys, selectedRows) => {
    const { dataSource, rowKey, rowSelection } = this.getModeProps();
    const { selectAll } = this.ins.state;
    if (this.ins.state.selectAll) {
      const allKeys = dataSource.map((v) => v[rowKey]);
      const exceptKeys = union(selectAll.exceptKeys || [], difference(allKeys, selectedRowKeys));
      this.ins.setState({ selectAll: exceptKeys.length ? { exceptKeys } : true });
    }
    if (rowSelection?.onChange) {
      rowSelection.onChange(selectedRowKeys, selectedRows);
    } else {
      this.ins.setState({ selectedRowKeys, selectedRows });
    }
  };

  /**
   * 分页变化
   * @param {*} page
   * @param {*} limit
   */
  onPageChange = (page, limit) => {
    const { params } = this.ins.state;
    // 当rowSelection.clearOnChange为true 切页面会清空
    const rowSelection = this.getRowSelection();
    if (rowSelection && !rowSelection.selectAll && rowSelection.clearOnChange) {
      rowSelection.onChange([], []);
    }
    this.ins.setState(
      {
        params: { ...params, page, limit },
      },
      () => this.fetchList(),
    );
  };

  /*
   * 表格删除时候操作，刷列表
   */
  onDelete = (deletedKeys = []) => {
    const { pagination, rowKey } = this.getModeProps();
    const { total } = pagination;
    const { page, limit } = this.ins.state.params;
    if (total % limit === 1 && page === Math.ceil(total / limit)) {
      this.ins.setState(
        {
          params: { ...this.ins.state.params, page: page - deletedKeys.length || 1 },
        },
        () => this.fetchList(),
      );
      return;
    }
    const rowSelection = this.getRowSelection();
    if (rowSelection) {
      const selectedRowKeys = rowSelection.selectedRowKeys.filter(
        (v: never) => !deletedKeys.includes(v),
      );
      const selectedRows = rowSelection.selectedRows.filter(
        (v: never) => !deletedKeys.includes(v[rowKey]),
      );
      rowSelection.onChange(selectedRowKeys, selectedRows);
    }
    this.fetchList();
  };
}

export default Util;
