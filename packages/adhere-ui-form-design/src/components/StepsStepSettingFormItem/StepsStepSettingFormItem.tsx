import { Button, Modal, Space, Switch } from 'antd';
import classNames from 'classnames';
import React, { memo, useContext, useMemo, useRef, useState } from 'react';
import type { FC } from 'react';

import { DeleteOutlined, HolderOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { Input } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { SELECT_PREFIX } from '../../constant';
import type { I18nValue } from '../../types';
import { toI18nLabel } from '../../utils';
import I18nChangeFormItem from '../I18nChangeFormItem';

const selectorPrefix = `${SELECT_PREFIX}-form-design-components-steps-step-setting-form-item`;

export interface StepsStepSettingItem {
  id: string;
  /** 步骤标题，支持国际化，对应 antd Steps item.title */
  title?: I18nValue;
  /** 步骤描述，支持国际化，对应 antd Steps item.description */
  description?: I18nValue;
  disabled?: boolean;
}

export interface StepsStepSettingFormItemProps {
  value?: StepsStepSettingItem[];
  onChange?: (value: StepsStepSettingItem[]) => void;
  onAdd?: () => void;
  onDelete?: (id: string) => void;
  onSortChange?: (originId: string, targetId: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

function createEmptyStep(): StepsStepSettingItem {
  return {
    id: Util.uuid(),
    title: undefined,
    description: undefined,
    disabled: false,
  };
}

const SortableItem: FC<{
  item: StepsStepSettingItem;
  onDelete: () => void;
  onSetting: () => void;
  onChangeTitle: (v: I18nValue) => void;
}> = ({ item, onDelete, onSetting, onChangeTitle }) => {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const titleValue = toI18nLabel(item.title, lang, localesKeys);

  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={classNames(`${selectorPrefix}-item`, {
        [`${selectorPrefix}-item-dragging`]: isDragging,
      })}
    >
      <div className={`${selectorPrefix}-item-row`} ref={setActivatorNodeRef} {...attributes}>
        <div className={`${selectorPrefix}-item-handle`}>
          <HolderOutlined {...listeners} />
        </div>

        <div className={`${selectorPrefix}-item-label`}>
          <div ref={triggerRef} />
          <I18nChangeFormItem
            getTriggerContainer={() => triggerRef.current}
            value={titleValue}
            onChange={(next) => onChangeTitle(next)}
          >
            {({ value, onChange }) => (
              <Input.OptimizedInput
                showCount={false}
                value={value ?? ''}
                placeholder={Intl.get('column_title')}
                allowClear
                onChange={(e) => onChange?.(e.target.value)}
              />
            )}
          </I18nChangeFormItem>
        </div>

        <Space className={`${selectorPrefix}-item-actions`} size={8}>
          <Button
            aria-label={Intl.get('settings')}
            icon={<SettingOutlined />}
            onClick={onSetting}
          />
          <Button
            aria-label={Intl.get('delete')}
            danger
            icon={<DeleteOutlined />}
            onClick={onDelete}
          />
        </Space>
      </div>
    </div>
  );
};

const StepsStepSettingFormItem: FC<StepsStepSettingFormItemProps> = ({
  value,
  onChange,
  onAdd,
  onDelete,
  onSortChange,
  className,
  style,
}) => {
  const items = useMemo(() => value ?? [], [value]);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const [settingOpen, setSettingOpen] = useState(false);
  const [settingId, setSettingId] = useState<string | null>(null);

  const currentSettingItem = useMemo(
    () => items.find((t) => t.id === settingId) ?? null,
    [items, settingId],
  );

  const updateAt = (id: string, patch: Partial<StepsStepSettingItem>) => {
    onChange?.(items.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  };

  const onInternalAdd = () => {
    onChange?.([...(items ?? []), createEmptyStep()]);
    onAdd?.();
  };

  const onInternalDelete = (id: string) => {
    if (settingId === id) {
      setSettingOpen(false);
      setSettingId(null);
    }
    onChange?.(items.filter((t) => t.id !== id));
    onDelete?.(id);
  };

  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);
  const descTriggerRef = useRef<HTMLDivElement | null>(null);
  const descriptionValue = currentSettingItem
    ? toI18nLabel(currentSettingItem.description, lang, localesKeys)
    : undefined;

  return (
    <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
      <div className={`${selectorPrefix}-title`}>{Intl.get('steps_step_config')}</div>

      <div className={`${selectorPrefix}-header`}>
        <Button icon={<PlusOutlined />} onClick={onInternalAdd}>
          {Intl.get('add_step')}
        </Button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={({ active, over }) => {
          if (!over) return;
          if (active.id === over.id) return;
          const oldIndex = items.findIndex((t) => t.id === active.id);
          const newIndex = items.findIndex((t) => t.id === over.id);
          if (oldIndex === -1 || newIndex === -1) return;
          onSortChange?.(String(active.id), String(over.id));
          onChange?.(arrayMove(items, oldIndex, newIndex));
        }}
      >
        <SortableContext items={items.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          <div className={`${selectorPrefix}-list`}>
            {items.map((item) => (
              <SortableItem
                key={item.id}
                item={item}
                onDelete={() => onInternalDelete(item.id)}
                onSetting={() => {
                  setSettingId(item.id);
                  setSettingOpen(true);
                }}
                onChangeTitle={(v) => updateAt(item.id, { title: v })}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <Modal
        title={Intl.get('settings')}
        open={settingOpen}
        styles={{
          body: {
            maxHeight: '60vh',
            overflowY: 'auto',
          },
        }}
        onCancel={() => {
          setSettingOpen(false);
          setSettingId(null);
        }}
        onOk={() => {
          setSettingOpen(false);
          setSettingId(null);
        }}
        destroyOnHidden
      >
        {!currentSettingItem ? null : (
          <div className={`${selectorPrefix}-modal`}>
            <div className={`${selectorPrefix}-modal-row`}>
              <div className={`${selectorPrefix}-modal-row-label`}>{Intl.get('disabled')}：</div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <Switch
                  checked={currentSettingItem.disabled ?? false}
                  onChange={(v) => updateAt(currentSettingItem.id, { disabled: v })}
                />
              </div>
            </div>

            <div className={`${selectorPrefix}-modal-row`}>
              <div className={`${selectorPrefix}-modal-row-label`}>
                {Intl.get('steps_description')}：
              </div>
              <div className={`${selectorPrefix}-modal-row-value`} ref={descTriggerRef}>
                <I18nChangeFormItem
                  getTriggerContainer={() => descTriggerRef.current}
                  value={descriptionValue}
                  onChange={(next) => updateAt(currentSettingItem.id, { description: next })}
                >
                  {({ value: descVal, onChange: onDescChange }) => (
                    <Input.OptimizedTextArea
                      value={descVal ?? ''}
                      placeholder={Intl.get('steps_description')}
                      allowClear
                      rows={3}
                      onChange={(e) => onDescChange?.(e.target.value)}
                    />
                  )}
                </I18nChangeFormItem>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

StepsStepSettingFormItem.displayName = 'StepsStepSettingFormItem';

export default memo<StepsStepSettingFormItemProps>(StepsStepSettingFormItem);
