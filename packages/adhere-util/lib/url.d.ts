import { IUrlConfig } from './types';
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
};
export default methods;
