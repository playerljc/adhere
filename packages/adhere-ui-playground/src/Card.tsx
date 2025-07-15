import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import type { CardProps } from './types';

const selectorPrefix = 'adhere-ui-playground-card';

/**
 * 卡片组件
 * @component Card
 * @description 一个可配置的卡片组件，支持标题、内容、操作按钮等
 * @param props - 组件属性
 * @returns JSX.Element
 */
const Card = memo<CardProps>((props) => {
  const {
    className = '',
    style = {},
    headerClassName = '',
    headerStyle = {},
    bodyClassName = '',
    bodyStyle = {},
    actionClassName = '',
    actionStyle = {},
    children,
    title,
    extra,
    actions,
    description,
  } = props;

  return (
    <div className={classNames(selectorPrefix, className)} style={style}>
      <ConditionalRender conditional={!!title || !!extra}>
        {() => (
          <div
            className={classNames(`${selectorPrefix}-header`, headerClassName)}
            style={headerStyle}
          >
            <ConditionalRender conditional={!!title}>
              {() => <div className={`${selectorPrefix}-header-title`}>{title}</div>}
            </ConditionalRender>

            <ConditionalRender conditional={!!extra}>
              {() => <div className={`${selectorPrefix}-header-extra`}>{extra}</div>}
            </ConditionalRender>
          </div>
        )}
      </ConditionalRender>

      <ConditionalRender conditional={!!children}>
        {() => (
          <div
            className={classNames(`${selectorPrefix}-body`, bodyClassName)}
            style={bodyStyle}
          >
            {children}
          </div>
        )}
      </ConditionalRender>

      <ConditionalRender conditional={!!description}>
        {() => (
          <div className={`${selectorPrefix}-description`}>
            <ConditionalRender conditional={!!description?.title}>
              {() => (
                <div
                  className={`${selectorPrefix}-description-title`}
                  title={typeof description?.title === 'string' ? description.title : undefined}
                >
                  {description?.title}
                </div>
              )}
            </ConditionalRender>
            <ConditionalRender conditional={!!description?.info}>
              {() => description?.info}
            </ConditionalRender>
          </div>
        )}
      </ConditionalRender>

      <ConditionalRender conditional={!!actions?.length}>
        {() => (
          <ul
            className={classNames(`${selectorPrefix}-action`, actionClassName)}
            style={actionStyle}
          >
            {actions?.map((action, index) => (
              <li key={`${index + 1}`} className={`${selectorPrefix}-action-item`}>
                {action}
              </li>
            ))}
          </ul>
        )}
      </ConditionalRender>
    </div>
  );
});

Card.displayName = 'Card';

/**
 * 卡片组件属性类型定义
 * @constant cardPropTypes
 * @description PropTypes类型检查定义
 */
export const cardPropTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  headerClassName: PropTypes.string,
  headerStyle: PropTypes.object,
  bodyClassName: PropTypes.string,
  bodyStyle: PropTypes.object,
  actionClassName: PropTypes.string,
  actionStyle: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  extra: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.node),
  description: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }),
};

export default Card;
