import sha256 from 'crypto-js/sha256';
import stableStringify from 'json-stable-stringify';


// 类型定义
interface NormalizedHeaders {
  [key: string]: string;
}

interface GenerateCacheKeyParams {
  url: string;
  method: string;
  body?: FormData | object | string | number | boolean | null | undefined;
  headers?: Record<string, string | number | boolean> | null | undefined;
}

type CacheKeyBody = FormData | object | string | number | boolean | null | undefined;
type CacheKeyHeaders = Record<string, string | number | boolean> | null | undefined;

/**
 * 将消息转换为 SHA-256 哈希值
 * @param message 要哈希的消息
 * @returns 十六进制格式的哈希字符串
 */
async function digestMessage(message: string): Promise<string> {
  // 使用 crypto-js 进行 SHA-256 哈希
  const hashWordArray = sha256(message);
  // 将 WordArray 转换为十六进制字符串
  return hashWordArray.toString();
}

/**
 * 将 Blob 转换为 Base64 字符串
 * @param blob 要转换的 Blob 对象
 * @returns Base64 编码的字符串
 */
async function blobToBase64(blob: Blob): Promise<string> {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return await new Promise<string>((resolve, reject) => {
    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read blob as data URL'));
      }
    };
    reader.onerror = () => {
      reject(reader.error || new Error('Failed to read blob'));
    };
  });
}

/**
 * 将 UTF-8 字符串安全地编码为 Base64（兼容超出 Latin1 的 Unicode）
 */
function utf8ToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * 将请求体编码为 Base64 字符串
 * @param body 要编码的请求体
 * @returns Base64 编码的字符串
 */
async function base64Encode(body: CacheKeyBody): Promise<string> {
  let base64Body: string;
  if (body instanceof FormData) {
    const entries = await Promise.all(
      Array.from(body.entries())
        .sort(([keyPrev], [keyNext]) => keyPrev.localeCompare(keyNext))
        .map(async ([key, value]) => {
          if (value instanceof Blob) {
            return [key, await blobToBase64(value)] as [string, string];
          }
          return [key, value] as [string, string | File];
        }),
    );
    const objectBody = Object.fromEntries(entries);
    base64Body = utf8ToBase64(JSON.stringify(objectBody));
  } else if (body && typeof body === 'object') {
    base64Body = utf8ToBase64(JSON.stringify(body));
  } else {
    base64Body = utf8ToBase64(String(body ?? ''));
  }
  return base64Body;
}
/**
 * 规范化请求头，将所有键转换为小写，值转换为小写字符串
 * @param headers 原始请求头对象
 * @returns 规范化后的请求头对象
 */
export function normalizeHeaders(headers: CacheKeyHeaders = {}): NormalizedHeaders {
  const normalized: NormalizedHeaders = {};

  if (!headers) {
    return normalized;
  }

  for (const key of Object.keys(headers)) {
    normalized[key.toLowerCase()] = String(headers[key]).trim().toLowerCase();
  }
  return normalized;
}

/**
 * 生成缓存键
 * @param params 包含 URL、方法、请求体和请求头的参数对象
 * @returns 生成的缓存键字符串
 */
export async function generateCacheKey({
  url,
  method,
  body,
  headers,
}: GenerateCacheKeyParams): Promise<string> {
  const { origin, pathname, search } = new URL(url);

  let payload = '';

  if (search) {
    payload += search;
  }

  if (body !== null && body !== undefined) {
    payload += await base64Encode(body);
  }

  if (headers) {
    payload += stableStringify(normalizeHeaders(headers));
  }

  const hash = await digestMessage(payload);

  return [
    origin.replaceAll(':', '_').replaceAll('/', ''),
    pathname.replaceAll(/(^\/|\/$)/g, ''),
    method,
    hash,
  ]
    .filter(Boolean)
    .join('/');
}

/**
 * 处理baseUrl和url的拼接
 * @param baseUrl - 基础URL
 * @param path - 请求URL
 * @returns 处理后的完整URL
 */
export function combineUrls(baseUrl: string = '', path: string = ''): string {
  if (!baseUrl) return path;
  if (!path || typeof path !== 'string') return baseUrl;

  // 处理重复或缺失的 `/`
  const slash = baseUrl.endsWith('/') || path.startsWith('/') ? '' : '/';
  return `${baseUrl}${slash}${path}`;
}
