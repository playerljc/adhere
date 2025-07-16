import React, { memo, useMemo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Collapse from './Collapse';
import Table from './Table';
import { PropsProps } from './types';

const selectPrefix = 'adhere-ui-playground-props';

const Props = memo<PropsProps>((props) => {
  const { data = [], children, ...restProps } = props;

  const columns = useMemo(
    () => [
      {
        title: Intl.get('parameter'),
        key: 'params',
        dataIndex: 'params',
        width: '20%',
      },
      {
        title: Intl.get('description'),
        key: 'desc',
        dataIndex: 'desc',
        width: '50%',
      },
      {
        title: Intl.get('type'),
        key: 'type',
        dataIndex: 'type',
        width: '15%',
        render: (value) => <code className={`${selectPrefix}-highlight`}>{value}</code>,
      },
      {
        title: Intl.get('default_value'),
        key: 'defaultVal',
        dataIndex: 'defaultVal',
        width: '15%',
        render: (value) => <code>{value ? value : '-'}</code>,
      },
    ],
    [],
  );

  return (
    <Collapse {...restProps}>
      <div className={selectPrefix}>
        <Table
          columns={columns}
          dataSource={(data || []).map((t, i) => ({ ...t, id: `${i + 1}` }))}
          rowKey="id"
        />
      </div>
    </Collapse>
  );
});

Props.displayName = 'Props';
// /**
//  * Props
//  * @class Props
//  * @classdesc Props
//  */
// // @ts-ignore
// class Props extends React.Component<IPropsProps, any> {
//   static propTypes: {
//     data: Requireable<
//       (
//         | (InferPropsInner<
//             Pick<
//               {
//                 defaultVal: Requireable<
//                   NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>
//                 >;
//                 params: Requireable<
//                   NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>
//                 >;
//                 type: Requireable<
//                   NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>
//                 >;
//                 desc: Requireable<
//                   NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>
//                 >;
//               },
//               never
//             >
//           > &
//             Partial<
//               InferPropsInner<
//                 Pick<
//                   {
//                     defaultVal: Requireable<
//                       NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>
//                     >;
//                     params: Requireable<
//                       NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>
//                     >;
//                     type: Requireable<
//                       NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>
//                     >;
//                     desc: Requireable<
//                       NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>
//                     >;
//                   },
//                   'defaultVal' | 'params' | 'type' | 'desc'
//                 >
//               >
//             >)
//         | undefined
//         | null
//       )[]
//     >;
//   };
//
//   static defaultProps: IPropsProps;
//
//   protected getColumns() {
//     return [
//       {
//         title: Intl.get('parameter'),
//         key: 'params',
//         dataIndex: 'params',
//         width: '20%',
//       },
//       {
//         title: Intl.get('description'),
//         key: 'desc',
//         dataIndex: 'desc',
//         width: '50%',
//       },
//       {
//         title: Intl.get('type'),
//         key: 'type',
//         dataIndex: 'type',
//         width: '15%',
//         render: (value) => <code className={`${selectPrefix}-highlight`}>{value}</code>,
//       },
//       {
//         title: Intl.get('default_value'),
//         key: 'defaultVal',
//         dataIndex: 'defaultVal',
//         width: '15%',
//         render: (value) => <code>{value ? value : '-'}</code>,
//       },
//     ];
//   }
//
//   protected render() {
//     const { data, ...others } = this.props;
//
//     return (
//       // @ts-ignore
//       <Collapse {...others}>
//         <div className={selectPrefix}>
//           {/*@ts-ignore*/}
//           <Table
//             // @ts-ignore*
//             columns={this.getColumns()}
//             dataSource={this.props.data.map((t, i) => ({ ...t, id: `${i + 1}` }))}
//             rowKey="id"
//           />
//         </div>
//       </Collapse>
//     );
//   }
// }
//
// export const PropsDefaultProps = {
//   ...Collapse.defaultProps,
//   data: [],
// };
//
// // @ts-ignore
// export const PropsPropTypes = {
//   ...Collapse.propTypes,
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       params: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//       desc: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//       type: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//       defaultVal: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//     }),
//   ),
// };
//
// Props.defaultProps = PropsDefaultProps;
//
// Props.propTypes = PropsPropTypes;

export default Props;
