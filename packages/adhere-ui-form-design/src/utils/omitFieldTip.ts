import type { FieldProps } from '../types';

export function omitFieldTip<T extends FieldProps>(fieldProps: T): Omit<T, 'tip'> {
  if (!fieldProps) {
    return fieldProps;
  }
  const { tip: _tip, ...rest } = fieldProps;
  return rest;
}
