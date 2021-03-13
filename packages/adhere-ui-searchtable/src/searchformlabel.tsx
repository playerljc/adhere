import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ISearchFormLabelProps } from './types';

const selectorPrefix = 'adhere-ui-searchform-label';

/**
 * SearchFormLabel
 * @class SearchFormLabel
 * @classdesc SearchFormLabel
 */
class SearchFormLabel extends React.Component<ISearchFormLabelProps, any> {
  static defaultProps: any;
  static propTypes: any;

  render() {
    const { className, style, children } = this.props;

    return (
      <td
        className={classNames(selectorPrefix, ...(className || '').split(' '))}
        style={{ ...(style || {}) }}
      >
        {children}
      </td>
    );
  }
}

SearchFormLabel.defaultProps = {
  className: '',
  style: {},
};

SearchFormLabel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SearchFormLabel;
