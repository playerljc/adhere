import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import SelectAutoComplete from './SelectAutoComplete';
import TableAutoComplete from './TableAutoComplete';
import TablePaginMultipleAutoComplete from './TablePaginMultipleAutoComplete';
import TablePaginRadioAutoComplete from './TablePaginRadioAutoComplete';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="AutoComplete">
        <p>自动补全</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
          {
            id: `p1`,
            name: `Select的自动补全`,
            cardProps: {
              description: {
                title: 'Select的自动补全',
                info: 'Select的自动补全',
              },
            },
            active: 'index.jsx',
            config: [
              {
                key: 'index.jsx',
                title: 'index.jsx',
                codeText: `
  import React from 'react';
  import SelectAutoComplete from './SelectAutoComplete';

  export default () => <SelectAutoComplete />
      `,
              },
              {
                key: 'SelectAutoComplete.jsx',
                title: 'SelectAutoComplete.jsx',
                codeText: `
  import React, { useState } from 'react';

  import AutoComplete from '@baifendian/adhere';

  import Book from './data';

  export default () => {
    const [options, setOptions] = useState([]);

    const [value, setValue] = useState([]);

    return (
      <AutoComplete
        value={value}
        mode="multiple"
        style={{ width: 600 }}
        loadData={(_kw) => {
          return new Promise((resolve) => {
            if (!_kw) {
              setOptions([]);
              resolve();
              return;
            }

            setTimeout(() => {
              const result = [...Book]
                .filter((_book) => _book.t.indexOf(_kw) !== -1)
                .map((t) => ({
                  label: t.t,
                  value: t.id,
                }));

              setOptions(result);

              resolve();
            }, 500);
          });
        }}
        options={options}
        onChange={(_value) => {
          setValue(_value);
        }}
      />
    );
  };
      `,
              },
              {
                key: 'data.js',
                title: 'data.js',
                codeText: `
  import Mock from 'mockjs';

  export default [
    {
      label: '机工出版',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12867066$index=0$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=5e6dfffac3b6153fd8bff47e87e8936af82c94a7',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/120451/32/2132/115695/5ec27278E6517693f/ce6ab5d066ea8306.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12867066',
      jp: '59.90',
      mp: '0',
      onTime: '2020-05-12 14:01:32.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12867066,
      spu: 12867066,
      subTag: 0,
      subsku: [],
      t: '云原生：运用容器、函数计算和数据构建下一代应用',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.4649,
      wt: '0.3400000035762787',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '中国电力出版社（zhongguodianlichubanshe）',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12711102$index=1$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=24019c23078558681865985e4a4ce6d35a598182',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/52215/8/13148/223136/5d9e8a65E56abe3d4/b573a9d5f96c2cab.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12711102',
      jp: '46.90',
      mp: '0',
      onTime: '2019-09-18 10:39:26.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12711102,
      spu: 12711102,
      subTag: 0,
      subsku: [],
      t: '分布式系统应用设计',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.4574,
      wt: '0.25999999046325684',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '机工出版',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12770214$index=2$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=3da5964e841201f19aecbb5a5c1facd0a7cd2bff',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/205767/31/31581/58223/641ab385F7b333f6c/d4b82f9669ed5663.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12770214',
      jp: '70.40',
      mp: '0',
      onTime: '2019-12-04 13:45:59.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12770214,
      spu: 12770214,
      subTag: 0,
      subsku: [],
      t: '数据中台：让数据用起来',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.4506,
      wt: '0.6200000047683716',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '机工出版',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12824930$index=3$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=4e89705b7ae0bf8ebbb0bb4b9daf24b94e095a67',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/94163/30/15660/118673/5e7480f3E16bcf3e8/27b8208f1e560829.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12824930',
      jp: '59.90',
      mp: '0',
      onTime: '2020-03-20 08:33:31.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12824930,
      spu: 12824930,
      subTag: 0,
      subsku: [],
      t: '用户画像：方法论与工程化解决方案',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.4504,
      wt: '0.5099999904632568',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '机工出版',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=11932929$index=4$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=1a2b5b92a093db17b314e1d2571df8e2f9ac8d43',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t2755/211/2339530899/218323/1c539fb5/576399d6N32a0095e.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '11932929',
      jp: '52.29',
      mp: '0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 11932929,
      spu: 11932929,
      subTag: 0,
      subsku: [],
      t: '白话大数据与机器学习',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.4265,
      wt: '0.574999988079071',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '异步图书',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12359205$index=5$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=e83e595013aaf7a67c7e60b79cec9a18785f4efe',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t21247/296/241932505/155218/c6af60f8/5b06436aNe4d642ee.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12359205',
      jp: '46.59',
      mp: '0',
      onTime: '2018-05-24 14:41:55.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12359205,
      spu: 12359205,
      subTag: 0,
      subsku: [],
      t: '分布式对象存储：原理、架构及Go语言实现(异步图书出品)',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3537,
      wt: '0.36000001430511475',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '机工出版',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12998056$index=6$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=80a71f2843cd8ea6592443c3871f1ebbf07f4cbf',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/179924/14/33220/46740/641d05b7F50075fef/84136eabd3e4946c.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12998056',
      jp: '67.50',
      mp: '0',
      onTime: '2020-10-14 14:55:44.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12998056,
      spu: 12998056,
      subTag: 0,
      subsku: [],
      t: '华为数据之道 华为官方出品',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3519,
      wt: '0.5149999856948853',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '异步图书',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12179700$index=7$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=df947f8f1a1bee740eca5e91f69e5b676894416b',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t4615/84/3483983245/506348/4a945a9d/58fd6e7bNe66053d6.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12179700',
      jp: '36.70',
      mp: '0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12179700,
      spu: 12179700,
      subTag: 0,
      subsku: [],
      t: '数据湖架构(异步图书出品)',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3514,
      wt: '0.25',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '机械工业出版社（CMP）',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=10050588502008$index=8$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=fcd68e599a09e9de2180ed4a555ecc7806cd9587',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/44499/32/24633/114168/63c7b49eF65b77e44/05618b9d9b07b717.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '10050588502008',
      jp: '82.80',
      mp: '0',
      onTime: '2022-04-27 11:27:59.0',
      renl: 99,
      rn: 'SKU',
      rt: '0',
      sku: 10050588502008,
      spu: 10050588502008,
      subTag: 0,
      subsku: [],
      t: '官网 首席数据官管理手册:建立并运行组织的数据供应链 首席数据官 数据治理书籍',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3503,
      wt: '1.0',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '电子工业出版社',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=13201004$index=9$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=aba67ebb45c387e3b328b3298f5346b6d70715c9',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/161029/25/16998/128451/606eba8eE11c2ff98/4c076c716dd081d4.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '13201004',
      jp: '89.00',
      mp: '0',
      onTime: '2021-04-08 15:13:51.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 13201004,
      spu: 13201004,
      subTag: 0,
      subsku: [],
      t: '深入集群：大型数据中心资源调度与管理(博文视点出品)',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3461,
      wt: '0.36899998784065247',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '清华大学',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=13321041$index=10$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=7050ac4085e2a4369bac3c7547022f108d5e548f',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/106641/28/30426/49909/62f0cb82E168f7516/905646f04d6afc11.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '13321041',
      jp: '73.00',
      mp: '0',
      onTime: '2022-08-02 16:37:04.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 13321041,
      spu: 13321041,
      subTag: 0,
      subsku: [],
      t: 'Greenplum构建实时数据仓库实践（大数据技术丛书）',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3458,
      wt: '0.6499999761581421',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '异步图书',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=13100363$index=11$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=778d257fa1d09e6e519ba782bfab721f07e164c',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/144752/38/26014/433331/6230109cE32e7e184/753cb6bc58e8f29a.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '13100363',
      jp: '71.00',
      mp: '0',
      onTime: '2022-03-16 13:52:10.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 13100363,
      spu: 13100363,
      subTag: 0,
      subsku: [],
      t: 'Calcite数据管理实战（异步图书出品）',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3451,
      wt: '0.42500001192092896',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '电子工业出版社',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=13413702$index=12$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=4ae398a6e4eab7e0544afd7bdaa35ea04038927f',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/189318/3/21417/124387/61308bfaE25a5ef6d/5fe703f072cc0983.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '13413702',
      jp: '85.00',
      mp: '0',
      onTime: '2021-09-02 15:11:39.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 13413702,
      spu: 13413702,
      subTag: 0,
      subsku: [],
      t: '数据可视化五部曲',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3441,
      wt: '0.4009999930858612',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: 'iTuring',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=13572193$index=13$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=e6ec2116afa50e2a66b48ab10133069b6c4afe32',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/92496/17/28698/80747/63838aaeE21cf226d/8b5d979ebf94be4b.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '13572193',
      jp: '89.90',
      mp: '0',
      onTime: '2022-11-28 14:43:17.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 13572193,
      spu: 13572193,
      subTag: 0,
      subsku: [],
      t: 'Kafka权威指南（第2版）（图灵出品）',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3429,
      wt: '0.5299999713897705',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '电子工业出版社',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=13590264$index=14$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=a1013f8738f8450249fed394aae073773b95b494',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/210817/38/15922/102516/61e11d8eEb2eb24a0/c4221202d016bf27.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '13590264',
      jp: '51.00',
      mp: '0',
      onTime: '2022-01-07 17:55:41.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 13590264,
      spu: 13590264,
      subTag: 0,
      subsku: [],
      t: '文件系统技术内幕：大数据时代海量数据存储之道(博文视点出品)',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3418,
      wt: '0.5400000214576721',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '后浪',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12411288$index=15$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=cef343dd5a8255ed6c4fb85fd55d96cbc3215db',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t20455/58/2492533042/122478/c417390a/5b5a8f79N25bb6957.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12411288',
      jp: '29.60',
      mp: '0',
      onTime: '2018-07-26 16:00:14.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12411288,
      spu: 12411288,
      subTag: 0,
      subsku: [],
      t: '如何用数据解决实际问题',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.341,
      wt: '0.2800000011920929',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '中国电力出版社（zhongguodianlichubanshe）',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=12437624$index=16$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=c06758f68519c038fc53599ec251ff0d4fa6f15e',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/194161/12/31443/53320/636e7543Eabb9d9d1/e69105d638aa5454.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '12437624',
      jp: '103.40',
      mp: '0',
      onTime: '2018-09-07 17:44:47.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 12437624,
      spu: 12437624,
      subTag: 0,
      subsku: [],
      t: '数据密集型应用系统设计',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3383,
      wt: '0.7570000290870667',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '电子工业出版社',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=13477626$index=17$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=f46865d998f210f27be1c06f1aa3849fb07b6e0b',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/212538/28/1093/94757/616ef064E6e769dab/fc2d5dc38185a780.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '13477626',
      jp: '50.50',
      mp: '0',
      onTime: '2021-10-18 16:36:38.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 13477626,
      spu: 13477626,
      subTag: 0,
      subsku: [],
      t: '云原生架构：从技术演进到最佳实践(博文视点出品)',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.338,
      wt: '0.6299999952316284',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
    {
      label: '机工出版',
      broker_info:
        'eyJwIjoiOTAyMDIyIiwiY2x1c3Rlcl9pZCI6ImxmIiwic291cmNlIjoiMCIsInRhZyI6IjUiLCJjc191c2VyIjoiMiIsInBhbGFudGlyX2V4cGlkcyI6IlJ8Ul9SX0xGaXJzdF9MMTg1NTEiLCJleHBpZCI6IiIsInJlcXNpZyI6IjY3NDdmYzk0MmMxM2NkM2QxYzIzOGY1ZmYyOTdlZmFlZTMzOGQxY2MifQ==',
      bylkState: 0,
      c1: 1713,
      c2: 3287,
      c3: 3819,
      clk: '//knicks.jd.com/log/server?t=rec_common_clk&v=type=rec.902022$src=rec$action=1$reqsig=6747fc942c13cd3d1c238f5ff297efaee338d1cc$enb=1$sku=0$skus=11937362,10348454073,12313473,10074117057000$p=902022$pin=$uuid=DUY1DCURFORiIPqUPnIwLDZje%2B%2BQEa%2Bn$csku=13303328$index=18$st=0$adcli=$expid=$mexpid=$im=$rid=2503642004525242098$ver=1$sig=b72e9c4d2c086dc5a6c3d315654c455737e35cf1',
      extendParams: {},
      imageid: 0,
      img: 'jfs/t1/195659/27/6101/125149/60b88c99E664fc595/1fed2eaa68edf962.jpg',
      impr: '1',
      interactiveTag: 0,
      itemid: '13303328',
      jp: '72.59',
      mp: '0',
      onTime: '2021-06-02 09:15:40.0',
      renl: 0,
      rn: 'SKU',
      rt: '0',
      sku: 13303328,
      spu: 13303328,
      subTag: 0,
      subsku: [],
      t: '标签类目体系：面向业务的数据资产设计方法论',
      tips: [
        {
          t: 9999,
          v: '0',
        },
      ],
      turl: '',
      url: '',
      w: 0.3375,
      wt: '0.6449999809265137',
      wxspShopId: 0,
      wxspTag: 0,
      wxspVenderId: 0,
    },
  ].map((t) => {
    const id = Mock.mock('@guid');

    return {
      ...t,
      t: \`\${t.t}1\`,
      value: id,
      label: t.t,
      id,
    };
  });
                `,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <SelectAutoComplete />,
          },
          {
            id: `p2`,
            name: `Table的自动补全`,
            cardProps: {
              description: {
                title: 'Table的自动补全',
                info: 'Table的自动补全',
              },
            },
            active: 'index.jsx',
            config: [
              {
                key: 'index.jsx',
                title: 'index.jsx',
                codeText: `
  import React from 'react';
  import TableAutoComplete from './TableAutoComplete';

  export default () => <TableAutoComplete />
      `,
              },
              {
                key: 'TableAutoComplete.jsx',
                title: 'TableAutoComplete.jsx',
                codeText: `
  import { Table } from 'antd';
  import React, { useState } from 'react';

  import AutoComplete from '@baifendian/adhere';

  import Book from './data';

  export default () => {
    const [options, setOptions] = useState([]);

    const [value, setValue] = useState([]);

    return (
      <AutoComplete
        value={value}
        mode="multiple"
        style={{ width: 600 }}
        loadData={(_kw) => {
          return new Promise((resolve) => {
            if (!_kw) {
              setOptions([]);
              resolve();
              return;
            }

            setTimeout(() => {
              const result = Book.filter((_book) => _book.t.indexOf(_kw) !== -1).map((t) => ({
                label: t.t,
                value: t.id,
                ...t,
              }));

              setOptions(result);

              resolve();
            }, 500);
          });
        }}
        options={options}
        onChange={(_value) => {
          setValue(_value);
        }}
      >
        {({ value: _value, onChange: _onChange, options }) => {
          return (
            <Table
              columns={[
                {
                  title: '名称',
                  key: 'label',
                  dataIndex: 'label',
                },
                {
                  title: '出版社',
                  key: 'label',
                  dataIndex: 'label',
                },
              ]}
              scroll={{
                y: 500,
              }}
              rowKey="id"
              dataSource={options}
              pagination={false}
              rowSelection={{
                type: 'checkbox',
                selectedRowKeys: _value,
                onSelect: function (record, selected, selectedRows) {
                  if (selected) {
                    const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                    _onChange(Array.from(new Set([..._value, ...selectedRowKeys])));
                  } else {
                    _onChange(_value.filter((t) => t !== record.id));
                  }
                },
                onSelectAll: (selected, selectedRows, changeRows) => {
                  if (selected) {
                    const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                    _onChange(Array.from(new Set([..._value, ...selectedRowKeys])));
                  } else {
                    const changeSelectedRowKeys = changeRows.filter((t) => !!t).map((t) => t.value);
                    _onChange(_value.filter((t) => !changeSelectedRowKeys.includes(t)));
                  }
                },
              }}
            />
          );
        }}
      </AutoComplete>
    );
  };
      `,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <TableAutoComplete />,
          },
          {
            id: `p3`,
            name: `Table的单选分页自动补全`,
            cardProps: {
              description: {
                title: 'Table的单选分页自动补全',
                info: 'Table的单选分页自动补全',
              },
            },
            active: 'index.jsx',
            config: [
              {
                key: 'index.jsx',
                title: 'index.jsx',
                codeText: `
  import React from 'react';
  import TablePaginRadioAutoComplete from './TablePaginRadioAutoComplete';

  export default () => <TablePaginRadioAutoComplete />
      `,
              },
              {
                key: 'TablePaginRadioAutoComplete.jsx',
                title: 'TablePaginRadioAutoComplete.jsx',
                codeText: `
  import { Table } from 'antd';
  import React, { useRef, useState } from 'react';

  import AutoComplete from '@baifendian/adhere';

  import Book from './data';

  export default () => {
    const [options, setOptions] = useState([]);

    const kw = useRef();

    const [totalCount, setTotalCount] = useState(0);

    const [value, setValue] = useState([]);

    const pagin = useRef({
      page: 1,
      limit: 10,
    });

    function loadData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const all = [...Book]
            .filter((_book) => {
              return _book.t.indexOf(kw.current) !== -1;
            })
            .map((t) => ({
              label: t.t,
              value: t.id,
              ...t,
            }));

          const result = all.slice(
            (pagin.current.page - 1) * pagin.current.limit,
            pagin.current.page * pagin.current.limit,
          );

          setTotalCount(all.length);
          setOptions(result);

          resolve();
        }, 500);
      });
    }

    return (
      <AutoComplete
        value={value}
        style={{ width: 600 }}
        loadData={(_kw) => {
          return new Promise((resolve) => {
            kw.current = _kw;

            pagin.current = {
              page: 1,
              limit: 10,
            };

            if (!_kw) {
              setOptions([]);
              resolve();
              return;
            }

            loadData();
          });
        }}
        options={options}
        onChange={(_value) => {
          setValue(_value);
        }}
      >
        {({ value: _value, onChange: _onChange, options }) => {
          return (
            <Table
              columns={[
                {
                  title: '名称',
                  key: 'label',
                  dataIndex: 'label',
                },
                {
                  title: '出版社',
                  key: 'label',
                  dataIndex: 'label',
                },
              ]}
              rowKey="id"
              dataSource={options}
              pagination={{
                current: pagin.page,
                pageSize: pagin.limit,
                total: totalCount,
                onChange: (page, pageSize) => {
                  pagin.current = {
                    page,
                    limit: pageSize,
                  };

                  loadData();
                },
                onShowSizeChange: (current, size) => {
                  pagin.current = {
                    page: current,
                    limit: size,
                  };

                  loadData();
                },
              }}
              scroll={{
                y: 500,
              }}
              rowSelection={{
                type: 'radio',
                selectedRowKeys: _value,
                onSelect: function (record, selected, selectedRows) {
                  if (selected) {
                    const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                    _onChange(selectedRowKeys);
                  }
                },
              }}
            />
          );
        }}
      </AutoComplete>
    );
  };
      `,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <TablePaginRadioAutoComplete />,
          },
          {
            id: `p4`,
            name: `Table的多选分页自动补全`,
            cardProps: {
              description: {
                title: 'Table的多选分页自动补全',
                info: 'Table的多选分页自动补全',
              },
            },
            active: 'index.jsx',
            config: [
              {
                key: 'index.jsx',
                title: 'index.jsx',
                codeText: `
  import React from 'react';
  import TablePaginMultipleAutoComplete from './TablePaginMultipleAutoComplete';

  export default () => <TablePaginMultipleAutoComplete />
      `,
              },
              {
                key: 'TablePaginMultipleAutoComplete.jsx',
                title: 'TablePaginMultipleAutoComplete.jsx',
                codeText: `
  import { Table } from 'antd';
  import React, { useRef, useState } from 'react';

  import AutoComplete from '@baifendian/adhere';

  import Book from './data';

  export default () => {
    const [options, setOptions] = useState([]);

    const kw = useRef();

    const [totalCount, setTotalCount] = useState(0);

    const [value, setValue] = useState([]);

    const pagin = useRef({
      page: 1,
      limit: 10,
    });

    function loadData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const all = [...Book]
            .filter((_book) => {
              return _book.t.indexOf(kw.current) !== -1;
            })
            .map((t) => ({
              label: t.t,
              value: t.id,
              ...t,
            }));

          const result = all.slice(
            (pagin.current.page - 1) * pagin.current.limit,
            pagin.current.page * pagin.current.limit,
          );

          setTotalCount(all.length);
          setOptions(result);

          resolve();
        }, 500);
      });
    }

    return (
      <AutoComplete
        value={value}
        mode="multiple"
        style={{ width: 600 }}
        loadData={(_kw) => {
          return new Promise((resolve) => {
            kw.current = _kw;

            pagin.current = {
              page: 1,
              limit: 10,
            };

            if (!_kw) {
              setOptions([]);
              resolve();
              return;
            }

            loadData();
          });
        }}
        options={options}
        onChange={(_value) => {
          setValue(_value);
        }}
      >
        {({ value: _value, onChange: _onChange, options }) => {
          return (
            <Table
              columns={[
                {
                  title: '名称',
                  key: 'label',
                  dataIndex: 'label',
                },
                {
                  title: '出版社',
                  key: 'label',
                  dataIndex: 'label',
                },
              ]}
              rowKey="id"
              dataSource={options}
              pagination={{
                current: pagin.page,
                pageSize: pagin.limit,
                total: totalCount,
                onChange: (page, pageSize) => {
                  pagin.current = {
                    page,
                    limit: pageSize,
                  };

                  loadData();
                },
                onShowSizeChange: (current, size) => {
                  pagin.current = {
                    page: current,
                    limit: size,
                  };

                  loadData();
                },
              }}
              scroll={{
                y: 500,
              }}
              rowSelection={{
                type: 'checkbox',
                selectedRowKeys: _value,
                onSelect: function (record, selected, selectedRows) {
                  if (selected) {
                    const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                    _onChange(Array.from(new Set([..._value, ...selectedRowKeys])));
                  } else {
                    _onChange(_value.filter((t) => t !== record.id));
                  }
                },
                onSelectAll: (selected, selectedRows, changeRows) => {
                  if (selected) {
                    const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
                    _onChange(Array.from(new Set([..._value, ...selectedRowKeys])));
                  } else {
                    const changeSelectedRowKeys = changeRows.filter((t) => !!t).map((t) => t.value);
                    _onChange(_value.filter((t) => !changeSelectedRowKeys.includes(t)));
                  }
                },
              }}
            />
          );
        }}
      </AutoComplete>
    );
  };
      `,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <TablePaginMultipleAutoComplete />,
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'classNameWrap',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'styleWrap',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderLoading',
                desc: '自定义loading',
                type: '() => React.ReactNode',
                defaultVal: '',
              },
              {
                params: 'debounceTimeout',
                desc: '防抖的时间',
                type: 'number',
                defaultVal: '300',
              },
              {
                params: 'loadData',
                desc: '异步加载数据',
                type: '(kw?: string) => Promise<void>',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '自动补全的UI',
                type: `
                  (arg: {
                    originNode?: React.ReactElement;
                    value?: SelectProps['value'];
                    onChange?: SelectProps['onChange'];
                    options?: SelectProps['options'];
                  }) => React.ReactElement
                `,
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
