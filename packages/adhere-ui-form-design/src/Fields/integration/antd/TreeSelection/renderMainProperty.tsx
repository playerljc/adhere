import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  I18nChangeFormItem,
  SlotEndLabel,
  TreeDataSourceManagerFormItem,
  WhetherRadioHorizontalDict,
  buildFormPropertyTipRow,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

const MainProperty = createMainProperty({
  formName: 'antTreeSelectionMainProperty',
  getDefaultFormItems: (_designValue, { watchValues, titleLabelSlot }): DataItemRow[] =>
    [
      {
        key: 'checkable',
        require: false,
        label: <Label>{Intl.get('tree_checkable')}：</Label>,
        value: (
          <Value>
            <Form.Item name="checkable">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'checkStrictly',
        require: false,
        label: <Label>{Intl.get('tree_check_strictly')}：</Label>,
        value: (
          <Value>
            <Form.Item name="checkStrictly">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'defaultExpandAll',
        require: false,
        label: <Label>{Intl.get('tree_default_expand_all')}：</Label>,
        value: (
          <Value>
            <Form.Item name="defaultExpandAll">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'autoExpandParent',
        require: false,
        label: <Label>{Intl.get('tree_auto_expand_parent')}：</Label>,
        value: (
          <Value>
            <Form.Item name="autoExpandParent">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'blockNode',
        require: false,
        label: <Label>{Intl.get('tree_block_node')}：</Label>,
        value: (
          <Value>
            <Form.Item name="blockNode">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'selectable',
        require: false,
        label: <Label>{Intl.get('tree_selectable')}：</Label>,
        value: (
          <Value>
            <Form.Item name="selectable">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
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
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
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
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
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
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'draggable',
        require: false,
        label: <Label>{Intl.get('tree_draggable')}：</Label>,
        value: (
          <Value>
            <Form.Item name="draggable">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
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
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'height',
        require: false,
        label: <Label>{Intl.get('tree_virtual_height')}：</Label>,
        value: (
          <Value>
            <Form.Item name="height">
              <InputNumberInteger.InputPositiveNumberInteger
                placeholder={Intl.get('tree_virtual_height')}
              />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'contentMaxHeight',
        require: false,
        label: <Label>{Intl.get('tree_selection_content_max_height')}：</Label>,
        value: (
          <Value>
            <Form.Item name="contentMaxHeight">
              <InputNumberInteger.InputPositiveNumberInteger
                placeholder={Intl.get('tree_selection_content_max_height')}
              />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'showSearch',
        require: false,
        label: <Label>{Intl.get('tree_selection_show_search')}：</Label>,
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
            {Intl.get('tree_selection_search_placeholder')}：
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
                    placeholder={Intl.get('tree_selection_search_keyword_placeholder')}
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
        label: <Label>{Intl.get('tree_selection_search_allow_clear')}：</Label>,
        value: (
          <Value>
            <Form.Item name="searchAllowClear">
              <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
            </Form.Item>
          </Value>
        ),
      },
      {
        key: 'treeOptions',
        require: false,
        label: <Label>{Intl.get('tree_selection_data_source')}：</Label>,
        value: (
          <Value>
            <Form.Item name="treeOptions">
              <TreeDataSourceManagerFormItem />
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
