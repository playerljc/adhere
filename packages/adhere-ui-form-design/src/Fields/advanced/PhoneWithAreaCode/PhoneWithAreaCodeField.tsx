import type { CSSProperties } from 'react';
import React, { useMemo } from 'react';

import { Select, Space } from 'antd';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { Input } from '@baifendian/adhere-ui-anthoc';

import { values } from '../../../Dict';
import type { PhoneAreaCodeItem, PhoneAreaCodeRule } from '../../../Dict/PhoneAreaCode';
import { SELECT_PREFIX } from '../../../constant';

const selectorPrefix = `${SELECT_PREFIX}-phone-with-area-code`;

export type PhoneWithAreaCodeValue = {
  code?: string;
  value?: string;
};

export type PhoneWithAreaCodeFieldProps = {
  value?: PhoneWithAreaCodeValue;
  /**
   * 非受控模式下的初始值（设计器画布中使用）
   */
  defaultValue?: PhoneWithAreaCodeValue;
  onChange?: (value: PhoneWithAreaCodeValue) => void;
  disabled?: boolean;
  readOnly?: boolean;
  /**
   * 右侧电话号码输入框是否允许清除
   */
  allowClear?: boolean;
  placeholder?: string;
  defaultCode?: string;
  /**
   * 设计器下发的样式（用于包裹整个字段）
   */
  style?: CSSProperties;
  /**
   * 设计器下发的 actions（事件），需要分发到 Select/Input 上
   */
  actions?: Record<string, (...args: any[]) => any>;
  /**
   * 覆盖默认区号选项（缺省取 Dict.PhoneAreaCode）
   */
  areaCodeOptions?: PhoneAreaCodeItem[];
};

function normalizeRule(rule?: PhoneAreaCodeRule): PhoneAreaCodeRule {
  return rule ?? 'digits_and_space_dash';
}

function filterPhoneValue(raw: string, rule: PhoneAreaCodeRule): string {
  const s = String(raw ?? '');

  if (rule === 'digits') {
    return s.replace(/[^\d]/g, '');
  }

  // digits_and_space_dash
  return s.replace(/[^\d\s-]/g, '');
}

function toFlagEmoji(iso2: string | undefined): string {
  if (!iso2) return '';
  const code = String(iso2).toUpperCase();
  if (code.length !== 2) return '';
  const A = 0x41;
  const base = 0x1f1e6; // Regional indicator symbol letter A
  const c1 = code.charCodeAt(0);
  const c2 = code.charCodeAt(1);
  if (c1 < A || c1 > A + 25 || c2 < A || c2 > A + 25) return '';
  return String.fromCodePoint(base + (c1 - A), base + (c2 - A));
}

function getLocalizedCountryName(args: { iso2?: string; fallback: string; lang?: string }): string {
  const { iso2, fallback, lang } = args;
  try {
    // 在现代浏览器中可用（Node/旧浏览器可能不可用），不可用则回退
    const DisplayNames = (Intl as any).DisplayNames;
    if (!DisplayNames || !iso2) return fallback;
    const dn = new DisplayNames([lang || 'en'], { type: 'region' });
    return dn.of(String(iso2).toUpperCase()) || fallback;
  } catch {
    return fallback;
  }
}

export default function PhoneWithAreaCodeField(props: PhoneWithAreaCodeFieldProps) {
  const {
    value,
    defaultValue,
    onChange,
    disabled,
    readOnly,
    allowClear = true,
    placeholder,
    defaultCode = '+86',
    areaCodeOptions,
    style,
    actions,
  } = props;

  const ConfigProviderContext = React.useContext(ConfigProvider.Context);
  const lang = ConfigProviderContext?.intl?.lang;

  const options: PhoneAreaCodeItem[] = useMemo(() => {
    if (areaCodeOptions && Array.isArray(areaCodeOptions)) return areaCodeOptions;
    return (values.PhoneAreaCode?.value ?? []) as PhoneAreaCodeItem[];
  }, [areaCodeOptions]);

  const [inner, setInner] = React.useState<PhoneWithAreaCodeValue>(defaultValue ?? {});

  const mergedValue = value ?? inner;

  const currentCode = mergedValue?.code ?? defaultCode;

  const currentRule = useMemo(() => {
    const item = options.find((o) => o.value === currentCode);
    return normalizeRule(item?.rule);
  }, [currentCode, options]);

  const selectOptions = useMemo(() => {
    return options.map((o) => {
      const flag = toFlagEmoji(o.iso2);
      const country = getLocalizedCountryName({ iso2: o.iso2, fallback: o.label, lang });

      // o.label 目前形如 "China (+86)"，这里为避免重复显示，优先提取国家名（fallback 就用原 label）
      const countryText =
        country && country !== o.label
          ? country
          : String(o.label).replace(/\s*\(\+\d[\d]*\)\s*$/, '').trim();

      // 选中后显示（更贴近 Google 左侧）：国旗 + 区号
      const selectedLabel = (
        <span>
          {flag ? `${flag} ` : ''}
          {o.value}
        </span>
      );

      return {
        label: selectedLabel,
        value: o.value,
        // 下拉渲染需要
        country: countryText,
        iso2: o.iso2,
        dial: o.value,
        search: `${countryText} ${o.iso2 ?? ''} ${o.value} ${o.search ?? ''}`,
      };
    });
  }, [lang, options]);

  function emit(next: PhoneWithAreaCodeValue) {
    if (value === undefined) setInner(next);
    onChange?.(next);
  }

  return (
    <Space.Compact className={selectorPrefix} style={style} {...(actions ?? {})}>
      <Select
        className={`${selectorPrefix}-code`}
        disabled={disabled}
        value={currentCode}
        allowClear={allowClear}
        showSearch
        optionLabelProp="label"
        popupMatchSelectWidth={false}
        dropdownStyle={{ minWidth: 420 }}
        listHeight={400}
        options={selectOptions as any}
        optionRender={(opt) => {
          const data: any = opt.data;
          const flag = toFlagEmoji(data?.iso2);
          return (
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: 8, minWidth: 0, flex: 1 }}>
                <span style={{ flex: 'none', lineHeight: '22px' }}>{flag}</span>
                <span style={{ whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '22px' }}>
                  {data?.country ?? ''}
                </span>
              </div>
              <span style={{ flex: 'none', opacity: 0.85, lineHeight: '22px' }}>{data?.dial ?? ''}</span>
            </div>
          );
        }}
        filterOption={(input, option) => {
          const q = String(input ?? '').trim().toLowerCase();
          if (!q) return true;
          const s = String((option as any)?.search ?? (option as any)?.label ?? '').toLowerCase();
          const iso2 = String((option as any)?.iso2 ?? '').toLowerCase();
          return s.includes(q) || iso2.includes(q);
        }}
        {...(actions ?? {})}
        onChange={(nextCode) => {
          emit({
            ...(mergedValue ?? {}),
            code: nextCode ?? undefined,
          });
        }}
        style={{ width: 280, minWidth: 280 }}
      />

      <Input.OptimizedInput
        className={`${selectorPrefix}-phone`}
        disabled={disabled}
        readOnly={readOnly}
        allowClear={allowClear}
        showCount={false}
        value={mergedValue?.value ?? ''}
        placeholder={placeholder}
        {...(actions ?? {})}
        onChange={(e) => {
          const nextValue = filterPhoneValue(e.target.value, currentRule);
          emit({
            ...(mergedValue ?? {}),
            code: mergedValue?.code ?? defaultCode,
            value: nextValue,
          });
        }}
      />
    </Space.Compact>
  );
}
