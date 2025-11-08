import React, { forwardRef, useEffect, useImperativeHandle, useMemo } from 'react';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { Form, FormItem, Input, NumberPicker } from '@formily/antd-v5';

import type { PromptFormProps, PromptFormRefHandle } from './types';
import { PROMPT_LAYOUT } from './Constant';

/**
 * 将精简的 form-render 风格 schema 转换为 Formily JSON Schema
 */
function toFormilySchema(schema: PromptFormProps['schema']): any {
  const properties: Record<string, any> = {};

  Object.entries(schema?.properties ?? {}).forEach(([name, cfg]) => {
    const widget = cfg.widget ?? (cfg.type === 'number' ? 'inputNumber' : 'input');

    let xComponent: string;
    switch (widget) {
      case 'textArea':
        xComponent = 'Input.TextArea';
        break;
      case 'inputNumber':
        xComponent = 'NumberPicker';
        break;
      case 'input':
      default:
        xComponent = 'Input';
        break;
    }

    properties[name] = {
      type: cfg.type ?? 'string',
      title: cfg.title,
      required: !!cfg.required,
      'x-decorator': 'FormItem',
      'x-component': xComponent,
      'x-component-props': cfg.props ?? {},
    };
  });

  return {
    type: 'object',
    properties,
  };
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    NumberPicker,
  },
});

/**
 * PromptForm（基于 Formily 实现）
 */
const PromptForm = forwardRef<PromptFormRefHandle, PromptFormProps>((props, ref) => {
  const form = useMemo(() => createForm(), []);

  useEffect(() => {
    if (props.initialValues) {
      form.setInitialValues(props.initialValues);
    }
  }, [form, props.initialValues]);

  useImperativeHandle(ref, () => ({
    validateFields: async () => {
      await form.validate();
      return form.values;
    },
  }));

  const schema = useMemo(() => toFormilySchema(props.schema), [props.schema]);

  // 合并布局配置，优先使用 props 传入的配置
  const formLayout = useMemo(() => {
    const layoutType = props.layout?.type ?? 'horizontal';
    const labelCol = props.layout?.labelCol?.span ?? PROMPT_LAYOUT.labelCol.span;
    const wrapperCol = props.layout?.wrapperCol?.span ?? PROMPT_LAYOUT.wrapperCol.span;
    const colon = props.layout?.colon;

    return { layoutType, labelCol, wrapperCol, colon };
  }, [props.layout]);

  return (
    <FormProvider form={form}>
      <Form 
        labelCol={formLayout.labelCol} 
        wrapperCol={formLayout.wrapperCol} 
        layout={formLayout.layoutType}
        colon={formLayout.colon}
      >
        <SchemaField schema={schema} />
      </Form>
    </FormProvider>
  );
});

export default PromptForm;
