import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

import type { SortableElementProps } from '../types';

export default SortableElement<SortableElementProps>(({ children }) => children);
