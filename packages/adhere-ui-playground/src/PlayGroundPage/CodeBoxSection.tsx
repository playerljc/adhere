import React, { FC, memo } from 'react';

import CodeBoxPanel from '../CodeBoxPanel';
import { CodeBoxProps } from '../types';

/**
 * CodeBoxSection
 * @param props
 * @constructor
 */
const CodeBoxSection: FC<CodeBoxProps> = (props) => <CodeBoxPanel {...props} />;

export default memo(CodeBoxSection);
