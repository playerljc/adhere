export namespace oneData {
    const code: number;
    namespace data {
        const total: number;
        const list: {
            id: any;
            avatar: string;
            subTitle: any;
            title: any;
            description: string;
            content: string;
        }[];
    }
}
declare namespace _default {
    const code_1: number;
    export { code_1 as code };
    export namespace data_1 {
        import total_1 = data.length;
        export { total_1 as total };
        const list_1: {
            id: any;
            name: any;
            type: string;
            size: any;
            modifyTime: number;
        }[];
        export { list_1 as list };
    }
    export { data_1 as data };
}
export default _default;
declare const data_2: any[];
