import { Editor } from '@monaco-editor/react';
import { Button, Modal, Space, message } from 'antd';
import classNames from 'classnames';
import merge from 'lodash.merge';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import type { DesignValue } from '../../types';

import './index.less';

const selectorPrefix = `${SELECT_PREFIX}-components-design-value-json-viewer-modal`;

export interface DesignValueJsonViewerModalProps {
  open: boolean;
  onClose: () => void;
  designValue: DesignValue;
}

function stringifyDesignValue(value: DesignValue): string {
  try {
    return JSON.stringify(
      value,
      (_key, v) => {
        if (typeof v === 'function') return undefined;
        if (v && typeof v === 'object' && typeof (v as { $$typeof?: symbol }).$$typeof === 'symbol') {
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

export default function DesignValueJsonViewerModal({
  open,
  onClose,
  designValue,
}: DesignValueJsonViewerModalProps) {
  const [text, setText] = useState(() => stringifyDesignValue(designValue));

  useEffect(() => {
    if (open) {
      setText(stringifyDesignValue(designValue));
    }
  }, [open, designValue]);

  const editorOptions = useMemo(
    () =>
      merge(
        {
          fixedOverflowWidgets: true,
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          tabSize: 2,
        },
        {},
      ),
    [],
  );

  const handleCopy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      message.success(Intl.get('copy_success'));
    } catch {
      message.error(Intl.get('gen_json_copy_failed'));
    }
  }, [text]);

  const handleExport = useCallback(() => {
    const base = Intl.get('gen_json_export_filename').replace(/\.json$/i, '');
    const name = `${base}.json`;
    const blob = new Blob([text], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }, [text]);

  return (
    <Modal
      open={open}
      title={Intl.get('gen_json')}
      onCancel={onClose}
      footer={null}
      width="min(920px, 96vw)"
      destroyOnClose
      className={classNames(selectorPrefix)}
    >
      <div className={classNames(`${selectorPrefix}-body`)}>
        <div className={classNames(`${selectorPrefix}-editor-wrap`)}>
          <Editor
            height={420}
            defaultLanguage="json"
            theme="light"
            value={text}
            onChange={(v) => setText(v ?? '')}
            options={editorOptions}
          />
        </div>
        <Space className={classNames(`${selectorPrefix}-footer`)}>
          <Button type="primary" onClick={handleCopy}>
            {Intl.get('gen_json_copy')}
          </Button>
          <Button onClick={handleExport}>{Intl.get('gen_json_export')}</Button>
        </Space>
      </div>
    </Modal>
  );
}
