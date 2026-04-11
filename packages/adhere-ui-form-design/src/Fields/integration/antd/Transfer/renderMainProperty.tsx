import React, { type ReactNode, useContext, useEffect, useRef } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  I18nChangeFormItem,
  TransferDataSourceManagerFormItem,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { SlotEndLabel } from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import { SELECT_VALUE_KEY_NAME } from '../../../../constant';
import type { DesignValueProps, I18nValue } from '../../../../types';

export type I18nInputSlotRef = {
  get: (key: string) => unknown;
  set: (key: string, value: unknown) => void;
};

function toI18nValue(
  value: I18nValue | string | undefined,
  lang: string,
  localesKeys: string[],
): I18nValue {
  if (value && typeof value === 'object' && SELECT_VALUE_KEY_NAME in value) {
    return value as I18nValue;
  }

  const next: Record<string, string | null | undefined> = { [SELECT_VALUE_KEY_NAME]: lang };
  localesKeys.forEach((key) => {
    next[key] = key === lang ? (typeof value === 'string' ? value : '') : null;
  });
  return next as I18nValue;
}

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

  const i18nValue = toI18nValue(value, lang, localesKeys);

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

export function MainProperty({
  designValue,
  renderFormItems,
}: {
  designValue: DesignValueProps;
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) {
  const [form] = Form.useForm();

  const { getActiveFieldId, setFieldProps } = useContext(DesignContext);

  const { fieldProps } = designValue;

  // 国际化字段的 label slot 引用
  const leftTitleSlot = useRef<I18nInputSlotRef>({
    get: (key: string) => leftTitleSlot.current[key as keyof I18nInputSlotRef],
    set: (key: string, value: unknown) => {
      (leftTitleSlot.current as unknown as Record<string, unknown>)[key] = value;
    },
  });

  const rightTitleSlot = useRef<I18nInputSlotRef>({
    get: (key: string) => rightTitleSlot.current[key as keyof I18nInputSlotRef],
    set: (key: string, value: unknown) => {
      (rightTitleSlot.current as unknown as Record<string, unknown>)[key] = value;
    },
  });

  const leftOperationSlot = useRef<I18nInputSlotRef>({
    get: (key: string) => leftOperationSlot.current[key as keyof I18nInputSlotRef],
    set: (key: string, value: unknown) => {
      (leftOperationSlot.current as unknown as Record<string, unknown>)[key] = value;
    },
  });

  const rightOperationSlot = useRef<I18nInputSlotRef>({
    get: (key: string) => rightOperationSlot.current[key as keyof I18nInputSlotRef],
    set: (key: string, value: unknown) => {
      (rightOperationSlot.current as unknown as Record<string, unknown>)[key] = value;
    },
  });

  const defaultFormItems: DataItemRow[] = [
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
    {
      key: 'showSearch',
      require: false,
      label: <Label>{Intl.get('show_search')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showSearch">
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            leftTitleSlot.current.set('label', node);
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
              slot={leftTitleSlot.current}
              slotKey="label"
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
            rightTitleSlot.current.set('label', node);
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
              slot={rightTitleSlot.current}
              slotKey="label"
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
            leftOperationSlot.current.set('label', node);
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
              slot={leftOperationSlot.current}
              slotKey="label"
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
            rightOperationSlot.current.set('label', node);
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
              slot={rightOperationSlot.current}
              slotKey="label"
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
  ];

  function onFieldsChange() {
    const values = form.getFieldsValue();
    setFieldProps(getActiveFieldId() as string, { ...values });
  }

  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antTransferMainProperty" form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: renderFormItems ? renderFormItems(defaultFormItems) : defaultFormItems,
          },
        ]}
      />
    </Form>
  );
}

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
