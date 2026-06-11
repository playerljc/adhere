import React, { type FC } from 'react';

import { Input } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';

import I18nChangeFormItem from '../I18nChangeFormItem';
import { SlotEndLabel } from '../SlotLabel';
import TableGridLayout, { Label, Value } from '../TableGridLayout';
import type { RuleConfig } from './index';

export interface TreeSelectionRequiredProps {
  rule: RuleConfig;
  onChange: (value: RuleConfig) => void;
}

const { useItemsRef } = Hooks;

const TreeSelectionRequired: FC<TreeSelectionRequiredProps> = ({ rule, onChange }) => {
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
                        placeholder={Intl.get('tree_selection_required_message_placeholder')}
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

export default TreeSelectionRequired;
