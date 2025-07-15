import Dict from '@baifendian/adhere-util-dict';
import type { MomentConfigDict } from '../types';

/**
 * 日期格式化配置字典
 * 提供各种日期格式化模板和函数
 */
const MomentConfig: MomentConfigDict = {
  /**
   * 初始化静态日期格式化配置
   * 设置各种日期格式化模板
   */
  initStatic(): void {
    /**
     * 2位年份格式
     */
    Dict.handlers.ResourceMomentFormat2 = (): string => 'YY';

    /**
     * 4位年份格式
     */
    Dict.handlers.ResourceMomentFormat4 = (): string => 'YYYY';

    /**
     * 6位年月格式
     * @param split - 分隔符，默认为'-'
     */
    Dict.handlers.ResourceMomentFormat6 =
      () =>
      (split: string = '-'): string =>
        `YYYY${split}M`;

    /**
     * 7位年月格式
     * @param split - 分隔符，默认为'-'
     */
    Dict.handlers.ResourceMomentFormat7 =
      () =>
      (split: string = '-'): string =>
        `YYYY${split}MM`;

    /**
     * 8位年月日格式
     * @param split - 分隔符，默认为'-'
     */
    Dict.handlers.ResourceMomentFormat8 =
      () =>
      (split: string = '-'): string =>
        `YYYY${split}M${split}D`;

    /**
     * 10位年月日格式
     * @param split - 分隔符，默认为'-'
     */
    Dict.handlers.ResourceMomentFormat10 =
      () =>
      (split: string = '-'): string =>
        `YYYY${split}MM${split}DD`;

    /**
     * 13位年月日时分秒格式
     * @param split1 - 日期分隔符，默认为'-'
     * @param split2 - 时间分隔符，默认为':'
     */
    Dict.handlers.ResourceMomentFormat13 =
      () =>
      (split1: string = '-', split2: string = ':'): string =>
        `YYYY${split1}M${split1}D H${split2}m${split2}s`;

    /**
     * 15位年月日时分秒格式
     * @param split1 - 日期分隔符，默认为'-'
     * @param split2 - 时间分隔符，默认为':'
     */
    Dict.handlers.ResourceMomentFormat15 =
      () =>
      (split1: string = '-', split2: string = ':'): string =>
        `YYYY${split1}MM${split1}DD H${split2}m${split2}s`;

    /**
     * 16位年月日时分秒格式
     * @param split1 - 日期分隔符，默认为'-'
     * @param split2 - 时间分隔符，默认为':'
     */
    Dict.handlers.ResourceMomentFormat16 =
      () =>
      (split1: string = '-', split2: string = ':'): string =>
        `YYYY${split1}M${split1}D HH${split2}mm${split2}ss`;

    /**
     * 18位年月日时分秒格式
     * @param split1 - 日期分隔符，默认为'-'
     * @param split2 - 时间分隔符，默认为':'
     */
    Dict.handlers.ResourceMomentFormat18 =
      () =>
      (split1: string = '-', split2: string = ':'): string =>
        `YYYY${split1}MM${split1}DD HH${split2}mm${split2}ss`;

    // 基础格式模板
    Dict.handlers.ResourceMomentFormatYY = (): string => 'YY';
    Dict.handlers.ResourceMomentFormatYYYY = (): string => 'YYYY';
    Dict.handlers.ResourceMomentFormatM = (): string => 'M';
    Dict.handlers.ResourceMomentFormatMM = (): string => 'MM';
    Dict.handlers.ResourceMomentFormatMMM = (): string => 'MMM';
    Dict.handlers.ResourceMomentFormatMMMM = (): string => 'MMMM';
    Dict.handlers.ResourceMomentFormatD = (): string => 'D';
    Dict.handlers.ResourceMomentFormatDD = (): string => 'DD';
    Dict.handlers.ResourceMomentFormatd = (): string => 'd';
    Dict.handlers.ResourceMomentFormatdd = (): string => 'dd';
    Dict.handlers.ResourceMomentFormatddd = (): string => 'ddd';
    Dict.handlers.ResourceMomentFormatdddd = (): string => 'dddd';
    Dict.handlers.ResourceMomentFormatH = (): string => 'H';
    Dict.handlers.ResourceMomentFormatHH = (): string => 'HH';
    Dict.handlers.ResourceMomentFormath = (): string => 'h';
    Dict.handlers.ResourceMomentFormathh = (): string => 'hh';
    Dict.handlers.ResourceMomentFormatm = (): string => 'm';
    Dict.handlers.ResourceMomentFormatmm = (): string => 'mm';
    Dict.handlers.ResourceMomentFormats = (): string => 's';
    Dict.handlers.ResourceMomentFormatss = (): string => 'ss';
    Dict.handlers.ResourceMomentFormatSSS = (): string => 'SSS';
    Dict.handlers.ResourceMomentFormatZ = (): string => 'Z';
    Dict.handlers.ResourceMomentFormatZZ = (): string => 'ZZ';
    Dict.handlers.ResourceMomentFormatA = (): string => 'A';
    Dict.handlers.ResourceMomentFormata = (): string => 'a';
    Dict.handlers.ResourceMomentFormatQ = (): string => 'Q';
    Dict.handlers.ResourceMomentFormatDo = (): string => 'Do';
    Dict.handlers.ResourceMomentFormatk = (): string => 'k';
    Dict.handlers.ResourceMomentFormatkk = (): string => 'kk';
    Dict.handlers.ResourceMomentFormatX = (): string => 'X';
    Dict.handlers.ResourceMomentFormatx = (): string => 'x';
    Dict.handlers.ResourceMomentFormatw = (): string => 'w';
    Dict.handlers.ResourceMomentFormatww = (): string => 'ww';
    Dict.handlers.ResourceMomentFormatW = (): string => 'W';
    Dict.handlers.ResourceMomentFormatWW = (): string => 'WW';
    Dict.handlers.ResourceMomentFormatwo = (): string => 'wo';
    Dict.handlers.ResourceMomentFormatgggg = (): string => 'gggg';
    Dict.handlers.ResourceMomentFormatGGGG = (): string => 'GGGG';
    Dict.handlers.ResourceMomentFormatz = (): string => 'z';
    Dict.handlers.ResourceMomentFormatzzz = (): string => 'zzz';
    Dict.handlers.ResourceMomentFormatLT = (): string => 'LT';
    Dict.handlers.ResourceMomentFormatLTS = (): string => 'LTS';
    Dict.handlers.ResourceMomentFormatL = (): string => 'L';
    Dict.handlers.ResourceMomentFormatLL = (): string => 'LL';
    Dict.handlers.ResourceMomentFormatLLL = (): string => 'LLL';
    Dict.handlers.ResourceMomentFormatLLLL = (): string => 'LLLL';
    Dict.handlers.ResourceMomentFormatl = (): string => 'l';
    Dict.handlers.ResourceMomentFormatll = (): string => 'll';
    Dict.handlers.ResourceMomentFormatlll = (): string => 'lll';
    Dict.handlers.ResourceMomentFormatllll = (): string => 'llll';
  },
};

export default MomentConfig;
