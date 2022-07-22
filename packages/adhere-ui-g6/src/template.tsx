import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ITemplateProps } from './types';

const selectorPrefix = 'adhere-ui-template';

/**
 * Template
 * @class Template
 * @classdesc Template
 */
class Template extends React.Component<ITemplateProps> {
  static defaultProps: any;
  static propTypes: any;

  componentDidMount() {}

  componentWillReceiveProps(nextProps: Readonly<ITemplateProps>, nextContext: any) {}

  render() {
    // @ts-ignore
    const { className, style, children } = this.props;

    // @ts-ignore
    return (
      <div
        className={classNames(
          selectorPrefix,
          // @ts-ignore
          className.split(/\s+/),
        )}
        style={{ ...style }}
        ref={(el) => (this.el = el)}
      />
    );
  }
}

Template.defaultProps = {
  className: '',
  style: {},
};

Template.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Template;
