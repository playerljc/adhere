import { Statistic } from 'antd';
import type { StatisticProps } from 'antd';
declare const StatisticHOC: typeof Statistic & {
    defaultProps?: Partial<StatisticProps>;
};
export default StatisticHOC;
