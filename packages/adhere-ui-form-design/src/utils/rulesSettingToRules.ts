import type { RuleObject, StoreValue } from '@rc-component/form/lib/interface';

import type { Rule, RuleConfig } from '../components/RulesSettingFormItem';
import { SELECT_VALUE_KEY_NAME } from '../constant';

type Return = RuleConfig & {
  validate?: RuleObject['validator'];
};

/**
 * 从规则里的 message（I18nValue 对象）解析为当前语言的纯文案，
 * 避免把对象传给 antd 出现 [object Object]。
 * 用 unknown 中转，避免 TypeScript "no overlap" 错误。
 */
function pickRuleMessageText(message: RuleConfig['message'], lang: string): string {
  const raw: unknown = message;

  if (raw == null) return '';

  // 兼容历史存成纯字符串的情况
  if (typeof raw === 'string') return raw;

  if (typeof raw !== 'object') return '';

  const m = raw as Record<string, unknown>;

  // 优先取当前语言
  const byLang = m[lang];
  if (typeof byLang === 'string') return byLang;

  // 次选 selectValue 指向的语言
  const sv = m[SELECT_VALUE_KEY_NAME];
  if (typeof sv === 'string') {
    const bySelect = m[sv];
    if (typeof bySelect === 'string') return bySelect;
  }

  // 兜底：找第一个字符串值
  for (const k of Object.keys(m)) {
    if (k === SELECT_VALUE_KEY_NAME) continue;
    const v = m[k];
    if (typeof v === 'string' && v !== '') return v;
  }

  return '';
}

function hasTreeSelectionCheckedValue(value: StoreValue): boolean {
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  if (value != null && typeof value === 'object') {
    const checked = (value as { checked?: unknown }).checked;
    return Array.isArray(checked) && checked.length > 0;
  }
  return value != null;
}

export function rulesSettingToRules(rules: Rule[], lang: string): Return[] {
  return rules.map((rule) => {
    const {
      type,
      config: { validator, pattern, message, ...restConfig },
    } = rule;

    const messageText = pickRuleMessageText(message, lang);

    if (type === 'tableSelectRequired') {
      return {
        ...restConfig,
        message: messageText || undefined,
        validator: (_rule: RuleObject, value: StoreValue) => {
          const keys = Array.isArray(value) ? value : value != null ? [value] : [];
          if (keys.length > 0) {
            return Promise.resolve();
          }
          return Promise.reject(new Error(messageText || ' '));
        },
      } as unknown as Return;
    }

    if (type === 'treeSelectionRequired') {
      return {
        ...restConfig,
        message: messageText || undefined,
        validator: (_rule: RuleObject, value: StoreValue) => {
          if (hasTreeSelectionCheckedValue(value)) {
            return Promise.resolve();
          }
          return Promise.reject(new Error(messageText || ' '));
        },
      } as unknown as Return;
    }

    return {
      ...restConfig,
      message: messageText,
      pattern: pattern ? new RegExp(pattern) : undefined,
      validator: validator
        ? (rule: RuleObject, value: StoreValue, cb: (error?: string) => void) => {
            const fn = new Function('rule', 'value', 'cb', validator);
            return fn(rule, value, cb);
          }
        : undefined,
    } as unknown as Return;
  });
}
