import { BorderBeam } from 'antd';
import type { BorderBeamProps } from 'antd';

import { createFactory } from '../util';

const BorderBeamHOC: typeof BorderBeam & {
  defaultProps?: Partial<BorderBeamProps>;
  override?: (props: Partial<BorderBeamProps>) => Partial<BorderBeamProps>;
} = createFactory<BorderBeamProps>(BorderBeam, {});

BorderBeamHOC.displayName = 'BorderBeam';

export default BorderBeamHOC;
