import Split from './Split';
import SplitGroup from './Group';
import type { SplitComponent } from './types';

const SplitWithGroup = Split as SplitComponent;
SplitWithGroup.Group = SplitGroup;

export default SplitWithGroup;

export type { SplitProps, SplitGroupProps, SplitComponent, MediaConfig } from './types';

export { getValue } from './Util';
export { flattenChildren } from './flattenChildren';
