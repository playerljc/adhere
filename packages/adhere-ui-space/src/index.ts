import Space from './Space';
import SpaceGroup from './Group';
import type { SpaceComponent } from './types';

const SpaceWithGroup = Space as SpaceComponent;
SpaceWithGroup.Group = SpaceGroup;

export default SpaceWithGroup;

export type { SpaceProps, SpaceGroupProps, SpaceComponent, MediaConfig } from './types';

export { getValue } from './Util';
export { flattenChildren } from './flattenChildren';
