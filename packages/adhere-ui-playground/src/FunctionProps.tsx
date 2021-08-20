/*
 *  加入锚点，加入查询快速定位
 *  public navigate(url, options)      导航一个对象
 *                                     参数说明：
 *                                      . url
 *                                        . 类型 - string
 *                                        . 默认值 - ''
 *                                        . 是否必填 - 是
 *                                        . 参数说明 - 啊飒飒飒飒啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *                                                     啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *                                      . url
 *                                        . 类型 - string
 *                                        . 默认值 - ''
 *                                        . 是否必填 - 是
 *                                        . 参数说明 - 啊飒飒飒飒啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *                                                     啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *
 *                                      返回值：
 *                                       . 类型 - string
 *                                       . 说明 - 啊飒飒飒飒啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *                                                啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *--------------------------------------------------------------------------------------------
 *
 * *  public navigate(url, options)      导航一个对象
 *                                     参数说明：
 *                                      . url
 *                                        . 类型 - string
 *                                        . 默认值 - ''
 *                                        . 是否必填 - 是
 *                                        . 参数说明 - 啊飒飒飒飒啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *                                                     啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *                                      . url
 *                                        . 类型 - string
 *                                        . 默认值 - ''
 *                                        . 是否必填 - 是
 *                                        . 参数说明 - 啊飒飒飒飒啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *                                                     啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *
 *                                      返回值：
 *                                       . 类型 - string
 *                                       . 说明 - 啊飒飒飒飒啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *                                                啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
 *
 * */

import React from 'react';
import PropTypes from 'prop-types';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import intl from '@baifendian/adhere-util-intl';

import { IFunctionProps } from './types';

const selectorPrefix = 'adhere-ui-playground-functionprops';

/**
 * FunctionProps
 * @class FunctionProps
 * @classdesc FunctionProps
 */
class FunctionProps extends React.Component<IFunctionProps> {
  render() {
    const { data } = this.props;

    return (
      <div className={selectorPrefix}>
        <table className={`${selectorPrefix}-inner`}>
          {data.map(({ name, desc, modifier, params, returnType, returnDesc }, index) => (
            <>
              <tr key={`${index}`} className={`${selectorPrefix}-item`}>
                <td valign="top" className={`${selectorPrefix}-item-name`}>
                  <ConditionalRender conditional={!!modifier}>
                    {() => (
                      <span className={`${selectorPrefix}-modifier`}>
                        {modifier || 'public'} -{' '}
                      </span>
                    )}
                  </ConditionalRender>
                  <span className={`${selectorPrefix}-functionName`}>
                    {name}(
                    <span className={`${selectorPrefix}-highlight`}>
                      {(params || []).map((t) => t.name).join(' , ')}
                    </span>
                    )
                  </span>
                </td>
                <td valign="top" className={`${selectorPrefix}-item-info`}>
                  <div className={`${selectorPrefix}-item-desc`}>{desc}</div>
                  <dl>
                    <dt className={`${selectorPrefix}-`}>{intl.v('参数说明')}：</dt>
                    <dd>
                      <ConditionalRender conditional={!!params && params.length !== 0}>
                        {() => (
                          <ul className={`${selectorPrefix}-level1`}>
                            {params.map((param, index) => (
                              <li key={`${index + 1}`}>
                                <div style={{ marginBottom: 10 }}>
                                  <span className={`${selectorPrefix}-highlight`}>
                                    {param.name}
                                  </span>{' '}
                                  - {param.desc || '-'}
                                </div>
                                <ul
                                  className={`${selectorPrefix}-level2`}
                                  style={{ marginBottom: 10 }}
                                >
                                  <li>
                                    {intl.v('类型')}
                                    <span className={`${selectorPrefix}-split`}>-</span>
                                    <span className={`${selectorPrefix}-highlight`}>
                                      {param.type || '-'}
                                    </span>
                                  </li>
                                  <li>
                                    {intl.v('默认值')}
                                    <span className={`${selectorPrefix}-split`}>-</span>
                                    <span className={`${selectorPrefix}-highlight`}>
                                      {param.defaultVal || '-'}
                                    </span>
                                  </li>
                                  <li>
                                    {intl.v('是否必填')}
                                    <span className={`${selectorPrefix}-split`}>-</span>
                                    <span className={`${selectorPrefix}-highlight`}>
                                      {param.required || false ? intl.v('是') : intl.v('否')}
                                    </span>
                                  </li>
                                  {/*<li>
                                  {intl.v('说明')}
                                  <span className={`${selectorPrefix}-split`}>-</span>
                                  <span className={`${selectorPrefix}-highlight`}>{param.desc || '-'}</span>
                                </li>*/}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        )}
                      </ConditionalRender>
                    </dd>
                  </dl>
                  <dl>
                    <dt>{intl.v('返回值')}：</dt>
                    <dd>
                      <ul className={`${selectorPrefix}-level1`}>
                        <li>
                          {intl.v('类型')}
                          <span className={`${selectorPrefix}-split`}>-</span>
                          <span className={`${selectorPrefix}-highlight`}>{returnType || '-'}</span>
                        </li>
                        <li>
                          {intl.v('说明')}
                          <span className={`${selectorPrefix}-split`}>-</span>
                          <span className={`${selectorPrefix}-highlight`}>{returnDesc || '-'}</span>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </td>
              </tr>
              <ConditionalRender conditional={index !== data.length - 1}>
                {() => (
                  <div className={`${selectorPrefix}-dividing`} />
                )}
              </ConditionalRender>
            </>
          ))}
        </table>
      </div>
    );
  }
}

FunctionProps.defaultProps = {
  data: [],
};

FunctionProps.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      // 函数名称
      name: PropTypes.string,
      // 函数描述
      desc: PropTypes.string,
      // 函数修饰符
      modifier: PropTypes.oneOf(['static', 'public', 'private', 'protected']),
      // 函数参数
      params: PropTypes.arrayOf(
        PropTypes.shape({
          // 参数名称
          name: PropTypes.string,
          // 参数说明
          desc: PropTypes.string,
          // 参数类型
          type: PropTypes.string,
          // 默认值
          defaultVal: PropTypes.string,
          // 是否必填
          required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        }),
      ),
      // 函数返回值类型
      returnType: PropTypes.string,
      // 函数返回值说明
      returnDesc: PropTypes.string,
    }),
  ),
};

export default FunctionProps;
