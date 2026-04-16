import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  DataSourceManagerFormItem,
  DirectionSelectStandardDict,
  SegmentedShapeSelectStandardDict,
  SizeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

/**
 * MainProperty — Segmented，属性参考 https://ant.design/components/segmented-cn
 */
const MainProperty = createMainProperty({
  formName: 'antSegmentedMainProperty',
  getDefaultFormItems: (): DataItemRow[] => [
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
  ],
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
