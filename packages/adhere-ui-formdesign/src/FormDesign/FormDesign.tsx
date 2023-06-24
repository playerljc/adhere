import { Tabs } from 'antd';
import classNames from 'classnames';
import type { ForwardRefRenderFunction } from 'react';
import React, { forwardRef, memo, useEffect, useImperativeHandle } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { v1 } from 'uuid';

import Hooks from '@baifendian/adhere-ui-hooks';

import type { FormDesignProps, FormDesignRefHandle } from '../types/FormDesignTypes';
import type { DLayoutWidget, DWidget } from '../types/WidgetTypes';
import { GroupType, Type } from '../types/WidgetTypes';
import DesignAreaView from './DesignAreaView';
import FooterBar from './FooterBar';
import { FormDesignProvider } from './FormDesignProvider';
import FormPropertysView from './FormPropertysView';
import OutlineView from './OutlineView';
import ToolBar from './ToolBar';
import WidgetPropertysView from './WidgetPropertysView';
import WidgetToolBoxView from './WidgetToolBoxView';

export const selectorPrefix = 'adhere-ui-form-design';

const { useSetState } = Hooks;

/**
 * FormDesign
 * @description 表单设计器组件
 * @constructor
 */
const FormDesign: ForwardRefRenderFunction<FormDesignRefHandle, FormDesignProps> = (
  { className, style, dataSource },
  ref,
) => {
  const [currentWidgetActiveKey, setCurrentWidgetActiveKey] = useSetState('');
  const [targetDataSource, setTargetDataSource] = useSetState<Array<DWidget | DLayoutWidget>>([]);

  useEffect(() => {
    if (!dataSource || !Array.isArray(targetDataSource) || targetDataSource.length === 0) {
      setTargetDataSource([
        {
          id: v1(),
          groupType: GroupType.LAYOUT,
          type: Type.FLOW_LAYOUT,
          propertys: [],
          widgets: [
            {
              id: v1(),
              groupType: GroupType.BASE,
              type: Type.INPUT,
              propertys: [],
            },
          ],
        },
      ]);
    } else {
      setTargetDataSource(dataSource);
    }
  }, [dataSource]);

  useImperativeHandle(ref, () => ({
    getDataSource: () => [...targetDataSource],
  }));

  const wqViewItems = [
    {
      key: 'WidgetToolBoxView',
      label: 'WidgetToolBoxView',
      children: <WidgetToolBoxView />,
    },
    {
      key: 'OutlineView',
      label: 'OutlineView',
      children: <OutlineView />,
    },
  ];

  const wfViewItems = [
    {
      key: 'WidgetPropertysView',
      label: 'WidgetPropertysView',
      children: <WidgetPropertysView />,
    },
    {
      key: 'FormPropertysView',
      label: 'FormPropertysView',
      children: <FormPropertysView />,
    },
  ];

  /**
   * setDataSource
   * @description 拖拽完成，一般都是LayoutWidget触发
   * @param {(dataSource: Array<DWidget | DLayoutWidget>) => Array<DWidget | DLayoutWidget>} reduce
   * @return {void}
   */
  const setDataSource = (reduce) =>
    new Promise((resolve) => {
      setTargetDataSource(
        (_dataSource) => [...reduce(_dataSource)],
        () => resolve(null),
      );
    });

  /**
   * setWidgetActiveKey
   * @description 设置激活的widget
   * @param {string} id
   */
  const setWidgetActiveKey = (id) =>
    new Promise((resolve) => setCurrentWidgetActiveKey(id, () => resolve(null)));

  /**
   * getWidgetActiveKey
   * @description
   * @return {string}
   */
  const getWidgetActiveKey = () => currentWidgetActiveKey;

  return (
    <DndProvider backend={HTML5Backend}>
      <FormDesignProvider
        value={{
          setDataSource,
          setWidgetActiveKey,
          getWidgetActiveKey,
        }}
      >
        <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
          {/*ToolBar*/}
          <div className={classNames(`${selectorPrefix}-tool-bar`, `${selectorPrefix}-fixed`)}>
            <ToolBar />
          </div>

          <div className={classNames(`${selectorPrefix}-main`, `${selectorPrefix}-vertical-auto`)}>
            {/*WidgetToolBoxView,OutlineView*/}
            <div className={classNames(`${selectorPrefix}-wq-view`, `${selectorPrefix}-fixed`)}>
              <Tabs defaultActiveKey={wqViewItems[0].key} items={wqViewItems} />
            </div>

            {/*DesignAreaView*/}
            <div
              className={classNames(
                `${selectorPrefix}-design-area`,
                `${selectorPrefix}-horizontal-auto`,
              )}
            >
              <DesignAreaView dataSource={targetDataSource} />
            </div>

            {/*WidgetPropertysView,FormPropertysView*/}
            <div className={classNames(`${selectorPrefix}-wf-view`, `${selectorPrefix}-fixed`)}>
              <Tabs defaultActiveKey={wfViewItems[0].key} items={wfViewItems} />
            </div>
          </div>

          {/*FooterBar*/}
          <div className={classNames(`${selectorPrefix}-footer-bar`, `${selectorPrefix}-fixed`)}>
            <FooterBar />
          </div>
        </div>
      </FormDesignProvider>
    </DndProvider>
  );
};

const FormDesignWrap = memo(forwardRef<FormDesignRefHandle, FormDesignProps>(FormDesign));

export default FormDesignWrap;
