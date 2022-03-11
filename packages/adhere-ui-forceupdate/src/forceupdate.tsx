import React from 'react';
import PropTypes from 'prop-types';

import { IForceUpdateProps } from './types';

const selectorPrefix = 'adhere-ui-forceupdate';

/**
 * ForceUpdate
 * @class ForceUpdate
 * @classdesc ForceUpdate
 */
class ForceUpdate extends React.Component<IForceUpdateProps> {}

ForceUpdate.defaultProps = {
  className: '',
  style: {},
};

ForceUpdate.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default ForceUpdate;
