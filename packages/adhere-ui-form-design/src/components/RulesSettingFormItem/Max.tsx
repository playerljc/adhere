import React, { type FC } from 'react';

import { Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';

import I18nChangeFormItem from '../I18nChangeFormItem';
import { SlotEndLabel } from '../SlotLabel';
import TableGridLayout, { Label, Value } from '../TableGridLayout';
import type { RuleConfig } from './index';

export interface MaxProps {
  rule: RuleConfig;
  onChange: (value: RuleConfig) => void;
}

const { useItemsRef } = Hooks;

const Max: FC<MaxProps> = ({ rule, onChange }) => {
  const { get, set } = useItemsRef();

  return (
    <TableGridLayout
      layout="vertical"
      data={[
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: ['auto'],
          data: [
            {
              key: 'max',
              require: false,
              label: <Label>{Intl.get('max')}</Label>,
              value: (
                <Value>
                  <InputNumberInteger.InputPositiveNumberInteger
                    value={rule.max}
                    onChange={(_value) => {
                      onChange({
                        ...rule,
                        max: _value as number,
                      });
                    }}
                  />
                </Value>
              ),
            },
            {
              key: 'message',
              require: false,
              label: (
                <SlotEndLabel
                  ref={(node) => {
                    set('message', node);
                  }}
                >
                  {Intl.get('message')}
                </SlotEndLabel>
              ),
              value: (
                <Value>
                  <I18nChangeFormItem
                    value={rule.message}
                    onChange={(nextMessage) => {
                      onChange({
                        ...rule,
                        message: nextMessage,
                      });
                    }}
                    getTriggerContainer={() => get('message') as HTMLElement}
                  >
                    {({ onChange: onMessageChange, value }) => (
                      <Input.OptimizedTextArea
                        value={value}
                        placeholder={Intl.get('message')}
                        showCount={false}
                        onChange={(e) => onMessageChange(e.target.value)}
                      />
                    )}
                  </I18nChangeFormItem>
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  );
};

export default Max;
