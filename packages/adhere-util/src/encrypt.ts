import CryptoJS from 'crypto-js';

/**
 * 哈希加密
 * @description MD5 等哈希加密算法
 * @param type - 加密类型数组
 * @param value - 要加密的值
 * @returns 加密后的字符串
 */
function hashEncrypt(type: string[], value: string = ''): string {
  let result: any = '';

  if (type[0] === 'SHA3') {
    result = (CryptoJS as any)['SHA3'](value, { outputLength: Number(type[1]) });
  } else {
    const hasher = (CryptoJS as any)[type[0]];
    if (typeof hasher === 'function') {
      result = hasher(value);
    } else {
      return '';
    }
  }

  try {
    return typeof result?.toString === 'function' ? result.toString() : String(result ?? '');
  } catch {
    return '';
  }
}

/**
 * 对称加密算法
 * @param type - 加密类型
 * @param pwd - 密钥
 * @param value - 要加密的值
 * @param options - 加密选项
 * @returns 加密的结果字符串
 */
function symmetricEncrypt(type: string, pwd: string, value: string, options?: any): string {
  const cleanValue = (value || '').trim();
  const cleanPwd = (pwd || '').trim();
  const cleanType = (type || '').trim();

  if (!cleanValue || !cleanPwd || !cleanType) {
    return '';
  }

  const helper = (CryptoJS as any)[cleanType];
  if (!helper || typeof helper.encrypt !== 'function') return '';

  try {
    return helper.encrypt(cleanValue, cleanPwd, options).toString();
  } catch {
    return '';
  }
}

/**
 * 对称解密算法
 * @param type - 解密类型
 * @param pwd - 密钥
 * @param value - 要解密的值
 * @param options - 解密选项
 * @returns 解密后的结果字符串
 */
function symmetricDecrypt(type: string, pwd: string, value: string, options?: any): string {
  const cleanValue = (value || '').trim();
  const cleanPwd = (pwd || '').trim();
  const cleanType = (type || '').trim();

  if (!cleanValue || !cleanPwd || !cleanType) {
    return '';
  }

  const helper = (CryptoJS as any)[cleanType];
  if (!helper || typeof helper.decrypt !== 'function') return '';

  try {
    return helper.decrypt(cleanValue, cleanPwd, options).toString(CryptoJS.enc.Utf8);
  } catch {
    return '';
  }
}

/**
 * 加密工具类
 * @description 提供各种加密和解密功能
 */
const EncryptUtil = {
  /**
   * Base64 编码
   * @description 将字符串进行 Base64 编码
   * @param str - 要编码的字符串
   * @returns 编码后的 Base64 字符串
   * @example
   * ```typescript
   * base64Encode('Hello World') // 返回 "SGVsbG8gV29ybGQ="
   * ```
   */
  base64Encode(str: string): string {
    if (!str) return '';

    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str.trim()));
  },

  /**
   * Base64 解码
   * @description 将 Base64 字符串解码为原始字符串
   * @param base64Str - 要解码的 Base64 字符串
   * @returns 解码后的字符串
   * @example
   * ```typescript
   * base64Decode('SGVsbG8gV29ybGQ=') // 返回 "Hello World"
   * ```
   */
  base64Decode(base64Str: string): string {
    if (!base64Str) return '';

    let base64Array = base64Str.split('\n');
    let result = '';

    for (let i = 0; i < base64Array.length; i++) {
      try {
        const words = CryptoJS.enc.Base64.parse(base64Array[i]);
        result += words.toString(CryptoJS.enc.Utf8);
        if (i !== 0) {
          result = `\n${result}`;
        }
      } catch (error) {
        console.error('Base64 decode error:', error);
        return '';
      }
    }

    return result;
  },

  /**
   * 中文字符串转 UTF8
   * @description 将中文字符串转换为 UTF8 编码
   * @param chineseStr - 中文字符串
   * @returns UTF8 编码的字符串
   * @example
   * ```typescript
   * chineseToUTF8('你好世界') // 返回 UTF8 编码字符串
   * ```
   */
  chineseToUTF8(chineseStr: string = ''): string {
    if (!chineseStr) return '';

    return chineseStr.replace(/[^\u0000-\u00FF]/g, ($0) =>
      escape($0).replace(/(%u)(\w{4})/gi, '&#x$2;'),
    );
  },

  /**
   * UTF8 转换成中文字符串
   * @description 将 UTF8 编码字符串转换为中文字符串
   * @param utf8Str - UTF8 编码字符串
   * @returns 中文字符串
   * @example
   * ```typescript
   * UTF8ToChinese('&#x4f60;&#x597d;&#x4e16;&#x754c;') // 返回 "你好世界"
   * ```
   */
  UTF8ToChinese(utf8Str: string): string {
    if (!utf8Str) return '';

    return unescape(utf8Str.replace(/&#x/g, '%u').replace(/;/g, ''));
  },

  /**
   * 中文转 ASCII 码
   * @description 将中文字符串转换为 ASCII 码
   * @param chineseStr - 中文字符串
   * @param hasNoTransformationLettersAndNumber - 是否不转换字母和数字，默认为 true
   * @returns ASCII 码字符串
   * @example
   * ```typescript
   * chineseToASC2('你好') // 返回 "\u4f60\u597d"
   * ```
   */
  chineseToASC2(
    chineseStr: string = '',
    hasNoTransformationLettersAndNumber: boolean = true,
  ): string {
    if (!chineseStr) return '';

    const character = chineseStr.trim().split('');
    let ascii = '';

    for (let i = 0; i < character.length; i++) {
      const code = Number(character[i].charCodeAt(0));
      if (!hasNoTransformationLettersAndNumber || code > 127) {
        let charAscii = code.toString(16);
        charAscii = String('0000').substring(charAscii.length, 4) + charAscii;
        ascii += '\\u' + charAscii;
      } else {
        ascii += character[i];
      }
    }

    return ascii;
  },

  /**
   * ASCII 转中文
   * @description 将 ASCII 码字符串转换为中文字符串
   * @param asc2Str - ASCII 码字符串
   * @returns 中文字符串
   * @example
   * ```typescript
   * ASC2ToChinese('\\u4f60\\u597d') // 返回 "你好"
   * ```
   */
  ASC2ToChinese(asc2Str: string = ''): string {
    if (!asc2Str) return '';

    const character = asc2Str.trim().split('\\u');
    let native = character[0];

    for (let i = 1; i < character.length; i++) {
      const code = character[i];
      native += String.fromCharCode(parseInt('0x' + code.substring(0, 4), 16));
      if (code.length > 4) {
        native += code.substring(4, code.length);
      }
    }

    return native;
  },

  /**
   * MD5 加密
   * @description 使用 MD5 算法进行哈希加密
   * @param value - 要加密的值
   * @returns MD5 加密后的字符串
   * @example
   * ```typescript
   * hashEncryptToMD5('password') // 返回 MD5 哈希值
   * ```
   */
  hashEncryptToMD5(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['MD5'], value.trim());
  },

  /**
   * SHA1 加密
   * @description 使用 SHA1 算法进行哈希加密
   * @param value - 要加密的值
   * @returns SHA1 加密后的字符串
   * @example
   * ```typescript
   * hashEncryptToSHA1('password') // 返回 SHA1 哈希值
   * ```
   */
  hashEncryptToSHA1(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['SHA1'], value.trim());
  },

  /**
   * SHA256 加密
   * @description 使用 SHA256 算法进行哈希加密
   * @param value - 要加密的值
   * @returns SHA256 加密后的字符串
   * @example
   * ```typescript
   * hashEncryptToSHA256('password') // 返回 SHA256 哈希值
   * ```
   */
  hashEncryptToSHA256(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['SHA256'], value.trim());
  },

  /**
   * SHA512 加密
   * @description 使用 SHA512 算法进行哈希加密
   * @param value - 要加密的值
   * @returns SHA512 加密后的字符串
   * @example
   * ```typescript
   * hashEncryptToSHA512('password') // 返回 SHA512 哈希值
   * ```
   */
  hashEncryptToSHA512(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['SHA512'], value.trim());
  },

  /**
   * SHA3-64 加密
   * @description 使用 SHA3-64 算法进行哈希加密
   * @param value - 要加密的值
   * @returns SHA3-64 加密后的字符串
   */
  hashEncryptToSHA3_64(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['SHA3', '64'], value.trim());
  },

  /**
   * SHA3-224 加密
   * @description 使用 SHA3-224 算法进行哈希加密
   * @param value - 要加密的值
   * @returns SHA3-224 加密后的字符串
   */
  hashEncryptToSHA3_224(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['SHA3', '224'], value.trim());
  },

  /**
   * SHA3-256 加密
   * @description 使用 SHA3-256 算法进行哈希加密
   * @param value - 要加密的值
   * @returns SHA3-256 加密后的字符串
   */
  hashEncryptToSHA3_256(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['SHA3', '256'], value.trim());
  },

  /**
   * SHA3-384 加密
   * @description 使用 SHA3-384 算法进行哈希加密
   * @param value - 要加密的值
   * @returns SHA3-384 加密后的字符串
   */
  hashEncryptToSHA3_348(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['SHA3', '384'], value.trim());
  },

  /**
   * SHA3-512 加密
   * @description 使用 SHA3-512 算法进行哈希加密
   * @param value - 要加密的值
   * @returns SHA3-512 加密后的字符串
   */
  hashEncryptToSHA3_512(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['SHA3', '512'], value.trim());
  },

  /**
   * RIPEMD160 加密
   * @description 使用 RIPEMD160 算法进行哈希加密
   * @param value - 要加密的值
   * @returns RIPEMD160 加密后的字符串
   */
  hashEncryptToRIPEMD160(value: string = ''): string {
    if (!value) return '';

    return hashEncrypt(['RIPEMD160'], value.trim());
  },

  /**
   * AES 对称加密
   * @description 使用 AES 算法进行对称加密
   * @param value - 要加密的字符串
   * @param pwd - 密钥
   * @param options - 加密选项
   * @returns 加密后的字符串
   * @example
   * ```typescript
   * symmetricEncryptToAES('Hello World', 'secretKey') // 返回 AES 加密字符串
   * ```
   */
  symmetricEncryptToAES(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricEncrypt('AES', pwd.trim(), value.trim(), options);
  },

  /**
   * DES 对称加密
   * @description 使用 DES 算法进行对称加密
   * @param value - 要加密的字符串
   * @param pwd - 密钥
   * @param options - 加密选项
   * @returns 加密后的字符串
   */
  symmetricEncryptToDES(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricEncrypt('DES', pwd.trim(), value.trim(), options);
  },

  /**
   * RC4 对称加密
   * @description 使用 RC4 算法进行对称加密
   * @param value - 要加密的字符串
   * @param pwd - 密钥
   * @param options - 加密选项
   * @returns 加密后的字符串
   */
  symmetricEncryptToRC4(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricEncrypt('RC4', pwd.trim(), value.trim(), options);
  },

  /**
   * Rabbit 对称加密
   * @description 使用 Rabbit 算法进行对称加密
   * @param value - 要加密的字符串
   * @param pwd - 密钥
   * @param options - 加密选项
   * @returns 加密后的字符串
   */
  symmetricEncryptToRabbit(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricEncrypt('Rabbit', pwd.trim(), value.trim(), options);
  },

  /**
   * Triple DES 对称加密
   * @description 使用 Triple DES 算法进行对称加密
   * @param value - 要加密的字符串
   * @param pwd - 密钥
   * @param options - 加密选项
   * @returns 加密后的字符串
   */
  symmetricEncryptToTripleDes(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricEncrypt('TripleDes', pwd.trim(), value.trim(), options);
  },

  /**
   * AES 对称解密
   * @description 使用 AES 算法进行对称解密
   * @param value - 要解密的字符串
   * @param pwd - 密钥
   * @param options - 解密选项
   * @returns 解密后的字符串
   * @example
   * ```typescript
   * symmetricDecryptToAES(encryptedString, 'secretKey') // 返回解密后的字符串
   * ```
   */
  symmetricDecryptToAES(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricDecrypt('AES', pwd.trim(), value.trim(), options);
  },

  /**
   * DES 对称解密
   * @description 使用 DES 算法进行对称解密
   * @param value - 要解密的字符串
   * @param pwd - 密钥
   * @param options - 解密选项
   * @returns 解密后的字符串
   */
  symmetricDecryptToDES(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricDecrypt('DES', pwd.trim(), value.trim(), options);
  },

  /**
   * RC4 对称解密
   * @description 使用 RC4 算法进行对称解密
   * @param value - 要解密的字符串
   * @param pwd - 密钥
   * @param options - 解密选项
   * @returns 解密后的字符串
   */
  symmetricDecryptToRC4(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricDecrypt('RC4', pwd.trim(), value.trim(), options);
  },

  /**
   * Rabbit 对称解密
   * @description 使用 Rabbit 算法进行对称解密
   * @param value - 要解密的字符串
   * @param pwd - 密钥
   * @param options - 解密选项
   * @returns 解密后的字符串
   */
  symmetricDecryptToRabbit(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricDecrypt('Rabbit', pwd.trim(), value.trim(), options);
  },

  /**
   * Triple DES 对称解密
   * @description 使用 Triple DES 算法进行对称解密
   * @param value - 要解密的字符串
   * @param pwd - 密钥
   * @param options - 解密选项
   * @returns 解密后的字符串
   */
  symmetricDecryptToTripleDes(value: string = '', pwd: string = '', options?: any): string {
    if (!value || !pwd) return '';

    return symmetricDecrypt('TripleDes', pwd.trim(), value.trim(), options);
  },

  /**
   * 将 Data URL 转换为 Blob 对象
   * @description 将 Base64 格式的 Data URL 转换为 Blob 对象
   * @param dataUrl - Base64 格式的 Data URL
   * @returns Blob 对象，如果转换失败返回 null
   * @example
   * ```typescript
   * dataUrlToBlob('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==')
   * ```
   */
  dataUrlToBlob(dataUrl: string): Blob | null {
    if (!dataUrl || typeof window === 'undefined') return null;

    const arr = dataUrl.split(','); //分割为数组，分割到第一个逗号
    if (arr.length === 0 || arr.length < 2) return null;

    let mime = arr[0]?.match?.(/:(.*?);/)?.[1]; //获取分割后的base64前缀中的类型
    if (!mime) return null;

    try {
      let bStr = window.atob(arr[1]);
      let n = bStr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bStr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    } catch (error) {
      console.error('Failed to convert data URL to blob:', error);
      return null;
    }
  },
};

export default EncryptUtil;
