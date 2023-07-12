import { useUpdateEffect } from 'ahooks';
import { Form } from 'antd';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { Fragment, memo, useEffect, useMemo } from 'react';

import type { DesignAreaViewProps } from '../../types/DesignAreaViewTypes';
import { GroupType } from '../../types/WidgetTypes';
import { getPropertyValueByName, parseWidgets } from '../../util';
import { selectorPrefix } from '../FormDesign';

const selectorSuffix = '-area-view';

/**
 * DesignAreaView
 * @description 设计区域视图
 * @param {string} className
 * @param {React.CSSProperties} style
 * @param {IWidget[]} dataSource
 * @constructor
 */
const DesignAreaView: FC<DesignAreaViewProps> = ({ className, style, dataSource }) => {
  const [form] = Form.useForm();

  const children = useMemo(() => {
    const Widgets = parseWidgets(dataSource);

    return Widgets.map((cw) => <Fragment key={cw.getId()}>{cw.renderDesign()}</Fragment>);
  }, [dataSource]);

  useEffect(() => {
    setValues();
  }, []);

  useUpdateEffect(() => {
    setValues();
  }, [dataSource]);

  /**
   * setValues
   * @description 设置属性表单的值
   */
  const setValues = () => {
    function loop(_widgets) {
      for (let i = 0; i < _widgets.length; i++) {
        const _widget = _widgets[i];
        const { propertys = [], widgets = [] } = _widget;

        if (_widget.groupType === GroupType.LAYOUT) {
          loop(widgets ?? []);
        } else {
          const key = getPropertyValueByName(propertys ?? [], 'name');
          values[key] = getPropertyValueByName(propertys ?? [], 'value');
        }
      }
    }

    const values = {};

    loop(dataSource);

    form.setFieldsValue(values);
  };

  return (
    <div
      className={classNames(`${selectorPrefix}${selectorSuffix}`, className ?? '')}
      style={style ?? {}}
    >
      <Form form={form} className={`${selectorPrefix}${selectorSuffix}-form`}>
        {children}
      </Form>
    </div>
  );
};

export default memo(DesignAreaView);
