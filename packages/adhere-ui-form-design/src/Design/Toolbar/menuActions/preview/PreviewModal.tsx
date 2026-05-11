import { Button, Modal, Segmented, Select, Space, message } from 'antd';
import classNames from 'classnames';
import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

import { DesktopOutlined, MobileOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../../../constant';
import Form from '../../../../Form';
import { TYPE as FLEX_LAYOUT_TYPE } from '../../../../Fields/layout/FlexLayout/constant';
import type {
  DesignValue,
  FormHandler,
  MobileViewportPresetId,
  Terminal,
} from '../../../../types';
import {
  MOBILE_VIEWPORT_PRESETS,
  getMobileViewportLabel,
  getMobileViewportPresetById,
  isDesktop,
} from '../../../../utils';
import { DesignContext } from '../../../Context';
import FormValuesJsonModal from './FormValuesJsonModal';

const selectorPrefix = `${SELECT_PREFIX}-design-preview-modal`;

export interface PreviewModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * PreviewModal
 * @description 全视口预览：内置 desktop/mobile Segmented 切换 + 手机模式下视口尺寸 Select；
 *  底部按钮：获取数据 / 重置 / 禁用编辑（切只读）/ 关闭。
 *  modal 内部的切换 / disabled 仅在弹层生命周期内生效，不回写 DesignContext。
 */
export default function PreviewModal({ open, onClose }: PreviewModalProps) {
  const { getDesignValue, getTerminal, getItems, getMobileViewportPresetId } =
    useContext(DesignContext);

  const designValue = getDesignValue() as DesignValue;

  // Form 组件内部会自动前置 FlexLayout，过滤掉同名定义防止重复
  const items = useMemo(
    () => (getItems() ?? []).filter((item) => item.type !== FLEX_LAYOUT_TYPE),
    [getItems],
  );

  const [previewTerminal, setPreviewTerminal] = useState<Terminal>(() => getTerminal());
  const [previewPresetId, setPreviewPresetId] = useState<MobileViewportPresetId>(() =>
    getMobileViewportPresetId(),
  );
  const [disabled, setDisabled] = useState<boolean>(false);

  const isMobilePreview = !isDesktop(previewTerminal);
  const mobileViewportWidthPx =
    getMobileViewportPresetById(previewPresetId)?.widthPx ?? 375;

  const presetOptions = useMemo(
    () =>
      MOBILE_VIEWPORT_PRESETS.map((preset) => ({
        value: preset.id,
        label: getMobileViewportLabel(preset),
      })),
    [],
  );

  const terminalSegmentedOptions = useMemo(
    () => [
      {
        label: Intl.get('desktop_mode'),
        value: 'desktop' as Terminal,
        icon: <DesktopOutlined />,
      },
      {
        label: Intl.get('mobile_mode'),
        value: 'mobile' as Terminal,
        icon: <MobileOutlined />,
      },
    ],
    [],
  );

  const formRef = useRef<FormHandler>(null);

  const [valuesOpen, setValuesOpen] = useState(false);
  const [currentValues, setCurrentValues] = useState<any>({});

  const handleReset = useCallback(() => {
    formRef.current?.resetFields();
  }, []);

  const handleViewValues = useCallback(() => {
    const form = formRef.current;
    if (!form) return;
    form
      .validateFields()
      .then((values) => {
        setCurrentValues(values);
        setValuesOpen(true);
      })
      .catch(() => {
        // 校验失败时仍展示当前值，方便调试
        setCurrentValues(form.getFieldsValue(true) ?? {});
        setValuesOpen(true);
        message.warning(Intl.get('preview_validate_failed'));
      });
  }, []);

  const handleToggleDisabled = useCallback(() => {
    setDisabled((v) => !v);
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
        width="100vw"
        style={{ top: 0, paddingBottom: 0, maxWidth: '100vw' }}
        wrapClassName={`${selectorPrefix}-wrap`}
        destroyOnHidden
        className={classNames(selectorPrefix)}
      >
        <div className={classNames(`${selectorPrefix}-toolbar`)}>
          <Segmented
            value={previewTerminal}
            onChange={(value) => setPreviewTerminal(value as Terminal)}
            options={terminalSegmentedOptions}
          />
          {isMobilePreview ? (
            <Select
              value={previewPresetId}
              onChange={(value) => setPreviewPresetId(value as MobileViewportPresetId)}
              options={presetOptions}
              style={{ width: 200 }}
              size="middle"
            />
          ) : null}
        </div>

        <div className={classNames(`${selectorPrefix}-body`)}>
          <div
            className={classNames(`${selectorPrefix}-viewport`, {
              [`${selectorPrefix}-viewport-mobile`]: isMobilePreview,
              [`${selectorPrefix}-viewport-desktop`]: !isMobilePreview,
            })}
            style={
              isMobilePreview
                ? ({
                    ['--fd-preview-mobile-viewport-width' as string]: `${mobileViewportWidthPx}px`,
                  } as CSSProperties)
                : undefined
            }
          >
            <Form
              ref={formRef}
              value={designValue}
              terminal={previewTerminal}
              items={items}
              disabled={disabled}
            />
          </div>
        </div>

        <Space className={classNames(`${selectorPrefix}-footer`)}>
          <Button type="primary" onClick={handleViewValues}>
            {Intl.get('preview_get_data')}
          </Button>
          <Button onClick={handleReset}>{Intl.get('preview_reset')}</Button>
          <Button onClick={handleToggleDisabled}>
            {disabled ? Intl.get('preview_enable_editing') : Intl.get('preview_disable_editing')}
          </Button>
          <Button onClick={onClose}>{Intl.get('preview_close')}</Button>
        </Space>
      </Modal>

      <FormValuesJsonModal
        open={valuesOpen}
        values={currentValues}
        onClose={handleCloseValues}
      />
    </>
  );
}
