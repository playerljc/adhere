/**
 * 加密工具类
 * @description 提供各种加密和解密功能
 */
declare const EncryptUtil: {
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
    base64Encode(str: string): string;
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
    base64Decode(base64Str: string): string;
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
    chineseToUTF8(chineseStr?: string): string;
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
    UTF8ToChinese(utf8Str: string): string;
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
    chineseToASC2(chineseStr?: string, hasNoTransformationLettersAndNumber?: boolean): string;
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
    ASC2ToChinese(asc2Str?: string): string;
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
    hashEncryptToMD5(value?: string): string;
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
    hashEncryptToSHA1(value?: string): string;
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
    hashEncryptToSHA256(value?: string): string;
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
    hashEncryptToSHA512(value?: string): string;
    /**
     * SHA3-64 加密
     * @description 使用 SHA3-64 算法进行哈希加密
     * @param value - 要加密的值
     * @returns SHA3-64 加密后的字符串
     */
    hashEncryptToSHA3_64(value?: string): string;
    /**
     * SHA3-224 加密
     * @description 使用 SHA3-224 算法进行哈希加密
     * @param value - 要加密的值
     * @returns SHA3-224 加密后的字符串
     */
    hashEncryptToSHA3_224(value?: string): string;
    /**
     * SHA3-256 加密
     * @description 使用 SHA3-256 算法进行哈希加密
     * @param value - 要加密的值
     * @returns SHA3-256 加密后的字符串
     */
    hashEncryptToSHA3_256(value?: string): string;
    /**
     * SHA3-384 加密
     * @description 使用 SHA3-384 算法进行哈希加密
     * @param value - 要加密的值
     * @returns SHA3-384 加密后的字符串
     */
    hashEncryptToSHA3_348(value?: string): string;
    /**
     * SHA3-512 加密
     * @description 使用 SHA3-512 算法进行哈希加密
     * @param value - 要加密的值
     * @returns SHA3-512 加密后的字符串
     */
    hashEncryptToSHA3_512(value?: string): string;
    /**
     * RIPEMD160 加密
     * @description 使用 RIPEMD160 算法进行哈希加密
     * @param value - 要加密的值
     * @returns RIPEMD160 加密后的字符串
     */
    hashEncryptToRIPEMD160(value?: string): string;
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
    symmetricEncryptToAES(value?: string, pwd?: string, options?: any): string;
    /**
     * DES 对称加密
     * @description 使用 DES 算法进行对称加密
     * @param value - 要加密的字符串
     * @param pwd - 密钥
     * @param options - 加密选项
     * @returns 加密后的字符串
     */
    symmetricEncryptToDES(value?: string, pwd?: string, options?: any): string;
    /**
     * RC4 对称加密
     * @description 使用 RC4 算法进行对称加密
     * @param value - 要加密的字符串
     * @param pwd - 密钥
     * @param options - 加密选项
     * @returns 加密后的字符串
     */
    symmetricEncryptToRC4(value?: string, pwd?: string, options?: any): string;
    /**
     * Rabbit 对称加密
     * @description 使用 Rabbit 算法进行对称加密
     * @param value - 要加密的字符串
     * @param pwd - 密钥
     * @param options - 加密选项
     * @returns 加密后的字符串
     */
    symmetricEncryptToRabbit(value?: string, pwd?: string, options?: any): string;
    /**
     * Triple DES 对称加密
     * @description 使用 Triple DES 算法进行对称加密
     * @param value - 要加密的字符串
     * @param pwd - 密钥
     * @param options - 加密选项
     * @returns 加密后的字符串
     */
    symmetricEncryptToTripleDes(value?: string, pwd?: string, options?: any): string;
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
    symmetricDecryptToAES(value?: string, pwd?: string, options?: any): string;
    /**
     * DES 对称解密
     * @description 使用 DES 算法进行对称解密
     * @param value - 要解密的字符串
     * @param pwd - 密钥
     * @param options - 解密选项
     * @returns 解密后的字符串
     */
    symmetricDecryptToDES(value?: string, pwd?: string, options?: any): string;
    /**
     * RC4 对称解密
     * @description 使用 RC4 算法进行对称解密
     * @param value - 要解密的字符串
     * @param pwd - 密钥
     * @param options - 解密选项
     * @returns 解密后的字符串
     */
    symmetricDecryptToRC4(value?: string, pwd?: string, options?: any): string;
    /**
     * Rabbit 对称解密
     * @description 使用 Rabbit 算法进行对称解密
     * @param value - 要解密的字符串
     * @param pwd - 密钥
     * @param options - 解密选项
     * @returns 解密后的字符串
     */
    symmetricDecryptToRabbit(value?: string, pwd?: string, options?: any): string;
    /**
     * Triple DES 对称解密
     * @description 使用 Triple DES 算法进行对称解密
     * @param value - 要解密的字符串
     * @param pwd - 密钥
     * @param options - 解密选项
     * @returns 解密后的字符串
     */
    symmetricDecryptToTripleDes(value?: string, pwd?: string, options?: any): string;
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
    dataUrlToBlob(dataUrl: string): Blob | null;
};
export default EncryptUtil;
