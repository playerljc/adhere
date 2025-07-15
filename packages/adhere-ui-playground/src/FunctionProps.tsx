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
import React, { memo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import Collapse from './Collapse';
import type { FunctionProps } from './types';

const selectorPrefix = 'adhere-ui-playground-functionprops';

/**
 * FunctionProps组件
 * @component FunctionProps
 * @description 函数属性说明组件，用于展示函数的详细参数和返回值信息
 * @param props - 组件属性
 * @param props.data - 函数数据列表
 * @param props.restProps - 其他传递给Collapse的属性
 * @returns JSX.Element
 * @example
 * ```tsx
 * <FunctionProps 
 *   data={[
 *     {
 *       name: 'handleClick',
 *       desc: '点击事件处理函数',
 *       modifier: 'public',
 *       params: [
 *         { name: 'event', desc: '事件对象', type: 'MouseEvent', defaultVal: '-', required: true }
 *       ],
 *       returnType: 'void',
 *       returnDesc: '无返回值'
 *     }
 *   ]}
 *   title="函数属性"
 * />
 * ```
 */
const FunctionProps = memo<FunctionProps>((props) => {
  const { data = [], ...restProps } = props;

  return (
    <Collapse {...restProps}>
      <div className={selectorPrefix}>
        <table className={`${selectorPrefix}-inner`}>
          {(data || []).map(({ name, desc, modifier, params, returnType, returnDesc }, _index) => (
            <React.Fragment key={`${_index}`}>
              <tr className={`${selectorPrefix}-item`}>
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
                    <dt className={`${selectorPrefix}-`}>{Intl.get('parameter_description')}：</dt>
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
                                    {Intl.get('type')}
                                    <span className={`${selectorPrefix}-split`}>-</span>
                                    <span className={`${selectorPrefix}-highlight`}>
                                      {param.type || '-'}
                                    </span>
                                  </li>
                                  <li>
                                    {Intl.get('default_value')}
                                    <span className={`${selectorPrefix}-split`}>-</span>
                                    <span className={`${selectorPrefix}-highlight`}>
                                      {param.defaultVal || '-'}
                                    </span>
                                  </li>
                                  <li>
                                    {Intl.get('required')}
                                    <span className={`${selectorPrefix}-split`}>-</span>
                                    <span className={`${selectorPrefix}-highlight`}>
                                      {param.required || false ? Intl.get('yes') : Intl.get('no')}
                                    </span>
                                  </li>
                                </ul>
                              </li>
                            ))}
                          </ul>
                        )}
                      </ConditionalRender>
                    </dd>
                  </dl>
                  <dl>
                    <dt>{Intl.get('return_valueption')}：</dt>
                    <dd>
                      <ul className={`${selectorPrefix}-level1`}>
                        <li>
                          {Intl.get('type')}
                          <span className={`${selectorPrefix}-split`}>-</span>
                          <span className={`${selectorPrefix}-highlight`}>{returnType || '-'}</span>
                        </li>
                        <li>
                          {Intl.get('description')}
                          <span className={`${selectorPrefix}-split`}>-</span>
                          <span className={`${selectorPrefix}-highlight`}>{returnDesc || '-'}</span>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </td>
              </tr>
              <ConditionalRender conditional={_index !== data.length - 1}>
                {() => <div className={`${selectorPrefix}-dividing`} />}
              </ConditionalRender>
            </React.Fragment>
          ))}
        </table>
      </div>
    </Collapse>
  );
});

FunctionProps.displayName = 'FunctionProps';

// /**
//  * FunctionProps
//  * @class FunctionProps
//  * @classdesc FunctionProps
//  */
// class FunctionProps extends React.Component<IFunctionProps> {
//   static propTypes: {
//     data: Requireable<
//       (
//         | (InferPropsInner<
//             Pick<
//               {
//                 modifier: Requireable<string>;
//                 name: Requireable<string>;
//                 params: Requireable<
//                   (
//                     | (InferPropsInner<
//                         Pick<
//                           {
//                             defaultVal: Requireable<string>;
//                             name: Requireable<string>;
//                             type: Requireable<string>;
//                             required: Requireable<
//                               NonNullable<InferType<Requireable<boolean> | Requireable<string>>>
//                             >;
//                             desc: Requireable<string>;
//                           },
//                           never
//                         >
//                       > &
//                         Partial<
//                           InferPropsInner<
//                             Pick<
//                               {
//                                 defaultVal: Requireable<string>;
//                                 name: Requireable<string>;
//                                 type: Requireable<string>;
//                                 required: Requireable<
//                                   NonNullable<InferType<Requireable<boolean> | Requireable<string>>>
//                                 >;
//                                 desc: Requireable<string>;
//                               },
//                               'defaultVal' | 'name' | 'type' | 'required' | 'desc'
//                             >
//                           >
//                         >)
//                     | undefined
//                     | null
//                   )[]
//                 >;
//                 returnDesc: Requireable<string>;
//                 returnType: Requireable<string>;
//                 desc: Requireable<string>;
//               },
//               never
//             >
//           > &
//             Partial<
//               InferPropsInner<
//                 Pick<
//                   {
//                     modifier: Requireable<string>;
//                     name: Requireable<string>;
//                     params: Requireable<
//                       (
//                         | (InferPropsInner<
//                             Pick<
//                               {
//                                 defaultVal: Requireable<string>;
//                                 name: Requireable<string>;
//                                 type: Requireable<string>;
//                                 required: Requireable<
//                                   NonNullable<InferType<Requireable<boolean> | Requireable<string>>>
//                                 >;
//                                 desc: Requireable<string>;
//                               },
//                               never
//                             >
//                           > &
//                             Partial<
//                               InferPropsInner<
//                                 Pick<
//                                   {
//                                     defaultVal: Requireable<string>;
//                                     name: Requireable<string>;
//                                     type: Requireable<string>;
//                                     required: Requireable<
//                                       NonNullable<
//                                         InferType<Requireable<boolean> | Requireable<string>>
//                                       >
//                                     >;
//                                     desc: Requireable<string>;
//                                   },
//                                   'defaultVal' | 'name' | 'type' | 'required' | 'desc'
//                                 >
//                               >
//                             >)
//                         | undefined
//                         | null
//                       )[]
//                     >;
//                     returnDesc: Requireable<string>;
//                     returnType: Requireable<string>;
//                     desc: Requireable<string>;
//                   },
//                   'modifier' | 'name' | 'params' | 'returnDesc' | 'returnType' | 'desc'
//                 >
//               >
//             >)
//         | undefined
//         | null
//       )[]
//     >;
//   };
//
//   static defaultProps: IFunctionProps;
//
//   render() {
//     const { data, ...others } = this.props;
//
//     return (
//       // @ts-ignore*
//       <Collapse {...others}>
//         <div className={selectorPrefix}>
//           <table className={`${selectorPrefix}-inner`}>
//             {data.map(({ name, desc, modifier, params, returnType, returnDesc }, index) => (
//               <>
//                 <tr key={`${index}`} className={`${selectorPrefix}-item`}>
//                   <td valign="top" className={`${selectorPrefix}-item-name`}>
//                     <ConditionalRender conditional={!!modifier}>
//                       {() => (
//                         <span className={`${selectorPrefix}-modifier`}>
//                           {modifier || 'public'} -{' '}
//                         </span>
//                       )}
//                     </ConditionalRender>
//                     <span className={`${selectorPrefix}-functionName`}>
//                       {name}(
//                       <span className={`${selectorPrefix}-highlight`}>
//                         {(params || []).map((t) => t.name).join(' , ')}
//                       </span>
//                       )
//                     </span>
//                   </td>
//                   <td valign="top" className={`${selectorPrefix}-item-info`}>
//                     <div className={`${selectorPrefix}-item-desc`}>{desc}</div>
//                     <dl>
//                       <dt className={`${selectorPrefix}-`}>{Intl.get('parameter_description')}：</dt>
//                       <dd>
//                         <ConditionalRender conditional={!!params && params.length !== 0}>
//                           {() => (
//                             <ul className={`${selectorPrefix}-level1`}>
//                               {params.map((param, index) => (
//                                 <li key={`${index + 1}`}>
//                                   <div style={{ marginBottom: 10 }}>
//                                     <span className={`${selectorPrefix}-highlight`}>
//                                       {param.name}
//                                     </span>{' '}
//                                     - {param.desc || '-'}
//                                   </div>
//                                   <ul
//                                     className={`${selectorPrefix}-level2`}
//                                     style={{ marginBottom: 10 }}
//                                   >
//                                     <li>
//                                       {Intl.get('type')}
//                                       <span className={`${selectorPrefix}-split`}>-</span>
//                                       <span className={`${selectorPrefix}-highlight`}>
//                                         {param.type || '-'}
//                                       </span>
//                                     </li>
//                                     <li>
//                                       {Intl.get('default_value')}
//                                       <span className={`${selectorPrefix}-split`}>-</span>
//                                       <span className={`${selectorPrefix}-highlight`}>
//                                         {param.defaultVal || '-'}
//                                       </span>
//                                     </li>
//                                     <li>
//                                       {Intl.get('required')}
//                                       <span className={`${selectorPrefix}-split`}>-</span>
//                                       <span className={`${selectorPrefix}-highlight`}>
//                                         {param.required || false ? Intl.get('是') : Intl.get('否')}
//                                       </span>
//                                     </li>
//                                     {/*<li>
//                                   {Intl.get('description')}
//                                   <span className={`${selectorPrefix}-split`}>-</span>
//                                   <span className={`${selectorPrefix}-highlight`}>{param.desc || '-'}</span>
//                                 </li>*/}
//                                   </ul>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </ConditionalRender>
//                       </dd>
//                     </dl>
//                     <dl>
//                       <dt>{Intl.get('return_valueption')}：</dt>
//                       <dd>
//                         <ul className={`${selectorPrefix}-level1`}>
//                           <li>
//                             {Intl.get('type')}
//                             <span className={`${selectorPrefix}-split`}>-</span>
//                             <span className={`${selectorPrefix}-highlight`}>
//                               {returnType || '-'}
//                             </span>
//                           </li>
//                           <li>
//                             {Intl.get('description')}
//                             <span className={`${selectorPrefix}-split`}>-</span>
//                             <span className={`${selectorPrefix}-highlight`}>
//                               {returnDesc || '-'}
//                             </span>
//                           </li>
//                         </ul>
//                       </dd>
//                     </dl>
//                   </td>
//                 </tr>
//                 <ConditionalRender conditional={index !== data.length - 1}>
//                   {() => <div className={`${selectorPrefix}-dividing`} />}
//                 </ConditionalRender>
//               </>
//             ))}
//           </table>
//         </div>
//       </Collapse>
//     );
//   }
// }
//
// export const FunctionPropsDefaultProps = {
//   ...Collapse.defaultProps,
//   data: [],
// };
//
// export const FunctionPropsPropTypes = {
//   ...Collapse.propTypes,
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       // 函数名称
//       name: PropTypes.string,
//       // 函数描述
//       desc: PropTypes.string,
//       // 函数修饰符
//       modifier: PropTypes.oneOf(['static', 'public', 'private', 'protected']),
//       // 函数参数
//       params: PropTypes.arrayOf(
//         PropTypes.shape({
//           // 参数名称
//           name: PropTypes.string,
//           // 参数说明
//           desc: PropTypes.string,
//           // 参数类型
//           type: PropTypes.string,
//           // 默认值
//           defaultVal: PropTypes.string,
//           // 是否必填
//           required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//         }),
//       ),
//       // 函数返回值类型
//       returnType: PropTypes.string,
//       // 函数返回值说明
//       returnDesc: PropTypes.string,
//     }),
//   ),
// };
//
// FunctionProps.defaultProps = FunctionPropsDefaultProps;
//
// FunctionProps.propTypes = FunctionPropsPropTypes;

export default FunctionProps;
