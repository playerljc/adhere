import P1CodeText from '!!raw-loader!./examples/Basic/p1';
import P2CodeText from '!!raw-loader!./examples/Basic/p2';
import P3CodeText from '!!raw-loader!./examples/Basic/p3';
import P4CodeText from '!!raw-loader!./examples/Basic/p4';
import CBCodeText from '!!raw-loader!./examples/TRBLC/CB';
import CBRCodeText from '!!raw-loader!./examples/TRBLC/CBR';
import CRCodeText from '!!raw-loader!./examples/TRBLC/CR';
import CRBCodeText from '!!raw-loader!./examples/TRBLC/CRB';
import LBCCodeText from '!!raw-loader!./examples/TRBLC/LBC';
import LCCodeText from '!!raw-loader!./examples/TRBLC/LC';
import LCBCodeText from '!!raw-loader!./examples/TRBLC/LCB';
import LCRBCodeText from '!!raw-loader!./examples/TRBLC/LCRB';
import LRTCBCodeText from '!!raw-loader!./examples/TRBLC/LRTCB';
import LRTCBScrollCodeText from '!!raw-loader!./examples/TRBLC/LRTCBScroll';
import LTCCodeText from '!!raw-loader!./examples/TRBLC/LTC';
import LTCBCodeText from '!!raw-loader!./examples/TRBLC/LTCB';
import TBLCRCodeText from '!!raw-loader!./examples/TRBLC/TBLCR';
import TBLCRScrollCodeText from '!!raw-loader!./examples/TRBLC/TBLCRScroll';
import TCCodeText from '!!raw-loader!./examples/TRBLC/TC';
import TCBRCodeText from '!!raw-loader!./examples/TRBLC/TCBR';
import TCRCodeText from '!!raw-loader!./examples/TRBLC/TCR';
import TLCCodeText from '!!raw-loader!./examples/TRBLC/TLC';
import TLRCCodeText from '!!raw-loader!./examples/TRBLC/TLRC';
import TRCCodeText from '!!raw-loader!./examples/TRBLC/TRC';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/Basic/p1';
import P2 from './examples/Basic/p2';
import P3 from './examples/Basic/p3';
import P4 from './examples/Basic/p4';
import CB from './examples/TRBLC/CB';
import CBR from './examples/TRBLC/CBR';
import CR from './examples/TRBLC/CR';
import CRB from './examples/TRBLC/CRB';
import LBC from './examples/TRBLC/LBC';
import LC from './examples/TRBLC/LC';
import LCB from './examples/TRBLC/LCB';
import LCRB from './examples/TRBLC/LCRB';
import LRTCB from './examples/TRBLC/LRTCB';
import LRTCBScroll from './examples/TRBLC/LRTCBScroll';
import LTC from './examples/TRBLC/LTC';
import LTCB from './examples/TRBLC/LTCB';
import TBLCR from './examples/TRBLC/TBLCR';
import TBLCRScroll from './examples/TRBLC/TBLCRScroll';
import TC from './examples/TRBLC/TC';
import TCBR from './examples/TRBLC/TCBR';
import TCR from './examples/TRBLC/TCR';
import TLC from './examples/TRBLC/TLC';
import TLRC from './examples/TRBLC/TLRC';
import TRC from './examples/TRBLC/TRC';

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
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `多个分割点`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '多个分割点',
            info: '多个分割点',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
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
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `使用minSize和maxSize控制拖放范围`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用minSize和maxSize控制拖放范围',
            info: '使用minSize和maxSize控制拖放范围',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
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
        type: 'PlayGround',
        codeText: CRCodeText,
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
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="SplitLayout">
        <p>实现分割窗体的布局，可以拉动调整大小</p>
        <p>需要配合FlexLayout一起使用</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <CodeBoxSection
        title="TRBLCSplit布局-代码演示"
        columnCount={1}
        config={TRBLCBoxPanelConfig()}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'SplitLayout',
            data: [
              {
                params: 'maxSize',
                desc: '最大距离，可以使数值或是字符串的百分比',
                type: 'string | number',
                defaultVal: '100%',
              },
              {
                params: 'minSize',
                desc: '最小距离，可以使数值或是字符串的百分比',
                type: 'string | number',
                defaultVal: '10',
              },
              {
                params: 'onCanDrag',
                desc: '是否可以拖动',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onDragStarted',
                desc: '多动开始',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onDragFinished',
                desc: '拖动结束',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onOut',
                desc: '移出拖动范围',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '拖动变化',
                type: 'Function',
                defaultVal: '',
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
        ]}
      />
    </PlayGroundPage>
  );
};
