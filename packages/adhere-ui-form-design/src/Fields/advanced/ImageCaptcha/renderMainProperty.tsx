import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';
import { Segmented } from 'antd';

import {
  DataSourceManagerFormItem,
  MonacoEditorFormItem,
  WhetherRadioHorizontalDict,
  buildFormPropertyPlaceholderRow,
} from '../../../components';
import { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../utils';

const MainProperty = createMainProperty({
  formName: 'imageCaptchaMainProperty',
  getDefaultFormItems: (designValue, ctx): DataItemRow[] => {
    const mode = ctx.watchValues?.mode ?? 'image';
    const sliderMode = ctx.watchValues?.sliderCaptcha?.mode ?? 'components';

    const rows: (DataItemRow | boolean)[] = [
      {
        key: 'mode',
        require: false,
        label: <Label>{Intl.get('mode')}：</Label>,
        value: (
          <Value>
            <Form.Item name="mode">
              <Segmented
                options={[
                  { label: Intl.get('image_captcha'), value: 'image' },
                  { label: Intl.get('slider_captcha'), value: 'slider' },
                ]}
              />
            </Form.Item>
          </Value>
        ),
      },
      buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),

      mode === 'image' && {
        key: 'imageApi.source',
        require: false,
        label: <Label>{Intl.get('data_source_manager')}：</Label>,
        value: (
          <Value>
            <Form.Item name={['imageApi', 'source']}>
              <DataSourceManagerFormItem />
            </Form.Item>
          </Value>
        ),
      },
      mode === 'image' && {
        key: 'imageApi.responseMap.captchaKey',
        require: false,
        label: <Label>{Intl.get('captcha_key')}：</Label>,
        value: (
          <Value>
            <Form.Item name={['imageApi', 'responseMap', 'captchaKey']}>
              <Input.OptimizedInput placeholder="captcha" maxLength={100} showCount={false} />
            </Form.Item>
          </Value>
        ),
      },
      mode === 'image' && {
        key: 'imageApi.responseMap.tokenKey',
        require: false,
        label: <Label>{Intl.get('token_key')}：</Label>,
        value: (
          <Value>
            <Form.Item name={['imageApi', 'responseMap', 'tokenKey']}>
              <Input.OptimizedInput placeholder="token" maxLength={100} showCount={false} />
            </Form.Item>
          </Value>
        ),
      },
      mode === 'image' && {
        key: 'imageApi.responseMap.dataPath',
        require: false,
        label: <Label>{Intl.get('data_path')}：</Label>,
        value: (
          <Value>
            <Form.Item name={['imageApi', 'responseMap', 'dataPath']}>
              <Input.OptimizedInput placeholder="data.xxx" maxLength={200} showCount={false} />
            </Form.Item>
          </Value>
        ),
      },
      mode === 'image' && {
        key: 'imageApi.refresh.showButton',
        require: false,
        label: <Label>{Intl.get('show_refresh_button')}：</Label>,
        value: (
          <Value>
            <Form.Item name={['imageApi', 'refresh', 'showButton']}>
              <WhetherRadioHorizontalDict />
            </Form.Item>
          </Value>
        ),
      },
      mode === 'image' && {
        key: 'imageApi.refresh.autoRefreshOnMount',
        require: false,
        label: <Label>{Intl.get('auto_refresh_on_mount')}：</Label>,
        value: (
          <Value>
            <Form.Item name={['imageApi', 'refresh', 'autoRefreshOnMount']}>
              <WhetherRadioHorizontalDict />
            </Form.Item>
          </Value>
        ),
      },

      mode === 'slider' && {
        key: 'sliderCaptcha.mode',
        require: false,
        label: <Label>{Intl.get('slider_mode')}：</Label>,
        value: (
          <Value>
            <Form.Item name={['sliderCaptcha', 'mode']}>
              <Segmented
                options={[
                  { label: Intl.get('slider_captcha_components'), value: 'components' },
                  { label: Intl.get('slider_captcha_api'), value: 'api' },
                ]}
              />
            </Form.Item>
          </Value>
        ),
      },
      mode === 'slider' &&
        sliderMode === 'components' && {
          key: 'sliderCaptcha.components',
          require: false,
          label: <Label>{Intl.get('slider_captcha_components')}：</Label>,
          value: (
            <Value>
              <Form.Item name={['sliderCaptcha', 'components']}>
                <MonacoEditorFormItem language="json" />
              </Form.Item>
            </Value>
          ),
        },
      mode === 'slider' &&
        sliderMode === 'api' && {
          key: 'sliderCaptcha.verifyApi.source',
          require: false,
          label: <Label>{Intl.get('slider_verify_data_source')}：</Label>,
          value: (
            <Value>
              <Form.Item name={['sliderCaptcha', 'verifyApi', 'source']}>
                <DataSourceManagerFormItem />
              </Form.Item>
            </Value>
          ),
        },
      mode === 'slider' &&
        sliderMode === 'api' && {
          key: 'sliderCaptcha.requestApi.source',
          require: false,
          label: <Label>{Intl.get('slider_request_data_source')}：</Label>,
          value: (
            <Value>
              <Form.Item name={['sliderCaptcha', 'requestApi', 'source']}>
                <DataSourceManagerFormItem />
              </Form.Item>
            </Value>
          ),
        },
      mode === 'slider' &&
        sliderMode === 'api' && {
          key: 'sliderCaptcha.requestApi.responseMap.bgUrlKey',
          require: false,
          label: <Label>{Intl.get('bg_url_key')}：</Label>,
          value: (
            <Value>
              <Form.Item name={['sliderCaptcha', 'requestApi', 'responseMap', 'bgUrlKey']}>
                <Input.OptimizedInput placeholder="bgUrl" maxLength={100} showCount={false} />
              </Form.Item>
            </Value>
          ),
        },
      mode === 'slider' &&
        sliderMode === 'api' && {
          key: 'sliderCaptcha.requestApi.responseMap.puzzleUrlKey',
          require: false,
          label: <Label>{Intl.get('puzzle_url_key')}：</Label>,
          value: (
            <Value>
              <Form.Item name={['sliderCaptcha', 'requestApi', 'responseMap', 'puzzleUrlKey']}>
                <Input.OptimizedInput placeholder="puzzleUrl" maxLength={100} showCount={false} />
              </Form.Item>
            </Value>
          ),
        },
      mode === 'slider' &&
        sliderMode === 'api' && {
          key: 'sliderCaptcha.requestApi.responseMap.dataPath',
          require: false,
          label: <Label>{Intl.get('data_path')}：</Label>,
          value: (
            <Value>
              <Form.Item name={['sliderCaptcha', 'requestApi', 'responseMap', 'dataPath']}>
                <Input.OptimizedInput placeholder="data.xxx" maxLength={200} showCount={false} />
              </Form.Item>
            </Value>
          ),
        },
      mode === 'slider' &&
        sliderMode === 'api' && {
          key: 'sliderCaptcha.verifyApi.responseMap.tokenKey',
          require: false,
          label: <Label>{Intl.get('token_key')}：</Label>,
          value: (
            <Value>
              <Form.Item name={['sliderCaptcha', 'verifyApi', 'responseMap', 'tokenKey']}>
                <Input.OptimizedInput placeholder="token" maxLength={100} showCount={false} />
              </Form.Item>
            </Value>
          ),
        },
      mode === 'slider' &&
        sliderMode === 'api' && {
          key: 'sliderCaptcha.verifyApi.responseMap.dataPath',
          require: false,
          label: <Label>{Intl.get('data_path')}：</Label>,
          value: (
            <Value>
              <Form.Item name={['sliderCaptcha', 'verifyApi', 'responseMap', 'dataPath']}>
                <Input.OptimizedInput placeholder="data.xxx" maxLength={200} showCount={false} />
              </Form.Item>
            </Value>
          ),
        },
    ];

    return rows.filter(Boolean) as DataItemRow[];
  },
  autoFill: true,
  payloadToValues: (fieldProps) => {
    // MonacoEditorFormItem 期望 string，这里将 sliderCaptcha.components 做序列化/反序列化
    const next = { ...(fieldProps ?? {}) };
    const raw = next?.sliderCaptcha?.components;
    if (raw && typeof raw !== 'string') {
      next.sliderCaptcha = { ...(next.sliderCaptcha ?? {}), components: JSON.stringify(raw, null, 2) };
    }
    if (!raw) {
      next.sliderCaptcha = { ...(next.sliderCaptcha ?? {}), components: '' };
    }
    return next;
  },
  valuesToPayload: (values) => {
    const next = { ...(values ?? {}) };
    const raw = next?.sliderCaptcha?.components;
    if (typeof raw === 'string') {
      try {
        next.sliderCaptcha = { ...(next.sliderCaptcha ?? {}), components: raw.trim() ? JSON.parse(raw) : {} };
      } catch {
        // 解析失败时保留原字符串，避免用户输入被覆盖
      }
    }
    return next;
  },
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}

