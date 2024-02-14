import type { RadioProps as AntMobileRadioProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { FilterRadioProps } from '../types';
import { DisplayNameInternal } from '../types';
import useListFilter from '../useListFilter';
import RadioGroup from './RadioGroup';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-radio';

const InternalFilterRadio = memo<FilterRadioProps>(
  ({
    className,
    style,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    filterProps,
    ...props
  }) =>
    useListFilter<AntMobileRadioProps>({
      options: props?.options ?? [],
      filterProps,
      wrapperClassName: classNames(selectorPrefix, className ?? ''),
      wrapperStyle: style,
      filterWrapperClassName: classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? ''),
      bodyWrapperClassName: classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? ''),
      filterWrapperStyle,
      bodyWrapperStyle,
      children: (options) => <RadioGroup {...props} options={options} />,
    }),
);

const FilterRadio = InternalFilterRadio as DisplayNameInternal<typeof InternalFilterRadio>;
FilterRadio.displayName = 'FilterRadio';

export default FilterRadio;
