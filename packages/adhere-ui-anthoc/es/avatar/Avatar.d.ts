import { Avatar } from 'antd';
import type { AvatarProps } from 'antd';
declare const AvatarHOC: typeof Avatar & {
    defaultProps?: Partial<AvatarProps>;
    override?: (props: Partial<AvatarProps>) => Partial<AvatarProps>;
};
export default AvatarHOC;
