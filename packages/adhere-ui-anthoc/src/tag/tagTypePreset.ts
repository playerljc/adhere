import type { GlobalToken } from 'antd/es/theme/interface';
import { PresetColors } from 'antd/es/theme/interface';

import type { InternalTagProps, TagResolvedColors } from './types';

type TagColorTriple = TagResolvedColors;

function pickPresetColorTokens(token: GlobalToken, colorKey: string): TagColorTriple {
  const t = token as GlobalToken & Record<string, string>;
  return {
    bgColor: t[`${colorKey}1`],
    borderColor: t[`${colorKey}3`],
    textColor: t[`${colorKey}7`],
  };
}

function getTypePreset(token: GlobalToken, type: string): TagColorTriple | undefined {
  const alertMap: Record<string, TagColorTriple> = {
    success: {
      textColor: token.colorSuccessText,
      bgColor: token.colorSuccessBg,
      borderColor: token.colorSuccessBorder,
    },
    info: {
      textColor: token.colorInfoText,
      bgColor: token.colorInfoBg,
      borderColor: token.colorInfoBorder,
    },
    warning: {
      textColor: token.colorWarningText,
      bgColor: token.colorWarningBg,
      borderColor: token.colorWarningBorder,
    },
    error: {
      textColor: token.colorErrorText,
      bgColor: token.colorErrorBg,
      borderColor: token.colorErrorBorder,
    },
    danger: {
      textColor: token.colorErrorText,
      bgColor: token.colorErrorBg,
      borderColor: token.colorErrorBorder,
    },
    primary: {
      textColor: token.colorPrimaryText,
      bgColor: token.colorPrimaryBg,
      borderColor: token.colorPrimaryBorder,
    },
    processing: {
      textColor: token.colorInfoText,
      bgColor: token.colorInfoBg,
      borderColor: token.colorInfoBorder,
    },
    default: {
      textColor: token.colorText,
      bgColor: token.colorFillAlter,
      borderColor: token.colorBorder,
    },
    secondary: {
      textColor: token.colorTextSecondary,
      bgColor: token.colorFillAlter,
      borderColor: token.colorBorder,
    },
    neutral: {
      textColor: token.colorTextDescription,
      bgColor: token.colorFillQuaternary,
      borderColor: token.colorBorderSecondary,
    },
    disabled: {
      textColor: token.colorTextDisabled,
      bgColor: token.colorBgContainerDisabled,
      borderColor: token.colorBorder,
    },
  };

  if (type in alertMap) {
    return alertMap[type];
  }

  if ((PresetColors as readonly string[]).includes(type)) {
    return pickPresetColorTokens(token, type);
  }

  return alertMap.default;
}

export function hasCustomTagColors(props: Pick<InternalTagProps, 'textColor' | 'bgColor' | 'borderColor'>) {
  return props.textColor != null || props.bgColor != null || props.borderColor != null;
}

export function resolveTagColors(
  props: Pick<InternalTagProps, 'type' | 'textColor' | 'bgColor' | 'borderColor'>,
  token: GlobalToken,
): { colors: TagResolvedColors; useCustomColors: boolean } {
  const { type, textColor, bgColor, borderColor } = props;

  if (hasCustomTagColors(props)) {
    return {
      useCustomColors: true,
      colors: {
        ...(textColor != null ? { textColor } : {}),
        ...(bgColor != null ? { bgColor } : {}),
        ...(borderColor != null ? { borderColor } : {}),
      },
    };
  }

  if (type) {
    const preset = getTypePreset(token, type);
    if (preset) {
      return {
        useCustomColors: true,
        colors: preset,
      };
    }
  }

  return {
    useCustomColors: false,
    colors: {},
  };
}
