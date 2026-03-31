import React from 'react';
import { Form, Input, InputNumber } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

import {
  DataSourceManagerFormItem,
  PlacementSelectStandardDict,
  SelectModeSelectStandardDict,
  SizeSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../index';

export default function SelectSection() {
  const mode = Form.useWatch('mode');

  return (
    <>
      <Form.Item name="allowClear" label={`${Intl.get('allow_clear')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item
        name="defaultActiveFirstOption"
        label={`${Intl.get('default_active_first_option')}：`}
      >
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="defaultOpen" label={`${Intl.get('default_open')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="listHeight" label={`${Intl.get('list_height')}：`}>
        <InputNumber min={0} precision={0} placeholder={Intl.get('list_height')} />
      </Form.Item>

      <Form.Item name="mode" label={`${Intl.get('mode')}：`}>
        <SelectModeSelectStandardDict placeholder={Intl.get('mode')} />
      </Form.Item>

      <Form.Item name="placeholder" label={`${Intl.get('placeholder')}：`}>
        <Input placeholder={Intl.get('placeholder')} maxLength={50} />
      </Form.Item>

      <Form.Item name="placement" label={`${Intl.get('placement')}：`}>
        <PlacementSelectStandardDict placeholder={Intl.get('placement')} />
      </Form.Item>

      <Form.Item name="showSearch" label={`${Intl.get('show_search')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="size" label={`${Intl.get('input_size')}：`}>
        <SizeSelectStandardDict />
      </Form.Item>

      <Form.Item name="status" label={`${Intl.get('input_status')}：`}>
        <VerificationStatusSelectStandardDict placeholder={Intl.get('input_status')} />
      </Form.Item>

      <Form.Item name="variant" label={`${Intl.get('input_variant')}：`}>
        <VariantSelectStandardDict />
      </Form.Item>

      {mode === 'multiple' ? (
        <Form.Item name="checkAll" label={`${Intl.get('check_all')}：`}>
          <WhetherRadioHorizontalDict />
        </Form.Item>
      ) : null}

      <Form.Item name="selectOptions" label={`${Intl.get('select_options')}：`}>
        <DataSourceManagerFormItem />
      </Form.Item>
    </>
  );
}

