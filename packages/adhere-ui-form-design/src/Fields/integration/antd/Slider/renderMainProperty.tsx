import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, InputNumberInteger, Select } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import { DirectionSelectStandardDict, WhetherRadioHorizontalDict } from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

/**
 * MainProperty - Slider basic props per https://ant.design/components/slider-cn#api
 * Basic only: disabled, keyboard, min, max, step, orientation (horizontal|vertical), reverse, dots, included, range (boolean)
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
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'keyboard',
      require: false,
      label: <Label>{Intl.get('slider_keyboard')}：</Label>,
      value: (
        <Value>
          <Form.Item name="keyboard">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'min',
      require: false,
      label: <Label>{Intl.get('slider_min')}：</Label>,
      value: (
        <Value>
          <Form.Item name="min">
            <InputNumberInteger placeholder={Intl.get('slider_min')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'max',
      require: false,
      label: <Label>{Intl.get('slider_max')}：</Label>,
      value: (
        <Value>
          <Form.Item name="max">
            <InputNumberInteger placeholder={Intl.get('slider_max')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'step',
      require: false,
      label: <Label>{Intl.get('slider_step')}：</Label>,
      value: (
        <Value>
          <Form.Item name="step">
            <InputNumberInteger.InputPositiveNumberInteger
              placeholder={Intl.get('slider_step')}
              min={1}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'orientation',
      require: false,
      label: <Label>{Intl.get('slider_orientation')}：</Label>,
      value: (
        <Value>
          <Form.Item name="orientation">
            <DirectionSelectStandardDict allowClear placeholder={Intl.get('please_select')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'reverse',
      require: false,
      label: <Label>{Intl.get('slider_reverse')}：</Label>,
      value: (
        <Value>
          <Form.Item name="reverse">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'dots',
      require: false,
      label: <Label>{Intl.get('slider_dots')}：</Label>,
      value: (
        <Value>
          <Form.Item name="dots">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'included',
      require: false,
      label: <Label>{Intl.get('slider_included')}：</Label>,
      value: (
        <Value>
          <Form.Item name="included">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'range',
      require: false,
      label: <Label>{Intl.get('slider_range')}：</Label>,
      value: (
        <Value>
          <Form.Item name="range">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
  ];

  function onFieldsChange() {
    setFieldProps(getActiveFieldId() as string, { ...form.getFieldsValue() });
  }
  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antSliderMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
