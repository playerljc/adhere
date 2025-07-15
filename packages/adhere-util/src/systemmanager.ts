/**
 * 系统管理工具类
 * @description 提供系统登录、登出相关的 URL 生成工具
 */
const SystemManagerUtil = {
  /**
   * 生成 CAS 登录 URL
   * @description 根据 baseUrl、enterUrl、默认语言生成登录跳转 URL
   * @param params - 参数对象
   * @param params.baseUrl - CAS 服务基础地址
   * @param params.enterUrl - 登录后跳转地址
   * @param params.defaultLocal - 默认语言，可选
   * @returns 登录跳转 URL
   * @example
   * ```typescript
   * casUrl({ baseUrl: 'https://cas.example.com', enterUrl: 'https://app.example.com', defaultLocal: 'zh-CN' })
   * // 返回: 'https://cas.example.com/gotoLogin?backUrl=https://app.example.com&locale=zh-CN'
   * ```
   */
  casUrl({ baseUrl, enterUrl, defaultLocal }: { baseUrl: string; enterUrl: string; defaultLocal?: string }): string {
    const languageParam = defaultLocal ? `&locale=${defaultLocal}` : '';
    return `${baseUrl}/gotoLogin?backUrl=${enterUrl}${languageParam}`;
  },

  /**
   * 生成 CAS 登出 URL
   * @description 根据 baseUrl、enterUrl、附加参数生成登出跳转 URL
   * @param params - 参数对象
   * @param params.baseUrl - CAS 服务基础地址
   * @param params.enterUrl - 登出后跳转地址
   * @param params.params - 额外参数字符串，可选
   * @returns 登出跳转 URL
   * @example
   * ```typescript
   * casLogoutUrl({ baseUrl: 'https://cas.example.com', enterUrl: 'https://app.example.com', params: '&foo=bar' })
   * // 返回: 'https://cas.example.com/logout?service=https://app.example.com&foo=bar'
   * ```
   */
  casLogoutUrl({ baseUrl, enterUrl, params = '' }: { baseUrl: string; enterUrl: string; params?: string }): string {
    return `${baseUrl}/logout?service=${enterUrl}${params}`;
  },
};

export default SystemManagerUtil;
