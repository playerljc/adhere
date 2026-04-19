export interface DownloadTextAsFileOptions {
  /**
   * Blob MIME，默认 `text/plain;charset=utf-8`
   */
  mimeType?: string;
  /**
   * 是否在触发下载后 `revokeObjectURL`，默认 true
   */
  revokeObjectUrl?: boolean;
}

/**
 * 在浏览器中触发「文本内容」的文件下载（生成 Blob + 临时 `<a download>`）。
 *
 * @param content 文件完整文本内容
 * @param fileName 下载文件名（含扩展名，如 `design.json`）
 * @param options MIME 等选项
 */
export function downloadTextAsFile(
  content: string,
  fileName: string,
  options?: DownloadTextAsFileOptions,
): void {
  if (typeof document === 'undefined' || typeof URL === 'undefined' || typeof Blob === 'undefined') {
    return;
  }

  const mimeType = options?.mimeType ?? 'text/plain;charset=utf-8';
  const revoke = options?.revokeObjectUrl !== false;

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.rel = 'noopener';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  if (revoke) {
    URL.revokeObjectURL(url);
  }
}
