export declare class Memo {
    memo: {
        path: string;
        components: any;
    }[];
    isEmpty(): boolean;
    add(path: string, components: any): void;
    findByPath(path: string): {
        path: string;
        components: any;
    } | undefined;
    findIndexByPath(path: string): number;
    deleteByPath(_path: string): void;
    clearAll(): void;
    deleteByIndex(index: number): {
        path: string;
        components: any;
    }[];
}
declare const _default: {
    create(): Memo;
};
export default _default;
