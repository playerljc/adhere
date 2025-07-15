import React, { memo } from 'react';

import CodeBoxPanel from '../CodeBoxPanel';
import type { CodeBoxProps } from '../types';

/**
 * 代码盒子区块组件
 * @component CodeBoxSection
 * @description 用于展示代码盒子的区块组件
 * @param props - 组件属性
 * @returns JSX.Element
 */
const CodeBoxSection = memo<CodeBoxProps>((props) => <CodeBoxPanel {...props} />);

CodeBoxSection.displayName = 'CodeBoxSection';

export default CodeBoxSection;
