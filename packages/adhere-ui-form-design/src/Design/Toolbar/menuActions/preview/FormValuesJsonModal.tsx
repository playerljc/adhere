import { Button, Modal, Space, message } from 'antd';
import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';
import { Editor } from '@monaco-editor/react';

import { SELECT_PREFIX } from '../../../../constant';
import { copyTextToClipboard } from '../../../../utils';

const selectorPrefix = `${SELECT_PREFIX}-design-preview-values-json-modal`;

export interface FormValuesJsonModalProps {
  open: boolean;
  onClose: () => void;
  values: any;
}

function safeStringify(values: any): string {
  try {
    return JSON.stringify(
      values,
      (_key, v) => {
        if (typeof v === 'function') return undefined;
        if (
          v &&
          typeof v === 'object' &&
          typeof (v as { $$typeof?: symbol }).$$typeof === 'symbol'
        ) {
          return '[ReactNode]';
        }
        return v;
      },
      2,
    );
  } catch {
    return '{}';
  }
}

/**
 * FormValuesJsonModal
 * @description 以只读 JSON 形式查看当前表单值
 */
export default function FormValuesJsonModal({ open, onClose, values }: FormValuesJsonModalProps) {
  const [text, setText] = useState(() => safeStringify(values));

  useEffect(() => {
    if (open) {
      setText(safeStringify(values));
    }
  }, [open, values]);

  const editorOptions = useMemo(
    () => ({
      readOnly: true,
      fixedOverflowWidgets: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      wordWrap: 'on' as const,
      tabSize: 2,
    }),
    [],
  );

  const handleCopy = useCallback(async () => {
    const ok = await copyTextToClipboard(text, { rejectWhitespaceOnly: true });
    if (ok) {
      message.success(Intl.get('copy_success'));
    } else {
      message.error(Intl.get('gen_json_copy_failed'));
    }
  }, [text]);

  return (
    <Modal
      open={open}
      title={Intl.get('preview_view_values_title')}
      onCancel={onClose}
      footer={null}
      width="min(720px, 92vw)"
      destroyOnHidden
      className={classNames(selectorPrefix)}
    >
      <div className={classNames(`${selectorPrefix}-body`)}>
        <div className={classNames(`${selectorPrefix}-editor-wrap`)}>
          <Editor
            height={360}
            defaultLanguage="json"
            theme="light"
            value={text}
            options={editorOptions}
          />
        </div>
        <Space className={classNames(`${selectorPrefix}-footer`)}>
          <Button type="primary" onClick={handleCopy}>
            {Intl.get('gen_json_copy')}
          </Button>
        </Space>
      </div>
    </Modal>
  );
}
