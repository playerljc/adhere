import { Checkbox } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import type { CheckboxCheckListProps, DisplayNameInternal } from '../types';
import CheckList from './CheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-check-box-check-list';

/**
 * CheckboxCheckList
 * @description 带有全选按钮的竖向CheckboxGroup
 * @constructor
 */
const InternalCheckboxCheckList = memo<CheckboxCheckListProps>(
  ({ className, style, checkListClassName, checkListStyle, ...checkListProps }) => {
    const options = useMemo(
      () =>
        (checkListProps?.options ?? []).map((t) => ({
          ...t,
          title: (
            <Checkbox key={t.value} checked={(checkListProps.value ?? []).includes(t.value)}>
              {t.title}
            </Checkbox>
          ),
        })),
      [checkListProps.options, checkListProps.value],
    );

    const disabled = useMemo(
      () => (checkListProps?.options ?? []).every((t) => t.disabled),
      [checkListProps?.options],
    );

    return (
      <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
        <Checkbox.Group
          value={checkListProps.value}
          onChange={checkListProps.onChange}
          defaultValue={checkListProps.defaultValue}
          disabled={disabled}
        >
          <CheckList
            className={checkListClassName ?? ''}
            style={checkListStyle ?? {}}
            extra={() => null}
            {...checkListProps}
            options={options}
          />
        </Checkbox.Group>
      </div>
    );
  },
);

const CheckboxCheckList = InternalCheckboxCheckList as DisplayNameInternal<
  typeof InternalCheckboxCheckList
>;
CheckboxCheckList.displayName = 'CheckboxCheckList';

export default CheckboxCheckList;
