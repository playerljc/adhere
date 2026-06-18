import type { MobileViewportPresetId } from '../types';
export type MobileViewportPreset = {
    id: MobileViewportPresetId;
    widthPx: number;
    /** adhere-util-intl 词条 key */
    labelKey: string;
};
export declare const MOBILE_VIEWPORT_PRESETS: readonly MobileViewportPreset[];
export declare const MOBILE_VIEWPORT_DEFAULT_PRESET_ID: MobileViewportPresetId;
export declare function getMobileViewportPresetById(id: MobileViewportPresetId): MobileViewportPreset | undefined;
export declare function getMobileViewportLabel(preset: MobileViewportPreset): string;
