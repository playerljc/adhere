import { Button, Input, InputNumber, Modal, Select, Space } from 'antd';
import classNames from 'classnames';
import React, { memo, useContext, useMemo, useRef, useState } from 'react';
import type { FC } from 'react';

import { DeleteOutlined, HolderOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
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

import { SELECT_PREFIX, SELECT_VALUE_KEY_NAME } from '../../constant';
import type { I18nValue } from '../../types';
import I18nChangeFormItem from '../I18nChangeFormItem';

const selectorPrefix = `${SELECT_PREFIX}-form-design-components-table-column-setting-form-item`;

export type TableColumnWidthMode = 'adaptive' | 'auto' | 'percent' | 'number';

export type TableColumnAlign = 'left' | 'center' | 'right';

export type TableColumnEditorType =
  | 'input'
  | 'textArea'
  | 'inputNumber'
  | 'inputNumberDecimal1'
  | 'inputNegativeNumberDecimal1'
  | 'inputPositiveNumberDecimal1'
  | 'inputNumberDecimal1French'
  | 'inputNumberDecimal1German'
  | 'inputNumberDecimal1International'
  | 'inputNumberDecimal1US'
  | 'inputNumberDecimal2'
  | 'inputNegativeNumberDecimal2'
  | 'inputPositiveNumberDecimal2'
  | 'inputNumberDecimal2French'
  | 'inputNumberDecimal2German'
  | 'inputNumberDecimal2International'
  | 'inputNumberDecimal2US'
  | 'inputNumberInteger'
  | 'inputNegativeNumberInteger'
  | 'inputPositiveNumberInteger'
  | 'inputNumberIntegerFrench'
  | 'inputNumberIntegerGerman'
  | 'inputNumberIntegerInternational'
  | 'inputNumberIntegerUS'
  | 'datePicker'
  | 'birthdayPicker'
  | 'boundedTimePicker'
  | 'timePicker'
  | 'rangePicker'
  | 'slider'
  | 'sliderRange'
  | 'rate'
  | 'switch'
  | 'colorPicker';

export interface TableColumnSettingItem {
  id: string;
  title?: I18nValue;
  field?: string;
  defaultValue?: any;
  widthMode?: TableColumnWidthMode;
  widthValue?: number;
  align?: TableColumnAlign;
  editorType?: TableColumnEditorType;
  editorSetting?: Record<string, any>;
}

export interface TableColumnSettingFormItemProps {
  value?: TableColumnSettingItem[];
  onChange?: (value: TableColumnSettingItem[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

function createEmptyColumn(): TableColumnSettingItem {
  return {
    id: Util.uuid(),
    title: undefined,
    field: '',
    defaultValue: undefined,
    widthMode: 'adaptive',
    widthValue: undefined,
    align: 'left',
    editorType: undefined,
    editorSetting: {},
  };
}

function toI18nTitle(
  title: TableColumnSettingItem['title'],
  lang: string,
  localesKeys: string[],
): I18nValue {
  if (title && typeof title === 'object' && SELECT_VALUE_KEY_NAME in title) {
    return title as I18nValue;
  }

  const next: Record<string, string | null | undefined> = { [SELECT_VALUE_KEY_NAME]: lang };
  localesKeys.forEach((key) => {
    next[key] = key === lang ? (title as unknown as string) ?? '' : null;
  });
  return next as I18nValue;
}

const EditorTypeOptions: Array<{ label: string; value: TableColumnEditorType }> = [
  'input',
  'textArea',
  'inputNumber',
  'inputNumberDecimal1',
  'inputNegativeNumberDecimal1',
  'inputPositiveNumberDecimal1',
  'inputNumberDecimal1French',
  'inputNumberDecimal1German',
  'inputNumberDecimal1International',
  'inputNumberDecimal1US',
  'inputNumberDecimal2',
  'inputNegativeNumberDecimal2',
  'inputPositiveNumberDecimal2',
  'inputNumberDecimal2French',
  'inputNumberDecimal2German',
  'inputNumberDecimal2International',
  'inputNumberDecimal2US',
  'inputNumberInteger',
  'inputNegativeNumberInteger',
  'inputPositiveNumberInteger',
  'inputNumberIntegerFrench',
  'inputNumberIntegerGerman',
  'inputNumberIntegerInternational',
  'inputNumberIntegerUS',
  'datePicker',
  'birthdayPicker',
  'boundedTimePicker',
  'timePicker',
  'rangePicker',
  'slider',
  'sliderRange',
  'rate',
  'switch',
  'colorPicker',
].map((v) => ({ label: v, value: v as TableColumnEditorType }));

const SortableItem: FC<{
  item: TableColumnSettingItem;
  isFieldDuplicate?: boolean;
  onDelete: () => void;
  onSetting: () => void;
  onChangeTitle: (v: I18nValue) => void;
  onChangeField: (v: string) => void;
}> = ({ item, isFieldDuplicate, onDelete, onSetting, onChangeTitle, onChangeField }) => {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const titleValue = toI18nTitle(item.title, lang, localesKeys);

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
              <Input
                value={value ?? ''}
                placeholder={Intl.get('column_title')}
                onChange={(e) => onChange?.(e.target.value)}
              />
            )}
          </I18nChangeFormItem>
        </div>

        <Input
          className={`${selectorPrefix}-item-field`}
          value={item.field}
          placeholder={Intl.get('column_field')}
          status={isFieldDuplicate ? 'error' : undefined}
          onChange={(e) => onChangeField(e.target.value)}
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

const TableColumnSettingFormItem: FC<TableColumnSettingFormItemProps> = ({
  value,
  onChange,
  className,
  style,
}) => {
  const items = useMemo(() => value ?? [], [value]);

  const fieldDuplicateSet = useMemo(() => {
    const counts = new Map<string, number>();
    for (const it of items) {
      const k = (it.field ?? '').trim();
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

  const updateAt = (id: string, patch: Partial<TableColumnSettingItem>) => {
    if ('field' in patch) {
      const nextField = String(patch.field ?? '');
      const key = nextField.trim();
      if (key) {
        const exists = items.some((it) => it.id !== id && (it.field ?? '').trim() === key);
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
                isFieldDuplicate={fieldDuplicateSet.has((item.field ?? '').trim())}
                onDelete={() => onDelete(item.id)}
                onSetting={() => {
                  setSettingId(item.id);
                  setSettingOpen(true);
                }}
                onChangeTitle={(v) => updateAt(item.id, { title: v })}
                onChangeField={(v) => updateAt(item.id, { field: v })}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <Modal
        title={Intl.get('settings')}
        open={settingOpen}
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
              <div className={`${selectorPrefix}-modal-row-label`}>{Intl.get('width')}：</div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <Space wrap>
                  <Select<TableColumnWidthMode>
                    style={{ width: '100%' }}
                    value={currentSettingItem.widthMode ?? 'adaptive'}
                    options={[
                      { label: Intl.get('adaptive'), value: 'adaptive' },
                      { label: Intl.get('auto'), value: 'auto' },
                      { label: Intl.get('percentage'), value: 'percent' },
                      { label: Intl.get('number'), value: 'number' },
                    ]}
                    onChange={(v) => {
                      updateAt(currentSettingItem.id, {
                        widthMode: v,
                        widthValue: v === 'percent' || v === 'number' ? 0 : undefined,
                      });
                    }}
                  />

                  {currentSettingItem.widthMode === 'percent' && (
                    <InputNumber
                      style={{ width: '100%' }}
                      min={0}
                      max={100}
                      value={currentSettingItem.widthValue}
                      onChange={(v) =>
                        updateAt(currentSettingItem.id, {
                          widthValue: typeof v === 'number' ? v : 0,
                        })
                      }
                      addonAfter="%"
                    />
                  )}

                  {currentSettingItem.widthMode === 'number' && (
                    <InputNumber
                      style={{ width: '100%' }}
                      min={0}
                      value={currentSettingItem.widthValue}
                      onChange={(v) =>
                        updateAt(currentSettingItem.id, {
                          widthValue: typeof v === 'number' ? v : 0,
                        })
                      }
                    />
                  )}
                </Space>
              </div>
            </div>

            <div className={`${selectorPrefix}-modal-row`}>
              <div className={`${selectorPrefix}-modal-row-label`}>{Intl.get('align')}：</div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <Select<TableColumnAlign>
                  style={{ width: '100%' }}
                  value={currentSettingItem.align ?? 'left'}
                  options={[
                    { label: 'left', value: 'left' },
                    { label: 'center', value: 'center' },
                    { label: 'right', value: 'right' },
                  ]}
                  onChange={(v) => updateAt(currentSettingItem.id, { align: v })}
                />
              </div>
            </div>

            <div className={`${selectorPrefix}-modal-row`}>
              <div className={`${selectorPrefix}-modal-row-label`}>{Intl.get('default_value')}：</div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <Input
                  value={
                    currentSettingItem.defaultValue === undefined || currentSettingItem.defaultValue === null
                      ? ''
                      : String(currentSettingItem.defaultValue)
                  }
                  placeholder={Intl.get('default_value')}
                  onChange={(e) => updateAt(currentSettingItem.id, { defaultValue: e.target.value })}
                />
              </div>
            </div>

            <div className={`${selectorPrefix}-modal-row`}>
              <div className={`${selectorPrefix}-modal-row-label`}>
                {Intl.get('editor_control')}：
              </div>
              <div className={`${selectorPrefix}-modal-row-value`}>
                <Space wrap>
                  <Select<TableColumnEditorType>
                    showSearch
                    style={{ width: '100%' }}
                    value={currentSettingItem.editorType}
                    options={EditorTypeOptions}
                    placeholder={Intl.get('please_select')}
                    onChange={(v) => updateAt(currentSettingItem.id, { editorType: v })}
                  />

                  {!!currentSettingItem.editorType && (
                    <Button
                      icon={<SettingOutlined />}
                      onClick={() => {
                        Modal.info({
                          title: Intl.get('settings'),
                          content: (
                            <div>
                              {Intl.get('editor_control')}：{currentSettingItem.editorType}
                              <br />
                              {Intl.get('description')}：
                              {Intl.get('editor_control_setting_not_implemented')}
                            </div>
                          ),
                        });
                      }}
                    >
                      {Intl.get('settings')}
                    </Button>
                  )}
                </Space>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

TableColumnSettingFormItem.displayName = 'TableColumnSettingFormItem';

export default memo<TableColumnSettingFormItemProps>(TableColumnSettingFormItem);
