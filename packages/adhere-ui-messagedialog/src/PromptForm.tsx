import FormRender, { useForm } from 'form-render';
import React, { forwardRef, useImperativeHandle } from 'react';

import type { PromptFormProps, PromptFormRefHandle } from './types';

/**
 * PromptForm
 */
const PromptForm = forwardRef<PromptFormRefHandle, PromptFormProps>((props, ref) => {
  const form = useForm();

  useImperativeHandle(ref, () => ({
    validateFields: () => form.validateFields(),
  }));

  return <FormRender form={form} {...props} />;
});

export default PromptForm;
