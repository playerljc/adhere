import merge from 'lodash.merge';
import React, { type ReactNode, useContext, useEffect, useMemo, useRef } from 'react';

import { Form, InputNumberInteger, Select, Switch } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import {
  type FormPropertyLabelSlotRef,
  TabsSizeSelectStandardDict,
  TabsTabPlacementSelectStandardDict,
  TabsTabSettingFormItem,
  TabsTypeSelectStandardDict,
  buildFormPropertyTitleRow,
} from '../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import type { InternalTabsLayoutProps } from './InternalTabs';

/**
 * MainProperty
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  const [form] = Form.useForm();
  const tabItemsWatch = Form.useWatch('tabItems', form);

  const { getActiveFieldId, setFieldProps } = useContext(DesignContext);

  const { fieldProps } = props;
  const tabsProps = fieldProps as InternalTabsLayoutProps;
  const tabItemsForSelect = tabItemsWatch ?? tabsProps.tabItems ?? [];

  const titleSlotStore = useRef<Record<string, unknown>>({});
  const titleLabelSlot = useMemo<FormPropertyLabelSlotRef>(
    () => ({
      get: (key: string) => titleSlotStore.current[key],
      set: (key: string, value: unknown) => {
        titleSlotStore.current[key] = value;
      },
    }),
    [],
  );

  const titleRow = useMemo(() => buildFormPropertyTitleRow(titleLabelSlot), [titleLabelSlot]);

  function onFieldsChange() {
    const values = form.getFieldsValue();

    setFieldProps(getActiveFieldId() as string, merge({}, fieldProps, values));
  }

  useEffect(() => {
    form.setFieldsValue({
      tabItems: tabsProps.tabItems ?? [],
      type: tabsProps.type ?? 'line',
      size: tabsProps.size ?? 'middle',
      tabPlacement: tabsProps.tabPlacement ?? 'top',
      centered: tabsProps.centered ?? false,
      defaultActiveKey: tabsProps.defaultActiveKey,
      destroyOnHidden: tabsProps.destroyOnHidden ?? false,
      tabBarGutter: tabsProps.tabBarGutter,
      hideAdd: tabsProps.hideAdd ?? false,
      animated: tabsProps.animated ?? true,
    });
  }, [tabsProps, form]);

  return (
    <Form name="layoutTabsMainProperty" form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: [
              titleRow,
              {
                key: 'type',
                require: false,
                label: <Label>{Intl.get('type')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="type">
                      <TabsTypeSelectStandardDict allowClear placeholder={Intl.get('type')} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'size',
                require: false,
                label: <Label>{Intl.get('tabs_size')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="size">
                      <TabsSizeSelectStandardDict allowClear placeholder={Intl.get('tabs_size')} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'tabPlacement',
                require: false,
                label: <Label>{Intl.get('tabs_tab_placement')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="tabPlacement">
                      <TabsTabPlacementSelectStandardDict
                        allowClear
                        placeholder={Intl.get('tabs_tab_placement')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'centered',
                require: false,
                label: <Label>{Intl.get('tabs_centered')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="centered" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'defaultActiveKey',
                require: false,
                label: <Label>{Intl.get('tabs_default_active_key')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="defaultActiveKey">
                      <Select
                        allowClear
                        placeholder={Intl.get('tab_key')}
                        options={tabItemsForSelect.map((t) => ({
                          label: t.key,
                          value: t.key,
                        }))}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'destroyOnHidden',
                require: false,
                label: <Label>{Intl.get('tabs_destroy_on_hidden')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="destroyOnHidden" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'tabBarGutter',
                require: false,
                label: <Label>{Intl.get('tabs_tab_bar_gutter')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="tabBarGutter">
                      <InputNumberInteger.InputPositiveNumberInteger
                        placeholder={Intl.get('tabs_tab_bar_gutter')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'hideAdd',
                require: false,
                label: <Label>{Intl.get('tabs_hide_add')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="hideAdd" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'animated',
                require: false,
                label: <Label>{Intl.get('tabs_animated')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="animated" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'tabItems',
                require: false,
                label: <Label>{Intl.get('tabs_config')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="tabItems" noStyle>
                      <TabsTabSettingFormItem />
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
