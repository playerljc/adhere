import type { PagingEntityValueHOCProps } from '../types';
import InternalPagingEntityValueHOC from './InternalPagingEntityValueHOC';
declare const PagingEntityValueHOC: typeof InternalPagingEntityValueHOC & {
    defaultProps?: Partial<PagingEntityValueHOCProps>;
};
export default PagingEntityValueHOC;
