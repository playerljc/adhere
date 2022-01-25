import React from 'react';

import PlayGroundPage, { Section, FunctionPropsSection } from '@/lib/PlaygroundPage';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="Validator">
        <h3>
          一个验证的库(选用
          <a
            style={{ margin: '0 10px' }}
            href="https://www.npmjs.com/package/validator"
            target="_blank"
          >
            Validator
          </a>
          和
          <a
            style={{ margin: '0 10px' }}
            href="https://github.com/VincentSit/ChinaMobilePhoneNumberRegex"
            target="_blank"
          >
            ChinaMobilePhoneNumberRegex
          </a>
          )作为核心库
        </h3>
      </Section>

      <Section title="相关方法">
        <div style={{ margin: '20px 0' }}>
          validator库的方法请参见
          <a href="https://www.npmjs.com/package/validator" target="_blank">
            Validator库
          </a>
        </div>
      </Section>

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'isAllChinaPhoneNumber',
                desc: '匹配所有号码（手机卡 + 数据卡 + 上网卡）',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isSMSChinaPhoneNumber',
                desc: '匹配所有支持短信功能的号码（手机卡 + 上网卡）',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },

              {
                name: 'isSIMCard',
                desc: '手机卡(匹配所有)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaMobileSIMCard',
                desc: '手机卡(匹配中国移动)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaUnicomSIMCard',
                desc: '手机卡(中国联通)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaTelecomSIMCard',
                desc: '手机卡(中国电信)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaSARFTSIMCard',
                desc: '手机卡(中国广电)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isINMARSATSIMCard',
                desc: '匹配北京船舶通信导航有限公司（海事卫星通信）',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isOnedowSIMCard',
                desc: '工业和信息化部应急通信保障中心（应急通信）',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },

              {
                name: 'isVirtualSIMCard',
                desc: '虚拟运营商(匹配所有)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaMobileVirtualSIMCard',
                desc: '虚拟运营商(匹配中国移动)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaUnicomVirtualSIMCard',
                desc: '虚拟运营商(匹配中国联通)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaTelecomVirtualSIMCard',
                desc: '虚拟运营商(匹配中国电信)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },

              {
                name: 'isIoTSIMCard',
                desc: '物联网数据卡(匹配所有)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaMobileIoTSIMCard',
                desc: '物联网数据卡(匹配中国移动)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaUnicomIoTSIMCard',
                desc: '物联网数据卡(匹配中国联通)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaTelecomIoTSIMCard',
                desc: '物联网数据卡(匹配中国电信)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },

              {
                name: 'isWIETSIMCard',
                desc: '上网卡(匹配所有)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaMobileWIETSIMCard',
                desc: '上网卡(匹配中国移动)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaUnicomWIETSIMCard',
                desc: '上网卡(匹配中国联通)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'isChinaTelecomWIETSIMCard',
                desc: '上网卡(匹配中国电信)',
                modifier: 'public',
                params: [
                  {
                    name: 'phoneNumber',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
