export declare function staticSelectOptions(items: Array<{
    labelKey: string;
    value: string;
}>): {
    type: "static";
    dataSource: {
        label: import("../../../../../types").I18nValue;
        value: string;
    }[];
};
