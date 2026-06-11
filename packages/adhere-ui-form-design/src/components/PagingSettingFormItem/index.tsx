import { InputNumber, Select } from 'antd';
import React, { type FC } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import { values } from '../../Dict';
import { PaginationSizeSelectStandardDict } from '../PaginationSize';
import { WhetherRadioHorizontalDict } from '../Whether';
import PropertiesGridLayout, { Label, Value } from '../TableGridLayout';

const selectorPrefix = `${SELECT_PREFIX}-components-paging-setting-form-item`;

export type PagingSettingValue = {
  defaultCurrent?: number;
  pageSize?: number;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  showQuickJumper?: boolean;
  simple?: boolean;
  hideOnSinglePage?: boolean;
  position?: Array<
    'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'
  >;
  size?: 'default' | 'small';
};

export const DEFAULT_PAGING_SETTING: PagingSettingValue = {
  defaultCurrent: 1,
  pageSize: 10,
  showSizeChanger: true,
  pageSizeOptions: [10, 20, 50, 100],
  showQuickJumper: false,
  simple: false,
  hideOnSinglePage: false,
  position: ['bottomRight'],
  size: 'default',
};

export interface PagingSettingFormItemProps {
  value?: PagingSettingValue;
  onChange?: (value: PagingSettingValue) => void;
  className?: string;
  style?: React.CSSProperties;
}

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

const PagingSettingFormItem: FC<PagingSettingFormItemProps> = ({
  value,
  onChange,
  className,
  style,
}) => {
  const merged = { ...DEFAULT_PAGING_SETTING, ...value };

  const patch = (next: Partial<PagingSettingValue>) => {
    onChange?.({ ...merged, ...next });
  };

  return (
    <div className={className} style={style}>
      <Form
        className={selectorPrefix}
        layout="vertical"
        component={false}
        onValuesChange={(_, allValues) => {
          onChange?.({ ...merged, ...allValues });
        }}
      >
        <PropertiesGridLayout
          layout="vertical"
          data={[
            {
              name: 'g1',
              width: '100%',
              columnCount: 1,
              colgroup: ['auto'],
              data: [
                {
                  key: 'defaultCurrent',
                  require: false,
                  label: <Label>{Intl.get('pagination_default_current')}：</Label>,
                  value: (
                    <Value>
                      <InputNumber
                        min={1}
                        style={{ width: '100%' }}
                        value={merged.defaultCurrent}
                        onChange={(v) => patch({ defaultCurrent: typeof v === 'number' ? v : 1 })}
                      />
                    </Value>
                  ),
                },
                {
                  key: 'pageSize',
                  require: false,
                  label: <Label>{Intl.get('pagination_page_size')}：</Label>,
                  value: (
                    <Value>
                      <InputNumber
                        min={1}
                        style={{ width: '100%' }}
                        value={merged.pageSize}
                        onChange={(v) => patch({ pageSize: typeof v === 'number' ? v : 10 })}
                      />
                    </Value>
                  ),
                },
                {
                  key: 'showSizeChanger',
                  require: false,
                  label: <Label>{Intl.get('pagination_show_size_changer')}：</Label>,
                  value: (
                    <Value>
                      <WhetherRadioHorizontalDict
                        value={merged.showSizeChanger}
                        onChange={(v) => patch({ showSizeChanger: v })}
                      />
                    </Value>
                  ),
                },
                {
                  key: 'pageSizeOptions',
                  require: false,
                  label: <Label>{Intl.get('pagination_page_size_options')}：</Label>,
                  value: (
                    <Value>
                      <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        value={merged.pageSizeOptions}
                        options={PAGE_SIZE_OPTIONS.map((n) => ({ label: String(n), value: n }))}
                        onChange={(v) => patch({ pageSizeOptions: v as number[] })}
                      />
                    </Value>
                  ),
                },
                {
                  key: 'showQuickJumper',
                  require: false,
                  label: <Label>{Intl.get('pagination_show_quick_jumper')}：</Label>,
                  value: (
                    <Value>
                      <WhetherRadioHorizontalDict
                        value={merged.showQuickJumper}
                        onChange={(v) => patch({ showQuickJumper: v })}
                      />
                    </Value>
                  ),
                },
                {
                  key: 'simple',
                  require: false,
                  label: <Label>{Intl.get('pagination_simple')}：</Label>,
                  value: (
                    <Value>
                      <WhetherRadioHorizontalDict
                        value={merged.simple}
                        onChange={(v) => patch({ simple: v })}
                      />
                    </Value>
                  ),
                },
                {
                  key: 'hideOnSinglePage',
                  require: false,
                  label: <Label>{Intl.get('pagination_hide_on_single_page')}：</Label>,
                  value: (
                    <Value>
                      <WhetherRadioHorizontalDict
                        value={merged.hideOnSinglePage}
                        onChange={(v) => patch({ hideOnSinglePage: v })}
                      />
                    </Value>
                  ),
                },
                {
                  key: 'position',
                  require: false,
                  label: <Label>{Intl.get('pagination_position')}：</Label>,
                  value: (
                    <Value>
                      <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        value={merged.position}
                        options={values.PaginationPosition?.value ?? []}
                        onChange={(v) =>
                          patch({
                            position: v as PagingSettingValue['position'],
                          })
                        }
                        placeholder={Intl.get('please_select')}
                      />
                    </Value>
                  ),
                },
                {
                  key: 'size',
                  require: false,
                  label: <Label>{Intl.get('pagination_size')}：</Label>,
                  value: (
                    <Value>
                      <PaginationSizeSelectStandardDict
                        value={merged.size}
                        onChange={(v) => patch({ size: v as PagingSettingValue['size'] })}
                        placeholder={Intl.get('please_select')}
                      />
                    </Value>
                  ),
                },
              ],
            },
          ]}
        />
      </Form>
    </div>
  );
};

export default PagingSettingFormItem;
