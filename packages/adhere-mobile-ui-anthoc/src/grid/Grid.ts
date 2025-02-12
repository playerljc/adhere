import { Grid } from 'antd-mobile';
import type { GridProps } from 'antd-mobile';

import { createFactory } from '../util';

const GridHOC: typeof Grid & {
  defaultProps?: Partial<GridProps>;
} = createFactory<GridProps>(Grid, {});

GridHOC.displayName = 'Grid';

export default GridHOC;
