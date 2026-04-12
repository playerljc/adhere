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
import { CollapseCollapsibleSelectStandardDict } from '../CollapseCollapsible';
import I18nChangeFormItem from '../I18nChangeFormItem';

const selectorPrefix = `${SELECT_PREFIX}-form-design-components-collapse-panel-setting-form-item`;

export interface CollapsePanelSettingItem {
  id: string;
  /** 对应 antd Collapse item 的 key */
  key: string;
  /** 面板标题，支持国际化 */
  label?: I18nValue;
  forceRender?: boolean;
  destroyOnHidden?: boolean;
  showArrow?: boolean;
  /** 覆盖根级 collapsible */
  collapsible?: 'header' | 'icon' | 'disabled';
}

export interface CollapsePanelSettingFormItemProps {
  value?: CollapsePanelSettingItem[];
  onChange?: (value: CollapsePanelSettingItem[]) => void;
  onAdd?: () => void;
  onDelete?: (id: string) => void;
  onSortChange?: (originId: string, targetId: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

function createEmptyPanel(): CollapsePanelSettingItem {
  return {
    id: Util.uuid(),
    key: `panel_${Util.uuid().replace(/-/g, '').slice(0, 8)}`,
    label: undefined,
    forceRender: false,
    destroyOnHidden: false,
    showArrow: true,
    collapsible: undefined,
  };
}

const SortableItem: FC<{
  item: CollapsePanelSettingItem;
  onDelete: () => void;
  onSetting: () => void;
  onChangeLabel: (v: I18nValue) => void;
}> = ({ item, onDelete, onSetting, onChangeLabel }) => {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const labelValue = toI18nLabel(item.label, lang, localesKeys);

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
            value={labelValue}
            onChange={(next) => onChangeLabel(next)}
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

const CollapsePanelSettingFormItem: FC<CollapsePanelSettingFormItemProps> = ({
  value,
  onChange,
  onAdd,
  onDelete,
  onSortChange,
  className,
  style,
}) => {
  const items = useMemo(() => value ?? [], [value]);

  const keyDuplicateSet = useMemo(() => {
    const counts = new Map<string, number>();
    for (const it of items) {
      const k = (it.key ?? '').trim();
      if (!k) continue;
      counts.set(k, (counts.get(k) ?? 0) + 1);
    }
    const dup = new Set<string>();
    counts.forEach((c, k) => {
      if (c > 1) dup.add(k);
    });
    return dup;
  }, [items]);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const [settingOpen, setSettingOpen] = useState(false);
  const [settingId, setSettingId] = useState<string | null>(null);

  const currentSettingItem = useMemo(
    () => items.find((t) => t.id === settingId) ?? null,
    [items, settingId],
  );

  const updateAt = (id: string, patch: Partial<CollapsePanelSettingItem>) => {
    if ('key' in patch) {
      const nextKey = String(patch.key ?? '').trim();
      if (nextKey) {
        const exists = items.some((it) => it.id !== id && (it.key ?? '').trim() === nextKey);
        if (exists) {
          Modal.warning({
            title: Intl.get('hint'),
            content: Intl.get('tab_key_duplicate'),
          });
          return;
        }
      }
    }

    onChange?.(items.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  };

  const onInternalAdd = () => {
    onChange?.([...(items ?? []), createEmptyPanel()]);
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

  return (
    <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
      <div className={`${selectorPrefix}-title`}>{Intl.get('collapse_panel_config')}</div>

      <div className={`${selectorPrefix}-header`}>
        <Button icon={<PlusOutlined />} onClick={onInternalAdd}>
          {Intl.get('add_collapse_panel')}
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
                onChangeLabel={(v) => updateAt(item.id, { label: v })}
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
              <div className={`${selectorPrefix}-modal-row-label`}>{Intl.get('tab_key')}：</div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <Input.OptimizedInput
                  showCount={false}
                  value={currentSettingItem.key}
                  placeholder={Intl.get('tab_key')}
                  status={
                    keyDuplicateSet.has((currentSettingItem.key ?? '').trim()) ? 'error' : undefined
                  }
                  onChange={(e) => updateAt(currentSettingItem.id, { key: e.target.value })}
                />
              </div>
            </div>

            <div className={`${selectorPrefix}-modal-row`}>
              <div className={`${selectorPrefix}-modal-row-label`}>
                {Intl.get('tabs_force_render')}：
              </div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <Switch
                  checked={currentSettingItem.forceRender ?? false}
                  onChange={(v) => updateAt(currentSettingItem.id, { forceRender: v })}
                />
              </div>
            </div>

            <div className={`${selectorPrefix}-modal-row`}>
              <div className={`${selectorPrefix}-modal-row-label`}>
                {Intl.get('tabs_destroy_on_hidden')}：
              </div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <Switch
                  checked={currentSettingItem.destroyOnHidden ?? false}
                  onChange={(v) => updateAt(currentSettingItem.id, { destroyOnHidden: v })}
                />
              </div>
            </div>

            <div className={`${selectorPrefix}-modal-row`}>
              <div className={`${selectorPrefix}-modal-row-label`}>
                {Intl.get('collapse_show_arrow')}：
              </div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <Switch
                  checked={currentSettingItem.showArrow ?? true}
                  onChange={(v) => updateAt(currentSettingItem.id, { showArrow: v })}
                />
              </div>
            </div>

            <div className={`${selectorPrefix}-modal-row`}>
              <div className={`${selectorPrefix}-modal-row-label`}>
                {Intl.get('collapse_collapsible')}：
              </div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <CollapseCollapsibleSelectStandardDict
                  allowClear
                  placeholder={Intl.get('collapse_collapsible')}
                  value={currentSettingItem.collapsible}
                  onChange={(v) =>
                    updateAt(currentSettingItem.id, {
                      collapsible: (v ?? undefined) as CollapsePanelSettingItem['collapsible'],
                    })
                  }
                />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

CollapsePanelSettingFormItem.displayName = 'CollapsePanelSettingFormItem';

export default memo<CollapsePanelSettingFormItemProps>(CollapsePanelSettingFormItem);
