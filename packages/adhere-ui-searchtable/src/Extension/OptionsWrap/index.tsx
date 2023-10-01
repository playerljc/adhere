import { Dropdown } from 'antd';
import classNames from 'classnames';
import React from 'react';

import { EllipsisOutlined } from '@ant-design/icons';
import Split from '@baifendian/adhere-ui-split';

import { selectorPrefix } from '../../SearchTable';

const _selectorPrefix = `${selectorPrefix}-options-wrap`;

/**
 * OptionsWrap
 * @description - 表格操作列的父组件，自动加入分割线
 * @param children
 * @param className
 * @param style
 * @param ellipsisCount
 * @param isEllipsesShowOnlyOneAfterCollapsing
 * @return {JSX.Element}
 */
export default ({
  className = '',
  style = {},
  ellipsisCount = 3,
  isEllipsesShowOnlyOneAfterCollapsing = false,
  children,
}) => {
  let result;

  if (children.length <= 1) {
    result = children;
  } else {
    const cloneChildren = React.Children.toArray(children);

    let currentChildren = cloneChildren.filter((t) => {
      if (typeof t === 'object' && 'props' in t && 'conditional' in t.props) {
        if (t.props.conditional) return true;

        if ('noMatch' in t.props) {
          if (t.props.noMatch instanceof Function) {
            return !!t.props.noMatch();
          }
        }

        return false;
      }

      return true;
    });

    if (currentChildren.length <= 1) {
      result = children;
    } else {
      const currentEllipsisCount = ellipsisCount <= 0 ? 3 : ellipsisCount;

      if (currentChildren.length >= currentEllipsisCount) {
        const showOnlyOneDisplay = isEllipsesShowOnlyOneAfterCollapsing;
        const displayEndIndex = showOnlyOneDisplay ? 1 : ellipsisCount - 1;
        const ellipseStartIndex = showOnlyOneDisplay ? 1 : ellipsisCount - 1;

        currentChildren = [
          ...currentChildren.slice(0, displayEndIndex),
          <Dropdown
            key="menu"
            menu={{
              items: currentChildren.slice(ellipseStartIndex).map((_v) => ({
                // @ts-ignore
                key: _v.key,
                label: _v,
              })),
            }}
          >
            <a href="#">
              <EllipsisOutlined />
            </a>
          </Dropdown>,
        ];
      }

      result = [...currentChildren];

      // clone   0 1 2 3 4 5
      // current 0 1 2 3 4
      for (let i = 0; i <= currentChildren.length - 2; i++) {
        const index = result.findIndex((t) => t === currentChildren[i]);
        result.splice(index + 1, 0, <Split direction="horizontal" />);
      }
    }
  }

  return (
    <div className={classNames(_selectorPrefix, className)} style={style ?? {}}>
      {result}
    </div>
  );
};
