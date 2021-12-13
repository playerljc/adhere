import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ISearchFormValueProps } from './types';

const selectorPrefix = 'adhere-ui-searchform-value';

/**
 * SearchFormValue
 * @class SearchFormValue
 * @classdesc SearchFormValue
 */
class SearchFormValue extends React.Component<ISearchFormValueProps, any> {
  static defaultProps: any;
  static propTypes: any;

  render() {
    const { className, style, children, ...others } = this.props;

    return (
      <td
        {...others}
        className={classNames(selectorPrefix, ...(className || '').split(' '))}
        style={{ ...(style || {}) }}
      >
        {children}
      </td>
    );
  }
}

SearchFormValue.defaultProps = {
  className: '',
  style: {},
};

SearchFormValue.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SearchFormValue;
