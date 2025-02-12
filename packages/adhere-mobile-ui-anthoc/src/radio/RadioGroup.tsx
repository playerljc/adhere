import { Radio, Space } from 'antd-mobile';
import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import type { RadioGroupProps } from '../types';

const RadioGroup: FC<RadioGroupProps> = ({
  options,
  spaceProps,
  spaceStyle,
  spaceClassName,
  ...radioGroupProps
}) => (
  <Radio.Group {...radioGroupProps}>
    <Space
      className={classNames(spaceClassName ?? '')}
      style={spaceStyle ?? {}}
      direction="vertical"
      block
      {...(spaceProps ?? {})}
    >
      {options?.map?.((t) => (
        <Radio key={t.value} block {...t} />
      ))}
    </Space>
  </Radio.Group>
);

export default RadioGroup;
