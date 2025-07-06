declare const Listener: {
    (e: any, _history: any): void;
    getCode(): (() => void) | undefined;
};
export declare function getTop(): string;
export default Listener;
