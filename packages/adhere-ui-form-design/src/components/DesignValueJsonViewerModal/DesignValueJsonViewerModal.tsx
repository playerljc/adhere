import { Button, Modal, Space, message } from 'antd';
import classNames from 'classnames';
import merge from 'lodash.merge';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';
import { Editor } from '@monaco-editor/react';

import { SELECT_PREFIX } from '../../constant';
import type { DesignValue } from '../../types';
import { copyTextToClipboard, downloadTextAsFile, stringifyDesignValue } from '../../utils';

const selectorPrefix = `${SELECT_PREFIX}-components-design-value-json-viewer-modal`;

export interface DesignValueJsonViewerModalProps {
  open: boolean;
  onClose: () => void;
  designValue: DesignValue;
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
    const ok = await copyTextToClipboard(text, { rejectWhitespaceOnly: true });
    if (ok) {
      message.success(Intl.get('copy_success'));
    } else {
      message.error(Intl.get('gen_json_copy_failed'));
    }
  }, [text]);

  const handleExport = useCallback(() => {
    const base = Intl.get('gen_json_export_filename').replace(/\.json$/i, '');
    downloadTextAsFile(text, `${base}.json`, {
      mimeType: 'application/json;charset=utf-8',
    });
  }, [text]);

  return (
    <Modal
      open={open}
      title={Intl.get('gen_json')}
      onCancel={onClose}
      footer={null}
      width="min(920px, 96vw)"
      destroyOnHidden
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
