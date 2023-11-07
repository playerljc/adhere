import { Statistic } from 'antd';
import type { StatisticProps } from 'antd';

import { createFactory } from '../util';

const StatisticHOC: typeof Statistic & {
  defaultProps?: Partial<StatisticProps>;
} = createFactory<StatisticProps>(Statistic, {});

export default StatisticHOC;
