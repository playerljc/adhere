import React, { type ReactNode, useContext, useEffect, useMemo } from 'react';

import { Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import {
  DensitySelectStandardDict,
  DirectionSelectStandardDict,
  TableGridLayoutColgroupSetting,
  TableGridLayoutModeTypeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import { resolveFieldPropsForDesignEditor } from './resolveFieldPropsForDesignEditor';

/** 与 TableGridLayoutColgroupSetting 一致：vertical 为 columnCount 段；horizontal 为 columnCount 对（每对 2 个元素） */
function normalizeColgroupForColumnCount(
  colgroup: unknown,
  columnCount: number,
  layout: string | undefined,
): (string | undefined)[] {
  const n = Math.max(1, Math.min(5, Math.floor(Number(columnCount)) || 1));
  const prev = Array.isArray(colgroup) ? ([...colgroup] as (string | undefined)[]) : [];

  if (layout === 'horizontal') {
    const targetLen = n * 2;
    const next = prev.slice(0, targetLen);
    for (let i = next.length; i < targetLen; i += 2) {
      next.push(undefined, 'auto');
    }
    return next.slice(0, targetLen);
  }

  const next = prev.slice(0, n);
  while (next.length < n) {
    next.push('auto');
  }
  return next.slice(0, n);
}

/**
 * MainProperty
 * @description 控件的属性面板，如果控件是TableGridLayout，那么属性面板就是TableGridLayout的属性面板
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  // 表单的instance
  const [form] = Form.useForm();

  const { getActiveFieldId, setFieldProps, getTerminal } = useContext(DesignContext);

  const terminal = getTerminal();
  const fieldProps = useMemo(
    () => resolveFieldPropsForDesignEditor(props, terminal),
    [props.fieldProps, props.fieldPropsByTerminal, terminal],
  );
  const gridLayoutProps: TableGridLayoutProps = fieldProps as TableGridLayoutProps;
  const baselineGridProps = props.fieldProps as TableGridLayoutProps;

  const columnCount =
    Form.useWatch('columnCount', form) ?? (gridLayoutProps?.data?.[0]?.columnCount as number);

  const layout = Form.useWatch('layout', form) ?? gridLayoutProps?.layout;

  function onFieldsChange() {
    const { columnCount, width, ...rest } = form.getFieldsValue();
    const layoutVal = (rest.layout ?? baselineGridProps?.layout) as string | undefined;
    const cc = Math.max(1, Math.min(5, Math.floor(Number(columnCount)) || 1));
    const colgroup = normalizeColgroupForColumnCount(width, cc, layoutVal);

    console.log('colgroup======', colgroup);

    setFieldProps(getActiveFieldId() as string, {
      ...rest,
      data: [
        {
          ...baselineGridProps?.data?.[0],
          columnCount: cc,
          colgroup,
        },
      ],
    });
  }

  useEffect(() => {
    // 设置控件的数据到表单
    form.setFieldsValue({
      layout: gridLayoutProps.layout,
      bordered: gridLayoutProps.bordered,
      density: gridLayoutProps.density,
      mode: gridLayoutProps.mode,
      columnCount: gridLayoutProps?.data?.[0]?.columnCount,
      width: gridLayoutProps?.data?.[0]?.colgroup,
    });
  }, [gridLayoutProps]);

  return (
    <Form name="tableGridLayoutMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'layout',
                require: false,
                label: <Label>{Intl.get('direction')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="layout">
                      <DirectionSelectStandardDict placeholder={Intl.get('direction')} />
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
                key: 'density',
                require: false,
                label: <Label>{Intl.get('density')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="density">
                      <DensitySelectStandardDict />
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
                    <Form.Item name="mode">
                      <TableGridLayoutModeTypeSelectStandardDict />
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
                        max={5}
                        min={1}
                        placeholder={Intl.get('column_count')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'width',
                require: false,
                label: <Label>{Intl.get('width')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="width">
                      <TableGridLayoutColgroupSetting columnCount={columnCount} layout={layout} />
                    </Form.Item>
                  </Value>
                ),
              },
            ],
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
  return <MainProperty {...props} />;
}
