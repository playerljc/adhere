import type { DesignValue } from '../../../../../types';
/**
 * 从 JSON 文件加载模板设计值（深拷贝，避免污染源数据）
 * 载入画布前由 TemplateModal 统一调用 regenerateDesignValueIds 重新生成节点 id
 */
export declare function loadTemplateFromJson<T extends DesignValue = DesignValue>(json: T): T;
