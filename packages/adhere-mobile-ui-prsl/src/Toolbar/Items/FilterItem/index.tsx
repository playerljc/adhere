import { useMount, useUpdateEffect } from 'ahooks';
import { Form } from 'antd-mobile';
import { FilterOutline } from 'antd-mobile-icons';
import isPrimaryEmpty from 'lodash.isempty';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import { Dialog, Modal, Popup } from '@baifendian/adhere-mobile-ui-anthoc';
import type {
  DialogTriggerProps,
  ModalTriggerProps,
  PopupTriggerProps,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import AdherePopup from '@baifendian/adhere-ui-popup';
import Intl from '@baifendian/adhere-util-intl';

import { FilterItemProps } from '../../../types';
import NormalItem from '../NormalItem';

const selectorPrefix = 'adhere-mobile-ui-prsl-toolbar-filter-item';

/**
 * FilterItem
 * @param children
 * @param disabled
 * @param filterTriggerMode
 * @param filterTriggerProps
 * @param renderFilter
 * @param filterFormProps
 * @param filterConfig
 * @param defaultFilterValues
 * @param onFilter
 * @param onFilterReset
 * @constructor
 */
const FilterItem: FC<FilterItemProps> = ({
  children,
  disabled,
  filterTriggerMode = 'popup-bottom',
  filterTriggerProps = {},
  renderFilter,
  filterFormProps,
  filterConfig,
  defaultFilterValues,
  onFilter,
  onFilterReset,
}) => {
  const [form] = Form.useForm();

  const defaultElement = (
    <NormalItem
      key="filter-item"
      className={selectorPrefix}
      icon={<FilterOutline />}
      label={Intl.v('筛选')}
    />
  );

  const triggerElement = useMemo(() => {
    return children?.(defaultElement) ?? defaultElement;
  }, [children, defaultElement]);

  const actions = useMemo(() => {
    if (filterTriggerMode === 'adhere-popup') {
      return [
        {
          key: 'ok',
          type: 'primary',
          children: Intl.v('确定'),
          onClick: search,
        },
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
        key: 'ok',
        primary: true,
        text: Intl.v('确定'),
        onClick: search,
      },
      {
        key: 'reset',
        primary: true,
        text: Intl.v('重置'),
        onClick: reset,
      },
    ];
  }, [filterTriggerMode]);

  const searchElement = useMemo(() => {
    if (renderFilter) {
      return renderFilter?.(defaultFilterValues ?? {});
    }

    return (
      <Form form={form} layout="horizontal" {...filterFormProps}>
        {filterConfig?.map(({ key, name, label, formItemProps, render }) => (
          <Form.Item key={key} name={name} label={label} {...(formItemProps ?? {})}>
            {render?.(form)}
          </Form.Item>
        ))}
      </Form>
    );
  }, [renderFilter, defaultFilterValues]);

  const childrenElement = useMemo(() => {
    const commonProps = {
      ...filterTriggerProps,
    };

    // hoc
    if (['popup-bottom', 'popup-top', 'modal', 'dialog'].includes(filterTriggerMode ?? '')) {
      const hocProps = {
        ...commonProps,
        actions,
        popoverTriggerProps: {
          ...(
            filterTriggerProps as
              | PopupTriggerProps<any>
              | ModalTriggerProps<any>
              | DialogTriggerProps<any>
          )?.popoverTriggerProps,
          renderTrigger: () => triggerElement,
        },
      };

      // Popup
      if (['popup-bottom', 'popup-top'].includes(filterTriggerMode ?? '')) {
        const position = new Map([
          ['popup-bottom', 'bottom'],
          ['popup-top', 'top'],
        ]);

        const popupProps = {
          ...hocProps,
          position: position.get(filterTriggerMode ?? ''),
        };

        return (
          <Popup.Trigger disabled={disabled} {...popupProps}>
            {searchElement}
          </Popup.Trigger>
        );
      }
      // Modal
      else if (filterTriggerMode === 'modal') {
        return (
          <Modal.TriggerPrompt disabled={disabled} {...hocProps}>
            {searchElement}
          </Modal.TriggerPrompt>
        );
      }
      // Dialog
      else if (filterTriggerMode === 'dialog') {
        return (
          <Dialog.TriggerPrompt disabled={disabled} {...hocProps}>
            {searchElement}
          </Dialog.TriggerPrompt>
        );
      }
    }
    // adhere-popup
    else if (filterTriggerMode === 'adhere-popup') {
      return (
        <AdherePopup.Trigger
          {...commonProps}
          disabled={disabled}
          renderTrigger={() => triggerElement}
          actions={actions}
        >
          {searchElement}
        </AdherePopup.Trigger>
      );
    }
  }, [filterTriggerMode, filterTriggerProps, triggerElement, searchElement, actions, disabled]);

  function search() {
    if (!onFilter) return Promise.resolve();

    const filterData = form ? form.getFieldsValue() : defaultFilterValues;

    return onFilter?.(filterData);
  }

  function reset() {
    // @ts-ignore
    form?.resetFields(isPrimaryEmpty(defaultFilterValues) ? undefined : defaultFilterValues);

    if (!onFilterReset) {
      return Promise.resolve();
    }

    return onFilterReset?.();
  }

  useMount(() => {
    if (!form) return;
    form.setFieldsValue(defaultFilterValues);
  });

  useUpdateEffect(() => {
    if (!form) return;

    if (!defaultFilterValues) {
      form.resetFields();
    } else {
      form.setFieldsValue(defaultFilterValues);
    }
  }, [defaultFilterValues]);

  return childrenElement;
};

FilterItem.displayName = 'FilterItem';

export default FilterItem;
