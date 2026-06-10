import React, { useContext, useMemo } from 'react';

import { Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_VALUE_KEY_NAME } from '../../../../constant';
import {
  RichEditorTextDirectionSelectStandardDict,
  RichEditorToolbarPresetSelectStandardDict,
  WhetherRadioHorizontalDict,
  buildFormPropertyPlaceholderRow,
  buildFormPropertyTipRow,
  payloadToValues as i18nPayloadToValues,
  valuesToPayload as i18nValuesToPayload,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

function normalizePlaceholderToI18n(placeholder: unknown, lang: string) {
  if (placeholder == null || placeholder === '') {
    return {
      [SELECT_VALUE_KEY_NAME]: lang,
      [lang]: '',
    };
  }
  if (typeof placeholder === 'string') {
    return {
      [SELECT_VALUE_KEY_NAME]: lang,
      [lang]: placeholder,
    };
  }
  return placeholder;
}

function createRichEditorMainProperty(lang: string) {
  return createMainProperty({
    formName: 'antRichEditorMainProperty',
    payloadToValues: (fieldProps) => {
      const values = i18nPayloadToValues(fieldProps, lang);
      values.placeholder = normalizePlaceholderToI18n(values.placeholder, lang);
      return values;
    },
    valuesToPayload: (values) => {
      const payload = i18nValuesToPayload(values);
      payload.placeholder = normalizePlaceholderToI18n(payload.placeholder, lang);
      return payload;
    },
    getDefaultFormItems: (_designValue, ctx): DataItemRow[] => [
      buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),
      {
        key: 'readOnly',
        require: false,
        label: <Label>{Intl.get('read_only')}：</Label>,
        value: (
          <Value>
            <Form.Item name="readOnly">
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
        key: 'bordered',
        require: false,
        label: <Label>{Intl.get('bordered')}：</Label>,
        value: (
          <Value>
            <Form.Item name="bordered">
              <WhetherRadioHorizontalDict />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'minHeight',
        require: false,
        label: <Label>{Intl.get('rich_editor_min_height')}：</Label>,
        value: (
          <Value>
            <Form.Item name="minHeight">
              <InputNumberInteger.InputPositiveNumberInteger
                placeholder={Intl.get('rich_editor_min_height')}
              />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'height',
        require: false,
        label: <Label>{Intl.get('rich_editor_height')}：</Label>,
        value: (
          <Value>
            <Form.Item name="height">
              <InputNumberInteger.InputPositiveNumberInteger
                placeholder={Intl.get('rich_editor_height')}
              />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'gap',
        require: false,
        label: <Label>{Intl.get('gap')}：</Label>,
        value: (
          <Value>
            <Form.Item name="gap">
              <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('gap')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'direction',
        require: false,
        label: <Label>{Intl.get('rich_editor_text_direction')}：</Label>,
        value: (
          <Value>
            <Form.Item name="direction">
              <RichEditorTextDirectionSelectStandardDict
                placeholder={Intl.get('please_select')}
                allowClear
              />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'toolbarPreset',
        require: false,
        label: <Label>{Intl.get('rich_editor_toolbar_preset')}：</Label>,
        value: (
          <Value>
            <Form.Item name="toolbarPreset">
              <RichEditorToolbarPresetSelectStandardDict
                placeholder={Intl.get('please_select')}
                allowClear
              />
            </Form.Item>
          </Value>
        ),
      },
      buildFormPropertyTipRow(ctx.titleLabelSlot),
    ],
    autoFill: true,
  });
}

export function renderMainProperty(props: DesignValueProps) {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';
  const MainProperty = useMemo(() => createRichEditorMainProperty(lang), [lang]);
  return renderMainPropertyWithCreate(MainProperty, props);
}
