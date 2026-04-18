import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  DividerOrientationSelectStandardDict,
  DividerSizeSelectStandardDict,
  DividerTitlePlacementSelectStandardDict,
  DividerVariantSelectStandardDict,
  I18nChangeFormItem,
  SlotEndLabel,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';
import type { GetDefaultFormItemsCtx } from '../../../../utils';

function getDefaultFormItems(
  _designValue: DesignValueProps,
  ctx: GetDefaultFormItemsCtx,
): DataItemRow[] {
  const { titleLabelSlot } = ctx;

  return [
    {
      key: 'children',
      require: false,
      label: (
        <SlotEndLabel
          ref={(node) => {
            titleLabelSlot.set('title', node);
          }}
        >
          {Intl.get('divider_title')}:
        </SlotEndLabel>
      ),
      value: (
        <Value>
          <Form.Item name="children">
            <I18nChangeFormItem
              getTriggerContainer={() => titleLabelSlot.get('title') as HTMLElement}
            >
              {({ onChange, value }) => (
                <Input.OptimizedInput
                  value={value}
                  placeholder={Intl.get('divider_title')}
                  maxLength={200}
                  onChange={(e) => onChange(e.target.value)}
                  showCount={false}
                />
              )}
            </I18nChangeFormItem>
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'orientation',
      require: false,
      label: <Label>{Intl.get('divider_orientation')}:</Label>,
      value: (
        <Value>
          <Form.Item name="orientation">
            <DividerOrientationSelectStandardDict
              placeholder={Intl.get('please_select')}
              allowClear
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'vertical',
      require: false,
      label: <Label>{Intl.get('divider_vertical')}:</Label>,
      value: (
        <Value>
          <Form.Item name="vertical">
            <WhetherRadioHorizontalDict placeholder={Intl.get('divider_vertical')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'dashed',
      require: false,
      label: <Label>{Intl.get('divider_dashed')}:</Label>,
      value: (
        <Value>
          <Form.Item name="dashed">
            <WhetherRadioHorizontalDict placeholder={Intl.get('divider_dashed')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'plain',
      require: false,
      label: <Label>{Intl.get('divider_plain')}:</Label>,
      value: (
        <Value>
          <Form.Item name="plain">
            <WhetherRadioHorizontalDict placeholder={Intl.get('divider_plain')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'size',
      require: false,
      label: <Label>{Intl.get('divider_size')}:</Label>,
      value: (
        <Value>
          <Form.Item name="size">
            <DividerSizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'titlePlacement',
      require: false,
      label: <Label>{Intl.get('divider_title_placement')}:</Label>,
      value: (
        <Value>
          <Form.Item name="titlePlacement">
            <DividerTitlePlacementSelectStandardDict
              placeholder={Intl.get('please_select')}
              allowClear
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'variant',
      require: false,
      label: <Label>{Intl.get('divider_variant')}:</Label>,
      value: (
        <Value>
          <Form.Item name="variant">
            <DividerVariantSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
  ];
}

const MainProperty = createMainProperty({
  formName: 'antDividerMainProperty',
  getDefaultFormItems,
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
