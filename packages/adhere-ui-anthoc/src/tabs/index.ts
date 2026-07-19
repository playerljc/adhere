import type { SegmentedTabsProps } from '../types';
import { createFactory } from '../util';
import SegmentedTabs from './SegmentedTabs';
import Tabs from './Tabs';

Tabs.SegmentedTabs = createFactory<SegmentedTabsProps>(SegmentedTabs, {});

export default Tabs;
