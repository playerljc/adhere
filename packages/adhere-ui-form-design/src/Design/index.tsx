import classNames from 'classnames';
import React, {
  forwardRef,
  memo,
  useImperativeHandle,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import type { CSSProperties, PropsWithoutRef, RefAttributes } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';
import Util from '@baifendian/adhere-util';
import { createLoggerMiddleware } from '@ctsj/state/lib/middleware';
import { Provider } from '@ctsj/state/lib/react';
import { applyMiddleware, createStore } from '@ctsj/state/lib/state';
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

import { define as flexLayoutDefine } from '../Fields/layout/FlexLayout';
import { REDUCER_ACTION_TYPE, SELECT_PREFIX } from '../constant';
import {
  ActionsProps,
  type DataSourceConfig,
  DesignComponent,
  DesignHandler,
  DesignItem,
  DesignProps,
  DesignValue,
  DesignValueProps,
  DraggableToolItemProps,
  type FieldProps,
  type FieldType,
  type FlexProps,
  type FormItemProps,
  type MobileViewportPresetId,
  type StyleProps,
  ToolBoxItem,
} from '../types';
import {
  MOBILE_VIEWPORT_DEFAULT_PRESET_ID,
  computeFieldPropsOverlayPatch,
  createDefaultRootDesignValue,
  findDesignValueById,
} from '../utils';
import sage from '../utils/saga';
import { DesignContext } from './Context';
import Editor from './DesignEditor';
import DesignValueReducer from './DesignValueReducer';
import Properties from './Properties';
import Toolbar from './Toolbar';
import { defaultMenuItems } from './Toolbar/menuActions';
import { defaultGroups } from './Toolbar/toolbarActions';
import Toolbox from './Toolbox';
import ToolboxItemDragOverlay from './Toolbox/ToolboxItemDragOverlay';

const { usePropToState } = Hooks;

const store = createStore(null, {}, applyMiddleware(createLoggerMiddleware(), sage));

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
        renderToolBar,
        toolbarEllipseCount,
        renderMenuBar,
        menuBarEllipseCount,
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
          return createDefaultRootDesignValue();
        }

        return designValue;
      });

      // 当前的终端
      const [currentTerminal, setCurrentTerminal] = usePropToState(terminal);

      const [mobileViewportPresetId, setMobileViewportPresetId] = useState<MobileViewportPresetId>(
        MOBILE_VIEWPORT_DEFAULT_PRESET_ID,
      );

      // 全屏绑定的设计器根节点
      const fullscreenRootRef = useRef<HTMLDivElement>(null);

      // Editor中激活的item id
      const [activeFieldId, setActiveFieldId] = useState<string>();

      // Editor中激活的field的designValue
      const activeDesignFieldValue = useMemo(() => {
        if (!activeFieldId) return null;

        function find(_designValue: DesignValue, _activeFieldId: string): DesignValue | null {
          if (_designValue.id === _activeFieldId) return _designValue;

          if (_designValue.props.children) {
            for (const item of _designValue.props.children) {
              if (Array.isArray(item)) {
                for (const child of item) {
                  const result = find(child, _activeFieldId);
                  if (result) return result;
                }
              } else {
                const result = find(item, _activeFieldId);
                if (result) return result;
              }
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

        // 放置的容器对象(一般是TableGridLayout)
        const overItem = over.data.current as DesignValue;
        const targetItem = getItemByType(overItem.type);

        // 不能放置则返回
        if (
          // !isDragEnd({
          //   overId: over.id as string,
          //   activeType: active?.data?.current?.type as string,
          //   overType: over?.data?.current?.type,
          // })
          targetItem &&
          !targetItem?.isDrop?.(active?.data?.current?.type)
        ) {
          return;
        }

        console.log('ok');

        // 拖拽结束，结束后应该在editor中多一个控件的实例
        // active是拖拽对象 一般是toolbox中的item
        // over是放置对象 一般是TableGridLayout的布局对象

        // 拖动的toolBox
        const activeItem = active.data.current as ToolBoxItem;

        const sourceItem = getItemByType(activeItem.type);

        const filedId = Util.uuid();

        const newFieldProps =
          sourceItem?.createDefaultValue?.() ?? (sourceItem?.defaultValue as DesignValueProps);

        const props = targetItem?.layoutReducerToAdd?.(designValue as DesignValue, {
          sourceDesignValue: {
            id: filedId,
            type: activeItem.type,
            props: newFieldProps,
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

      function getMobileViewportPresetId() {
        return mobileViewportPresetId;
      }

      function setMobileViewportPresetIdState(presetId: MobileViewportPresetId) {
        setMobileViewportPresetId(presetId);
      }

      function getActiveFieldId() {
        return activeFieldId;
      }

      function getActiveDesignFieldValue() {
        return activeDesignFieldValue;
      }

      function getItems(): DesignItem[] {
        return [flexLayoutDefine(), ...(items ?? [])];
      }

      function getOverlayCursor() {
        return overlayCursor;
      }

      function getActiveToolItemData() {
        return activeToolItemData;
      }

      function getToolBox() {
        return toolBox;
      }

      function getRenderToolBar() {
        return renderToolBar;
      }

      function getRenderMenuBar() {
        return renderMenuBar;
      }

      function getToolbarEllipseCount() {
        return toolbarEllipseCount;
      }

      function getMenuBarEllipseCount() {
        return menuBarEllipseCount;
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

      function setFlexProps(id: string, props: FlexProps) {
        dispatch({
          type: REDUCER_ACTION_TYPE.updateFlexProps,
          payload: {
            id,
            props,
          },
        });
      }

      function setFieldProps(id: string, props: FieldProps) {
        if (currentTerminal === 'mobile') {
          const root = designValue as DesignValue | undefined;
          if (!root) return;
          const raw = findDesignValueById(id, root);
          if (!raw) return;
          const patch = computeFieldPropsOverlayPatch(raw.props.fieldProps, props);
          dispatch({
            type: REDUCER_ACTION_TYPE.updateFieldPropsByTerminal,
            payload: {
              id,
              terminal: 'mobile',
              props: patch,
            },
          });
          return;
        }

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

      function deleteFieldByChildren(id: string) {
        dispatch({
          type: REDUCER_ACTION_TYPE.deleteChildrenById,
          payload: {
            id,
          },
        });
      }

      function addChildrenById(id: string, child: DesignValue) {
        dispatch({
          type: REDUCER_ACTION_TYPE.addChildrenById,
          payload: {
            id,
            child,
          },
        });
      }

      function updateChildrenById(id: string, children: DesignValueProps['children']) {
        dispatch({
          type: REDUCER_ACTION_TYPE.updateChildrenProps,
          payload: {
            id,
            props: children,
          },
        });
      }

      function swapOutlineNodes(idA: string, idB: string) {
        dispatch({
          type: REDUCER_ACTION_TYPE.swapNodes,
          payload: {
            idA,
            idB,
          },
        });
      }

      function setDataSourceConfig(id: string, dataSourceConfig: DataSourceConfig) {
        dispatch({
          type: REDUCER_ACTION_TYPE.updateDataSourceConfig,
          payload: {
            id,
            dataSourceConfig,
          },
        });
      }

      function resetDesignValue() {
        dispatch({
          type: REDUCER_ACTION_TYPE.replaceDesignValue,
          payload: {
            designValue: createDefaultRootDesignValue(),
          },
        });
        setActiveFieldId(undefined);
      }

      // 提供对外的方法
      useImperativeHandle(ref, () => ({
        resetDesignValue,
      }));

      return (
        <Provider store={store}>
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
                fullscreenRootRef,
                // getter
                getDesignValue,
                getTerminal,
                getMobileViewportPresetId,
                setMobileViewportPresetId: setMobileViewportPresetIdState,
                getActiveFieldId,
                getActiveDesignFieldValue,
                getItems,
                getOverlayCursor,
                getActiveToolItemData,
                getToolBox,
                getRenderToolBar,
                getRenderMenuBar,
                getToolbarEllipseCount,
                getMenuBarEllipseCount,
                // setter
                setCurrentTerminal,
                setActiveFieldId,
                setFormItemProps,
                setFieldProps,
                setStyleProps,
                setActionsProps,
                setFlexProps,
                setDataSourceConfig,
                // add
                addChildrenById,
                // delete
                deleteFieldByChildren,
                // update
                updateChildrenById,
                swapOutlineNodes,
                resetDesignValue,
              }}
            >
              <div
                ref={fullscreenRootRef}
                className={classNames(`${SELECT_PREFIX}-design-wrapper`, className)}
                style={style}
              >
                <div
                  className={classNames(
                    `${SELECT_PREFIX}-design-menubar-wrapper`,
                    toolbarClassName,
                  )}
                  style={toolbarStyle}
                >
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
                    className={classNames(
                      `${SELECT_PREFIX}-design-editor-wrapper`,
                      editorClassName,
                    )}
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
        </Provider>
      );
    },
  ),
);

const FormDesign = InternalFormDesign as DesignComponent;

FormDesign.displayName = 'FormDesign';

export default FormDesign;
