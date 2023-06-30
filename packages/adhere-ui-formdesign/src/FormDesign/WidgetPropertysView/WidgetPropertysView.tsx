import { Form } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import type { WidgetPropertysViewProps } from '../../types/WidgetPropertysViewTypes';
import { selectorPrefix } from '../FormDesign';

const suffix = '-widget-propertys-view';

/**
 * WidgetPropertysView
 * @constructor
 */
const WidgetPropertysView: FC<WidgetPropertysViewProps> = (props) => {
  return (
    <div className={`${selectorPrefix}${suffix}`}>
      <Form layout="vertical">
        <ul>{props?.widget?.propertys?.map((_property) => _property?.value?.render?.())}</ul>
      </Form>
    </div>
  );
};

export default memo(WidgetPropertysView);
