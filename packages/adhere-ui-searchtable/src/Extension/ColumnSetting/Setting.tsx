import { Checkbox } from 'antd';
import { arrayMoveImmutable } from 'array-move';
import PropTypes from 'prop-types';
import React, { createContext, useContext, useMemo } from 'react';
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';

import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../SearchTable';

type Column = { key: string; title: React.ReactNode; display: boolean };

const SortableItemContext = createContext<{
  attributes: Record<string, any>;
  listeners: Record<string, any>;
  setActivatorNodeRef: (el: HTMLElement | null) => void;
}>({ attributes: {}, listeners: {}, setActivatorNodeRef: () => {} });

const DragHandle: React.FC = () => {
  const { attributes, listeners, setActivatorNodeRef } = useContext(SortableItemContext);
  return (
    <img
      ref={setActivatorNodeRef as any}
      {...attributes}
      {...listeners}
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1pYyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik0xMSAxOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJzLjktMiAyLTJzMiAuOSAyIDJ6bS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6bTYgNGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTJzLTIgLjktMiAycy45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6Ij48L3BhdGg+PC9zdmc+DQo="
      alt=""
      style={{ cursor: 'grab' }}
    />
  );
};

const SortableItem: React.FC<{ column: Column; onDisplayColumn: (c: Column, checked: boolean) => void }> = ({
  column,
  onDisplayColumn,
}) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } =
    useSortable({ id: column.key });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <SortableItemContext.Provider value={{ attributes: attributes ?? {}, listeners: listeners ?? {}, setActivatorNodeRef }}>
      <li ref={setNodeRef} style={style}>
        <DragHandle />
        <Checkbox
          checked={column.display}
          onChange={(e) => {
            onDisplayColumn(column, (e as any).target.checked);
          }}
        >
          {column.title}
        </Checkbox>
      </li>
    </SortableItemContext.Provider>
  );
};

const SortableContainer: React.FC<{
  children?: React.ReactNode;
  onSortEnd?: ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => void;
}> = ({ children, onSortEnd }) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const items = useMemo(() => {
    const childArr = React.Children.toArray(children) as any[];
    return childArr.map((c) => c?.props?.column?.key).filter((k) => k != null);
  }, [children]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={({ active, over }) => {
        if (!active || !over || active.id === over.id) return;
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
          onSortEnd?.({ oldIndex, newIndex });
        }
      }}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul>{children}</ul>
      </SortableContext>
    </DndContext>
  );
};

/**
 * ColumnSetting
 * @param props
 * @constructor
 */
function ColumnSetting({ columns, onShowColumns, onReset, onDisplayColumn, onSortEnd }) {
  return (
    <div className={`${selectorPrefix}-column-setting`}>
      <div className={`${selectorPrefix}-column-setting-header`}>
        <div>
          <Checkbox
            checked={columns.every((column) => column.display)}
            onChange={(e) => {
              onShowColumns(e.target.checked);
            }}
          >
            {Intl.get('column_display')}
          </Checkbox>
        </div>

        <div>
          <a onClick={onReset}>{Intl.get('reset')}</a>
        </div>
      </div>

      <div className={`${selectorPrefix}-column-setting-body`}>
        <SortableContainer
          onSortEnd={({ oldIndex, newIndex }) => {
            const changeColumns = arrayMoveImmutable([...columns], oldIndex, newIndex);

            const map = new Map<string, number>();

            changeColumns.forEach((column, index) => {
              map.set(column.key, index);
            });

            onSortEnd(map);
          }}
        >
          {columns.map((column) => (
            <SortableItem
              key={column.key}
              column={column}
              onDisplayColumn={onDisplayColumn}
            />
          ))}
        </SortableContainer>
      </div>
    </div>
  );
}

ColumnSetting.defaultProps = {
  columns: [],
};

ColumnSetting.propTypes = {
  columns: PropTypes.array,
  onShowColumns: PropTypes.func,
  onReset: PropTypes.func,
  onDisplayColumn: PropTypes.func,
  onSortEnd: PropTypes.func,
};

export default ColumnSetting;
