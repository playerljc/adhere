import React from 'react';

import PlayGroundLib from '../src/index';
import { SAMPLE_CODE } from './sample';

import '../src/index.less';

const { CodePanel, CodeTabPanel } = PlayGroundLib;

/**
 * CodePanelDemo
 * @description CodePanel / CodeTabPanel
 */
export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h3>CodePanel</h3>
        <CodePanel codeText={SAMPLE_CODE} theme="github" />
      </div>
      <div>
        <h3>CodeTabPanel</h3>
        <CodeTabPanel
          active="ts"
          config={[
            { key: 'ts', title: 'TS', codeText: SAMPLE_CODE, theme: 'github' },
            { key: 'js', title: 'JS', codeText: SAMPLE_CODE, theme: 'github' },
          ]}
        />
      </div>
    </div>
  );
};
