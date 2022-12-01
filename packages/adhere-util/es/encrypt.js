import CryptoJS from"crypto-js";function hashEncrypt(t,r){void 0===r&&(r="");return"SHA3"==t[0]?CryptoJS.SHA3(r,{outputLength:t[1]}):CryptoJS[t[0]](r)}function symmetricEncrypt(t,r,i){i=(i||"").trim(),r=(r||"").trim(),t=(t||"").trim();return CryptoJS[t].encrypt(i,r)}function symmetricDecrypt(t,r,i){i=(i||"").trim(),r=(r||"").trim(),t=(t||"").trim();return CryptoJS[t].decrypt(i,r).toString(CryptoJS.enc.Utf8)}var EncryptUtil={base46Encode:function(t){return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse((t||"").trim()))},base64Decode:function(t){for(var r="",i=(i=t||"").split("\n"),n=0;n<i.length;n++)r+=CryptoJS.enc.Base64.parse(i[n]).toString(CryptoJS.enc.Utf8)+"\n";return r},chineseToUTF8:function(t){return((t=void 0===t?"":t)||"").trim().replace(/[^\u0000-\u00FF]/g,function(t){return escape(t).replace(/(%u)(\w{4})/gi,"&#x$2;")})},UTF8ToChinese:function(t){return unescape((t||"").replace(/&#x/g,"%u").replace(/;/g,""))},chineseToASC2:function(t,r){void 0===r&&(r=!0);for(var i=((t=void 0===t?"":t)||"").trim().split(""),n="",e=0;e<i.length;e++){var c=Number(i[e].charCodeAt(0));!r||127<c?(c=c.toString(16),n+="\\u"+(c=String("0000").substring(c.length,4)+c)):n+=i[e]}return n},ASC2ToChinese:function(t){for(var r=((t=void 0===t?"":t)||"").trim().split("\\u"),i=r[0],n=1;n<r.length;n++){var e=r[n];i+=String.fromCharCode(parseInt("0x"+e.substring(0,4))),4<e.length&&(i+=e.substring(4,e.length))}return i},hashEncryptToMD5:function(t){return hashEncrypt(["MD5"],((t=void 0===t?"":t)||"").trim())},hashEncryptToSHA1:function(t){return hashEncrypt(["SHA1"],((t=void 0===t?"":t)||"").trim())},hashEncryptToSHA256:function(t){return hashEncrypt(["SHA256"],((t=void 0===t?"":t)||"").trim())},hashEncryptToSHA512:function(t){return hashEncrypt(["SHA512"],((t=void 0===t?"":t)||"").trim())},hashEncryptToSHA3_64:function(t){return hashEncrypt(["SHA3","64"],((t=void 0===t?"":t)||"").trim())},hashEncryptToSHA3_224:function(t){return hashEncrypt(["SHA3","224"],((t=void 0===t?"":t)||"").trim())},hashEncryptToSHA3_256:function(t){return hashEncrypt(["SHA3","256"],((t=void 0===t?"":t)||"").trim())},hashEncryptToSHA3_348:function(t){return hashEncrypt(["SHA3","384"],((t=void 0===t?"":t)||"").trim())},hashEncryptToSHA3_512:function(t){return hashEncrypt(["SHA3","512"],((t=void 0===t?"":t)||"").trim())},hashEncryptToRIPEMD160:function(t){return hashEncrypt(["RIPEMD160"],((t=void 0===t?"":t)||"").trim())},symmetricEncryptToAES:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricEncrypt("AES",(r||"").trim(),t)},symmetricEncryptToDES:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricEncrypt("DES",(r||"").trim(),t)},symmetricEncryptToRC4:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricEncrypt("RC4",(r||"").trim(),t)},symmetricEncryptToRabbit:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricEncrypt("Rabbit",(r||"").trim(),t)},symmetricEncryptToTripleDes:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricEncrypt("TripleDes",(r||"").trim(),t)},symmetricDecryptToAES:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricDecrypt("AES",(r||"").trim(),t)},symmetricDecryptToDES:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricDecrypt("DES",(r||"").trim(),t)},symmetricDecryptToRC4:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricDecrypt("RC4",(r||"").trim(),t)},symmetricDecryptToRabbit:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricDecrypt("Rabbit",(r||"").trim(),t)},symmetricDecryptToTripleDes:function(t,r){void 0===r&&(r="");t=((t=void 0===t?"":t)||"").trim();return symmetricDecrypt("TripleDes",(r||"").trim(),t)}};export default EncryptUtil;
//# sourceMappingURL=encrypt.js.map
