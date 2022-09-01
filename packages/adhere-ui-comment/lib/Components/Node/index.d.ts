/// <reference types="react" />
import { INodeProps } from '@/types';
import PropTypes from 'prop-types';
/**
 * Node
 * @param props
 * @constructor
 * @classdesc 节点(评论 | 回复)
 */
declare function Node(props: INodeProps): JSX.Element;
declare namespace Node {
    var defaultProps: {
        isReply: boolean;
        limit: number;
        dataKeys: {
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        };
        local: string;
    };
    var propTypes: {
        isReply: PropTypes.Requireable<boolean>;
        data: PropTypes.Requireable<PropTypes.InferProps<{
            key: PropTypes.Requireable<string>;
        }>>;
        dataKeys: PropTypes.Requireable<PropTypes.InferProps<{
            current: PropTypes.Requireable<string>;
            totalPage: PropTypes.Requireable<string>;
            list: PropTypes.Requireable<string>;
            totalCount: PropTypes.Requireable<string>;
        }>>;
        renderLoading: PropTypes.Requireable<(...args: any[]) => any>;
        limit: PropTypes.Requireable<number>;
        fetchData: PropTypes.Requireable<(...args: any[]) => any>;
        fetchReply: PropTypes.Requireable<(...args: any[]) => any>;
        keyProp: PropTypes.Requireable<string>;
        isMoreProp: PropTypes.Requireable<string>;
        renderActions: PropTypes.Requireable<(...args: any[]) => any>;
        renderAuthor: PropTypes.Requireable<(...args: any[]) => any>;
        renderAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        renderContent: PropTypes.Requireable<(...args: any[]) => any>;
        renderDateTime: PropTypes.Requireable<(...args: any[]) => any>;
        showReplyText: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        hideReplyText: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        loadMoreReplyText: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        showReplyTextIcon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        hideReplyTextIcon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        loadMoreCollapseTextIcon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        local: PropTypes.Requireable<string>;
        emojiPickerProps: PropTypes.Requireable<object>;
    };
}
export declare const defaultProps: {
    isReply: boolean;
    limit: number;
    dataKeys: {
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    };
    local: string;
};
export declare const propTypes: {
    isReply: PropTypes.Requireable<boolean>;
    data: PropTypes.Requireable<PropTypes.InferProps<{
        key: PropTypes.Requireable<string>;
    }>>;
    dataKeys: PropTypes.Requireable<PropTypes.InferProps<{
        current: PropTypes.Requireable<string>;
        totalPage: PropTypes.Requireable<string>;
        list: PropTypes.Requireable<string>;
        totalCount: PropTypes.Requireable<string>;
    }>>;
    renderLoading: PropTypes.Requireable<(...args: any[]) => any>;
    limit: PropTypes.Requireable<number>;
    fetchData: PropTypes.Requireable<(...args: any[]) => any>;
    fetchReply: PropTypes.Requireable<(...args: any[]) => any>;
    keyProp: PropTypes.Requireable<string>;
    isMoreProp: PropTypes.Requireable<string>;
    renderActions: PropTypes.Requireable<(...args: any[]) => any>;
    renderAuthor: PropTypes.Requireable<(...args: any[]) => any>;
    renderAvatar: PropTypes.Requireable<(...args: any[]) => any>;
    renderContent: PropTypes.Requireable<(...args: any[]) => any>;
    renderDateTime: PropTypes.Requireable<(...args: any[]) => any>;
    showReplyText: PropTypes.Requireable<string | ((...args: any[]) => any)>;
    hideReplyText: PropTypes.Requireable<string | ((...args: any[]) => any)>;
    loadMoreReplyText: PropTypes.Requireable<string | ((...args: any[]) => any)>;
    showReplyTextIcon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    hideReplyTextIcon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    loadMoreCollapseTextIcon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    local: PropTypes.Requireable<string>;
    emojiPickerProps: PropTypes.Requireable<object>;
};
export default Node;
