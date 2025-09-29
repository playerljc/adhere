import type { AsyncTreeEntityValueHOCProps } from '../types';
import InternalAsyncTreeEntityValueHOC from './InternalAsyncTreeEntityValueHOC';
declare const AsyncTreeEntityValueHOC: typeof InternalAsyncTreeEntityValueHOC & {
    defaultProps?: Partial<AsyncTreeEntityValueHOCProps>;
    override?: (props: Partial<AsyncTreeEntityValueHOCProps>) => Partial<AsyncTreeEntityValueHOCProps>;
};
export default AsyncTreeEntityValueHOC;
