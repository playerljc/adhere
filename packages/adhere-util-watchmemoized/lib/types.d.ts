export interface IGetValueFun {
    (): any;
}
export interface ISetValueFun {
    (value: any): void;
}
export interface ICreateRefFun {
    (defaultVal?: any): [IGetValueFun, ISetValueFun, Symbol];
}
export interface ICompareModeFun {
    (oldValue: any, newValue: any): boolean;
}
export interface ICompareConfig {
    property: Symbol;
    mode: 'deep' | 'light' | ICompareModeFun;
}
export interface IWatchRaceFun {
    (handler: Function, depends: Array<Symbol | ICompareConfig>): Function;
}
export interface IWatchAllFun extends IWatchRaceFun {
}
export interface ICreateMemoFun {
    (handler: Function, stackMaxSize?: number): Function;
}
export interface IWatchCreateOnFun {
    (expression: string, handler: Function): void;
}
export interface IWatchCreateRemoveFun {
    (expression: string, handler: Function): void;
}
export interface IWatchCreateFun {
    (srcObj: object | Array<any>, listeners: object): {
        value: object | null;
        on: IWatchCreateOnFun;
        remove: IWatchCreateRemoveFun;
    };
}
export interface IWatchMemoized {
    createRef: ICreateRefFun;
    memoized: {
        watch: {
            all: IWatchAllFun;
            race: IWatchRaceFun;
        };
        createMemoFun: ICreateMemoFun;
    };
    watch: {
        create: IWatchCreateFun;
    };
}
