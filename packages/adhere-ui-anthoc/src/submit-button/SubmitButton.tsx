import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import type { FC } from 'react';
import React, { useState } from 'react';

import { createFactory } from '../util';

const SubmitButtonHOC: typeof Button & {
  defaultProps?: Partial<ButtonProps>;
} = createFactory(
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
export default SubmitButtonHOC;
