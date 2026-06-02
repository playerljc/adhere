import React from 'react';
import type { PropsWithoutRef, RefAttributes } from 'react';

import Form from '../Form';
import type { FormHandler, FormProps } from '../types';

/**
 * View
 * @description
 * 复用 Form 的运行时渲染能力，但不强制传入 disabled。
 * - 未传 disabled：不覆盖控件自身 fieldProps.disabled
 * - 传了 disabled：以传入值覆盖（遵循 Form 的 disabled 优先级规则）
 */
const View = React.memo(
  React.forwardRef<FormHandler, PropsWithoutRef<FormProps> & RefAttributes<FormHandler>>(
    (props, ref) => {
      return <Form ref={ref} {...props} disabled />;
    },
  ),
);

View.displayName = 'View';

export default View;
