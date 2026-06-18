import type { FieldProps } from '../types';
export declare function omitFieldTip<T extends FieldProps>(fieldProps: T): Omit<T, 'tip'>;
