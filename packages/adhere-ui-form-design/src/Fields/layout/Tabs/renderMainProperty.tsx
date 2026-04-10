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

type TabItemLike = { id?: string; key?: string };

function tabKeys(items: TabItemLike[] | undefined): string[] {
  return (items ?? []).map((t) => String(t.key ?? '').trim()).filter(Boolean);
}

function tabItemsSignature(items: TabItemLike[] | undefined): string {
  return JSON.stringify((items ?? []).map((t) => [t.id, String(t.key ?? '').trim()]));
}

/**
 * tabItems 增删改 key 后，校正 defaultActiveKey（对齐 antd 可编辑 Tabs：删当前项时选中同下标或最后一项的前一项；仅新增一项时选中新 key）
 */
function resolveTabsDefaultActiveKey(
  prevItems: TabItemLike[],
  nextItems: TabItemLike[],
  prevDefault: string | undefined,
  formDefault: string | undefined,
): string | undefined {
  const nextKeys = tabKeys(nextItems);
  if (!nextKeys.length) return undefined;

  const fromForm =
    formDefault != null && String(formDefault).length ? String(formDefault) : undefined;
  if (fromForm && nextKeys.includes(fromForm)) {
    return fromForm;
  }

  const prevDefaultStr =
    prevDefault != null && String(prevDefault).length ? String(prevDefault) : undefined;
  if (prevDefaultStr && nextKeys.includes(prevDefaultStr)) {
    return prevDefaultStr;
  }

  const oldKeys = tabKeys(prevItems);

  if (nextKeys.length > oldKeys.length) {
    const added = nextKeys.filter((k) => !oldKeys.includes(k));
    if (added.length === 1) {
      return added[0];
    }
  }

  const removed = oldKeys.filter((k) => !nextKeys.includes(k));
  if (removed.length >= 1 && prevDefaultStr && removed.includes(prevDefaultStr)) {
    const oldIndex = oldKeys.indexOf(prevDefaultStr);
    const newIndex = Math.min(Math.max(oldIndex, 0), nextKeys.length - 1);
    return nextKeys[newIndex];
  }

  return nextKeys[0];
}

/**
 * MainProperty
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  const [form] = Form.useForm();
  const tabItemsWatch = Form.useWatch('tabItems', form);

  const { getActiveFieldId, setFieldProps, deleteFieldByChildren, addChildrenById } =
    useContext(DesignContext);

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
    const next = merge({}, fieldProps, values);
    const prevItems = ((fieldProps as InternalTabsLayoutProps).tabItems ?? []) as TabItemLike[];
    // lodash.merge 会按索引合并数组，删除 tabItems 时短数组无法“删掉”长数组尾部项，需整段替换
    if (values.tabItems !== undefined) {
      next.tabItems = values.tabItems;
    }

    const nextItems = ((next as InternalTabsLayoutProps).tabItems ?? []) as TabItemLike[];
    const tabItemsChanged = tabItemsSignature(prevItems) !== tabItemsSignature(nextItems);
    if (tabItemsChanged) {
      const prevDefault = (fieldProps as InternalTabsLayoutProps).defaultActiveKey;
      const formDefault = values.defaultActiveKey as string | undefined;
      const resolved = resolveTabsDefaultActiveKey(prevItems, nextItems, prevDefault, formDefault);
      (next as InternalTabsLayoutProps).defaultActiveKey = resolved;
      if (resolved !== formDefault) {
        form.setFieldsValue({ defaultActiveKey: resolved });
      }
    }

    setFieldProps(getActiveFieldId() as string, next);
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
