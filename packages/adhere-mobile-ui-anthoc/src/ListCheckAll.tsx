import classNames from 'classnames';
import React, { useMemo, useRef } from 'react';
import type { FC } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import CheckAllWrapper from './CheckAllWrapper';
import type { ListCheckAllProps } from './types';

const _selectorPrefix = 'adhere-mobile-ui-ant-hoc-list-check-all';

const { useTheme } = ConfigProvider;

const ListCheckAll: FC<ListCheckAllProps> = ({
  checkAllWrapperClassName,
  checkAllWrapperStyle,
  checkAllBodyWrapperClassName,
  checkAllBodyWrapperStyle,
  renderCheckAll,
  checkAllLabel,
  value,
  options,
  onCheckAllChange,
  selectorPrefix,
  childrenOrigin,
}) => {
  const wrapperRef = useRef<HTMLElement | undefined>(undefined);

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'mobile-hoc',
  });

  const CheckAllLabel = useMemo(() => {
    if (checkAllLabel) {
      if (Util.isFunction(checkAllLabel)) {
        return (checkAllLabel as Function)(value);
      }

      return checkAllLabel;
    }

    return Intl.get('select_all');
  }, [checkAllLabel]);

  const checkAllOrigin = useMemo(
    () => (
      <CheckAllWrapper
        value={value ?? []}
        onCheckAllChange={onCheckAllChange as any}
        options={options ?? []}
      >
        {CheckAllLabel}
      </CheckAllWrapper>
    ),
    [value, onCheckAllChange, options],
  );

  return (
    <div
      // @ts-ignore
      ref={wrapperRef}
      className={classNames(selectorPrefix, _selectorPrefix)}
    >
      {renderCheckAll?.(checkAllOrigin, childrenOrigin) ?? (
        <>
          <div
            className={classNames(`${_selectorPrefix}-wrapper`, checkAllWrapperClassName ?? '')}
            style={checkAllWrapperStyle ?? {}}
          >
            {checkAllOrigin}
          </div>

          <div
            className={classNames(`${_selectorPrefix}-body`, checkAllBodyWrapperClassName ?? '')}
            style={checkAllBodyWrapperStyle ?? {}}
          >
            {childrenOrigin}
          </div>
        </>
      )}
    </div>
  );
};

export default ListCheckAll;
