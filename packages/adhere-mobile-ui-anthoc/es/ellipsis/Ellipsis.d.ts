import { Ellipsis } from 'antd-mobile';
import type { EllipsisProps } from 'antd-mobile';
declare const EllipsisHOC: typeof Ellipsis & {
    defaultProps?: Partial<EllipsisProps>;
    override?: (props: Partial<EllipsisProps>) => Partial<EllipsisProps>;
};
export default EllipsisHOC;
