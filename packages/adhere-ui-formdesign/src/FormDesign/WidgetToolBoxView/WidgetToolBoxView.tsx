import { Collapse } from 'antd';
import classNames from 'classnames';
import React, { memo } from 'react';
import type { FC } from 'react';

import { getGroupNameByType, getTypes } from '../../WidgetToolBox/WidgetToolBoxGroupManager';
import { getWidgetToolBoxByGroupType } from '../../WidgetToolBox/WidgetToolBoxManager';
import { WidgetToolBoxViewProps } from '../../types/WidgetToolBoxViewTypes';
import { selectorPrefix } from '../FormDesign';

const selectorSuffix = '-widget-tool-box-view';

/**
 * WidgetToolBoxView
 * @description 工具箱视图
 */
const WidgetToolBoxView: FC<WidgetToolBoxViewProps> = ({ className, style }) => (
  <div
    className={classNames(`${selectorPrefix}${selectorSuffix}`, className ?? '')}
    style={style ?? {}}
  >
    <Collapse ghost>
      {/*获取到所有的分组，及其分组下的WidgetToolBox*/}
      {getTypes().map((_type) => (
        <Collapse.Panel key={_type} header={getGroupNameByType(_type) as string}>
          {/*组下的所有WidgetToolBox*/}
          <div className={`${selectorPrefix}${selectorSuffix}-group`}>
            {getWidgetToolBoxByGroupType?.(_type)?.map?.((_toolBox) => (
              <div
                key={_toolBox.type}
                className={`${selectorPrefix}${selectorSuffix}-widget-tool-box-item`}
              >
                {_toolBox?.renderInit?.()}
              </div>
            ))}
          </div>
        </Collapse.Panel>
      ))}
    </Collapse>
  </div>
);

export default memo(WidgetToolBoxView);
