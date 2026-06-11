import { Button, Card, Dropdown } from 'antd';
import classNames from 'classnames';
import React, { type FC, ReactElement, memo, useCallback, useMemo } from 'react';

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
import TableSelectRequired from './TableSelectRequired';
import Whitespace from './Whitespace';

export type RuleType =
  | 'required'
  | 'whitespace'
  | 'max'
  | 'min'
  | 'pattern'
  | 'custom'
  | 'tableSelectRequired';

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
    const usedTypes = new Set((value ?? []).map((r) => r.type));
    return (
      values?.Rules?.value
        ?.filter((item) => !usedTypes.has(item.value as RuleType))
        .map((item) => ({ key: item.value, label: item.label })) ?? []
    );
  }, [value]);

  const changeValueAt = useCallback(
    (index: number, _value: RuleConfig) => {
      return (value ?? []).map((rule, i) =>
        i === index
          ? {
              ...rule,
              config: _value,
            }
          : rule,
      );
    },
    [value],
  );

  const RuleMap = new Map<RuleType, (ruleConfig: RuleConfig, index: number) => ReactElement>([
    [
      'required',
      (ruleConfig, index) => (
        <Required
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValueAt(index, _value));
          }}
        />
      ),
    ],
    [
      'whitespace',
      (ruleConfig, index) => (
        <Whitespace
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValueAt(index, _value));
          }}
        />
      ),
    ],
    [
      'max',
      (ruleConfig, index) => (
        <Max
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValueAt(index, _value));
          }}
        />
      ),
    ],
    [
      'min',
      (ruleConfig, index) => (
        <Min
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValueAt(index, _value));
          }}
        />
      ),
    ],
    [
      'pattern',
      (ruleConfig, index) => (
        <Pattern
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValueAt(index, _value));
          }}
        />
      ),
    ],
    [
      'custom',
      (ruleConfig, index) => (
        <Custom
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValueAt(index, _value));
          }}
        />
      ),
    ],
    [
      'tableSelectRequired',
      (ruleConfig, index) => (
        <TableSelectRequired
          rule={ruleConfig}
          onChange={(_value) => {
            onChange?.(changeValueAt(index, _value));
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
        {value?.map((ruleItem, index) => {
          const { type, config } = ruleItem;

          return (
            <li key={type} className={`${selectorPrefix}-rule`}>
              <Card
                title={values?.Rules?.value.find((t) => t.value === type)?.label}
                extra={
                  <DeleteOutlined
                    onClick={() => {
                      onChange?.(value?.filter((_, i) => i !== index));
                    }}
                  />
                }
              >
                {RuleMap.get(type)?.(config, index)}
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

RulesSettingFormItem.displayName = 'RulesSettingFormItem';

export default memo<RulesSettingFormItemProps>(RulesSettingFormItem);
