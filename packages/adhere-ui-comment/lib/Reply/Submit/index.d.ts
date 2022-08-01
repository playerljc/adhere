/// <reference types="react" />
import PropTypes from 'prop-types';
import { IReplyProps } from '@/types';
/**
 * Reply
 * @param props
 * @constructor
 * @classdesc 回复
 */
declare function Reply(props: IReplyProps): JSX.Element;
declare namespace Reply {
    var defaultProps: {};
    var propTypes: {
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        onResult: PropTypes.Requireable<(...args: any[]) => any>;
        local: PropTypes.Requireable<string>;
    };
}
export default Reply;
