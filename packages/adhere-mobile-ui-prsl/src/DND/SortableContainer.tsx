import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import type { SortableContainerProps } from '../types';

export default SortableContainer<SortableContainerProps>(({ children }) => children);
