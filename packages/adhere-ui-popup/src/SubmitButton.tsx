import { Button } from 'antd-mobile';
import React, { useState } from 'react';
import type { FC } from 'react';

import type { SubmitButtonProps } from './types';

/**
 * SubmitButton组件
 * @description 带加载状态的提交按钮，自动处理异步操作
 * @param props - 组件属性
 * @constructor
 */
const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!props.onClick || loading) return;

    setLoading(true);

    try {
      const result = await props.onClick(e);
      return result;
    } catch (error) {
      console.error('SubmitButton onClick error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      loading={loading}
      {...props}
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
};

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
