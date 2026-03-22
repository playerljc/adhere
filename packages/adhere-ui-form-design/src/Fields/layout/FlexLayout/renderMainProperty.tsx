import merge from 'lodash.merge';
import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import {
  AlignContentSelectStandardDict,
  AlignItemsSelectStandardDict,
  DirectionSelectStandardDict,
  JustifyContentSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import type { InternalFlexLayoutProps } from './InternalFlexLayout';

/**
 * MainProperty
 * @description 控件的属性面板，如果控件是TableGridLayout，那么属性面板就是TableGridLayout的属性面板
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  debugger;
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
  const flexLayoutProps: InternalFlexLayoutProps = fieldProps as InternalFlexLayoutProps;

  function onFieldsChange() {
    const { columnCount, width, ...rest } = form.getFieldsValue();

    setFieldProps(
      getActiveFieldId() as string,
      merge({}, fieldProps, {
        ...rest,
      }),
    );
  }

  useEffect(() => {
    // 设置控件的数据到表单
    form.setFieldsValue({
      direction: flexLayoutProps.direction,
      wrap: flexLayoutProps.wrap,
      justifyContent: flexLayoutProps.justifyContent,
      alignItems: flexLayoutProps.alignItems,
      alignContent: flexLayoutProps.alignContent,
      gap: flexLayoutProps.gap,
    });
  }, [flexLayoutProps]);

  return (
    <Form name="layoutMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'direction',
                require: false,
                label: <Label>{Intl.get('direction')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="direction">
                      <DirectionSelectStandardDict placeholder={Intl.get('direction')} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'wrap',
                require: false,
                label: <Label>{Intl.get('wrap')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="wrap">
                      <WhetherRadioHorizontalDict />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'justifyContent',
                require: false,
                label: <Label>{Intl.get('justify_content')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="justifyContent">
                      <JustifyContentSelectStandardDict />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'alignItems',
                require: false,
                label: <Label>{Intl.get('align_items')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="alignItems">
                      <AlignItemsSelectStandardDict />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'alignContent',
                require: false,
                label: <Label>{Intl.get('align_content')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="alignContent">
                      <AlignContentSelectStandardDict />
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
                      <InputNumberInteger.InputPositiveNumberInteger
                        max={500}
                        min={1}
                        placeholder={Intl.get('gap')}
                      />
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
