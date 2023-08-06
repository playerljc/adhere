import { Avatar } from 'antd';
import faker from 'faker';
import React from 'react';

import {
  AppstoreOutlined,
  ClockCircleOutlined,
  MailOutlined,
  SettingOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Dict from '@baifendian/adhere-util-dict';

const books = [
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
];

const userList = Array.from({ length: 10 }).map((t, index) => ({
  id: faker.random.uuid(),
  isMore: !!Math.floor((Math.random() * 10) % 2),
  name: faker.internet.userName(),
  sex: `${(index + 1) % 2}`,
  birthDay: faker.time.recent(),
  deptName: faker.company.companyName(),
  height: faker.random.number(),
  width: faker.random.number(),
  hometown: faker.address.city(),
  address: faker.address.streetAddress(),
}));

const ssqCascade = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default {
  initStatic() {
    Dict.handlers.SystemBookCatalog = () =>
      [
        {
          id: '242',
          catalog: '中国文学',
        },
        {
          id: '243',
          catalog: '外国文学',
        },
        {
          id: '244',
          catalog: '儿童文学',
        },
        {
          id: '245',
          catalog: '散文',
        },
        {
          id: '246',
          catalog: '经典名著',
        },
        {
          id: '247',
          catalog: '小说',
        },
        {
          id: '248',
          catalog: '历史',
        },
        {
          id: '249',
          catalog: '教育',
        },
        {
          id: '250',
          catalog: '成功励志',
        },
        {
          id: '251',
          catalog: '心灵鸡汤',
        },
        {
          id: '252',
          catalog: '人物传记',
        },
        {
          id: '253',
          catalog: '心理学',
        },
        {
          id: '254',
          catalog: '管理',
        },
        {
          id: '255',
          catalog: '经济',
        },
        {
          id: '256',
          catalog: '理财',
        },
        {
          id: '257',
          catalog: '哲学',
        },
        {
          id: '258',
          catalog: '计算机',
        },
      ].map((t) => ({
        label: t.catalog,
        value: t.id,
      }));

    Dict.handlers.SystemOrg = () => [
      {
        title: 'Node1',
        value: '0-0',
        leaf: false,
        children: [
          {
            title: 'Child Node1',
            value: '0-0-1',
            leaf: true,
          },
          {
            title: 'Child Node2',
            value: '0-0-2',
            leaf: true,
          },
        ],
      },
      {
        title: 'Node2',
        value: '0-1',
        leaf: true,
      },
    ];

    // User
    Dict.handlers.SystemUser = () => userList;

    Dict.handlers.SystemSSQ = () => ssqCascade;

    // Menu
    Dict.handlers.SystemNav = () => [
      { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
      { label: '菜单项二', key: 'item-2' },
      {
        label: '子菜单',
        key: 'submenu',
        children: [{ label: '子菜单项', key: 'submenu-item-1' }],
      },
    ];
    Dict.handlers.SystemJSX1Nav = () => [
      {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
      },
      {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
      },
      {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
          {
            type: 'group',
            label: 'Item 1',
            children: [
              {
                label: 'Option 1',
                key: 'setting:1',
              },
              {
                label: 'Option 2',
                key: 'setting:2',
              },
            ],
          },
          {
            type: 'group',
            label: 'Item 2',
            children: [
              {
                label: 'Option 3',
                key: 'setting:3',
              },
              {
                label: 'Option 4',
                key: 'setting:4',
              },
            ],
          },
        ],
      },
      {
        label: (
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        ),
        key: 'alipay',
      },
    ];
    Dict.handlers.SystemJSX2Nav = () =>
      (() => {
        function getItem(label, key, icon, children, type) {
          return {
            key,
            icon,
            children,
            label,
            type,
          };
        }

        return [
          getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem(
              'Item 1',
              'g1',
              null,
              [getItem('Option 1', '1'), getItem('Option 2', '2')],
              'group',
            ),
            getItem(
              'Item 2',
              'g2',
              null,
              [getItem('Option 3', '3'), getItem('Option 4', '4')],
              'group',
            ),
          ]),
          getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
          ]),
          {
            type: 'divider',
          },
          getItem('Navigation Three', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
          ]),
          getItem(
            'Group',
            'grp',
            null,
            [getItem('Option 13', '13'), getItem('Option 14', '14')],
            'group',
          ),
        ];
      })();

    // Dropdown
    Dict.handlers.SystemDropNav = () => [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ];

    // Breadcrumb
    Dict.handlers.SystemBCNav = () => [
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ];

    // Segmented
    Dict.handlers.SystemSegNav = () => ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
    Dict.handlers.SystemObjArraySegNav = () => [
      {
        label: (
          <div style={{ padding: 4 }}>
            <Avatar src="https://joesch.moe/api/v1/random" />
            <div>User 1</div>
          </div>
        ),
        value: 'user1',
      },
      {
        label: (
          <div style={{ padding: 4 }}>
            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            <div>User 2</div>
          </div>
        ),
        value: 'user2',
      },
      {
        label: (
          <div style={{ padding: 4 }}>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <div>User 3</div>
          </div>
        ),
        value: 'user3',
      },
    ];

    // Timeline
    Dict.handlers.SystemOneTL = () => [
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ];
    Dict.handlers.SystemTwoTL = () => [
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
        color: 'green',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      },
      {
        color: 'red',
        children: 'Network problems being solved 2015-09-01',
      },
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        children: 'Technical testing 2015-09-01',
      },
    ];
    Dict.handlers.SystemThreeTL = () => [
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'red',
        children: (
          <>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </>
        ),
      },
      {
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <SmileOutlined />,
        children: <p>Custom color testing</p>,
      },
    ];

    // Steps
    Dict.handlers.SystemOneWizard = () => [
      {
        title: 'Finished',
        description: 'This is a description.',
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description: 'This is a description.',
      },
    ];
    Dict.handlers.SystemTwoWizard = () => [
      {
        title: 'Finished',
        description: 'This is a description.',
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description: 'This is a description.',
      },
    ];

    // Mentions
    Dict.handlers.SystemMent = () => [
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ];
  },
  initRemote() {
    // 省数据
    Dict.handlers.SystemProvince = () =>
      Promise.resolve(
        [
          {
            name: '北京市',
            id: '110000000000',
          },
          {
            name: '天津市',
            id: '120000000000',
          },
          {
            name: '河北省',
            id: '130000000000',
          },
          {
            name: '山西省',
            id: '140000000000',
          },
          {
            name: '内蒙古自治区',
            id: '150000000000',
          },
          {
            name: '辽宁省',
            id: '210000000000',
          },
          {
            name: '吉林省',
            id: '220000000000',
          },
          {
            name: '黑龙江省',
            id: '230000000000',
          },
          {
            name: '上海市',
            id: '310000000000',
          },
          {
            name: '江苏省',
            id: '320000000000',
          },
          {
            name: '浙江省',
            id: '330000000000',
          },
          {
            name: '安徽省',
            id: '340000000000',
          },
          {
            name: '福建省',
            id: '350000000000',
          },
          {
            name: '江西省',
            id: '360000000000',
          },
          {
            name: '山东省',
            id: '370000000000',
          },
          {
            name: '河南省',
            id: '410000000000',
          },
          {
            name: '湖北省',
            id: '420000000000',
          },
          {
            name: '湖南省',
            id: '430000000000',
          },
          {
            name: '广东省',
            id: '440000000000',
          },
          {
            name: '广西壮族自治区',
            id: '450000000000',
          },
          {
            name: '海南省',
            id: '460000000000',
          },
          {
            name: '重庆市',
            id: '500000000000',
          },
          {
            name: '四川省',
            id: '510000000000',
          },
          {
            name: '贵州省',
            id: '520000000000',
          },
          {
            name: '云南省',
            id: '530000000000',
          },
          {
            name: '西藏自治区',
            id: '540000000000',
          },
          {
            name: '陕西省',
            id: '610000000000',
          },
          {
            name: '甘肃省',
            id: '620000000000',
          },
          {
            name: '青海省',
            id: '630000000000',
          },
          {
            name: '宁夏回族自治区',
            id: '640000000000',
          },
          {
            name: '新疆维吾尔自治区',
            id: '650000000000',
          },
        ].map((t) => ({
          label: t.name,
          value: t.id,
        })),
      );

    Dict.handlers.SystemFilterBookList = () => (kw) => {
      const data = books.map((t) => ({
        label: t.label,
        value: faker.random.uuid(),
      }));

      return Promise.resolve(data.filter((t) => t.label.includes(kw)));
    };

    Dict.handlers.SystemSSQRemote = () => ssqCascade;

    Dict.handlers.SystemUserPagin = () => (paging) => {
      const { current, pageSize } = paging;

      const data = [];
      data.length = 300;
      data.fill(0);

      const res = {
        resCode: 0,
        data: {
          total: data.length,
          pages: 30,
          current: 1,
          records: data
            .slice((current - 1) * pageSize, (current - 1) * pageSize + pageSize)
            .map((t, index) => ({
              id: (current - 1) * pageSize + (index + 1),
              isMore: !!Math.floor((Math.random() * 10) % 2),
              name: faker.internet.userName(),
              sex: `${(index + 1) % 2}`,
              birthDay: faker.time.recent(),
              deptName: faker.company.companyName(),
              height: faker.random.number(),
              width: faker.random.number(),
              hometown: faker.address.city(),
              address: faker.address.streetAddress(),
            })),
        },
        resMsg: '',
      };

      return Promise.resolve(res.data);
    };
  },
};
