import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignProps, DesignValue } from './Design';
import type { Terminal } from './types';
export interface InternalTableGridLayout extends TableGridLayoutProps {
    terminal: Terminal;
    children?: DesignValue[];
    items: DesignProps['items'];
    activeFieldId: string | null | undefined;
    onActiveFieldById: (id: string) => void;
}
