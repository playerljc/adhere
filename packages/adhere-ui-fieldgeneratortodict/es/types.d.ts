import type { SuspenseSyncProps } from '@baifendian/adhere-ui-suspense/es/types';
export interface DictRefreshWrapperFunction {
    refresh(): any;
}
export type UseDictParams<D> = {
    dictName: string;
    cascadeParams?: object;
    onDataSourceChange?: (dataSource: D, extra?: {
        type: 'paging';
        info: {
            page: number;
            limit: number;
        } | {
            pid: number | string | symbol;
        };
    }) => void;
};
export type DictComponentProps<T, D> = Omit<T, 'options' | 'dataSource' | 'treeData' | 'items'> & {
    cascadeParams?: object;
    onDataSourceChange?: (dataSource: D, extra?: {
        type: 'paging';
        info: {
            page: number;
            limit: number;
        } | {
            pid: number | string | symbol;
        };
    }) => void;
};
export type SuspenseProps = Omit<SuspenseSyncProps, 'isEmpty'> & {
    isEmpty: (data: any) => boolean;
    emptyComponent: any;
};
export type SuspenseComponentProps<T> = T & {
    suspenseProps: Omit<SuspenseProps, 'data'>;
};
