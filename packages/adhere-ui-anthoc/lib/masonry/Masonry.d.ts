import { Masonry } from 'antd';
import type { MasonryProps } from 'antd';
declare const MasonryHOC: typeof Masonry & {
    defaultProps?: Partial<MasonryProps>;
    override?: (props: Partial<MasonryProps>) => Partial<MasonryProps>;
};
export default MasonryHOC;
