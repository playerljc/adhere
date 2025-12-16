import type { FC } from 'react';
import type { I18nChangeFormItemProps, I18nValue } from '../../types';
/**
 * validator
 * @param rules
 * @return {{validator: (function(*, *, *): Promise<*>)}}
 */
export declare const validator: (rules: any[]) => {
    validator: (_: any, value: I18nValue, cb: (error?: any) => void) => Promise<void>;
};
/**
 * transformPayloadI18n
 * @param locale
 * @param prop
 * @param toProp
 * @param onTransform
 * @param localesKeys
 */
export declare const transformPayloadI18n: ({ locale, prop, toProp, onTransform, localesKeys, }: {
    locale: Record<string, any>;
    prop: string;
    toProp?: string;
    onTransform: (v: any) => any;
    localesKeys: string[];
}) => void;
/**
 * transformValuesI18n
 * @param values
 * @param prop
 * @param onTransform
 * @param localesKeys
 */
export declare const transformValuesI18n: ({ values, prop, onTransform, localesKeys, }: {
    values: Record<string, any>;
    prop: string;
    onTransform: (v: any) => any;
    localesKeys: string[];
}) => void;
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
export declare const valuesToPayload: (values: any) => any;
export declare const payloadToValues: (payload: any, lang: string) => any;
/**
 * I18nChangeFormItem
 */
declare const I18nChangeFormItem: FC<I18nChangeFormItemProps>;
export default I18nChangeFormItem;
