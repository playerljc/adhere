import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  DataSourceManagerFormItem,
  DirectionSelectStandardDict,
  SegmentedShapeSelectStandardDict,
  SizeSelectStandardDict,
  WhetherRadioHorizontalDict,
  buildFormPropertyFillRow,
} from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

/**
 * MainProperty — Segmented，属性参考 https://ant.design/components/segmented-cn
 */
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
      key: 'block',
      require: false,
      label: <Label>{Intl.get('button_block')}：</Label>,
      value: (
        <Value>
          <Form.Item name="block">
            <WhetherRadioHorizontalDict placeholder={Intl.get('button_block')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'name',
      require: false,
      label: <Label>{Intl.get('name')}：</Label>,
      value: (
        <Value>
          <Form.Item name="name">
            <Input.OptimizedInput
              showCount={false}
              placeholder={Intl.get('name')}
              maxLength={200}
              allowClear
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'orientation',
      require: false,
      label: <Label>{Intl.get('direction')}：</Label>,
      value: (
        <Value>
          <Form.Item name="orientation">
            <DirectionSelectStandardDict allowClear={false} placeholder={Intl.get('direction')} />
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
            <SizeSelectStandardDict allowClear={false} placeholder={Intl.get('input_size')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'shape',
      require: false,
      label: <Label>{Intl.get('segmented_shape')}：</Label>,
      value: (
        <Value>
          <Form.Item name="shape">
            <SegmentedShapeSelectStandardDict
              allowClear={false}
              placeholder={Intl.get('segmented_shape')}
            />
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
    buildFormPropertyFillRow(),
  ];

  function onFieldsChange() {
    setFieldProps(getActiveFieldId() as string, { ...form.getFieldsValue() });
  }

  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antSegmentedMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
