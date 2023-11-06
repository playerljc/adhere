import React, { memo } from 'react';

import CodeBoxPanel from '../CodeBoxPanel';
import type { CodeBoxProps } from '../types';

/**
 * CodeBoxSection
 * @param props
 * @constructor
 */
const CodeBoxSection = memo<CodeBoxProps>((props) => <CodeBoxPanel {...props} />);

export default CodeBoxSection;
