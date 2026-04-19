import Intl from '@baifendian/adhere-util-intl';

import type { MobileViewportPresetId } from '../types';

export type MobileViewportPreset = {
  id: MobileViewportPresetId;
  widthPx: number;
  /** adhere-util-intl 词条 key */
  labelKey: string;
};

export const MOBILE_VIEWPORT_PRESETS: readonly MobileViewportPreset[] = [
  { id: 'w360', widthPx: 360, labelKey: 'mobile_viewport_360' },
  { id: 'w375', widthPx: 375, labelKey: 'mobile_viewport_375' },
  { id: 'w390', widthPx: 390, labelKey: 'mobile_viewport_390' },
  { id: 'w393', widthPx: 393, labelKey: 'mobile_viewport_393' },
  { id: 'w414', widthPx: 414, labelKey: 'mobile_viewport_414' },
  { id: 'w428', widthPx: 428, labelKey: 'mobile_viewport_428' },
] as const;

export const MOBILE_VIEWPORT_DEFAULT_PRESET_ID: MobileViewportPresetId = 'w375';

export function getMobileViewportPresetById(
  id: MobileViewportPresetId,
): MobileViewportPreset | undefined {
  return MOBILE_VIEWPORT_PRESETS.find((p) => p.id === id);
}

export function getMobileViewportLabel(preset: MobileViewportPreset): string {
  return Intl.get(preset.labelKey);
}
