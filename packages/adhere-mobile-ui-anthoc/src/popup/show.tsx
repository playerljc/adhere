import { useMount, useUpdateEffect } from 'ahooks';
import { Button, Popup } from 'antd-mobile';
import classNames from 'classnames';
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import type { Root } from 'react-dom/client';

import type { PopupShowHandler, PopupShowProps } from '../types';

let lock;

const popupHandlers = new Map<HTMLElement, Root>();

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-show-popup-inner';

/**
 * PopupWrapper
 * @param actions
 * @param closeOnAction
 * @param title
 * @param header
 * @param close
 * @param children
 * @param popupProps
 * @constructor
 */
function PopupWrapper({
  actions,
  closeOnAction = false,
  title,
  header,
  close,
  children,
  ...popupProps
}: PopupShowProps & {
  visible: boolean;
  close: () => void;
}): ReactElement {
  const { showCloseButton = true } = popupProps;

  const [visible, setVisible] = useState(popupProps.visible);

  useMount(() => {
    setVisible(true);
  });

  useUpdateEffect(() => {
    setVisible(false);
  }, [popupProps.visible]);

  return (
    <Popup
      {...popupProps}
      visible={visible}
      onMaskClick={(argv) => {
        setVisible(false);
        popupProps?.onMaskClick?.(argv);
      }}
      onClose={() => {
        setVisible(false);
        popupProps?.onClose?.();
      }}
      afterClose={() => {
        close();
        popupProps?.afterClose?.();
      }}
    >
      <div className={selectorPrefix}>
        {(showCloseButton || !!title) && <div className={`${selectorPrefix}-title`}>{title}</div>}

        {!!header && <div className={`${selectorPrefix}-header`}>{header}</div>}

        <div className={`${selectorPrefix}-body`}>{children}</div>

        {!!actions?.length && (
          <ul className={`${selectorPrefix}-actions`}>
            {actions.map(
              ({
                key,
                className,
                style,
                text,
                primary = false,
                disabled = false,
                danger = false,
                onClick,
              }) => (
                <li
                  key={key}
                  className={classNames(`${selectorPrefix}-action`, className ?? '')}
                  style={style ?? {}}
                >
                  <Button
                    block
                    loading="auto"
                    color={danger ? 'danger' : 'primary'}
                    fill={primary ? 'solid' : 'none'}
                    disabled={disabled}
                    onClick={() => {
                      const result = onClick?.();

                      if (result && result.then) {
                        result.then(() => {
                          if (closeOnAction) {
                            setVisible(false);
                          }
                        });
                      } else {
                        if (closeOnAction) {
                          setVisible(false);
                        }
                      }
                    }}
                  >
                    {text}
                  </Button>
                </li>
              ),
            )}
          </ul>
        )}
      </div>
    </Popup>
  );
}

/**
 * show
 * @param {PopupShowProps} props
 * @return PopupShowHandler
 */
export function show(props: PopupShowProps): PopupShowHandler {
  if (lock) return;

  lock = true;

  function render(visible) {
    root.render(
      <PopupWrapper visible={visible} getContainer={() => el} close={close} {...popupConfig} />,
    );
  }

  function close() {
    render(false);

    setTimeout(() => {
      popupHandlers.delete(el);
      root.unmount();
      lock = false;
    }, 300);
  }

  let popupConfig = {
    ...props,
  };

  const el = document.createElement('div');

  document.body.appendChild(el);

  const root = ReactDOM.createRoot(el);

  render(false);

  popupHandlers.set(el, root);

  return {
    close,
    setConfig: (callback) => {
      popupConfig = callback(popupConfig);

      render(true);
    },
  };
}

/**
 * clear
 */
export function clear() {
  try {
    Array.from(popupHandlers.values()).forEach((root) => {
      if (root) {
        root.unmount();
      }
    });

    lock = false;

    popupHandlers.clear();
  } catch (e) {
    console.error(e);
  }
}
