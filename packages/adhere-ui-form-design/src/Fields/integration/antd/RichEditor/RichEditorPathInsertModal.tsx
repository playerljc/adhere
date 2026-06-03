import { Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';

import Intl from '@baifendian/adhere-util-intl';

export type RichEditorPathInsertModalProps = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: (path: string) => void;
};

export function RichEditorPathInsertModal({
  open,
  title,
  onCancel,
  onConfirm,
}: RichEditorPathInsertModalProps) {
  const [form] = Form.useForm<{ path: string }>();

  useEffect(() => {
    if (open) {
      form.setFieldsValue({ path: '' });
    }
  }, [open, form]);

  return (
    <Modal
      open={open}
      title={title}
      destroyOnClose
      onCancel={onCancel}
      onOk={async () => {
        const values = await form.validateFields();
        const path = values.path?.trim();
        if (path) {
          onConfirm(path);
        }
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="path"
          rules={[{ required: true, message: Intl.get('rich_editor_path_placeholder') }]}
        >
          <Input placeholder={Intl.get('rich_editor_path_placeholder')} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
