import type { CSSProperties } from 'react';

import type { DesignValueProps, FieldProps, Terminal } from '../../../types';
import { mergeMobilePreviewFieldProps } from '../../../utils';

/** 触控间距：在原有 gap 上增加 4~8px，取中间值 6px */
const TOUCH_GAP_EXTRA_PX = 6;

function bumpGapForTouch(gap: CSSProperties['gap']): CSSProperties['gap'] | undefined {
  if (gap === null || gap === undefined || gap === '') return undefined;
  if (typeof gap === 'number' && Number.isFinite(gap)) {
    return gap + TOUCH_GAP_EXTRA_PX;
  }
  if (typeof gap === 'string') {
    const trimmed = gap.trim();
    const pxMatch = trimmed.match(/^(-?\d*\.?\d+)px$/i);
    if (pxMatch) {
      return `${parseFloat(pxMatch[1]) + TOUCH_GAP_EXTRA_PX}px`;
    }
    const n = Number(trimmed);
    if (Number.isFinite(n)) {
      return n + TOUCH_GAP_EXTRA_PX;
    }
  }
  return undefined;
}

/** FlexLayout：移动端预览建议（竖向 + 触控间距）；用户 fieldPropsByTerminal.mobile 仍可覆盖 */
function mobileSuggestion(base: FieldProps): Partial<FieldProps> {
  const patch: Partial<FieldProps> = {};
  const b = base as { direction?: 'horizontal' | 'vertical'; gap?: CSSProperties['gap'] };

  if (b.direction !== 'vertical') {
    patch.direction = 'vertical';
  }

  const nextGap = bumpGapForTouch(b.gap);
  if (nextGap !== undefined) {
    patch.gap = nextGap;
  }

  return patch;
}

export function resolveFieldPropsForDesignEditor(
  props: DesignValueProps,
  terminal: Terminal,
): FieldProps {
  return mergeMobilePreviewFieldProps(props, terminal, mobileSuggestion(props.fieldProps));
}
