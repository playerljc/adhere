// @ts-ignore
import React, { useState } from 'react';

import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  defaultDropAnimationSideEffects,
  pointerWithin,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

type ItemProps = {
  id: string;
  name: string;
  color: string;
  style?: React.CSSProperties;
};

type DraggableItemProps = {
  id: string;
  name: string;
  color: string;
  disabled?: boolean;
};

type DroppableContainerProps = {
  id: string;
  items: string[];
  title: string;
  backgroundColor: string;
};

type OverlayProps = {
  activeId: string | null;
  cursor: React.CSSProperties['cursor'];
};

const itemMap: Record<string, { id: string; name: string; color: string }> = {
  'item-1': { id: 'item-1', name: '数据模型 A', color: '#1677ff' },
  'item-2': { id: 'item-2', name: '数据模型 B', color: '#52c41a' },
  'item-3': { id: 'item-3', name: '数据模型 C', color: '#fa8c16' },
};

const Item: React.FC<ItemProps> = ({ id, name, color, style }) => (
  <div
    style={{
      padding: '10px 15px',
      margin: '8px 0',
      backgroundColor: color,
      color: 'white',
      borderRadius: '6px',
      cursor: 'grab',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      ...style,
    }}
  >
    {name} ({id})
  </div>
);

const DraggableItem: React.FC<DraggableItemProps> = ({ id, name, color, disabled }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data: { name, color },
    disabled,
  });

  const style: React.CSSProperties = {
    border: `${isDragging ? '1' : '0'}px solid #ccc`,
    transition: 'box-shadow 0.2s, opacity 0.2s',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Item
        id={id}
        name={name}
        color={color}
        style={{ cursor: disabled ? 'not-allowed' : 'grab' }}
      />
    </div>
  );
};

const DroppableContainer: React.FC<DroppableContainerProps> = ({
  id,
  items,
  title,
  backgroundColor,
}) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  const containerStyle: React.CSSProperties = {
    flex: 1,
    minHeight: '400px',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    border: isOver ? '3px dashed #1677ff' : '2px solid #e0e0e0',
    backgroundColor: isOver ? '#e6f7ff' : backgroundColor,
    transition: 'all 0.2s',
  };

  return (
    <div ref={setNodeRef} style={containerStyle}>
      <h3>
        {title} ({id})
      </h3>
      <div style={{ minHeight: '30px' }}>
        {items.map((itemId) => {
          const item = itemMap[itemId];
          return (
            <DraggableItem
              key={itemId}
              id={itemId}
              name={item.name}
              color={item.color}
              disabled={id === 'target'}
            />
          );
        })}
      </div>
    </div>
  );
};

const CustomDragOverlay: React.FC<OverlayProps> = ({ activeId, cursor }) => {
  if (!activeId) return null;
  const item = itemMap[activeId];

  return (
    <DragOverlay
      dropAnimation={{
        duration: 300,
        easing: 'cubic-bezier(.2,.8,.2,1)',
        sideEffects: defaultDropAnimationSideEffects({
          styles: {
            active: {
              opacity: '0.6',
            },
          },
        }),
      }}
    >
      <div
        style={{
          width: '200px',
          padding: '15px 20px',
          backgroundColor: item.color,
          color: 'white',
          borderRadius: '10px',
          opacity: 0.9,
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.4)',
          border: '2px dashed white',
          fontSize: '1.2em',
          cursor,
        }}
      >
        正在拖拽: {item.name}
      </div>
    </DragOverlay>
  );
};

const DragAndDropApp: React.FC = () => {
  const [containers, setContainers] = useState<{ source: string[]; target: string[] }>({
    source: ['item-1', 'item-2', 'item-3'],
    target: [],
  });
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overlayCursor, setOverlayCursor] = useState<React.CSSProperties['cursor']>('not-allowed');
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    setOverlayCursor('not-allowed');
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) {
      setOverlayCursor('not-allowed');
      return;
    }
    const activeContainerId = (Object.keys(containers) as Array<keyof typeof containers>).find(
      (key) => containers[key].includes(active.id as string),
    );
    const overContainerId = over.id as string;
    const canDrop = activeContainerId === 'source' && overContainerId === 'target';
    setOverlayCursor(canDrop ? 'default' : 'not-allowed');
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeContainerId = (Object.keys(containers) as Array<keyof typeof containers>).find(
      (key) => containers[key].includes(active.id as string),
    );
    const overContainerId = over.id as string;

    if (activeContainerId === 'source' && overContainerId === 'target') {
      setContainers((prev) => {
        const newSourceItems = prev.source.filter((id) => id !== (active.id as string));
        const newTargetItems = [...prev.target, active.id as string];

        return {
          ...prev,
          source: newSourceItems,
          target: newTargetItems,
        };
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      collisionDetection={pointerWithin}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '20px',
        }}
      >
        <DroppableContainer
          id="source"
          title="可拖拽模型 (Source)"
          items={containers.source}
          backgroundColor="#f0f2f5"
        />

        <DroppableContainer
          id="target"
          title="画布 / 目标区域 (Target)"
          items={containers.target}
          backgroundColor="#fff0f6"
        />
      </div>

      <CustomDragOverlay activeId={activeId} cursor={overlayCursor} />
    </DndContext>
  );
};

export default DragAndDropApp;
