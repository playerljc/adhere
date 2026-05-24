import type { GlobalToken } from 'antd/es/theme/interface';
import type { InternalTagProps, TagResolvedColors } from './types';
export declare function hasCustomTagColors(props: Pick<InternalTagProps, 'textColor' | 'bgColor' | 'borderColor'>): boolean;
export declare function resolveTagColors(props: Pick<InternalTagProps, 'type' | 'textColor' | 'bgColor' | 'borderColor'>, token: GlobalToken): {
    colors: TagResolvedColors;
    useCustomColors: boolean;
};
