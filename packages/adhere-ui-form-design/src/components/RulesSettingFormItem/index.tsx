import { Button, Card, Dropdown } from 'antd';
import classNames from 'classnames';
import React, { type FC, ReactElement, memo, useEffectEvent, useMemo } from 'react';

import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';
import { RuleObject } from '@rc-component/form/lib/interface';

import { values } from '../../Dict';
import { SELECT_PREFIX } from '../../constant';
import type { I18nValue } from '../../types';
import Custom from './Custom';
import Max from './Max';
import Min from './Min';
import Pattern from './Pattern';
import Required from './Required';
import Whitespace from './Whitespace';

export type RuleType = 'required' | 'whitespace' | 'max' | 'min' | 'pattern' | 'custom';

export type RuleConfig = Pick<
  RuleObject,
  'required' | 'min' | 'max' | 'type' | 'len' | 'enum' | 'whitespace' | 'warningOnly'
> & {
  // required?: boolean;
  // min?: number;
  // max?: number;
  // type?: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'url' | 'email';
  // len?: number;
  // enum?: string[];
  // whitespace?: boolean;
  // warningOnly?: boolean;
  validator?: string;
  pattern?: string;
  message?: I18nValue;
};
export interface Rule {
  type: RuleType;
  config: RuleConfig;
}

export interface RulesSettingFormItemProps {
  value?: Rule[];
  onChange?: (value: Rule[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

const selectorPrefix = `${SELECT_PREFIX}-components-rules-setting-form-item`;

const RulesSettingFormItem: FC<RulesSettingFormItemProps> = ({
  className,
  style,
  value,
  onChange,
}) => {
  const menuItems = useMemo(() => {
    return values?.Rules?.value
      ?.map((item) => ({
        key: item.value,
        label: item.label,
      }))
      .filter(({ key }) => (value ?? []).some((rule) => rule.type !== key));
  }, [value]);

  const changeValue = useEffectEvent((type: RuleType, _value: RuleConfig) => {
    return (value ?? []).map((rule) => {
      if (rule.type === type) {
        return {
          type,
          config: _value,
        };
      }

      return rule;
    });
  });

  const RuleMap = new Map<RuleType, (ruleConfig: RuleConfig) => ReactElement>([
    [
      'required',
      (ruleConfig) => (
        <Required
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValue('required', _value));
          }}
        />
      ),
    ],
    [
      'whitespace',
      (ruleConfig) => (
        <Whitespace
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValue('whitespace', _value));
          }}
        />
      ),
    ],
    [
      'max',
      (ruleConfig) => (
        <Max
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValue('max', _value));
          }}
        />
      ),
    ],
    [
      'min',
      (ruleConfig) => (
        <Min
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValue('min', _value));
          }}
        />
      ),
    ],
    [
      'pattern',
      (ruleConfig) => (
        <Pattern
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValue('pattern', _value));
          }}
        />
      ),
    ],
    [
      'custom',
      (ruleConfig) => (
        <Custom
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValue('custom', _value));
          }}
        />
      ),
    ],
  ]);

  return (
    <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
      <div className={`${selectorPrefix}-action`}>
        <Dropdown
          menu={{
            items: menuItems,
            onClick: ({ key }) => {
              onChange?.([
                ...(value ?? []),
                {
                  type: key as RuleType,
                  config: {},
                },
              ]);
            },
          }}
          placement="bottomLeft"
          arrow
        >
          <Button icon={<PlusOutlined />}>{Intl.get('add_rule')}</Button>
        </Dropdown>
      </div>

      <ul className={`${selectorPrefix}-rules`}>
        {value?.map(({ type, config }) => (
          <li key={type} className={`${selectorPrefix}-rule`}>
            <Card
              title={values?.Rules?.value.find((t) => t.value === type)?.label}
              extra={
                <DeleteOutlined
                  onClick={() => {
                    onChange?.(value?.filter((r) => r.type !== type));
                  }}
                />
              }
            >
              {RuleMap.get(type)?.(config)}
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

RulesSettingFormItem.displayName = 'RulesSettingFormItem';

export default memo<RulesSettingFormItemProps>(RulesSettingFormItem);
