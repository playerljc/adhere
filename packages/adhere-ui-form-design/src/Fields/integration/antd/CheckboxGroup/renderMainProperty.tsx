import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  DataSourceManagerFormItem,
  WhetherRadioHorizontalDict,
  buildFormPropertyFillRow,
} from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps, FieldProps } from '../../../../types';

type CheckboxGroupFieldProps = FieldProps & {
  optionWrap?: boolean;
  columnCount?: number;
};

function normalizeLayoutProps(values: CheckboxGroupFieldProps): CheckboxGroupFieldProps {
  const next = { ...values };
  if (next.optionWrap) {
    next.columnCount = undefined;
  } else if (next.columnCount != null && Number(next.columnCount) > 0) {
    next.optionWrap = false;
  }
  return next;
}

/**
 * MainProperty — Checkbox.Group，属性参考 https://ant.design/components/checkbox-cn
 * 是否换行（optionWrap）与列数（columnCount）互斥：开启换行时清空列数；列数大于 0 时关闭换行。
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
      key: 'optionWrap',
      require: false,
      label: <Label>{Intl.get('whether_option_wrap')}：</Label>,
      value: (
        <Value>
          <Form.Item name="optionWrap">
            <WhetherRadioHorizontalDict placeholder={Intl.get('whether_option_wrap')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'columnCount',
      require: false,
      label: <Label>{Intl.get('column_count')}：</Label>,
      value: (
        <Value>
          <Form.Item name="columnCount">
            <InputNumberInteger.InputPositiveNumberInteger
              min={1}
              max={24}
              placeholder={Intl.get('column_count')}
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
    const raw = form.getFieldsValue() as CheckboxGroupFieldProps;
    const next = normalizeLayoutProps(raw);
    if (next.columnCount !== raw.columnCount || next.optionWrap !== raw.optionWrap) {
      form.setFieldsValue(next);
    }
    setFieldProps(getActiveFieldId() as string, next);
  }

  useEffect(() => {
    form.setFieldsValue(normalizeLayoutProps(fieldProps as CheckboxGroupFieldProps));
  }, [fieldProps]);

  return (
    <Form name="antCheckboxGroupMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
