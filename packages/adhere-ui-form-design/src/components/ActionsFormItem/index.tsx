import { Button, Card, Dropdown } from 'antd';
import classNames from 'classnames';
import React, { type FC, memo, useMemo } from 'react';

import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import type { Action } from '../../types';
import MonacoEditorFormItem from '../MonacoEditorFormItem';

export type ActionItem = {
  label: string;
  value: string;
};

export interface ActionsFormItemProps {
  actions: ActionItem[];
  value?: Action[];
  onChange?: (value: Action[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

const selectorPrefix = `${SELECT_PREFIX}-components-actions-form-item`;

const ActionsFormItem: FC<ActionsFormItemProps> = ({
  className,
  style,
  actions,
  value,
  onChange,
}) => {
  const menuItems = useMemo(() => {
    const menus = actions.map((item) => ({
      key: item.value,
      label: item.label,
    }));

    const targetValue = value ?? [];

    if (targetValue.length <= 0) return menus;

    return menus.filter(({ key }) => (value ?? []).some((a) => a.type !== key));
  }, [value, actions]);

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
                  type: key as Action['type'],
                  value: '',
                },
              ]);
            },
          }}
          placement="bottomLeft"
          arrow
        >
          <Button icon={<PlusOutlined />}>{Intl.get('add_action')}</Button>
        </Dropdown>
      </div>

      <ul className={`${selectorPrefix}-actions`}>
        {value?.map(({ type, value: actionValue }) => (
          <li key={type} className={`${selectorPrefix}-action`}>
            <Card
              title={actions.find((t) => t.value === type)?.label}
              extra={
                <DeleteOutlined
                  onClick={() => {
                    onChange?.((value ?? []).filter((r) => r.type !== type));
                  }}
                />
              }
            >
              <MonacoEditorFormItem
                language="javascript"
                value={actionValue}
                onChange={(_changeValue) => {
                  onChange?.(
                    (value ?? []).map((r) =>
                      r.type === type
                        ? {
                            ...r,
                            value: _changeValue,
                          }
                        : r,
                    ),
                  );
                }}
              />
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

ActionsFormItem.displayName = 'ActionsFormItem';

export default memo<ActionsFormItemProps>(ActionsFormItem);
