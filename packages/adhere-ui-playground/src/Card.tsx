import React, { FC } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { CardProps } from './types';

const selectorPrefix = 'adhere-ui-playground-card';

const Card: FC<CardProps> = (props) => {
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
    <div className={classNames(selectorPrefix, className || '')} style={style || {}}>
      <ConditionalRender conditional={!!title || !!extra}>
        {() => (
          <div
            className={classNames(`${selectorPrefix}-header`, headerClassName || '')}
            style={headerStyle || {}}
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
            className={classNames(`${selectorPrefix}-body`, bodyClassName || '')}
            style={bodyStyle || {}}
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
                  title={description?.title as string}
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

      <ConditionalRender conditional={!!actions}>
        {() => (
          <ul
            className={classNames(`${selectorPrefix}-action`, actionClassName || '')}
            style={actionStyle || {}}
          >
            {(actions || []).map((action, index) => (
              <li key={`${index + 1}`} className={`${selectorPrefix}-action-item`}>
                {action}
              </li>
            ))}
          </ul>
        )}
      </ConditionalRender>
    </div>
  );
};

// /**
//  * Card
//  * @class Card
//  * @classdesc Card
//  */
// class Card extends React.Component<CardProps> {
//   protected render() {
//     const {
//       className,
//       style,
//       headerClassName,
//       headerStyle,
//       bodyClassName,
//       bodyStyle,
//       actionClassName,
//       actionStyle,
//       children,
//       title,
//       extra,
//       actions,
//       description,
//     } = this.props;
//
//     return (
//       <div className={classNames(selectorPrefix, className || '')} style={{ ...style }}>
//         <ConditionalRender conditional={!!title || !!extra}>
//           {() => (
//             <div
//               className={classNames(`${selectorPrefix}-header`, headerClassName || '')}
//               style={{ ...headerStyle }}
//             >
//               <ConditionalRender conditional={!!title}>
//                 {() => <div className={`${selectorPrefix}-header-title`}>{title}</div>}
//               </ConditionalRender>
//
//               <ConditionalRender conditional={!!extra}>
//                 {() => <div className={`${selectorPrefix}-header-extra`}>{extra}</div>}
//               </ConditionalRender>
//             </div>
//           )}
//         </ConditionalRender>
//
//         <ConditionalRender conditional={!!children}>
//           {() => (
//             <div
//               className={classNames(`${selectorPrefix}-body`, bodyClassName || '')}
//               style={{ ...bodyStyle }}
//             >
//               {children}
//             </div>
//           )}
//         </ConditionalRender>
//
//         <ConditionalRender conditional={!!description}>
//           {() => (
//             <div className={`${selectorPrefix}-description`}>
//               <ConditionalRender conditional={!!description.title}>
//                 {() => (
//                   // @ts-ignore
//                   <div className={`${selectorPrefix}-description-title`} title={description.title}>
//                     {description.title}
//                   </div>
//                 )}
//               </ConditionalRender>
//               <ConditionalRender conditional={!!description.info}>
//                 {() => description.info}
//               </ConditionalRender>
//             </div>
//           )}
//         </ConditionalRender>
//
//         <ConditionalRender conditional={!!actions}>
//           {() => (
//             <ul
//               className={classNames(`${selectorPrefix}-action`, actionClassName || '')}
//               style={{ ...actionStyle }}
//             >
//               {actions.map((action, index) => (
//                 <li key={`${index + 1}`} className={`${selectorPrefix}-action-item`}>
//                   {action}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </ConditionalRender>
//       </div>
//     );
//   }
// }
//
// Card.defaultProps = {
//   className: '',
//   style: {},
//   headerClassName: '',
//   headerStyle: {},
//   bodyClassName: '',
//   bodyStyle: {},
//   actionClassName: '',
//   actionStyle: {},
//   title: null,
//   extra: null,
//   actions: null,
//   description: null,
// };
//
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

// Card.propTypes = cardPropTypes;

export default Card;
