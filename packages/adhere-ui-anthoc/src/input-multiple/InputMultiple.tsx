import classNames from 'classnames';
import React, { FC, useMemo, useState } from 'react';

import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Hooks from '@baifendian/adhere-ui-hooks';
import Space from '@baifendian/adhere-ui-space';
import Intl from '@baifendian/adhere-util-intl';

import Input from '../input';
import Tag from '../tag';
import type { InputMultipleOptionsItem, InputMultipleProps } from '../types';

const selectorPrefix = 'adhere-ui-anthoc-input-multiple';

const { usePropToState } = Hooks;

/**
 * InputMultiple
 * @param className
 * @param style
 * @param tagWrapperClassName
 * @param tagWrapperStyle
 * @param inputProps
 * @param tagProps
 * @param renderAdd
 * @param renderClear
 * @param direction
 * @param isCheckAll
 * @param options
 * @param value
 * @param onChange
 */
const InputMultiple: FC<InputMultipleProps> = ({
  className,
  style,
  tagWrapperClassName,
  tagWrapperStyle,
  inputProps,
  tagProps,
  renderAdd,
  renderClear,
  direction,
  isCheckAll,
  options,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState('');

  const [selectOptions, setSelectOptions] = usePropToState(options);

  const [targetValue, setTargetValue] = usePropToState(value);

  const targetTagProps = useMemo(() => tagProps ?? {}, [tagProps]);

  const targetDirection = useMemo(() => direction ?? 'horizontal', [direction]);

  const isCheckAllTarget = useMemo(() => !!isCheckAll, [isCheckAll]);

  const tagOptions = useMemo(() => {
    return ((selectOptions ?? []) as InputMultipleOptionsItem[]).map((t) => ({
      value: t.value,
      children: t.label,
    }));
  }, [selectOptions]);

  const TagComponent = useMemo(() => {
    if (targetDirection === 'vertical') {
      if (isCheckAllTarget) {
        return Tag.VerticalCheckAllCheckableTagGroup;
      }
      return Tag.VerticalCheckableTagGroup;
    }

    if (targetDirection === 'horizontal') {
      if (isCheckAllTarget) {
        return Tag.HorizontalCheckAllCheckableTagGroup;
      }
      return Tag.HorizontalCheckableTagGroup;
    }

    return Tag.HorizontalCheckableTagGroup;
  }, [targetDirection, isCheckAllTarget]);

  /**
   * onAdd
   */
  function onAdd() {
    const targetInputValue = inputValue.trim();

    if (!targetInputValue) return;

    const item = ((selectOptions ?? []) as InputMultipleOptionsItem[]).find(
      (t) => t.value === targetInputValue,
    );

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
  }

  return (
    <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
      <FlexLayout direction="horizontal">
        <Space.Group direction="horizontal" size={10}>
          <FlexLayout.Auto>
            <Input
              placeholder={Intl.v('请输入关键字')}
              showCount={false}
              allowClear={false}
              {...(inputProps ?? {})}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </FlexLayout.Auto>

          <FlexLayout.Fixed fit>
            <div onClick={onAdd} className={`${selectorPrefix}-btn-wrapper`}>
              {renderAdd?.() ?? <PlusOutlined className={`${selectorPrefix}-btn`} />}
            </div>
          </FlexLayout.Fixed>

          <FlexLayout.Fixed fit>
            <div onClick={onClear} className={`${selectorPrefix}-btn-wrapper`}>
              {renderClear?.() ?? <CloseOutlined className={`${selectorPrefix}-btn`} />}
            </div>
          </FlexLayout.Fixed>
        </Space.Group>
      </FlexLayout>

      <div
        className={classNames(`${selectorPrefix}-tag-wrapper`, tagWrapperClassName ?? '')}
        style={tagWrapperStyle ?? {}}
      >
        <TagComponent
          mode="multiple"
          {...targetTagProps}
          wrap
          options={tagOptions ?? []}
          value={targetValue}
          onChange={(_value) => {
            setTargetValue(_value);
            onChange?.(_value);
          }}
        />
      </div>
    </div>
  );
};

export default InputMultiple;
