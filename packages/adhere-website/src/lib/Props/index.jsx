// import React from 'react';
// import PropTypes from 'prop-types';
//
// import { Table } from 'antd';
//
// function getColumns() {
//   return [
//     {
//       title: '参数',
//       key: 'params',
//       dataIndex: 'params',
//     },
//     {
//       title: '描述',
//       key: 'desc',
//       dataIndex: 'desc',
//     },
//     {
//       title: '类型',
//       key: 'type',
//       dataIndex: 'type',
//     },
//     {
//       title: '默认值',
//       key: 'defaultVal',
//       dataIndex: 'defaultVal',
//     },
//   ];
// }
//
// /**
//  *
//  * @return {*}
//  * @constructor
//  */
// function Props({ data }) {
//   return <Table columns={getColumns()} dataSource={data} pagination={false} size="small" />;
// }
//
// Props.defaultProps = {
//   data: [],
// };
//
// Props.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       params: PropTypes.string,
//       desc: PropTypes.string,
//       type: PropTypes.string,
//       defaultVal: PropTypes.string,
//     }),
//   ),
// };
//
// export default Props;


import React from 'react';

import { PlayGround } from '@baifendian/adhere';

export default PlayGround.Props;
