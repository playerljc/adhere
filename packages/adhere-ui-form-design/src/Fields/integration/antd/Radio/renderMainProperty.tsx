import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { I18nChangeFormItem, SlotEndLabel, WhetherRadioHorizontalDict } from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';
import type { GetDefaultFormItemsCtx } from '../../../../utils';

/**
 * MainProperty - single Radio basic props per https://ant.design/components/radio-cn#api
 * Basic only: disabled; value (any) can be set for the option value when used as single radio
 */
function getDefaultFormItems(
  _designValue: DesignValueProps,
  ctx: GetDefaultFormItemsCtx,
): DataItemRow[] {
  const { titleLabelSlot } = ctx;

  return [
    {
      key: 'text',
      require: false,
      label: (
        <SlotEndLabel
          ref={(node) => {
            titleLabelSlot.set('text', node);
          }}
        >
          {Intl.get('text')}：
        </SlotEndLabel>
      ),
      value: (
        <Value>
          <Form.Item name="text">
            <I18nChangeFormItem getTriggerContainer={() => titleLabelSlot.get('text') as HTMLElement}>
              {({ onChange, value }) => (
                <Input.OptimizedInput
                  value={value}
                  placeholder={Intl.get('text')}
                  maxLength={200}
                  onChange={(e) => onChange(e.target.value)}
                  showCount={false}
                  allowClear
                />
              )}
            </I18nChangeFormItem>
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'disabled',
      require: false,
      label: <Label>{Intl.get('disabled')}：</Label>,
      value: (
        <Value>
          <Form.Item name="disabled">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
  ];
}

const MainProperty = createMainProperty({
  formName: 'antRadioMainProperty',
  getDefaultFormItems,
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
