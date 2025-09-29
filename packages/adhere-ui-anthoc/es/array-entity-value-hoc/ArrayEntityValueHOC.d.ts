import type { ArrayEntityValueHOCProps } from '../types';
import InternalArrayEntityValueHOC from './InternalArrayEntityValueHOC';
declare const ArrayEntityValueHOC: typeof InternalArrayEntityValueHOC & {
    defaultProps?: Partial<ArrayEntityValueHOCProps>;
    override?: (props: Partial<ArrayEntityValueHOCProps>) => Partial<ArrayEntityValueHOCProps>;
};
export default ArrayEntityValueHOC;
