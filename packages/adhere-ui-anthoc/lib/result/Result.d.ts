import { Result } from 'antd';
import type { ResultProps } from 'antd';
declare const ResultHOC: typeof Result & {
    defaultProps?: Partial<ResultProps>;
};
export default ResultHOC;
