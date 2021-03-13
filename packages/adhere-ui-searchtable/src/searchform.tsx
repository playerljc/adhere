import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ISearchFormProps } from './types';

import SearchFormRow from './searchformrow';

const selectorPrefix = 'adhere-ui-searchform';

/**
 * SearchForm
 * @class SearchForm
 * @classdesc SearchForm
 */
class SearchForm extends React.Component<ISearchFormProps, any> {
  static defaultProps: any;
  static propTypes: any;
  // @ts-ignore
  static SearchFormRow: SearchFormRow = SearchFormRow;

  render() {
    const { className, style, children } = this.props;

    return (
      <table
        className={classNames(selectorPrefix, ...(className || '').split(' '))}
        style={{ ...(style || {}) }}
      >
        <tbody>{children}</tbody>
      </table>
    );
  }
}

SearchForm.defaultProps = {
  className: '',
  style: {},
};

SearchForm.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SearchForm;
