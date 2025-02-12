import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import type { FC } from 'react';

import Tree from './Tree';
import type { TreeSelectProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-tree-select';

/**
 * TreeSelect
 * @description 能进行选取的Tree, 其实就是开启checkable模式
 * @param {string} className
 * @param {CSSProperties} style
 * @param {string} treeClassName
 * @param {CSSProperties} treeStyle
 * @param {string[]} value
 * @param {TreeProps['onCheck']} onChange
 * @param {Omit<TreeProps, 'className' | 'style' | 'checkable' | 'onCheck'>} treeProps
 * @constructor
 */
const TreeSelect: FC<TreeSelectProps> = ({
  className,
  style,
  treeClassName,
  treeStyle,
  value,
  onChange,
  ...treeProps
}) => {
  const targetValue = useMemo(() => value ?? [], [value]);

  const targetOnChange = useCallback(
    (_checkedKeys, _e) => {
      onChange?.(_checkedKeys, _e);
    },
    [onChange],
  );

  return (
    <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
      <Tree
        {...(treeProps ?? {})}
        className={treeClassName}
        style={treeStyle ?? {}}
        checkable
        checkedKeys={targetValue}
        onCheck={targetOnChange}
      />
    </div>
  );
};

export default TreeSelect;
