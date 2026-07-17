import type { FormItemProps } from '../types';
export declare function formItemToProps(formItemProps: FormItemProps, lang: string): {
    name: any;
    hidden: boolean | undefined;
    noStyle: boolean | undefined;
    valuePropName: string | undefined;
    getValueFromEvent: ((...args: import("@rc-component/form/es/interface").EventArgs) => import("@rc-component/form").StoreValue) | undefined;
    validateFirst: boolean | "parallel" | undefined;
    validateTrigger: string | false | string[] | undefined;
    initialValue: any;
    rules: (Pick<import("@rc-component/form/lib/interface").RuleObject, "type" | "min" | "max" | "required" | "whitespace" | "len" | "enum" | "warningOnly"> & {
        validator?: string;
        pattern?: string;
        message?: import("../types").I18nValue;
    } & {
        validate?: import("@rc-component/form/lib/interface").RuleObject["validator"];
    })[];
};
