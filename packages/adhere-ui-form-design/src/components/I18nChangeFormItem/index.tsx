import { useLatest, useMount, useUpdateEffect } from 'ahooks';
import type { FC } from 'react';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { CheckCircleOutlined } from '@ant-design/icons';
import { Select } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import ForceUpdate from '@baifendian/adhere-ui-forceupdate';
import type { ForceUpdateRefHandle } from '@baifendian/adhere-ui-forceupdate';
import Util from '@baifendian/adhere-util';

import { SELECT_PREFIX, SELECT_VALUE_KEY_NAME } from '../../constant';
import type { I18nChangeFormItemProps, I18nValue } from '../../types';

const selectPrefix = `${SELECT_PREFIX}-components-i18n-change-form-item`;

const prefixIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEUAAAAXcsIUdMAWcsIXcsIXcsEWccIWccIXcsIWc8MXccIWcsIUcMQXc8MZcsIXcsIXcsIVc8MXcsIWcsMXcsMXcsIWcsIXcsMXccIWcsIXcsIXcsIXcsMVdcEXcsKL9gDCAAAAHnRSTlMA9BiW3MfkwIFIKGsMNxG3Qi+iX1TTzY6GUOqseSWkq4byAAABYklEQVQ4y4VTa5PDIAiUal7m2byuaXv7/3/mKWg0nZspH5KBxRUXUJk1ujJEptKN+sdumnAa6dsnXp9wtb4rgOrr8QLJZqXsDBQZyb3McNP6UG9Q2vN8jqMNwQ1l5CiQ2xKiQ4Ei1IeL9ZG4K1EzF+Xwa0qlrSB/ic5gH7m395gxQrsvITfanxRrm0uQ0xef9gi49U7DN1xInp3gclSrCrodRiSLGh/EwiuDX6VawX76tohC9UJrFGFQamHncOSW3pJQhaJdggtP7Px64L1KAsUEA+tEY1fef9XfOCqv3fL0It9sSrAEKVKHslvyrx3TEByQZzbYJfCQO7mEFGh8NTaQrkkHtm0GcbNe7CY1VNYsaXdo8RIbdog/QfpWwwzpaYnjZuJ152wNm7yd29XtKNLQjsLRcdcmTq5kaOPYl2EUHb5xr13IXhfnxUoTV9CnxclXr3g0i/vttUmr9315v67/H9pxMGeqsMUhAAAAAElFTkSuQmCC';

function isI18NByValue({
  value,
  localesKeys,
}: {
  value: unknown;
  localesKeys?: string[];
}): boolean {
  if (!Util.isObject(value)) return false;

  const keys = Object.keys(value as Record<string, unknown>).filter(
    (key) => key !== SELECT_VALUE_KEY_NAME,
  );

  if (!keys.length) return false;

  if (localesKeys && localesKeys.length) {
    return keys.every((key) => localesKeys.includes(key));
  }

  return keys.every((key) => {
    const v = (value as Record<string, unknown>)[key];
    return typeof v === 'string' || v == null;
  });
}

async function asyncLoop<T extends Record<string, any>>({
  tasks,
  ...rest
}: {
  tasks: Array<(args: T) => Promise<void> | void>;
} & T): Promise<void> {
  for (const task of tasks) {
    try {
      await task(rest as unknown as T);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  return Promise.resolve();
}

/**
 * validator
 * @param rules
 * @return {{validator: (function(*, *, *): Promise<*>)}}
 */
export const validator = (rules: any[]) => {
  const rulesImpls = new Map<string, any>([
    [
      'required',
      (rule: any) =>
        ({ value }: { value: I18nValue }) => {
          if (!rule.required) return Promise.resolve();

          if (!value) return Promise.reject(rule.message);

          if (!value[value[SELECT_VALUE_KEY_NAME]]) return Promise.reject(rule.message);

          return Promise.resolve();
        },
    ],
    [
      'pattern',
      (rule: any) =>
        ({ value }: { value: I18nValue }) => {
          if (!value) return Promise.reject(rule.message);

          if (!value[value[SELECT_VALUE_KEY_NAME]]) return Promise.reject(rule.message);

          if (!rule.pattern.test(value[value[SELECT_VALUE_KEY_NAME]]))
            return Promise.reject(rule.message);

          return Promise.resolve();
        },
    ],
    [
      'min',
      (rule: any) =>
        ({ value }: { value: I18nValue }) => {
          if (!value) return Promise.reject(rule.message);

          if (!value[value[SELECT_VALUE_KEY_NAME]]) return Promise.reject(rule.message);

          if (value[value[SELECT_VALUE_KEY_NAME]]!.length < rule.min)
            return Promise.reject(rule.message);

          return Promise.resolve();
        },
    ],
    [
      'max',
      (rule: any) =>
        ({ value }: { value: I18nValue }) => {
          if (!value) return Promise.reject(rule.message);

          if (!value[value[SELECT_VALUE_KEY_NAME]]) return Promise.reject(rule.message);

          if (value[value[SELECT_VALUE_KEY_NAME]]!.length > rule.max)
            return Promise.reject(rule.message);

          return Promise.resolve();
        },
    ],
    [
      'whitespace',
      (rule: any) =>
        ({ value }: { value: I18nValue }) => {
          if (!rule.whitespace) return Promise.resolve();

          if (!value) return Promise.reject(rule.message);

          if (!value[value[SELECT_VALUE_KEY_NAME]]) return Promise.reject(rule.message);

          if (
            value[value[SELECT_VALUE_KEY_NAME]] &&
            /^\s+$/.test(value[value[SELECT_VALUE_KEY_NAME]]!)
          )
            return Promise.reject(rule.message);

          return Promise.resolve();
        },
    ],
    [
      'validator',
      (rule: any) =>
        ({
          rule: _,
          value,
          callback,
        }: {
          rule: any;
          value: I18nValue;
          callback: (error?: any) => void;
        }) => {
          return new Promise<void>((resolve, reject) => {
            const cb = (error) => {
              callback(error);

              if (error) {
                reject(error);
              } else {
                resolve();
              }
            };

            rule.validator(_, value?.[value?.[SELECT_VALUE_KEY_NAME]], cb);
          });
        },
    ],
  ]);

  return {
    validator: function (_: any, value: I18nValue, cb: (error?: any) => void) {
      const tasks = rules
        .map((rule) => {
          if ('required' in rule) {
            return rulesImpls.get('required')(rule);
          }
          if ('pattern' in rule) {
            return rulesImpls.get('pattern')(rule);
          }
          if ('min' in rule) {
            return rulesImpls.get('min')(rule);
          }
          if ('max' in rule) {
            return rulesImpls.get('max')(rule);
          }
          if ('whitespace' in rule) {
            return rulesImpls.get('whitespace')(rule);
          }
          if ('validator' in rule) {
            return rulesImpls.get('validator')(rule);
          }

          return false;
        })
        .filter(Boolean);

      return asyncLoop({
        rules: _,
        value,
        callback: cb,
        tasks,
      });
    },
  };
};

/**
 * transformPayloadI18n
 * @param locale
 * @param prop
 * @param toProp
 * @param onTransform
 * @param localesKeys
 */
export const transformPayloadI18n = ({
  locale,
  prop,
  toProp,
  onTransform,
  localesKeys,
}: {
  locale: Record<string, any>;
  prop: string;
  toProp?: string;
  onTransform: (v: any) => any;
  localesKeys: string[];
}) => {
  const i18nKeys = localesKeys;

  i18nKeys.forEach((i18nKey) => {
    locale[prop][i18nKey] = onTransform(locale[prop][i18nKey]);
  });

  if (toProp) {
    i18nKeys.forEach((i18nKey) => {
      if (!locale[toProp]) {
        locale[toProp] = {};
      }

      locale[toProp][i18nKey] = onTransform(locale[prop][i18nKey]);
    });
  }
};

/**
 * transformValuesI18n
 * @param values
 * @param prop
 * @param onTransform
 * @param localesKeys
 */
export const transformValuesI18n = ({
  values,
  prop,
  onTransform,
  localesKeys,
}: {
  values: Record<string, any>;
  prop: string;
  onTransform: (v: any) => any;
  localesKeys: string[];
}) => {
  localesKeys.forEach((i18nKey) => {
    if (values[prop]) {
      values[prop][i18nKey] = onTransform(values[prop][i18nKey]);
    }
  });
};

/**
 * values
 * {
 *   title: {
 *     zh_CN:'',
 *     en_US:'',
 *     ar_EG:'',
 *   }
 * }
 *
 * payload
 * {
 *    locale: {
 *      zh_CN: {
 *        title: '',
 *        content: '',
 *      },
 *      en_US: {
 *        title: ''，
 *        content: '',
 *      },
 *      ar_EG: {
 *        title: ''，
 *        content: '',
 *      }
 *    }
 * }
 */
export const valuesToPayload = (values: any) => {
  return values;
};

export const payloadToValues = (payload: any, lang: string) => {
  function loop(_payload: any): any {
    if (Util.isArray(_payload)) {
      return _payload.map((item) => loop(item));
    }

    if (Util.isObject(_payload)) {
      return Object.keys(_payload as Record<string, any>).reduce(
        (obj: Record<string, any>, key) => {
          const value = (_payload as Record<string, any>)[key];

          if (isI18NByValue({ value })) {
            obj[key] = {
              [SELECT_VALUE_KEY_NAME]: lang,
              ...value,
            };
          } else {
            if (Util.isArray(value)) {
              obj[key] = value.map((item: any) => loop(item));
            } else if (Util.isObject(value)) {
              obj[key] = loop(value);
            } else {
              obj[key] = value;
            }
          }

          return obj;
        },
        {} as Record<string, any>,
      );
    }

    return _payload;
  }

  return loop(payload);
};

/**
 * I18nChangeFormItem
 */
const I18nChangeFormItem: FC<I18nChangeFormItemProps> = ({
  id,
  value,
  onChange,
  getTriggerContainer,
  children,
}) => {
  const ConfigProviderContext = useContext(ConfigProvider.Context);

  const lang = ConfigProviderContext.intl.lang!;

  const locales = ConfigProviderContext.intl.locales;

  const localesKeys = Object.keys(locales);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const fuRef = useRef<ForceUpdateRefHandle | null>(null);

  const [triggerContainer, setTriggerContainer] = useState<HTMLElement | null | undefined>();

  const targetValue = useMemo(() => {
    return (
      value ??
      localesKeys.reduce(
        (res, key) => {
          res[key] = null;
          return res;
        },
        {
          [SELECT_VALUE_KEY_NAME]: lang,
        },
      )
    );
  }, [value]);

  const latestValue = useLatest<I18nValue>(targetValue as I18nValue);

  function onSelectChange(_value: string) {
    fuRef?.current?.reMount();

    onChange?.({
      ...targetValue,
      [SELECT_VALUE_KEY_NAME]: _value,
    });
  }

  const targetSelectValue = useMemo(
    () => targetValue?.[SELECT_VALUE_KEY_NAME] ?? lang,
    [targetValue?.[SELECT_VALUE_KEY_NAME]],
  );

  const ChangeLanguage = useMemo(() => {
    const options = localesKeys.map((lang) => ({
      label: lang,
      value: lang,
    }));

    const optionRender = ({ label, value }: any) => (
      <FlexLayout direction="horizontal">
        <FlexLayout.Auto>{label}</FlexLayout.Auto>
        {!!targetValue[value] && (
          <FlexLayout.Fixed>
            <CheckCircleOutlined className={`${selectPrefix}-success-icon`} />
          </FlexLayout.Fixed>
        )}
      </FlexLayout>
    );

    return (
      <Select
        allowClear={false}
        prefix={<img className={`${selectPrefix}-prefix-icon`} src={prefixIcon} alt="prefixIcon" />}
        options={options}
        optionRender={optionRender}
        onChange={onSelectChange}
        value={targetSelectValue}
      />
    );
  }, [targetValue, targetSelectValue, onChange]);

  const itemValue = useMemo(
    () => targetValue?.[targetSelectValue],
    [targetValue, targetSelectValue],
  );

  const itemOnChange = (_value: any) => {
    onChange?.({
      ...latestValue.current,
      [targetSelectValue]: _value,
    });
  };

  useMount(() => {
    setTriggerContainer(getTriggerContainer?.());
  });

  useUpdateEffect(() => {
    setTriggerContainer(getTriggerContainer?.());
  }, [getTriggerContainer]);

  return (
    <div ref={wrapperRef}>
      {!!triggerContainer && createPortal(ChangeLanguage, triggerContainer)}

      {children ? (
        <ForceUpdate ref={fuRef}>
          {children({
            id,
            value: itemValue,
            targetSelectValue,
            onChange: itemOnChange,
          })}
        </ForceUpdate>
      ) : null}
    </div>
  );
};

export default I18nChangeFormItem;