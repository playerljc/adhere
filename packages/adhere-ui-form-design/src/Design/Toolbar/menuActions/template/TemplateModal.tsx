import { Modal } from 'antd';
import classNames from 'classnames';
import React, { useCallback, useContext } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../../../constant';
import { hasDesignCanvasUserContent } from '../../../../utils';
import { DesignContext } from '../../../Context';
import { FORM_TEMPLATES } from './definitions';
import type { FormTemplate } from './types';
import { regenerateDesignValueIds } from './utils/regenerateDesignValueIds';

const modalPrefix = `${SELECT_PREFIX}-design-template-modal`;

export interface TemplateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TemplateModal({ open, onClose }: TemplateModalProps) {
  const { getDesignValue, loadDesignValue } = useContext(DesignContext);

  const applyTemplate = useCallback(
    (template: FormTemplate) => {
      const designValue = regenerateDesignValueIds(template.build());
      loadDesignValue(designValue);
      onClose();
    },
    [loadDesignValue, onClose],
  );

  const handleSelect = useCallback(
    (template: FormTemplate) => {
      const load = () => applyTemplate(template);

      if (hasDesignCanvasUserContent(getDesignValue())) {
        Modal.confirm({
          title: Intl.get('template_load_confirm_title'),
          content: Intl.get('template_load_confirm_content'),
          okText: Intl.get('template_load'),
          onOk: load,
        });
        return;
      }

      load();
    },
    [applyTemplate, getDesignValue],
  );

  return (
    <Modal
      open={open}
      title={Intl.get('template_modal_title')}
      footer={null}
      onCancel={onClose}
      width="var(--fd-template-modal-width, 720px)"
      className={modalPrefix}
      destroyOnHidden
    >
      <div className={`${modalPrefix}-grid`}>
        {FORM_TEMPLATES.map((template) => (
          <button
            key={template.id}
            type="button"
            className={classNames(`${modalPrefix}-card`)}
            onClick={() => handleSelect(template)}
          >
            <span className={`${modalPrefix}-card-title`}>{Intl.get(template.nameKey)}</span>
            <span className={`${modalPrefix}-card-desc`}>{Intl.get(template.descKey)}</span>
          </button>
        ))}
      </div>
    </Modal>
  );
}
