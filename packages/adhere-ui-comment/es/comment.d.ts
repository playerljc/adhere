/// <reference types="react" />
import { IYgCommentProps } from '@/types';
import PropTypes from 'prop-types';
/**
 * YgComment
 * @param props
 * @constructor
 */
declare function YgComment(props: IYgCommentProps): JSX.Element;
declare namespace YgComment {
    var defaultProps: {
        keyProp: string;
        isMoreProp: string;
        dataKeys: {
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        };
        limit: number;
    };
    var propTypes: {
        getScrollWrapContainer: PropTypes.Requireable<(...args: any[]) => any>;
        fetchData: PropTypes.Requireable<(...args: any[]) => any>;
        fetchReply: PropTypes.Requireable<(...args: any[]) => any>;
        dataKeys: PropTypes.Requireable<PropTypes.InferProps<{
            current: PropTypes.Requireable<string>;
            totalPage: PropTypes.Requireable<string>;
            list: PropTypes.Requireable<string>;
            totalCount: PropTypes.Requireable<string>;
        }>>;
        limit: PropTypes.Requireable<number>;
        listProps: PropTypes.Requireable<object>;
        keyProp: PropTypes.Requireable<string>;
        isMoreProp: PropTypes.Requireable<string>;
        renderActions: PropTypes.Requireable<(...args: any[]) => any>;
        renderAuthor: PropTypes.Requireable<(...args: any[]) => any>;
        renderAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        renderContent: PropTypes.Requireable<(...args: any[]) => any>;
        renderDateTime: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default YgComment;
