import { Result } from 'antd-mobile';
import type { ResultProps } from 'antd-mobile';

import { createFactory } from '../util';

const ResultHOC: typeof Result & {
  defaultProps?: Partial<ResultProps>;
  override?: (props: Partial<ResultProps>) => Partial<ResultProps>;
} = createFactory<ResultProps>(Result, {});

ResultHOC.displayName = 'Result';

export default ResultHOC;
