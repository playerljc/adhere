import classNames from 'classnames';
import React from 'react';

import Split from '@baifendian/adhere-ui-split';

import { selectorPrefix } from '../../SearchTable';

const _selectorPrefix = `${selectorPrefix}-optionswrap`;

/**
 * OptionsWrap
 * @description - 表格操作列的父组件，自动加入分割线
 * @param children
 * @param className
 * @param style
 * @return {JSX.Element}
 */
export default ({ children, className = '', style = {} }) => {
  let result;

  if (children.length <= 1) {
    result = children;
  } else {
    // const cloneChildren = children.map((elm) =>
    //   React.cloneElement(elm, { ...elm.props }, elm.props.children),
    // );
    const cloneChildren = React.Children.toArray(children);

    const filter = cloneChildren.filter((t) => {
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

    if (filter.length <= 1) {
      result = children;
    } else {
      for (let i = 0; i <= filter.length - 2; i++) {
        const index = cloneChildren.findIndex((t) => t === filter[i]);
        cloneChildren.splice(index + 1, 0, <Split direction="horizontal" />);
      }

      result = cloneChildren;
    }
  }

  return (
    <div className={classNames(_selectorPrefix, className)} style={style || {}}>
      {result}
    </div>
  );
};
