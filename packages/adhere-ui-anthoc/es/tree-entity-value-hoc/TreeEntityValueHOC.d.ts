import type { TreeEntityValueHOCProps } from '../types';
import InternalTreeEntityValueHOC from './InternalTreeEntityValueHOC';
declare const TreeEntityValueHOC: typeof InternalTreeEntityValueHOC & {
    defaultProps?: Partial<TreeEntityValueHOCProps>;
    override?: (props: Partial<TreeEntityValueHOCProps>) => Partial<TreeEntityValueHOCProps>;
};
export default TreeEntityValueHOC;
