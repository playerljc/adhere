import { InputNumber, Modal, type RadioChangeEvent } from 'antd';
import React, { type FC } from 'react';

import { Radio } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import { values } from '../../Dict';
import { TableColumnAlignSelectStandardDict } from '../TableColumnAlign';
import { TableColumnDefaultSortOrderSelectStandardDict } from '../TableColumnDefaultSortOrder';
import { TableColumnFixedSelectStandardDict } from '../TableColumnFixed';
import type {
  TableSelectColumnDefaultSortOrder,
  TableSelectColumnFixed,
  TableSelectColumnSettingItem,
} from './TableSelectColumnSettingFormItem';

function normalizeColumnFixed(fixed: TableSelectColumnSettingItem['fixed']): TableSelectColumnFixed {
  if (fixed === 'left' || fixed === 'right') return fixed;
  return 'none';
}

function normalizeDefaultSortOrder(
  order: TableSelectColumnSettingItem['defaultSortOrder'],
): TableSelectColumnDefaultSortOrder {
  if (order === 'ascend' || order === 'descend') return order;
  return 'none';
}

function extractRadioBool(e: RadioChangeEvent | boolean): boolean {
  if (typeof e === 'boolean') return e;
  return e.target.value as boolean;
}

function asBool(value: unknown, fallback: boolean): boolean {
  return value === true || value === false ? value : fallback;
}

const selectorPrefix = `${SELECT_PREFIX}-form-design-components-table-select-column-setting-form-item`;

export interface ColumnSettingModalProps {
  open: boolean;
  item: TableSelectColumnSettingItem | null;
  onCancel: () => void;
  onOk: () => void;
  onChange: (patch: Partial<TableSelectColumnSettingItem>) => void;
}

const ColumnSettingModal: FC<ColumnSettingModalProps> = ({
  open,
  item,
  onCancel,
  onOk,
  onChange,
}) => {
  if (!item) return null;

  return (
    <Modal
      title={Intl.get('settings')}
      open={open}
      width={520}
      className={`${selectorPrefix}-modal-wrap`}
      styles={{
        body: {
          maxHeight: '60vh',
          overflowY: 'auto',
        },
      }}
      onCancel={onCancel}
      onOk={onOk}
      destroyOnHidden
    >
      <div className={`${selectorPrefix}-modal`}>
        <div className={`${selectorPrefix}-modal-row`}>
          <div className={`${selectorPrefix}-modal-row-label`}>
            {Intl.get('table_select_column_visible')}：
          </div>
          <div className={`${selectorPrefix}-modal-row-value`}>
            <Radio.HorizontalRadio
              options={values.Whether?.value ?? []}
              value={asBool(item.visible, true)}
              onChange={(e) => onChange({ visible: extractRadioBool(e) })}
            />
          </div>
        </div>

        <div className={`${selectorPrefix}-modal-row`}>
          <div className={`${selectorPrefix}-modal-row-label`}>
            {Intl.get('width')}：
          </div>
          <div className={`${selectorPrefix}-modal-row-value`}>
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              value={item.width}
              placeholder={Intl.get('width')}
              onChange={(v) => onChange({ width: typeof v === 'number' ? v : undefined })}
            />
          </div>
        </div>

        <div className={`${selectorPrefix}-modal-row`}>
          <div className={`${selectorPrefix}-modal-row-label`}>
            {Intl.get('align')}：
          </div>
          <div className={`${selectorPrefix}-modal-row-value`}>
            <TableColumnAlignSelectStandardDict
              value={item.align ?? 'left'}
              onChange={(v) => onChange({ align: v })}
              placeholder={Intl.get('please_select')}
            />
          </div>
        </div>

        <div className={`${selectorPrefix}-modal-row`}>
          <div className={`${selectorPrefix}-modal-row-label`}>
            {Intl.get('ellipsis')}：
          </div>
          <div className={`${selectorPrefix}-modal-row-value`}>
            <Radio.HorizontalRadio
              options={values.Whether?.value ?? []}
              value={asBool(item.ellipsis, false)}
              onChange={(e) => onChange({ ellipsis: extractRadioBool(e) })}
            />
          </div>
        </div>

        <div className={`${selectorPrefix}-modal-row`}>
          <div className={`${selectorPrefix}-modal-row-label`}>
            {Intl.get('table_column_sorter')}：
          </div>
          <div className={`${selectorPrefix}-modal-row-value`}>
            <Radio.HorizontalRadio
              options={values.Whether?.value ?? []}
              value={asBool(item.sorter, false)}
              onChange={(e) => {
                const next = extractRadioBool(e);
                onChange({
                  sorter: next,
                  ...(next ? {} : { defaultSortOrder: 'none' }),
                });
              }}
            />
          </div>
        </div>

        {asBool(item.sorter, false) && (
          <div className={`${selectorPrefix}-modal-row`}>
            <div className={`${selectorPrefix}-modal-row-label`}>
              {Intl.get('table_column_default_sort_order')}：
            </div>
            <div className={`${selectorPrefix}-modal-row-value`}>
              <TableColumnDefaultSortOrderSelectStandardDict
                value={normalizeDefaultSortOrder(item.defaultSortOrder)}
                onChange={(v) =>
                  onChange({
                    defaultSortOrder: (v as TableSelectColumnDefaultSortOrder) ?? 'none',
                  })
                }
                placeholder={Intl.get('please_select')}
              />
            </div>
          </div>
        )}

        <div className={`${selectorPrefix}-modal-row`}>
          <div className={`${selectorPrefix}-modal-row-label`}>
            {Intl.get('table_column_fixed')}：
          </div>
          <div className={`${selectorPrefix}-modal-row-value`}>
            <TableColumnFixedSelectStandardDict
              value={normalizeColumnFixed(item.fixed)}
              onChange={(v) =>
                onChange({
                  fixed: (v as TableSelectColumnFixed) ?? 'none',
                })
              }
              placeholder={Intl.get('please_select')}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ColumnSettingModal;
