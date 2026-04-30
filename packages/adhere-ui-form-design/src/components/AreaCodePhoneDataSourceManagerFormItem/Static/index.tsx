import React, { type FC, useRef, useState } from 'react';

import { SettingOutlined } from '@ant-design/icons';
import { Button, Modal } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { codes } from '../../../Dict/_countryCallingCodeRaw';
import { SELECT_PREFIX } from '../../../constant';
import MonacoEditorFormItem, { type MonacoEditorFormItemHandle } from '../../MonacoEditorFormItem';
import type { AreaCodePhoneDataSourceManagerFormItemProps } from '../index';

function getDefaultAreaCodeJson(): string {
  try {
    // 默认填充“Google 区域数据源”（原始国家/区号表），便于维护与扩展
    return JSON.stringify(codes, null, 2);
  } catch {
    return '[]';
  }
}

const selectorPrefix = `${SELECT_PREFIX}-design-field-area-code-phone-data-source-form-item-static`;

const Static: FC<AreaCodePhoneDataSourceManagerFormItemProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [draftJson, setDraftJson] = useState<string>('');
  const editorRef = useRef<MonacoEditorFormItemHandle>(null);

  const areaCodeJson = value?.areaCodeJson ?? getDefaultAreaCodeJson();

  function handleOpen() {
    setDraftJson(areaCodeJson);
    setOpen(true);
  }

  function handleOk() {
    onChange?.({
      ...(value ?? { type: 'static' }),
      type: 'static',
      areaCodeJson: draftJson,
    });
    setOpen(false);
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <div className={selectorPrefix}>
      <Button type="default" icon={<SettingOutlined />} onClick={handleOpen} block>
        {Intl.get('area_code_data_setting')}
      </Button>

      <Modal
        title={Intl.get('area_code_data_source')}
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
          height="400px"
          value={draftJson}
          onChange={(v) => setDraftJson(v)}
          options={{
            lineNumbers: 'on',
            scrollbar: { vertical: 'auto', horizontal: 'auto' },
          }}
        />
      </Modal>
    </div>
  );
};

export default Static;
