import React from 'react';

import { SearchListStateImplement } from '../SearchListStateImplement';
import { SearchListImplementState, SearchListStateImplementProps } from '../types';
import GridViewFactory from './GridViewFactory';

/**
 * GridStateView
 * @class
 * @classdesc GridStateView
 */
class GridStateView<
  P extends SearchListStateImplementProps,
  S extends SearchListImplementState,
> extends GridViewFactory<SearchListStateImplementProps, SearchListImplementState>(
  SearchListStateImplement,
) {}

export default GridStateView;
