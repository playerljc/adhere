import { CapsuleTabs } from 'antd-mobile';
import type { CapsuleTabsProps } from 'antd-mobile';
declare const CapsuleTabsHOC: typeof CapsuleTabs & {
    defaultProps?: Partial<CapsuleTabsProps>;
    override?: (props: Partial<CapsuleTabsProps>) => Partial<CapsuleTabsProps>;
};
export default CapsuleTabsHOC;
