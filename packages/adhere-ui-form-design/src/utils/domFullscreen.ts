type WritableDocument = Document & {
  exitFullscreen?: () => Promise<void>;
  webkitExitFullscreen?: () => Promise<void> | void;
  mozCancelFullScreen?: () => Promise<void> | void;
  msExitFullscreen?: () => Promise<void> | void;
  fullscreenElement?: Element | null;
  webkitFullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  msFullscreenElement?: Element | null;
};

type WritableElement = Element & {
  requestFullscreen?: () => Promise<void>;
  webkitRequestFullscreen?: (allowKeyboardInput?: number) => void;
  mozRequestFullScreen?: () => Promise<void> | void;
  msRequestFullscreen?: () => void;
};

function getRequestFullscreenFn(el: Element): (() => void | Promise<void>) | undefined {
  const e = el as WritableElement;
  if (typeof e.requestFullscreen === 'function') return () => e.requestFullscreen!();
  if (typeof e.webkitRequestFullscreen === 'function') {
    return () => e.webkitRequestFullscreen!(1);
  }
  if (typeof e.mozRequestFullScreen === 'function') return () => e.mozRequestFullScreen!();
  if (typeof e.msRequestFullscreen === 'function') return () => e.msRequestFullscreen!();
  return undefined;
}

function getExitFullscreenFn(doc: Document): (() => void | Promise<void>) | undefined {
  const d = doc as WritableDocument;
  if (typeof d.exitFullscreen === 'function') return () => d.exitFullscreen!();
  if (typeof d.webkitExitFullscreen === 'function') return () => d.webkitExitFullscreen!();
  if (typeof d.mozCancelFullScreen === 'function') return () => d.mozCancelFullScreen!();
  if (typeof d.msExitFullscreen === 'function') return () => d.msExitFullscreen!();
  return undefined;
}

/**
 * 当前处于全屏模式的节点（含浏览器前缀字段）。
 */
export function getFullscreenElement(): Element | null {
  if (typeof document === 'undefined') return null;
  const d = document as WritableDocument;
  return (
    d.fullscreenElement ??
    d.webkitFullscreenElement ??
    d.mozFullScreenElement ??
    d.msFullscreenElement ??
    null
  );
}

/**
 * 判断指定元素是否为当前全屏元素。
 */
export function isElementInFullscreen(el: Element | null | undefined): boolean {
  if (!el) return false;
  return getFullscreenElement() === el;
}

/**
 * 对指定元素请求浏览器原生全屏。
 */
export async function requestElementFullscreen(el: Element): Promise<void> {
  const fn = getRequestFullscreenFn(el);
  if (!fn) return;
  await Promise.resolve(fn());
}

/**
 * 退出文档全屏。
 */
export async function exitDocumentFullscreen(): Promise<void> {
  if (typeof document === 'undefined') return;
  const fn = getExitFullscreenFn(document);
  if (!fn) return;
  await Promise.resolve(fn());
}
