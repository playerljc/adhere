import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  PlacementSelectStandardDict,
  SelectModeSelectStandardDict,
  SizeSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

/**
 * MainProperty
 * @description 控件的属性面板，如果控件是TableGridLayout，那么属性面板就是TableGridLayout的属性面板
 * @param {DesignValueProps} props
 */
export function MainProperty({
  designValue,
  renderFormItems,
}: {
  designValue: DesignValueProps;
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) {
  // 表单的instance
  const [form] = Form.useForm();

  const mode = Form.useWatch('mode', form);

  const {
    // 获取当前激活的控件的id(也就是Editor中选中的控件)
    getActiveFieldId,
    // 设置控件的属性
    setFieldProps,
  } = useContext(DesignContext);

  // 控件的数据
  const { fieldProps } = designValue;

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
          <Form.Item name="type">
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
  ].filter(Boolean);

  function onFieldsChange() {
    const values = form.getFieldsValue();

    setFieldProps(getActiveFieldId() as string, {
      ...values,
    });
  }

  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antSelectMainProperty" form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: renderFormItems
              ? renderFormItems(defaultFormItems as DataItemRow[])
              : (defaultFormItems as DataItemRow[]),
          },
        ]}
      />
    </Form>
  );
}

/**
 * renderMainProperty
 * @param {DesignValueProps} props
 * @return ReactElement
 */
export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
