import { IUrlConfig } from './types';
export declare const defaultConfig: IUrlConfig;
declare const methods: {
    /**
     * parse
     * @description - query参数转换成obj
     * @param path
     * @param config
     * @return object
     */
    parse(path?: string, config?: IUrlConfig): object | null;
    /**
     * stringify
     * @description - 对象转换成query参数
     * @param record
     * @param config
     * @return string
     */
    stringify(record: object, config?: IUrlConfig): string;
    /**
     * getPathName
     * @description 不同路由模式下获取pathname的方法
     * @return {string}
     */
    getPathName(publicPath?: string, router?: 'hash' | 'browser'): string;
    /**
     * getSearch
     * @description 不同路由模式下获取search的方法
     * @return {string}
     */
    getSearch(router?: 'hash' | 'browser'): string | undefined;
    /**
     * getFullPath
     * @return {`${string}${string}`}
     */
    getFullPath(): string;
};
export default methods;
