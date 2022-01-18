import React from 'react';
import PropTypes, {
  Requireable,
  ReactNodeLike,
  InferType,
  ReactElementLike,
  ReactNodeArray,
} from 'prop-types';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { ICardProps } from './types';

const selectorPrefix = 'adhere-ui-playground-card';

/**
 * Card
 * @class Card
 * @classdesc Card
 */
// @ts-ignore
class Card extends React.Component<ICardProps> {
  static propTypes: {
    headerClassName: any;
    actionStyle: any;
    bodyClassName: any;
    extra: Requireable<ReactNodeLike>;
    bodyStyle: any;
    description: any;
    actionClassName: any;
    title: Requireable<NonNullable<InferType<Requireable<ReactNodeLike> | any>>>;
    actions: Requireable<
      ({} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined)[]
    >;
    headerStyle: any;
  };

  static defaultProps: {
    headerClassName: string;
    actionStyle: {};
    bodyClassName: string;
    extra: null;
    bodyStyle: {};
    description: null;
    actionClassName: string;
    title: null;
    actions: null;
    headerStyle: {};
  };

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
      description,
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

        <ConditionalRender conditional={!!description}>
          {() => (
            <div className={`${selectorPrefix}-description`}>
              <ConditionalRender conditional={!!description.title}>
                {() => (
                  // @ts-ignore
                  <div className={`${selectorPrefix}-description-title`} title={description.title}>
                    {description.title}
                  </div>
                )}
              </ConditionalRender>
              <ConditionalRender conditional={!!description.info}>
                {() => description.info}
              </ConditionalRender>
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
  description: null,
};

export const cardPropTypes = {
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

Card.propTypes = cardPropTypes;

export default Card;
