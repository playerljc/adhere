import classNames from 'classnames';
import React, { forwardRef, memo, useImperativeHandle, useMemo, useReducer, useState } from 'react';
import type { CSSProperties, PropsWithoutRef, RefAttributes } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';
import Util from '@baifendian/adhere-util';
import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
  PointerSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import { define as flowLayoutDefine } from '../Fields/layout/FlowLayout';
import { TYPE } from '../Fields/layout/FlowLayout/constant';
import { REDUCER_ACTION_TYPE, SELECT_PREFIX } from '../constant';
import {
  type ActionsProps,
  DesignComponent,
  DesignHandler,
  DesignItem,
  DesignProps,
  DesignValue,
  DesignValueProps,
  DraggableToolItemProps,
  type FieldProps,
  type FieldType,
  type FormItemProps,
  type StyleProps,
  ToolBoxItem,
} from '../types';
import { isDragEnd } from '../utils';
import { DesignContext } from './Context';
import Editor from './DesignEditor';
import DesignValueReducer from './DesignValueReducer';
import Properties from './Properties';
import Toolbar from './Toolbar';
import Toolbox from './Toolbox';
import ToolboxItemDragOverlay from './Toolbox/ToolboxItemDragOverlay';

// import { isLayoutItem } from '../utils';
const { usePropToState } = Hooks;

/**
 * InternalFormDesign
 * @description
 */
const InternalFormDesign = memo<PropsWithoutRef<DesignProps> & RefAttributes<DesignHandler>>(
  forwardRef<DesignHandler, DesignProps>(
    (
      {
        className,
        style,
        toolbarClassName,
        toolbarStyle,
        toolboxClassName,
        toolboxStyle,
        propertiesClassName,
        propertiesStyle,
        editorClassName,
        editorStyle,
        toolBox,
        value,
        terminal,
        items,
      },
      ref,
    ) => {
      const [
        // 设计的值
        designValue,
        // 设计值的修改器
        dispatch,
      ] = useReducer(DesignValueReducer, value, (designValue) => {
        // 对designValue进行处理，处理什么呢？
        // 如果designValue是null，那么需要创建一个默认的布局(布局需要这个包提供一个TableGridLayout布局)，否则直接返回即可
        if (!designValue) {
          return {
            id: Util.uuid(),
            type: TYPE,
            props: {
              fieldProps: {
                // layout: 'vertical',
                // bordered: false,
                // density: 'default',
                // mode: 'normal',
                // columnCount: 2,
                // data: [
                //   {
                //     name: 'g1',
                //     width: '100%',
                //     columnCount: terminal === 'desktop' ? 2 : 1,
                //     colgroup: terminal === 'desktop' ? ['auto', 'auto'] : ['auto'],
                //     data: [],
                //   },
                // ],
              },
              children: [],
            },
          };
        }

        return designValue;
      });

      // 当前的终端
      const [currentTerminal, setCurrentTerminal] = usePropToState(terminal);

      // Editor中激活的item id
      const [activeFieldId, setActiveFieldId] = useState<string>();

      // Editor中激活的field的designValue
      const activeDesignFieldValue = useMemo(() => {
        if (!activeFieldId) return null;

        function find(_designValue: DesignValue, _activeFieldId: string): DesignValue | null {
          if (_designValue.id === _activeFieldId) return _designValue;

          if (_designValue.props.children) {
            for (const item of _designValue.props.children) {
              const result = find(item, _activeFieldId);
              if (result) return result;
            }
          }

          return null;
        }

        // 下面是一个递归查询的过程
        return find(designValue as DesignValue, activeFieldId);
      }, [activeFieldId, designValue]);

      // 当前正在拖拽的组件 ID
      const [activeToolItemData, setActiveToolItemData] = useState<
        DraggableToolItemProps['data'] | null
      >(null);

      // 拖拽时覆盖层的鼠标样式
      const [overlayCursor, setOverlayCursor] = useState<CSSProperties['cursor']>('not-allowed');

      // 拖拽的传感器
      const sensors = useSensors(
        useSensor(PointerSensor, {
          activationConstraint: { distance: 5 },
        }),
      );

      /**
       * handleDragStart
       * @description 拖拽开始时，记录活动的 item ID
       * @param {DragStartEvent} event a
       */
      function handleDragStart(event: DragStartEvent) {
        setActiveToolItemData(event.active.data.current as DraggableToolItemProps['data']);
        setOverlayCursor('not-allowed');
      }

      /**
       * handleDragOver
       * @description 拖拽过程中
       * @param {DragOverEvent} event
       */
      function handleDragOver(event: DragOverEvent) {
        const { active, over } = event;
        if (!over) {
          setOverlayCursor('not-allowed');
          return;
        }

        setOverlayCursor('default');
      }

      /**
       * handleDragEnd
       * @description 拖拽结束时，处理 item 的移动逻辑
       * @param {DragEndEvent} event
       */
      function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        setActiveToolItemData(null);

        console.log('active', active);
        console.log('over', over);

        if (!over) return;

        if (
          !isDragEnd({
            activeType: active?.data?.current?.type as string,
            overType: over?.data?.current?.type,
          })
        ) {
          return;
        }

        console.log('ok');

        // 拖拽结束，结束后应该在editor中多一个控件的实例
        // active是拖拽对象 一般是toolbox中的item
        // over是放置对象 一般是TableGridLayout的布局对象

        // 拖动的toolBox
        const activeItem = active.data.current as ToolBoxItem;
        // 放置的容器对象(一般是TableGridLayout)
        const overItem = over.data.current as DesignValue;

        const sourceItem = getItemByType(activeItem.type);
        const targetItem = getItemByType(overItem.type);

        const filedId = Util.uuid();

        const props = targetItem?.layoutReducerToAdd?.(designValue as DesignValue, {
          sourceDesignValue: {
            id: filedId,
            type: activeItem.type,
            props: sourceItem?.defaultValue as DesignValueProps,
          },
          targetId: overItem.id,
        }) as DesignValue[];

        // 追加布局的data数据
        dispatch({
          type: REDUCER_ACTION_TYPE.updateChildrenProps,
          payload: {
            id: overItem.id,
            props,
          },
        });

        setActiveFieldId(filedId);
      }

      function getItemByType(type: FieldType) {
        return getItems().find((item) => item.type === type);
      }

      function getDesignValue() {
        return designValue;
      }

      function getTerminal() {
        return currentTerminal;
      }

      function getActiveFieldId() {
        return activeFieldId;
      }

      function getActiveDesignFieldValue() {
        return activeDesignFieldValue;
      }

      function getItems(): DesignItem[] {
        return [flowLayoutDefine(), ...(items ?? [])];
      }

      function getOverlayCursor() {
        return overlayCursor;
      }

      function getActiveToolItemData() {
        return activeToolItemData;
      }

      function setFormItemProps(id: string, props: FormItemProps) {
        dispatch({
          type: REDUCER_ACTION_TYPE.updateFormItemProps,
          payload: {
            id,
            props,
          },
        });
      }

      function setActionsProps(id: string, props: ActionsProps) {
        dispatch({
          type: REDUCER_ACTION_TYPE.updateActionsProps,
          payload: {
            id,
            props,
          },
        });
      }

      function setFieldProps(id: string, props: FieldProps) {
        dispatch({
          type: REDUCER_ACTION_TYPE.updateFieldProps,
          payload: {
            id,
            props,
          },
        });
      }

      function setStyleProps(id: string, props: StyleProps) {
        dispatch({
          type: REDUCER_ACTION_TYPE.updateStyleProps,
          payload: {
            id,
            props,
          },
        });
      }

      // 提供对外的方法
      useImperativeHandle(ref, () => ({} as DesignHandler));

      return (
        <DndContext
          autoScroll
          sensors={sensors}
          collisionDetection={pointerWithin}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <DesignContext
            value={{
              // getter
              getDesignValue,
              getTerminal,
              getActiveFieldId,
              getActiveDesignFieldValue,
              getItems,
              getOverlayCursor,
              getActiveToolItemData,
              // setter
              setCurrentTerminal,
              setActiveFieldId,
              setFormItemProps,
              setFieldProps,
              setStyleProps,
              setActionsProps,
            }}
          >
            <div className={classNames(`${SELECT_PREFIX}-design-wrapper`, className)} style={style}>
              <div
                className={classNames(`${SELECT_PREFIX}-design-toolbar-wrapper`, toolbarClassName)}
                style={toolbarStyle}
              >
                <Toolbar />
              </div>

              <div className={classNames(`${SELECT_PREFIX}-design-body-wrapper`)}>
                <div
                  className={classNames(
                    `${SELECT_PREFIX}-design-toolbox-wrapper`,
                    toolboxClassName,
                  )}
                  style={toolboxStyle}
                >
                  <Toolbox toolBox={toolBox} />
                </div>

                <div
                  className={classNames(`${SELECT_PREFIX}-design-editor-wrapper`, editorClassName)}
                  style={editorStyle}
                >
                  <Editor />
                </div>

                <div
                  className={classNames(
                    `${SELECT_PREFIX}-design-properties-wrapper`,
                    propertiesClassName,
                  )}
                  style={propertiesStyle}
                >
                  <Properties key={activeFieldId} />
                </div>
              </div>
            </div>

            {activeToolItemData && <ToolboxItemDragOverlay />}
          </DesignContext>
        </DndContext>
      );
    },
  ),
);

const FormDesign = InternalFormDesign as DesignComponent;

FormDesign.displayName = 'FormDesign';

export default FormDesign;
