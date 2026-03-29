import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  TreeDataSourceManagerFormItem,
  TreeSelectShowCheckedStrategySelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import {
  createMainProperty,
  renderMainPropertyWithCreate,
} from '../../../../utils';
import type { DesignValueProps } from '../../../../types';

const MainProperty = createMainProperty({
  formName: 'antTreeSelectMainProperty',
  getDefaultFormItems: (): DataItemRow[] => [
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
      key: 'multiple',
      require: false,
      label: <Label>{Intl.get('multiple')}：</Label>,
      value: (
        <Value>
          <Form.Item name="multiple">
            <WhetherRadioHorizontalDict placeholder={Intl.get('multiple')} />
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
            <Input placeholder={Intl.get('placeholder')} maxLength={50} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('show_search')} />
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
            <SizeSelectStandardDict placeholder={Intl.get('input_size')} />
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
      key: 'labelInValue',
      require: false,
      label: <Label>{Intl.get('label_in_value')}：</Label>,
      value: (
        <Value>
          <Form.Item name="labelInValue">
            <WhetherRadioHorizontalDict placeholder={Intl.get('label_in_value')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'treeCheckable',
      require: false,
      label: <Label>{Intl.get('tree_checkable')}：</Label>,
      value: (
        <Value>
          <Form.Item name="treeCheckable">
            <WhetherRadioHorizontalDict placeholder={Intl.get('tree_checkable')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'showCheckedStrategy',
      require: false,
      label: <Label>{Intl.get('show_checked_strategy')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showCheckedStrategy">
            <TreeSelectShowCheckedStrategySelectStandardDict
              placeholder={Intl.get('show_checked_strategy')}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'treeDefaultExpandAll',
      require: false,
      label: <Label>{Intl.get('tree_default_expand_all')}：</Label>,
      value: (
        <Value>
          <Form.Item name="treeDefaultExpandAll">
            <WhetherRadioHorizontalDict placeholder={Intl.get('tree_default_expand_all')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'treeLine',
      require: false,
      label: <Label>{Intl.get('tree_line')}：</Label>,
      value: (
        <Value>
          <Form.Item name="treeLine">
            <WhetherRadioHorizontalDict placeholder={Intl.get('tree_line')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'virtual',
      require: false,
      label: <Label>{Intl.get('virtual_scroll')}：</Label>,
      value: (
        <Value>
          <Form.Item name="virtual">
            <WhetherRadioHorizontalDict placeholder={Intl.get('virtual_scroll')} />
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
            <VariantSelectStandardDict placeholder={Intl.get('input_variant')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'treeOptions',
      require: false,
      label: <Label>{Intl.get('select_options')}：</Label>,
      value: (
        <Value>
          <Form.Item name="treeOptions">
            <TreeDataSourceManagerFormItem />
          </Form.Item>
        </Value>
      ),
    },
  ],
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
