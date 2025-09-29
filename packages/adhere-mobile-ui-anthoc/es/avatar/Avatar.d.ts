import { Avatar } from 'antd-mobile';
import type { AvatarProps } from 'antd-mobile';
declare const AvatarHOC: typeof Avatar & {
    defaultProps?: Partial<AvatarProps>;
    override?: (props: Partial<AvatarProps>) => Partial<AvatarProps>;
};
export default AvatarHOC;
