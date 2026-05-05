import { Select } from 'antd';
import classNames from 'classnames';
import React, { createContext, useContext } from 'react';
import type { CSSProperties, FC, ReactNode } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { parseDesign } from '../../Fields';
import { SELECT_PREFIX } from '../../constant';
import type { DesignEditorProps, DesignValue, MobileViewportPresetId } from '../../types';
import {
  MOBILE_VIEWPORT_PRESETS,
  getMobileViewportLabel,
  getMobileViewportPresetById,
  isDesktop,
} from '../../utils';
import { DesignContext } from '../Context';
import Toolbar from '../Toolbar';
import { defaultMenuItems } from '../Toolbar/menuActions';
import { defaultGroups } from '../Toolbar/toolbarActions';
import HiddenFormItemsPortal from '../../components/HiddenFormItemsPortal';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

type FormInstance = ReturnType<typeof Form.useForm>[0];

export const FormContext = createContext<FormInstance | null>(null);

export function useFormContext(): FormInstance | null {
  return useContext(FormContext);
}

/**
 * DesignEditor
 */
const DesignEditor: FC<DesignEditorProps> = () => {
  const [form] = Form.useForm();

  const context = useContext(DesignContext);

  const {
    getDesignValue,
    getTerminal,
    getMobileViewportPresetId,
    setMobileViewportPresetId,
    getRenderToolBar,
    getRenderMenuBar,
    getToolbarEllipseCount,
    getMenuBarEllipseCount,
  } = context;

  const value = getDesignValue() as DesignValue;
  const terminal = getTerminal();
  const isMobilePreview = !isDesktop(terminal);
  const mobilePresetId = getMobileViewportPresetId();
  const mobileViewportWidthPx = getMobileViewportPresetById(mobilePresetId)?.widthPx ?? 375;

  const renderToolBar = getRenderToolBar();
  const renderMenuBar = getRenderMenuBar();
  const toolbarEllipseCount = getToolbarEllipseCount();
  const menuBarEllipseCount = getMenuBarEllipseCount();

  return (
    <FormContext.Provider value={form}>
      <div className={classNames(selectPrefix)}>
        <div className={classNames(`${selectPrefix}-header`)}>
          <Toolbar
            toolbarGroup={renderToolBar?.(defaultGroups) ?? defaultGroups}
            menu={renderMenuBar?.(defaultMenuItems) ?? defaultMenuItems}
            toolbarEllipseCount={toolbarEllipseCount}
            menuBarEllipseCount={menuBarEllipseCount}
          />
        </div>

        <div
          className={classNames(`${selectPrefix}-body`, {
            [`${selectPrefix}-body-mobile`]: isMobilePreview,
          })}
        >
          {isMobilePreview && (
            <div className={classNames(`${selectPrefix}-viewport-toolbar`)}>
              <span className={classNames(`${selectPrefix}-viewport-toolbar-label`)}>
                {Intl.get('mobile_viewport_preset')}
              </span>
              <Select<MobileViewportPresetId>
                size="small"
                className={classNames(`${selectPrefix}-viewport-select`)}
                value={mobilePresetId}
                options={MOBILE_VIEWPORT_PRESETS.map((p) => ({
                  value: p.id,
                  label: getMobileViewportLabel(p),
                }))}
                onChange={(v) => setMobileViewportPresetId(v as MobileViewportPresetId)}
                aria-label={Intl.get('mobile_viewport_preset')}
              />
            </div>
          )}
          <div
            className={classNames(`${selectPrefix}-viewport`, {
              [`${selectPrefix}-viewport-mobile`]: isMobilePreview,
            })}
            style={
              isMobilePreview
                ? ({
                    ['--fd-design-editor-mobile-viewport-width' as string]: `${mobileViewportWidthPx}px`,
                  } as CSSProperties)
                : undefined
            }
          >
            <Form name="editor" form={form} className={classNames(`${selectPrefix}-form`)}>
              <div id="editorHidden"></div>
              <HiddenFormItemsPortal value={value} />
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
      </div>
    </FormContext.Provider>
  );
};

export default DesignEditor;
