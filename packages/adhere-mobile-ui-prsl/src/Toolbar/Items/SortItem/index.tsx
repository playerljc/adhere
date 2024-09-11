import { useUpdateEffect } from 'ahooks';
import { List } from 'antd-mobile';
import { TransportQRcodeOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import type { FC } from 'react';

import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { Dialog, Modal, Popup } from '@baifendian/adhere-mobile-ui-anthoc';
import type {
  DialogTriggerProps,
  ModalTriggerProps,
  PopupTriggerProps,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import AdherePopup from '@baifendian/adhere-ui-popup';
import Intl from '@baifendian/adhere-util-intl';

import type { SortConfigItem, SortItemProps } from '../../../types';
import NormalItem from '../NormalItem';

const selectorPrefix = 'adhere-mobile-ui-prsl-toolbar-sort-item';

/**
 * SortItem
 * @param children
 * @param sortTriggerMode
 * @param sortTriggerProps
 * @param renderSort
 * @param sortConfig
 * @param defaultSortValues
 * @param onSort
 * @param onSortReset
 * @constructor
 */
const SortItem: FC<SortItemProps> = ({
  children,
  disabled,
  sortTriggerMode = 'popup-bottom',
  sortTriggerProps,
  renderSort,
  sortConfig,
  defaultSortValues,
  onSort,
  onSortReset,
}) => {
  const [sortValues, setSortValues] = useState<typeof defaultSortValues>(defaultSortValues);

  const defaultElement = (
    <NormalItem
      key="sort-item"
      className={selectorPrefix}
      icon={<TransportQRcodeOutline />}
      label={Intl.v('排序')}
    />
  );

  const triggerElement = useMemo(() => {
    return children?.(defaultElement) ?? defaultElement;
  }, [children, defaultElement]);

  const actions = useMemo(() => {
    if (sortTriggerMode === 'adhere-popup') {
      return [
        {
          key: 'reset',
          type: 'primary',
          children: Intl.v('重置'),
          onClick: reset,
        },
      ];
    }

    return [
      {
        key: 'reset',
        primary: true,
        text: Intl.v('重置'),
        onClick: reset,
      },
    ];
  }, [sortTriggerMode]);

  const renderSortElement = useCallback(
    ({ close }) => {
      if (renderSort) {
        return renderSort?.(sortValues ?? []);
      }

      return (
        <List className={`${selectorPrefix}-list`}>
          {sortConfig?.map((sortValue) => (
            <List.Item
              key={sortValue.name}
              className={`${selectorPrefix}-list-item`}
              onClick={() => {
                sort(sortValue);

                if (sortTriggerMode === 'adhere-popup') {
                  AdherePopup.closeAll();
                } else {
                  close?.();
                }
              }}
              extra={
                <div className={`${selectorPrefix}-list-item-order`}>
                  <SortDescendingOutlined
                    className={classNames(`${selectorPrefix}-list-order-item`, {
                      [`${selectorPrefix}-active`]: sortValues?.some(
                        (t) => t.name === sortValue.name && t.order === 'asc',
                      ),
                    })}
                  />
                  <SortAscendingOutlined
                    className={classNames(`${selectorPrefix}-list-order-item`, {
                      [`${selectorPrefix}-active`]: sortValues?.some(
                        (t) => t.name === sortValue.name && t.order === 'desc',
                      ),
                    })}
                  />
                </div>
              }
            >
              <div className={`${selectorPrefix}-list-item-label`}>{sortValue.label}</div>
            </List.Item>
          ))}
        </List>
      );
    },
    [renderSort, sortConfig, sortTriggerMode, sortValues],
  );

  const triggerContext = useMemo(() => {
    if (sortTriggerMode === 'modal') {
      return <Modal.Context.Consumer>{(value) => renderSortElement(value)}</Modal.Context.Consumer>;
    } else if (sortTriggerMode === 'dialog') {
      return (
        <Dialog.Context.Consumer>{(value) => renderSortElement(value)}</Dialog.Context.Consumer>
      );
    } else if (sortTriggerMode === 'popup-bottom') {
      return <Popup.Context.Consumer>{(value) => renderSortElement(value)}</Popup.Context.Consumer>;
    } else {
      return renderSortElement;
    }
  }, [sortTriggerMode, renderSortElement]);

  const childrenElement = useMemo(() => {
    const commonProps = {
      ...sortTriggerProps,
    };

    // hoc
    if (['popup-bottom', 'popup-top', 'modal', 'dialog'].includes(sortTriggerMode ?? '')) {
      const hocProps = {
        ...commonProps,
        actions,
        popoverTriggerProps: {
          ...(
            sortTriggerProps as
              | PopupTriggerProps<any>
              | ModalTriggerProps<any>
              | DialogTriggerProps<any>
          )?.popoverTriggerProps,
          renderTrigger: () => triggerElement,
        },
      };

      // Popup
      if (['popup-bottom', 'popup-top'].includes(sortTriggerMode ?? '')) {
        const position = new Map([
          ['popup-bottom', 'bottom'],
          ['popup-top', 'top'],
        ]);

        const popupProps = {
          ...hocProps,
          position: position.get(sortTriggerMode ?? ''),
        };

        return (
          <Popup.Trigger disabled={disabled} {...popupProps}>
            {triggerContext}
          </Popup.Trigger>
        );
      }
      // Modal
      else if (sortTriggerMode === 'modal') {
        return (
          <Modal.TriggerPrompt disabled={disabled} {...hocProps}>
            {triggerContext}
          </Modal.TriggerPrompt>
        );
      }
      // Dialog
      else if (sortTriggerMode === 'dialog') {
        return (
          <Dialog.TriggerPrompt disabled={disabled} {...hocProps}>
            {triggerContext}
          </Dialog.TriggerPrompt>
        );
      }
    }
    // adhere-popup
    else if (sortTriggerMode === 'adhere-popup') {
      return (
        <AdherePopup.Trigger
          {...commonProps}
          disabled={disabled}
          renderTrigger={() => triggerElement}
          actions={actions}
        >
          {triggerContext}
        </AdherePopup.Trigger>
      );
    }
  }, [sortTriggerMode, sortTriggerProps, triggerElement, triggerContext, actions]);

  function sort(sortItemConfig: SortConfigItem) {
    const draft = [...(sortValues ?? [])];

    const sortValueIndex = draft.findIndex((t) => t.name === sortItemConfig.name);

    if (sortValueIndex === -1) {
      draft.push({
        name: sortItemConfig.name,
        order: 'asc',
      });
    } else {
      if (!draft[sortValueIndex].order) {
        draft[sortValueIndex] = {
          ...draft[sortValueIndex],
          order: 'desc',
        };
      } else {
        if (draft[sortValueIndex].order === 'asc') {
          draft[sortValueIndex] = {
            ...draft[sortValueIndex],
            order: '',
          };
        } else if (draft[sortValueIndex].order === 'desc') {
          draft[sortValueIndex] = {
            ...draft[sortValueIndex],
            order: 'asc',
          };
        }
      }
    }

    setSortValues(draft);

    return onSort?.(draft ?? []);
  }

  function reset() {
    setSortValues(defaultSortValues);

    if (!onSortReset) return Promise.resolve();

    return onSortReset?.();
  }

  useUpdateEffect(() => {
    setSortValues(defaultSortValues);
  }, [defaultSortValues]);

  return childrenElement;
};

SortItem.displayName = 'SortItem';

export default SortItem;
