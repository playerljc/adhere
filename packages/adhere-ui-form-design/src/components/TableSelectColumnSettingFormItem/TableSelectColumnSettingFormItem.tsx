import { Button, Modal, Space } from 'antd';
import classNames from 'classnames';
import React, { memo, useContext, useMemo, useRef, useState, type FC } from 'react';

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
import ColumnSettingModal from './ColumnSettingModal';

const selectorPrefix = `${SELECT_PREFIX}-form-design-components-table-select-column-setting-form-item`;

export type TableSelectColumnAlign = 'left' | 'center' | 'right';

export type TableSelectColumnFixed = 'none' | 'left' | 'right';

export type TableSelectColumnDefaultSortOrder = 'none' | 'ascend' | 'descend';

export interface TableSelectColumnSettingItem {
  id: string;
  title?: I18nValue;
  dataIndex?: string;
  visible?: boolean;
  width?: number;
  align?: TableSelectColumnAlign;
  ellipsis?: boolean;
  fixed?: TableSelectColumnFixed;
  sorter?: boolean;
  defaultSortOrder?: TableSelectColumnDefaultSortOrder;
}

export interface TableSelectColumnSettingFormItemProps {
  value?: TableSelectColumnSettingItem[];
  onChange?: (value: TableSelectColumnSettingItem[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

function createEmptyColumn(): TableSelectColumnSettingItem {
  return {
    id: Util.uuid(),
    title: undefined,
    dataIndex: '',
    visible: true,
    align: 'left',
    ellipsis: false,
    sorter: false,
    defaultSortOrder: 'none',
  };
}

const SortableItem: FC<{
  item: TableSelectColumnSettingItem;
  isDataIndexDuplicate?: boolean;
  onDelete: () => void;
  onSetting: () => void;
  onChangeTitle: (v: I18nValue) => void;
  onChangeDataIndex: (v: string) => void;
}> = ({ item, isDataIndexDuplicate, onDelete, onSetting, onChangeTitle, onChangeDataIndex }) => {
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

        <div className={`${selectorPrefix}-item-title`}>
          <div ref={triggerRef} />
          <I18nChangeFormItem
            getTriggerContainer={() => triggerRef.current}
            value={titleValue}
            onChange={(next) => onChangeTitle(next)}
          >
            {({ value, onChange }) => (
              <Input.OptimizedInput
                value={value ?? ''}
                placeholder={Intl.get('column_title')}
                onChange={(e) => onChange?.(e.target.value)}
                showCount={false}
              />
            )}
          </I18nChangeFormItem>
        </div>

        <Input.OptimizedInput
          className={`${selectorPrefix}-item-field`}
          value={item.dataIndex}
          placeholder={Intl.get('column_field')}
          status={isDataIndexDuplicate ? 'error' : undefined}
          onChange={(e) => onChangeDataIndex(e.target.value)}
          showCount={false}
        />

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

const TableSelectColumnSettingFormItem: FC<TableSelectColumnSettingFormItemProps> = ({
  value,
  onChange,
  className,
  style,
}) => {
  const items = useMemo(() => value ?? [], [value]);

  const dataIndexDuplicateSet = useMemo(() => {
    const counts = new Map<string, number>();
    for (const it of items) {
      const k = (it.dataIndex ?? '').trim();
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

  const updateAt = (id: string, patch: Partial<TableSelectColumnSettingItem>) => {
    if ('dataIndex' in patch) {
      const nextDataIndex = String(patch.dataIndex ?? '');
      const key = nextDataIndex.trim();
      if (key) {
        const exists = items.some((it) => it.id !== id && (it.dataIndex ?? '').trim() === key);
        if (exists) {
          Modal.warning({
            title: Intl.get('hint'),
            content: Intl.get('column_field_duplicate'),
          });
          return;
        }
      }
    }

    onChange?.(items.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  };

  const onAdd = () => {
    onChange?.([...(items ?? []), createEmptyColumn()]);
  };

  const onDelete = (id: string) => {
    if (settingId === id) {
      setSettingOpen(false);
      setSettingId(null);
    }
    onChange?.(items.filter((t) => t.id !== id));
  };

  return (
    <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
      <div className={`${selectorPrefix}-header`}>
        <Button icon={<PlusOutlined />} onClick={onAdd}>
          {Intl.get('add_column')}
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
          onChange?.(arrayMove(items, oldIndex, newIndex));
        }}
      >
        <SortableContext items={items.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          <div className={`${selectorPrefix}-list`}>
            {items.map((item) => (
              <SortableItem
                key={item.id}
                item={item}
                isDataIndexDuplicate={dataIndexDuplicateSet.has((item.dataIndex ?? '').trim())}
                onDelete={() => onDelete(item.id)}
                onSetting={() => {
                  setSettingId(item.id);
                  setSettingOpen(true);
                }}
                onChangeTitle={(v) => updateAt(item.id, { title: v })}
                onChangeDataIndex={(v) => updateAt(item.id, { dataIndex: v })}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <ColumnSettingModal
        open={settingOpen}
        item={currentSettingItem}
        onCancel={() => {
          setSettingOpen(false);
          setSettingId(null);
        }}
        onOk={() => {
          setSettingOpen(false);
          setSettingId(null);
        }}
        onChange={(patch) => {
          if (currentSettingItem) {
            updateAt(currentSettingItem.id, patch);
          }
        }}
      />
    </div>
  );
};

export default memo(TableSelectColumnSettingFormItem);
