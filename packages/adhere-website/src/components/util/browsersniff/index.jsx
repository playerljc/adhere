import React from 'react';
import { Table } from 'antd';
import { Browsersniff, Space } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => {
  return (
    <div className="Page">
      <h1>Browsersniff(浏览器嗅探的库)</h1>
      <p>
        选用
        <a style={{ margin: '0 10px' }} href="https://github.com/mumuy/browser" target="_blank">
          https://github.com/mumuy/browser
        </a>
        库来实现 - 用来嗅探用户浏览器的型号，版本，内核等信息
      </p>

      <FunctionProps
        border
        title="主方法"
        data={[
          {
            name: 'browser',
            desc: '获取浏览器名称',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'device',
            desc: '获取设备类型',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'engine',
            desc: '获取引擎',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'language',
            desc: '获取语言',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'os',
            desc: '获取操作系统',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'osVersion',
            desc: '获取os的版本号',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'version',
            desc: '获取浏览器版本',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="浏览器嗅探"
        data={[
          {
            name: 'isBrowserSafari',
            desc: '是否是Safari浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserChrome',
            desc: '是否是Chrome浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserIE',
            desc: '是否是IE浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserEdge',
            desc: '是否是Edge浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserFirefox',
            desc: '是否是Firefox浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserFirefoxFocus',
            desc: '是否是FirefoxFocus浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserChromium',
            desc: '是否是Chromium浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserOpera',
            desc: '是否是Opera浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserVivaldi',
            desc: '是否是Vivaldi浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserArora',
            desc: '是否是Arora浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserLunascape',
            desc: '是否是Lunascape浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserQupZilla',
            desc: '是否是QupZilla浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserCocCoc',
            desc: '是否是Coc Coc浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserKindle',
            desc: '是否是Kindle浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserIceweasel',
            desc: '是否是Iceweasel浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserKonqueror',
            desc: '是否是Konqueror浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserIceape',
            desc: '是否是Iceape浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserSeaMonkey',
            desc: '是否是SeaMonkey浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserEpiphany',
            desc: '是否是Epiphany浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowser360',
            desc: '是否是360浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowser360EE',
            desc: '是否是360EE浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowser360SE',
            desc: '是否是360SE浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserUC',
            desc: '是否是UC浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserQQBrowser',
            desc: '是否是QQBrowser浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserQQ',
            desc: '是否是QQ浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserBaidu',
            desc: '是否是Baidu浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserMaxthon',
            desc: '是否是Maxthon浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserSogou',
            desc: '是否是Sogou浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserLiebao',
            desc: '是否是Liebao浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowser2345Explorer',
            desc: '是否是2345Explorer浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowser115Browser',
            desc: '是否是115Browser浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserTheWorld',
            desc: '是否是TheWorld浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserXiaoMi',
            desc: '是否是XiaoMi浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserQuark',
            desc: '是否是Quark浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserQiyu',
            desc: '是否是Qiyu浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserWechat',
            desc: '是否是Wechat浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserWechatWork',
            desc: '是否是WechatWork浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserTaobao',
            desc: '是否是Taobao浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserAlipay',
            desc: '是否是Alipay浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserWeibo',
            desc: '是否是Weibo浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserDouban',
            desc: '是否是Douban浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserSuning',
            desc: '是否是Suning浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowseriQiYi',
            desc: '是否是iQiYi浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserDingTalk',
            desc: '是否是DingTalk浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserHuawei',
            desc: '是否是Huawei浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserVivo',
            desc: '是否是Vivo浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isBrowserNightly',
            desc: '是否是Nightly浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="设备嗅探"
        data={[
          {
            name: 'isDevicePC',
            desc: '是否是PC浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isDeviceMobile',
            desc: '是否是Mobile浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isDeviceTablet',
            desc: '是否是Tablet浏览器',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="内核嗅探"
        data={[
          {
            name: 'isEngineWebKit',
            desc: '是否是WebKit内核',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isEngineTrident',
            desc: '是否是Trident内核',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isEngineGecko',
            desc: '是否是Gecko内核',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isEnginePresto',
            desc: '是否是Presto内核',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isEngineKHTML',
            desc: '是否是KHTML内核',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isEngineBlink',
            desc: '是否是Blink内核',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'isEngineEdgeHTML',
            desc: '是否是EdgeHTML内核',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="操作系统嗅探"
        data={[
          {
            name: 'iSOSWindows',
            desc: '是否是Windows',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSLinux',
            desc: '是否是Linux',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSMaxOS',
            desc: '是否是Mac OS',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSAndroid',
            desc: '是否是Android',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSHarmonyOS',
            desc: '是否是HarmonyOS',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSUbuntu',
            desc: '是否是Ubuntu',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSFreeBSD',
            desc: '是否是FreeBSD',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSDebian',
            desc: '是否是Debian',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSiOS',
            desc: '是否是iOS',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSWindowsPhone',
            desc: '是否是Windows Phone',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSBlackBerry',
            desc: '是否是BlackBerry',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSMeeGo',
            desc: '是否是MeeGo',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSSymbian',
            desc: '是否是Symbian',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSChromeOS',
            desc: '是否是Chrome OS',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'iSOSWebOS',
            desc: '是否是WebOS',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
        ]}
      />

      <h2>例子</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { Table } from 'antd';
  import { Browsersniff } from '@baifendian/adhere';
  
  <Table
    columns={[
      {
        title: '浏览器',
        dataIndex: 'browser',
        key: 'browser',
      },
      {
        title: '版本',
        dataIndex: 'version',
        key: 'version',
      },
      {
        title: '内核',
        dataIndex: 'engine',
        key: 'engine',
      },
      {
        title: '操作系统',
        dataIndex: 'os',
        key: 'os',
      },
      {
        title: '设备',
        dataIndex: 'device',
        key: 'device',
      },
      {
        title: '语言',
        dataIndex: 'language',
        key: 'language',
      },
    ]}
    dataSource={[
      {
        browser: Browsersniff.browser(),
        device: Browsersniff.device(),
        engine: Browsersniff.engine(),
        language: Browsersniff.language(),
        os: Browsersniff.os(),
        version: Browsersniff.version(),
      },
    ]}
  />
      `}
      >
        <Table
          columns={[
            {
              title: '浏览器',
              dataIndex: 'browser',
              key: 'browser',
            },
            {
              title: '版本',
              dataIndex: 'version',
              key: 'version',
            },
            {
              title: '内核',
              dataIndex: 'engine',
              key: 'engine',
            },
            {
              title: '操作系统',
              dataIndex: 'os',
              key: 'os',
            },
            {
              title: '设备',
              dataIndex: 'device',
              key: 'device',
            },
            {
              title: '语言',
              dataIndex: 'language',
              key: 'language',
            },
          ]}
          dataSource={[
            {
              browser: Browsersniff.browser(),
              device: Browsersniff.device(),
              engine: Browsersniff.engine(),
              language: Browsersniff.language(),
              os: Browsersniff.os(),
              version: Browsersniff.version(),
            },
          ]}
        />
      </Playground>
    </div>
  );
};
