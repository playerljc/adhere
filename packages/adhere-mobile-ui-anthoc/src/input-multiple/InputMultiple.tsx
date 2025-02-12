import { AddOutline, CloseOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, { FC, useMemo, useState } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Hooks from '@baifendian/adhere-ui-hooks';
import Space from '@baifendian/adhere-ui-space';
import Intl from '@baifendian/adhere-util-intl';

import Input from '../input';
import Selector from '../selector';
import type { InputMultipleProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-anthoc-input-multiple';

const { usePropToState } = Hooks;

/**
 * InputMultiple
 * @param className
 * @param style
 * @param tagWrapperClassName
 * @param inputProps
 * @param renderAdd
 * @param renderClear
 * @param isCheckAll
 * @param options
 * @param value
 * @param onChange
 */
const InputMultiple: FC<InputMultipleProps<string>> = ({
  className,
  style,
  selectorWrapperClassName,
  selectorWrapperStyle,
  inputProps,
  selectorProps,
  renderAdd,
  renderClear,
  isCheckAll,
  isFilter,
  options,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState('');

  const [selectOptions, setSelectOptions] = usePropToState(options);

  const [targetValue, setTargetValue] = usePropToState(value);

  const targetSelectorProps = useMemo(() => selectorProps ?? {}, [selectorProps]);

  const isCheckAllTarget = useMemo(() => !!isCheckAll, [isCheckAll]);

  const isFilterTarget = useMemo(() => !!isFilter, [isFilter]);

  const selectorOptions = useMemo(() => {
    return (selectOptions ?? []).map((t) => ({
      ...t,
      description: t.label,
    }));
  }, [selectOptions]);

  const SelectorComponent = useMemo(() => {
    if (isFilterTarget) {
      if (isCheckAllTarget) {
        return Selector.FilterCheckAllSelector;
      }

      return Selector.FilterSelector;
    } else {
      if (isCheckAllTarget) {
        return Selector.CheckAllSelector;
      }

      return Selector;
    }
  }, [isFilterTarget, isCheckAllTarget]);

  /**
   * onAdd
   */
  function onAdd() {
    const targetInputValue = inputValue.trim();

    if (!targetInputValue) return;

    const item = (selectOptions ?? []).find((t) => t.value === targetInputValue);

    if (!item) {
      setSelectOptions((_options) => {
        return [
          ...(_options ?? []),
          {
            label: inputValue,
            value: inputValue,
          },
        ];
      });
    }
  }

  /**
   * onClear
   */
  function onClear() {
    setSelectOptions([]);

    setInputValue('');

    setTargetValue([]);

    // @ts-ignore
    onChange?.([]);
  }

  return (
    <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
      <FlexLayout direction="horizontal">
        <Space.Group direction="horizontal" size={10}>
          <FlexLayout.Auto>
            <Input
              placeholder={Intl.v('请输入关键字')}
              {...(inputProps ?? {})}
              value={inputValue}
              onChange={(_value) => {
                setInputValue(_value);
              }}
            />
          </FlexLayout.Auto>

          <FlexLayout.Fixed fit>
            <div onClick={onAdd} className={`${selectorPrefix}-btn-wrapper`}>
              {renderAdd?.() ?? <AddOutline className={`${selectorPrefix}-btn`} />}
            </div>
          </FlexLayout.Fixed>

          <FlexLayout.Fixed fit>
            <div onClick={onClear} className={`${selectorPrefix}-btn-wrapper`}>
              {renderClear?.() ?? <CloseOutline className={`${selectorPrefix}-btn`} />}
            </div>
          </FlexLayout.Fixed>
        </Space.Group>
      </FlexLayout>

      <div
        className={classNames(`${selectorPrefix}-tag-wrapper`, selectorWrapperClassName ?? '')}
        style={selectorWrapperStyle ?? {}}
      >
        <SelectorComponent
          multiple
          {...targetSelectorProps}
          options={selectorOptions ?? []}
          value={targetValue}
          onChange={(...params) => {
            setTargetValue(params[0]);
            // @ts-ignore
            onChange?.(...params);
          }}
        />
      </div>
    </div>
  );
};

export default InputMultiple;
