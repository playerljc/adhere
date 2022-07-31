/// <reference types="react" />
import { INodeProps } from '@/types';
declare function CommentInfo(props: INodeProps): JSX.Element;
declare namespace CommentInfo {
    var defaultProps: {
        isReply: boolean;
        limit: number;
        dataKeys: {
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        };
    };
    var propTypes: {
        isReply: import("prop-types").Requireable<boolean>;
        data: import("prop-types").Requireable<import("prop-types").InferProps<{
            key: import("prop-types").Requireable<string>;
        }>>;
        dataKeys: import("prop-types").Requireable<import("prop-types").InferProps<{
            current: import("prop-types").Requireable<string>;
            totalPage: import("prop-types").Requireable<string>;
            list: import("prop-types").Requireable<string>;
            totalCount: import("prop-types").Requireable<string>;
        }>>;
        renderLoading: import("prop-types").Requireable<(...args: any[]) => any>;
        limit: import("prop-types").Requireable<number>;
        fetchData: import("prop-types").Requireable<(...args: any[]) => any>;
        fetchReply: import("prop-types").Requireable<(...args: any[]) => any>;
        keyProp: import("prop-types").Requireable<string>;
        isMoreProp: import("prop-types").Requireable<string>;
        renderActions: import("prop-types").Requireable<(...args: any[]) => any>;
        renderAuthor: import("prop-types").Requireable<(...args: any[]) => any>;
        renderAvatar: import("prop-types").Requireable<(...args: any[]) => any>;
        renderContent: import("prop-types").Requireable<(...args: any[]) => any>;
        renderDateTime: import("prop-types").Requireable<(...args: any[]) => any>;
        showReplyText: import("prop-types").Requireable<string | ((...args: any[]) => any)>;
        hideReplyText: import("prop-types").Requireable<string | ((...args: any[]) => any)>;
        loadMoreReplyText: import("prop-types").Requireable<string | ((...args: any[]) => any)>;
        showReplyTextIcon: import("prop-types").Requireable<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
        hideReplyTextIcon: import("prop-types").Requireable<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
        loadMoreCollapseTextIcon: import("prop-types").Requireable<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
    };
}
export default CommentInfo;
