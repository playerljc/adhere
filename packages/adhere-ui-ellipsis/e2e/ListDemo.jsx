import React from 'react';

import Ellipsis from '../src/index';
import { LONG_CONTENT, LONG_SUBTITLE, LONG_TITLE } from './data';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="wrap">
      <ul>
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index}>
            <div className="media">
              <img
                src="https://inews.gtimg.com/news_ls/Of4GKIfj9mCh29gL1Cen6Z25ZnjtoGcIhYcsPXeXTLF3EAA_640330/0"
                alt=""
              />
            </div>
            <div className="info">
              <p className="row">
                <Ellipsis wrap={false} isUseNativeTooltip={false}>
                  {LONG_TITLE}
                </Ellipsis>
              </p>
              <p className="sub-row">
                <Ellipsis wrap={false} isUseNativeTooltip={false}>
                  {LONG_SUBTITLE}
                </Ellipsis>
              </p>
              <p className="content">
                <Ellipsis wrap wrapLines={2} isUseNativeTooltip={false}>
                  {LONG_CONTENT}
                </Ellipsis>
              </p>
              <p className="footer">
                <span>解法Solution</span>
                <span>18小时前</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
