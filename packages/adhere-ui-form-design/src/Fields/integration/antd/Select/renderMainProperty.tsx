import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  DataSourceManagerFormItem,
  PlacementSelectStandardDict,
  SelectModeSelectStandardDict,
  SizeSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

/**
 * MainProperty
 * @description 控件的属性面板，如果控件是TableGridLayout，那么属性面板就是TableGridLayout的属性面板
 * @param {DesignValueProps} props
 */
const MainProperty = createMainProperty({
  formName: 'antSelectMainProperty',
  getDefaultFormItems: (designValue, ctx): DataItemRow[] => {
    const mode = ctx.watchValues?.mode;

    const defaultFormItems: (DataItemRow | boolean)[] = [
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
    {
      key: 'defaultActiveFirstOption',
      require: false,
      label: <Label>{Intl.get('default_active_first_option')}：</Label>,
      value: (
        <Value>
          <Form.Item name="defaultActiveFirstOption">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'defaultOpen',
      require: false,
      label: <Label>{Intl.get('default_open')}：</Label>,
      value: (
        <Value>
          <Form.Item name="defaultOpen">
            <WhetherRadioHorizontalDict />
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
    {
      key: 'listHeight',
      require: false,
      label: <Label>{Intl.get('list_height')}：</Label>,
      value: (
        <Value>
          <Form.Item name="listHeight">
            <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('list_height')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'mode',
      require: false,
      label: <Label>{Intl.get('mode')}：</Label>,
      value: (
        <Value>
          <Form.Item name="mode">
            <SelectModeSelectStandardDict placeholder={Intl.get('mode')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'placeholder',
      require: false,
      label: <Label>{Intl.get('placeholder')}：</Label>,
      value: (
        <Value>
          <Form.Item name="placeholder">
            <Input.OptimizedInput
              showCount={false}
              placeholder={Intl.get('placeholder')}
              maxLength={50}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'placement',
      require: false,
      label: <Label>{Intl.get('placement')}：</Label>,
      value: (
        <Value>
          <Form.Item name="placement">
            <PlacementSelectStandardDict placeholder={Intl.get('placement')} />
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
      key: 'size',
      require: false,
      label: <Label>{Intl.get('input_size')}：</Label>,
      value: (
        <Value>
          <Form.Item name="size">
            <SizeSelectStandardDict />
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
          <Form.Item name="showCount">
            <VerificationStatusSelectStandardDict placeholder={Intl.get('input_status')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'variant',
      require: false,
      label: <Label>{Intl.get('input_variant')}：</Label>,
      value: (
        <Value>
          <Form.Item name="variant">
            <VariantSelectStandardDict />
          </Form.Item>
        </Value>
      ),
    },
    mode === 'multiple' && {
      key: 'checkAll',
      require: false,
      label: <Label>{Intl.get('check_all')}：</Label>,
      value: (
        <Value>
          <Form.Item name="checkAll">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'selectOptions',
      require: false,
      label: <Label>{Intl.get('select_options')}：</Label>,
      value: (
        <Value>
          <Form.Item name="selectOptions">
            <DataSourceManagerFormItem />
          </Form.Item>
        </Value>
      ),
    },
    ].filter(Boolean);

    return defaultFormItems as DataItemRow[];
  },
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
