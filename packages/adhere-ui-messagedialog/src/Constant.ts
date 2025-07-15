import Resource from '@baifendian/adhere-util-resource';

/** 默认国际化语言 */
export const DEFAULT_LOCAL = 'zh_CN';

/** 默认对话框宽度 */
export const DEFAULT_WIDTH = 300;

/** 默认对话框层级 */
export const DEFAULT_ZINDEX = 999;

/** 节流时间 */
export const THROTTLE_TIME = 200;

/** 国际化资源 */
export const LOCAL = Resource?.Dict?.value?.LocalsAntd?.value;

/** 提示框默认布局配置 */
export const PROMPT_LAYOUT = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
} as const;
