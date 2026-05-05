import { Button, Modal, Space, message } from 'antd';
import classNames from 'classnames';
import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../../../constant';
import Form from '../../../../Form';
import { TYPE as FLEX_LAYOUT_TYPE } from '../../../../Fields/layout/FlexLayout/constant';
import type { DesignValue, FormHandler } from '../../../../types';
import { getMobileViewportPresetById, isDesktop } from '../../../../utils';
import { DesignContext } from '../../../Context';
import FormValuesJsonModal from './FormValuesJsonModal';

const selectorPrefix = `${SELECT_PREFIX}-design-preview-modal`;

export interface PreviewModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * PreviewModal
 * @description 预览当前设计值：通过 FormDesign.Form 把设计树渲染为可交互表单，
 *  并提供 提交 / 重置 / 查看当前值 三个调试按钮
 */
export default function PreviewModal({ open, onClose }: PreviewModalProps) {
  const { getDesignValue, getTerminal, getItems, getMobileViewportPresetId } =
    useContext(DesignContext);

  const designValue = getDesignValue() as DesignValue;
  const terminal = getTerminal();
  const isMobilePreview = !isDesktop(terminal);
  const mobilePresetId = getMobileViewportPresetId();
  const mobileViewportWidthPx = getMobileViewportPresetById(mobilePresetId)?.widthPx ?? 375;

  // Form 组件内部会自动前置 FlexLayout，过滤掉同名定义防止重复
  const items = useMemo(
    () => (getItems() ?? []).filter((item) => item.type !== FLEX_LAYOUT_TYPE),
    [getItems],
  );

  const formRef = useRef<FormHandler>(null);

  const [valuesOpen, setValuesOpen] = useState(false);
  const [currentValues, setCurrentValues] = useState<any>({});

  const handleSubmit = useCallback(() => {
    const form = formRef.current;
    if (!form) return;
    form
      .validateFields()
      .then((values) => {
        setCurrentValues(values);
        setValuesOpen(true);
      })
      .catch(() => {
        message.error(Intl.get('preview_validate_failed'));
      });
  }, []);

  const handleReset = useCallback(() => {
    formRef.current?.resetFields();
  }, []);

  const handleViewValues = useCallback(() => {
    setCurrentValues(formRef.current?.getFieldsValue(true) ?? {});
    setValuesOpen(true);
  }, []);

  const handleCloseValues = useCallback(() => {
    setValuesOpen(false);
  }, []);

  return (
    <>
      <Modal
        open={open}
        title={Intl.get('preview')}
        onCancel={onClose}
        footer={null}
        width="min(920px, 96vw)"
        destroyOnHidden
        className={classNames(selectorPrefix)}
      >
        <div className={classNames(`${selectorPrefix}-body`)}>
          <div
            className={classNames(`${selectorPrefix}-viewport`, {
              [`${selectorPrefix}-viewport-mobile`]: isMobilePreview,
            })}
            style={
              isMobilePreview
                ? ({
                    ['--fd-preview-mobile-viewport-width' as string]: `${mobileViewportWidthPx}px`,
                  } as CSSProperties)
                : undefined
            }
          >
            <Form ref={formRef} value={designValue} terminal={terminal} items={items} />
          </div>

          <Space className={classNames(`${selectorPrefix}-footer`)}>
            <Button type="primary" onClick={handleSubmit}>
              {Intl.get('preview_submit')}
            </Button>
            <Button onClick={handleReset}>{Intl.get('preview_reset')}</Button>
            <Button onClick={handleViewValues}>{Intl.get('preview_view_values')}</Button>
          </Space>
        </div>
      </Modal>

      <FormValuesJsonModal
        open={valuesOpen}
        values={currentValues}
        onClose={handleCloseValues}
      />
    </>
  );
}
