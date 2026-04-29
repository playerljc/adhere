export type PhoneAreaCodeRule = 'digits' | 'digits_and_space_dash';
export type PhoneAreaCodeItem = {
    label: string;
    value: string;
    /**
     * 输入规则（用于 PhoneWithAreaCode 字段根据区号决定过滤策略）
     */
    rule?: PhoneAreaCodeRule;
};
export declare const PhoneAreaCode: {
    handler: () => PhoneAreaCodeItem[];
};
