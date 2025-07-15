/**
 * Encrypt 模块测试文件
 * @description 测试加密解密功能
 */
import encrypt from '../src/encrypt';

// 测试 Base64 解码功能
const encodedData = 'W3siaWQiOiIxNTlBOWFkMS1COGY3LTdmZjYtNDg4RC1kODI0M0RDQTU2NTkiLCJjb25kaXRpb24iOjEsInR5cGUiOjQsImt3IjoiMzMzMzMzMzMiLCJncm91cElkIjoyMTIsImNvbnRlbnQiOiI8c3BhbiBjbGFzcz1cInRleHRcIj4yIDwvc3Bhbi48c3BhbiBjbGFzcz1cIm9wZXJhdG9yXCIgY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIj5PUjwvc3Bhbi48c3BhbiBjbGFzcz1cInRleHRcIj4gMyZuYnNwOzwvc3Bhbi4ifV0==';

console.log('Base64 解码测试:');
console.log('编码数据:', encodedData);
console.log('解码结果:', encrypt.base64Decode(encodedData));

// 测试 Base64 编码功能
const originalText = 'Hello World';
const encodedText = encrypt.base64Encode(originalText);
console.log('\nBase64 编码测试:');
console.log('原始文本:', originalText);
console.log('编码结果:', encodedText);
console.log('解码验证:', encrypt.base64Decode(encodedText));

// 测试 MD5 加密
const password = 'myPassword123';
const md5Hash = encrypt.hashEncryptToMD5(password);
console.log('\nMD5 加密测试:');
console.log('原始密码:', password);
console.log('MD5 哈希:', md5Hash);

// 测试 SHA256 加密
const sha256Hash = encrypt.hashEncryptToSHA256(password);
console.log('\nSHA256 加密测试:');
console.log('原始密码:', password);
console.log('SHA256 哈希:', sha256Hash);

// 测试中文转 UTF8
const chineseText = '你好世界';
const utf8Text = encrypt.chineseToUTF8(chineseText);
console.log('\n中文转 UTF8 测试:');
console.log('原始中文:', chineseText);
console.log('UTF8 编码:', utf8Text);
console.log('UTF8 解码:', encrypt.UTF8ToChinese(utf8Text));
