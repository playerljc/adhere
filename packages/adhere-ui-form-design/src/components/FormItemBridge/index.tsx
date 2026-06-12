import React, { type ReactNode } from 'react';

export type DesignFormInjectedProps = {
  value?: unknown;
  onChange?: (...args: any[]) => void;
  checked?: boolean;
  targetKeys?: string[];
};

type FormItemBridgeProps = DesignFormInjectedProps & {
  children: (props: DesignFormInjectedProps) => ReactNode;
};

/**
 * Form.Item 只能向直接子组件注入 value/onChange（或 targetKeys/checked）。
 * 通过 render props 将表单受控属性转交给 ValueDesign 的 children 回调。
 */
export default function FormItemBridge({
  children,
  value,
  onChange,
  checked,
  targetKeys,
}: FormItemBridgeProps) {
  return <>{children({ value, onChange, checked, targetKeys })}</>;
}
