import { Result } from 'antd';
import type { ResultProps } from 'antd';

import { createFactory } from '../util';

const ResultHOC: typeof Result & {
  defaultProps?: Partial<ResultProps>;
} = createFactory<ResultProps>(Result, {});

export default ResultHOC;
