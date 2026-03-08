import React, { type ReactNode, useContext, useEffect } from 'react';

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

/**
 * MainProperty
 * @description 控件的属性面板，如果控件是TableGridLayout，那么属性面板就是TableGridLayout的属性面板
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  // 表单的instance
  const [form] = Form.useForm();

  const {
    // 获取当前激活的控件的id(也就是Editor中选中的控件)
    getActiveFieldId,
    // 设置控件的属性
    setFieldProps,
  } = useContext(DesignContext);

  // 控件的数据
  const { fieldProps } = props;
  const gridLayoutProps: TableGridLayoutProps = fieldProps as TableGridLayoutProps;

  const columnCount =
    Form.useWatch('columnCount', form) ?? (gridLayoutProps?.data?.[0]?.columnCount as number);

  const layout = Form.useWatch('layout', form) ?? gridLayoutProps?.layout;

  function onFieldsChange() {
    const { columnCount, width, ...rest } = form.getFieldsValue();

    setFieldProps(getActiveFieldId() as string, {
      ...rest,
      data: [
        {
          ...gridLayoutProps?.data?.[0],
          columnCount,
          colgroup: width,
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
