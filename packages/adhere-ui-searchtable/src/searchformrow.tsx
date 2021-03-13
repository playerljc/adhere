import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ISearchFormRowProps } from './types';

import SearchFormLabel from './searchformlabel';
import SearchFormValue from './searchformvalue';

const selectorPrefix = 'adhere-ui-searchform-row';

/**
 * SearchFormRow
 * @class SearchFormRow
 * @classdesc SearchFormRow
 */
class SearchFormRow extends React.Component<ISearchFormRowProps, any> {
  static defaultProps: any;
  static propTypes: any;
  // @ts-ignore
  static SearchFormLabel: SearchFormLabel = SearchFormLabel;
  // @ts-ignore
  static SearchFormValue: SearchFormValue = SearchFormValue;

  render() {
    const { className, style, children } = this.props;

    return (
      <tr
        className={classNames(selectorPrefix, ...(className || '').split(' '))}
        style={{ ...(style || {}) }}
      >
        {children}
      </tr>
    );
  }
}

SearchFormRow.defaultProps = {
  className: '',
  style: {},
};

SearchFormRow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SearchFormRow;
