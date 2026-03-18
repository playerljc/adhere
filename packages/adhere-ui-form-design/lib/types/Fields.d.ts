import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignValue } from './Design';
export interface InternalTableGridLayout extends TableGridLayoutProps {
    id: string;
    children?: DesignValue[];
}
