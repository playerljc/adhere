export declare class Memo {
    memo: {
        path: string;
        components: any;
    }[];
    isEmpty(): boolean;
    add(path: string, components: any): void;
    findByPath(path: any): {
        path: string;
        components: any;
    } | undefined;
    findIndexByPath(path: any): number;
    deleteByIndex(index: any): {
        path: string;
        components: any;
    }[];
}
declare const _default: {
    create(): Memo;
};
export default _default;
