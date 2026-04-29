import React, { useMemo } from 'react';

import { Input, Select } from 'antd';

import { SELECT_PREFIX } from '../../../constant';
import { values } from '../../../Dict';
import type { PhoneAreaCodeItem, PhoneAreaCodeRule } from '../../../Dict/PhoneAreaCode';

const selectorPrefix = `${SELECT_PREFIX}-phone-with-area-code`;

export type PhoneWithAreaCodeValue = {
  code?: string;
  value?: string;
};

export type PhoneWithAreaCodeFieldProps = {
  value?: PhoneWithAreaCodeValue;
  onChange?: (value: PhoneWithAreaCodeValue) => void;
  disabled?: boolean;
  readOnly?: boolean;
  allowClear?: boolean;
  placeholder?: string;
  defaultCode?: string;
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
    onChange,
    disabled,
    readOnly,
    allowClear = true,
    placeholder,
    defaultCode = '+86',
    areaCodeOptions,
  } = props;

  const options: PhoneAreaCodeItem[] = useMemo(() => {
    if (areaCodeOptions && Array.isArray(areaCodeOptions)) return areaCodeOptions;
    return (values.PhoneAreaCode?.value ?? []) as PhoneAreaCodeItem[];
  }, [areaCodeOptions]);

  const currentCode = value?.code ?? defaultCode;

  const currentRule = useMemo(() => {
    const item = options.find((o) => o.value === currentCode);
    return normalizeRule(item?.rule);
  }, [currentCode, options]);

  function emit(next: PhoneWithAreaCodeValue) {
    onChange?.(next);
  }

  return (
    <Input.Group className={selectorPrefix} compact>
      <Select
        className={`${selectorPrefix}-code`}
        disabled={disabled}
        value={currentCode}
        allowClear={allowClear}
        options={options.map((o) => ({ label: o.label, value: o.value }))}
        onChange={(nextCode) => {
          emit({
            ...(value ?? {}),
            code: nextCode ?? undefined,
          });
        }}
        style={{ width: 200 }}
      />

      <Input
        className={`${selectorPrefix}-phone`}
        disabled={disabled}
        readOnly={readOnly}
        value={value?.value ?? ''}
        placeholder={placeholder}
        onChange={(e) => {
          const nextValue = filterPhoneValue(e.target.value, currentRule);
          emit({
            ...(value ?? {}),
            code: value?.code ?? defaultCode,
            value: nextValue,
          });
        }}
      />
    </Input.Group>
  );
}

