import type { DropdownProps } from 'antd';
import classNames from 'classnames';
import React from 'react';

import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown } from '@baifendian/adhere-ui-anthoc';
import Split from '@baifendian/adhere-ui-split';

import { selectorPrefix } from '../../SearchTable';

const _selectorPrefix = `${selectorPrefix}-options-wrap`;

export interface OptionsWrapProps {
  className?: string;
  style?: React.CSSProperties;
  ellipsisCount?: number;
  isEllipsesShowOnlyOneAfterCollapsing?: boolean;
  renderEllipsis?: () => React.ReactElement;
  children?: any;
  more?: DropdownProps;
  /**
   * Split 分割条大小，数字为像素，字符串可带单位
   */
  size?: string | number;
}

/**
 * OptionsWrap
 * @description - 表格操作列的父组件，自动加入分割线
 * @param children
 * @param className
 * @param style
 * @param ellipsisCount
 * @param isEllipsesShowOnlyOneAfterCollapsing
 * @param renderEllipsis
 * @param more
 * @param size
 * @return {JSX.Element}
 */
const OptionsWrap: React.FC<OptionsWrapProps> = ({
  className = '',
  style = {},
  ellipsisCount = 5,
  isEllipsesShowOnlyOneAfterCollapsing = false,
  renderEllipsis,
  children,
  more,
  size,
}): React.ReactElement => {
  let result;

  if (children.length <= 1) {
    result = children;
  } else {
    const cloneChildren = React.Children.toArray(children);

    let currentChildren = cloneChildren.filter((t) => {
      if (React.isValidElement(t)) {
        const props: any = (t as any).props;
        if (props && 'conditional' in props) {
          if (props.conditional) return true;

          if ('noMatch' in props) {
            if (typeof props.noMatch === 'function') {
              return !!props.noMatch();
            }
          }

          return false;
        }
      }

      return true;
    });

    if (currentChildren.length <= 1) {
      result = children;
    } else {
      const currentEllipsisCount = ellipsisCount <= 0 ? 3 : ellipsisCount;

      if (isEllipsesShowOnlyOneAfterCollapsing || currentChildren.length >= currentEllipsisCount) {
        const showOnlyOneDisplay = isEllipsesShowOnlyOneAfterCollapsing;
        const displayEndIndex = showOnlyOneDisplay ? 1 : ellipsisCount - 1;
        const ellipseStartIndex = showOnlyOneDisplay ? 1 : ellipsisCount - 1;

        currentChildren = [
          ...currentChildren.slice(0, displayEndIndex),
          <Dropdown
            styles={{
              root: {
                zIndex: 19999,
              },
            }}
            {...(more ?? {})}
            key="menu"
            menu={{
              items: currentChildren.slice(ellipseStartIndex).map((_v) => ({
                // @ts-ignore
                key: _v.key,
                label: _v,
              })),
            }}
          >
            {renderEllipsis?.() ?? (
              <a href="#">
                <EllipsisOutlined />
              </a>
            )}
          </Dropdown>,
        ];
      }

      result = [...currentChildren];

      // clone   0 1 2 3 4 5
      // current 0 1 2 3 4
      for (let i = 0; i <= currentChildren.length - 2; i++) {
        const index = result.findIndex((t) => t === currentChildren[i]);
        result.splice(index + 1, 0, <Split direction="horizontal" size={size} />);
      }
    }
  }

  return (
    <div className={classNames(_selectorPrefix, className)} style={style ?? {}}>
      {result}
    </div>
  );
};

OptionsWrap.displayName = 'OptionsWrap';

export default OptionsWrap;
