import type { CSSProperties } from 'react';
import { Select, Space } from 'antd';
import React, { useMemo } from 'react';

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
        options={options.map((o) => ({ label: o.label, value: o.value }))}
        {...(actions ?? {})}
        onChange={(nextCode) => {
          emit({
            ...(value ?? {}),
            code: nextCode ?? undefined,
          });
        }}
        style={{ width: 200 }}
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
