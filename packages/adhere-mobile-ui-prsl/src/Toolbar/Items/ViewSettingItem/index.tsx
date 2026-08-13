import { useUpdateEffect } from 'ahooks';
import { CheckList } from 'antd-mobile';
import { AppstoreOutline } from 'antd-mobile-icons';
import React, { useCallback, useMemo, useState } from 'react';
import type { FC } from 'react';

import { Dialog, Modal, Popup } from '@baifendian/adhere-mobile-ui-anthoc';
import {
  DialogTriggerProps,
  ModalTriggerProps,
  PopupTriggerProps,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import AdherePopup from '@baifendian/adhere-ui-popup';
import Intl from '@baifendian/adhere-util-intl';

import type { ViewSettingProps } from '../../../types';
import NormalItem from '../NormalItem';

const selectorPrefix = 'adhere-mobile-ui-prsl-toolbar-view-setting-item';

const ViewSettingItem: FC<ViewSettingProps> = ({
  children,
  disabled,
  viewSettingTriggerMode = 'popup-bottom',
  viewSettingTriggerProps,
  renderViewSetting,
  viewSettingConfig,
  defaultViewSettingValue,
  onViewSetting,
  onViewSettingReset,
}) => {
  const [viewSettingValue, setViewSettingValue] = useState<typeof defaultViewSettingValue>(
    defaultViewSettingValue ?? 'normal',
  );

  const targetViewSettingValue = useMemo<string[]>(() => {
    if (Array.isArray(viewSettingValue)) return viewSettingValue;

    if (!viewSettingValue) return [];

    return [viewSettingValue];
  }, [viewSettingValue]);

  const defaultElement = (
    <NormalItem
      key="view-setting-item"
      className={selectorPrefix}
      icon={<AppstoreOutline />}
      label={Intl.get('view')}
    />
  );

  const triggerElement = useMemo(() => {
    return children?.(defaultElement) ?? defaultElement;
  }, [children, defaultElement]);

  const actions = useMemo(() => {
    if (viewSettingTriggerMode === 'adhere-popup') {
      return [
        {
          key: 'reset',
          type: 'reset' as const,
          children: Intl.get('reset'),
          onClick: reset,
        },
      ];
    }

    return [
      {
        key: 'reset',
        primary: true,
        text: Intl.get('reset'),
        onClick: reset,
      },
    ];
  }, [viewSettingTriggerMode, reset]);

  const renderViewSettingElement = useCallback(
    ({ close }) => {
      if (renderViewSetting) {
        return renderViewSetting?.(viewSettingValue ?? 'normal');
      }

      return (
        <CheckList
          className={`${selectorPrefix}-list`}
          value={targetViewSettingValue}
          defaultValue={targetViewSettingValue}
          multiple={false}
          onChange={(v) => {
            const _viewSettingValue: string = v.length ? (v[0] as string) : 'normal';

            setViewSettingValue(_viewSettingValue);
            viewSetting(_viewSettingValue);

            if (viewSettingTriggerMode === 'adhere-popup') {
              AdherePopup.closeAll();
            } else {
              close?.();
            }
          }}
        >
          {viewSettingConfig?.map((_viewSettingValue) => (
            <CheckList.Item
              key={_viewSettingValue.name}
              value={_viewSettingValue.name}
              className={`${selectorPrefix}-list-item`}
            >
              <div className={`${selectorPrefix}-list-item-label`}>{_viewSettingValue.label}</div>
            </CheckList.Item>
          ))}
        </CheckList>
      );
    },
    [renderViewSetting, viewSettingConfig, viewSettingTriggerMode, targetViewSettingValue],
  );

  const triggerContext = useMemo(() => {
    if (viewSettingTriggerMode === 'modal') {
      return (
        <Modal.Context.Consumer>
          {(value) => renderViewSettingElement(value)}
        </Modal.Context.Consumer>
      );
    } else if (viewSettingTriggerMode === 'dialog') {
      return (
        <Dialog.Context.Consumer>
          {(value) => renderViewSettingElement(value)}
        </Dialog.Context.Consumer>
      );
    } else if (viewSettingTriggerMode === 'popup-bottom') {
      return (
        <Popup.Context.Consumer>
          {(value) => renderViewSettingElement(value)}
        </Popup.Context.Consumer>
      );
    } else {
      return renderViewSettingElement;
    }
  }, [viewSettingTriggerMode, renderViewSettingElement]);

  const childrenElement = useMemo(() => {
    const commonProps = {
      ...viewSettingTriggerProps,
    };

    // hoc
    if (["popup-bottom", "popup-top", "modal", "dialog"].includes(viewSettingTriggerMode ?? "")) {
      const hocProps = {
        ...commonProps,
        actions,
        popoverTriggerProps: {
          ...(
            viewSettingTriggerProps as
              | PopupTriggerProps<any>
              | ModalTriggerProps<any>
              | DialogTriggerProps<any>
          )?.popoverTriggerProps,
          renderTrigger: () => triggerElement,
        },
      };

      // Popup
      if (["popup-bottom", "popup-top"].includes(viewSettingTriggerMode ?? "")) {
        const position = new Map([
          ["popup-bottom", "bottom"],
          ["popup-top", "top"],
        ]);

        const popupProps = {
          ...hocProps,
          position: position.get(viewSettingTriggerMode ?? ""),
        };

        return (
          <Popup.Trigger disabled={disabled} {...popupProps}>
            {typeof triggerContext === 'function' ? triggerContext({ close: undefined }) : triggerContext}
          </Popup.Trigger>
        );
      }
      // Modal
      else if (viewSettingTriggerMode === "modal") {
        return (
          <Modal.TriggerPrompt disabled={disabled} {...hocProps}>
            {typeof triggerContext === 'function' ? triggerContext({ close: undefined }) : triggerContext}
          </Modal.TriggerPrompt>
        );
      }
      // Dialog
      else if (viewSettingTriggerMode === "dialog") {
        return (
          <Dialog.TriggerPrompt disabled={disabled} {...hocProps}>
            {typeof triggerContext === 'function' ? triggerContext({ close: undefined }) : triggerContext}
          </Dialog.TriggerPrompt>
        );
      }
    }
    // adhere-popup
    else if (viewSettingTriggerMode === "adhere-popup") {
      return (
        <AdherePopup.Trigger
          {...commonProps}
          disabled={disabled}
          renderTrigger={() => triggerElement}
          actions={actions}
        >
          {typeof triggerContext === 'function' ? triggerContext({ close: undefined }) : triggerContext}
        </AdherePopup.Trigger>
      );
    }
  }, [viewSettingTriggerMode, viewSettingTriggerProps, triggerElement, triggerContext, actions, disabled]);

  function viewSetting(viewSettingValue: typeof defaultViewSettingValue) {
    setViewSettingValue(viewSettingValue);

    return onViewSetting?.(viewSettingValue ?? 'normal');
  }

  function reset(): Promise<void> {
    setViewSettingValue(defaultViewSettingValue ?? 'normal');
    if (!onViewSettingReset) return Promise.resolve();
    return onViewSettingReset?.() as Promise<void>;
  }

  useUpdateEffect(() => {
    setViewSettingValue(defaultViewSettingValue ?? 'normal');
  }, [defaultViewSettingValue]);

  return childrenElement;
};

ViewSettingItem.displayName = 'ViewSettingItem';

export default ViewSettingItem;
