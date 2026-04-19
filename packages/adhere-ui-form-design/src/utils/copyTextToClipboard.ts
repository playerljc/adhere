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
export async function copyTextToClipboard(
  text: string,
  options?: CopyTextToClipboardOptions,
): Promise<boolean> {
  const rejectWhitespaceOnly = options?.rejectWhitespaceOnly !== false;
  if (rejectWhitespaceOnly && (text == null || /^\s*$/.test(String(text)))) {
    return false;
  }

  const payload = String(text);

  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(payload);
      return true;
    }
  } catch {
    // fall through to legacy
  }

  try {
    const ta = document.createElement('textarea');
    ta.value = payload;
    ta.setAttribute('readonly', 'readonly');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}
