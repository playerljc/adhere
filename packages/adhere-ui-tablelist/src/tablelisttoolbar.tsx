/*
 * @Description: tablelist的工具栏项
 * @Author: yumeng.qin
 * @Date: 2021-04-28 11:21:06
 * @LastEditor: yumeng.qin
 * @LastEditTime: 2021-05-06 14:25:16
 */
import { Checkbox, Popover, Tooltip } from 'antd';
import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import { ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from './tablelist';

export const ToolbarSelectAll = ({ selectAll, rowSelection, rowKey, dataSource, setSelectAll }) => {
  if (!rowSelection) return null;
  function onChange(e) {
    if (e.target.checked) {
      rowSelection.onChange(
        dataSource.map((v) => v[rowKey]),
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
    <Tooltip title={Intl.v('全选')} placement="top" {...selectAll}>
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
          {selectAll.title || Intl.v('全选')}
        </Checkbox>
      }
    </Tooltip>
  );
};

export const ToolbarReload = ({ reload, onSearch }) => {
  return (
    <Tooltip title={Intl.v('刷新')} placement="top" {...reload}>
      {reload.render || <ReloadOutlined onClick={() => onSearch()} />}
    </Tooltip>
  );
};

export const ToolbarSetting = ({
  setting,
  tableColumns,
  onSettingChange,
  onSettingSortEnd,
  selectedColumnKeys,
}) => {
  const SortableItem = SortableElement((props) => <Checkbox {...props} />);

  const SortableWrapper = SortableContainer((props) => <Checkbox.Group {...props} />);

  const SettingTitle = ({ columns = [], selectedColumnKeys = [], onChange }) => {
    return (
      <>
        <Checkbox
          indeterminate={
            selectedColumnKeys?.length !== 0 && selectedColumnKeys?.length !== columns?.length
          }
          checked={selectedColumnKeys?.length === columns?.length}
          onChange={(e) => onChange(e.target.checked ? columns.map((v: any) => v.key) : [])}
        >
          {Intl.v('列展示')}
        </Checkbox>
      </>
    );
  };

  const SettingContent = ({ columns = [], selectedColumnKeys = [], onChange, onSortEnd }) => {
    return (
      <SortableWrapper
        helperClass={`${selectorPrefix}-set-dragging`}
        value={selectedColumnKeys}
        onChange={onChange}
        onSortEnd={onSortEnd}
        distance={2}
      >
        {columns.map((item: any, index) => (
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
      overlayClassName={`${selectorPrefix}-settingOverlay`}
      {...setting.Popover}
    >
      <Tooltip title={Intl.v('设置')} placement="top" {...setting}>
        {setting.render || <SettingOutlined type="setting" />}
      </Tooltip>
    </Popover>
  );
};
