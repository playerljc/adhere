import React, { useState } from 'react';

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  defaultDropAnimationSideEffects,
  pointerWithin,
  rectIntersection,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

// import { CSS } from '@dnd-kit/utilities';

const itemMap = {
  'item-1': { id: 'item-1', name: '数据模型 A', color: '#1677ff' },
  'item-2': { id: 'item-2', name: '数据模型 B', color: '#52c41a' },
  'item-3': { id: 'item-3', name: '数据模型 C', color: '#fa8c16' },
};

// --- A. Item Component: 渲染列表中的静态物体 ---
const Item = ({ id, name, color, style }) => (
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

// --- B. Draggable Component: 拖拽源头 ---
const DraggableItem = ({ id, name, color, disabled }) => {
  const { attributes, listeners, setNodeRef /* isDragging */ } = useDraggable({
    id: id,
    data: { name, color },
    disabled,
  });

  const style = {
    // opacity: isDragging ? 0 : 1,
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

// --- C. Droppable Container Component: 放置目标 ---
const DroppableContainer = ({ id, items, title, backgroundColor }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  const containerStyle = {
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

// --- D. Custom Drag Overlay: 自定义拖拽外观 ---
const CustomDragOverlay = ({ activeId, cursor }) => {
  if (!activeId) return null;

  const item = itemMap[activeId];

  // **关键：自定义拖拽时的显示外观**
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
          // **自定义外观：使用更大的阴影和虚线边框来区分**
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

// --- E. Main App Component ---
const DragAndDropApp = () => {
  // 初始化状态：所有 item 都在 'source' 容器中
  const [containers, setContainers] = useState({
    source: ['item-1', 'item-2', 'item-3'],
    target: [],
  });
  const [activeId, setActiveId] = useState(null);
  const [overlayCursor, setOverlayCursor] = useState('not-allowed');
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
  );

  // 拖拽开始时，记录活动的 item ID
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
    setOverlayCursor('not-allowed');
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) {
      setOverlayCursor('not-allowed');
      return;
    }
    const activeContainerId = Object.keys(containers).find((key) =>
      containers[key].includes(active.id),
    );
    const overContainerId = over.id;
    const canDrop = activeContainerId === 'source' && overContainerId === 'target';
    setOverlayCursor(canDrop ? 'default' : 'not-allowed');
  };

  // 拖拽结束时，处理 item 的移动逻辑
  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeContainerId = Object.keys(containers).find((key) =>
      containers[key].includes(active.id),
    );
    const overContainerId = over.id;

    if (activeContainerId === 'source' && overContainerId === 'target') {
      setContainers((prev) => {
        const newSourceItems = prev.source.filter((id) => id !== active.id);
        const newTargetItems = [...prev.target, active.id];

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
        {/* 左侧：源容器 */}
        <DroppableContainer
          id="source"
          title="可拖拽模型 (Source)"
          items={containers.source}
          backgroundColor="#f0f2f5"
        />

        {/* 右侧：放置目标容器 */}
        <DroppableContainer
          id="target"
          title="画布 / 目标区域 (Target)"
          items={containers.target}
          backgroundColor="#fff0f6"
        />
      </div>

      {/* Drag Overlay: 核心，用于自定义拖拽外观 */}
      <CustomDragOverlay activeId={activeId} cursor={overlayCursor} />
    </DndContext>
  );
};

export default DragAndDropApp;
