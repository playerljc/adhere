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
    cascadeParams: object;
    onDataSourceChange: (dataSource: D, extra: {
        type: 'paging';
        info: {
            page: number;
            limit: number;
        } | {
            pid: number | string | symbol;
        };
    }) => void;
};
export type SearchFactory<T, H> = (params: {
    override: T;
    sage: any;
    responseBusiness?: {
        codeKey: string;
        codeSuccess: string | number;
        codeSuccessKey: string | number;
        dataKey: string;
        messageKey: string;
    };
    defaultResult?: any;
}) => H;
export type SuspenseProps = Omit<SuspenseSyncProps, 'isEmpty'> & {
    isEmpty: (data: any) => boolean;
    emptyComponent: any;
};
export type SuspenseComponentProps<T> = T & {
    suspenseProps: Omit<SuspenseProps, 'data'>;
};
export interface CreateServiceParams {
    serviceName: string;
    dictName: string;
    responseBusiness?: XhrResponseBusiness;
    defaultResult?: Record<string, any>;
}
export interface XhrResponseBusiness {
    codeKey: string;
    codeSuccess: number;
    codeSuccessKey: number;
    dataKey: string;
    messageKey: string;
}
