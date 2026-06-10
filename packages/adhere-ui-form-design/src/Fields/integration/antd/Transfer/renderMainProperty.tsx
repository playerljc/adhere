import React, { useContext } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  I18nChangeFormItem,
  TransferDataSourceManagerFormItem,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
  buildFormPropertyTipRow,
} from '../../../../components';
import { SlotEndLabel } from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps, I18nValue } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate, toI18nLabel } from '../../../../utils';

export type I18nInputSlotRef = {
  get: (key: string) => unknown;
  set: (key: string, value: unknown) => void;
};

function I18nInput({
  value,
  onChange,
  placeholder,
  maxLength,
  slot,
  slotKey,
}: {
  value?: I18nValue | string;
  onChange?: (value: I18nValue) => void;
  placeholder?: string;
  maxLength?: number;
  slot: I18nInputSlotRef;
  slotKey: string;
}) {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);

  const i18nValue = toI18nLabel(value, lang, localesKeys);

  return (
    <I18nChangeFormItem
      value={i18nValue}
      onChange={(next) => onChange?.(next)}
      getTriggerContainer={() => slot.get(slotKey) as HTMLElement}
    >
      {({ onChange: i18nOnChange, value: inputValue }) => (
        <Input.OptimizedInput
          value={inputValue ?? ''}
          placeholder={placeholder}
          onChange={(e) => i18nOnChange(e.target.value)}
          maxLength={maxLength}
          showCount={false}
        />
      )}
    </I18nChangeFormItem>
  );
}

const MainProperty = createMainProperty({
  formName: 'antTransferMainProperty',
  getDefaultFormItems: (designValue, ctx): DataItemRow[] => {
    const slot = ctx.titleLabelSlot as unknown as I18nInputSlotRef;

    const defaultFormItems: DataItemRow[] = [
    {
      key: 'disabled',
      require: false,
      label: <Label>{Intl.get('disabled')}：</Label>,
      value: (
        <Value>
          <Form.Item name="disabled">
            <WhetherRadioHorizontalDict placeholder={Intl.get('disabled')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'showSearch',
      require: false,
      label: <Label>{Intl.get('show_search')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showSearch">
            <WhetherRadioHorizontalDict placeholder={Intl.get('show_search')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'oneWay',
      require: false,
      label: <Label>{Intl.get('transfer_one_way')}：</Label>,
      value: (
        <Value>
          <Form.Item name="oneWay">
            <WhetherRadioHorizontalDict placeholder={Intl.get('transfer_one_way')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'pagination',
      require: false,
      label: <Label>{Intl.get('transfer_pagination')}：</Label>,
      value: (
        <Value>
          <Form.Item name="pagination">
            <WhetherRadioHorizontalDict placeholder={Intl.get('transfer_pagination')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'showSelectAll',
      require: false,
      label: <Label>{Intl.get('transfer_show_select_all')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showSelectAll">
            <WhetherRadioHorizontalDict placeholder={Intl.get('transfer_show_select_all')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'leftTitle',
      require: false,
      label: (
        <SlotEndLabel
          ref={(node) => {
            slot.set('leftTitleLabel', node);
          }}
        >
          {Intl.get('transfer_left_title')}：
        </SlotEndLabel>
      ),
      value: (
        <Value>
          <Form.Item name="leftTitle">
            <I18nInput
              placeholder={Intl.get('transfer_left_title')}
              maxLength={50}
              slot={slot}
              slotKey="leftTitleLabel"
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'rightTitle',
      require: false,
      label: (
        <SlotEndLabel
          ref={(node) => {
            slot.set('rightTitleLabel', node);
          }}
        >
          {Intl.get('transfer_right_title')}：
        </SlotEndLabel>
      ),
      value: (
        <Value>
          <Form.Item name="rightTitle">
            <I18nInput
              placeholder={Intl.get('transfer_right_title')}
              maxLength={50}
              slot={slot}
              slotKey="rightTitleLabel"
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'leftOperation',
      require: false,
      label: (
        <SlotEndLabel
          ref={(node) => {
            slot.set('leftOperationLabel', node);
          }}
        >
          {Intl.get('transfer_left_operation')}：
        </SlotEndLabel>
      ),
      value: (
        <Value>
          <Form.Item name="leftOperation">
            <I18nInput
              placeholder={Intl.get('transfer_left_operation')}
              maxLength={20}
              slot={slot}
              slotKey="leftOperationLabel"
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'rightOperation',
      require: false,
      label: (
        <SlotEndLabel
          ref={(node) => {
            slot.set('rightOperationLabel', node);
          }}
        >
          {Intl.get('transfer_right_operation')}：
        </SlotEndLabel>
      ),
      value: (
        <Value>
          <Form.Item name="rightOperation">
            <I18nInput
              placeholder={Intl.get('transfer_right_operation')}
              maxLength={20}
              slot={slot}
              slotKey="rightOperationLabel"
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'status',
      require: false,
      label: <Label>{Intl.get('input_status')}：</Label>,
      value: (
        <Value>
          <Form.Item name="status">
            <VerificationStatusSelectStandardDict placeholder={Intl.get('input_status')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'transferOptions',
      require: false,
      label: <Label>{Intl.get('transfer_data_source')}：</Label>,
      value: (
        <Value>
          <Form.Item name="transferOptions">
            <TransferDataSourceManagerFormItem />
          </Form.Item>
        </Value>
      ),
    },
    buildFormPropertyTipRow(ctx.titleLabelSlot),
  ];
    return defaultFormItems;
  },
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
