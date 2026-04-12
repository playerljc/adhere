import merge from 'lodash.merge';
import React, { type ReactNode, useContext, useEffect, useMemo, useRef } from 'react';

import { Form, InputNumberInteger, Select, Switch } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';
import { arrayMove } from '@dnd-kit/sortable';

import { DesignContext } from '../../../Design/Context';
import {
  DirectionSelectStandardDict,
  type FormPropertyLabelSlotRef,
  StepsSizeSelectStandardDict,
  StepsStatusSelectStandardDict,
  StepsStepSettingFormItem,
  StepsSwiperDirectionSelectStandardDict,
  StepsSwiperItemLayoutModeSelectStandardDict,
  StepsSwiperItemRenderModeSelectStandardDict,
  StepsTypeSelectStandardDict,
  buildFormPropertyTitleRow,
} from '../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import { createFlexLayoutDesignValue } from '../FlexLayout';
import type { InternalStepsLayoutProps } from './InternalSteps';

type StepItemLike = { id?: string };

function stepItemsSignature(items: StepItemLike[] | undefined): string {
  return JSON.stringify((items ?? []).map((t) => t.id));
}

function resolveStepsCurrent(
  prevItems: StepItemLike[],
  nextItems: StepItemLike[],
  prevCurrent: number | undefined,
  formCurrent: number | undefined,
): number {
  const n = nextItems.length;
  if (n === 0) return 0;
  const max = n - 1;

  if (formCurrent != null && Number.isFinite(formCurrent)) {
    const fc = Math.floor(Number(formCurrent));
    if (fc >= 0 && fc <= max) return fc;
  }

  const prevIdx =
    prevCurrent != null && Number.isFinite(prevCurrent) ? Math.floor(Number(prevCurrent)) : 0;
  const prevId = prevItems[prevIdx]?.id;
  if (prevId != null) {
    const idx = nextItems.findIndex((s) => s.id === prevId);
    if (idx >= 0) return idx;
  }

  if (prevIdx >= 0 && prevIdx <= max) return prevIdx;

  const oldIds = prevItems.map((s) => s.id);
  const newIds = nextItems.map((s) => s.id);
  if (newIds.length > oldIds.length) {
    const added = newIds.filter((id) => id && !oldIds.includes(id));
    if (added.length === 1) {
      const idx = nextItems.findIndex((s) => s.id === added[0]);
      if (idx >= 0) return idx;
    }
  }

  return Math.min(Math.max(0, prevIdx), max);
}

/** 旧版 progressDot + type default 等价于新版 type: 'dot' */
function resolveStepsTypeForForm(stepsProps: InternalStepsLayoutProps) {
  const t = stepsProps.type;
  if (stepsProps.progressDot && (t === undefined || t === 'default')) {
    return 'dot';
  }
  return t ?? 'default';
}

/**
 * MainProperty
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  const [form] = Form.useForm();
  const stepItemsWatch = Form.useWatch('stepItems', form);

  const { getActiveFieldId, setFieldProps, updateChildrenById } = useContext(DesignContext);

  const { children, fieldProps } = props;
  const stepsProps = fieldProps as InternalStepsLayoutProps;
  const stepItemsForSelect = stepItemsWatch ?? stepsProps.stepItems ?? [];

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
    const prevItems = ((fieldProps as InternalStepsLayoutProps).stepItems ?? []) as StepItemLike[];
    if (values.stepItems !== undefined) {
      next.stepItems = values.stepItems;
    }

    const nextItems = ((next as InternalStepsLayoutProps).stepItems ?? []) as StepItemLike[];
    const stepItemsChanged = stepItemsSignature(prevItems) !== stepItemsSignature(nextItems);
    if (stepItemsChanged) {
      const prevCurrent = (fieldProps as InternalStepsLayoutProps).current;
      const formCurrent = values.current as number | undefined;
      const resolved = resolveStepsCurrent(prevItems, nextItems, prevCurrent, formCurrent);
      (next as InternalStepsLayoutProps).current = resolved;
      if (resolved !== formCurrent) {
        form.setFieldsValue({ current: resolved });
      }
    }

    const normalized = next as InternalStepsLayoutProps & {
      labelPlacement?: unknown;
      progressDot?: unknown;
    };
    if (normalized.labelPlacement != null && normalized.titlePlacement == null) {
      normalized.titlePlacement = normalized.labelPlacement as 'horizontal' | 'vertical';
    }
    delete normalized.labelPlacement;
    delete normalized.progressDot;

    setFieldProps(getActiveFieldId() as string, normalized);
  }

  function onAddStep() {
    updateChildrenById(getActiveFieldId() as string, [
      ...(children ?? []),
      createFlexLayoutDesignValue(),
    ]);
  }

  function onDeleteStep(id: string) {
    const index = stepsProps.stepItems?.findIndex((t) => t.id === id);
    updateChildrenById(
      getActiveFieldId() as string,
      children?.filter((_, _index) => _index !== index),
    );
  }

  function onSortChange(originId: string, targetId: string) {
    const list = stepsProps.stepItems ?? [];
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
      stepItems: stepsProps.stepItems ?? [],
      current: stepsProps.current ?? stepsProps.initial ?? 0,
      initial: stepsProps.initial ?? 0,
      direction: stepsProps.direction ?? 'top',
      isFullWidth: stepsProps.isFullWidth ?? false,
      isFullHeight: stepsProps.isFullHeight ?? false,
      itemRenderMode: stepsProps.itemRenderMode ?? 'lazy',
      itemLayoutMode: stepsProps.itemLayoutMode ?? 'auto',
      type: resolveStepsTypeForForm(stepsProps),
      size: stepsProps.size ?? 'default',
      status: stepsProps.status,
      titlePlacement: stepsProps.titlePlacement ?? stepsProps.labelPlacement ?? 'horizontal',
      responsive: stepsProps.responsive ?? true,
      percent: stepsProps.percent,
    });
  }, [stepsProps, form]);

  const currentOptions = useMemo(
    () =>
      stepItemsForSelect.map((_, i) => ({
        label: `${i + 1}`,
        value: i,
      })),
    [stepItemsForSelect],
  );

  return (
    <Form name="layoutStepsMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'direction',
                require: false,
                label: <Label>{Intl.get('steps_direction')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="direction">
                      <StepsSwiperDirectionSelectStandardDict
                        allowClear
                        placeholder={Intl.get('steps_direction')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'isFullWidth',
                require: false,
                label: <Label>{Intl.get('steps_is_full_width')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="isFullWidth" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'isFullHeight',
                require: false,
                label: <Label>{Intl.get('steps_is_full_height')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="isFullHeight" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'itemRenderMode',
                require: false,
                label: <Label>{Intl.get('steps_item_render_mode')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="itemRenderMode">
                      <StepsSwiperItemRenderModeSelectStandardDict
                        allowClear
                        placeholder={Intl.get('steps_item_render_mode')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'itemLayoutMode',
                require: false,
                label: <Label>{Intl.get('steps_item_layout_mode')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="itemLayoutMode">
                      <StepsSwiperItemLayoutModeSelectStandardDict
                        allowClear
                        placeholder={Intl.get('steps_item_layout_mode')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'type',
                require: false,
                label: <Label>{Intl.get('type')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="type">
                      <StepsTypeSelectStandardDict allowClear placeholder={Intl.get('type')} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'size',
                require: false,
                label: <Label>{Intl.get('input_size')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="size">
                      <StepsSizeSelectStandardDict
                        allowClear
                        placeholder={Intl.get('input_size')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'status',
                require: false,
                label: <Label>{Intl.get('steps_status')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="status">
                      <StepsStatusSelectStandardDict
                        allowClear
                        placeholder={Intl.get('steps_status')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'titlePlacement',
                require: false,
                label: <Label>{Intl.get('steps_title_placement')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="titlePlacement">
                      <DirectionSelectStandardDict
                        allowClear
                        placeholder={Intl.get('steps_title_placement')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'initial',
                require: false,
                label: <Label>{Intl.get('steps_initial')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="initial">
                      <InputNumberInteger.InputPositiveNumberInteger
                        placeholder={Intl.get('steps_initial')}
                        min={0}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'current',
                require: false,
                label: <Label>{Intl.get('steps_current')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="current">
                      <Select
                        allowClear
                        placeholder={Intl.get('steps_current')}
                        options={currentOptions}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'responsive',
                require: false,
                label: <Label>{Intl.get('steps_responsive')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="responsive" valuePropName="checked">
                      <Switch />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'percent',
                require: false,
                label: <Label>{Intl.get('steps_percent')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="percent">
                      <InputNumberInteger.InputPositiveNumberInteger
                        placeholder={Intl.get('steps_percent')}
                        min={0}
                        max={100}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'stepItems',
                require: false,
                label: <Label>{Intl.get('steps_step_config')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="stepItems" noStyle>
                      <StepsStepSettingFormItem
                        onAdd={onAddStep}
                        onDelete={onDeleteStep}
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
 */
export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty {...props} />;
}
