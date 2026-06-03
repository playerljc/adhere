type PathInsertRequest = {
    title: string;
    onInsert: (path: string) => void;
};
type BuildMenuConfOptions = {
    requestPathInsert: (req: PathInsertRequest) => void;
};
/** 媒体插入固定为路径方式 */
export declare function buildRichEditorMenuConf(options: BuildMenuConfOptions): Record<string, unknown>;
export {};
