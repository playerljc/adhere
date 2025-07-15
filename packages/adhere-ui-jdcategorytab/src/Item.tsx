import classNames from 'classnames';
import React, { memo } from 'react';

import type { JdCategoryTabItemProps } from './types';

const selectorPrefix = 'adhere-ui-jd-category-tab';

/**
 * JdCategoryTab.Item组件
 * JdCategoryTab的子组件，用于渲染标签页内容
 * 
 * @example
 * ```tsx
 * <JdCategoryTab.Item key="category1" className="custom-item">
 *   <div>分类1的详细内容</div>
 * </JdCategoryTab.Item>
 * ```
 */
const JdCategoryTabItem = memo<JdCategoryTabItemProps>((props) => {
  const { children, className = '', style = {} } = props;

  return (
    <li 
      className={classNames(`${selectorPrefix}-tab-item`, className)} 
      style={style}
    >
      {children}
    </li>
  );
});

JdCategoryTabItem.displayName = 'JdCategoryTabItem';

export default JdCategoryTabItem;
