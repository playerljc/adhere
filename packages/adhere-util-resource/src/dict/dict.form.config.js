import Dict from '@baifendian/adhere-util-dict';
import Intl from '@baifendian/adhere-util-intl';

export default {
  initStatic() {
    Dict.handlers.FormInputNumberRule = () => ({
      type: 'number',
      message: Intl.get('input_range_1_200'),
      min: 1,
      max: 200,
    });

    Dict.handlers.FormWhitespaceRule = () => ({
      message: Intl.get('input_no_spaces'),
      whitespace: true,
    });

    Dict.handlers.FormInputStringRule = () => ({
      type: 'string',
      message: Intl.get('input_limit_100_chars'),
      min: 1,
      max: 100,
    });

    Dict.handlers.FormPopupContainer = () => (el) => el.parentElement;
  },
};
