export namespace oneData {
    const code: number;
    namespace data {
        const total: number;
        const list: {
            id: any;
            name: any;
            sex: string;
            homeTown: any;
            birthday: number;
            deptName: any;
            height: any;
            width: any;
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
            sex: string;
            homeTown: any;
            address: any;
            birthday: number;
            deptName: any;
            height: any;
            width: any;
        }[];
        export { list_1 as list };
    }
    export { data_1 as data };
}
export default _default;
declare const data_2: any[];
