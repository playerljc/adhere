import type { FormItemProps, FormProps, InputProps } from 'antd';
import React, { useContext } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../Design/Context';
import type { DesignValue } from '../types';

export default ({
  formItemProps,
  inputProps,
}: {
  formItemProps?: FormItemProps;
  inputProps?: InputProps;
}) => {
  const { getDesignValue, getActiveFieldId } = useContext(DesignContext);

  const designValue = getDesignValue();

  const activeFieldId = getActiveFieldId();

  return (
    <Form.Item
      name="name"
      rules={[
        {
          required: true,
          message: Intl.get('please_enter'),
        },
        // TODO: 在这里添加自定义规则
        {
          validator: async (_rule, value) => {
            // 检查 designValue 中是否有 formItemProps.name 与当前值重复
            if (!designValue) return;

            // 递归查找所有字段的 formItemProps.name
            const checkDuplicateName = (node: DesignValue | undefined): string | null => {
              if (!node) return null;

              // 跳过当前激活的字段节点（自己）
              if (node.id === activeFieldId) {
                return null;
              }

              // 检查当前节点的 formItemProps.name
              const currentName = node.props?.formItemProps?.name;
              if (currentName && currentName === value) {
                return currentName;
              }

              // 递归检查子节点
              if (node.props?.children) {
                for (const child of node.props.children) {
                  if (Array.isArray(child)) {
                    for (const c of child) {
                      const found = checkDuplicateName(c);
                      if (found) return found;
                    }
                  } else {
                    const found = checkDuplicateName(child);
                    if (found) return found;
                  }
                }
              }

              return null;
            };

            const duplicateName = checkDuplicateName(designValue);

            if (duplicateName) {
              throw new Error(
                Intl.get('name_duplicate_please_use_other_name', {
                  value,
                }),
              );
            }
          },
        },
      ]}
      {...(formItemProps ?? {})}
    >
      <Input.OptimizedInput
        showCount={false}
        placeholder={Intl.get('name')}
        {...(inputProps ?? {})}
      />
    </Form.Item>
  );
};
