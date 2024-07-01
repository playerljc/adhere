declare const EncryptUtil: {
    /**
     * base64Encode
     * @description base64编码
     * @param str
     * @return 编码后的base64
     */
    base64Encode(str: string): any;
    /**
     * base64Decode
     * @description base64解码
     * @param _base64Str
     * @return 解码后的字符串
     */
    base64Decode(_base64Str: string): string;
    /**
     * chineseToUTF8
     * @description 中文字符串转UTF8
     * @param _chineseStr 中文字符串
     * @return utf-8字符串
     */
    chineseToUTF8(_chineseStr?: string): string;
    /**
     * UTF8ToChinese
     * @description UTF8转换成中文字符串
     * @param _utf8Str uf8字符串
     * @return 中文字符串
     */
    UTF8ToChinese(_utf8Str: string): string;
    /**
     * chineseToASC2
     * @description 中文转ASC2码
     * @param _chineseStr 中文字符串
     * @param hasNoTransformationLettersAndNumber 不转换字母和数字
     * @return ASC2字符串
     */
    chineseToASC2(_chineseStr?: string, hasNoTransformationLettersAndNumber?: boolean): string;
    /**
     * ASC2ToChinese
     * @description ASC2转中文
     * @param _asc2Str ASC2字符串
     * @return 中文字符串
     */
    ASC2ToChinese(_asc2Str?: string): string;
    /**
     * hashEncryptToMD5
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToMD5(_value?: string): string;
    /**
     * hashEncryptToSHA1
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToSHA1(_value?: string): string;
    /**
     * hashEncryptToSHA256
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToSHA256(_value?: string): string;
    /**
     * hashEncryptToSHA512
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToSHA512(_value?: string): string;
    /**
     * hashEncryptToSHA3_64
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToSHA3_64(_value?: string): string;
    /**
     * hashEncryptToSHA3_224
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToSHA3_224(_value?: string): string;
    /**
     * hashEncryptToSHA3_256
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToSHA3_256(_value?: string): string;
    /**
     * hashEncryptToSHA3_348
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToSHA3_348(_value?: string): string;
    /**
     * hashEncryptToSHA3_512
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToSHA3_512(_value?: string): string;
    /**
     * hashEncryptToRIPEMD160
     * @description MD5加密 哈希加密算法
     * @param _value
     */
    hashEncryptToRIPEMD160(_value?: string): string;
    /**
     * symmetricEncryptToAES
     * @description 对称加密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @param options
     * @return 加密后的字符串
     */
    symmetricEncryptToAES(_value?: string, _pwd?: string, options?: any): any;
    /**
     * symmetricEncryptToDES
     * @description 对称加密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @param options
     * @return 加密后的字符串
     */
    symmetricEncryptToDES(_value?: string, _pwd?: string, options?: any): any;
    /**
     * symmetricEncryptToRC4
     * @description 对称加密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @param options
     * @return 加密后的字符串
     */
    symmetricEncryptToRC4(_value?: string, _pwd?: string, options?: any): any;
    /**
     * symmetricEncryptToRabbit
     * @description 对称加密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @param options
     * @return 加密后的字符串
     */
    symmetricEncryptToRabbit(_value?: string, _pwd?: string, options?: any): any;
    /**
     * symmetricEncryptToTripleDes
     * @description 对称加密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @param options
     * @return 加密后的字符串
     */
    symmetricEncryptToTripleDes(_value?: string, _pwd?: string, options?: any): any;
    /**
     * symmetricDecryptToAES
     * @description 对称解密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @return 解密后的字符串
     */
    symmetricDecryptToAES(_value?: string, _pwd?: string, options?: any): any;
    /**
     * symmetricDecryptToDES
     * @description 对称解密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @return 解密后的字符串
     */
    symmetricDecryptToDES(_value?: string, _pwd?: string, options?: any): any;
    /**
     * symmetricDecryptToRC4
     * @description 对称解密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @return 解密后的字符串
     */
    symmetricDecryptToRC4(_value?: string, _pwd?: string, options?: any): any;
    /**
     * symmetricDecryptToRabbit
     * @description 对称解密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @return 解密后的字符串
     */
    symmetricDecryptToRabbit(_value?: string, _pwd?: string, options?: any): any;
    /**
     * symmetricDecryptToTripleDes
     * @description 对称解密算法
     * @param _value 加密的字符串
     * @param _pwd 密钥
     * @return 解密后的字符串
     */
    symmetricDecryptToTripleDes(_value?: string, _pwd?: string, options?: any): any;
    /**
     * dataUrlToBlob
     * @description base64转换成Blob
     * @param {string} dataUrl base64
     * @return {Blob}
     */
    dataUrlToBlob(dataUrl: string): Blob | null;
};
export default EncryptUtil;
