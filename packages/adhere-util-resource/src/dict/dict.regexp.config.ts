import Dict from '@baifendian/adhere-util-dict';
import type { RegexpConfigDict, RegexpPattern } from '../types';

/**
 * 正则表达式配置字典
 * 提供常用的正则表达式模式
 */
const RegexpConfig: RegexpConfigDict = {
  /**
   * 初始化静态正则表达式配置
   * 设置各种正则表达式模式
   */
  initStatic(): void {
    /**
     * 移除分隔符的正则表达式
     * 匹配斜杠分隔符
     */
    Dict.handlers.ResourceRegexpRemoveSplitTokenizer = (): RegexpPattern => /\/*/gim;

    /**
     * 首字符大写正则表达式
     * 匹配空格或行首后的小写字母
     */
    Dict.handlers.ResourceRegexpFirstChat = (): RegexpPattern => /( |^)[a-z]/g;

    /**
     * 合并多个斜杠的正则表达式
     * 匹配2个以上的连续斜杠
     */
    Dict.handlers.ResourceRegexpMergeSplit = (): RegexpPattern => /\/{2,}/;

    /**
     * 换行符、空白字符、制表符、回车符、换行符的正则表达式
     * 用于清理多余的空白字符
     */
    Dict.handlers.ResourceRegexpNSTRN = (): RegexpPattern => /(\n[\s\t]*\r*\n)/g;

    /**
     * 换行符、回车符、换行符、制表符的正则表达式
     * 用于清理字符串首尾的空白字符
     */
    Dict.handlers.ResourceRegexpSENRNT = (): RegexpPattern => /^[\n\r\n\t]*|[\n\r\n\t]*$/g;
  },

  /**
   * 初始化远程正则表达式配置
   * 预留接口，用于加载远程正则表达式配置
   */
  initRemote(): void {
    // 预留接口，用于加载远程正则表达式配置
  },
};

export default RegexpConfig;
