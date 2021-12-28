import React from 'react';
import { ISearchFormRowProps } from './types';
import SearchFormLabel from './searchformlabel';
import SearchFormValue from './searchformvalue';
/**
 * SearchFormRow
 * @class SearchFormRow
 * @classdesc SearchFormRow
 */
declare class SearchFormRow extends React.Component<ISearchFormRowProps, any> {
    static defaultProps: any;
    static propTypes: any;
    static SearchFormLabel: SearchFormLabel;
    static SearchFormValue: SearchFormValue;
    render(): JSX.Element;
}
export default SearchFormRow;
