import { useUpdateEffect } from 'ahooks';
import { List } from 'antd-mobile';
import { TransportQRcodeOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import type { FC } from 'react';

import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { Dialog, Modal, Popup } from '@baifendian/adhere-mobile-ui-anthoc';
import {
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
  sortTriggerMode = 'popup-bottom',
  sortTriggerProps,
  renderSort,
  sortConfig,
  defaultSortValues = [],
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

  const sortElement = useMemo(() => {
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
  }, [renderSort, sortConfig, sortValues]);

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

        return <Popup.Trigger {...popupProps}>{sortElement}</Popup.Trigger>;
      }
      // Modal
      else if (sortTriggerMode === 'modal') {
        return <Modal.TriggerPrompt {...hocProps}>{sortElement}</Modal.TriggerPrompt>;
      }
      // Dialog
      else if (sortTriggerMode === 'dialog') {
        return <Dialog.TriggerPrompt {...hocProps}>{sortElement}</Dialog.TriggerPrompt>;
      }
    }
    // adhere-popup
    else if (sortTriggerMode === 'adhere-popup') {
      return (
        <AdherePopup.Trigger
          {...commonProps}
          renderTrigger={() => triggerElement}
          actions={actions}
        >
          {sortElement}
        </AdherePopup.Trigger>
      );
    }
  }, [sortTriggerMode, sortTriggerProps, triggerElement, sortElement, actions]);

  function sort(sortItemConfig: SortConfigItem) {
    const draft = [...sortValues];
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
