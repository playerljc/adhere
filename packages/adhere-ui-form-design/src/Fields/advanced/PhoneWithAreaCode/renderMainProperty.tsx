import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  I18nChangeFormItem,
  PhoneAreaCodeSelectStandardDict,
  SlotEndLabel,
  WhetherRadioHorizontalDict,
  buildFormPropertyPlaceholderRow,
} from '../../../components';
import { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../utils';
import type { GetDefaultFormItemsCtx } from '../../../utils';

function getDefaultFormItems(
  _designValue: DesignValueProps,
  ctx: GetDefaultFormItemsCtx,
): DataItemRow[] {
  const { titleLabelSlot } = ctx;

  return [
    {
      key: 'defaultCode',
      require: false,
      label: <Label>{Intl.get('area_code')}：</Label>,
      value: (
        <Value>
          <Form.Item name="defaultCode">
            <PhoneAreaCodeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),
    {
      key: 'placeholder',
      require: false,
      label: (
        <SlotEndLabel
          ref={(node) => {
            titleLabelSlot.set('phonePlaceholder', node);
          }}
        >
          {Intl.get('phone_number')}：
        </SlotEndLabel>
      ),
      value: (
        <Value>
          <Form.Item name="placeholder">
            <I18nChangeFormItem
              getTriggerContainer={() => titleLabelSlot.get('phonePlaceholder') as HTMLElement}
            >
              {({ onChange, value }) => (
                <Input.OptimizedInput
                  value={value}
                  placeholder={Intl.get('please_enter_phone_number')}
                  maxLength={200}
                  onChange={(e) => onChange(e.target.value)}
                  showCount={false}
                />
              )}
            </I18nChangeFormItem>
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'allowClear',
      require: false,
      label: <Label>{Intl.get('allow_clear')}：</Label>,
      value: (
        <Value>
          <Form.Item name="allowClear">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
  ];
}

const MainProperty = createMainProperty({
  formName: 'phoneWithAreaCodeMainProperty',
  getDefaultFormItems,
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}

