import React, { useRef } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import I18nChangeFormItem from '../../I18nChangeFormItem';

export type EditorSettingPlaceholderFormItemProps = {
  maxLength?: number;
};

/**
 * EditorSettingPlaceholderFormItem
 * @description 列编辑器占位符配置，与 buildFormPropertyPlaceholderRow 一致支持 i18n
 */
export default function EditorSettingPlaceholderFormItem({
  maxLength = 200,
}: EditorSettingPlaceholderFormItemProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Form.Item
      name="placeholder"
      label={
        <>
          {Intl.get('placeholder')}：
          <span ref={triggerRef} />
        </>
      }
    >
      <I18nChangeFormItem getTriggerContainer={() => triggerRef.current}>
        {({ onChange, value }) => (
          <Input.OptimizedInput
            value={value}
            placeholder={Intl.get('placeholder')}
            maxLength={maxLength}
            onChange={(e) => onChange(e.target.value)}
            showCount={false}
          />
        )}
      </I18nChangeFormItem>
    </Form.Item>
  );
}
