/*
 * @Description: tablelist的工具栏项
 * @Author: yumeng.qin
 * @Date: 2021-04-28 11:21:06
 * @LastEditor: yumeng.qin
 * @LastEditTime: 2021-05-06 14:25:16
 */
import { Checkbox, Popover, Tooltip } from 'antd';
import React, { useMemo } from 'react';
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from './TableList';
import { ToolbarSelectAllProps, ReloadProps, SettingProps } from './types';

/**
 * 工具栏全选组件属性接口
 */
interface ToolbarSelectAllComponentProps {
  /** 全选配置 */
  selectAll: ToolbarSelectAllProps;
  /** 行选择配置 */
  rowSelection: any;
  /** 行键名 */
  rowKey: string;
  /** 数据源 */
  dataSource: any[];
  /** 设置全选状态的回调 */
  setSelectAll: (value: boolean | { exceptKeys: any[] }) => void;
}

/**
 * 工具栏全选组件
 * 提供全选功能和跨页选择支持
 */
export const ToolbarSelectAll: React.FC<ToolbarSelectAllComponentProps> = ({ 
  selectAll, 
  rowSelection, 
  rowKey, 
  dataSource, 
  setSelectAll 
}) => {
  if (!rowSelection) return null;

  /**
   * 全选状态变化处理
   * @param e - 复选框变化事件
   */
  function onChange(e: any) {
    if (e.target.checked) {
      rowSelection.onChange(
        dataSource.map((v: any) => v[rowKey]),
        dataSource,
      );
    } else {
      rowSelection.onChange([], []);
    }
    
    if (selectAll.total && setSelectAll) {
      setSelectAll(e.target.checked);
    }
  }

  return (
    <Tooltip title={Intl.get('select_all')} placement="top" {...selectAll}>
      {
        <Checkbox
          indeterminate={
            selectAll.total && rowSelection.selectAll
              ? rowSelection.selectAll?.exceptKeys?.length
              : rowSelection.selectedRowKeys.length &&
                rowSelection.selectedRowKeys.length !== dataSource?.length
          }
          checked={
            selectAll.total && rowSelection.selectAll
              ? !rowSelection.selectAll?.exceptKeys?.length
              : rowSelection.selectedRowKeys.length === dataSource?.length
          }
          onChange={onChange}
        >
          {selectAll.title || Intl.get('select_all')}
        </Checkbox>
      }
    </Tooltip>
  );
};

/**
 * 工具栏刷新组件属性接口
 */
interface ToolbarReloadComponentProps {
  /** 刷新配置 */
  reload: ReloadProps;
  /** 搜索回调 */
  onSearch: () => void;
}

/**
 * 工具栏刷新组件
 * 提供刷新数据功能
 */
export const ToolbarReload: React.FC<ToolbarReloadComponentProps> = ({ reload, onSearch }) => {
  return (
    <Tooltip title={Intl.get('refresh')} placement="top" {...reload}>
      {reload.render || <ReloadOutlined onClick={() => onSearch()} />}
    </Tooltip>
  );
};

/**
 * 工具栏设置组件属性接口
 */
interface ToolbarSettingComponentProps {
  /** 设置配置 */
  setting: SettingProps;
  /** 表格列配置 */
  tableColumns: any[];
  /** 列设置变化回调 */
  onSettingChange: (selectedColumnKeys: string[]) => void;
  /** 列设置拖拽排序完成回调 */
  onSettingSortEnd: (params: { oldIndex: number; newIndex: number }) => void;
  /** 选中的列键 */
  selectedColumnKeys: string[];
}

/**
 * 工具栏设置组件
 * 提供列显示设置和拖拽排序功能
 */
export const ToolbarSetting: React.FC<ToolbarSettingComponentProps> = ({
  setting,
  tableColumns,
  onSettingChange,
  onSettingSortEnd,
  selectedColumnKeys,
}) => {
  const SortableItem: React.FC<any> = (props: any) => {
    const { setNodeRef, attributes, listeners, transform, transition } = useSortable({
      id: props.value,
    });

    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <Checkbox {...props} />
      </div>
    );
  };

  const SortableWrapper: React.FC<any> = ({ children, value, onChange, onSortEnd, ...rest }: any) => {
    const sensors = useSensors(useSensor(PointerSensor));
    const items = useMemo(() => {
      const arr = React.Children.toArray(children) as any[];
      return arr.map((c) => c?.props?.value).filter((k) => k != null);
    }, [children]);

    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={({ active, over }) => {
          if (!active || !over || active.id === over.id) return;
          const oldIndex = items.indexOf(active.id);
          const newIndex = items.indexOf(over.id);
          if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
            onSortEnd?.({ oldIndex, newIndex });
          }
        }}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <Checkbox.Group value={value} onChange={onChange} {...rest}>
            {children}
          </Checkbox.Group>
        </SortableContext>
      </DndContext>
    );
  };

  /**
   * 设置标题组件属性接口
   */
  interface SettingTitleProps {
    /** 列配置 */
    columns?: any[];
    /** 选中的列键 */
    selectedColumnKeys?: string[];
    /** 变化回调 */
    onChange: (selectedColumnKeys: string[]) => void;
  }

  /**
   * 设置标题组件
   */
  const SettingTitle: React.FC<SettingTitleProps> = ({ columns = [], selectedColumnKeys = [], onChange }) => {
    return (
      <>
        <Checkbox
          indeterminate={
            selectedColumnKeys?.length !== 0 && selectedColumnKeys?.length !== columns?.length
          }
          checked={selectedColumnKeys?.length === columns?.length}
          onChange={(e) => onChange(e.target.checked ? columns.map((v: any) => v.key) : [])}
        >
          {Intl.get('column_display')}
        </Checkbox>
      </>
    );
  };

  /**
   * 设置内容组件属性接口
   */
  interface SettingContentProps {
    /** 列配置 */
    columns?: any[];
    /** 选中的列键 */
    selectedColumnKeys?: string[];
    /** 变化回调 */
    onChange: (selectedColumnKeys: string[]) => void;
    /** 拖拽排序完成回调 */
    onSortEnd: (params: { oldIndex: number; newIndex: number }) => void;
  }

  /**
   * 设置内容组件
   */
  const SettingContent: React.FC<SettingContentProps> = ({ 
    columns = [], 
    selectedColumnKeys = [], 
    onChange, 
    onSortEnd 
  }) => {
    return (
      // @ts-ignore
      <SortableWrapper
        helperClass={`${selectorPrefix}-set-dragging`}
        value={selectedColumnKeys}
        onChange={onChange}
        onSortEnd={onSortEnd}
      >
        {columns.map((item: any, index: number) => (
          // @ts-ignore
          <SortableItem value={item.key} index={index} key={item.key}>
            {item.title}
          </SortableItem>
        ))}
      </SortableWrapper>
    );
  };

  return (
    <Popover
      title={
        <SettingTitle
          columns={tableColumns}
          onChange={onSettingChange}
          selectedColumnKeys={selectedColumnKeys}
        />
      }
      content={
        <SettingContent
          columns={tableColumns}
          onChange={onSettingChange}
          onSortEnd={onSettingSortEnd}
          selectedColumnKeys={selectedColumnKeys}
        />
      }
      trigger="click"
      placement="bottomRight"
      overlayClassName={`${selectorPrefix}-setting-overlay`}
      {...setting.Popover}
    >
      <Tooltip title={Intl.get('settings')} placement="top" {...setting}>
        {setting.render || <SettingOutlined type="setting" />}
      </Tooltip>
    </Popover>
  );
};
