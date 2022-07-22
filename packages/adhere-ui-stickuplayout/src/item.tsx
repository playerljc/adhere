import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const selectorPrefix = 'adhere-ui-stickuplayout-item';

/**
 * StickupLayoutItem
 * @constructor
 */
function StickupLayoutItem(props) {
  // @ts-ignore
  const { className, style, title, content } = props;

  return (
    <div
      className={classNames(
        selectorPrefix,
        // @ts-ignore
        className.split(/\s+/),
      )}
      style={{ ...style }}
    >
      <div className={`${selectorPrefix}-header`}>{title}</div>
      <div className={`${selectorPrefix}-content`}>{content}</div>
    </div>
  );
}

StickupLayoutItem.defaultProps = {
  className: '',
  style: {},
  title: '',
  content: null,
};

StickupLayoutItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.node,
  content: PropTypes.node,
};

export default StickupLayoutItem;
