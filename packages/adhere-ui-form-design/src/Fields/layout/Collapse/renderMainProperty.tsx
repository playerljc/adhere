import merge from 'lodash.merge';
import React, { type ReactNode, useContext, useEffect, useMemo, useRef } from 'react';

import { Form, Select, Switch } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';
import { arrayMove } from '@dnd-kit/sortable';

import { DesignContext } from '../../../Design/Context';
import {
  CollapseCollapsibleSelectStandardDict,
  CollapseExpandIconPlacementSelectStandardDict,
  CollapsePanelSettingFormItem,
  CollapseSizeSelectStandardDict,
  type FormPropertyLabelSlotRef,
  buildFormPropertyTitleRow,
} from '../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import { createFlexLayoutDesignValue } from '../FlexLayout';
import type { InternalCollapseLayoutProps } from './InternalCollapse';

type PanelItemLike = { id?: string; key?: string | number };

type ActiveKeyFormValue = string | number | string[] | undefined;

function panelKeys(items: PanelItemLike[] | undefined): string[] {
  return (items ?? []).map((t) => String(t.key ?? '').trim()).filter(Boolean);
}

function panelItemsSignature(items: PanelItemLike[] | undefined): string {
  return JSON.stringify((items ?? []).map((t) => [t.id, String(t.key ?? '').trim()]));
}

function normalizeDefaultActiveKeyForAccordionMode(
  accordion: boolean,
  dk: ActiveKeyFormValue,
  nextKeys: string[],
): ActiveKeyFormValue {
  if (!nextKeys.length) return undefined;
  if (accordion) {
    const one = Array.isArray(dk) ? dk[0] : dk;
    if (one != null && String(one).length && nextKeys.includes(String(one))) return one;
    return nextKeys[0];
  }
  if (Array.isArray(dk)) {
    const filtered = dk.map(String).filter((k) => nextKeys.includes(k));
    return filtered.length ? filtered : [nextKeys[0]];
  }
  if (dk != null && String(dk).length && nextKeys.includes(String(dk))) return [String(dk)];
  return [nextKeys[0]];
}

/**
 * panelItems 增删改 key 后，校正 defaultActiveKey
 */
function resolveCollapseDefaultActiveKey(
  prevItems: PanelItemLike[],
  nextItems: PanelItemLike[],
  accordion: boolean,
  prevDefault: ActiveKeyFormValue,
  formDefault: ActiveKeyFormValue,
): ActiveKeyFormValue {
  const nextKeys = panelKeys(nextItems);
  if (!nextKeys.length) return undefined;

  const tryPick = (d: ActiveKeyFormValue): ActiveKeyFormValue => {
    if (d === undefined || d === null) return undefined;
    if (accordion) {
      const one = Array.isArray(d) ? d[0] : d;
      if (one != null && String(one).length && nextKeys.includes(String(one))) return one;
      return undefined;
    }
    if (Array.isArray(d)) {
      const filtered = d.map(String).filter((k) => nextKeys.includes(k));
      return filtered.length ? filtered : undefined;
    }
    if (String(d).length && nextKeys.includes(String(d))) return [String(d)];
    return undefined;
  };

  const fromForm = tryPick(formDefault);
  if (fromForm !== undefined) return fromForm;

  const fromPrev = tryPick(prevDefault);
  if (fromPrev !== undefined) return fromPrev;

  const oldKeys = panelKeys(prevItems);

  if (nextKeys.length > oldKeys.length) {
    const added = nextKeys.filter((k) => !oldKeys.includes(k));
    if (added.length === 1) {
      return accordion ? added[0] : [added[0]];
    }
  }

  const removed = oldKeys.filter((k) => !nextKeys.includes(k));
  if (removed.length >= 1) {
    if (accordion) {
      const prevOne = Array.isArray(prevDefault) ? prevDefault[0] : prevDefault;
      const ps = prevOne != null ? String(prevOne) : '';
      if (ps && removed.includes(ps)) {
        const oldIndex = oldKeys.indexOf(ps);
        const newIndex = Math.min(Math.max(oldIndex, 0), nextKeys.length - 1);
        return nextKeys[newIndex];
      }
    } else {
      const prevArr = Array.isArray(prevDefault)
        ? prevDefault.map(String)
        : prevDefault != null
        ? [String(prevDefault)]
        : [];
      const hitRemoved = prevArr.some((k) => removed.includes(k));
      if (hitRemoved) {
        const filtered = prevArr.filter((k) => nextKeys.includes(k));
        if (filtered.length) return filtered;
      }
    }
  }

  return accordion ? nextKeys[0] : [nextKeys[0]];
}

/**
 * MainProperty
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  const [form] = Form.useForm();
  const panelItemsWatch = Form.useWatch('panelItems', form);
  const accordionWatch = Form.useWatch('accordion', form);

  const { getActiveFieldId, setFieldProps, updateChildrenById } = useContext(DesignContext);

  const { children, fieldProps } = props;
  const collapseProps = fieldProps as InternalCollapseLayoutProps;
  const panelItemsForSelect = panelItemsWatch ?? collapseProps.panelItems ?? [];
  const accordion = accordionWatch ?? collapseProps.accordion ?? false;

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
    const prevItems = ((fieldProps as InternalCollapseLayoutProps).panelItems ??
      []) as PanelItemLike[];
    if (values.panelItems !== undefined) {
      next.panelItems = values.panelItems;
    }

    const nextItems = ((next as InternalCollapseLayoutProps).panelItems ?? []) as PanelItemLike[];
    const nextKeys = panelKeys(nextItems);
    const panelItemsChanged = panelItemsSignature(prevItems) !== panelItemsSignature(nextItems);

    const nextAccordion =
      values.accordion ?? (next as InternalCollapseLayoutProps).accordion ?? false;
    const prevAccordion = (fieldProps as InternalCollapseLayoutProps).accordion ?? false;

    if (panelItemsChanged) {
      const prevDefault = (fieldProps as InternalCollapseLayoutProps)
        .defaultActiveKey as ActiveKeyFormValue;
      const formDefault = values.defaultActiveKey as ActiveKeyFormValue;
      const resolved = resolveCollapseDefaultActiveKey(
        prevItems,
        nextItems,
        nextAccordion,
        prevDefault,
        formDefault,
      );
      (next as InternalCollapseLayoutProps).defaultActiveKey =
        resolved as InternalCollapseLayoutProps['defaultActiveKey'];
      if (JSON.stringify(resolved) !== JSON.stringify(formDefault)) {
        form.setFieldsValue({ defaultActiveKey: resolved });
      }
    }

    if (nextAccordion !== prevAccordion) {
      const dk = (next as InternalCollapseLayoutProps).defaultActiveKey as ActiveKeyFormValue;
      const normalized = normalizeDefaultActiveKeyForAccordionMode(nextAccordion, dk, nextKeys);
      (next as InternalCollapseLayoutProps).defaultActiveKey =
        normalized as InternalCollapseLayoutProps['defaultActiveKey'];
      form.setFieldsValue({ defaultActiveKey: normalized });
    }

    setFieldProps(getActiveFieldId() as string, next);
  }

  function onAddPanel() {
    updateChildrenById(getActiveFieldId() as string, [
      ...(children ?? []),
      createFlexLayoutDesignValue(),
    ]);
  }

  function onDeletePanel(pid: string) {
    const index = collapseProps.panelItems?.findIndex((t) => t.id === pid);
    updateChildrenById(
      getActiveFieldId() as string,
      children?.filter((_, _index) => _index !== index),
    );
  }

  function onSortChange(originId: string, targetId: string) {
    const list = collapseProps.panelItems ?? [];
    const oldIndex = list.findIndex((t) => t.id === originId);
    const newIndex = list.findIndex((t) => t.id === targetId);
    if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex) return;

    const raw = [...(children ?? [])] as NonNullable<DesignValueProps['children']>;
    if (!raw.length) return;
    if (oldIndex >= raw.length || newIndex >= raw.length) return;

    const nextChildren = arrayMove(raw, oldIndex, newIndex) as NonNullable<
      DesignValueProps['children']
    >;
    updateChildrenById(getActiveFieldId() as string, nextChildren);
  }

  useEffect(() => {
    form.setFieldsValue({
      panelItems: collapseProps.panelItems ?? [],
      accordion: collapseProps.accordion ?? false,
      bordered: collapseProps.bordered ?? true,
      ghost: collapseProps.ghost ?? false,
      collapsible: collapseProps.collapsible,
      size: collapseProps.size ?? 'medium',
      expandIconPlacement: collapseProps.expandIconPlacement ?? 'start',
      destroyOnHidden: collapseProps.destroyOnHidden ?? false,
      defaultActiveKey: collapseProps.defaultActiveKey,
    });
  }, [collapseProps, form]);

  const defaultKeyOptions = useMemo(
    () =>
      panelItemsForSelect.map((p) => ({
        label: String(p.key ?? ''),
        value: String(p.key ?? ''),
      })),
    [panelItemsForSelect],
  );

  return (
    <Form name="layoutCollapseMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'accordion',
                require: false,
                label: <Label>{Intl.get('collapse_accordion')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="accordion" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'bordered',
                require: false,
                label: <Label>{Intl.get('collapse_bordered')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="bordered" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'ghost',
                require: false,
                label: <Label>{Intl.get('collapse_ghost')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="ghost" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'collapsible',
                require: false,
                label: <Label>{Intl.get('collapse_collapsible')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="collapsible">
                      <CollapseCollapsibleSelectStandardDict
                        allowClear
                        placeholder={Intl.get('collapse_collapsible')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'size',
                require: false,
                label: <Label>{Intl.get('collapse_size')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="size">
                      <CollapseSizeSelectStandardDict
                        allowClear
                        placeholder={Intl.get('collapse_size')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'expandIconPlacement',
                require: false,
                label: <Label>{Intl.get('collapse_expand_icon_placement')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="expandIconPlacement">
                      <CollapseExpandIconPlacementSelectStandardDict
                        allowClear
                        placeholder={Intl.get('collapse_expand_icon_placement')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'destroyOnHidden',
                require: false,
                label: <Label>{Intl.get('collapse_destroy_on_hidden')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="destroyOnHidden" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'defaultActiveKey',
                require: false,
                label: <Label>{Intl.get('collapse_default_active_key')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="defaultActiveKey">
                      <Select
                        allowClear
                        mode={accordion ? undefined : 'multiple'}
                        placeholder={Intl.get('tab_key')}
                        options={defaultKeyOptions}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'panelItems',
                require: false,
                label: <Label>{Intl.get('collapse_panel_config')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="panelItems" noStyle>
                      <CollapsePanelSettingFormItem
                        onAdd={onAddPanel}
                        onDelete={onDeletePanel}
                        onSortChange={onSortChange}
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
