import React from 'react';

import Ellipsis from '../src/index';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="wrap">
      <ul>
        {Array.from({ length: 20 })
          .fill(0)
          .map((t) => (
            <li>
              <div className="media">
                <img
                  src="https://inews.gtimg.com/news_ls/Of4GKIfj9mCh29gL1Cen6Z25ZnjtoGcIhYcsPXeXTLF3EAA_640330/0"
                  alt=""
                />
              </div>
              <div className="info">
                <p className="row">
                  <Ellipsis wrap={false} isUseNativeTooltip={false}>
                    她创业失败转行做陪诊师 解救困在医院的老人她创业失败转行做陪诊师
                    解救困在医院的老人
                  </Ellipsis>
                </p>
                <p className="sub-row">
                  <Ellipsis wrap={false} isUseNativeTooltip={false}>
                    河南一面粉厂贴通知“今年新麦一律拒收”，专家：小麦发芽降低品质河南一面粉厂贴通知“今年新麦一律拒收”，专家：小麦发芽降低品质
                  </Ellipsis>
                </p>
                <p className="content">
                  <Ellipsis wrap={true} wrapLines={2} isUseNativeTooltip={false}>
                    近期正值小麦收割期，小麦大省河南多地遭遇了近十多年来最严重的“烂场雨”天气，部分地区小麦出现发霉、穗发芽等现象。在此背景下，河南商丘虞城县一家面粉厂近日发布的“2023年新麦一律拒收”的通知引发网友关注。河南省一位农业专家表示，发芽小麦降低了食用品质，但可以用作饲料配料和酿酒原料。当地政府回应称，有专库专价收购农民发芽的小麦
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
