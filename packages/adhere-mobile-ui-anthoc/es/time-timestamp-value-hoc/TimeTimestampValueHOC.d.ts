import type { TimeTimestampValueHOCProps } from '../types';
import ValueHOC from './ValueHOC';
declare const TimeTimestampValueHOC: typeof ValueHOC & {
    defaultProps?: Partial<TimeTimestampValueHOCProps>;
    override?: (props: Partial<TimeTimestampValueHOCProps>) => Partial<TimeTimestampValueHOCProps>;
};
export default TimeTimestampValueHOC;
