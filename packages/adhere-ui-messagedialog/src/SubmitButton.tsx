import { Button } from 'antd';
import React, { useState } from 'react';
import type { FC } from 'react';

import type { SubmitButtonProps } from './types';

/**
 * SubmitButton
 * @param props
 * @constructor
 */
const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Button
      loading={loading}
      {...props}
      onClick={(e) => {
        if (!props.onClick) return;

        if (loading) return;

        setLoading(true);

        props
          .onClick(e)
          ?.then?.(() => setLoading(false))
          ?.catch?.(() => setLoading(false));
      }}
    >
      {props.children}
    </Button>
  );
};

export default SubmitButton;
