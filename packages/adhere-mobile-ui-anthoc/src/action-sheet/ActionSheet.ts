import { ActionSheet } from 'antd-mobile';
import type { ActionSheetProps } from 'antd-mobile';

import { createFactory } from '../util';

const ActionSheetHOC: typeof ActionSheet & {
  defaultProps?: Partial<ActionSheetProps>;
} = createFactory<ActionSheetProps>(ActionSheet, {});

ActionSheetHOC.displayName = 'ActionSheet';

export default ActionSheetHOC;
