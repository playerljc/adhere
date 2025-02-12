import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh';
declare const Components: {
    dayjs: typeof dayjs;
    /**
     * setGlobalLocal
     * @description 全局设置国际化
     * @param {string} _local 国际化
     */
    setGlobalLocal: (_local: any) => void;
};
export default Components;
