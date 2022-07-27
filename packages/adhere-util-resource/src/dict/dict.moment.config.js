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
  },
};
