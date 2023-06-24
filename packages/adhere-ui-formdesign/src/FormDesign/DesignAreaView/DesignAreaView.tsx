import { Form } from 'antd';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { Fragment, memo, useMemo } from 'react';

import type { DesignAreaViewProps } from '../../types/DesignAreaViewTypes';
import { parseWidgets } from '../../util';
import { selectorPrefix } from '../FormDesign';

const selectorSuffix = '-area-view';

/**
 * DesignAreaView
 * @param {string} className
 * @param {React.CSSProperties} style
 * @param {IWidget[]} dataSource
 * @constructor
 */
const DesignAreaView: FC<DesignAreaViewProps> = ({ className, style, dataSource }) => {
  const children = useMemo(() => {
    const Widgets = parseWidgets(dataSource);

    return Widgets.map((cw) => <Fragment key={cw.getId()}>{cw.renderDesign()}</Fragment>);
  }, [dataSource]);

  return (
    <div
      className={classNames(`${selectorPrefix}${selectorSuffix}`, className ?? '')}
      style={style ?? {}}
    >
      <Form className={`${selectorPrefix}${selectorSuffix}-form`}>{children}</Form>
    </div>
  );
};

export default memo(DesignAreaView);
