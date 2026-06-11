import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  DEFAULT_PAGING_SETTING,
  I18nChangeFormItem,
  PagingSettingFormItem,
  SizeSelectStandardDict,
  SlotEndLabel,
  TableDataSourceManagerFormItem,
  TableLayoutSelectStandardDict,
  TableRowSelectionTypeSelectStandardDict,
  TableSelectColumnSettingFormItem,
  WhetherRadioHorizontalDict,
  buildFormPropertyTipRow,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

const MainProperty = createMainProperty({
  formName: 'antTableSelectionMainProperty',
  getDefaultFormItems: (_designValue, { watchValues, titleLabelSlot }): DataItemRow[] =>
    [
      {
        key: 'bordered',
        require: false,
        label: <Label>{Intl.get('bordered')}：</Label>,
        value: (
          <Value>
            <Form.Item name="bordered">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'loading',
        require: false,
        label: <Label>{Intl.get('loading')}：</Label>,
        value: (
          <Value>
            <Form.Item name="loading">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
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
              <SizeSelectStandardDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'showHeader',
        require: false,
        label: <Label>{Intl.get('table_show_header')}：</Label>,
        value: (
          <Value>
            <Form.Item name="showHeader">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'tableLayout',
        require: false,
        label: <Label>{Intl.get('table_layout')}：</Label>,
        value: (
          <Value>
            <Form.Item name="tableLayout">
              <TableLayoutSelectStandardDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'rowKey',
        require: false,
        label: <Label>{Intl.get('table_row_key')}：</Label>,
        value: (
          <Value>
            <Form.Item name="rowKey">
              <Input.OptimizedInput
                placeholder={Intl.get('table_row_key')}
                maxLength={50}
                showCount={false}
              />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'rowSelectionType',
        require: false,
        label: <Label>{Intl.get('table_row_selection_type')}：</Label>,
        value: (
          <Value>
            <Form.Item name="rowSelectionType">
              <TableRowSelectionTypeSelectStandardDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'hideSelectAll',
        require: false,
        label: <Label>{Intl.get('table_hide_select_all')}：</Label>,
        value: (
          <Value>
            <Form.Item name="hideSelectAll">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'rowSelectionFixed',
        require: false,
        label: <Label>{Intl.get('table_row_selection_fixed')}：</Label>,
        value: (
          <Value>
            <Form.Item name="rowSelectionFixed">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'rowSelectionColumnWidth',
        require: false,
        label: <Label>{Intl.get('table_row_selection_column_width')}：</Label>,
        value: (
          <Value>
            <Form.Item name="rowSelectionColumnWidth">
              <InputNumberInteger.InputPositiveNumberInteger
                placeholder={Intl.get('table_row_selection_column_width')}
              />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'pagination',
        require: false,
        label: <Label>{Intl.get('transfer_pagination')}：</Label>,
        value: (
          <Value>
            <Form.Item name="pagination">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      watchValues?.pagination && {
        key: 'paginationSetting',
        require: false,
        label: <Label>{Intl.get('paging_settings')}：</Label>,
        value: (
          <Value>
            <Form.Item name="paginationSetting" initialValue={DEFAULT_PAGING_SETTING}>
              <PagingSettingFormItem />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'scrollY',
        require: false,
        label: <Label>{Intl.get('table_scroll_y')}：</Label>,
        value: (
          <Value>
            <Form.Item name="scrollY">
              <InputNumberInteger.InputPositiveNumberInteger
                placeholder={Intl.get('table_scroll_y')}
              />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'showSearch',
        require: false,
        label: <Label>{Intl.get('table_select_show_search')}：</Label>,
        value: (
          <Value>
            <Form.Item name="showSearch">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      watchValues?.showSearch && {
        key: 'searchPlaceholder',
        require: false,
        label: (
          <SlotEndLabel
            ref={(node) => {
              titleLabelSlot.set('searchPlaceholder', node);
            }}
          >
            {Intl.get('table_select_search_placeholder')}：
          </SlotEndLabel>
        ),
        value: (
          <Value>
            <Form.Item name="searchPlaceholder">
              <I18nChangeFormItem
                getTriggerContainer={() => titleLabelSlot.get('searchPlaceholder') as HTMLElement}
              >
                {({ onChange, value }) => (
                  <Input.OptimizedInput
                    value={value}
                    placeholder={Intl.get('table_select_search_keyword_placeholder')}
                    maxLength={200}
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                    showCount={false}
                  />
                )}
              </I18nChangeFormItem>
            </Form.Item>
          </Value>
        ),
      },
      watchValues?.showSearch && {
        key: 'searchAllowClear',
        require: false,
        label: <Label>{Intl.get('table_select_search_allow_clear')}：</Label>,
        value: (
          <Value>
            <Form.Item name="searchAllowClear">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'columnSetting',
        require: false,
        label: <Label>{Intl.get('table_select_column_settings')}：</Label>,
        value: (
          <Value>
            <Form.Item name="columnSetting">
              <TableSelectColumnSettingFormItem />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'tableOptions',
        require: false,
        label: <Label>{Intl.get('table_select_data_source')}：</Label>,
        value: (
          <Value>
            <Form.Item name="tableOptions">
              <TableDataSourceManagerFormItem />
            </Form.Item>
          </Value>
        ),
      },
      buildFormPropertyTipRow(titleLabelSlot),
    ].filter(Boolean),
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
