import React, { type ReactNode, useContext, useEffect, useMemo, useRef } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { DesignContext } from '../Design/Context';
import {
  type FormPropertyLabelSlotRef,
  PropertiesGridLayout,
  buildFormPropertyFillRow,
} from '../components';
import type { DesignValueProps, FieldProps } from '../types';
import { mergeMobilePreviewFieldProps } from './fieldPropsTerminal';

export interface GetDefaultFormItemsCtx {
  form: ReturnType<typeof Form.useForm>[0];
  /**
   * useWatch 监听到的表单值
   * - `Form.useWatch([], form)`：监听整个表单
   * - 可能为 `undefined`（首次渲染/尚未 setFieldsValue）
   */
  watchValues: any;
  /** 与 buildFormPropertyTitleRow 配合，挂载 SlotEndLabel 节点供语言切换弹层定位 */
  titleLabelSlot: FormPropertyLabelSlotRef;
}

export interface CreateMainPropertyOptions {
  /** 表单名称 */
  formName: string;
  /** 默认表单项数组（不包含 fill） */
  getDefaultFormItems: (
    designValue: DesignValueProps,
    ctx: GetDefaultFormItemsCtx,
  ) => DataItemRow[];
  /** 是否自动添加 fill 设置项（默认 true） */
  autoFill?: boolean;
  /**
   * 将存储在 fieldProps(payload) 的值转换为表单可消费的 values
   * - 典型场景：时间戳 <-> dayjs
   */
  payloadToValues?: (
    fieldProps: any,
    ctx: {
      designValue: DesignValueProps;
      form: ReturnType<typeof Form.useForm>[0];
      watchValues: any;
      titleLabelSlot: FormPropertyLabelSlotRef;
    },
  ) => any;
  /**
   * 将表单 values 转换为写回 fieldProps(payload) 的值
   */
  valuesToPayload?: (
    values: any,
    ctx: {
      designValue: DesignValueProps;
      form: ReturnType<typeof Form.useForm>[0];
      watchValues: any;
      titleLabelSlot: FormPropertyLabelSlotRef;
    },
  ) => any;
  /**
   * 自定义 onFieldsChange 逻辑
   * - 典型场景：字段互斥/归一化，需要回写 form.setFieldsValue
   */
  onFieldsChange?: (ctx: {
    designValue: DesignValueProps;
    form: ReturnType<typeof Form.useForm>[0];
    watchValues: any;
    titleLabelSlot: FormPropertyLabelSlotRef;
    getActiveFieldId: () => string | null | undefined;
    setFieldProps: (id: string, props: any) => void;
    valuesToPayload: (values: any) => any;
  }) => void;
}

export function createMainProperty(options: CreateMainPropertyOptions) {
  const {
    formName,
    getDefaultFormItems,
    autoFill = true,
    payloadToValues,
    valuesToPayload,
    onFieldsChange,
  } = options;

  return function MainProperty({
    designValue,
    renderFormItems,
  }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
  }): ReactNode {
    const [form] = Form.useForm();
    const { getActiveFieldId, setFieldProps, getTerminal } = useContext(DesignContext);
    const { fieldProps, fieldPropsByTerminal } = designValue;
    const terminal = getTerminal();

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

    // 监听属性面板表单值，用于动态生成表单项
    const watchValues = Form.useWatch([], form);

    const convertCtx = useMemo(
      () => ({
        designValue,
        form,
        watchValues,
        titleLabelSlot,
      }),
      [designValue, form, titleLabelSlot, watchValues],
    );

    // 获取默认表单项（可根据 watchValues 动态变化）
    const baseFormItems = useMemo(
      () =>
        getDefaultFormItems(designValue, {
          form,
          watchValues,
          titleLabelSlot,
        }),
      [designValue, form, getDefaultFormItems, titleLabelSlot, watchValues],
    );

    // 自动添加 fill 设置项
    const defaultFormItems: DataItemRow[] = autoFill
      ? [...baseFormItems, buildFormPropertyFillRow()]
      : baseFormItems;

    const valuesToPayloadFn = useMemo(() => {
      if (!valuesToPayload) return (values: any) => values;
      return (values: any) => valuesToPayload(values, convertCtx);
    }, [convertCtx, valuesToPayload]);

    /** 属性面板展示用：移动端为基线 + fieldPropsByTerminal.mobile（与 setFieldProps 写 overlay 一致） */
    const displayFieldProps = useMemo(
      () =>
        mergeMobilePreviewFieldProps(
          { fieldProps, fieldPropsByTerminal },
          terminal,
          {},
        ) as FieldProps,
      [fieldProps, fieldPropsByTerminal, terminal],
    );

    function onFieldsChangeInternal() {
      if (onFieldsChange) {
        onFieldsChange({
          designValue,
          form,
          watchValues,
          titleLabelSlot,
          getActiveFieldId,
          setFieldProps,
          valuesToPayload: valuesToPayloadFn,
        });
        return;
      }

      const values = valuesToPayloadFn(form.getFieldsValue());
      setFieldProps(getActiveFieldId() as string, { ...values });
    }

    useEffect(() => {
      const values = payloadToValues
        ? payloadToValues(displayFieldProps, convertCtx)
        : displayFieldProps;
      form.setFieldsValue(values);
      // 仅随存储中的 fieldProps / overlay 变化同步；勿依赖含 watchValues 的 convertCtx，否则每次输入都会 setFieldsValue
    }, [displayFieldProps, form, payloadToValues]);

    return (
      <Form name={formName} form={form} onFieldsChange={onFieldsChangeInternal}>
        <PropertiesGridLayout
          layout="vertical"
          data={[
            {
              name: 'g1',
              width: '100%',
              columnCount: 1,
              colgroup: ['auto'],
              data: renderFormItems ? renderFormItems(defaultFormItems) : defaultFormItems,
            },
          ]}
        />
      </Form>
    );
  };
}

export function renderMainProperty(
  Component: ReturnType<typeof createMainProperty>,
  props: DesignValueProps,
): ReactNode {
  return <Component designValue={props} />;
}
