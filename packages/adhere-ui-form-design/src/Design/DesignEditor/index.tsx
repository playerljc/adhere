import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC, ReactNode } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';

import { parseDesign } from '../../Fields';
import { SELECT_PREFIX } from '../../constant';
import type { DesignEditorProps, DesignValue } from '../../types';
import { DesignContext } from '../Context';
import Toolbar from '../Toolbar';
import { defaultMenuItems } from '../Toolbar/menuActions';
import { defaultGroups } from '../Toolbar/toolbarActions';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

/**
 * DesignEditor
 */
const DesignEditor: FC<DesignEditorProps> = () => {
  const [form] = Form.useForm();

  const allValues = Form.useWatch([], form);

  const context = useContext(DesignContext);

  const {
    getDesignValue,
    getRenderToolBar,
    getRenderMenuBar,
    getToolbarEllipseCount,
    getMenuBarEllipseCount,
  } = context;

  const value = getDesignValue() as DesignValue;

  const renderToolBar = getRenderToolBar();
  const renderMenuBar = getRenderMenuBar();
  const toolbarEllipseCount = getToolbarEllipseCount();
  const menuBarEllipseCount = getMenuBarEllipseCount();

  return (
    <div className={classNames(selectPrefix)}>
      <div className={classNames(`${selectPrefix}-header`)}>
        <Toolbar
          toolbarGroup={renderToolBar?.(defaultGroups) ?? defaultGroups}
          menu={renderMenuBar?.(defaultMenuItems) ?? defaultMenuItems}
          toolbarEllipseCount={toolbarEllipseCount}
          menuBarEllipseCount={menuBarEllipseCount}
        />
      </div>

      <div className={classNames(`${selectPrefix}-body`)}>
        <Form name="editor" form={form} className={classNames(`${selectPrefix}-form`)}>
          {
            // 对value进行解析
            parseDesign({
              parentId: undefined,
              value,
              context,
            }) as ReactNode
          }
        </Form>
      </div>
    </div>
  );
};

export default DesignEditor;
