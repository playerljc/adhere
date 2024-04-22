import { Popover } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useMemo } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { isElement } from 'react-is';

import { HolderOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import {
  ToolBarProps,
  ToolbarConfigItem,
  TriggerMode,
  TriggerProps,
  ViewSettingConfigItem,
} from '../types';
import FilterItem from './Items/FilterItem';
import NormalItem from './Items/NormalItem';
import SortItem from './Items/SortItem';
import ViewSettingItem from './Items/ViewSettingItem';

const selectorPrefix = 'adhere-mobile-ui-prsl-toolbar';

/**
 * Toolbar
 * @description 工具栏，分为左侧和右侧，如果item多可以移动到Menu中
 * 左侧: 显示总户数(可有可无)
 * 右侧: {
 *   内置工具: [
 *     FilterItem: 过滤
 *     SortItem: 排序
 *     ViewSettingItem: 视图设置
 *   ]
 *   其他业务工具项: Array
 * }
 * beforeToolBarElement
 * default
 * afterToolBarElement
 */
const ToolBar = memo<ToolBarProps>(
  ({
    className,
    style,
    showTotal = true,
    renderToolBar,
    afterToolBarRender,
    beforeToolBarRender,
    beforeToolBarRenderClassName,
    beforeToolBarRenderStyle,
    afterToolBarRenderClassName,
    afterToolBarRenderStyle,
    isShowFilterTrigger = true,
    renderFilterTrigger,
    isShowSortTrigger = true,
    renderSortTrigger,
    isShowViewSettingTrigger = true,
    renderViewSettingTrigger,
    viewSettingTriggerMode,
    viewSettingTriggerProps,
    renderViewSetting,
    viewSettingConfig,
    defaultViewSettingValue,
    onViewSetting,
    onViewSettingReset,
    toolbarCollapseCount,
    toolbarConfig,
    filterTriggerMode,
    filterTriggerProps,
    renderFilter,
    filterFormProps,
    filterConfig,
    defaultFilterValues,
    onFilter,
    onFilterReset,
    sortTriggerMode,
    sortTriggerProps,
    renderSort,
    sortConfig,
    defaultSortValues,
    onSort,
    onSortReset,
    total = 0,
    disabled,
  }) => {
    // 显示Total的UI
    const showTotalElement = useMemo(() => {
      return showTotal && total > 0 ? (
        <div className={`${selectorPrefix}-show-total`}>
          {Intl.v(`共{total}个结果`, {
            total,
          })}
        </div>
      ) : null;
    }, [showTotal, total]);

    // 显示Total的WrapperUI
    const showTotalElementWrapper = useMemo(() => {
      return <div className={classNames(`${selectorPrefix}-show-total`)}>{showTotalElement}</div>;
    }, [showTotalElement]);

    // 筛选按钮UI
    const filterItemElement = useMemo(() => {
      return isShowFilterTrigger ? (
        <FilterItem
          disabled={disabled}
          filterTriggerMode={filterTriggerMode}
          filterTriggerProps={filterTriggerProps}
          renderFilter={renderFilter}
          filterFormProps={filterFormProps}
          filterConfig={filterConfig}
          defaultFilterValues={defaultFilterValues}
          onFilter={onFilter}
          onFilterReset={onFilterReset}
        >
          {(defaultUI) => renderFilterTrigger?.(defaultUI)}
        </FilterItem>
      ) : null;
    }, [
      disabled,
      isShowFilterTrigger,
      renderFilterTrigger,
      filterTriggerMode,
      filterTriggerProps,
      renderFilter,
      filterFormProps,
      filterConfig,
      defaultFilterValues,
      onFilter,
      onFilterReset,
    ]);

    // 排序按钮UI
    const sortItemElement = useMemo(() => {
      return isShowSortTrigger ? (
        <SortItem
          disabled={disabled}
          sortTriggerMode={sortTriggerMode}
          sortTriggerProps={sortTriggerProps}
          renderSort={renderSort}
          sortConfig={sortConfig}
          defaultSortValues={defaultSortValues}
          onSort={onSort}
          onSortReset={onSortReset}
        >
          {(defaultUI) => renderSortTrigger?.(defaultUI)}
        </SortItem>
      ) : null;
    }, [
      disabled,
      isShowSortTrigger,
      renderSortTrigger,
      sortTriggerMode,
      sortTriggerProps,
      renderSort,
      sortConfig,
      defaultSortValues,
      onSort,
      onSortReset,
    ]);

    // 视图设置按钮UI
    const viewSettingItemElement = useMemo(() => {
      return isShowViewSettingTrigger ? (
        <ViewSettingItem
          disabled={disabled}
          viewSettingTriggerMode={viewSettingTriggerMode}
          viewSettingTriggerProps={viewSettingTriggerProps}
          renderViewSetting={renderViewSetting}
          viewSettingConfig={viewSettingConfig}
          defaultViewSettingValue={defaultViewSettingValue}
          onViewSetting={onViewSetting}
          onViewSettingReset={onViewSettingReset}
        >
          {(defaultUI) => renderViewSettingTrigger?.(defaultUI)}
        </ViewSettingItem>
      ) : null;
    }, [
      disabled,
      isShowViewSettingTrigger,
      renderViewSettingTrigger,
      viewSettingTriggerMode,
      viewSettingTriggerProps,
      renderViewSetting,
      viewSettingConfig,
      defaultViewSettingValue,
      onViewSetting,
      onViewSettingReset,
    ]);

    // 工具栏的按钮组
    const toolbarItemElements = useMemo(() => {
      const config = toolbarConfig?.(
        [filterItemElement, sortItemElement, viewSettingItemElement].filter(
          (t) => !!t,
        ) as ReactElement[],
      ) ?? [filterItemElement, sortItemElement, viewSettingItemElement];

      return config
        .map((el) => {
          if (isElement(el)) return el;

          return <NormalItem disabled={disabled} {...(el as ToolbarConfigItem)} />;
        })
        .filter((t) => !!t) as ReactElement[];
    }, [toolbarConfig, filterItemElement, sortItemElement, viewSettingItemElement, disabled]);

    // 工具栏可显示的按钮
    const displayItemElements = useMemo(() => {
      return (
        <div className={`${selectorPrefix}-tool-items`}>
          {toolbarItemElements.slice(0, toolbarCollapseCount).map((_item) => (
            <div className={classNames(`${selectorPrefix}-tool-item`)}>{_item}</div>
          ))}
        </div>
      );
    }, [toolbarItemElements, toolbarCollapseCount]);

    // 菜单中的按钮
    const popoverMenu = useMemo(() => {
      const popoverMenuElements = toolbarItemElements.slice(toolbarCollapseCount);

      if (!!popoverMenuElements.length) {
        return (
          <Popover
            placement="bottom-start"
            trigger="click"
            content={
              <ul className={`${selectorPrefix}-tool-menu-items`}>
                {popoverMenuElements.map((_element) => (
                  <li className={`${selectorPrefix}-tool-menu-item`}>{_element}</li>
                ))}
              </ul>
            }
          >
            <div className={`${selectorPrefix}-tool-menu-trigger`}>
              <HolderOutlined />
            </div>
          </Popover>
        );
      }

      return null;
    }, [toolbarItemElements, toolbarCollapseCount]);

    // beforeToolBarElement
    const beforeToolBarElement = useMemo(() => beforeToolBarRender?.(), [beforeToolBarRender]);

    // beforeToolBarWrapperElement
    const beforeToolBarWrapperElement = useMemo(() => {
      return (
        <div
          className={classNames(`${selectorPrefix}-before`, beforeToolBarRenderClassName ?? '')}
          style={beforeToolBarRenderStyle ?? {}}
        >
          {beforeToolBarElement}
        </div>
      );
    }, [beforeToolBarElement, beforeToolBarRenderClassName, beforeToolBarRenderStyle]);

    // afterToolBarElement
    const afterToolBarElement = useMemo(() => afterToolBarRender?.(), [afterToolBarRender]);

    // afterToolBarWrapperElement
    const afterToolBarWrapperElement = useMemo(() => {
      return (
        <div
          className={classNames(`${selectorPrefix}-after`, afterToolBarRenderClassName ?? '')}
          style={afterToolBarRenderStyle ?? {}}
        >
          {afterToolBarElement}
        </div>
      );
    }, [afterToolBarRenderClassName, afterToolBarRenderStyle, afterToolBarElement]);

    /**
     * renderChildren
     * @description 渲染children
     */
    function renderChildren() {
      const elements: ReactNode[] = [];

      if (showTotal) {
        elements.push(showTotalElementWrapper);
      }

      elements.push(displayItemElements);

      elements.push(popoverMenu);

      return elements.filter((t) => !!t);
    }

    return (
      // Wrapper
      <div className={classNames(`${selectorPrefix}-wrapper`, className ?? '')} style={style ?? {}}>
        {/* before */}
        {beforeToolBarElement && beforeToolBarWrapperElement}

        {/* inner */}
        <div className={`${selectorPrefix}-inner`}>
          {renderToolBar?.(toolbarItemElements, showTotalElement, disabled) ?? renderChildren()}
        </div>

        {/* after */}
        {afterToolBarElement && afterToolBarWrapperElement}
      </div>
    );
  },
);

ToolBar.displayName = 'ToolBar';

export default ToolBar;
