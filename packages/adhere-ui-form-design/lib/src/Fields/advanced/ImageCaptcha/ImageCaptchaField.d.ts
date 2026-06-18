import { type SliderCaptchaProps } from 'rc-slider-captcha';
import React from 'react';
import type { DataSourceManagerFormItemValue } from '../../../components/DataSourceManagerFormItem';
import type { DesignValue } from '../../../types';
export type ImageCaptchaMode = 'image' | 'slider';
export type ImageCaptchaValue = {
    mode?: ImageCaptchaMode;
    token?: string;
    captcha?: string;
};
export type ImageCaptchaFieldProps = {
    rootDesignValue?: DesignValue;
    value?: ImageCaptchaValue;
    onChange?: (value: ImageCaptchaValue) => void;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    mode?: ImageCaptchaMode;
    imageApi?: {
        source?: DataSourceManagerFormItemValue;
        responseMap?: {
            captchaKey?: string;
            tokenKey?: string;
            /** dot-path，从 dataKey 对应 payload 中继续向下取值 */
            dataPath?: string;
        };
        refresh?: {
            showButton?: boolean;
            autoRefreshOnMount?: boolean;
            /** 外部触发刷新：变更该值即可触发一次 refresh */
            refreshKey?: any;
        };
    };
    sliderCaptcha?: {
        mode?: 'components' | 'api';
        /** 仅支持可序列化 props（不含函数）。函数由内部注入 request/onVerify。 */
        components?: Partial<SliderCaptchaProps>;
        requestApi?: {
            source?: DataSourceManagerFormItemValue;
            responseMap?: {
                bgUrlKey?: string;
                puzzleUrlKey?: string;
                dataPath?: string;
            };
        };
        verifyApi?: {
            source?: DataSourceManagerFormItemValue;
            responseMap?: {
                tokenKey?: string;
                dataPath?: string;
            };
        };
        /** 外部触发刷新：变更该值即可触发一次 SliderCaptcha refresh */
        refreshKey?: any;
    };
};
export default function ImageCaptchaField(props: ImageCaptchaFieldProps): React.JSX.Element;
