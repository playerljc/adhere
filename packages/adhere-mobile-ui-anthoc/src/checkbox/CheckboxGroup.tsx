import { Checkbox, Space } from 'antd-mobile';
import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import type { CheckboxGroupProps } from '../types';

const InternalCheckbox: FC<CheckboxGroupProps> = ({
  options,
  spaceProps,
  spaceClassName,
  spaceStyle,
  ...checkboxGroupProps
}) => (
  <Checkbox.Group {...checkboxGroupProps}>
    <Space
      className={classNames(spaceClassName ?? '')}
      style={spaceStyle ?? {}}
      direction="vertical"
      block
      {...(spaceProps ?? {})}
    >
      {options?.map?.((t) => (
        <Checkbox key={t.value} block {...t} />
      ))}
    </Space>
  </Checkbox.Group>
);

export default InternalCheckbox;
