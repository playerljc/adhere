import React, { memo } from 'react';
import type { FC } from 'react';

import type { FooterBarProps } from '../../types/FooterBarTypes';

const FooterBar: FC<FooterBarProps> = () => <div>FooterBar</div>;

export default memo(FooterBar);
