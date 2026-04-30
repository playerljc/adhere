import { Button, Input, Space } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { DataSourceManagerFormItemValue } from '../../../components/DataSourceManagerFormItem';
import { SELECT_PREFIX } from '../../../constant';
import type { DataSourceItemConfig, DesignValue } from '../../../types';
import { findDataSourceItemConfigByDynamicId } from '../../../utils';

const selectorPrefix = `${SELECT_PREFIX}-send-sms`;

export type SendSMSValue = {
  code?: string;
};

export type SendSMSFieldProps = {
  rootDesignValue?: DesignValue;
  value?: SendSMSValue;
  /**
   * 非受控模式下的初始值（设计器画布中使用）
   */
  defaultValue?: SendSMSValue;
  onChange?: (value: SendSMSValue) => void;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  /**
   * 倒计时秒数
   */
  countdownSeconds?: number;
  /**
   * 发送验证码数据源
   */
  sendApi?: {
    source?: DataSourceManagerFormItemValue;
    responseMap?: {
      /** dot-path，从 dataKey 对应 payload 中继续向下取值 */
      dataPath?: string;
    };
    /**
     * 请求时附加的动态参数（会与数据源管理里配置的 request.data 合并）
     */
    requestData?: Record<string, any>;
  };
  /**
   * 设计器下发的 actions（事件），兼容旧版：未配置分区事件时共用
   */
  actions?: Record<string, (...args: any[]) => any>;
  /** 左侧输入框事件（与 actions 合并，本侧优先） */
  codeInputActions?: Record<string, (...args: any[]) => any>;
  /** 发送按钮事件（与 actions 合并，本侧优先） */
  sendButtonActions?: Record<string, (...args: any[]) => any>;
  /** 倒计时事件（tick/finish/reset 等），优先于 actions 内同名 */
  countdownActions?: Record<string, (...args: any[]) => any>;
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
  const headers: Record<string, string> = { ...(cfg.request.headers ?? {}) } as any;
  const init: RequestInit = { method: upper, headers };
  let url = cfg.request.url;

  const requestData = { ...(cfg.request.data ?? {}), ...(dataOverride ?? {}) };

  if ((upper === 'GET' || upper === 'DELETE') && requestData && Object.keys(requestData).length > 0) {
    const sp = new URLSearchParams();
    Object.entries(requestData).forEach(([k, v]) => {
      if (v !== undefined && v !== null) sp.append(k, String(v));
    });
    const q = sp.toString();
    if (q) url += (url.includes('?') ? '&' : '?') + q;
  } else if (upper !== 'GET' && upper !== 'DELETE' && requestData) {
    if (!headers['Content-Type'] && !headers['content-type']) {
      headers['Content-Type'] = 'application/json';
    }
    init.body = JSON.stringify(requestData);
  }

  const res = await fetch(url, init);
  return await res.json();
}

export default function SendSMSField(props: SendSMSFieldProps) {
  const {
    rootDesignValue,
    value,
    defaultValue,
    onChange,
    disabled,
    readOnly,
    placeholder,
    countdownSeconds = 60,
    sendApi,
    actions,
    codeInputActions,
    sendButtonActions,
    countdownActions,
  } = props;

  const mergedCodeInputEvents = useMemo(
    () => ({ ...(actions ?? {}), ...(codeInputActions ?? {}) }),
    [actions, codeInputActions],
  );
  const mergedSendButtonEvents = useMemo(
    () => ({ ...(actions ?? {}), ...(sendButtonActions ?? {}) }),
    [actions, sendButtonActions],
  );
  const mergedCountdownEvents = useMemo(
    () => ({ ...(actions ?? {}), ...(countdownActions ?? {}) }),
    [actions, countdownActions],
  );

  const [inner, setInner] = useState<SendSMSValue>(defaultValue ?? {});
  const mergedValue = value ?? inner;

  const [sending, setSending] = useState(false);
  const [leftSeconds, setLeftSeconds] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  const cfg = useMemo(() => {
    const source = sendApi?.source;
    if (!rootDesignValue) return undefined;
    if (!source || source.type !== 'dynamic' || !source.dynamicConfigId) return undefined;
    return findDataSourceItemConfigByDynamicId(rootDesignValue, source.dynamicConfigId);
  }, [rootDesignValue, sendApi?.source]);

  const disabledSend = disabled || readOnly || sending || leftSeconds > 0 || !cfg;

  function emit(next: SendSMSValue) {
    if (value === undefined) setInner(next);
    onChange?.(next);
  }

  const safeClearTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startCountdown = (seconds: number) => {
    safeClearTimer();
    const total = Math.max(0, Number(seconds) || 0);
    if (!total) return;

    setLeftSeconds(total);
    mergedCountdownEvents?.onCountdownReset?.(total);

    timerRef.current = window.setInterval(() => {
      setLeftSeconds((prev) => {
        const next = Math.max(0, prev - 1);
        mergedCountdownEvents?.onCountdownTick?.(next);
        if (next === 0) {
          safeClearTimer();
          mergedCountdownEvents?.onCountdownFinish?.();
        }
        return next;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => safeClearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSend() {
    if (!cfg || disabledSend) return;
    setSending(true);
    try {
      const json = await requestByConfigWithData(cfg, sendApi?.requestData);
      const code = json?.[cfg.request.codeKey];
      if (code !== cfg.request.codeSuccess) return;
      const payload = json?.[cfg.request.dataKey];
      const data = resolveDotPath(payload, sendApi?.responseMap?.dataPath ?? '');
      mergedCountdownEvents?.onSendSuccess?.(data, json);
      startCountdown(countdownSeconds);
    } catch (e) {
      mergedCountdownEvents?.onSendError?.(e);
    } finally {
      setSending(false);
    }
  }

  return (
    <Space.Compact className={selectorPrefix} block>
      <Input
        className={`${selectorPrefix}-input`}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        value={mergedValue?.code ?? ''}
        {...mergedCodeInputEvents}
        onChange={(e) => {
          emit({ ...(mergedValue ?? {}), code: e.target.value });
        }}
      />

      <Button
        className={`${selectorPrefix}-send`}
        disabled={disabledSend}
        loading={sending}
        {...mergedSendButtonEvents}
        onClick={(e) => {
          mergedSendButtonEvents?.onClick?.(e);
          void handleSend();
        }}
      >
        {leftSeconds > 0 ? Intl.get('send_sms_countdown', { value: leftSeconds }) : Intl.get('send_sms')}
      </Button>
    </Space.Compact>
  );
}

