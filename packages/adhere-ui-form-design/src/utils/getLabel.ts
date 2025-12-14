import type { FormItemProps, I18nValue } from '../types';

export function getLabel(props: FormItemProps, lang: string) {
  return (props.label as unknown as I18nValue)[lang];
}
