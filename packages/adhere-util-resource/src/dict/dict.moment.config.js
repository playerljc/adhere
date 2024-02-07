import Dict from '@baifendian/adhere-util-dict';

export default {
  initStatic() {
    Dict.handlers.ResourceMomentFormat2 = () => 'YY';

    Dict.handlers.ResourceMomentFormat4 = () => 'YYYY';

    Dict.handlers.ResourceMomentFormat6 =
      () =>
      (split = '-') =>
        `YYYY${split}M`;

    Dict.handlers.ResourceMomentFormat7 =
      () =>
      (split = '-') =>
        `YYYY${split}MM`;

    Dict.handlers.ResourceMomentFormat8 =
      () =>
      (split = '-') =>
        `YYYY${split}M${split}D`;

    Dict.handlers.ResourceMomentFormat10 =
      () =>
      (split = '-') =>
        `YYYY${split}MM${split}DD`;

    Dict.handlers.ResourceMomentFormat13 =
      () =>
      (split1 = '-', split2 = ':') =>
        `YYYY${split1}M${split1}D H${split2}m${split2}s`;

    Dict.handlers.ResourceMomentFormat15 =
      () =>
      (split1 = '-', split2 = ':') =>
        `YYYY${split1}MM${split1}DD H${split2}m${split2}s`;

    Dict.handlers.ResourceMomentFormat16 =
      () =>
      (split1 = '-', split2 = ':') =>
        `YYYY${split1}M${split1}D HH${split2}mm${split2}ss`;

    Dict.handlers.ResourceMomentFormat18 =
      () =>
      (split1 = '-', split2 = ':') =>
        `YYYY${split1}MM${split1}DD HH${split2}mm${split2}ss`;

    Dict.handlers.ResourceMomentFormatYY = () => 'YY';
    Dict.handlers.ResourceMomentFormatYYYY = () => 'YYYY';
    Dict.handlers.ResourceMomentFormatM = () => 'M';
    Dict.handlers.ResourceMomentFormatMM = () => 'MM';
    Dict.handlers.ResourceMomentFormatMMM = () => 'MMM';
    Dict.handlers.ResourceMomentFormatMMMM = () => 'MMMM';
    Dict.handlers.ResourceMomentFormatD = () => 'D';
    Dict.handlers.ResourceMomentFormatDD = () => 'DD';
    Dict.handlers.ResourceMomentFormatd = () => 'd';
    Dict.handlers.ResourceMomentFormatdd = () => 'dd';
    Dict.handlers.ResourceMomentFormatddd = () => 'ddd';
    Dict.handlers.ResourceMomentFormatdddd = () => 'dddd';
    Dict.handlers.ResourceMomentFormatH = () => 'H';
    Dict.handlers.ResourceMomentFormatHH = () => 'HH';
    Dict.handlers.ResourceMomentFormath = () => 'h';
    Dict.handlers.ResourceMomentFormathh = () => 'hh';
    Dict.handlers.ResourceMomentFormatm = () => 'm';
    Dict.handlers.ResourceMomentFormatmm = () => 'mm';
    Dict.handlers.ResourceMomentFormats = () => 's';
    Dict.handlers.ResourceMomentFormatss = () => 'ss';
    Dict.handlers.ResourceMomentFormatSSS = () => 'SSS';
    Dict.handlers.ResourceMomentFormatZ = () => 'Z';
    Dict.handlers.ResourceMomentFormatZZ = () => 'ZZ';
    Dict.handlers.ResourceMomentFormatA = () => 'A';
    Dict.handlers.ResourceMomentFormata = () => 'a';
    Dict.handlers.ResourceMomentFormatQ = () => 'Q';
    Dict.handlers.ResourceMomentFormatDo = () => 'Do';
    Dict.handlers.ResourceMomentFormatk = () => 'k';
    Dict.handlers.ResourceMomentFormatkk = () => 'kk';
    Dict.handlers.ResourceMomentFormatX = () => 'X';
    Dict.handlers.ResourceMomentFormatx = () => 'x';
    Dict.handlers.ResourceMomentFormatw = () => 'w';
    Dict.handlers.ResourceMomentFormatww = () => 'ww';
    Dict.handlers.ResourceMomentFormatW = () => 'W';
    Dict.handlers.ResourceMomentFormatWW = () => 'WW';
    Dict.handlers.ResourceMomentFormatwo = () => 'wo';
    Dict.handlers.ResourceMomentFormatgggg = () => 'gggg';
    Dict.handlers.ResourceMomentFormatGGGG = () => 'GGGG';
    Dict.handlers.ResourceMomentFormatz = () => 'z';
    Dict.handlers.ResourceMomentFormatzzz = () => 'zzz';
    Dict.handlers.ResourceMomentFormatLT = () => 'LT';
    Dict.handlers.ResourceMomentFormatLTS = () => 'LTS';
    Dict.handlers.ResourceMomentFormatL = () => 'L';
    Dict.handlers.ResourceMomentFormatLL = () => 'LL';
    Dict.handlers.ResourceMomentFormatLLL = () => 'LLL';
    Dict.handlers.ResourceMomentFormatLLLL = () => 'LLLL';
    Dict.handlers.ResourceMomentFormatl = () => 'l';
    Dict.handlers.ResourceMomentFormatll = () => 'll';
    Dict.handlers.ResourceMomentFormatlll = () => 'lll';
    Dict.handlers.ResourceMomentFormatllll = () => 'llll';
  },
};
