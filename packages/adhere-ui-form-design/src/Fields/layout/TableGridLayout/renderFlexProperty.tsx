import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import {
  DensitySelectStandardDict,
  DirectionSelectStandardDict,
  TableGridLayoutModeTypeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';

/**
 * FlexProperty
 * @description 控件的属性面板，如果控件是TableGridLayout，那么属性面板就是TableGridLayout的属性面板
 * @param {DesignValueProps} props
 */
export function FlexProperty(props: DesignValueProps) {
  // 表单的instance
  const [form] = Form.useForm();

  const {
    // 获取当前激活的控件的id(也就是Editor中选中的控件)
    getActiveFieldId,
    // 设置控件的属性
    setFlexProps,
  } = useContext(DesignContext);

  // 控件的数据
  const { flexProps } = props;

  function onFieldsChange() {
    const values = form.getFieldsValue();

    setFlexProps(getActiveFieldId() as string, values);
  }

  useEffect(() => {
    // 设置控件的数据到表单
    form.setFieldsValue({});
  }, [flexProps]);

  return (
    <Form name="tableGridLayoutFlexProperty" form={form} onFieldsChange={onFieldsChange}>
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
            ],
          },
        ]}
      />
    </Form>
  );
}

/**
 * renderFlexProperty
 * @param {DesignValueProps} props
 * @return ReactElement
 */
export function renderFlexProperty(props: DesignValueProps): ReactNode {
  return <FlexProperty {...props} />;
}
