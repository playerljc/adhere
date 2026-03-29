import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  CascaderShowCheckedStrategySelectStandardDict,
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  TreeDataSourceManagerFormItem,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
  buildFormPropertyFillRow,
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('allow_clear')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'changeOnSelect',
      require: false,
      label: <Label>{Intl.get('change_on_select')}：</Label>,
      value: (
        <Value>
          <Form.Item name="changeOnSelect">
            <WhetherRadioHorizontalDict placeholder={Intl.get('change_on_select')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('disabled')} />
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
      key: 'showCheckedStrategy',
      require: false,
      label: <Label>{Intl.get('cascader_show_checked_strategy')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showCheckedStrategy">
            <CascaderShowCheckedStrategySelectStandardDict
              placeholder={Intl.get('cascader_show_checked_strategy')}
            />
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
    buildFormPropertyFillRow(),
  ];

  function onFieldsChange() {
    const values = form.getFieldsValue();
    setFieldProps(getActiveFieldId() as string, { ...values });
  }

  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antCascaderMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
