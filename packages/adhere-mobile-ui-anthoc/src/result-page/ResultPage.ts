import { ResultPage } from 'antd-mobile';
import type { ResultPageProps } from 'antd-mobile';

import { createFactory } from '../util';

const ResultPageHOC: typeof ResultPage & {
  defaultProps?: Partial<ResultPageProps>;
  override?: (props: Partial<ResultPageProps>) => Partial<ResultPageProps>;
} = createFactory<ResultPageProps>(ResultPage, {});

ResultPageHOC.displayName = 'ResultPage';

export default ResultPageHOC;
