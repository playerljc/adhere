/**
 * ArrayBuffer 编码为 Base64 字符串
 * @param {ArrayBuffer} buffer - 要编码的 ArrayBuffer
 * @returns {string} Base64 编码的字符串
 */
export function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);

  // 使用 String.fromCharCode 将字节转换为一个长的二进制字符串
  // 注意：这里的 charCodeAt 必须是单字节安全的 (适用于 Base64 所依赖的 ASCII/Latin-1 范围)
  const binaryString = String.fromCharCode.apply(null, bytes);

  // 使用 btoa 进行 Base64 编码
  return window.btoa(binaryString);
}

/**
 * Base64 字符串解码为 ArrayBuffer
 * @param {string} base64 - Base64 编码的字符串
 * @returns {ArrayBuffer} 解码后的 ArrayBuffer
 */
export function base64ToArrayBuffer(base64) {
  // 使用 atob 进行 Base64 解码，得到原始二进制字符串
  const binaryString = window.atob(base64);
  const len = binaryString.length;

  // 创建一个新的 ArrayBuffer 来存储解码后的数据
  const buffer = new ArrayBuffer(len);
  const bytes = new Uint8Array(buffer);

  // 将二进制字符串中的每个字符的编码 (0-255) 写入 Uint8Array
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return buffer;
}
