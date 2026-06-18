import React from 'react';
import type { FormProps } from '../types';
/**
 * View
 * @description
 * 复用 Form 的运行时渲染能力，但不强制传入 disabled。
 * - 未传 disabled：不覆盖控件自身 fieldProps.disabled
 * - 传了 disabled：以传入值覆盖（遵循 Form 的 disabled 优先级规则）
 */
declare const View: React.NamedExoticComponent<Omit<FormProps & React.RefAttributes<any>, "ref"> & React.RefAttributes<any>>;
export default View;
