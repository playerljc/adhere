declare const Listener: {
    (e: any, _history: any): void;
    getCode(): (() => void) | undefined;
};
export default Listener;
