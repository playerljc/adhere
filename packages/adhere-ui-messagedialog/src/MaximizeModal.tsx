import classNames from 'classnames';
import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';

import { BlockOutlined, BorderOutlined, CloseOutlined } from '@ant-design/icons';
import Space from '@baifendian/adhere-ui-space';

import Modal from './Modal';
import { ModalDialogProps } from './types';

export const selectorPrefix = 'adhere-ui-message-dialog-maximize-modal';

/**
 * MaximizeModalDialog
 * @description 可以最大化的Modal
 * @param props
 * @constructor
 */
const MaximizeModalDialog = memo<ModalDialogProps>((props) => {
  const {
    config: { title, closeIcon, ...resetConfig },
    ...resetProps
  } = props;

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
      classNames(`${selectorPrefix}`, resetConfig.className ?? '', {
        [`${selectorPrefix}-maximize`]: isMaximize,
      }),
    [isMaximize],
  );

  const modalRender = useCallback(
    (_modal) => renderDraggableModal(_modal),
    [isMaximize, bounds, draggableDisabled],
  );

  /**
   * renderDraggableModal
   * @param modal
   */
  function renderDraggableModal(modal) {
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
   * renderClose
   */
  function renderClose() {
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
   * renderModalInner
   * @param modal
   */
  function renderModalInner(modal) {
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
          <div className={`${selectorPrefix}-header-title`}>{title}</div>
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
   * onDraggableStart
   * @param _event
   * @param uiData
   */
  function onDraggableStart(_event, uiData) {
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

  function revert() {
    setMaximize(false);
  }

  function maximize() {
    setMaximize(true);
  }

  function close() {
    resetProps?.close?.();
  }

  function onClose() {
    close();
  }

  function onRevert() {
    revert();
  }

  function onMaximize() {
    maximize();
  }

  return (
    <Modal
      {...resetProps}
      config={{
        ...(resetConfig ?? {}),
        className: modalClassName,
        modalRender,
      }}
    />
  );
});

MaximizeModalDialog.displayName = 'MaximizeModalDialog';

export default MaximizeModalDialog;
