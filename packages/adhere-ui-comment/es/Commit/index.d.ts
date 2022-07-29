/// <reference types="react" />
import { ICommitProps } from '@/types';
import PropTypes from 'prop-types';
declare function Commit(props: ICommitProps): JSX.Element;
declare namespace Commit {
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
    };
}
export default Commit;
