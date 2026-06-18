import { type FC } from 'react';
export interface DataSourceManagerProps {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
declare const DataSourceManager: FC<DataSourceManagerProps>;
export default DataSourceManager;
