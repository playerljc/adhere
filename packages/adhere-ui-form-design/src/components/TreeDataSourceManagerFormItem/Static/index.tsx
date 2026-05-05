import React, { type FC, useRef, useState } from 'react';

import { SettingOutlined } from '@ant-design/icons';
import { Button, Modal } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../../constant';
import MonacoEditorFormItem, { type MonacoEditorFormItemHandle } from '../../MonacoEditorFormItem';
import { type TreeDataSourceManagerFormItemProps } from '../index';

const DEFAULT_TREE_DATA = JSON.stringify(
  [
    {
      value: 'Option 1',
      label: 'Option 1',
      children: [
        {
          value: 'Option 1 - children',
          label: 'Option 1 - children',
        },
      ],
    },
    {
      value: 'Option 2',
      label: 'Option 2',
      children: [
        {
          value: 'Option 2 - children',
          label: 'Option 2 - children',
        },
      ],
    },
    {
      value: 'Option 3',
      label: 'Option 3',
    },
  ],
  null,
  2,
);

const selectorPrefix = `${SELECT_PREFIX}-design-field-tree-data-source-form-item-static`;

const Static: FC<TreeDataSourceManagerFormItemProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [draftJson, setDraftJson] = useState<string>('');
  const editorRef = useRef<MonacoEditorFormItemHandle>(null);

  const treeDataJson = value?.treeDataJson ?? DEFAULT_TREE_DATA;

  function handleOpen() {
    setDraftJson(treeDataJson);
    setOpen(true);
  }

  function handleOk() {
    onChange?.({
      ...(value ?? { type: 'static' }),
      type: 'static',
      treeDataJson: draftJson,
    });
    setOpen(false);
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <div className={selectorPrefix}>
      <Button type="default" icon={<SettingOutlined />} onClick={handleOpen} block>
        {Intl.get('tree_data_setting')}
      </Button>

      <Modal
        title={Intl.get('select_options')}
        open={open}
        width={800}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={Intl.get('confirm')}
        cancelText={Intl.get('cancel')}
        destroyOnClose
      >
        <MonacoEditorFormItem
          ref={editorRef}
          language="json"
          value={draftJson}
          onChange={(v) => setDraftJson(v)}
          style={{ height: 400 }}
          options={{ lineNumbers: 'on' }}
        />
      </Modal>
    </div>
  );
};

export default Static;
