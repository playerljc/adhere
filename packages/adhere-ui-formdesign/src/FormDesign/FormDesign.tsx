import { Tabs } from 'antd';
import classNames from 'classnames';
import React, { memo } from 'react';
import type { FC } from 'react';

import DesignAreaView from './DesignAreaView';
import FooterBar from './FooterBar';
import type { FormDesignProps } from './FormDesignTypes';
import FormPropertysView from './FormPropertysView';
import OutlineView from './OutlineView';
import ToolBar from './ToolBar';
import WidgetPropertysView from './WidgetPropertysView';
import WidgetToolBoxView from './WidgetToolBoxView';

const selectorPrefix = 'adhere-ui-form-design';

/**
 * FormDesign
 * @description 表单设计器组件
 * @constructor
 */
const FormDesign: FC<FormDesignProps> = ({ className, style }) => {
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

  return (
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
          <DesignAreaView />
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
  );
};

const FormDesignWrap = memo(FormDesign);

export default FormDesignWrap;
