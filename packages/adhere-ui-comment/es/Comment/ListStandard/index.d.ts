/// <reference types="react" />
import { IListStandardProps } from '@/types';
import PropTypes from 'prop-types';
/**
 * ListStandard
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
declare function ListStandard(props: IListStandardProps): JSX.Element;
declare namespace ListStandard {
    var defaultProps: {
        flexLayoutProps: any;
        listProps: {};
        limit: number;
        renderEmpty: () => JSX.Element;
        dataKeys: {
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        };
    };
    var propTypes: {
        getScrollWrapContainer: PropTypes.Requireable<(...args: any[]) => any>;
        flexLayoutProps: PropTypes.Requireable<PropTypes.InferProps<any>>;
        listProps: PropTypes.Requireable<PropTypes.InferProps<{
            getScrollWrapContainer: PropTypes.Requireable<(...args: any[]) => any>;
            className: PropTypes.Requireable<string>;
            style: PropTypes.Requireable<object>;
            isLoading: PropTypes.Requireable<boolean>;
            hasMore: PropTypes.Requireable<boolean>;
            onLoadMore: PropTypes.Requireable<(...args: any[]) => any>;
            renderFirstLoading: PropTypes.Requireable<(...args: any[]) => any>;
            scrollLoadProps: PropTypes.Requireable<PropTypes.InferProps<{
                className: PropTypes.Requireable<string>;
                style: PropTypes.Requireable<object>;
                loadClassName: PropTypes.Requireable<string>;
                loadStyle: PropTypes.Requireable<object>;
                emptyClassName: PropTypes.Requireable<string>;
                emptyStyle: PropTypes.Requireable<object>;
                errorClassName: PropTypes.Requireable<string>;
                errorStyle: PropTypes.Requireable<object>;
                distance: PropTypes.Requireable<number>;
                onScrollBottom: PropTypes.Requireable<(...args: any[]) => any>;
                onEmptyClick: PropTypes.Requireable<(...args: any[]) => any>;
                onErrorClick: PropTypes.Requireable<(...args: any[]) => any>;
                renderLoading: PropTypes.Requireable<(...args: any[]) => any>;
                renderEmpty: PropTypes.Requireable<(...args: any[]) => any>;
                renderError: PropTypes.Requireable<(...args: any[]) => any>;
            }>>;
        }>>;
        limit: PropTypes.Requireable<number>;
        renderList: PropTypes.Requireable<(...args: any[]) => any>;
        renderEmpty: PropTypes.Requireable<(...args: any[]) => any>;
        renderFirstLoading: PropTypes.Requireable<(...args: any[]) => any>;
        fetchData: PropTypes.Requireable<(...args: any[]) => any>;
        dataKeys: PropTypes.Requireable<PropTypes.InferProps<{
            current: PropTypes.Requireable<string>;
            totalPage: PropTypes.Requireable<string>;
            list: PropTypes.Requireable<string>;
            totalCount: PropTypes.Requireable<string>;
        }>>;
        scrollLoadProps: PropTypes.Requireable<PropTypes.InferProps<{
            className: PropTypes.Requireable<string>;
            style: PropTypes.Requireable<object>;
            loadClassName: PropTypes.Requireable<string>;
            loadStyle: PropTypes.Requireable<object>;
            emptyClassName: PropTypes.Requireable<string>;
            emptyStyle: PropTypes.Requireable<object>;
            errorClassName: PropTypes.Requireable<string>;
            errorStyle: PropTypes.Requireable<object>;
            distance: PropTypes.Requireable<number>;
            onScrollBottom: PropTypes.Requireable<(...args: any[]) => any>;
            onEmptyClick: PropTypes.Requireable<(...args: any[]) => any>;
            onErrorClick: PropTypes.Requireable<(...args: any[]) => any>;
            renderLoading: PropTypes.Requireable<(...args: any[]) => any>;
            renderEmpty: PropTypes.Requireable<(...args: any[]) => any>;
            renderError: PropTypes.Requireable<(...args: any[]) => any>;
        }>>;
    };
}
export default ListStandard;
