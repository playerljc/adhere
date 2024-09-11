import React from 'react';

import { SearchListImplement } from '../SearchListImplement';
import { SearchListImplementProps, SearchListImplementState } from '../types';
import GridViewFactory from './GridViewFactory';

/**
 * GridView
 * @class
 * @classdesc GridView
 */
class GridView<
  P extends SearchListImplementProps,
  S extends SearchListImplementState,
> extends GridViewFactory<SearchListImplementProps, SearchListImplementState>(SearchListImplement) {
  static displayName = 'GridView';
}

export default GridView;
