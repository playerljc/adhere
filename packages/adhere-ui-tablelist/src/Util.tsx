/*
 * @Description: 表格列表工具类
 * @Author: yumeng.qin
 * @Date: 2021-04-27 16:23:26
 * @LastEditor: yumeng.qin
 * @LastEditTime: 2021-05-21 10:41:27
 */
import { Tooltip } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ColumnType } from 'antd/lib/table';
import dayjs from 'dayjs';
import difference from 'lodash.difference';
import isEmpty from 'lodash.isempty';
import union from 'lodash.union';
import React from 'react';

import FormItemCreator from '@baifendian/adhere-ui-formitemcreator';
import Intl from '@baifendian/adhere-util-intl';

import { UtilInstance, TableListState } from './types';

/**
 * 表格列表工具类
 * 提供表格列表组件的各种工具方法和状态管理
 */
class Util implements UtilInstance {
  /** 组件实例引用 */
  public ins: any;

  /**
   * 构造函数
   * @param ins - 组件实例
   */
  constructor(ins: any) {
    this.ins = ins;
  }

  /**
   * 获取对应mode的属性配置
   * @returns 当前模式下的属性配置
   */
  getModeProps = (): any => {
    return { rowKey: 'id', ...this.ins.props[this.ins.props.mode || 'table'] };
  };

  /**
   * 获取默认显示的列项键名
   * @param columns - 列配置数组
   * @returns 默认选中的列键名数组
   */
  getDefaultSelectedColumnKeys = (columns: any[]): string[] => {
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
   * 获取行选择配置
   * 默认支持跨页选中，如果想要跨页取消设置clearOnChange为true
   * @returns 行选择配置对象
   */
  getRowSelection = (): any => {
    const { selectedRowKeys = [], selectedRows = [], selectAll } = this.ins.state;
    const { rowSelection } = this.getModeProps();
    
    return rowSelection
      ? {
          // 在表格变化的时候是否清空选中
          clearOnChange: false,
          ...rowSelection,
          onChange: this.onSelectChange,
          selectedRowKeys: rowSelection.selectedRowKeys || selectedRowKeys,
          // 以下是自定义的变量
          selectedRows,
          // 是否选中全部数据
          selectAll,
        }
      : null;
  };

  /**
   * 获取排序后的表格数据
   * @returns 排序后的数据源
   */
  getSortDataSource = (): any[] => {
    return this.ins.SortableTableRef.state.dataSource;
  };

  /**
   * 获取请求参数
   * @returns 合并后的请求参数
   */
  getParams = (): Record<string, any> => {
    const { params } = this.ins.props;
    let formParams: Record<string, any> = {};
    
    if (this.ins.searchFormRef && this.ins.searchFormRef.current) {
      formParams = this.ins.searchFormRef.current.getFieldsValue();
    }
    
    return { ...formParams, ...this.ins.state.params, ...params };
  };

  /**
   * 获取表单统一配置
   * @param Formcolumns - 表单列配置
   * @param size - 组件尺寸
   * @param searchNow - 是否立即搜索
   * @returns 处理后的表单列配置
   */
  getFormColumns = (Formcolumns: any[], size: SizeType, searchNow: boolean): any[] => {
    return Formcolumns.map((temp) => {
      const t = { ...temp };
      t.contentProps = t.contentProps ?? {};
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
            t.type === FormItemCreator.SEARCH ? (v: string) => this.onSearch({ [t.name]: v }) : null,
          onPressEnter:
            t.type !== FormItemCreator.SEARCH
              ? (e: any) =>
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
   * 获取分页配置
   * @param pagination - 分页配置
   * @returns 处理后的分页配置
   */
  getPagination = (pagination: any): any => {
    const { params } = this.ins.state;
    
    return {
      size: 'default',
      defaultPageSize: 10,
      current: params.page,
      pageSize: params.limit,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50'],
      showQuickJumper: true,
      showTotal: (total: number, [page, pageSize]: [number, number]) => {
        return Intl.get('pagination_info', {
          page,
          pageSize,
          total,
        });
      },
      onChange: this.onPageChange,
      onShowSizeChange: this.onPageChange,
      ...pagination,
    };
  };

  /**
   * 获取表格的配置项
   * @returns 处理后的表格列配置
   */
  getTableColumns = (): ColumnType<any>[] => {
    const { params } = this.ins.state;
    const { columns, showNumber } = this.getModeProps();
    
    const tableColumns: ColumnType<any>[] = (columns || []).map((item) => ({
      ...item,
      render: (text: any, record: any, index: number) => {
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
            text && (item.map || []).find((v: any) => v.value.toString() === text.toString());
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
        title: Intl.get('serial_number'),
        dataIndex: 'xuhao',
        key: 'xuhao',
        width: 80,
        render: (v: any, r: any, i: number) => {
          return (params.page - 1) * params.limit + i + 1;
        },
        ...showNumber,
      });
    }

    return tableColumns;
  };

  /**
   * 获取表格或者列表的loading状态
   * @param loading - 加载配置
   * @returns 处理后的加载状态
   */
  getLoading = (loading: any): any => {
    if (loading || this.ins.state.loading) {
      return loading && loading.hasOwnProperty('size') ? loading : { size: 'large' };
    }
    return false;
  };

  /**
   * 发起数据请求
   * @param params - 请求参数
   */
  fetchList = (params?: Record<string, any>): void => {
    const fetchParams = { ...this.getParams(), ...params };
    
    if (this.ins.props.request) {
      this.ins.setState({ loading: true });
      this.ins.props.request(fetchParams).then(() => {
        this.ins.setState({ loading: false });
      });
    }
  };

  /**
   * 搜索处理
   * @param searchParams - 搜索参数
   */
  onSearch = (searchParams: Record<string, any>): void => {
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
   * 重置搜索
   */
  onResetSearch = (): void => {
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
   * 列设置变化处理
   * @param selectedColumnKeys - 选中的列键
   */
  onSettingChange = (selectedColumnKeys: string[]): void => {
    this.ins.setState({ selectedColumnKeys });
  };

  /**
   * 列设置拖拽排序完毕处理
   * @param params - 拖拽参数
   * @param params.oldIndex - 原索引
   * @param params.newIndex - 新索引
   */
  onSettingSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }): void => {
    const { tableColumns } = this.ins.state;
    
    if (oldIndex !== newIndex) {
      const oldItem = tableColumns[oldIndex];
      let newData = tableColumns.filter((_, i) => i !== oldIndex);
      newData.splice(newIndex, 0, oldItem);
      this.ins.setState({ tableColumns: newData });
    }
  };

  /**
   * 表格变化处理
   * @param keys - 变化的键
   * @param filters - 过滤器
   * @param sorter - 排序器
   */
  onTableChange = (keys: any, filters: any, sorter: any): void => {
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
   * 选项变化处理
   * @param selectedRowKeys - 选中的行键
   * @param selectedRows - 选中的行数据
   */
  onSelectChange = (selectedRowKeys: any[], selectedRows: any[]): void => {
    const { dataSource, rowKey, rowSelection } = this.getModeProps();
    const { selectAll } = this.ins.state;
    
    if (this.ins.state.selectAll) {
      const allKeys = dataSource.map((v: any) => v[rowKey]);
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
   * 分页变化处理
   * @param page - 页码
   * @param limit - 每页条数
   */
  onPageChange = (page: number, limit: number): void => {
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

  /**
   * 表格删除时候操作，刷列表
   * @param deletedKeys - 删除的键数组
   */
  onDelete = (deletedKeys: any[] = []): void => {
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
        (v: any) => !deletedKeys.includes(v),
      );
      const selectedRows = rowSelection.selectedRows.filter(
        (v: any) => !deletedKeys.includes(v[rowKey]),
      );
      rowSelection.onChange(selectedRowKeys, selectedRows);
    }
    
    this.fetchList();
  };
}

export default Util;
