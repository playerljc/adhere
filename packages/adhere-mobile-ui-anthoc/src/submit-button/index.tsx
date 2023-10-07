import { Button, ButtonProps } from 'antd-mobile';
import React, { FC, useState } from 'react';

import { createFactory } from '../util';

export default createFactory(
  (function () {
    const Component: FC<ButtonProps> = (props) => {
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
              // @ts-ignore
              ?.catch?.(() => setLoading(false));
          }}
        >
          {props.children}
        </Button>
      );
    };

    return Component;
  })(),
  {},
);
