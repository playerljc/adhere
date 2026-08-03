import type { Options } from '@popperjs/core/lib/types';

import type { EllipsisProps } from './types';

export type TriggerType = 'hover' | 'click' | 'focus';
export type PopperModifier = NonNullable<Options['modifiers']>[number];

/** 保持历史默认：同时响应 hover 与 focus（与修复前硬编码事件一致） */
export const DEFAULT_TRIGGER: TriggerType[] = ['hover', 'focus'];

const NAMED_HTML_ENTITIES: Record<string, string> = {
  nbsp: ' ',
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  middot: '·',
  ndash: '–',
  mdash: '—',
  lsquo: '‘',
  rsquo: '’',
  ldquo: '“',
  rdquo: '”',
  hellip: '…',
  copy: '©',
  reg: '®',
  trade: '™',
};

/**
 * 规范化 trigger 为数组
 */
export const normalizeTrigger = (trigger: EllipsisProps['trigger']): TriggerType[] => {
  if (Array.isArray(trigger)) {
    return trigger.length > 0 ? trigger : DEFAULT_TRIGGER;
  }

  return trigger ? [trigger] : DEFAULT_TRIGGER;
};

/**
 * 用排序后的内容签名稳定化 trigger 依赖
 */
export const getTriggerDepKey = (trigger: EllipsisProps['trigger']): string =>
  [...normalizeTrigger(trigger)].sort().join('|');

/**
 * 是否给内容容器设置 tabIndex
 * - 仅在「显式传入 trigger 且包含 focus」时启用，避免默认 hover+focus 把所有自定义 tooltip 拉进 Tab 序
 * - 默认仍会监听 focus（子节点可聚焦时生效），与历史行为一致
 */
export const shouldEnableFocusTabIndex = (
  isUseCustomToolTip: boolean,
  hasExplicitTriggerProp: boolean,
  trigger: EllipsisProps['trigger'],
): boolean =>
  isUseCustomToolTip &&
  hasExplicitTriggerProp &&
  normalizeTrigger(trigger).includes('focus');

/**
 * 将值转为可序列化结构（函数统一占位），用于 options 签名比较
 * 避免 inline 每次新建函数引用导致无效 setOptions
 */
export const toSerializable = (value: unknown): unknown => {
  if (typeof value === 'function') {
    return '[Function]';
  }

  if (Array.isArray(value)) {
    return value.map((item) => toSerializable(item));
  }

  if (value && typeof value === 'object') {
    const result: Record<string, unknown> = {};
    Object.keys(value as Record<string, unknown>)
      .sort()
      .forEach((key) => {
        result[key] = toSerializable((value as Record<string, unknown>)[key]);
      });
    return result;
  }

  return value;
};

/**
 * 生成 customTooltipOptions 签名（忽略函数引用差异）
 */
export const getOptionsSignature = (options: Partial<Options> | undefined): string => {
  try {
    return JSON.stringify(toSerializable(options ?? {}));
  } catch {
    return '';
  }
};

const functionIdentityIds = new WeakMap<object, number>();
let functionIdentitySeq = 0;

/**
 * 为函数分配稳定 id（同一函数引用始终相同）
 */
const getFunctionIdentityId = (fn: object): number => {
  const cached = functionIdentityIds.get(fn);
  if (cached != null) {
    return cached;
  }

  functionIdentitySeq += 1;
  functionIdentityIds.set(fn, functionIdentitySeq);
  return functionIdentitySeq;
};

/**
 * 收集 options 中函数引用的身份键，用于感知「仅 fn 变更」
 */
export const getOptionsFunctionKey = (options: unknown): string => {
  const parts: string[] = [];

  const walk = (value: unknown, path: string) => {
    if (typeof value === 'function') {
      parts.push(`${path}#${getFunctionIdentityId(value)}`);
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item, index) => walk(item, `${path}[${index}]`));
      return;
    }

    if (value && typeof value === 'object') {
      Object.keys(value as Record<string, unknown>)
        .sort()
        .forEach((key) => {
          walk((value as Record<string, unknown>)[key], path ? `${path}.${key}` : key);
        });
    }
  };

  walk(options ?? {}, '');
  return parts.join('|');
};

/**
 * 是否为合法 Unicode code point
 */
export const isValidCodePoint = (codePoint: number): boolean =>
  Number.isInteger(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff;

/**
 * 解码一层 HTML 实体（数字 + 常见命名）
 */
export const decodeHtmlEntitiesOnce = (text: string): string =>
  text
    .replace(/&#x([0-9a-fA-F]+);/g, (match, hex: string) => {
      const codePoint = Number.parseInt(hex, 16);
      return isValidCodePoint(codePoint) ? String.fromCodePoint(codePoint) : match;
    })
    .replace(/&#(\d+);/g, (match, dec: string) => {
      const codePoint = Number.parseInt(dec, 10);
      return isValidCodePoint(codePoint) ? String.fromCodePoint(codePoint) : match;
    })
    .replace(
      /&([a-zA-Z]+);/g,
      (match, name: string) => NAMED_HTML_ENTITIES[name.toLowerCase()] ?? match,
    );

/**
 * 将 HTML 字符串转为纯文本（SSR / CSR 同一逻辑）
 */
export const htmlToPlainText = (html: string): string => {
  let text = html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]*>/g, '');

  for (let i = 0; i < 3; i += 1) {
    const next = decodeHtmlEntitiesOnce(text);
    if (next === text) {
      break;
    }
    text = next;
  }

  return text.replace(/\n+$/g, '');
};

/**
 * 更新或插入指定 name 的 popper modifier
 */
export const upsertModifier = (
  modifiers: Options['modifiers'] | undefined,
  nextModifier: Partial<PopperModifier> & { name: string },
): NonNullable<Options['modifiers']> => {
  const nextModifiers = [...(modifiers ?? [])] as NonNullable<Options['modifiers']>;
  const index = nextModifiers.findIndex((modifier) => modifier.name === nextModifier.name);

  if (index >= 0) {
    nextModifiers[index] = { ...nextModifiers[index], ...nextModifier } as PopperModifier;
  } else {
    nextModifiers.push(nextModifier as PopperModifier);
  }

  return nextModifiers;
};

/**
 * 按 name 合并 modifiers
 */
export const mergeModifiersByName = (
  base: Options['modifiers'] | undefined,
  extra: Options['modifiers'] | undefined,
): NonNullable<Options['modifiers']> => {
  let result = [...(base ?? [])] as NonNullable<Options['modifiers']>;

  (extra ?? []).forEach((modifier) => {
    if (modifier && typeof modifier === 'object' && 'name' in modifier && modifier.name) {
      result = upsertModifier(result, modifier as Partial<PopperModifier> & { name: string });
      return;
    }

    result = [...result, modifier as PopperModifier];
  });

  return result;
};

export const DEFAULT_OFFSET_MODIFIER: PopperModifier = {
  name: 'offset',
  options: {
    offset: [0, 8],
  },
};
