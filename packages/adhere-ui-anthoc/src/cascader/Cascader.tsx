import { Cascader, CascaderProps } from 'antd';
import React, { useMemo } from 'react';

import type { CascaderHOCComponent } from '../types';
import { createFactory, getCascaderValue } from '../util';

const InternalCascader: CascaderHOCComponent = createFactory<CascaderProps>(Cascader, {
  showSearch: {
    filter: (inputValue, path) =>
      path.some((option) => {
        if (typeof option?.label === 'string') {
          return option?.label?.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
        }

        return false;
      }),
  },
  allowClear: true,
  placement: 'bottomLeft',
});

const CascaderHOC: CascaderHOCComponent = ({
  options,
  defaultValue,
  value,
  isHideInvalidValue = true,
  ...restProps
}) => {
  const targetDefaultValue = useMemo(
    () => (isHideInvalidValue ? getCascaderValue({ value: defaultValue, options }) : defaultValue),
    [defaultValue, options, isHideInvalidValue],
  );

  const targetValue = useMemo(
    () => (isHideInvalidValue ? getCascaderValue({ value, options }) : value),
    [value, options, isHideInvalidValue],
  );

  return (
    <InternalCascader
      {...restProps}
      defaultValue={targetDefaultValue}
      value={targetValue}
      options={options}
    />
  );
};

CascaderHOC.displayName = 'Cascader';

export default CascaderHOC;
