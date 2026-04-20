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

/**
 * resolveFieldPropsForDesignEditor
 * @description 解析设计编辑器中的字段属性。
 *
 * 根据当前终端类型（Terminal）和基础属性，计算最终展示的 FieldProps。
 * 特别是在移动端预览时，会应用移动端建议样式（如竖向布局、增加触控间距），
 * 但允许用户通过 fieldPropsByTerminal.mobile 进行覆盖。
 *
 * @param props - 设计值属性对象，包含基础字段属性等
 * @param terminal - 当前终端类型（如 mobile, pc 等）
 * @returns 解析后的完整字段属性
 */
export function resolveFieldPropsForDesignEditor(
  props: DesignValueProps,
  terminal: Terminal,
): FieldProps {
  return mergeMobilePreviewFieldProps(props, terminal, mobileSuggestion(props.fieldProps));
}
