export namespace fetchList {
    function call(): Promise<unknown>;
    function defaultResult(): {
        total: number;
        list: never[];
    };
}
declare namespace _default {
    const codeKey: string;
    const codeSuccessKey: number;
    const dataKey: string;
    const messageKey: string;
}
export default _default;
