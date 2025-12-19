import React, { type FC } from 'react';

import { InputNumberInteger, TextArea } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';

import I18nChangeFormItem from '../I18nChangeFormItem';
import { SlotEndLabel } from '../SlotLabel';
import TableGridLayout, { Label, Value } from '../TableGridLayout';
import type { RuleConfig } from './index';

export interface MinProps {
  rule: RuleConfig;
  onChange: (value: RuleConfig) => void;
}

const { useItemsRef } = Hooks;

const Min: FC<MinProps> = ({ rule, onChange }) => {
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
              key: 'min',
              require: false,
              label: <Label>{Intl.get('min')}</Label>,
              value: (
                <Value>
                  <InputNumberInteger.InputPositiveNumberInteger
                    value={rule.min}
                    onChange={(_value) => {
                      onChange({
                        ...rule,
                        min: _value as number,
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
                  <I18nChangeFormItem getTriggerContainer={() => get('message') as HTMLElement}>
                    {({ onChange, value }) => (
                      <TextArea
                        value={value}
                        placeholder={Intl.get('message')}
                        onChange={(value) => {
                          onChange({
                            ...rule,
                            message: value,
                          });
                        }}
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

export default Min;
