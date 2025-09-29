import type { AsyncCascaderViewProps, FilterCascaderViewProps } from '../types';
import { createFactory } from '../util';
import AsyncCascaderView from './AsyncCascaderView';
import CascaderView from './CascaderView';
import FilterCascaderView from './FilterCascaderView';

CascaderView.FilterCascaderView = createFactory<FilterCascaderViewProps>(FilterCascaderView, {});
CascaderView.AsyncCascaderView = createFactory<AsyncCascaderViewProps>(AsyncCascaderView, {});

export default CascaderView;
