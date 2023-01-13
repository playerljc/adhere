export namespace fetchList {
    export function call(): Promise<unknown>;
    export function defaultResult(): {
        total: number;
        list: never[];
    };
}
declare namespace _default {
    export const codeKey: string;
    export const codeSuccessKey: number;
    export const dataKey: string;
    export const messageKey: string;
}
export default _default;
