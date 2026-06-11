import React, { type FC, useRef, useState } from 'react';

import { SettingOutlined } from '@ant-design/icons';
import { Button, Modal } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../../constant';
import MonacoEditorFormItem, { type MonacoEditorFormItemHandle } from '../../MonacoEditorFormItem';
import { DEFAULT_TABLE_DATA_SOURCE_JSON } from '../constants';
import { type TableDataSourceManagerFormItemProps } from '../index';

const selectorPrefix = `${SELECT_PREFIX}-design-field-table-data-source-form-item-static`;

const Static: FC<TableDataSourceManagerFormItemProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [draftJson, setDraftJson] = useState<string>('');
  const editorRef = useRef<MonacoEditorFormItemHandle>(null);

  const dataSourceJson = value?.dataSourceJson ?? DEFAULT_TABLE_DATA_SOURCE_JSON;

  function handleOpen() {
    setDraftJson(dataSourceJson);
    setOpen(true);
  }

  function handleOk() {
    onChange?.({
      ...(value ?? { type: 'static' }),
      type: 'static',
      dataSourceJson: draftJson,
    });
    setOpen(false);
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <div className={selectorPrefix}>
      <Button type="default" icon={<SettingOutlined />} onClick={handleOpen} block>
        {Intl.get('table_data_setting')}
      </Button>

      <Modal
        title={Intl.get('table_select_data_source')}
        open={open}
        width={800}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={Intl.get('confirm')}
        cancelText={Intl.get('cancel')}
        destroyOnHidden
      >
        <MonacoEditorFormItem
          ref={editorRef}
          language="json"
          value={draftJson}
          onChange={(v) => setDraftJson(v)}
          style={{ height: 'var(--table-data-source-editor-height, 400px)' }}
          options={{ lineNumbers: 'on' }}
        />
      </Modal>
    </div>
  );
};

export default Static;
