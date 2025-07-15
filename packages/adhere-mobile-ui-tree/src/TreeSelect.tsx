import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import type { FC } from 'react';

import Tree from './Tree';
import type { TreeSelectProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-tree-select';

/**
 * TreeSelect 组件
 * @description 能进行选取的Tree, 其实就是开启checkable模式
 * @param props - 组件属性
 * @param props.className - 自定义类名
 * @param props.style - 自定义样式
 * @param props.treeClassName - 树组件的类名
 * @param props.treeStyle - 树组件的样式
 * @param props.value - 选中的值
 * @param props.onChange - 值变化回调
 * @param props.treeProps - 传递给Tree组件的其他属性
 * @returns TreeSelect组件
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
    (_checkedKeys: string[], _e: any) => {
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
