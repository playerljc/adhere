import FormItemWrapCodeText from '!!raw-loader!./FormItemWrap';
import P1CodeText from '!!raw-loader!./examples/Basic/p1';
import P2CodeText from '!!raw-loader!./examples/Basic/p2';
import P3CodeText from '!!raw-loader!./examples/Basic/p3';
import P4CodeText from '!!raw-loader!./examples/Basic/p4';
import P5CodeText from '!!raw-loader!./examples/Basic/p5';
import P6CodeText from '!!raw-loader!./examples/Basic/p6';
import P7CodeText from '!!raw-loader!./examples/Basic/p7';
import P8CodeText from '!!raw-loader!./examples/Basic/p8';
import P9CodeText from '!!raw-loader!./examples/Basic/p9';
import P10CodeText from '!!raw-loader!./examples/Basic/p10';
import P11CodeText from '!!raw-loader!./examples/Basic/p11';
import P12CodeText from '!!raw-loader!./examples/Basic/p12';
import P13CodeText from '!!raw-loader!./examples/Basic/p13';
import P14CodeText from '!!raw-loader!./examples/Basic/p14';
import P15CodeText from '!!raw-loader!./examples/Basic/p15';
import P16CodeText from '!!raw-loader!./examples/Basic/p16';
import P17CodeText from '!!raw-loader!./examples/Basic/p17';
import CBCodeText from '!!raw-loader!./examples/TRBLC/CB';
import CBRCodeText from '!!raw-loader!./examples/TRBLC/CBR';
import CRCodeText from '!!raw-loader!./examples/TRBLC/CR';
import CRBCodeText from '!!raw-loader!./examples/TRBLC/CRB';
import LBCCodeText from '!!raw-loader!./examples/TRBLC/LBC';
import LCCodeText from '!!raw-loader!./examples/TRBLC/LC';
import LCBCodeText from '!!raw-loader!./examples/TRBLC/LCB';
import LCRCodeText from '!!raw-loader!./examples/TRBLC/LCR';
import LCRBCodeText from '!!raw-loader!./examples/TRBLC/LCRB';
import LRTCBCodeText from '!!raw-loader!./examples/TRBLC/LRTCB';
import LRTCBScrollCodeText from '!!raw-loader!./examples/TRBLC/LRTCBScroll';
import LTCCodeText from '!!raw-loader!./examples/TRBLC/LTC';
import LTCBCodeText from '!!raw-loader!./examples/TRBLC/LTCB';
import TBLCRCodeText from '!!raw-loader!./examples/TRBLC/TBLCR';
import TBLCRScrollCodeText from '!!raw-loader!./examples/TRBLC/TBLCRScroll';
import TCCodeText from '!!raw-loader!./examples/TRBLC/TC';
import TCBCodeText from '!!raw-loader!./examples/TRBLC/TCB';
import TCBRCodeText from '!!raw-loader!./examples/TRBLC/TCBR';
import TCRCodeText from '!!raw-loader!./examples/TRBLC/TCR';
import TLCCodeText from '!!raw-loader!./examples/TRBLC/TLC';
import TLRCCodeText from '!!raw-loader!./examples/TRBLC/TLRC';
import TRCCodeText from '!!raw-loader!./examples/TRBLC/TRC';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import TRBLCIcon from './TRBLC.png';
import P1 from './examples/Basic/p1';
import P2 from './examples/Basic/p2';
import P3 from './examples/Basic/p3';
import P4 from './examples/Basic/p4';
import P5 from './examples/Basic/p5';
import P6 from './examples/Basic/p6';
import P7 from './examples/Basic/p7';
import P8 from './examples/Basic/p8';
import P9 from './examples/Basic/p9';
import P10 from './examples/Basic/p10';
import P11 from './examples/Basic/p11';
import P12 from './examples/Basic/p12';
import P13 from './examples/Basic/p13';
import P14 from './examples/Basic/p14';
import P15 from './examples/Basic/p15';
import P16 from './examples/Basic/p16';
import P17 from './examples/Basic/p17';
import CB from './examples/TRBLC/CB';
import CBR from './examples/TRBLC/CBR';
import CR from './examples/TRBLC/CR';
import CRB from './examples/TRBLC/CRB';
import LBC from './examples/TRBLC/LBC';
import LC from './examples/TRBLC/LC';
import LCB from './examples/TRBLC/LCB';
import LCR from './examples/TRBLC/LCR';
import LCRB from './examples/TRBLC/LCRB';
import LCTrigger from './examples/TRBLC/LCTrigger';
import LRTCB from './examples/TRBLC/LRTCB';
import LRTCBScroll from './examples/TRBLC/LRTCBScroll';
import LTC from './examples/TRBLC/LTC';
import LTCB from './examples/TRBLC/LTCB';
import TBLCR from './examples/TRBLC/TBLCR';
import TBLCRScroll from './examples/TRBLC/TBLCRScroll';
import TC from './examples/TRBLC/TC';
import TCB from './examples/TRBLC/TCB';
import TCBR from './examples/TRBLC/TCBR';
import TCR from './examples/TRBLC/TCR';
import TLC from './examples/TRBLC/TLC';
import TLRC from './examples/TRBLC/TLRC';
import TRC from './examples/TRBLC/TRC';

import IndexLessCodeText from '!!raw-loader!./index.less';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        codeText: P1CodeText,
        type: 'PlayGround',
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `嵌套`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '嵌套',
            info: '嵌套',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `auto内容超出高度或宽度`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'auto内容超出高度或宽度',
            info: 'auto内容超出高度或宽度',
          },
        },
        codeText: P3CodeText,
        type: 'PlayGround',
        renderChildren: () => <P3 />,
      },
      {
        id: 'p4',
        name: `横向的快捷布局(HorizontalFlexLayout)`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'HorizontalFlexLayout',
            info: '分为Left、Main和Right',
          },
        },
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
      {
        id: 'p5',
        name: `纵向的快捷布局(VerticalFlexLayout)`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'HorizontalFlexLayout',
            info: '分为Top、Main和Bottom',
          },
        },
        codeText: P5CodeText,
        renderChildren: () => <P5 />,
      },
      {
        id: 'p6',
        name: `嵌套(HorizontalFlexLayout,VerticalFlexLayout)`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'HorizontalFlexLayout，HorizontalFlexLayout',
            info: '组合嵌套',
          },
        },
        codeText: P6CodeText,
        renderChildren: () => <P6 />,
      },
      {
        id: 'p7',
        name: `ToolBarLayout`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'ToolBarLayout',
            info: '包含上下的工具栏',
          },
        },
        codeText: P7CodeText,
        renderChildren: () => <P7 />,
      },
      {
        id: 'p8',
        name: `BackLayout`,
        mode: 'code',
        scope: { React },
        type: 'PlayGround',
        cardProps: {
          description: {
            title: 'BackLayout',
            info: '带有返回操作的布局',
          },
        },
        codeText: P8CodeText,
        renderChildren: () => <P8 />,
      },
      {
        id: 'p9',
        name: `ScrollLayout`,
        mode: 'code',
        scope: { React },
        type: 'PlayGroundTab',
        cardProps: {
          description: {
            title: '可以滚动的布局',
            info: '一般用在路由组件的外层，作为带有getPopupContainer的FormItem的parent',
          },
        },
        active: 'p9.jsx',
        config: [
          {
            key: 'p9.jsx',
            title: 'p9.jsx',
            codeText: P9CodeText,
          },
          {
            key: 'FormItemWrap.jsx',
            title: 'FormItemWrap.jsx',
            codeText: FormItemWrapCodeText,
          },
        ],

        renderChildren: () => <P9 />,
      },
      {
        id: 'p10',
        name: `栅格`,
        mode: 'code',
        scope: { React },
        type: 'PlayGroundTab',
        cardProps: {
          description: {
            title: '栅格',
            info: '栅格',
          },
        },
        active: 'p10.jsx',
        config: [
          {
            key: 'p10.jsx',
            title: 'p10.jsx',
            codeText: P10CodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P10 />,
      },
      {
        id: 'p11',
        name: `纵向栅格`,
        mode: 'code',
        scope: { React },
        type: 'PlayGroundTab',
        cardProps: {
          description: {
            title: '',
            info: '纵向栅格',
          },
        },
        active: 'p11.jsx',
        config: [
          {
            key: 'p11.jsx',
            title: 'p11.jsx',
            codeText: P11CodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P11 />,
      },
      {
        id: 'p12',
        name: `栅格配置器`,
        mode: 'code',
        scope: { React },
        type: 'PlayGroundTab',
        cardProps: {
          description: {
            title: '栅格配置器',
            info: '栅格配置器',
          },
        },
        active: 'p12.jsx',
        config: [
          {
            key: 'p12.jsx',
            title: 'p12.jsx',
            codeText: P12CodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P12 />,
      },
      {
        id: 'p13',
        name: `收起和展开`,
        mode: 'code',
        scope: { React },
        type: 'PlayGroundTab',
        cardProps: {
          description: {
            title: '收起和展开',
            info: '收起和展开',
          },
        },
        active: 'p13.jsx',
        config: [
          {
            key: 'p13.jsx',
            title: 'p13.jsx',
            codeText: P13CodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P13 />,
      },
      {
        id: 'p14',
        name: `自定义折叠和收起的UI`,
        mode: 'code',
        scope: { React },
        type: 'PlayGroundTab',
        cardProps: {
          description: {
            title: '自定义折叠和收起的UI',
            info: '自定义折叠和收起的UI',
          },
        },
        active: 'p14.jsx',
        config: [
          {
            key: 'p14.jsx',
            title: 'p14.jsx',
            codeText: P14CodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P14 />,
      },
      {
        id: 'p15',
        name: `使用collapsed控制展开和收起`,
        mode: 'code',
        scope: { React },
        type: 'PlayGroundTab',
        cardProps: {
          description: {
            title: '使用collapsed控制展开和收起',
            info: '使用collapsed控制展开和收起',
          },
        },
        active: 'p15.jsx',
        config: [
          {
            key: 'p15.jsx',
            title: 'p15.jsx',
            codeText: P15CodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P15 />,
      },
      {
        id: 'p16',
        name: `自定义收起的最小尺寸`,
        mode: 'code',
        scope: { React },
        type: 'PlayGroundTab',
        cardProps: {
          description: {
            title: '自定义收起的最小尺寸',
            info: '自定义收起的最小尺寸',
          },
        },
        active: 'p16.jsx',
        config: [
          {
            key: 'p16.jsx',
            title: 'p16.jsx',
            codeText: P16CodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P16 />,
      },

      {
        id: 'p17',
        name: `isUseNormal`,
        mode: 'code',
        scope: { React },
        type: 'PlayGroundTab',
        cardProps: {
          description: {
            title: 'isUseNormal',
            info: 'isUseNormal',
          },
        },
        active: 'p17.jsx',
        config: [
          {
            key: 'p17.jsx',
            title: 'p17.jsx',
            codeText: P17CodeText,
          },
          {
            key: 'index.less',
            title: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P17 />,
      },
    ];
  }

  function TRBLCBoxPanelConfig() {
    return [
      {
        id: `TC`,
        name: `TC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TC',
            info: 'TC',
          },
        },
        type: 'PlayGround',
        codeText: TCCodeText,
        renderChildren: () => <TC />,
      },
      {
        id: `CB`,
        name: `CB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CB',
            info: 'CB',
          },
        },
        type: 'PlayGround',
        codeText: CBCodeText,
        renderChildren: () => <CB />,
      },
      {
        id: `TLC`,
        name: `TLC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TLC',
            info: 'TLC',
          },
        },
        type: 'PlayGround',
        codeText: TLCCodeText,
        renderChildren: () => <TLC />,
      },
      {
        id: `TRC`,
        name: `TRC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TRC',
            info: 'TRC',
          },
        },
        type: 'PlayGround',
        codeText: TRCCodeText,
        renderChildren: () => <TRC />,
      },
      {
        id: `TLRC`,
        name: `TLRC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TLRC',
            info: 'TLRC',
          },
        },
        type: 'PlayGround',
        codeText: TLRCCodeText,
        renderChildren: () => <TLRC />,
      },
      {
        id: `LCB`,
        name: `LCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LCB',
            info: 'LCB',
          },
        },
        type: 'PlayGround',
        codeText: LCBCodeText,
        renderChildren: () => <LCB />,
      },
      {
        id: `CRB`,
        name: `CRB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CRB',
            info: 'CRB',
          },
        },
        type: 'PlayGround',
        codeText: CRBCodeText,
        renderChildren: () => <CRB />,
      },
      {
        id: `LCRB`,
        name: `LCRB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LCRB',
            info: 'LCRB',
          },
        },
        type: 'PlayGround',
        codeText: LCRBCodeText,
        renderChildren: () => <LCRB />,
      },
      {
        id: `LC`,
        name: `LC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LC',
            info: 'LC',
          },
        },
        type: 'PlayGround',
        codeText: LCCodeText,
        renderChildren: () => <LC />,
      },
      {
        id: `CR`,
        name: `CR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CR',
            info: 'CR',
          },
        },
        codeText: CRCodeText,
        type: 'PlayGround',
        renderChildren: () => <CR />,
      },
      {
        id: `LTC`,
        name: `LTC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LTC',
            info: 'LTC',
          },
        },
        type: 'PlayGround',
        codeText: LTCCodeText,
        renderChildren: () => <LTC />,
      },
      {
        id: `LBC`,
        name: `LBC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LBC',
            info: 'LBC',
          },
        },
        type: 'PlayGround',
        codeText: LBCCodeText,
        renderChildren: () => <LBC />,
      },
      {
        id: `LTCB`,
        name: `LTCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LTCB',
            info: 'LTCB',
          },
        },
        type: 'PlayGround',
        codeText: LTCBCodeText,
        renderChildren: () => <LTCB />,
      },
      {
        id: `TCR`,
        name: `TCR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TCR',
            info: 'TCR',
          },
        },
        type: 'PlayGround',
        codeText: TCRCodeText,
        renderChildren: () => <TCR />,
      },
      {
        id: `CBR`,
        name: `CBR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CBR',
            info: 'CBR',
          },
        },
        type: 'PlayGround',
        codeText: CBRCodeText,
        renderChildren: () => <CBR />,
      },
      {
        id: `TCBR`,
        name: `TCBR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TCBR',
            info: 'TCBR',
          },
        },
        type: 'PlayGround',
        codeText: TCBRCodeText,
        renderChildren: () => <TCBR />,
      },
      {
        id: `TBLCR`,
        name: `TBLCR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TBLCR',
            info: 'TBLCR',
          },
        },
        type: 'PlayGround',
        codeText: TBLCRCodeText,
        renderChildren: () => <TBLCR />,
      },
      {
        id: `LRTCB`,
        name: `LRTCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LRTCB',
            info: 'LRTCB',
          },
        },
        type: 'PlayGround',
        codeText: LRTCBCodeText,
        renderChildren: () => <LRTCB />,
      },
      {
        id: `LCR`,
        name: `LCR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LCR',
            info: 'LCR',
          },
        },
        type: 'PlayGround',
        codeText: LCRCodeText,
        renderChildren: () => <LCR />,
      },
      {
        id: `TCB`,
        name: `TCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TCB',
            info: 'TCB',
          },
        },
        type: 'PlayGround',
        codeText: TCBCodeText,
        renderChildren: () => <TCB />,
      },
      {
        id: `TBLCRScroll`,
        name: `TBLCR可滚动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TBLCR可滚动',
            info: 'TBLCR可滚动',
          },
        },
        type: 'PlayGround',
        codeText: TBLCRScrollCodeText,
        renderChildren: () => <TBLCRScroll />,
      },
      {
        id: `LRTCBScroll`,
        name: `LRTCB可滚动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LRTCB可滚动',
            info: 'LRTCB可滚动',
          },
        },
        type: 'PlayGround',
        codeText: LRTCBScrollCodeText,
        renderChildren: () => <LRTCBScroll />,
      },
      {
        id: `LCTrigger`,
        name: `LCTrigger`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LCTrigger',
            info: 'LCTrigger',
          },
        },
        type: 'PlayGround',
        codeText: LCCodeText,
        renderChildren: () => <LCTrigger />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="FlexLayout">
        <p>实现flex布局的组件</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <p>TRBLC布局</p>
      <div>
        <img src={TRBLCIcon} style={{ width: '100%' }} alt="TRBLC布局" />
      </div>

      <CodeBoxSection title="TRBLC布局-代码演示" columnCount={1} config={TRBLCBoxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'FlexLayout',
            data: [
              {
                params: 'direction',
                desc: '方向',
                type: "string - ['vertical' | 'horizontal']",
                defaultVal: 'vertical',
              },
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.Fixed',
            data: [
              {
                params: 'fit',
                desc: '子组件是否充满容器',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'className',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.Auto',
            data: [
              {
                params: 'autoFixed',
                desc: '是否固定高度或宽度',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'fit',
                desc: '子组件是否充满容器',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'className',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.HorizontalFlexLayout',
            data: [
              {
                params: 'className',
                desc: '最外层className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '最外层style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'leftClassName',
                desc: 'left的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'leftStyle',
                desc: 'left的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'rightClassName',
                desc: 'right的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'rightStyle',
                desc: 'right的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainClassName',
                desc: 'main的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainStyle',
                desc: 'main的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapClassName',
                desc: 'mainAuto的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainAutoStyle',
                desc: 'mainAuto的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainWrapClassName',
                desc: 'mainWrap的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainWrapStyle',
                desc: 'mainWrap的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderLeft',
                desc: 'left的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'renderMain',
                desc: 'main的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'renderRight',
                desc: 'right的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'leftProps',
                desc: 'left的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'rightProps',
                desc: 'right的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainProps',
                desc: 'main的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapProps',
                desc: 'mainAutoWrap的props',
                type: 'object',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.VerticalFlexLayout',
            data: [
              {
                params: 'className',
                desc: '最外层className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '最外层style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'topClassName',
                desc: 'top的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'topStyle',
                desc: 'top的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'bottomClassName',
                desc: 'bottom的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'bottomStyle',
                desc: 'bottom的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainClassName',
                desc: 'main的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainStyle',
                desc: 'main的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapClassName',
                desc: 'mainAuto的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainAutoStyle',
                desc: 'mainAuto的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainWrapClassName',
                desc: 'mainWrap的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainWrapStyle',
                desc: 'mainWrap的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderLeft',
                desc: 'top的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'renderMain',
                desc: 'main的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'renderRight',
                desc: 'bottom的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'topProps',
                desc: 'top的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'bottomProps',
                desc: 'bottom的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainProps',
                desc: 'main的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapProps',
                desc: 'mainAutoWrap的props',
                type: 'object',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.ToolBarLayout',
            data: [
              {
                params: 'className',
                desc: '最外层className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '最外层style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'topClassName',
                desc: 'top的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'topStyle',
                desc: 'top的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'bottomClassName',
                desc: 'bottom的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'bottomStyle',
                desc: 'bottom的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainClassName',
                desc: 'main的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainStyle',
                desc: 'main的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapClassName',
                desc: 'mainAuto的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainAutoStyle',
                desc: 'mainAuto的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainWrapClassName',
                desc: 'mainWrap的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainWrapStyle',
                desc: 'mainWrap的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderMain',
                desc: 'main的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'topProps',
                desc: 'top的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'bottomProps',
                desc: 'bottom的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainProps',
                desc: 'main的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapProps',
                desc: 'mainAutoWrap的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'topToolBarItems',
                desc: '上方工具栏',
                type: 'JSX.Element[]',
                defaultVal: '[]',
              },
              {
                params: 'bottomToolBarItems',
                desc: '下方工具栏',
                type: 'JSX.Element[]',
                defaultVal: '[]',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.BackLayout',
            data: [
              {
                params: 'className',
                desc: '最外层className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '最外层style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'topClassName',
                desc: 'top的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'topStyle',
                desc: 'top的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'bottomClassName',
                desc: 'bottom的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'bottomStyle',
                desc: 'bottom的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainClassName',
                desc: 'main的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainStyle',
                desc: 'main的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapClassName',
                desc: 'mainAuto的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainAutoStyle',
                desc: 'mainAuto的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainWrapClassName',
                desc: 'mainWrap的className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainWrapStyle',
                desc: 'mainWrap的style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderMain',
                desc: 'main的渲染',
                type: 'JSX.Element',
                defaultVal: '',
              },
              {
                params: 'topProps',
                desc: 'top的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'bottomProps',
                desc: 'bottom的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainProps',
                desc: 'main的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'mainAutoWrapProps',
                desc: 'mainAutoWrap的props',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'topToolBarItems',
                desc: '上方工具栏',
                type: 'JSX.Element[]',
                defaultVal: '[]',
              },
              {
                params: 'bottomToolBarItems',
                desc: '下方工具栏',
                type: 'JSX.Element[]',
                defaultVal: '[]',
              },

              {
                params: 'backPath',
                desc: '没有历史的时候回退的路由地址',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'enforceBackPath',
                desc: '强制执行的路由地址',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'isShowBack',
                desc: '是否显示返回按钮',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'history',
                desc: '路由对象',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'backTitle',
                desc: '返回按钮的文本',
                type: 'string | JSX.Element',
                defaultVal: '返回',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.ScrollLayout',
            data: [
              {
                params: 'className',
                desc: '最外层className',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '最外层style',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'scrollY',
                desc: '是否可以滚动',
                type: 'boolean',
                defaultVal: 'true',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.useScrollLayout',
            data: [
              {
                params: 'getEl',
                desc: '获取Scroll的el元素',
                type: 'HTMLElement',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'FlexLayout.ScrollLayoutContext',
            data: [
              {
                params: 'getEl',
                desc: '获取Scroll的el元素',
                type: 'HTMLElement',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
