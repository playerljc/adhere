import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import { CalendarModal, CheckList, Modal } from '@baifendian/adhere-mobile-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import AdhereQuickRangeDate from '@baifendian/adhere-ui-quick-range-date';
import type { ConfigItem } from '@baifendian/adhere-ui-quick-range-date/src/types';
import { DateValue } from '@baifendian/adhere-ui-quick-range-date/src/types';

import type { QuickRangeDateComponent, QuickRangeDateProps } from './types';

const { useTheme } = ConfigProvider;

/** CSS选择器前缀 */
const selectorPrefix = 'adhere-mobile-ui-quick-range-date';

/**
 * 将时间戳转换为日期数组
 * @param start - 开始时间戳
 * @param end - 结束时间戳
 * @returns 日期数组或undefined
 */
function numbersToDate(
  start: number | undefined,
  end: number | undefined,
): [Date, Date] | undefined {
  if (start && end) {
    return [new Date(start), new Date(end)];
  }
  return undefined;
}

/**
 * 默认配置项数组
 * 包含常用的日期范围选项
 */
const DEFAULT_CONFIG: ConfigItem[] = [
  { type: 'a-d', value: 7 },
  { type: 'a-w', value: 1 },
  { type: 'a-M', value: 3 },
  { type: 'a-Q', value: 1 },
  { type: 'a-y', value: 1 },
  { type: 'a-h', value: 24 },
  { type: 'a-m', value: 60 },
  { type: 'a-s', value: 60 },
  { type: 'a-ms', value: 1000 },
  { type: 'b-d', value: 7 },
  { type: 'b-w', value: 1 },
  { type: 'b-M', value: 3 },
  { type: 'b-Q', value: 1 },
  { type: 'b-y', value: 1 },
  { type: 'b-h', value: 24 },
  { type: 'b-m', value: 60 },
  { type: 'b-s', value: 60 },
  { type: 'b-ms', value: 1000 },
  { type: 'custom' },
];

/**
 * 内部快速日期范围选择器组件
 * 提供移动端优化的日期范围选择功能
 */
const InternalQuickRangeDate = memo<QuickRangeDateProps>(
  ({
    className,
    style,
    innerClassName,
    innerStyle,
    config,
    value,
    children,
    calendarModalProps,
    checkboxCheckListProps,
    modalTriggerPromptProps,
    ...adhereQuickRangeDateProps
  }) => {
    /** 外层容器引用 */
    const wrapperRef = useRef<HTMLElement | undefined>(undefined);

    /** 内部状态值 */
    const [selfValue, setSelfValue] = useState<DateValue | undefined>(
      AdhereQuickRangeDate.sync(value),
    );

    /** 目标配置项，使用传入的配置或默认配置 */
    const targetConfig = useMemo<ConfigItem[]>(() => {
      return config || DEFAULT_CONFIG;
    }, [config]);

    /**
     * 渲染默认元素
     * @param onChange - 日期变化回调函数
     * @returns 渲染的默认元素
     */
    const renderDefaultElement = useCallback(
      ({ onChange }: { onChange: (value: DateValue) => void }) => {
        return (
          <div
            className={classNames(`${selectorPrefix}-inner`, innerClassName ?? '')}
            style={innerStyle ?? {}}
          >
            <div className={classNames(`${selectorPrefix}-trigger`)}>
              <Modal.TriggerPrompt
                submitAction={{
                  key: 'submit',
                  primary: true,
                  onClick: () => {
                    return Promise.resolve();
                  },
                }}
                popoverTriggerProps={{
                  renderTrigger: (_value: string[]) => {
                    return AdhereQuickRangeDate.getLabel(
                      selfValue as Omit<DateValue, 'start' | 'end'>,
                    );
                  },
                }}
                onChange={(_value: string[]) => {
                  const { type, value } = AdhereQuickRangeDate.getValueEntityByStringValue(
                    _value[0],
                  );

                  onChange({
                    type,
                    value,
                  });
                }}
                value={[AdhereQuickRangeDate.stringValue(selfValue)]}
                {...(modalTriggerPromptProps ?? {})}
              >
                <CheckList.CheckboxCheckList
                  options={targetConfig.map((t) => {
                    const entity: Omit<DateValue, 'start' | 'end'> = {
                      type: t.type,
                      value: t.value,
                    };

                    return {
                      title: AdhereQuickRangeDate.getLabel(entity),
                      value: AdhereQuickRangeDate.stringValue(entity),
                    };
                  })}
                  {...(checkboxCheckListProps ?? {})}
                />
              </Modal.TriggerPrompt>
            </div>

            {selfValue?.type === 'custom' && (
              <div className={`${selectorPrefix}-range-calendar-modal`}>
                <CalendarModal.RangeCalendarModal
                  selectionMode="range"
                  value={numbersToDate(selfValue?.start, selfValue?.end)}
                  onChange={(dates: [Date, Date] | null) => {
                    onChange({
                      type: 'custom',
                      value: undefined,
                      start: dates ? dates[0].getTime() : undefined,
                      end: dates ? dates[1].getTime() : undefined,
                    });
                  }}
                  {...(modalTriggerPromptProps ?? {})}
                />
              </div>
            )}
          </div>
        );
      },
      [
        selfValue,
        targetConfig,
        checkboxCheckListProps,
        modalTriggerPromptProps,
        innerClassName,
        innerStyle,
      ],
    );

    /** 使用主题配置 */
    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'mobile',
      displayName: 'QuickRangeDate',
    });

    /** 监听外部value变化，同步内部状态 */
    useUpdateEffect(() => {
      setSelfValue(AdhereQuickRangeDate.sync(value));
    }, [value]);

    return (
      <AdhereQuickRangeDate
        // @ts-ignore
        ref={wrapperRef}
        className={classNames(selectorPrefix, className ?? '')}
        style={style ?? {}}
        config={targetConfig}
        value={selfValue}
        {...(adhereQuickRangeDateProps ?? {})}
      >
        {({ defaultElement: originDefaultElement, value, onChange }) => {
          const defaultElement = renderDefaultElement({
            onChange: onChange || (() => {}),
          });

          if (children) {
            return children({ originDefaultElement, defaultElement, value, onChange });
          }

          return defaultElement;
        }}
      </AdhereQuickRangeDate>
    );
  },
);

/**
 * 移动端快速日期范围选择器组件
 * 基于基础快速日期范围选择器，提供移动端优化的用户体验
 */
const QuickRangeDate = InternalQuickRangeDate as QuickRangeDateComponent;

/** 组件显示名称 */
QuickRangeDate.displayName = 'QuickRangeDate';

/** 同步外部值到内部状态 */
QuickRangeDate.sync = AdhereQuickRangeDate.sync;

/** 将日期值转换为字符串 */
QuickRangeDate.stringValue = AdhereQuickRangeDate.stringValue;

/** 获取日期值的显示标签 */
QuickRangeDate.getLabel = AdhereQuickRangeDate.getLabel;

/** 将数字转换为dayjs对象 */
QuickRangeDate.numberToDayjs = AdhereQuickRangeDate.numberToDayjs;

/** 将日期数组转换为数字数组 */
QuickRangeDate.datesToNumbers = AdhereQuickRangeDate.datesToNumbers;

/** 根据字符串值获取值实体 */
QuickRangeDate.getValueEntityByStringValue = AdhereQuickRangeDate.getValueEntityByStringValue;

export default QuickRangeDate;
