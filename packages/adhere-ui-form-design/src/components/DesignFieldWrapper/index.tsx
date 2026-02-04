/**
 * 这个东西的作用是所有在Editor中的控件，都有这一层包
 * 1. click事件的监
 *   1.1 点击后显示右侧的属性面板
 *   1.2 点击后显示此控件的工具栏
 */
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import type { FC } from 'react';

import { DesignContext } from '../../Design/Context';
import { SELECT_PREFIX } from '../../constant';
import { DesignFieldWrapperProps, DesignItem } from '../../types';
import { isDesktop } from '../../utils/isDesktop';

const selectPrefix = `${SELECT_PREFIX}-design-field-wrapper`;

/**
 * DesignFieldWrapper
 * @description 设计器中组件的最外层包裹组件
 * 实现的功能
 *  1.捕获组件的click事件
 *  2.显示控件的在设计视图中的工具栏(如删除控件,clone控件......) 当id === getActiveFieldId()时，显示工具栏
 */
const DesignFieldWrapper: FC<DesignFieldWrapperProps> = ({ id, className, style, children }) => {
  const { getActiveFieldId, setActiveFieldId, getItems, getDesignValue, getTerminal } =
    useContext(DesignContext);

  const items = getItems() ?? [];

  const designValue = getDesignValue();

  const terminal = getTerminal();

  const activeFieldId = getActiveFieldId();

  const isActive = id === activeFieldId;

  const item: DesignItem | undefined = useMemo(
    () => items.find((_item) => _item.type === designValue?.type),
    [items, designValue],
  );

  function onClick(e) {
    e.stopPropagation();

    setActiveFieldId(id);
  }

  return (
    <div
      className={classNames(selectPrefix, className, {
        [`${selectPrefix}-active`]: isActive,
      })}
      style={style ?? {}}
      onClick={onClick}
    >
      {/* desktop actions */}
      {!!item && isActive && isDesktop(terminal) && (
        <div className={classNames(`${selectPrefix}-actions`)}>{item?.renderActions?.(id)}</div>
      )}

      {/* mobile actions */}
      {!!item && isActive && !isDesktop(terminal) && (
        <div className={classNames(`${selectPrefix}-actions`)}>
          {item?.renderActionsToMobile?.(id)}
        </div>
      )}

      {children}
    </div>
  );
};

export default DesignFieldWrapper;
