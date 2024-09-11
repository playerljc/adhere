import { Button } from 'antd-mobile';
import type { ButtonProps } from 'antd-mobile';
import React, { useState } from 'react';
import type { FC } from 'react';

const InternalSubmitButton: FC<ButtonProps> = (props) => {
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
          // @ts-ignore
          ?.then?.(() => setLoading(false))
          ?.catch?.(() => setLoading(false));
      }}
    >
      {props.children}
    </Button>
  );
};

export default InternalSubmitButton;
