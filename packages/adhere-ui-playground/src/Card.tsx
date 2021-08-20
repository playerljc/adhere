import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { ICardProps } from './types';

const selectorPrefix = 'adhere-ui-playground-card';

/**
 * Card
 * @class Card
 * @classdesc Card
 */
class Card extends React.Component<ICardProps> {
  protected render() {
    const {
      headerClassName,
      headerStyle,
      bodyClassName,
      bodyStyle,
      actionClassName,
      actionStyle,
      children,
      title,
      extra,
      actions,
    } = this.props;

    return (
      <div className={selectorPrefix}>
        <ConditionalRender conditional={!!title || !!extra}>
          {() => (
            <div
              className={classNames(`${selectorPrefix}-header`, headerClassName.split(' '))}
              style={{ ...headerStyle }}
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
              className={classNames(`${selectorPrefix}-body`, bodyClassName.split(' '))}
              style={{ ...bodyStyle }}
            >
              {children}
            </div>
          )}
        </ConditionalRender>

        <ConditionalRender conditional={!!actions}>
          {() => (
            <ul
              className={classNames(`${selectorPrefix}-action`, actionClassName.split(' '))}
              style={{ ...actionStyle }}
            >
              {actions.map((action, index) => (
                <li key={`${index + 1}`} className={`${selectorPrefix}-action-item`}>
                  {action}
                </li>
              ))}
            </ul>
          )}
        </ConditionalRender>
      </div>
    );
  }
}

Card.defaultProps = {
  headerClassName: '',
  headerStyle: {},
  bodyClassName: '',
  bodyStyle: {},
  actionClassName: '',
  actionStyle: {},
  title: null,
  extra: null,
  actions: null,
};

Card.propTypes = {
  headerClassName: PropTypes.string,
  headerStyle: PropTypes.object,
  bodyClassName: PropTypes.string,
  bodyStyle: PropTypes.object,
  actionClassName: PropTypes.string,
  actionStyle: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  extra: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.node),
};

export default Card;
