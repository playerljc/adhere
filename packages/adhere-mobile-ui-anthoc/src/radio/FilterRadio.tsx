import type { RadioProps as AntMobileRadioProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import ListFilter from '../ListFilter';
import type { FilterRadioProps } from '../types';
import { DisplayNameInternal } from '../types';
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
    renderEmpty,
    ...props
  }) => (
    <ListFilter<AntMobileRadioProps>
      options={props?.options ?? []}
      filterProps={filterProps}
      wrapperClassName={classNames(selectorPrefix, className ?? '')}
      wrapperStyle={style ?? {}}
      filterWrapperClassName={classNames(`${selectorPrefix}-filter`, filterWrapperClassName ?? '')}
      bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
      filterWrapperStyle={filterWrapperStyle ?? {}}
      bodyWrapperStyle={bodyWrapperStyle ?? {}}
      renderEmpty={renderEmpty}
      children={(options) => <RadioGroup {...props} options={options} />}
    />
  ),
);

const FilterRadio = InternalFilterRadio as DisplayNameInternal<typeof InternalFilterRadio>;
FilterRadio.displayName = 'FilterRadio';

export default FilterRadio;
