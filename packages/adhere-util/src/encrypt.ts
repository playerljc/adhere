import CryptoJS from 'crypto-js';

/**
 * hashEncrypt
 * @description MD5加密 哈希加密算法
 * @param type 加密类型
 * @param value
 */
function hashEncrypt(type: string[], value: string = '') {
  let val = '';

  if (type[0] == 'SHA3') {
    val = CryptoJS['SHA3'](value, { outputLength: type[1] });
  } else {
    val = CryptoJS[type[0]](value);
  }

  return val;
}

/**
 * symmetricEncrypt
 * @description 对称加密算法
 * @param _type
 * @param _pwd
 * @param _value
 * @return 加密的结果字符串
 */
function symmetricEncrypt(_type: string, _pwd: string, _value: string) {
  const value = (_value || '').trim();
  const pwd = (_pwd || '').trim();
  const type = (_type || '').trim();
  return CryptoJS[type].encrypt(value, pwd);
}

/**
 * symmetricDecrypt
 * @description 对称解密算法
 * @return 解密后的结果字符串
 * @param _type
 * @param _pwd
 * @param _value
 */
function symmetricDecrypt(_type: string, _pwd: string, _value: string) {
  const value = (_value || '').trim();
  const pwd = (_pwd || '').trim();
  const type = (_type || '').trim();
  return CryptoJS[type].decrypt(value, pwd).toString(CryptoJS.enc.Utf8);
}

const EncryptUtil = {
  /**
   * base46Encode
   * @description base64编码
   * @param str
   * @return 编码后的base64
   */
  base46Encode(str: string) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse((str || '').trim()));
  },
  /**
   * base64Decode
   * @description base64解码
   * @param _base64Str
   * @return 解码后的字符串
   */
  base64Decode(_base64Str: string) {
    let base64Str: string | string[] = _base64Str || '';
    let result = '';

    base64Str = base64Str.split('\n');
    let words = '';
    for (let i = 0; i < base64Str.length; i++) {
      words = CryptoJS.enc.Base64.parse(base64Str[i]);
      // @ts-ignore
      result += words.toString(CryptoJS.enc.Utf8) + '\n';
    }
    return result;
  },
  /**
   * chineseToUTF8
   * @description 中文字符串转UTF8
   * @param _chineseStr 中文字符串
   * @return utf-8字符串
   */
  chineseToUTF8(_chineseStr: string = '') {
    const chineseStr = (_chineseStr || '').trim();

    return chineseStr.replace(/[^\u0000-\u00FF]/g, ($0) =>
      escape($0).replace(/(%u)(\w{4})/gi, '&#x$2;'),
    );
  },
  /**
   * UTF8ToChinese
   * @description UTF8转换成中文字符串
   * @param _utf8Str uf8字符串
   * @return 中文字符串
   */
  UTF8ToChinese(_utf8Str: string) {
    const utf8Str = _utf8Str || '';

    return unescape(utf8Str.replace(/&#x/g, '%u').replace(/;/g, ''));
  },
  /**
   * chineseToASC2
   * @description 中文转ASC2码
   * @param _chineseStr 中文字符串
   * @param hasNoTransformationLettersAndNumber 不转换字母和数字
   * @return ASC2字符串
   */
  chineseToASC2(_chineseStr: string = '', hasNoTransformationLettersAndNumber: boolean = true) {
    const character = (_chineseStr || '').trim().split('');
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
   * ASC2ToChinese
   * @description ASC2转中文
   * @param _asc2Str ASC2字符串
   * @return 中文字符串
   */
  ASC2ToChinese(_asc2Str: string = '') {
    const character = (_asc2Str || '').trim().split('\\u');
    let native = character[0];
    for (let i = 1; i < character.length; i++) {
      const code = character[i];
      native += String.fromCharCode(parseInt('0x' + code.substring(0, 4)));
      if (code.length > 4) {
        native += code.substring(4, code.length);
      }
    }
    return native;
  },
  /**
   * hashEncryptToMD5
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToMD5(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['MD5'], value);
  },
  /**
   * hashEncryptToSHA1
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToSHA1(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['SHA1'], value);
  },
  /**
   * hashEncryptToSHA256
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToSHA256(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['SHA256'], value);
  },
  /**
   * hashEncryptToSHA512
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToSHA512(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['SHA512'], value);
  },
  /**
   * hashEncryptToSHA3_64
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToSHA3_64(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['SHA3', '64'], value);
  },
  /**
   * hashEncryptToSHA3_224
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToSHA3_224(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['SHA3', '224'], value);
  },
  /**
   * hashEncryptToSHA3_256
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToSHA3_256(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['SHA3', '256'], value);
  },
  /**
   * hashEncryptToSHA3_348
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToSHA3_348(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['SHA3', '384'], value);
  },
  /**
   * hashEncryptToSHA3_512
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToSHA3_512(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['SHA3', '512'], value);
  },
  /**
   * hashEncryptToRIPEMD160
   * @description MD5加密 哈希加密算法
   * @param _value
   */
  hashEncryptToRIPEMD160(_value: string = '') {
    const value = (_value || '').trim();
    return hashEncrypt(['RIPEMD160'], value);
  },
  /**
   * symmetricEncryptToAES
   * @description 对称加密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 加密后的字符串
   */
  symmetricEncryptToAES(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricEncrypt('AES', pwd, value);
  },
  /**
   * symmetricEncryptToDES
   * @description 对称加密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 加密后的字符串
   */
  symmetricEncryptToDES(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricEncrypt('DES', pwd, value);
  },
  /**
   * symmetricEncryptToRC4
   * @description 对称加密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 加密后的字符串
   */
  symmetricEncryptToRC4(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricEncrypt('RC4', pwd, value);
  },
  /**
   * symmetricEncryptToRabbit
   * @description 对称加密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 加密后的字符串
   */
  symmetricEncryptToRabbit(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricEncrypt('Rabbit', pwd, value);
  },
  /**
   * symmetricEncryptToTripleDes
   * @description 对称加密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 加密后的字符串
   */
  symmetricEncryptToTripleDes(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricEncrypt('TripleDes', pwd, value);
  },

  /**
   * symmetricDecryptToAES
   * @description 对称解密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 解密后的字符串
   */
  symmetricDecryptToAES(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricDecrypt('AES', pwd, value);
  },
  /**
   * symmetricDecryptToDES
   * @description 对称解密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 解密后的字符串
   */
  symmetricDecryptToDES(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricDecrypt('DES', pwd, value);
  },
  /**
   * symmetricDecryptToRC4
   * @description 对称解密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 解密后的字符串
   */
  symmetricDecryptToRC4(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricDecrypt('RC4', pwd, value);
  },
  /**
   * symmetricDecryptToRabbit
   * @description 对称解密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 解密后的字符串
   */
  symmetricDecryptToRabbit(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricDecrypt('Rabbit', pwd, value);
  },
  /**
   * symmetricDecryptToTripleDes
   * @description 对称解密算法
   * @param _value 加密的字符串
   * @param _pwd 密钥
   * @return 解密后的字符串
   */
  symmetricDecryptToTripleDes(_value: string = '', _pwd: string = '') {
    const value = (_value || '').trim();
    const pwd = (_pwd || '').trim();

    return symmetricDecrypt('TripleDes', pwd, value);
  },
};

export default EncryptUtil;
