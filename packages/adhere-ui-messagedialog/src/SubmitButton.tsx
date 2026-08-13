import { Button } from 'antd';
import React, { useState } from 'react';
import type { FC } from 'react';

import type { SubmitButtonProps } from './types';

/**
 * SubmitButton组件
 * 带加载状态的提交按钮组件
 * 
 * @param props - 按钮属性
 * @returns 提交按钮组件
 */
const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Button
      {...props}
      loading={loading}
      onClick={async (e) => {
        if (!props.onClick) return;

        if (loading) return;

        setLoading(true);

        try {
          await props.onClick(e);
        } catch (error) {
          console.error('SubmitButton onClick error:', error);
        } finally {
          setLoading(false);
        }
      }}
    >
      {props.children}
    </Button>
  );
};

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
