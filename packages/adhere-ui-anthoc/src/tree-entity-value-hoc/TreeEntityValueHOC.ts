import type { TreeEntityValueHOCProps } from '../types';
import { createFactory } from '../util';
import InternalTreeEntityValueHOC from './InternalTreeEntityValueHOC';

const TreeEntityValueHOC: typeof InternalTreeEntityValueHOC & {
  defaultProps?: Partial<TreeEntityValueHOCProps>;
} = createFactory<TreeEntityValueHOCProps>(InternalTreeEntityValueHOC, {});

TreeEntityValueHOC.displayName = 'TreeEntityValueHOC';

export default TreeEntityValueHOC;
