import { BorderBeam } from 'antd';
import type { BorderBeamProps } from 'antd';
declare const BorderBeamHOC: typeof BorderBeam & {
    defaultProps?: Partial<BorderBeamProps>;
    override?: (props: Partial<BorderBeamProps>) => Partial<BorderBeamProps>;
};
export default BorderBeamHOC;
