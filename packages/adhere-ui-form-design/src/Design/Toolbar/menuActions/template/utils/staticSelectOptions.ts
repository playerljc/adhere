import { i18nFromKey } from './i18nFromKey';

export function staticSelectOptions(items: Array<{ labelKey: string; value: string }>) {
  return {
    type: 'static' as const,
    dataSource: items.map(({ labelKey, value }) => ({
      label: i18nFromKey(labelKey),
      value,
    })),
  };
}
