import type { CSSProperties, FC } from 'react';
import type { DesignValue } from '../../../types';
export interface InternalFlexLayoutProps {
    id?: string;
    style?: CSSProperties;
    children?: DesignValue[];
    direction?: 'horizontal' | 'vertical';
    wrap?: boolean;
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    alignContent?: CSSProperties['alignContent'];
    gap?: CSSProperties['gap'];
}
/**
 * InternalFlexLayout
 */
declare const InternalFlexLayout: FC<InternalFlexLayoutProps>;
export default InternalFlexLayout;
