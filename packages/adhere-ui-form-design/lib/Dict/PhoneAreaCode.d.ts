export type PhoneAreaCodeRule = 'digits' | 'digits_and_space_dash';
export type PhoneAreaCodeItem = {
    /** 下拉展示：Country (+Code) */
    label: string;
    /** 选中回填：+Code */
    value: string;
    /** 搜索关键字 */
    search?: string;
    /** ISO2 */
    iso2?: string;
    /** 输入规则（用于 PhoneWithAreaCode 字段根据区号决定过滤策略） */
    rule?: PhoneAreaCodeRule;
};
export declare const PhoneAreaCode: {
    handler: () => PhoneAreaCodeItem[];
};
