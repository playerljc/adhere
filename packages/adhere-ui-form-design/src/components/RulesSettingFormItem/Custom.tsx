import React, { type FC } from 'react';

import { TextArea } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';

import I18nChangeFormItem from '../I18nChangeFormItem';
import MonacoEditorFormItem from '../MonacoEditorFormItem';
import { SlotEndLabel } from '../SlotLabel';
import TableGridLayout, { Label, Value } from '../TableGridLayout';
import type { RuleConfig } from './index';

export interface CustomProps {
  rule: RuleConfig;
  onChange: (value: RuleConfig) => void;
}

const { useItemsRef } = Hooks;

const Custom: FC<CustomProps> = ({ rule, onChange }) => {
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
              key: 'custom',
              require: false,
              label: <Label>{Intl.get('custom')}</Label>,
              value: (
                <Value>
                  <MonacoEditorFormItem
                    value={rule.validator}
                    onChange={(_value) => {
                      onChange({
                        ...rule,
                        validator: _value,
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

export default Custom;
