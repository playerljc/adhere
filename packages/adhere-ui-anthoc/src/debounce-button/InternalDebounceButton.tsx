import { useDebounceFn } from 'ahooks';

import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import React, { FC } from 'react';

export interface DebounceButtonProps extends ButtonProps {
  debounceWait?: number;
}

const InternalDebounceButton: FC<DebounceButtonProps> = ({
  debounceWait = 300,
  onClick,
  ...rest
}) => {
  const { run } = useDebounceFn(
    (e: any) => {
      onClick?.(e);
    },
    { wait: debounceWait },
  );
  return <Button {...rest} onClick={run} />;
};
export default InternalDebounceButton;
