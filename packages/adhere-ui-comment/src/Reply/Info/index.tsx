import { INodeProps } from '@/types';
import React from 'react';

import Node, { defaultProps, propTypes } from '../../Components/Node';

/**
 * ReplyInfo
 * @param props
 * @constructor
 * @classdesc 回复节点
 */
function ReplyInfo(props: INodeProps) {
  return <Node {...props} isReply />;
}

ReplyInfo.defaultProps = defaultProps;

ReplyInfo.propTypes = propTypes;

export default ReplyInfo;
