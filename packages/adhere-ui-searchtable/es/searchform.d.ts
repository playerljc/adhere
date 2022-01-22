import React from 'react';
import { ISearchFormProps } from './types';
import SearchFormRow from './searchformrow';
/**
 * SearchForm
 * @class SearchForm
 * @classdesc SearchForm
 */
declare class SearchForm extends React.Component<ISearchFormProps, any> {
    static defaultProps: any;
    static propTypes: any;
    static SearchFormRow: SearchFormRow;
    render(): JSX.Element;
}
export default SearchForm;
