import merge from 'lodash.merge';
import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input, Select, Switch } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import type { InternalCardLayoutProps } from './InternalCard';

/**
 * MainProperty
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  const [form] = Form.useForm();

  const { getActiveFieldId, setFieldProps } = useContext(DesignContext);

  const { fieldProps } = props;
  const cardProps = fieldProps as InternalCardLayoutProps;

  function onFieldsChange() {
    const values = form.getFieldsValue();

    setFieldProps(getActiveFieldId() as string, merge({}, fieldProps, values));
  }

  useEffect(() => {
    form.setFieldsValue({
      title: typeof cardProps.title === 'string' ? cardProps.title : undefined,
      extra: typeof cardProps.extra === 'string' ? cardProps.extra : undefined,
      variant: cardProps.variant ?? 'outlined',
      size: cardProps.size ?? 'default',
      hoverable: cardProps.hoverable ?? false,
      loading: cardProps.loading ?? false,
      type: cardProps.type,
    });
  }, [cardProps, form]);

  return (
    <Form name="layoutCardMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'title',
                require: false,
                label: <Label>{Intl.get('title')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="title">
                      <Input placeholder={Intl.get('title')} allowClear />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'extra',
                require: false,
                label: <Label>{Intl.get('card_extra')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="extra">
                      <Input placeholder={Intl.get('card_extra')} allowClear />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'variant',
                require: false,
                label: <Label>{Intl.get('card_variant')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="variant">
                      <Select
                        allowClear
                        placeholder={Intl.get('card_variant')}
                        options={[
                          { label: 'outlined', value: 'outlined' },
                          { label: 'borderless', value: 'borderless' },
                        ]}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'size',
                require: false,
                label: <Label>{Intl.get('card_size')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="size">
                      <Select
                        allowClear
                        placeholder={Intl.get('card_size')}
                        options={[
                          { label: 'default', value: 'default' },
                          { label: 'small', value: 'small' },
                        ]}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'hoverable',
                require: false,
                label: <Label>{Intl.get('card_hoverable')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="hoverable" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'loading',
                require: false,
                label: <Label>{Intl.get('card_loading')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="loading" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'type',
                require: false,
                label: <Label>{Intl.get('card_type')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="type">
                      <Select
                        allowClear
                        placeholder={Intl.get('card_type')}
                        options={[{ label: 'inner', value: 'inner' }]}
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
