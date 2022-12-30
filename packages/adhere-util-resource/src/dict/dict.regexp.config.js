import Dict from '@baifendian/adhere-util-dict';

export default {
  initStatic() {
    // /分隔符
    Dict.handlers.ResourceRegexpRemoveSplitTokenizer = () => /\/*/gim;

    // 首字符
    Dict.handlers.ResourceRegexpFirstChat = () => /( |^)[a-z]/g;

    // 多个2个以上的/
    Dict.handlers.ResourceRegexpMergeSplit = () => /\/{2,}/;

    // 换行符 空白字符 制表符 回车符 换行符
    Dict.handlers.ResourceRegexpNSTRN = () => /(\n[\s\t]*\r*\n)/g;

    // 换行符 回车符 换行符 制表符
    Dict.handlers.ResourceRegexpSENRNT = () => /^[\n\r\n\t]*|[\n\r\n\t]*$/g;
  },
  initRemote() {},
};
