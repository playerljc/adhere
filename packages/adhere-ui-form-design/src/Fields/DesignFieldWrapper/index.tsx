/**
 * 这个东西的作用是所有在Editor中的控件，都有这一层包
 * 1. click事件的监
 *   1.1 点击后显示右侧的属性面板
 *   1.2 点击后显示此控件的工具栏
 */
import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC } from 'react';

import { DesignContext } from '../../Design/Context';
import { SELECT_PREFIX } from '../../constant';
import { DesignFieldWrapperProps } from '../../types';

const selectPrefix = `${SELECT_PREFIX}-design-field-wrapper`;

/**
 * DesignFieldWrapper
 */
const DesignFieldWrapper: FC<DesignFieldWrapperProps> = ({ id, children }) => {
  const { getActiveFieldId, setActiveFieldId } = useContext(DesignContext);

  const activeFieldId = getActiveFieldId();

  function onClick() {
    setActiveFieldId(id);
  }

  return (
    <div
      className={classNames(selectPrefix, {
        [`${selectPrefix}-active`]: id === activeFieldId,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DesignFieldWrapper;
