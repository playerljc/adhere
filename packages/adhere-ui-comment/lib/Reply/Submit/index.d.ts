/// <reference types="react" />
import { IReplyProps } from '@/types';
import PropTypes from 'prop-types';
declare function Reply(props: IReplyProps): JSX.Element;
declare namespace Reply {
    var defaultProps: {};
    var propTypes: {
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        onResult: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default Reply;
