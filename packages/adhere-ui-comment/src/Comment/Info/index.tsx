import { INodeProps } from '@/types';
import React from 'react';

import Node, { defaultProps, propTypes } from '../../Components/Node';

function CommentInfo(props: INodeProps) {
  return (
    <Node {...props} isReply={false}>
      {(record) => props?.children?.(record)}
    </Node>
  );
}

CommentInfo.defaultProps = defaultProps;

CommentInfo.propTypes = propTypes;

export default CommentInfo;