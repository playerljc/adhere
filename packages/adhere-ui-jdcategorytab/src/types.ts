import React from 'react';

export interface IMenuDataItem {
  key: string;
  name: string;
  properties: any;
}

/**
 * IJdCategoryTabProps
 * @interface IJdCategoryTabProps
 */
export interface IJdCategoryTabProps {
  className?: string;
  style?: React.CSSProperties;
  menuClassName: string;
  menuStyle: React.CSSProperties;
  menuInnerClassName: string;
  menuInnerStyle: React.CSSProperties;
  tabClassName: string;
  tabStyle: React.CSSProperties;
  menuItemClassName: string;
  menuItemStyle: React.CSSProperties;
  menuData: Array<IMenuDataItem>;
  activeKey: string;
  renderMenuItem: Function | undefined;
  onChange: Function;
  onBeforeChange: Function;
}

export interface IJdCategoryTabState {
  activeKey: string;
}
