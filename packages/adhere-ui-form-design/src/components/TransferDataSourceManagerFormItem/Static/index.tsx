import classNames from 'classnames';
import React, { type FC, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { DeleteOutlined, HolderOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input, Modal } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';
import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { SELECT_PREFIX } from '../../../constant';
import type { I18nValue } from '../../../types';
import { toI18nLabel } from '../../../utils';
import I18nChangeFormItem from '../../I18nChangeFormItem';
import { type TransferDataSourceItem, type TransferDataSourceManagerFormItemProps } from '../index';

export type StaticProps = TransferDataSourceManagerFormItemProps;

const selectorPrefix = `${SELECT_PREFIX}-design-field-transfer-data-source-form-item-static`;

type SortableRowProps = {
  item: TransferDataSourceItem;
  sortId: string;
  onKeyChange: (sortId: string, key: string) => void;
  onTitleChange: (sortId: string, title: I18nValue) => void;
  onDescriptionChange: (sortId: string, description: I18nValue) => void;
  onDisabledChange: (sortId: string, disabled: boolean) => void;
  onRemove: (sortId: string) => void;
};

type RowContentProps = {
  item: TransferDataSourceItem;
  onKeyChange: (key: string) => void;
  onTitleChange: (title: I18nValue) => void;
  onDescriptionChange: (description: I18nValue) => void;
  onDisabledChange: (disabled: boolean) => void;
  onRemove: () => void;
  handleNode: React.ReactNode;
  onOpenDetail: () => void;
};

function genSortId(): string {
  return `fd-sort-${Math.random().toString(36).slice(2, 11)}`;
}

const SORT_ID_KEY = '__fdSortId';

const EMPTY_DATASOURCE: TransferDataSourceItem[] = [];

function getSortId(item: TransferDataSourceItem): string | undefined {
  return (item as unknown as Record<string, unknown>)[SORT_ID_KEY] as string | undefined;
}

const RowContent: FC<RowContentProps> = ({
  item,
  onKeyChange,
  onTitleChange,
  onRemove,
  handleNode,
  onOpenDetail,
}) => {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const titleI18n = toI18nLabel(item.title, lang, localesKeys);

  return (
    <>
      <div className={`${selectorPrefix}-row-main`}>
        <Input.OptimizedInput
          className={`${selectorPrefix}-input`}
          value={item.key}
          placeholder={Intl.get('transfer_item_key')}
          onChange={(e) => onKeyChange(e.target.value)}
          showCount={false}
        />

        <div ref={triggerRef} className={`${selectorPrefix}-input`}>
          <I18nChangeFormItem
            value={titleI18n}
            onChange={(next) => onTitleChange(next)}
            getTriggerContainer={() => triggerRef.current}
          >
            {({ onChange: i18nOnChange, value }) => (
              <Input.OptimizedInput
                value={value ?? ''}
                placeholder={Intl.get('transfer_item_title')}
                onChange={(e) => i18nOnChange(e.target.value)}
                showCount={false}
              />
            )}
          </I18nChangeFormItem>
        </div>

        <button
          type="button"
          className={`${selectorPrefix}-setting`}
          aria-label={Intl.get('transfer_item_detail')}
          onClick={onOpenDetail}
        >
          <SettingOutlined />
        </button>

        {handleNode}

        <button
          type="button"
          className={`${selectorPrefix}-remove`}
          aria-label={Intl.get('delete')}
          onClick={onRemove}
        >
          <DeleteOutlined />
        </button>
      </div>
    </>
  );
};

const SortableRow: FC<SortableRowProps> = ({
  item,
  sortId,
  onKeyChange,
  onTitleChange,
  onDescriptionChange,
  onDisabledChange,
  onRemove,
}) => {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: sortId,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [detailOpen, setDetailOpen] = useState(false);
  const [draftItem, setDraftItem] = useState<TransferDataSourceItem>(item);
  const descTriggerRef = useRef<HTMLDivElement | null>(null);

  const handleOpenDetail = () => {
    setDraftItem({ ...item });
    setDetailOpen(true);
  };

  const handleOk = () => {
    onDescriptionChange(sortId, toI18nLabel(draftItem.description, lang, localesKeys));
    onDisabledChange(sortId, draftItem.disabled || false);
    setDetailOpen(false);
  };

  const handleCancel = () => {
    setDetailOpen(false);
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className={classNames(`${selectorPrefix}-row`, {
          [`${selectorPrefix}-row-dragging`]: isDragging,
        })}
        {...attributes}
      >
        <RowContent
          item={item}
          onKeyChange={(key) => onKeyChange(sortId, key)}
          onTitleChange={(title) => onTitleChange(sortId, title)}
          onDescriptionChange={(desc) => {}}
          onDisabledChange={(disabled) => {}}
          onRemove={() => onRemove(sortId)}
          onOpenDetail={handleOpenDetail}
          handleNode={
            <button
              type="button"
              className={`${selectorPrefix}-handle`}
              aria-label={Intl.get('sort')}
              {...listeners}
            >
              <HolderOutlined />
            </button>
          }
        />
      </div>

      <Modal
        title={Intl.get('transfer_item_detail')}
        open={detailOpen}
        width={500}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={Intl.get('confirm')}
        cancelText={Intl.get('cancel')}
        destroyOnClose
      >
        <div className={`${selectorPrefix}-detail-form`}>
          <div className={`${selectorPrefix}-detail-item`}>
            <label>{Intl.get('transfer_item_key')}:</label>
            <Input.OptimizedInput value={item.key} disabled showCount={false} />
          </div>
          <div className={`${selectorPrefix}-detail-item`}>
            <label>{Intl.get('transfer_item_title')}:</label>
            <Input.OptimizedInput
              showCount={false}
              value={typeof item.title === 'string' ? item.title : item.title?.[lang] || ''}
              disabled
            />
          </div>
          <div className={`${selectorPrefix}-detail-item`}>
            <label>{Intl.get('transfer_item_description')}:</label>
            <div ref={descTriggerRef}>
              <I18nChangeFormItem
                value={toI18nLabel(item.description, lang, localesKeys)}
                onChange={(next) => setDraftItem({ ...draftItem, description: next })}
                getTriggerContainer={() => descTriggerRef.current}
              >
                {({ onChange: i18nOnChange, value }) => (
                  <Input.OptimizedInput
                    value={value ?? ''}
                    placeholder={Intl.get('transfer_item_description_placeholder')}
                    onChange={(e) => i18nOnChange(e.target.value)}
                    showCount={false}
                  />
                )}
              </I18nChangeFormItem>
            </div>
          </div>
          <div className={`${selectorPrefix}-detail-item`}>
            <Checkbox
              checked={draftItem.disabled || false}
              onChange={(e) => setDraftItem({ ...draftItem, disabled: e.target.checked })}
            >
              {Intl.get('transfer_item_disabled')}
            </Checkbox>
          </div>
        </div>
      </Modal>
    </>
  );
};

type FallbackRowProps = {
  item: TransferDataSourceItem;
  index: number;
  dataSource: TransferDataSourceItem[];
  onChange: (next: TransferDataSourceItem[]) => void;
};

const FallbackRow: FC<FallbackRowProps> = ({ item, index, dataSource, onChange }) => {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);
  const titleTriggerRef = useRef<HTMLDivElement | null>(null);

  const titleI18n = toI18nLabel(item.title, lang, localesKeys);

  const updateItem = (updates: Partial<TransferDataSourceItem>) => {
    const next = [...dataSource];
    next[index] = { ...item, ...updates };
    onChange(next);
  };

  return (
    <div className={`${selectorPrefix}-row`}>
      <div className={`${selectorPrefix}-row-main`}>
        <Input.OptimizedInput
          className={`${selectorPrefix}-input`}
          value={item.key}
          placeholder={Intl.get('transfer_item_key')}
          onChange={(e) => updateItem({ key: e.target.value })}
          showCount={false}
        />
        <div ref={titleTriggerRef} className={`${selectorPrefix}-input`}>
          <I18nChangeFormItem
            value={titleI18n}
            onChange={(next) => updateItem({ title: next })}
            getTriggerContainer={() => titleTriggerRef.current}
          >
            {({ onChange: i18nOnChange, value }) => (
              <Input.OptimizedInput
                value={value ?? ''}
                placeholder={Intl.get('transfer_item_title')}
                onChange={(e) => i18nOnChange(e.target.value)}
                showCount={false}
              />
            )}
          </I18nChangeFormItem>
        </div>
        <span className={`${selectorPrefix}-handle ${selectorPrefix}-handle-disabled`}>
          <HolderOutlined />
        </span>
        <button
          type="button"
          className={`${selectorPrefix}-remove`}
          onClick={() => {
            const next = dataSource.filter((_, i) => i !== index);
            onChange(next);
          }}
        >
          <DeleteOutlined />
        </button>
      </div>
    </div>
  );
};

const Static: FC<StaticProps> = ({ value, onChange }) => {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);

  const dataSource = value?.dataSource ?? EMPTY_DATASOURCE;

  useLayoutEffect(() => {
    if (!onChange) return;
    const ds = value?.dataSource ?? EMPTY_DATASOURCE;
    const needsSortId = ds.some((item) => !getSortId(item));
    if (!needsSortId) return;
    onChange({
      ...(value ?? { type: 'static' }),
      type: 'static',
      dataSource: ds.map((item) => ({
        ...item,
        [SORT_ID_KEY]: getSortId(item) ?? genSortId(),
      })),
    });
  }, [value, onChange]);

  const sortIds = useMemo(
    () => dataSource.map((item) => getSortId(item)).filter(Boolean) as string[],
    [dataSource],
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const emitDataSource = (next: TransferDataSourceItem[]) => {
    onChange?.({
      ...(value ?? { type: 'static' }),
      type: 'static',
      dataSource: next,
    });
  };

  const onKeyChange = (sortId: string, key: string) => {
    const next = dataSource.map((item) => (getSortId(item) === sortId ? { ...item, key } : item));
    emitDataSource(next);
  };

  const onTitleChange = (sortId: string, title: I18nValue) => {
    const next = dataSource.map((item) => (getSortId(item) === sortId ? { ...item, title } : item));
    emitDataSource(next);
  };

  const onDescriptionChange = (sortId: string, description: I18nValue) => {
    const next = dataSource.map((item) =>
      getSortId(item) === sortId ? { ...item, description } : item,
    );
    emitDataSource(next);
  };

  const onDisabledChange = (sortId: string, disabled: boolean) => {
    const next = dataSource.map((item) =>
      getSortId(item) === sortId ? { ...item, disabled } : item,
    );
    emitDataSource(next);
  };

  const onRemove = (sortId: string) => {
    emitDataSource(dataSource.filter((item) => getSortId(item) !== sortId));
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = sortIds.indexOf(String(active.id));
    const newIndex = sortIds.indexOf(String(over.id));
    if (oldIndex === -1 || newIndex === -1) return;
    emitDataSource(arrayMove([...dataSource], oldIndex, newIndex));
  };

  const onAdd = () => {
    const emptyI18n = toI18nLabel(undefined, lang, localesKeys);

    const nextItem: TransferDataSourceItem & { [SORT_ID_KEY]?: string } = {
      key: `key-${Date.now()}`,
      title: emptyI18n,
      description: emptyI18n,
      disabled: false,
      [SORT_ID_KEY]: genSortId(),
    };
    emitDataSource([...dataSource, nextItem]);
  };

  const listReady = dataSource.length === 0 || sortIds.length === dataSource.length;
  const showSortableList = listReady && dataSource.length > 0;

  const renderSortableList = () => (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={sortIds} strategy={verticalListSortingStrategy}>
        <div className={`${selectorPrefix}-list`}>
          {dataSource.map((item) => {
            const sid = getSortId(item);
            if (!sid) return null;
            return (
              <SortableRow
                key={sid}
                item={item}
                sortId={sid}
                onKeyChange={onKeyChange}
                onTitleChange={onTitleChange}
                onDescriptionChange={onDescriptionChange}
                onDisabledChange={onDisabledChange}
                onRemove={onRemove}
              />
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );

  const renderFallbackList = () => (
    <div className={`${selectorPrefix}-list`}>
      {dataSource.map((item, index) => (
        <FallbackRow
          key={getSortId(item) ?? `row-${index}`}
          item={item}
          index={index}
          dataSource={dataSource}
          onChange={emitDataSource}
        />
      ))}
    </div>
  );

  return (
    <div className={selectorPrefix}>
      {showSortableList ? renderSortableList() : renderFallbackList()}

      <div className={`${selectorPrefix}-footer`}>
        <Button type="dashed" block onClick={onAdd}>
          {Intl.get('add')}
        </Button>
      </div>
    </div>
  );
};

export default Static;
