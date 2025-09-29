import { Grid } from 'antd-mobile';
import type { GridProps } from 'antd-mobile';
declare const GridHOC: typeof Grid & {
    defaultProps?: Partial<GridProps>;
    override?: (props: Partial<GridProps>) => Partial<GridProps>;
};
export default GridHOC;
