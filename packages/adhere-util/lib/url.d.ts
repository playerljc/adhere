declare const _default: {
    /**
     * parse
     * @description - 参数转换成Obj
     * @param path
     * @return object
     */
    parse(path?: string | undefined): object;
    /**
     * stringify
     * @description - 对象转换成get参数
     * @return {String}
     * @param record
     */
    stringify(record: object): string;
};
export default _default;
