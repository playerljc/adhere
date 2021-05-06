/// <reference types="react" />
declare const _default: {
    renderText: ({ value, ...others }: {
        [x: string]: any;
        value: any;
    }) => JSX.Element;
    renderInput: ({ type, maxLength, placeholder, ...others }: {
        [x: string]: any;
        type: any;
        maxLength?: number | undefined;
        placeholder?: string | undefined;
    }) => JSX.Element;
    renderSearch: ({ maxLength, placeholder, ...others }: {
        [x: string]: any;
        maxLength?: number | undefined;
        placeholder?: string | undefined;
    }) => JSX.Element;
    renderPassword: ({ type, maxLength, placeholder, ...others }: {
        [x: string]: any;
        type: any;
        maxLength?: number | undefined;
        placeholder?: string | undefined;
    }) => JSX.Element;
    renderInputArea: ({ maxLength, rows, placeholder, ...others }: {
        [x: string]: any;
        maxLength?: number | undefined;
        rows?: number | undefined;
        placeholder?: string | undefined;
    }) => JSX.Element;
    renderInputNumber: ({ placeholder, max, min, ...others }: {
        [x: string]: any;
        placeholder?: string | undefined;
        max?: number | undefined;
        min?: number | undefined;
    }) => JSX.Element;
    renderRadio: ({ ...others }: {
        [x: string]: any;
    }) => JSX.Element;
    renderCheckbox: ({ options, ...others }: {
        [x: string]: any;
        options: any;
    }) => JSX.Element;
    renderSelect: ({ optGroup, options, placeholder, renderOption, ...others }: {
        [x: string]: any;
        optGroup: any;
        options: any;
        placeholder?: string | undefined;
        renderOption: any;
    }) => JSX.Element;
    renderDatepicker: ({ format, ...others }: {
        [x: string]: any;
        format: any;
    }) => JSX.Element;
    renderRangepicker: ({ format, ...others }: {
        [x: string]: any;
        format: any;
    }) => JSX.Element;
    renderTimePicker: ({ ...others }: {
        [x: string]: any;
    }) => JSX.Element;
    renderSwitch: (item: any) => JSX.Element;
    renderTreeselect: ({ data, allowClear, ...others }: {
        [x: string]: any;
        data: any;
        allowClear: any;
    }) => JSX.Element;
    renderSlider: ({ ...others }: {
        [x: string]: any;
    }) => JSX.Element;
    renderRate: ({ ...others }: {
        [x: string]: any;
    }) => JSX.Element;
    renderUpload: ({ ...others }: {
        [x: string]: any;
    }) => JSX.Element;
};
export default _default;
