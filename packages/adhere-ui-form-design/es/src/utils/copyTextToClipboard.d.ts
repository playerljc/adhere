export interface CopyTextToClipboardOptions {
    /**
     * 是否拒绝复制空串（仅含空白视为空），默认 true
     */
    rejectWhitespaceOnly?: boolean;
}
/**
 * 将文本写入系统剪贴板：优先 `navigator.clipboard.writeText`，不支持或失败时降级为 `textarea` + `document.execCommand('copy')`。
 *
 * @param text 要复制的完整字符串
 * @param options 行为选项
 * @returns 是否复制成功
 */
export declare function copyTextToClipboard(text: string, options?: CopyTextToClipboardOptions): Promise<boolean>;
