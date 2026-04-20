import { Button, Input, Spin } from 'antd';
import SliderCaptcha, {
  type ActionType,
  type SliderCaptchaProps,
  type VerifyParam,
} from 'rc-slider-captcha';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { DataSourceManagerFormItemValue } from '../../../components/DataSourceManagerFormItem';
import { SELECT_PREFIX } from '../../../constant';
import type { DataSourceItemConfig, DesignValue } from '../../../types';
import { findDataSourceItemConfigByDynamicId } from '../../../utils';

const selectorPrefix = `${SELECT_PREFIX}-image-captcha`;

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

function resolveDotPath(obj: any, path: string | undefined): any {
  if (!path) return obj;
  const p = String(path).trim();
  if (!p) return obj;
  return p.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

async function requestByConfigWithData(
  cfg: DataSourceItemConfig,
  dataOverride?: Record<string, any>,
): Promise<any> {
  const upper = cfg.request.method.toUpperCase();
  const headers: Record<string, string> = { ...(cfg.request.headers ?? {}) };
  const init: RequestInit = { method: upper, headers };
  let url = cfg.request.url;

  const requestData = { ...(cfg.request.data ?? {}), ...(dataOverride ?? {}) };

  if (upper === 'GET' && requestData && Object.keys(requestData).length > 0) {
    const sp = new URLSearchParams();
    Object.entries(requestData).forEach(([k, v]) => {
      if (v !== undefined && v !== null) sp.append(k, String(v));
    });
    const q = sp.toString();
    if (q) url += (url.includes('?') ? '&' : '?') + q;
  } else if (upper !== 'GET' && requestData) {
    if (!headers['Content-Type'] && !headers['content-type']) {
      headers['Content-Type'] = 'application/json';
    }
    init.body = JSON.stringify(requestData);
  }

  const res = await fetch(url, init);
  return await res.json();
}

async function requestByConfig(cfg: DataSourceItemConfig): Promise<any> {
  return requestByConfigWithData(cfg);
}

function normalizeCaptchaSrc(captcha: string): string {
  const c = String(captcha ?? '');
  if (!c) return '';
  if (/^data:/i.test(c)) return c;
  return `data:image/png;base64,${c}`;
}

export default function ImageCaptchaField(props: ImageCaptchaFieldProps) {
  const {
    rootDesignValue,
    value,
    onChange,
    disabled,
    readOnly,
    placeholder,
    mode = 'image',
    imageApi,
  } = props;

  const [loading, setLoading] = useState(false);
  const lastRequestIdRef = useRef(0);

  const cfg = useMemo(() => {
    const source = imageApi?.source;
    if (!rootDesignValue) return undefined;
    if (!source || source.type !== 'dynamic' || !source.dynamicConfigId) return undefined;
    return findDataSourceItemConfigByDynamicId(rootDesignValue, source.dynamicConfigId);
  }, [imageApi?.source, rootDesignValue]);

  const showRefresh = imageApi?.refresh?.showButton ?? true;
  const autoRefreshOnMount = imageApi?.refresh?.autoRefreshOnMount ?? true;
  const refreshKey = imageApi?.refresh?.refreshKey;
  const sliderCaptcha = props.sliderCaptcha;

  const sliderMode = sliderCaptcha?.mode ?? 'components';
  const sliderActionRef = useRef<ActionType | null>(null);

  const sliderRequestCfg = useMemo(() => {
    const source = sliderCaptcha?.requestApi?.source;
    if (!rootDesignValue) return undefined;
    if (!source || source.type !== 'dynamic' || !source.dynamicConfigId) return undefined;
    return findDataSourceItemConfigByDynamicId(rootDesignValue, source.dynamicConfigId);
  }, [rootDesignValue, sliderCaptcha?.requestApi?.source]);

  const sliderVerifyCfg = useMemo(() => {
    const source = sliderCaptcha?.verifyApi?.source;
    if (!rootDesignValue) return undefined;
    if (!source || source.type !== 'dynamic' || !source.dynamicConfigId) return undefined;
    return findDataSourceItemConfigByDynamicId(rootDesignValue, source.dynamicConfigId);
  }, [rootDesignValue, sliderCaptcha?.verifyApi?.source]);

  const captchaKey = imageApi?.responseMap?.captchaKey ?? 'captcha';
  const tokenKey = imageApi?.responseMap?.tokenKey ?? 'token';
  const dataPath = imageApi?.responseMap?.dataPath ?? '';

  async function refresh() {
    if (!cfg) return;

    const requestId = ++lastRequestIdRef.current;
    setLoading(true);
    try {
      const json = await requestByConfig(cfg);
      // 约定：先做 code 校验
      const code = json?.[cfg.request.codeKey];
      if (code !== cfg.request.codeSuccess) return;

      const payload = json?.[cfg.request.dataKey];
      const data = resolveDotPath(payload, dataPath);
      const nextCaptcha = data?.[captchaKey];
      const nextToken = data?.[tokenKey];

      if (requestId !== lastRequestIdRef.current) return;

      onChange?.({
        ...(value ?? {}),
        mode: 'image',
        captcha: nextCaptcha ? String(nextCaptcha) : undefined,
        token: nextToken ? String(nextToken) : undefined,
      });
    } finally {
      if (requestId === lastRequestIdRef.current) setLoading(false);
    }
  }

  useEffect(() => {
    if (mode !== 'image') return;
    if (!autoRefreshOnMount) return;
    if (!cfg) return;
    // 初次进入且尚未有 captcha 时自动拉取
    if (!value?.captcha) void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRefreshOnMount, cfg, mode]);

  useEffect(() => {
    if (mode !== 'image') return;
    if (!cfg) return;
    if (refreshKey === undefined) return;
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey]);

  useEffect(() => {
    if (mode !== 'slider') return;
    if (sliderCaptcha?.refreshKey === undefined) return;
    sliderActionRef.current?.refresh?.(true);
  }, [mode, sliderCaptcha?.refreshKey]);

  if (mode === 'slider') {
    if (sliderMode !== 'api') {
      return (
        <div className={`${selectorPrefix}-captcha`}>
          <div className={`${selectorPrefix}-body`}>
            <Input disabled value={Intl.get('slider_captcha_components_need_runtime')} />
          </div>
        </div>
      );
    }

    if (!rootDesignValue) {
      return (
        <div className={selectorPrefix}>
          <div className={`${selectorPrefix}-body`}>
            <Input disabled value={Intl.get('slider_captcha_need_root_design_value')} />
          </div>
        </div>
      );
    }

    const request = async () => {
      if (!sliderRequestCfg)
        return Promise.reject(new Error(Intl.get('slider_request_data_source_missing')));

      const json = await requestByConfig(sliderRequestCfg);
      const code = json?.[sliderRequestCfg.request.codeKey];
      if (code !== sliderRequestCfg.request.codeSuccess)
        return Promise.reject(new Error('获取拼图失败'));

      const payload = json?.[sliderRequestCfg.request.dataKey];
      const data = resolveDotPath(payload, sliderCaptcha?.requestApi?.responseMap?.dataPath ?? '');
      const bgUrlKey = sliderCaptcha?.requestApi?.responseMap?.bgUrlKey ?? 'bgUrl';
      const puzzleUrlKey = sliderCaptcha?.requestApi?.responseMap?.puzzleUrlKey ?? 'puzzleUrl';
      return {
        bgUrl: String(data?.[bgUrlKey] ?? ''),
        puzzleUrl: String(data?.[puzzleUrlKey] ?? ''),
      };
    };

    const onVerify = async (data: VerifyParam) => {
      if (!sliderVerifyCfg)
        return Promise.reject(new Error(Intl.get('slider_verify_data_source_missing')));

      const json = await requestByConfigWithData(sliderVerifyCfg, data as any);
      const code = json?.[sliderVerifyCfg.request.codeKey];
      if (code !== sliderVerifyCfg.request.codeSuccess)
        return Promise.reject(new Error('验证失败'));

      const payload = json?.[sliderVerifyCfg.request.dataKey];
      const resData = resolveDotPath(
        payload,
        sliderCaptcha?.verifyApi?.responseMap?.dataPath ?? '',
      );
      const tokenKey = sliderCaptcha?.verifyApi?.responseMap?.tokenKey ?? 'token';

      const token = resData?.[tokenKey];
      onChange?.({
        ...(value ?? {}),
        mode: 'slider',
        captcha: undefined,
        token: token != null ? String(token) : undefined,
      });

      return Promise.resolve();
    };

    const mergedProps: Partial<SliderCaptchaProps> = ((sliderCaptcha?.components as any) ??
      {}) as any;

    return (
      <SliderCaptcha
        {...(mergedProps as any)}
        actionRef={sliderActionRef as any}
        request={request}
        onVerify={onVerify}
      />
    );
  }

  const captchaSrc = value?.captcha ? normalizeCaptchaSrc(value.captcha) : '';

  return (
    <div className={`${selectorPrefix}`}>
      <div className={`${selectorPrefix}-body`}>
        <Input
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          value={value?.token ?? ''}
        />
      </div>

      <div className={`${selectorPrefix}-img`}>
        <Spin spinning={loading}>
          {captchaSrc ? (
            <img src={captchaSrc} alt={Intl.get('image_captcha')} />
          ) : (
            <span>{Intl.get('captcha')}</span>
          )}
        </Spin>
      </div>

      {showRefresh && (
        <Button onClick={() => void refresh()} disabled={disabled || readOnly || !cfg}>
          {Intl.get('refresh')}
        </Button>
      )}
    </div>
  );
}
