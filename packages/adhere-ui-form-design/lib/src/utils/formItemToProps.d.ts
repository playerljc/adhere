import type { FormItemProps } from '../types';
export declare function formItemToProps(formItemProps: FormItemProps, lang: string): {
    name: any;
    hidden: boolean | undefined;
    noStyle: boolean | undefined;
    valuePropName: string | undefined;
    getValueFromEvent: ((...args: import("@rc-component/form/lib/interface").EventArgs) => import("@rc-component/form/lib/interface").StoreValue) | undefined;
    validateFirst: boolean | "parallel" | undefined;
    validateTrigger: string | false | string[] | undefined;
    initialValue: any;
    rules: (Pick<import("antd/es/form").RuleObject, "type" | "min" | "max" | "required" | "whitespace" | "len" | "enum" | "warningOnly"> & {
        validator?: string;
        pattern?: string;
        message?: import("../types").I18nValue;
    } & {
        validate?: import("antd/es/form").RuleObject["validator"];
    })[];
};
