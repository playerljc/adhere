import React, { memo, useMemo } from 'react';

import ListCheckAll from '../ListCheckAll';
import type { CheckAllSelectorProps, DisplayNameInternal } from '../types';
import Selector from './Selector';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-check-all-selector';

/**
 * CheckAllSelector
 * @description CheckAllSelector
 * @constructor
 */
const InternalCheckAllSelector = memo<CheckAllSelectorProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    checkAllBodyWrapperClassName,
    checkAllBodyWrapperStyle,
    renderCheckAll,
    checkAllLabel,
    onCheckAllChange,
    ...selectorProps
  }) => {
    const childrenOrigin = useMemo(() => <Selector multiple {...selectorProps} />, [selectorProps]);

    return (
      <ListCheckAll
        {...{
          checkAllWrapperClassName,
          checkAllWrapperStyle,
          checkAllBodyWrapperClassName,
          checkAllBodyWrapperStyle,
          renderCheckAll,
          checkAllLabel,
          onCheckAllChange,
          value: selectorProps.value ?? [],
          options: selectorProps?.options?.map((t) => t.value as any) ?? [],
          selectorPrefix,
          childrenOrigin,
        }}
      />
    );
  },
);

const CheckAllSelector = InternalCheckAllSelector as DisplayNameInternal<
  typeof InternalCheckAllSelector
>;
CheckAllSelector.displayName = 'CheckAllSelector';

export default CheckAllSelector;
