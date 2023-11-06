import React, { memo } from 'react';

import Node from '../../Components/Node';
import type { NodeProps } from '../../types';

/**
 * ReplyInfo
 * @param props
 * @constructor
 * @classdesc 回复节点
 */
const ReplyInfo = memo<NodeProps>((props) => <Node {...props} isReply />);

export default ReplyInfo;
