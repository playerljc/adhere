import { Button } from 'antd';
import { DebounceButtonProps } from './InternalDebounceButton';
declare const DebounceButtonHOC: typeof Button & {
    defaultProps?: Partial<DebounceButtonProps>;
    override?: (props: Partial<DebounceButtonProps>) => Partial<DebounceButtonProps>;
};
export default DebounceButtonHOC;
