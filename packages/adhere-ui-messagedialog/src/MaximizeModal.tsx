import classNames from 'classnames';
import React, { memo, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';

import { BlockOutlined, BorderOutlined, CloseOutlined } from '@ant-design/icons';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Space from '@baifendian/adhere-ui-space';

import Modal from './Modal';
import type { ModalDialogProps } from './types';

export const selectorPrefix = 'adhere-ui-message-dialog-maximize-modal';

const { useTheme } = ConfigProvider;

/**
 * MaximizeModalDialog组件
 * 可以最大化和拖拽的模态对话框组件
 * 
 * @param props - 组件属性
 * @returns 最大化模态对话框组件
 */
const MaximizeModalDialog = memo<ModalDialogProps>((props) => {
  const {
    config: { title, closeIcon, ...restConfig },
    ...restProps
  } = props;

  const wrapperRef = useRef<HTMLElement | undefined>();

  const draggableRef = useRef<any>(null);

  const [isMaximize, setMaximize] = useState(false);

  const [draggableDisabled, setDraggableDisabled] = useState(true);

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const modalClassName = useMemo(
    () =>
      classNames(`${selectorPrefix}`, restConfig.className ?? '', {
        [`${selectorPrefix}-maximize`]: isMaximize,
      }),
    [isMaximize, restConfig],
  );

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'MessageDialog',
  });

  const modalRender = (_modal) => renderDraggableModal(_modal);

  /**
   * 渲染可拖拽的模态框
   * @param modal - 模态框内容
   * @returns 可拖拽的模态框元素
   */
  function renderDraggableModal(modal: React.ReactElement): React.ReactElement {
    return (
      <Draggable
        disabled={isMaximize ? true : draggableDisabled}
        bounds={bounds}
        nodeRef={draggableRef}
        onStart={onDraggableStart}
      >
        {renderModalInner(modal)}
      </Draggable>
    );
  }

  /**
   * 渲染关闭按钮
   * @returns 关闭按钮元素
   */
  function renderClose(): React.ReactElement {
    if (closeIcon) {
      return (
        <div className={`${selectorPrefix}-header-action`} onClick={onClose}>
          {closeIcon}
        </div>
      );
    }

    return <CloseOutlined rev="" className={`${selectorPrefix}-header-action`} onClick={onClose} />;
  }

  /**
   * 渲染模态框内部内容
   * @param modal - 模态框内容
   * @returns 模态框内部元素
   */
  function renderModalInner(modal: React.ReactElement): React.ReactElement {
    return (
      <div className={`${selectorPrefix}-inner`} ref={draggableRef}>
        <div
          className={classNames(`${selectorPrefix}-header`, {
            [`${selectorPrefix}-header-draggable`]: !isMaximize,
          })}
          onMouseOver={() => {
            if (isMaximize) return;

            if (draggableDisabled) {
              setDraggableDisabled(false);
            }
          }}
          onMouseOut={() => {
            if (isMaximize) return;

            setDraggableDisabled(true);
          }}
        >
          <div className={`${selectorPrefix}-header-title`} title={title as string}>
            {title}
          </div>
          <div className={`${selectorPrefix}-header-actions`}>
            <Space.Group direction="horizontal" size={5}>
              {isMaximize && (
                <BlockOutlined
                  rev=""
                  className={`${selectorPrefix}-header-action`}
                  onClick={onRevert}
                />
              )}
              {!isMaximize && (
                <BorderOutlined
                  rev=""
                  className={`${selectorPrefix}-header-action`}
                  onClick={onMaximize}
                />
              )}
              {renderClose()}
            </Space.Group>
          </div>
        </div>

        <div className={`${selectorPrefix}-body`}>{modal}</div>
      </div>
    );
  }

  /**
   * 拖拽开始事件处理
   * @param _event - 拖拽事件
   * @param uiData - 拖拽数据
   */
  function onDraggableStart(_event: any, uiData: { x: number; y: number }): void {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggableRef.current?.getBoundingClientRect?.();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  }

  /**
   * 恢复窗口大小
   */
  function revert(): void {
    setMaximize(false);
  }

  /**
   * 最大化窗口
   */
  function maximize(): void {
    setMaximize(true);
  }

  /**
   * 关闭窗口
   */
  function close(): void {
    restProps?.close?.();
  }

  /**
   * 关闭按钮点击事件
   */
  function onClose(): void {
    close();
  }

  /**
   * 恢复按钮点击事件
   */
  function onRevert(): void {
    revert();
  }

  /**
   * 最大化按钮点击事件
   */
  function onMaximize(): void {
    maximize();
  }

  return (
    <div
      // @ts-ignore
      ref={wrapperRef}
    >
      <Modal
        {...restProps}
        config={{
          ...(restConfig ?? {}),
          className: modalClassName,
          modalRender,
        }}
      />
    </div>
  );
});

MaximizeModalDialog.displayName = 'MaximizeModalDialog';

export default MaximizeModalDialog;
