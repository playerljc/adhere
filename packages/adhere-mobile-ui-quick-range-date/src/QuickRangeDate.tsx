import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, { memo, useCallback, useMemo, useState } from 'react';

import { CalendarModal, CheckList, Modal } from '@baifendian/adhere-mobile-ui-anthoc';
import AdhereQuickRangeDate from '@baifendian/adhere-ui-quick-range-date';
import type { ConfigItem } from '@baifendian/adhere-ui-quick-range-date/src/types';
import { DateValue } from '@baifendian/adhere-ui-quick-range-date/src/types';

import type { QuickRangeDateComponent, QuickRangeDateProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-quick-range-date';

function numbersToDate(start: number | undefined, end: number | undefined) {
  if (start && end) {
    return [new Date(start), new Date(end)];
  }

  return undefined;
}

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
    const [selfValue, setSelfValue] = useState(AdhereQuickRangeDate.sync(value));

    const targetConfig = useMemo<ConfigItem[]>(() => {
      if (!config) {
        return [
          {
            type: 'a-d',
            value: 7,
          },
          {
            type: 'a-w',
            value: 1,
          },
          {
            type: 'a-M',
            value: 3,
          },
          {
            type: 'a-Q',
            value: 1,
          },
          {
            type: 'a-y',
            value: 1,
          },
          {
            type: 'a-h',
            value: 24,
          },
          {
            type: 'a-m',
            value: 60,
          },
          {
            type: 'a-s',
            value: 60,
          },
          {
            type: 'a-ms',
            value: 1000,
          },
          {
            type: 'b-d',
            value: 7,
          },
          {
            type: 'b-w',
            value: 1,
          },
          {
            type: 'b-M',
            value: 3,
          },
          {
            type: 'b-Q',
            value: 1,
          },
          {
            type: 'b-y',
            value: 1,
          },
          {
            type: 'b-h',
            value: 24,
          },
          {
            type: 'b-m',
            value: 60,
          },
          {
            type: 'b-s',
            value: 60,
          },
          {
            type: 'b-ms',
            value: 1000,
          },
          {
            type: 'custom',
          },
        ];
      }

      return config;
    }, [config]);

    const renderDefaultElement = useCallback(
      ({ onChange }) => {
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
                  renderTrigger: (_value) => {
                    return AdhereQuickRangeDate.getLabel(
                      selfValue as Omit<DateValue, 'start' | 'end'>,
                    );
                  },
                }}
                onChange={(_value) => {
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
                  onChange={(dates) => {
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
        checkboxCheckListProps,
      ],
    );

    useUpdateEffect(() => {
      setSelfValue(AdhereQuickRangeDate.sync(value));
    }, [value]);

    return (
      <AdhereQuickRangeDate
        className={classNames(selectorPrefix, className ?? '')}
        style={style ?? {}}
        config={targetConfig}
        value={selfValue}
        {...(adhereQuickRangeDateProps ?? {})}
      >
        {({ defaultElement: originDefaultElement, value, onChange }) => {
          const defaultElement = renderDefaultElement({ onChange });

          if (children) {
            return children({ originDefaultElement, defaultElement, value, onChange });
          }

          return defaultElement;
        }}
      </AdhereQuickRangeDate>
    );
  },
);

const QuickRangeDate = InternalQuickRangeDate as QuickRangeDateComponent;

QuickRangeDate.displayName = 'QuickRangeDate';

QuickRangeDate.sync = AdhereQuickRangeDate.sync;

QuickRangeDate.stringValue = AdhereQuickRangeDate.stringValue;

QuickRangeDate.getLabel = AdhereQuickRangeDate.getLabel;

QuickRangeDate.numberToDayjs = AdhereQuickRangeDate.numberToDayjs;

QuickRangeDate.datesToNumbers = AdhereQuickRangeDate.datesToNumbers;

QuickRangeDate.getValueEntityByStringValue = AdhereQuickRangeDate.getValueEntityByStringValue;

export default QuickRangeDate;
