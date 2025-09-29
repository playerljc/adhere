import { ActionSheet } from 'antd-mobile';
import type { ActionSheetProps } from 'antd-mobile';
declare const ActionSheetHOC: typeof ActionSheet & {
    defaultProps?: Partial<ActionSheetProps>;
    override?: (props: Partial<ActionSheetProps>) => Partial<ActionSheetProps>;
};
export default ActionSheetHOC;
