import classNames from 'classnames';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import { SELECT_PREFIX } from '../../constant';

const prefixCls = `${SELECT_PREFIX}-disabled-text`;

export interface DisabledTextProps extends PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>> {
  /**
   * 子元素内容
   */
  children?: React.ReactNode;
}

/**
 * 禁用文本组件
 * 用于在表单设计器中显示禁用状态的文本内容
 */
const DisabledText = memo<
  PropsWithoutRef<DisabledTextProps> & RefAttributes<HTMLDivElement>
>(
  forwardRef<HTMLDivElement, DisabledTextProps>(({ children, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={classNames(prefixCls, className)}
      >
        {children}
      </div>
    );
  }),
);

export default DisabledText;