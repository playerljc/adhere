import classNames from 'classnames';
import React, { type FC, useContext, useLayoutEffect, useMemo, useRef } from 'react';

import { DeleteOutlined, HolderOutlined } from '@ant-design/icons';
import { Button, Input } from '@baifendian/adhere-ui-anthoc';
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

import { SELECT_PREFIX, SELECT_VALUE_KEY_NAME } from '../../../constant';
import type { I18nValue } from '../../../types';
import I18nChangeFormItem from '../../I18nChangeFormItem';
import { type DataSourceItem, type DataSourceManagerFormItemProps } from '../index';

export type StaticProps = DataSourceManagerFormItemProps;

const selectorPrefix = `${SELECT_PREFIX}-design-field-data-source-form-item-static`;

type SortableRowProps = {
  item: DataSourceItem;
  sortId: string;
  onLabelChange: (sortId: string, label: I18nValue) => void;
  onValueChange: (sortId: string, value: string) => void;
  onRemove: (sortId: string) => void;
};

type RowContentProps = {
  item: DataSourceItem;
  onLabelChange: (label: I18nValue) => void;
  onValueChange: (value: string) => void;
  onRemove: () => void;
  handleNode: React.ReactNode;
};

function genSortId(): string {
  return `fd-sort-${Math.random().toString(36).slice(2, 11)}`;
}

const SORT_ID_KEY = '__fdSortId';

/** 避免 value.dataSource 为 undefined 时每次 render 使用新 [] 引用触发 layout effect */
const EMPTY_DATASOURCE: DataSourceItem[] = [];

function getSortId(item: DataSourceItem): string | undefined {
  return (item as Record<string, unknown>)[SORT_ID_KEY] as string | undefined;
}

function normalizeValue(item: DataSourceItem, raw: string): string | number {
  const prevVal = item.value;
  if (typeof prevVal === 'number' && raw !== '' && !Number.isNaN(Number(raw))) {
    return Number(raw);
  }

  return raw;
}

function toI18nLabel(
  label: DataSourceItem['label'],
  lang: string,
  localesKeys: string[],
): I18nValue {
  if (label && typeof label === 'object' && SELECT_VALUE_KEY_NAME in label) {
    return label as I18nValue;
  }

  const next: Record<string, string | null | undefined> = { [SELECT_VALUE_KEY_NAME]: lang };
  localesKeys.forEach((key) => {
    next[key] = key === lang ? (typeof label === 'string' ? label : '') : null;
  });
  return next as I18nValue;
}

const RowContent: FC<RowContentProps> = ({
  item,
  onLabelChange,
  onValueChange,
  onRemove,
  handleNode,
}) => {
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl.lang!;
  const localesKeys = Object.keys(intl.locales);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const labelValue = toI18nLabel(item.label, lang, localesKeys);

  return (
    <>
      <div>
        <div ref={triggerRef}></div>

        <I18nChangeFormItem
          getTriggerContainer={() => triggerRef.current}
          value={labelValue}
          onChange={(next) => onLabelChange(next)}
        >
          {({ onChange, value }) => (
            <Input
              className={`${selectorPrefix}-input`}
              value={value ?? ''}
              placeholder={Intl.get('label')}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              showCount={false}
            />
          )}
        </I18nChangeFormItem>
      </div>

      <div className={`${selectorPrefix}-row-combination`}>
        <Input
          className={`${selectorPrefix}-input`}
          value={item.value === undefined || item.value === null ? '' : String(item.value)}
          placeholder={Intl.get('return_value')}
          onChange={(e) => onValueChange(e.target.value)}
          showCount={false}
        />

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
  onLabelChange,
  onValueChange,
  onRemove,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: sortId,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
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
        onLabelChange={(label) => onLabelChange(sortId, label)}
        onValueChange={(raw) => onValueChange(sortId, raw)}
        onRemove={() => onRemove(sortId)}
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
  );
};

const Static: FC<StaticProps> = ({ value, onChange }) => {
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

  const emitDataSource = (next: DataSourceItem[]) => {
    onChange?.({
      ...(value ?? { type: 'static' }),
      type: 'static',
      dataSource: next,
    });
  };

  const onLabelChange = (sortId: string, label: I18nValue) => {
    const next = dataSource.map((item) => (getSortId(item) === sortId ? { ...item, label } : item));
    emitDataSource(next);
  };

  const onValueChange = (sortId: string, raw: string) => {
    const next = dataSource.map((item) => {
      if (getSortId(item) !== sortId) return item;
      return { ...item, value: normalizeValue(item, raw) };
    });
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
    const nextItem: DataSourceItem = {
      label: '',
      value: '',
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
                onLabelChange={onLabelChange}
                onValueChange={onValueChange}
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
        <div key={getSortId(item) ?? `row-${index}`} className={`${selectorPrefix}-row`}>
          <RowContent
            item={item}
            onLabelChange={(label) => {
              const next = [...dataSource];
              next[index] = { ...item, label };
              emitDataSource(next);
            }}
            onValueChange={(raw) => {
              const next = [...dataSource];
              next[index] = { ...item, value: normalizeValue(item, raw) };
              emitDataSource(next);
            }}
            onRemove={() => {
              const next = dataSource.filter((_, i) => i !== index);
              emitDataSource(next);
            }}
            handleNode={
              <span className={`${selectorPrefix}-handle ${selectorPrefix}-handle-disabled`}>
                <HolderOutlined />
              </span>
            }
          />
        </div>
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
