/// <reference types="react" />
import { ICommentProps } from '@/types';
import PropTypes from 'prop-types';
/**
 * Comment
 * @param props
 * @constructor
 */
declare function Comment(props: ICommentProps): JSX.Element;
declare namespace Comment {
    var defaultProps: {
        commentKeyProp: string;
        commentDataKeys: {
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        };
        commentLimit: number;
        replyKeyProp: string;
        replyDataKeys: {
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        };
        replyLimit: number;
        isMoreProp: string;
        showReplyText: string;
        hideReplyText: string;
        loadMoreReplyText: string;
        showReplyTextIcon: JSX.Element;
        hideReplyTextIcon: JSX.Element;
        loadMoreCollapseTextIcon: JSX.Element;
    };
    var propTypes: {
        getScrollWrapContainer: PropTypes.Requireable<(...args: any[]) => any>;
        fetchCommentData: PropTypes.Requireable<(...args: any[]) => any>;
        commentDataKeys: PropTypes.Requireable<PropTypes.InferProps<{
            current: PropTypes.Requireable<string>;
            totalPage: PropTypes.Requireable<string>;
            list: PropTypes.Requireable<string>;
            totalCount: PropTypes.Requireable<string>;
        }>>;
        commentLimit: PropTypes.Requireable<number>;
        commentKeyProp: PropTypes.Requireable<string>;
        renderCommentActions: PropTypes.Requireable<(...args: any[]) => any>;
        renderCommentAuthor: PropTypes.Requireable<(...args: any[]) => any>;
        renderCommentAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        renderCommentContent: PropTypes.Requireable<(...args: any[]) => any>;
        renderCommentDateTime: PropTypes.Requireable<(...args: any[]) => any>;
        renderCommentLoading: PropTypes.Requireable<(...args: any[]) => any>;
        fetchReplyData: PropTypes.Requireable<(...args: any[]) => any>;
        replyDataKeys: PropTypes.Requireable<PropTypes.InferProps<{
            current: PropTypes.Requireable<string>;
            totalPage: PropTypes.Requireable<string>;
            list: PropTypes.Requireable<string>;
            totalCount: PropTypes.Requireable<string>;
        }>>;
        replyLimit: PropTypes.Requireable<number>;
        replyKeyProp: PropTypes.Requireable<string>;
        renderReplyActions: PropTypes.Requireable<(...args: any[]) => any>;
        renderReplyAuthor: PropTypes.Requireable<(...args: any[]) => any>;
        renderReplyAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        renderReplyContent: PropTypes.Requireable<(...args: any[]) => any>;
        renderReplyDateTime: PropTypes.Requireable<(...args: any[]) => any>;
        renderReplyLoading: PropTypes.Requireable<(...args: any[]) => any>;
        renderEmpty: PropTypes.Requireable<(...args: any[]) => any>;
        renderFirstLoading: PropTypes.Requireable<(...args: any[]) => any>;
        flexLayoutProps: PropTypes.Requireable<object>;
        fetchReply: PropTypes.Requireable<(...args: any[]) => any>;
        listProps: PropTypes.Requireable<object>;
        isMoreProp: PropTypes.Requireable<string>;
        showReplyText: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        hideReplyText: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        loadMoreReplyText: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        showReplyTextIcon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        hideReplyTextIcon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        loadMoreCollapseTextIcon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
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
export default Comment;
