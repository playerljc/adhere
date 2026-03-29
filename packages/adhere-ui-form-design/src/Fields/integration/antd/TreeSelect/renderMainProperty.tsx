import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  TreeDataSourceManagerFormItem,
  TreeSelectShowCheckedStrategySelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

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

  const defaultFormItems: DataItemRow[] = [
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
  ];

  function onFieldsChange() {
    const values = form.getFieldsValue();
    setFieldProps(getActiveFieldId() as string, { ...values });
  }

  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antTreeSelectMainProperty" form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: renderFormItems
              ? renderFormItems(defaultFormItems)
              : defaultFormItems,
          },
        ]}
      />
    </Form>
  );
}

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
