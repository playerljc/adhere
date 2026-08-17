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
import { DesignFieldWrapperProps, DesignItem, DesignValue } from '../../types';
import {
  findTypeById,
  getLabelByType,
  getToolBoxItemByType,
  isDesktop,
  isRootFieldId,
} from '../../utils';

const selectPrefix = `${SELECT_PREFIX}-design-field-wrapper`;

/**
 * DesignFieldWrapper
 * @description 设计器中组件的最外层包裹组件
 * 实现的功能
 *  1.捕获组件的click事件
 *  2.显示控件的在设计视图中的工具栏(如删除控件,clone控件......) 当id === getActiveFieldId()时，显示工具栏
 */
const DesignFieldWrapper: FC<DesignFieldWrapperProps> = ({
  id,
  type: typeProp,
  className,
  style,
  fieldActionTypes,
  children,
}) => {
  const designContext = useContext(DesignContext);

  const {
    mode,
    getActiveFieldId,
    setActiveFieldId,
    getItems,
    getDesignValue,
    getTerminal,
    getToolBox,
  } = designContext;

  const isFormMode = mode === 'form';

  const items = getItems?.() ?? [];

  const designValue = getDesignValue?.();

  const terminal = getTerminal?.();

  const activeFieldId = getActiveFieldId?.();

  const isActive = id === activeFieldId;

  const toolbox = getToolBox?.();

  const fieldType = useMemo(
    () => typeProp ?? findTypeById({ id, designValue }),
    [designValue, id, typeProp],
  );

  const item: DesignItem | undefined = useMemo(() => {
    return items.find((_item) => _item.type === fieldType);
  }, [items, fieldType]);

  const toolBoxItem = useMemo(() => getToolBoxItemByType(fieldType, toolbox), [fieldType, toolbox]);

  function onClick(e) {
    e.stopPropagation();

    setActiveFieldId?.(id);
  }

  // 表单运行时模式：只做透传，不渲染选中态/工具条，不绑定 onClick
  if (isFormMode) {
    return (
      <div className={classNames(selectPrefix, className)} style={style ?? {}}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={classNames(selectPrefix, `${selectPrefix}-design-mode`, className, {
        [`${selectPrefix}-active`]: isActive,
      })}
      style={style ?? {}}
      onClick={onClick}
    >
      {!!item && isActive && isDesktop(terminal) && !isRootFieldId(id) && (
        <div className={classNames(`${selectPrefix}-label`)}>
          {!!toolBoxItem?.icon && (
            <span className={classNames(`${selectPrefix}-label-icon`)}>{toolBoxItem.icon}</span>
          )}
          <span className={classNames(`${selectPrefix}-label-text`)}>
            {getLabelByType(fieldType, toolbox)}
          </span>
        </div>
      )}

      {/* desktop actions */}
      {!!item && isActive && isDesktop(terminal) && !isRootFieldId(id) && (
        <div className={classNames(`${selectPrefix}-actions`)}>
          {item?.renderActions?.(id, fieldActionTypes)}
        </div>
      )}

      {/* mobile actions */}
      {!!item && isActive && !isDesktop(terminal) && (
        <div className={classNames(`${selectPrefix}-actions`)}>
          {item?.renderActionsToMobile?.(id, fieldActionTypes)}
        </div>
      )}

      {children}
    </div>
  );
};

export default DesignFieldWrapper;
