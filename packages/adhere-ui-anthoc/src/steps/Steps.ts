import { Steps } from 'antd';
import type { StepsProps } from 'antd';

import type { StepsHOCComponent } from '../types';
import { createFactory } from '../util';

const StepsHOC: StepsHOCComponent = createFactory<StepsProps>(Steps, {});

StepsHOC.displayName = 'Steps';

export default StepsHOC;
