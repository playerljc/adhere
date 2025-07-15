import { BrowserInfo } from './types';
/**
 * 浏览器信息解析类
 * 支持浏览器和Node.js环境
 * 基于 https://github.com/mumuy/browser
 */
export default class Browser implements BrowserInfo {
    /** 浏览器名称 */
    browser: string;
    /** 设备类型 */
    device: string;
    /** 渲染引擎 */
    engine: string;
    /** 语言设置 */
    language: string;
    /** 操作系统 */
    os: string;
    /** 操作系统版本 */
    osVersion: string;
    /** 浏览器版本 */
    version: string;
    /**
     * 创建浏览器信息解析实例
     * @param userAgent - 用户代理字符串，如果不提供则使用当前环境的navigator.userAgent
     */
    constructor(userAgent?: string);
    /**
     * 解析浏览器信息
     * @param userAgent - 用户代理字符串
     */
    private parseBrowserInfo;
    /**
     * 获取用户代理字符串
     * @returns 用户代理字符串
     */
    private getUserAgent;
    /**
     * 创建浏览器匹配对象
     * @param ua - 用户代理字符串
     * @returns 浏览器匹配结果
     */
    private createBrowserMatch;
    /**
     * 检测360浏览器
     * @param ua - 用户代理字符串
     * @returns 是否为360浏览器
     */
    private detect360Browser;
    /**
     * 检查MIME类型
     * @param option - 检查选项
     * @param value - 检查值
     * @returns 是否存在该MIME类型
     */
    private checkMimeType;
    /**
     * 修正匹配结果
     * @param match - 浏览器匹配结果
     * @param is360 - 是否为360浏览器
     * @param ua - 用户代理字符串
     */
    private correctMatchResults;
    /**
     * 设置基本信息
     * @param match - 浏览器匹配结果
     */
    private setBasicInfo;
    /**
     * 获取语言设置
     * @returns 语言代码
     */
    private getLanguage;
    /**
     * 设置操作系统版本
     * @param ua - 用户代理字符串
     */
    private setOSVersion;
    /**
     * 设置浏览器版本
     * @param ua - 用户代理字符串
     */
    private setBrowserVersion;
    /**
     * 最终修正
     * @param ua - 用户代理字符串
     */
    private finalCorrections;
}
